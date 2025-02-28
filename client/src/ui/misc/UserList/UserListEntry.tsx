import Avatar from '@/ui/misc/Avatar'

import * as types from '@/types'

export type UserListAction = {
  text?: string
  colour?: string
  callback: (user: types.User) => void
}

type UserListEntryProps = {
  user: types.User
  action?: UserListAction
}

export default function UserListEntry(props: UserListEntryProps) {
  const { user, action } = props

  return (
    <button
      onClick={() => action?.callback(user)}
      className="group flex gap-3 rounded-md px-3 py-2 text-2xl hover:bg-zinc-950"
    >
      <Avatar
        url={user.avatar}
        name={user.username}
        style="circle"
        size="2.5rem"
      />

      <span className="my-auto truncate">{user.username}</span>

      {action?.text && (
        <span
          style={{ color: action?.colour }}
          className="invisible my-auto font-bold group-hover:visible"
        >
          {action.text}
        </span>
      )}
    </button>
  )
}
