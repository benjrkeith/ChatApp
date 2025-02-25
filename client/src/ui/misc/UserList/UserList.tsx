import UserListEntry, { UserListAction } from '@/ui/misc/UserList/UserListEntry'

import * as types from '@/types'

const NUM_TO_SHOW = 20

type UserListProps = {
  users: types.User[]
  action?: UserListAction
}

export default function UserList({ users, action }: UserListProps) {
  return (
    <div className="flex h-full w-full flex-col">
      {users.slice(0, NUM_TO_SHOW).map((user) => (
        <UserListEntry key={user.id} user={user} action={action} />
      ))}

      {users.length === 0 && (
        <h2 className="w-full p-2 text-center text-xl">Nothing here...</h2>
      )}

      {users.length > NUM_TO_SHOW && (
        <h2 className="w-full p-2 text-center">{`+ ${users.length - NUM_TO_SHOW} More`}</h2>
      )}
    </div>
  )
}
