import { useState } from 'react'

import SearchBar from '@/ui/misc/SearchBar'
import UserList from '@/ui/misc/UserList/UserList'

import { useUserList } from '@/hooks/useUserList'
import * as types from '@/types'

type UserSelectProps = {
  select: (user: types.User) => void
}

export default function UserSelect(props: UserSelectProps) {
  const { select } = props

  const [query, setQuery] = useState('')
  const users = useUserList()

  const filtered = users.filter((user) =>
    user.username.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="m-1 mb-0">
        <SearchBar query={query} setQuery={setQuery} />
      </div>

      <div className="hide-scroll h-full w-auto overflow-scroll p-1">
        <UserList users={filtered} action={{ callback: select }} />
      </div>
    </div>
  )
}
