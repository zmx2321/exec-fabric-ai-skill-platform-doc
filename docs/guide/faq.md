---
aside: false
outline: false
lastUpdated: false
---

<div class="brand-page-shell">
<section class="brand-hero">
  <div>
    <p class="brand-kicker">FAQ</p>
    <h1>常见问题</h1>
    <div class="brand-hero__panel">
      <span class="brand-pill">Key Questions</span>
      <strong>很多疑问都集中在定位、隔离、热更新和 CLI 这些核心问题上。</strong>
      <p>集中回答公开沟通中最常见的问题。</p>
    </div>
    <p class="brand-lead">
      这一页专门回答第一次沟通、第一次体验和第一次做交付时最容易问到的问题。
      它的目标不是讲概念，而是把<strong>定位、边界、隔离、热更新、CLI、本地执行和当前阶段</strong>一次说清楚。
    </p>
    <div class="brand-chip-list">
      <span class="brand-chip">定位</span>
      <span class="brand-chip">隔离</span>
      <span class="brand-chip">热更新</span>
      <span class="brand-chip">CLI / Agent</span>
    </div>
    <div class="brand-actions">
      <a class="cta-button cta-button--brand" href="../product/index.html">看产品概览</a>
      <a class="cta-button" href="../contact.html#lead-form">线索与分流</a>
    </div>
  </div>
  <div class="brand-hero__media brand-hero__media--compact">
    <div class="matrix-panel matrix-panel--contact">
      <div class="matrix-panel__hud">
        <span>EXECFABRIC // FAQ</span>
        <span>GUIDE 03</span>
      </div>
      <div class="matrix-panel__canvas">
        <div class="matrix-panel__trace matrix-panel__trace--top"></div>
        <div class="matrix-panel__trace matrix-panel__trace--mid"></div>
        <div class="matrix-panel__trace matrix-panel__trace--bottom"></div>
        <div class="matrix-panel__stack">
          <span class="matrix-panel__line"><span class="matrix-panel__value matrix-panel__fn">positioning</span><span class="matrix-panel__sep"> / </span><span class="matrix-panel__value matrix-panel__fn">boundary</span><span class="matrix-panel__sep"> / </span><span class="matrix-panel__value matrix-panel__fn">current_stage</span></span>
          <span class="matrix-panel__line"><span class="matrix-panel__value matrix-panel__ident">tenant_isolation</span><span class="matrix-panel__sep"> / </span><span class="matrix-panel__value matrix-panel__ident">hot_update</span><span class="matrix-panel__sep"> / </span><span class="matrix-panel__value matrix-panel__ident">public_safe_docs</span></span>
          <span class="matrix-panel__line"><span class="matrix-panel__value matrix-panel__ident">cli_bridge</span><span class="matrix-panel__sep"> / </span><span class="matrix-panel__value matrix-panel__ident">local_execution</span><span class="matrix-panel__sep"> / </span><span class="matrix-panel__value matrix-panel__ident">team_delivery</span></span>
        </div>
        <div class="matrix-panel__callout">CLEAR BOUNDARIES SAVE EVERYONE TIME</div>
      </div>
      <div class="matrix-panel__footer">
        <span class="matrix-panel__tag"><span class="matrix-panel__key">faq</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">current</span></span>
        <span class="matrix-panel__tag"><span class="matrix-panel__key">tone</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">direct</span></span>
        <span class="matrix-panel__tag"><span class="matrix-panel__key">scope</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">public_safe</span></span>
      </div>
    </div>
  </div>
