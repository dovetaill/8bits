export default function Page(){
  return (
    <main className="min-h-[70vh] grid place-items-center">
      <div className="w-[420px] bg-surface border-3 border-ink rounded-[var(--radius)] shadow-brut p-6">
        <div className="text-[20px] font-semibold mb-4">登录后台</div>
        <div className="space-y-3">
          <input className="brut-input w-full" placeholder="邮箱" />
          <input className="brut-input w-full" placeholder="密码" type="password" />
          <div className="flex items-center justify-between"><label className="flex items-center gap-2"><input type="checkbox"/> 记住我</label><a href="#" className="text-[13px] underline">忘记密码?</a></div>
          <a href="/" className="brut-btn w-full text-center">进入仪表盘</a>
        </div>
      </div>
    </main>
  )
}
