import Avatar from '@/ui/misc/Avatar'

type ProfileBarProps = {
  username?: string
  avatar?: string
  createChatCallback: () => void
}

export default function ProfileBar(props: ProfileBarProps) {
  const { username, avatar, createChatCallback } = props

  return (
    <div className="flex h-fit grow gap-3 p-1">
      <Avatar name={username} url={avatar} size="4rem" style="square" />

      <h1 className="my-auto h-fit grow truncate text-4xl font-semibold capitalize">
        {username}
      </h1>

      <button
        onClick={createChatCallback}
        className="my-auto mr-1 h-8 w-8 cursor-pointer p-1 hover:opacity-60"
      >
        <img src="/icons/new-chat.svg" className="invert" />
      </button>
    </div>
  )
}
