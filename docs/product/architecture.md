---
aside: false
outline: false
lastUpdated: false
---

<div class="brand-page-shell">
  <section class="brand-hero">
    <div>
      <p class="brand-kicker">Architecture</p>
      <h1>架构说明</h1>
      <div class="brand-hero__panel">
        <span class="brand-pill">Architecture Thesis</span>
        <strong>让不同入口共用同一套治理内核，而不是各自长成孤岛。</strong>
        <p>这样既能承接企业客户项目，也能保留免费入口和未来本地 Agent 的演进空间。</p>
      </div>
      <p class="brand-lead">
        平台当前采用 <strong>单仓多前端 + 统一后端能力中心</strong> 的结构。
        重点不是“组件堆多少”，而是把 <strong>平台治理</strong>、<strong>租户隔离</strong>、
        <strong>免费入口</strong> 和 <strong>本地接入</strong> 收进同一套架构逻辑。
      </p>
      <div class="brand-chip-list">
        <span class="brand-chip">统一后端</span>
        <span class="brand-chip">public 超管</span>
        <span class="brand-chip">tenant 前端</span>
        <span class="brand-chip">CLI 接入</span>
      </div>
      <div class="brand-actions">
        <a class="cta-button cta-button--brand" href="../contact.html#lead-form">沟通架构合作</a>
        <a class="cta-button" href="./deployment.html">查看部署方式</a>
      </div>
    </div>
    <div class="brand-hero__media brand-hero__media--compact">
      <div class="matrix-panel matrix-panel--contact">
        <div class="matrix-panel__hud">
          <span>SMARTFLOW // ARCH LAYOUT</span>
          <span>DOC 04</span>
        </div>
        <div class="matrix-panel__canvas">
          <div class="matrix-panel__trace matrix-panel__trace--top"></div>
          <div class="matrix-panel__trace matrix-panel__trace--mid"></div>
          <div class="matrix-panel__trace matrix-panel__trace--bottom"></div>
          <div class="matrix-panel__stack">
            <span class="matrix-panel__line"><span class="matrix-panel__value">back-python</span><span class="matrix-panel__op"> = </span><span class="matrix-panel__value">unified capability center</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__value">smart-flow-admin</span><span class="matrix-panel__op"> = </span><span class="matrix-panel__value">public governance console</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__value">tenant fronts</span><span class="matrix-panel__op"> + </span><span class="matrix-panel__value">smartflow-cli</span><span class="matrix-panel__op"> = </span><span class="matrix-panel__value">execution entrances</span></span>
          </div>
          <div class="matrix-panel__callout">ONE CORE / MULTIPLE ENTRIES</div>
        </div>
        <div class="matrix-panel__footer">
          <span class="matrix-panel__tag"><span class="matrix-panel__key">schema</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">isolated</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">public</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">governance</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">cli</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">bridge</span></span>
        </div>
      </div>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Repository Map</p>
    <h2>仓库结构</h2>
    <div class="brand-grid brand-grid--four">
      <article class="brand-card brand-card--nested">
        <h3><code>back-python</code></h3>
        <p>统一后端能力中心，承接认证、租户、脚本、Skill、日志、模板等核心服务。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3><code>smart-flow-admin</code></h3>
        <p><code>public</code> 超管独立前端，负责平台治理，不混入普通租户语义。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3><code>smart-flow-local</code></h3>
        <p><code>tenant_1001</code> 企业交付前端，承接第一个正式客户样板。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3><code>sync-flow</code></h3>
        <p><code>tenant_1002</code> 企业交付前端，用于另一条正式租户线，不混入 1001。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3><code>smart-flow-free</code></h3>
        <p><code>tenant_1000</code> 个人免费版前端，承接体验、增长和免费线索入口。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3><code>front-vue-hack</code></h3>
        <p>聚合联调壳层，用来承接多子项目同步，不作为客户正式前端主入口。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3><code>smartflow-cli</code></h3>
        <p>本地接入与未来 Agent 入口，把平台控制面和本地环境连接起来。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3><code>docs</code></h3>
        <p>公开产品介绍、版本路线与合作入口，用于统一对外表达与转化承接。</p>
      </article>
    </div>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Governance Domain</p>
      <h2><code>public</code> 负责什么</h2>
      <ul class="brand-list">
        <li>平台超管</li>
        <li>客户台账</li>
        <li>租户管理</li>
        <li>平台审计</li>
        <li>模板分发治理</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Tenant Domain</p>
      <h2>tenant schema 负责什么</h2>
      <ul class="brand-list">
        <li>用户、角色、菜单、参数、公告</li>
        <li>脚本与 Skill 注册</li>
        <li>执行记录与调度日志</li>
        <li>业务扩展表</li>
        <li>各租户自己的访问边界与数据边界</li>
      </ul>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Runtime Boundary</p>
    <h2>运行时边界怎么成立</h2>
    <div class="brand-grid brand-grid--three">
      <article class="brand-card brand-card--nested">
        <h3>一个客户一个网址</h3>
        <p>标准交付内容里，每个客户会拿到独立访问地址、独立租户空间和一组客户专属能力。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>Host 绑定租户</h3>
        <p>当前运行时会按访问 Host 绑定租户并切换 schema，所以“一个客户一个网址”不是营销说法，而是运行时边界的一部分。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3><code>public</code> 不等于普通租户</h3>
        <p><code>public</code> 负责平台治理与共享底座，客户不会直接把它当成自己的业务租户来用。</p>
      </article>
    </div>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Delivery Package</p>
      <h2>标准交付通常包含什么</h2>
      <ul class="brand-list">
        <li>一个独立租户</li>
        <li>一个独立访问网址</li>
        <li>一组客户专属脚本能力</li>
        <li>平台账号与基础权限</li>
        <li>客户使用说明和客户脚本热更新说明</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Acceptance Check</p>
      <h2>客户验收时最该确认什么</h2>
      <ul class="brand-list">
        <li>是否能登录自己的网址</li>
        <li>是否只能看到自己的能力</li>
        <li>是否能执行自己的能力并查看结果</li>
        <li>是否能按流程继续提交脚本更新，而不重部署整个平台</li>
      </ul>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Frontend Discipline</p>
    <h2>前端开发纪律</h2>
    <div class="brand-link-grid">
      <a class="brand-link-card" href="./index.html">
        <span>Rule 01</span>
        <strong>单项目先改</strong>
        <p>先在正式单项目里落地，再决定是否需要同步到聚合壳层。</p>
      </a>
      <a class="brand-link-card" href="./index.html">
        <span>Rule 02</span>
        <strong>验证通过后最后同步 <code>front-vue-hack</code></strong>
        <p>聚合壳层只做同步与联调，不抢正式单项目的主导地位。</p>
      </a>
      <a class="brand-link-card" href="./index.html">
        <span>Rule 03</span>
        <strong>不把 <code>tenant_1002</code> 功能混进 <code>tenant_1001</code></strong>
        <p>租户边界必须清晰，否则很快失去交付可维护性。</p>
      </a>
      <a class="brand-link-card" href="./index.html">
        <span>Rule 04</span>
        <strong><code>public</code> 能力只落在 <code>smart-flow-admin</code></strong>
        <p>平台治理和普通租户语义必须分开，避免后续权限和产品表达混乱。</p>
      </a>
      <a class="brand-link-card" href="./cli.html">
        <span>Rule 05</span>
        <strong><code>smartflow-cli</code> 负责连接本地环境与平台控制面</strong>
        <p>本地脚本接入、manifest 生成和未来 Agent 常驻执行，都应该沿这条桥接链继续演进。</p>
      </a>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Why This Works</p>
    <h2>为什么这套结构适合当前阶段</h2>
    <div class="brand-grid brand-grid--four">
      <article class="brand-card brand-card--nested">
        <h3>能直接接企业客户项目</h3>
        <p>租户边界和平台治理边界都先成立，交付不是临时堆页面。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>能同时保留平台治理能力</h3>
        <p><code>public</code> 侧客户台账、租户状态、模板分发、日志审计不需要另起炉灶。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>能承接个人免费版增长入口</h3>
        <p>免费版不是旁支，而是正式入口之一，可以持续沉淀线索和使用样本。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>能继续扩展到模板、Agent 与产品化</h3>
        <p>控制面、执行端和能力单元已形成基础边界，未来扩展成本更低。</p>
      </article>
    </div>
  </section>
</div>
