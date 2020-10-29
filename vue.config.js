const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ZipWebpackPlugin = require('zip-webpack-plugin');

// 只需要复制的文件
const copyFiles = [
  {
    from: path.resolve('src/manifest.json'),
    to: `${path.resolve('dist')}/manifest.json`
  },
  {
    from: path.resolve('src/assets'),
    to: path.resolve('dist/assets')
  },
];

const chromeNames = [
  'popup',
];
const pages = {};

if (process.env.NODE_ENV !== 'production') {
  copyFiles.push({
    from: path.resolve('src/utils/hot-reload.js'),
    to: path.resolve('dist')
  });
}

chromeNames.map(name => {
  pages[name] = {
    entry: `./src/${name}/main.ts`,
    template: 'index.html',
    filename: `${name}.html`,
    title: `${name}`
  };
});

const plugins = [
  new CopyWebpackPlugin({
    patterns: copyFiles,
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new ZipWebpackPlugin({
      path: path.resolve('dist'),
      filename: 'dist.zip'
    })
  );
}

module.exports = {
  pages,
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  css: {
    extract: {
      filename: 'css/[name].css'
    }
  },
  configureWebpack: {
    plugins,
    output: {
      filename: 'js/[name].js'
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve('src'));
    // 处理字体文件名，去除hash值
    const fontsRule = config.module.rule("fonts");
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    fontsRule.uses.clear();
    fontsRule.test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
      .use('url')
      .loader('url-loader')
      .options({
        limit: 1000,
        name: 'fonts/[name].[ext]'
      });
  },
};