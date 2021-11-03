/*
 * Copyright 2012 The Netty Project
 *
 * The Netty Project licenses this file to you under the Apache License,
 * version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
package com.ebay.dss.zds.transport.file.http;

import io.netty.bootstrap.Bootstrap;
import io.netty.channel.Channel;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.nio.NioSocketChannel;
import io.netty.handler.codec.http.*;
import io.netty.handler.codec.http.cookie.ClientCookieEncoder;
import io.netty.handler.codec.http.cookie.DefaultCookie;
import io.netty.handler.codec.http.multipart.*;
import io.netty.handler.ssl.SslContext;
import io.netty.handler.ssl.SslContextBuilder;
import io.netty.handler.ssl.util.InsecureTrustManagerFactory;
import io.netty.util.internal.SocketUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.FileNotFoundException;
import java.net.URI;
import java.util.List;
import java.util.Map.Entry;
import java.util.Optional;
import java.util.Properties;


public final class HttpUploadClient {

    private final static Logger logger = LoggerFactory.getLogger(HttpUploadClient.class);

    //static final String BASE_URL = System.getProperty("baseUrl", "http://127.0.0.1:8080/");
    //static final String FILE = System.getProperty("file", "upload.txt");
    private String base_url;
    private String src_file;
    private Properties prop;
    private ExceptionObserver exceptionObserver;

    public HttpUploadClient(Properties prop) {
        this.base_url = prop.getProperty("base_url");
        assert !StringUtils.isEmpty(base_url);
        this.src_file = prop.getProperty("src_file");
        assert !StringUtils.isEmpty(src_file);
        this.prop = prop;
        this.exceptionObserver = new ExceptionObserver.SimpleExceptionObserver();
    }

    public void upload() throws Exception {
        upload(2);
    }

    public void upload(int threadNum) throws Exception {
        String postSimple, postFile, get;
        if (base_url.endsWith("/")) {
            postSimple = base_url + "formpost";
            postFile = base_url + "formpostmultipart";
            get = base_url + "formget";
        } else {
            postSimple = base_url + "/formpost";
            postFile = base_url + "/formpostmultipart";
            get = base_url + "/formget";
        }

        URI uriSimple = new URI(postSimple);
        String scheme = uriSimple.getScheme() == null? "http" : uriSimple.getScheme();
        String host = uriSimple.getHost() == null? "127.0.0.1" : uriSimple.getHost();
        int port = uriSimple.getPort();
        if (port == -1) {
            if ("http".equalsIgnoreCase(scheme)) {
                port = 80;
            } else if ("https".equalsIgnoreCase(scheme)) {
                port = 443;
            }
        }

        if (!"http".equalsIgnoreCase(scheme) && !"https".equalsIgnoreCase(scheme)) {
            logger.error("Only HTTP(S) is supported.");
            return;
        }

        final boolean ssl = "https".equalsIgnoreCase(scheme);
        final SslContext sslCtx;
        if (ssl) {
            sslCtx = SslContextBuilder.forClient()
                .trustManager(InsecureTrustManagerFactory.INSTANCE).build();
        } else {
            sslCtx = null;
        }

        URI uriFile = new URI(postFile);
        File file = new File(src_file);
        if (!file.canRead()) {
            throw new FileNotFoundException(src_file);
        }

        // Configure the client.
        EventLoopGroup group = new NioEventLoopGroup(threadNum);

        // setup the factory: here using a mixed memory/disk based on size threshold
        HttpDataFactory factory = new DefaultHttpDataFactory(DefaultHttpDataFactory.MINSIZE); // Disk if MINSIZE exceed

        DiskFileUpload.deleteOnExitTemporaryFile = true; // should delete file on exit (in normal exit)
        DiskFileUpload.baseDirectory = null; // system temp directory
        DiskAttribute.deleteOnExitTemporaryFile = true; // should delete file on exit (in normal exit)
        DiskAttribute.baseDirectory = null; // system temp directory

        try {
            Bootstrap b = new Bootstrap();
            b.group(group)
                    .channel(NioSocketChannel.class)
                    .handler(new HttpUploadClientInitializer(sslCtx, exceptionObserver));

            // Simple Get form: no factory used (not usable)
            List<Entry<String, String>> headers = formget(b, host, port, get, uriSimple, prop);
            if (headers == null) {
                factory.cleanAllHttpData();
                return;
            }

            // Simple Post form: factory used for big attributes
            List<InterfaceHttpData> bodylist = formpost(b, host, port, uriSimple, file, factory, headers, prop);
            if (bodylist == null) {
                factory.cleanAllHttpData();
                return;
            }

            // Multipart Post form: factory used
            formpostmultipart(b, host, port, uriFile, factory, headers, bodylist);
        } finally {
            // Shut down executor threads to exit.
            group.shutdownGracefully();

            // Really clean all temporary files if they still exist
            factory.cleanAllHttpData();
        }
    }

    private void checkIfHasError() throws Exception {
        if (exceptionObserver.getObserved().isPresent()) {
            throw new Exception(exceptionObserver.getObserved().get().getMessage());
        }
    }

    /**
     * Standard usage of HTTP API in Netty without file Upload (get is not able to achieve File upload
     * due to limitation on request size).
     *
     * @return the list of headers that will be used in every example after
     **/
    private List<Entry<String, String>> formget(
            Bootstrap bootstrap, String host, int port, String get, URI uriSimple, Properties prop) throws Exception {
        // XXX /formget
        // No use of HttpPostRequestEncoder since not a POST
        Channel channel = bootstrap.connect(host, port).sync().channel();

        // Prepare the HTTP request.
        QueryStringEncoder encoder = new QueryStringEncoder(get);
        // add Form attribute
        encoder.addParam("getform", "GET");
        encoder.addParam("Send", "Send");

        URI uriGet = new URI(encoder.toString());
        HttpRequest request = new DefaultHttpRequest(HttpVersion.HTTP_1_1, HttpMethod.GET, uriGet.toASCIIString());
        HttpHeaders headers = request.headers();
        headers.set(HttpHeaderNames.HOST, host);
        headers.set(HttpHeaderNames.CONNECTION, HttpHeaderValues.CLOSE);
        headers.set(HttpHeaderNames.ACCEPT_ENCODING, HttpHeaderValues.GZIP + "," + HttpHeaderValues.DEFLATE);

        headers.set(HttpHeaderNames.ACCEPT_CHARSET, "ISO-8859-1,utf-8;q=0.7,*;q=0.7");
        headers.set(HttpHeaderNames.ACCEPT_LANGUAGE, "fr");
        headers.set(HttpHeaderNames.REFERER, uriSimple.toString());
        headers.set(HttpHeaderNames.USER_AGENT, "Zeta Http Client side");
        headers.set(HttpHeaderNames.ACCEPT, "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");

        //connection will not close but needed
        // headers.set("Connection","keep-alive");
        // headers.set("Keep-Alive","300");

        headers.set(
                HttpHeaderNames.COOKIE, ClientCookieEncoder.STRICT.encode(
                        new DefaultCookie("my-cookie", "foo"),
                        new DefaultCookie("another-cookie", "bar"))
        );

        prop.keySet().forEach(key -> headers.set(key.toString(), prop.get(key).toString()));

        // send request
        channel.writeAndFlush(request);

        // Wait for the server to close the connection.
        channel.closeFuture().sync();

        checkIfHasError();

        // convert headers to list
        return headers.entries();
    }

    /**
     * Standard post without multipart but already support on Factory (memory management)
     *
     * @return the list of HttpData object (attribute and file) to be reused on next post
     */
    private List<InterfaceHttpData> formpost(
            Bootstrap bootstrap,
            String host, int port, URI uriSimple, File file, HttpDataFactory factory,
            List<Entry<String, String>> headers,
            Properties prop) throws Exception {
        // XXX /formpost
        // Start the connection attempt.
        ChannelFuture future = bootstrap.connect(SocketUtils.socketAddress(host, port));
        // Wait until the connection attempt succeeds or fails.
        Channel channel = future.sync().channel();

        // Prepare the HTTP request.
        HttpRequest request = new DefaultHttpRequest(HttpVersion.HTTP_1_1, HttpMethod.POST, uriSimple.toASCIIString());

        // Use the PostBody encoder
        HttpPostRequestEncoder bodyRequestEncoder =
                new HttpPostRequestEncoder(factory, request, false);  // false => not multipart

        // it is legal to add directly header or cookie into the request until finalize
        for (Entry<String, String> entry : headers) {
            request.headers().set(entry.getKey(), entry.getValue());
        }

        // add Form attribute
        bodyRequestEncoder.addBodyAttribute("getform", "POST");
        // put the context here
        prop.keySet().forEach(key -> {
            try {
                bodyRequestEncoder.addBodyAttribute(key.toString(), prop.get(key).toString());
            } catch (HttpPostRequestEncoder.ErrorDataEncoderException ex) {
                logger.error(ex.toString());
            }
        });
        bodyRequestEncoder.addBodyFileUpload("fileUpload", file, "application/x-zip-compressed", false);

        // finalize request
        request = bodyRequestEncoder.finalizeRequest();

        // Create the bodylist to be reused on the last version with Multipart support
        List<InterfaceHttpData> bodylist = bodyRequestEncoder.getBodyListAttributes();

        // send request
        channel.write(request);

        // test if request was chunked and if so, finish the write
        if (bodyRequestEncoder.isChunked()) { // could do either request.isChunked()
            // either do it through ChunkedWriteHandler
            channel.write(bodyRequestEncoder);
        }
        channel.flush();

        // Do not clear here since we will reuse the InterfaceHttpData on the next request
        // for the example (limit action on client side). Take this as a broadcast of the same
        // request on both Post actions.
        //
        // On standard program, it is clearly recommended to clean all files after each request
        // bodyRequestEncoder.cleanFiles();

        // Wait for the server to close the connection.
        channel.closeFuture().sync();

        checkIfHasError();

        return bodylist;
    }

    /**
     * Multipart example
     */
    private void formpostmultipart(
            Bootstrap bootstrap, String host, int port, URI uriFile, HttpDataFactory factory,
            Iterable<Entry<String, String>> headers, List<InterfaceHttpData> bodylist) throws Exception {
        // XXX /formpostmultipart
        // Start the connection attempt.
        ChannelFuture future = bootstrap.connect(SocketUtils.socketAddress(host, port));
        // Wait until the connection attempt succeeds or fails.
        Channel channel = future.sync().channel();

        // Prepare the HTTP request.
        HttpRequest request = new DefaultHttpRequest(HttpVersion.HTTP_1_1, HttpMethod.POST, uriFile.toASCIIString());

        // Use the PostBody encoder
        HttpPostRequestEncoder bodyRequestEncoder =
                new HttpPostRequestEncoder(factory, request, true); // true => multipart

        // it is legal to add directly header or cookie into the request until finalize
        for (Entry<String, String> entry : headers) {
            request.headers().set(entry.getKey(), entry.getValue());
        }

        // add Form attribute from previous request in formpost()
        bodyRequestEncoder.setBodyHttpDatas(bodylist);

        // finalize request
        bodyRequestEncoder.finalizeRequest();

        // send request
        channel.write(request);

        // test if request was chunked and if so, finish the write
        if (bodyRequestEncoder.isChunked()) {
            channel.write(bodyRequestEncoder);
        }
        channel.flush();

        // Now no more use of file representation (and list of HttpData)
        bodyRequestEncoder.cleanFiles();

        // Wait for the server to close the connection.
        channel.closeFuture().sync();

        checkIfHasError();
    }

    public void setExceptionObserver(ExceptionObserver exceptionObserver) {
        this.exceptionObserver = exceptionObserver;
    }
}
