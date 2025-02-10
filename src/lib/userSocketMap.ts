import { User } from '@prisma/client'
import { Socket } from 'socket.io'

export class UserSocketMap {
  map: Map<string, Socket>
  reverseMap: Map<Socket, Partial<User>>

  constructor() {
    this.map = new Map()
    this.reverseMap = new Map()
  }

  set(user: Partial<User>, socket: Socket) {
    if (!user?.id) return
    this.map.set(user.id, socket)
    this.reverseMap.set(socket, user)
  }

  getUser(socket: Socket) {
    return this.reverseMap.get(socket)
  }

  getSocket(user_id: string) {
    return this.map.get(user_id)
  }
}
