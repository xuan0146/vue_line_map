let path = require('path');
let resolve = dir => path.resolve(__dirname, dir);
const env = process.env.NODE_ENV;

module.exports = {
    // hash模式配置
    publicPath: './',


    configureWebpack: config => {
        // 高德地图配置
        config.externals = {
            'AMap': 'AMap' 
        }
    },

    chainWebpack: config => {
        // 添加别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('static', resolve('src/static'))
    },

}