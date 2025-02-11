import * as types from '@/types'

export function translateSysMessage(message: types.Message) {
  if (!message.system) return message.content

  switch (message.content) {
    case '0001':
      return `${message.author.username} created the chat`
    default:
      return message.content
  }
}
