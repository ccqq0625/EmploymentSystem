module.exports = {
    //解决跨域问题
    devServer:{
        port:8080,
        // host:"localhost",
        https:false,
        open:true,
        hot:true,
        noInfo:false,
        overlay:{
            warings:true,
            errors:true
        },
        proxy:{
            [process.env.VUE_APP_BASE_API]:{
                target:process.env.VUE_APP_SERVICE_URL,
                changeOrigin:true,
                pathRewrite:{
                    ['^'+process.env.VUE_APP_BASE_API]:'',
                }
            }
        },
        // historyApiFallback: {
        //     rewrites: [
        //     {from: /^.*/, to: '/dist/'}
        //     ]
        //     }
    },
    lintOnSave:false,
    productionSourceMap:false,
    outputDir:'dist',//构建输出目录
    assetsDir:'static',//静态资源目录(js,css,img,fonts)
    publicPath:'/dist/'
}
