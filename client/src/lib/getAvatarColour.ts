export function getAvatarColour(username: string) {
  let hash = 0
  for (let i = 0; i < username.length; i++) {
    hash = (hash << 5) - hash + username.charCodeAt(i)
  }

  let colour = '#'
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff
    colour += ('00' + value.toString(16)).substr(-2)
  }

  const useBlackText = parseInt(colour.replace('#', ''), 16) > 0xffffff / 2
  return { colour, useBlackText }
}
