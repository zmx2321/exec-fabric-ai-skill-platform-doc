const docsBase = process.env.EXECFABRIC_DOCS_BASE || "/"
const normalizedDocsBase = docsBase.endsWith("/") ? docsBase : `${docsBase}/`
const docsRepoUrl = process.env.EXECFABRIC_DOCS_REPO_URL || "https://github.com/zmx2321/exec-fabric-ai-skill-platform-doc"

const localeText = {
  root: {
    label: "简体中文",
    lang: "zh-CN",
    title: "ExecFabric（璇络）",
    description: "ExecFabric（璇络），让每一次自动化，都坚如织锦。",
    siteTitle: "ExecFabric Docs",
    outlineTitle: "本页目录",
    langMenuLabel: "切换语言",
    darkModeSwitchLabel: "外观",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "最后更新",
    prevText: "上一页",
    nextText: "下一页",
    footerMessage: "让每一次自动化，都坚如织锦。",
    navHome: "首页",
    navStart: "开始使用",
    navStartIndex: "开始使用",
    navGettingStarted: "快速开始",
    navFaq: "常见问题",
    navProduct: "产品介绍",
    navProductIndex: "产品概览",
    navScenarios: "应用场景",
    navCapabilities: "核心能力",
    navRiskLevels: "风险分级",
    navOrchestration: "能力编排",
    navCustomerFlow: "客户流程 / 交付",
    navBilling: "支付与会员",
    navHotUpdate: "热更新说明",
    navFiles: "文件上传 / 结果下载",
    navDeliverables: "交付物 / 文档入口",
    navImplementationTraining: "培训与实施",
    navChecklist: "客户接入准备清单",
    navArchitecture: "架构说明",
    navDeployment: "部署方式",
    navCli: "CLI 指引",
    navEditions: "版本路线",
    navMaterials: "关于 / 资料",
    navMaterialsIndex: "资料总览",
    navWhy: "为什么我要做 ExecFabric",
    navCaseStudies: "样板案例",
    navPitch: "介绍提纲",
    navValue: "价值说明",
    navMembershipPricing: "会员权益与价格说明",
    navServicePackages: "合作方式 / 服务包",
    navFounderProfile: "交付背景与项目经历",
    navFounderCard: "背景概览",
    navResume: "项目与履历",
    navContact: "联系我",
    navBlog: "我的博客",
    sidebarGuide: "开始使用",
    sidebarProduct: "平台文档",
    sidebarMaterials: "关于 / 资料",
    sidebarQuick: "快速入口",
    sidebarBrand: "品牌设计",
    sidebarLogoDesign: "Logo 设计简报",
    searchButtonText: "搜索",
    searchButtonAriaLabel: "搜索文档",
    searchDisplayDetails: "显示详细列表",
    searchReset: "清除查询条件",
    searchBack: "返回关闭搜索",
    searchNoResults: "没有找到结果",
    searchSelect: "选择",
    searchSelectAria: "输入回车确认",
    searchNavigate: "切换",
    searchNavigateUpAria: "向上导航",
    searchNavigateDownAria: "向下导航",
    searchClose: "关闭",
    searchCloseAria: "输入 escape 关闭",
  },
  en: {
    label: "English",
    lang: "en-US",
    title: "ExecFabric",
    description: "ExecFabric is an AI execution platform for reliable, governed automation.",
    siteTitle: "ExecFabric Docs",
    outlineTitle: "On this page",
    langMenuLabel: "Change language",
    darkModeSwitchLabel: "Appearance",
    sidebarMenuLabel: "Menu",
    returnToTopLabel: "Back to top",
    lastUpdatedText: "Last updated",
    prevText: "Previous page",
    nextText: "Next page",
    footerMessage: "Crafting the unbreakable fabric of automation.",
    navHome: "Home",
    navStart: "Start Here",
    navStartIndex: "Start Here",
    navGettingStarted: "Getting Started",
    navFaq: "FAQ",
    navProduct: "Product",
    navProductIndex: "Overview",
    navScenarios: "Scenarios",
    navCapabilities: "Capabilities",
    navRiskLevels: "Risk Levels",
    navOrchestration: "Orchestration",
    navCustomerFlow: "Customer Flow / Delivery",
    navBilling: "Billing & Membership",
    navHotUpdate: "Hot Update",
    navFiles: "Files & Results",
    navDeliverables: "Deliverables",
    navImplementationTraining: "Implementation & Training",
    navChecklist: "Onboarding Checklist",
    navArchitecture: "Architecture",
    navDeployment: "Deployment",
    navCli: "CLI Guide",
    navEditions: "Editions",
    navMaterials: "Materials",
    navMaterialsIndex: "Materials Overview",
    navWhy: "Why I Am Building ExecFabric",
    navCaseStudies: "Case Studies",
    navPitch: "Pitch",
    navValue: "Value",
    navMembershipPricing: "Membership & Pricing",
    navServicePackages: "Service Packages",
    navFounderProfile: "Founder Profile",
    navFounderCard: "Founder Card",
    navResume: "Public Resume",
    navContact: "Contact",
    navBlog: "Blog",
    sidebarGuide: "Start Here",
    sidebarProduct: "Product Docs",
    sidebarMaterials: "Materials",
    sidebarQuick: "Quick Links",
    sidebarBrand: "Brand",
    sidebarLogoDesign: "Logo Brief",
    searchButtonText: "Search",
    searchButtonAriaLabel: "Search docs",
    searchDisplayDetails: "Display detailed list",
    searchReset: "Reset search",
    searchBack: "Close search",
    searchNoResults: "No results found",
    searchSelect: "Select",
    searchSelectAria: "Press enter to select",
    searchNavigate: "Navigate",
    searchNavigateUpAria: "Navigate up",
    searchNavigateDownAria: "Navigate down",
    searchClose: "Close",
    searchCloseAria: "Press escape to close",
  },
}

