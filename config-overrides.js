const {
  override,
  fixBabelImports,
  addPostcssPlugins,
} = require("customize-cra");

module.exports = override(
  addPostcssPlugins([
    require("postcss-px-to-viewport")({
      viewportWidth: 375,
      unitPrecision: 3,
      viewportUnit: "vw",
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
    }),
  ]),
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css",
  })
);
