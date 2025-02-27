import { prisma } from '../main.js'

export async function getChats(user_id: string) {
  const res = await prisma.chat.findMany({
    where: {
      memberships: {
        some: {
          user_id,
        },
      },
    },
    include: {
      memberships: {
        where: {
          NOT: {
            user_id,
          },
        },
        select: {
          user: {
            select: {
              username: true,
            },
          },
        },
      },
      messages: {
        orderBy: {
          created_at: 'desc',
        },
        take: 1,
        omit: {
          updated_at: true,
          author_id: true,
          chat_id: true,
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
      },
    },
    omit: {
      updated_at: true,
    },
    orderBy: {
      updated_at: 'asc',
    },
  })

  for (const chat of res) {
    if (!chat.name) chat.name = chat.memberships[0].user.username
  }

  return res
}
