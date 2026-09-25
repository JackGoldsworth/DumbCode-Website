import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

export type AuthorType = { name: string; picture: string }
export type OgImageType = { url: string }
export type PostType = {
  title: string
  slug: string
  coverImage: string
  date: string
  author: AuthorType
  excerpt: string
  ogImage: OgImageType
  content: string
}

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Record<string, unknown> = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items as Record<string, never>
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  return slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) =>
      (post1 as { date?: string }).date! > (post2 as { date?: string }).date! ? -1 : 1
    ) as unknown as PostType[]
}
