import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.8801f029.js";const d=JSON.parse('{"title":"Shell 脚本","description":"","frontmatter":{},"headers":[],"relativePath":"documents/scripts/shell.md","filePath":"documents/scripts/shell.md","lastUpdated":1692780258000}'),o={name:"documents/scripts/shell.md"},p=l(`<h1 id="shell-脚本" tabindex="-1">Shell 脚本 <a class="header-anchor" href="#shell-脚本" aria-label="Permalink to &quot;Shell 脚本&quot;">​</a></h1><h2 id="删除当前目录下以-png为后缀名的文件" tabindex="-1">删除当前目录下以.png为后缀名的文件 <a class="header-anchor" href="#删除当前目录下以-png为后缀名的文件" aria-label="Permalink to &quot;删除当前目录下以.png为后缀名的文件&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#9ECBFF;">.png</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#032F62;">.png</span></span></code></pre></div><h2 id="给某个文件的每一行的开头添加-hello" tabindex="-1">给某个文件的每一行的开头添加&quot;hello&quot; <a class="header-anchor" href="#给某个文件的每一行的开头添加-hello" aria-label="Permalink to &quot;给某个文件的每一行的开头添加&quot;hello&quot;&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sed</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;s/^/hello/&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">文件名</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sed</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;s/^/hello/&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">文件名</span></span></code></pre></div><h2 id="批量下载图片" tabindex="-1">批量下载图片 <a class="header-anchor" href="#批量下载图片" aria-label="Permalink to &quot;批量下载图片&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># url.json 文件内容为:</span></span>
<span class="line"><span style="color:#6A737D;"># [</span></span>
<span class="line"><span style="color:#6A737D;">#   {&quot;path&quot;:&quot;1.12.218.227:8080/file/picture/72e9c22e21f57ec24f54364abafc9c1a&quot;},</span></span>
<span class="line"><span style="color:#6A737D;">#   {&quot;path&quot;:&quot;1.12.218.227:8080/file/picture/e28e24f328dbf77a9507174b91be7e92&quot;}</span></span>
<span class="line"><span style="color:#6A737D;">#   ,...</span></span>
<span class="line"><span style="color:#6A737D;"># ]</span></span>
<span class="line"><span style="color:#E1E4E8;">array</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">$(</span><span style="color:#B392F0;">sed</span><span style="color:#9ECBFF;"> &#39;s/[][]//g; s/[{}&quot;]//g; s/[:,]//g&#39; url.json </span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;"> </span><span style="color:#B392F0;">sed</span><span style="color:#9ECBFF;"> &#39;s|.*/||&#39;)</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> name </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">$(</span><span style="color:#79B8FF;">echo</span><span style="color:#9ECBFF;"> &quot;\${</span><span style="color:#E1E4E8;">array</span><span style="color:#9ECBFF;">[@]}&quot;)</span><span style="color:#E1E4E8;">; </span><span style="color:#F97583;">do</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-o</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$name</span><span style="color:#9ECBFF;">.png&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://1.12.218.227:8080/file/picture/</span><span style="color:#E1E4E8;">$name</span></span>
<span class="line"><span style="color:#F97583;">done</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># url.json 文件内容为:</span></span>
<span class="line"><span style="color:#6A737D;"># [</span></span>
<span class="line"><span style="color:#6A737D;">#   {&quot;path&quot;:&quot;1.12.218.227:8080/file/picture/72e9c22e21f57ec24f54364abafc9c1a&quot;},</span></span>
<span class="line"><span style="color:#6A737D;">#   {&quot;path&quot;:&quot;1.12.218.227:8080/file/picture/e28e24f328dbf77a9507174b91be7e92&quot;}</span></span>
<span class="line"><span style="color:#6A737D;">#   ,...</span></span>
<span class="line"><span style="color:#6A737D;"># ]</span></span>
<span class="line"><span style="color:#24292E;">array</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">$(</span><span style="color:#6F42C1;">sed</span><span style="color:#032F62;"> &#39;s/[][]//g; s/[{}&quot;]//g; s/[:,]//g&#39; url.json </span><span style="color:#D73A49;">|</span><span style="color:#032F62;"> </span><span style="color:#6F42C1;">sed</span><span style="color:#032F62;"> &#39;s|.*/||&#39;)</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> name </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#032F62;">$(</span><span style="color:#005CC5;">echo</span><span style="color:#032F62;"> &quot;\${</span><span style="color:#24292E;">array</span><span style="color:#032F62;">[@]}&quot;)</span><span style="color:#24292E;">; </span><span style="color:#D73A49;">do</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-o</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$name</span><span style="color:#032F62;">.png&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://1.12.218.227:8080/file/picture/</span><span style="color:#24292E;">$name</span></span>
<span class="line"><span style="color:#D73A49;">done</span></span></code></pre></div><h2 id="将某个文件夹下所有文件重命名为以-icon-开头-后面跟着数字-并且数字递增的文件名" tabindex="-1">将某个文件夹下所有文件重命名为以&quot;icon_&quot;开头, 后面跟着数字, 并且数字递增的文件名 <a class="header-anchor" href="#将某个文件夹下所有文件重命名为以-icon-开头-后面跟着数字-并且数字递增的文件名" aria-label="Permalink to &quot;将某个文件夹下所有文件重命名为以&quot;icon_&quot;开头, 后面跟着数字, 并且数字递增的文件名&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">count</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">directory</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;F:\\companyProj\\inside-led-window-app\\src\\modules\\supervise-unite\\images&quot;</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 将这里的路径替换为目标文件夹的路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$directory</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 进入目标文件夹</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> file </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">; </span><span style="color:#F97583;">do</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> [ </span><span style="color:#F97583;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$file</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> ]; </span><span style="color:#F97583;">then</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 只处理文件，排除文件夹</span></span>
<span class="line"><span style="color:#E1E4E8;">    extension</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;\${</span><span style="color:#E1E4E8;">file</span><span style="color:#F97583;">##*</span><span style="color:#9ECBFF;">.}&quot;</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 获取文件扩展名</span></span>
<span class="line"><span style="color:#E1E4E8;">    new_filename</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;icon_</span><span style="color:#E1E4E8;">$count</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">$extension</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 构建新的文件名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">mv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$file</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$new_filename</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 重命名文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    count</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">$((count</span><span style="color:#F97583;">+</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">))</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 数字递增</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">fi</span></span>
<span class="line"><span style="color:#F97583;">done</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">count</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">directory</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;F:\\companyProj\\inside-led-window-app\\src\\modules\\supervise-unite\\images&quot;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 将这里的路径替换为目标文件夹的路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$directory</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 进入目标文件夹</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> file </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">; </span><span style="color:#D73A49;">do</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> [ </span><span style="color:#D73A49;">-f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$file</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> ]; </span><span style="color:#D73A49;">then</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 只处理文件，排除文件夹</span></span>
<span class="line"><span style="color:#24292E;">    extension</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;\${</span><span style="color:#24292E;">file</span><span style="color:#D73A49;">##*</span><span style="color:#032F62;">.}&quot;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 获取文件扩展名</span></span>
<span class="line"><span style="color:#24292E;">    new_filename</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;icon_</span><span style="color:#24292E;">$count</span><span style="color:#032F62;">.</span><span style="color:#24292E;">$extension</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 构建新的文件名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">mv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$file</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$new_filename</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 重命名文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    count</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">$((count</span><span style="color:#D73A49;">+</span><span style="color:#005CC5;">1</span><span style="color:#032F62;">))</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 数字递增</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">fi</span></span>
<span class="line"><span style="color:#D73A49;">done</span></span></code></pre></div>`,9),e=[p];function t(c,r,y,E,i,F){return n(),a("div",null,e)}const h=s(o,[["render",t]]);export{d as __pageData,h as default};
