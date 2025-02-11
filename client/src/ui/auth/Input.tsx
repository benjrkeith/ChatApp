import clsx from 'clsx'
import { debounce } from 'lodash'

import ShowPassword from '@/ui/auth/ShowPassword'

type InputProps = {
  label: string
  error?: string
  inputRef: React.RefObject<HTMLInputElement>
  clearError: () => void
}

export default function Input(props: InputProps) {
  const { label, error, inputRef, clearError } = props
  const lower = label.toLowerCase()

  return (
    <div className="relative flex flex-col gap-3 bg-inherit">
      <input
        id={`${lower}-input`}
        ref={inputRef}
        type={lower === 'password' ? 'password' : 'text'}
        required
        spellCheck="false"
        autoComplete="off"
        onChange={() => {
          if (error) debounce(clearError, 200)()
        }}
        className={clsx(
          'peer w-64 rounded-sm p-2 pb-1 outline-1 transition-all duration-200 ease-out focus:outline-cyan-500',
          { 'outline-rose-500 focus:outline-rose-500': error },
        )}
      />

      <label
        htmlFor={`${lower}-input`}
        className="pointer-events-none absolute m-1 mt-2 mb-1 bg-inherit px-1 opacity-30 transition-all duration-100 ease-out peer-valid:mx-2 peer-valid:-translate-y-[1.05rem] peer-valid:text-xs peer-valid:opacity-100 peer-focus:mx-2 peer-focus:-translate-y-[1.05rem] peer-focus:text-xs peer-focus:opacity-100"
      >
        {label}
      </label>

      {lower === 'password' && <ShowPassword inputRef={inputRef} />}
      <span className="text-xs leading-3 text-rose-500">{error || '​'}</span>
    </div>
  )
}
//
