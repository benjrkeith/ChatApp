import { prisma } from '../main.js'

export function createChat(
  user_id: string,
  user_ids: Set<string>,
  name?: string,
) {
  return prisma.chat.create({
    data: {
      name: name,
      memberships: {
        create: [...user_ids].map((user_id) => ({ user_id })),
      },
      messages: {
        create: {
          author_id: user_id,
          content: '0001',
          system: true,
        },
      },
    },
    select: {
      updated_at: true,
      id: true,
      name: true,
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
        select: {
          author: {
            select: {
              id: true,
              username: true,
              avatar: true,
            },
          },
          content: true,
          system: true,
          created_at: true,
        },
      },
    },
  })
}
