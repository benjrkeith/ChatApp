import { useState } from 'react'
import { useParams } from 'react-router'

import SearchBar from '@/ui/misc/SearchBar'
import ChatListEntry from '@/ui/sidebar/ChatList/ChatListEntry'

import { useStore } from '@/hooks/useStore'

export default function ChatList() {
  const [query, setQuery] = useState('')
  const { chats } = useStore()
  const chat_id = useParams()['*']

  const filtered = Array.from(chats.values()).filter((chat) =>
    chat.name.toLowerCase().includes(query.toLowerCase()),
  )

  filtered.sort((a, b) =>
    b.updated_at > a.updated_at ? 1 : b.updated_at < a.updated_at ? -1 : 0,
  )

  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <div className="mx-1 my-1">
        <SearchBar query={query} setQuery={setQuery} />
      </div>

      <div className="hide-scroll m-1 flex w-auto grow flex-col gap-0 overflow-y-scroll rounded-sm bg-zinc-800 p-0">
        {filtered.map((chat) => (
          <ChatListEntry
            key={chat.id}
            chat={chat}
            isActive={chat.id === chat_id}
          />
        ))}
      </div>
    </div>
  )
}
