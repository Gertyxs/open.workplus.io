import{_ as s,c as t,o as i,a5 as a}from"./chunks/framework.BSSyk2BU.js";const c=JSON.parse('{"title":"用户","description":"","frontmatter":{},"headers":[],"relativePath":"js-sdk/user.md","filePath":"js-sdk/user.md"}'),h={name:"js-sdk/user.md"},n=a(`<h1 id="用户" tabindex="-1">用户 <a class="header-anchor" href="#用户" aria-label="Permalink to &quot;用户&quot;">​</a></h1><h2 id="获取登录用户详情" tabindex="-1">获取登录用户详情 <a class="header-anchor" href="#获取登录用户详情" aria-label="Permalink to &quot;获取登录用户详情&quot;">​</a></h2><p>获取当前登录用户详细信息，包括某个组织下的雇员信息。</p><p><strong>使用说明</strong></p><table><thead><tr><th>客户端</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>支持情况</td><td>支持</td><td>支持</td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w6s.user.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCurrentUserInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  needEmpInfo: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><strong>参数说明</strong></p><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>needEmpInfo</td><td>Boolean</td><td>返回用户资料是否带上当前组织的雇员信息</td></tr></tbody></table><h2 id="获取用户的雇员信息" tabindex="-1">获取用户的雇员信息 <a class="header-anchor" href="#获取用户的雇员信息" aria-label="Permalink to &quot;获取用户的雇员信息&quot;">​</a></h2><p>通过传入组织id，获取当前用户的雇员信息，默认为当前所在组织。</p><p><strong>使用说明</strong></p><table><thead><tr><th>客户端</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>支持情况</td><td>支持</td><td>支持</td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w6s.user.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCurrentEmployeeInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  orgCode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;组织id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><strong>参数说明</strong></p><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>orgCode</td><td>Boolean</td><td>组织<code>org_id</code>或<code>org_code</code> 表示用户所在的组织</td></tr></tbody></table><h2 id="获取用户信息" tabindex="-1">获取用户信息 <a class="header-anchor" href="#获取用户信息" aria-label="Permalink to &quot;获取用户信息&quot;">​</a></h2><p>通过用户的<code>domainId</code>和<code>userId</code>获取该用户的详细信息。</p><div class="tip custom-block"><p class="custom-block-title">用户和雇员的区别</p><p>用户简单理解就是一个账号，而雇员就是这个用户可能存在于多个组织或部门中，作为一个雇员的角色。</p></div><p><strong>使用说明</strong></p><table><thead><tr><th>客户端</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>支持情况</td><td>支持</td><td>支持</td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w6s.user.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUserInfoByUserId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  userId: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;用户的userId&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  domainId: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;用户的domainId&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><strong>参数说明</strong></p><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>userId</td><td>String</td><td>用户的 userId</td></tr><tr><td>domainId</td><td>String</td><td>用户的 domainId</td></tr></tbody></table><h2 id="打开用户详情页面" tabindex="-1">打开用户详情页面 <a class="header-anchor" href="#打开用户详情页面" aria-label="Permalink to &quot;打开用户详情页面&quot;">​</a></h2><p>通过用户<code>username</code>打开该用户信息的详情页面。</p><p><strong>使用说明</strong></p><table><thead><tr><th>客户端</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>支持情况</td><td>支持</td><td>支持</td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w6s.user.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">showUserInfoByUsername</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  username: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;用户的username&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><strong>参数说明</strong></p><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>username</td><td>String</td><td>用户的username</td></tr></tbody></table>`,30),e=[n];function d(l,p,r,k,o,E){return i(),t("div",null,e)}const y=s(h,[["render",d]]);export{c as __pageData,y as default};
