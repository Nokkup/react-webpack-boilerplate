const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const { paths } = require("./paths");

const plugins = [
    new HtmlWebpackPlugin({
        template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
    }),
    new CopyWebpackPlugin({
        patterns: [
            {
                from: paths.assets,
                to: "assets",
                noErrorOnMissing: true,
            },
        ],
    }),
];

module.exports = {
    plugins,
    entry: path.resolve(paths.source, "index.js"),
    output: {
        path: paths.output,
        assetModuleFilename: "assets/[name][ext]",
        clean: true,
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".css", ".scss"],
        modules: ["src", "node_modules"],
    },
    module: {
        rules: [
            { test: /\.(html)$/, use: ["html-loader"] },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "__[local]--[hash:base64:5]",
                            },
                        },
                    },
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: "asset",
                generator: {
                    filename: "assets/images/[name].[hash:6][ext]",
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/fonts/[name].[hash:6][ext]",
                },
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
    },
};
