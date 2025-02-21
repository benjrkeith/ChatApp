import { Navigate, useParams } from 'react-router'

import Chat from '@/ui/chats/chat/Chat'
import Sidebar from '@/ui/chats/sidebar/Sidebar'

import { useSocket } from '@/hooks/useSocket'
import { useStore } from '@/hooks/useStore'

export default function Page() {
  const chat_id = useParams()['*']
  const { chats } = useStore()

  const isSuccessfull = useSocket()
  if (!isSuccessfull) return <Navigate to="/auth" />

  const chat = chats.get(chat_id || '')

  return (
    <div className="flex h-full min-w-[200px] overflow-x-hidden overflow-y-scroll bg-zinc-800 text-white">
      <Sidebar />
      {chat && <Chat chat={chat} />}
    </div>
  )
}
