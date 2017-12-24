/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it
const webpack = require('webpack')
exports.modifyWebpackConfig = ({ config, stage }) => {
    if (stage === "build-html") {
        config.loader("null", {
            test: /child-partners/,
            loader: "null-loader",
        });
        config.loader("null", {
            test: /react-owl-carousel/,
            loader: "null-loader",
        });
        config.plugins = [
            new webpack.IgnorePlugin(/child-partners/) ,
            new webpack.IgnorePlugin(/react-owl-carousel/) ,
        ]
    }

    return config
};