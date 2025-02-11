import clsx from 'clsx'
import { useRef, useState } from 'react'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleOutsideClick = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      document.removeEventListener('click', handleOutsideClick)
      setIsOpen(false)
    }
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsOpen((prev) => !prev)

    if (!isOpen) document.addEventListener('click', handleOutsideClick)
    else document.removeEventListener('click', handleOutsideClick)
  }

  return (
    <div ref={menuRef} className="my-auto flex flex-col">
      <button
        onClick={handleClick}
        className={clsx(
          'aspect-square min-w-[1.75rem] rounded-md p-1 transition-all duration-200 ease-out hover:bg-zinc-950',
          {
            'rounded-b-none bg-zinc-950': isOpen,
          },
        )}
      >
        <img src="/icon-options.svg" className="m-auto h-7 w-7 invert" />
      </button>

      <div
        className={clsx(
          'relative z-20 cursor-default transition-all duration-200 ease-out',
          {
            'invisible -z-20 opacity-0': !isOpen,
          },
        )}
      >
        <ul className="absolute right-0 flex flex-col gap-1 rounded-xl rounded-tr-none bg-zinc-950 p-1 text-center">
          <button className="rounded-md px-4 py-1 hover:bg-zinc-800">
            Logout
          </button>
          <button className="rounded-md px-4 py-1 hover:bg-zinc-800">
            Settings
          </button>
        </ul>
      </div>
    </div>
  )
}
