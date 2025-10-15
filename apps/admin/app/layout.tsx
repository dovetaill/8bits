import '@dove/tokens/themes/brutalism-theme.css'
import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Dove Admin', description: 'Neo‑Brutalism · Prisma + 多源对接 + S3/R2 上传' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" data-theme="lego" data-radius="soft">
      <body className="min-h-screen bg-paper text-ink font-sans">
        <header className="max-w-[1100px] mx-auto p-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 grid place-items-center bg-panel border-3 border-ink rounded-brut shadow-brut text-xl">🛠️</div>
            <div><div className="text-[20px] font-semibold leading-tight">Blog 管理后台</div><div className="text-[#666] text-[13px]">Next.js + Prisma + Provider + 上传</div></div>
            <div className="ml-auto flex items-center gap-2">
              <a href="/login" className="border-3 border-ink rounded-brut bg-surface px-3 py-1 text-sm font-semibold shadow-brut">退出</a>
              <button className="border-3 border-ink rounded-brut shadow-brut bg-[var(--accent-3)] text-white px-3 py-1 text-sm font-semibold" onClick={()=>document.documentElement.setAttribute('data-theme','lego')}>LEGO</button>
              <button className="border-3 border-ink rounded-brut shadow-brut bg-surface px-3 py-1 text-sm font-semibold" onClick={()=>{ const el=document.documentElement; el.setAttribute('data-radius', el.getAttribute('data-radius')==='soft'?'sharp':'soft') }}>切圆角</button>
            </div>
          </div>
          <nav className="mt-3 flex gap-3">
            <a href="/" className="border-3 border-ink rounded-brut shadow-brut bg-accent text-ink px-4 py-2 text-[14px] font-semibold">仪表盘</a>
            <a href="/posts" className="border-3 border-ink rounded-brut shadow-brut bg-surface px-4 py-2 text-[14px] font-semibold">文章</a>
            <a href="/editor/new" className="border-3 border-ink rounded-brut shadow-brut bg-surface px-4 py-2 text-[14px] font-semibold">写作</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
