---
aside: false
outline: false
lastUpdated: false
---

<div class="brand-page-shell">
  <section class="brand-hero">
    <div>
      <p class="brand-kicker">Architecture</p>
      <h1>Architecture</h1>
      <div class="brand-hero__panel">
        <span class="brand-pill">Architecture Thesis</span>
        <strong>Let different entries share one governance core first. Otherwise the product becomes harder to control every time a new surface is added.</strong>
        <p>The goal is not to spread into more endpoints. It is to let the free entry, formal delivery, and local onboarding reuse one logic so a single-maintainer system does not drift apart.</p>
      </div>
      <p class="brand-lead">
        <strong>ExecFabric is a multi-tenant capability-governance and execution platform that treats Python scripts as the first mature execution asset.</strong>
      </p>
      <p class="brand-lead">
        The platform currently uses a
        <strong>single-repo, multi-frontend setup with one unified backend capability center</strong>.
        The real point is not how many modules exist.
        It is that
        <strong>platform governance</strong>,
        <strong>tenant isolation</strong>,
        <strong>the free entry</strong>,
        and
        <strong>local onboarding</strong>
        are pulled into one architectural logic.
      </p>
      <div class="brand-chip-list">
        <span class="brand-chip">Unified backend</span>
        <span class="brand-chip">public governance</span>
        <span class="brand-chip">tenant fronts</span>
        <span class="brand-chip">CLI bridge</span>
      </div>
      <div class="brand-actions">
        <a class="cta-button cta-button--brand" href="../contact.html#lead-form">Discuss architecture and onboarding</a>
        <a class="cta-button" href="./deployment.html">View deployment options</a>
      </div>
    </div>
    <div class="brand-hero__media brand-hero__media--compact">
      <div class="matrix-panel matrix-panel--contact">
        <div class="matrix-panel__hud">
          <span>EXECFABRIC // ARCH LAYOUT</span>
          <span>DOC 04</span>
        </div>
        <div class="matrix-panel__canvas">
          <div class="matrix-panel__trace matrix-panel__trace--top"></div>
          <div class="matrix-panel__trace matrix-panel__trace--mid"></div>
          <div class="matrix-panel__trace matrix-panel__trace--bottom"></div>
          <div class="matrix-panel__stack">
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">core</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__string">'unified_python_backend'</span> <span class="matrix-panel__comment">// capability control center</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">governance</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__string">'public_admin_console'</span> <span class="matrix-panel__comment">// platform governance</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">entries</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'tenant_fronts'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'free_entry'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'execfabric_cli'</span><span class="matrix-panel__punct">]</span></span>
          </div>
          <div class="matrix-panel__callout">ONE CORE / MULTIPLE ENTRY SURFACES</div>
        </div>
        <div class="matrix-panel__footer">
          <span class="matrix-panel__tag"><span class="matrix-panel__key">schema</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">isolated</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">public</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">governance</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">entry</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">multi_surface</span></span>
        </div>
      </div>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">1.0 Standard</p>
    <h2>Where the current architecture actually lands</h2>
    <div class="brand-grid brand-grid--three">
      <article class="brand-card brand-card--nested">
        <h3>Foundation layer</h3>
        <p>Multi-tenant isolation, permissions, announcements, template distribution, logs, and audit are common platform foundations. They do not exist only for scripts.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>Abstraction layer</h3>
        <p>A Skill is the capability unit. It defines inputs, outputs, risk, approval, and visibility boundary. It should not be understood only as a script file.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>Implementation layer</h3>
        <p>Python scripts are still the first mature execution asset today, so upload, registration, runtime, and the CLI remain script-first for now.</p>
      </article>
    </div>
    <p class="brand-lead">
      The platform has already moved one step beyond script-only thinking:
      the general resource layer and executor registry layer have landed,
      and the first non-script capability sample,
      <code>HTTP capability access</code>,
      has already been validated in the <code>public</code> super-admin domain.
      That means the foundation is no longer limited to "run a script file,"
      even though tenant-side delivery is still most mature and most stable on the script path.
    </p>
    <p class="brand-lead">
      This round also tightened the governance boundary:
      configuration, credential governance, and trial execution for
      <code>HTTP capability access</code>
      stay only in the <code>public</code> governance domain.
      Whitelisted tenant admins keep only a minimal cross-tenant console entry,
      while tenant-side pages stay read-only instead of exposing platform-governance pages directly.
    </p>
    <p class="brand-lead">
      From the <code>1.1</code> point of view, orders, payment confirmation, renewal-reminder scans, and expiry shutdown scans have already been pulled into the <code>public</code> governance domain first.
      That avoids scattering pricing and lifecycle logic into tenant-facing pages too early.
      Self-serve user paths and real payment gateways still come later.
    </p>
    <p class="brand-lead">
      Administrator identification has also been tightened:
      the platform no longer relies on risky conditions such as <code>user_id == 1</code>,
      and instead recognizes only explicit <code>admin</code> usernames or super-admin markers.
    </p>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">System Map</p>
    <h2>What the system is made of</h2>
    <div class="brand-grid brand-grid--four">
      <article class="brand-card brand-card--nested">
        <h3>Unified backend capability center</h3>
        <p>The unified backend carries core services such as authentication, tenancy, capability catalog, execution assets, logs, and templates.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>Governance console</h3>
        <p>This domain handles platform-level configuration, templates, logs, and operational governance without being mixed into ordinary business entry pages.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>Formal customer frontends</h3>
        <p>These are the real customer-facing environments that carry business access and execution entries.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>Multi-tenant delivery sites</h3>
        <p>These frontends support different customers or environments. The product now clearly splits single-tenant delivery and shared-SaaS tenant fronts instead of cloning a new frontend project for every customer by default.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>Personal experience entry</h3>
        <p>This path faces individual users and early explorers and carries the experience, growth, and free lead-generation flow.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>Integration and sync layer</h3>
        <p>This layer is used for multi-entry aggregation, integration testing, and final sync. It is not the formal customer-facing entry.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>CLI / Local Bridge</h3>
        <p>This is the local onboarding and Local Agent skeleton entry that connects the platform control plane with the local environment.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3><code>docs</code></h3>
        <p>The public explanation site, version roadmap, and entry pages help both customers and internal work stay aligned quickly.</p>
      </article>
    </div>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Governance Domain</p>
      <h2>What <code>public</code> owns</h2>
      <ul class="brand-list">
        <li>Platform super-admin</li>
        <li>Customer ledgers</li>
        <li>Tenant management</li>
        <li>Order center and tenant lifecycle governance</li>
        <li>Platform audit</li>
        <li>HTTP resource access, credential governance, and write-boundary control</li>
        <li>Template distribution governance</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Tenant Domain</p>
      <h2>What each tenant schema owns</h2>
      <ul class="brand-list">
        <li>Users, roles, menus, parameters, and announcements</li>
        <li>Capability onboarding, Skill binding, and tenant authorization</li>
        <li>Read-only summaries of authorized HTTP resources</li>
        <li>Execution records and scheduling logs</li>
        <li>Business extension tables</li>
        <li>That tenant's own access boundary and data boundary</li>
      </ul>
    </article>
  </section>

  <section class="brand-grid brand-grid--three">
    <article class="brand-card">
      <p class="brand-kicker">Concept 01</p>
      <h2>A Skill is the capability unit</h2>
      <p>A Skill is user-facing and AI-facing. It describes the capability name, input and output, visibility, risk level, approval requirement, and audit boundary.</p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Concept 02</p>
      <h2>An execution asset is the concrete integration target</h2>
      <p>An execution asset describes what the capability actually connects to. Python scripts are still the most mature path, and the platform is already using HTTP-resource samples to validate how API-style assets enter the same governance chain.</p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Concept 03</p>
      <h2>The executor owns runtime adaptation</h2>
      <p>The executor decides how different asset types are called, how input and output are validated, and how results return into one audit chain. Runtime is no longer hard-coded only around scripts.</p>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Runtime Boundary</p>
    <h2>How the runtime boundary is established</h2>
    <div class="brand-grid brand-grid--three">
      <article class="brand-card brand-card--nested">
        <h3>One customer, one URL</h3>
        <p>In standard delivery, each customer receives a dedicated access URL, a dedicated tenant space, and a set of customer-specific capabilities.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>The Host binds the tenant</h3>
        <p>The runtime binds the tenant and switches schema by Host, so "one customer, one URL" is part of the runtime boundary rather than just a sales phrase.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3><code>public</code> is not an ordinary tenant</h3>
        <p><code>public</code> owns platform governance and the shared foundation. Customers do not use it as if it were their own business tenant.</p>
      </article>
    </div>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Shared Tenant Front</p>
      <h2>Shared-SaaS tenant frontend</h2>
      <ul class="brand-list">
        <li>Starting from <code>tenant_1003+</code>, standard SaaS customers first enter the shared-tenant frontend skeleton</li>
        <li>What is shared is the frontend project and release rhythm, not tenant data, menu permissions, or execution results</li>
        <li>Runtime still switches into the corresponding schema by Host</li>
        <li>This path fits standard capabilities and lighter team collaboration</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Shell Role</p>
      <h2>The real role of <code>execfabric-shell</code></h2>
      <ul class="brand-list">
        <li>It mainly exists for multi-entry aggregation, integration testing, and final sync</li>
        <li>It is not the long-term formal customer runtime entry</li>
        <li>For formal customer usage, the source of truth remains the formal single project or shared-tenant frontend</li>
        <li>This reduces the risk that the shell becomes the "truth" while the formal projects drift away</li>
      </ul>
    </article>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Delivery Package</p>
      <h2>What standard delivery usually includes</h2>
      <ul class="brand-list">
        <li>One dedicated tenant</li>
        <li>One dedicated access URL</li>
        <li>A set of customer-specific capabilities, currently still centered on script-based capabilities</li>
        <li>Platform accounts and baseline permissions</li>
        <li>Customer usage guidance and script hot-update instructions</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Acceptance Check</p>
      <h2>What matters most during customer acceptance</h2>
      <ul class="brand-list">
        <li>Can the customer log in through their own URL</li>
        <li>Can they see only their own capabilities</li>
        <li>Can they execute those capabilities and view results</li>
        <li>Can they keep submitting script updates through the formal path without redeploying the whole platform</li>
      </ul>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Architecture To Delivery</p>
    <h2>Key material for architecture in practice</h2>
    <div class="brand-link-grid">
      <a class="brand-link-card" href="./file-results.html">
        <span>Files</span>
        <strong>File Upload &amp; Result Delivery</strong>
        <p>When a project depends on input files, batch status, and result files, this path is part of the architecture in practice rather than just a frontend detail.</p>
      </a>
      <a class="brand-link-card" href="./deliverables.html">
        <span>Deliverables</span>
        <strong>Deliverables / Doc Entry</strong>
        <p>If customers will use the platform continuously, the formal architecture must also carry documentation, result entries, and delivery boundaries instead of stopping at a diagram.</p>
      </a>
      <a class="brand-link-card" href="./onboarding-checklist.html">
        <span>Checklist</span>
        <strong>Onboarding Checklist</strong>
        <p>When a real capability is about to be onboarded, preparing the script folder, README, sample files, and dependencies is more effective than continuing to argue over module boundaries in the abstract.</p>
      </a>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Architecture Rules</p>
    <h2>Implementation and isolation rules</h2>
    <div class="brand-link-grid">
      <a class="brand-link-card" href="./index.html">
        <span>Rule 01</span>
        <strong>Tenant isolation comes first</strong>
        <p>Data, capability, and permission boundaries between customers need to be clear before broader operations and expansion are discussed.</p>
      </a>
      <a class="brand-link-card" href="./index.html">
        <span>Rule 02</span>
        <strong>Governance and business entries stay layered</strong>
        <p>Unified governance capability and customer-facing business entries need clearly separated responsibilities so permission and messaging do not get mixed up.</p>
      </a>
      <a class="brand-link-card" href="./index.html">
        <span>Rule 03</span>
        <strong>Validate a change before scaling it out</strong>
        <p>Capabilities, processes, and frontend changes should first prove stable before they expand into a wider scope.</p>
      </a>
      <a class="brand-link-card" href="./index.html">
        <span>Rule 04</span>
        <strong>Delivery boundary and platform boundary stay explicit</strong>
        <p>The platform must support customer delivery while still preserving unified governance and operations. One side should not crowd out the other.</p>
      </a>
      <a class="brand-link-card" href="./cli.html">
        <span>Rule 05</span>
        <strong><code>execfabric-cli</code> connects the local environment with the platform control plane</strong>
        <p>Local script onboarding, manifest generation, machine identity persistence, and the minimal Local Agent claim-execute-complete loop already run along this bridge. Heartbeat, status, and deeper scheduling remain later enhancements.</p>
      </a>
      <a class="brand-link-card" href="./file-results.html">
        <span>Rule 06</span>
        <strong>The file path belongs inside the formal architecture</strong>
        <p>If a project truly depends on input files and result files, upload, batches, and result entry points are part of the formal delivery architecture rather than a temporary upload feature.</p>
      </a>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Why This Works</p>
    <h2>Why this structure fits the current phase</h2>
    <div class="brand-grid brand-grid--four">
      <article class="brand-card brand-card--nested">
        <h3>It can directly support enterprise delivery</h3>
        <p>Tenant boundaries and platform-governance boundaries are both real first, so delivery does not depend on ad hoc stitching.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>It preserves platform-governance capability</h3>
        <p>The <code>public</code> side can keep customer ledgers, tenant state, template distribution, and audit logs without building a second separate system.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>It can also carry the personal free growth entry</h3>
        <p>The free edition is not a side branch. It is one formal entry and can keep accumulating leads and usage samples.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>It leaves room for more asset types later</h3>
        <p>The control plane, execution side, and capability unit already have baseline boundaries, so expanding later to APIs, templates, Agent paths, and more asset types costs less.</p>
      </article>
    </div>
  </section>

  <section class="brand-card brand-card--cta">
    <div class="brand-card__row">
      <div>
        <p class="brand-kicker">Next Read</p>
        <h2>After architecture, move into delivery details</h2>
        <p class="brand-lead">What usually turns architecture into real project material is not repeating concepts. It is explaining the file path, deliverables, and onboarding boundary clearly together.</p>
      </div>
      <div class="brand-link-grid brand-link-grid--compact">
        <a class="brand-link-card" href="./deployment.html">
          <span>Deployment</span>
          <strong>Deployment</strong>
        </a>
        <a class="brand-link-card" href="./file-results.html">
          <span>Files</span>
          <strong>File Upload &amp; Result Delivery</strong>
        </a>
        <a class="brand-link-card" href="./deliverables.html">
          <span>Deliverables</span>
          <strong>Deliverables / Doc Entry</strong>
        </a>
        <a class="brand-link-card" href="./onboarding-checklist.html">
          <span>Checklist</span>
          <strong>Onboarding Checklist</strong>
        </a>
      </div>
    </div>
  </section>
</div>
