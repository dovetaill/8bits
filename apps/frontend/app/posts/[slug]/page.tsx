import { posts } from '#site/content'
import { notFound } from 'next/navigation'
import { MDXContent } from '@/components/mdx-content'

export default function Page({ params }: { params: { slug: string } }){
  const post = posts.find(p => p.slugAsParams === params.slug)
  if (!post) return notFound()

  return (
    <main className="max-w-[860px] mx-auto p-6 space-y-6">
      <article className="bg-surface border-3 border-ink rounded-[var(--radius)] shadow-brut p-6">
        <h1 className="text-[28px] font-bold">{post.title}</h1>
        <div className="text-[13px] text-[#666] mt-2">{post.date}</div>
        <div className="mt-6 prose max-w-none">
          <MDXContent code={post.body} />
        </div>
      </article>
    </main>
  )
}
