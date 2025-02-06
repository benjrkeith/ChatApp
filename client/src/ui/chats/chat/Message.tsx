import { clsx } from 'clsx'

import * as types from '@/types'

type MessageProps = {
  data: types.Message
}

export default function Message(props: MessageProps) {
  const { content, createdAt } = props.data

  // This determines which side of the screen to render on, and also which
  // direction the triangle decoration should point.
  const isOwnMessage = content.length % 2 === 0

  return (
    <div className="z-10 flex">
      {!isOwnMessage && <div className="triangle-left bg-zinc-700" />}

      <div
        className={clsx('flex w-fit max-w-[60%] gap-4 rounded-md p-2', {
          'ml-auto bg-rose-500': isOwnMessage,
          'mr-auto bg-zinc-700': !isOwnMessage,
        })}
      >
        <p className="">{content}</p>
        <footer className="mt-auto h-fit text-xs">{createdAt}</footer>
      </div>

      {isOwnMessage && <div className="triangle-right bg-rose-500"></div>}
    </div>
  )
}
