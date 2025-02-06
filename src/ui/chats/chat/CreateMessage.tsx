export default function CreateMessage() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
      }}
      className="z-20 flex gap-8 bg-zinc-900 px-8 py-2 shadow-[10px_0px_10px] shadow-black/25"
    >
      <button className="my-auto hidden h-7 w-7 min-w-[1.75rem] sm:block">
        <img
          src="icon-emoji.svg"
          alt="Emoji picker icon"
          className="h-full w-full invert"
        />
      </button>

      <button className="my-auto hidden h-7 w-7 min-w-[1.75rem] sm:block">
        <img
          src="icon-attach.svg"
          alt="Attach file icon"
          className="h-full w-full invert"
        />
      </button>

      <input
        type="text"
        placeholder="Type a message"
        className="min-w-[11rem] grow rounded-md bg-zinc-800 px-4 py-2 outline-none focus:ring-2 focus:ring-rose-500"
      />

      <button type="submit" className="my-auto h-8 w-8 min-w-[2rem]">
        <img
          src="icon-send.svg"
          alt="Send message icon"
          className="h-full w-full invert"
        />
      </button>
    </form>
  )
}
