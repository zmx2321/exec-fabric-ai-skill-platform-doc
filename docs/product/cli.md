---
aside: false
outline: false
lastUpdated: false
---

<div class="brand-page-shell brand-page-shell--cli">
  <section class="brand-hero">
    <div>
      <p class="brand-kicker">CLI Guide</p>
      <h1>CLI 指引</h1>
      <div class="brand-hero__panel">
        <span class="brand-pill">Minimal Formal Loop</span>
        <strong>CLI 已经能完成登录、云端注册、本地路径登记、直接执行、机器绑定，以及当前机器上的 Local Agent 轮询与执行。</strong>
        <p>网页入口更适合先感知单文件接入；CLI 更适合单文件或目录批量登记、本机路径登记和本地执行桥接。</p>
      </div>
      <p class="brand-lead">
        <strong>execgov-cli</strong> 是 ExecGov 当前面向个人开发者、交付实施和本地执行场景的命令行入口。
        重点不是“做一个命令行皮肤”，而是把 <strong>本地脚本目录、本地运行环境和平台控制面</strong> 接成一条今天已经能用的桥。
      </p>
      <p class="brand-lead">
        CLI 这条线承接的是平台外部控制面与本地环境之间的桥接，用来把本地脚本、执行环境和平台治理链路接起来。
      </p>
      <div class="brand-chip-list">
        <span class="brand-chip">login</span>
        <span class="brand-chip">register</span>
        <span class="brand-chip">list / run</span>
        <span class="brand-chip">agent bind / describe / start</span>
      </div>
      <div class="brand-actions">
        <a class="cta-button cta-button--brand" href="../contact.html#lead-form">本地接入 / 线索分流</a>
        <a class="cta-button" href="./capabilities.html">查看核心能力</a>
      </div>
    </div>
    <div class="brand-hero__media brand-hero__media--compact">
      <div class="matrix-panel matrix-panel--contact">
        <div class="matrix-panel__hud">
          <span>EXECGOV // CLI BRIDGE</span>
          <span>DOC 07</span>
        </div>
        <div class="matrix-panel__canvas">
          <div class="matrix-panel__trace matrix-panel__trace--top"></div>
          <div class="matrix-panel__trace matrix-panel__trace--mid"></div>
          <div class="matrix-panel__trace matrix-panel__trace--bottom"></div>
          <div class="matrix-panel__stack">
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">accountFlow</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'login'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'bind_machine'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'config'</span><span class="matrix-panel__punct">]</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">workspaceFlow</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'manifest'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'metadata'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'upload_or_local_register'</span><span class="matrix-panel__punct">]</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">executionFlow</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'run'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'agent_describe'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'agent_start'</span><span class="matrix-panel__punct">]</span></span>
          </div>
          <div class="matrix-panel__callout">LOCAL WORKSPACE / PLATFORM CONTROL</div>
        </div>
        <div class="matrix-panel__footer">
          <span class="matrix-panel__tag"><span class="matrix-panel__key">scope</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">local_bridge</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">state</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">usable_now</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">next</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">deeper_agent_governance</span></span>
        </div>
      </div>
    </div>
  </section>

  <section class="brand-grid brand-grid--three">
    <article class="brand-card">
      <p class="brand-kicker">Implemented</p>
      <h2>当前已实现</h2>
      <ul class="brand-list">
        <li><code>login</code></li>
        <li><code>register</code></li>
        <li><code>list</code></li>
        <li><code>run</code></li>
        <li><code>agent describe</code>、<code>agent bind</code>、<code>agent start</code></li>
        <li>sidecar JSON 覆盖，以及注释 / docstring / 文件名元数据提取</li>
        <li><code>.execgov-manifest.json</code> 生成</li>
        <li><code>register --execution-mode cloud</code> 调用后端 <code>upload-register</code>，完成 Python / Shell 云端注册</li>
        <li><code>register --execution-mode local-agent</code> 调用后端 <code>local-register</code>，完成单文件或目录的本机路径登记</li>
        <li><code>agent start</code> 会在当前机器轮询、领取、执行并回传 Local Agent 作业</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Not Yet</p>
      <h2>当前未实现</h2>
      <ul class="brand-list">
        <li><code>pull</code> / <code>publish</code> / <code>doctor</code></li>
        <li><code>agent heartbeat</code> / <code>agent status</code> / <code>agent run</code></li>
        <li>更通用的 Agent 在线治理、更多控制面和更细粒度多机调度</li>
        <li>更多非 Python / Shell 资源类型的云端上传注册</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Positioning</p>
      <h2>它在平台里的角色</h2>
      <ul class="brand-list">
        <li>个人开发者和技术用户更深一层的本地接入入口</li>
        <li>项目交付时整理脚本目录、生成 manifest 的工具</li>
        <li>平台控制面和本地运行环境之间的第一层桥接接口</li>
        <li>当前最小正式 Local Agent 闭环，而不是已经做完的通用 Agent 产品</li>
      </ul>
    </article>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Public Onboarding</p>
      <h2>CLI 和公开入口的关系</h2>
      <ul class="brand-list">
        <li>陌生用户还是应该先从 Web 免登录体验页感受执行链路，再决定是否继续注册 / 登录。</li>
        <li>CLI 是更深一层的本地接入入口，不替代 <code>/experience</code> 这条公开体验路径。</li>
        <li>适合已经明确要把本地脚本、本地环境或内网资源接到平台控制面的人继续往下走。</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Web Entry</p>
      <h2>CLI 与 Web 入口如何配合</h2>
      <ul class="brand-list">
        <li>网页端已经提供 <code>/experience</code>、<code>/login</code>、<code>/register</code> 三个正式入口。</li>
        <li>注册成功当前会先进入 <code>/register/result</code> 结果页，再回到登录与个人主链路。</li>
        <li>体验页用于先感受执行链路；当前左侧是 Python 示例 <code>task_brief_demo.py</code>，右侧是 Shell 示例 <code>clean_log_demo.sh</code>。</li>
        <li>网页端上传注册已经支持 <code>.py</code>、<code>.sh</code>、<code>.bash</code>。</li>
        <li>网页入口更适合可见的单文件接入；CLI 负责可重复的单文件 / 目录登记、本机路径登记和 Local Agent 执行桥接。</li>
      </ul>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">CLI In Path</p>
    <h2>CLI 在四层路径里更偏哪一层</h2>
    <table>
      <thead>
        <tr>
          <th>路径</th>
          <th>CLI 的角色</th>
          <th>该怎么理解</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>免费线</td>
          <td>不是默认入口</td>
          <td>第一次接触平台的人应先走 Web 体验和注册流程，而不是一上来就使用 CLI。</td>
        </tr>
        <tr>
          <td>本地脚本位增购</td>
          <td>个人持续使用的本地桥接工具</td>
          <td>适合已经在个人空间持续接脚本的人继续整理目录、生成 manifest，或者让脚本保留在本机但由平台派发回当前机器执行。</td>
        </tr>
        <tr>
          <td>标准团队版</td>
          <td>辅助接入和补充本地执行能力</td>
          <td>团队版主入口仍是正式租户前端，CLI 更像桥接工具，不是正式团队入口本身。</td>
        </tr>
        <tr>
          <td>企业交付</td>
          <td>本地环境 / 内网资源桥接层</td>
          <td>当项目涉及本地环境、内网资源或混合执行时，CLI / Local Agent 路线会更关键。</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Cloud Mode</p>
      <h2><code>cloud</code> 模式当前做什么</h2>
      <ul class="brand-list">
        <li>CLI 会扫描目录、提取元数据、生成 <code>.execgov-manifest.json</code>，然后调用后端 <code>upload-register</code></li>
        <li>Python 和 Shell 脚本当前已经走真实的云端上传注册链路</li>
        <li>如果目录里还有 <code>bat</code>、<code>node</code> 之类脚本类型，这条路径暂时还不会完整云端上传</li>
        <li>这是把脚本内容进入平台注册中心的主路径</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Local-Agent Mode</p>
      <h2><code>local-agent</code> 模式当前做什么</h2>
      <ul class="brand-list">
        <li>CLI 会调用后端 <code>local-register</code>，登记本机路径而不是上传源码</li>
        <li>同一条命令既支持整个目录，也支持单个脚本文件</li>
        <li>Python、Shell、Bat、Node 的本地路径当前都可以登记到这条模式</li>
        <li>当前机器的 <code>machine_id</code>、<code>machine_name</code>、<code>agent_name</code> 会一并登记，用于后续作业路由</li>
      </ul>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Quick Start</p>
    <h2>快速开始</h2>
    <div class="brand-grid brand-grid--two">
      <article class="brand-card brand-card--nested">
        <h3>1. 安装到当前环境</h3>
        <pre><code class="language-bash">cd execgov-cli
