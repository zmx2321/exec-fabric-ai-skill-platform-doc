---
aside: false
outline: false
lastUpdated: false
---

<div class="brand-page-shell">
<section class="brand-hero">
  <div>
    <p class="brand-kicker">Start Here</p>
    <h1>开始使用</h1>
    <div class="brand-hero__panel">
      <span class="brand-pill">Guide First</span>
      <strong>第一次来最容易浪费时间的，不是功能不够，而是不知道该从哪条路开始。</strong>
      <p>这里先把入口、角色和阅读路径分清楚。</p>
    </div>
    <p class="brand-lead">
      这组页面帮助第一次接触 ExecGov 的访客快速判断：
      <strong>更适合先体验、先看文档、先接 CLI，还是直接进入交付沟通。</strong>
    </p>
    <div class="brand-chip-list">
      <span class="brand-chip">先体验</span>
      <span class="brand-chip">再登录</span>
      <span class="brand-chip">CLI 接入</span>
      <span class="brand-chip">交付沟通</span>
    </div>
    <div class="brand-actions">
      <a class="cta-button cta-button--brand" href="./getting-started.html">看快速开始</a>
      <a class="cta-button" href="./faq.html">看常见问题</a>
    </div>
  </div>
  <div class="brand-hero__media brand-hero__media--compact">
    <div class="matrix-panel matrix-panel--contact">
      <div class="matrix-panel__hud">
        <span>EXECGOV // START HERE</span>
        <span>GUIDE 01</span>
      </div>
      <div class="matrix-panel__canvas">
        <div class="matrix-panel__trace matrix-panel__trace--top"></div>
        <div class="matrix-panel__trace matrix-panel__trace--mid"></div>
        <div class="matrix-panel__trace matrix-panel__trace--bottom"></div>
                <div class="matrix-panel__stack">
          <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">firstVisit</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'free_entry'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'login'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'core_docs'</span><span class="matrix-panel__punct">]</span></span>
          <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">localPath</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'local_scripts'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'cli_bridge'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'manifest'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'run'</span><span class="matrix-panel__punct">]</span></span>
          <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">deliveryPath</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'tenant_delivery'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'delivery_docs'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'hot_update'</span><span class="matrix-panel__punct">]</span></span>
        </div>
        <div class="matrix-panel__callout">PICK THE PATH THAT MATCHES YOUR STAGE</div>
      </div>
      <div class="matrix-panel__footer">
        <span class="matrix-panel__tag"><span class="matrix-panel__key">entry</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">public</span></span>
        <span class="matrix-panel__tag"><span class="matrix-panel__key">docs</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">mapped</span></span>
        <span class="matrix-panel__tag"><span class="matrix-panel__key">route</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">guided</span></span>
      </div>
    </div>
  </div>
