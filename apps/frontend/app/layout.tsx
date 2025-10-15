import '@dove/tokens/themes/brutalism-theme.css'
import './globals.css'
import type { Metadata } from 'next'
import { TriangleIcon } from '@dove/ui'

export const metadata: Metadata = { title: 'Dove Blog', description: 'Neo‑Brutalism + 键帽主题（Contentlayer + MDX）' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" data-theme="famicom" data-radius="soft">
      <body className="min-h-screen bg-paper text-ink font-sans">
        <header className="max-w-[1100px] mx-auto p-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 grid place-items-center bg-panel border-3 border-ink rounded-brut shadow-brut text-xl">⌨️</div>
            <div><div className="text-[20px] font-semibold leading-tight">Dove Blog</div><div className="text-[#666] text-[13px]">Next.js · Contentlayer + MDX · 方向键三角</div></div>
            <div className="ml-auto flex items-center gap-2">
              <button onClick={()=>document.documentElement.setAttribute('data-theme','famicom')} className="border-3 border-ink rounded-brut shadow-brut bg-[var(--accent)] text-ink px-3 py-1 text-sm font-semibold">Famicom</button>
              <button onClick={()=>document.documentElement.setAttribute('data-theme','lego')} className="border-3 border-ink rounded-brut shadow-brut bg-[var(--accent-3)] text-white px-3 py-1 text-sm font-semibold">LEGO</button>
              <button onClick={()=>{ const el=document.documentElement; el.setAttribute('data-radius', el.getAttribute('data-radius')==='soft'?'sharp':'soft') }} className="border-3 border-ink rounded-brut shadow-brut bg-surface px-3 py-1 text-sm font-semibold">切圆角</button>
            </div>
          </div>
          <nav className="mt-3 flex gap-3">
            <a href="/" className="border-3 border-ink rounded-brut shadow-brut bg-accent text-ink px-4 py-2 text-[14px] font-semibold inline-flex items-center gap-2"><TriangleIcon direction="up" /> 首页</a>
            <a href="/posts" className="border-3 border-ink rounded-brut shadow-brut bg-surface px-4 py-2 text-[14px] font-semibold inline-flex items-center gap-2"><TriangleIcon direction="right" /> 列表</a>
            <a href="/about" className="border-3 border-ink rounded-brut shadow-brut bg-surface px-4 py-2 text-[14px] font-semibold inline-flex items-center gap-2"><TriangleIcon direction="down" /> 关于</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
