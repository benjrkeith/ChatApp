import CreateMessage from '@/ui/chats/chat/CreateMessage'
import Messages from '@/ui/chats/chat/Messages'
import TitleBar from '@/ui/chats/chat/TitleBar'

const messages = [
  { content: 'Hello there!', dateTime: '13:02' },
  { content: 'General Kenobi!', dateTime: '14:23' },
  { content: 'You are a bold one!', dateTime: '17:14' },
]

const data = {
  name: 'Jedi Council',
  avatar: '/avatar.jpg',
  members: ['Ben', 'Obi-Wan'],
  messages,
}

export default function Chat() {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <img
        src="/chat-bg.svg"
        alt="Background decoration image"
        className="absolute h-full object-cover opacity-[1%]"
      />
      <TitleBar name={data.name} avatar={data.avatar} />
      <Messages messages={data.messages} />
      <CreateMessage />
    </div>
  )
}
