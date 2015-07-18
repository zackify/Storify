module.exports = {
    entry: './src/storify.jsx',
    output: {
        filename: "storify.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            }

        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
