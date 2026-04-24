---
aside: false
outline: false
lastUpdated: false
---

<div class="brand-page-shell">
  <section class="brand-hero">
    <div>
      <p class="brand-kicker">Capabilities</p>
      <h1>Capabilities</h1>
      <div class="brand-hero__panel">
        <span class="brand-pill">Capability Logic</span>
        <strong>The key question is not whether a task can be executed. It is whether it can be executed inside rules.</strong>
        <p>These capabilities together determine whether the platform can solve a real class of problems first and reduce rework later.</p>
      </div>
      <p class="brand-lead">
        ExecFabric's core capabilities are not a loose feature list.
        They are a continuously tightening platform capability set centered on
        <strong>multi-tenant governance, trusted execution, capability cataloging, and local bridging</strong>.
      </p>
      <div class="brand-chip-list">
        <span class="brand-chip">Multi-tenant isolation</span>
        <span class="brand-chip">Trusted execution</span>
        <span class="brand-chip">Template distribution</span>
        <span class="brand-chip">CLI bridge</span>
        <span class="brand-chip">Lifecycle governance</span>
      </div>
      <div class="brand-actions">
        <a class="cta-button cta-button--brand" href="/en/contact.html#lead-form">Discuss a real scenario</a>
        <a class="cta-button" href="./architecture.html">View architecture</a>
      </div>
    </div>
    <div class="brand-hero__media brand-hero__media--compact">
      <div class="matrix-panel matrix-panel--contact">
        <div class="matrix-panel__hud">
          <span>EXECFABRIC // CAPABILITY MAP</span>
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
      <h2>Multi-tenant isolation</h2>
      <ul class="brand-list">
        <li>The platform currently uses a PostgreSQL schema-level multi-tenant model</li>
        <li><code>public</code> is the governance domain and shared foundation</li>
        <li>Each formal customer tenant owns its own schema</li>
        <li>Execution assets, Skills, logs, and system data are isolated between tenants by default</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">02</p>
      <h2>Dialog execution closure</h2>
      <ul class="brand-list">
        <li>Intent recognition</li>
        <li>Plan generation</li>
        <li>Manual confirmation</li>
        <li>Capability execution, result callback, audit trail, and reviewability</li>
        <li>Dialog execution can use either a platform-default upstream model configuration or a tenant-local configuration</li>
        <li>The platform super-admin side now maintains the platform model library, and tenant admins maintain their own tenant-local model lists</li>
        <li>Platform models are granted first to tenants and then to specific users, and the model appears in dialog execution only after the user confirms the announcement</li>
        <li>The platform governance side can maintain tenant model URLs and tokens per tenant or in batch</li>
        <li>Batch maintenance can either overwrite the selected tenants or fill only tenants whose local configuration is still incomplete</li>
        <li>The full value of a sensitive token is shown only to the side that configured it; the other side sees a masked preview</li>
        <li>Personal-free regular users do not need a separate model-list page in order to switch among the models already authorized to them inside dialog execution</li>
        <li>The session model now participates in Skill-gate checks instead of blindly following only a default model</li>
      </ul>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">03</p>
    <h2>Capability onboarding and Skill orchestration</h2>
    <ul class="brand-list">
      <li>The current primary onboarding path is still the Python script</li>
      <li>Skills can already be viewed and edited visually</li>
      <li>The platform already supports Skill action definition and a single-capability execution loop</li>
      <li>Tenant-level enable / disable and binding already exist</li>
      <li>A general resource layer and executor registry layer are now in place so that APIs, templates, and workflows can be onboarded later without restarting from zero</li>
      <li>The first non-script sample is HTTP capability access inside the platform governance console, used to validate the resource model, executor path, and audit chain</li>
      <li>Tenant-side users already have a read-only HTTP-resource ledger showing request summaries, authentication style, and write boundaries for resources they are authorized to view, but self-service configuration and dry runs are not opened to tenants</li>
      <li>HTTP resources are still advanced only under a fixed-interface, explicit-authentication, write-whitelist model, and configuration authority plus credential governance remain in the platform governance domain</li>
      <li>The platform may later support orchestration where one Skill chains multiple scripts or multiple capability nodes together inside rules, but that is a post-<code>2.0</code> productization direction rather than a finished <code>1.0 / 1.1</code> capability</li>
    </ul>
    <p>For current use, think in terms of trusted single-Skill execution first. More complex multi-capability orchestration is not yet a completed <code>1.0 / 1.1</code> feature. Before formal orchestration becomes a public product line, the platform still needs stronger runtime contracts, node-level confirmation, formal fallback / downgrade behavior, and recoverable partial-success governance.</p>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">1.1 In Progress</p>
      <h2>How far the low-support loop has already landed</h2>
      <ul class="brand-list">
        <li>The <code>public</code> order center already supports order creation, payment confirmation, activation execution, renewal prefill, renewal-reminder scans, and expiry shutdown scans</li>
        <li>The personal free edition already supports lightweight self-service purchases for local script slots, and confirmed purchases refill the current account quota directly</li>
        <li>The personal free edition also exposes an upgrade path into the monthly / yearly team edition and routes the user into standard SaaS tenant registration</li>
        <li>Customer, order, and tenant status now link back into each other instead of being isolated sample pages</li>
        <li>The current purpose is to let the team run the charging and lifecycle chain on its own first and reduce later support-heavy manual follow-up</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Still Pending</p>
      <h2>What has not been publicly promised yet</h2>
      <ul class="brand-list">
        <li>The platform is not yet presented as a full self-service end-user payment center. What exists today is lightweight local-script-slot expansion for the personal free edition plus an upgrade entry toward the team edition.</li>
        <li>There is not yet a real third-party payment gateway with signing and verification.</li>
        <li>Renewal reminders are currently platform-side scans and audit traces, not fully automated email / Enterprise WeChat / SMS delivery.</li>
      </ul>
    </article>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">04</p>
      <h2>Platform template distribution</h2>
      <ul class="brand-list">
        <li>Platform template publishing</li>
        <li>Tenant-side install request and install confirmation</li>
        <li>Version control, rollback, and distribution logs</li>
        <li>A foundation for template reuse, delivery review, and stable future expansion</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">05</p>
      <h2>Announcement and log governance</h2>
      <ul class="brand-list">
        <li>Platform-wide and tenant-specific announcements</li>
        <li>Targeting by tenant or user</li>
        <li>Read status and read detail</li>
        <li>Login logs, operation logs, and platform audit trails</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">06</p>
      <h2>Execution safety boundaries</h2>
      <ul class="brand-list">
        <li>Script / Skill risk levels currently stay fixed at <code>low / medium / high</code>. The public standard is described in <a href="./script-risk-levels.html">script risk levels</a>.</li>
        <li>The governance domain can maintain a model registry with reliability ratings (<code>economy / standard / high</code>).</li>
        <li>Each Skill can define a minimum model reliability gate (<code>all / standard / high</code>).</li>
        <li>If a model is unrated, disabled, or below the Skill gate, runtime rejects execution and prompts switching to a more reliable model.</li>
        <li>High-risk actions still require manual confirmation</li>
        <li>HTTP write operations are denied by default and must be whitelisted explicitly</li>
        <li>Tenant-side users do not see platform-governance pages. They only see authorized execution and read-only entries.</li>
        <li>Administrator detection has been tightened. The runtime no longer misclassifies admins using unsafe shortcuts such as <code>user_id == 1</code>.</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">07</p>
      <h2>CLI and local onboarding</h2>
      <ul class="brand-list">
        <li><code>login</code> / <code>register</code> / <code>list</code> / <code>run</code></li>
        <li><code>agent describe</code> / <code>agent bind</code> / <code>agent start</code></li>
        <li>The significance is not command-line packaging. It is the bridge between the platform control plane and the local environment.</li>
        <li>Cloud upload registration and <code>local-register</code> local-path onboarding already both exist today.</li>
      </ul>
    </article>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Customer Visible</p>
      <h2>What customers can actually see today</h2>
      <ul class="brand-list">
        <li>Login and account usage</li>
        <li>A list of customer-specific capabilities instead of raw script source paths</li>
        <li>The dialog-execution entry and the manual execution entry</li>
        <li>AI-assisted recommendation with confirmation, execution-result view, file upload, and result download</li>
        <li>Platform and tenant announcements</li>
        <li>When the user is authorized for HTTP-type Skills, they can view resource summaries, authentication style, and write boundaries in read-only mode</li>
        <li>The personal free entry has already formed a continuous usage chain: signup result page, capability library, dialog execution, announcement center, community square, personal space, formal-upgrade entry, script upload, read-only HTTP ledger, and lightweight local script-slot expansion</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Execution Reality</p>
      <h2>How customers actually use these capabilities</h2>
      <ul class="brand-list">
        <li>Manual path: log in -&gt; find the capability -&gt; fill the input -&gt; submit execution -&gt; inspect the result or artifact</li>
        <li>AI path: express the request -&gt; the platform recommends capabilities inside the current tenant and permission scope -&gt; manual confirmation if needed -&gt; execute the capability -&gt; return the result</li>
        <li>Some higher-risk capabilities still force manual confirmation and do not run as unconstrained automation</li>
        <li>AI does not recommend another customer's capability across tenant boundaries</li>
      </ul>
    </article>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Hot Update</p>
      <h2>How customer scripts keep getting updated</h2>
      <ul class="brand-list">
        <li>The customer prepares a script directory in the recommended <code>tenant / language / script-code / entry-file</code> layout, including at least the agreed entry file and <code>README.md</code></li>
        <li>The script is uploaded into the correct tenant and language directory instead of being mixed into another customer's directory</li>
        <li>The platform completes review, sync, script registration, Skill binding, and tenant authorization</li>
        <li>After verification succeeds, only the owning tenant can see and use the updated capability</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Why It Matters</p>
      <h2>What hot update actually solves</h2>
      <ul class="brand-list">
        <li>New or updated scripts do not require redeploying the whole platform</li>
        <li>The platform still keeps control over review, registration, and authorization</li>
        <li>Other tenants do not automatically inherit a customer's update</li>
        <li>This turns continuous delivery into a formal capability instead of a one-off project step</li>
      </ul>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Future Extension</p>
    <h2>The next important expansion is not “more pages”, but more governable capability types</h2>
    <p>Public capabilities are still script-first today, but the platform already leaves room for the directions below. This is an expression of platform expansion boundaries, not a promise that everything is already standardized and commercialized. The HTTP API sample has already landed in the <code>public</code> governance domain and validates the onboarding path.</p>
    <div class="brand-grid brand-grid--three">
      <article class="brand-card brand-card--nested">
        <h3>HTTP API / SaaS</h3>
        <p>Turn third-party interfaces, internal services, webhooks, and external-platform actions into capabilities. The first sample is already in place, but the scope is still kept to fixed interfaces, dry-run verification, and auditability.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>Data connectors</h3>
        <p>Turn database queries, warehouses, and business-system writes into standard entry points.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>Document templates</h3>
        <p>Turn contracts, weekly reports, reports, forms, and standard document generation into reusable services.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>Approval flows</h3>
        <p>Bring process initiation, state lookup, and workflow-node actions into the same permission and audit chain.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>Specialized model services</h3>
        <p>Bring OCR, document parsing, speech recognition, image generation, and similar model capabilities into one governance system.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>Ops actions</h3>
        <p>Continue standardizing inspection, log cleanup, backup, alert linkage, and service checks.</p>
      </article>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Why These Matter Together</p>
    <h2>Why this is a system instead of a feature list</h2>
    <div class="brand-link-grid">
      <a class="brand-link-card" href="./architecture.html">
        <span>Architecture</span>
        <strong>Isolation determines whether the platform can handle multiple customers</strong>
        <p>Without a clear tenant boundary, the platform cannot enter formal customer scenarios or explain its governance story convincingly.</p>
      </a>
      <a class="brand-link-card" href="./deployment.html">
        <span>Deployment &amp; Delivery Boundaries</span>
        <strong>Local bridging determines whether the platform can enter real environments</strong>
        <p>Many high-value tasks depend on intranets, file systems, and local data, so the story cannot stop at a cloud page.</p>
      </a>
      <a class="brand-link-card" href="./editions.html">
        <span>Roadmap</span>
        <strong>Templates and audit determine whether delivery can stay stable</strong>
        <p>Without template distribution, rollback, and log governance, many capabilities cannot be reused reliably or delivered sustainably.</p>
      </a>
      <a class="brand-link-card" href="./customer-flow.html">
        <span>Delivery</span>
        <strong>Capabilities must turn into real delivery and update flows</strong>
        <p>The Customer Delivery &amp; Usage page explains how customers use the platform, how the platform delivers it, and how hot updates enter the formal chain.</p>
      </a>
      <a class="brand-link-card" href="./file-results.html">
        <span>Files</span>
        <strong>How input files and result artifacts enter the formal flow</strong>
        <p>Many real scenarios do not just return text. They take files in, process them, and return result files under delivery boundaries.</p>
      </a>
      <a class="brand-link-card" href="./deliverables.html">
        <span>Customer Delivery Docs &amp; Entry Points</span>
        <strong>What the customer finally receives determines whether a capability is really deliverable</strong>
        <p>The Customer Delivery Docs &amp; Entry Points page expands what the customer gets beyond the execution capability itself, including instructions, entries, and long-term usage points.</p>
      </a>
      <a class="brand-link-card" href="./cli.html">
        <span>CLI</span>
        <strong>The local bridge determines whether real capabilities can connect into the platform</strong>
        <p>The current <code>register / list / run / agent</code> commands are the first layer that lets the platform enter local environments and onboard script-shaped capabilities.</p>
      </a>
    </div>
  </section>
</div>
