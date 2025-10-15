import { NextResponse } from 'next/server'
import { prisma } from '@dove/db'
import { persistPost } from '@dove/adapters'

export async function POST(req: Request){
  const body = await req.json()
  try {
    const post = await prisma.post.upsert({
      where: { slug: body.slug },
      create: { slug: body.slug, title: body.title, content: body.content, status: body.status || 'draft' },
      update: { title: body.title, content: body.content, status: body.status || 'draft' }
    })
    let ext:any = null
    if (process.env.PERSIST_TARGET) {
      ext = await persistPost({ slug: post.slug, title: post.title, content: post.content, status: post.status as any })
    }
    return NextResponse.json({ ok: true, id: post.id, external: ext })
  } catch (e:any) {
    return NextResponse.json({ ok: false, error: e?.message || String(e) }, { status: 500 })
  }
}
