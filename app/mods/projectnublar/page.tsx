import type { Metadata } from 'next'
import Link from 'next/link'
import { Carousel2 } from '../../../components/Carousel2'
import ModPage from '../../../components/ModPage'
import { projectNublarInfo } from '../../../data/modData'
import { buildMetadata } from '../../../lib/seo'

const images = [
  '/images/project_nublar/brachi.jpg',
  '/images/project_nublar/comp.jpg',
  '/images/project_nublar/dilo.jpg',
  '/images/project_nublar/gali.jpg',
  '/images/project_nublar/mosa.jpg',
  '/images/project_nublar/para.jpg',
  '/images/project_nublar/rex.jpg',
  '/images/project_nublar/squad.jpg',
  '/images/project_nublar/trike.jpg',
  '/images/project_nublar/velo.jpg',
]

export const metadata: Metadata = buildMetadata({
  title: projectNublarInfo.name,
  description: projectNublarInfo.description,
  path: '/mods/projectnublar',
  ogImage: { path: projectNublarInfo.image, width: 1280, height: 640 },
})

export default function ProjectNublarPage() {
  return (
    <ModPage modInfo={projectNublarInfo}>
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/5">
        <Carousel2 images={images} autoAdvance={true} />
      </div>

      <ModSection title="About">
        <p>
          Project Nublar is a mod that adds Dinosaurs to the world of Minecraft.
          It aims to bring creatures canon to the Jurassic Park novel and movie
          franchise in the game.
        </p>
      </ModSection>

      <ModSection title="Requirements">
        <p>
          Project Nublar requires DumbLibrary, which can be found on its{' '}
          <Link
            href="/mods/dumblibrary"
            className="text-brand-400 underline underline-offset-2 hover:text-brand-300"
          >
            mod page
          </Link>
          .
        </p>
      </ModSection>

      <ModSection title="Release Date">
        <p>
          DumbCode plans to release a single beta for Project Nublar for Forge
          1.16.4, after which all development will move to the latest Forge
          version.
          <br />
          No dates have been set for release or the beta.
        </p>
      </ModSection>

      <ModSection title="License">
        <p>
          GradleHook is licensed under the GNU Lesser General Public Licence
          v3.0 with no exceptions.
        </p>
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
