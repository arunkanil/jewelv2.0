(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-theme-theme-module"], {
    /***/
    "7L++":
    /*!*************************************************!*\
      !*** ./src/app/views/theme/colors.component.ts ***!
      \*************************************************/

    /*! exports provided: ColorsComponent */

    /***/
    function L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColorsComponent", function () {
        return ColorsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_colors_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./colors.component.html */
      "ayjt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @coreui/coreui/dist/js/coreui-utilities */
      "NuRj");
      /* harmony import */


      var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4__);

      var ColorsComponent = /*#__PURE__*/function () {
        function ColorsComponent(_document) {
          _classCallCheck(this, ColorsComponent);

          this._document = _document;
        }

        _createClass(ColorsComponent, [{
          key: "themeColors",
          value: function themeColors() {
            var _this = this;

            Array.from(this._document.querySelectorAll('.theme-color')).forEach(function (el) {
              var background = Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4__["getStyle"])('background-color', el);

              var table = _this._document.createElement('table');

              table.innerHTML = "\n        <table class=\"w-100\">\n          <tr>\n            <td class=\"text-muted\">HEX:</td>\n            <td class=\"font-weight-bold\">".concat(Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4__["rgbToHex"])(background), "</td>\n          </tr>\n          <tr>\n            <td class=\"text-muted\">RGB:</td>\n            <td class=\"font-weight-bold\">").concat(background, "</td>\n          </tr>\n        </table>\n      ");
              el.parentNode.appendChild(table);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.themeColors();
          }
        }]);

        return ColorsComponent;
      }();

      ColorsComponent.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      };

      ColorsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_colors_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], ColorsComponent);
      /***/
    },

    /***/
    "AgMk":
    /*!*********************************************!*\
      !*** ./src/app/views/theme/theme.module.ts ***!
      \*********************************************/

    /*! exports provided: ThemeModule */

    /***/
    function AgMk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThemeModule", function () {
        return ThemeModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-responsive-carousel */
      "T6vt");
      /* harmony import */


      var _colors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./colors.component */
      "7L++");
      /* harmony import */


      var _theme_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./theme-routing.module */
      "Mdpn"); // Angular
      // import { TypographyComponent } from './typography.component';
      // Theme Routing


      var ThemeModule = function ThemeModule() {
        _classCallCheck(this, ThemeModule);
      };

      ThemeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _theme_routing_module__WEBPACK_IMPORTED_MODULE_5__["ThemeRoutingModule"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"]],
        declarations: [_colors_component__WEBPACK_IMPORTED_MODULE_4__["ColorsComponent"]]
      })], ThemeModule);
      /***/
    },

    /***/
    "Mdpn":
    /*!*****************************************************!*\
      !*** ./src/app/views/theme/theme-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: ThemeRoutingModule */

    /***/
    function Mdpn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThemeRoutingModule", function () {
        return ThemeRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _colors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./colors.component */
      "7L++");

      var routes = [{
        path: '',
        // data: {
        //   title: 'Theme'
        // },
        children: [{
          path: '',
          redirectTo: 'colors'
        }, {
          path: 'contact_form',
          component: _colors_component__WEBPACK_IMPORTED_MODULE_3__["ColorsComponent"],
          data: {
            title: 'Contact'
          }
        }]
      }];

      var ThemeRoutingModule = function ThemeRoutingModule() {
        _classCallCheck(this, ThemeRoutingModule);
      };

      ThemeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ThemeRoutingModule);
      /***/
    },

    /***/
    "ayjt":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/colors.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function ayjt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h2>Contact Form</h2>\n    </div>\n    <div class=\"card-body\">\n      <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n        <div class=\"form-group row\">\n          <label class=\"col-md-3 col-form-label\" for=\"text-input\">Contact number</label>\n          <div class=\"col-md-9\">\n            <input type=\"number\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"Text\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-md-3 col-form-label\" for=\"textarea-input\">Message</label>\n          <div class=\"col-md-9\">\n            <textarea id=\"textarea-input\" name=\"textarea-input\" rows=\"9\" class=\"form-control\"\n              placeholder=\"Content..\"></textarea>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"card-footer\">\n      <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n    </div>\n  </div>\n</div>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-theme-theme-module-es5.js.map