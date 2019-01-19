module.exports = {
    entry: [
      './src/index.js'
    ],
    output: {
      path: __dirname,
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      loaders: [{
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'env', 'stage-1', 'typescript']
        }
      }]
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.ts', '.tsx']
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './',
      host: process.env.IP,
      port: process.env.PORT,
      public: process.env.C9_HOSTNAME
    }
  };
