## 过程

1. 浏览器使用HTTP协议或者HTTPS协议,向服务端请求页面
2. 把请求到的html代码经过解析，构建DOM树
3. 计算DOM树上的css属性
4. 根据css属性对元素进行渲染，得到内存中的位图
5. 一个可选的步骤是对位图进行合成，会极大的增加后续绘制的速度
6. 合成之后，再绘制到界面上

## http请求

### method  : GET、 POST 、HEAD 、PUT、DELECT 、CONNECT、OPTIONS 、TRACE
### Status Code :
    >1xx: 临时回应，表示客户端请继续
    >2xx: 200 请求成功
    >3xx: 301&302 永久性和暂时性跳转; 304 客户端缓存没有更新
    >4xx: 403 无权限 ； 404 页面不存在
    >5xx: 500 服务器错误； 503 服务的暂时性错误，可以一会再试
### HTTP Head
### HTTP Request Body
    application/json  application/x-www-form-urlencoded  multipart/form-data text/xml


## 存储
### localStorage 本地存储



## 跨域
