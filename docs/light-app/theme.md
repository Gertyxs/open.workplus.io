# 主题

WorkPlus 主题是基于[设计规范](/design-specification)落地实践的技术方案，支撑WorkPlus 应用在不同企业文化场景，提供Android、iOS、PC、html 全链路生态支持，轻松构建企业专属的应用程序。

::: tip
更进一步，我们支持基于主题的千变万化、节日主题、暗黑模式、千人千面、灰度发布等特性。
:::


## Android / iOS

移动端通过`主题包`的形似，来构建或者变换主题，主题包包含色值、字体、icon等展示元素信息。存在以下概念：

- **默认主题**

打包构建时，支持加入`主题包`，使移动端应用默认就打开显示。

- **远程主题**

通过远程服务器动态下发的`主题包`，具有以及范围以及时效性。

### 创建主题

登录管理后台，在`客户端管理`点击`主题换肤`，打开页面后点击`添加主题`即可进入创建主题界面。

<p style="text-align: left">
  <img :src="$withBase('/theme/list-theme.png')" alt="list-theme" width="80%">
</p>

<p style="text-align: left">
  <img :src="$withBase('/theme/new-theme.png')" alt="new-theme" width="80%">
</p>



### 主题包结构

主题包以`.zip`压缩包的形式存在，具体结构以及定义如下👇

::: vue-code

theme
├── img _(**Optional**)_
│   └──  w6s_skin_img_icon_*.png/jpg
├── `theme.json`
├── dark_theme.json _(**Optional**)_
├── font\_\*\_regular.ttf _(**Optional**)_
├── font\_\*\_bold.ttf _(**Optional**)_
├── `native_iconfont.ttf` _(**Optional**)_
├── `native_iconfont.json` _(**Optional**)_
├── `web_iconfont.ttf` _(**Optional**)_
├── `web_iconfont.json`  _(**Optional**)_
├── `w6s_skin_theme.css`
├── w6s_skin_dark_theme.css _(**Optional**)_
└── w6s_skin_common_theme.css _(**Optional**)_

:::

