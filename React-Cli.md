### React-Cli

-------

>React的官方推荐脚手架工具

### 安装

```js
cnpm i create-react-app@3.2.0 -g
create-react-app -V
create-react-app xxxx_xxx
npm run start

//丢失模块,删除node_modules重新下载
//node版本低  10以上
//Mac系统加上前缀sudo权限
```

### 目录

```js
node_modules //第三方依赖的包
public　　　　//资源目录
　　　　favicon.ico　　 　//左上角的图标
　　　　index.html　　    //项目首页模板
　　　　manifast.json   　//定义 app 的图标 网址 主题颜色等
       robots.txt        //robots协议  User-agent: * 允许所有 #注释协议网址

src　　　　　　//项目所有的源代码
　　　　index.js　　    　 //整个程序的入口 (react 的理念 all in js)
　　　　index.css　　      //初始化样式,存放于网站根目
　　　　App.js　　　  　　　//项目通用部分
　　　　App.test.js　      //自动化测试文件
　　　　App.css　　   　　  //项目的样式
　　　　logo.svg　　  　　  //首页 logo
　　　　serviceWorker.js   //将网页存储在浏览器内 如果突然断网了 可以继续访问该网页　
.gitignore　　　　　　　　//设置禁止传到 git 文件
package.json　　 　　　  //模块清单 和项目介绍 （ 命令行 命令 ） 等
README.md　　  　　　    //项目的说明文件
yarn.lock　　　　      　//依赖的安装包 （一般不用动）   
```

### 非弹射状态配置别名

>cnpm run eject webpack深度开发设置,操作不可逆转
>
>React官方不推荐 执行cnpm run eject 
>
>弹射的作用可以看到脚手架所有的配置,进行深度开发
>
>设置别名,最新版配置

```js
npm install react-app-rewired customize-cra --save-dev

/* package.json */
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test --env=jsdom",
+   "test": "react-app-rewired test --env=jsdom",
}

//在根目录创建,固定写法
/* config-overrides.js */
const path = require('path');
const { override,addWebpackAlias } = require('customize-cra');
//customize-cra  在不弹射情况下 复写 webpack 配置
module.exports = override(
         addWebpackAlias({        
            "@": path.resolve(__dirname, "src")
        })
)
    
```

### Router

```js
import { HashRouter as Router } from "react-router-dom"; 
<Router>
    <App />
</Router>
export default withRouter(App)
```

>router > index.js

```js
import React, { Component, Fragment } from "react"
import { Route, Redirect } from "react-router-dom";
import Info from "@/components/main/Info/Info.jsx"
import News from "@/components/main/News/News.jsx"
import Mine from "@/components/main/Mine/Mine.jsx"
export default class extends Component {
    render() {
         <Fragment>
                <Route path="/info" component={Info} />
                <Route path="/news" component={News} />
                <Route path="/test" component={Test} />
                <Redirect path="/" to="/info"/>
        </Fragment>           
    }
}  
```

>入口文件 index.js

```js
import { HashRouter as Router } from "react-router-dom"; 
<Router>
    <App />
</Router>
export default withRouter(App)
```

>app.jsx

```js
import React from 'react';
import Routers from "@/router"
import Header from "@/components/layout/header.jsx"
export default class extends React.Component{
    render(){
        return (
            <div>
                <Routers/> //路由跳转
                <Header/>  //导航
            </div>

        )
    }
}
```

### react-redux

>初始化 react-redux

.....

### Proxy,Mock 

>在 src下面直接创建 setupProxy.js  名字固定写法
>
>这个服务更项目一块启动,他们是一个服务 http://localhost:3000
>
>http://localhost:3000/test   ->fetch("/testData").then(res=>{console.log(res)});
>
>Mock.js  模拟数据,特有自己操作方法,在服务端没有出接口的时候 ,按照数据结构,先进行开发
>
>修改之后切记重启

```js
//模块直接有,不需要下载
var proxy = require("http-proxy-middleware");
//cnpm install mockjs-D
var mock =require("mockjs");
module.exports = function(app) {
    //是一个node的express执行环境
  app.use(
    proxy("/apis", {
      //    我要代理的主机
      target: "https://cnodejs.org",
      changeOrigin: true,
      pathRewrite: {
        "^/apis": ""
      }
    })
  );
 app.use(
    proxy("/Msea", {
      //    我要代理的主机
      target: "https://cnodejs.org",
      changeOrigin: true,
      pathRewrite: {
        "^/Msea": ""
      }
    })
  );
  app.get("/test",(req,res)=>{
      setTimeout(()=>{
           res.json({uname:"Msea",info:{sex:1}})
      },2000)
  })  

    app.get("/testData",(req,res)=>{
        var data = Mock.mock({
            //  list生成有 1 ~ 10 个随机的id
            'list|1-10': [{
                //递增
                'id|+1': 1
            }]
        })
        setTimeout(()=>{
            res.json(data)
        },2000)
    })  
};
```

### Fetch

>Es6Ajax方案

> Promis, axios,fetch,flyio ,都支持promise API

```js
   new Promise((resolve, reject)=>{
        resolve("Msea")
      }).then((res)=>{
        return res;  //必须返回,后面 then才能拿到数据
      }).then((res)=>{
       	return res
      }).then((res)=>{console.log(res)})

   //new Promise new Array
    //监听并发
	var arr=[];
	arr.push(fetch(xxxx));
	Promise.all(arr).then((res)=>{
        	console.log(res);
    })	
```

>async await
>
>   async await 用同步的方法解决异步顺序问题
>
>   async  最终返回的结果是 一个 promis ,要使用 return 
>
>   await  必须写在  async函数内部
>
>   await  后面跟必须跟一个promis ,他一直在等待  promise 里面成功回调 resolve

```js
function testNum(num){
    return  new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(num+1);
        },2000)
    })
}

const testFn = async () =>{
    let res1= await testNum(1);
    let res2= await testNum(res1+1);
    return res2; 
};
testFn().then(res=>{
    console.log(res);
})
```

>fetch

```js
 fetch("/apis/php/jsonTest.php")   

  var form =new FormData();
      form.append("uname","Msea");
      form.append("upwd","12346");
//formData
 fetch("/apis/php/jsonTest.php",{method:"POST",body:form})   
//plyLoad
 fetch("/apis/php/jsonTest.php",{method:"POST",body:JSON.stringify({uname:"MSea"})})


fetch("/apis/php/jsonTest.php",{method:"POST",body:form}).then(data=>{
    return data.text();//如果是字符串 .text() 如果是JSON  .json,只有return 下一个 then可以取到数据  
}).then((res)=>{
    console.log(res);
})   


const testFetch = async () => {
    var form = new FormData();
    form.append("uname", "Msea");
    form.append("upwd", "12346");

    let respons = await fetch("/apis/php/formTest.php", {
        method: "POST",
        body: form
    });
    return respons.text();
};
testFetch().then(res => {
    console.log(res);
});
```

>发布

```js
npm run build
//发布线上  发现 js文件加载失败   
//create-react-app 修改为相对路径 修改package.json   在最后一行  加上  "homepage":"."
//Vue-cli3  修改vue.config.js publicPath:"./" 
```

>修改端口

```js
cnpm i  cross-env -D
//修改package.json
"scripts": {
    "start": "cross-env PORT=8899 react-app-rewired start",
}
```





