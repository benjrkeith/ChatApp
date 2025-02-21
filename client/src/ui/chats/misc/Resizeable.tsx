import clsx from 'clsx'
import { PropsWithChildren, useState } from 'react'

type ResizeableProps = PropsWithChildren<{
  minWidth: number
  maxWidth: number
  isHidden: boolean
}>

export default function Resizeable(props: ResizeableProps) {
  const [size, setSize] = useState<string | number>(250)

  const onMouseDown = () => {
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
    document
      .getElementById('root')
      ?.classList.add('select-none', 'cursor-col-resize')
  }

  const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
    document
      .getElementById('root')
      ?.classList.remove('select-none', 'cursor-col-resize')
  }

  const onMouseMove = (e: MouseEvent) => {
    if (e.clientX > props.minWidth && e.clientX < props.maxWidth)
      setSize(e.clientX - 4)
  }

  const onTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0]
    if (touch.clientX > props.minWidth && touch.clientX < props.maxWidth)
      setSize(touch.clientX - 4)
  }

  const onTouchStart = () => {
    document.addEventListener('touchmove', onTouchMove)
    document.addEventListener('touchend', onTouchEnd)
    document
      .getElementById('root')
      ?.classList.add('select-none', 'cursor-col-resize')
  }

  const onTouchEnd = () => {
    document.removeEventListener('touchmove', onTouchMove)
    document.removeEventListener('touchend', onTouchEnd)
    document
      .getElementById('root')
      ?.classList.remove('select-none', 'cursor-col-resize')
  }
  return (
    <div
      className={clsx(
        'relative flex w-full border-[8px] border-zinc-900 md:w-fit',
        { 'hidden md:flex': props.isHidden },
      )}
    >
      <div
        style={{
          width: size,
          minWidth: props.minWidth,
          maxWidth: props.maxWidth,
        }}
        className="max-w-[100vw] grow"
      >
        {props.children}
      </div>

      <div
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        className="absolute right-0 z-10 hidden h-full w-[8px] translate-x-2 cursor-col-resize md:flex"
      />
    </div>
  )
}
