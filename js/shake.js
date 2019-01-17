import VConsole from 'vconsole/dist/vconsole.min.js'
var cons = new VConsole()
function Shake(option){
    this.option = {
        threshold : 10
        
    }
    this.hasDeviceMotion = 'ondevicemotion' in window;
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.lastTime = new Date();
    this.initEvent()
}
//自定义shake事件
Shake.prototype.initEvent = function(){
    if(typeof document.CustomEvent == 'function') {
        this.event = new CustomEvent('shake', {
          bubbles:'true',      //事件能否冒泡
          cancelable :'true'   //事件是否可取消
        });
      }else if(typeof document.createEvent == 'function'){
        this.event = document.createEvent('Event')
        this.event.initEvent('shake',true,true)    
      }else{
        return false
      }
}
Shake.prototype.start = function(){
    if(this.hasDeviceMotion){      
        window.addEventListener('devicemotion',this.handle.bind(this),false)
    }
}
Shake.prototype.handle = function(e){
    var current = e.accelerationIncludingGravity;
    var rotat = e.rotationRate
    //console.log("加速度"+current.x)
    //console.log("角度"+rotat.alpha)
    var diffx = Math.abs(current.x - this.x)
    var diffy = Math.abs(current.y-this.y)
    var diffz = Math.abs(current.z-this.z)

    var rotatx = Math.abs(rotat.beta- this.x)
    var rotaty = Math.abs(rotat.gamma- this.y)
    var rotatz = Math.abs(rotat.alpha- this.z)
    if((diffx > this.option.threshold && diffy > this.option.threshold) || (diffx > this.option.threshold && diffz > this.option.threshold) || (diffz > this.option.threshold && diffy > this.option.threshold)){
        window.dispatchEvent(this.event)
    } 
    if(rotatx >20 || rotaty >20 || rotatz >20){
        console.log("x轴"+rotatx)
        console.log("y轴"+rotaty)
        console.log("z轴"+rotatz)
    }
}
function shakeHandler(){
    console.log('222')
}
window.addEventListener('DOMContentLoaded',function(e){
    var shake = new Shake()
    shake.start();
    window.addEventListener('shake', shakeHandler, false)
    
})
