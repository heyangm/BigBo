#  摇一摇
[article](https://cloud.tencent.com/developer/article/1114209)
[orienter](https://github.com/shrekshrek/orienter/blob/master/orienter.js)

## devicemotion事件

    接收一个DeviceMotionEvent 对象类型的参数描述发生的动作。

## DeviceMotionEvent 

    提供了关于设备的位置和方向改变的速度的信息。

### accelerationIncludingGravity  加速度

    x  表示x轴（西到东）上的加速度
    y  表示y轴（南到北）上的加速度
    z  表示z轴（下到上）上的加速度

### interval  

    返回从底层硬件获取数据的时间间隔（单位：毫秒）。 您可以使用它来确定运动事件的粒度。

### rotationRates

    返回设备围绕其每个轴（x、y、z）旋转的速率（单位：度/秒）。
    alpha   设备绕其Z轴旋转的速率（即绕垂直于屏幕的线旋转）
    beta    设备绕其X轴旋转的速率（即从前到后旋转）
    gamma   设备绕其Y轴旋转的速率（即从一侧到另一侧）

### 简单监听方法
```js
if (window.DeviceMotionEvent) { 
    window.addEventListener('devicemotion',deviceMotionHandler, false);  
} 
var speed = 30;//speed
var x = y = z = lastX = lastY = lastZ = 0;
function deviceMotionHandler(eventData) {  
    var acceleration =eventData.accelerationIncludingGravity;
    x = acceleration.x;
    y = acceleration.y;
    z = acceleration.z;
    if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed || Math.abs(z-lastZ) > speed) {
        //简单的摇一摇触发代码
        alert(1);
    }
    lastX = x;
    lastY = y;
    lastZ = z;
}
```
## 自定义监听事件

1.自定义一个监听事件 shake  

```js
    CustomEvent：
        var event = new CustomEvent('shake', {
            bubbles:'true',      //事件能否冒泡
            cancelable :'true'   //事件是否可取消
        });
    createEvent:  //多个方法已被废弃
        var event = document.createEvent('shake')
        event.initEvent('shake',true,true)  //初始化事件对象
```

2.监听devicemotion事件
    window.addEventListener('devicemotion', func, false);

3.自定义事件触发 
    window.dispatchEvent(event)




<!-- 3.window.addEventListen('devicemotion',this,false)
addEventListener绑定object的时候，object如果含有handleEvent方法，事件触发后会执行object的handleEvent方法。 -->
