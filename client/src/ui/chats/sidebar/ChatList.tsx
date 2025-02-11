import { debounce } from 'lodash'
import { useRef, useState } from 'react'

import ChatPreview from '@/ui/chats/sidebar/ChatPreview'

import { useStore } from '@/hooks/useStore'

type ChatListProps = {
  query: string
}

export default function ChatList({ query }: ChatListProps) {
  const [atTop, setAtTop] = useState(true)
  const { chats } = useStore()
  const scrollableRef = useRef<HTMLDivElement>(null)

  const debounced = debounce((e) => setAtTop(e.target.scrollTop === 0), 300)
  const filtered = chats.filter((chat) =>
    chat.name.toLocaleLowerCase().includes(query),
  )

  return (
    <div className="relative flex h-full overflow-hidden px-1">
      {!atTop && (
        <div className="absolute z-20 flex w-full p-2">
          <button
            className="mx-auto flex w-[30%] rounded-md bg-zinc-900 p-1"
            onClick={() => {
              setAtTop(true)
              scrollableRef.current?.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }}
          >
            <img src="/icon-up.svg" className="filter-cyan mx-auto h-8 w-8" />
          </button>
        </div>
      )}

      <div
        onScroll={debounced}
        ref={scrollableRef}
        className="hide-scroll relative flex w-full max-w-full flex-col overflow-scroll"
      >
        {filtered.map((chat) => (
          <ChatPreview key={chat.id} data={chat} />
        ))}
      </div>
    </div>
  )
}
