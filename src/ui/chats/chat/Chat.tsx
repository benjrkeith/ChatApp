import CreateMessage from '@/ui/chats/chat/CreateMessage'
import Messages from '@/ui/chats/chat/Messages'
import TitleBar from '@/ui/chats/chat/TitleBar'

const data = {
  name: 'Jedi Council',
  avatar: '/avatar.jpg',
  members: ['Ben', 'Obi-Wan'],
  messages: [
    { content: 'Hello there!', createdAt: '13:02' },
    { content: 'General Kenobi!', createdAt: '14:23' },
    { content: 'You are a bold one!', createdAt: '17:14' },
    {
      content:
        'Howdy there how are you today? This is a long message for testing. Even longer than the last one. I hope this is enough to test the wrapping of the message box.',
      createdAt: '19:44',
    },
  ],
}

export default function Chat() {
  return (
    <div className="relative z-20 flex h-full w-full flex-col overflow-hidden bg-zinc-800">
      <div className="absolute z-10 h-full w-full bg-[url(/chat-bg.svg)] opacity-[1%]" />
      <TitleBar data={data} />
      <Messages messages={data.messages} />
      <CreateMessage />
    </div>
  )
}
