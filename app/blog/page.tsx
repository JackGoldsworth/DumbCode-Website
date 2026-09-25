import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BackgroundImage from '../../components/BackgroundImage'
import DateFormatter from '../../components/DateFormatter'
import FeaturedPostList from '../../components/FeaturedPostList'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { Reveal } from '../../components/Reveal'
import { Container } from '../../components/Section'
import { getAllPosts, PostType } from '../../lib/blogapi'
import { buildMetadata } from '../../lib/seo'

export function generateMetadata(): Metadata {
  const latest = getAllPosts(['title', 'coverImage'])[0]
  return buildMetadata({
    title: 'Blog',
    description: `The DumbCode Blog. Read about our latest post: ${latest?.title ?? ''}`,
    path: '/blog',
    ogImage: latest ? { path: latest.coverImage, width: 1280, height: 640 } : undefined,
  })
}

export default function BlogIndex() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])
  const latestPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <div className="flex min-h-screen flex-col bg-surface-950">
      <Navbar />
      <main className="flex-1 pt-16">
        <Container className="py-24">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">
              Latest post
            </p>
            <h1 className="display mt-4 text-5xl text-ink-100 sm:text-6xl">
              From the blog
            </h1>
            <p className="mt-4 max-w-xl text-lg text-ink-400">
              What&apos;s new with DumbCode.
            </p>
          </Reveal>
        </Container>

        {latestPost && <HeroPost post={latestPost} />}

        <section className="border-t border-white/5 bg-surface-900/40 py-24">
          <Container>
            <Reveal>
              <h2 className="display text-4xl text-ink-100 sm:text-5xl">
                Other Posts
              </h2>
              <p className="mt-3 text-ink-400">
                See updates on what we&apos;ve got cooking.
              </p>
            </Reveal>
            <div className="mt-12">
              <FeaturedPostList posts={morePosts} />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  )
}

const HeroPost = ({ post }: { post: PostType }) => {
  return (
    <section>
      <Link href={`/blog/${post.slug}`} aria-label={post.title}>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border border-white/5">
            <BackgroundImage
              alt={post.title}
              priority
              sizes="100vw"
              src={post.coverImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/30 to-transparent" />
          </div>
          <div className="relative -mt-12 ml-4 mr-4 rounded-xl border border-white/5 bg-surface-900/95 p-8 backdrop-blur sm:-mt-24 sm:ml-8 sm:mr-8">
            <h3 className="text-balance text-3xl font-semibold leading-tight text-ink-100 sm:text-4xl">
              {post.title}
            </h3>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Avatar name={post.author.name} picture={post.author.picture} />
              <DateFormatter dateString={post.date} />
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-400">
              {post.excerpt}
            </p>
            <span className="mt-6 inline-block rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600">
              Read More
            </span>
          </div>
        </div>
      </Link>
    </section>
  )
}

const Avatar = ({ name, picture }: { name: string; picture: string }) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={picture}
        width={32}
        height={32}
        className="h-8 w-8 rounded-full"
        alt={name}
      />
      <span className="text-sm font-medium text-ink-200">{name}</span>
    </div>
  )
}
