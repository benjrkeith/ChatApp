import { z } from 'zod'

export const chatSchema = z.object({
  name: z.string().min(1).max(64),
  users: z.array(z.string().length(36)).min(1),
})
