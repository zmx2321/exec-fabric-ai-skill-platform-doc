---
aside: false
outline: false
lastUpdated: false
---

<div class="brand-page-shell">
  <section class="brand-hero">
    <div>
      <p class="brand-kicker">Risk Control</p>
      <h1>脚本风险分级说明</h1>
      <div class="brand-hero__panel">
        <span class="brand-pill">Risk Standard</span>
        <strong>ExecGov 当前把脚本 / Skill 风险等级固定为 <code>low / medium / high</code> 三档，用来决定能力接入、确认和授权时应该保守到什么程度。</strong>
        <p>这不是宣传文案，而是平台治理脚本、文件处理、本地执行和运维动作时的一套明确标准。</p>
      </div>
      <p class="brand-lead">
        风险等级回答的不是“这个能力有没有价值”，而是
        <strong>这个能力一旦执行，影响面有多大、是否容易回滚、是否应该更严格地保留人工确认</strong>。
      </p>
      <div class="brand-chip-list">
        <span class="brand-chip">low</span>
        <span class="brand-chip">medium</span>
        <span class="brand-chip">high</span>
        <span class="brand-chip">人工确认</span>
        <span class="brand-chip">授权边界</span>
      </div>
      <div class="brand-actions">
        <a class="cta-button cta-button--brand" href="./cli.html">查看 CLI 元数据规则</a>
        <a class="cta-button" href="../contact.html#lead-form">沟通接入边界</a>
      </div>
    </div>
    <div class="brand-hero__media brand-hero__media--compact">
      <div class="matrix-panel matrix-panel--contact">
        <div class="matrix-panel__hud">
          <span>EXECGOV // RISK LEVELS</span>
          <span>DOC 08</span>
        </div>
        <div class="matrix-panel__canvas">
          <div class="matrix-panel__trace matrix-panel__trace--top"></div>
          <div class="matrix-panel__trace matrix-panel__trace--mid"></div>
          <div class="matrix-panel__trace matrix-panel__trace--bottom"></div>
          <div class="matrix-panel__stack">
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">low</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__string">'read_only / reorganize / copy_out'</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">medium</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__string">'real_data / local_run / external_access'</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">high</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__string">'deploy / rollback / overwrite / delete'</span></span>
          </div>
          <div class="matrix-panel__callout">DECLARED / GOVERNED / TRACEABLE</div>
        </div>
        <div class="matrix-panel__footer">
          <span class="matrix-panel__tag"><span class="matrix-panel__key">default</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">medium</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">levels</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">3</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">confirm</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">kept</span></span>
        </div>
      </div>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Current Rule</p>
    <h2>当前怎么得到风险等级</h2>
    <ul class="brand-list">
      <li>目录注册、官方脚本包和租户初始化能力，优先读取显式配置里的 <code>risk_level</code>。</li>
      <li>CLI 扫描会读取脚本注释、docstring 或 sidecar 里的 <code>@risk</code> / <code>risk_level</code>。</li>
      <li>网页上传注册当前也会读取脚本头注释或 docstring 里的同类标注。</li>
      <li>如果没有显式声明，当前默认按 <code>medium</code> 处理，而不是继续默认落成 <code>low</code>。</li>
    </ul>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Three Levels</p>
    <h2>三档评级标准</h2>
    <table>
      <thead>
        <tr>
          <th>等级</th>
          <th>适用动作</th>
          <th>典型例子</th>
          <th>治理建议</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>low</code></td>
          <td>只读、分析、整理、副本生成，不直接改生产状态</td>
          <td>下载目录归类、批量图片重命名、日志错误提取、文本去重、CSV 画像</td>
          <td>可保留默认人工确认；确认输入边界清晰后再决定是否放宽</td>
        </tr>
        <tr>
          <td><code>medium</code></td>
          <td>会访问真实数据、本机环境、外部系统或批量处理结果，但通常不直接改生产环境</td>
          <td>发布前预检、本地 Agent 执行、爬虫拉取、内网数据汇总</td>
          <td>默认保留人工确认，建议限制可见角色、超时和调用范围</td>
        </tr>
        <tr>
          <td><code>high</code></td>
          <td>发布、回滚、删除、覆盖、远程命令、生产环境变更等高影响动作</td>
          <td>远程 Compose 发布、远程 Compose 回滚、不可逆批量写操作</td>
          <td>不应默认开放 AI 自动调用，应继续保留人工确认和更严格授权</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Why Many Look Low</p>
      <h2>为什么当前很多样板看起来偏低风险</h2>
      <ul class="brand-list">
        <li>第一批公开脚本主要是文件整理、文本清洗、日志提取和演示能力，本来就更接近 <code>low</code>。</li>
        <li>中高风险动作目前主要集中在 <code>public</code> 官方运维包，不会默认塞进租户体验页。</li>
        <li>早期网页上传链路默认值偏低，已经在本轮统一到 <code>medium</code>。</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">What To Do</p>
      <h2>接入新脚本时建议怎么做</h2>
      <ul class="brand-list">
        <li>在脚本头部显式写 <code>@risk low|medium|high</code>，不要把风险判断留给口头约定。</li>
        <li>没有把握时先按更高一级处理，不要先标成 <code>low</code>。</li>
        <li>涉及发布、回滚、删除、覆盖、远程命令的动作，不要按普通工具脚本理解。</li>
      </ul>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">One Sentence</p>
    <h2>一句话总结</h2>
    <p class="brand-lead">
      ExecGov 的脚本风险分级不是“自动打分秀肌肉”，而是为了在能力接入、人工确认、授权和审计时，提前把影响面说清楚并治理住。
    </p>
  </section>
</div>
