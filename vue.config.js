'use strict'
const path = require('path')
const defaultSetting = ('./src/setting.js')

resolve = (dir) => {
    /**
     * Node.js 中，__dirname 总是指向被执行 js 文件的绝对路径，所以当你在 /d1/d2/myscript.js 文件中写了 __dirname， 它的值就是 /d1/d2
     * 参考文章：https://blog.csdn.net/zsensei/article/details/79094714 
     */
    return path.join(__dirname, dir)
}

const title = defaultSetting.title || 'LXMAJS.FUN'
const port = 8099 // dev port

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {},
        after: require('./mork/mork-server.js')
    },
    /**
     * 
     */
    configureWebpack: {
        title: title,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },

    chainWebpack(config) {
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
    }
}