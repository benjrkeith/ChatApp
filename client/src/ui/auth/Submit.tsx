type SubmitProps = {
  text: string
}

export default function Submit(props: SubmitProps) {
  const { text } = props

  return (
    <input
      type="submit"
      value={text}
      className="mx-auto my-2 w-fit rounded-md bg-cyan-500 px-3 py-1 text-lg font-bold hover:bg-cyan-700"
    />
  )
}
