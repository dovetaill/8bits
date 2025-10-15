import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { MDXComponents } from '../../components/mdx/MDXComponents'

export default function Page({ params }: { params: { slug: string } }){
  const post = allPosts.find(p => p.slug === params.slug)
  if (!post) return notFound()
  const MDX = useMDXComponent(post.body.code)
  return (
    <main className="max-w-[860px] mx-auto p-6 space-y-6">
      <article className="bg-surface border-3 border-ink rounded-[var(--radius)] shadow-brut p-6">
        <h1 className="text-[28px] font-bold">{post.title}</h1>
        <div className="text-[13px] text-[#666] mt-2">{post.date}</div>
        <div className="mt-6 prose max-w-none"><MDX components={MDXComponents as any} /></div>
      </article>
    </main>
  )
}
