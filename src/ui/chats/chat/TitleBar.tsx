import * as types from '@/types'

type TitleBarProps = {
  data: types.Chat
}

export default function TitleBar(props: TitleBarProps) {
  const { name, avatar } = props.data

  return (
    <div className="z-20 flex gap-6 bg-zinc-900 px-6 py-3 shadow-[0px_10px_10px] shadow-black/25">
      <img
        src={avatar}
        alt="Chat avatar"
        className="aspect-square h-14 min-w-14 rounded-full"
      />
      <h1 className="my-auto h-fit grow truncate text-3xl font-semibold">
        {name}
      </h1>

      <button className="my-auto h-8 w-8 min-w-[2rem]">
        <img
          src="icon-phone.svg"
          alt="Phone call icon"
          className="h-8 w-8 invert"
        />
      </button>

      <button className="my-auto h-10 w-10 min-w-[2.5rem]">
        <img
          src="icon-video.svg"
          alt="Video call icon"
          className="h-full w-full invert"
        />
      </button>

      <button className="my-auto h-8 w-8 min-w-[2rem]">
        <img
          src="icon-search.svg"
          alt="Search chat icon"
          className="h-8 w-8 invert"
        />
      </button>
    </div>
  )
}
