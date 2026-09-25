import type { Metadata } from 'next'
import Link from 'next/link'
import BackgroundImage from '../../components/BackgroundImage'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { Container, SectionHeading } from '../../components/Section'
import { buildMetadata } from '../../lib/seo'

const project_nublar = '/images/project_nublar/trike.jpg'
const dumb_library = '/images/dumb_library.bmp'
const gradlehook = '/images/gradle_hook.bmp'

export const metadata: Metadata = buildMetadata({
  title: 'Mods',
  description: 'All of the DumbCode Mods',
  path: '/mods',
  ogImage: { path: project_nublar, width: 1280, height: 640 },
})

const mods = [
  {
    title: 'Project: Nublar',
    route: '/mods/projectnublar',
    img: project_nublar,
    desc: 'Project Nublar is a mod that adds Dinosaurs to the world of Minecraft. It aims to bring creatures canon to the Jurassic Park novel and movie franchise in the game.',
  },
  {
    title: 'DumbLibrary',
    route: '/mods/dumblibrary',
    img: dumb_library,
    desc: 'A Minecraft modding library made for DumbCode mods. It includes animation, ECS, and other useful tools for creating Minecraft mods.',
  },
  {
    title: 'Gradlehook',
    route: '/mods/gradlehook',
    img: gradlehook,
    desc: 'Adds a postRequest gradle task which posts a POST request along with the specified builds. Additional fields for the request can be specified.',
  },
]

export default function ModsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface-950">
      <Navbar />
      <main className="flex-1 pt-16">
        <Container className="py-20">
          <SectionHeading
            eyebrow="What we build"
            title="DumbCode Mods"
            subtitle="The cool stuff we've made for players and modders."
          />
        </Container>

        <Container className="space-y-16 pb-24">
          {mods.map((mod, i) => (
            <ModSection key={mod.title} {...mod} flip={i % 2 === 1} />
          ))}
        </Container>
      </main>
      <Footer />
    </div>
  )
}

function ModSection({
  title,
  desc,
  route,
  img,
  flip,
}: {
  title: string
  desc: string
  route: string
  img: string
  flip: boolean
}) {
  return (
    <section
      className={
        'grid items-center gap-8 lg:grid-cols-3 ' +
        (flip ? 'lg:[&>*:first-child]:order-2' : '')
      }
    >
      <div className="rounded-xl border border-white/5 bg-surface-900 p-6 lg:col-span-1">
        <h2 className="text-3xl font-semibold text-ink-100">{title}</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-400">{desc}</p>
        <Link
          href={route}
          className="mt-8 inline-block rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
        >
          View More
        </Link>
      </div>
      <Link
        href={route}
        className="group block aspect-video overflow-hidden rounded-xl border border-white/5 bg-surface-900 lg:col-span-2"
      >
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
          <BackgroundImage alt={title} sizes="(min-width: 1024px) 66vw, 100vw" src={img} />
        </div>
      </Link>
    </section>
  )
}
