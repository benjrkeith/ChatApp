import * as types from '@/types'

// If the message is from the system, translates the code to a readable message
export function getMessageContent(message: types.Message) {
  switch (message.content) {
    case '0001':
      return `${message.author.username} created the chat`
    default:
      return message.content
  }
}
