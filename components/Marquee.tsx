'use client'

import BackgroundImage from './BackgroundImage'

/**
 * Infinite marquee that pauses on hover. The item list is rendered twice and
 * the track is translated -50%, which makes the loop seamless without JS.
 */
export function Marquee({
  items,
  speed = 'normal',
  className = '',
}: {
  items: string[]
  speed?: 'normal' | 'slow'
  className?: string
}) {
  if (items.length === 0) return null

  const track = [...items, ...items]

  return (
    <div className={'group relative flex overflow-hidden ' + className}>
      <div
        className={
          'flex shrink-0 gap-4 pr-4 group-hover:[animation-play-state:paused] ' +
          (speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee')
        }
      >
        {track.map((item, i) => (
          <MarqueeCard key={i} src={item} />
        ))}
      </div>
    </div>
  )
}

function MarqueeCard({ src }: { src: string }) {
  return (
    <div className="relative h-48 w-72 shrink-0 overflow-hidden rounded-xl border border-white/5 bg-surface-900 sm:h-56 sm:w-96">
      <BackgroundImage alt="" sizes="384px" src={src} />
    </div>
  )
}
