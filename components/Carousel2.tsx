'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import BackgroundImage from './BackgroundImage'

/**
 * Auto-advancing image carousel. Rewritten from the scroll-hack version to a
 * transform-based track so it does not depend on smooth-scroll behaviour or
 * duplicated slides, and so it exposes manual controls.
 */
export const Carousel2 = ({
  images,
  autoAdvance,
}: {
  images: string[]
  autoAdvance: boolean
}) => {
  const [index, setIndex] = useState(0)
  const count = images.length
  const paused = useRef(false)

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count]
  )

  useEffect(() => {
    if (!autoAdvance || count <= 1) return
    const id = setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % count)
    }, 4000)
    return () => clearInterval(id)
  }, [autoAdvance, count])

  if (count === 0) return null

  return (
    <div
      className="group relative h-full w-full overflow-hidden rounded-xl border border-white/5"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div
        className="flex h-full w-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="relative h-full w-full shrink-0">
            <BackgroundImage alt={`Slide ${i + 1}`} src={img} />
          </div>
        ))}
      </div>

      <CarouselButton side="left" onClick={() => go(index - 1)} />
      <CarouselButton side="right" onClick={() => go(index + 1)} />

      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
            className={
              'h-2 rounded-full transition-all ' +
              (i === index
                ? 'w-6 bg-brand-400'
                : 'w-2 bg-white/40 hover:bg-white/70')
            }
          />
        ))}
      </div>
    </div>
  )
}

function CarouselButton({
  side,
  onClick,
}: {
  side: 'left' | 'right'
  onClick: () => void
}) {
  const isLeft = side === 'left'
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isLeft ? 'Previous slide' : 'Next slide'}
      className={
        'absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface-950/60 text-ink-100 opacity-0 backdrop-blur transition-all hover:bg-surface-950/90 group-hover:opacity-100 ' +
        (isLeft ? 'left-4' : 'right-4')
      }
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
        {isLeft ? (
          <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  )
}
