# CI/CD（Release-please）
- `.github/workflows/release-please.yml`：生成发布 PR 与 ChangeLog
- `.github/workflows/publish.yml`：Release 发布后自动 `npm publish` 并部署 Docs 到 GitHub Pages
- `release-please-config.json` + `.release-please-manifest.json`：多包管理
