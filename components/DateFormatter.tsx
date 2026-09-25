import { format, parseISO } from 'date-fns'

export default function DateFormatter({ dateString }: { dateString: string }) {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString} className="text-sm text-ink-400">
      {format(date, 'LLLL d, yyyy')}
    </time>
  )
}
