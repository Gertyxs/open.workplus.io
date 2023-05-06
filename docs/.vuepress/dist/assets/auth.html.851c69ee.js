import{r as o,o as c,c as l,d as n,a as p,F as r,b as a,e as s}from"./app.e7996973.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const i={},k=a('<h1 id="\u9274\u6743\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u9274\u6743\u6D41\u7A0B" aria-hidden="true">#</a> \u9274\u6743\u6D41\u7A0B</h1><p>\u4E3A\u4E86\u4FDD\u8BC1 JS-SDK \u7684\u8C03\u7528\u8005\u662F\u53EF\u4FE1\u4EFB\u7684\uFF0C\u540C\u65F6\u5BF9\u5F53\u524D\u9875\u9762\u53EF\u7528\u7684 API \u8FDB\u884C\u5B89\u5168\u9650\u5236\uFF0C\u9632\u6B62\u6076\u610F\u7F51\u9875\u901A\u8FC7 JS-API \u968F\u610F\u83B7\u53D6\u7528\u6237\u79C1\u5BC6\u4FE1\u606F\uFF0C\u5BF9\u7528\u6237\u8D22\u4EA7\u9020\u6210\u635F\u5931\u3002\u56E0\u6B64\u5728\u90E8\u5206 JS-API \u5728\u88AB\u8C03\u7528\u524D\uFF0C\u9700\u8981\u901A\u8FC7\u63A5\u53E3\u8FDB\u884C\u9274\u6743\uFF0C\u53EA\u6709\u9274\u6743\u6210\u529F\u7684\u60C5\u51B5\u4E0B\uFF0CJS-API \u7684\u8C03\u7528\u624D\u4F1A\u6B63\u5E38\u751F\u6548\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u63A5\u53E3\u9274\u6743</p><p>JS-SDK \u9ED8\u8BA4<strong>\u4E0D\u5F00\u542F</strong>\u9274\u6743\u6A21\u5F0F\uFF0C\u8BF7\u6839\u636E\u5B9E\u9645\u5BA2\u6237\u7AEF\u8981\u6C42\u8FDB\u884C\u5F00\u5173\u914D\u7F6E\u3002\u4E00\u65E6\u5BA2\u6237\u7AEF\u5F00\u542F\u9700\u8981\u9274\u6743\u8981\u6C42\uFF0C\u6240\u6709\u63A5\u53E3\uFF08\u9664\u9274\u6743\u63A5\u53E3\u5916\uFF09\u5747\u9700\u8981\u6210\u529F\u9274\u6743\u540E\u624D\u53EF\u4F7F\u7528\uFF01</p></div><h2 id="\u6B65\u9AA4\u4E00-\u83B7\u53D6-access-key" tabindex="-1"><a class="header-anchor" href="#\u6B65\u9AA4\u4E00-\u83B7\u53D6-access-key" aria-hidden="true">#</a> \u6B65\u9AA4\u4E00\uFF1A\u83B7\u53D6 access_key</h2><p>\u57DF\u7BA1\u7406\u540E\u53F0\u9881\u53D1\u548C\u7EF4\u62A4\uFF0C\u8BF7\u8054\u7CFB\u76F8\u5173\u8D1F\u8D23\u4EBA\u83B7\u53D6\u3002</p>',5),d={class:"w6s-image"},m=["src"],b=a(`<h2 id="\u6B65\u9AA4\u4E8C-\u8BA1\u7B97\u7B7E\u540D" tabindex="-1"><a class="header-anchor" href="#\u6B65\u9AA4\u4E8C-\u8BA1\u7B97\u7B7E\u540D" aria-hidden="true">#</a> \u6B65\u9AA4\u4E8C\uFF1A\u8BA1\u7B97\u7B7E\u540D</h2><p>\u5728\u8FDB\u884C\u9274\u6743\u4E4B\u524D\uFF0C\u9700\u8981\u8BBE\u7F6E\u4EE5\u4E0B\u7B7E\u540D\u6240\u9700\u7684\u53C2\u6570\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>access_key</td><td>string</td><td>\u4ECE\u7BA1\u7406\u540E\u53F0\u83B7\u53D6\u7684 key\uFF0C\u53C2\u8003\u6B65\u9AA4\u4E00</td></tr><tr><td>nonce</td><td>string | number</td><td>\u516D\u4F4D\u968F\u673A\u6570</td></tr><tr><td>timestamp</td><td>string | number</td><td>\u65F6\u95F4\u6233\uFF08\u6BEB\u79D2\u6570\uFF09</td></tr></tbody></table><p>\u7136\u540E\uFF0C\u9700\u901A\u8FC7\u4EE5\u4E0A 3 \u4E2A\u53C2\u6570\uFF0C\u8BA1\u7B97\u51FA\u6700\u7EC8\u7684\u7B7E\u540D<code>signature</code>\u3002</p><p><strong>\u7B7E\u540D\u65B9\u6CD5</strong>\uFF1A</p><ul><li><ol><li>\u53C2\u6570\u6392\u5E8F</li></ol></li></ul><p>\u6309\u81EA\u7136\u5347\u5E8F\u8FDB\u884C\u6392\u5E8F\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 sort \u65B9\u6CD5\u8FDB\u884C\u5904\u7406\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> sorted <span class="token operator">=</span> <span class="token punctuation">[</span>access_secret<span class="token punctuation">,</span> nonce<span class="token punctuation">,</span> timestamp<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><ol start="2"><li>\u53C2\u6570\u62FC\u63A5</li></ol></li></ul><p>\u5B8C\u6210\u7B2C\u4E00\u6B65\u540E\uFF0C\u9700\u8981\u5C06 3 \u4E2A\u53C2\u6570\u8FDE\u8D77\u6765\uFF0C\u53EF\u4EE5\u5229\u7528 reduce \u65B9\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> sorted<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> str <span class="token operator">+=</span> item<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A51\u30012\u4E24\u6B65\u4E00\u8D77\u5904\u7406\uFF0C\u5982\u4E0B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token punctuation">[</span>access_secret<span class="token punctuation">,</span> nonce<span class="token punctuation">,</span> timestamp<span class="token punctuation">]</span>
  <span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> str <span class="token operator">+=</span> item<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><ol start="3"><li>\u5BF9\u5B57\u7B26\u4E32\u8FDB\u884C SHA-1 \u52A0\u5BC6\uFF0C\u5E76\u8F6C\u6210\u5168\u5C0F\u5199\u5B57\u6BCD</li></ol></li></ul>`,14),g=s("\u63A8\u8350\u4F7F\u7528"),h={href:"https://github.com/brix/crypto-js",target:"_blank",rel:"noopener noreferrer"},v=s("brix/crypto-js"),f=s("\u6216"),y={href:"https://github.com/Caligatio/jsSHA",target:"_blank",rel:"noopener noreferrer"},_=s("Caligatio/jsSHA"),j=s("\u5E93\u8FDB\u884C\u52A0\u5BC6\u5904\u7406\u3002"),w=a(`<p>\u4EE5 crypto-js \u5E93\u4E3A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5F15\u5165\u6A21\u5757</span>
