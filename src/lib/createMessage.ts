import { prisma } from '@/main.js'

export async function createMessage(
  user_id: string,
  chat_id: string,
  content: string,
) {
  return await prisma.message.create({
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
    },
  })
}
