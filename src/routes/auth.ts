import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { hash, verify } from 'argon2'
import { Router } from 'express'
import jwt from 'jsonwebtoken'

import { prisma } from '../main.js'
import { parseCredentials } from '../middleware/parseCredentials.js'

export const authRouter = Router()
authRouter.use(parseCredentials)

authRouter.post('/register', async (req, res) => {
  const { username, password } = res.locals.credentials
  const passwordHash = await hash(password)

  try {
    await prisma.user.create({
      data: {
        username,
        password: passwordHash,
      },
      select: { id: true },
    })

    res.sendStatus(201)
  } catch (error) {
    if (!(error instanceof PrismaClientKnownRequestError)) throw error
    else if (error.code === 'P2002') res.sendStatus(409)
    else res.sendStatus(500)
  }
})

authRouter.post('/login', async (req, res) => {
  const { credentials } = res.locals
  const user = await prisma.user.findUnique({
    where: { username: credentials.username },
    select: {
      id: true,
      username: true,
      password: true,
      avatar: true,
    },
  })

  if (!user) {
    res.sendStatus(404)
    return
  }

  const { password, ...rest } = user
  const isValid = await verify(password, credentials.password)
  if (!isValid) {
    res.sendStatus(401)
    return
  }

  const token = jwt.sign({ user: rest }, process.env.JWT_SECRET as string, {
    expiresIn: Number(process.env.JWT_EXPIRES_IN),
  })
  res.cookie('token', token, { httpOnly: true }).sendStatus(200)

  await prisma.user.update({
    data: { last_login: new Date() },
    where: { id: rest.id },
  })
})
