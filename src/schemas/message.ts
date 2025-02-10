import { z } from 'zod'

export const messageSchema = z.object({
  chat_id: z.string().length(36),
  content: z.string().min(1).max(1024),
})
