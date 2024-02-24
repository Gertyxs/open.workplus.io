import{_ as s,c as t,o as i,a5 as a}from"./chunks/framework.BSSyk2BU.js";const c=JSON.parse('{"title":"弹框","description":"","frontmatter":{},"headers":[],"relativePath":"js-sdk/dialog.md","filePath":"js-sdk/dialog.md"}'),h={name:"js-sdk/dialog.md"},n=a(`<h1 id="弹框" tabindex="-1">弹框 <a class="header-anchor" href="#弹框" aria-label="Permalink to &quot;弹框&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">版本要求</p><p>该功能需要 WorkPlus APP 版本在 <strong>v4.11.6</strong> 及以上。</p></div><h2 id="确认框" tabindex="-1">确认框 <a class="header-anchor" href="#确认框" aria-label="Permalink to &quot;确认框&quot;">​</a></h2><p>弹出原生的确认框，可以通过控制按钮实现 Alert 和 Confirm 两种形态的弹出框。</p><p><strong>使用说明</strong></p><table><thead><tr><th>客户端</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>支持情况</td><td>支持</td><td>支持</td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w6s.dialog.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">showModal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;标题&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;内容&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  show_cancel: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  cancel_text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;取消&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  confirm_text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;确认&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><strong>参数说明</strong></p><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>String</td><td>必须，弹框的标题</td></tr><tr><td>content</td><td>String</td><td>弹框的内容</td></tr><tr><td>show_cancel</td><td>Boolean</td><td>是否显示“取消”按钮，默认显示</td></tr><tr><td>cancel_text</td><td>String</td><td>“取消”按钮的文本，默认使用系统按钮文本</td></tr><tr><td>confirm_text</td><td>String</td><td>“确认”按钮的文本，默认使用系统按钮文本</td></tr></tbody></table><p><strong>返回数据</strong></p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>cancel</td><td>如果为 true，表示点击了“取消”按钮</td></tr><tr><td>confirm</td><td>如果为 true，表示点击了“确认”按钮</td></tr></tbody></table><h2 id="带输入的确认框" tabindex="-1">带输入的确认框 <a class="header-anchor" href="#带输入的确认框" aria-label="Permalink to &quot;带输入的确认框&quot;">​</a></h2><p>弹出原生的确认框，支持输入内容。</p><p><strong>使用说明</strong></p><table><thead><tr><th>客户端</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>支持情况</td><td>支持</td><td>支持</td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w6s.dialog.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">showInputView</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;标题&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  cancel_text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;取消&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  confirm_text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;确认&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  placeholder: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请输入内容&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><strong>参数说明</strong></p><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>String</td><td>必须，弹框的标题</td></tr><tr><td>cancel_text</td><td>String</td><td>“取消”按钮的文本，默认使用系统按钮文本</td></tr><tr><td>confirm_text</td><td>String</td><td>“确认”按钮的文本，默认使用系统按钮文本</td></tr><tr><td>placeholder</td><td>String</td><td>输入框的背景提示语</td></tr><tr><td>value</td><td>String</td><td>输入框的默认值</td></tr></tbody></table><p><strong>返回数据</strong></p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>code</td><td>0 为“确认”，-2 为“取消”</td></tr><tr><td>text</td><td>输入的内容</td></tr></tbody></table><h2 id="actionsheet" tabindex="-1">ActionSheet <a class="header-anchor" href="#actionsheet" aria-label="Permalink to &quot;ActionSheet&quot;">​</a></h2><p>从底部弹出原生的 ActionSheet，可以自定义各按钮的文本，但”取消“按钮是固定的。</p><p><strong>使用说明</strong></p><table><thead><tr><th>客户端</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>支持情况</td><td>支持</td><td>支持</td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w6s.dialog.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">showActionSheet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  item_list: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;选项A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;选项B&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;选项C&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><strong>参数说明</strong></p><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>item_list</td><td>Array</td><td>必须的，选项的字符串数组</td></tr></tbody></table><p><strong>返回数据</strong></p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>tap_index</td><td>点击了第几项（从0开始）</td></tr></tbody></table><h2 id="轻提示" tabindex="-1">轻提示 <a class="header-anchor" href="#轻提示" aria-label="Permalink to &quot;轻提示&quot;">​</a></h2><p>弹出原生的轻提示弹框 Toast，可以自定义文本及显示时长，默认<code>3秒</code>后隐藏。</p><p><strong>使用说明</strong></p><table><thead><tr><th>客户端</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>支持情况</td><td>支持</td><td>支持</td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w6s.dialog.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">showToast</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;这是一个toast&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  duration: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 毫秒数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><strong>参数说明</strong></p><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>String</td><td>必须的，标题</td></tr><tr><td>duration</td><td>Number</td><td>非必须，显示的时长，默认 3000 毫秒</td></tr></tbody></table><h2 id="loading" tabindex="-1">Loading <a class="header-anchor" href="#loading" aria-label="Permalink to &quot;Loading&quot;">​</a></h2><p>弹出原生的 Loading，可以添加文本，但需要手动关闭。</p><p><strong>使用说明</strong></p><table><thead><tr><th>客户端</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>支持情况</td><td>支持</td><td>支持</td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 显示 Loading</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w6s.dialog.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">showLoading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;加载中...&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  block: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 隐藏 Loading</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w6s.dialog.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hideLoading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p><strong>参数说明</strong></p><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>String</td><td>非必须，标题</td></tr><tr><td>block</td><td>Boolean</td><td>非必须，默认不锁定屏幕</td></tr></tbody></table><h2 id="本地通知" tabindex="-1">本地通知 <a class="header-anchor" href="#本地通知" aria-label="Permalink to &quot;本地通知&quot;">​</a></h2><p>弹出系统的通知提示框，不同的系统表现可能会有差异。</p><p><strong>使用说明</strong></p><table><thead><tr><th>客户端</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>支持情况</td><td>支持</td><td>支持</td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w6s.dialog.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">popNotification</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;通知标题&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;通知内容&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  route_url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://www.test.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><strong>参数说明</strong></p><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>选填，默认为“default”，通知栏默认的样式</td></tr><tr><td>title</td><td>String</td><td>必须，通知的标题</td></tr><tr><td>text</td><td>String</td><td>必须，通知的内容</td></tr><tr><td>route_url</td><td>String</td><td>选填，支持其他路由，如 openlink, openApp 等</td></tr></tbody></table>`,50),l=[n];function d(e,p,k,r,E,o){return i(),t("div",null,l)}const y=s(h,[["render",d]]);export{c as __pageData,y as default};
