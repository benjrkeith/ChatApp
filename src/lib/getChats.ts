import { prisma } from '../main.js'

export function getChats(user_id: string) {
  return prisma.chat.findMany({
    where: {
      memberships: {
        some: {
          user_id,
        },
      },
    },
    include: {
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
      updated_at: 'desc',
    },
  })
}

// Remove nesting caused by user-chats many-many relation
// return [...chats].map((chat) => {
//   const { memberships, ...rest } = chat
//   return {
//     ...rest,
//     users: [...memberships].map((m) => m.user),
//   }
// })
