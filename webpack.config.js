
var path = require('path')
// 引用html-webpack-plugin
var htmlWebpackPlugin = require('html-webpack-plugin')
// commonJS
module.exports = {

	// 入口文件
	entry:{
     main:'./src/script/main.js',
     a:'./src/script/a.js',
     b:'./src/script/b.js',
     c:'./src/script/c.js'
	},
    // entry:['./src/script/main.js','./src/script/a.js'],

    // output:{
    // 	// 指明打包后的文件放在什么位置
    // 	  path:path.resolve(__dirname,'./dist/js'),
    // 	  // 指定打包后的文件名
    // 	  filename:'[name]-[chunkhash].js'
    // },

    //让打包后html文件和js文件分别在不同的文件夹中
        output:{
    	// 指明打包后的文件放在什么位置
    	  path:path.resolve(__dirname,'./dist'),
    	  // 指定打包后的文件名
    	  filename:'js/[name]-[chunkhash].js',
    	  // 给脚本文件添加域名地址
    	  publicPath:'https://webpack.js.org/configuration/output/#output-publicpath'
    },
    // 可以向根节点传递参数
    plugins:[
       // new htmlWebpackPlugin({
       // 	// 将根目录下的index.html与打包后的js文件建立连接
       // 	    template:'index.html',
       // 	    filename:'index.html',
       // 	    // inject 默认注入，这个参数的默认值是true，现在设置为'body'，那么打包好的脚本就不会注入到生成的index.html文件中
       // 	    // inject:'head',
       // 	    inject:false,
       // 	    title:'面试成功',
       // 	    date:new Date(),
       // 	    //  对html进行压缩
       // 	    minify:{
       //        removeComments:true, //删除注释
       //        collapseWhitespace:true //删除空格
       // 	    }
       // }),
       //针对多页面应用，重新new一下
       new htmlWebpackPlugin({
       	    template:'index.html',
       	    filename:'a.html',
       	    inject:'body',
       	    title:'this is a.html',
       	    excludeChunks:['b','c']
       	  
       }),
        new htmlWebpackPlugin({
       	    template:'test.html',
       	    filename:'b.html',      	   
       	    inject:'body',
       	    title:'这是测试页面',      	  
       	    excludeChunks:['c']
       }),
         new htmlWebpackPlugin({
       	    template:'index.html',
       	    filename:'c.html',
       	    inject:'body',
       	    title:'this is c.html',
       	    // excludeChunks:['main']
       	  
       })
    ]
}




























