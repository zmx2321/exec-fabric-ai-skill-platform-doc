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
        <span class="brand-pill">CLI Scope</span>
        <strong>CLI 已经能登录、注册脚本、读取 manifest、直接触发后端执行，并输出 Web 打开链接。</strong>
        <p>远程任务拉取、Agent 常驻执行和非 Python 脚本的真实远程上传，仍属于下一阶段。</p>
      </div>
      <p class="brand-lead">
        <strong>execgov-cli</strong> 是 ExecGov 当前面向个人开发者、交付实施和本地执行场景的命令行入口。
        这条线的重点不是“做一个命令行皮肤”，而是把 <strong>本地脚本、本地环境和平台控制面</strong> 接成一条现在能用的桥。
      </p>
      <div class="brand-chip-list">
        <span class="brand-chip">login</span>
        <span class="brand-chip">register</span>
        <span class="brand-chip">list / run</span>
        <span class="brand-chip">agent describe / start</span>
      </div>
      <div class="brand-actions">
        <a class="cta-button cta-button--brand" href="../contact.html#lead-form">申请试用 / 接入咨询</a>
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
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">accountFlow</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'login'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'register'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'config'</span><span class="matrix-panel__punct">]</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">workspaceFlow</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'manifest'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'metadata'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'upload_register'</span><span class="matrix-panel__punct">]</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">executionFlow</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'run'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'agent_describe'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'agent_start'</span><span class="matrix-panel__punct">]</span></span>
          </div>
          <div class="matrix-panel__callout">LOCAL WORKSPACE / PLATFORM CONTROL</div>
        </div>
        <div class="matrix-panel__footer">
          <span class="matrix-panel__tag"><span class="matrix-panel__key">scope</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">local_bridge</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">state</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">usable_now</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">next</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">agent_runtime</span></span>
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
        <li><code>agent describe</code> / <code>agent start</code></li>
        <li>sidecar JSON 覆盖、注释 / docstring / 文件名元数据提取</li>
        <li><code>.execgov-manifest.json</code> 生成</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Not Yet</p>
      <h2>当前未实现</h2>
      <ul class="brand-list">
        <li><code>pull</code> / <code>publish</code> / <code>doctor</code></li>
        <li><code>agent heartbeat</code> / <code>agent status</code> / <code>agent run</code></li>
        <li>远程任务拉取与执行日志回传</li>
        <li>非 Python 脚本的真实远程上传注册</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Positioning</p>
      <h2>它在平台里的角色</h2>
      <ul class="brand-list">
        <li>个人开发者和技术用户的本地接入入口</li>
        <li>项目交付时整理脚本目录、生成 manifest 的工具</li>
        <li>Agent 方向的骨架起点，而不是成熟产品</li>
        <li>把控制面和本地环境接起来的第一层桥接接口</li>
      </ul>
    </article>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Public Onboarding</p>
      <h2>CLI 和公开入口的关系</h2>
      <ul class="brand-list">
        <li>陌生用户先从 Web 免登录体验页感受执行链路，再决定是否继续注册 / 登录。</li>
        <li>CLI 是更深一层的本地接入入口，不替代 <code>/experience</code> 这条公开演示路径。</li>
        <li>适合已经确认要把本地脚本、本地环境和平台控制面接起来的用户继续往下走。</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Web Entry</p>
      <h2>CLI 与 Web 入口如何配合</h2>
      <ul class="brand-list">
        <li>网页端已经提供 <code>/experience</code>、<code>/login</code>、<code>/register</code> 三个正式入口。</li>
        <li>注册成功目前由成功提示框承接，再跳回登录页。</li>
        <li>体验页用于先感受执行链路，不承接真实业务写入。</li>
      </ul>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Quick Start</p>
    <h2>快速开始</h2>
    <div class="brand-grid brand-grid--two">
      <article class="brand-card brand-card--nested">
        <h3>1. 开发环境安装</h3>
        <pre><code class="language-bash">cd execgov-cli
python -m pip install -e .
execgov-cli --help</code></pre>
        <p>这是当前最适合开发、自测和本地接入的安装方式。安装完成后就不必每次都写 <code>python -m execgov_cli.cli</code>。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>2. 直接运行入口</h3>
        <pre><code class="language-bash">cd execgov-cli
python -m execgov_cli.cli --help</code></pre>
        <p>如果你还没做本地安装，可以先直接用模块方式运行。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>3. 保存登录配置</h3>
        <pre><code class="language-bash">cd execgov-cli
