import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'

export const Author = defineDocumentType(() => ({
  name: 'Author',
  filePathPattern: `authors/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    avatar: { type: 'string', required: false },
    bio: { type: 'string', required: false }
  },
  computedFields: {
    slug: { type: 'string', resolve: (doc) => doc._raw.flattenedPath.replace(/^authors\//,'') }
  }
}))

export const Category = defineDocumentType(() => ({
  name: 'Category',
  filePathPattern: `categories/**/*.mdx`,
  contentType: 'mdx',
  fields: { title: { type: 'string', required: true }, description: { type: 'string', required: false } },
  computedFields: { slug: { type: 'string', resolve: (doc) => doc._raw.flattenedPath.replace(/^categories\//,'') } }
}))

export const Tag = defineDocumentType(() => ({
  name: 'Tag',
  filePathPattern: `tags/**/*.mdx`,
  contentType: 'mdx',
  fields: { title: { type: 'string', required: true } },
  computedFields: { slug: { type: 'string', resolve: (doc) => doc._raw.flattenedPath.replace(/^tags\//,'') } }
}))

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    summary: { type: 'string', required: false },
    author: { type: 'string', required: false },    // authors/<slug>
    tags: { type: 'list', of: { type: 'string' }, required: false } // tags slugs
  },
  computedFields: {
    slug: { type: 'string', resolve: (doc) => doc._raw.sourceFileDir.replace(/^posts\//,'') + '/' + doc._raw.flattenedPath.replace(/^posts\//,'').split('/').pop() },
    url:  { type: 'string', resolve: (doc) => `/posts/${doc._raw.flattenedPath.replace(/^posts\//,'')}` },
    category: { type: 'string', resolve: (doc) => doc._raw.sourceFileDir.replace(/^posts\//,'').split('/')[0] }
  }
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Author, Category, Tag],
  mdx: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings] }
})
