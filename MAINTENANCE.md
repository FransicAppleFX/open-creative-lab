# Sites 维护清单

目前确认的两个 Sites 项目。模板馆包含四套页面，不额外创建四个生产项目。

| Site | project_id | 类型 | 维护入口 |
| --- | --- | --- | --- |
| FX2026 · CFBlog | appgprj_6b00138a38f081918cf878d5dcb0f6cd | Worker + D1 + R2 | 原部署 checkout 的 `worker/`、`public/`、`drizzle/` |
| FX2026 · Template Lab | appgprj_6b00590eee448191ba175d2bf9d812db | 静态模板馆 | 本项目 `src/` |

## 统一流程

GitHub 作为版本维护仓库，Sites 作为生产发布服务。可为两站使用不同仓库，或在统一源码仓库保留每站独立目录；发布时每站使用隔离 checkout。不要用一个项目的 hosting.json 发布另一个项目。当前没有绑定用户指定的 GitHub 仓库；也没有设置自动定期维护或自动发布。

每次升级：

1. 确认目标站、读取 `.openai/hosting.json`，原样沿用 project_id，并读取当前访问权限。
2. 获取该站的短期源码凭证、用 Sites helper 打开对应 checkout；不要把凭证写到磁盘或 GitHub。
3. 从已审查的 GitHub 提交同步到目标 checkout，修改并检查。模板站运行 `npm run check`、`npm run build`；CFBlog 运行 `node build.mjs`，验证匿名只读和站主写入授权。
4. 用 helper 推送精确源码、生成对应归档，保存版本、部署，等待 succeeded 后保留版本与网址。
5. 涉及数据库迁移时先确认现有迁移历史，后续迁移追加文件，避免改写已应用的 SQL。

## CFBlog 额外检查

- 公开访问只开放读取；写作台和所有写接口仍检查 Sites 身份与 `CFBLOG_OWNER_EMAIL`。
- `CFBLOG_OWNER_EMAIL` 保留在 Sites 的 Secret 中，不放入源码、浏览器代码或 Actions。
- 源码备份不包含 D1 文章和 R2 附件；这两项需要另行备份。当前没有声称已完成云数据备份。
- 博客使用 D1/R2，收费策略变化时需单独核对额度；模板馆当前没有数据库和上传存储绑定。

## 本次验证

- 模板馆默认英文，支持中文、日文、韩文切换并保存语言选择；静态英文完整性、四语词库和动态文本已检查。

- 模板站本地检查覆盖 JavaScript 语法、站内文件引用、仓库快照格式、任务导入格式和 HTTPS 链接限制。
- 浏览器实测发布页场景切换、看板搜索分类、任务创建和状态保存、收藏刷新持久化。
- 390px 手机宽度检查修正表格对外层页面的溢出。
- 后续维护不应重新执行 `scripts/pages.mjs` 覆盖人工修改的 HTML，该文件保留为初版生成来源。
