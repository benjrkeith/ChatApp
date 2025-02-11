import Avatar from '@/ui/chats/misc/Avatar'

import * as types from '@/types'

type ChatIconProps = {
  data: types.Chat
}

export default function ChatIcon(props: ChatIconProps) {
  const { name, avatar } = props.data

  return (
    <div className="relative my-auto flex w-fit">
      <Avatar name={name} url={avatar} size="3rem" style="circle" />

      {false && (
        <div className="absolute w-full">
          <p className="ml-auto flex aspect-square h-5 w-5 rounded-full bg-rose-500">
            <span className="m-auto text-sm font-bold">{0}</span>
          </p>
        </div>
      )}
    </div>
  )
}
