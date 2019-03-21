# js类型

1. Undefined
2. Null
3. Boolean
4. String
5. Number
6. Symbol (ES6)
7. Object

###  Undefined 与 Null

Undefined类型，表示未定义，只有一个值为undefined。
任何变量未赋值前都是 Undefined类型，值为undefined。
undefined不是保留字，可被赋值： var undefined = 1;可以使用viod 0 获取undefined值

Null类型也只有一个值 null,表示定义了但值为空


### Boolean

Boolean 有两个值 true 、false 。
js中有6种值为false。 1.false (布尔型) 2.null (用于定义空的或者不存在的引用)  3.undefined (未定义值) 4.0 (数值型)  5."'' (空字符串) (字符型)  6.NaN
其他都为true

### String

字符串最大长度是 2^53-1,实际上受字符串编码长度的影响

### Number

NaN  非数值
Infinity   正无穷
-Infinity  负无穷
0.1+0.2  !== 0.3  浮点数运算值精度问题  

计算机内部是用二进制存储及处理数据的。0.1转换成二进制值时，是一个无限循环小数，计算机会在某个精度直接舍弃，所以并不是一个完全精确的0.1

### Symbol

ES6新类型。


### Object

对象。属性的集合



## 面向对象 
 
对象特点：
1. 唯一标识性： 完全相同的两个对象，也并不是同一个对象，所以并不相等。
2. 有状态： 对象具有状态
3. 有行为： 对象的状可能因为它的行为产生变迁

状态跟行为统一抽象为“属性”
js的属性提供了数据属性和访问器属性（getter/setter)两类

#### 数据属性

> value : 属性值
> writable: 决定属性是否能被赋值
> enumberable : 决定属性能否枚举（for..in)
> configurable : 决定该属性能否被删除或改变特征值

#### 访问器属性

> getter : 函数或undefined，取属性值时被调用
> setter : 函数或undefined，设置属性时被调用
> enumberable : 决定属性能否枚举（for..in)
> configurable : 决定该属性能否被删除或改变特征值

object.defineProperty(obj,prop,descriptor)

## 原型




## 迭代器
