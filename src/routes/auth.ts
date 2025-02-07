import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { hash, verify } from 'argon2'
import { Router } from 'express'
import jwt from 'jsonwebtoken'

import { prisma } from '@/main.js'
import { checkCredentials } from '@/middleware/index.js'

const router = Router()
router.use(checkCredentials)

router.post('/register', async (req, res) => {
  const { username, password } = req.body
  const passwordHash = await hash(password)

  try {
    await prisma.user.create({
      data: { username, password: passwordHash },
      select: { id: true },
    })
    res.sendStatus(201)
  } catch (error) {
    if (!(error instanceof PrismaClientKnownRequestError)) throw error
    else if (error.code === 'P2002') res.sendStatus(409)
    else res.sendStatus(500)
  }
})

router.post('/login', async (req, res) => {
  const { username, password } = req.body
  const user = await prisma.user.findUnique({
    where: { username },
    select: { id: true, username: true, password: true },
  })
  if (!user) {
    res.sendStatus(404)
    return
  }

  const isValid = await verify(user.password, password)
  if (!isValid) {
    res.sendStatus(401)
    return
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
    expiresIn: Number(process.env.JWT_EXPIRES_IN),
  })

  res.json({ id: user.id, token })
  await prisma.user.update({
    data: { last_login: new Date() },
    where: { id: user.id },
  })
})

export default router
