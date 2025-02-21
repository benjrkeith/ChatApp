import { useState } from 'react'
import { useParams } from 'react-router'

import Resizeable from '@/ui/chats/misc/Resizeable'
import ChatList from '@/ui/chats/sidebar/ChatList'
import ProfileBar from '@/ui/chats/sidebar/ProfileBar'
import SearchBar from '@/ui/chats/sidebar/SearchBar'

export default function Sidebar() {
  const [query, setQuery] = useState('')
  const chat_id = useParams()['*']

  return (
    <Resizeable isHidden={chat_id !== ''} minWidth={200} maxWidth={550}>
      <div className="flex h-full flex-col">
        <div className="flex flex-col gap-4 bg-zinc-900 p-1 pb-2 shadow-[0px_5px_5px_0px] shadow-black/15">
          <ProfileBar />
          <SearchBar query={query} setQuery={setQuery} />
        </div>
        <ChatList query={query} />
      </div>
    </Resizeable>
  )
}
