---
aside: false
outline: false
lastUpdated: false
---

<script setup>
import { reactive, ref } from 'vue'

const scriptLanguageOptions = ['Python', 'Shell', 'JavaScript / Node', 'SQL', 'VBA / Excel', '还没写脚本']
const weeklyTimeOptions = ['每周 < 1 小时', '每周 1-3 小时', '每周 3-8 小时', '每周 8-16 小时', '每周 16 小时以上']

const leadForm = reactive({
  name: '',
  companyName: '',
  title: '',
  contactPhone: '',
  contactEmail: '',
  demand: '',
  scriptLanguages: [],
  weeklyTime: '',
})

const submitting = ref(false)
const submitError = ref('')
const submitSuccess = ref('')

function normalized(value) {
  return String(value || '').trim()
}

function getLeadApiUrl() {
  if (typeof window !== 'undefined') {
    const hostname = String(window.location.hostname || '').toLowerCase()
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:6089/experience/lead'
    }
  }
  return 'https://execfabric.cn/prod-api/experience/lead'
}

function resetLeadForm() {
  leadForm.name = ''
  leadForm.companyName = ''
  leadForm.title = ''
  leadForm.contactPhone = ''
  leadForm.contactEmail = ''
  leadForm.demand = ''
  leadForm.scriptLanguages = []
  leadForm.weeklyTime = ''
}

function validateLeadForm() {
  if (!normalized(leadForm.name)) {
    return '请先填写怎么称呼你'
  }
  if (!normalized(leadForm.title)) {
    return '请先填写你的角色'
  }
  if (!normalized(leadForm.demand)) {
    return '请先写下 1 个最具体的自动化问题'
  }
  if (!leadForm.scriptLanguages.length) {
    return '请至少选择一种常用脚本语言'
  }
  if (!normalized(leadForm.weeklyTime)) {
    return '请先选择每周大概花费的时间'
  }
  if (!normalized(leadForm.contactPhone) && !normalized(leadForm.contactEmail)) {
    return '请至少填写手机号或邮箱'
  }
  return ''
}

async function submitLeadForm() {
  submitError.value = ''
  submitSuccess.value = ''

  const validationMessage = validateLeadForm()
  if (validationMessage) {
    submitError.value = validationMessage
    return
  }

  submitting.value = true
  try {
    const response = await fetch(getLeadApiUrl(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        ...leadForm,
        leadType: 'beta_intake',
        source: 'docs_execfabric_contact',
        path: '/contact',
      }),
    })
    const payload = await response.json().catch(() => ({}))
    if (!response.ok || Number(payload.code) != 200) {
      throw new Error(String(payload?.msg || '提交失败，请稍后重试'))
    }

    const customerId = payload?.data?.customerId
    submitSuccess.value = customerId
      ? `表单已提交，已进入我们的后台线索库（编号 ${customerId}）。`
      : String(payload?.msg || '表单已提交，已进入我们的后台线索库。')
    resetLeadForm()
  } catch (error) {
    submitError.value = error instanceof Error ? error.message : '提交失败，请稍后重试'
  } finally {
    submitting.value = false
  }
}
</script>

