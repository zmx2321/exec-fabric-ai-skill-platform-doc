---
aside: false
outline: false
lastUpdated: false
---

<div class="brand-page-shell">
  <section class="brand-hero">
    <div>
      <p class="brand-kicker">Customer Flow &amp; Delivery</p>
      <h1>客户使用流程 / 交付与热更新</h1>
      <div class="brand-hero__panel">
        <span class="brand-pill">Practical View</span>
        <strong>交付不是把页面上线就结束，而是让客户后续还能继续安全地新增、更新和使用能力。</strong>
        <p>这正是“客户使用流程”和“热更新流程”需要单独写清楚的原因。</p>
      </div>
      <p class="brand-lead">
        这页把 SmartFlow 当前最容易被问到的几件事一次讲清楚：
        <strong>客户拿到什么、客户怎么用、平台怎么交付、脚本怎么持续更新。</strong>
        它不是再讲一遍概念，而是把“真实落地时到底怎么跑”直接展开。
      </p>
      <div class="brand-chip-list">
        <span class="brand-chip">一个客户一个网址</span>
        <span class="brand-chip">手动执行 + AI 推荐</span>
        <span class="brand-chip">热更新</span>
        <span class="brand-chip">租户隔离</span>
      </div>
      <div class="brand-actions">
        <a class="cta-button cta-button--brand" href="../contact.html#lead-form">沟通交付 / 试用</a>
        <a class="cta-button" href="./deployment.html">查看部署方式</a>
      </div>
    </div>
    <div class="brand-hero__media brand-hero__media--compact">
      <div class="matrix-panel matrix-panel--contact">
        <div class="matrix-panel__hud">
          <span>SMARTFLOW // CUSTOMER FLOW</span>
          <span>DOC 08</span>
        </div>
        <div class="matrix-panel__canvas">
          <div class="matrix-panel__trace matrix-panel__trace--top"></div>
          <div class="matrix-panel__trace matrix-panel__trace--mid"></div>
          <div class="matrix-panel__trace matrix-panel__trace--bottom"></div>
                    <div class="matrix-panel__stack">
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">delivery</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'tenant'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'url'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'account'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'skills'</span><span class="matrix-panel__punct">]</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">usage</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'manual_run'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'ai_recommend'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'confirm'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'result'</span><span class="matrix-panel__punct">]</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__kw">return</span> <span class="matrix-panel__fn">hotUpdate</span><span class="matrix-panel__punct">(</span><span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'review'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'sync'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'register'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'authorize'</span><span class="matrix-panel__punct">]</span><span class="matrix-panel__punct">)</span></span>
          </div>
          <div class="matrix-panel__callout">DELIVERY SHOULD STAY OPERABLE AFTER GO-LIVE</div>
        </div>
        <div class="matrix-panel__footer">
          <span class="matrix-panel__tag"><span class="matrix-panel__key">delivery</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">active</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">update</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">controlled</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">tenant</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">isolated</span></span>
        </div>
      </div>
    </div>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Delivery Package</p>
      <h2>标准交付时，客户会拿到什么</h2>
      <ul class="brand-list">
        <li>一个独立租户</li>
        <li>一个独立访问网址</li>
        <li>一组客户专属脚本能力</li>
        <li>平台账号与基础权限</li>
        <li>客户使用说明与客户脚本热更新说明</li>
      </ul>
      <p>重点不是“给一个后台账号”，而是交付一套客户独立可运行、可更新、可继续扩展的 AI 执行空间。</p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Boundary</p>
      <h2>交付边界当前怎么定</h2>
      <ul class="brand-list">
        <li>一个客户一个租户，一个客户一个网址</li>
        <li>客户只在自己的租户空间里使用自己的专属能力</li>
        <li>平台优先保证安全隔离和稳定执行</li>
        <li>当前不默认包含公共市场、客户自行发版、无审批高风险自动执行</li>
      </ul>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">End To End</p>
    <h2>从需求确认到热更新生效，一条链路怎么走</h2>
    <div class="brand-grid brand-grid--four">
      <article class="brand-card brand-card--nested">
        <h3>01. 明确客户场景</h3>
        <p>先确认客户要解决什么业务问题、要交付哪些脚本能力、哪些需要 AI 推荐、哪些需要人工确认。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>02. 开通租户和入口</h3>
        <p>平台按项目开通独立租户、独立访问网址、初始账号和对应权限边界。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>03. 首批能力接入</h3>
        <p>平台把首批脚本完成审核、同步、注册和授权，确保客户登录后就能直接看到自己的能力。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>04. 客户开始使用</h3>
        <p>客户通过页面手动执行，或在智能大脑中输入需求，由平台在当前租户范围内推荐能力。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>05. 运行中持续反馈</h3>
        <p>客户根据执行结果、公告信息和实际业务使用情况，提出补充能力或更新脚本的需求。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>06. 按热更新流程提交</h3>
        <p>客户补充脚本目录、README、所属租户、是否允许 AI 调用、是否需要人工确认等信息。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>07. 平台完成治理动作</h3>
        <p>平台继续执行审核、同步、注册、版本登记、授权绑定和权限验证，不需要重新部署整个平台。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>08. 当前租户内正式生效</h3>
        <p>更新后的能力只在所属租户内生效，其他租户不可见、不可执行，AI 推荐范围也不会串租户。</p>
      </article>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Delivery Checklist</p>
    <h2>交付清单可以怎么对齐</h2>
    <table>
      <thead>
        <tr>
          <th>交付项</th>
          <th>客户拿到 / 看到什么</th>
          <th>平台负责什么</th>
          <th>备注</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>独立租户</td>
          <td>自己的租户空间</td>
          <td>建立租户、隔离数据和权限边界</td>
          <td>一个客户一个租户</td>
        </tr>
        <tr>
          <td>独立访问网址</td>
          <td>自己的访问入口</td>
          <td>开通访问地址与登录入口</td>
          <td>一个客户一个网址</td>
        </tr>
        <tr>
          <td>登录账号</td>
          <td>账号、初始密码或初始化方式</td>
          <td>初始化账号与基础权限</td>
          <td>权限按项目交付</td>
        </tr>
        <tr>
          <td>客户专属能力</td>
          <td>当前租户内可见的能力列表</td>
          <td>审核、注册、授权绑定</td>
          <td>不跨租户共享</td>
        </tr>
        <tr>
          <td>公告与结果查看</td>
          <td>公告入口、执行结果和相关输出</td>
          <td>公告发布、结果展示、下载入口开放</td>
          <td>按当前租户可见范围控制</td>
        </tr>
        <tr>
          <td>热更新说明</td>
          <td>脚本新增 / 更新的接入流程</td>
          <td>给出目录规范、审核流程和授权方式</td>
          <td>默认仍由平台审核</td>
        </tr>
        <tr>
          <td>本地混合执行</td>
          <td>按需接入 CLI / Agent</td>
          <td>根据项目接入桥接能力</td>
          <td>不是所有标准交付默认包含，详见 <a href="./cli.html">CLI 指引</a></td>
        </tr>
      </tbody>
    </table>
  </section>