python -m pip install -e .
execgov-cli --help</code></pre>
        <p>这是当前最适合开发、自测和交付联调的安装方式。对外标准命令是 <code>execgov-cli</code>。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>2. 保存登录配置</h3>
        <pre><code class="language-bash">execgov-cli login \
  --token YOUR_API_TOKEN \
  --api-base http://tenant1000.localhost:6089 \
  --web-base http://localhost:81</code></pre>
        <p>默认配置文件是 <code>~/.execgov/config.json</code>。免费开发者默认应指向个人免费版域名；企业客户则指向各自租户域名。<code>public</code> 不是普通 CLI 用户的默认入口。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>3. 以云端模式登记脚本目录</h3>
        <pre><code class="language-bash">execgov-cli register ./examples/scripts</code></pre>
        <p>命令会扫描目录、生成 <code>.execgov-manifest.json</code>，并调用后端 <code>upload-register</code>。Python 和 Shell 当前已经走真实的云端注册链路。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>4. 登记本地脚本并启动 Local Agent</h3>
        <pre><code class="language-bash">execgov-cli register ./examples/scripts --execution-mode local-agent
execgov-cli register ./examples/scripts/backup.py --execution-mode local-agent
execgov-cli agent start</code></pre>
        <p>这条路径会保留源码在当前机器，只登记目录或单文件路径，并让当前机器领取并执行被派发回来的 Local Agent 作业。</p>
      </article>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Common Commands</p>
    <h2>常用命令</h2>
    <div class="brand-grid brand-grid--two">
      <article class="brand-card brand-card--nested">
        <h3>只检查扫描结果，不写文件</h3>
        <pre><code class="language-bash">execgov-cli register ./examples/scripts --dry-run --print-json</code></pre>
        <p>适合先确认提取出来的 Skill 元数据是否符合预期。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>只生成 manifest</h3>
        <pre><code class="language-bash">execgov-cli register ./examples/scripts --manifest-only</code></pre>
        <p>如果你暂时不想请求后端接口，可以先只生成本地 manifest。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>查看 manifest 摘要</h3>
        <pre><code class="language-bash">execgov-cli list ./examples/scripts</code></pre>
        <p><code>list</code> 当前必须显式传入 workspace，而且该目录下需要已存在 <code>.execgov-manifest.json</code>。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>直接触发 Skill 执行</h3>
        <pre><code class="language-bash">execgov-cli run backup_local \
  --request-text "CLI 手动执行备份" \
  --input-json '{"sourcePath":"/tmp/demo"}'</code></pre>
        <p>如果登录时保存了 <code>--web-base</code>，CLI 会额外输出可打开的 Web 链接。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>查看或绑定当前机器</h3>
        <pre><code class="language-bash">execgov-cli agent describe
