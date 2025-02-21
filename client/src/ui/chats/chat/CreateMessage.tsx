import { useRef } from 'react'
import { useParams } from 'react-router'

import IconButton from '@/ui/chats/misc/IconButton'

import { sendMessage } from '@/lib/sendMessage'

export default function CreateMessage() {
  const chat_id = useParams()['*']
  const ref = useRef<HTMLInputElement>(null)

  const handleSubmit = () => {
    if (chat_id && ref.current?.value) {
      sendMessage(chat_id, ref.current.value)
      ref.current.value = ''
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
      }}
      className="z-20 flex gap-4 bg-zinc-900 px-4 py-2 shadow-[10px_0px_10px] shadow-black/25"
    >
      <div className="flex gap-4">
        <IconButton
          src="/icon-emoji.svg"
          alt="Emoji"
          size="2rem"
          callback={() => {}}
        />
        <IconButton
          src="/icon-attach.svg"
          alt="Attach"
          size="2.1rem"
          callback={() => {}}
        />
      </div>

      <input
        type="text"
        ref={ref}
        placeholder="Type a message"
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSubmit()
        }}
        className="min-w-[9rem] grow rounded-md bg-zinc-800 p-2 outline-none hover:ring-1 hover:ring-cyan-500 focus:ring-1 focus:ring-cyan-500"
      />

      <IconButton
        src="/icon-send.svg"
        alt="Send"
        size="2.5rem"
        callback={handleSubmit}
      />
    </form>
  )
}
