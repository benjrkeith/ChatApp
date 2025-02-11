import Avatar from '@/ui/chats/misc/Avatar'
import Menu from '@/ui/chats/sidebar/Menu'

import { useStore } from '@/hooks/useStore'

export default function ProfileBar() {
  const { user } = useStore()
  if (user === null) return <></>

  return (
    <div className="flex h-fit grow gap-3">
      <Avatar
        name={user.username}
        url={user.avatar}
        size="4rem"
        style="square"
      />

      <h1 className="my-auto grow text-2xl font-semibold capitalize">
        {user.username}
      </h1>

      <Menu />
    </div>
  )
}
