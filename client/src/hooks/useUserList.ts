import { useEffect } from 'react'

import { useStore } from '@/hooks/useStore'
import { getUsers } from '@/lib/getUsers'
import * as types from '@/types'

export function useUserList() {
  const { users, setUsers } = useStore()

  useEffect(() => {
    const inner = async () => {
      const users = await getUsers()
      setUsers(users as types.User[])
    }
    if (users.length === 0) setTimeout(async () => await inner(), 100)
  }, [users.length, setUsers])

  return users
}
