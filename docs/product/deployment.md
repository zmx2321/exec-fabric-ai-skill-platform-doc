---
aside: false
outline: false
lastUpdated: false
---

<div class="brand-page-shell">
  <section class="brand-hero">
    <div>
      <p class="brand-kicker">Deployment</p>
      <h1>部署方式</h1>
      <div class="brand-hero__panel">
        <span class="brand-pill">Deployment Thesis</span>
        <strong>控制面可以统一，执行位置不必统一。</strong>
        <p>这正是 ExecGov 当前能同时承接正式交付、公开体验和本地接入的关键原因。</p>
      </div>
      <p class="brand-lead">
        ExecGov 的部署思路不是只有一种，而是根据
        <strong>数据边界、客户规模和执行位置</strong> 做组合。
        平台的目标不是强迫所有用户走同一条路径，而是用同一套治理逻辑覆盖不同落地形态。
      </p>
      <p class="brand-lead">
        对公开口径来说，当前更稳的路径是：
        <strong>免费线</strong>、
        <strong>本地脚本位轻量扩容</strong>、
        <strong>共享 SaaS 正式团队版</strong>、
        <strong>企业单租户 / 私有化交付</strong>，
        再按需要叠加本地混合执行。
      </p>
      <div class="brand-chip-list">
        <span class="brand-chip">单租户交付</span>
        <span class="brand-chip">平台治理</span>
        <span class="brand-chip">免费入口</span>
        <span class="brand-chip">本地混合执行</span>
      </div>
      <div class="brand-actions">
        <a class="cta-button cta-button--brand" href="../contact.html#lead-form">沟通部署方案</a>
        <a class="cta-button" href="./editions.html">查看版本路线</a>
      </div>
    </div>
    <div class="brand-hero__media brand-hero__media--compact">
      <div class="matrix-panel matrix-panel--contact">
        <div class="matrix-panel__hud">
          <span>EXECGOV // DEPLOYMENT MATRIX</span>
          <span>DOC 05</span>
        </div>
        <div class="matrix-panel__canvas">
          <div class="matrix-panel__trace matrix-panel__trace--top"></div>
          <div class="matrix-panel__trace matrix-panel__trace--mid"></div>
          <div class="matrix-panel__trace matrix-panel__trace--bottom"></div>
          <div class="matrix-panel__stack">
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">enterpriseMode</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__string">'single_tenant_delivery'</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">platformMode</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'public_governance'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'free_entry'</span><span class="matrix-panel__punct">]</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">hybridMode</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'local_execution'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'cli_bridge'</span><span class="matrix-panel__punct">]</span></span>
          </div>
          <div class="matrix-panel__callout">ONE GOVERNANCE / MULTIPLE DEPLOYMENTS</div>
        </div>
        <div class="matrix-panel__footer">
          <span class="matrix-panel__tag"><span class="matrix-panel__key">surface</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">cloud</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">surface</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">local</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">surface</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">hybrid</span></span>
        </div>
      </div>
    </div>
  </section>

  <section class="brand-grid brand-grid--three">
    <article class="brand-card">
      <p class="brand-kicker">01</p>
      <h2>单租户交付模式</h2>
      <ul class="brand-list">
        <li>适合企业客户项目交付</li>
        <li>需要独立访问地址</li>
        <li>需要和其他客户完全隔离</li>
        <li>一个客户一个租户，能力与数据边界清晰</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">02</p>
      <h2>平台治理模式</h2>
      <ul class="brand-list">
        <li>平台方统一管理多个客户</li>
        <li>需要公告、模板、日志和台账总控</li>
        <li>需要跨租户治理但不打破隔离</li>
        <li><code>public</code> 作为平台治理域</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">03</p>
      <h2>免费入口模式</h2>
      <ul class="brand-list">
        <li>适合产品体验入口和个人开发者免费线体验</li>
        <li>更强调上手速度和体验路径</li>
        <li>为后续更深沟通和正式交付提供前置入口</li>
      </ul>
    </article>
  </section>

