import UserListEntry, { UserListAction } from '@/ui/misc/UserList/UserListEntry'

import * as types from '@/types'

type UserListProps = {
  users: types.User[]
  action?: UserListAction
}

export default function UserList({ users, action }: UserListProps) {
  return (
    <div className="flex h-full w-full flex-col">
      {users.map((user) => (
        <UserListEntry key={user.id} user={user} action={action} />
      ))}
    </div>
  )
}
