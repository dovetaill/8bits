import { createClient } from '@sanity/client'
import type { Adapter, PersistInput, PersistResult } from './index'
export class SanityAdapter implements Adapter {
  client = createClient({ projectId: process.env.SANITY_PROJECT_ID!, dataset: process.env.SANITY_DATASET!, apiVersion: '2024-01-01', token: process.env.SANITY_TOKEN, useCdn: false })
  async createPost(input: PersistInput): Promise<PersistResult> {
    const res = await this.client.create({ _type: 'post', title: input.title, slug: { current: input.slug }, body: input.content, status: input.status || 'draft' })
    return { ok: true, id: (res as any)._id }
  }
}
