import { defineConfig, defineCollection, s } from 'velite'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split('/').slice(1).join('/'),
})

const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      date: s.isodate(),
      summary: s.string().max(999).optional(),
      author: s.string().optional(),
      tags: s.array(s.string()).optional(),
      body: s.mdx(),
    })
    .transform(computedFields),
})

const authors = defineCollection({
  name: 'Author',
  pattern: 'authors/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      name: s.string().max(99),
      avatar: s.string().optional(),
      bio: s.string().optional(),
      body: s.mdx(),
    })
    .transform(computedFields),
})

const categories = defineCollection({
  name: 'Category',
  pattern: 'categories/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().optional(),
      body: s.mdx(),
    })
    .transform(computedFields),
})

const tags = defineCollection({
  name: 'Tag',
  pattern: 'tags/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      body: s.mdx(),
    })
    .transform(computedFields),
})

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { posts, authors, categories, tags },
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
  },
})
