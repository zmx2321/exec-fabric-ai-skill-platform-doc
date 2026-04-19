---
aside: false
outline: false
lastUpdated: false
---

<script setup>
import { reactive, ref } from 'vue'

const scriptLanguageOptions = ['Python', 'Shell', 'JavaScript / Node', 'SQL', 'VBA / Excel', "I don't write scripts yet"]
const weeklyTimeOptions = ['< 1 hour/week', '1-3 hours/week', '3-8 hours/week', '8-16 hours/week', '16+ hours/week']

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
    return 'Please enter how we should address you'
  }
  if (!normalized(leadForm.title)) {
    return 'Please enter your role'
  }
  if (!normalized(leadForm.demand)) {
    return 'Please describe one specific automation problem'
  }
  if (!leadForm.scriptLanguages.length) {
    return 'Please choose at least one scripting language'
  }
  if (!normalized(leadForm.weeklyTime)) {
    return 'Please choose the weekly time cost'
  }
  if (!normalized(leadForm.contactPhone) && !normalized(leadForm.contactEmail)) {
    return 'Please leave either a phone/WeChat contact or an email'
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
        source: 'docs_execfabric_contact_en',
        path: '/en/contact',
      }),
    })
    const payload = await response.json().catch(() => ({}))
    if (!response.ok || Number(payload.code) != 200) {
      throw new Error(String(payload?.msg || 'Submission failed. Please try again later.'))
    }

    const customerId = payload?.data?.customerId
    submitSuccess.value = customerId
      ? `The form was submitted and entered our backend lead database (ID ${customerId}).`
      : String(payload?.msg || 'The form was submitted and entered our backend lead database.')
    resetLeadForm()
  } catch (error) {
    submitError.value = error instanceof Error ? error.message : 'Submission failed. Please try again later.'
  } finally {
    submitting.value = false
  }
}
</script>