<section class="brand-card">
  <p class="brand-kicker">Path To Deployment</p>
  <h2>四层路径分别该怎么理解部署</h2>
  <table>
    <thead>
      <tr>
        <th>当前层级</th>
        <th>更适合的部署理解</th>
        <th>当前重点</th>
        <th>下一步信号</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>免费线</td>
        <td>先用公开体验、登录 / 注册和个人入口理解平台</td>
        <td>先确认执行链路、产品定位和入口体验是否成立</td>
        <td>如果开始持续使用，就进入个人入口或继续看本地脚本位</td>
      </tr>
      <tr>
        <td>本地脚本位增购</td>
        <td>个人空间轻量扩容，不改变整体部署形态</td>
        <td>解决个人持续接脚本的问题，不等于正式团队交付</td>
        <td>如果开始多人协作，就进入标准团队版评估</td>
      </tr>
      <tr>
        <td>标准团队版</td>
        <td>优先共享 SaaS 正式租户入口</td>
        <td>适合标准能力、较轻协作和不需要深度前端定制的团队</td>
        <td>如果需要更强隔离、专属页面或正式验收，再转企业交付</td>
      </tr>
      <tr>
        <td>企业交付</td>
        <td>单租户交付、私有化或更深部署控制</td>
        <td>面向内网、更强隔离、专属品牌或正式项目交付</td>
        <td>如果又依赖本地环境和内网资源，再叠加混合执行</td>
      </tr>
    </tbody>
  </table>
</section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">04</p>
      <h2>本地混合执行模式</h2>
      <ul class="brand-list">
        <li>适合文件和数据不能全部上云</li>
        <li>任务依赖本地环境或内网资源</li>
        <li>平台负责入口、规划、权限和审计</li>
        <li>本地环境负责执行，CLI / Agent 负责桥接</li>
        <li>客户本地脚本路径不要求固定盘符或固定目录，按当前机器真实路径登记即可</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">05</p>
      <h2>当前公开重点之外的路线</h2>
      <ul class="brand-list">
        <li>当前公开重点不是设备、边缘或插件治理</li>
        <li>Agent 常驻执行仍属于后续增强，不是现在的公开卖点</li>
        <li>先把真实项目里的本地执行和内网接入做好更重要</li>
        <li>更远路线等有真实需求再继续展开</li>
      </ul>
    </article>
  </section>

<section class="brand-card">
  <p class="brand-kicker">Local Registration</p>
  <h2>客户本地路径和机器绑定，当前怎么落地</h2>
  <div class="brand-grid brand-grid--two">
    <article class="brand-card brand-card--nested">
      <h3>路径可以因人因机而异</h3>
      <ul class="brand-list">
        <li>客户不需要把所有脚本统一放到某个固定盘符。</li>
        <li>同一个客户的不同脚本，可以分别登记不同绝对路径。</li>
        <li>如果客户只有一个租户，就只在自己的租户下登记本机路径即可。</li>
        <li>免费版当前默认对应 <code>tenant_1000</code>，但本地路径仍按用户自己的机器来定。</li>
      </ul>
    </article>
    <article class="brand-card brand-card--nested">
      <h3>机器绑定必须收口</h3>
      <ul class="brand-list">
        <li>同一个 Skill 当前不能同时绑多台机器。</li>
        <li>正式使用按“每台机器各自登记自己的脚本 / Skill”推进。</li>
        <li>平台派发本地作业时，会按登记时的机器标识路由到对应设备。</li>
        <li>这让控制面可以统一，但执行位置不必统一。</li>
      </ul>
    </article>
  </div>
</section>

<section class="brand-card">
  <p class="brand-kicker">Shared SaaS</p>
  <h2>标准 SaaS 共享租户模式</h2>
  <div class="brand-grid brand-grid--two">
    <article class="brand-card brand-card--nested">
      <h3>当前怎么运行</h3>
      <p>从 <code>tenant_1003+</code> 开始，标准 SaaS 客户会优先进入共享租户前端骨架。运行时按访问 Host 绑定 schema，所以仍然是租户隔离，不是把所有客户塞进同一个后台账号里混用。</p>
    </article>
    <article class="brand-card brand-card--nested">
      <h3>适合什么场景</h3>
      <p>更适合标准能力、较轻团队协作和不需要深度前端定制的场景。如果客户需要更重的隔离、专属页面、专属品牌或更深部署控制，再继续走单租户交付或私有化。</p>
    </article>
  </div>
  <ul class="brand-list">
    <li>共享的是前端工程与正式发版节奏，不共享租户数据、账号和权限</li>
    <li>标准 SaaS 客户仍然按自己的租户空间使用能力、菜单、公告和结果</li>
    <li>当前共享租户前端已经建立，但按租户动态品牌化和更细部署参数还在继续收口</li>
  </ul>
</section>

