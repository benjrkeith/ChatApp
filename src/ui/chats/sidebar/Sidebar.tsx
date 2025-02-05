import clsx from 'clsx'
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
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <Resizeable isCollapsed={isCollapsed}>
      <div
        className={clsx('flex h-full flex-col bg-zinc-900 py-3', {
          'gap-3': !isCollapsed,
          'px-2': isCollapsed,
        })}
      >
        <ProfileBar
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          data={data}
        />
        {!isCollapsed && <SearchBar />}
        <ChatList isCollapsed={isCollapsed} />
      </div>
    </Resizeable>
  )
}
