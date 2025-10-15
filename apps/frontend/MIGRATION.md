# 从 Contentlayer 迁移到 Velite

本文档记录了从已废弃的 Contentlayer 迁移到现代化的 Velite 的过程。

## 为什么迁移？

- ❌ **Contentlayer** 已停止维护（最后更新 2023年）
- ❌ 依赖旧版本的 unified/remark 生态系统（v10）
- ❌ Windows 兼容性问题
- ❌ 与最新的 MDX/remark 插件不兼容

- ✅ **Velite** 积极维护（2024-2025）
- ✅ 使用最新的 unified v11+ 生态系统
- ✅ 跨平台兼容（Windows/Linux/Mac）
- ✅ 更好的类型安全和性能

## 迁移步骤

### 1. 更新依赖

**移除**：
```json
"contentlayer": "^0.3.4",
"next-contentlayer": "^0.3.4",
"remark-gfm": "^3.0.1",
"rehype-slug": "^5.1.0",
"rehype-autolink-headings": "^6.1.1"
```

**添加**：
```json
"velite": "^0.1.1",
"rehype-slug": "^6.0.0",
"rehype-autolink-headings": "^7.1.0",
"remark-gfm": "^4.0.0"
```

### 2. 配置文件

**删除**: `contentlayer.config.ts`

**创建**: `velite.config.ts`
```typescript
import { defineConfig, defineCollection, s } from 'velite'
// ... 配置内容
```

### 3. Next.js 配置

**修改** `next.config.mjs`:
```javascript
import { build } from 'velite'

export default {
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin())
    return config
  }
}
```

### 4. TypeScript 配置

**更新** `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "#site/content": ["./.velite"]
    }
  },
  "include": [".velite"]
}
```

### 5. 页面组件迁移

**Contentlayer**:
```typescript
import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

const post = allPosts.find(p => p.slug === slug)
const MDX = useMDXComponent(post.body.code)
return <MDX />
```

**Velite**:
```typescript
import { posts } from '#site/content'
import { MDXContent } from '@/components/mdx-content'

const post = posts.find(p => p.slugAsParams === slug)
return <MDXContent code={post.body} />
```

### 6. 字段映射

| Contentlayer | Velite | 说明 |
|--------------|--------|------|
| `p._id` | `p.slug` | 唯一标识 |
| `p.url` | `/posts/${p.slugAsParams}` | URL路径 |
| `p.body.code` | `p.body` | MDX内容 |
| `p.category` | 从 `p.slug` 提取 | 需要自行解析 |

## 更新的文件列表

- ✅ `package.json` - 更新依赖
- ✅ `velite.config.ts` - 新建配置文件
- ✅ `next.config.mjs` - 集成 Velite
- ✅ `tsconfig.json` - 添加路径映射
- ✅ `.gitignore` - 忽略 `.velite` 目录
- ✅ `components/mdx-content.tsx` - MDX 渲染组件
- ✅ `app/posts/page.tsx` - 文章列表页
- ✅ `app/posts/[slug]/page.tsx` - 文章详情页
- ✅ `app/author/[slug]/page.tsx` - 作者页
- ✅ `app/category/[slug]/page.tsx` - 分类页

## 使用方法

### 安装依赖
```bash
pnpm install
```

### 开发模式
```bash
pnpm run dev
# Velite 会自动监听 content/ 目录的变化
```

### 构建生产版本
```bash
pnpm run build
# Velite 会在构建前生成静态数据
```

## 注意事项

1. **`.velite` 目录**: 这是Velite生成的临时目录，已添加到 `.gitignore`
2. **跨平台**: Velite 在 Windows/Linux/Mac 上都能正常工作
3. **类型安全**: Velite 会生成完整的 TypeScript 类型定义
4. **热更新**: 开发模式下，修改 MDX 文件会自动重新生成

## 优势总结

✅ **现代化**: 使用最新的工具链和依赖
✅ **维护良好**: 积极开发和维护中
✅ **类型安全**: 完整的 TypeScript 支持
✅ **性能更好**: 更快的构建速度
✅ **无兼容性问题**: 跨平台工作

## 参考链接

- [Velite 官方文档](https://velite.js.org/)
- [MDX 官方文档](https://mdxjs.com/)
- [从 Contentlayer 迁移](https://velite.js.org/guide/migrate-from-contentlayer)
