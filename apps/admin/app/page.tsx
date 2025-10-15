import { KpiCard } from '@dove/ui'
export default function Page(){
  return (
    <main className="max-w-[1100px] mx-auto p-6 space-y-6">
      <section className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <KpiCard label="文章总数" value="128" /><KpiCard label="草稿" value="12" /><KpiCard label="本周新增" value="6" /><KpiCard label="订阅" value="4,263" />
      </section>
      <section className="bg-surface border-3 border-ink rounded-[var(--radius)] shadow-brut p-6">
        <h3 className="text-[18px] font-semibold mb-3">动态</h3>
        <ul className="list-disc pl-6"><li>三角按钮组件已上线。</li><li>主题系统支持 Famicom/LEGO/Pokémon/DMG。</li></ul>
      </section>
    </main>
  )
}