<section class="brand-card">
  <p class="brand-kicker">Upgrade Path</p>
  <h2>从免费入口到正式交付，当前更真实的升级路径</h2>
  <table>
    <thead>
      <tr>
        <th>阶段</th>
        <th>当前状态</th>
        <th>更适合的部署理解</th>
        <th>下一步信号</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>01. 公开体验期</td>
        <td>先看公开体验页、登录页、注册页和公开文档</td>
        <td>这时重点不是一开始就谈私有化，而是先确认执行链路、产品定位和入口体验是否成立</td>
        <td>如果要反复使用，就进入个人入口或继续看本地脚本位 / 团队路径</td>
      </tr>
      <tr>
        <td>02. 个人免费入口期</td>
        <td>用户已经进入免费入口，开始理解智能执行台、AI 执行和基础使用路径</td>
        <td>这时更接近产品体验与增长入口，不等于已经进入正式团队 / 企业交付</td>
        <td>如果只是个人持续接脚本，就先看本地脚本位；如果开始关心多人协作，再进入团队评估期</td>
      </tr>
      <tr>
        <td>03. 个人扩容期</td>
        <td>已经在个人空间持续接脚本，但还没进入多人协作</td>
        <td>这时重点是个人空间扩容和本地接入，不需要先切到企业部署口径</td>
        <td>如果开始多人协作、权限控制和正式账号管理，再进入标准团队版</td>
      </tr>
      <tr>
        <td>04. 标准团队期</td>
        <td>开始带着真实协作、真实权限问题和标准菜单需求来判断是否够用</td>
        <td>这时优先评估共享 SaaS 正式租户入口，而不是默认上来就单租户或私有化</td>
        <td>如果需要独立网址、专属页面和正式验收，就进入企业交付</td>
      </tr>
      <tr>
        <td>05. 正式交付期</td>
        <td>客户要拿到自己的访问地址、自己的能力边界和正式交付包</td>
        <td>当前有两条更现实的路径：标准 SaaS 共享租户，或企业单租户交付。前者偏标准化，后者偏更强隔离与更深定制。</td>
        <td>如果只是标准协作与标准菜单，优先共享 SaaS；如果需要专属环境和更深定制，再走单租户交付</td>
      </tr>
      <tr>
        <td>06. 本地扩展期</td>
        <td>任务开始依赖本地环境、内网资源或私有数据</td>
        <td>在单租户交付或平台治理之上叠加本地混合执行，由 CLI / Agent 承接桥接</td>
        <td>如果还要进一步走标准化梯度，就看 <a href="./editions.html">版本路线</a></td>
      </tr>
    </tbody>
  </table>
</section>

<section class="brand-grid brand-grid--two">
  <article class="brand-card">
    <p class="brand-kicker">Upgrade Signal</p>
    <h2>哪些信号说明你该从免费入口升级到正式交付</h2>
    <ul class="brand-list">
      <li>需要一个客户自己的正式访问网址</li>
      <li>需要独立租户和更明确的数据 / 能力隔离</li>
      <li>需要正式账号、权限、验收和后续更新说明</li>
      <li>需要把真实脚本型能力、真实业务场景和真实审批边界接入平台</li>
      <li>需要把平台从体验入口变成可持续交付空间</li>
    </ul>
  </article>
  <article class="brand-card">
    <p class="brand-kicker">Recommended Path</p>
    <h2>常见升级路径</h2>
    <ul class="brand-list">
      <li>免费入口适合先体验平台与执行链路</li>
      <li>如果只是个人持续使用，先走本地脚本位轻量扩容</li>
      <li>标准团队版适合需要多人协作、正式租户和更稳定周期的场景</li>
      <li>正式交付适合需要独立网址、租户隔离和长期使用的场景</li>
      <li>标准化小团队方案和更完整的套餐能力会继续扩展</li>
      <li>常见路径是先走免费线，再按本地脚本位、团队版或企业交付逐步上探</li>
    </ul>
  </article>
</section>

