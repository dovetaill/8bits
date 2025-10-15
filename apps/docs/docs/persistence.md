# 数据持久化（Prisma + 多数据库）
- 在 `@dove/db` 选择数据库：
```bash
npm run db:select:postgres -w @dove/db   # 或 mysql / sqlite
npm run -w @dove/db prisma:generate
npm run -w @dove/db prisma:migrate
```
后台 API `apps/admin/app/api/posts/route.ts` 使用 Prisma `upsert`。
