import clsx from 'clsx'
import { Navigate } from 'react-router'

import Sidebar from '@/ui/sidebar/Layout'

import { useChat } from '@/hooks/useChat'
import { useSocket } from '@/hooks/useSocket'

import ChatPage from './chat/Page'
import Resizeable from './misc/Resizeable'

export default function App() {
  const chat = useChat()
  const active = useSocket()
  if (!active) return <Navigate to="/auth" />

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
