module.exports = {
    devServer: {
        contentBase: './public',
        port: 3000,
    },

    devtool: 'inline-source-map',
    module: {
        rules: [
            {
            test: /\.module\.s(a|c)ss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules : {
                            localIdentName : '[local]'
                        }
                    },
                },
                {
                    loader: 'sass-loader',
                    options : {
                        sourceMap: true,
                    },
                },

                 ]
            },
            {
            test: /\.(s(a|c)ss|css)$/,
            exclude: /\.module.(s(a|c)ss)$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options : {
                        sourceMap: true,
                    },
                },
            ]
            // loader: [
            //     'style-loader',
            //     'css-loader',
            //     {
            //         loader: 'sass-loader',
            //         options: {
            //             sourceMap: true,
            //         }
            //     }
            //     ],
            // Z jakiegoś powodu powyższe nie działa a w kursie działało pewnie jakaś zmiana, do weryfikacji czy wszystko w czasie apki zadziała poprawnie.
            },
        ],
    },
};