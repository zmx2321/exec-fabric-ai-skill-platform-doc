import DefaultTheme from "vitepress/theme"
import { inBrowser, useRoute } from "vitepress"
import { h, nextTick, onBeforeUnmount, onMounted, watch } from "vue"

import "./styles/custom.scss"

const normalizePath = (pathname = "/") => pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "").replace(/\/+$/, "") || "/"

const NAVBAR_TRIGGER_BUFFER = 12
const NAVBAR_MIN_TRIGGER = 12

const syncCurrentMenuState = () => {
  if (!inBrowser) {
    return
  }

  const currentPath = normalizePath(window.location.pathname)

  document.querySelectorAll("[data-smartflow-current='true']").forEach((node) => {
    node.removeAttribute("data-smartflow-current")
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
      node.setAttribute("data-smartflow-current", "true")
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
    return Math.max(NAVBAR_MIN_TRIGGER, Math.round(navbarHeight))
  }

  const targetTop = target.getBoundingClientRect().top + window.scrollY

  return Math.max(NAVBAR_MIN_TRIGGER, Math.round(targetTop - navbarHeight - NAVBAR_TRIGGER_BUFFER))
}

const syncNavbarTopState = () => {
  if (!inBrowser) {
    return
  }

  const isTop = window.scrollY < getNavbarTriggerOffset()
  const value = isTop ? "true" : "false"

  document.documentElement.setAttribute("data-smartflow-nav-top", value)

  document.querySelectorAll(".VPNavBar").forEach((node) => {
    node.setAttribute("data-smartflow-nav-top", value)
  })
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

export default {
  ...DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      "layout-bottom": () => h(ThemeStateSync),
    }),
}
