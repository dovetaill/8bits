import { posts, authors } from '#site/content'
import { notFound } from 'next/navigation'

export default function Page({ params }: { params: { slug: string } }){
  const author = authors.find(a => a.slugAsParams === params.slug)
  if (!author) return notFound()
  const authorPosts = posts.filter(p => p.author === params.slug).sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <main className="max-w-[1100px] mx-auto p-6 space-y-4">
      <h1 className="text-[20px] font-semibold">作者：{author.name}</h1>
      <div className="grid md:grid-cols-2 gap-5">
        {authorPosts.map(p => (
          <a key={p.slug} href={`/posts/${p.slugAsParams}`} className="bg-surface border-3 border-ink rounded-[var(--radius)] shadow-brut p-4 block">
            <h3 className="text-[18px] font-semibold mb-1">{p.title}</h3>
            <div className="text-[13px] text-[#666]">{p.date}</div>
          </a>
        ))}
      </div>
    </main>
  )
}
