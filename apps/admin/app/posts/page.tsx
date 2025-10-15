export default async function Page(){
  const rows = new Array(6).fill(0).map((_,i)=> ({ title: `文章标题 ${i+1}`, date: `2025-04-2${i}`, status: '已发布' }))
  return (
    <main className="max-w-[1100px] mx-auto p-6">
      <div className="bg-surface border-3 border-ink rounded-[var(--radius)] shadow-brut overflow-hidden">
        <div className="bg-[#F0F0EE] border-b-2 border-ink px-4 py-3 text-[13px] font-semibold">文章列表</div>
        <table className="w-full border-collapse">
          <thead className="bg-[#F0F0EE]">
            <tr className="text-left">
              <th className="px-4 py-3 text-[13px] font-semibold border-b border-[#E0E0E0]">标题</th>
              <th className="px-4 py-3 text-[13px] font-semibold border-b border-[#E0E0E0]">状态</th>
              <th className="px-4 py-3 text-[13px] font-semibold border-b border-[#E0E0E0]">更新时间</th>
              <th className="px-4 py-3 text-[13px] font-semibold border-b border-[#E0E0E0] text-right">操作</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r,i)=> (
              <tr key={i} className="border-b border-[#E0E0E0]">
                <td className="px-4 py-3">{r.title}</td>
                <td className="px-4 py-3"><span className="inline-block px-3 py-1 text-[13px] font-semibold rounded-[8px] bg-success text-ink">已发布</span></td>
                <td className="px-4 py-3">{r.date}</td>
                <td className="px-4 py-3 text-right">
                  <a href="/editor/sample" className="border-3 border-ink rounded-brut bg-surface px-3 py-1 shadow-brut text-[13px] font-semibold">编辑</a>
                  <button className="ml-2 border-3 border-ink rounded-brut bg-danger px-3 py-1 shadow-brut text-[13px] font-semibold text-white">删除</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
