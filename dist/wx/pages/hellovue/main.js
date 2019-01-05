require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonpMpvue([4],{

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(17);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
    config: {

        "navigationBarTitleText": "测试一下自己配置表头"
    }

});

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7433d69b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(21);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(18)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7433d69b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7433d69b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/hellovue/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7433d69b", Component.options)
  } else {
    hotAPI.reload("data-v-7433d69b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 18:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flyio_dist_npm_wx__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flyio_dist_npm_wx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_flyio_dist_npm_wx__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      msg: 'hello',
      grids: [{ src: '../../../static/images/nav_manage.png', name: 'Button' }, { src: '../../../static/images/nav_manage.png', name: 'Cell' }, { src: '../../../static/images/nav_manage.png', name: 'Toast' }, { src: '../../../static/images/nav_manage.png', name: 'Dialog' }, { src: '../../../static/images/nav_manage.png', name: 'Progress' }, { src: '../../../static/images/nav_manage.png', name: 'Msg' }, { src: '../../../static/images/nav_manage.png', name: 'Article' }, { src: '../../../static/images/nav_manage.png', name: 'ActionSheet' }, { src: '../../../static/images/nav_manage.png', name: 'Icons' }],
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg'
    };
  },
  create: function create() {},
  mounted: function mounted() {

    var fly = new __WEBPACK_IMPORTED_MODULE_0_flyio_dist_npm_wx___default.a();
    var HostUrl = "http://192.168.1.37:8080/buildsx/api/isFaceImg";
    var paras = {
      "id": "18a89e90877541f68a65f45eb40e5b9d",
      "type": "0"

    };
    //发起请求
    fly.post(HostUrl, paras).then(function (response) {
      console.log(response);
      /*
      data:后边是我们要的结果
      */
      console.log(response.data);
    }).catch(function (error) {
      console.log(response);
    });
  },


  methods: {
    clickHandle: function clickHandle() {
      this.msg = 'clicked!!!';
    }
  }
});

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.clickHandle
    }
  }, [_c('div', {
    staticClass: "weui-grids"
  }, _vm._l((_vm.grids), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('navigator', {
      staticClass: "weui-grid",
      attrs: {
        "url": "",
        "hover-class": "weui-grid_active"
      }
    }, [_c('image', {
      staticClass: "weui-grid__icon",
      attrs: {
        "src": item.src
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "weui-grid__label"
    }, [_vm._v(_vm._s(item.name))])])], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "message",
    style: ({
      backgroundImage: 'url(' + (_vm.avatar || '') + ')'
    })
  }, [_vm._v(" " + _vm._s(_vm.msg) + " ")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7433d69b", esExports)
  }
}

/***/ })

},[16]);
//# sourceMappingURL=main.js.map