execgov-cli agent bind \
  --machine-name "Alice MacBook" \
  --agent-name "alice-local-agent"</code></pre>
        <p><code>agent bind</code> 用来持久化稳定的机器身份，供后续本地登记和 Local Agent 路由使用。如果不手工绑定，登录和 Local Agent 命令也会自动补齐默认值。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>只跑一次 Local Agent 队列</h3>
        <pre><code class="language-bash">execgov-cli agent start --once</code></pre>
        <p>这是最直接的手动测试方式：最多领取一个作业、在当前机器执行，并把完成结果回传到平台。</p>
      </article>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Metadata</p>
    <h2>元数据和 sidecar 文件怎么协作</h2>
    <div class="brand-grid brand-grid--two">
      <article class="brand-card brand-card--nested">
        <h3>sidecar 命名</h3>
        <pre><code class="language-text">backup.py
backup.execgov-skill.json
.execgov-manifest.json</code></pre>
        <p>标准 sidecar 文件名是 <code>&lt;script_stem&gt;.execgov-skill.json</code>，目录 manifest 是 <code>.execgov-manifest.json</code>。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>提取规则</h3>
        <p>CLI 会先从注释、docstring 和文件名提取元数据，再应用显式 sidecar 覆盖，最后把目录级摘要写进 manifest。</p>
        <p>这也是为什么它既能做注册工具，也能做轻量的本地交付整理工具。</p>
      </article>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Path &amp; Machine Rules</p>
    <h2>本地路径和机器绑定，当前按什么规则用</h2>
    <div class="brand-grid brand-grid--two">
      <article class="brand-card brand-card--nested">
        <h3>路径不要求统一</h3>
        <ul class="brand-list">
          <li>客户不需要把所有脚本放到固定盘符或固定父目录。</li>
          <li>同一个用户的不同脚本，可以分别登记不同绝对路径。</li>
          <li>Windows、macOS、Linux 的路径可以完全不同。</li>
          <li>网页更适合单文件路径登记；CLI 更适合目录和批量登记。</li>
        </ul>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>机器绑定要收口</h3>
        <ul class="brand-list">
          <li>同一个 Skill 当前不能同时绑定多台机器，后端会直接拦住。</li>
          <li>如果你有多台机器，应按“每台机器各自登记自己的脚本 / Skill”来用。</li>
          <li><code>agent bind</code> 和本地登记会把 <code>machine_id / machine_name / agent_name</code> 一并写入平台。</li>
          <li>平台派发本地作业时，会按登记时绑定的机器路由回对应设备。</li>
        </ul>
      </article>
    </div>
    <table>
      <thead>
        <tr>
          <th>场景</th>
          <th>当前做法</th>
          <th>为什么这样做</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>只有一个本地脚本</td>
          <td>可直接登记单文件路径</td>
          <td>适合先把本机执行链路跑通，不必先整理整仓目录。</td>
        </tr>
        <tr>
          <td>脚本依赖模板和同目录工具模块</td>
          <td>登记实际入口文件，并保留同目录结构</td>
          <td>Local Agent 执行时会在脚本所在目录启动，便于相对路径依赖生效。</td>
        </tr>
        <tr>
          <td>本地和线上都存在同一能力</td>
          <td>当前运行时优先走本地脚本</td>
          <td>先满足客户本机环境、内网资源和本地数据依赖。</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Current Boundary</p>
      <h2>CLI 当前已经证明什么</h2>
      <ul class="brand-list">
        <li>CLI 已经不只是本地 manifest 生成器，而是会真实调用后端注册与执行接口。</li>
        <li>当前最小正式本地闭环已经成立：本地脚本可以登记、被派发回同一台机器、在本机执行，并把结果完成回写到平台。</li>
        <li>Local Agent 执行中会持续回传 stdout / stderr 进度；如果脚本通过 <code>__EXECGOV_RESULT__=JSON</code> 声明结果产物，CLI 还会自动上传结果文件并回写下载信息。</li>
        <li>网页入口仍更适合可见的单文件接入；CLI 更适合重复登记、目录接入和本机路径调度。</li>
        <li>当同一能力同时存在本地脚本和线上脚本时，当前运行时优先走本地脚本。</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Later Boundary</p>
      <h2>哪些还属于后续增强</h2>
      <ul class="brand-list">
        <li><code>heartbeat</code>、<code>status</code>、更丰富的 Agent 控制面和在线治理</li>
        <li>更细粒度的多机 / 多 Agent 调度与更完整的治理策略</li>
        <li>除了当前 Python / Shell 主线之外，更完整的多类型云端注册路径</li>
      </ul>
    </article>
  </section>

  <section class="brand-card brand-card--cta">
    <div class="brand-card__row">
      <div>
        <p class="brand-kicker">Next Read</p>
        <h2>结合场景、部署方式和接入准备清单一起看</h2>
        <p class="brand-lead">CLI 更适合和本地执行场景、部署形态、客户接入准备清单一起判断，而不是把它当成孤立的命令行工具页。</p>
      </div>
      <div class="brand-link-grid brand-link-grid--compact">
        <a class="brand-link-card" href="./scenarios.html">
          <span>Scenarios</span>
          <strong>应用场景</strong>
        </a>
        <a class="brand-link-card" href="./deployment.html">
          <span>Deployment</span>
          <strong>部署方式</strong>
        </a>
        <a class="brand-link-card" href="./onboarding-checklist.html">
          <span>Checklist</span>
          <strong>接入准备清单</strong>
        </a>
        <a class="brand-link-card" href="../contact.html#lead-form">
          <span>Lead</span>
          <strong>本地接入 / 线索分流</strong>
        </a>
      </div>
    </div>
  </section>
</div>
