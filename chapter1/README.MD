# chapter1

基本打包一个文件，用来动态显示时间。 

## 用到的配置详解。

```js

module.exports = { 
  mode:'development',
  entry:'./index.js',
  output: {
    filename:'main.js',
    publicPath:'dist' 
  } 
}

```

### mode

mode分为`development`和`production`，

* development 
  开发模式调试模式

* production
  发布到线模式

