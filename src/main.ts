import { PrismaClient } from '@prisma/client'
import express from 'express'
import { createServer } from 'node:http'
import { Server } from 'socket.io'

import { verifyToken } from '@/middleware/verifyToken.js'
import authRouter from '@/routes/auth.js'

import { onConnection } from './events/onConnection.js'

const app = express()
app.use(express.json())
app.use('/auth', authRouter)

const server = createServer(app)
const port = Number(process.env.SERVER_PORT)
server.listen(port, () => console.log(`Listening on port ${port}`))

const io = new Server(server)
io.use(verifyToken)
io.on('connection', onConnection)

export const prisma = new PrismaClient()
