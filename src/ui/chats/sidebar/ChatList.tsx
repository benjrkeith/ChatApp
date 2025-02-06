import { debounce } from 'lodash'
import { useRef, useState } from 'react'

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
  {
    name: 'Dudes that are awesome and cool',
    avatar: '/avatar.jpg',
    notifications: 8,
    lastMessage: {
      content: 'Wazzup',
      createdAt: '17:43',
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
  {
    name: 'Dudes that are awesome and cool',
    avatar: '/avatar.jpg',
    notifications: 8,
    lastMessage: {
      content: 'Wazzup',
      createdAt: '17:43',
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
  query: string
}

export default function ChatList({ query }: ChatListProps) {
  const [atTop, setAtTop] = useState(true)
  const scrollableRef = useRef<HTMLDivElement>(null)

  const debounced = debounce((e) => setAtTop(e.target.scrollTop === 0), 300)
  const filtered = data.filter((chat) =>
    chat.name.toLocaleLowerCase().includes(query),
  )

  return (
    <div className="relative flex h-full overflow-hidden">
      {!atTop && (
        <div className="absolute z-20 flex w-full p-2">
          <button
            onClick={() => {
              scrollableRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
              setAtTop(true)
            }}
            className="mx-auto flex w-[40%] rounded-md bg-zinc-800 p-1"
          >
            <img src="icon-up.svg" className="filter-rose mx-auto h-7 w-7" />
          </button>
        </div>
      )}

      <div
        onScroll={debounced}
        ref={scrollableRef}
        className="hide-scroll relative flex max-w-full flex-col overflow-scroll"
      >
        {filtered.map((chat) => (
          <ChatPreview data={chat} />
        ))}
      </div>
    </div>
  )
}
