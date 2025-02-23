import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'
import { Server } from 'socket.io'

import { onConnection } from './events/onConnection.js'
import { UserSocketMap } from './lib/userSocketMap.js'
import { isJwtValid } from './middleware/isJwtValid.js'
import { authRouter } from './routes/auth.js'

const corsOptions = {
  credentials: true,
  origin: 'http://localhost:5173',
}

// Express App
const app = express()
const server = app.listen(Number(process.env.PORT))
app.use(cors(corsOptions))
app.use(express.json())
app.use('/auth', authRouter)

// Socket.io Server
const io = new Server(server, { cors: corsOptions })
io.use(isJwtValid)
io.on('connection', onConnection)

export const users = new UserSocketMap()
export const prisma = new PrismaClient()
