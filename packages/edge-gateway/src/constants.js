export const CF_CACHE_MAX_OBJECT_SIZE = 512 * Math.pow(1024, 2) // 512MB to bytes
export const METRICS_CACHE_MAX_AGE = 10 * 60 // in seconds (10 minutes)
export const CIDS_TRACKER_ID = 'cids'
export const SUMMARY_METRICS_ID = 'summary-metrics'
export const REDIRECT_COUNTER_METRICS_ID = 'redirect-counter-metrics'
export const GATEWAY_RATE_LIMIT_ID = 'gateway-rate-limit'
export const HTTP_STATUS_RATE_LIMITED = 429
export const HTTP_STATUS_SUCCESS = 200
export const REQUEST_PREVENTED_RATE_LIMIT_CODE = 'RATE_LIMIT'
export const TIMEOUT_CODE = 'TIMEOUT'