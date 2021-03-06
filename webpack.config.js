// entry point -> output
const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const WebpackDevServer = require("webpack-dev-server");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV === "test") {
    require("dotenv").config({ path: ".env.test" });
} else if (process.env.NODE_ENV === "development") {
    require("dotenv").config({ path: ".env.development" });
}

module.exports = (env) => {
    const isProduction = env === "production";
    return {
        entry: ["babel-polyfill", "./src/app.js"],
        output: {
            path: path.join(__dirname, "public", "dist"),
            filename: "bundle.js",
            publicPath: "/dist/",
        },
        module: {
            rules: [
                {
                    loader: "babel-loader",
                    test: /\.js$|jsx/,
                    exclude: /node_modules/,
                    options: "babelrc",
                },
                {
                    test: /\.s?css$/,
                    // use: ["style-loader", "css-loader", "sass-loader"],
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: { sourceMap: true },
                        },
                        {
                            loader: "sass-loader",
                            options: { sourceMap: true },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "styles.css",
            }),
            new webpack.DefinePlugin({
                "process.env.FIREBASE_API_KEY": JSON.stringify(
                    process.env.FIREBASE_API_KEY
                ),
                "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(
                    process.env.FIREBASE_AUTH_DOMAIN
                ),
                "process.env.FIREBASE_DATABASE_URL": JSON.stringify(
                    process.env.FIREBASE_DATABASE_URL
                ),
                "process.env.FIREBASE_PROJECT_ID": JSON.stringify(
                    process.env.FIREBASE_PROJECT_ID
                ),
                "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(
                    process.env.FIREBASE_STORAGE_BUCKET
                ),
                "process.env.FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(
                    process.env.FIREBASE_MESSAGING_SENDER_ID
                ),
                "process.env.FIREBASE_APP_ID": JSON.stringify(
                    process.env.FIREBASE_APP_ID
                ),
                "process.env.FIREBASE_MEASUREMENT_ID": JSON.stringify(
                    process.env.FIREBASE_MEASUREMENT_ID
                ),
            }),
        ],
        externals: {
            react: "React",
        },
        devtool: isProduction ? "source-map" : "inline-source-map",
        devServer: {
            static: {
                directory: path.join(__dirname, "public"),
            },
            compress: true,
            port: 9000,
            historyApiFallback: true,
        },
        performance: {
            hints: false,
        },
        mode: isProduction ? "production" : "development",
    };
};
