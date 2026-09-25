import type { Metadata } from 'next'

const SITE_URL = 'https://dumbcode.net'
const SITE_NAME = 'DumbCode'

export type OgImageInput = { path: string; width: number; height: number }
export type ArticleInput = {
  title: string
  publisher: string
  category: string
  tags: string[]
  publishedTime: string
}

type PageMeta = {
  title: string
  description: string
  path?: string
  ogImage?: OgImageInput
  article?: ArticleInput
}

export function buildMetadata({
  title,
  description,
  path = '/',
  ogImage,
  article,
}: PageMeta): Metadata {
  const url = SITE_URL + path
  const images = ogImage
    ? [{ url: ogImage.path, width: ogImage.width, height: ogImage.height }]
    : undefined

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      siteName: SITE_NAME,
      title,
      description,
      url,
      type: article ? 'article' : 'website',
      images,
      ...(article
        ? {
            publishedTime: article.publishedTime,
            authors: [article.publisher],
            tags: article.tags,
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage.path] : undefined,
    },
  }
}
