import Link from 'next/link'
import { SvgPoweredByVercel } from './Icons'

const socialLinks = [
  { label: 'Discord', href: 'https://discord.gg/6mygAnq' },
  { label: 'GitHub', href: 'https://github.com/Dumb-Code' },
  { label: 'Twitter', href: 'https://twitter.com/dumbcodemc' },
  { label: 'DeviantArt', href: 'https://www.deviantart.com/projectnublar' },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UCjGWjtS8OMznjzTzpxQ0QYQ',
  },
  { label: 'ArtStation', href: 'https://www.artstation.com/dumbcodemc' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <h2 className="text-2xl font-semibold text-ink-100">
              Stay Connected
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-400">
              Join our community of over 1300 users following our mod. We post
              updates on all our products on our media locations.
            </p>
            <ul className="mt-4 space-y-1.5">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-brand-400 transition-colors hover:text-brand-300"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-2">
            <h2 className="text-2xl font-semibold text-ink-100">Our Mission</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-400">
              The DumbCode{' '}
              <Link
                href="/team"
                className="text-brand-400 transition-colors hover:text-brand-300"
              >
                Team
              </Link>{' '}
              is committed to bringing high quality content to members of our
              community and expanding our community to new interested people.
              We believe in equal opportunity to contributors and we will
              strive to create a fair workplace while keeping the progress
              organized and thought out.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink-100">Mods</h2>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li>
                <FooterLink href="/mods/projectnublar">
                  Project: Nublar
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/mods/dumblibrary">Dumb Library</FooterLink>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink-100">Tools</h2>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li>
                <FooterLink href="/studio">DumbCode Studio</FooterLink>
              </li>
              <li>
                <FooterLink href="/mods/gradlehook">Gradlehook</FooterLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/5 pt-8 text-sm text-ink-400 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl leading-relaxed">
            DumbCode is in no way affiliated with Minecraft or its owners
            Mojang Studios. Our content licenses are placed under their
            corresponding code repositories and should be treated as true
            pieces of software.
          </p>
          <a
            href="https://vercel.com/?utm_source=dumbcode&utm_campaign=oss"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 opacity-70 transition-opacity hover:opacity-100"
            aria-label="Powered by Vercel"
          >
            <SvgPoweredByVercel className="h-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="text-brand-400 transition-colors hover:text-brand-300"
    >
      {children}
    </Link>
  )
}
