import jwt from 'jsonwebtoken'
import { Socket } from 'socket.io'

export async function verifyToken(socket: Socket, next: (err?: Error) => void) {
  const token = socket.handshake.headers.authorization
  if (!token) return next(new Error('Auth header not found'))

  jwt.verify(token, process.env.JWT_SECRET as string, (err) => {
    if (err) return next(new Error('Invalid auth token provided'))
    next()
  })
}
