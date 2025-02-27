import { Socket } from 'socket.io'

import { getUsers } from '../lib/getUsers.js'
import { users } from '../main.js'

export function onUsers(socket: Socket) {
  return async () => {
    const user = users.getUser(socket)
    if (!user?.id) return socket.disconnect()

    const all_users = await getUsers(user.id)
    socket.emit('users', all_users)
  }
}