<section class="brand-card">
  <p class="brand-kicker">Path Matching</p>
  <h2>不同诉求更适合哪条路径</h2>
  <table>
    <thead>
      <tr>
        <th>当前诉求</th>
        <th>更适合的路径</th>
        <th>当前状态</th>
        <th>说明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>想先体验真实执行链路</td>
        <td>公开体验页 + 注册 / 登录</td>
        <td>当前已成立</td>
        <td>适合先感受 AI 推荐、确认、执行和结果返回，再决定是否进入正式交付。</td>
      </tr>
      <tr>
        <td>已经有明确客户，要正式上线交付</td>
        <td>单租户交付</td>
        <td>当前主线</td>
        <td>一个客户一个网址、一个客户一个租户、客户只看自己的专属能力。</td>
      </tr>
      <tr>
        <td>需要统一运营多个客户</td>
        <td>平台治理 + 单租户交付</td>
        <td>当前可组合</td>
        <td><code>public</code> 负责治理，各客户租户保持隔离，公告、模板、日志和台账统一管理。</td>
      </tr>
      <tr>
        <td>脚本依赖本地环境或内网数据</td>
        <td>混合执行 + <a href="./cli.html">CLI / Agent 路线</a></td>
        <td>当前部分成立</td>
        <td>控制面仍在平台侧，执行端按项目接入，不把内网执行路径直接暴露到浏览器页面。</td>
      </tr>
      <tr>
        <td>希望直接买标准团队产品</td>
        <td>先按当前交付路径评估，再关注 <a href="./editions.html">版本路线</a></td>
        <td>标准团队版属于 <code>2.0</code> 方向</td>
        <td>当前公开已成立的是企业交付主线和个人免费入口，标准化团队版仍在下一阶段。</td>
      </tr>
    </tbody>
  </table>
