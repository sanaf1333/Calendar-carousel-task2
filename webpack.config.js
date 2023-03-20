
const HTMLWebpackPlugin=require('html-webpack-plugin');
module.exports={
    plugins:[
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: 'babel-loader',
                    options: {
                      presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                        '@babel/preset-typescript',
                      ],
                      plugins: [
                        [
                          'import',
                          {
                            libraryName: 'antd',
                            style: true,
                          },
                          'antd',
                        ],
                    ],
                    },
                  },
                ],
              },
              {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: [
                      ['import', { libraryName: 'antd', style: true }],
                    ],
                  },
                },
              },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
    
}