const ensureLeadingSlash = (path = "/") => (path.startsWith("/") ? path : `/${path}`)

const withLocale = (localeKey, path = "/") => {
  const normalizedPath = ensureLeadingSlash(path)

  if (localeKey === "root") {
    return normalizedPath
  }

  return normalizedPath === "/" ? `/${localeKey}/` : `/${localeKey}${normalizedPath}`
}

const createActiveMatch = (localeKey, path) => `^${withLocale(localeKey, path)}`

const createSearchOptions = () => ({
  detailedView: "auto",
  locales: {
    root: {
      translations: {
        button: {
          buttonText: localeText.root.searchButtonText,
          buttonAriaLabel: localeText.root.searchButtonAriaLabel,
        },
        modal: {
          displayDetails: localeText.root.searchDisplayDetails,
          resetButtonTitle: localeText.root.searchReset,
          backButtonTitle: localeText.root.searchBack,
          noResultsText: localeText.root.searchNoResults,
          footer: {
            selectText: localeText.root.searchSelect,
            selectKeyAriaLabel: localeText.root.searchSelectAria,
            navigateText: localeText.root.searchNavigate,
            navigateUpKeyAriaLabel: localeText.root.searchNavigateUpAria,
            navigateDownKeyAriaLabel: localeText.root.searchNavigateDownAria,
            closeText: localeText.root.searchClose,
            closeKeyAriaLabel: localeText.root.searchCloseAria,
          },
        },
      },
    },
    en: {
      translations: {
        button: {
          buttonText: localeText.en.searchButtonText,
          buttonAriaLabel: localeText.en.searchButtonAriaLabel,
        },
        modal: {
          displayDetails: localeText.en.searchDisplayDetails,
          resetButtonTitle: localeText.en.searchReset,
          backButtonTitle: localeText.en.searchBack,
          noResultsText: localeText.en.searchNoResults,
          footer: {
            selectText: localeText.en.searchSelect,
            selectKeyAriaLabel: localeText.en.searchSelectAria,
            navigateText: localeText.en.searchNavigate,
            navigateUpKeyAriaLabel: localeText.en.searchNavigateUpAria,
            navigateDownKeyAriaLabel: localeText.en.searchNavigateDownAria,
            closeText: localeText.en.searchClose,
            closeKeyAriaLabel: localeText.en.searchCloseAria,
          },
        },
      },
    },
  },
})

