module.exports = {
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              ident: 'postcss',
              syntax: 'postcss-scss',
              plugins: [
                require('postcss-import'),
                require('postcss-nested'), // make sure to place it after tailwindcss
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
        },
      ],
    },
  }