import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.8801f029.js";const h=JSON.parse('{"title":"服务器部署","description":"","frontmatter":{},"headers":[],"relativePath":"documents/accumulation/deploy.md","filePath":"documents/accumulation/deploy.md","lastUpdated":1686552027000}'),p={name:"documents/accumulation/deploy.md"},o=l(`<h1 id="服务器部署" tabindex="-1">服务器部署 <a class="header-anchor" href="#服务器部署" aria-label="Permalink to &quot;服务器部署&quot;">​</a></h1><h2 id="购买服务器实例" tabindex="-1">购买服务器实例 <a class="header-anchor" href="#购买服务器实例" aria-label="Permalink to &quot;购买服务器实例&quot;">​</a></h2><p>网上教程很多, 这里就不介绍了</p><h2 id="安装环境" tabindex="-1">安装环境 <a class="header-anchor" href="#安装环境" aria-label="Permalink to &quot;安装环境&quot;">​</a></h2><h3 id="安装-nodejs" tabindex="-1">安装 nodejs <a class="header-anchor" href="#安装-nodejs" aria-label="Permalink to &quot;安装 nodejs&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nodejs</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nodejs</span></span></code></pre></div><h3 id="安装-nginx" tabindex="-1">安装 nginx <a class="header-anchor" href="#安装-nginx" aria-label="Permalink to &quot;安装 nginx&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx</span></span></code></pre></div><p>启动 <code>nginx</code>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx.service</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx.service</span></span></code></pre></div><p><code>nginx</code>常用命令</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx.service</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">//停止</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">服务</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx.service</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">//重启</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">服务</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reload</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx.service</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">//重新加载</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">配置文件，然后重启</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Nginx</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx.service</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">//查看状态</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx.service</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">//设置开机自启动</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">disable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx.service</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">//停止开机自启动</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx.service</span><span style="color:#24292E;"> </span><span style="color:#032F62;">//停止</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Nginx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">服务</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx.service</span><span style="color:#24292E;"> </span><span style="color:#032F62;">//重启</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Nginx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">服务</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reload</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx.service</span><span style="color:#24292E;"> </span><span style="color:#032F62;">//重新加载</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Nginx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">配置文件，然后重启</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Nginx</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx.service</span><span style="color:#24292E;"> </span><span style="color:#032F62;">//查看状态</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx.service</span><span style="color:#24292E;"> </span><span style="color:#032F62;">//设置开机自启动</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">disable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx.service</span><span style="color:#24292E;"> </span><span style="color:#032F62;">//停止开机自启动</span></span></code></pre></div><h3 id="安装-mysql-centos-7-x" tabindex="-1">安装 mysql (centOS 7.x) <a class="header-anchor" href="#安装-mysql-centos-7-x" aria-label="Permalink to &quot;安装 mysql (centOS 7.x)&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysql</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">//通过yum包管理器安装mysql客户端，该客户端可用于连接到MySQL服务器并执行各种操作。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysql-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">//通过yum包管理器安装mysql开发库，其中包含MySQL</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">C</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">API、头文件和库文件等开发工具。这些工具可用于开发与MySQL数据库交互的应用程序。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">wget</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://dev.mysql.com/get/mysql80-community-release-el7-5.noarch.rpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">//使用wget命令从MySQL官网下载了一个名为“mysql80-community-release-el7-5.noarch.rpm”的RPM软件包。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">rpm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-ivh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysql80-community-release-el7-5.noarch.rpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">//使用rpm命令将上面下载的RPM软件包安装到CentOS</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">7</span><span style="color:#9ECBFF;">操作系统中。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysql-community-server</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">//使用yum包管理器来安装MySQL社区版服务器。这个命令会自动下载和安装MySQL服务器以及相关的依赖项，并启动服务</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql</span><span style="color:#24292E;"> </span><span style="color:#032F62;">//通过yum包管理器安装mysql客户端，该客户端可用于连接到MySQL服务器并执行各种操作。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">//通过yum包管理器安装mysql开发库，其中包含MySQL</span><span style="color:#24292E;"> </span><span style="color:#032F62;">C</span><span style="color:#24292E;"> </span><span style="color:#032F62;">API、头文件和库文件等开发工具。这些工具可用于开发与MySQL数据库交互的应用程序。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">wget</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://dev.mysql.com/get/mysql80-community-release-el7-5.noarch.rpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">//使用wget命令从MySQL官网下载了一个名为“mysql80-community-release-el7-5.noarch.rpm”的RPM软件包。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">rpm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-ivh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql80-community-release-el7-5.noarch.rpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">//使用rpm命令将上面下载的RPM软件包安装到CentOS</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">7</span><span style="color:#032F62;">操作系统中。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql-community-server</span><span style="color:#24292E;"> </span><span style="color:#032F62;">//使用yum包管理器来安装MySQL社区版服务器。这个命令会自动下载和安装MySQL服务器以及相关的依赖项，并启动服务</span></span></code></pre></div><p>注: 如果已经安装了 MySQL 客户端和开发库，那么第一行和第二行的代码就可以省略。如果已经添加了 MySQL 官方源，那么第三行的代码也可以省略。但如果是全新的系统，则需要执行所有这些命令来安装 MySQL 数据库。</p><p>开启MySQL后台服务:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysqld</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysqld</span></span></code></pre></div><p>随着系统⼀起启动:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysqld</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysqld</span></span></code></pre></div><p>查看MySQL服务：active (running)表示启动成功(以下二者选一个):</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysqld</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">ps</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-ef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">grep</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysql</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysqld</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">ps</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-ef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">grep</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql</span></span></code></pre></div><p>mysql8 初次安装后，需要先通过以下命令查看密码:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cat</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/var/log/mysqld.log</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">grep</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">password</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cat</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/var/log/mysqld.log</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">grep</span><span style="color:#24292E;"> </span><span style="color:#032F62;">password</span></span></code></pre></div><p>mysql8 修改密码方式:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">alter</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;root&#39;@&#39;localhost&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">identified</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">by</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;这里填你要的密码&#39;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">alter</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;root&#39;@&#39;localhost&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">identified</span><span style="color:#24292E;"> </span><span style="color:#032F62;">by</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;这里填你要的密码&#39;</span><span style="color:#24292E;">;</span></span></code></pre></div><p>在⾃⼰的电脑上连接 MySQL(也就是和 MySQL 建⽴远程连接, ⽐如直接使用 Navicat ⼯具连接 MySQL, 下方代码在远程服务器上执行):</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysql</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">select</span><span style="color:#E1E4E8;"> host, user from user; </span><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">查看user表中，连接权限，默认看到root是localhost</span></span>
<span class="line"><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">host</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;%&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">where</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;root&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">修改权限</span></span>
<span class="line"><span style="color:#B392F0;">配置3306的安全组</span></span>
<span class="line"><span style="color:#B392F0;">修改完成后</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">还需要刷新一下服务配置，不然修改不会生效</span></span>
<span class="line"><span style="color:#B392F0;">mysql&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">FLUSH</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">PRIVILEGES</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">use</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">select</span><span style="color:#24292E;"> host, user from user; </span><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">查看user表中，连接权限，默认看到root是localhost</span></span>
<span class="line"><span style="color:#6F42C1;">update</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">host</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;%&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">where</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;root&#39;</span><span style="color:#24292E;">; </span><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">修改权限</span></span>
<span class="line"><span style="color:#6F42C1;">配置3306的安全组</span></span>
<span class="line"><span style="color:#6F42C1;">修改完成后</span><span style="color:#24292E;"> </span><span style="color:#032F62;">还需要刷新一下服务配置，不然修改不会生效</span></span>
<span class="line"><span style="color:#6F42C1;">mysql&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">FLUSH</span><span style="color:#24292E;"> </span><span style="color:#032F62;">PRIVILEGES</span><span style="color:#24292E;">;</span></span></code></pre></div><h2 id="配置-nginx" tabindex="-1">配置 nginx <a class="header-anchor" href="#配置-nginx" aria-label="Permalink to &quot;配置 nginx&quot;">​</a></h2><p>在 /etc/nginx/nginx.conf 下配置服务:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">server {</span></span>
<span class="line"><span style="color:#e1e4e8;">		listen       8080;</span></span>
<span class="line"><span style="color:#e1e4e8;">		listen       [::]:8080;</span></span>
<span class="line"><span style="color:#e1e4e8;">		server_name  _;</span></span>
<span class="line"><span style="color:#e1e4e8;">		root         /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#e1e4e8;">	# Load configuration files for the default server block.</span></span>
<span class="line"><span style="color:#e1e4e8;">    include /etc/nginx/default.d/*.conf;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    error_page 404 /404.html;</span></span>
<span class="line"><span style="color:#e1e4e8;">    location = /404.html {</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    error_page 500 502 503 504 /50x.html;</span></span>
<span class="line"><span style="color:#e1e4e8;">    location = /50x.html {</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">		location / {</span></span>
<span class="line"><span style="color:#e1e4e8;">        root   /home/vue3-cloud-music;</span></span>
<span class="line"><span style="color:#e1e4e8;">				try_files $uri $uri/  /index.html;</span></span>
<span class="line"><span style="color:#e1e4e8;">        index  index.html;</span></span>
<span class="line"><span style="color:#e1e4e8;">  	}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">server {</span></span>
<span class="line"><span style="color:#24292e;">		listen       8080;</span></span>
<span class="line"><span style="color:#24292e;">		listen       [::]:8080;</span></span>
<span class="line"><span style="color:#24292e;">		server_name  _;</span></span>
<span class="line"><span style="color:#24292e;">		root         /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#24292e;">	# Load configuration files for the default server block.</span></span>
<span class="line"><span style="color:#24292e;">    include /etc/nginx/default.d/*.conf;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    error_page 404 /404.html;</span></span>
<span class="line"><span style="color:#24292e;">    location = /404.html {</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    error_page 500 502 503 504 /50x.html;</span></span>
<span class="line"><span style="color:#24292e;">    location = /50x.html {</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">		location / {</span></span>
<span class="line"><span style="color:#24292e;">        root   /home/vue3-cloud-music;</span></span>
<span class="line"><span style="color:#24292e;">				try_files $uri $uri/  /index.html;</span></span>
<span class="line"><span style="color:#24292e;">        index  index.html;</span></span>
<span class="line"><span style="color:#24292e;">  	}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="数据库迁移" tabindex="-1">数据库迁移 <a class="header-anchor" href="#数据库迁移" aria-label="Permalink to &quot;数据库迁移&quot;">​</a></h2><ol><li>在服务器 MySQL 中创建和本地同名的数据库;</li><li>在 Navicat 中本地 MySQL 直接导出数据库;</li><li>在 Navicat 中服务器 MySQL 中执⾏ MySQL(如果运行报错则将&quot;在每个运行中运行多个查询&quot;的勾去掉).</li></ol>`,32),e=[o];function t(c,r,y,E,i,F){return a(),n("div",null,e)}const m=s(p,[["render",t]]);export{h as __pageData,m as default};