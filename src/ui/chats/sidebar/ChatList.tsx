import clsx from 'clsx'

import ChatIcon from '@/ui/chats/sidebar/ChatIcon'
import ChatPreview from '@/ui/chats/sidebar/ChatPreview'

const data = [
  {
    name: 'Jedi Council',
    avatar: '/avatar.jpg',
    notifications: 3,
    lastMessage: {
      content: 'Hello there!',
      createdAt: '12:23',
    },
  },
  {
    name: 'The Boys',
    avatar: '/avatar.jpg',
    notifications: 0,
    lastMessage: {
      content: 'Hi!',
      createdAt: '09:12',
    },
  },
  {
    name: 'Dudes that are awesome and cool',
    avatar: '/avatar.jpg',
    notifications: 8,
    lastMessage: {
      content: 'Wazzup',
      createdAt: '17:43',
    },
  },
]

type ChatListProps = {
  isCollapsed: boolean
}

export default function ChatList(props: ChatListProps) {
  const { isCollapsed = false } = props
  const Component = isCollapsed ? ChatIcon : ChatPreview

  return (
    <div className={clsx('flex max-w-full flex-col gap-4 p-2', {})}>
      {data.map((chat) => (
        <Component data={chat} />
      ))}
    </div>
  )
}