- `img`: 用以存放主题的图片资源，命名格式为->  w6s_skin_img_icon_*.png/jpg
- `theme.json`: 主题包配置入口文件，用以定义主题名，主题版本，主题包含的色彩参数，字体，iconfont资源映射，详细介绍请查看[theme.json定义](#theme-json)
- `dark_theme.json`: 主题包暗黑模式的配置文件
- `font_*_regular.ttf`: 字体文件，常规类型
- `font_*_bold.ttf`: 字体文件，粗体类型
- `native_iconfont.ttf`: 原生使用的iconfont 文件
- `native_iconfont.json`: 原生使用的iconfont 定义json，包括font_class、unicode等
- `web_iconfont.ttf`: html web使用的iconfont 文件
- `web_iconfont.json`: html web使用的iconfont 定义json，包括font_class、unicode等
- `w6s_skin_theme.css`: h5 本地对接引入的css文件
- `w6s_skin_dark_theme.css`: *w6s_skin_theme.css* 暗黑模式对应的css文件
- `w6s_skin_common_theme.css`: *w6s_skin_theme.css*, *w6s_skin_dark_theme.css* 公共依赖的css文件

::: tip
以上涉及iconfont的数据，可通过工具或者[www.iconfont.cn](https://www.iconfont.cn/) 生成
:::







### theme.json

```json
{
  "color": {  //按照"设计规范"色彩约定
    "primary": "#444444",
    "secondary": "#92A2BD",
    "accent0": "#FF9100",
    "accent1": "#C7C7C7",
    "primary_text": "#444444",
    "secondary_text": "#A3A3A3",
    "tertiary_text": "#666666",
    "common_text0": "#FFFFFF",
    "main_background": "#F2F3F4",
    "title_background": "#FFFFFF",
    "tabbar_background": "#FFFFFF",
    "nav_shadow": "#DDDDDD",
    "surface_background0_normal": "#FFFFFF",
    "surface_background0_pressed": "#F2F3F4",
    "surface_background1_normal": "#FFFFFF",
    "surface_background1_pressed": "#E4E5E6",
    "surface_background2_normal": "#F4F4F4",
    "common_background0": "#FFFFFF",
    "common_background1": "#EEEFEA",
    "common_divider0": "#D9D9D9",
    "icf_primary": "#444444",
    "status_bar_content": "dark",
    "button_background": "#444444",
    "popup_background": "#FFFFFF",
    "toast_background": "#000000",
    "tabbar_item_unselected": "#444444",
    "tabbar_item_selected": "#444444",
    "tabbar_item_text_unselected": "#A3A3A3",
    "tabbar_item_text_selected": "#444444",
    "particular": {
      "search_background": "#F4F4F4",
      "page_control_selected": "#444444",
      "page_control_unselected": "#C7C7C7",
      "watermark_text": "99E1E1E1"
    }
  },
  "font": {  //全局字体规范，覆盖全局文本控件
    "regular": {
      "resource": "BMWGroup_Cond_Regular.ttf",
      "name": "BMWGroupCondensed-Regular"
    },
    "bold": {
      "resource": "BMWGroup_Cond_Bold.ttf",
      "name": "BMWGroupCondensed-Bold"
    }
  },
  "iconfont": { //iconfont文件映射
    "native": {
      "resource": "native_iconfont.ttf",
      "definition": "native_iconfont.json"
    },
    "web": {
      "resource": "web_iconfont.ttf",
      "definition": "web_iconfont.json"

    }
  },
  "dark": { //是否支持开启暗黑模式
    "enable": true
  },
  "theme": "hcbm", //主题名字
  "version": 123,  //主题版本号
  "timestamp": -1 
}


```


详细说明：

| 参数 | 说明| 备注 |
| - | - |  - |
| color  | 按照[设计规范](/design-specification)色彩约定 | 必填 |
| font  | 全局字体规范，覆盖全局文本控件 |  选填 |
| iconfont  | iconfont文件映射, 我们推荐主题包按约定引入iconfont，以达到更好的展示效果跟灵活变换，具体参考[详细说明]| 选填 | 
| dark  | 暗黑模式配置，决定是否支持开启。若开启，则会显示`深色模式`设置项，操作路径：<br/>`关于->通用->深色模式`。当该配置项打开后，会优先使用当前使用的主题包里的 `dark_theme.json`，若主题包不存在该文件，则会依次降级匹配对应的`dark_theme.json` | 选填 |
| theme  | 主题包名称，例如: `新春版` | 必填 |
| version  | 主题包版本号，每次更新时必须+1，否则会无法生效 | 必填 |

::: tip
iconfont 以及暗黑模式开启后，对应资源不存在时都会有对应的降级处理，也即按照优先级依次寻找对应需要的资源文件，优先级顺序如下：

`远程定制主题包 > 远程默认主题包 -> 构建时默认主题包`

一般情况下，默认主题包的`dark_theme.json`满足多数场景。
:::




### iconfont

iconfont可译为图标字体，顾名思义就是用字体文件取代图片文件来展示图标、特殊字体等元素的一种方法。简单来说，iconfont就是把多个图标文件打包为ttf字体文件，注册到系统中，app 可以像使用字体一样使用图标。其原理可以简单理解为通过ttf 字体文件维护一个unicode 码与图形的映射关系。当使用iconfont为项目助力的时候，配置多个图标不再需要去下载数个png 文件，仅需要维护一套ttf 字体文件即可。iconfont 不仅具有矢量性、可自由变化大小的特点，而且支持任意改变颜色。从项目角度来看，由于无需针对不同手机分辨率内置多张图片，可以一定程度减小包体积，而且方便UI同学对图标进行统一管理，为无用icon 和相似icon 检测做基础。

WorkPlus 在UI 一致性建设的过程中，已经陆续完成了200+个iconfont的替换，去除了许多冗余的icon。通过主题的介入，基于WorkPlus 平台建设的html 应用，我们也支持使用同一套iconfont，达到全面UI 一致的目标。

以下为我们通过[iconfont.cn](https://www.iconfont.cn/)维护管理的部分icon👇

<p style="text-align: left">
  <img :src="$withBase('/theme/display-iconfont.jpg')" alt="display-iconfont" width="80%">
</p>