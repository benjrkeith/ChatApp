import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'
import { createServer } from 'node:http'
import { Server, Socket } from 'socket.io'

import { onConnection } from '@/events/onConnection.js'
import { isJwtValid } from '@/middleware/index.js'
import authRouter from '@/routes/auth.js'

const corsOptions = {
  credentials: true,
  origin: 'http://localhost:5173',
}

const app = express()
app.use(cors(corsOptions))
app.use(express.json())
app.use('/auth', authRouter)

const server = createServer(app)
const port = Number(process.env.SERVER_PORT)
server.listen(port, () => console.log(`Listening on port ${port}`))

const io = new Server(server, { cors: corsOptions })
io.use(isJwtValid)
io.on('connection', onConnection)

export const users = new WeakMap<Socket, string>()
export const prisma = new PrismaClient()
