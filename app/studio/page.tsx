import type { Metadata } from 'next'
import Image from 'next/image'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { Container, PageHero } from '../../components/Section'
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

const sections = [
  {
    title: 'Your New Favorite Modeler',
    subtitle: 'The modeler that changes it all.',
    Content: ModelerDesc,
    image: modeler,
  },
  {
    title: 'Bring the Texture Artists Back',
    subtitle: "Finally a built-in texture tool that isn't bad.",
    Content: TexturerDesc,
    image: texturer,
  },
  {
    title: "An Animator's Dream",
    subtitle: 'An animator that checks all the boxes.',
    Content: AnimatorDesc,
    image: animator,
  },
  {
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
      <main className="flex-1 pt-16">
        <PageHero
          eyebrow="The tool"
          title="DumbCode Studio"
          subtitle="A full-stack blocky asset creation tool."
          image={banner}
          imageAlt="DumbCode Studio banner"
        />

        {/* Intro + promo collage */}
        <section className="py-20">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold text-ink-100">
                  Your First Line of Defense…
                </h2>
                <p className="mt-2 text-ink-400">
                  Why the DumbCode Studio is the tool for you and your team.
                </p>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-300">
                  <p>
                    The DumbCode Studio was created originally as a tool to
                    animate Minecraft-style models made with Tabula for a
                    Minecraft mod called Project: Nublar in 2019 by WynPrice for
                    the DumbCode team. Since then the tool has become a
                    full-featured asset creation tool. Your modelers, texturers,
                    animators and project managers all live in the same happy
                    place that we&apos;ve created for them.
                  </p>
                  <p>
                    We believe that the design decisions we&apos;ve made by
                    using and taking notes from the small number of tools
                    available in our market will make this piece of software as
                    special to your team as it has been to ours.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 aspect-video overflow-hidden rounded-xl border border-white/5">
                  <Image
                    src={promo1}
                    alt="Project Nublar showcase"
                    width={1280}
                    height={720}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="aspect-video overflow-hidden rounded-xl border border-white/5">
                  <Image
                    src={promo2}
                    alt="Galaxies showcase"
                    width={1280}
                    height={720}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="aspect-video overflow-hidden rounded-xl border border-white/5">
                  <Image
                    src={promo3}
                    alt="Project Nublar showcase"
                    width={1280}
                    height={720}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Feature sections */}
        <section className="border-t border-white/5 py-20">
          <Container>
            <div className="flex items-center gap-6">
              <div>
                <h2 className="text-balance text-4xl font-semibold text-ink-100 sm:text-5xl">
                  Everything You Need
                </h2>
                <p className="mt-2 text-ink-400">
                  And just a little bit more.
                </p>
              </div>
              <Image
                src={worrt}
                alt=""
                aria-hidden
                width={96}
                height={96}
                className="ml-auto hidden h-24 w-24 object-contain lg:block"
              />
            </div>

            <div className="mt-16 space-y-20">
              {sections.map((s, i) => (
                <FeatureSection
                  key={s.title}
                  flip={i % 2 === 1}
                  title={s.title}
                  subtitle={s.subtitle}
                  image={s.image}
                >
                  <s.Content className="mt-4 columns-1 gap-6 text-sm leading-relaxed text-ink-400 sm:columns-2" />
                </FeatureSection>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function FeatureSection({
  flip,
  title,
  subtitle,
  image,
  children,
}: {
  flip: boolean
  title: string
  subtitle: string
  image: string
  children: React.ReactNode
}) {
  return (
    <div
      className={
        'grid gap-8 lg:grid-cols-3 lg:items-center ' +
        (flip ? 'lg:[&>*:first-child]:order-2' : '')
      }
    >
      <div className="rounded-xl border border-white/5 bg-surface-900 p-6 lg:col-span-1">
        <h3 className="text-2xl font-semibold text-ink-100">{title}</h3>
        <p className="mt-1 text-sm text-ink-400">{subtitle}</p>
        {children}
      </div>
      <div className="aspect-video overflow-hidden rounded-xl border border-white/5 bg-surface-900 lg:col-span-2">
        <Image
          src={image}
          alt={title}
          width={1280}
          height={720}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  )
}