</section>

  <section class="brand-card">
    <p class="brand-kicker">Customer Usage</p>
    <h2>客户当前怎么使用平台</h2>
    <div class="brand-grid brand-grid--three">
      <article class="brand-card brand-card--nested">
        <h3>1. 登录自己的网址</h3>
        <p>客户交付完成后，会拿到访问网址、登录账号和初始密码或初始化方式。登录后进入的是自己的独立租户空间。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>2. 看到自己的能力，而不是源码</h3>
        <p>客户看到的是当前租户下被授权的能力列表，而不是底层脚本源码路径或其他客户的数据。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>3. 选择手动执行或 AI 对话执行</h3>
        <p>客户可以直接手动执行，也可以通过智能大脑输入自然语言，让平台在当前租户和权限范围内推荐能力。</p>
      </article>
    </div>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Manual Run</p>
      <h2>手动执行的基本流程</h2>
      <ol class="brand-list">
        <li>登录平台</li>
        <li>找到当前可见的能力列表</li>
        <li>选择目标能力</li>
        <li>按要求填写输入信息</li>
        <li>提交执行</li>
        <li>查看执行结果或产物</li>
      </ol>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">AI Assisted</p>
      <h2>AI 对话执行的基本流程</h2>
      <ol class="brand-list">
        <li>在智能大脑页面输入需求</li>
        <li>平台在当前租户和当前权限范围内推荐可用能力</li>
        <li>若能力需要确认，则先人工确认</li>
        <li>确认后平台执行对应脚本</li>
        <li>页面返回执行结果</li>
      </ol>
    </article>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Notice &amp; Result</p>
      <h2>客户还能看到什么</h2>
      <ul class="brand-list">
        <li>执行结果摘要、产出内容和相关输出信息</li>
        <li>平台公告与本租户公告</li>
        <li>公告标题、来源、发布人、发布时间和正文</li>
        <li>文件上传与结果下载等当前已开放的客户侧入口</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Safety Rule</p>
      <h2>使用时需要注意的边界</h2>
      <ul class="brand-list">
        <li>客户只能看到自己租户下被授权的能力</li>
        <li>看不到其他客户的脚本和执行记录</li>
        <li>AI 不会推荐其他客户的能力</li>
        <li>部分高风险能力需要人工确认后才会执行</li>
      </ul>
    </article>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Local Execution</p>
      <h2>如果脚本依赖本地环境或内网资源怎么办</h2>
      <p>这类场景通常不是把内网目录直接暴露给 Web 页面，而是通过 CLI / Agent 做桥接。平台继续负责入口、规划、权限和审计，本地环境负责执行。</p>
      <p><a href="./cli.html">查看 CLI 指引</a></p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Who Owns What</p>
      <h2>上线后，客户和平台各自负责什么</h2>
      <ul class="brand-list">
        <li>客户负责提供脚本、README、场景说明和更新需求</li>
        <li>平台负责审核、同步、注册、授权和权限验证</li>
        <li>客户负责在自己业务里确认结果是否满足预期</li>
        <li>平台负责保证租户边界、执行安全和能力治理逻辑</li>
      </ul>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Hot Update Flow</p>
    <h2>客户脚本热更新怎么走</h2>
    <div class="brand-grid brand-grid--three">
      <article class="brand-card brand-card--nested">
        <h3>1. 准备脚本目录</h3>
        <p>按约定准备脚本目录，至少包含 <code>main.py</code> 和 <code>README.md</code>。README 至少说明脚本作用、输入、输出和执行前置条件。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>2. 上传到所属租户目录</h3>
        <p>客户把脚本放到自己的租户目录，不同客户不能混用目录，<code>public/</code> 仅由平台维护。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>3. 平台审核</h3>
        <p>平台确认该脚本属于哪个租户、是否允许 AI 调用、是否允许手动执行、是否需要人工确认。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>4. 平台同步到执行目录</h3>
        <p>平台运行时使用的是受控相对路径，而不是执行脚本仓库外的任意绝对路径。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>5. 平台完成注册与授权</h3>
        <p>平台会完成 Script 注册、Script 版本登记、Skill 关联、Skill 版本登记和租户授权绑定。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>6. 权限验证后正式可用</h3>
        <p>平台会验证当前租户可见可执行、其他租户不可见不可执行，确认 AI 推荐范围没有串租户。</p>
      </article>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Hot Update Submit</p>
    <h2>客户发起热更新时，建议一次给齐这些信息</h2>
    <table>
      <thead>
        <tr>
          <th>提交项</th>
          <th>是否必须</th>
          <th>用途</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>脚本文件</td>
          <td>必须</td>
          <td>作为实际执行内容</td>
          <td>至少包含 <code>main.py</code></td>
        </tr>
        <tr>
          <td>README.md</td>
          <td>必须</td>
          <td>给平台审核和后续维护使用</td>
          <td>建议写明作用、输入、输出、前置条件、是否生成文件</td>
        </tr>
        <tr>
          <td>所属租户</td>
          <td>必须</td>
          <td>决定脚本最终授权范围</td>
          <td>不同客户不能混用目录和授权</td>
        </tr>
        <tr>
          <td>业务场景说明</td>
          <td>必须</td>
          <td>帮助平台判断接入方式和命名</td>
          <td>建议说明脚本解决什么问题、面向谁使用</td>
        </tr>
        <tr>
          <td>是否允许 AI 调用</td>
          <td>建议提供</td>
          <td>决定智能大脑是否可推荐该能力</td>
          <td>不是所有脚本都默认进入 AI 推荐范围</td>
        </tr>
        <tr>
          <td>是否允许手动执行</td>
          <td>建议提供</td>
          <td>决定页面是否开放手动入口</td>
          <td>可与 AI 调用分开控制</td>
        </tr>
        <tr>
          <td>是否需要人工确认</td>
          <td>建议提供</td>
          <td>控制高风险动作的确认环节</td>
          <td>适用于会改写数据或触发外部动作的能力</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Why Hot Update</p>
      <h2>热更新真正带来的效果</h2>
      <ul class="brand-list">
        <li>平台本身不需要重新部署</li>
        <li>当前租户可以直接看到新能力或新版本</li>
        <li>其他租户不会受到影响</li>
        <li>平台方仍保留审核、注册和授权控制权</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Misunderstanding</p>
      <h2>几个常见误解，最好提前说清楚</h2>
      <ul class="brand-list">
        <li>热更新不等于客户可以绕过平台直接上线</li>
        <li>热更新不等于一更新就对所有租户开放</li>
        <li>AI 推荐也受租户授权约束，不会跨租户推荐</li>
        <li>本地执行需求通常是接 CLI / Agent，不是直接暴露内网执行路径</li>
      </ul>
    </article>
  </section>

