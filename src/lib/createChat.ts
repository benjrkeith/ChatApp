import { prisma } from '@/main.js'

export function createChat(name: string, user_ids: Set<string>) {
  return prisma.chat.create({
    data: {
      name: name,
      memberships: {
        create: [...user_ids].map((user_id) => ({ user_id })),
      },
    },
    select: {
      id: true,
      name: true,
    },
  })
}
