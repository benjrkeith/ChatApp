import { z } from 'zod'

export const credentialsSchema = z.object({
  username: z.string().min(3).max(64),
  password: z.string().min(3).max(64),
})

export type Credentials = z.infer<typeof credentialsSchema>