<section class="brand-card">
  <p class="brand-kicker">Deployment Prep</p>
  <h2>部署评估前，通常先对齐这 3 件事</h2>
  <div class="brand-link-grid brand-link-grid--three">
    <a class="brand-link-card" href="./file-results.html">
      <span>Files</span>
      <strong>文件上传 / 结果下载</strong>
      <p>如果项目依赖输入文件、批次状态、Excel 结果或导出产物，先把文件链路说明清楚，再谈部署方式会更稳。</p>
    </a>
    <a class="brand-link-card" href="./deliverables.html">
      <span>Deliverables</span>
      <strong>交付物 / 文档入口</strong>
      <p>正式交付评估通常会先明确客户最终拿到什么网址、什么账号、什么说明和什么结果入口。</p>
    </a>
    <a class="brand-link-card" href="./onboarding-checklist.html">
      <span>Checklist</span>
      <strong>客户接入准备清单</strong>
      <p>已有真实脚本型能力和真实场景时，先把脚本目录、README、样例文件、依赖和风险边界准备好，会更容易完成部署判断。</p>
    </a>
  </div>
</section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Standard Delivery</p>
      <h2>标准交付内容</h2>
      <ul class="brand-list">
        <li>一个独立租户</li>
        <li>一个独立访问网址</li>
        <li>一组客户专属能力，当前通常以脚本型能力为主</li>
        <li>平台账号与基础权限</li>
        <li>客户使用说明与脚本热更新说明</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Standard Scope</p>
      <h2>当前默认不包含什么</h2>
      <ul class="brand-list">
        <li>公开第三方能力市场</li>
        <li>客户绕过平台自行发布脚本</li>
        <li>客户自行上传任意 Vue / JS 当成正式前端页面</li>
        <li>无审批的高风险自动执行</li>
        <li>打破租户边界的跨客户能力共享</li>
      </ul>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Menu Boundary</p>
    <h2>菜单定制边界</h2>
    <ul class="brand-list">
      <li>客户可以通过数据库菜单挂已有页面</li>
      <li>客户可以挂外链或 iframe 类型入口</li>
      <li>如果要新增当前前端包里不存在的新页面，仍需要正式前端开发、打包和部署</li>
      <li>共享 SaaS 当前不支持让租户自行上传任意前端代码直接变成正式页面</li>
    </ul>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">How To Choose</p>
    <h2>按项目重点进入合适的部署路径</h2>
    <div class="brand-link-grid">
      <a class="brand-link-card" href="../contact.html#lead-form">
        <span>Customer Delivery</span>
        <strong>客户交付型项目</strong>
        <p>优先单租户交付模式，再视情况补统一治理能力。</p>
      </a>
      <a class="brand-link-card" href="../contact.html#lead-form">
        <span>Platform Ops</span>
        <strong>平台治理与运营</strong>
        <p>在租户隔离之上叠加平台治理模式，统一公告、模板、日志和台账。</p>
      </a>
      <a class="brand-link-card" href="./customer-flow.html">
        <span>Delivery Ops</span>
        <strong>客户上线与后续更新</strong>
        <p>直接看客户流程 / 交付页，把标准交付包、使用路径、热更新和验收重点一次看清。</p>
      </a>
      <a class="brand-link-card" href="./file-results.html">
        <span>File Flow</span>
        <strong>如果项目核心是文件处理和结果产物</strong>
        <p>先把上传输入文件、批次状态和结果下载的公开链路讲清楚，再决定是云端处理还是混合执行。</p>
      </a>
      <a class="brand-link-card" href="./deliverables.html">
        <span>Delivery Kit</span>
        <strong>正式交付包与说明入口</strong>
        <p>继续看交付物 / 文档入口页，把客户长期使用时真正能拿到的说明和入口一次说清。</p>
      </a>
      <a class="brand-link-card" href="../contact.html#lead-form">
        <span>Growth Entry</span>
        <strong>免费线与分流入口</strong>
        <p>让访客先从免费线进入，再判断是继续留在个人空间、进入团队版，还是继续走企业交付路径。</p>
      </a>
      <a class="brand-link-card" href="./cli.html">
        <span>CLI Bridge</span>
        <strong>本地环境与内网执行</strong>
        <p>先看 CLI 指引，把 <code>login / register / run / agent</code> 的当前接入边界和落地路径跑通。</p>
      </a>
      <a class="brand-link-card" href="./onboarding-checklist.html">
        <span>Ready First</span>
        <strong>接入资料尚未齐备</strong>
        <p>先回到接入准备清单，而不是急着先选私有化、平台治理或本地桥接其中一种部署标签。</p>
      </a>
      <a class="brand-link-card" href="./editions.html">
        <span>Current Stage</span>
        <strong>当前阶段与下一步重点</strong>
        <p>先回到当前阶段说明，确认哪些是现在能做的，哪些还不该讲太满。</p>
      </a>
    </div>
  </section>
</div>
