##  视频/音频播放

### video 属性

> 状态属性  readyState(就绪状态) 、networkState(当前网络状态)

 readyState :   0 = HAVE_NOTHING - 没有关于音频/视频是否就绪的信息 
                1 = HAVE_METADATA - 关于音频/视频就绪的元数据 
                2 = HAVE_CURRENT_DATA - 关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒 
                3 = HAVE_FUTURE_DATA - 当前及至少下一帧的数据是可用的 
                4 = HAVE_ENOUGH_DATA - 可用数据足以开始播放
 
 networkState : 0 = NETWORK_EMPTY - 音频/视频尚未初始化
                1 = NETWORK_IDLE - 音频/视频是活动的且已选取资源，但并未使用网络
                2 = NETWORK_LOADING - 浏览器正在下载数据
                3 = NETWORK_NO_SOURCE - 未找到音频/视频来源

（在ios微信中，readyState、networkState在视频开始播放前始终返回0）

#### ios(未播放时)

|property| weixin | safari | uc | snail  |
| :--- | :--- | :--- | :--- |
|readyState|   0    |   1  |   1  | 0 |
|networkState |   0    |   3  |   3  | 0 |
|inline| true |  true  |false |false|

#### Android

| property | weixin | safari |
| :--- | :--- | :--- |
| IOS 钉钉 | 支持 | 支持 |
| IOS Safari | 禁止 | 自动播放 |
| IOS 微信 | 禁止 | 禁止 |


>事件

 兼容性较好 ：ended 、playing、timeupdate、play、paused
 其他事件，如loadeddata 、loadedmetadata、canplay 等，大部分无法监听


 ### 自动播放 autoplay
    适用于部分浏览器(不推荐)
    微信中自动播放：
```js
var audio = document.getElementsByTagName('audio');
document.addEventListener("WeixinJSBridgeReady", ()=>{
    audio[0].play();
}, false);

```


## 点击播放

经过试验，当在明确的用户操作（touch、click）时，通过这些用户行为事件的回调函数，用video.play()可以触发视频播放

iOS6+
可以在用户的touch时间中动态创建并播放视频。

iOS < 6
可以在用户的touch时间中动态创建视频，但不能播放；要再追加一个click事件来启动播放；也就是说，给伪造的视频播放按钮同时绑定tap和click事件，在tap的时候创建，在之后300毫秒的click中去播放。

Android
大部分高版本Android可以像iOS6+那样去处理，但是低版本的不行，必须要通过click事件去传递video.play()，为了保持兼容，最好是用帮tap和click两个事件来分别完成视频的初始化和播放。

我们还发现，有些低版本Android中，无法通过video.play()来播放视频，必须有真实的用户点击视频元素才能播放；这种情况，有一个技巧就是在tap的时候初始化并放大视频覆盖在播放视图中，让300毫秒后的真实点击行为穿透点击在视频元素上来实现播放。

```js 
var video = document.getElementsByTagName('video');
video.addEventListener("click", ()=>{
    video[0].play();
}, false);
```

##  X5 
X5是腾讯基于Webkit开发的浏览器内核，应用于Android端的微信、QQ、QQ浏览器等应用。它提供了一种名叫「同层播放器」的特殊video元素以解决遮挡问题。

在普通video元素上添加属性 x5-video-player-type ，启用Ｈ5同层播放器
## 属性 
### x5-video-player-fullscreen 全屏方式
如果不申明此属性，页面得到视口区域为原始视口大小(视频未播放前)，不包含导航栏的高度，导致上下黑边
通过监听窗口大小实现全屏
``` js 
window.onresize = function(){
    video.style.width = window.innerWidth + "px";
    video.style.height = window.innerHeight + "px";
}
```
### x5-video-orientation 控制横竖屏
功能：声明播放器支持的方向
可选值： landscape 横屏, portraint竖屏 ,landscape|portrait 跟随手机自动旋转(此属性只在声明了x5-video-player-type=”h5”情况下生效)

### playsinline="true"  webkit-playsinline="true"  
需要嵌入网页的APP比如WeChat中UIwebview 的allowsInlineMediaPlayback = YES webview.allowsInlineMediaPlayback = YES，才能生效
ios 微信中支持 ，安卓不支持。

## 事件回调
### x5videoenterfullscreen 进入全屏通知
``` js
myVideo.addEventListener("x5videoenterfullscreen", function(){
  alert("player enterfullscreen");
})
```
### x5videoexitfullscreen 退出全屏通知

```js 
myVideo.addEventListener("x5videoexitfullscreen", function(){
  alert("player exitfullscreen");
})
```

### video  

