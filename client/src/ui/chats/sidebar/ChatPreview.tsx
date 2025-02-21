import { Link } from 'react-router'

import ChatIcon from '@/ui/chats/sidebar/ChatIcon'

import { getDateTimeString } from '@/lib/getDateTimeString'
import { translateSysMessage } from '@/lib/translateSysMessage'
import * as types from '@/types'

type ChatPreviewProps = {
  data: types.Chat
}

export default function ChatPreview(props: ChatPreviewProps) {
  const { id, name, messages } = props.data

  return (
    <Link
      to={`/chats/${id}`}
      className="group my-1 flex max-w-full gap-3 rounded-lg px-2 py-1 hover:bg-zinc-900"
    >
      <ChatIcon data={props.data} />

      <div className="flex min-w-0 grow flex-col">
        <h2 className="mt-auto min-w-0 truncate text-xl font-semibold">
          {name}
        </h2>

        <p className="mb-auto w-fit max-w-full truncate">
          {translateSysMessage(messages[0])}
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <footer className="mb-auto py-1 text-end text-sm">
          {getDateTimeString(messages[0].created_at)}
        </footer>

        {/* <button className="invisible my-auto ml-auto min-h-[1.25rem] w-fit opacity-75 group-hover:visible">
          <img src="icon-pin.svg" className="h-4 w-4 invert" />
        </button> */}
      </div>
    </Link>
  )
}
