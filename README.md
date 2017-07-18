# my-resume

npm install

npm run build

node server.js

http://localhost:3000/访问

此版本react js所写，在服务端渲染出html页面，利于seo

在webpack里面打包react组件，此时用的是未渲染文件，解析react组件为浏览器认识的代码之后，在使用react-dom/server的renderToString方法转成字符串
然后拼接成html文档，再打包渲染文件html引入，这个打包react.render文件是为了绑定react事件等。

所以webpack里面做了2套module配置:
第一套：讲react组件全部打包成es5代码，用react-dom/server的renderToString解析成字符串插入到html文档中，
第二套：打包渲染的react的组件，直接在拼接的html中引入改文件，用来绑定react事件；

因为node中不认识import ，export这些，所以先打包成es5代码，最后在node server 里面拼接html.

如下图：react 服务端渲染出来的html

![image](https://github.com/mxcz213/my-resume/raw/master/project-img-readme/react-server-render.png)


