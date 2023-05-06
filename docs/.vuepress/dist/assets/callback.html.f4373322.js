import{b as s}from"./app.e7996973.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=s(`<h1 id="\u5F00\u53D1\u8005\u63A5\u53E3\u56DE\u8C03" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u8005\u63A5\u53E3\u56DE\u8C03" aria-hidden="true">#</a> \u5F00\u53D1\u8005\u63A5\u53E3\u56DE\u8C03</h1><h2 id="\u6D88\u606F\u56DE\u8C03" tabindex="-1"><a class="header-anchor" href="#\u6D88\u606F\u56DE\u8C03" aria-hidden="true">#</a> \u6D88\u606F\u56DE\u8C03</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">POST</span> <span class="token literal-property property">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token constant">XXXXXX</span><span class="token operator">?</span>signature<span class="token operator">=</span><span class="token punctuation">{</span>signature<span class="token punctuation">}</span><span class="token operator">&amp;</span>timestamp<span class="token operator">=</span><span class="token punctuation">{</span>timestamp<span class="token punctuation">}</span><span class="token operator">&amp;</span>nonce<span class="token operator">=</span><span class="token punctuation">{</span>nonce<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>\u8BF7\u6C42\u5934\u90E8\uFF1A</strong></p><table><thead><tr><th>\u8BF7\u6C42\u5934</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>Content-Type</td><td>application/json</td></tr></tbody></table><p><strong>\u8BF7\u6C42\u53C2\u6570\uFF1A</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>http://XXXXXX</td><td>String</td><td>Y</td><td>\u56DE\u8C03\u5730\u5740</td></tr><tr><td>signature</td><td>String</td><td>Y</td><td>\u7B7E\u540D,\u660E\u6587\u6A21\u5F0F\u4E0B,\u7528message\u8BA1\u7B97\u7B7E\u540D,\u5176\u4F59\u60C5\u51B5\u7528encrypt\u8BA1\u7B97</td></tr><tr><td>timestamp</td><td>String</td><td>Y</td><td>\u65F6\u95F4\u6233</td></tr><tr><td>nonce</td><td>String</td><td>Y</td><td>\u968F\u673A\u6570</td></tr><tr><td>encrypt</td><td>String</td><td>Y</td><td>\u5BC6\u6587,\u5B89\u5168\u6A21\u5F0F\u53CA\u517C\u5BB9\u6A21\u5F0F\u4E0B,\u8FD4\u56DE\u8BE5\u5B57\u6BB5</td></tr><tr><td>message</td><td>String</td><td>Y</td><td>\u660E\u6587,\u660E\u6587\u6A21\u5F0F\u53CA\u517C\u5BB9\u6A21\u5F0F\u4E0B,\u8FD4\u56DE\u8BE5\u5B57\u6BB5</td></tr><tr><td>to_user_name</td><td>String</td><td>Y</td><td>\u6D88\u606F\u63A5\u6536\u5BF9\u8C61</td></tr><tr><td>from_user_name</td><td>String</td><td>Y</td><td>\u6D88\u606F\u53D1\u9001\u5BF9\u8C61</td></tr><tr><td>create_time</td><td>String</td><td>Y</td><td>\u56DE\u8C03\u6D88\u606F\u65F6\u95F4</td></tr><tr><td>msg_type</td><td>String</td><td>Y</td><td>\u6D88\u606F\u7C7B\u578B,text/image/voice/video/file/location/link/event</td></tr><tr><td>content</td><td>String</td><td>N</td><td>\u6587\u672C\u6D88\u606F\u5185\u5BB9</td></tr><tr><td>media_id</td><td>String</td><td>N</td><td>\u5A92\u4F53\u7C7B\u6D88\u606F\u7684\u5A92\u4F53ID</td></tr><tr><td>event</td><td>String</td><td>N</td><td>\u4E8B\u4EF6\u7C7B\u578B,SUBSCRIBE, SCAN, LOCATION, CLICK, VIEW</td></tr><tr><td>event_key</td><td>String</td><td>N</td><td>\u4E8B\u4EF6\u6807\u8BC6</td></tr></tbody></table><p><strong>\u8BF7\u6C42\u793A\u4F8B\uFF1A</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;encrypt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YN4w4Kudkm-6p1y8AATO6V&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;38-9izmiUlNo37wPV8dPQV&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>\u54CD\u5E94\u6570\u636E\uFF1A</strong></p><p>Map \u7684 JSON\uFF0C\u63A8\u8350\u8FD4\u56DE\u683C\u5F0F\u5982\u4E0B:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// application/json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Everything is ok.&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>\u52A0\u5BC6\u8BF4\u660E\uFF1A</strong></p><ul><li>\u8BA1\u7B97\u7B7E\u540D\uFF1Asignature=sha1(sort(token\u3001timestamp\u3001nonce\u3001echoStr))\u3002sort\u7684\u542B\u4E49\u662F\u5C06\u53C2\u6570\u6309\u7167\u5B57\u6BCD\u5B57\u5178\u6392\u5E8F\uFF0C\u7136\u540E\u4ECE\u5C0F\u5230\u5927\u62FC\u63A5\u6210\u4E00\u4E2A\u5B57\u7B26\u4E32, echoStr:\u660E\u6587\u6A21\u5F0F\u4E0B,\u7B49\u4E8Emessage,\u5176\u4F59\u4E3Aencrypt;</li><li>encrypt = Base64_Encode( AES_Encrypt[random(16B) + msg_len(4B) + msg + $appKey] )\uFF0C\u662F\u5BF9\u660E\u6587\u6D88\u606Fmsg\u52A0\u5BC6\u5904\u7406\u540E\u7684Base64\u7F16\u7801\u3002 \u5176\u4E2Drandom\u4E3A16\u5B57\u8282\u7684\u968F\u673A\u5B57\u7B26\u4E32\uFF1Bmsg_len\u4E3A4\u5B57\u8282\u7684msg\u957F\u5EA6\uFF0C\u7F51\u7EDC\u5B57\u8282\u5E8F\uFF1Bmsg\u4E3A\u6D88\u606F\u4F53\u660E\u6587\uFF1B$appKey\u4E3AAPP\u7684\u6807\u8BC6</li></ul><p><strong>\u89E3\u5BC6\u8BF4\u660E\uFF1A</strong></p><ul><li>\u5BF9\u5BC6\u6587BASE64\u89E3\u7801\uFF1Aaes_msg=Base64_Decode(encrypt)</li><li>\u4F7F\u7528AESKey\u505AAES\u89E3\u5BC6\uFF1Arand_msg=AES_Decrypt(aes_msg)</li><li>\u9A8C\u8BC1\u89E3\u5BC6\u540E$appKey\u3001msg_len</li><li>\u53BB\u6389rand_msg\u5934\u90E8\u768416\u4E2A\u968F\u673A\u5B57\u8282\uFF0C4\u4E2A\u5B57\u8282\u7684msg_len,\u548C\u5C3E\u90E8\u7684$appKey\u5373\u4E3A\u6700\u7EC8\u7684\u6D88\u606F\u4F53\u539F\u6587msg</li></ul><p><strong>\u56DE\u8C03\u6D88\u606F\u793A\u4F8B\uFF08\u660E\u6587\u683C\u5F0F\u5316\u7ED3\u679C\uFF09</strong></p><p>\u6587\u672C\u6D88\u606F\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;msg_time&quot;</span><span class="token operator">:</span> <span class="token number">1657853904532</span><span class="token punctuation">,</span>
    <span class="token property">&quot;from_domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workplus&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;from_user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;61e9fea875a24bfeb0fe2838e488d20f&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg_body&quot;</span><span class="token operator">:</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;to_user_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6D4B\u8BD5\u56DE\u8C03APP&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;create_time&quot;</span><span class="token operator">:</span> <span class="token number">1657853904532</span><span class="token punctuation">,</span>
    <span class="token property">&quot;to_user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;89bfb884fbd835790edc78033096204a3caa123a&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;to_domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workplus&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;from_user_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5F00\u53D1\u4EBA\u5458&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u8BED\u97F3\u6D88\u606F\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;msg_time&quot;</span><span class="token operator">:</span> <span class="token number">1657854149450</span><span class="token punctuation">,</span>
    <span class="token property">&quot;from_domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workplus&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;from_user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;61e9fea875a24bfeb0fe2838e488d20f&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;voice&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;media_domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workplus&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg_body&quot;</span><span class="token operator">:</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;media_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2894603e9e61422e8ea1ba26dc415b55&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;media_domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workplus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;to_user_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6D4B\u8BD5\u56DE\u8C03APP&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;from_user_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5F00\u53D1\u4EBA\u5458&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;media_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2894603e9e61422e8ea1ba26dc415b55&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;create_time&quot;</span><span class="token operator">:</span> <span class="token number">1657854149450</span><span class="token punctuation">,</span>
    <span class="token property">&quot;to_domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workplus&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;to_user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;89bfb884fbd835790edc78033096204a3caa123a&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u6587\u4EF6\u6D88\u606F\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">691882</span><span class="token punctuation">,</span>
    <span class="token property">&quot;from_domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workplus&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;from_user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;61e9fea875a24bfeb0fe2838e488d20f&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;media_domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workplus&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg_body&quot;</span><span class="token operator">:</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;IMG_1933.HEIC&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">691882</span><span class="token punctuation">,</span>
        <span class="token property">&quot;media_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eca2a97ac2a547e8bc61884ead91fd8c&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;media_domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workplus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;to_user_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6D4B\u8BD5\u56DE\u8C03APP&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;from_user_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5F00\u53D1\u4EBA\u5458&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;media_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eca2a97ac2a547e8bc61884ead91fd8c&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;create_time&quot;</span><span class="token operator">:</span> <span class="token number">1657854209226</span><span class="token punctuation">,</span>
    <span class="token property">&quot;to_user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;89bfb884fbd835790edc78033096204a3caa123a&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;to_domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workplus&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;IMG_1933.HEIC&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg_time&quot;</span><span class="token operator">:</span> <span class="token number">1657854209226</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u56FE\u7247\u6D88\u606F\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
        <span class="token property">&quot;msg_time&quot;</span><span class="token operator">:</span> <span class="token number">1657854250227</span><span class="token punctuation">,</span>
        <span class="token property">&quot;from_domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workplus&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;from_user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;61e9fea875a24bfeb0fe2838e488d20f&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;msg_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">1280</span><span class="token punctuation">,</span>
        <span class="token property">&quot;media_domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workplus&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;msg_body&quot;</span><span class="token operator">:</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;is_gif&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">1280</span><span class="token punctuation">,</span>
            <span class="token property">&quot;media_domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workplus&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;media_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;f2627421b3e54f64a2b973aa55270c90&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">959</span><span class="token punctuation">,</span>
            <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">116755</span><span class="token punctuation">,</span>
            <span class="token property">&quot;thumbnail_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;d18c73017c944152b35fd3ad4288cab2&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;to_user_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6D4B\u8BD5\u56DE\u8C03APP&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;from_user_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5F00\u53D1\u4EBA\u5458&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;media_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;f2627421b3e54f64a2b973aa55270c90&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">959</span><span class="token punctuation">,</span>
        <span class="token property">&quot;create_time&quot;</span><span class="token operator">:</span> <span class="token number">1657854250227</span><span class="token punctuation">,</span>
        <span class="token property">&quot;to_user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;89bfb884fbd835790edc78033096204a3caa123a&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;to_domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workplus&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;is_gif&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">116755</span><span class="token punctuation">,</span>
        <span class="token property">&quot;thumbnail_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;d18c73017c944152b35fd3ad4288cab2&quot;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u89C6\u9891\u6D88\u606F\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
        <span class="token property">&quot;msg_time&quot;</span><span class="token operator">:</span> <span class="token number">1657854325463</span><span class="token punctuation">,</span>
        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">563948</span><span class="token punctuation">,</span>
        <span class="token property">&quot;from_domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workplus&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;from_user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;61e9fea875a24bfeb0fe2838e488d20f&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;msg_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;video&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;media_domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workplus&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;msg_body&quot;</span><span class="token operator">:</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">563948</span><span class="token punctuation">,</span>
            <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;media_domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workplus&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;base64&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;media_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4028ec49c54142d8a18f35bea3196c2d&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;to_user_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6D4B\u8BD5\u56DE\u8C03APP&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;media_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4028ec49c54142d8a18f35bea3196c2d&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;create_time&quot;</span><span class="token operator">:</span> <span class="token number">1657854325463</span><span class="token punctuation">,</span>
        <span class="token property">&quot;to_domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workplus&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;to_user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;89bfb884fbd835790edc78033096204a3caa123a&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;from_user_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5F00\u53D1\u4EBA\u5458&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;base64&quot;</span>    
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,27);function t(o,e){return p}var c=n(a,[["render",t]]);export{c as default};