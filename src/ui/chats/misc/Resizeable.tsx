import clsx from 'clsx'
import { PropsWithChildren, useEffect, useState } from 'react'

type ResizeableProps = PropsWithChildren<{
  isCollapsed?: boolean
}>

export default function Resizeable(props: ResizeableProps) {
  const { isCollapsed = false, children } = props
  const [size, setSize] = useState<string | number>(250)

  useEffect(() => {
    if (isCollapsed) {
      setSize('fit-content')
    } else {
      setSize(250)
    }
  }, [isCollapsed])

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
    setSize(e.clientX - 5)
  }

  const onTouchMove = (e: TouchEvent) => {
    setSize(e.touches[0].clientX - 5)
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
    <div className="flex w-full md:w-fit">
      <div
        style={{ width: size }}
        className={clsx('max-w-[100vw] grow', {
          'min-w-[200px]': !isCollapsed,
        })}
      >
        {children}
      </div>

      {!isCollapsed && (
        <div
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          className="relative z-10 hidden h-full w-[5px] cursor-col-resize bg-zinc-950 md:flex"
        />
      )}
    </div>
  )
}
