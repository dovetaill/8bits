# 对象存储（S3 / Cloudflare R2）
- 后台 `/api/upload` 返回预签名 URL；前端 PUT 上传。
- R2：设置 `S3_ENDPOINT` 与 `forcePathStyle` 已在代码中处理。
