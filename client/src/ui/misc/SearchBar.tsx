import { useRef } from 'react'

type SearchBarProps = {
  query: string
  setQuery: (query: string) => void
}

export default function SearchBar({ query, setQuery }: SearchBarProps) {
  const ref = useRef<HTMLInputElement>(null)

  return (
    <div
      onClick={() => ref.current?.focus()}
      className="group flex h-full w-full cursor-text gap-3 rounded-lg bg-inherit px-4 py-3 outline-none focus-within:ring-1 focus-within:ring-cyan-500 hover:ring-1 hover:ring-cyan-500"
    >
      <input
        type="text"
        placeholder="Search..."
        ref={ref}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="min-w-8 grow truncate text-lg outline-none"
      />

      <img src="/icon-search.svg" className="my-auto h-5 w-5 min-w-5" />
    </div>
  )
}
