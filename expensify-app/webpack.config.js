const path = require('path');

module.exports = (env) => {
    const isProduction = env === 'production';

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react'],
                            plugins: [
                                'transform-class-properties',
                                'transform-object-rest-spread'
                            ]
                        }
                    }
                },
                {
                    test: /\.s?css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ]
                }
            ]
        },
        devtool: isProduction ? 'source-map' : 'source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
};
