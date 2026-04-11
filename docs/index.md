---
layout: home

hero:
  name: ExecGov
  text: ExecGov（执治）
  tagline: 先体验一条真实可跑通的执行链路：输入请求、AI 匹配、调度执行、返回结果；确认合适后，再接入你的脚本、本地工具和线上服务。
  actions:
    - theme: brand
      text: 立即免费体验（免登录）
      link: /guide/getting-started
    - theme: alt
      text: 沟通具体场景
      link: /contact#lead-form
    - theme: alt
      text: 了解构建者
      link: /materials/founder-profile

features:
  - title: 多租户治理
    details: 为不同客户提供独立、安全的执行空间，同时保留统一配置、交付与运营能力。
  - title: 可信执行闭环
    details: 从计划确认到执行留痕，每一次 AI 动作都可追踪、可复盘、可审计。
  - title: 本地与云端协同
    details: 不必暴露核心资产，也能把本地脚本、内网 API 与云端控制面连接起来。
  - title: 清晰演进路线
    details: 先把能落地的一条线做稳，再判断哪些能力和场景值得继续扩展。
---

<div class="landing-shell">
  <section class="landing-band landing-band--brand landing-band--brand-story">
    <div class="landing-brand">
      <div class="landing-brand__copy">
        <p class="landing-kicker">Brand Signal</p>
        <h2>先看它能不能替你省事，再决定是否继续深入</h2>
        <p class="landing-lead">
          <strong>ExecGov（执治）是一个以 Python 脚本为第一种成熟执行资产的多租户能力治理与执行平台。</strong>
        </p>
        <p class="landing-lead">
          名字里的 <strong>Exec</strong> 来自 <strong>Execution</strong>，<strong>Gov</strong> 来自 <strong>Governance</strong>。
          这里说的不是政府项目，而是强调
          <strong>AI、脚本、本地资源和线上能力都要在治理边界内执行</strong>。
          如果能力不能在规则里真正落地执行，就不是 ExecGov 想解决的问题。
        </p>
        <p class="landing-lead">
          ExecGov 想解决的不是“模型能不能回答”，而是
          <strong>脚本、本地资源和线上能力能不能在规则里稳定执行</strong>。
          当前先把最常见、也最通用的一类能力，也就是 Python 脚本，做成可接入、可审计、可交付的第一条链路。
          你可以先从公开体验入口走完一条简化流程，再决定是否接入自己的真实场景。
        </p>
        <p class="landing-lead">
          当前已经完成第一轮兼容式升级：平台新增了通用资源层和执行器注册层，第一种非脚本能力样板
          <strong>HTTP 能力接入</strong> 已先在 <strong>public 超管</strong> 侧落地，用来验证“资源模型 + 执行器 + 审计链路”这条新路径。
          当前租户侧只开放<strong>只读台账</strong>，用于查看自己已获授权的 HTTP 资源摘要、鉴权方式和写边界；
          配置、凭据治理和试跑仍然只放在 <strong>public 超管治理域</strong>。
          这并不意味着平台已经对租户开放通用 API 自助接入；现阶段更高优先级仍然是把 <strong>1.1 自动注册、支付、续费和停开恢复</strong> 做成低客服闭环。
        </p>
        <p class="landing-lead">
          这条 <strong>1.1</strong> 路线已经先落到 <strong>public 超管</strong> 侧：订单创建、确认支付、开通 / 续费、续费提醒扫描、到期停开扫描都会回写客户与租户状态。
          但这并不等于终端用户已经可以完整自助支付。真实第三方支付网关、用户账单中心和外发提醒渠道仍在后续阶段。
        </p>
        <div class="landing-brand__chips">
          <span>免登录体验</span>
          <span>一句话调度</span>
          <span>审计留痕</span>
          <span>本地桥接</span>
          <span>安全可控</span>
        </div>
        <div class="landing-brand__quick-grid">
          <article class="landing-brand__quick-card">
            <span>第一步</span>
            <strong>60 秒先感受核心执行链路</strong>
          </article>
          <article class="landing-brand__quick-card">
            <span>适合接入</span>
            <strong>脚本、本地能力、线上服务</strong>
          </article>
        </div>
        <p class="landing-lead">
          无论你是个人开发者、团队负责人还是企业 IT 管理者，这里都会先告诉你
          <strong>它能帮你解决什么问题</strong>、<strong>适合先走哪条入口</strong>，以及 <strong>下一步怎么开始最省力</strong>。
        </p>
      </div>
      <div class="landing-brand__panel">
        <article class="landing-brand__signal-card">
          <div class="landing-brand__signal-head">
            <span>ENTRY SYSTEM</span>
            <span>SYNC 01</span>
          </div>
          <p class="landing-brand__signal-summary">从免登录体验到场景沟通，再到真实接入，这套入口设计的目标都是让你先确认价值，再决定如何接入自己的能力。</p>
          <div class="landing-brand__signal-list">
            <div class="landing-brand__signal-item">
              <strong>入口</strong>
              <span>体验、试用、咨询、交付</span>
            </div>
            <div class="landing-brand__signal-item">
              <strong>能力</strong>
              <span>可控执行、审计留痕、本地桥接</span>
            </div>
          </div>
          <div class="landing-brand__signal-tags">
            <span>Unified Entry</span>
            <span>Policy Inside</span>
          </div>
        </article>
        <div class="landing-brand__meta-grid">
          <article class="landing-brand__meta">
            <span class="link-panel-label">Mature Asset</span>
            <strong>Python 脚本先跑通</strong>
            <p>先把接入、执行、回传和留痕这条链路做稳，再逐步扩到更多能力类型。</p>
          </article>
          <article class="landing-brand__meta">
            <span class="link-panel-label">Next Step</span>
            <strong>先体验，再决定怎么接入</strong>
            <p>可以先走免登录体验；需要真实场景时，再进入沟通、交付和部署确认。</p>
          </article>
          <article class="landing-brand__meta landing-brand__meta--wide">
            <span class="link-panel-label">Current Focus</span>
            <strong>当前更高优先级仍然是把 1.1 低客服闭环做稳</strong>
            <p>优先把自动注册、支付、续费提醒和停开恢复这条路径继续补齐，再决定下一阶段扩哪些能力。</p>
          </article>
        </div>
      </div>
    </div>
  </section>

  <section class="landing-band landing-band--overview landing-band--overview-center">
    <div class="landing-section-head">
      <p class="landing-kicker">Platform Thesis</p>
      <h2>把“会聊天”升级成“会在规则里执行”</h2>
      <p class="landing-lead">
        <strong>ExecGov</strong> 的项目层定位是 <strong>An Open &amp; Secure AI Agent Execution Layer</strong>。
        落到产品层，它对外呈现为“ExecGov（执治）”。它真正想解决的，不是聊天体验，而是
        <strong>真实任务如何在规则里被稳定执行</strong>。
      </p>
      <p class="landing-lead">
        对当前官网口径来说，最稳的理解方式是三层：
        <strong>底座层</strong> 负责多租户、安全、权限和审计，
        <strong>抽象层</strong> 用 Skill 表达能力单元，
        <strong>实现层</strong> 当前以 Python 脚本为主，并开始用 HTTP 资源样板验证第二种能力接入方式。
      </p>
      <p class="landing-lead">
        这轮也进一步收紧了权限边界：
        <strong>白名单租户 admin</strong> 只保留最小跨租户控制台入口，
        不会看到 <strong>HTTP 能力接入</strong> 这类平台治理页；
        同时运行时与菜单侧也不再使用 <code>user_id == 1</code> 这类不安全条件来误判管理员。
      </p>
      <p class="landing-lead">
        从商业化主线看，当前最实际的进度不是“已经做成完整 SaaS 收费台”，而是“已经先把平台运营侧的收费与生命周期骨架跑起来”；用户自助链路仍在继续补齐。
      </p>
    </div>
    <div class="landing-metrics">
      <article class="metric-card">
        <span class="metric-value">可控</span>
        <span class="metric-label">执行方式</span>
        <p>关键动作先确认，再执行，避免 AI 直接越权操作。</p>
      </article>
      <article class="metric-card">
        <span class="metric-value">可审计</span>
        <span class="metric-label">过程可追溯</span>
        <p>从输入到结果都能留痕复盘，方便治理与合规要求落地。</p>
      </article>
      <article class="metric-card">
        <span class="metric-value">可桥接</span>
        <span class="metric-label">连接本地能力</span>
        <p>脚本、内网 API 和私有资源都可以逐步纳入统一入口。</p>
      </article>
      <article class="metric-card">
        <span class="metric-value">可演进</span>
        <span class="metric-label">成长路径清晰</span>
        <p>从个人试用到团队协作，再到企业部署，逐步扩展而非推倒重来。</p>
      </article>
    </div>
  </section>

  <section class="landing-band landing-band--commercial">
    <div class="landing-section-head">
      <p class="landing-kicker">Commercial Route</p>
      <h2>面对哪类问题，先走哪条入口</h2>
      <p class="landing-lead">
        想先低成本感受产品核心价值，可以直接走免登录体验；
        已经有一些脚本、流程和小团队协作问题，可以直接沟通场景；
        如果你已经明确需要正式交付、私有化或内网接入，就直接谈部署和边界。
      </p>
    </div>
    <div class="landing-grid landing-grid--three">
      <article class="mode-card">
        <span class="link-panel-label">Free</span>
        <h3>个人开发者 / 技术尝鲜者</h3>
        <p>无需先理解复杂架构，先体验一句话调度脚本，再判断这种方式是否值得正式接入自己的执行流。</p>
      </article>
      <article class="mode-card">
        <span class="link-panel-label">Team</span>
        <h3>团队管理者 / 技术负责人</h3>
        <p>优先确认多人协作、审批、权限控制与执行审计是否匹配当前场景，而不是先被一堆产品术语干扰判断。</p>
      </article>
      <article class="mode-card">
        <span class="link-panel-label">Enterprise</span>
        <h3>企业决策者 / IT 管理者</h3>
        <p>优先判断私有化、内网接入、数据安全和合规要求能否落地，再决定要不要进入正式部署和交付。</p>
      </article>
    </div>
    <div class="landing-inline-links">
      <a href="./guide/getting-started.html">立即免费体验（免登录）</a>
      <a href="./contact.html#lead-form">沟通具体场景</a>
      <a href="./materials/founder-profile.html">了解构建者</a>
      <a href="./product/editions.html">看当前阶段</a>
    </div>
  </section>

  <section class="landing-band landing-band--overview">
    <div class="landing-section-head">
      <p class="landing-kicker">Best Fit</p>
      <h2>当前优先服务这三类客户</h2>
      <p class="landing-lead">
        现在不适合把战线铺得太开。对一个单人持续推进的平台来说，先把最容易成交、最容易复用、最贴近现有代码能力的三类客户做深更重要。
      </p>
    </div>
    <div class="landing-grid landing-grid--three">
      <article class="mode-card">
        <span class="link-panel-label">01</span>
        <h3>电商 / 内容 / 运营数据自动化</h3>
        <p>适合已经有大量表格、报表、抓取、清洗、导入导出脚本，但入口分散、执行混乱、结果难追踪的团队。</p>
      </article>
      <article class="mode-card">
        <span class="link-panel-label">02</span>
        <h3>技术团队脚本治理与自动化运维</h3>
        <p>适合要做日志清理、巡检、批量处理、定时报表、脚本治理和执行留痕的技术与运维团队。</p>
      </article>
      <article class="mode-card">
        <span class="link-panel-label">03</span>
        <h3>需要内网或私有化的小型正式客户</h3>
        <p>适合对租户隔离、权限边界、内网环境和私有部署有明确要求，但又不想一开始就采购重系统的正式客户。</p>
      </article>
    </div>
  </section>

  <section class="landing-band">
    <div class="landing-section-head">
      <p class="landing-kicker">Brand Position</p>
      <h2>品牌定位</h2>
      <p class="landing-lead">
        对外统一使用 <strong>ExecGov（执治）</strong> 这一套品牌，不再区分“项目名”和“产品名”两套说法；
        代码仓库 slug 和现有技术标识暂时保留历史命名。
      </p>
    </div>
    <div class="landing-grid landing-grid--two">
      <article class="mode-card">
        <span class="link-panel-label">Brand</span>
        <h3>ExecGov（执治）</h3>
        <p><strong>定位：</strong>企业级 AI 执行与治理平台</p>
        <p><strong>Slogan：</strong>让每次自动化，都可靠且可控。</p>
        <p>用于官网、演示、方案、合同和正式交付沟通。</p>
      </article>
      <article class="mode-card">
        <span class="link-panel-label">Method</span>
        <h3>治理为先，执行落地</h3>
        <p><strong>当前策略：</strong>先把脚本型能力做稳，再逐步扩到 API、模板、连接器和审批流。</p>
        <p><strong>命名说明：</strong><code>ExecGov = Execution + Governance</code>，其中 <code>Gov</code> 指的是治理，不是政府项目。</p>
        <p><strong>当前状态：</strong><code>exec-gov-ai-skill-platform</code> 主仓库 slug 已完成统一；<code>execgov-cli/</code> 目录路径仍保留历史命名，但 CLI 对外命令已统一为 <code>execgov-cli</code>。</p>
      </article>
    </div>
  </section>

  <section id="founder-note" class="landing-band landing-band--overview landing-band--founder">
    <div class="landing-section-head">
      <p class="landing-kicker">Founder Note</p>
      <h2>谁在构建 ExecGov，为什么这套平台值得继续了解</h2>
      <p class="landing-lead">
        我现在在杭州，以微创业方式继续把这件事往前做。
        核心目标不是讲一个很大的平台故事，而是把过去交付里反复碰到的
        <strong>脚本接入</strong>、<strong>权限边界</strong>、<strong>执行留痕</strong> 和 <strong>本地桥接</strong>
        这些问题，尽量做成真正能帮人省时间、减少返工的产品。
      </p>
      <p class="landing-lead">
        如果要把这件事再收成一句话，就是：
        <strong>先把平台做成一个能持续解决真实问题、也能支撑稳定经营的小生意。</strong>
      </p>
      <div class="landing-inline-links">
        <a href="./contact.html#lead-form">继续沟通场景</a>
        <a href="./materials/founder-profile.html">查看完整履历背景</a>
        <a href="https://zmx2321.github.io/vite-blog" target="_blank" rel="noreferrer">查看公开博客</a>
      </div>
    </div>
    <div class="landing-metrics">
      <article class="metric-card">
        <span class="metric-value">杭州</span>
        <span class="metric-label">微创业在做</span>
        <p>现在不是融资驱动的大项目，而是先靠解决真实问题，把平台一步步做成可以独立养活自己的生意。</p>
      </article>
      <article class="metric-card">
        <span class="metric-value">10+</span>
        <span class="metric-label">年交付经验</span>
        <p>从脚本接入、权限、审计到多租户治理，优先做真实项目里会踩坑的部分。</p>
      </article>
      <article class="metric-card">
        <span class="metric-value">Web + CLI + Local</span>
        <span class="metric-label">先做可用桥接</span>
        <p>当前先把网页入口和本地接入这条线做通，其他更远的能力暂时不讲太满。</p>
      </article>
      <article class="metric-card">
        <span class="metric-value">试用 → 沟通 → 交付</span>
        <span class="metric-label">进入路径清晰</span>
        <p>先让价值被感知，再根据协作深度、安全边界与部署要求继续推进接入。</p>
      </article>
    </div>
  </section>

  <section class="landing-band landing-band--flow">
    <div class="landing-section-head">
      <p class="landing-kicker">Execution Flow</p>
      <h2>平台如何把任务变成可交付执行</h2>
    </div>
    <div class="landing-flow">
      <article class="flow-card">
        <span class="flow-index">01</span>
        <h3>意图理解与计划生成</h3>
        <p>先理解任务，再给出执行计划，而不是直接越权调用底层能力。</p>
      </article>
      <article class="flow-card">
        <span class="flow-index">02</span>
        <h3>能力匹配与安全裁决</h3>
        <p>把脚本、Skill、模板和后续能力包组织成正式目录，并受权限和规则控制。</p>
      </article>
      <article class="flow-card">
        <span class="flow-index">03</span>
        <h3>人工确认与真实执行</h3>
        <p>关键动作需要确认，当前重点是把云端和本地这两种执行位置讲清楚。</p>
      </article>
      <article class="flow-card">
        <span class="flow-index">04</span>
        <h3>结果回传与审计留痕</h3>
        <p>从结果产出到日志和审计，平台强调可追踪，而不是一次性跑完就结束。</p>
      </article>
    </div>
  </section>

  <section class="landing-band">
    <div class="landing-section-head">
      <p class="landing-kicker">Delivery Toolkit</p>
      <h2 class="landing-heading--nowrap-desktop">正式接入常看的 3 页</h2>
      <p class="landing-lead">
        这组内容面向已经准备推进真实项目的访客，
        重点是把<strong>文件链路、交付物和接入准备</strong>一次说清楚。
      </p>
    </div>
    <div class="landing-grid landing-grid--three">
      <a class="link-panel" href="./product/file-results.html">
        <span class="link-panel-label">Files</span>
        <strong>文件上传 / 结果下载</strong>
        <p>适合报表、Excel、批量处理和需要结果文件回传的任务，先把输入文件和结果产物链路讲明白。</p>
      </a>
      <a class="link-panel" href="./product/deliverables.html">
        <span class="link-panel-label">Deliverables</span>
        <strong>交付物 / 文档入口</strong>
        <p>适合正式交付沟通，明确客户会拿到什么网址、什么账号、什么说明和什么结果入口。</p>
      </a>
      <a class="link-panel" href="./product/onboarding-checklist.html">
        <span class="link-panel-label">Checklist</span>
        <strong>客户接入准备清单</strong>
        <p>适合售前、实施和客户一起对齐脚本目录、README、样例文件、依赖和风险边界。</p>
      </a>
    </div>
    <div class="landing-inline-links">
      <a href="./product/customer-flow.html">客户流程 / 交付</a>
      <a href="./product/file-results.html">文件上传 / 结果下载</a>
      <a href="./product/onboarding-checklist.html">客户接入准备清单</a>
    </div>
  </section>

  <section class="landing-band landing-band--audience">
    <div class="landing-section-head">
      <p class="landing-kicker">Who It Fits</p>
      <h2>它更适合这些角色</h2>
    </div>
    <div class="landing-grid landing-grid--three">
      <article class="landing-card">
        <h3>企业交付团队</h3>
        <p>需要一个客户一个租户、一个交付入口、可持续扩展多客户，而不是把所有客户混在一个后台里。</p>
      </article>
      <article class="landing-card">
        <h3>平台运营方</h3>
        <p>需要统一管理模板、公告、审计、客户台账和版本回滚，同时保持租户边界清晰。</p>
      </article>
      <article class="landing-card">
        <h3>开发者与小团队</h3>
        <p>需要把已有脚本整理成可调用、可描述、可维护的能力，并保留本地执行路径。</p>
      </article>
    </div>
  </section>

  <section class="landing-band landing-band--modes">
    <div class="landing-section-head">
      <p class="landing-kicker">Deployment Modes</p>
      <h2>同一套治理逻辑，覆盖不同部署形态</h2>
    </div>
    <div class="landing-grid landing-grid--two">
      <article class="mode-card">
        <h3>单租户交付</h3>
        <p>面向企业客户交付，一个客户一个租户，一个入口，一套可持续维护的能力边界。</p>
      </article>
      <article class="mode-card">
        <h3>平台总控治理</h3>
        <p>统一管理租户、模板、公告和日志，同时保持不同客户之间的隔离边界清晰。</p>
      </article>
      <article class="mode-card">
        <h3>免费体验入口</h3>
        <p>面向个人用户和小团队提供低门槛体验与升级入口。</p>
      </article>
      <article class="mode-card">
        <h3>本地与边缘执行</h3>
        <p>当前重点覆盖本地环境与 CLI 桥接，适合需要连接本地脚本和内网资源的场景。</p>
      </article>
    </div>
    <div class="landing-inline-links">
      <a href="./product/deployment.html">查看部署方式</a>
      <a href="./product/scenarios.html">查看应用场景</a>
      <a href="./product/cli.html">查看 CLI 指引</a>
    </div>
  </section>

  <section class="landing-band landing-band--roadmap landing-band--roadmap-home">
    <div class="landing-section-head">
      <p class="landing-kicker">Roadmap</p>
      <h2>为什么是现在，以及下一步先做什么</h2>
      <p class="landing-lead">
        当前路线分为两步：先把交付、体验和接入链路做稳，再继续扩展协作、能力类型和产品化支持。
      </p>
    </div>
    <div class="roadmap-grid">
      <article class="roadmap-card">
        <span class="roadmap-stage">1.0</span>
        <h3>先把当前交付版做稳</h3>
        <p>先把客户交付、公开体验、个人入口和 CLI 最小链路做成真实可用的东西。</p>
      </article>
      <article class="roadmap-card">
        <span class="roadmap-stage">Next</span>
        <h3>再决定哪些值得产品化</h3>
        <p>小团队协作、额度套餐和更通用的能力接入，会在下一阶段持续完善。</p>
      </article>
    </div>
    <div class="landing-inline-links">
      <a href="./product/editions.html">查看当前阶段说明</a>
    </div>
  </section>

