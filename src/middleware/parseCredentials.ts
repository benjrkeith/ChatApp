import { NextFunction, Request, Response } from 'express'

import { credentialsSchema } from '../schemas/credentials.js'

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
