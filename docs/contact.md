---
aside: false
outline: false
lastUpdated: false
---

<div class="brand-page-shell brand-page-shell--contact">
  <section class="brand-hero brand-hero--contact">
    <div>
      <p class="brand-kicker">Lead Entry</p>
      <h1>联系我，直接提交试用 / 咨询线索</h1>
      <p class="brand-lead">
        如果你在做企业业务自动化、平台化交付、私有部署，或者希望把已有脚本和流程升级成可治理的执行平台，
        这里直接承接免费线索、团队版演示预约和企业版咨询。
      </p>
      <div class="brand-chip-list">
        <span class="brand-chip">免费试用申请</span>
        <span class="brand-chip">团队版演示预约</span>
        <span class="brand-chip">企业版 / 私有化咨询</span>
        <span class="brand-chip">本地脚本、CLI 与模板方案</span>
      </div>
      <div class="brand-actions">
        <a class="cta-button cta-button--brand" href="#lead-form">填写线索表单</a>
        <a class="cta-button" href="./product/">先看产品概览</a>
        <a class="cta-button" href="https://github.com/zmx2321" target="_blank" rel="noreferrer">查看 GitHub</a>
      </div>
    </div>
    <div class="brand-hero__media brand-hero__media--compact">
      <div class="matrix-panel matrix-panel--contact">
        <div class="matrix-panel__hud">
          <span>SMARTFLOW // CONTACT NODE</span>
          <span>OPEN</span>
        </div>
        <div class="matrix-panel__canvas">
          <div class="matrix-panel__trace matrix-panel__trace--top"></div>
          <div class="matrix-panel__trace matrix-panel__trace--mid"></div>
          <div class="matrix-panel__trace matrix-panel__trace--bottom"></div>
          <div class="matrix-panel__stack">
            <span>lead_entry: free_trial / team_demo / enterprise_consulting</span>
            <span>mail: zmx2321@163.com</span>
            <span>focus: delivery / product / private deployment</span>
          </div>
          <div class="matrix-panel__callout">reply-window: async but stable</div>
        </div>
        <div class="matrix-panel__footer">
          <span>status: open</span>
          <span>mode: lead intake</span>
          <span>docs: public entry</span>
        </div>
      </div>
      <div class="brand-hero__panel">
        <span class="brand-pill">Founder Signal</span>
        <strong>由一位 10+ 年政企交付经验的独立架构师持续打造</strong>
        <p>当前项目已经具备多租户治理、可信执行、免费入口和 CLI 演进路径，不是单页概念稿。</p>
      </div>
    </div>
  </section>

  <section id="lead-form" class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Lead Form</p>
      <h2>提交试用 / 咨询线索</h2>
      <p class="brand-lead">
        至少留下姓名、需求描述和一种联系方式，我就能开始跟进。这个表单会调用你的默认邮件客户端发送到我的邮箱。
      </p>
      <form
        class="lead-form"
        action="mailto:zmx2321@163.com?subject=SmartFlow%20Lead"
        method="post"
        enctype="text/plain"
        accept-charset="UTF-8"
      >
        <input type="hidden" name="source" value="smartflow_docs_contact" />
        <div class="lead-form-grid">
          <label class="lead-field">
            <span>姓名</span>
            <input name="name" type="text" placeholder="例如：张三" required />
          </label>
          <label class="lead-field">
            <span>公司</span>
            <input name="company" type="text" placeholder="例如：某数据科技公司" />
          </label>
          <label class="lead-field">
            <span>职位</span>
            <input name="title" type="text" placeholder="例如：技术负责人 / 运营经理" />
          </label>
          <label class="lead-field">
            <span>联系邮箱</span>
            <input name="email" type="email" placeholder="请填写常用邮箱" />
          </label>
          <label class="lead-field">
            <span>手机号</span>
            <input name="phone" type="text" placeholder="请填写手机号或微信号" />
          </label>
          <label class="lead-field">
            <span>预算范围（可选）</span>
            <select name="budget">
              <option value="">请选择预算范围</option>
              <option value="under_5k">5k 以内</option>
              <option value="5k_to_10k">5k - 1w</option>
              <option value="10k_to_30k">1w - 3w</option>
              <option value="30k_plus">3w 以上 / 私有化单议</option>
            </select>
          </label>
        </div>
        <label class="lead-field">
          <span>需求描述</span>
          <textarea
            name="demand"
            rows="6"
            placeholder="请说明你的脚本场景、使用人数、是否需要内网/私有化、本地 Agent、数据源类型等"
            required
          ></textarea>
        </label>
        <div class="lead-form-actions">
          <button class="cta-button cta-button--brand" type="submit">提交线索</button>
          <a class="cta-button" href="mailto:zmx2321@163.com?subject=SmartFlow%20Lead">直接发邮件</a>
        </div>
      </form>
      <p class="lead-form-note">
        如果当前设备没有默认邮件客户端，可以直接发邮件到
        <a href="mailto:zmx2321@163.com">zmx2321@163.com</a>
        ，或通过 GitHub 联系我。
      </p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Topics</p>
      <h2>适合继续聊的事情</h2>
      <ul class="brand-list">
        <li>企业级自动化与 AI 执行平台交付</li>
        <li>团队版 / 企业版的能力规划与落地路径</li>
        <li>私有化部署、数据自动化与本地执行方案</li>
        <li>脚本整理、Skill 接入、CLI / Agent 桥接能力</li>
      </ul>
      <p class="brand-kicker">What To Prepare</p>
      <ul class="brand-list">
        <li>脚本语言、依赖环境、运行频率和输入输出方式</li>
        <li>大概使用人数，是个人、小团队还是正式客户项目</li>
        <li>是否需要本地执行、内网访问、数据库连接或私有化部署</li>
        <li>你更想先试用、先演示，还是直接推进正式合作</li>
      </ul>
    </article>
  </section>

  <section class="brand-grid brand-grid--three contact-path-grid">
    <article class="brand-card">
      <p class="brand-kicker">Path 01</p>
      <h2>免费版 / 社区技能</h2>
      <p>先让开发者和个体用户低门槛感知价值，沉淀真实脚本样本和生态入口。</p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Path 02</p>
      <h2>团队版 SaaS</h2>
      <p>承接多人协作、共享技能、审批、权限控制和更稳定的产品订阅，是当前最值得重点转化的一条线。</p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Path 03</p>
      <h2>企业版 / 私有化</h2>
      <p>承接更重的隔离、安全、内网、本地 Agent 和正式交付需求，建立更高端的专业可信形象。</p>
    </article>
  </section>

  <section class="brand-card contact-channels-card">
    <p class="brand-kicker">Channels</p>
    <h2>备用联系方式与公开入口</h2>
    <div class="brand-link-grid">
      <a class="brand-link-card" href="mailto:zmx2321@163.com">
        <span>邮箱</span>
        <strong>zmx2321@163.com</strong>
        <p>适合直接发需求、合作意向和项目背景。</p>
      </a>
      <a class="brand-link-card" href="https://github.com/zmx2321" target="_blank" rel="noreferrer">
        <span>GitHub</span>
        <strong>zmx2321</strong>
        <p>查看公开仓库、代码风格和工程完成度。</p>
      </a>
      <a class="brand-link-card" href="https://github.com/zmx2321/smart-flow-ai-skill-platform-doc" target="_blank" rel="noreferrer">
        <span>文档仓库</span>
        <strong>smart-flow-ai-skill-platform-doc</strong>
        <p>查看当前文档站页面、样式和部署配置。</p>
      </a>
      <a class="brand-link-card" href="https://zmx2321.github.io/vite-blog" target="_blank" rel="noreferrer">
        <span>我的博客</span>
        <strong>vite-blog</strong>
        <p>继续了解项目记录、思考和公开文章。</p>
      </a>
    </div>
  </section>

  <section class="brand-card brand-card--cta">
    <div class="brand-card__row">
      <div>
        <p class="brand-kicker">Next Read</p>
        <h2>如果你想先了解平台，再决定是否继续交流</h2>
        <p class="brand-lead">建议先看产品概览、CLI 指引、核心能力和版本路线，再带着具体问题来聊，会更高效。</p>
      </div>
      <div class="brand-link-grid brand-link-grid--compact">
        <a class="brand-link-card" href="./product/">
          <span>Product</span>
          <strong>产品概览</strong>
        </a>
        <a class="brand-link-card" href="./product/cli.html">
          <span>CLI</span>
          <strong>CLI 指引</strong>
        </a>
        <a class="brand-link-card" href="./product/capabilities.html">
          <span>Capabilities</span>
          <strong>核心能力</strong>
        </a>
        <a class="brand-link-card" href="./product/architecture.html">
          <span>Architecture</span>
          <strong>架构说明</strong>
        </a>
        <a class="brand-link-card" href="./product/editions.html">
          <span>Roadmap</span>
          <strong>版本路线</strong>
        </a>
      </div>
    </div>
  </section>
</div>
