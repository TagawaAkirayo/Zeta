// convert sql
// CVT_**
export const CVT_SRC_AJAX_LOADING = 'CVT_SRC_AJAX_LOADING';
export const CVT_SRC_AJAX_FINISH = 'CVT_SRC_AJAX_FINISH';
export const CVT_SRC_AJAX_FAILED = 'CVT_SRC_AJAX_FAILED';

export const CVT_SET_SPARK_SQL_DATA = 'CVT_SET_SPARK_SQL_DATA';
export const CVT_CLEAR_SPARK_SQL_DATA = 'CVT_CLEAR_SPARK_SQL_DATA';
export const CVT_SPARK_SQL_AJAX_LOADING = 'CVT_SPARK_SQL_AJAX_LOADING';
export const CVT_SPARK_SQL_AJAX_FINISH = 'CVT_SPARK_SQL_AJAX_FINISH';
export const CVT_SPARK_SQL_AJAX_FAILED = 'CVT_SPARK_SQL_AJAX_FAILED';

export const CVT_OUTPUT_AJAX_LOADING = 'CVT_OUTPUT_AJAX_LOADING';
export const CVT_OUTPUT_AJAX_FINISH = 'CVT_OUTPUT_AJAX_FINISH';
export const CVT_OUTPUT_AJAX_FAILED = 'CVT_OUTPUT_AJAX_FAILED';
export const CVT_SET_OUTPUT_FILE_LIST = 'CVT_SET_OUTPUT_FILE_LIST';
export const CVT_SET_OUTPUT_DDL_LIST = 'CVT_SET_OUTPUT_DDL_LIST';
export const CVT_CLEAR_OUTPUT_FILE_LIST = 'CVT_CLEAR_OUTPUT_FILE_LIST';
export const CVT_CLEAR_OUTPUT_DDL_LIST = 'CVT_CLEAR_OUTPUT_DDL_LIST';

export const CVT_SET_SRC_TABLE_LIST = 'CVT_SET_SRC_TABLE_LIST';
export const CVT_CLEAR_SRC_TABLE_LIST = 'CVT_CLEAR_SRC_TABLE_LIST';
export const CVT_SET_SELECT_TARGET = 'CVT_SET_SELECT_TARGET';
export const CVT_SET_SELECT_ALL_TARGET = 'CVT_SET_SELECT_ALL_TARGET';
export const CVT_UNSELECT_SRC_TABLE = 'CVT_UNSELECT_SRC_TABLE';

// Data Move
// DM_
export const DM_HISTORY_AJAX_LOADING = 'DM_HISTORY_AJAX_LOADING';
export const DM_HISTORY_AJAX_FINISH = 'DM_HISTORY_AJAX_FINISH';
export const DM_ACTION_REDO = 'DM_ACTION_REDO';

export const DM_SRC_COL_AJAX_LOADING = 'DM_SRC_COL_AJAX_LOADING';
export const DM_SRC_COL_AJAX_FINISH = 'DM_SRC_COL_AJAX_FINISH';

// Data Validation
// DV_
export const DV_HISTORY_AJAX_LOADING = 'DV_HISTORY_AJAX_LOADING';
export const DV_HISTORY_AJAX_FINISH = 'DV_HISTORY_AJAX_FINISH';