<div class="brand-page-shell brand-page-shell--contact">
  <section class="brand-hero brand-hero--contact">
    <div>
      <p class="brand-kicker">Lead Entry</p>
      <h1>线索分流与咨询</h1>
      <div class="brand-hero__panel">
        <span class="brand-pill">Founder Signal</span>
        <strong>提交线索前，先判断你当前更像免费线体验、内测资格申请、正式团队协作，还是企业项目交付。</strong>
        <p>如果你已经有一个最具体的自动化问题，优先走内测资格页；如果你已经要谈交付边界、部署方式和预算，再走合作线索页。</p>
      </div>
      <p class="brand-lead">
        面向高频重复流程自动化、已有脚本治理、文件与数据处理、小型正式交付和选择性私有化场景，
        当前承接免费线判断、本地脚本位增购判断、团队版路径判断和企业版咨询。
      </p>
      <div class="brand-chip-list">
        <span class="brand-chip">免费线判断</span>
        <span class="brand-chip">内测资格申请</span>
        <span class="brand-chip">本地脚本位增购</span>
        <span class="brand-chip">团队版方案入口</span>
        <span class="brand-chip">小型私有化咨询</span>
        <span class="brand-chip">脚本治理 / 文件处理</span>
      </div>
      <div class="brand-actions">
        <a class="cta-button cta-button--brand" href="#lead-form">申请内测资格</a>
        <a class="cta-button" href="#lead-form">提交需求表单</a>
        <a class="cta-button" href="./materials/service-packages.html">查看当前可承接服务</a>
        <a class="cta-button" href="./product/implementation-training.html">看培训与实施安排</a>
        <a class="cta-button" href="./materials/founder-profile.html">查看构建者背景</a>
        <a class="cta-button" href="./product/">先看产品概览</a>
        <a class="cta-button" href="https://github.com/zmx2321" target="_blank" rel="noreferrer">查看 GitHub</a>
      </div>
      <div class="contact-node-grid contact-hero-grid">
        <article class="brand-hero__panel contact-node-card">
          <span class="link-panel-label">Good Fit</span>
          <strong>更适合已经有脚本、流程或内网接入诉求的团队</strong>
          <p>如果你要判断权限边界、执行留痕、本地接入或正式交付怎么收口，这里会比继续抽象讨论更有效。</p>
        </article>
        <article class="brand-hero__panel contact-node-card">
          <span class="link-panel-label">What You Get</span>
          <strong>沟通后会更快判断该先走免费线、先扩容、先走标准团队版，还是直接进入企业交付</strong>
          <p>重点是尽快明确下一步入口、准备材料和第一阶段怎么启动。</p>
        </article>
      </div>
    </div>
    <div class="brand-hero__media brand-hero__media--compact">
      <div class="matrix-panel matrix-panel--contact">
        <div class="matrix-panel__hud">
          <span>EXECFABRIC // CONTACT NODE</span>
          <span>OPEN</span>
        </div>
        <div class="matrix-panel__canvas">
          <div class="matrix-panel__trace matrix-panel__trace--top"></div>
          <div class="matrix-panel__trace matrix-panel__trace--mid"></div>
          <div class="matrix-panel__trace matrix-panel__trace--bottom"></div>
          <div class="matrix-panel__stack">
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">leadEntry</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'free_line'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'local_slots'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'team_saas'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'enterprise_delivery'</span><span class="matrix-panel__punct">]</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">contactMail</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__string">'zmx2321@163.com'</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">focus</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'delivery'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'product'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'private deployment'</span><span class="matrix-panel__punct">]</span></span>
          </div>
          <div class="matrix-panel__callout">reply-window: async but stable</div>
        </div>
        <div class="matrix-panel__footer">
          <span class="matrix-panel__tag"><span class="matrix-panel__key">status</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">open</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">mode</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">lead intake</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">docs</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">public entry</span></span>
        </div>
      </div>
      <div class="contact-node-grid">
        <article class="brand-hero__panel contact-node-card">
          <span class="link-panel-label">Reply Path</span>
          <strong>先留场景，再进入四层对应跟进</strong>
          <p>会按免费线判断、本地脚本位、团队版路径判断和企业咨询四个方向继续跟进，不会在第一轮就把问题谈得过宽。</p>
        </article>
        <article class="brand-hero__panel contact-node-card">
          <span class="link-panel-label">Before Send</span>
          <strong>优先准备这三类信息</strong>
          <p>脚本或流程类型、预计使用人数，以及是否涉及内网、本地执行或私有化部署。</p>
        </article>
      </div>
    </div>
  </section>

  <section class="brand-grid brand-grid--three">
    <article class="brand-card">
      <p class="brand-kicker">Good Fit</p>
      <h2>这些情况更适合继续沟通</h2>
      <ul class="brand-list">
        <li>团队里已经有脚本、定时任务或文件流程，需要统一入口和权限边界</li>
        <li>希望确认执行留痕、结果回传、本地接入或私有化边界</li>
        <li>希望先判断第一阶段怎么启动、需要准备哪些环境和交付输入</li>
        <li>需要基于真实场景评估是走标准路径还是正式项目交付</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Current Entry</p>
      <h2>公开体验入口后的下一步</h2>
      <ul class="brand-list">
        <li>你已经可以先运行公开体验入口，快速感受一次“AI 调度脚本”的完整链路。</li>
        <li>如果你想继续自己接脚本，下一步直接注册进入个人智能执行台。</li>
        <li>如果只是个人持续使用但还没进入正式协作，优先判断是否只需要本地脚本位扩容。</li>
        <li>如果你更关心多人协作、权限审计或本地接入，先判断是标准团队版还是企业交付，再进入沟通。</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Before Contact</p>
      <h2>沟通前建议准备这些信息</h2>
      <ul class="brand-list">
        <li>你想让 AI 调度哪类脚本、流程或数据任务。</li>
        <li>是否需要多人协作、审批、权限控制或执行审计。</li>
        <li>是否涉及本地环境、内网资源或私有化部署要求。</li>
        <li>你更希望先走免费线、先扩容个人空间、先走团队版，还是直接沟通企业方案。</li>
      </ul>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Lead Split</p>
    <h2>提交线索前，先判断你属于哪一类</h2>
    <table>
      <thead>
        <tr>
          <th>你现在的状态</th>
          <th>更适合的下一步</th>
          <th>为什么</th>
          <th>建议入口</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>第一次接触平台，只想先感知产品</td>
          <td>先走免费线</td>
          <td>先确认这是不是值得继续了解的平台，不急着进入项目沟通</td>
          <td><a href="https://execfabric.cn/">快速开始</a></td>
        </tr>
        <tr>
          <td>已经有一个非常具体的自动化问题，愿意先做首轮验证</td>
          <td>先申请内测资格</td>
          <td>结构化收集会比泛化咨询更容易判断适配度、优先级和第一步</td>
          <td><a href="#lead-form">申请内测资格</a></td>
        </tr>
        <tr>
          <td>已经在个人空间持续接脚本，但还没进入多人协作</td>
          <td>先判断本地脚本位是否需要扩容</td>
          <td>这属于个人轻量增购，不等于正式团队租户</td>
          <td><a href="./materials/membership-benefits-pricing.html">会员权益与价格说明</a></td>
        </tr>
        <tr>
          <td>准备进入多人协作、正式账号和更稳定周期</td>
          <td>先走团队版月租 / 年租方案入口</td>
          <td>当前标准团队版由共享 SaaS 前端承接，先判断标准路径和开通方式是否够用</td>
          <td><a href="./product/personal-billing-membership.html">支付与会员说明</a> / <a href="./product/team-tenant-payment.html">标准租户支付说明</a></td>
        </tr>
        <tr>
          <td>涉及内网、本地桥接、更强隔离或正式项目验收</td>
          <td>直接进入企业项目 / 私有化沟通</td>
          <td>这类问题重点是部署、交付边界和治理要求，不是标准会员页</td>
          <td><a href="./materials/service-packages.html">启动方式 / 服务包</a> / <a href="./product/deployment.html">部署方式</a></td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="lead-form" class="brand-grid brand-grid--two">
    <article class="brand-card brand-card--lead-form">
      <p class="brand-kicker">Direct Submit</p>
      <h2>官网内测 / 需求表单</h2>
      <p class="brand-lead">
        现在可以直接在官网提交表单，内容会直接进入我们的后台 public 库，不再依赖邮件客户端或第三方表单中转。
        如果你已经有一个明确问题，优先在这里留下信息。
      </p>
      <form class="docs-lead-form" data-testid="docs-lead-form" @submit.prevent="submitLeadForm">
        <div class="docs-lead-form__row docs-lead-form__row--two">
          <label class="docs-lead-form__field">
            <span>怎么称呼你</span>
            <input v-model="leadForm.name" type="text" autocomplete="name" placeholder="例如：张三" />
          </label>
          <label class="docs-lead-form__field">
            <span>角色</span>
            <input v-model="leadForm.title" type="text" placeholder="例如：开发、运营、技术负责人" />
          </label>
        </div>
        <div class="docs-lead-form__row docs-lead-form__row--two">
          <label class="docs-lead-form__field">
            <span>公司 / 团队</span>
            <input v-model="leadForm.companyName" type="text" placeholder="例如：某数据团队，可不填" />
          </label>
          <label class="docs-lead-form__field">
            <span>手机号或微信</span>
            <input v-model="leadForm.contactPhone" type="text" inputmode="tel" placeholder="例如：13800000000" />
          </label>
        </div>
        <label class="docs-lead-form__field">
          <span>邮箱（手机号和邮箱二选一即可）</span>
          <input v-model="leadForm.contactEmail" type="email" autocomplete="email" placeholder="例如：you@example.com" />
        </label>
        <label class="docs-lead-form__field">
          <span>你最想解决的 1 个具体自动化问题</span>
          <textarea v-model="leadForm.demand" rows="5" placeholder="例如：每周要手工整理多个 CSV 报表，再发一封固定格式的汇总邮件"></textarea>
        </label>
        <fieldset class="docs-lead-form__group">
          <legend>常用脚本语言</legend>
          <div class="docs-lead-form__choice-grid">
            <label v-for="item in scriptLanguageOptions" :key="item" class="docs-choice-chip">
              <input v-model="leadForm.scriptLanguages" type="checkbox" :value="item" />
              <span>{{ item }}</span>
            </label>
          </div>
        </fieldset>
        <fieldset class="docs-lead-form__group">
          <legend>每周大概花多少时间在这类问题上</legend>
          <div class="docs-lead-form__choice-grid">
            <label v-for="item in weeklyTimeOptions" :key="item" class="docs-choice-chip docs-choice-chip--radio">
              <input v-model="leadForm.weeklyTime" type="radio" name="weeklyTime" :value="item" />
              <span>{{ item }}</span>
            </label>
          </div>
        </fieldset>
        <div class="docs-lead-form__actions">
          <button class="cta-button cta-button--brand" data-testid="docs-lead-submit" type="submit" :disabled="submitting">
            {{ submitting ? '提交中...' : '提交内测 / 需求表单' }}
          </button>
          <span class="docs-lead-form__note">至少填写称呼、角色、1 个具体问题，以及手机号或邮箱中的任意一个。</span>
        </div>
        <p v-if="submitError" data-testid="docs-lead-feedback" class="docs-lead-form__feedback docs-lead-form__feedback--error">{{ submitError }}</p>
        <p v-if="submitSuccess" data-testid="docs-lead-feedback" class="docs-lead-form__feedback docs-lead-form__feedback--success">{{ submitSuccess }}</p>
      </form>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Route Guide</p>
      <h2>从官网进入后，会怎样分流</h2>
      <ul class="brand-list">
        <li>只想先感受产品：可以继续去免费线体验页。</li>
        <li>已经有一个明确问题：直接在当前页提交内测 / 需求表单。</li>
        <li>已经接近正式合作：也先用当前表单把场景收口，再继续沟通交付边界。</li>
        <li>需要脚本治理、本地接入、团队协作或企业交付：都可以先从这个表单统一入库。</li>
      </ul>
      <p class="brand-kicker">What To Prepare</p>
      <ul class="brand-list">
        <li>公司 / 角色，或者至少说明你是谁、在什么上下文里提这个问题。</li>
        <li>一个最具体的自动化问题，而不是一串宽泛设想。</li>
        <li>常用脚本语言，以及每周会为它花多少时间。</li>
        <li>如果已经知道要多人协作、本地接入或私有化，也请一并写上。</li>
      </ul>
      <div class="brand-grid brand-grid--two">
        <article class="brand-card brand-card--nested">
          <p class="brand-kicker">First Message</p>
          <h3>优先把最痛的一条流程说清楚</h3>
          <p>比起泛泛介绍团队情况，更有价值的是先说明当前最痛的任务链路、输入输出和频率。</p>
        </article>
        <article class="brand-card brand-card--nested">
          <p class="brand-kicker">Decision</p>
          <h3>先判断是否值得启动第一步</h3>
          <p>通常会先收口一个最小闭环，确认是否真的省时间、是否能稳定交付，再决定是否进入第二阶段。</p>
        </article>
      </div>
      <p class="lead-form-note">
        当前官网表单提交后会直接写入我们的后台 public 库，并带上来源页与场景字段，后续跟进不再要求你配置邮件客户端。
      </p>
      <div class="brand-actions">
        <a class="cta-button" href="https://execfabric.cn/#/experience">先看免费线体验</a>
        <a class="cta-button" href="https://execfabric.cn/">进入个人免费入口</a>
      </div>
    </article>
  </section>

  <section class="brand-grid brand-grid--four contact-path-grid">
    <article class="brand-card">
      <p class="brand-kicker">Path 01</p>
      <h2>个人体验 / 智能执行台</h2>
      <p>先让开发者和个体用户以更低门槛感知价值，再决定是否把自己的脚本正式接入执行台。</p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Path 02</p>
      <h2>个人继续使用 / 本地脚本位</h2>
      <p>适合已经在个人空间持续接脚本，但还没有进入多人正式协作的人。重点是扩容个人脚本位，不把它讲成正式团队版。</p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Path 03</p>
      <h2>团队版 SaaS</h2>
      <p>承接多人协作、共享执行能力、审批、权限控制和更稳定的产品订阅。当前优先走标准 SaaS 正式租户入口，由共享 SaaS 前端承接；如果需要更强隔离或更深定制，再转企业版 / 私有化。</p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Path 04</p>
      <h2>正式项目 / 私有化</h2>
      <p>承接更高隔离、更高安全要求、内网、本地 Agent 和正式交付需求，但只适合边界清晰的项目。</p>
    </article>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Current Cooperation</p>
      <h2>当前更适合优先沟通的合作类型</h2>
      <ul class="brand-list">
        <li>先把一个重复流程做成最小自动化交付</li>
        <li>把已有 Python 脚本或 Skill 接入统一执行入口</li>
        <li>承接团队版 / 企业版试点、正式交付和私有轻部署</li>
        <li>帮助判断是先走共享 SaaS 正式租户路径，还是直接进入企业交付</li>
        <li>本地脚本、CLI、本地环境桥接和受控执行方案</li>
      </ul>
      <p><a href="./materials/service-packages.html">查看合作方式 / 标准服务包</a></p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">How To Start</p>
      <h2>最推荐的起步方式</h2>
      <ul class="brand-list">
        <li>优先提供一个最痛、最重复、规则相对明确的流程</li>
        <li>先按一个点收口范围，不建议一开始就按大而全的项目方式推进</li>
        <li>先把第一步跑通，再决定是否继续扩第二阶段</li>
        <li>如果还不确定值不值得做，也可以先做最小范围判断</li>
      </ul>
    </article>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Founder Background</p>
      <h2>交付背景与公开资料</h2>
      <ul class="brand-list">
        <li>长期主线是前端、GIS 可视化和政企交付。</li>
        <li>近两年持续补强 Python 自动化、数据处理和中小型后台支撑。</li>
        <li>当前做 璇络(ExecFabric)，不是停留在泛泛地讲 AI，而是想把脚本接入、权限边界、执行留痕和本地桥接做成真正能交付的产品。</li>
      </ul>
      <p><a href="./materials/founder-profile.html">查看交付背景与项目经历</a></p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Public Proof</p>
      <h2>公开可查看的内容</h2>
      <ul class="brand-list">
        <li>GitHub 公开仓库和工程结构</li>
        <li>博客里的项目记录和思考</li>
        <li>文档站里对产品、交付、合作方式的公开说明</li>
        <li>持续更新中的 璇络(ExecFabric) 文档和前端入口</li>
      </ul>
    </article>
  </section>

  <section class="brand-card contact-channels-card">
    <p class="brand-kicker">Channels</p>
    <h2>备用联系方式与公开入口</h2>
    <div class="brand-link-grid">
      <a class="brand-link-card" href="https://execfabric.cn/">
        <span>产品入口</span>
        <strong>execfabric.cn</strong>
        <p>现在优先从登录 / 注册页或免费线体验页提交需求，直接入库。</p>
      </a>
      <a class="brand-link-card" href="https://github.com/zmx2321" target="_blank" rel="noreferrer">
        <span>GitHub</span>
        <strong>zmx2321</strong>
        <p>查看公开仓库、代码风格和工程完成度。</p>
      </a>
      <a class="brand-link-card" href="https://github.com/zmx2321/exec-fabric-ai-skill-platform-doc" target="_blank" rel="noreferrer">
        <span>文档仓库</span>
        <strong>exec-fabric-ai-skill-platform-doc</strong>
        <p>查看当前文档站页面、样式和部署配置。</p>
      </a>
      <a class="brand-link-card" href="https://zmx2321.github.io/vite-blog" target="_blank" rel="noreferrer">
        <span>博客</span>
        <strong>vite-blog</strong>
        <p>继续了解项目记录、思考和公开文章。</p>
      </a>
    </div>
  </section>

  <section class="brand-card brand-card--cta">
    <div class="brand-card__row">
      <div>
        <p class="brand-kicker">Next Read</p>
        <h2>继续了解平台与交付资料</h2>
        <p class="brand-lead">可先查看产品概览、CLI 指引、核心能力和版本阶段与升级路径，再结合具体问题进入沟通。</p>
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
        <a class="brand-link-card" href="./product/customer-flow.html">
          <span>Delivery</span>
          <strong>客户交付与使用说明</strong>
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
          <strong>版本阶段与升级路径</strong>
        </a>
      </div>
    </div>
  </section>
