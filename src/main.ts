import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'
import { createServer } from 'node:http'
import { Server } from 'socket.io'

import { onConnection } from '@/events/onConnection.js'
import { UserSocketMap } from '@/lib/userSocketMap.js'
import { isJwtValid } from '@/middleware/isJwtValid.js'
import { authRouter } from '@/routes/auth.js'

const corsOptions = {
  credentials: true,
  origin: 'http://localhost:5173',
}

// Express App
const app = express()
app.use(cors(corsOptions))
app.use(express.json())
app.use('/auth', authRouter)

// HTTP Server
const server = createServer(app)
const port = Number(process.env.SERVER_PORT)
server.listen(port, () => console.log(`Listening on port ${port}`))

// Socket.io Server
const io = new Server(server, { cors: corsOptions })
io.use(isJwtValid)
io.on('connection', onConnection)

export const users = new UserSocketMap()
export const prisma = new PrismaClient()
