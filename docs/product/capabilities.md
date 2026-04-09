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
      <div class="brand-hero__panel">
        <span class="brand-pill">Capability Logic</span>
        <strong>重点不是会不会执行，而是能不能在规则里执行。</strong>
        <p>这些能力共同决定平台是否能交付、能扩租户、能沉淀模板、能继续走向产品化。</p>
      </div>
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
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">governance</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'multi_tenant'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'template_ops'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'audit'</span><span class="matrix-panel__punct">]</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">execution</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'plan'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'confirm'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'run'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'trace'</span><span class="matrix-panel__punct">]</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">bridge</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'skill_registry'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'cli'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'local_agent'</span><span class="matrix-panel__punct">]</span></span>
          </div>
          <div class="matrix-panel__callout">CAPABILITY SYSTEM / TRUSTED EXECUTION</div>
        </div>
        <div class="matrix-panel__footer">
          <span class="matrix-panel__tag"><span class="matrix-panel__key">control</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">on</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">reuse</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">growing</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">local</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">ready</span></span>
        </div>
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

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Customer Visible</p>
      <h2>客户当前实际能看到什么</h2>
      <ul class="brand-list">
        <li>登录与账号使用</li>
        <li>客户专属能力列表，而不是底层脚本源码路径</li>
        <li>智能大脑对话入口与手动执行入口</li>
        <li>AI 推荐后确认执行、执行结果查看、文件上传与结果下载</li>
        <li>平台公告与租户公告查看</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Execution Reality</p>
      <h2>客户如何真正使用这些能力</h2>
      <ul class="brand-list">
        <li>手动执行路径：登录 -&gt; 找到能力 -&gt; 填写输入 -&gt; 提交执行 -&gt; 查看结果或产物</li>
        <li>AI 对话路径：输入需求 -&gt; 平台在当前租户与权限范围内推荐能力 -&gt; 人工确认 -&gt; 执行脚本 -&gt; 返回结果</li>
        <li>部分高风险能力会强制保留人工确认，不做无边界自动执行</li>
        <li>AI 不会跨租户推荐其他客户的能力</li>
      </ul>
    </article>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Hot Update</p>
      <h2>客户脚本如何持续更新</h2>
      <ul class="brand-list">
        <li>客户准备脚本目录，至少包含 <code>main.py</code> 与 <code>README.md</code></li>
        <li>脚本上传到所属租户目录，而不是混放到其他客户目录</li>
        <li>平台完成审核、同步、Script 注册、Skill 关联与租户授权绑定</li>
        <li>验证通过后，只有当前客户所属租户可见可用</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Why It Matters</p>
      <h2>热更新真正解决什么问题</h2>
      <ul class="brand-list">
        <li>新增脚本或新版本脚本接入时，不需要重部署整个平台</li>
        <li>平台继续保留审核、注册和授权控制权</li>
        <li>其他租户不会因为某个客户更新脚本而自动获得权限</li>
        <li>这让“持续交付”成为正式能力，而不是一次性项目动作</li>
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
      <a class="brand-link-card" href="./customer-flow.html">
        <span>Delivery</span>
        <strong>能力要能转成真实交付与更新流程</strong>
        <p>继续看客户怎么使用这些能力、平台怎么交付、热更新怎么走，避免只停留在功能名层面。</p>
      </a>
      <a class="brand-link-card" href="./cli.html">
        <span>CLI</span>
        <strong>本地桥接决定能不能把真实脚本接进来</strong>
        <p>当前已经落地的 <code>register / list / run / agent</code> 命令，就是平台进入本地环境的第一层接口。</p>
      </a>
    </div>
  </section>
</div>
