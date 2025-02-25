import React from 'react'

import Checkbox from '@/ui/misc/Checkbox'

type ShowPasswordProps = {
  inputRef: React.RefObject<HTMLInputElement>
}

export default function ShowPassword(props: ShowPasswordProps) {
  const { inputRef } = props

  const checkboxAction = (checked: boolean) => {
    if (inputRef.current) inputRef.current.type = checked ? 'text' : 'password'
  }

  return (
    <div className="flex gap-2">
      <Checkbox action={checkboxAction} />
      <label className="text-sm">Show password</label>
    </div>
  )
}
