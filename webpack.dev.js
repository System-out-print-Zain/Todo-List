const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/scripts/index.js',
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html'
        })
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}