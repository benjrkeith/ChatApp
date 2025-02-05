export default function Avatar(props: { url: string }) {
  return (
    <img
      src={props.url}
      className="h-12 w-12 min-w-[3rem] rounded-full object-cover"
    />
  )
}
