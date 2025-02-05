export default function SearchBar() {
  return (
    <div className="mx-auto flex w-[90%] min-w-[8rem] gap-4 rounded-sm bg-zinc-800 px-4 py-3 outline-none focus-within:ring-2 focus-within:ring-rose-500">
      <input
        type="text"
        placeholder="Search"
        className="h-full min-w-[3rem] grow outline-none"
      />

      <button className="min-w-[1.25rem]">
        <img src="icon-search.svg" className="h-5 w-5 invert" />
      </button>
    </div>
  )
}
