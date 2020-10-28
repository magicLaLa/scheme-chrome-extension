const fs = require('fs');
const path = require('path');

const dirs = fs.readdirSync(__dirname + '/src/views', { encoding: 'utf-8' });

const pages = {};
dirs.map(dir => {
  const name = dir.toLowerCase();
  pages[name] = {
    entry: `./src/views/${dir}/main.ts`,
    template: 'index.html',
    filename: `${name}.html`,
    title: `${name.toUpperCase()}`
  };
});

console.log(pages);

module.exports = {
  pages,
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  css: {
    extract: {
      filename: "css/[name].css"
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", path.resolve("src"));
    // 处理字体文件名，去除hash值
    const fontsRule = config.module.rule("fonts");

    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    fontsRule.uses.clear();
    fontsRule
      .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
      .use("url")
      .loader("url-loader")
      .options({
        limit: 1000,
        name: "fonts/[name].[ext]"
      });
  },
};