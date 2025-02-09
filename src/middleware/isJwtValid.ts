import jwt, { JwtPayload } from 'jsonwebtoken'
import { Socket } from 'socket.io'

import { users } from '@/main.js'

export async function isJwtValid(socket: Socket, next: (err?: Error) => void) {
  const token = socket.handshake.headers.cookie?.split('=')[1]
  if (!token) return next(new Error('Auth cookie not found'))

  jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
    if (err || !decoded) return next(new Error('Invalid auth token provided'))

    users.set(socket, (decoded as JwtPayload).id)
    next()
  })
}