<span class="token keyword">import</span> sha1 <span class="token keyword">from</span> <span class="token string">&#39;crypto-js/sha1&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> access_secret <span class="token operator">=</span> <span class="token string">&#39;access_secret&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> nonce <span class="token operator">=</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> timestamp <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token punctuation">[</span>access_secret<span class="token punctuation">,</span> nonce<span class="token punctuation">,</span> timestamp<span class="token punctuation">]</span>
  <span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> str <span class="token operator">+=</span> item<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6700\u7EC8\u8FD8\u9700\u8981\u8F6C\u6210\u5168\u5C0F\u5199</span>
<span class="token keyword">const</span> signature <span class="token operator">=</span> <span class="token function">sha1</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5B8C\u6210\u7B7E\u540D\u8BA1\u7B97\u540E\uFF0C\u5373\u53EF\u8C03\u7528\u9274\u6743\u63A5\u53E3\u3002</p><div class="custom-container warning"><p class="custom-container-title">timestamp \u7684\u65F6\u6548\u6027</p><p>\u63D0\u4EA4\u7684<code>timestamp</code>\u5728 <strong>300\u79D2</strong> \u5185\u6709\u6548\uFF0C\u5982\u679C\u8D85\u51FA\uFF0C\u5219\u9A8C\u8BC1\u5931\u8D25\u3002</p></div><h2 id="\u6B65\u9AA4\u4E09-\u8C03\u7528\u9274\u6743\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u6B65\u9AA4\u4E09-\u8C03\u7528\u9274\u6743\u63A5\u53E3" aria-hidden="true">#</a> \u6B65\u9AA4\u4E09\uFF1A\u8C03\u7528\u9274\u6743\u63A5\u53E3</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> w6s <span class="token keyword">from</span> <span class="token string">&#39;@w6s/sdk&#39;</span><span class="token punctuation">;</span>

