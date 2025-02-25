import { z } from 'zod'

export function extractZodErrors(
  error: z.ZodError<{
    username: string
    password: string
  }>,
) {
  const fieldErrors = error.flatten().fieldErrors
  if (fieldErrors.username)
    return {
      username: fieldErrors.username[0].replace('String', 'Username'),
      password: '',
    }
  else if (fieldErrors.password)
    return {
      username: '',
      password: fieldErrors.password[0].replace('String', 'Password'),
    }
}
