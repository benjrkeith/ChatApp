import { useRef } from 'react'
import { useParams } from 'react-router'

import { sendMessage } from '@/lib/sendMessage'

export default function CreateMessage() {
  const chat_id = useParams()['*']
  const ref = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (chat_id && ref.current?.value) {
      sendMessage(chat_id, ref.current.value)
      ref.current.value = ''
    }
  }

  return (
    <div className="z-20 flex gap-2 bg-zinc-900 px-2 py-2 shadow-[10px_0px_10px] shadow-black/25">
      <button
        onClick={handleClick}
        className="my-auto h-9 w-9 min-w-9 cursor-pointer rounded-lg p-1.5 hover:opacity-60"
      >
        <img src="/icons/emoji.svg" className="invert" />
      </button>

      <input
        type="text"
        ref={ref}
        placeholder="Type a message"
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleClick()
        }}
        className="min-w-[9rem] grow rounded-sm bg-zinc-800 p-2 hover:outline-1 hover:outline-cyan-600 focus:outline-1 focus:outline-cyan-600"
      />

      <button
        onClick={handleClick}
        className="my-auto h-10 w-10 min-w-10 cursor-pointer rounded-lg p-1.5 hover:opacity-60"
      >
        <img src="/icons/send.svg" className="invert" />
      </button>
    </div>
  )
}
