import{_ as s,c as t,o as a,a5 as i}from"./chunks/framework.BSSyk2BU.js";const g=JSON.parse('{"title":"支付","description":"","frontmatter":{},"headers":[],"relativePath":"js-sdk/pay.md","filePath":"js-sdk/pay.md"}'),e={name:"js-sdk/pay.md"},h=i(`<h1 id="支付" tabindex="-1">支付 <a class="header-anchor" href="#支付" aria-label="Permalink to &quot;支付&quot;">​</a></h1><h2 id="微信支付" tabindex="-1">微信支付 <a class="header-anchor" href="#微信支付" aria-label="Permalink to &quot;微信支付&quot;">​</a></h2><p>提供微信支付的能力。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>WorkPlus 应用已默认集成<code>微信支付SDK</code>，但相关<code>app_id</code>信息需要自行申请。</p></div><p><strong>使用说明</strong></p><table><thead><tr><th>客户端</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>支持情况</td><td>支持</td><td>支持</td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w6s.pay.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wxPay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  appId: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  requestData: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;demo-data&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><strong>参数说明</strong></p><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>appId</td><td>String</td><td>sdk appId</td></tr><tr><td>requestData</td><td>String</td><td>sdk请求所需要参数, 包括具体商户 id, 金额, 数据加密等, 格式参考微信文档PayReq类</td></tr></tbody></table><p><strong>返回数据</strong></p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>code</td><td>微信支付回调结果</td></tr><tr><td>message</td><td>结果描述</td></tr></tbody></table>`,11),n=[h];function d(p,l,r,k,o,E){return a(),t("div",null,n)}const y=s(e,[["render",d]]);export{g as __pageData,y as default};