const createNav = (localeKey) => {
  const t = localeText[localeKey]

  return [
    { text: t.navHome, link: withLocale(localeKey, "/") },
    {
      text: t.navStart,
      activeMatch: createActiveMatch(localeKey, "/guide/"),
      items: [
        { text: t.navStartIndex, link: withLocale(localeKey, "/guide/") },
        { text: t.navGettingStarted, link: withLocale(localeKey, "/guide/getting-started") },
        { text: t.navFaq, link: withLocale(localeKey, "/guide/faq") },
      ],
    },
    {
      text: t.navProduct,
      activeMatch: createActiveMatch(localeKey, "/product/"),
      items: [
        { text: t.navProductIndex, link: withLocale(localeKey, "/product/") },
        { text: t.navScenarios, link: withLocale(localeKey, "/product/scenarios") },
        { text: t.navCapabilities, link: withLocale(localeKey, "/product/capabilities") },
        { text: t.navRiskLevels, link: withLocale(localeKey, "/product/script-risk-levels") },
        { text: t.navOrchestration, link: withLocale(localeKey, "/product/orchestration") },
        { text: t.navCustomerFlow, link: withLocale(localeKey, "/product/customer-flow") },
        { text: t.navBilling, link: withLocale(localeKey, "/product/personal-billing-membership") },
        { text: t.navHotUpdate, link: withLocale(localeKey, "/product/hot-update") },
        { text: t.navFiles, link: withLocale(localeKey, "/product/file-results") },
        { text: t.navDeliverables, link: withLocale(localeKey, "/product/deliverables") },
        { text: t.navImplementationTraining, link: withLocale(localeKey, "/product/implementation-training") },
        { text: t.navChecklist, link: withLocale(localeKey, "/product/onboarding-checklist") },
        { text: t.navArchitecture, link: withLocale(localeKey, "/product/architecture") },
        { text: t.navDeployment, link: withLocale(localeKey, "/product/deployment") },
        { text: t.navCli, link: withLocale(localeKey, "/product/cli") },
        { text: t.navEditions, link: withLocale(localeKey, "/product/editions") },
      ],
    },
    {
      text: t.navMaterials,
      activeMatch: createActiveMatch(localeKey, "/materials/"),
      items: [
        { text: t.navMaterialsIndex, link: withLocale(localeKey, "/materials/") },
        { text: t.navWhy, link: withLocale(localeKey, "/materials/why-execfabric") },
        { text: t.navCaseStudies, link: withLocale(localeKey, "/materials/case-studies") },
        { text: t.navPitch, link: withLocale(localeKey, "/materials/pitch") },
        { text: t.navValue, link: withLocale(localeKey, "/materials/value") },
        { text: t.navMembershipPricing, link: withLocale(localeKey, "/materials/membership-benefits-pricing") },
        { text: t.navServicePackages, link: withLocale(localeKey, "/materials/service-packages") },
        { text: t.navFounderProfile, link: withLocale(localeKey, "/materials/founder-profile") },
        { text: t.navFounderCard, link: withLocale(localeKey, "/materials/founder-card") },
        { text: t.navResume, link: withLocale(localeKey, "/materials/resume-public") },
      ],
    },
    { text: t.navContact, link: withLocale(localeKey, "/contact") },
    { text: t.navBlog, link: "https://zmx2321.github.io/vite-blog" },
  ]
}

