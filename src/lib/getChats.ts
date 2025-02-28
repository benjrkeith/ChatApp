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
        select: {
          user: {
            select: {
              id: true,
              username: true,
            },
          },
          isRead: true,
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
    orderBy: {
      updated_at: 'asc',
    },
  })

  const final = []
  for (const chat of res) {
    let isRead
    const filtered = chat.memberships.filter((m) => {
      if (m.user.id === user_id) {
        isRead = m.isRead
        return false
      } else return true
    })

    // Generate default name
    if (!chat.name) {
      chat.name = filtered[0].user.username
      if (filtered.length > 1)
        chat.name = `${chat.name} + ${filtered.length - 1}`
    }

    chat.memberships = filtered
    final.push({ ...chat, isRead })
  }

  return final
}
