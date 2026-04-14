---
aside: false
outline: false
lastUpdated: false
---

<div class="brand-page-shell brand-page-shell--editions">
  <section class="brand-hero">
    <div>
      <p class="brand-kicker">Editions &amp; Roadmap</p>
      <h1>Editions &amp; Roadmap</h1>
      <div class="brand-hero__panel">
        <span class="brand-pill">Version Plan</span>
        <strong>The public roadmap still speaks in <code>1.0</code>, <code>1.1</code>, and <code>2.0</code>, but the real usage path has already split into four layers: the free path, local script slots, the standard team edition, and enterprise delivery.</strong>
        <p>The version stages describe the platform build rhythm. The four layers describe which path a user should take. Those two things should not be mixed together.</p>
      </div>
      <p class="brand-lead">
        The current rhythm is better understood like this:
        <strong><code>1.0</code></strong> stabilizes real delivery, trusted execution, and local onboarding first,
        <strong><code>1.1</code></strong> fills in auto-registration, payment, renewal, and a lower-support loop,
        and
        <strong><code>2.0</code></strong> decides which paths are worth continuing as more standardized solutions.
        Multi-Skill orchestration is not a default capability today. It should enter formal productization only after the governance base is stronger.
      </p>
      <p class="brand-lead">
        <strong>The current core position of <code>1.0</code> is this: ExecFabric is a multi-tenant governance and execution platform that treats Python scripts as the first mature execution asset.</strong>
      </p>
      <p class="brand-lead">
        Later <code>3.0</code> and <code>4.0</code> directions still exist in internal long-term planning, but the public roadmap only talks about <code>1.0</code>, <code>1.1</code>, and <code>2.0</code> so long-term ideas are not mistaken for current capability.
      </p>
      <p class="brand-lead">
        As of the current version, <code>1.0</code> has already completed its first compatibility-oriented upgrade:
        the general resource layer and executor registry layer have landed,
        and the first non-script capability sample is
        <code>HTTP capability access</code> in the <code>public</code> super-admin domain.
        The next priority is still not to spread horizontally into more capability types.
        It is to make <code>1.1</code> auto-registration, payment, renewal, and shutdown-recovery into a lower-support loop first.
      </p>
      <p class="brand-lead">
        This round also tightened the boundary further:
        <code>HTTP capability access</code> remains available only inside the <code>public</code> governance domain,
        whitelisted tenant admins keep only a minimal cross-tenant console,
        and the system no longer misidentifies administrators through unsafe conditions such as <code>user_id == 1</code>.
      </p>
      <p class="brand-lead">
        At the same time, the first real segment of <code>1.1</code> has already landed:
        the <code>public</code> order center supports order creation, payment confirmation, activation execution, renewal-reminder scans, and expiry-shutdown scans.
        The personal free edition also already has the first version of the billing center for local script slots, and the free path now includes explanations for monthly and annual registration into the team edition.
        A complete general subscription center, real third-party payment gateways, and outbound reminder channels are still not finished.
      </p>
      <p class="brand-lead">
        The shared-SaaS tenant frontend skeleton is also in place:
        starting from <code>tenant_1003+</code>, standard SaaS customers no longer default to cloning one frontend project per customer.
        They first go through the shared tenant frontend instead.
        It can already carry the formal tenant entry, but dynamic branding, initialization, and finer customization boundaries are still being tightened.
      </p>
      <div class="brand-chip-list">
        <span class="brand-chip">1.0 trusted delivery</span>
        <span class="brand-chip">1.1 lower-support loop</span>
        <span class="brand-chip">2.0 next-stage convergence</span>
        <span class="brand-chip">continuous upgrade</span>
        <span class="brand-chip">expand on demand</span>
      </div>
      <div class="brand-actions">
        <a class="cta-button cta-button--brand" href="../contact.html#lead-form">Discuss versions and scenarios</a>
        <a class="cta-button" href="./deployment.html">View deployment options</a>
      </div>
    </div>
    <div class="brand-hero__media brand-hero__media--compact">
      <div class="matrix-panel matrix-panel--contact">
        <div class="matrix-panel__hud">
          <span>EXECFABRIC // ROADMAP</span>
          <span>DOC 06</span>
        </div>
        <div class="matrix-panel__canvas">
          <div class="matrix-panel__trace matrix-panel__trace--top"></div>
          <div class="matrix-panel__trace matrix-panel__trace--mid"></div>
          <div class="matrix-panel__trace matrix-panel__trace--bottom"></div>
          <div class="matrix-panel__stack">
            <span class="matrix-panel__line"><span class="matrix-panel__key">1.0</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value matrix-panel__string">delivery_ready</span><span class="matrix-panel__sep"> / </span><span class="matrix-panel__value matrix-panel__string">trusted_execution</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__key">1.1</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value matrix-panel__string">self_serve_trial</span><span class="matrix-panel__sep"> / </span><span class="matrix-panel__value matrix-panel__string">renewal_loop</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__key">2.0</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value matrix-panel__string">productize_proven_paths</span></span>
          </div>
          <div class="matrix-panel__callout">ROADMAP SHOULD FOLLOW REAL DEMAND</div>
        </div>
        <div class="matrix-panel__footer">
          <span class="matrix-panel__tag"><span class="matrix-panel__key">now</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">1.0</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">next</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">1.1</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">later</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">2.0</span></span>
        </div>
      </div>
      <div class="roadmap-signal-grid">
        <article class="brand-hero__panel roadmap-signal-card">
          <span class="link-panel-label">Public Scope</span>
          <strong>The public roadmap talks only about <code>1.0</code>, <code>1.1</code>, and <code>2.0</code></strong>
          <p>Long-term directions still exist, but only the three stages already in real motion are stated publicly.</p>
        </article>
        <article class="brand-hero__panel roadmap-signal-card">
          <span class="link-panel-label">Decision Rule</span>
          <strong>Deepen the paths that are already validated first</strong>
          <p>Stabilize delivery, entry-point closure, and reusable capabilities first, then decide which parts deserve more product thickness.</p>
        </article>
        <article class="brand-hero__panel roadmap-signal-card roadmap-signal-card--wide">
          <span class="link-panel-label">How To Read It</span>
          <strong>To judge the current version, focus on what has already landed instead of what might happen later</strong>
          <p>If you are evaluating whether this platform is ready for onboarding now, use the four checks below first instead of being pulled off course by long-term planning.</p>
          <div class="roadmap-signal-checks">
            <div class="roadmap-signal-check">
              <span>Now</span>
              <strong>The core of <code>1.0</code> is trusted delivery, script onboarding, and multi-tenant governance</strong>
            </div>
            <div class="roadmap-signal-check">
              <span>Being filled in</span>
              <strong><code>1.1</code> focuses on auto-registration, renewal, and a lower-support loop</strong>
            </div>
            <div class="roadmap-signal-check">
              <span>Later decision</span>
              <strong><code>2.0</code> is where the product decides which paths deserve deeper standardization</strong>
            </div>
            <div class="roadmap-signal-check">
              <span>Do not misread</span>
              <strong>Multi-step orchestration and the longer-term <code>3.0 / 4.0</code> directions are still not current promised capability</strong>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">1.0</p>
      <h2>Trusted AI execution delivery edition</h2>
      <ul class="brand-list">
        <li>One customer, one tenant</li>
        <li>Unified capability catalog, script onboarding, and Skill mapping</li>
        <li>Python scripts are currently the first mature execution asset</li>
        <li>The general resource layer and executor registry layer have already landed</li>
        <li>A first sample of HTTP capability access already exists on the <code>public</code> super-admin side, while tenant-side access is still limited to a read-only ledger</li>
        <li>Whitelisted tenant admins currently keep only a minimal cross-tenant console and do not get the platform-governance pages directly</li>
        <li>Administrator detection now closes around explicit admin or super-admin markers and no longer relies on <code>user_id == 1</code></li>
        <li>Recommendation, confirmation, execution, and audit for the intelligent brain</li>
        <li>Template distribution, installation, rollback, and logs</li>
        <li>The no-login experience page, login, signup, signup result page, the personal-free menu set, the HTTP read-only ledger, lightweight self-service purchase of local script slots, and the smallest <code>execfabric-cli</code> loop</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Next</p>
      <h2>These are the next things to tighten first</h2>
      <ul class="brand-list">
        <li>Turn auto-registration, entry-point activation, payment, renewal, expiry reminders, and shutdown flows into a lower-support loop</li>
        <li>Turn the highest-frequency capabilities in small-team collaboration into more stable solutions</li>
        <li>Converge packages, quotas, and delivery boundaries into clearer product rules</li>
        <li>Continue tightening branding, initialization, and menu boundaries in the shared-SaaS frontend into a stable solution</li>
        <li>Turn CLI and Local Agent binding codes, heartbeat, status, and remote execution into a more formal solution</li>
        <li>Continue converging real third-party payment, outbound reminders, shared-SaaS branding, and remaining lifecycle automation into a stable external narrative</li>
      </ul>
    </article>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">1.1 Now</p>
      <h2>The first landed segment of <code>1.1</code></h2>
      <ul class="brand-list">
        <li>The <code>public</code> super-admin order center has already switched into a real lifecycle mode</li>
        <li>It already supports order creation, payment confirmation, activation execution, renewal-order prefilling, renewal-reminder scans, and expiry-shutdown scans</li>
        <li>The personal free frontend already has lightweight self-service local script-slot purchase and an explanation of monthly or annual team-edition registration entry points</li>
        <li>Order state, customer state, and tenant state already write back together instead of staying as sample-only display</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">1.1 Pending</p>
      <h2>The parts of <code>1.1</code> that are not finished yet</h2>
      <ul class="brand-list">
        <li>A complete general subscription center for the personal free path, end-user self-service renewal and auto-charge entry points, and deeper reconciliation capability</li>
        <li>Real third-party payment gateways, signature verification, and formal payment callbacks</li>
        <li>Outbound reminder channels such as email, enterprise WeChat, and SMS</li>
      </ul>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Path Ladder</p>
    <h2>Above the version stages, how the real usage path is layered today</h2>
    <table>
      <thead>
        <tr>
          <th>Layer</th>
          <th>Current carrying path</th>
          <th>Relationship to the roadmap</th>
          <th>Suggested entry</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Free path</td>
          <td>Public experience, login and signup, personal entry</td>
          <td>Part of the already-established customer-acquisition and experience entry of <code>1.0</code></td>
          <td><a href="../guide/getting-started.html">Getting Started</a></td>
        </tr>
        <tr>
          <td>Local script-slot expansion</td>
          <td>Lightweight personal-space expansion</td>
          <td>The first landed loop of <code>1.1</code>, not the same thing as a complete general subscription center</td>
          <td><a href="./personal-billing-membership.html">Billing &amp; Membership</a></td>
        </tr>
        <tr>
          <td>Standard team edition</td>
          <td>Shared-SaaS formal tenant entry</td>
          <td>Still converging around the <code>1.0</code> delivery base and the <code>1.1</code> upgrade path</td>
          <td><a href="./customer-flow.html">Customer Flow / Delivery</a></td>
        </tr>
        <tr>
          <td>Enterprise delivery</td>
          <td>Single-tenant delivery, private deployment, or deeper deployment control</td>
          <td>The most mature formal-delivery mainline under current <code>1.0</code></td>
          <td><a href="./deployment.html">Deployment</a></td>
        </tr>
      </tbody>
    </table>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">1.0 Core</p>
      <h2>Current focus of <code>1.0</code></h2>
      <ul class="brand-list">
        <li>Python scripts as the first mature execution asset</li>
        <li>Skill remains the user-visible capability unit</li>
        <li>The resource layer and executor registry layer are already in place, so connecting a second or third capability type should not require another large schema rewrite</li>
        <li>Delivery, execution, security boundaries, and continuous updates are becoming one loop</li>
        <li>Single-capability execution is already usable</li>
        <li>The local bridge and CLI support deeper onboarding</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">2.0 Expansion</p>
      <h2>What <code>2.0</code> continues to expand</h2>
      <ul class="brand-list">
        <li>After the lower-support loop of <code>1.1</code> is stable, continue turning auto-registration, payment, renewal, prompts, and self-service support into more stable standard solutions</li>
        <li>A more general capability-asset registration model</li>
        <li>More capability onboarding such as APIs, data connectors, document templates, and approval flows</li>
        <li>Multi-Skill or multi-step orchestration only enters real development after composite-demand decomposition, node-level confirmation, formal downgrade or rollback, and partial-success and recoverable-state handling are in place</li>
        <li>Further generalization of installation, distribution, upgrade, and rollback strategies</li>
        <li>Continued convergence of small-team collaboration, packaging, and standard capability boundaries</li>
      </ul>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Upgrade Route</p>
    <h2>How version stages carry the path from free entry to formal delivery</h2>
    <div class="brand-grid brand-grid--four">
      <article class="brand-card brand-card--nested">
        <h3>01. Feel the value through the free entry</h3>
        <p>Use the public experience page, login, signup, and signup result page to understand what the platform is first. After login, the personal entry currently continues through the valid personal-free menu set, the HTTP read-only ledger, and the lightweight local script-slot expansion entry so the user can verify whether the AI scheduling chain is real.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>02. Keep individual usage on local script slots first</h3>
        <p>If the user is already continuously connecting scripts in personal space but is not yet in multi-user collaboration, the better current path is lightweight local script-slot expansion first. CLI and the local bridge are support capabilities, not a separate commercial line.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>03. Move multi-user collaboration into the standard team edition first</h3>
        <p>If the customer mainly needs standard capability and lighter collaboration, the current best path is the formal tenant entry carried by the shared-SaaS frontend, to verify first whether the standard team path is enough.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>04. Move into enterprise delivery when the boundary is stronger</h3>
        <p>If the project involves intranet access, stronger isolation, exclusive branding, exclusive pages, or formal project acceptance, continue into enterprise <code>1.0</code> single-tenant delivery. <code>2.0</code> is where the reusable path becomes thicker later.</p>
      </article>
    </div>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Current Upgrade Logic</p>
      <h2>How the upgrade path moves</h2>
      <ul class="brand-list">
        <li>Step one: let users feel the value through the free entry first</li>
        <li>Step two: if they are still in personal continuous usage, continue with lightweight local script-slot expansion first</li>
        <li>Step three: when they move into multi-user collaboration, let the formal tenant entry of the standard team edition take over first</li>
        <li>Step four: when stronger isolation and formal acceptance are needed, move into enterprise <code>1.0</code> delivery while continuing to stabilize the lower-support loop of <code>1.1</code></li>
      </ul>
      <p><a href="./deployment.html">Back to Deployment</a></p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">What 2.0 Changes</p>
      <h2>How this path changes after <code>2.0</code></h2>
      <ul class="brand-list">
        <li>The boundaries between the free entry, small-team plans, and formal delivery will become clearer</li>
        <li>Packages, quotas, resources, conversion, and operating metrics will converge into clearer rules</li>
        <li>The parts inside CLI and Local Agent that prove real value will continue moving toward a stable solution</li>
        <li>The path of "try first, then upgrade by scenario" will finally become a standardized chain</li>
      </ul>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">1.0 Companion Docs</p>
    <h2>To judge whether <code>1.0</code> has really landed, continue with these three pages</h2>
    <div class="brand-link-grid">
      <a class="brand-link-card" href="./file-results.html">
        <span>Files</span>
        <strong>Files &amp; Results</strong>
        <p>Many <code>1.0</code> projects do not return text only. They need to handle input files, batch states, and result files, and this chain deserves its own explanation.</p>
      </a>
      <a class="brand-link-card" href="./deliverables.html">
        <span>Deliverables</span>
        <strong>Deliverables</strong>
        <p>To judge whether <code>1.0</code> is really deliverable, it is more useful to see which entry points, instructions, and result artifacts the customer actually gets than to stare at feature names.</p>
      </a>
      <a class="brand-link-card" href="./onboarding-checklist.html">
        <span>Checklist</span>
        <strong>Onboarding Checklist</strong>
        <p>When a real project is about to move, preparing the script directory, README, sample files, dependencies, and risk boundaries is more valuable than continuing to talk abstractly about version numbers.</p>
      </a>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Near-Term Focus</p>
    <h2>The standard service packages that fit the current stage</h2>
    <div class="brand-grid brand-grid--three">
      <article class="brand-card brand-card--nested">
        <h3>E-commerce, content, and operations-data automation</h3>
        <p>Turn scattered scripts, spreadsheet handling, and data-organizing tasks into stable entry points first. These are the easiest scenarios to close early and the easiest to reuse later.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>Script governance and automation ops for technical teams</h3>
        <p>Build a delivery line around script governance, task scheduling, log traces, and local execution bridging. This stays closest to the current capability boundary.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>Small formal customers that need intranet access or private deployment</h3>
        <p>These customers validate multi-tenant isolation, permission boundaries, and the formal delivery chain best, but customization depth still needs to be controlled so only platform-strengthening projects are taken.</p>
      </article>
    </div>
    <p><a href="../materials/service-packages.html">View the full kickoff and service-package explanation</a></p>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Why Both Lines</p>
      <h2>Why the formal-customer line and the free path run in parallel</h2>
      <ul class="brand-list">
        <li>If the product did only the enterprise line, individuals and small teams would lack a low-friction validation entry</li>
        <li>If it did only the free path, formal delivery, isolated governance, and long-term usage would stay incomplete</li>
        <li>So the current route stays as follows: formal customer delivery under <code>1.0</code> carries formal scenarios, while the personal free edition carries experience and upgrade entry points, and both lines share the same trusted-execution base</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Current Rhythm</p>
      <h2>Current version rhythm</h2>
      <ul class="brand-list">
        <li><code>1.0</code> is the current main delivery line with usable foundations already in place</li>
        <li><code>1.1</code> prioritizes stabilizing auto-registration, payment, renewal, reminders, and lower-support handling</li>
        <li><code>2.0</code> is the next stage of standardization and convergence</li>
        <li>More capabilities will expand gradually according to real demand</li>
      </ul>
    </article>
  </section>

  <section class="brand-card brand-card--cta editions-next-read">
    <div class="brand-card__row">
      <div>
        <p class="brand-kicker">Next Read</p>
        <h2>After understanding the roadmap, focus on the real delivery chain</h2>
        <p class="brand-lead">The more effective move is usually to align the real delivery chain of current <code>1.0</code> and <code>1.1</code> first, then decide whether the path deserves to be turned into a more standard upgrade route.</p>
      </div>
      <div class="brand-link-grid brand-link-grid--compact">
        <a class="brand-link-card" href="./deployment.html">
          <span>Deployment</span>
          <strong>Deployment</strong>
        </a>
        <a class="brand-link-card" href="./file-results.html">
          <span>Files</span>
          <strong>Files &amp; Results</strong>
        </a>
        <a class="brand-link-card" href="./deliverables.html">
          <span>Deliverables</span>
          <strong>Deliverables</strong>
        </a>
        <a class="brand-link-card" href="./onboarding-checklist.html">
          <span>Checklist</span>
          <strong>Onboarding Checklist</strong>
        </a>
      </div>
    </div>
  </section>
</div>
