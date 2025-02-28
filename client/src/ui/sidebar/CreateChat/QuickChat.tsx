import { useNavigate } from 'react-router'

import UserSelect from '@/ui/sidebar/CreateChat/UserSelect'

import { useStore } from '@/hooks/useStore'
import { createChat } from '@/lib/createChat'
import * as types from '@/types'

type QuickChatProps = {
  close: () => void
}

export default function QuickChat(props: QuickChatProps) {
  const { close } = props

  const { chats } = useStore()
  const navigate = useNavigate()

  const onClick = (user: types.User) => {
    close()

    for (const chat of chats.entries()) {
      if (chat[1].name === user.username) {
        navigate(`/chat/${chat[1].id}`)
        return
      }
    }

    createChat('', [user.id])
  }

  return (
    <div className="flex h-full flex-col overflow-hidden bg-zinc-900">
      <div className="flex gap-4 px-4 py-2">
        <button onClick={close} className="cursor-pointer p-0">
          <img src="/icons/back.svg" className="h-9 w-9 invert" />
        </button>

        <h1 className="my-auto text-2xl">New chat</h1>
      </div>

      <UserSelect select={onClick} />
    </div>
  )
}
