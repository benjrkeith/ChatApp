import { useState } from 'react'

import Resizeable from '@/ui/chats/misc/Resizeable'
import ChatList from '@/ui/chats/sidebar/ChatList'
import ProfileBar from '@/ui/chats/sidebar/ProfileBar'
import SearchBar from '@/ui/chats/sidebar/SearchBar'

const data = {
  id: '1',
  name: 'Ben Keith',
  avatar: '/avatar.jpg',
}

export default function Sidebar() {
  const [query, setQuery] = useState('')

  return (
    <Resizeable minWidth={200}>
      <div className="flex h-full flex-col gap-2 bg-zinc-900 p-2 pb-0">
        <ProfileBar data={data} />
        <SearchBar query={query} setQuery={setQuery} />
        <ChatList query={query} />
      </div>
    </Resizeable>
  )
}
