// vendor.js 文本替换
// g = (function() {
//   return this;
// })();

// g = (function() {
//   return typeof global !== 'undefined' ? global : this;
// })();

function mpvueVendorPlugin() {
}

mpvueVendorPlugin.prototype.apply = function (compiler) {
  compiler.plugin('emit', (compilation, callback) => {
    const fileName = 'common/vendor.js';
    const asset = compilation.assets[fileName];
    let fileContent = asset.source();

    compilation.assets[fileName] = {
      source: () => {
        let from = /g\s=\s\(function\(\)\s\{\r?\n?\s+return\sthis;\r?\n?\s*\}\)\(\)\;/;
        let to = `g = (function() { return typeof global !== 'undefined' ? global : this; })();`
        fileContent = fileContent.replace(from, to)
        return fileContent;
      },
      size: () => {
        return Buffer.byteLength(fileContent, 'utf8');
      }
    };
    callback();
  });
};

module.exports = mpvueVendorPlugin;
