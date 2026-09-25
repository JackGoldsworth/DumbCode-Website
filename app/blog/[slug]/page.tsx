import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import BackgroundImage from '../../../components/BackgroundImage'
import Container from '../../../components/Container'
import DateFormatter from '../../../components/DateFormatter'
import FeaturedPostList from '../../../components/FeaturedPostList'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import { getAllPosts, getPostBySlug, PostType } from '../../../lib/blogapi'
import { buildMetadata } from '../../../lib/seo'
import markdownToHtml from '../../../lib/markdownToHtml'

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getAllPosts(['slug']).map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug, [
    'title',
    'excerpt',
    'ogImage',
    'coverImage',
    'date',
    'author',
  ]) as unknown as PostType

  if (!post?.title) return {}

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    ogImage: { path: post.ogImage?.url ?? post.coverImage, width: 1280, height: 640 },
    article: {
      title: post.title,
      publisher: post.author.name,
      category: 'Gaming',
      tags: ['gaming', 'minecraft', 'modding', 'modeling', 'animation', 'texturing', 'gamedev'],
      publishedTime: post.date,
    },
  })
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params
  const post = getPostBySlug(slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]) as unknown as PostType

  if (!post?.slug) {
    notFound()
  }

  const content = await markdownToHtml(post.content || '')
  const morePosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]).filter((p) => p.slug !== slug)

  return (
    <div className="flex min-h-screen flex-col bg-surface-950">
      <Navbar />
      <main className="flex-1 pt-16">
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <BackgroundImage
            alt={post.title}
            priority
            sizes="100vw"
            src={post.coverImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-950 to-transparent" />
        </div>

        <Container className="relative -mt-32 pb-16">
          <article className="mx-auto max-w-3xl rounded-2xl border border-white/5 bg-surface-900 p-8 sm:p-12">
            <h1 className="text-balance text-4xl font-semibold leading-tight text-ink-100 sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-3 border-b border-white/5 pb-8">
              <Avatar name={post.author.name} picture={post.author.picture} />
              <DateFormatter dateString={post.date} />
            </div>
            <div
              className="markdown mt-8"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </article>
        </Container>

        {morePosts.length > 0 && (
          <section className="border-t border-white/5 bg-surface-900/40 py-20">
            <Container>
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-semibold text-ink-100">
                  Read More
                </h2>
                <p className="mt-2 text-ink-400">
                  See what else DumbCode has to read about.
                </p>
              </div>
              <div className="mt-10">
                <FeaturedPostList posts={morePosts} />
              </div>
            </Container>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}

const Avatar = ({ name, picture }: { name: string; picture: string }) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={picture}
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
        alt={name}
      />
      <span className="text-sm font-medium text-ink-200">{name}</span>
    </div>
  )
}
