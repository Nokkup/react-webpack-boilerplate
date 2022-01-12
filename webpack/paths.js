const path = require("path");

module.exports = {
    paths: {
        source: path.resolve(__dirname, "../src/"),
        output: path.resolve(__dirname, "../dist/"),
        assets: path.resolve(__dirname, "../public/assets/"),
    },
};
