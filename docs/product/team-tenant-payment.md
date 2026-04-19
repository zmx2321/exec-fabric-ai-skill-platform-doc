---
aside: false
outline: false
lastUpdated: false
---

<div class="brand-page-shell brand-page-shell--editions">
  <section class="brand-hero">
    <div>
      <p class="brand-kicker">Tenant Payment Guide</p>
      <h1>标准租户支付说明</h1>
      <div class="brand-hero__panel">
        <span class="brand-pill">Current Tenant Truth</span>
        <strong>标准团队版当前不是“站内完整收银台 + 自动开通”的口径，而是“站内保留订单和租户上下文，跳链动小铺付款，再回站凭兑换码继续开通或恢复”。</strong>
        <p>这页单独把标准租户首购、续费恢复、兑换码回站和当前边界拆开，避免再混回个人免费线或私有化模板里一起讲。</p>
      </div>
      <div class="brand-chip-list">
        <span class="brand-chip">tenant_1001 样板位</span>
        <span class="brand-chip">tenant_1003+ 正式共享租户</span>
        <span class="brand-chip">链动小铺付款</span>
        <span class="brand-chip">兑换码回站</span>
        <span class="brand-chip">自动开通仍未对外承诺</span>
      </div>
      <div class="brand-actions">
        <a class="cta-button cta-button--brand" href="./personal-billing-membership.html">先看个人免费线支付说明</a>
        <a class="cta-button" href="./customer-flow.html">客户交付与使用说明</a>
        <a class="cta-button" href="/contact.html#lead-form">沟通场景 / 开通方式</a>
      </div>
    </div>
    <div class="brand-hero__media brand-hero__media--compact">
      <div class="brand-grid brand-grid--single">
        <article class="brand-hero__panel">
          <span class="link-panel-label">Current Entry</span>
          <strong>当前有哪些独立入口</strong>
          <ul class="brand-list">
            <li><strong>支付说明页</strong>：先把当前付款方式、回站路径和边界讲清楚。</li>
            <li><strong>注册页</strong>：首购场景，登记团队信息、域名、管理员账号和方案。</li>
            <li><strong>续费恢复页</strong>：已有租户继续恢复时读取当前租户上下文。</li>
            <li><strong>兑换码页</strong>：付款完成后回站，继续核销并推进开通或恢复。</li>
          </ul>
        </article>
        <article class="brand-hero__panel">
          <span class="link-panel-label">Current Boundary</span>
          <strong>当前还没开放什么</strong>
          <ul class="brand-list">
            <li>还不是完整通用订阅中心，不承诺所有租户都能自助在线完成全部流程。</li>
            <li>自动续费当前只记录偏好，不代表已经接通自动代扣。</li>
            <li>自动开通、自动恢复、正式第三方支付回调和签名验签仍未作为对外承诺。</li>
            <li>私有化模板 <code>tenant_1002</code> 当前不走公开自助支付，仍按项目制 / 合同制成交。</li>
          </ul>
        </article>
      </div>
    </div>
  </section>

  <section class="brand-grid brand-grid--three">
    <article class="brand-card">
      <p class="brand-kicker">Step 01</p>
      <h2>首购登记</h2>
      <ul class="brand-list">
        <li>先在租户端登记团队 / 客户名称、联系人、默认域名和管理员账号。</li>
        <li>站内先保留待处理订单和租户上下文，不直接把付款动作散在多个表单里。</li>
        <li>这一步主要由标准 SaaS 共享租户前端承接，<code>tenant_1001</code> 只作为样板位同步验证。</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Step 02</p>
      <h2>跳链动小铺付款</h2>
      <ul class="brand-list">
        <li>当前月租 / 年租会按当前环境配置决定是否跳不同商品页。</li>
        <li>如果没有配置独立商品链接，两个方案会回落到同一链动小铺入口。</li>
        <li>对外口径应始终写成“当前付款统一走链动小铺，最终商品分流以当前环境配置为准”。</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Step 03</p>
      <h2>兑换码回站处理</h2>
      <ul class="brand-list">
        <li>付款完成后，用户回到兑换码页，把兑换码和站内订单对上。</li>
        <li>核销成功后，订单继续走开通或恢复逻辑，而不是用户自己手工改租户状态。</li>
        <li>结果页、登录页和租户工作台会继续承接后续确认动作。</li>
      </ul>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Role Split</p>
    <h2>1001 / 1002 / 1003+ 的付款口径怎么区分</h2>

| 租户位 | 当前定位 | 当前付款方式 | 不该混淆成什么 |
| --- | --- | --- | --- |
| `tenant_1001` | 标准租户样板 / 主链路验证位 | 与标准 SaaS 同一付款口径，用来验证首购、续费、兑换码回站流程 | 不要把它写成公开正式售卖位 |
| `tenant_1002` | 数据自动化平台 / 私有化模板 / 内部交付控制台 | 当前按项目制 / 合同制成交，不开放公开自助支付 | 不要把它写成标准团队版线上订阅页 |
| `tenant_1003+` | 标准 SaaS 共享租户 | 当前正式团队版入口；站内保留订单和上下文，链动小铺付款后再回站处理 | 不要再继续复制单独前端工程 |

  </section>

  <section class="brand-card">
    <p class="brand-kicker">What To Say</p>
    <h2>当前更准确的对外说法</h2>
    <ul class="brand-list">
      <li>可以说：标准租户端已经把支付说明、首购登记、续费恢复和兑换码回站入口拆开。</li>
      <li>可以说：当前付款统一走链动小铺，回站后继续按订单推进开通或恢复。</li>
      <li>不能说：标准团队版已经有完整通用在线订阅中心。</li>
      <li>不能说：所有租户都已经自动开通、自动恢复并接通正式第三方支付回调。</li>
      <li>不能说：`tenant_1002` 私有化模板当前也是公开标准支付入口。</li>
    </ul>
  </section>
</div>