// User
export const USR_PRFL_AJAX_LOADING = 'USR_PRFL_AJAX_LOADING';
export const USR_PRFL_AJAX_FINISH = 'USR_PRFL_AJAX_FINISH';
export const USR_SET_USR_PROFILE = 'USR_SET_USR_PROFILE';
export const USR_SET_USR_INFO = 'USR_SET_USR_INFO';
export const USR_SET_USR_PERSONAL_PREFERENCE = 'USR_SET_USR_PERSONAL_PREFERENCE';
export const USR_SET_BATCH_ACCT = 'USR_SET_BATCH_ACCT';
export const USR_SET_CLUSTER_OPTN = 'USR_SET_CLUSTER_OPTN';
export const USR_SET_BDP_MSG = 'USR_SET_BDP_MSG';
export const USR_WINPASS_VALID = 'USR_WINPASS_VALID';
export const USR_KYLINPASS = 'USR_KYLINPASS';
export const USR_SET_KYLIN_PJCT = 'USR_SET_KYLIN_PJCT';
export const USR_DATABASE = 'USR_DATABASE';
export const USR_DATABASEVISIBLE = 'USR_DATABASEVISIBLE';
export const USR_SET_OTHER_USER = 'USR_SET_OTHER_USER';
export const USR_SET_ACE_ADMIN = 'USR_SET_ACE_ADMIN';
// Notebook mutations
// NB_**
export const NB_CLOSE_NB = 'NB_CLOSE_NB';
export const NB_SET_ACTIVE_NB = 'NB_SET_ACTIVE_NB';
export const NB_SET_ACTIVE_JOB = 'NB_SET_ACTIVE_JOB';
export const NB_SET_ACITVE_QUERY = 'NB_SET_ACTIVE_QUERY';
export const NB_SET_NB_TEXT = 'NB_SET_NB_TEXT';
export const NB_SET_NB_STATUS = 'NB_SET_NB_STATUS';
export const NB_SET_SUB_NB_STATUS = 'NB_SET_SUB_NB_STATUS';
export const NB_SET_JOB_STATUS = 'NB_SET_JOB_STATUS';
export const NB_ADD_JOB = 'NB_ADD_JOB';
export const NB_ADD_JOB_TO_NOTEBOOK = 'NB_ADD_JOB_TO_NOTEBOOK';
export const NB_ADD_QUERIES = 'NB_ADD_QUERIES';
export const NB_INIT_QUERIES = 'NB_INIT_QUERIES';
export const NB_SET_QUERY_RESULT = 'NB_ADD_QUERY_RESULT';
export const NB_SET_QUERY_STATUS = 'NB_SET_QUERY_STATUS';
export const NB_SET_QUERY_PROGRESS = 'NB_SET_QUERY_PROGRESS';
export const NB_CLOSE_JOB = 'NB_CLOSE_JOB';
export const NB_SET_STAGED_CODE = 'NB_SET_STAGED_CODE';
export const NB_ADD_NB = 'NB_ADD_NB';
export const NB_UPDATE_NB = 'NB_UPDATE_NB';
export const NB_UPDATE_NB_VARIABLES = 'NB_UPDATE_NB_VARIABLES';
export const NB_UPDATE_NB_LAYOUT = 'NB_UPDATE_NB_LAYOUT';
export const NB_CRT_SUB_NB = 'NB_CRT_SUB_NB';
export const NB_UDT_SUB_NB = 'NB_UDT_SUB_NB';
export const NB_DEL_SUB_NB = 'NB_DEL_SUB_NB';
export const NB_ADD_WS = 'NB_ADD_WS';
export const NB_INIT_WS = 'NB_INIT_WS';
export const NB_INIT_WS_LEFT = 'NB_INIT_WS_LEFT';
export const NB_UPDATE_WS = 'NB_UPDATE_WS';
export const NB_SET_RESULT_UPDATED_TRUE_WHEN_INACTIVE =
	'NB_SET_RESULT_UPDATED_TRUE_WHEN_INACTIVE';
export const NB_SET_RESULT_UPDATED_FALSE_WHEN_ACTIVE =
	'NB_SET_RESULT_UPDATED_FALSE_WHEN_ACTIVE';
export const NB_SET_RESULT_PANEL_HEIGHT = 'NB_SET_RESULT_PANEL_HEIGHT';

export const NB_SET_CNN_INFO = 'NB_SET_CNN_INFO';

export const NB_SET_CONNECT_PROGRESS = 'NB_SET_CONNECT_PROGRESS';

export const NB_SET_UPRATIO = 'NB_SET_UPRATIO';
export const NB_SET_PACKAGES = 'NB_SET_PACKAGES';
export const NB_UPDATE_METASHEET = 'NB_UPDATE_METASHEET';

export const NB_JOB_ONSUCCESS = 'NB_JOB_ONSUCCESS';
export const NB_JOB_ONERROR = 'NB_JOB_ONERROR';

