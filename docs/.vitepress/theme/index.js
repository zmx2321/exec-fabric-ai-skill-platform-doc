import DefaultTheme from "vitepress/theme"
import { inBrowser, useRoute } from "vitepress"
import { computed, h, nextTick, onBeforeUnmount, onMounted, watch } from "vue"

import "./styles/custom.scss"

const normalizePath = (pathname = "/") => pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "").replace(/\/+$/, "") || "/"

const resolveLocaleKey = (path = "/") => (path.startsWith("/en/") ? "en" : "root")

const themeCopy = {
  root: {
    heroRequest: "'帮我清理服务器日志'",
    heroComment: "// 先看体验入口，再决定继续注册、沟通场景还是正式交付",
    noteKicker: "Scenario Entry",
    noteLead: "如果你想判断现有脚本、文件流程或本地执行任务是否适合接入 ExecFabric，可以先带一个真实场景来沟通，",
    noteEmphasis: "先把边界、执行方式和结果回传讲清楚。",
  },
  en: {
    heroRequest: "'Help me clean up the server logs'",
    heroComment: "// Start with the public entry, then decide on signup, a scoped conversation, or formal delivery",
    noteKicker: "Scenario Entry",
    noteLead: "If you want to judge whether your current scripts, file workflows, or local execution tasks fit ExecFabric, bring one real scenario first and ",
    noteEmphasis: "clarify the boundary, execution path, and result return.",
  },
}

const NAVBAR_TRIGGER_BUFFER = 36
const NAVBAR_MIN_TRIGGER = 12
const NAVBAR_MAX_TRIGGER = 36

const syncCurrentMenuState = () => {
  if (!inBrowser) {
    return
  }

  const currentPath = normalizePath(window.location.pathname)

  document.querySelectorAll("[data-execfabric-current='true']").forEach((node) => {
    node.removeAttribute("data-execfabric-current")
  })

  document.querySelectorAll(".VPSidebar .link, .VPMenuLink .link").forEach((node) => {
    const href = node.getAttribute("href")

    if (!href || href.startsWith("#")) {
      return
    }

    let url

    try {
      url = new URL(href, window.location.origin)
    } catch {
      return
    }

    if (normalizePath(url.pathname) === currentPath) {
      node.setAttribute("data-execfabric-current", "true")
    }
  })
}

const getNavbarTriggerTarget = () => {
  if (!inBrowser) {
    return null
  }

  const selectors = [
    ".VPHome .VPHero .container",
    ".VPDoc .brand-page-shell",
    ".VPDoc .vp-doc > h1",
    ".VPDoc .vp-doc > :first-child",
  ]

  for (const selector of selectors) {
    const node = document.querySelector(selector)

    if (node) {
      return node
    }
  }

  return null
}

const getNavbarTriggerOffset = () => {
  if (!inBrowser) {
    return NAVBAR_MIN_TRIGGER
  }

  const navbar = document.querySelector(".VPNavBar")
  const target = getNavbarTriggerTarget()
  const navbarHeight = navbar?.getBoundingClientRect().height ?? 0

  if (!target) {
    return Math.max(NAVBAR_MIN_TRIGGER, Math.min(NAVBAR_MAX_TRIGGER, Math.round(navbarHeight)))
  }

  const targetTop = target.getBoundingClientRect().top + window.scrollY
  const rawOffset = targetTop - navbarHeight - NAVBAR_TRIGGER_BUFFER

  return Math.max(NAVBAR_MIN_TRIGGER, Math.min(NAVBAR_MAX_TRIGGER, Math.round(rawOffset)))
}

const syncNavbarTopState = () => {
  if (!inBrowser) {
    return
  }

  const isTop = window.scrollY < getNavbarTriggerOffset()
  const value = isTop ? "true" : "false"

  document.documentElement.setAttribute("data-execfabric-nav-top", value)

  document.querySelectorAll(".VPNavBar").forEach((node) => {
    node.setAttribute("data-execfabric-nav-top", value)
  })
}

const syncSidebarLayoutState = () => {
  if (!inBrowser) {
    return
  }

  const value = document.querySelector(".VPSidebar") ? "true" : "false"

  document.documentElement.setAttribute("data-execfabric-has-sidebar", value)

  document.querySelectorAll(".VPNavBar").forEach((node) => {
    node.setAttribute("data-execfabric-has-sidebar", value)
  })
}

const useThemeCopy = () => {
  const route = useRoute()

  return computed(() => themeCopy[resolveLocaleKey(route.path)])
}

