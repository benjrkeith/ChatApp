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
  const res = (await waitFor('history', payload)) as Res
  return res.messages
}