<section class="landing-band landing-band--links">
  <div class="landing-grid landing-grid--three">
    <a class="link-panel" href="./guide/">
      <span class="link-panel-label">Guide</span>
      <strong>开始使用</strong>
      <p>先把入口、角色和阅读路径对齐，避免一开始就在各页之间来回跳转。</p>
    </a>
    <a class="link-panel" href="./guide/getting-started.html">
      <span class="link-panel-label">Quick Start</span>
      <strong>快速开始</strong>
      <p>用最短时间看懂如何试用、如何接脚本，以及何时该走团队或企业路径。</p>
    </a>
    <a class="link-panel" href="./guide/faq.html">
      <span class="link-panel-label">FAQ</span>
      <strong>常见问题</strong>
      <p>把定位、安全边界、本地接入和当前适合谁一次讲清楚。</p>
    </a>
    <a class="link-panel" href="./product/">
      <span class="link-panel-label">Product</span>
      <strong>产品概览</strong>
      <p>先理解平台在做什么，不在做什么，以及当前最准确的公开定义。</p>
    </a>
    <a class="link-panel" href="./product/capabilities.html">
      <span class="link-panel-label">Capabilities</span>
      <strong>核心能力</strong>
      <p>多租户、可信执行、模板分发、公告治理和 CLI 桥接能力一页看清。</p>
    </a>
    <a class="link-panel" href="./product/cli.html">
      <span class="link-panel-label">CLI</span>
      <strong>CLI 指引</strong>
      <p>直接看本地登录、能力接入、Skill 执行和 Agent 骨架现在到底做到哪一步。</p>
    </a>
    <a class="link-panel" href="./product/customer-flow.html">
      <span class="link-panel-label">Delivery</span>
      <strong>客户流程 / 交付</strong>
      <p>单独看客户怎么使用平台、平台怎么交付，以及脚本热更新如何形成正式闭环。</p>
    </a>
    <a class="link-panel" href="./product/file-results.html">
      <span class="link-panel-label">Files</span>
      <strong>文件上传 / 结果下载</strong>
      <p>适合文件型任务、报表结果和需要下载产物的项目，不再把“结果只是一段文本”当默认前提。</p>
    </a>
    <a class="link-panel" href="./product/deliverables.html">
      <span class="link-panel-label">Deliverables</span>
      <strong>交付物 / 文档入口</strong>
      <p>把客户最终拿到的入口、说明和结果物单独讲清楚，方便交付和后续使用。</p>
    </a>
    <a class="link-panel" href="./product/onboarding-checklist.html">
      <span class="link-panel-label">Checklist</span>
      <strong>客户接入准备清单</strong>
      <p>适合已经准备真实脚本型能力和真实场景的人，先把接入资料补完整，再继续推进交付或试用。</p>
    </a>
    <a class="link-panel" href="./materials/">
      <span class="link-panel-label">Materials</span>
      <strong>介绍资料</strong>
      <p>把平台介绍、价值表达和演示提纲单独整理，便于阅读、评审和方案沟通。</p>
    </a>
  </div>
</section>

  <section class="landing-band landing-band--cta">
    <div class="cta-card">
      <div>
        <p class="landing-kicker">Contact</p>
        <h2>现在开放免费体验、场景沟通和正式交付咨询。</h2>
        <p class="landing-lead">
          对于已有脚本、本地环境、权限边界或交付问题需要处理的场景，
          这里是当前最直接的公开入口，重点承接真实试用、评估与交付咨询。
        </p>
      </div>
      <div class="cta-actions">
        <a class="cta-button cta-button--brand" href="./guide/getting-started.html">立即免费体验</a>
        <a class="cta-button" href="./contact.html#lead-form">沟通具体场景</a>
        <a class="cta-button" href="./contact.html#lead-form">咨询交付方案</a>
      </div>
    </div>
  </section>
</div>
