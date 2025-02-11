import { AUTH_URL } from '@/lib'
import * as types from '@/types'

const url = `${AUTH_URL}/register`

export async function register(credentials: types.Credentials) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  })

  return res.status
}
