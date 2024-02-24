import{_ as t,c as s,o as i,a5 as a}from"./chunks/framework.BSSyk2BU.js";const g=JSON.parse('{"title":"Ticket 验证","description":"","frontmatter":{},"headers":[],"relativePath":"api/auth.md","filePath":"api/auth.md"}'),n={name:"api/auth.md"},h=a(`<h1 id="ticket-验证" tabindex="-1">Ticket 验证 <a class="header-anchor" href="#ticket-验证" aria-label="Permalink to &quot;Ticket 验证&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GET</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">v1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tickets</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ticket}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">access_token</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{access_token}</span></span></code></pre></div><p><strong>请求头部：</strong></p><table><thead><tr><th>请求头</th><th>说明</th></tr></thead><tbody><tr><td>Content-Type</td><td>application/json</td></tr></tbody></table><p><strong>请求参数：</strong></p><table><thead><tr><th>字段</th><th>类型</th><th>是否必填</th><th>说明</th></tr></thead><tbody><tr><td>ticket</td><td>String</td><td>Y</td><td>用户ticket</td></tr><tr><td>access_token</td><td>String</td><td>Y</td><td>访问令牌</td></tr></tbody></table><p><strong>返回数据：</strong></p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>client_id</td><td>String</td><td>该ticket所属的用户标识</td></tr><tr><td>domain_id</td><td>String</td><td>该ticket所属的域标识</td></tr><tr><td>org_id</td><td>String</td><td>该ticket所属的组织标识</td></tr><tr><td>device_id</td><td>String</td><td>该ticket所属的设备标识</td></tr></tbody></table><p><strong>成功返回值：</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;status&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Everything is ok.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;result&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;domain_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;atwork&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;client_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a86e83a26bee5d5c&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;org_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;85df0e64&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;device_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test10fdfd0111&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>错误返回值：</strong></p><table><thead><tr><th>status</th><th>message</th><th>说明</th></tr></thead><tbody><tr><td>10015</td><td>ticket expired.</td><td>ticket已过期.</td></tr><tr><td>10016</td><td>ticket not found.</td><td>ticket不存在.</td></tr></tbody></table>`,12),e=[h];function d(k,p,l,r,o,E){return i(),s("div",null,e)}const y=t(n,[["render",d]]);export{g as __pageData,y as default};
