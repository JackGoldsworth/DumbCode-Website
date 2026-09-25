'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import {
  SvgArtstation,
  SvgDeviantart,
  SvgDiscord,
  SvgGithub,
  SvgTwitter,
  SvgYoutube,
} from './Icons'

const logo = '/images/brand/logo.svg'

const NAV_ITEMS = [
  { name: 'Home', route: '/' },
  { name: 'Studio', route: '/studio' },
  { name: 'Team', route: '/team' },
  { name: 'Mods', route: '/mods' },
  { name: 'Blog', route: '/blog' },
]

const SOCIALS = [
  { icon: <SvgDiscord />, route: 'https://discord.gg/6mygAnq', label: 'Discord' },
  { icon: <SvgTwitter />, route: 'https://twitter.com/dumbcodemc', label: 'Twitter' },
  { icon: <SvgGithub />, route: 'https://github.com/Dumb-Code', label: 'GitHub' },
  {
    icon: <SvgYoutube />,
    route: 'https://www.youtube.com/channel/UCjGWjtS8OMznjzTzpxQ0QYQ',
    label: 'YouTube',
  },
  {
    icon: <SvgDeviantart />,
    route: 'https://www.deviantart.com/projectnublar',
    label: 'DeviantArt',
  },
  {
    icon: <SvgArtstation />,
    route: 'https://www.artstation.com/dumbcodemc',
    label: 'ArtStation',
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300 ' +
        (scrolled || open
          ? 'glass border-b border-white/5'
          : 'border-b border-transparent')
      }
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-4 sm:px-6 lg:px-8"
        aria-label="Main"
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-lg px-2 py-1.5 transition-colors hover:bg-white/5"
        >
          <span className="relative h-7 w-7">
            <Image src={logo} alt="" width={28} height={28} className="h-7 w-7" />
          </span>
          <span className="text-sm font-semibold tracking-[0.18em] text-ink-100">
            DUMBCODE
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.route}
              {...item}
              active={
                item.route === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.route)
              }
            />
          ))}
        </div>

        <div className="ml-auto hidden items-center gap-1 lg:flex">
          {SOCIALS.map((s) => (
            <SocialLink key={s.label} {...s} />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-lg text-ink-200 transition-colors hover:bg-white/5 lg:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={
                'absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ' +
                (open
                  ? 'top-1/2 -translate-y-1/2 rotate-45'
                  : 'top-0 translate-y-0')
              }
            />
            <span
              className={
                'absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 rounded-full bg-current transition-all duration-200 ' +
                (open ? 'opacity-0' : 'opacity-100')
              }
            />
            <span
              className={
                'absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ' +
                (open
                  ? 'top-1/2 -translate-y-1/2 -rotate-45'
                  : 'top-full -translate-y-full')
              }
            />
          </span>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={
          'overflow-hidden border-t border-white/5 bg-surface-900/95 backdrop-blur transition-[max-height] duration-300 lg:hidden ' +
          (open ? 'max-h-96' : 'max-h-0')
        }
      >
        <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.route}
              href={item.route}
              className={
                'rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ' +
                (pathname === item.route
                  ? 'bg-brand-600/15 text-brand-300'
                  : 'text-ink-300 hover:bg-white/5 hover:text-ink-100')
              }
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-3 flex flex-wrap gap-2 border-t border-white/5 pt-4">
            {SOCIALS.map((s) => (
              <SocialLink key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

function NavLink({
  name,
  route,
  active,
}: {
  name: string
  route: string
  active: boolean
}) {
  return (
    <Link
      href={route}
      className={
        'rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ' +
        (active
          ? 'bg-brand-600/15 text-brand-300'
          : 'text-ink-300 hover:bg-white/5 hover:text-ink-100')
      }
    >
      {name}
    </Link>
  )
}

function SocialLink({
  icon,
  route,
  label,
}: {
  icon: React.ReactNode
  route: string
  label: string
}) {
  return (
    <a
      href={route}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded-full text-ink-400 transition-all hover:scale-110 hover:bg-white/5 hover:text-brand-300 [&>svg]:h-4 [&>svg]:w-4"
    >
      {icon}
    </a>
  )
}