</section>

  <section class="brand-grid brand-grid--three">
    <article class="brand-card">
      <p class="brand-kicker">Path A</p>
      <h2>先体验一遍执行链路</h2>
      <p>如果你还在判断这套平台到底是不是你需要的东西，建议先走公开体验路径，再决定是否继续注册、登录或进一步沟通场景。</p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Path B</p>
      <h2>你已经有本地脚本</h2>
      <p>手上已经有本地脚本目录时，重点应该放在 <code>execgov-cli</code> 当前已经打通到哪一步。</p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Path C</p>
      <h2>你要正式交付客户</h2>
      <p>如果你是带着客户项目、团队协作或交付需求来的，重点应该放在客户流程、部署方式和交付边界，而不是免费入口细节。</p>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Public Entry</p>
    <h2>当前公开可走的正式入口</h2>
    <table>
      <thead>
        <tr>
          <th>入口类型</th>
          <th>当前怎么理解</th>
          <th>适合谁</th>
          <th>下一步看哪里</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>公开体验链路</td>
          <td>现在可以直接从 <code>/experience</code>、<code>/login</code>、<code>/register</code> 进入体验和注册流程</td>
          <td>第一次接触平台的人</td>
          <td><a href="./getting-started.html">快速开始</a></td>
        </tr>
        <tr>
          <td>产品文档</td>
          <td>解释平台是什么、怎么交付、怎么部署、怎么演进</td>
          <td>产品、售前、技术负责人</td>
          <td><a href="../product/index.html">产品概览</a></td>
        </tr>
        <tr>
          <td>CLI 文档</td>
          <td>说明本地登录、能力接入、执行和 Agent 骨架的当前边界</td>
          <td>开发者、本地接入场景</td>
          <td><a href="../product/cli.html">CLI 指引</a></td>
        </tr>
        <tr>
          <td>客户交付文档</td>
          <td>说明客户怎么使用、平台怎么交付、脚本怎么热更新</td>
          <td>交付负责人、项目负责人</td>
          <td><a href="../product/customer-flow.html">客户流程 / 交付</a></td>
        </tr>
        <tr>
          <td>联系入口</td>
          <td>用于试用咨询、场景沟通和正式交付咨询</td>
          <td>需要继续推进的人</td>
          <td><a href="../contact.html#lead-form">联系与试用</a></td>
        </tr>
      </tbody>
    </table>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Role Based</p>
    <h2>不同角色，建议从哪里开始</h2>
    <div class="brand-grid brand-grid--four">
      <article class="brand-card brand-card--nested">
        <h3>个人开发者</h3>
        <p>先看快速开始，再看 CLI 指引，最后再判断是否需要更深的团队或企业路径。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>小团队负责人</h3>
        <p>先看产品概览和客户流程 / 交付，再决定是否需要演示或交付沟通。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>售前 / 方案人员</h3>
        <p>先看介绍资料，再回到产品概览、部署方式和客户流程，建立统一认知。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>企业客户</h3>
        <p>先看客户流程 / 交付和部署方式，再确认租户隔离、热更新和后续合作边界。</p>
      </article>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Reading Order</p>
    <h2>按目标进入</h2>
    <div class="brand-link-grid">
      <a class="brand-link-card" href="./getting-started.html">
        <span>Step 01</span>
        <strong>快速开始</strong>
        <p>先确认现在公开的正式入口、体验路径和当前可用的能力边界。</p>
      </a>
      <a class="brand-link-card" href="../product/index.html">
        <span>Step 02</span>
        <strong>产品概览</strong>
        <p>再理解平台是什么、适合什么场景，以及当前能提供哪些能力。</p>
      </a>
      <a class="brand-link-card" href="../product/customer-flow.html">
        <span>Step 03</span>
        <strong>客户流程 / 交付</strong>
        <p>客户怎么使用、平台怎么交付、脚本怎么热更新，可从这里集中查看。</p>
      </a>
      <a class="brand-link-card" href="../product/onboarding-checklist.html">
        <span>Step 04</span>
        <strong>客户接入准备清单</strong>
        <p>准备真实项目时，可把脚本目录、README、样例文件和边界信息一次准备清楚。</p>
      </a>
      <a class="brand-link-card" href="../product/file-results.html">
        <span>Step 05</span>
        <strong>文件上传 / 结果下载</strong>
        <p>任务依赖输入文件、结果文件或报表产物时，这页会比泛泛的产品说明更直接。</p>
      </a>
      <a class="brand-link-card" href="../product/cli.html">
        <span>Step 06</span>
        <strong>CLI 指引</strong>
        <p>已有本地脚本目录时，这页比泛泛介绍更有价值。</p>
      </a>
      <a class="brand-link-card" href="./faq.html">
        <span>Step 07</span>
        <strong>常见问题</strong>
        <p>把“是不是聊天系统、会不会串租户、能不能直接上线”这类问题一次看清。</p>
      </a>
      <a class="brand-link-card" href="../materials/index.html">
        <span>Step 08</span>
        <strong>介绍资料</strong>
        <p>介绍、讲解、演示或方案沟通需要的资料，可从这里继续查看。</p>
      </a>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Project Ready</p>
    <h2>进入真实项目时常看的资料</h2>
    <div class="brand-link-grid brand-link-grid--three">
      <a class="brand-link-card" href="../product/deliverables.html">
        <span>Deliverables</span>
        <strong>交付物 / 文档入口</strong>
        <p>先明确客户最终会拿到什么入口、什么说明、什么结果物，方便后续交付和使用。</p>
      </a>
      <a class="brand-link-card" href="../product/onboarding-checklist.html">
        <span>Checklist</span>
        <strong>客户接入准备清单</strong>
        <p>适合售前、实施和客户一起对齐脚本目录、README、样例文件、依赖和风险边界。</p>
      </a>
      <a class="brand-link-card" href="../product/file-results.html">
        <span>Files</span>
        <strong>文件上传 / 结果下载</strong>
        <p>项目属于文件型任务、报表型任务或结果产物型任务时，这页应提前查看，而不是上线后再补说明。</p>
      </a>
    </div>
  </section>

  <section class="brand-card brand-card--cta">
    <div class="brand-card__row">
      <div>
        <p class="brand-kicker">Next Step</p>
        <h2>想继续推进，就按你的目标选下一页</h2>
        <p class="brand-lead">先体验、先接 CLI、先做客户交付，这三条路都成立，但建议不要混着看。</p>
      </div>
      <div class="brand-link-grid brand-link-grid--compact">
        <a class="brand-link-card" href="./getting-started.html">
          <span>Guide</span>
          <strong>快速开始</strong>
        </a>
        <a class="brand-link-card" href="../product/customer-flow.html">
          <span>Delivery</span>
          <strong>客户流程 / 交付</strong>
        </a>
        <a class="brand-link-card" href="../product/onboarding-checklist.html">
          <span>Checklist</span>
          <strong>客户接入准备清单</strong>
        </a>
        <a class="brand-link-card" href="../product/cli.html">
          <span>CLI</span>
          <strong>CLI 指引</strong>
        </a>
        <a class="brand-link-card" href="../contact.html#lead-form">
          <span>Lead</span>
          <strong>联系与试用</strong>
        </a>
      </div>
    </div>
  </section>
</div>
