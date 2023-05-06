import{r as o,o as c,c as l,d as p,a as t,w as e,F as u,b as s,e as n}from"./app.e7996973.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},k=s(`<h1 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h1><p><code>JS-SDK</code>\u652F\u6301<code>script</code>\u6807\u7B7E\u53CA\u4EE5<code>\u6A21\u5757</code>\u7684\u5F62\u5F0F\u5F15\u5165\uFF1B\u521D\u59CB\u5316\u65F6\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u65E5\u5FD7\u8F93\u51FA\u3001\u6570\u636E\u6A21\u62DF\u7B49\u914D\u7F6E\u3002</p><h2 id="\u5F15\u5165\u53CA\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165\u53CA\u4F7F\u7528" aria-hidden="true">#</a> \u5F15\u5165\u53CA\u4F7F\u7528</h2><p><strong>\u57FA\u4E8E<code>npm</code>\u5305\u7684\u65B9\u5F0F\u5F15\u5165\uFF1A</strong></p><p>1\u3001\u4F7F\u7528<code>npm</code>\u6216<code>yarn</code>\u5B89\u88C5\u6A21\u5757\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @w6s/sdk --save

<span class="token comment"># \u4F7F\u7528 yarn </span>
<span class="token function">yarn</span> <span class="token function">add</span> @w6s/sdk
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>2\u3001\u5B89\u88C5\u6210\u529F\u540E\uFF0C\u4F7F\u7528<code>es module</code>\u6216<code>commonjs</code>\u6A21\u5757\u89C4\u8303\u5F15\u5165\uFF0C\u652F\u6301\u5168\u91CF\u53CA\u6309\u6A21\u5757\u5F15\u5165\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5168\u91CF\u5F15\u5165</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> w6s <span class="token keyword">from</span> <span class="token string">&#39;@w6s/sdk&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u6309\u6A21\u5757\u5F15\u5165</span>
<span class="token keyword">import</span> auth <span class="token keyword">from</span> <span class="token string">&#39;@w6s/sdk/auth&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>3\u3001\u5F15\u5165\u6A21\u5757\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528\u521D\u59CB\u5316\u65B9\u6CD5<code>init</code>\u6765\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>w6s<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">debug</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,10),m=n("\u6240\u6709\u914D\u7F6E\u9879\uFF0C\u8BF7\u770B\u4E0B\u65B9"),b=n("\u914D\u7F6E\u8BF4\u660E"),d=n("\u3002"),g=s(`<p>4\u3001SDK \u5C31\u7EEA\u540E\uFF0C\u5C06\u53EF\u8C03\u7528\u5404\u6A21\u5757\u65B9\u6CD5\uFF0C\u6240\u6709\u63A5\u53E3\u5747\u652F\u6301<code>promise</code>\u53CA<code>callback</code>\u7684\u8C03\u7528\u65B9\u5F0F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Promise</span>
w6s<span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">getUserTicket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>user_ticket<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// CallBack</span>
w6s<span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">getUserTicket</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>user_ticket<span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">fail</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4E8C\u3001<code>script</code>\u6807\u7B7E\u5F15\u5165\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- \u6587\u6863\u4E0A\u7684 sdk \u5730\u5740\u66F4\u65B0\u53EF\u80FD\u4F1A\u6EDE\u540E --&gt;</span>
<span class="token comment">&lt;!-- \u5177\u4F53\u8BF7\u4EE5 https://www.npmjs.com/package/@w6s/sdk \u5730\u5740\u4E0A\u7684\u6700\u65B0\u7248\u672C\u4E3A\u51C6 --&gt;</span>
<span class="token comment">&lt;!-- \u53EF\u4EE5\u901A\u8FC7\u66FF\u6362\u7248\u672C\u53F7(sdk.{\u7248\u672C\u53F7}.js\uFF09\uFF0C\u8BBF\u95EE\u5BF9\u5E94\u7684\u7248\u672C --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://open.workplus.io/static/js-sdk/sdk.2.0.0-beta.12.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5F15\u5165\u540E\uFF0C\u4F1A\u5728\u5168\u5C40\u66B4\u9732<code>w6s</code>\u5BF9\u8C61\uFF0C\u521D\u59CB\u5316\u540E\uFF0C\u5C06\u53EF\u8C03\u7528\u5404\u6A21\u5757\u63A5\u53E3\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u5173\u4E8E JS-SDK \u8D44\u6E90</p><p>\u57FA\u4E8E WorkPlus \u90E8\u5206\u5BA2\u6237\u7F51\u7EDC\u73AF\u5883\u7684\u7279\u6B8A\u6027\uFF0C\u63A8\u8350\u81EA\u884C\u90E8\u7F72js-sdk\u7684\u76F8\u5173\u8D44\u6E90\uFF0C\u4EE5\u4F9B\u81EA\u5BB6\u5E73\u53F0\u8F7B\u5E94\u7528\u8BBF\u95EE\u3002</p></div><h2 id="js-api-\u9274\u6743" tabindex="-1"><a class="header-anchor" href="#js-api-\u9274\u6743" aria-hidden="true">#</a> JS-API \u9274\u6743</h2><p>\u4E3A\u4E86\u4FDD\u8BC1 JS-SDK \u7684\u8C03\u7528\u8005\u662F\u53EF\u4FE1\u4EFB\u7684\uFF0C\u540C\u65F6\u5BF9\u5F53\u524D\u9875\u9762\u53EF\u7528\u7684 API \u8FDB\u884C\u5B89\u5168\u9650\u5236\uFF0C\u9632\u6B62\u6076\u610F\u7F51\u9875\u901A\u8FC7 JS-API \u968F\u610F\u83B7\u53D6\u7528\u6237\u79C1\u5BC6\u4FE1\u606F\uFF0C\u5BF9\u7528\u6237\u8D22\u4EA7\u9020\u6210\u635F\u5931\u3002\u56E0\u6B64\u5728\u90E8\u5206 JS-API \u5728\u88AB\u8C03\u7528\u524D\uFF0C\u9700\u8981\u901A\u8FC7\u63A5\u53E3\u8FDB\u884C\u9274\u6743\uFF0C\u53EA\u6709\u9274\u6743\u6210\u529F\u7684\u60C5\u51B5\u4E0B\uFF0CJS-API \u7684\u8C03\u7528\u624D\u4F1A\u6B63\u5E38\u751F\u6548\u3002</p>`,8),h=n("\u66F4\u591A JS-API \u9274\u6743\u7684\u4FE1\u606F\uFF0C\u8BF7\u67E5\u770B"),v=n("\u9274\u6743\u6D41\u7A0B"),f=n("\u3002"),w=s(`<h2 id="\u914D\u5408-vue-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u914D\u5408-vue-\u4F7F\u7528" aria-hidden="true">#</a> \u914D\u5408 Vue \u4F7F\u7528</h2><p><strong>\u4E00\u3001<code>npm</code> \u6A21\u5F0F\uFF1A</strong></p><p>\u57FA\u4E8E @vue/cli \u521B\u5EFA\u7684\u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>Vue.use(w6s, initOptions)</code>\u7684\u65B9\u5F0F\u521D\u59CB\u5316 sdk\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> w6s <span class="token keyword">from</span> <span class="token string">&#39;@w6s/sdk&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u521D\u59CB\u5316 sdk\uFF0C\u540C\u65F6\u4F1A\u5728 Vue \u539F\u578B\u94FE\u4E0A\u6302\u8F7D $w6s \u5BF9\u8C61</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>w6s<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">debug</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u63A5\u4E0B\u6765\uFF0C\u53EF\u4EE5\u5728 Vue \u7EC4\u4EF6\u5185\uFF0C\u76F4\u63A5\u8BBF\u95EE<code>this.$w6s</code>\u5BF9\u8C61\uFF0C\u4EE5\u8C03\u7528 sdk \u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$w6s<span class="token punctuation">.</span>header<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&#39;JS-SDK VueJS Demo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>\u4E8C\u3001<code>script</code> \u6807\u7B7E\u6A21\u5F0F\uFF1A</strong></p><p>\u9664\u6B64\u4E4B\u5916\uFF0Csdk \u8FD8\u652F\u6301\u4EE5 script \u6807\u7B7E\u5F15\u5165\u7684\u65B9\u5F0F\uFF0C\u7ED3\u5408 vue \u8FDB\u884C\u4F7F\u7528\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.6.12<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- \u4EE5\u5B9E\u9645sdk\u8BBF\u95EE\u5730\u5740\u4E3A\u51C6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./sdk.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5FC5\u987B\u4E3B\u52A8\u8C03\u7528\u521D\u59CB\u5316\u65B9\u6CD5</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$w6s<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$w6s<span class="token punctuation">.</span>device<span class="token punctuation">.</span><span class="token function">getDeviceInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><p>\u53EF\u4EE5\u901A\u8FC7<code>w6s.init</code>\u65B9\u6CD5\u8FDB\u884C\u521D\u59CB\u5316\u53C2\u6570\u8BBE\u7F6E\uFF0C\u5177\u4F53\u53EF\u8BBE\u7F6E\u53C2\u6570\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>w6s<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// \u662F\u5426\u5F00\u542F\u8C03\u8BD5\u6A21\u5F0F</span>
  <span class="token literal-property property">debug</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// \u662F\u5426\u5F00\u542F\u9274\u6743\u6A21\u5F0F</span>
  <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  
  <span class="token comment">// \u63A5\u53E3\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>

  <span class="token comment">// \u662F\u5426\u5F00\u542F\u63A5\u53E3\u6570\u636E\u6A21\u62DF\u529F\u80FD</span>
  <span class="token literal-property property">mock</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

  <span class="token comment">// Mock \u6570\u636E </span>
  <span class="token literal-property property">mockData</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h4 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E\uFF1A</h4><p><strong>debug</strong></p><p>\u9ED8\u8BA4\u4E3A false\u3002\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u7528\u63A5\u53E3\u7684\u76F8\u5173\u4FE1\u606F\u3002</p><p><strong>auth</strong></p><p>\u9ED8\u8BA4\u4E3A false\u3002\u5F00\u542F\u540E\uFF0C\u521D\u59CB\u5316\u903B\u8F91\u4F1A\u6709\u6240\u4E0D\u540C\uFF0C\u540C\u65F6\u9274\u6743\u80FD\u529B\u9700\u8981\u5BA2\u6237\u7AEF\u53CA\u540E\u7AEF\u53C2\u4E0E\uFF0C\u4E00\u65E6\u5F00\u542F\uFF0C\u6240\u6709\u63A5\u53E3\u5747\u9700\u8981\u6210\u529F\u9274\u6743\u540E\u624D\u53EF\u4F7F\u7528\uFF08\u9664\u9274\u6743\u63A5\u53E3\u672C\u8EAB\uFF09\u3002</p><p><strong>timeout</strong></p><p>\u63A5\u53E3\u8C03\u7528\u8D85\u65F6\u8BBE\u7F6E\uFF0C\u6BEB\u79D2\u6570\uFF0C\u9ED8\u8BA4\u4E3A 5 \u79D2\u3002</p><p>\u90E8\u5206\u63A5\u53E3\u4E0D\u53D7\u8BE5\u53C2\u6570\u5F71\u54CD\uFF0C\u4F8B\u5982\u9009\u62E9\u7167\u7247\u3002\u4EFB\u4F55\u6709\u539F\u751F\u9875\u9762\u5F39\u51FA\u6216\u6CA1\u6709\u56DE\u8C03\u7684\u65B9\u6CD5\uFF0Ctimeout \u5C06\u4E0D\u751F\u6548\u3002</p><p><strong>mock</strong></p><p>\u5F00\u542F js-sdk \u63A5\u53E3\u7684\u6570\u636E\u6A21\u62DF\u529F\u80FD\uFF0C\u8BE5\u5F00\u5173\u53EF\u901A\u8FC7<strong>process<i>.</i>env<i>.</i>NODE_ENV</strong>\u73AF\u5883\u53D8\u91CF\u6765\u63A7\u5236\u3002</p><p><strong>mockData</strong></p><p>\u63A5\u53E3\u7684\u6A21\u62DF\u6570\u636E\u5B9A\u4E49\uFF0C\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>w6s<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// \u542F\u7528 Mock \u670D\u52A1</span>
  <span class="token literal-property property">mock</span><span class="token operator">:</span> <span class="token boolean">true</span>                      
  <span class="token literal-property property">mockData</span><span class="token operator">:</span> <span class="token punctuation">{</span>     
    <span class="token comment">// \u670D\u52A1\u7C7B\u540D                </span>
    <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>         
      <span class="token comment">// \u5177\u4F53\u6267\u884C\u65B9\u6CD5\u7684\u56DE\u8C03              </span>
      <span class="token function">getUserTicket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>           
        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">user_ticket</span><span class="token operator">:</span> <span class="token string">&#39;testmock&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

w6s<span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">getUserTicket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>user_ticket<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// testmock</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="\u9519\u8BEF\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u4FE1\u606F" aria-hidden="true">#</a> \u9519\u8BEF\u4FE1\u606F</h2><p>js-sdk \u5728\u8C03\u7528\u5931\u8D25\u4F1A\u89E6\u53D1 error \u51FD\u6570\uFF0C\u9519\u8BEF\u4FE1\u606F\u53EF\u5728\u8FD4\u56DE\u7684 error \u53C2\u6570\u4E2D\u53C2\u770B\uFF0C\u4E0B\u9762\u4E3A\u793A\u4F8B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>w6s<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;sdk error: &#39;</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,28);function y(j,_){const a=o("RouterLink");return c(),l(u,null,[k,p("p",null,[m,t(a,{to:"/js-sdk/overview/usage.html#%E9%85%8D%E7%BD%AE"},{default:e(()=>[b]),_:1}),d]),g,p("p",null,[h,t(a,{to:"/js-sdk/overview/auth.html"},{default:e(()=>[v]),_:1}),f]),w],64)}var D=r(i,[["render",y]]);export{D as default};