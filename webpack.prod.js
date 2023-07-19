const path = require('path');
module.exports = {
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    }
}