export type PersistInput = { slug: string; title: string; content: string; status?: 'draft'|'published' }
export type PersistResult = { ok: boolean; id?: string; url?: string; error?: string }
export interface Adapter { createPost(input: PersistInput): Promise<PersistResult> }
export async function persistPost(input: PersistInput): Promise<PersistResult> {
  const target = process.env.PERSIST_TARGET || ''
  try {
    if (target === 'notion') { const { NotionAdapter } = await import('./notion'); return new NotionAdapter().createPost(input) }
    if (target === 'supabase') { const { SupabaseAdapter } = await import('./supabase'); return new SupabaseAdapter().createPost(input) }
    if (target === 'sanity') { const { SanityAdapter } = await import('./sanity'); return new SanityAdapter().createPost(input) }
    if (target === 'strapi') { const { StrapiAdapter } = await import('./strapi'); return new StrapiAdapter().createPost(input) }
    return { ok: false, error: 'No PERSIST_TARGET configured' }
  } catch (e: any) { return { ok: false, error: e?.message || String(e) } }
}
