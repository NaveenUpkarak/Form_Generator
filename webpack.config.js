const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: "/src/index.js",
    output: {path: path.resolve(__dirname, "dist")},
    devServer: {
        publicPath: "",
        contentBase: "./dist",
        hot: true,
        open: true,
        watchOptions: {
            ignored: /node_modules/,
            poll: 1000,
        },
        port: 9000,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "src"),
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}
