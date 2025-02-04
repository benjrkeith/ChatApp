import { clsx } from 'clsx'

type MessageProps = {
  content: string
  dateTime: string
}

export default function Message(props: MessageProps) {
  const { content, dateTime } = props

  // This determines which side of the screen to render on, and also which
  // direction the triangle decoration should point.
  const isOwnMessage = content.length % 2 === 0

  return (
    <div className="z-10 flex">
      {!isOwnMessage && <div className="triangle-left bg-zinc-700"></div>}

      <div
        className={clsx('flex w-fit gap-2 rounded-md p-2', {
          'ml-auto bg-rose-500': isOwnMessage,
          'mr-auto bg-zinc-700': !isOwnMessage,
        })}
      >
        <p className="text-xl">{content}</p>
        <footer className="mt-auto h-fit text-xs">{dateTime}</footer>
      </div>

      {isOwnMessage && <div className="triangle-right bg-rose-500"></div>}
    </div>
  )
}
