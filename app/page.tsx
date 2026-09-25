import type { Metadata } from 'next'
import Link from 'next/link'
import BackgroundImage from '../components/BackgroundImage'
import Footer from '../components/Footer'
import { Marquee } from '../components/Marquee'
import Navbar from '../components/Navbar'
import { Reveal } from '../components/Reveal'
import { Container } from '../components/Section'
import TeamCarousel from '../components/TeamCarousel'
import { buildMetadata } from '../lib/seo'

const banner = '/images/project_nublar/squad.jpg'

const studioShots = [
  '/images/studio/project.png',
  '/images/studio/modeler.png',
  '/images/studio/mapper.png',
  '/images/studio/texturer.png',
  '/images/studio/animator.png',
]

const studioFeatures = [
  { title: 'Project Management', image: '/images/studio/project.png', accent: 'text-violet-300' },
  { title: 'Modeler', image: '/images/studio/modeler.png', accent: 'text-blue-300' },
  { title: 'Texture Mapper', image: '/images/studio/mapper.png', accent: 'text-teal-300' },
  { title: 'Texturer', image: '/images/studio/texturer.png', accent: 'text-green-300' },
  { title: 'Animator', image: '/images/studio/animator.png', accent: 'text-amber-300' },
]

const mods = [
  {
    title: 'Project: Nublar',
    route: '/mods/projectnublar',
    img: '/images/project_nublar/brachi.jpg',
    tag: 'Minecraft mod',
    desc: 'Adds Dinosaurs to the world of Minecraft, bringing creatures canon to the Jurassic Park novel and film franchise into the game.',
  },
  {
    title: 'DumbLibrary',
    route: '/mods/dumblibrary',
    img: '/images/dumb_library.bmp',
    tag: 'Library',
    desc: 'The modding library behind DumbCode mods — animation, ECS, and more.',
  },
  {
    title: 'Gradlehook',
    route: '/mods/gradlehook',
    img: '/images/gradle_hook.bmp',
    tag: 'Gradle plugin',
    desc: 'A postRequest gradle task that posts builds to any endpoint, with configurable fields.',
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

      {/* ---------------------------------------------------------------- */}
      {/* Hero — oversized type over a full-bleed image with a floating chip */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative isolate flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <BackgroundImage
            alt="DumbCode banner"
            priority
            src={banner}
            className="opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-950/70 via-surface-950/80 to-surface-950" />
          <div className="bg-grid absolute inset-0" />
          <div className="hero-glow absolute inset-0" />
        </div>

        <Container className="pt-24 pb-32">
          <div className="grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal>
                <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-brand-400">
                  <span className="h-px w-10 bg-brand-500/60" />
                  Minecraft mods &amp; tools
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="display mt-6 text-balance text-[clamp(3rem,10vw,8.5rem)] text-ink-100">
                  Re-inventing
                  <br />
                  the way you play
                  <br />
                  <span className="text-gradient">Minecraft</span>.
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <Link
                    href="/studio"
                    className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-600 hover:gap-3"
                  >
                    Explore the Studio
                    <span aria-hidden>→</span>
                  </Link>
                  <Link
                    href="/mods"
                    className="rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-ink-100 backdrop-blur transition-colors hover:bg-white/10"
                  >
                    See our Mods
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Floating stat chip cluster */}
            <Reveal delay={300} className="lg:col-span-4">
              <div className="flex flex-col gap-3 lg:items-end">
                <div className="animate-float w-fit rounded-2xl border border-white/10 bg-surface-900/70 p-5 backdrop-blur">
                  <p className="text-4xl font-semibold text-ink-100">1300+</p>
                  <p className="mt-1 text-sm text-ink-400">
                    community members
                  </p>
                </div>
                <div
                  className="animate-float w-fit rounded-2xl border border-white/10 bg-surface-900/70 p-5 backdrop-blur"
                  style={{ animationDelay: '1.5s' }}
                >
                  <p className="text-4xl font-semibold text-ink-100">
                    Since &rsquo;19
                  </p>
                  <p className="mt-1 text-sm text-ink-400">building in the open</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-400">
          <span className="block h-10 w-px animate-pulse bg-gradient-to-b from-transparent to-ink-400" />
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Studio — asymmetric split + full-bleed marquee                    */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative border-t border-white/5 py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">
                Powered by
              </p>
              <h2 className="display mt-4 text-5xl text-ink-100 sm:text-6xl">
                DumbCode
                <br />
                Studio
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-300">
                A full-featured game asset creation tool. Modelers, texturers,
                animators, and project leads work in one place.
              </p>
              <Link
                href="/studio"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 transition-all hover:gap-3 hover:text-brand-300"
              >
                View More <span aria-hidden>→</span>
              </Link>
            </Reveal>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {studioFeatures.slice(0, 4).map((f, i) => (
                  <Reveal key={f.title} delay={i * 80}>
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 bg-surface-900">
                      <BackgroundImage
                        alt={f.title}
                        sizes="(min-width: 640px) 30vw, 100vw"
                        src={f.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-950/90 via-surface-950/10 to-transparent" />
                      <p
                        className={
                          'absolute bottom-4 left-4 text-sm font-semibold ' +
                          f.accent
                        }
                      >
                        {f.title}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>

        <div className="mt-20">
          <Marquee items={studioShots} />
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Mods — bento grid with one featured card                          */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-t border-white/5 bg-surface-900/40 py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">
                What we build
              </p>
              <h2 className="display mt-4 text-5xl text-ink-100 sm:text-6xl">
                DumbCode Mods
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link
                href="/mods"
                className="text-sm font-semibold text-brand-400 transition-colors hover:text-brand-300"
              >
                Browse all mods →
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Featured */}
            <Reveal className="lg:row-span-2">
              <ModCard mod={mods[0]} featured />
            </Reveal>
            <Reveal delay={100}>
              <ModCard mod={mods[1]} />
            </Reveal>
            <Reveal delay={200}>
              <ModCard mod={mods[2]} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Mission band — full-bleed pull quote                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative isolate overflow-hidden border-t border-white/5 py-32">
        <div className="absolute inset-0 -z-10">
          <BackgroundImage
            alt=""
            sizes="100vw"
            src="/images/project_nublar/gali.jpg"
            className="opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-950/85 to-surface-950" />
        </div>
        <Container>
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">
              Our mission
            </p>
            <blockquote className="display mt-6 text-balance text-3xl text-ink-100 sm:text-5xl">
              Bringing high-quality content to our community, and expanding it
              to new people — with equal opportunity for every contributor.
            </blockquote>
            <Link
              href="/team"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 transition-all hover:gap-3 hover:text-brand-300"
            >
              Meet the team <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Team carousel                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-t border-white/5 py-28">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">
              The people
            </p>
            <h2 className="display mt-4 text-5xl text-ink-100 sm:text-6xl">
              DumbCode Team
            </h2>
          </Reveal>
        </Container>
        <div className="mt-14">
          <TeamCarousel />
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ModCard({
  mod,
  featured = false,
}: {
  mod: { title: string; route: string; img: string; tag: string; desc: string }
  featured?: boolean
}) {
  return (
    <Link
      href={mod.route}
      className={
        'group relative flex overflow-hidden rounded-2xl border border-white/5 bg-surface-900 transition-all duration-300 hover:border-brand-500/40 hover:shadow-2xl hover:shadow-brand-950/40 ' +
        (featured ? 'h-full min-h-[26rem] flex-col' : 'flex-col sm:flex-row')
      }
    >
      <div
        className={
          'relative overflow-hidden ' +
          (featured ? 'aspect-video w-full' : 'aspect-video w-full sm:w-2/5')
        }
      >
        <BackgroundImage
          alt={mod.title}
          sizes="(min-width: 1024px) 50vw, 100vw"
          src={mod.img}
        />
        {featured && (
          <span className="absolute left-4 top-4 rounded-full bg-brand-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            Featured
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
          {mod.tag}
        </span>
        <h3
          className={
            'mt-3 font-semibold text-ink-100 ' +
            (featured ? 'text-3xl' : 'text-2xl')
          }
        >
          {mod.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-400">
          {mod.desc}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 transition-all group-hover:gap-3 group-hover:text-brand-300">
          View More <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  )
}
