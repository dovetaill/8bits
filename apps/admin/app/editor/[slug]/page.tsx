'use client'
import { useState } from 'react'

export default function Page(){
  const [title, setTitle] = useState('方向键三角按钮：从键帽到 UI')
  const [slug, setSlug] = useState('triangle-buttons')
  const [status, setStatus] = useState<'draft'|'published'>('draft')
  const [md, setMd] = useState(`# 标题\n**粗描边** 与 *贴纸阴影* 的三角图标。`)
  const [file, setFile] = useState<File | null>(null)

  const save = async () => {
    const res = await fetch('/api/posts', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ title, slug, content: md, status }) })
    const json = await res.json()
    alert(json.ok ? '已保存' : `失败：${json.error}`)
  }

  const upload = async () => {
    if (!file) return alert('请先选择文件')
    const init = await fetch('/api/upload', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ filename: file.name, contentType: file.type }) })
    const { url, publicUrl, ok, error } = await init.json()
    if (!ok) return alert(error || '签名失败')
    const put = await fetch(url, { method:'PUT', headers: { 'Content-Type': file.type }, body: file })
    if (!put.ok) return alert('上传失败')
    // 插入 Markdown 图片
    setMd(v => v + `\n\n![](${publicUrl})\n`)
    alert('上传成功，已插入 Markdown 图片链接')
  }

  return (
    <main className="max-w-[1100px] mx-auto p-6 space-y-6">
      <form className="bg-surface border-3 border-ink rounded-[var(--radius)] shadow-brut p-6" onSubmit={e=>e.preventDefault()}>
        <div className="grid md:grid-cols-2 gap-5">
          <div><label className="block text-[14px] font-semibold mb-1">标题</label><input className="brut-input w-full" value={title} onChange={e=>setTitle(e.target.value)} /></div>
          <div><label className="block text-[14px] font-semibold mb-1">Slug</label><input className="brut-input w-full" value={slug} onChange={e=>setSlug(e.target.value)} /></div>
          <div className="md:col-span-2"><label className="block text-[14px] font-semibold mb-1">正文（Markdown / 富文本可替换）</label><textarea className="brut-input w-full font-mono" rows={12} value={md} onChange={e=>setMd(e.target.value)} /></div>
        </div>

        <div className="mt-4 flex justify-between items-center gap-3">
          <div className="flex items-center gap-3">
            <label className="border-3 border-ink rounded-brut bg-surface px-3 py-2 font-semibold shadow-brut cursor-pointer">
              <input type="file" className="hidden" onChange={e=>setFile(e.target.files?.[0] || null)} />
              选择文件
            </label>
            <button type="button" onClick={upload} className="border-3 border-ink rounded-brut bg-[var(--accent-2)] px-4 py-2 font-semibold shadow-brut">上传并插入</button>
            {file && <span className="text-[13px] opacity-80">{file.name}</span>}
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={save} className="brut-btn">保存</button>
          </div>
        </div>
      </form>
    </main>
  )
}
