import { prisma } from '../main.js'

export function getMessages(user_id: string, chat_id: string, skip: number) {
  return prisma.message.findMany({
    where: {
      chat_id,
      chat: {
        memberships: {
          some: {
            user_id,
          },
        },
      },
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
    orderBy: { created_at: 'desc' },
    take: 12,
    skip: skip,
  })
}