<section class="brand-card">
  <p class="brand-kicker">FAQ</p>
  <h2>客户和售前最常问的几个问题</h2>
  <div class="brand-grid brand-grid--two">
    <article class="brand-card brand-card--nested">
      <h3>一开始是不是必须私有化</h3>
      <p>不一定。当前更应该先看数据边界、客户规模和执行位置，再决定是单租户交付、平台治理组合，还是混合执行路线。</p>
    </article>
    <article class="brand-card brand-card--nested">
      <h3>热更新会不会影响其他客户</h3>
      <p>不会。脚本更新完成后，仍然只在所属租户范围内注册和授权，其他租户不会自动获得可见或可执行权限。</p>
    </article>
    <article class="brand-card brand-card--nested">
      <h3>客户能不能自己上传脚本后直接上线</h3>
      <p>当前 <code>1.0</code> 默认不这样做。平台仍保留审核、注册、授权和权限验证流程，不支持绕过平台直接正式上线。</p>
    </article>
    <article class="brand-card brand-card--nested">
      <h3>AI 会不会推荐到别的客户能力</h3>
      <p>不会。当前推荐范围受租户和权限共同约束，AI 不会跨租户推荐其他客户的脚本或能力。</p>
    </article>
    <article class="brand-card brand-card--nested">
      <h3>本地脚本和内网资源能不能接进来</h3>
      <p>可以，但通常不是让浏览器直接碰本地路径，而是通过 <code>smartflow-cli</code> 和后续 Agent 路线承接本地执行桥接。</p>
    </article>
    <article class="brand-card brand-card--nested">
      <h3>免费版和企业交付是不是两套完全无关的系统</h3>
      <p>不是。两条线当前共用同一套可信执行底座，只是入口语义、交付边界和目标用户不同。</p>
    </article>
  </div>
