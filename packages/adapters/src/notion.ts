import { Client } from '@notionhq/client'
import type { Adapter, PersistInput, PersistResult } from './index'
export class NotionAdapter implements Adapter {
  client: Client; dbId: string
  constructor(){ this.client = new Client({ auth: process.env.NOTION_TOKEN! }); this.dbId = process.env.NOTION_DATABASE_ID! }
  async createPost(input: PersistInput): Promise<PersistResult> {
    const res = await this.client.pages.create({
      parent: { database_id: this.dbId },
      properties: {
        Name: { title: [{ text: { content: input.title } }] },
        Slug: { rich_text: [{ text: { content: input.slug } }] },
        Status: { select: { name: input.status || 'draft' } }
      },
      children: [{ object:'block', type:'paragraph', paragraph: { rich_text:[{ text:{ content: input.content.slice(0, 1900) } }] } }]
    })
    return { ok: true, id: (res as any).id }
  }
}