</div>

<style scoped>
.brand-card--lead-form {
  background: linear-gradient(160deg, rgba(13, 148, 136, 0.12), rgba(14, 116, 144, 0.08));
}

.docs-lead-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
}

.docs-lead-form__row {
  display: grid;
  gap: 14px;
}

.docs-lead-form__row--two {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.docs-lead-form__field,
.docs-lead-form__group {
  display: block;
}

.docs-lead-form__field span,
.docs-lead-form__group legend {
  display: block;
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 700;
  color: var(--vp-c-text-2);
}

.docs-lead-form__field input,
.docs-lead-form__field textarea {
  width: 100%;
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 14px;
  padding: 12px 14px;
  font: inherit;
  color: var(--vp-c-text-1);
  background: rgba(255, 255, 255, 0.82);
  box-sizing: border-box;
}

.dark .docs-lead-form__field input,
.dark .docs-lead-form__field textarea {
  background: rgba(15, 23, 42, 0.78);
  border-color: rgba(148, 163, 184, 0.24);
}

.docs-lead-form__field input:focus,
.docs-lead-form__field textarea:focus {
  outline: 2px solid rgba(13, 148, 136, 0.24);
  outline-offset: 1px;
  border-color: rgba(13, 148, 136, 0.48);
}

.docs-lead-form__field textarea {
  resize: vertical;
  min-height: 132px;
}

.docs-lead-form__group {
  margin: 0;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 18px;
  padding: 14px;
  background: rgba(255, 255, 255, 0.56);
}

.dark .docs-lead-form__group {
  background: rgba(15, 23, 42, 0.52);
  border-color: rgba(148, 163, 184, 0.18);
}

.docs-lead-form__choice-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.docs-choice-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(15, 23, 42, 0.1);
  border-radius: 999px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.76);
  color: var(--vp-c-text-1);
}

.dark .docs-choice-chip {
  background: rgba(15, 23, 42, 0.8);
  border-color: rgba(148, 163, 184, 0.2);
}

.docs-choice-chip input {
  margin: 0;
}

.docs-lead-form__actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.docs-lead-form__actions .cta-button[disabled] {
  opacity: 0.72;
  cursor: wait;
}

.docs-lead-form__note {
  color: var(--vp-c-text-2);
  font-size: 13px;
}

.docs-lead-form__feedback {
  margin: 0;
  padding: 12px 14px;
  border-radius: 14px;
  font-size: 14px;
}

.docs-lead-form__feedback--error {
  background: rgba(220, 38, 38, 0.1);
  color: #b91c1c;
}

.docs-lead-form__feedback--success {
  background: rgba(13, 148, 136, 0.12);
  color: #0f766e;
}

.lead-form-note {
  margin-top: 18px;
}

@media (max-width: 768px) {
  .docs-lead-form__row--two {
    grid-template-columns: 1fr;
  }

  .docs-lead-form__actions {
    align-items: stretch;
  }

  .docs-lead-form__actions .cta-button {
    width: 100%;
    justify-content: center;
  }
}
</style>
