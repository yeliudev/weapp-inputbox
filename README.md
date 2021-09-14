# weapp-inputbox

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Language](https://img.shields.io/badge/javascript-ES6-orange.svg)](https://www.javascript.com/)

与微信小程序原生样式契合的模态输入框，动画部分采用 CSS 动画实现

## 效果展示

<p align="center">
  <img width="300" src=".github/preview.gif" />
</p>

## 使用方法

* 获取组件代码
    * 执行 `git clone https://github.com/yeliudev/weapp-inputbox.git`
* 下载后将 `components/inputBox` 文件夹复制到目标工程的 `components` 文件夹内
* 配置页面设置：在需要使用该组件的页面的 `xxx.json` 文件中添加如下字段：

  ```
  {
    "usingComponents": {
      "inputBox": "/components/inputBox/inputBox"
    }
  }
  ```

* 在需要使用该组件的页面的 `xxx.wxml` 文件中合适位置添加 `<inputBox>` 标签和相关参数即可

## 参数列表

| 参数名 | 类型 | 必填 | 默认值 | 说明 |
| - | :-: | :-: | :-: | :-: | 
| multiline | Boolean | false | false | 是否为多行输入框 |
| title | String | false | 空 | 输入框标题 |
| placeholder | String | false | 空 | 输入框为空时占位符 |
| maxlength | Number | false | 10 | 最大输入长度，设置为 -1 的时候不限制最大长度 |
| bindinputCancel | String | false | 空 | 点击取消将触发 inputCancel 事件 |
| bindinputConfirm | String | false | 空 | 点击确定将触发 inputConfirm 事件，输入框内容保存在 e.detail 中 |

* 调用实例：

```html
<inputBox title='输入框标题'
          multiline
          placeholder='(输入框占位符)'
          maxlength='140'
          bindinputCancel='onInputCancel'
          bindinputConfirm='onInputConfirm'
          wx:if='{{ showMultilineInputbox }}'>
</inputBox>
```

## 目录结构

```
┌── components                      自定义组件目录
│   └── inputBox                        自定义组件
│       ├──  inputBox.js                    组件逻辑
│       ├──  inputBox.json                  组件设置
│       ├──  inputBox.wxml                  组件结构
│       └──  inputBox.wxss                  组件样式表
├── pages                           页面目录
│   └── index                           首页页面
│       ├──  index.js                       页面逻辑
│       ├──  index.json                     页面设置
│       ├──  index.wxml                     页面结构
│       └──  index.wxss                     页面样式表
├── app.js                          小程序逻辑
├── app.json                        小程序公共设置
├── app.wxss                        小程序公共样式表
└── project.config.json             工具配置
```

## License

[MIT License](LICENSE)

Copyright (c) 2021 Ye Liu
