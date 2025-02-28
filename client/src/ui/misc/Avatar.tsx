import clsx from 'clsx'

import { getAvatarColour } from '@/lib/getAvatarColour'

type AvatarProps = {
  name?: string
  url?: string
  size: string
  style: 'circle' | 'square'
}

export default function Avatar({ name, url, size, style }: AvatarProps) {
  const base_style = {
    width: size,
    height: size,
    minWidth: size,
  }

  if (url) {
    return (
      <img
        src={url}
        style={base_style}
        className={clsx('my-auto aspect-square object-cover', {
          'rounded-full': style === 'circle',
          'rounded-lg': style === 'square',
        })}
      />
    )
  } else if (name) {
    const { colour, useBlackText } = getAvatarColour(name)
    return (
      <div
        style={{
          ...base_style,
          backgroundColor: colour,
        }}
        className={clsx('pointer-events-none my-auto flex aspect-square', {
          'text-black': useBlackText,
          'rounded-full': style === 'circle',
          'rounded-lg': style === 'square',
        })}
      >
        <span className="m-auto text-2xl font-bold uppercase">
          {name.substring(0, 1)}
        </span>
      </div>
    )
  }
}
