import { clsx } from 'clsx'

import { useStore } from '@/hooks/useStore'
import { getDateTimeString } from '@/lib/getDateTimeString'
import { getMessageContent } from '@/lib/getMessageContent'
import * as types from '@/types'

type MessageProps = {
  data: types.Message
}

export default function Message({ data }: MessageProps) {
  const { user } = useStore()
  if (user === null || data === null) return <></>

  // This determines which side of the screen to render on, and also which
  // direction the triangle decoration should point.
  const isOwnMessage = data.author.id === user.id

  return (
    <div id={data.id} className="z-10 flex w-full py-1">
      {!isOwnMessage && <div className="triangle-left bg-zinc-700" />}

      <div
        className={clsx('flex w-fit max-w-[75%] gap-2 rounded-md px-3 py-1', {
          'ml-auto bg-cyan-600': isOwnMessage,
          'mr-auto bg-zinc-700': !isOwnMessage,
        })}
      >
        <p className="inline w-full">
          {getMessageContent(data)}

          <span className="float-end translate-y-2 pb-2 pl-3 text-sm">
            {getDateTimeString(data.created_at)}
          </span>
        </p>
      </div>

      {isOwnMessage && <div className="triangle-right bg-cyan-600" />}
    </div>
  )
}
