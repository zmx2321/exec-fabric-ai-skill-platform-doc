---
aside: false
outline: false
lastUpdated: false
---

<div class="brand-page-shell brand-page-shell--editions">
  <section class="brand-hero">
    <div>
      <p class="brand-kicker">Tenant Payment Guide</p>
      <h1>Payment Guide for Formal Team Tenants</h1>
      <div class="brand-hero__panel">
        <span class="brand-pill">Current Tenant Truth</span>
        <strong>The current standard-tenant line should not be described as “full in-site checkout plus auto-activation.” The real current framing is: keep the order and tenant context on-site, jump to LDXP for payment, and then return with a redeem code to continue activation or recovery.</strong>
        <p>This page separates first purchase, renewal recovery, redeem-code return, and the current boundary so they no longer get mixed back into the personal free path or the private-deployment template.</p>
      </div>
      <div class="brand-chip-list">
        <span class="brand-chip">tenant_1001 sample slot</span>
        <span class="brand-chip">tenant_1003+ shared SaaS</span>
        <span class="brand-chip">LDXP payment</span>
        <span class="brand-chip">Redeem-code return</span>
        <span class="brand-chip">Auto-activation still not promised</span>
      </div>
      <div class="brand-actions">
        <a class="cta-button cta-button--brand" href="./personal-billing-membership.html">Read the free-path payment guide first</a>
        <a class="cta-button" href="./customer-flow.html">Read customer delivery and usage</a>
        <a class="cta-button" href="/en/contact.html#lead-form">Discuss scenario or onboarding</a>
      </div>
    </div>
    <div class="brand-hero__media brand-hero__media--compact">
      <div class="brand-grid brand-grid--single">
        <article class="brand-hero__panel">
          <span class="link-panel-label">Current Entry</span>
          <strong>Which separate pages exist now</strong>
          <ul class="brand-list">
            <li><strong>Payment guide</strong>: explains the current payment path, return path, and real boundary first.</li>
            <li><strong>Registration page</strong>: for first purchase, where team info, domain, admin account, and plan are registered.</li>
            <li><strong>Renewal / recovery page</strong>: for existing tenants that need to resume service.</li>
            <li><strong>Redeem page</strong>: where users return after payment and continue the activation or recovery path.</li>
          </ul>
        </article>
        <article class="brand-hero__panel">
          <span class="link-panel-label">Current Boundary</span>
          <strong>What is still not open today</strong>
          <ul class="brand-list">
            <li>This is still not a complete general subscription center for all tenants.</li>
            <li>Auto-renew only records the preference for now; it does not mean automatic deduction is live.</li>
            <li>Auto-activation, auto-recovery, formal third-party payment callbacks, and signature verification are still not part of the public promise.</li>
            <li>The private-deployment template <code>tenant_1002</code> still does not run a public self-serve payment path and remains project or contract based.</li>
          </ul>
        </article>
      </div>
    </div>
  </section>

  <section class="brand-grid brand-grid--three">
    <article class="brand-card">
      <p class="brand-kicker">Step 01</p>
      <h2>On-site onboarding first</h2>
      <ul class="brand-list">
        <li>The tenant side first records the team or customer name, contact, domain, and admin account.</li>
        <li>The order and tenant context stay on-site before payment, instead of scattering payment actions across unrelated forms.</li>
        <li>This is carried by the shared-SaaS frontend. <code>tenant_1001</code> only verifies the same formal path as a sample slot.</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Step 02</p>
      <h2>Jump to LDXP for payment</h2>
      <ul class="brand-list">
        <li>The current environment decides whether monthly and annual plans jump to separate product URLs.</li>
        <li>If separate product URLs are not configured, both plans fall back to the same LDXP entry.</li>
        <li>The public wording should stay: “payment currently goes through LDXP, and the final product split depends on the current environment configuration.”</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Step 03</p>
      <h2>Return with a redeem code</h2>
      <ul class="brand-list">
        <li>After payment, the user returns with a redeem code and matches it against the on-site order.</li>
        <li>Once the redeem succeeds, the order continues into activation or recovery instead of the user manually editing tenant state.</li>
        <li>The result page, login page, and tenant workspace then take over the next confirmation step.</li>
      </ul>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Role Split</p>
    <h2>How 1001, 1002, and 1003+ differ on payment framing</h2>

| Slot | Current role | Current payment framing | What it should not be confused with |
| --- | --- | --- | --- |
| `tenant_1001` | Standard-tenant sample / main-path verification slot | Shares the same payment framing as standard SaaS, used to verify first purchase, renewal, and redeem-code return | It should not be described as the public commercial sales slot |
| `tenant_1002` | Data automation platform / private-deployment template / internal delivery console | Project or contract based today, without public self-serve payment | It should not be described as the standard team-edition online subscription page |
| `tenant_1003+` | Standard SaaS shared tenant | The formal current public team entry; keep the order and context on-site, pay through LDXP, then return for redeem or continued handling | It should not go back to cloning a new frontend per tenant |

  </section>

  <section class="brand-card">
    <p class="brand-kicker">What To Say</p>
    <h2>More accurate public wording right now</h2>
    <ul class="brand-list">
      <li>It is accurate to say that the standard tenant side already separates payment guidance, first-purchase onboarding, renewal recovery, and redeem-code return.</li>
      <li>It is accurate to say that payment currently goes through LDXP first, then returns on-site to continue activation or recovery against the order.</li>
      <li>It is not accurate to say that the standard team edition already has a complete general online subscription center.</li>
      <li>It is not accurate to say that all tenants already support automatic activation, automatic recovery, and formal third-party callback handling.</li>
      <li>It is not accurate to say that the private-deployment template <code>tenant_1002</code> is also a public standard payment entry today.</li>
    </ul>
  </section>
</div>
