module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "main.js"
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            use: ["babel-loader"]
        }]
    }
};