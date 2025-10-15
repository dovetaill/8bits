import { createClient } from '@supabase/supabase-js'
import type { Adapter, PersistInput, PersistResult } from './index'
export class SupabaseAdapter implements Adapter {
  client = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY!)
  async createPost(input: PersistInput): Promise<PersistResult> {
    const { data, error } = await this.client.from('posts').insert({ slug: input.slug, title: input.title, content: input.content, status: input.status || 'draft' }).select().single()
    if (error) return { ok: false, error: error.message }
    return { ok: true, id: data.id?.toString() }
  }
}
