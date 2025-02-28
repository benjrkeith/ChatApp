import { prisma } from '../main.js'

export async function getMessages(
  user_id: string,
  chat_id: string,
  skip: number,
) {
  const first = prisma.message.findMany({
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

  const second = prisma.membership.update({
    data: { isRead: true },
    where: {
      user_id_chat_id: {
        user_id,
        chat_id,
      },
    },
  })

  return (await prisma.$transaction([first, second]))[0]
}