export const NB_QUERY_START = 'NB_QUERY_START';
export const NB_QUERY_ONSUCCESS = 'NB_QUERY_ONSUCCESS';
export const NB_QUERY_ONERROR = 'NB_QUERY_ONERROR';
export const NB_QUERY_PROGRESS = 'NB_QUERY_PROGRESS';
export const NB_QUERY_CANCELED = 'NB_QUERY_CANCELED';
// Repository mutations
// REPO_**
export const REPO_SET_FILE_SELECTED = 'REPO_SET_FILE_SELECTED';
export const REPO_SET_FILE_SELECTED_BY_FOLDER = 'REPO_SET_FILE_SELECTED_BY_FOLDER';
export const REPO_ADD_FILE = 'REPO_ADD_FILE';
export const REPO_DELETE_FILE = 'REPO_DELETE_FILE';
export const REPO_UPDATE_FILE = 'REPO_UPDATE_FILE';
// add by tianrsun
export const REPO_ADD_FILES = 'REPO_ADD_FILES';
export const REPO_INIT_FILES = 'REPO_INIT_FILES';
export const REPO_SET_FAVORITE_NOTE = 'REPO_SET_FAVORITE_NOTE';
export const REPO_SET_UNFAVORITE_NOTE = 'REPO_SET_UNFAVORITE_NOTE';
// add by qiczhong
export const REPO_UPDATE_FILE_LAST_RUN = 'REPO_UPDATE_FILE_LAST_RUN';

//DOE Service key mutations
//DOE_**
export const DOE_SEARCH_AJAX_LAODING = 'DOE_SEARCH_AJAX_LAODING';
export const DOE_SEARCH_AJAX_FINISH = 'DOE_SEARCH_AJAX_FINISH';
export const DOE_SEARCH_TYPEHEAD = 'DOE_SEARCH_TYPEHEAD';
export const DOE_SEARCH_KEYWORDS = 'DOE_SEARCH_KEYWORDS';

// Notification
export const NTFY_SET = 'NTFY_SET';
export const NTFY_ADD = 'NTFY_ADD';
export const NTFY_DEL = 'NTFY_DEL';
export const NTFY_SET_ACK = 'NTFY_SET_ACK';
export const NTFY_ADD_ACK = 'NTFY_ADD_ACK';
export const NTFY_PUBLISHLIST = 'NTFY_PUBLISHLIST';
export const NTFY_LOADING = 'NTFY_LOADING';
//ZetaAce notification
export const ACE_VISIBLE = 'ACE_VISIBLE';
export const SET_ACE_QUESTION = 'SET_ACE_QUESTION';
export const FAQ_INIT = 'FAQ_INIT';
export const UPDATE_FAQ = 'UPDATE_FAQ';
export const ADD_FAQ = 'ADD_FAQ';
export const DELETE_FAQ = 'DELETE_FAQ';
export const FAQ_SCROLLTOP = 'FAQ_SCROLLTOP';

export const INIT_TAGS = 'INIT_TAGS';
export const ADD_TAG = 'ADD_TAG';

// Dashboard
export const DB_INIT = 'DB_INIT';
export const DB_ADD = 'DB_ADD';
export const DB_UPDATE_INFO = 'DB_UPDATE_INFO';
export const DB_OPEN = 'DB_OPEN';

//Package
export const PG_INIT = 'PG_INIT';
export const PG_ADD = 'PG_ADD';
export const PG_UPDATE_PACKAGE = 'PG_UPDATE_PACKAGE';
export const PG_DELETE_PACKAGE = 'PG_DELETE_PACKAGE';
export const PG_UPDATE_PROGRESS = 'PG_UPDATE_PROGRESS';
export const PG_UPDATE_FOLDER = 'PG_UPDATE_FOLDER';
export const PG_UPDATE_CLUSTER = 'PG_UPDATE_CLUSTER';

