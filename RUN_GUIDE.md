# Dove Monorepo 运行指南

本指南详细说明如何在本地运行这个 monorepo 项目（使用 pnpm）。

## 📋 前提条件

确保已安装：
- **Node.js** >= 18
- **pnpm** >= 8 （运行 `npm install -g pnpm` 安装）

---

## 🚀 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 生成 Prisma Client（必须！）

```bash
cd packages/db
npx prisma generate
cd ../..
```

### 3. 构建所有包

```bash
pnpm run build
```

**注意**：部分应用在 Windows 上可能有兼容性问题（见下文）

---

## 📦 可用的包（Packages）

所有包都在 `packages/` 目录下：

| 包名 | 说明 | 构建状态 |
|------|------|----------|
| `@dove/ui` | UI 组件库 | ✅ 正常 |
| `@dove/tokens` | 设计令牌 | ✅ 正常 |
| `@dove/db` | 数据库（Prisma） | ✅ 正常 |
| `@dove/adapters` | 适配器 | ✅ 正常 |

### 单独构建某个包

```bash
# UI 组件库
pnpm --filter @dove/ui run build

# 数据库包
pnpm --filter @dove/db run build
```

### 开发模式（监听文件变化）

```bash
# UI 组件库 - 自动重新构建
pnpm --filter @dove/ui run dev
```

---

## 🎯 可用的应用（Apps）

所有应用都在 `apps/` 目录下：

| 应用名 | 说明 | 状态 | 运行命令 |
|--------|------|------|----------|
| **playground** | Vite + React 测试应用 | ✅ 可用 | `pnpm run dev:play` |
| **docs** | Docusaurus 文档站点 | ✅ 可用 | `pnpm run dev:docs` |
| **frontend** | Next.js 前端应用（带 contentlayer） | ✅ Linux 可用 / ⚠️ Windows 需配置 | `pnpm run dev:front` |
| **admin** | Next.js 管理后台 | ⚠️ 有组件错误 | `pnpm run dev:admin` |

---

## ✅ 推荐运行的应用

### 1. Playground（Vite + React）

**开发模式**：
```bash
pnpm run dev:play
```

**构建生产版本**：
```bash
pnpm --filter @dove/playground run build
pnpm --filter @dove/playground run preview
```

---

### 2. Docs（Docusaurus）

**开发模式**：
```bash
pnpm run dev:docs
```

**构建生产版本**：
```bash
pnpm --filter @dove/docs run build
pnpm --filter @dove/docs run serve
```

---

## ⚠️ 已知问题

### Frontend 应用（contentlayer 在 Windows 上的兼容性）

`@dove/frontend` 使用了 `contentlayer`，该库在 Windows 上有已知问题。

**✅ contentlayer 已启用（适用于 Linux/Mac 生产环境）**

**Windows 开发者注意**：
如果在 Windows 上遇到 contentlayer 相关错误，可以临时禁用它：

1. 打开 `apps/frontend/next.config.mjs`
2. 注释掉第 6-12 行（withContentlayer 配置）
3. 取消注释第 15-21 行（Fallback config）

或者使用 **WSL（Windows Subsystem for Linux）** 运行项目

### Admin 应用（React 组件错误）

`@dove/admin` 构建时有 React Server Component 相关错误：

```
Error: Event handlers cannot be passed to Client Component props.
```

**需要修复**：
- 在相关组件顶部添加 `'use client'` 指令
- 或将事件处理器移到客户端组件

---

## 🛠️ 开发工作流

### 同时开发 UI 组件和应用

开两个终端：

**终端 1** - 监听 UI 包变化：
```bash
pnpm --filter @dove/ui run dev
```

**终端 2** - 运行 Playground：
```bash
pnpm run dev:play
```

这样修改 UI 组件后，Playground 会自动更新。

---

## 🗄️ 数据库（Prisma）

### 查看数据库

```bash
pnpm --filter @dove/db run prisma:studio
```

### 迁移数据库

```bash
pnpm --filter @dove/db run prisma:migrate
```

### 切换数据库类型

```bash
# SQLite（默认）
pnpm --filter @dove/db run db:select:sqlite

# PostgreSQL
pnpm --filter @dove/db run db:select:postgres

# MySQL
pnpm --filter @dove/db run db:select:mysql
```

---

## 📝 常用命令汇总

```bash
# 安装依赖
pnpm install

# 构建所有包
pnpm run build

# 只构建 UI
pnpm run build:ui

# 运行 Playground
pnpm run dev:play

# 运行 Docs
pnpm run dev:docs

# 运行 Admin（可能有错误）
pnpm run dev:admin

# 代码检查
pnpm run lint

# 清理所有 node_modules
pnpm -r exec rm -rf node_modules
pnpm install
```

---

## 🔧 修复记录

以下问题已在重构中修复：

1. ✅ **Prisma Client 未生成** - 已添加 `.env` 并格式化 `schema.prisma`
2. ✅ **TypeScript 模块配置错误** - 已添加 `module: "esnext"` 到 `@dove/adapters`
3. ✅ **缺少类型定义** - 已添加 `@types/node`、`@types/react` 等
4. ✅ **@dove/tokens 缺少 build 脚本** - 已添加占位脚本
5. ✅ **package.json exports 不完整** - 已添加完整的导出路径
6. ✅ **Docusaurus CSS 导入路径错误** - 已临时禁用导入
7. ✅ **Frontend contentlayer 配置** - 已恢复并添加 Windows fallback 配置

---

## 💡 建议

如果你要发布这些包到 npm，记得：

1. 将 `package.json` 中的 `private: false` 改为 `private: true`（对于不想发布的包）
2. 检查 `package.json` 的 `files` 字段，确保只包含必要文件
3. 运行 `pnpm publish --filter @dove/ui` 等命令发布

---

## 📞 遇到问题？

- 检查 Node.js 版本 >= 18
- 确保已运行 `npx prisma generate` 生成 Prisma client
- 清理并重新安装：`rm -rf node_modules pnpm-lock.yaml && pnpm install`
- Windows 用户建议使用 WSL 运行 `@dove/frontend`

---

**祝开发顺利！** 🎉