const ThemeStateSync = {
  name: "ThemeStateSync",
  setup() {
    const route = useRoute()
    let frame = 0

    const apply = () => {
      if (!inBrowser) {
        return
      }

      frame = 0
      syncCurrentMenuState()
      syncSidebarLayoutState()
      syncNavbarTopState()
    }

    const queueApply = () => {
      if (!inBrowser || frame) {
        return
      }

      frame = window.requestAnimationFrame(apply)
    }

    onMounted(() => {
      apply()
      window.addEventListener("scroll", queueApply, { passive: true })
    })

    onBeforeUnmount(() => {
      if (!inBrowser) {
        return
      }

      window.removeEventListener("scroll", queueApply)

      if (frame) {
        window.cancelAnimationFrame(frame)
        frame = 0
      }
    })

    watch(
      () => route.path,
      async () => {
        await nextTick()
        apply()
      }
    )

    return () => null
  },
}

const HomeHeroCode = {
  name: "HomeHeroCode",
  setup() {
    const copy = useThemeCopy()

    return () => {
      const current = copy.value

      return h("div", { class: "home-hero-code" }, [
        h("div", { class: "home-hero-code__head" }, [
          h("div", { class: "home-hero-code__dots" }, [
            h("span", { class: "home-hero-code__dot home-hero-code__dot--red" }),
            h("span", { class: "home-hero-code__dot home-hero-code__dot--yellow" }),
            h("span", { class: "home-hero-code__dot home-hero-code__dot--green" }),
          ]),
          h("span", { class: "home-hero-code__file" }, "demo/smart-execution.flow.ts"),
          h("span", { class: "home-hero-code__status" }, "request"),
        ]),
        h("div", { class: "home-hero-code__body" }, [
          h("div", { class: "home-hero-code__line" }, [
            h("span", { class: "home-hero-code__line-no" }, "01"),
            h("span", { class: "home-hero-code__line-text" }, [
              h("span", { class: "token-keyword" }, "const"),
              " ",
              h("span", { class: "token-variable" }, "request"),
              " ",
              h("span", { class: "token-operator" }, "="),
              " ",
              h("span", { class: "token-string" }, current.heroRequest),
            ]),
          ]),
          h("div", { class: "home-hero-code__line" }, [
            h("span", { class: "home-hero-code__line-no" }, "02"),
            h("span", { class: "home-hero-code__line-text" }, [
              h("span", { class: "token-keyword" }, "const"),
              " ",
              h("span", { class: "token-variable" }, "matchedSkill"),
              " ",
              h("span", { class: "token-operator" }, "="),
              " ",
              h("span", { class: "token-string" }, "'log_cleanup'"),
            ]),
          ]),
          h("div", { class: "home-hero-code__line" }, [
            h("span", { class: "home-hero-code__line-no" }, "03"),
            h("span", { class: "home-hero-code__line-text" }, [
              h("span", { class: "token-keyword" }, "const"),
              " ",
              h("span", { class: "token-variable" }, "trace"),
              " ",
              h("span", { class: "token-operator" }, "="),
              " ",
              h("span", { class: "token-operator" }, "["),
              h("span", { class: "token-string" }, "'audit_log'"),
              h("span", { class: "token-operator" }, ","),
              " ",
              h("span", { class: "token-string" }, "'runtime_cost'"),
              h("span", { class: "token-operator" }, ","),
              " ",
              h("span", { class: "token-string" }, "'result_view'"),
              h("span", { class: "token-operator" }, "]"),
            ]),
          ]),
          h("div", { class: "home-hero-code__line" }, [
            h("span", { class: "home-hero-code__line-no" }, "04"),
            h("span", { class: "home-hero-code__line-text" }, [
              h("span", { class: "token-comment" }, current.heroComment),
            ]),
          ]),
          h("div", { class: "home-hero-code__line" }, [
            h("span", { class: "home-hero-code__line-no" }, "05"),
            h("span", { class: "home-hero-code__line-text" }, [
              h("span", { class: "token-keyword" }, "return"),
              " ",
              h("span", { class: "token-function" }, "smartExecution"),
              h("span", { class: "token-operator" }, "("),
              h("span", { class: "token-accent" }, "'public_entry'"),
              h("span", { class: "token-operator" }, ")"),
            ]),
          ]),
        ]),
        h("div", { class: "home-hero-code__footer" }, [
          h("span", { class: "home-hero-code__tag" }, "request in"),
          h("span", { class: "home-hero-code__tag" }, "no login first"),
          h("span", { class: "home-hero-code__tag" }, "execution first"),
        ]),
      ])
    }
  },
}

const HomeHeroAfter = {
  name: "HomeHeroAfter",
  setup() {
    const copy = useThemeCopy()

    return () => {
      const current = copy.value

      return h("div", { class: "home-hero-note" }, [
        h("div", { class: "home-hero-note__kicker" }, current.noteKicker),
        h("p", { class: "home-hero-note__text" }, [
          current.noteLead,
          h("strong", null, current.noteEmphasis),
        ]),
      ])
    }
  },
}

export default {
  ...DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      "home-hero-image": () => h(HomeHeroCode),
      "home-hero-after": () => h(HomeHeroAfter),
      "layout-bottom": () => h(ThemeStateSync),
    }),
}
