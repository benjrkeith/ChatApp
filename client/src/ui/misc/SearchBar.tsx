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
      onClick={() => ref.current?.focus()}
      className="group box-border flex h-full w-full cursor-text gap-2 rounded-sm bg-zinc-800 px-2 py-2 outline-none"
    >
      <img
        src="/icons/search.svg"
        className="my-auto h-7 w-7 min-w-7 cursor-pointer p-1 invert hover:opacity-60"
      />

      <input
        type="text"
        placeholder="Search..."
        ref={ref}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="min-w-8 grow truncate text-lg outline-none"
      />
    </div>
  )
}
