import Chat from '@/ui/chats/chat/Chat'
import Sidebar from '@/ui/chats/sidebar/Sidebar'

export default function Page() {
  return (
    <div className="flex h-full overflow-hidden">
      <Sidebar />
      <div className="hidden h-full grow md:flex">
        <Chat />
      </div>
    </div>
  )
}