</section>

  <section class="brand-card">
    <p class="brand-kicker">Positioning</p>
    <h2>定位相关</h2>
    <div class="brand-grid brand-grid--two">
      <article class="brand-card brand-card--nested">
        <h3>它是不是一个普通聊天系统</h3>
        <p>不是。它是一个让 AI 在规则内调用和执行真实能力的平台，当前最成熟的执行资产是 Python 脚本；同时 Web 端上传注册已经支持 Python / Shell。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>它适合哪些人</h3>
        <p>适合已经有脚本、自动化任务、数据处理需求，或需要把这些能力变成统一入口、统一交付和统一治理的人。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>免费版是不是企业后台裁剪版</h3>
        <p>不是。免费版面向个人探索者，用来快速体验能力接入、AI 调度与执行反馈；团队与企业场景再进入更完整的协作和治理路径。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>企业线和免费线是不是两套完全分裂的系统</h3>
        <p>不是。它们共享同一套执行与安全底座，只是面向的使用规模、协作深度和交付方式不同。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>现在是不是只有一条正式路径</h3>
        <p>不是。当前公开口径已经拆成四层：免费线、本地脚本位增购、标准团队版正式租户入口，以及企业版 / 私有化交付。</p>
      </article>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Safety</p>
    <h2>安全、隔离与权限边界</h2>
    <div class="brand-grid brand-grid--two">
      <article class="brand-card brand-card--nested">
        <h3>AI 会不会越权执行</h3>
        <p>当前平台强调 AI 在规则内工作。推荐范围、执行边界、人工确认和审计留痕都不是可有可无的装饰层。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>一个客户能不能看到另一个客户的能力</h3>
        <p>不能。无论是共享 SaaS 还是企业单租户交付，客户默认都只能看到自己租户内被授权的能力。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>平台如何保证不同客户之间隔离</h3>
        <p>平台默认按客户边界隔离能力、数据和权限，确保不同客户之间互不可见、互不干扰。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>AI 会不会跨租户推荐别的客户能力</h3>
        <p>不会。当前推荐范围受租户与权限共同约束，不是“模型想到什么就推什么”。</p>
      </article>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Delivery</p>
    <h2>交付与热更新</h2>
    <div class="brand-grid brand-grid--two">
      <article class="brand-card brand-card--nested">
        <h3>是不是一定要私有化才能用</h3>
        <p>不一定。标准团队协作当前可以先走共享 SaaS 正式租户入口；只有涉及更强隔离、内网、本地桥接或正式项目验收时，才更适合继续走企业交付或私有化。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>热更新是不是要重部署整个平台</h3>
        <p>不是。客户脚本通过审核、同步、注册和授权后，可以在当前租户内生效，不需要整个平台重新部署。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>客户能不能自己上传脚本后直接正式上线</h3>
        <p>当前 <code>1.0</code> 默认不这样做。平台仍保留审核、注册、授权和权限验证流程，不支持绕过平台直接正式上线。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>客户能不能自己上传任意前端页面直接上线</h3>
        <p>不能。当前菜单可挂已有页面、外链和 iframe，但新增正式前端页面仍需要开发、打包和部署；共享 SaaS 不支持租户自行上传任意 Vue / JS 成为正式页面。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>热更新会不会影响其他客户</h3>
        <p>不会。脚本更新后只在所属租户范围内生效，其他租户不会自动获得可见或可执行权限。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>是不是所有项目都默认包含文件上传和结果下载</h3>
        <p>不一定。如果项目需要处理输入文件和结果产物，平台可以提供文件上传、批次状态和结果下载链路；是否开放以具体项目范围为准。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>上传文件后，脚本怎么知道该处理哪一个文件</h3>
        <p>不是让脚本自己去猜。当前对话执行底部快捷区的“上传文件”按钮会把这次上传绑定成一个 <code>uploadBatchId</code>，确认执行时后端再把这批文件的快照传给脚本。Python / Shell 脚本可以直接读取 <code>EXECFABRIC_UPLOAD_BATCH_NO</code>、<code>EXECFABRIC_UPLOAD_INPUT_FILES_JSON</code>、<code>EXECFABRIC_UPLOAD_FILE_SERVICE_JSON</code> 和 <code>EXECFABRIC_SKILL_INPUT_PAYLOAD_JSON</code>，所以处理的是当前绑定批次，而不是历史目录里“最新那个文件”。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>正式交付后客户通常会拿到哪些说明</h3>
        <p>通常至少包括访问入口、账号方式、客户使用说明、客户脚本热更新说明；如果项目包含公告、客户须知或结果下载入口，也应一起交待清楚。</p>
      </article>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">CLI &amp; Local</p>
    <h2>CLI、本地脚本和 Agent</h2>
    <div class="brand-grid brand-grid--two">
      <article class="brand-card brand-card--nested">
        <h3>CLI 现在是不是概念功能</h3>
        <p>不是。<code>execfabric-cli</code> 已支持 <code>login</code>、<code>register</code>、<code>list</code>、<code>run</code>、<code>agent describe</code> 和 <code>agent start</code>，适合本地接入、调试和前期验证。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>本地 Agent 是不是已经正式商用</h3>
        <p>还不是。本地 Agent 相关能力仍在持续完善，目前可以先按本地桥接与执行骨架理解。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>本地脚本和内网资源能不能接入平台</h3>
        <p>可以，但通常不是让浏览器直接碰本地路径，而是通过 CLI / Agent 路线承接本地执行桥接。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>是不是所有脚本类型都已经完整支持远程入库</h3>
        <p>网页端上传注册现在已经支持 Python / Shell 文本脚本；但 CLI 远程注册目前仍主要围绕 Python，更多类型会继续扩展。</p>
      </article>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Stage</p>
    <h2>当前阶段与升级路径</h2>
    <div class="brand-grid brand-grid--two">
      <article class="brand-card brand-card--nested">
        <h3>现在已经做出什么</h3>
        <p>企业 <code>1.0</code> 交付主线、个人免费入口、CLI 最小桥梁能力和外部文档都已可用，可以支撑公开讲解、免费线体验和部分真实场景。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>标准化小团队方案是不是已经完全开放</h3>
        <p>还没有完全开放成最终完成态，但标准 SaaS 共享租户前端已经建立，月租 / 年租升级路径也已经存在，后续继续收口的是品牌化、初始化和更细菜单边界。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>体验页适合帮我判断什么</h3>
        <p>它适合先感受执行链路、理解平台定位，并判断自己更适合继续走免费线、本地脚本位、标准团队版还是企业咨询。当前体验页左侧是 Python `task_brief_demo.py`，右侧是 Shell `clean_log_demo.sh`，对应脚本来自正式目录 <code>exec-fabric-ai-skill-platform-script/testing/tenant_1000/experience/</code>。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>注册成功后会去哪里</h3>
        <p>当前注册成功后会先进入独立结果页，再回到登录与个人主链路，不再只是靠提示框承接。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3><code>execfabric-shell</code> 是不是客户正式入口</h3>
        <p>不是。它主要用于多入口聚合、联调和同步，不作为客户长期正式运行入口；客户正式入口还是个人免费端、共享 SaaS 正式租户或企业交付前端。</p>
      </article>
    </div>
  </section>

  <section class="brand-card brand-card--cta">
    <div class="brand-card__row">
      <div>
        <p class="brand-kicker">Next Read</p>
        <h2>FAQ 后的常用入口</h2>
        <p class="brand-lead">可按目标继续查看产品概览、客户交付、CLI，或直接提交线索进入分流。</p>
      </div>
      <div class="brand-link-grid brand-link-grid--compact">
        <a class="brand-link-card" href="../product/index.html">
          <span>Product</span>
          <strong>产品概览</strong>
        </a>
        <a class="brand-link-card" href="../product/customer-flow.html">
          <span>Delivery</span>
          <strong>客户流程 / 交付</strong>
        </a>
        <a class="brand-link-card" href="../product/cli.html">
          <span>CLI</span>
          <strong>CLI 指引</strong>
        </a>
        <a class="brand-link-card" href="../contact.html#lead-form">
          <span>Lead</span>
          <strong>线索与分流</strong>
        </a>
      </div>
    </div>
  </section>
</div>
