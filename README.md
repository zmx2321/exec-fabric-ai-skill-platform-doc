# 璇络(ExecFabric)文档站

这是 `exec-fabric-ai-skill-platform-doc` 的 VitePress 文档站仓库，对应主平台仓库 `exec-fabric-ai-skill-platform`，包含首页、产品概览、应用场景、核心能力、客户流程 / 交付、部署方式、版本路线和联系页。

命名说明：`ExecFabric = Execution + Fabric`。中文名统一为 `璇络`；这里的 `Fabric` 强调把能力、流程和治理边界编织成稳定、可靠、可交付的自动化网络。

补充命名规则：代码里的 `intelligent_brain` 继续作为兼容技术标识保留；官网和对外文档里的统一显示名写“对话执行”。

## 线上地址

- 自定义域名: `https://docs.execfabric.cn/`
- GitHub Pages 仓库地址: `https://github.com/zmx2321/exec-fabric-ai-skill-platform-doc`
- 我的博客: `https://zmx2321.github.io/vite-blog`

## 本地使用

```bash
yarn
yarn dev
```

默认开发端口：

```text
http://localhost:7080/
```

## 构建与预览

```bash
yarn build
yarn preview
```

## 上传源码与部署

当前约定必须固定：

- `yarn main`：上传当前文档源码仓库内容到 `main`
- `yarn deploy`：构建并发布 GitHub Pages 到 `gh-pages`

补充说明：

- `docs/.vitepress/dist` 是构建产物，已在 `.gitignore` 中忽略，不进入源码提交。
- `yarn deploy` 会本地重新构建，再把生成后的静态文件单独推送到 `gh-pages`。
- 自定义域名文件必须放在 `docs/public/CNAME`，不能只放仓库根目录，否则发布分支里不会有这个文件。

### 上传源码

```bash
yarn main
```

### 发布站点

```bash
yarn deploy
```

## 脚本说明

- `yarn dev`：启动 VitePress 开发环境
- `yarn build`：构建静态站点
- `yarn preview`：本地预览构建产物
- `yarn clean`：清理 VitePress 缓存和构建输出
- `yarn main`：把当前源码改动提交并推送到仓库 `main`
- `yarn deploy`：构建后推送站点产物到 `gh-pages`
