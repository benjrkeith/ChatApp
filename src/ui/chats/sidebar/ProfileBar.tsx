import Avatar from '@/ui/chats/misc/Avatar'

import * as types from '@/types'

type ProfileBarProps = {
  data: types.User
}

export default function ProfileBar(props: ProfileBarProps) {
  const { name, avatar } = props.data

  return (
    <div className="my-1 flex p-2">
      <div className="flex grow gap-4 overflow-hidden">
        <Avatar url={avatar} />
        <h1 className="my-auto grow text-2xl font-semibold">{name}</h1>
      </div>

      <button onClick={() => {}} className="my-auto h-fit min-w-[2rem]">
        <img src={'icon-options.svg'} className="mx-auto h-7 w-7 invert" />
      </button>
    </div>
  )
}
