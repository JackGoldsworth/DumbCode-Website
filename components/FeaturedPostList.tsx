import Link from 'next/link'
import { PostType } from '../lib/blogapi'
import BackgroundImage from './BackgroundImage'
import DateFormatter from './DateFormatter'

export default function FeaturedPostList({ posts }: { posts: PostType[] }) {
  return (
    <section className="pb-10">
      {posts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <PostPreview key={index} post={post} />
          ))}
        </div>
      ) : (
        <NothingToSeeHere />
      )}
    </section>
  )
}

const PostPreview = ({ post }: { post: PostType }) => {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-white/5 bg-surface-900 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-2xl hover:shadow-brand-950/40">
      <Link href={`/blog/${post.slug}`} aria-label={post.title}>
        <div className="relative aspect-video w-full overflow-hidden">
          <BackgroundImage
            alt={post.title}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            src={post.coverImage}
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold leading-snug text-ink-100">
          <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-brand-300">
            {post.title}
          </Link>
        </h3>
        <div className="mt-2 flex items-center gap-3">
          <DateFormatter dateString={post.date} />
          <span className="text-ink-400">·</span>
          <span className="text-sm text-ink-400">{post.author.name}</span>
        </div>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-400">
          {post.excerpt}
        </p>
      </div>
    </article>
  )
}

const NothingToSeeHere = () => {
  return (
    <div className="rounded-xl border border-white/5 bg-surface-900 p-10 text-ink-300">
      <h1 className="mb-3 ml-1 text-5xl font-bold">:(</h1>
      <p className="px-1">No featured posts yet, check back soon for more.</p>
    </div>
  )
}
