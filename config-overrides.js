const {
  override,
  fixBabelImports,
  addPostcssPlugins,
  addWebpackAlias
} = require("customize-cra");

const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@utils": path.resolve(__dirname, "./src/utils"),
    "@api": path.resolve(__dirname, "./src/api"),
    "@assets": path.resolve(__dirname, "./src/assets"),
    "@view": path.resolve(__dirname, "./src/view"),
    "@components": path.resolve(__dirname, "./src/components"),
    "@route": path.resolve(__dirname, "./src/route"),
 }),
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
