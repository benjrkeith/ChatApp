export default function CreateMessage() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
      }}
      className="z-20 flex gap-6 bg-zinc-900 px-6 py-3 text-xl shadow-[10px_0px_10px] shadow-black/25"
    >
      <button className="my-auto hidden h-8 w-8 min-w-[2rem] sm:block">
        <img
          src="icon-emoji.svg"
          alt="Emoji picker icon"
          className="h-8 w-8 invert"
        />
      </button>

      <button className="my-auto hidden h-8 w-8 min-w-[2rem] sm:block">
        <img
          src="icon-attach.svg"
          alt="Attach file icon"
          className="h-8 w-8 invert"
        />
      </button>

      <input
        type="text"
        placeholder="Type a message"
        className="min-w-[11rem] grow rounded-md bg-zinc-800 px-4 py-2 outline-none focus:ring-1"
      />

      <button type="submit" className="my-auto h-10 w-10 min-w-[2.5rem]">
        <img
          src="icon-send.svg"
          alt="Send message icon"
          className="h-10 w-10 invert"
        />
      </button>
    </form>
  )
}
