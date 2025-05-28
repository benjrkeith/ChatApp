import { socket } from '@/lib/socket'

export function waitFor(event: string, payload: unknown) {
  return new Promise(function (resolve, reject) {
    socket.emit(event, payload)
    socket.on(event, (result) => {
      socket.off(event)
      resolve(result)
    })
    setTimeout(reject, 1000)
  })
}
