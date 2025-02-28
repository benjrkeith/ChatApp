import Background from '@/ui/chat/Background'
import CreateMessage from '@/ui/chat/CreateMessage'
import MessageList from '@/ui/chat/MessageList'
import TitleBar from '@/ui/chat/TitleBar'

import { useChat } from '@/hooks/useChat'

export default function ChatPage() {
  const chat = useChat()

  return (
    <div className="relative h-full w-full min-w-64 text-white">
      <Background />

      {chat && (
        <div className="flex h-full w-full flex-col">
          <TitleBar name={chat.name} avatar={chat.avatar} />
          <MessageList chat={chat} />
          <CreateMessage />
        </div>
      )}
    </div>
  )
}
