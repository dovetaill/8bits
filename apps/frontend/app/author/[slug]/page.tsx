import { allPosts, allAuthors } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
export default function Page({ params }: { params: { slug: string } }){
  const author = allAuthors.find(a => a.slug === params.slug)
  if (!author) return notFound()
  const posts = allPosts.filter(p => p.author === params.slug).sort((a,b)=>(a.date>b.date?-1:1))
  return (
    <main className="max-w-[1100px] mx-auto p-6 space-y-4">
      <h1 className="text-[20px] font-semibold">作者：{author.name}</h1>
      <div className="grid md:grid-cols-2 gap-5">
        {posts.map(p => (
          <a key={p._id} href={p.url} className="bg-surface border-3 border-ink rounded-[var(--radius)] shadow-brut p-4 block">
            <h3 className="text-[18px] font-semibold mb-1">{p.title}</h3>
            <div className="text-[13px] text-[#666]">{p.date}</div>
          </a>
        ))}
      </div>
    </main>
  )
}
