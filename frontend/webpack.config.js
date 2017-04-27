var nodeExternals = require("webpack-node-externals");
var exclude = [/node_modules/];

module.exports = {
    entry: ["./main.js", "./index.js"],
    target: "node",
    output: {
        path: __dirname,
        filename: "main.bundle.js"
    },
    module: {
        rules: [
            { 
                test: /\.css$/, 
                use: "style-loader!css-loader",
                exclude: exclude
            },
            { 
                test: /\.js$/, 
                use: "babel-loader",
                exclude: exclude
            }
        ]
    },
    externals: [nodeExternals()]
};