w6s<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">access_key</span><span class="token operator">:</span> <span class="token string">&#39;access_key&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">nonce</span><span class="token operator">:</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timestamp</span><span class="token operator">:</span> <span class="token string">&#39;timestamp&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">signature</span><span class="token operator">:</span> <span class="token string">&#39;signature&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6210\u529F</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5931\u8D25</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u63A5\u53E3\u6210\u529F\u4E0E\u5426\uFF0C\u4F1A\u5728\u5BF9\u5E94\u7684\u56DE\u8C03\u65B9\u6CD5\u4E2D\u8FD4\u56DE\uFF0C\u8FD4\u56DE\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6388\u6743\u6210\u529F&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u72B6\u6001\u7801\u8BF4\u660E\uFF1A</p><table><thead><tr><th>\u72B6\u6001\u7801</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>0</td><td>\u9274\u6743\u6210\u529F, success \u56DE\u8C03\u4E2D\u8FD4\u56DE</td></tr><tr><td>-1</td><td>\u53C2\u6570\u6709\u8BEF, \u4F8B\u5982\u4F20\u5165\u53C2\u6570\u7F3A\u5931\u7B49, \u5728 fail \u56DE\u8C03\u4E2D\u8FD4\u56DE</td></tr><tr><td>-2</td><td>\u9274\u6743\u5931\u8D25, \u5728 fail \u56DE\u8C03\u4E2D\u8FD4\u56DE</td></tr></tbody></table><h2 id="\u6B65\u9AA4\u56DB-\u8C03\u7528-js-api" tabindex="-1"><a class="header-anchor" href="#\u6B65\u9AA4\u56DB-\u8C03\u7528-js-api" aria-hidden="true">#</a> \u6B65\u9AA4\u56DB\uFF1A\u8C03\u7528 JS-API</h2><p>\u5B8C\u6210\u9274\u6743\u540E\uFF0C\u4FBF\u53EF\u4EE5\u5728<code>w6s.ready</code>\u91CC\u8C03\u7528 JS-API \u4E86\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>w6s<span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  w6s<span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">getUserTicket</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>w6s.ready</code>\u7684\u89E6\u53D1\u65F6\u673A\uFF1A</p><ul><li>\u5982\u679C\u8C03\u7528\u65F6\uFF0C\u6388\u6743\u5E76\u672A\u5B8C\u6210\uFF0C\u5219\u4F1A\u5728\u6388\u6743\u5B8C\u6210\u65F6\u89E6\u53D1\uFF1B</li><li>\u5982\u679C\u8C03\u7528\u65F6\uFF0C\u6388\u6743\u5DF2\u7ECF\u5B8C\u6210\uFF0C\u5219\u4F1A\u9A6C\u4E0A\u88AB\u89E6\u53D1\uFF1B</li></ul><p>\u57FA\u4E8E\u4EE5\u4E0A\u673A\u5236\uFF0C\u5728\u5E94\u7528\u521D\u59CB\u5316\u65F6\uFF0C\u53EF\u4EE5\u66F4\u597D\u5730\u7BA1\u7406\u4EE3\u7801\u7684\u6267\u884C\u6D41\u7A0B\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6267\u884C\u9274\u6743</span>
w6s<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span>

<span class="token comment">// \u540C\u65F6\uFF0C\u76D1\u542C ready \u56DE\u8C03</span>
w6s<span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u9274\u6743\u6210\u529F\u540E\uFF0C\u9A6C\u4E0A\u6267\u884C</span>
  w6s<span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">getUserTicket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F\uFF01</p><p>\u5728\u5F00\u53D1\u8C03\u8BD5\u8FC7\u7A0B\u4E2D\uFF0C\u9700\u8981\u7ECF\u5E38\u5237\u65B0\u9875\u9762\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C SDK \u5DF2\u7ECF\u6388\u6743\u6210\u529F\uFF0C\u90A3<code>ready</code>\u56DE\u8C03\u4F1A\u89E6\u53D1\u5148\u4E8E\u6388\u6743\u63A5\u53E3<code>config</code>\u56DE\u8C03\uFF0C\u8FD9\u6837\u53EF\u80FD\u4F1A\u5BFC\u81F4\u4EE3\u7801\u8FD0\u884C\u5148\u540E\u4E0A\u7684\u4E0D\u4E00\u81F4\u3002</p><p>\u6240\u4EE5\uFF0C\u5EFA\u8BAE\u4E0D\u8981\u5728\u6388\u6743\u63A5\u53E3\u7684\u56DE\u8C03\u4E2D\u5904\u7406\u4E1A\u52A1\u903B\u8F91\uFF0C\u5E94\u7EDF\u4E00\u5728<code>ready</code>\u56DE\u8C03\u4E2D\u5904\u7406\u3002</p></div>`,18);function x(e,S){const t=o("ExternalLinkIcon");return c(),l(r,null,[k,n("p",d,[n("img",{src:e.$withBase("/js-sdk/auth.png"),alt:"\u6DFB\u52A0\u9274\u6743\u7684key/secret",width:"600"},null,8,m)]),b,n("p",null,[g,n("a",h,[v,p(t)]),f,n("a",y,[_,p(t)]),j]),w],64)}var J=u(i,[["render",x]]);export{J as default};