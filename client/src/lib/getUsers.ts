import { waitFor } from './waitFor'

export async function getUsers() {
  return await waitFor('users', {})
}
