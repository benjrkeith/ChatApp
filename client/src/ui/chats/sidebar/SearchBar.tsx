type SearchBarProps = {
  query: string
  setQuery: (query: string) => void
}

export default function SearchBar(props: SearchBarProps) {
  const { query, setQuery } = props

  return (
    <div className="px-2">
      <div className="flex w-full min-w-[8rem] gap-4 rounded-sm bg-zinc-800 px-4 py-3 outline-none focus-within:ring-2 focus-within:ring-rose-500">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search"
          className="h-full min-w-[3rem] grow outline-none"
        />

        <button className="min-w-[1.25rem]">
          <img src="icon-search.svg" className="h-5 w-5 invert" />
        </button>
      </div>
    </div>
  )
}
