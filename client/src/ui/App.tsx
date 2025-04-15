import clsx from 'clsx'
import { Navigate } from 'react-router'

import ChatPage from '@/ui/chat/Page'
import Loading from '@/ui/misc/Loading'
import Resizeable from '@/ui/misc/Resizeable'
import Sidebar from '@/ui/sidebar/Layout'

import { useChat } from '@/hooks/useChat'
import { useSocket } from '@/hooks/useSocket'

export default function App() {
  const chat = useChat()
  const [active, connected] = useSocket()

  if (!active) return <Navigate to="/auth" />
  else if (!connected) return <Loading />

  return (
    <div
      className={clsx('flex h-full w-full overflow-hidden', {
        '[&>*:first-child]:hidden [&>*:first-child]:md:flex':
          chat !== undefined,
        '[&>*:first-child]:grow [&>*:last-child]:hidden [&>*:last-child]:md:flex':
          chat === undefined,
      })}
    >
      <Resizeable minWidth={256} maxWidth={550} isHidden={chat !== undefined}>
        <Sidebar />
      </Resizeable>

      <ChatPage />
    </div>
  )
}