<div class="brand-page-shell brand-page-shell--contact">
  <section class="brand-hero brand-hero--contact">
    <div>
      <p class="brand-kicker">Lead Entry</p>
      <h1>Lead Routing & Contact</h1>
      <div class="brand-hero__panel">
        <span class="brand-pill">Founder Signal</span>
        <strong>Before submitting a lead, first decide whether you are closer to the free path, a beta application, formal team collaboration, or enterprise delivery.</strong>
        <p>If you already have one concrete automation problem, the beta page is usually the better first step. If you are already discussing delivery boundaries, deployment, or budget, use the formal lead path.</p>
      </div>
      <p class="brand-lead">
        For enterprise automation, platform-style delivery, private deployment, and governance upgrades around existing scripts and workflows,
        this page currently routes free-path evaluation, local script-slot expansion, team-edition decisions, and enterprise consultation.
      </p>
      <div class="brand-chip-list">
        <span class="brand-chip">Free-path evaluation</span>
        <span class="brand-chip">Beta application</span>
        <span class="brand-chip">Local script-slot expansion</span>
        <span class="brand-chip">Team-edition entry</span>
        <span class="brand-chip">Enterprise / private deployment</span>
        <span class="brand-chip">Local scripts, CLI, and templates</span>
      </div>
      <div class="brand-actions">
        <a class="cta-button cta-button--brand" href="/en/contact.html#lead-form">Apply for Beta</a>
        <a class="cta-button" href="/en/contact.html#lead-form">Submit a cooperation lead</a>
        <a class="cta-button" href="./materials/service-packages.html">View service packages</a>
        <a class="cta-button" href="./materials/founder-profile.html">View founder background</a>
        <a class="cta-button" href="./product/">View Product Overview</a>
        <a class="cta-button" href="https://github.com/zmx2321" target="_blank" rel="noreferrer">View GitHub</a>
      </div>
      <div class="contact-node-grid contact-hero-grid">
        <article class="brand-hero__panel contact-node-card">
          <span class="link-panel-label">Good Fit</span>
          <strong>Best for teams that already have scripts, workflows, or local-bridge needs</strong>
          <p>If you need to decide how permission boundaries, execution audit trails, local integration, or formal delivery should be handled, this page is more useful than another abstract discussion.</p>
        </article>
        <article class="brand-hero__panel contact-node-card">
          <span class="link-panel-label">What You Get</span>
          <strong>After contact, the next step becomes clearer: stay on the free path, expand local slots, move into the standard team edition, or go directly into enterprise delivery</strong>
          <p>The point is not to retell a broad platform story. The point is to clarify the next entry, the required preparation, and the first governed sample you should launch.</p>
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
          <strong>Leave the scenario first, then continue through the matching one of the four paths</strong>
          <p>Follow-up is split into free-path evaluation, local script slots, team-edition qualification, and enterprise consultation instead of collapsing into one oversized project conversation from the beginning.</p>
        </article>
        <article class="brand-hero__panel contact-node-card">
          <span class="link-panel-label">Before Send</span>
          <strong>Prepare these three kinds of information first</strong>
          <p>The script or workflow type, the expected number of users, and whether intranet, local execution, or private deployment is involved.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="brand-grid brand-grid--three">
    <article class="brand-card">
      <p class="brand-kicker">Good Fit</p>
      <h2>Scenarios worth discussing now</h2>
      <ul class="brand-list">
        <li>Best for teams that already have scripts, scheduled jobs, file workflows, or local-bridge requirements</li>
        <li>Useful when you need to clarify execution traceability, result return, intranet access, or private-deployment boundaries</li>
        <li>Suitable when you want to decide how phase one should start and what environment or delivery inputs should be prepared</li>
        <li>Best when a real scenario should determine whether the standard path is enough or formal delivery is needed</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Current Entry</p>
      <h2>The next step after the public experience entry</h2>
      <ul class="brand-list">
        <li>You can already run the public experience flow first and feel one full "AI schedules a script" chain.</li>
        <li>If you want to keep onboarding scripts yourself, the next step is to register and enter the personal execution console.</li>
        <li>If you are still an individual user and have not entered formal collaboration yet, first decide whether you only need local script-slot expansion.</li>
        <li>If your focus is multi-user collaboration, permission audit, or local bridging, first determine whether the standard team edition is enough or whether this should move directly into enterprise delivery.</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Before Contact</p>
      <h2>Information worth preparing before you reach out</h2>
      <ul class="brand-list">
        <li>What kinds of scripts, workflows, or data tasks you want AI to orchestrate</li>
        <li>Whether you need multi-user collaboration, approval, permission control, or execution auditing</li>
        <li>Whether local environments, intranet resources, or private deployment are involved</li>
        <li>Whether you want to stay on the free path, expand personal space, move into the team edition, or discuss an enterprise plan immediately</li>
      </ul>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Lead Split</p>
    <h2>Before submitting a lead, decide which category you belong to</h2>
    <table>
      <thead>
        <tr>
          <th>Your current state</th>
          <th>Best-fit next step</th>
          <th>Why</th>
          <th>Suggested entry</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>You are touching the platform for the first time and only want to sense the product</td>
          <td>Start with the free path</td>
          <td>First confirm whether this is even worth understanding further. There is no need to jump into project discussion immediately.</td>
          <td><a href="https://execfabric.cn/">Getting Started</a></td>
        </tr>
        <tr>
          <td>You already have one very specific automation problem and want to validate it first</td>
          <td>Apply for Beta first</td>
          <td>A structured intake is a better way to judge fit, priority, and the right first step than a broad generic inquiry</td>
          <td><a href="/en/contact.html#lead-form">Apply for Beta</a></td>
        </tr>
        <tr>
          <td>You already connect scripts continuously in your personal space, but have not entered multi-user collaboration yet</td>
          <td>First decide whether local script slots need expansion</td>
          <td>This is lightweight personal expansion, not a formal team tenant</td>
          <td><a href="./materials/membership-benefits-pricing.html">Membership & Pricing</a></td>
        </tr>
        <tr>
          <td>You are preparing for multi-user collaboration, formal accounts, and a steadier usage cycle</td>
          <td>Move into the team-edition monthly or annual entry first</td>
          <td>The current standard team edition is handled through the shared-SaaS frontend, so the standard path and onboarding mode should be validated before anything custom</td>
          <td><a href="./product/personal-billing-membership.html">Billing & Membership</a> / <a href="./product/team-tenant-payment.html">Tenant Payment Guide</a></td>
        </tr>
        <tr>
          <td>You involve intranet deployment, local bridging, stronger isolation, or formal project acceptance</td>
          <td>Go directly into enterprise / private-deployment discussion</td>
          <td>The key questions here are deployment, delivery boundaries, and governance requirements, not a standard membership page</td>
          <td><a href="./materials/service-packages.html">Service Packages</a> / <a href="./product/deployment.html">Deployment &amp; Delivery Boundaries</a></td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="lead-form" class="brand-grid brand-grid--two">
    <article class="brand-card brand-card--lead-form">
      <p class="brand-kicker">Direct Submit</p>
      <h2>Official-site beta / demand form</h2>
      <p class="brand-lead">
        You can now submit the form directly on the official site. The lead goes straight into our backend public database instead of relying on email or a third-party form relay.
        If you already have one concrete problem, leave it here first.
      </p>
      <form class="docs-lead-form" data-testid="docs-lead-form" @submit.prevent="submitLeadForm">
        <div class="docs-lead-form__row docs-lead-form__row--two">
          <label class="docs-lead-form__field">
            <span>How should we address you</span>
            <input v-model="leadForm.name" type="text" autocomplete="name" placeholder="For example: Alex" />
          </label>
          <label class="docs-lead-form__field">
            <span>Role</span>
            <input v-model="leadForm.title" type="text" placeholder="For example: developer, operator, tech lead" />
          </label>
        </div>
        <div class="docs-lead-form__row docs-lead-form__row--two">
          <label class="docs-lead-form__field">
            <span>Company / team</span>
            <input v-model="leadForm.companyName" type="text" placeholder="For example: your team, optional" />
          </label>
          <label class="docs-lead-form__field">
            <span>Phone or WeChat</span>
            <input v-model="leadForm.contactPhone" type="text" inputmode="tel" placeholder="For example: phone or WeChat" />
          </label>
        </div>
        <label class="docs-lead-form__field">
          <span>Email (phone/WeChat or email is enough)</span>
          <input v-model="leadForm.contactEmail" type="email" autocomplete="email" placeholder="For example: you@example.com" />
        </label>
        <label class="docs-lead-form__field">
          <span>The one most specific automation problem you want to solve</span>
          <textarea v-model="leadForm.demand" rows="5" placeholder="For example: every week I merge several CSV exports and send one fixed summary email"></textarea>
        </label>
        <fieldset class="docs-lead-form__group">
          <legend>Common scripting language</legend>
          <div class="docs-lead-form__choice-grid">
            <label v-for="item in scriptLanguageOptions" :key="item" class="docs-choice-chip">
              <input v-model="leadForm.scriptLanguages" type="checkbox" :value="item" />
              <span>{{ item }}</span>
            </label>
          </div>
        </fieldset>
        <fieldset class="docs-lead-form__group">
          <legend>How much time do you spend on this each week</legend>
          <div class="docs-lead-form__choice-grid">
            <label v-for="item in weeklyTimeOptions" :key="item" class="docs-choice-chip docs-choice-chip--radio">
              <input v-model="leadForm.weeklyTime" type="radio" name="weeklyTime" :value="item" />
              <span>{{ item }}</span>
            </label>
          </div>
        </fieldset>
        <div class="docs-lead-form__actions">
          <button class="cta-button cta-button--brand" data-testid="docs-lead-submit" type="submit" :disabled="submitting">
            {{ submitting ? 'Submitting...' : 'Submit beta / demand form' }}
          </button>
          <span class="docs-lead-form__note">Please leave your name, role, one specific problem, and either a phone/WeChat contact or an email.</span>
        </div>
        <p v-if="submitError" data-testid="docs-lead-feedback" class="docs-lead-form__feedback docs-lead-form__feedback--error">{{ submitError }}</p>
        <p v-if="submitSuccess" data-testid="docs-lead-feedback" class="docs-lead-form__feedback docs-lead-form__feedback--success">{{ submitSuccess }}</p>
      </form>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Route Guide</p>
      <h2>What happens after you submit</h2>
      <ul class="brand-list">
        <li>If you only want to feel the product first, you can still go to the free experience page.</li>
        <li>If you already have one concrete problem, this page is the fastest way to get it into the shared lead path.</li>
        <li>If you are already close to formal cooperation, start from the same form so the scenario lands in the same backend database.</li>
        <li>Script governance, local bridging, team collaboration, and enterprise delivery can all be routed from this one form.</li>
      </ul>
      <p class="brand-kicker">What To Prepare</p>
      <ul class="brand-list">
        <li>Your company / role, or at least the context in which the problem appears.</li>
        <li>One specific automation problem, not a broad list of ideas.</li>
        <li>Your common scripting language and the weekly time cost.</li>
        <li>If local execution, intranet access, or private delivery is already known, mention that too.</li>
      </ul>
      <div class="brand-grid brand-grid--two">
        <article class="brand-card brand-card--nested">
          <p class="brand-kicker">First Message</p>
          <h3>Describe the highest-friction workflow first</h3>
          <p>It is usually more useful to explain the current task chain, its inputs and outputs, and how often it runs than to start with a broad team intro.</p>
        </article>
        <article class="brand-card brand-card--nested">
          <p class="brand-kicker">Decision</p>
          <h3>Judge whether step one is worth launching</h3>
          <p>The first stage should stay small and verifiable so everyone can confirm whether it really saves time before a larger second-stage scope opens up.</p>
        </article>
      </div>
      <p class="lead-form-note">
        This official-site form now writes directly into our backend public lead database with page source and scenario fields attached.
      </p>
      <div class="brand-actions">
        <a class="cta-button" href="https://execfabric.cn/#/experience">Try the free experience page</a>
        <a class="cta-button" href="https://execfabric.cn/">Open the login / register entry</a>
      </div>
    </article>
  </section>

  <section class="brand-grid brand-grid--four contact-path-grid">
    <article class="brand-card">
      <p class="brand-kicker">Path 01</p>
      <h2>Personal experience / execution console</h2>
      <p>Let developers and individual users feel the value first at a lower threshold, then decide whether their own scripts should be formally onboarded.</p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Path 02</p>
      <h2>Personal continuation / local script slots</h2>
      <p>This fits people who already keep connecting scripts in their personal space but have not entered formal multi-user collaboration. The focus is personal slot expansion, not a rebrand into the formal team edition.</p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Path 03</p>
      <h2>Team-edition SaaS</h2>
      <p>This path takes multi-user collaboration, shared execution capability, approval, permission control, and a more stable formal-team model. It currently goes first through the standard SaaS formal-tenant entry for registration or demo handled by the shared-SaaS frontend. Stronger isolation or deeper customization can later move into enterprise / private deployment.</p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Path 04</p>
      <h2>Enterprise / private deployment</h2>
      <p>This path takes stronger isolation, higher security requirements, intranet environments, local Agent needs, and formal delivery constraints.</p>
    </article>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Current Cooperation</p>
      <h2>Cooperation types that are best to discuss first right now</h2>
      <ul class="brand-list">
        <li>Turn one repetitive process into a minimal automation delivery first</li>
        <li>Bring existing Python scripts or Skills into a unified execution entry</li>
        <li>Run pilots, formal delivery, and lightweight private deployment for the team and enterprise editions</li>
        <li>Help determine whether the shared-SaaS tenant path is enough or whether the work should move directly into enterprise delivery</li>
        <li>Local scripts, CLI, local-environment bridging, and governed execution strategies</li>
      </ul>
      <p><a href="./materials/service-packages.html">View service packages</a></p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">How To Start</p>
      <h2>The most recommended way to start</h2>
      <ul class="brand-list">
        <li>Bring the most painful, most repetitive, and most rule-bounded process first</li>
        <li>Start by narrowing the scope to one point instead of opening a large all-in project immediately</li>
        <li>Run the first step through, then decide whether the second stage is worth expanding</li>
        <li>If you are still unsure whether the work is worth doing, start with the smallest possible assessment</li>
      </ul>
    </article>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Founder Background</p>
      <h2>Delivery background and public materials</h2>
      <ul class="brand-list">
        <li>The long-running mainline has been frontend engineering, GIS visualization, and government / enterprise delivery.</li>
        <li>Over the last two years, the work has continued to deepen in Python automation, data processing, and small-to-medium backend support.</li>
        <li>ExecFabric is not being built as a broad AI story. The goal is to make script onboarding, permission boundaries, execution audit trails, and local bridging into a deliverable product.</li>
      </ul>
      <p><a href="./materials/founder-profile.html">View founder profile</a></p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Public Proof</p>
      <h2>What is publicly visible today</h2>
      <ul class="brand-list">
        <li>Public GitHub repositories and project structure</li>
        <li>Project notes and reflections in the blog</li>
        <li>Public explanations of the product, delivery, and service packages on the docs site</li>
        <li>The continuously updated ExecFabric docs and frontend entries</li>
      </ul>
    </article>
  </section>

  <section class="brand-card contact-channels-card">
    <p class="brand-kicker">Channels</p>
    <h2>Backup contact channels and public entry points</h2>
    <div class="brand-link-grid">
      <a class="brand-link-card" href="https://execfabric.cn/">
        <span>Product Entry</span>
        <strong>execfabric.cn</strong>
        <p>Use the login / register entry or the free experience page to submit the demand directly into the shared database flow.</p>
      </a>
      <a class="brand-link-card" href="https://github.com/zmx2321" target="_blank" rel="noreferrer">
        <span>GitHub</span>
        <strong>zmx2321</strong>
        <p>See public repositories, coding style, and delivery maturity.</p>
      </a>
      <a class="brand-link-card" href="https://github.com/zmx2321/exec-fabric-ai-skill-platform-doc" target="_blank" rel="noreferrer">
        <span>Docs Repo</span>
        <strong>exec-fabric-ai-skill-platform-doc</strong>
        <p>See the docs-site pages, styling, and deployment configuration directly.</p>
      </a>
      <a class="brand-link-card" href="https://zmx2321.github.io/vite-blog" target="_blank" rel="noreferrer">
        <span>Blog</span>
        <strong>vite-blog</strong>
        <p>Continue with project notes, thinking, and public writing.</p>
      </a>
    </div>
  </section>

  <section class="brand-card brand-card--cta">
    <div class="brand-card__row">
      <div>
        <p class="brand-kicker">Next Read</p>
        <h2>Continue with platform and delivery materials</h2>
        <p class="brand-lead">Continue with Product Overview, the CLI &amp; Local Agent Guide, Capabilities, and Version Stages &amp; Upgrade Path, then enter the conversation with a concrete question.</p>
      </div>
      <div class="brand-link-grid brand-link-grid--compact">
        <a class="brand-link-card" href="./product/">
          <span>Product</span>
          <strong>Product Overview</strong>
        </a>
        <a class="brand-link-card" href="./product/cli.html">
          <span>CLI</span>
          <strong>CLI &amp; Local Agent Guide</strong>
        </a>
        <a class="brand-link-card" href="./product/customer-flow.html">
          <span>Delivery</span>
          <strong>Customer Delivery &amp; Usage</strong>
        </a>
        <a class="brand-link-card" href="./product/capabilities.html">
          <span>Capabilities</span>
          <strong>Capabilities</strong>
        </a>
        <a class="brand-link-card" href="./product/architecture.html">
          <span>Architecture</span>
          <strong>Architecture</strong>
        </a>
        <a class="brand-link-card" href="./product/editions.html">
          <span>Roadmap</span>
          <strong>Version Stages &amp; Upgrade Path</strong>
        </a>
      </div>
    </div>
  </section>
</div>
