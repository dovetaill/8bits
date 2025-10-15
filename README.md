# Dove Monorepo (Next.js + Vite + Prisma + Contentlayer/MDX + Storybook + Docs + CI)

- Tokens：**@dove/tokens**（Tailwind 插件 + CSS 主题）
- UI：**@dove/ui**（React 组件库 + Storybook）
- DB：**@dove/db**（Prisma，可选 Postgres / MySQL / SQLite）
- Providers：**@dove/adapters**（Notion / Supabase / Sanity / Strapi）
- Apps：**@dove/frontend**（Next.js + Contentlayer/MDX）、**@dove/admin**（Next.js + Prisma API + S3/R2 上传）、**@dove/playground**（Vite）
- Docs：**@dove/docs**（VitePress）
- CI/CD：GitHub Actions（build + lint + release + docs）

## 快速开始
```bash
npm i
npm run build:ui
npm run dev:front
npm run dev:admin
npm run dev:play
npm run dev:docs
```

## 选择数据库（@dove/db）
```bash
npm run db:select:postgres -w @dove/db   # 或 mysql / sqlite
npm run -w @dove/db prisma:generate
npm run -w @dove/db prisma:migrate
```

## 对象存储上传（S3 / R2）
设置 `.env` 中的 S3 相关变量；后台编辑页可选择文件，`/api/upload` 返回预签名 URL，前端 PUT 上传并自动插入 Markdown 图片链接。

## 外部 Providers 同步
设置 `PERSIST_TARGET` 与凭据后，后台 `/api/posts` 保存会自动同步到指定 Provider。
