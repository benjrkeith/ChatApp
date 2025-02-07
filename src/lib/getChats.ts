import { prisma } from '@/main.js'

export async function getChats(user_id: string, last_sync: Date) {
  const chats = await prisma.chat.findMany({
    where: {
      memberships: {
        some: { user_id },
      },
      OR: [
        {
          created_at: {
            gte: last_sync,
          },
        },
        {
          messages: {
            some: {
              created_at: {
                gte: last_sync,
              },
            },
          },
        },
      ],
    },
    include: {
      messages: {
        where: {
          created_at: {
            gte: last_sync,
          },
        },
      },
      memberships: {
        select: {
          user: {
            select: {
              id: true,
              username: true,
              avatar: true,
            },
          },
        },
      },
    },
  })

  // Remove nesting caused by user-chats many-many relation
  return [...chats].map((chat) => {
    const { memberships, ...rest } = chat
    return {
      ...rest,
      users: [...memberships].map((m) => m.user),
    }
  })
}
