# Open Source Template Lab

四套与本机项目无关的原创交互模板，围绕 AI、云开发与公共开源社区。

| 页面 | 用途 | 功能与边界 |
| --- | --- | --- |
| `index.html` | 模板馆 | 进入四套模板 |
| `launch.html` | Fieldnotes 开源发布页 | 本地演示弹窗、场景切换、路线与 FAQ；示例品牌，无真实 AI 后端 |
| `dashboard.html` | Pulse 数据看板 | 六个精选 GitHub 仓库的真实快照、公共 API 手动刷新、筛选排序和 CSV 导出；不是增长榜 |
| `board.html` | Common Ground 贡献看板 | 新增、编辑、删除、修改状态、搜索、JSON 导出导入；浏览器本地存储，不同步 GitHub Issue |
| `atlas.html` | Open Atlas 资源导航 | 十二个真实资源入口、分类、搜索、收藏、自定义链接；浏览器本地保存 |
| `guide.html` | 网站内使用说明 | 数据来源、隐私、维护流程 |

## 本地运行

只需 Node.js 22+，无第三方 npm 依赖，无需 npm install。

```powershell
npm run check
npm run build
npm run preview
```

打开 http://127.0.0.1:4173 。全部页面可在同一站内访问；`src/` 是编辑源文件，`dist/` 是部署内容。修改主要文案可直接编辑 HTML；不要重新执行 `scripts/pages.mjs` 覆盖已修改的页面，该文件仅用于重建最初模板布局。

## GitHub 维护

本项目尚未绑定 GitHub 仓库。用户指定仓库后，建议配置：

1. `origin` 指向用户自己的 GitHub 仓库，负责源码、历史、Issue、PR 与 Actions 检查。
2. 通过 Sites 的 source helper 将合并后的同一份源码推送到该 Site 自己的源仓库。
3. 保存版本并部署，再确认生产状态和网址。

`.github/workflows/check.yml` 只做检查、构建和产物归档，**不自动部署至 Sites**。未核验有可长期使用的原生 GitHub Actions 发布凭证，不能把短期 Sites token 当长期 Secret，不能把 token 写进仓库。Sites 的源仓库不是 GitHub 仓库；两者分开管理。

在现有 Sites checkout 上，先读取当前远端配置，再选择未占用的 remote 名称添加 GitHub：

```powershell
git remote -v
# 用你明确指定的真实仓库 URL 替换，先确认 github remote 未被占用
git remote add github https://github.com/OWNER/REPOSITORY.git
git push -u github main
```

不要为了 GitHub 改掉 Sites 使用的现有 remote。合并 GitHub 更改到这个 checkout 后，明确要求 Codex“读取本项目 hosting.json，沿用 project_id，检查并重新发布”。发布 helper 管理 Sites 源推送、精确提交和构建归档。GitHub 的 PR 合并本身不会更新网站。

## 数据与更新

`src/data/repos.json` 是 GitHub 公共 API 已核验快照，包含每次抓取的时间。`scripts/repositories.mjs` 定义固定样本及中文简介。执行 `npm run refresh` 更新快照（使用 curl；Windows 为 curl.exe）。刷新失败时不替换原文件。浏览器手动刷新采用完整批次，失败则保留原快照，并显示错误；公共 API 可能限流。

`src/data/resources.json` 是人工精选资源，每项链接指向项目官方仓库或文档；资源热度、许可证与服务条款以项目当前说明为准。n8n 明确标记为 fair-code；没有声称所有项目都是 OSI 许可。

浏览器任务和收藏不在服务器数据库中。任务支持 JSON 备份，清除浏览器存储之前请先导出。自定义资源不是全站共享内容。

## Sites 配置与部署

`.openai/hosting.json` 持有现有 Site 身份和 `static.directory=dist`。沿用 ID，禁止重复 create_site。复用模板创建另一个 Site 时，从副本中删除 Site 身份后正常注册新 Site，不要覆盖当前站点。

源码与发布包均不含账号凭证；网站没有 D1/R2 绑定，也不向服务器收集任务与收藏。仅使用静态资源。

## 社区参考

用途与信息结构参考了以下公共社区案例，全部页面为原创 HTML/CSS/JS，没有复制这些项目源码：

- https://github.com/satnaing/shadcn-admin
- https://github.com/arthelokyo/astrowind
- https://github.com/shadcnstore/shadcn-dashboard-landing-template
- https://learn.chatgpt.com/docs/sites

公开指标来自 https://api.github.com/repos/{owner}/{repo} 。模板没有使用上述项目的商标素材，也不暗示合作关系。
