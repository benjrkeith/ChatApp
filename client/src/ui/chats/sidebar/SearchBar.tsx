import { useRef } from 'react'

type SearchBarProps = {
  query: string
  setQuery: (query: string) => void
}

export default function SearchBar(props: SearchBarProps) {
  const { query, setQuery } = props
  const ref = useRef<HTMLInputElement>(null)

  return (
    <div
      onClick={() => {
        ref.current?.focus()
      }}
      className="group flex w-full min-w-[8rem] cursor-text gap-4 rounded-lg bg-zinc-800 px-3 py-3 outline-none focus-within:ring-1 focus-within:ring-cyan-500 hover:ring-1 hover:ring-cyan-500"
    >
      <input
        value={query}
        ref={ref}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search..."
        className="min-w-[2rem] grow text-lg outline-none"
      />

      <img src="/icon-search.svg" className="my-auto h-5 w-5 min-w-[1.25rem]" />
    </div>
  )
}
