import Avatar from '@/ui/chats/misc/Avatar'

import * as types from '@/types'

type TitleBarProps = {
  data: types.Chat
}

export default function TitleBar(props: TitleBarProps) {
  const { name, avatar } = props.data

  return (
    <div className="z-20 flex gap-5 bg-zinc-900 px-5 py-2 shadow-[0px_10px_10px] shadow-black/25">
      <Avatar url={avatar} size="3rem" />
      <h1 className="my-auto h-fit grow truncate text-2xl font-semibold">
        {name}
      </h1>

      <button className="my-auto h-6 w-6 min-w-[1.5rem]">
        <img
          src="icon-phone.svg"
          alt="Phone call icon"
          className="h-full w-full invert"
        />
      </button>

      <button className="my-auto h-7 w-7 min-w-[1.75rem]">
        <img
          src="icon-video.svg"
          alt="Video call icon"
          className="h-full w-full invert"
        />
      </button>

      <button className="my-auto h-6 w-6 min-w-[1.5rem]">
        <img
          src="icon-search.svg"
          alt="Search chat icon"
          className="h-full w-full invert"
        />
      </button>
    </div>
  )
}
