## 分享到微博  自带标题


## 手机输入框 弹出键盘 遮挡
某些安卓机弹出键盘后  并不会把键盘高度算入页面  键盘遮挡页面 且不能滑动
## video 
## 摇一摇
## 文件上传


## 输入框
 输入框获取焦点，需要用户行为触发
 输入框聚焦时，软键盘弹出；如输入框在可视界面底部，软键盘弹出将遮挡它时，整个可视界面模块会被软键盘自动推上去，从而保持聚焦的输入框在我们可视范围。
 ### ios
 >微信
 当输入框在页面底部，软键盘弹出会遮挡住输入框时，整个页面会自动上移，底部出现空白，且输入框失去焦点时，仍保持上移的状态，需要滑动页面时才恢复正常。
  在输入框失去焦点时 添加滚动事件
  ```
  $(".fixedbox").blur(function(e){
    window.scrollTo(0, 0);
    })
  ```
> ios 蜗牛客户端
    当输入框定位在页面底部，bottom为0时，弹出框会覆住fixed跟absolute布局的元素

    方案：当输入框获得焦点时，添加margin-bottom，值为输入框的高度
> ios 云阅读客户端
    输入框fixed定位时， 弹出键盘后，fixed定位元素错位。
    方案：

    1)把fixed改为absolute定位,有同蜗牛bottom为0时问题

    2)给html、body添加以下样式,有同蜗牛bottom为0时问题
```
html,
body {
  -webkit-overflow-scroll: touch !important;
  overflow: auto !important;
  height: 100% !important;
```

### Android 
弹出键盘时浏览器可视高度发生变化
android 8.1.0 版本无兼容问题

```js
  document.body.style.height = window.screen.Height +'px'
```
## 最终方案

1. 尽量回避输入框元素出现在页面最底部的场景
