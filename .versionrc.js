const defaultStandardVersion = require("@dnb-org/standard-version-config");

const localStandardVersion = {
  bumpFiles: [{ filename: "data/dnb/robots/version.json", type: "json" }],
};

module.exports = {
  ...defaultStandardVersion,
  ...localStandardVersion,
};
