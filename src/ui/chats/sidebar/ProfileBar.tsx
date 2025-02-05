import clsx from 'clsx'

import Avatar from '@/ui/chats/misc/Avatar'

import * as types from '@/types'

type ProfileBarProps = {
  isCollapsed?: boolean
  setIsCollapsed: (isCollapsed: boolean) => void
  data: types.User
}

export default function ProfileBar(props: ProfileBarProps) {
  const { isCollapsed = false, setIsCollapsed } = props
  const { name, avatar } = props.data

  const icon = isCollapsed ? 'icon-sidebar-right.svg' : 'icon-sidebar-left.svg'

  return (
    <div className={clsx('flex p-2', { 'px-4': !isCollapsed })}>
      {!isCollapsed && (
        <div className="flex grow gap-4 overflow-hidden">
          <Avatar url={avatar} />
          <h1 className="my-auto grow truncate text-xl font-semibold">
            {name}
          </h1>
        </div>
      )}

      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={clsx('my-auto h-fit min-w-[2rem]', {
          'w-full': isCollapsed,
        })}
      >
        <img
          src={icon}
          className={clsx('mx-auto h-8 w-8 invert', {
            'h-10 w-10': isCollapsed,
          })}
        />
      </button>
    </div>
  )
}
