const path = require('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {

        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path:path.resolve(__dirname, 'dist'),
    },

    /*
        I'm disabling this as to enable it, would be fine, but would require that the html file contains the script loading in from CDM
    externals: {

        "react": "React",
        "react-dom": "ReactDOM"
    },
         */
    plugins: [
        new HtmlWebpackPlugin(
            {template: "./scripts/index.html"}
        )
    ]
};

