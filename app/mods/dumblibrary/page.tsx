import type { Metadata } from 'next'
import ModPage from '../../../components/ModPage'
import { dumbLibraryInfo } from '../../../data/modData'
import { buildMetadata } from '../../../lib/seo'

export const metadata: Metadata = buildMetadata({
  title: dumbLibraryInfo.name,
  description: dumbLibraryInfo.description,
  path: '/mods/dumblibrary',
  ogImage: { path: dumbLibraryInfo.image, width: 1280, height: 640 },
})

export default function DumbLibraryPage() {
  return (
    <ModPage modInfo={dumbLibraryInfo}>
      <ModSection title="About">
        <p>
          A Minecraft modding library made for DumbCode mods. It builds off of
          the library LLibrary (see below), and includes animation among other
          useful tools.
        </p>
      </ModSection>

      <ModSection title="Documentation">
        <ul className="space-y-2">
          <li>
            <DocLink href="https://github.com/Dumb-Code/DumbLibrary/wiki/Entity-Component-System">
              Entity Component System
            </DocLink>
          </li>
          <li>
            <DocLink href="https://github.com/Dumb-Code/DumbLibrary/wiki/Animation-API">
              Animation System
            </DocLink>
          </li>
        </ul>
      </ModSection>

      <ModSection title="License">
        <p>
          GradleHook is licensed under the GNU Lesser General Public Licence
          v3.0 with no exceptions.
        </p>
      </ModSection>

      <ModSection title="Acknowledgments">
        <DocLink href="https://minecraft.curseforge.com/projects/llibrary">
          LLibrary
        </DocLink>
      </ModSection>
    </ModPage>
  )
}

function ModSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold text-ink-100">{title}</h2>
      <div className="mt-3 max-w-2xl leading-relaxed text-ink-400">
        {children}
      </div>
    </section>
  )
}

function DocLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={href}
      className="text-brand-400 underline underline-offset-2 hover:text-brand-300"
    >
      {children}
    </a>
  )
}
