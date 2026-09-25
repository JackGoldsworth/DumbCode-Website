import type { Metadata } from 'next'
import type { ReactElement } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import BackgroundImage from '../../components/BackgroundImage'
import { Container, SectionHeading } from '../../components/Section'
import {
  SvgArtstation,
  SvgDeviantart,
  SvgDiscord,
  SvgGithub,
  SvgTwitter,
  SvgYoutube,
} from '../../components/Icons'
import {
  currentMembers,
  CurrentMemberType,
  pastMembers,
  PastMembersType,
  primaryMembers,
  PrimaryMemberType,
} from '../../data/team'
import { buildMetadata } from '../../lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Team',
  description: 'Meet the DumbCode Team',
  path: '/team',
})

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface-950">
      <Navbar />
      <main className="flex-1 pt-16">
        <Container className="py-20">
          <SectionHeading
            eyebrow="The people"
            title="DumbCode Members"
            subtitle="Our amazing team of current contributors."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
            {primaryMembers.map((member, key) => (
              <PrimaryMemberCard key={key} member={member} />
            ))}
          </div>
        </Container>

        <div className="border-y border-white/5 bg-surface-900/40 py-16">
          <Container>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
              {currentMembers.map((member, key) => (
                <MemberCard key={key} member={member} />
              ))}
            </div>
          </Container>
        </div>

        <Container className="py-20">
          <SectionHeading
            eyebrow="Thank you"
            title="Past Members"
            subtitle="Those who helped us in the past."
          />
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-6">
            {pastMembers.map((member, key) => (
              <PastMemberCard key={key} member={member} />
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

const PrimaryMemberCard = ({ member }: { member: PrimaryMemberType }) => {
  return (
    <div className="flex flex-col items-center rounded-xl border border-white/5 bg-surface-900 p-6">
      <MemberBubble imageName={member.imageName} name={member.name} size="lg" />
      <h3 className="mt-5 text-center text-2xl font-semibold text-ink-100">
        {member.name}
      </h3>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {member.roles.map((role, key) => (
          <RoleTag key={member.name + 'role' + key} role={role} />
        ))}
      </div>
      <p className="mt-4 text-center text-sm leading-relaxed text-ink-400">
        {member.bio}
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {member.socials.map((social, key) => (
          <SocialIcon
            key={member.name + 'social' + key}
            platform={social.platform}
            route={social.link}
          />
        ))}
      </div>
    </div>
  )
}

const MemberCard = ({ member }: { member: CurrentMemberType }) => {
  return (
    <div className="flex flex-col items-center rounded-xl border border-white/5 bg-surface-900 p-5">
      <MemberBubble imageName={member.imageName} name={member.name} size="md" />
      <h3 className="mt-4 text-center text-xl font-semibold text-ink-100">
        {member.name}
      </h3>
      <div className="mt-3 flex flex-wrap justify-center gap-1.5">
        {member.roles.map((role, key) => (
          <RoleTag key={member.name + 'role' + key} role={role} />
        ))}
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {member.socials.map((social, key) => (
          <SocialIcon
            key={member.name + 'social' + key}
            platform={social.platform}
            route={social.link}
          />
        ))}
      </div>
    </div>
  )
}

const PastMemberCard = ({ member }: { member: PastMembersType }) => {
  return (
    <div className="flex flex-col items-center rounded-xl border border-white/5 bg-surface-900/60 p-4 opacity-80 transition-opacity hover:opacity-100">
      <MemberBubble imageName={member.imageName} name={member.name} size="sm" />
      <h3 className="mt-3 text-center text-base font-medium text-ink-200">
        {member.name}
      </h3>
    </div>
  )
}

const SIZES = {
  lg: 'h-28 w-28',
  md: 'h-20 w-20',
  sm: 'h-16 w-16',
}

const MemberBubble = ({
  imageName,
  name,
  size,
}: {
  imageName: string
  name: string
  size: keyof typeof SIZES
}) => {
  return (
    <div
      className={
        'overflow-hidden rounded-full bg-surface-800 ring-1 ring-white/10 ' +
        SIZES[size]
      }
    >
      <BackgroundImage alt={name} sizes="112px" src={`/images/people/${imageName}`} />
    </div>
  )
}

const ROLE_STYLES: Record<string, string> = {
  programmer: 'border-red-500/40 bg-red-500/15 text-red-300',
  modeler: 'border-orange-500/40 bg-orange-500/15 text-orange-300',
  web_developer: 'border-fuchsia-500/40 bg-fuchsia-500/15 text-fuchsia-300',
  texture_artist: 'border-green-500/40 bg-green-500/15 text-green-300',
  animator: 'border-lime-500/40 bg-lime-500/15 text-lime-300',
  sound_artist: 'border-yellow-500/40 bg-yellow-500/15 text-yellow-300',
  graphic_designer: 'border-amber-500/40 bg-amber-500/15 text-amber-300',
  concept_artist: 'border-lime-400/40 bg-lime-400/15 text-lime-200',
}

const ROLE_NAMES: Record<string, string> = {
  programmer: 'Programmer',
  modeler: 'Modeler',
  web_developer: 'Web Developer',
  texture_artist: 'Texture Artist',
  animator: 'Animator',
  sound_artist: 'Sound Artist',
  graphic_designer: 'Graphic Designer',
  concept_artist: 'Concept Artist',
}

const RoleTag = ({ role }: { role: string }) => {
  const classes = ROLE_STYLES[role] ?? 'border-white/10 bg-white/5 text-ink-300'
  const roleName = ROLE_NAMES[role] ?? role
  return (
    <span className={'rounded-full border px-2.5 py-0.5 text-xs font-medium ' + classes}>
      {roleName}
    </span>
  )
}

const SocialIcon = ({
  platform,
  route,
}: {
  platform: string
  route: string
}) => {
  const icons: Record<string, ReactElement> = {
    discord: <SvgDiscord />,
    twitter: <SvgTwitter />,
    github: <SvgGithub />,
    youtube: <SvgYoutube />,
    deviantart: <SvgDeviantart />,
    artstation: <SvgArtstation />,
  }
  const icon = icons[platform]
  if (!icon) return null

  // Discord entries store a username rather than a URL.
  if (platform === 'discord') {
    return (
      <span className="flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-xs text-ink-300">
        <span className="h-4 w-4 [&>svg]:h-4 [&>svg]:w-4">{icon}</span>
        {route}
      </span>
    )
  }

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={route}
      aria-label={platform}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-ink-300 transition-all hover:scale-110 hover:border-brand-500/50 hover:text-brand-300 [&>svg]:h-4 [&>svg]:w-4"
    >
      {icon}
    </a>
  )
}
