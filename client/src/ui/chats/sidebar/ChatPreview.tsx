import ChatIcon from '@/ui/chats/sidebar/ChatIcon'

import * as types from '@/types'

type ChatPreviewProps = {
  data: types.Chat
}

export default function ChatPreview(props: ChatPreviewProps) {
  const { name, lastMessage } = props.data

  return (
    <div className="group flex max-w-full gap-4 rounded-lg p-2 hover:bg-zinc-800">
      <ChatIcon data={props.data} />

      <div className="flex min-w-0 grow flex-col">
        <h2 className="mt-auto min-w-0 truncate text-xl font-semibold">
          {name}
        </h2>

        <p className="mb-auto w-fit max-w-full truncate">
          {lastMessage?.content}
        </p>
      </div>

      <div className="my-auto flex flex-col gap-1">
        <footer className="text-end text-sm">{lastMessage?.createdAt}</footer>

        <button className="invisible my-auto ml-auto min-h-[1.25rem] w-fit opacity-75 group-hover:visible">
          <img src="icon-pin.svg" className="h-4 w-4 invert" />
        </button>
      </div>
    </div>
  )
}
