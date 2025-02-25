import { Outlet } from 'react-router'

import Background from '@/ui/auth/Background'

export default function AuthLayout() {
  return (
    <div className="flex h-full overflow-hidden bg-zinc-800 text-white">
      <Background />

      <div className="z-10 m-auto rounded-md bg-zinc-900 px-8 py-2 shadow-[0px_0px_20px_10px] shadow-black/15">
        <Outlet />
      </div>
    </div>
  )
}
