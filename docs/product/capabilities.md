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
        <p>这些能力共同决定平台能不能先解决一类真实问题，并减少后续返工。</p>
      </div>
      <p class="brand-lead">
        ExecGov 的核心能力不是零散功能点，而是一套围绕
        <strong>多租户治理、可信执行、能力目录化和本地桥接</strong>
        持续收敛的可落地平台能力。
      </p>
      <div class="brand-chip-list">
        <span class="brand-chip">多租户隔离</span>
        <span class="brand-chip">可信执行</span>
        <span class="brand-chip">模板分发</span>
        <span class="brand-chip">CLI 桥接</span>
        <span class="brand-chip">生命周期治理</span>
      </div>
      <div class="brand-actions">
        <a class="cta-button cta-button--brand" href="../contact.html#lead-form">沟通真实场景</a>
        <a class="cta-button" href="./architecture.html">查看架构说明</a>
      </div>
    </div>
    <div class="brand-hero__media brand-hero__media--compact">
      <div class="matrix-panel matrix-panel--contact">
        <div class="matrix-panel__hud">
          <span>EXECGOV // CAPABILITY MAP</span>
          <span>DOC 03</span>
        </div>
        <div class="matrix-panel__canvas">
          <div class="matrix-panel__trace matrix-panel__trace--top"></div>
          <div class="matrix-panel__trace matrix-panel__trace--mid"></div>
          <div class="matrix-panel__trace matrix-panel__trace--bottom"></div>
                    <div class="matrix-panel__stack">
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">governance</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'tenant_isolation'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'template_delivery'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'audit_trail'</span><span class="matrix-panel__punct">]</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">execution</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'intent_plan'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'manual_confirm'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'skill_run'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'result_trace'</span><span class="matrix-panel__punct">]</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">bridge</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'skill_registry'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'cli_bridge'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'local_agent'</span><span class="matrix-panel__punct">]</span></span>
          </div>
          <div class="matrix-panel__callout">EXECUTABLE / GOVERNED / REUSABLE</div>
        </div>
        <div class="matrix-panel__footer">
          <span class="matrix-panel__tag"><span class="matrix-panel__key">control</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">built_in</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">reuse</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">expanding</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">local</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">connected</span></span>
        </div>
      </div>
    </div>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">01</p>
      <h2>多租户隔离</h2>
      <ul class="brand-list">
        <li>平台当前采用 PostgreSQL schema 级多租户模型</li>
        <li><code>public</code> 负责平台治理和共享底座</li>
        <li>每个正式客户租户拥有自己的独立 schema</li>
        <li>租户之间的执行资产、Skill、日志和系统数据默认隔离</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">02</p>
      <h2>智能大脑执行闭环</h2>
      <ul class="brand-list">
        <li>意图识别</li>
        <li>计划生成</li>
        <li>人工确认</li>
        <li>能力执行、结果回传、留痕与审计</li>
      </ul>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">03</p>
    <h2>能力接入与 Skill 编排</h2>
    <ul class="brand-list">
      <li>当前以 Python 脚本接入为主</li>
      <li>Skill 可视化查看与编辑</li>
      <li>当前已支持 Skill 动作定义与单能力执行闭环</li>
      <li>租户级启停与绑定</li>
      <li>已新增通用资源层与执行器注册层，为 API、模板和流程等后续接入预留扩展边界</li>
      <li>第一种非脚本样板是 public 超管侧的 HTTP 能力接入，用来验证资源模型、执行器和审计链路</li>
      <li>租户侧已先提供 HTTP 资源只读查看页，用来展示当前账号被授权资源的请求摘要、鉴权方式和写边界，但不开放租户自助配置与试跑</li>
      <li>HTTP 资源当前仍只按“固定接口 + 显式鉴权 + 写操作白名单”推进，配置权和凭据治理继续只放在 public 超管侧</li>
      <li>后续会支持在规则内由一个 Skill 串联多个脚本或多个能力节点的编排能力，但这属于 `2.0` 之后才进入正式产品化的能力</li>
    </ul>
    <p>当前使用时，请先按“可信单 Skill 执行”理解；更复杂的多能力编排不是 `1.0 / 1.1` 已完成能力。正式进入编排前，还要先补齐复合诉求拆解、真实编排运行时契约、节点级确认、正式降级/回退、部分成功/可恢复状态这些治理底座。</p>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">1.1 In Progress</p>
      <h2>低客服闭环已经先落到哪</h2>
      <ul class="brand-list">
        <li><code>public</code> 超管订单中心已支持建单、确认支付、执行开通、续费单预填、续费提醒扫描、到期停开扫描</li>
        <li>个人免费版前台已支持本地脚本位轻量自助增购，确认后会直接回填当前账号额度</li>
        <li>个人免费版也已开放团队版月租 / 年租升级入口，会把用户引导到标准 SaaS 正式租户注册路径</li>
        <li>客户、订单与租户状态会联动回写，不再只是样例展示页</li>
        <li>适合先把收费链路和生命周期自己跑顺，减少后面客服和人工跟单</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Still Pending</p>
      <h2>当前还没对外承诺什么</h2>
      <ul class="brand-list">
        <li>还没有开放成完整通用的终端用户支付中心；当前成立的是个人免费版本地脚本位轻量自助增购，以及团队版升级注册入口</li>
        <li>还没有接真实第三方支付网关和签名验签</li>
        <li>续费提醒目前是平台扫描与留痕，不是邮件 / 企业微信 / 短信自动送达</li>
      </ul>
    </article>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">04</p>
      <h2>平台模板分发</h2>
      <ul class="brand-list">
        <li>平台模板发布</li>
        <li>租户安装申请与确认安装</li>
        <li>版本管理、回滚和分发日志</li>
        <li>为模板复用、交付复盘和后续稳定扩展打底</li>
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
      <h2>执行安全边界</h2>
      <ul class="brand-list">
        <li>高风险动作继续保留人工确认</li>
        <li>HTTP 写操作默认拒绝，必须显式进入白名单</li>
        <li>租户侧不开放平台治理页，只给授权范围内的查看与执行入口</li>
        <li>管理员判定已收口，不再用 <code>user_id == 1</code> 误判 admin</li>
        <li>脚本 / Skill 风险等级当前固定为 <code>low / medium / high</code> 三档，公开标准见 <a href="./script-risk-levels.html">脚本风险分级说明</a></li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">07</p>
      <h2>CLI 与本地接入</h2>
      <ul class="brand-list">
        <li><code>login</code> / <code>register</code> / <code>list</code> / <code>run</code></li>
        <li><code>agent describe</code> / <code>agent bind</code> / <code>agent start</code></li>
        <li>支持云端上传注册，也支持 <code>local-register</code> 本机路径登记</li>
        <li>意义不是命令行包装器，而是平台控制面和本地环境之间的桥梁</li>
        <li>客户本地路径可按脚本分别登记，不要求统一盘符、统一父目录或统一操作系统路径</li>
        <li>同一个 Skill 当前不支持同时绑定多台机器；正式使用按“每台机器各自登记自己的脚本 / Skill”推进</li>
        <li>当同一能力同时存在本地脚本和线上脚本时，运行时优先走本地脚本</li>
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
        <li>当用户被授权 HTTP 类 Skill 时，可只读查看相关资源摘要、鉴权方式和写操作边界</li>
        <li>个人免费入口当前已经形成注册结果页、“我的技能库 / 上传脚本 / 智能助手 / 执行历史 / 个人空间 / 公告中心 / 社区广场 / 升级正式版”这组有效菜单、HTTP 只读台账和本地脚本位轻量增购等连续使用入口</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Execution Reality</p>
      <h2>客户如何真正使用这些能力</h2>
      <ul class="brand-list">
        <li>手动执行路径：登录 -&gt; 找到能力 -&gt; 填写输入 -&gt; 提交执行 -&gt; 查看结果或产物</li>
        <li>AI 对话路径：输入需求 -&gt; 平台在当前租户与权限范围内推荐能力 -&gt; 人工确认 -&gt; 执行对应能力 -&gt; 返回结果</li>
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
    <p class="brand-kicker">Future Extension</p>
    <h2>未来优先扩的不是“更多页面”，而是更多可治理能力类型</h2>
    <p>当前公开能力仍以 Python 脚本接入为主，但平台已经明确预留下面这些扩展方向。这里表达的是演进边界，不是“已经全部标准商用”。其中 HTTP API 样板已经先在 public 超管侧落地，用来验证接入路径。</p>
    <div class="brand-grid brand-grid--three">
      <article class="brand-card brand-card--nested">
        <h3>HTTP API / SaaS</h3>
        <p>把第三方接口、内部服务、Webhook 和外部平台动作接成能力。当前已完成第一轮样板接入，但范围仍然收在固定接口、可试跑、可审计。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>数据连接器</h3>
        <p>把数据库查询、数据仓库、业务系统数据写入等能力接成标准入口。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>文档模板</h3>
        <p>把合同、周报、报告、表单和标准文档生成服务化。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>审批流</h3>
        <p>把流程发起、状态查询和流程节点动作纳入权限与审计链路。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>专用模型服务</h3>
        <p>把 OCR、文档解析、语音识别、图片生成等模型能力纳入统一治理。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>运维动作</h3>
        <p>把巡检、日志清理、备份、告警联动、服务检查等动作继续标准化。</p>
      </article>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Why These Matter Together</p>
    <h2>为什么这不是功能清单，而是一套系统</h2>
    <div class="brand-link-grid">
      <a class="brand-link-card" href="./architecture.html">
        <span>Architecture</span>
        <strong>隔离能力决定能不能承接多客户</strong>
        <p>没有清晰租户边界，平台很难进入正式客户场景，也很难把治理边界讲清楚。</p>
      </a>
      <a class="brand-link-card" href="./deployment.html">
        <span>Deployment</span>
        <strong>本地桥接决定能不能进入真实环境</strong>
        <p>很多高价值任务都依赖内网、文件系统和本地数据，不能只停留在云端页面。</p>
      </a>
      <a class="brand-link-card" href="./editions.html">
        <span>Roadmap</span>
        <strong>模板与审计决定能不能继续把交付做稳</strong>
        <p>如果没有模板分发、回滚和日志治理，很多能力就很难持续复用，也很难做成稳定交付。</p>
      </a>
      <a class="brand-link-card" href="./customer-flow.html">
        <span>Delivery</span>
        <strong>能力要能转成真实交付与更新流程</strong>
        <p>客户流程 / 交付页会继续展开客户怎么使用这些能力、平台怎么交付，以及热更新如何进入正式链路。</p>
      </a>
      <a class="brand-link-card" href="./file-results.html">
        <span>Files</span>
        <strong>输入文件和结果产物怎么进入正式链路</strong>
        <p>很多真实场景都不是只返回文本，而是要先接文件、处理文件，再把结果文件按交付边界交回来。</p>
      </a>
      <a class="brand-link-card" href="./deliverables.html">
        <span>Deliverables</span>
        <strong>客户最终拿到什么，决定能力是否真正可交付</strong>
        <p>交付物 / 文档入口页会继续展开除了执行能力之外，还包括哪些说明文档、结果入口和客户长期使用入口。</p>
      </a>
      <a class="brand-link-card" href="./cli.html">
        <span>CLI</span>
        <strong>本地桥接决定能不能把真实能力接入平台</strong>
        <p>当前已经落地的 <code>register / list / run / agent</code> 命令，就是平台进入本地环境并接入脚本型能力的第一层接口。</p>
      </a>
    </div>
  </section>
</div>
