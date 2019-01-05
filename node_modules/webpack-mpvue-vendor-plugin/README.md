# webpack-mpvue-vendor-plugin

> mpvue global 修正

## 使用示例：

```js
const mpvueVendorPlugin = require('webpack-mpvue-vendor-plugin')
// webpack config
{
  entry: [],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  },
  plugins: [
    new mpvueVendorPlugin()
  ]
};
```

bug 或者交流建议等请反馈到 [mpvue/issues](https://github.com/Meituan-Dianping/mpvue/issues)。
