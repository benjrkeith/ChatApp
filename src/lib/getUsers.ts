import { prisma } from '../main.js'

export function getUsers(user_id: string) {
  return prisma.user.findMany({
    select: {
      id: true,
      username: true,
      avatar: true,
    },
    where: {
      NOT: {
        id: user_id,
      },
    },
    orderBy: { username: 'asc' },
  })
}
