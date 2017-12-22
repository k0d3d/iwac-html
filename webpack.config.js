module.exports = {
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    // module: {
    //     loaders: [
    //         {
    //             test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
    //             loader: "imports?this=>window"
    //         },
    //         {
    //             test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
    //             loader: "imports?define=>false"
    //         }
    //     ]
    // },
    externals: [
        {
            "window": "window",
            "jQuery": "jquery"
        }
    ]
}