### video标签属性 webkit-playsinline 会报错没有该属性
在特殊属性前添加 is
    <video src='' width='100%' style={{objectFit: 'fill',transformOrigin: 0}} playsInline="true" is webkit-playsinline x5-video-player-type="h5" x5-video-orientation="portrait" preload="auto"></video>
###  * touchend获取不到touches
使用touchmove替代
获取touchmove的touches  

###  js innerHTML
使用js innerHTML设置元素内容时，会把原先的元素删除后重新生成

``` html
<div>
<p>aaa</p>
</div>
```
```js 
document.querySelector('div').innerHTML += '<h3>新增</h3>'
```
实际生成的html是重新生成的。
在react中，绑定在元素上的事件会被取消。