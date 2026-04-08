---
aside: false
outline: false
lastUpdated: false
---

<div class="brand-page-shell">
  <section class="brand-hero">
    <div>
      <p class="brand-kicker">Capabilities</p>
      <h1>核心能力</h1>
      <p class="brand-lead">
        SmartFlow 的核心能力不是零散功能点，而是一套围绕
        <strong>多租户治理、可信执行、能力目录化和本地桥接</strong>
        持续收敛的正式平台能力。
      </p>
      <div class="brand-chip-list">
        <span class="brand-chip">多租户隔离</span>
        <span class="brand-chip">可信执行</span>
        <span class="brand-chip">模板分发</span>
        <span class="brand-chip">CLI 桥接</span>
      </div>
      <div class="brand-actions">
        <a class="cta-button cta-button--brand" href="../contact.html#lead-form">预约能力演示</a>
        <a class="cta-button" href="./architecture.html">查看架构说明</a>
      </div>
    </div>
    <div class="brand-hero__media brand-hero__media--compact">
      <div class="matrix-panel matrix-panel--contact">
        <div class="matrix-panel__hud">
          <span>SMARTFLOW // CAPABILITY MAP</span>
          <span>DOC 03</span>
        </div>
        <div class="matrix-panel__canvas">
          <div class="matrix-panel__trace matrix-panel__trace--top"></div>
          <div class="matrix-panel__trace matrix-panel__trace--mid"></div>
          <div class="matrix-panel__trace matrix-panel__trace--bottom"></div>
          <div class="matrix-panel__stack">
            <span>governance: multi_tenant / template_ops / audit</span>
            <span>execution: plan / confirm / run / trace</span>
            <span>bridge: skill_registry / cli / local_agent</span>
          </div>
          <div class="matrix-panel__callout">CAPABILITY SYSTEM / TRUSTED EXECUTION</div>
        </div>
        <div class="matrix-panel__footer">
          <span>control: on</span>
          <span>reuse: growing</span>
          <span>local: ready</span>
        </div>
      </div>
      <div class="brand-hero__panel">
        <span class="brand-pill">Capability Logic</span>
        <strong>重点不是会不会执行，而是能不能在规则里执行。</strong>
        <p>这些能力共同决定平台是否能交付、能扩租户、能沉淀模板、能继续走向产品化。</p>
      </div>
    </div>
  </section>

  <section class="brand-grid brand-grid--three">
    <article class="brand-card">
      <p class="brand-kicker">01</p>
      <h2>多租户隔离</h2>
      <ul class="brand-list">
        <li>平台当前采用 PostgreSQL schema 级多租户模型</li>
        <li><code>public</code> 负责平台治理和共享底座</li>
        <li>每个正式客户租户拥有自己的独立 schema</li>
        <li>租户之间的脚本、Skill、日志和系统数据默认隔离</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">02</p>
      <h2>智能大脑执行闭环</h2>
      <ul class="brand-list">
        <li>意图识别</li>
        <li>计划生成</li>
        <li>人工确认</li>
        <li>脚本 / Skill 执行、结果回传、留痕与审计</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">03</p>
      <h2>脚本注册与 Skill 映射</h2>
      <ul class="brand-list">
        <li>脚本注册入库</li>
        <li>Skill 可视化查看与编辑</li>
        <li>Skill 动作编排</li>
        <li>租户级启停与绑定</li>
      </ul>
    </article>
  </section>

  <section class="brand-grid brand-grid--three">
    <article class="brand-card">
      <p class="brand-kicker">04</p>
      <h2>平台模板分发</h2>
      <ul class="brand-list">
        <li>平台模板发布</li>
        <li>租户安装申请与确认安装</li>
        <li>版本管理、回滚和分发日志</li>
        <li>为模板市场、团队版和企业版升级打底</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">05</p>
      <h2>公告与日志治理</h2>
      <ul class="brand-list">
        <li>平台公告与租户公告</li>
        <li>指定租户 / 指定用户投放</li>
        <li>已读状态与已读明细</li>
        <li>登录日志、操作日志与平台审计</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">06</p>
      <h2>CLI 与本地接入</h2>
      <ul class="brand-list">
        <li><code>login</code> / <code>register</code> / <code>list</code> / <code>run</code></li>
        <li><code>agent describe</code> / <code>agent start</code></li>
        <li>意义不是命令行包装器，而是平台和本地环境之间的桥梁</li>
      </ul>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Why These Matter Together</p>
    <h2>为什么这不是功能清单，而是一套系统</h2>
    <div class="brand-link-grid">
      <a class="brand-link-card" href="./architecture.html">
        <span>Architecture</span>
        <strong>隔离能力决定能不能承接多客户</strong>
        <p>没有清晰租户边界，平台很难进入正式交付和平台治理阶段。</p>
      </a>
      <a class="brand-link-card" href="./deployment.html">
        <span>Deployment</span>
        <strong>本地桥接决定能不能进入真实环境</strong>
        <p>很多高价值任务都依赖内网、文件系统和本地数据，不能只停留在云端页面。</p>
      </a>
      <a class="brand-link-card" href="./editions.html">
        <span>Roadmap</span>
        <strong>模板与审计决定能不能继续产品化</strong>
        <p>如果没有模板分发、回滚和日志治理，团队版和企业版都很难成立。</p>
      </a>
      <a class="brand-link-card" href="./cli.html">
        <span>CLI</span>
        <strong>本地桥接决定能不能把真实脚本接进来</strong>
        <p>当前已经落地的 <code>register / list / run / agent</code> 命令，就是平台进入本地环境的第一层接口。</p>
      </a>
    </div>
  </section>
</div>
