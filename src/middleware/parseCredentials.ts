import { NextFunction, Request, Response } from 'express'
import { z } from 'zod'

const credentialsSchema = z.object({
  username: z.string().min(3).max(64),
  password: z.string().min(3).max(64),
})

export async function parseCredentials(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const parsed = credentialsSchema.safeParse(req.body)
  if (parsed.success) {
    res.locals.credentials = parsed.data
    next()
  } else res.status(400).json(parsed.error.flatten().fieldErrors)
}
