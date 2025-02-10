import { prisma } from '@/main.js'

export function getChats(user_id: string) {
  return prisma.chat.findMany({
    where: {
      memberships: {
        some: { user_id },
      },
    },
    include: {
      messages: {
        take: 1,
      },
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