</section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Acceptance</p>
      <h2>客户验收时建议重点确认</h2>
      <ul class="brand-list">
        <li>是否能登录自己的网址</li>
        <li>是否只能看到自己的能力</li>
        <li>是否能执行自己的能力</li>
        <li>是否能查看执行结果</li>
        <li>是否可以按流程继续更新脚本</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">One Sentence</p>
      <h2>一句话总结这页的核心口径</h2>
      <p>SmartFlow 交付给客户的，不只是一个登录入口，而是一套客户独立可运行、可更新、可继续扩展的 AI 执行空间；热更新也不是重部署平台，而是在当前租户范围内完成审核、注册、授权后正式生效。</p>
    </article>
  </section>

  <section class="brand-card brand-card--cta">
    <div class="brand-card__row">
      <div>
        <p class="brand-kicker">Next Read</p>
        <h2>如果你想继续看平台能力，或者直接沟通交付</h2>
        <p class="brand-lead">建议继续看核心能力、部署方式和架构说明；如果你已经有真实脚本和客户场景，也可以直接带着目录结构和需求来聊。</p>
      </div>
      <div class="brand-link-grid brand-link-grid--compact">
        <a class="brand-link-card" href="./capabilities.html">
          <span>Capability</span>
          <strong>核心能力</strong>
        </a>
        <a class="brand-link-card" href="./deployment.html">
          <span>Deployment</span>
          <strong>部署方式</strong>
        </a>
        <a class="brand-link-card" href="./architecture.html">
          <span>Architecture</span>
          <strong>架构说明</strong>
        </a>
        <a class="brand-link-card" href="../contact.html#lead-form">
          <span>Lead</span>
          <strong>沟通交付 / 试用</strong>
        </a>
      </div>
    </div>
  </section>
</div>
