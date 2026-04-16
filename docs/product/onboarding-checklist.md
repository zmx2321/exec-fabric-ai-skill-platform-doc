---
aside: false
outline: false
lastUpdated: false
---

<div class="brand-page-shell brand-page-shell--onboarding-checklist">
  <section class="brand-hero">
    <div>
      <p class="brand-kicker">Onboarding Checklist</p>
      <h1>客户接入准备清单</h1>
      <div class="brand-hero__panel">
        <span class="brand-pill">Before Delivery</span>
        <strong>真正拖慢接入速度的，往往不是功能不够，而是脚本、说明、样例和边界信息给得不完整。</strong>
        <p>重点说明接入前需要准备的信息，方便客户、售前和实施一起对齐。</p>
      </div>
      <p class="brand-lead">
        进入真实场景接入前，最好先把
        <strong>脚本目录、README、样例文件、运行依赖、结果形式和风险边界</strong>
        准备清楚。这样后续无论走客户交付、文件处理还是 CLI / 本地桥接，都会顺很多。
      </p>
      <div class="brand-chip-list">
        <span class="brand-chip">脚本目录</span>
        <span class="brand-chip">README</span>
        <span class="brand-chip">样例文件</span>
        <span class="brand-chip">风险边界</span>
      </div>
      <div class="brand-actions">
        <a class="cta-button cta-button--brand" href="../contact.html#lead-form">带着清单来沟通</a>
        <a class="cta-button" href="./customer-flow.html">查看客户交付与使用说明</a>
      </div>
    </div>
    <div class="brand-hero__media brand-hero__media--compact">
      <div class="matrix-panel matrix-panel--contact">
        <div class="matrix-panel__hud">
          <span>EXECFABRIC // ONBOARDING CHECKLIST</span>
          <span>DOC 11</span>
        </div>
        <div class="matrix-panel__canvas">
          <div class="matrix-panel__trace matrix-panel__trace--top"></div>
          <div class="matrix-panel__trace matrix-panel__trace--mid"></div>
          <div class="matrix-panel__trace matrix-panel__trace--bottom"></div>
          <div class="matrix-panel__stack">
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">requiredPack</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'script_folder'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'readme'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'sample_file'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'runtime_dep'</span><span class="matrix-panel__punct">]</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">boundaryInfo</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'ai_allowed'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'manual_confirm'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'result_format'</span><span class="matrix-panel__punct">]</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">onboardingGoal</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__string">'delivery_ready_handoff'</span></span>
          </div>
          <div class="matrix-panel__callout">BETTER INPUTS MAKE ONBOARDING FASTER</div>
        </div>
        <div class="matrix-panel__footer">
          <span class="matrix-panel__tag"><span class="matrix-panel__key">prep</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">required</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">scope</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">delivery</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">fit</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">handoff_ready</span></span>
        </div>
      </div>
    </div>
  </section>

  <section class="brand-grid brand-grid--four">
    <article class="brand-card">
      <p class="brand-kicker">01</p>
      <h2>脚本目录</h2>
      <p>至少要有可执行主入口，以及能让平台判断用途的最小目录结构。</p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">02</p>
      <h2>README 说明</h2>
      <p>告诉平台脚本做什么、输入什么、输出什么、需要什么前置条件。</p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">03</p>
      <h2>样例文件</h2>
      <p>如果脚本依赖输入文件或会生成结果文件，最好给出样例输入和样例输出。</p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">04</p>
      <h2>风险边界</h2>
      <p>最好先说清是否允许 AI 调用、是否允许手动执行、是否需要人工确认。</p>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Checklist Table</p>
    <h2>建议至少一次给齐这些信息</h2>
    <table>
      <thead>
        <tr>
          <th>准备项</th>
          <th>是否建议先给</th>
          <th>为什么重要</th>
          <th>建议说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>脚本目录</td>
          <td>必须</td>
          <td>没有执行内容就谈不上接入</td>
          <td>至少明确主入口和最小目录结构。</td>
        </tr>
        <tr>
          <td>README.md</td>
          <td>必须</td>
          <td>帮助平台审核、命名和后续维护</td>
          <td>建议写明作用、输入、输出、前置条件、结果形式。</td>
        </tr>
        <tr>
          <td>样例输入</td>
          <td>强烈建议</td>
          <td>帮助快速验证接入效果</td>
          <td>如果涉及文件处理，最好给示例文件。</td>
        </tr>
        <tr>
          <td>样例输出</td>
          <td>强烈建议</td>
          <td>帮助确认结果是否符合预期</td>
          <td>可以是样例结果文件、截图或结果字段说明。</td>
        </tr>
        <tr>
          <td>运行依赖</td>
          <td>强烈建议</td>
          <td>决定部署与接入方式</td>
          <td>例如 Python 版本、第三方依赖、系统工具、外部服务。</td>
        </tr>
        <tr>
          <td>是否允许 AI 调用</td>
          <td>建议先给</td>
          <td>决定智能大脑是否可推荐该能力</td>
          <td>不是所有脚本都默认进入 AI 推荐范围。</td>
        </tr>
        <tr>
          <td>是否允许手动执行</td>
          <td>建议先给</td>
          <td>决定页面是否开放手动入口</td>
          <td>可与 AI 调用分开控制。</td>
        </tr>
        <tr>
          <td>是否需要人工确认</td>
          <td>建议先给</td>
          <td>控制高风险动作的确认环节</td>
          <td>适用于改写数据、发送消息、调用外部动作等场景。</td>
        </tr>
        <tr>
          <td>结果形式</td>
          <td>建议先给</td>
          <td>决定结果展示与结果下载入口</td>
          <td>可以是文本、表格、Excel、压缩包或其他产物。</td>
        </tr>
        <tr>
          <td>执行时长预期</td>
          <td>建议先给</td>
          <td>决定前端体验和结果返回方式</td>
          <td>短任务和长任务的用户体验设计通常不同。</td>
        </tr>
        <tr>
          <td>数据安全边界</td>
          <td>建议先给</td>
          <td>决定是云端执行还是本地桥接</td>
          <td>涉及内网或私有资源时，通常需要补充 CLI / Agent 路线。</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">If Not Ready Yet</p>
      <h2>资料暂未齐备时，可先从这几项开始</h2>
      <ul class="brand-list">
        <li>可以先用公开体验入口感受平台链路。</li>
        <li>可以先只带一份最小脚本目录和 README 来沟通。</li>
        <li>仍在判断平台定位时，优先查看产品概览和常见问题。</li>
        <li>已确定要接文件场景时，补充样例文件和结果预期会更高效。</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">What This Avoids</p>
      <h2>为什么这份清单值得提前看</h2>
      <ul class="brand-list">
        <li>避免只说“我有个脚本”，但谁也说不清怎么接。</li>
        <li>避免结果形式没说清，后面临时返工文件下载或结果页。</li>
        <li>避免高风险动作没提前说明，后面再补安全边界。</li>
        <li>避免本该走本地桥接的场景，前期误当成纯网页能力来谈。</li>
      </ul>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Path Matching</p>
    <h2>根据当前状态，下一步更适合看哪页</h2>
    <table>
      <thead>
        <tr>
          <th>当前状态</th>
          <th>适合查看</th>
          <th>为什么</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>只是第一次了解平台</td>
          <td><a href="../guide/getting-started.html">快速开始</a></td>
          <td>先判断平台定位和真实入口</td>
          <td>不必一开始就准备完整交付清单。</td>
        </tr>
        <tr>
          <td>已经准备接客户或真实项目</td>
          <td><a href="./customer-flow.html">客户交付与使用说明</a></td>
          <td>先理解正式交付和热更新流程</td>
          <td>适合售前、实施和客户沟通一起看。</td>
        </tr>
        <tr>
          <td>任务依赖输入文件和结果文件</td>
          <td><a href="./file-results.html">文件上传 / 结果下载</a></td>
          <td>先把文件链路讲清楚</td>
          <td>尤其适合报表、导出和批量数据处理场景。</td>
        </tr>
        <tr>
          <td>脚本依赖本地环境或内网资源</td>
          <td><a href="./cli.html">CLI 指引</a></td>
          <td>更可能需要本地桥接</td>
          <td>这类场景通常不是单靠浏览器页面解决。</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section class="brand-card brand-card--cta">
    <div class="brand-card__row">
      <div>
        <p class="brand-kicker">Next Read</p>
        <h2>把准备清单、交付流程和文件链路连起来看</h2>
        <p class="brand-lead">进入真实接入阶段后，更有效的做法通常不是继续停留在抽象愿景，而是把交付流程、文件链路和本地桥接边界一次对齐。</p>
      </div>
      <div class="brand-link-grid brand-link-grid--compact">
        <a class="brand-link-card" href="./customer-flow.html">
          <span>Flow</span>
          <strong>客户交付与使用说明</strong>
        </a>
        <a class="brand-link-card" href="./file-results.html">
          <span>Files</span>
          <strong>文件上传 / 结果下载</strong>
        </a>
        <a class="brand-link-card" href="./deliverables.html">
          <span>Deliverables</span>
          <strong>客户交付说明与文档入口</strong>
        </a>
        <a class="brand-link-card" href="./cli.html">
          <span>CLI</span>
          <strong>CLI 指引</strong>
        </a>
      </div>
    </div>
  </section>
</div>
