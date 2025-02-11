import Sidebar from '@/ui/chats/sidebar/Sidebar'

import { useSocket } from '@/hooks/useSocket'

export default function Page() {
  useSocket()

  return (
    <div className="flex h-full overflow-hidden bg-zinc-800 text-white">
      <Sidebar />
    </div>
  )
}
