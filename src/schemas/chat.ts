import { z } from 'zod'

export const chatSchema = z.object({
  name: z.string().max(64).optional(),
  users: z.array(z.string().length(36)).min(1),
})
