import Avatar from '@/ui/chats/misc/Avatar'

import * as types from '@/types'

type ChatIconProps = {
  data: types.Chat
}

export default function ChatIcon(props: ChatIconProps) {
  const { avatar, notifications } = props.data
  const hasNotifications = (notifications as number) > 0

  return (
    <div className="relative my-auto flex w-fit">
      <Avatar url={avatar} size="3rem" />

      {hasNotifications && (
        <div className="absolute w-full">
          <p className="ml-auto flex aspect-square h-5 w-5 rounded-full bg-rose-500">
            <span className="m-auto text-sm font-bold">{notifications}</span>
          </p>
        </div>
      )}
    </div>
  )
}
