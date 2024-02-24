import{_ as e,c as a,o,a5 as t}from"./chunks/framework.BSSyk2BU.js";const m=JSON.parse('{"title":"名词解析","description":"","frontmatter":{},"headers":[],"relativePath":"light-app/noun.md","filePath":"light-app/noun.md"}'),r={name:"light-app/noun.md"},c=t('<h1 id="名词解析" tabindex="-1">名词解析 <a class="header-anchor" href="#名词解析" aria-label="Permalink to &quot;名词解析&quot;">​</a></h1><h2 id="域" tabindex="-1">域 <a class="header-anchor" href="#域" aria-label="Permalink to &quot;域&quot;">​</a></h2><p>域是 WorkPlus 里一个表示租户的概念，用来承载用户，组织，应用等，在数据中以<code>domain_id</code>表示。</p><h2 id="组织" tabindex="-1">组织 <a class="header-anchor" href="#组织" aria-label="Permalink to &quot;组织&quot;">​</a></h2><p>组织包含在域中，一个域可以有多个组织。通过在数据中以<code>org_id</code>或<code>org_code</code>表示。</p><h2 id="用户" tabindex="-1">用户 <a class="header-anchor" href="#用户" aria-label="Permalink to &quot;用户&quot;">​</a></h2><p>一个账号在 WorkPlus 中，通常有两个角色：<code>用户</code>和<code>雇员</code>。</p><p>用户就是一个普通的角色，只包含常规的个人信息。而雇员，就是所在的组织部门里的角色，通常会包含职位信息等。一个人可以存在于多个组织或部门里。</p><h2 id="会话" tabindex="-1">会话 <a class="header-anchor" href="#会话" aria-label="Permalink to &quot;会话&quot;">​</a></h2><p>会话是指用户与用户、用户与群组、用户与应用(或机器人)的对话交流过程。</p><p>在 WorkPlus 中, 每个会话都有唯一的会话ID[conversation_id]。</p><h2 id="appkey-appsecret" tabindex="-1">AppKey/AppSecret <a class="header-anchor" href="#appkey-appsecret" aria-label="Permalink to &quot;AppKey/AppSecret&quot;">​</a></h2><p>应用的<code>key</code>和<code>secret</code>，在管理后台创建应用后可获得，通常用于做单点登录。</p>',13),d=[c];function n(p,i,s,h,l,_){return o(),a("div",null,d)}const f=e(r,[["render",n]]);export{m as __pageData,f as default};
