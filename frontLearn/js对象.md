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

## async/await
在函数名前添加async关键字，声明该函数为异步行数。async函数必定返回promise,可以在其中使用await来等待一个Promise


## 宏任务和微任务

简单的理解，在javascript代码执行时，整体代码看作为一个宏任务。当遇到setTimeout、setInterval等函数时，会产生另一个宏任务，来处理setTimeout需要执行的函数。
而promise异步函数，则被任务是微任务，在完成一个宏任务之后，会先执行剩下的微任务，执行完之后进入下一个宏任务


## 闭包

能访问到函数内部对象的值的函数。



## 函数
1. 普通函数 function a(){}
2. 箭头函数 ()=>{}
3. 方法， 在class中定义的函数
4. 生成器函数,用function * 生成的函数：  function foo*(){}
5. 用class定义的类，也是函数
6. 异步函数   async function(){}

### this 指向

1. 普通函数：调用函数时使用的引用
2. 箭头函数： 生成箭头函数时的环境


## 语句

## 语法
由于es6的引入，js文件可被分为脚本跟模块两种。
脚本可包含语句。模块中可包含三种内容:import声明、export声明和语句。
###  import
两种import用法。一，直接import一个模块；二，带from的import,引入模块里的一些信息。
```js
import '/a'
import xx from '/a'
```
import一个模块只能保证引入的代码被执行，无法获得它的信息。
带from的引入，引入模块的一部分，可以把它们变成本地变量。带from的三种用法：
+ import x from './a.js' ,引入模块默认导出值
+ import {a as x,modify} from './a.js' ,引入模块中的变量
+ import * as x from './a.js' ,把模块中所有变量以类似对象属性的方式引入

### export
导出模块中的内容。
```js
export {a,b}
export const a 
```
> export default









