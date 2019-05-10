const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const outputPath = path.join(__dirname, 'dist');
const assetsPath = path.join(__dirname, 'assets');
const pkg = require('./package.json');

const extractSass = new ExtractTextWebpackPlugin({
    filename: '[name].[md5:contenthash:hex:20].css',
    disable: process.env.NODE_ENV === 'development'
});

module.exports = {
    entry: {
        [pkg.name]: ["./src/index.js"]
    },

    output: {
        path: outputPath,
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].bundle.map'
    },

    resolve: {
        extensions: ['scss', '.js', '.jsx', '.json'],
        alias: {
            Root: path.resolve(__dirname),
            Assets: path.resolve(__dirname, 'src/assets'),
            Components: path.resolve(__dirname, 'src/components'),
            Views: path.resolve(__dirname, 'src/views'),
            Actions: path.resolve(__dirname, 'src/actions'),
            Reducers: path.resolve(__dirname, 'src/reducers'),
            Routes: path.resolve(__dirname, 'src/routes'),
            Types: path.resolve(__dirname, 'src/types'),
            Constants: path.resolve(__dirname, 'src/constants'),
            Helpers: path.resolve(__dirname, 'src/helpers'),
            Store: path.resolve(__dirname, 'src/store')
        }
    },

    devServer: {
        contentBase: [outputPath, assetsPath],
        compress: true,
        port: 8000,
        historyApiFallback: true,
        proxy: {
            "/api": "http://localhost:7898"
        }
    },

    module: {
        rules: [
            // javascript
            {
                test: /\.(jsx|js)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },

            // html
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },

            // css
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            // fonts
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            },

            // images
            {
                test: /\.(png|jpg|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: "./index.html",
            inject: 'body',
            favicon: './public/favicon.ico'
        }),
        extractSass
    ]
};