const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            'components': path.resolve(__dirname, 'src/components/'),
            'pages': path.resolve(__dirname, 'src/pages/'),
            'containers': path.resolve(__dirname, 'src/containers/'),
            'data': path.resolve(__dirname, 'src/data/'),
            'helpers': path.resolve(__dirname, 'src/helpers/'),
            'hooks': path.resolve(__dirname, 'src/hooks/'),
        }
    }
}