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
        <strong>先让不同入口共用同一套治理内核，后面才不会越做越乱。</strong>
        <p>目标不是铺更多端，而是让免费入口、正式交付和本地接入共用一套逻辑，单人维护也不容易散掉。</p>
      </div>
      <p class="brand-lead">
        <strong>ExecFabric（璇络）是一个以 Python 脚本为第一种成熟执行资产的多租户能力治理与执行平台。</strong>
      </p>
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
        <a class="cta-button cta-button--brand" href="../contact.html#lead-form">沟通架构与接入</a>
        <a class="cta-button" href="./deployment.html">查看部署方式</a>
      </div>
    </div>
    <div class="brand-hero__media brand-hero__media--compact">
      <div class="matrix-panel matrix-panel--contact">
        <div class="matrix-panel__hud">
          <span>EXECFABRIC // ARCH LAYOUT</span>
          <span>DOC 04</span>
        </div>
        <div class="matrix-panel__canvas">
          <div class="matrix-panel__trace matrix-panel__trace--top"></div>
          <div class="matrix-panel__trace matrix-panel__trace--mid"></div>
          <div class="matrix-panel__trace matrix-panel__trace--bottom"></div>
                    <div class="matrix-panel__stack">
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">core</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__string">'unified_python_backend'</span> <span class="matrix-panel__comment">// capability control center</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">governance</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__string">'public_admin_console'</span> <span class="matrix-panel__comment">// platform governance</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">entries</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'tenant_fronts'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'free_entry'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'execfabric_cli'</span><span class="matrix-panel__punct">]</span></span>
          </div>
          <div class="matrix-panel__callout">ONE CORE / MULTIPLE ENTRY SURFACES</div>
        </div>
        <div class="matrix-panel__footer">
          <span class="matrix-panel__tag"><span class="matrix-panel__key">schema</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">isolated</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">public</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">governance</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">entry</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">multi_surface</span></span>
        </div>
      </div>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">1.0 Standard</p>
    <h2>定位在架构层的落点</h2>
    <div class="brand-grid brand-grid--three">
      <article class="brand-card brand-card--nested">
        <h3>底座层</h3>
        <p>多租户隔离、权限、公告、模板分发、日志和审计是通用底座，不只服务脚本。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>抽象层</h3>
        <p>Skill 是能力单元，负责输入输出、风险、审批和可见范围，不应该只按脚本文件去理解。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>实现层</h3>
        <p>当前第一种成熟执行资产仍然是 Python 脚本，所以上传、注册、运行时和 CLI 现在仍然以脚本优先。</p>
      </article>
    </div>
    <p class="brand-lead">
      当前这层已经往前走了一步：平台新增了通用资源层和执行器注册层，
      第一种非脚本能力样板 <code>HTTP 能力接入</code> 已先在 <code>public</code> 超管侧验证。
      这说明底座已经不是只能“跑脚本文件”，但租户侧当前最成熟、最稳定的交付能力仍然是脚本优先。
    </p>
    <p class="brand-lead">
      这轮还把平台治理边界收得更清楚了：
      <code>HTTP 能力接入</code> 的配置、凭据治理和试跑仍然只放在 <code>public</code> 超管治理域；
      白名单租户 admin 只保留最小跨租户控制台入口，租户侧只做只读查看，不把平台治理入口直接摊给租户。
    </p>
    <p class="brand-lead">
      从 <code>1.1</code> 看，当前也已经先把订单、支付确认、续费提醒扫描和到期停开扫描收在 <code>public</code> 治理域里，
      避免一开始就把收费与生命周期逻辑散进租户前台。后面再继续补用户自助链路和真实支付网关。
    </p>
    <p class="brand-lead">
      同时，管理员判定也已经从这轮开始统一收口：
      不再使用 <code>user_id == 1</code> 这类在多租户场景下容易误伤普通用户的条件，
      而是只认显式 <code>admin</code> 用户名或超管标记。
    </p>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">System Map</p>
    <h2>系统组成</h2>
    <div class="brand-grid brand-grid--four">
      <article class="brand-card brand-card--nested">
        <h3>统一后端能力中心</h3>
        <p>统一后端能力中心，承接认证、租户、能力目录、执行资产、日志、模板等核心服务。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>治理控制台</h3>
        <p>负责平台级配置、模板、日志和运营治理，不与普通业务入口混合。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>正式客户前端</h3>
        <p>面向正式客户环境，承接实际业务访问与脚本执行入口。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>多租户交付站点</h3>
        <p>用于承接不同客户或不同环境的交付前端。当前已经分出单租户前端和共享 SaaS 租户前端两条现实路径，不再默认每来一个客户就复制一套前端工程。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>个人体验入口</h3>
        <p>面向个人用户与早期探索者，承接体验、增长和免费线索入口。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>联调与集成层</h3>
        <p>用于多入口协同、联调与统一验证，不直接作为客户正式使用入口。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>CLI / Local Bridge</h3>
        <p>本地接入与 Agent 骨架入口，把平台控制面和本地环境连接起来。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3><code>docs</code></h3>
        <p>公开说明文档、版本路线和入口页，方便自己和客户都能快速对齐。</p>
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
        <li>订单中心与租户生命周期治理</li>
        <li>平台审计</li>
        <li>HTTP 资源接入、凭据治理与写边界控制</li>
        <li>模板分发治理</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Tenant Domain</p>
      <h2>tenant schema 负责什么</h2>
      <ul class="brand-list">
        <li>用户、角色、菜单、参数、公告</li>
        <li>能力接入、Skill 绑定与租户授权</li>
        <li>已授权 HTTP 资源的只读摘要查看</li>
        <li>执行记录与调度日志</li>
        <li>业务扩展表</li>
        <li>各租户自己的访问边界与数据边界</li>
      </ul>
    </article>
  </section>

  <section class="brand-grid brand-grid--three">
    <article class="brand-card">
      <p class="brand-kicker">Concept 01</p>
      <h2>Skill 是能力单元</h2>
      <p>Skill 面向用户和 AI，负责描述能力名称、输入输出、可见范围、风险等级、审批要求和审计边界。</p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Concept 02</p>
      <h2>执行资产是具体接入物</h2>
      <p>执行资产描述能力到底连到什么对象。当前最成熟的是 Python 脚本，平台也已经开始用 HTTP 资源样板验证 API 类型资产怎么进入统一治理链路。</p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Concept 03</p>
      <h2>执行器负责运行时适配</h2>
      <p>执行器决定不同资产类型怎么被调用、怎么校验输入输出、怎么把结果统一回到平台审计链路里。当前运行时已经不再只写死脚本判断。</p>
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
      <p class="brand-kicker">Shared Tenant Front</p>
      <h2>共享 SaaS 租户前端</h2>
      <ul class="brand-list">
        <li>从 <code>tenant_1003+</code> 开始，标准 SaaS 客户会优先进入共享租户前端骨架</li>
        <li>共享的是前端工程和发版节奏，不共享租户数据、菜单权限和执行结果</li>
        <li>运行时仍按访问 Host 切到对应 schema</li>
        <li>这条路径适合标准能力和较轻团队协作场景</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Shell Role</p>
      <h2><code>execfabric-shell</code> 的真实定位</h2>
      <ul class="brand-list">
        <li>它主要用于多入口聚合、联调和最终同步</li>
        <li>它不是客户长期正式运行入口</li>
        <li>客户正式使用时，仍以正式单项目或共享租户前端为准</li>
        <li>这能减少“壳层成真相、正式工程反而漂移”的问题</li>
      </ul>
    </article>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Delivery Package</p>
      <h2>标准交付通常包含什么</h2>
      <ul class="brand-list">
        <li>一个独立租户</li>
        <li>一个独立访问网址</li>
        <li>一组客户专属能力，当前通常以脚本型能力为主</li>
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
    <p class="brand-kicker">Architecture To Delivery</p>
    <h2>架构落地重点资料</h2>
    <div class="brand-link-grid">
      <a class="brand-link-card" href="./file-results.html">
        <span>Files</span>
        <strong>文件上传 / 结果下载</strong>
        <p>项目依赖输入文件、批次状态和结果文件时，这部分属于架构落地的一部分，不只是前端体验细节。</p>
      </a>
      <a class="brand-link-card" href="./deliverables.html">
        <span>Deliverables</span>
        <strong>交付物 / 文档入口</strong>
        <p>客户需要长期使用平台时，正式架构必须承接说明文档、结果入口和交付边界，而不是只画系统图。</p>
      </a>
      <a class="brand-link-card" href="./onboarding-checklist.html">
        <span>Checklist</span>
        <strong>客户接入准备清单</strong>
        <p>项目准备接真实能力时，先把脚本目录、README、样例文件和依赖准备齐，会比继续空谈模块边界更有效。</p>
      </a>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Architecture Rules</p>
    <h2>实施与隔离原则</h2>
    <div class="brand-link-grid">
      <a class="brand-link-card" href="./index.html">
        <span>Rule 01</span>
        <strong>租户隔离优先</strong>
        <p>不同客户的数据、能力和权限边界需要先清晰，再谈统一运营与扩展。</p>
      </a>
      <a class="brand-link-card" href="./index.html">
        <span>Rule 02</span>
        <strong>治理与业务入口分层</strong>
        <p>统一治理能力与客户业务入口需要职责分明，避免权限和表达混乱。</p>
      </a>
      <a class="brand-link-card" href="./index.html">
        <span>Rule 03</span>
        <strong>变更可验证后再推广</strong>
        <p>能力、流程和前端改动都应先验证稳定，再逐步扩展到更大范围。</p>
      </a>
      <a class="brand-link-card" href="./index.html">
        <span>Rule 04</span>
        <strong>交付与平台边界清晰</strong>
        <p>既要支持客户交付，也要保留统一治理与运营能力，两者不能互相挤占。</p>
      </a>
      <a class="brand-link-card" href="./cli.html">
        <span>Rule 05</span>
        <strong><code>execfabric-cli</code> 负责连接本地环境与平台控制面</strong>
        <p>本地脚本接入、后续其他执行资产接入和 manifest 生成，当前都沿这条桥接链继续往前做；Agent 常驻执行仍属于后续增强。</p>
      </a>
      <a class="brand-link-card" href="./file-results.html">
        <span>Rule 06</span>
        <strong>文件链路要纳入正式架构，不应作为临时上传功能理解</strong>
        <p>只要项目真实依赖输入文件和结果文件，上传、批次和结果入口就属于正式交付架构的一部分。</p>
      </a>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Why This Works</p>
    <h2>为什么这套结构适合当前阶段</h2>
    <div class="brand-grid brand-grid--four">
      <article class="brand-card brand-card--nested">
        <h3>能直接接企业客户项目</h3>
        <p>租户边界和平台治理边界都先成立，交付结构完整，不依赖临时拼接。</p>
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
        <h3>能继续扩展到 API、模板、Agent 与更多能力形态</h3>
        <p>控制面、执行端和能力单元已形成基础边界，未来扩到更多能力资产的成本更低。</p>
      </article>
    </div>
  </section>

  <section class="brand-card brand-card--cta">
    <div class="brand-card__row">
      <div>
        <p class="brand-kicker">Next Read</p>
        <h2>理解架构后，建议继续看交付落地</h2>
        <p class="brand-lead">真正能把架构说明转成项目推进材料的，通常不是重复解释概念，而是把文件链路、交付物和接入准备一起说明清楚。</p>
      </div>
      <div class="brand-link-grid brand-link-grid--compact">
        <a class="brand-link-card" href="./deployment.html">
          <span>Deployment</span>
          <strong>部署方式</strong>
        </a>
        <a class="brand-link-card" href="./file-results.html">
          <span>Files</span>
          <strong>文件上传 / 结果下载</strong>
        </a>
        <a class="brand-link-card" href="./deliverables.html">
          <span>Deliverables</span>
          <strong>交付物 / 文档入口</strong>
        </a>
        <a class="brand-link-card" href="./onboarding-checklist.html">
          <span>Checklist</span>
          <strong>客户接入准备清单</strong>
        </a>
      </div>
    </div>
  </section>
</div>
