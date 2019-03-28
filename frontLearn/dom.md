
## 元标签
### head 
    不带任何信息，作为盛放其他语义类标签的容器。必须是html标签中的第一个标签，内容必须包含一个title,且最多包含一个base标签。
    作为iframe时，可以不包含title。
### title 
    页面标题
### base 
    给页面上所有url相对地址提供一个基础。
### mate 
    mate标签是一组键值对，它是一种通用的元信息表示标签。
    head中可以有多个mate标签，一般由name和content两个属性定义。
    常见：
#### <meta charset="utf-8"> 
    设置编码格式
#### http-equiv 
    设置http头 <meta http-equiv='content-type' content='text/html'>
#### viewport 
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no">
####  其他
    desctiption 、 keyword 等


## DOM构建

### 节点
### node
+ parentNode
+ childNodes
+ firstChild
+ lastChild
+ nextSibling
+ previousSibling
操作DOM树API
- appendChild
- insertBefore
- removeChild 
- replaceChild
### Element 和 Attribute
element元素，是node的子类
元素对应html中的标签，既又子节点又有属性
+ getAttribute
+ setAttribute
+ removeAttribute
+ hasAttribute
查找元素
+ querySelector
+ querySelectorAll
+ getElementById
+ getElementByName
+ getElementByTagName
+ getElementByClassName
getElement API性能高于querySelector
#### Range


## css添加

 ### css 选择器符号
 > 空格: 后代，选中它的子节点和所有子节点的后代节点
 > '>': 子代，选中它的子节点
 > '+': 直接后继选择器，选中它的下一个相邻节点
 > '~': 后继，选中它之后所有相邻节点
 > '||': 列，选中表格中的一列

### 类型选择器 全体选择器
div   * 
### id选择器 class选择器
### 属性选择器
1. [att] 直接匹配属性名 
2. [att=val] 检查属性值是否是val
3. [att~val] 检查属性值是否若干值之一，val 不是单一的值，可以是用空格分隔的一个序列
4. [att|=val] 检查元素的是是否以val开头

### 伪类选择器 
> 树结构关系伪类选择器
+ :root 树的根元素
+ :empty 没有子节点的元素，例外：子节点为空白文本的节点
+ :nth-child 
|选择器|结果|
|:nth-child(even)|选中偶数节点|
|:nth-child(4n-1)|选中第3、7、11等第4的倍数减一的节点|
|:nth-child(3n+1 of li.important)|第1、4、7个li.important元素|
+ :nth-last-child  区别仅是从后往前数
+ :first-child :last-child  第一个和最后一个
+ :only=child  选中唯一一个子元素
 of-type系列语法糖： S:nth-of-type(An+B) 是 :nth-child(An+B of S)的另一种写法

> 链接与行为伪类选择器
+ :any-link  表示任意链接，包括a、area、link
+ :link  表示未访问过的链接
+ :hover 鼠标悬停的元素
+ :active 用户按下这个元素
+ :focus 焦点在这个元素上
+ :target 用于选中浏览器URL的hash部分所指示的元素

> 逻辑伪类选择器
:not




