import { allPosts } from 'contentlayer/generated'
export default function Page(){
  const posts = allPosts.sort((a,b)=>(a.date>b.date?-1:1))
  return (
    <main className="max-w-[1100px] mx-auto p-6 grid md:grid-cols-2 gap-5">
      {posts.map(p => (
        <a key={p._id} href={p.url} className="bg-surface border-3 border-ink rounded-[var(--radius)] shadow-brut p-4 block hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0_0_#000] transition">
          <div className="h-[160px] bg-panel border-3 border-ink rounded-[var(--radius)] mb-3 grid place-items-center">封面</div>
          <h3 className="text-[18px] font-semibold mb-1">{p.title}</h3>
          <p className="text-[14px] text-[#444]">{p.summary}</p>
          <div className="mt-3 text-[13px] text-[#666]">{p.date} · <a className="underline" href={`/category/${p.category}`}>{p.category}</a>{p.author ? <> · <a className="underline" href={`/author/${p.author}`}>作者</a></> : null}</div>
        </a>
      ))}
    </main>
  )
}
