import Image from 'next/image'
import type { ReactNode } from 'react'

/**
 * Small editorial primitives shared across pages, replacing the ad-hoc
 * header markup that was duplicated on every route.
 */

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-balance text-4xl font-semibold text-ink-100 sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-ink-400">{subtitle}</p>
      )}
    </div>
  )
}

export function Container({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ' + className}>
      {children}
    </div>
  )
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  children,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  image: string
  imageAlt: string
  children?: ReactNode
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950/70 via-surface-950/80 to-surface-950" />
      </div>
      <Container className="py-24 sm:py-32">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-4 text-balance text-5xl font-semibold leading-[1.05] text-ink-100 sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg text-ink-300">{subtitle}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  )
}
