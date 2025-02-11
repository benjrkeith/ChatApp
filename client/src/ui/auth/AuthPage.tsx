import { Outlet } from 'react-router'

export default function AuthPage() {
  return (
    <div className="flex h-full overflow-hidden bg-zinc-800 text-white">
      <div className="absolute h-full w-full bg-[url(/chat-bg.svg)] opacity-5" />
      <div className="z-10 m-auto rounded-lg bg-zinc-900 px-8 py-2 shadow-[0px_0px_20px_10px] shadow-black/15">
        <Outlet />
      </div>
    </div>
  )
}
