const DEV_BASE_URL = 'http://localhost:3000'
const PROD_BASE_URL = 'http://bkas1.azurewebsites.net'

export const BASE_URL = import.meta.env.DEV ? DEV_BASE_URL : PROD_BASE_URL
export const AUTH_URL = `${BASE_URL}/auth`
