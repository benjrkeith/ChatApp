import clsx from 'clsx'
import { PropsWithChildren } from 'react'

interface SubPageProps extends PropsWithChildren {
  active: boolean
}

export default function SubPage(props: SubPageProps) {
  const { active, children } = props

  return (
    <div
      className={clsx(
        'absolute z-10 h-full w-full overflow-hidden bg-zinc-900 duration-300',
        {
          'invisible -translate-x-full': active,
        },
      )}
    >
      {children}
    </div>
  )
}
