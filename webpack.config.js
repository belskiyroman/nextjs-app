const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const styles = new ExtractTextPlugin({
  filename: 'static/style.css',
  allChunks: true,
});

module.exports = (config) => {
  const _entry = config.entry;
  config.entry = (...args) => _entry(...args)
    .then(
      entryConfig => ({
        ...entryConfig,
        styles: './styles/index.scss',
      })
    );

  config.context = path.resolve('src');
  config.plugins.push(styles);
  config.module.rules.push(
    {
      test: /\.(css|sass|scss)$/,
      use: ExtractTextPlugin.extract({
        use: [
          {
            loader: 'css-loader',
            options: {
              minimize: NODE_ENV === 'production',
              sourceMap: NODE_ENV !== 'production',
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: NODE_ENV !== 'production',
            }
          }
        ],
      })
    },
    {
      test: /\.(jpe?g|png|gif|svg|otf|eot|woff|woff2|ttf)$/,
      loader: 'file-loader',
      options: {
        name: 'static/[path][name].[ext]'
      }
    }
  );

  return config;
};
