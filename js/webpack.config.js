const path = require('path')

module.exports = {
    context: path.resolve(__dirname),
    entry: "./src",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    module: {
        rules: [{
            include: /src/,
            use: ["babel-loader"]
        }]
    }
};