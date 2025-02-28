export function getDateTimeString(date: string) {
  const lastActivity = new Date(date)
  const today = new Date()
  const lastWeek = new Date()
  lastWeek.setDate(today.getDate() - 6)

  if (today.toDateString() === lastActivity.toDateString()) {
    return lastActivity.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })
  } else if (lastActivity > lastWeek)
    return Intl.DateTimeFormat('en-gb', { weekday: 'long' }).format(
      lastActivity,
    )
  else
    return lastActivity.toLocaleDateString([], {
      day: '2-digit',
      month: '2-digit',
      year: undefined,
    })
}
