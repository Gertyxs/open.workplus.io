import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.BSSyk2BU.js";const g=JSON.parse('{"title":"项目脚手架","description":"","frontmatter":{},"headers":[],"relativePath":"dev-tools/scaffold.md","filePath":"dev-tools/scaffold.md"}'),l={name:"dev-tools/scaffold.md"},p=n(`<h1 id="项目脚手架" tabindex="-1">项目脚手架 <a class="header-anchor" href="#项目脚手架" aria-label="Permalink to &quot;项目脚手架&quot;">​</a></h1><p>WorkPlus 提供<code>@w6s/cli</code>工具，用于快速创建项目初始架构。</p><h2 id="安装-cli" tabindex="-1">安装 cli <a class="header-anchor" href="#安装-cli" aria-label="Permalink to &quot;安装 cli&quot;">​</a></h2><p>通过以下命令进行安装：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> global add @w6s/cli</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install -g @w6s/cli</span></span></code></pre></div><p>安装成功后，在 shell 中键入<code>w6s</code>，即可查看所有功能说明。</p><h2 id="w6s-init" tabindex="-1">w6s init <a class="header-anchor" href="#w6s-init" aria-label="Permalink to &quot;w6s init&quot;">​</a></h2><p>当前<code>w6s-cli</code>内置两个项目模版，分别是<code>admin</code>和<code>H5</code>，如其名，admin 为管理后台类型的前端项目模版，而 H5 就是轻应用的前端项目模版。</p><p>假设当前在文件目录A， 执行以下命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">w6s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init project1</span></span></code></pre></div><p>此时，会要求使用者选择项目模版，通过<code>上下方向键</code>选择需要的模版即可。</p><p>选择模版后，cli 会自动在 A 目录下创建 project1 文件夹，并把所选的项目模版生成到 project1 文件夹内，在这之前会有一些人机交互，使用者需要输入一些简单的项目信息：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 请输入项目名称 project1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 请输入项目描述 project1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 请输入项目创建者 hejx</span></span></code></pre></div><p>项目创建完毕后，会询问是否自动安装依赖及启动服务，然后输入<code>yes/no</code>即可。cli 会自动判断你的电脑上所安装的<code>Node.js包管理器</code>，优先会使用<code>Yarn</code>进行依赖的安装。</p><p>如果没有选择自动安装依赖及启动服务，需要进入 project1 文件夹，执行以下命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入目录</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> project1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装成功后，启动服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> serve # yarn dev 同样可用</span></span></code></pre></div><h2 id="技术栈" tabindex="-1">技术栈 <a class="header-anchor" href="#技术栈" aria-label="Permalink to &quot;技术栈&quot;">​</a></h2><p>核心技术栈：</p><ul><li><a href="https://vuejs.org/" target="_blank" rel="noreferrer">vue@2.6.11</a></li><li>vue-router@3.1.6</li><li>vuex@3.1.3&quot;</li><li>vue-i18n@8.17.5</li><li>typescript@3.8.3</li><li>axios@0.19.2</li><li>vue-class-component@7.2.3</li><li>vue-property-decorator@8.4.1</li><li>vuex-module-decorators@0.17.0</li></ul><p>UI库：</p><ul><li><code>admin</code> <a href="https://element.eleme.cn/#/zh-CN" target="_blank" rel="noreferrer">element-ui@2.9.2</a></li><li><code>H5</code> <a href="https://youzan.github.io/vant-weapp/#/intro" target="_blank" rel="noreferrer">vant@2.8.1</a></li></ul><p>样式：</p><ul><li><a href="https://github.com/sass/dart-sass" target="_blank" rel="noreferrer">Sass@1.32.8</a></li></ul><div class="tip custom-block"><p class="custom-block-title">关于 Dart Sass</p><p>从<code>w6s-cli@2.3.0</code>版本开始，<code>node-sass</code>被移除，转而使用性能更好、安装对环境依赖更少的<code>dart-sass</code>。</p><p>相关知识点，请查看下方链接：</p><ul><li><a href="https://sass-lang.com/blog/announcing-dart-sass#why-dart" target="_blank" rel="noreferrer">Wht Dart?</a></li><li><a href="https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/sass.html#node-sass-to-dart-sass" target="_blank" rel="noreferrer">Node Sass to Dart Sass</a></li></ul></div><p>其他：</p><ul><li>core-js@3.6.5</li><li>@sentry <ul><li>browser@5.15.5</li><li>integrations@5.15.5</li></ul></li><li>@w6s <ul><li>sdk</li></ul></li></ul><h2 id="目录说明" tabindex="-1">目录说明 <a class="header-anchor" href="#目录说明" aria-label="Permalink to &quot;目录说明&quot;">​</a></h2><p>以<code>H5</code>模版为例，当前项目文件结构如下：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> README.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> babel.config.js            --- babel 配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commitlint.config.js       --- commitlint 配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mock                       --- 模拟 api，mock 服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └── index.js</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> public</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├── favicon.ico</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └── index.html</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sentry.config.js           --- sentry 配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├── App.vue</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├── api                    --- api 目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │   └── user.ts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├── assets                 --- 放置静态资源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │   └── logo.png</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├── components</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │   └── HelloWorld.vue</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├── i18n.ts                --- 国际化配置入口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├── locales                --- 国际化文件存放位置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │   └── zh-CN.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├── main.ts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├── router                 --- 路由配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │   └── index.ts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├── shims-tsx.d.ts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├── shims-vue.d.ts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├── store                  --- vuex 配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │   ├── index.ts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │   └── modules</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │       └── Counter.ts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├── styles</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │   └── index.scss</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├── typings</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │   └── Common.ts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├── utils</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │   ├── cordova            --- cordova 相关，引入了 @w6s/codash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │   │   └── index.ts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │   ├── http               --- http 相关，封装了一些 api 请求方法</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │   │   └── https.ts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │   └── sentry             --- sentry 模块的设置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │       └── index.ts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └── views                  --- 页面</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     ├── About.vue</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     └── Home.vue</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stylelint.config.js        --- stylelint 配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tsconfig.json              --- typescript 配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> w6s.config.js              --- w6s-cli-script 配置（详情请看 w6s.config.js 栏目）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .browserslistrc            --- babel 转换的目标浏览器版本配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .editorconfig              --- ide 的一些默认配置，例如缩进为2个空格</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .env                       --- 环境配置文件（生产配置）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .env.development           --- 环境配置文件（开发配置）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .eslintrc                  --- eslint 的配置文件</span></span></code></pre></div><h2 id="scripts-命令说明" tabindex="-1">scripts 命令说明 <a class="header-anchor" href="#scripts-命令说明" aria-label="Permalink to &quot;scripts 命令说明&quot;">​</a></h2><p>具体可用命令，请在项目的根目录查看<code>package.json</code>的<code>scripts</code>标签，以下做简单的作用描述：</p><ul><li><code>dev</code> -- 启动服务，用于项目开发</li><li><code>serve</code> -- 同上</li><li><code>build</code> -- 对项目进行打包</li><li><code>lint</code> -- js 代码检测</li><li><code>lint:style</code> -- 样式检测</li><li><code>i18n:report</code> -- 检测 i18n 的配置是否有缺漏或者存在没被使用的属性</li><li><code>inspect</code> -- 打印出项目的 webpack 配置</li><li><code>svg</code> -- 通过<code>vue-svgicon</code>，把 svg 图标生成 vue 控件</li></ul>`,32),e=[p];function t(h,k,d,r,F,c){return a(),i("div",null,e)}const y=s(l,[["render",t]]);export{g as __pageData,y as default};