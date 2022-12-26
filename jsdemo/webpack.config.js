const { merge } = require("webpack-merge")
const singleSpaDefaults = require("webpack-config-single-spa")

module.exports = () => {
  const defaultConfig = singleSpaDefaults({
    // 组织名称
    orgName: "study", 
    // 项目名称 
    projectName: "jsdemo"
  })
  return merge(defaultConfig, {
    devServer: {
      port: 9001
    }
  })
}