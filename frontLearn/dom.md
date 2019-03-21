
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


#### DOM构建

#### css添加
 ##### css 选择器符号
 > 空格: 后代 选中它的子节点和所以字节点的后代节点
 > '>': 子代，选中它的子节点
 > '+': 直接后继选择器，选中它的下一个相邻节点
 > '~': 后继，选中它之后所有相邻节点
 > '||': 列，选中表格中的一列


