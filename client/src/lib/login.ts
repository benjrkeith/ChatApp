import { AUTH_URL } from '@/lib'
import * as types from '@/types'

const url = `${AUTH_URL}/login`

export async function login(credentials: types.Credentials) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
    credentials: 'include',
  })

  return res.status
}
