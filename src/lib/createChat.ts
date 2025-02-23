import { prisma } from '../main.js'

export function createChat(
  user_id: string,
  name: string,
  user_ids: Set<string>,
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
      id: true,
      name: true,
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
