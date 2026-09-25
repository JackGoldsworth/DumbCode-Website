import type { Metadata } from 'next'
import Link from 'next/link'
import BackgroundImage from '../components/BackgroundImage'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Container, SectionHeading } from '../components/Section'
import TeamCarousel from '../components/TeamCarousel'
import { buildMetadata } from '../lib/seo'

const banner = '/images/project_nublar/squad.jpg'

const studioFeatures = [
  { title: 'Project Management', image: '/images/studio/project.png', tone: 'from-violet-500/80' },
  { title: 'Modeler', image: '/images/studio/modeler.png', tone: 'from-blue-500/80' },
  { title: 'Texture Mapper', image: '/images/studio/mapper.png', tone: 'from-teal-500/80' },
  { title: 'Texturer', image: '/images/studio/texturer.png', tone: 'from-green-500/80' },
  { title: 'Animator', image: '/images/studio/animator.png', tone: 'from-amber-500/80' },
]

const mods = [
  {
    title: 'DumbLibrary',
    route: '/mods/dumblibrary',
    img: '/images/dumb_library.bmp',
    desc: "A Minecraft modding library made for DumbCode mods. It builds off of the library LLibrary and includes animation among other useful tools.",
  },
  {
    title: 'Project: Nublar',
    route: '/mods/projectnublar',
    img: '/images/project_nublar/brachi.jpg',
    desc: 'Project Nublar is a mod that adds Dinosaurs to the world of Minecraft. It aims to bring creatures canon to the Jurassic Park novel and movie franchise in the game.',
  },
  {
    title: 'Gradlehook',
    route: '/mods/gradlehook',
    img: '/images/gradle_hook.bmp',
    desc: 'Adds a postRequest gradle task which posts a POST request along with the specified builds, with configurable additional fields.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'DumbCode',
  description: 'The Home of everything DumbCode',
  path: '/',
  ogImage: { path: banner, width: 1280, height: 640 },
})

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface-950">
      <Navbar />

      {/* Hero */}
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <BackgroundImage
            alt="DumbCode banner"
            priority
            src={banner}
            className="opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-950/60 via-surface-950/75 to-surface-950" />
          <div className="hero-glow absolute inset-0" />
        </div>

        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">
              Minecraft mods &amp; tools
            </p>
            <h1 className="mt-5 text-balance text-6xl font-semibold leading-[1.02] text-ink-100 sm:text-7xl lg:text-8xl">
              Re-inventing the way you play{' '}
              <span className="text-gradient">Minecraft</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-300">
              DumbCode makes the mods and the studio-level tools that bring your
              blocky worlds to life.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/studio"
                className="rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
              >
                Explore the Studio
              </Link>
              <Link
                href="/mods"
                className="rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-ink-100 backdrop-blur transition-colors hover:bg-white/10"
              >
                See our Mods
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Studio */}
      <section className="relative border-t border-white/5 py-24">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Powered by"
                title="DumbCode Studio"
                subtitle="A full-featured game asset creation tool. Modelers, texturers, animators, and project leads work in one place."
              />
              <Link
                href="/studio"
                className="mt-8 inline-block rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
              >
                View More
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {studioFeatures.map((f, i) => (
                <div
                  key={f.title}
                  className={
                    'group relative aspect-video overflow-hidden rounded-xl border border-white/5 bg-surface-900 transition-transform duration-300 hover:scale-[1.03] ' +
                    (i === 0 ? 'col-span-2 sm:col-span-1' : '')
                  }
                >
                  <BackgroundImage alt={f.title} sizes="240px" src={f.image} />
                  <div
                    className={
                      'absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent p-3 ' +
                      f.tone
                    }
                  >
                    <p className="text-xs font-semibold text-white">{f.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Mods */}
      <section className="border-t border-white/5 bg-surface-900/40 py-24">
        <Container>
          <SectionHeading
            eyebrow="What we build"
            title="DumbCode Mods"
            subtitle="The cool stuff we've made for players and modders."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mods.map((mod) => (
              <Link
                key={mod.title}
                href={mod.route}
                className="group flex flex-col overflow-hidden rounded-xl border border-white/5 bg-surface-900 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-2xl hover:shadow-brand-950/40"
              >
                <div className="relative aspect-video">
                  <BackgroundImage
                    alt={mod.title}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    src={mod.img}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-ink-100">
                    {mod.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-400">
                    {mod.desc}
                  </p>
                  <span className="mt-6 text-sm font-semibold text-brand-400 transition-colors group-hover:text-brand-300">
                    View More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="border-t border-white/5 py-24">
        <Container>
          <SectionHeading
            eyebrow="The people"
            title="DumbCode Team"
            subtitle="The epic people behind our projects."
          />
        </Container>
        <div className="mt-12">
          <TeamCarousel />
        </div>
      </section>

      <Footer />
    </div>
  )
}
