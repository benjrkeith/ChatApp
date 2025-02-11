type SubmitProps = {
  text: string
}

export default function Submit({ text }: SubmitProps) {
  return (
    <div className="mb-2 flex">
      <input
        type="submit"
        value={text}
        className="mx-auto mt-2 w-fit rounded-md bg-cyan-500 px-3 py-1 text-lg font-bold hover:bg-cyan-600"
      />
    </div>
  )
}
