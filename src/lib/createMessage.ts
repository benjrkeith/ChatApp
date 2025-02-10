import { prisma } from '@/main.js'

export function createMessage(
  user_id: string,
  chat_id: string,
  content: string,
) {
  return prisma.message.create({
    data: {
      author_id: user_id,
      chat_id: chat_id,
      content: content,
    },
    include: {
      author: {
        select: {
          id: true,
          username: true,
          avatar: true,
        },
      },
      chat: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
    },
    omit: {
      updated_at: true,
      author_id: true,
      chat_id: true,
    },
  })
}
