import clsx from 'clsx'
import { useState } from 'react'

type CheckboxProps = {
  action: (checked: boolean) => void
}

export default function Checkbox({ action }: CheckboxProps) {
  const [checked, setChecked] = useState(false)
  const toggle = () => {
    setChecked((prev) => {
      action(!prev)
      return !prev
    })
  }

  return (
    <div className="relative my-auto flex h-fit w-fit">
      <input
        type="checkbox"
        checked={checked}
        onChange={toggle}
        className="hidden"
      />

      <div
        onClick={toggle}
        className={clsx(
          'h-4 w-4 rounded-sm outline-1 outline-white transition-all duration-100 ease-out',
          {
            'bg-white': checked,
          },
        )}
      >
        <img
          src="icon-tick.svg"
          className={clsx(
            'aspect-square h-4 w-4 p-[0.1rem] transition-all duration-100 ease-out',
            {
              invisible: !checked,
            },
          )}
        />
      </div>
    </div>
  )
}