python -m execgov_cli.cli login \
  --token YOUR_API_TOKEN \
  --api-base http://localhost:6089/dev-api \
  --web-base http://localhost:80</code></pre>
        <p>默认配置文件路径是 <code>~/.execgov/config.json</code>，也可以通过 <code>EXECGOV_CONFIG_DIR</code> 覆盖。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>4. 注册脚本目录</h3>
        <pre><code class="language-bash">python -m execgov_cli.cli register ./examples/scripts</code></pre>
        <p>命令会扫描目录、生成 <code>.execgov-manifest.json</code>，并默认调用后端 <code>upload-register</code> 完成 Python 脚本入库。</p>
      </article>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Common Commands</p>
    <h2>常用命令</h2>
    <div class="brand-grid brand-grid--two">
      <article class="brand-card brand-card--nested">
        <h3>只看结果，不落盘</h3>
        <pre><code class="language-bash">python -m execgov_cli.cli register ./examples/scripts --dry-run --print-json</code></pre>
        <p>适合先确认提取出的 Skill 元数据是否符合预期。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>只生成 manifest</h3>
        <pre><code class="language-bash">python -m execgov_cli.cli register ./examples/scripts --manifest-only</code></pre>
        <p>如果你当前不想请求后端接口，可以先只生成本地清单。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>查看 manifest 摘要</h3>
        <pre><code class="language-bash">python -m execgov_cli.cli list ./examples/scripts</code></pre>
        <p><code>list</code> 当前必须显式传入 workspace，而且该目录下需要已存在 <code>.execgov-manifest.json</code>。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>直接触发 Skill 执行</h3>
        <pre><code class="language-bash">python -m execgov_cli.cli run backup_local \
  --request-text "CLI 手动执行备份" \
  --input-json '{"sourcePath":"/tmp/demo"}'</code></pre>
        <p>如果登录时保存了 <code>--web-base</code>，CLI 会额外输出对应的 Web 打开链接。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>查看 Agent 描述</h3>
        <pre><code class="language-bash">python -m execgov_cli.cli agent describe</code></pre>
        <p>当前主要用于输出本地 Agent 描述信息，方便平台侧对接后续执行端。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>预留本地 Agent 模式</h3>
        <pre><code class="language-bash">python -m execgov_cli.cli register ./examples/scripts --execution-mode local-agent
python -m execgov_cli.cli agent start</code></pre>
        <p>现在会把 <code>execution_mode</code> 写入 manifest，并保留本地 Agent 入口，但还不会真的接管执行。</p>
      </article>
    </div>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Metadata</p>
      <h2>元数据提取规则</h2>
      <ul class="brand-list">
        <li>优先读取同名 sidecar 文件：<code>&lt;script_stem&gt;.execgov-skill.json</code></li>
        <li>其次读取脚本顶部注释或 Python 顶部 docstring</li>
        <li>最后再从文件名自动推断</li>
      </ul>
      <p>当前 manifest 中至少会包含 <code>script_code</code>、<code>skill_name</code>、<code>description</code>、<code>risk_level</code>、<code>timeout_seconds</code>、<code>execution_mode</code> 和 <code>inputs</code> 等字段。</p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Current Rules</p>
      <h2>需要提前知道的限制</h2>
      <ul class="brand-list">
        <li><code>register</code> 默认不是只落本地 manifest，而是会真正请求后端注册接口</li>
        <li>远程入库目前主要支持 Python 脚本</li>
        <li><code>run</code> 会直接调用后端手动执行接口，并输出可打开的 Web 链接</li>
        <li>远程任务拉取、本地常驻执行和日志回传属于下一阶段</li>
      </ul>
    </article>
  </section>

  <section class="brand-card brand-card--cta">
    <div class="brand-card__row">
      <div>
        <p class="brand-kicker">Next Read</p>
        <h2>继续查看产品定位，或直接进入本地接入沟通</h2>
        <p class="brand-lead">可继续查看产品概览、核心能力和部署方式；已有脚本目录时，也可直接带着接入问题进入沟通。</p>
      </div>
      <div class="brand-link-grid brand-link-grid--compact">
        <a class="brand-link-card" href="./index.html">
          <span>Product</span>
          <strong>产品概览</strong>
        </a>
        <a class="brand-link-card" href="./capabilities.html">
          <span>Capabilities</span>
          <strong>核心能力</strong>
        </a>
        <a class="brand-link-card" href="./deployment.html">
          <span>Deployment</span>
          <strong>部署方式</strong>
        </a>
        <a class="brand-link-card" href="../contact.html#lead-form">
          <span>Lead</span>
          <strong>申请试用 / 接入咨询</strong>
        </a>
      </div>
    </div>
  </section>
</div>
