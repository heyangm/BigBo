## Promise
    Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject两个函数，JavaScript提供。
    resolve函数的作用，是将Promise的状态从未完成变为成功，并将结果作为参数传递出去。
    reject函数的作用，是将Promise的状态从未完成变为失败，并将报错作为参数传递出去。
```js
  const promise = new Promise(function(resolve,reject){
      if(xx){
          resolve()
      }else{
          reject()
      }
  })
```
 promise实例生成后，then方法可以指定两个函数处理resolved状态和rejected状态。
```js
promise.then(function(){
    //resolved 状态下执行
},function(){
    //rejected 状态下执行
})
```
