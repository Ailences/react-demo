const path = require('path')
// 导入在内存中生成HTML页面的插件
const HtmlWebPackPlguin = require('html-webpack-plugin')

// 创建一个插件实例对象
const htmlPlguin = new HtmlWebPackPlguin({
    template: path.join(__dirname, './src/index.html'), // 源文件
    filename: 'index.html' // 内存中生成的文件名称
})

module.exports = {
    mode: 'development',
    plugins: [
        htmlPlguin
    ],
    module: { //要打包的第三方模块
        rules: [{
            test: /\.js|jsx$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]', 'less-loader']
        }, {
            test: /\.ttf|woff|woff2|eot|svg$/,
            use: 'url-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', 'json'],
        alias: {
            '@': path.join(__dirname, './src')
        }
    },
}