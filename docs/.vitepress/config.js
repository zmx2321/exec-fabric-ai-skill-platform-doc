const docsBase = process.env.EXECGOV_DOCS_BASE || "/exec-gov-ai-skill-platform-doc/"
const normalizedDocsBase = docsBase.endsWith("/") ? docsBase : `${docsBase}/`
const docsRepoUrl = process.env.EXECGOV_DOCS_REPO_URL || "https://github.com/zmx2321/exec-gov-ai-skill-platform-doc"

export default {
  lang: "zh-CN",
  title: "ExecGov（执治）",
  description: "ExecGov（执治），企业级 AI 执行与治理平台。",
  appearance: {
    initialValue: "dark",
    storageKey: "execgov-doc-theme-appearance",
  },
  base: normalizedDocsBase,
  head: [
    ["link", { rel: "icon", href: `${normalizedDocsBase}favicon.ico` }],
    ["meta", { name: "theme-color", content: "#020a08" }],
    [
      "script",
      {},
      `(() => {
        const siteKey = "execgov-doc-theme-appearance";
        const globalKey = "vitepress-theme-appearance";
        const saved = localStorage.getItem(siteKey);
        const normalized = saved === "light" || saved === "dark" || saved === "auto" ? saved : "dark";
        localStorage.setItem(siteKey, normalized);
        localStorage.setItem(globalKey, normalized);
      })();`,
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
  lastUpdated: true,
  themeConfig: {
    siteTitle: "ExecGov Docs",
    outlineTitle: "本页目录",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "开始使用",
        activeMatch: "^/guide/",
        items: [
          { text: "开始使用", link: "/guide/" },
          { text: "快速开始", link: "/guide/getting-started" },
          { text: "常见问题", link: "/guide/faq" },
        ],
      },
      {
        text: "产品介绍",
        activeMatch: "^/product/",
        items: [
          { text: "产品概览", link: "/product/" },
          { text: "应用场景", link: "/product/scenarios" },
          { text: "核心能力", link: "/product/capabilities" },
          { text: "能力编排", link: "/product/orchestration" },
          { text: "客户流程 / 交付", link: "/product/customer-flow" },
          { text: "热更新说明", link: "/product/hot-update" },
          { text: "文件上传 / 结果下载", link: "/product/file-results" },
          { text: "交付物 / 文档入口", link: "/product/deliverables" },
          { text: "客户接入准备清单", link: "/product/onboarding-checklist" },
          { text: "架构说明", link: "/product/architecture" },
          { text: "部署方式", link: "/product/deployment" },
          { text: "CLI 指引", link: "/product/cli" },
          { text: "版本路线", link: "/product/editions" },
        ],
      },
      {
        text: "介绍资料",
        activeMatch: "^/materials/",
        items: [
          { text: "资料总览", link: "/materials/" },
          { text: "介绍提纲", link: "/materials/pitch" },
          { text: "价值说明", link: "/materials/value" },
          { text: "合作方式 / 服务包", link: "/materials/service-packages" },
          { text: "交付背景与项目经历", link: "/materials/founder-profile" },
          { text: "背景概览", link: "/materials/founder-card" },
          { text: "项目与履历", link: "/materials/resume-public" },
        ],
      },
      // { text: "Logo 设计", link: "/logo-design/" },
      { text: "联系我", link: "/contact" },
      { text: "我的博客", link: "https://zmx2321.github.io/vite-blog" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "开始使用",
          items: [
            { text: "开始使用", link: "/guide/" },
            { text: "快速开始", link: "/guide/getting-started" },
            { text: "常见问题", link: "/guide/faq" },
          ],
        },
      ],
      "/product/": [
        {
          text: "平台文档",
          items: [
            { text: "产品概览", link: "/product/" },
            { text: "应用场景", link: "/product/scenarios" },
            { text: "核心能力", link: "/product/capabilities" },
            { text: "能力编排", link: "/product/orchestration" },
            { text: "客户流程 / 交付", link: "/product/customer-flow" },
            { text: "热更新说明", link: "/product/hot-update" },
            { text: "文件上传 / 结果下载", link: "/product/file-results" },
            { text: "交付物 / 文档入口", link: "/product/deliverables" },
            { text: "客户接入准备清单", link: "/product/onboarding-checklist" },
            { text: "架构说明", link: "/product/architecture" },
            { text: "部署方式", link: "/product/deployment" },
            { text: "CLI 指引", link: "/product/cli" },
            { text: "版本路线", link: "/product/editions" },
          ],
        },
      ],
      "/materials/": [
        {
          text: "介绍资料",
          items: [
            { text: "资料总览", link: "/materials/" },
            { text: "介绍提纲", link: "/materials/pitch" },
            { text: "价值说明", link: "/materials/value" },
            { text: "合作方式 / 服务包", link: "/materials/service-packages" },
            { text: "交付背景与项目经历", link: "/materials/founder-profile" },
            { text: "背景概览", link: "/materials/founder-card" },
            { text: "项目与履历", link: "/materials/resume-public" },
          ],
        },
      ],
      "/": [
        {
          text: "快速入口",
          items: [
            { text: "首页", link: "/" },
            { text: "开始使用", link: "/guide/" },
            { text: "快速开始", link: "/guide/getting-started" },
            { text: "常见问题", link: "/guide/faq" },
            { text: "产品概览", link: "/product/" },
            { text: "CLI 指引", link: "/product/cli" },
            { text: "客户流程 / 交付", link: "/product/customer-flow" },
            { text: "介绍资料", link: "/materials/" },
            { text: "介绍提纲", link: "/materials/pitch" },
            // { text: "Logo 设计", link: "/logo-design/" },
            { text: "联系我", link: "/contact" },
          ],
        },
      ],
      "/logo-design/": [
        {
          text: "品牌设计",
          items: [{ text: "Logo 设计简报", link: "/logo-design/" }],
        },
      ],
    },
    footer: {
      message: "让每次自动化，都可靠且可控。",
      copyright: "Copyright © 2026 zmx2321 | zmx2321@163.com",
    },
    search: {
      provider: "local",
    },
    lastUpdatedText: "最后更新",
    returnToTopLabel: "返回顶部",
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    socialLinks: [
      { icon: "github", link: docsRepoUrl },
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["legacy-js-api"],
        },
        sass: {
          silenceDeprecations: ["legacy-js-api"],
        },
      },
    },
    server: {
      host: "0.0.0.0",
      port: 7080,
      cors: true,
    },
  },
}
