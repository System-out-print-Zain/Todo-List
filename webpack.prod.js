const path = require('path');
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin";

module.exports = {
    entry: './src/index.js',
    mode: "production",
    plugins: [
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin()
    ],
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['css-loader']
            }
        ]
    }
}