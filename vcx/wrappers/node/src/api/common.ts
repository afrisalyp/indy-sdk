export enum VCXCode {
    SUCCESS = 0,
    INDY_WALLET_RECORD_NOT_FOUND = 212,
    INDY_DUPLICATE_WALLET_RECORD = 213,
    UNKNOWN_ERROR = 1001,
    CONNECTION_ERROR = 1002,
    INVALID_CONNECTION_HANDLE = 1003,
    INVALID_CONFIGURATION = 1004,
    NOT_READY = 1005,
    NO_ENDPOINT = 1006,
    INVALID_OPTION = 1007,
    INVALID_DID = 1008,
    INVALID_VERKEY = 1009,
    POST_MSG_FAILURE = 1010,
    INVALID_NONCE = 1011,
    INVALID_KEY_DELEGATE = 1012,
    INVALID_URL = 1013,
    NOT_BASE58 = 1014,
    INVALID_ISSUER_CREDENTIAL_HANDLE = 1015,
    INVALID_JSON = 1016,
    INVALID_PROOF_HANDLE = 1017,
    INVALID_CREDENTIAL_REQUEST = 1018,
    INVALID_MESSAGE_PACK = 1019,
    INVALID_MESSAGES = 1020,
    INVALID_ATTRIBUTES_STRUCTURE = 1021,
    BIG_NUMBER_ERROR = 1022,
    INVALID_PROOF = 1023,
    INVALID_GENESIS_TXN_PATH = 1024,
    CREATE_POOL_CONFIG_PARAMETERS = 1025,
    CREATE_POOL_CONIFG = 1026,
    INVALID_PROOF_CREDENTIAL_DATA = 1027,
    INDY_SUBMIT_REQUEST_ERROR = 1028,
    BUILD_CREDENTIAL_DEF_REQ_ERR = 1029,
    NO_POOL_OPEN = 1030,
    INVALID_SCHEMA = 1031,
    FAILED_POOL_COMPLIANCE = 1032,
    INVALID_HTTP_RESPONSE = 1033,
    CREATE_CREDENTIAL_DEF_ERR = 1034,
    UNKNOWN_LIBINDY_ERROR = 1035,
    INVALID_CREDENTIAL_DEF = 1036,
    INVALID_CREDENTIAL_DEF_HANDLE = 1037,
    TIMEOUT_LIBINDY_ERROR = 1038,
    CREDENTIAL_DEF_ALREADY_CREATED = 1039,
    INVALID_SCHEMA_SEQUENCE_NUMBER = 1040,
    INVALID_SCHEMA_CREATION = 1041,
    INVALID_SCHEMA_HANDLE = 1042,
    INVALID_MASTER_SECRET = 1043,
    ALREADY_INITIALIZED = 1044,
    INVALID_INVITE_DETAILS = 1045,
    INVALID_SELF_ATTESTED_VAL = 1046,
    INVALID_PREDICATE = 1047,
    INVALID_OBJ_HANDLE = 1048,
    INVALID_DISCLOSED_PROOF_HANDLE = 1049,
    SERIALIZATION_ERROR = 1050,
    WALLET_ALREADY_EXISTS = 1051,
    WALLET_ALREADY_OPEN = 1052,
    INVALID_CREDENTIAL_HANDLE = 1053,
    INVALID_CREDENTIAL_JSON = 1054,
    CREATE_CREDENTIAL_FAILED = 1055,
    CREATE_PROOF_ERROR = 1056,
    INVALID_WALLET_HANDLE = 1057,
    INVALID_WALLET_CREATION = 1058,
    INVALID_POOL_NAME = 1059,
    CANNOT_DELETE_CONNECTION = 1060,
    CREATE_CONNECTION_ERROR = 1061,
    INVALID_WALLET_SETUP = 1062,
    COMMON_ERROR = 1063,
    INSUFFICIENT_TOKEN_AMOUNT = 1064,
    UNKNOWN_TXN_TYPE = 1065,
    INVALID_PAYMENT_ADDRESS = 1066,
    INVALID_LIBINDY_PARAM = 1067,
    INVALID_PAYMENT = 1068,
    MISSING_WALLET_KEY = 1069,
    OBJECT_CACHE_ERROR = 1070,
    NO_PAYMENT_INFORMATION = 1071,
    DUPLICATE_WALLET_RECORD = 1072,
    WALLET_RECORD_NOT_FOUND = 1073,
    IO_ERROR = 1074,
    INVALID_WALLET_STORAGE_PARAMETER = 1075,
    MISSING_WALLET_NAME = 1076,
    MISSING_EXPORTED_WALLET_PATH = 1077,
    MISSING_BACKUP_KEY = 1078,
    WALLET_NOR_FOUND = 1079,
    LIBINDY_INVALID_STRUCTURE = 1080,
    INVALID_STATE = 1081,
    INVALID_LEDGER_RESPONSE = 1082,
    DID_ALREADY_EXISTS_IN_WALLET = 1083,
    DUPLICATE_MASTER_SECRET = 1084,
    THREAD_ERROR = 1085,
    INVALID_PROOF_REQUEST = 1086,
    MISSING_PAYMENT_METHOD = 1087,
    DUPLICATE_SCHEMA = 1088,
    UNKNOWN_LIBINDY_REJECTION = 1089,
    LOGGING_ERROR = 1090,
    INVALID_REVOCATION_DETAILS = 1091,
    INVALID_REV_ENTRY = 1092,
    INVALID_REVOCATION_TIMESTAMP = 1093,
    UNKNOWN_SCHEMA_REJECTION = 1094,
    INVALID_REV_REG_DEF_CREATION = 1095,
    /* EC 1096 - 1099 are reserved for proprietary forks of libVCX */
    INVALID_ATTACHMENT_ENCODING = 1100,
    UNKNOWN_ATTACHMENT_ENCODING = 1101,
    UNKNOWN_MIME_TYPE = 1102,
    ACTION_NOT_SUPPORTED = 1103,
    INVALID_REDIRECT_DETAILS = 1104
}
export enum StateType {
    None = 0,
    Initialized = 1,
    OfferSent = 2,
    RequestReceived = 3,
    Accepted = 4,
    Unfulfilled = 5,
    Expired = 6,
    Revoked = 7,
    Redirected = 8,
    Rejected = 9,
}

export interface IInitVCXOptions {
  libVCXPath?: string
}

export interface IUTXO {
  paymentAddress: string,
  amount: number,
  extra?: string,
  txo?: string
}

export interface IPaymentOutput {
  recipient: string,
  amount: number,
  extra?: string,
  source?: string
}

export interface ISerializedData<T> {
  version: string,
  data: T
}
