const path = require('path');
import HtmlWebpackPlugin from "html-webpack-plugin";
module.exports = {
    entry: './src/index.js',
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin()
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