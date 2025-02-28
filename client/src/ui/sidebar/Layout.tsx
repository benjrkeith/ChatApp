import { useState } from 'react'

import ChatList from '@/ui/sidebar/ChatList/ChatList'
import QuickChat from '@/ui/sidebar/CreateChat/QuickChat'
import ProfileBar from '@/ui/sidebar/ProfileBar'
import SubPage from '@/ui/sidebar/SubPage'

import { useStore } from '@/hooks/useStore'

export default function SidebarLayout() {
  const [page, setPage] = useState(0)
  const { user } = useStore()

  return (
    <div className="relative flex h-full w-full flex-col gap-1 overflow-hidden bg-zinc-900 text-white">
      <div className="flex flex-col overflow-hidden">
        <ProfileBar
          username={user?.username}
          avatar={user?.avatar}
          createChatCallback={() => setPage(1)}
        />
        <ChatList />
      </div>

      <SubPage active={page !== 1}>
        <QuickChat close={() => setPage(0)} />
      </SubPage>
    </div>
  )
}
