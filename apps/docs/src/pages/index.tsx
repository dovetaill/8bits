import React from 'react'
export default function Home() {
  return (
    <main style={{maxWidth:960,margin:'40px auto',padding:'0 16px'}}>
      <h1>Dove UI Docs</h1>
      <p>Neo‑Brutalism Tokens · Next.js · Providers · Release‑please</p>
      <div className="brut-card">
        <strong>导航</strong>
        <ul>
          <li><a href="/docs/docs/quickstart">快速开始</a></li>
          <li><a href="/docs/docs/tokens">Tokens</a></li>
          <li><a href="/docs/docs/content">Contentlayer + MDX</a></li>
          <li><a href="/docs/docs/persistence">数据持久化</a></li>
          <li><a href="/docs/docs/providers">Providers</a></li>
          <li><a href="/docs/docs/upload">上传</a></li>
          <li><a href="/docs/docs/ci">CI/CD</a></li>
        </ul>
      </div>
    </main>
  )
}
