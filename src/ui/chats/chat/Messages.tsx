import { useLayoutEffect, useRef } from 'react'

import Message from './Message'

type MessagesProps = {
  messages: {
    content: string
    dateTime: string
  }[]
}

export default function Messages(props: MessagesProps) {
  const { messages } = props

  const bottomRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'instant' })
  }, [])

  return (
    <div className="grid grow overflow-scroll">
      <div className="col-[1/1] row-[1/1] flex h-full w-full">
        <div className="mt-auto flex w-full flex-col gap-2 p-4">
          {messages.map((message) => (
            <Message
              key={message.dateTime}
              content={message.content}
              dateTime={message.dateTime}
            />
          ))}
          <div className="float-left clear-both" ref={bottomRef} />
        </div>
      </div>
    </div>
  )
}
