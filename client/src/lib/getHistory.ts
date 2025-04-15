import { waitFor } from '@/lib/waitFor'
import * as types from '@/types'

type Res = {
  chat_id: string
  messages: types.Message[]
}

export async function getHistory(
  chat_id: string,
  skip: number,
): Promise<types.Message[]> {
  const payload = { chat_id, skip }
  let messages: types.Message[]

  try {
    const res = (await waitFor('history', payload)) as Res
    messages = res.messages
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    console.error('GetHistory timed out')
    messages = []
  }

  return messages
}
