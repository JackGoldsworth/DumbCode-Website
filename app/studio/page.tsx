import type { Metadata } from 'next'
import type { ComponentType } from 'react'
import Image from 'next/image'
import Footer from '../../components/Footer'
import { Marquee } from '../../components/Marquee'
import Navbar from '../../components/Navbar'
import { Reveal } from '../../components/Reveal'
import { Container } from '../../components/Section'
import {
  AnimatorDesc,
  ModelerDesc,
  ProjectDesc,
  TexturerDesc,
} from '../../data/studioinfo'
import { buildMetadata } from '../../lib/seo'

const banner = '/images/project_nublar/brachi.jpg'
const worrt = '/images/galaxies/worrt.png'

const promo1 = '/images/project_nublar/squad.jpg'
const promo2 = '/images/project_nublar/gali.jpg'
const promo3 = '/images/project_nublar/para.jpg'

const project = '/images/studio/project.png'
const modeler = '/images/studio/modeler.png'
const texturer = '/images/studio/texturer.png'
const animator = '/images/studio/animator.png'

export const metadata: Metadata = buildMetadata({
  title: 'Studio',
  description: 'Everything you need to know about the DumbCode Studio',
  path: '/studio',
  ogImage: { path: banner, width: 1280, height: 640 },
})

const views = [
  {
    index: '01',
    title: 'Your New Favorite Modeler',
    subtitle: 'The modeler that changes it all.',
    Content: ModelerDesc,
    image: modeler,
  },
  {
    index: '02',
    title: 'Bring the Texture Artists Back',
    subtitle: "Finally a built-in texture tool that isn't bad.",
    Content: TexturerDesc,
    image: texturer,
  },
  {
    index: '03',
    title: "An Animator's Dream",
    subtitle: 'An animator that checks all the boxes.',
    Content: AnimatorDesc,
    image: animator,
  },
  {
    index: '04',
    title: 'Manage Efficiently',
    subtitle: 'Take the guesswork out of Project Management',
    Content: ProjectDesc,
    image: project,
  },
]

export default function StudioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface-950">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden pt-16">
          <div className="absolute inset-0 -z-10">
            <Image
              src={banner}
              alt="DumbCode Studio banner"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface-950/70 via-surface-950/80 to-surface-950" />
            <div className="bg-grid absolute inset-0" />
          </div>
          <Container>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-400">
                The tool
              </p>
              <h1 className="display mt-6 text-[clamp(3rem,9vw,7rem)] text-ink-100">
                DumbCode
                <br />
                <span className="text-gradient">Studio</span>
              </h1>
              <p className="mt-8 max-w-lg text-lg text-ink-300">
                A full-stack blocky asset creation tool — built for teams that
                make Minecraft-style art.
              </p>
            </Reveal>
          </Container>
        </section>

        {/* Intro + collage */}
        <section className="border-t border-white/5 py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <Reveal className="lg:col-span-5">
                <h2 className="display text-4xl text-ink-100">
                  Your First Line
                  <br />
                  of Defense…
                </h2>
                <p className="mt-3 text-sm text-ink-400">
                  Why the DumbCode Studio is the tool for you and your team.
                </p>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-300">
                  <p>
                    The DumbCode Studio was created originally as a tool to
                    animate Minecraft-style models made with Tabula for a
                    Minecraft mod called Project: Nublar in 2019 by WynPrice for
                    the DumbCode team. Since then the tool has become a
                    full-featured asset creation tool.
                  </p>
                  <p>
                    We believe that the design decisions we&apos;ve made by
                    learning from the small number of tools available in our
                    market will make this software as special to your team as it
                    has been to ours.
                  </p>
                </div>
              </Reveal>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-6 gap-4">
                  <Reveal className="col-span-6">
                    <div className="aspect-[21/9] overflow-hidden rounded-2xl border border-white/5">
                      <Image
                        src={promo1}
                        alt="Project Nublar showcase"
                        width={1280}
                        height={720}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </Reveal>
                  <Reveal delay={100} className="col-span-3">
                    <div className="aspect-square overflow-hidden rounded-2xl border border-white/5">
                      <Image
                        src={promo2}
                        alt="Galaxies showcase"
                        width={1280}
                        height={1280}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </Reveal>
                  <Reveal delay={180} className="col-span-3">
                    <div className="aspect-square overflow-hidden rounded-2xl border border-white/5">
                      <Image
                        src={promo3}
                        alt="Project Nublar showcase"
                        width={1280}
                        height={1280}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Views */}
        <section className="border-t border-white/5 bg-surface-900/40 py-24">
          <Container>
            <div className="flex items-center gap-6">
              <Reveal>
                <h2 className="display text-5xl text-ink-100 sm:text-6xl">
                  Everything
                  <br />
                  You Need
                </h2>
                <p className="mt-4 text-ink-400">
                  And just a little bit more.
                </p>
              </Reveal>
              <Image
                src={worrt}
                alt=""
                aria-hidden
                width={120}
                height={120}
                className="animate-float ml-auto hidden h-28 w-28 object-contain lg:block"
              />
            </div>

            <div className="mt-20 space-y-24">
              {views.map((v, i) => (
                <ViewSection key={v.title} view={v} flip={i % 2 === 1} />
              ))}
            </div>
          </Container>

          <div className="mt-24">
            <Marquee
              items={[promo1, modeler, texturer, animator, project, promo2]}
              speed="slow"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function ViewSection({
  view,
  flip,
}: {
  view: {
    index: string
    title: string
    subtitle: string
    Content: ComponentType<{ className?: string }>
    image: string
  }
  flip: boolean
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
      <Reveal className={'lg:col-span-5 ' + (flip ? 'lg:order-2' : '')}>
        <span className="display text-6xl text-surface-600">{view.index}</span>
        <h3 className="mt-4 text-3xl font-semibold text-ink-100">
          {view.title}
        </h3>
        <p className="mt-2 text-sm text-ink-400">{view.subtitle}</p>
        <view.Content className="mt-4 columns-1 gap-6 text-sm leading-relaxed text-ink-400 sm:columns-2" />
      </Reveal>
      <div
        className={
          'lg:col-span-7 ' + (flip ? 'lg:order-1' : '')
        }
      >
        <div className="aspect-video overflow-hidden rounded-2xl border border-white/5 bg-surface-900">
          <Image
            src={view.image}
            alt={view.title}
            width={1280}
            height={720}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  )
}
