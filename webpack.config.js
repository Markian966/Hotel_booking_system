const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.scss$/, // Obsługa SCSS
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        port: 5501
    }
};