const createSidebar = (localeKey) => {
  const t = localeText[localeKey]

  return {
    [withLocale(localeKey, "/guide/")]: [
      {
        text: t.sidebarGuide,
        items: [
          { text: t.navStartIndex, link: withLocale(localeKey, "/guide/") },
          { text: t.navGettingStarted, link: withLocale(localeKey, "/guide/getting-started") },
          { text: t.navFaq, link: withLocale(localeKey, "/guide/faq") },
        ],
      },
    ],
    [withLocale(localeKey, "/product/")]: [
      {
        text: t.sidebarProduct,
        items: [
          { text: t.navProductIndex, link: withLocale(localeKey, "/product/") },
          { text: t.navScenarios, link: withLocale(localeKey, "/product/scenarios") },
          { text: t.navCapabilities, link: withLocale(localeKey, "/product/capabilities") },
          { text: t.navRiskLevels, link: withLocale(localeKey, "/product/script-risk-levels") },
          { text: t.navOrchestration, link: withLocale(localeKey, "/product/orchestration") },
          { text: t.navCustomerFlow, link: withLocale(localeKey, "/product/customer-flow") },
          { text: t.navBilling, link: withLocale(localeKey, "/product/personal-billing-membership") },
          { text: t.navHotUpdate, link: withLocale(localeKey, "/product/hot-update") },
          { text: t.navFiles, link: withLocale(localeKey, "/product/file-results") },
          { text: t.navDeliverables, link: withLocale(localeKey, "/product/deliverables") },
          { text: t.navImplementationTraining, link: withLocale(localeKey, "/product/implementation-training") },
          { text: t.navChecklist, link: withLocale(localeKey, "/product/onboarding-checklist") },
          { text: t.navArchitecture, link: withLocale(localeKey, "/product/architecture") },
          { text: t.navDeployment, link: withLocale(localeKey, "/product/deployment") },
          { text: t.navCli, link: withLocale(localeKey, "/product/cli") },
          { text: t.navEditions, link: withLocale(localeKey, "/product/editions") },
        ],
      },
    ],
    [withLocale(localeKey, "/materials/")]: [
      {
        text: t.sidebarMaterials,
        items: [
          { text: t.navMaterialsIndex, link: withLocale(localeKey, "/materials/") },
          { text: t.navWhy, link: withLocale(localeKey, "/materials/why-execfabric") },
          { text: t.navCaseStudies, link: withLocale(localeKey, "/materials/case-studies") },
          { text: t.navPitch, link: withLocale(localeKey, "/materials/pitch") },
          { text: t.navValue, link: withLocale(localeKey, "/materials/value") },
          { text: t.navMembershipPricing, link: withLocale(localeKey, "/materials/membership-benefits-pricing") },
          { text: t.navServicePackages, link: withLocale(localeKey, "/materials/service-packages") },
          { text: t.navFounderProfile, link: withLocale(localeKey, "/materials/founder-profile") },
          { text: t.navFounderCard, link: withLocale(localeKey, "/materials/founder-card") },
          { text: t.navResume, link: withLocale(localeKey, "/materials/resume-public") },
        ],
      },
    ],
    [withLocale(localeKey, "/")]: [
      {
        text: t.sidebarQuick,
        items: [
          { text: t.navHome, link: withLocale(localeKey, "/") },
          { text: t.navStartIndex, link: withLocale(localeKey, "/guide/") },
          { text: t.navGettingStarted, link: withLocale(localeKey, "/guide/getting-started") },
          { text: t.navFaq, link: withLocale(localeKey, "/guide/faq") },
          { text: t.navProductIndex, link: withLocale(localeKey, "/product/") },
          { text: t.navCli, link: withLocale(localeKey, "/product/cli") },
          { text: t.navCustomerFlow, link: withLocale(localeKey, "/product/customer-flow") },
          { text: t.navImplementationTraining, link: withLocale(localeKey, "/product/implementation-training") },
          { text: t.navMaterialsIndex, link: withLocale(localeKey, "/materials/") },
          { text: t.navWhy, link: withLocale(localeKey, "/materials/why-execfabric") },
          { text: t.navCaseStudies, link: withLocale(localeKey, "/materials/case-studies") },
          { text: t.navPitch, link: withLocale(localeKey, "/materials/pitch") },
          { text: t.navContact, link: withLocale(localeKey, "/contact") },
        ],
      },
    ],
    [withLocale(localeKey, "/logo-design/")]: [
      {
        text: t.sidebarBrand,
        items: [{ text: t.sidebarLogoDesign, link: withLocale(localeKey, "/logo-design/") }],
      },
    ],
  }
}

const createThemeConfig = (localeKey) => {
  const t = localeText[localeKey]

  return {
    siteTitle: t.siteTitle,
    outlineTitle: t.outlineTitle,
    nav: createNav(localeKey),
    sidebar: createSidebar(localeKey),
    footer: {
      message: t.footerMessage,
      copyright: "Copyright © 2026 zmx2321 | zmx2321@163.com",
    },
    search: {
      provider: "local",
      options: createSearchOptions(),
    },
    lastUpdatedText: t.lastUpdatedText,
    returnToTopLabel: t.returnToTopLabel,
    sidebarMenuLabel: t.sidebarMenuLabel,
    darkModeSwitchLabel: t.darkModeSwitchLabel,
    langMenuLabel: t.langMenuLabel,
    docFooter: {
      prev: t.prevText,
      next: t.nextText,
    },
    socialLinks: [{ icon: "github", link: docsRepoUrl }],
  }
}

export default {
  lang: localeText.root.lang,
  title: localeText.root.title,
  description: localeText.root.description,
  appearance: {
    initialValue: "light",
    storageKey: "execfabric-doc-theme-appearance",
  },
  base: normalizedDocsBase,
  head: [
    ["link", { rel: "icon", href: `${normalizedDocsBase}favicon.ico` }],
    ["meta", { name: "theme-color", content: "#edf4f6" }],
    [
      "script",
      {},
      `(() => {
        const siteKey = "execfabric-doc-theme-appearance";
        const globalKey = "vitepress-theme-appearance";
        const saved = localStorage.getItem(siteKey);
        const normalized = saved === "light" || saved === "dark" || saved === "auto" ? saved : "light";
        localStorage.setItem(siteKey, normalized);
        localStorage.setItem(globalKey, normalized);
      })();`,
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
  lastUpdated: true,
  themeConfig: createThemeConfig("root"),
  locales: {
    root: {
      label: localeText.root.label,
      lang: localeText.root.lang,
      title: localeText.root.title,
      description: localeText.root.description,
    },
    en: {
      label: localeText.en.label,
      lang: localeText.en.lang,
      title: localeText.en.title,
      description: localeText.en.description,
      themeConfig: createThemeConfig("en"),
    },
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
