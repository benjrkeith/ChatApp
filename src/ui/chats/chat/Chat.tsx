import CreateMessage from './CreateMessage'
import Messages from './Messages'
import ChatInfoBar from './TitleBar'

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
      <ChatInfoBar name={data.name} avatar={data.avatar} />
      <Messages messages={data.messages} />
      <CreateMessage />
    </div>
  )
}
