import type { Adapter, PersistInput, PersistResult } from './index'
export class StrapiAdapter implements Adapter {
  base = process.env.STRAPI_URL || 'http://localhost:1337'
  token = process.env.STRAPI_TOKEN || ''
  async createPost(input: PersistInput): Promise<PersistResult> {
    const res = await fetch(this.base + '/api/posts', { method:'POST', headers: { 'Content-Type':'application/json', ...(this.token?{Authorization:`Bearer ${this.token}`}:{}) }, body: JSON.stringify({ data: { slug: input.slug, title: input.title, content: input.content, status: input.status || 'draft' } }) })
    if (!res.ok) return { ok: false, error: await res.text() }
    const json: any = await res.json(); return { ok: true, id: String(json?.data?.id) }
  }
}
