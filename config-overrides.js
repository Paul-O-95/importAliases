// const { config } = require("node:process");
// const path = require("path");
// module.exports = function override(config) {
//   config.resolve = {
//     ...config.resolve,
//     alias: {
//       ...config.alias,
//       components: path.resolve(__dirname, "src/components"),
//       services: path.resolve(__dirname, "src/services"),
//       interfaces: path.resolve(__dirname, "src/interfaces"),
//       types: path.resolve(__dirname, "src/types"),
//     },
//   };
//   return config;
// };

const { alias, configPaths } = require("react-app-rewire-alias");

const override = (config) =>
  alias(configPaths("./tsconfig.paths.json"))(config);

module.exports = override;
