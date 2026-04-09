# SmartFlow 文档站

这是 `smart-flow-ai-skill-platform` 的 VitePress 文档站仓库，包含首页、产品概览、应用场景、核心能力、客户流程 / 交付、部署方式、版本路线和联系页。

## 线上地址

- GitHub Pages: `https://zmx2321.github.io/smart-flow-ai-skill-platform-doc/`
- 我的博客: `https://zmx2321.github.io/vite-blog`

## 本地使用

```bash
yarn
yarn dev
```

默认开发端口：

```text
http://localhost:7080/smart-flow-ai-skill-platform-doc/
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
