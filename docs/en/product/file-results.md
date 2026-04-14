---
aside: false
outline: false
lastUpdated: false
---

<div class="brand-page-shell">
  <section class="brand-hero">
    <div>
      <p class="brand-kicker">File Upload &amp; Result Delivery</p>
      <h1>File Upload &amp; Result Delivery</h1>
      <div class="brand-hero__panel">
        <span class="brand-pill">Execution Input / Output</span>
        <strong>Many real tasks do not end with a text reply. They need to receive files, process files, and return a result file.</strong>
        <p>This page focuses on the upload, processing, and download experience that customers actually touch.</p>
      </div>
      <p class="brand-lead">
        ExecFabric already supports connecting
        <strong>input files, batch status, processing artifacts, and result download</strong>
        into one execution chain that customers can understand.
        The real point is not just whether a file can be uploaded.
        It is
        <strong>how the file is handled inside a controlled process and how the result comes back inside a delivery boundary.</strong>
      </p>
      <div class="brand-chip-list">
        <span class="brand-chip">Standard upload</span>
        <span class="brand-chip">Large-file chunks</span>
        <span class="brand-chip">Batch tracking</span>
        <span class="brand-chip">Result download</span>
      </div>
      <div class="brand-actions">
        <a class="cta-button cta-button--brand" href="../contact.html#lead-form">Discuss a file-processing scenario</a>
        <a class="cta-button" href="./customer-flow.html">View customer flow / delivery</a>
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
      <h2>Standard upload</h2>
      <p>Fits common input files that can be submitted directly into a controlled upload flow before later processing or manual confirmation.</p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">02</p>
      <h2>Large-file chunks</h2>
      <p>If the file is large, it can be uploaded in chunks so a transfer failure does not force the whole package to restart.</p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">03</p>
      <h2>Batch status</h2>
      <p>A file does not disappear after upload. It enters a batch so later processing, tracking, and result matching stay clear.</p>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">04</p>
      <h2>Result download</h2>
      <p>If the task outputs a file, the platform can return that result file as a formal downloadable artifact.</p>
    </article>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">End To End</p>
    <h2>How to read the full chain from upload to result</h2>
    <div class="brand-grid brand-grid--three">
      <article class="brand-card brand-card--nested">
        <h3>01. Submit the input file</h3>
        <p>The customer submits the input file through the upload entry opened for the current project. The exact entry depends on the delivery scope.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>02. The file enters a controlled batch</h3>
        <p>The file first enters a controlled batch so later processing, tracking, and result matching remain clear.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>03. Process it under project rules</h3>
        <p>The platform decides whether to process immediately, wait for an executor, or enter a longer business workflow according to the current project setup.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>04. Review the batch and status</h3>
        <p>The user can directly see where this batch of files currently is in the process.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>05. Generate the result artifact</h3>
        <p>If the task outputs Excel files, reports, summary files, or other formal results, the platform organizes them into a deliverable entry.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>06. Download or continue using it</h3>
        <p>After the user gets the result file, they can download it, review it, or continue into the next business step.</p>
      </article>
    </div>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Chat Binding</p>
    <h2>After a file is uploaded in chat execution, how does the script know which file to read</h2>
    <div class="brand-grid brand-grid--two">
      <article class="brand-card brand-card--nested">
        <h3>The script does not guess</h3>
        <p>The current design does not ask the script to scan a whole upload directory or guess from file names. It explicitly binds the batch number from this upload to the current chat execution.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>The page entry is already consolidated</h3>
        <p>Users can now click <strong>Upload File</strong> in the quick area at the bottom of the chat execution view. It sits next to <strong>Upload Script</strong>, and the adjacent help icon explains that this batch will be bound to the current session.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>The current batch is carried into execution</h3>
        <p>After upload, the current chat session stores this <code>uploadBatchId</code>. When the user confirms execution of a Skill, the backend passes the snapshot of that file batch into the execution.</p>
      </article>
      <article class="brand-card brand-card--nested">
        <h3>The script receives the file snapshot for this run</h3>
        <p>At runtime the script gets the current batch number, input file list, and batch directory information. It processes the files bound to this confirmed execution, not a historical batch from somewhere else.</p>
      </article>
    </div>
    <table>
      <thead>
        <tr>
          <th>Stage</th>
          <th>What happens now</th>
          <th>Why it matters</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Upload file</td>
          <td>The frontend creates a controlled batch</td>
          <td>The file enters a traceable batch first instead of being scattered across ad hoc uploads.</td>
        </tr>
        <tr>
          <td>Trigger chat execution</td>
          <td>The current session carries <code>uploadBatchId</code></td>
          <td>This makes it explicit which input batch the execution should consume.</td>
        </tr>
        <tr>
          <td>Confirm execution</td>
          <td>The backend fills in a <code>fileService</code> snapshot</td>
          <td>The executor receives the batch number, directory, and input-file list.</td>
        </tr>
        <tr>
          <td>Run the script</td>
          <td>It reads only the currently bound batch</td>
          <td>This avoids accidentally reading another batch, another customer, or older files.</td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <th>What the script can read directly</th>
          <th>Current meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>EXECFABRIC_UPLOAD_BATCH_NO</code></td>
          <td>The currently bound batch number, used to decide which input batch this execution should consume.</td>
        </tr>
        <tr>
          <td><code>EXECFABRIC_UPLOAD_INPUT_FILES_JSON</code></td>
          <td>The input-file array for the current batch. The script can directly read fields such as <code>fileName</code>, <code>fileId</code>, and size.</td>
        </tr>
        <tr>
          <td><code>EXECFABRIC_UPLOAD_FILE_SERVICE_JSON</code></td>
          <td>The full file-service snapshot, including context such as <code>batchNo</code> and <code>inputFiles</code>.</td>
        </tr>
        <tr>
          <td><code>EXECFABRIC_SKILL_INPUT_PAYLOAD_JSON</code></td>
          <td>The full input payload for this execution, which also keeps <code>uploadBatchId</code> and <code>fileService</code>.</td>
        </tr>
      </tbody>
    </table>
    <p>Both Python and Shell executors currently inject these variables into the runtime environment. If the user uploads a new batch of files and confirms execution again, the new batch replaces the old one. Scripts should always read inputs from the current execution context instead of relying on unstable rules such as "the latest file."</p>
  </section>

  <section class="brand-card">
    <p class="brand-kicker">Fit</p>
    <h2>Which scenarios fit this path better</h2>
    <table>
      <thead>
        <tr>
          <th>Scenario</th>
          <th>Why it fits</th>
          <th>Fit level</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Upload raw files first, then generate reports</td>
          <td>Both the input and output are files</td>
          <td>Already a good fit</td>
          <td>For example result sheets, summary tables, exports, or processed artifacts.</td>
        </tr>
        <tr>
          <td>The file is large and a one-shot transfer may fail</td>
          <td>A more stable upload method is needed</td>
          <td>Already a good fit</td>
          <td>Chunked upload is better than retrying the whole package.</td>
        </tr>
        <tr>
          <td>You need to preserve the processing status of a batch of input files</td>
          <td>It is easier to track the batch and the result</td>
          <td>Already a good fit</td>
          <td>The platform emphasizes the batch view instead of showing only "upload succeeded."</td>
        </tr>
        <tr>
          <td>You only need text Q&amp;A and no files are involved</td>
          <td>The file path is not the main concern</td>
          <td>No need to force it</td>
          <td>Those scenarios should start with intelligent execution and the AI recommendation path.</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section class="brand-grid brand-grid--two">
    <article class="brand-card">
      <p class="brand-kicker">Current Scope</p>
      <h2>Current fit boundary</h2>
      <ul class="brand-list">
        <li>Not every project opens an upload center by default. It depends on the current delivery scope.</li>
        <li>If the project includes file processing, the platform can provide a file-upload and result-download chain.</li>
        <li>If the project includes long-running tasks, the way results return will continue to be refined inside the project experience.</li>
        <li>The file path is a business-data processing entry, not the same thing as a script hot-update entry.</li>
      </ul>
    </article>
    <article class="brand-card">
      <p class="brand-kicker">Safety Rule</p>
      <h2>Safety boundaries that matter here</h2>
      <ul class="brand-list">
        <li>Customers can see only the file entry points and result artifacts opened for their own project.</li>
        <li>Upload results and download entries are not shared across customers.</li>
        <li>The platform prioritizes tenant boundaries, traceable results, and explainable delivery.</li>
        <li>If the result involves stricter security requirements, visibility and download method are controlled by project boundary.</li>
      </ul>
    </article>
  </section>

  <section class="brand-card brand-card--cta">
    <div class="brand-card__row">
      <div>
        <p class="brand-kicker">Next Read</p>
        <h2>Deliverables and onboarding materials</h2>
        <p class="brand-lead">The file path is only one part of delivery. It is easier to evaluate a project completely when you read it together with customer flow, deliverables, and the onboarding checklist.</p>
      </div>
      <div class="brand-link-grid brand-link-grid--compact">
        <a class="brand-link-card" href="./customer-flow.html">
          <span>Delivery</span>
          <strong>Customer Flow / Delivery</strong>
        </a>
        <a class="brand-link-card" href="./deliverables.html">
          <span>Deliverables</span>
          <strong>Deliverables / Doc Entry</strong>
        </a>
        <a class="brand-link-card" href="./onboarding-checklist.html">
          <span>Checklist</span>
          <strong>Onboarding Checklist</strong>
        </a>
        <a class="brand-link-card" href="../contact.html#lead-form">
          <span>Lead</span>
          <strong>Discuss a file-processing scenario</strong>
        </a>
      </div>
    </div>
  </section>
</div>
