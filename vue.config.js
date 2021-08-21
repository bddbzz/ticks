/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const resolve = (dir) => path.resolve(__dirname, dir);
const { getThemeVariables } = require('ant-design-vue/dist/theme');
const modifyVars = getThemeVariables({ dark: false });
module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule.use('vue-svg-loader').loader('vue-svg-loader');
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          ...modifyVars,
          hack: `${modifyVars.hack} @import "${resolve('src/design/config.less')}";`,
          'primary-color': '#1DA57A',
          'link-color': '#1DA57A',
          'border-radius-base': '2px'
        },
        javascriptEnabled: true
      }
    }
  }
};