// Schedule
export const SCHE_INIT_LIST = 'SCHE_INIT_LIST';
export const SCHE_INIT_RUN_LIST = 'SCHE_INIT_RUN_LIST';
export const SCHE_INIT_WATCH_LIST = 'SCHE_INIT_WATCH_LIST';
export const SCHE_UPDATE = 'SCHE_UPDATE';
export const SCHE_TASK_DEL = 'SCHE_TASK_DEL';
export const SCHE_UPDATE_AUTH = 'SCHE_UPDATE_AUTH';
// Release
export const SET_SA = 'SET_SA';
export const SET_RELEASE_FILE = 'SET_RELEASE_FILE';
export const SET_PUSH_TO_FILE = 'SET_PUSH_TO_FILE';
export const SET_PRODUCT_OPTIONS = 'SET_PRODUCT_OPTIONS';
export const SET_BRANCH_OPTIONS = 'SET_BRANCH_OPTIONS';
export const SET_GITHUB_PUSH_STATUS = 'SET_GITHUB_PUSH_STATUS';
export const SET_RELEASE_SUBMIT_LOADING = 'SET_RELEASE_SUBMIT_LOADING';
export const SET_VALIDATE_JIRA = 'SET_VALIDATE_JIRA';
export const SET_JIRA_STATUS = 'SET_JIRA_STATUS';
export const SET_IFRAME_IDX = 'SET_IFRAME_IDX';
export const SET_EXEC_TASK = 'SET_EXEC_TASK';
export const SET_SEND_MANIFEST_VALIDATE_STATUS = 'SET_SEND_MANIFEST_VALIDATE_STATUS';
export const SET_COMMIT_DATA = 'SET_COMMIT_DATA';
export const SET_ROLLOUT_STATUS = 'SET_ROLLOUT_STATUS';
export const SET_EXEC_TASK_STATUS = 'SET_EXEC_TASK_STATUS';

//MetaData
export const SET_METADATA_SEARCH = 'SET_METADATA_SEARCH';
export const SET_METADATA_RELOAD = 'SET_METADATA_RELOAD';
export const SET_REGISTER_STEP_ONE = 'SET_REGISTER_STEP_ONE';
export const SET_REGISTER_STEP_TWO = 'SET_REGISTER_STEP_TWO';
export const SET_REGISTER_STEP_THREE = 'SET_REGISTER_STEP_THREE';
export const SET_UPDATE_COLUMNS = 'SET_UPDATE_COLUMNS';
export const SET_ALL_PLATFORM = 'SET_ALL_PLATFORM';
export const SET_SMART_QUERY_ARR = 'SET_SMART_QUERY_ARR';
export const SET_SEARCH_TABLES_ARR = 'SET_SEARCH_TABLES_ARR';
export const SET_BROWSE_ROUTE = 'SET_BROWSE_ROUTE';
export const SET_BROWSE_SEARCH_ROUTE = 'SET_BROWSE_SEARCH_ROUTE';
export const SET_TABLE_MANAGEMENT_ROUTE = 'SET_TABLE_MANAGEMENT_ROUTE';
export const SET_UDF_LIST = 'SET_UDF_LIST';
export const SET_UDF = 'SET_UDF';
export const SET_TEAM_LIST = 'SET_TEAM_LIST';
export const SET_SA_LIST = 'SET_SA_LIST';
export const SET_SA_DETAIL = 'SET_SA_DETAIL';

// Exception
export const EXC_ADD_EXCEPTION = 'EXC_ADD_EXCEPTION';
export const EXC_READ_EXCEPTION = 'EXC_READ_EXCEPTION';

// Public notebook
export const PUB_NOTE_INIT = '';

// meta sheets
export const MS_INIT_METASHEETS = 'MS_INIT_METASHEETS';
export const MS_UPDATE_METASHEET_AUTH = 'MS_UPDATE_METASHEET_AUTH';
export const MS_UPDATE_METASHEET= 'MS_UPDATE_METASHEET';
export const MS_DELETE_METASHEET = 'MS_DELETE_METASHEET';

// Auto complete
export const SET_TABLES = 'SET_TABLES';
export const SET_COLUMNS = 'SET_COLUMNS';
export const SET_TABLES_NOCACHE = 'SET_TABLES_NOCACHE';
export const SET_COLUMNS_NOCACHE = 'SET_COLUMNS_NOCACHE';