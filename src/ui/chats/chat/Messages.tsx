import { useLayoutEffect, useRef } from 'react'

import Message from '@/ui/chats/chat/Message'

import * as types from '@/types'

type MessagesProps = {
  messages: types.Message[]
}

export default function Messages(props: MessagesProps) {
  const { messages } = props

  const bottomRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'instant' })
  }, [])

  return (
    <div className="z-20 grid grow overflow-scroll">
      <div className="mt-auto flex w-full flex-col gap-3 px-3">
        {messages.map((message) => (
          <Message key={message.createdAt} data={message} />
        ))}
        <div className="float-left clear-both" ref={bottomRef} />
      </div>
    </div>
  )
}