``` html
<video id='video'
  style='object-fit:fill'
  autoplay
  webkit-playsinline 
  playsinline 
  x5-video-player-type="h5"
  x5-video-player-fullscreen="true"
  x5-video-orientation="portraint" 
  src='https://easyread.nosdn.127.net/web/trunk/1545964254280/videoshort.mp4'
  poster='' >
</video>
<!--
  object-fit: fill   视频内容充满整个video容器
  poster:"img.jpg" 视频封面
  autoplay： 自动播放
  preload:
     auto - 当页面加载后载入整个视频
     meta - 当页面加载后只载入元数据
     none - 当页面加载后不载入视频

  muted：当设置该属性后，它规定视频的音频输出应该被静音
  x-webkit-airplay='true' airplay='allow' ios镜像投影功能
  webkit-playsinline playsinline:   内联播放

  x5-video-player-type="h5" :  启用x5内核H5播放器
  x5-video-player-fullscreen="true"  全屏设置。ture和false的设置会导致布局上的不一样
  x5-video-orientation="portraint" ：声明播放器支持的方向，可选值landscape 横屏,portraint竖屏。
                                     默认值portraint。无论是直播还是全屏H5一般都是竖屏播放，
                                     但是这个属性需要x5-video-player-type开启H5模式
-->
```


>针对蜗牛app实现内嵌播放，添加以下js:
(在其他浏览器中添加以下代码可能会导致视频无法播放)
```js
var makeVideoPlayableInline=function(){"use strict";function e(e){var r=void 0;var n=void 0;function i(t){r=requestAnimationFrame(i);e(t-(n||t));n=t}this.start=function(){if(!r){i(Date.now())}};this.stop=function(){cancelAnimationFrame(r);r=null}}function r(e,r,n,i){function t(r){if(Boolean(e[n])===Boolean(i)){r.stopImmediatePropagation()}delete e[n]}e.addEventListener(r,t,false);return t}function n(e,r,n,i){function t(){return n[r]}function u(e){n[r]=e}if(i){u(e[r])}Object.defineProperty(e,r,{get:t,set:u})}var i=typeof Symbol==="undefined"?function(e){return"@"+(e||"@")+Math.random().toString(26)}:Symbol;var t=/iPhone|iPod/i.test(navigator.userAgent);var u=i();var a=i();var d=i("nativeplay");var o=i("nativepause");function v(e){var r=new Audio;r.src=e.currentSrc||e.src;return r}var f=[];f.i=0;function c(e,r){if((f.tue||0)+200<Date.now()){e[a]=true;f.tue=Date.now()}e.currentTime=r;f[++f.i%3]=r*100|0/100}function s(e){return e.driver.currentTime>=e.video.duration}function l(e){var r=this;if(!r.hasAudio){r.driver.currentTime=r.video.currentTime+e*r.video.playbackRate/1e3;if(r.video.loop&&s(r)){r.driver.currentTime=0}}c(r.video,r.driver.currentTime);if(r.video.ended){r.video.pause(true);return false}}function p(){var e=this;var r=e[u];if(e.fullscreenElement){e[d]();return}if(!e.paused){return}if(!e.buffered.length){e.load()}r.driver.play();r.updater.start();e.dispatchEvent(new Event("play"));e.dispatchEvent(new Event("playing"))}function m(e){var r=this;var n=r[u];n.driver.pause();n.updater.stop();if(r.fullscreenElement){r[o]()}if(r.paused&&!e){return}r.dispatchEvent(new Event("pause"));if(r.ended){r[a]=true;r.dispatchEvent(new Event("ended"))}}function y(r,n){var i=r[u]={};i.hasAudio=n;i.video=r;i.updater=new e(l.bind(i));if(n){i.driver=v(r)}else{i.driver={muted:true,paused:true,pause:function t(){i.driver.paused=true},play:function a(){i.driver.paused=false;if(s(i)){c(r,0)}},get ended(){return s(i)}}}r.addEventListener("emptied",function(){if(i.driver.src&&i.driver.src!==r.currentSrc){c(r,0);r.pause();i.driver.src=r.currentSrc}},false);r.addEventListener("webkitbeginfullscreen",function(){if(!r.paused){r.pause();r[d]()}else if(n&&!i.driver.buffered.length){i.driver.load()}});if(n){r.addEventListener("webkitendfullscreen",function(){i.driver.currentTime=r.currentTime});r.addEventListener("seeking",function(){if(f.indexOf(r.currentTime*100|0/100)<0){i.driver.currentTime=r.currentTime}})}}function h(e){var i=e[u];e[d]=e.play;e[o]=e.pause;e.play=p;e.pause=m;n(e,"paused",i.driver);n(e,"muted",i.driver,true);n(e,"playbackRate",i.driver,true);n(e,"ended",i.driver);n(e,"loop",i.driver,true);r(e,"seeking");r(e,"seeked");r(e,"timeupdate",a,false);r(e,"ended",a,false)}function b(e){var r=arguments.length<=1||arguments[1]===undefined?true:arguments[1];var n=arguments.length<=2||arguments[2]===undefined?true:arguments[2];if(n&&!t||e[u]){return}y(e,r);h(e);if(!r&&e.autoplay){e.play()}}return b}();

 if(isSnail()){
    makeVideoPlayableInline(this.video[0]);
}
```

参考文档 ：[https://zhuanlan.zhihu.com/p/27559167](https://zhuanlan.zhihu.com/p/27559167)

