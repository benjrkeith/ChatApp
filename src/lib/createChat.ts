import { prisma } from '@/main.js'

export async function createChat(name: string, users: Set<string>) {
  return await prisma.chat.create({
    data: {
      name: name,
      memberships: {
        create: [...users].map((user_id) => ({ user_id })),
      },
    },
  })
}
