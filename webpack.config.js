
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
                            libraryDirectory: 'es',
                            style: 'css',
                          },
                          'antd',
                        ],
                    ],
                    },
                  },
                ],
              },
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: [
                    '@babel/preset-env',
                    '@babel/preset-react',
                  ],
                  plugins: [
                    [
                      'import',
                      {
                        libraryName: 'antd',
                        libraryDirectory: 'es',
                        style: 'css',
                      },
                      'antd',
                    ],
                ],
                },
              },
            ],
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
    resolve:{
        extensions: ['.tsx', '.ts', '.jsx', 'js']
    }
}