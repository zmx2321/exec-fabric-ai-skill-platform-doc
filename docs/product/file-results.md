---
aside: false
outline: false
lastUpdated: false
---

<div class="brand-page-shell">
  <section class="brand-hero">
    <div>
      <p class="brand-kicker">File Upload &amp; Result Delivery</p>
      <h1>文件上传 / 结果下载</h1>
      <div class="brand-hero__panel">
        <span class="brand-pill">Execution Input / Output</span>
        <strong>很多真实任务不是只返回一段文本，而是要接文件、处理文件，再交回结果文件。</strong>
        <p>重点说明用户会实际接触到的上传、处理和下载体验。</p>
      </div>
      <p class="brand-lead">
        ExecFabric 当前已经支持把
        <strong>输入文件、批次状态、处理产物和结果下载</strong>
        接成一条对客户可理解的执行链路。重点不是“能不能传文件”，而是
        <strong>文件进入后如何被受控处理，并把结果按交付边界交回来。</strong>
      </p>
      <div class="brand-chip-list">
        <span class="brand-chip">普通上传</span>
        <span class="brand-chip">大文件分片</span>
        <span class="brand-chip">批次状态</span>
        <span class="brand-chip">结果下载</span>
      </div>
      <div class="brand-actions">
        <a class="cta-button cta-button--brand" href="../contact.html#lead-form">沟通文件处理场景</a>
        <a class="cta-button" href="./customer-flow.html">查看客户流程 / 交付</a>
      </div>
    </div>
    <div class="brand-hero__media brand-hero__media--compact">
      <div class="matrix-panel matrix-panel--contact">
        <div class="matrix-panel__hud">
          <span>EXECFABRIC // FILE FLOW</span>
          <span>DOC 09</span>
        </div>
        <div class="matrix-panel__canvas">
          <div class="matrix-panel__trace matrix-panel__trace--top"></div>
          <div class="matrix-panel__trace matrix-panel__trace--mid"></div>
          <div class="matrix-panel__trace matrix-panel__trace--bottom"></div>
          <div class="matrix-panel__stack">
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">fileFlow</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'file_upload'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'batch_track'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'process'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'result_download'</span><span class="matrix-panel__punct">]</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">largeFileFlow</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__punct">[</span><span class="matrix-panel__string">'init'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'chunk_transfer'</span><span class="matrix-panel__punct">,</span> <span class="matrix-panel__string">'merge_complete'</span><span class="matrix-panel__punct">]</span></span>
            <span class="matrix-panel__line"><span class="matrix-panel__kw">const</span> <span class="matrix-panel__ident">resultPolicy</span> <span class="matrix-panel__op">=</span> <span class="matrix-panel__string">'controlled_result_delivery'</span></span>
          </div>
          <div class="matrix-panel__callout">FILES IN / TRACEABLE PROCESS / RESULTS OUT</div>
        </div>
        <div class="matrix-panel__footer">
          <span class="matrix-panel__tag"><span class="matrix-panel__key">upload</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">ready</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">batch</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">traceable</span></span>
          <span class="matrix-panel__tag"><span class="matrix-panel__key">result</span><span class="matrix-panel__punct">:</span> <span class="matrix-panel__value">downloadable</span></span>
        </div>
      </div>
    </div>
  </section>

  <section class="brand-grid brand-grid--four">
    <article class="brand-card">
      <p class="brand-kicker">01</p>
      <h2>普通上传</h2>
      <p>适合常见输入文件直接提交，先进入受控上传链路，再进入后续处理或人工确认环节。</p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">02</p>
      <h2>大文件分片</h2>
      <p>如果文件较大，可以按分片方式上传，避免一次性传输失败后整包重来。</p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">03</p>
      <h2>批次状态</h2>
      <p>文件不是传完就消失，而是归入批次，便于后续处理、追踪和结果对照。</p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">04</p>
      <h2>结果下载</h2>
      <p>如果任务产出的是文件，平台可以把结果文件作为正式产物入口交给客户下载。</p>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">End To End</p>
    <h2>从上传到拿到结果，一条链路怎么理解</h2>
    <div class="brand-grid brand-grid--three">
      <article class="brand-card brand-card--nested">
        <h3>01. 提交输入文件</h3>
        <p>客户在当前项目开放的上传入口提交输入文件，入口形态以具体交付项目为准。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>02. 文件进入受控批次</h3>
        <p>文件会先进入受控批次，方便后续处理、追踪和结果对照。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>03. 按项目规则处理</h3>
        <p>平台按当前项目配置决定是直接处理、等待处理器执行，还是进入更长的业务流程。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>04. 查看批次与状态</h3>
        <p>用户可以直接看到“这一批文件当前到了哪一步”。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>05. 生成结果产物</h3>
        <p>如果任务会产出 Excel、报表、汇总文件或其他正式结果，平台会把它整理成可交付入口。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>06. 下载或继续使用</h3>
        <p>用户拿到结果文件后，可以继续下载、复核，或进入下一段业务动作。</p>
      </article>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Template Result</p>
    <h2>如果结果文件依赖模板，最终下载的应该是什么</h2>
    <div class="brand-grid brand-grid--two">
      <article class="brand-card brand-card--nested">
        <h3>不是中间表</h3>
        <p>像月度报表、模板报表、集团汇总表这类场景，平台最终交给客户下载的，不应是中间 CSV 或中间结果表，而应是按交付要求生成后的成品文件。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>通常怎么生成</h3>
        <p>先复制标准模板文件，再按批次或月份重命名，然后把结果数据写入模板工作表，最后把这份成品文件作为正式产物回传给用户下载。</p>
      </article>
    </div>
    <ul class="brand-list">
      <li>这类结果文件更接近“交付件”，不是脚本内部过程文件。</li>
      <li>平台下载链路应直接指向最后那份成品文件，而不是过程中的临时输出。</li>
      <li>对话执行里看到的下载入口，应该和客户最终要交付或复核的文件保持一致。</li>
    </ul>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Chat Binding</p>
    <h2>在对话执行里上传文件后，脚本怎么知道该读哪一个文件</h2>
    <div class="brand-grid brand-grid--two">
      <article class="brand-card brand-card--nested">
        <h3>不是靠脚本自己去猜</h3>
        <p>当前做法不是让脚本去扫整个上传目录，也不是让它靠文件名碰运气，而是把这次上传形成的批次号显式挂到当前对话执行里。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>页面入口已经收口</h3>
        <p>用户现在可以直接在对话执行底部快捷区点击“上传文件”，按钮紧挨“上传脚本”，旁边的说明图标会提示这批文件会绑定到当前会话。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>确认执行时会带入当前批次</h3>
        <p>上传完成后，当前对话会保存这次 <code>uploadBatchId</code>。当用户确认执行某个 Skill 时，后端会把这批文件的快照一并带进这次执行。</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>脚本拿到的是这次执行的文件快照</h3>
        <p>脚本运行时会收到当前批次号、输入文件列表和批次目录信息，所以它处理的是当前这次确认执行绑定的文件，而不是别的历史批次。</p>
      </article>
    </div>
    <table>
      <thead>
        <tr>
          <th>环节</th>
          <th>当前怎么做</th>
          <th>作用</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>上传文件</td>
          <td>前端生成受控批次</td>
          <td>保证文件先进入可追踪批次，而不是散落上传。</td>
        </tr>
        <tr>
          <td>触发对话</td>
          <td>当前会话带上 <code>uploadBatchId</code></td>
          <td>明确这次执行到底要消费哪一批输入。</td>
        </tr>
        <tr>
          <td>确认执行</td>
          <td>后端回填 <code>fileService</code> 快照</td>
          <td>让执行器拿到批次号、目录和输入文件清单。</td>
        </tr>
        <tr>
          <td>脚本运行</td>
          <td>只读取当前绑定批次</td>
          <td>避免误读别的批次、别的客户或别的历史文件。</td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <th>脚本里直接读什么</th>
          <th>当前含义</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>EXECFABRIC_UPLOAD_BATCH_NO</code></td>
          <td>当前绑定批次号，用来判断这次执行到底消费哪一批输入。</td>
        </tr>
        <tr>
          <td><code>EXECFABRIC_UPLOAD_INPUT_FILES_JSON</code></td>
          <td>当前批次输入文件数组，脚本可以直接拿到 <code>fileName</code>、<code>fileId</code>、大小等信息。</td>
        </tr>
        <tr>
          <td><code>EXECFABRIC_UPLOAD_FILE_SERVICE_JSON</code></td>
          <td>完整的文件服务快照，包含 <code>batchNo</code>、<code>inputFiles</code> 等上下文。</td>
        </tr>
        <tr>
          <td><code>EXECFABRIC_SKILL_INPUT_PAYLOAD_JSON</code></td>
          <td>本次执行的完整输入载荷，里面同样会保留 <code>uploadBatchId</code> 和 <code>fileService</code>。</td>
        </tr>
      </tbody>
    </table>
    <p>当前 Python / Shell 执行器都会把这些变量注入运行环境。如果用户重新上传了一批新文件并再次确认执行，新的批次就会覆盖旧批次。脚本应始终按当前执行上下文里的批次信息读取输入，而不是凭“最新文件”这种不稳定规则处理。</p>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Fit</p>
    <h2>什么场景更适合走这条链路</h2>
    <table>
      <thead>
        <tr>
          <th>场景</th>
          <th>为什么适合</th>
          <th>适合程度</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>先上传原始文件，再生成报表</td>
          <td>输入和输出都是文件</td>
          <td>当前已适合</td>
          <td>例如结果表、汇总表、导出文件、处理后产物。</td>
        </tr>
        <tr>
          <td>文件较大，担心一次传输失败</td>
          <td>需要更稳定的上传方式</td>
          <td>当前已适合</td>
          <td>可按大文件分片方式处理，而不是整包重试。</td>
        </tr>
        <tr>
          <td>需要保留一批输入文件的处理状态</td>
          <td>便于追踪批次和结果</td>
          <td>当前已适合</td>
          <td>平台强调批次视角，而不是只显示“上传成功”四个字。</td>
        </tr>
        <tr>
          <td>只需要文本问答，不涉及文件</td>
          <td>文件链路不是重点</td>
          <td>不必强行使用</td>
          <td>这类场景先看智能执行和 AI 推荐路径即可。</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Current Scope</p>
      <h2>当前适用范围</h2>
      <ul class="brand-list">
        <li>不是所有项目都默认开放上传中心，要看当前交付范围。</li>
        <li>如果项目包含文件处理，可以提供文件上传与结果下载链路。</li>
        <li>如果项目涉及长耗时任务，结果返回方式会按项目体验设计继续增强。</li>
        <li>文件链路是业务数据处理入口，不等于脚本热更新入口。</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Safety Rule</p>
      <h2>使用时需要注意的安全边界</h2>
      <ul class="brand-list">
        <li>客户只能看到自己项目开放的文件入口和结果产物。</li>
        <li>不同客户之间不会共享上传结果或下载入口。</li>
        <li>平台优先保证租户边界、结果可追踪和交付可说明。</li>
        <li>如果结果涉及更高安全要求，平台会按项目边界控制可见范围和下载方式。</li>
      </ul>
    </article>
  </section>

  <section class="brand-card brand-card--cta">
    <div class="brand-card__row">
      <div>
        <p class="brand-kicker">Next Read</p>
        <h2>交付物与接入资料</h2>
        <p class="brand-lead">文件链路只是交付链的一部分。结合客户流程、交付物与文档入口、客户接入准备清单查看，更容易完整评估项目。</p>
      </div>
      <div class="brand-link-grid brand-link-grid--compact">
        <a class="brand-link-card" href="./customer-flow.html">
          <span>Delivery</span>
          <strong>客户流程 / 交付</strong>
        </a>
        <a class="brand-link-card" href="./deliverables.html">
          <span>Deliverables</span>
          <strong>交付物 / 文档入口</strong>
        </a>
        <a class="brand-link-card" href="./onboarding-checklist.html">
          <span>Checklist</span>
          <strong>客户接入准备清单</strong>
        </a>
        <a class="brand-link-card" href="../contact.html#lead-form">
          <span>Lead</span>
          <strong>沟通文件处理场景</strong>
        </a>
      </div>
    </div>
  </section>
</div>
