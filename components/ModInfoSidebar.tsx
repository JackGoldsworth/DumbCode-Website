import Link from 'next/link'
import { ModInfoType } from '../data/modData'
import { allMembers } from '../data/team'
import BackgroundImage from './BackgroundImage'
import { SVGDownload, SvgLicense, SvgSource, SvgWiki } from './Icons'

const ModInfoSidebar = ({ modInfo }: { modInfo: ModInfoType }) => {
  return (
    <aside className="w-full shrink-0 md:w-72 lg:w-80">
      <div className="sticky top-24 space-y-8 rounded-xl border border-white/5 bg-surface-900 p-6">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-100">
            About
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-400">
            {modInfo.description}
          </p>
        </div>

        <div className="space-y-2">
          <SidebarLink icon={<SvgSource className="h-4 w-4" />} href={modInfo.source} label="View Source" />
          <SidebarLink icon={<SvgWiki className="h-4 w-4" />} href={modInfo.wiki} label="View Wiki" />
          <SidebarLink icon={<SvgLicense className="h-4 w-4" />} href={modInfo.license} label="View License" />
        </div>

        {modInfo.guides.length > 0 && (
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-100">
              Guides ({modInfo.guides.length})
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {modInfo.guides.map((guide, key) => (
                <Link
                  key={guide.name + key}
                  href={`/guides/${modInfo.route}/${guide.route}`}
                  className="rounded-md bg-surface-700 px-3 py-1.5 text-xs font-semibold text-ink-200 transition-colors hover:bg-surface-600"
                >
                  {guide.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {modInfo.download && (
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-100">
              Get the mod
            </h2>
            <a
              target="_blank"
              rel="noreferrer"
              href={modInfo.download}
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              <SVGDownload className="h-4 w-4" />
              Download
            </a>
          </div>
        )}

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-100">
            Contributors
          </h2>
          <div className="mt-3 space-y-2">
            {modInfo.contributors.map((member, key) => (
              <ContributorTag
                key={member.name + key}
                member={member.name}
                role={member.role}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

function SidebarLink({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode
  href: string
  label: string
}) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={href}
      className="flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-brand-300"
    >
      {icon}
      <span className="underline underline-offset-2">{label}</span>
    </a>
  )
}

const ContributorTag = ({ member, role }: { member: string; role: string }) => {
  if (member === undefined) return null

  const memberData = allMembers.find(
    (element) => element.name.toLowerCase() === member.toLowerCase()
  )
  const name = memberData?.name ?? member
  const imageName = memberData?.imageName

  return (
    <div className="flex items-center gap-3">
      <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full bg-surface-800">
        {imageName && (
          <BackgroundImage
            alt={member}
            sizes="32px"
            src={`/images/people/${imageName}`}
          />
        )}
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm text-ink-200">{name}</p>
        <p className="truncate text-xs text-ink-400">
          {role.charAt(0).toUpperCase() + role.slice(1)}
        </p>
      </div>
    </div>
  )
}

export default ModInfoSidebar
