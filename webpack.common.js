import HtmlWebpackPlugin from "html-webpack-plugin";
module.exports = {
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin()
    ]
}