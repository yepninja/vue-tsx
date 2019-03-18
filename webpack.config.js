const path = require('path')

module.exports = {
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'my-first-webpack.bundle.js'
    },
    module: {
      rules: [
        {
            test: /\.tsx?$/,
            use: 'babel-loader'
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                { loader: 'css-loader', options: { importLoaders: 1 } },
                'postcss-loader'
            ]
        }
      ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
      },
      extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx'
      ]
    },
}