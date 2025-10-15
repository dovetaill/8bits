import { NextResponse } from 'next/server'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

export async function POST(req: Request){
  const { filename, contentType } = await req.json()
  try {
    const client = new S3Client({
      region: process.env.AWS_REGION || 'auto',
      endpoint: process.env.S3_ENDPOINT || undefined, // for R2: https://<accountid>.r2.cloudflarestorage.com
      forcePathStyle: !!process.env.S3_ENDPOINT,      // R2 需要
      credentials: { accessKeyId: process.env.AWS_ACCESS_KEY_ID || '', secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '' }
    })
    const Bucket = process.env.S3_BUCKET!
    const Key = `${Date.now()}_${filename}`
    const url = await getSignedUrl(client, new PutObjectCommand({ Bucket, Key, ContentType: contentType }), { expiresIn: 60 })
    const publicBase = process.env.S3_PUBLIC_URL_BASE || `https://${Bucket}.s3.${process.env.AWS_REGION}.amazonaws.com`
    const publicUrl = `${publicBase}/${Key}`
    return NextResponse.json({ ok: true, url, publicUrl })
  } catch (e:any) {
    return NextResponse.json({ ok:false, error: e?.message || String(e) }, { status: 500 })
  }
}
