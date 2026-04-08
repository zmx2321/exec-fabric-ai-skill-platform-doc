export default {
  lang: "zh-CN",
  title: "SmartFlow AI Skill Platform",
  description: "SmartFlow AI Skill Platform / 智流·智能执行平台，An Open & Secure AI Agent Execution Layer。",
  appearance: {
    initialValue: "dark",
    storageKey: "smartflow-doc-theme-appearance",
  },
  base: "/smart-flow-ai-skill-platform-doc/",
  head: [
    ["link", { rel: "icon", href: "/smart-flow-ai-skill-platform-doc/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#020a08" }],
    [
      "script",
      {},
      `(() => {
        const siteKey = "smartflow-doc-theme-appearance";
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
    siteTitle: "SmartFlow Docs",
    outlineTitle: "本页目录",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "产品介绍",
        activeMatch: "^/product/",
        items: [
          { text: "产品概览", link: "/product/" },
          { text: "应用场景", link: "/product/scenarios" },
          { text: "核心能力", link: "/product/capabilities" },
          { text: "架构说明", link: "/product/architecture" },
          { text: "部署方式", link: "/product/deployment" },
          { text: "CLI 指引", link: "/product/cli" },
          { text: "版本路线", link: "/product/editions" },
        ],
      },
      { text: "Logo 设计", link: "/logo-design/" },
      { text: "联系我", link: "/contact" },
      { text: "我的博客", link: "https://zmx2321.github.io/vite-blog" },
    ],
    sidebar: {
      "/product/": [
        {
          text: "平台文档",
          items: [
            { text: "产品概览", link: "/product/" },
            { text: "应用场景", link: "/product/scenarios" },
            { text: "核心能力", link: "/product/capabilities" },
            { text: "架构说明", link: "/product/architecture" },
            { text: "部署方式", link: "/product/deployment" },
            { text: "CLI 指引", link: "/product/cli" },
            { text: "版本路线", link: "/product/editions" },
          ],
        },
      ],
      "/": [
        {
          text: "快速入口",
          items: [
            { text: "首页", link: "/" },
            { text: "产品概览", link: "/product/" },
            { text: "CLI 指引", link: "/product/cli" },
            { text: "应用场景", link: "/product/scenarios" },
            { text: "Logo 设计", link: "/logo-design/" },
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
    editLink: {
      pattern: "https://github.com/zmx2321/smart-flow-ai-skill-platform-doc/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页",
    },
    footer: {
      message: "Make AI Work, Make Work Smart.",
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
      { icon: "github", link: "https://github.com/zmx2321/smart-flow-ai-skill-platform-doc" },
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
