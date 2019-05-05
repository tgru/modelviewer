const path = require('path')

module.exports = {
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [{
            include: /src/,
            use: ["babel-loader"]
        }]
    }
};