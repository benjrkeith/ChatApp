import { useEffect } from 'react'

import { useStore } from '@/hooks/useStore'
import { waitFor } from '@/lib/waitFor'
import * as types from '@/types'

export function useUserList() {
  const { users, setUsers } = useStore()

  useEffect(() => {
    waitFor('users', {}).then((users) => {
      setUsers(users as types.User[])
    })
  }, [setUsers])

  return users
}
