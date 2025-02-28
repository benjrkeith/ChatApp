import { useState } from 'react'

type CheckboxProps = {
  action: (checked: boolean) => void
}

export default function Checkbox(props: CheckboxProps) {
  const { action } = props

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
        className="h-4 w-4 rounded-sm outline-1 outline-white"
      >
        {checked && (
          <img
            src="/icons/tick.svg"
            className="aspect-square h-4 w-4 rounded-sm bg-white p-[0.1rem] outline-1 outline-white"
          />
        )}
      </div>
    </div>
  )
}
