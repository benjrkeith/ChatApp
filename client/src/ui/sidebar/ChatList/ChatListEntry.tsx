import clsx from 'clsx'
import { Link } from 'react-router'

import Avatar from '@/ui/misc/Avatar'

import { getDateTimeString } from '@/lib/getDateTimeString'
import { getMessageContent } from '@/lib/getMessageContent'
import * as types from '@/types'

type ChatPreviewProps = {
  chat: types.Chat
  isActive: boolean
}

export default function ChatListEntry(props: ChatPreviewProps) {
  const { chat, isActive } = props
  const lastMessage = chat.messages[0]

  return (
    <Link
      to={`/chat/${chat.id}`}
      className={clsx('group flex gap-3 px-2 py-1', {
        'bg-zinc-700': isActive,
        'hover:bg-zinc-900': !isActive,
      })}
    >
      <Avatar name={chat.name} url={chat.avatar} size="3rem" style="circle" />

      <div className="flex min-w-0 grow flex-col justify-evenly">
        <h2 className="truncate text-xl font-semibold">{chat.name}</h2>

        <p className="w-fit max-w-full truncate">
          {getMessageContent(lastMessage)}
        </p>
      </div>

      <div className="mb-auto flex h-fit justify-evenly text-center text-sm">
        {!chat.isRead && (
          <span className="mx-2 my-auto h-fit rounded-full bg-cyan-600 p-1" />
        )}
        <span>{getDateTimeString(chat.updated_at)}</span>
      </div>
    </Link>
  )
}
