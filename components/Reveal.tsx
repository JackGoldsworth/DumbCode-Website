'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

/**
 * Reveals children with a subtle fade/translate when they scroll into view.
 * Uses IntersectionObserver so there is no scroll listener and the animation is
 * driven entirely by CSS. Falls back to visible if the API is unavailable.
 */
export function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li'
}) {
  const ref = useRef<HTMLElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      // @ts-expect-error -- ref type varies with the polymorphic `as` prop
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={
        'reveal transition-all duration-700 ease-out will-change-transform ' +
        (shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0') +
        ' ' +
        className
      }
    >
      {children}
    </Tag>
  )
}
