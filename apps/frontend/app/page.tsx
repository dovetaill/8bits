import { KpiCard, TriangleIcon } from '@dove/ui'
export default function Page(){
  return (
    <main className="max-w-[1100px] mx-auto p-6 space-y-6">
      <section className="bg-panel border-3 border-ink rounded-[var(--radius)] shadow-brut p-6 flex items-center gap-6">
        <div className="flex-1">
          <h1 className="text-[28px] font-bold mb-2">欢迎来到 Dove Blog</h1>
          <p className="text-[14px] text-[#444]">复古键帽色板 + Neo‑Brutalism + MDX 内容。</p>
          <div className="mt-4 flex gap-3">
            <a href="/posts" className="brut-btn inline-flex items-center gap-2"><TriangleIcon direction="right" /> 阅读列表</a>
            <a href="/posts/post-1" className="border-3 border-ink rounded-brut bg-surface px-6 py-3 font-semibold shadow-brut inline-flex items-center gap-2"><TriangleIcon direction="up" /> 随便看看</a>
          </div>
        </div>
        <div className="w-[240px] h-[160px] bg-surface border-3 border-ink rounded-[var(--radius)] shadow-brut grid place-items-center font-mono">插图</div>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <KpiCard label="文章" value="128" /><KpiCard label="分类" value="12" /><KpiCard label="订阅" value="4,263" /><KpiCard label="本周浏览" value="35k" />
      </section>
    </main>
  )
}
