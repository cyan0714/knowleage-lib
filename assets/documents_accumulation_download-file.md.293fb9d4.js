import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.8801f029.js";const p="/vitepress-blog/assets/7.f41e1115.png",C=JSON.parse('{"title":"文件上传和下载","description":"","frontmatter":{},"headers":[],"relativePath":"documents/accumulation/download-file.md","filePath":"documents/accumulation/download-file.md","lastUpdated":1692779087000}'),o={name:"documents/accumulation/download-file.md"},e=l(`<h1 id="文件上传和下载" tabindex="-1">文件上传和下载 <a class="header-anchor" href="#文件上传和下载" aria-label="Permalink to &quot;文件上传和下载&quot;">​</a></h1><h2 id="文件上传" tabindex="-1">文件上传 <a class="header-anchor" href="#文件上传" aria-label="Permalink to &quot;文件上传&quot;">​</a></h2><p>后端代码(以 koa 为例):</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">async </span><span style="color:#B392F0;">saveFile</span><span style="color:#E1E4E8;">(ctx, next) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 1.获取文件信息</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">files</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ctx.req.files</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 2.将所有的文件信息保存到数据库中</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> file </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> files) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">filename</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">mimetype</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">size</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> file</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createFile</span><span style="color:#E1E4E8;">(filename, mimetype, size)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  ctx.body </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;文件上传成功~&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">async </span><span style="color:#B392F0;">createFile</span><span style="color:#E1E4E8;">(filename, mimetype, size) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">statement</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`INSERT INTO file (filename, mimetype, size) VALUES (?, ?, ?)\`</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> connection.</span><span style="color:#B392F0;">execute</span><span style="color:#E1E4E8;">(statement, [filename, mimetype, size])</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> result</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">async </span><span style="color:#6F42C1;">saveFile</span><span style="color:#24292E;">(ctx, next) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 1.获取文件信息</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">files</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ctx.req.files</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 2.将所有的文件信息保存到数据库中</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> file </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> files) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">filename</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">mimetype</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">size</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> file</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createFile</span><span style="color:#24292E;">(filename, mimetype, size)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  ctx.body </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;文件上传成功~&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">async </span><span style="color:#6F42C1;">createFile</span><span style="color:#24292E;">(filename, mimetype, size) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">statement</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`INSERT INTO file (filename, mimetype, size) VALUES (?, ?, ?)\`</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">result</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> connection.</span><span style="color:#6F42C1;">execute</span><span style="color:#24292E;">(statement, [filename, mimetype, size])</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> result</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>前端发送请求(以 PostMan 为例):</p><p><img src="`+p+`" alt="upload"></p><h2 id="文件下载" tabindex="-1">文件下载 <a class="header-anchor" href="#文件下载" aria-label="Permalink to &quot;文件下载&quot;">​</a></h2><p>后端代码(以 koa 为例):</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">async </span><span style="color:#B392F0;">download</span><span style="color:#E1E4E8;">(ctx, next) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">filename</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ctx.params</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getFile</span><span style="color:#E1E4E8;">(filename)</span></span>
<span class="line"><span style="color:#E1E4E8;">  ctx.response.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;content-type&#39;</span><span style="color:#E1E4E8;">, result.mimetype)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ctx.body 返回的是一个 Blob 对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  ctx.body </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">createReadStream</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`\${</span><span style="color:#79B8FF;">ATTACHMENT_PATH</span><span style="color:#9ECBFF;">}/\${</span><span style="color:#E1E4E8;">result</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">filename</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">async </span><span style="color:#B392F0;">getFile</span><span style="color:#E1E4E8;">(filename) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">statement</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`select * from file where filename = ?;\`</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> connection.</span><span style="color:#B392F0;">execute</span><span style="color:#E1E4E8;">(statement, [filename])</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> result</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">async </span><span style="color:#6F42C1;">download</span><span style="color:#24292E;">(ctx, next) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">filename</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ctx.params</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">result</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getFile</span><span style="color:#24292E;">(filename)</span></span>
<span class="line"><span style="color:#24292E;">  ctx.response.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;content-type&#39;</span><span style="color:#24292E;">, result.mimetype)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ctx.body 返回的是一个 Blob 对象</span></span>
<span class="line"><span style="color:#24292E;">  ctx.body </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fs.</span><span style="color:#6F42C1;">createReadStream</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`\${</span><span style="color:#005CC5;">ATTACHMENT_PATH</span><span style="color:#032F62;">}/\${</span><span style="color:#24292E;">result</span><span style="color:#032F62;">.</span><span style="color:#24292E;">filename</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">async </span><span style="color:#6F42C1;">getFile</span><span style="color:#24292E;">(filename) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">statement</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`select * from file where filename = ?;\`</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">result</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> connection.</span><span style="color:#6F42C1;">execute</span><span style="color:#24292E;">(statement, [filename])</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> result</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>前端代码:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">filename</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;e1b8e633751fd70f594c7f48831ee277&#39;</span></span>
<span class="line"><span style="color:#B392F0;">download</span><span style="color:#E1E4E8;">(filename).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// res 为 Blod 对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">downloadFile</span><span style="color:#E1E4E8;">(res, </span><span style="color:#9ECBFF;">&#39;文件名&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;xlsx&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">download</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">filename</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    url: </span><span style="color:#9ECBFF;">\`/file/download/\${</span><span style="color:#E1E4E8;">filename</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    method: </span><span style="color:#9ECBFF;">&#39;get&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    responseType: </span><span style="color:#9ECBFF;">&#39;blob&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">downloadFile</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">suffix</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">blob</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Blob</span><span style="color:#E1E4E8;">([obj], { type: </span><span style="color:#9ECBFF;">&#39;application/ms-excel&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(blob.type);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">downloadElement</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">href</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> window.</span><span style="color:#79B8FF;">URL</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">createObjectURL</span><span style="color:#E1E4E8;">(blob) </span><span style="color:#6A737D;">// 创建下载的链接</span></span>
<span class="line"><span style="color:#E1E4E8;">  downloadElement.href </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> href</span></span>
<span class="line"><span style="color:#E1E4E8;">  downloadElement.download </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> name </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;-&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getTime</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;.&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> suffix </span><span style="color:#6A737D;">// 下载后文件名</span></span>
<span class="line"><span style="color:#E1E4E8;">  document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(downloadElement)</span></span>
<span class="line"><span style="color:#E1E4E8;">  downloadElement.</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// 点击下载</span></span>
<span class="line"><span style="color:#E1E4E8;">  document.body.</span><span style="color:#B392F0;">removeChild</span><span style="color:#E1E4E8;">(downloadElement) </span><span style="color:#6A737D;">// 下载完成移除元素</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.</span><span style="color:#79B8FF;">URL</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">revokeObjectURL</span><span style="color:#E1E4E8;">(href)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 其中 request 为使用 axios 封装的函数:</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> axios </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;axios&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">axios.defaults.timeout </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">20000</span></span>
<span class="line"><span style="color:#E1E4E8;">axios.defaults.baseURL </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;http://localhost:8080&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">axios.interceptors.request.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> config</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(error)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">axios.interceptors.response.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> res.data</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Error</span><span style="color:#E1E4E8;">(error))</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> axios</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">filename</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;e1b8e633751fd70f594c7f48831ee277&#39;</span></span>
<span class="line"><span style="color:#6F42C1;">download</span><span style="color:#24292E;">(filename).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// res 为 Blod 对象</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">downloadFile</span><span style="color:#24292E;">(res, </span><span style="color:#032F62;">&#39;文件名&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;xlsx&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">download</span><span style="color:#24292E;">(</span><span style="color:#E36209;">filename</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">request</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    url: </span><span style="color:#032F62;">\`/file/download/\${</span><span style="color:#24292E;">filename</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    method: </span><span style="color:#032F62;">&#39;get&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    responseType: </span><span style="color:#032F62;">&#39;blob&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">downloadFile</span><span style="color:#24292E;">(</span><span style="color:#E36209;">obj</span><span style="color:#24292E;">, </span><span style="color:#E36209;">name</span><span style="color:#24292E;">, </span><span style="color:#E36209;">suffix</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">blob</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Blob</span><span style="color:#24292E;">([obj], { type: </span><span style="color:#032F62;">&#39;application/ms-excel&#39;</span><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(blob.type);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">downloadElement</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">href</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> window.</span><span style="color:#005CC5;">URL</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">createObjectURL</span><span style="color:#24292E;">(blob) </span><span style="color:#6A737D;">// 创建下载的链接</span></span>
<span class="line"><span style="color:#24292E;">  downloadElement.href </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> href</span></span>
<span class="line"><span style="color:#24292E;">  downloadElement.download </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;-&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getTime</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;.&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> suffix </span><span style="color:#6A737D;">// 下载后文件名</span></span>
<span class="line"><span style="color:#24292E;">  document.body.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(downloadElement)</span></span>
<span class="line"><span style="color:#24292E;">  downloadElement.</span><span style="color:#6F42C1;">click</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// 点击下载</span></span>
<span class="line"><span style="color:#24292E;">  document.body.</span><span style="color:#6F42C1;">removeChild</span><span style="color:#24292E;">(downloadElement) </span><span style="color:#6A737D;">// 下载完成移除元素</span></span>
<span class="line"><span style="color:#24292E;">  window.</span><span style="color:#005CC5;">URL</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">revokeObjectURL</span><span style="color:#24292E;">(href)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 其中 request 为使用 axios 封装的函数:</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> axios </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;axios&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">axios.defaults.timeout </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20000</span></span>
<span class="line"><span style="color:#24292E;">axios.defaults.baseURL </span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;http://localhost:8080&#39;</span></span>
<span class="line"><span style="color:#24292E;">axios.interceptors.request.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">config</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> config</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">error</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(error)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">axios.interceptors.response.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> res.data</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">error</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">(error))</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> axios</span></span></code></pre></div>`,11),c=[e];function t(r,E,y,i,F,d){return n(),a("div",null,c)}const f=s(o,[["render",t]]);export{C as __pageData,f as default};
