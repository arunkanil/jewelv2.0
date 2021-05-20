(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-buttons-buttons-module"], {
    /***/
    "2W4T":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/buttons/dropdowns.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function W4T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Bootstrap Dropdowns\n          <div class=\"card-header-actions\">\n            <a href=\"https://valor-software.com/ngx-bootstrap/#/dropdowns\" target=\"_blank\">\n              <small className=\"text-muted\">docs</small>\n            </a>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"btn-group\" dropdown>\n            <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n              Button dropdown <span class=\"caret\"></span>\n            </button>\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n              <li class=\"divider dropdown-divider\"></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Dropdowns\n          <small>trigger by <code>&lt;a&gt;</code></small>\n        </div>\n        <div class=\"card-body\">\n      <span dropdown (onShown)=\"onShown()\" (onHidden)=\"onHidden()\" (isOpenChange)=\"isOpenChange()\">\n        <a href dropdownToggle (click)=\"false\">Click me for a dropdown, yo!</a>\n          <ul *dropdownMenu class=\"dropdown-menu\">\n            <li *ngFor=\"let choice of items\">\n              <a class=\"dropdown-item\" href=\"#\">{{choice}}</a>\n            </li>\n          </ul>\n      </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Dropdowns\n          <small>split button</small>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"btn-group\" dropdown>\n            <button type=\"button\" class=\"btn btn-danger\">Action</button>\n            <button type=\"button\" dropdownToggle class=\"btn btn-danger dropdown-toggle dropdown-toggle-split\">\n              <span class=\"caret\"></span>\n              <span class=\"sr-only\">Split button!</span>\n            </button>\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a>\n              </li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else\n                here</a></li>\n              <li class=\"divider dropdown-divider\"></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Dropdowns\n          <small>manual triggers</small>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"btn-group\" dropdown [isOpen]=\"status.isOpen\" (isOpenChange)=\"change($event)\" placement=\"top\">\n            <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n              Button dropdown <span class=\"caret\"></span>\n            </button>\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a>\n              </li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else\n                here</a></li>\n              <li class=\"divider dropdown-divider\"></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"toggleDropdown($event)\">Toggle</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Dropdowns\n          <small>disabled menu</small>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"btn-group\" dropdown [isDisabled]=\"disabled\">\n            <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdownToggle\">\n              Button dropdown <span class=\"caret\"></span>\n            </button>\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a>\n              </li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else\n                here</a></li>\n              <li class=\"divider dropdown-divider\"></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"disabled = !disabled\">\n            Enable/Disable\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Dropdowns\n          <small>menu alignment</small>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"btn-group\" dropdown placement=\"bottom right\">\n            <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n              This menu is right-aligned <span class=\"caret\"></span>\n            </button>\n            <ul *dropdownMenu class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n              <li class=\"divider dropdown-divider\"></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Dropdowns\n          <small>dropup variation</small>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"btn-group\" dropdown [dropup]=\"isDropup\">\n            <button id=\"button-dropup\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n              Dropup <span class=\"caret\"></span>\n            </button>\n            <ul id=\"dropdown-dropup\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-dropup\">\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a>\n              </li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else\n                here</a></li>\n              <li class=\"divider dropdown-divider\"></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"checkbox\">\n            <label>\n              <input type=\"checkbox\" value=\"true\" [(ngModel)]=\"isDropup\"\n                     style=\"display: inline-block;\">\n              {{ isDropup ? 'Is dropup' : 'Is dropdown' }}\n            </label>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Dropdowns\n          <small> with <code>autoClose</code></small>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"btn-group\" dropdown [autoClose]=\"autoClose\">\n            <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n              Button dropdown <span class=\"caret\"></span>\n            </button>\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a>\n              </li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else\n                here</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "5EjJ":
    /*!**********************************************************!*\
      !*** ./src/app/views/buttons/brand-buttons.component.ts ***!
      \**********************************************************/

    /*! exports provided: BrandButtonsComponent */

    /***/
    function EjJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrandButtonsComponent", function () {
        return BrandButtonsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_brand_buttons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./brand-buttons.component.html */
      "sJ7Y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var BrandButtonsComponent = function BrandButtonsComponent() {
        _classCallCheck(this, BrandButtonsComponent);
      };

      BrandButtonsComponent.ctorParameters = function () {
        return [];
      };

      BrandButtonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_brand_buttons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BrandButtonsComponent);
      /***/
    },

    /***/
    "QF1n":
    /*!******************************************************!*\
      !*** ./src/app/views/buttons/dropdowns.component.ts ***!
      \******************************************************/

    /*! exports provided: DropdownsComponent */

    /***/
    function QF1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownsComponent", function () {
        return DropdownsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dropdowns_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dropdowns.component.html */
      "2W4T");
      /* harmony import */


      var _dropdowns_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dropdowns.component.css */
      "S6b1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var DropdownsComponent = /*#__PURE__*/function () {
        function DropdownsComponent() {
          _classCallCheck(this, DropdownsComponent);

          this.status = {
            isOpen: false
          };
          this.disabled = false;
          this.isDropup = true;
          this.autoClose = false;
          this.items = ['The first choice!', 'And another choice for you.', 'but wait! A third!'];
        }

        _createClass(DropdownsComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.status.isOpen = false;
          }
        }, {
          key: "onHidden",
          value: function onHidden() {
            console.log('Dropdown is hidden');
          }
        }, {
          key: "onShown",
          value: function onShown() {
            console.log('Dropdown is shown');
          }
        }, {
          key: "isOpenChange",
          value: function isOpenChange() {
            console.log('Dropdown state is changed');
          }
        }, {
          key: "toggleDropdown",
          value: function toggleDropdown($event) {
            $event.preventDefault();
            $event.stopPropagation();
            this.status.isOpen = !this.status.isOpen;
          }
        }, {
          key: "change",
          value: function change(value) {
            this.status.isOpen = value;
          }
        }]);

        return DropdownsComponent;
      }();

      DropdownsComponent.ctorParameters = function () {
        return [];
      };

      DropdownsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_dropdowns_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dropdowns_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DropdownsComponent);
      /***/
    },

    /***/
    "Reju":
    /*!*************************************************!*\
      !*** ./src/app/views/buttons/buttons.module.ts ***!
      \*************************************************/

    /*! exports provided: ButtonsModule */

    /***/
    function Reju(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonsModule", function () {
        return ButtonsModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _buttons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./buttons.component */
      "xtqT");
      /* harmony import */


      var _brand_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./brand-buttons.component */
      "5EjJ");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var _dropdowns_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./dropdowns.component */
      "QF1n");
      /* harmony import */


      var _buttons_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./buttons-routing.module */
      "bAeT"); // Dropdowns Component
      // Buttons Routing
      // Angular


      var ButtonsModule = function ButtonsModule() {
        _classCallCheck(this, ButtonsModule);
      };

      ButtonsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _buttons_routing_module__WEBPACK_IMPORTED_MODULE_8__["ButtonsRoutingModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        declarations: [_buttons_component__WEBPACK_IMPORTED_MODULE_4__["ButtonsComponent"], _dropdowns_component__WEBPACK_IMPORTED_MODULE_7__["DropdownsComponent"], _brand_buttons_component__WEBPACK_IMPORTED_MODULE_5__["BrandButtonsComponent"]]
      })], ButtonsModule);
      /***/
    },

    /***/
    "S6b1":
    /*!*******************************************************!*\
      !*** ./src/app/views/buttons/dropdowns.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function S6b1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dropup .dropdown-menu {\n  /*transform: none!important;*/\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3ducy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0FBQy9CIiwiZmlsZSI6ImRyb3Bkb3ducy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3B1cCAuZHJvcGRvd24tbWVudSB7XG4gIC8qdHJhbnNmb3JtOiBub25lIWltcG9ydGFudDsqL1xufVxuIl19 */";
      /***/
    },

    /***/
    "bAeT":
    /*!*********************************************************!*\
      !*** ./src/app/views/buttons/buttons-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ButtonsRoutingModule */

    /***/
    function bAeT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonsRoutingModule", function () {
        return ButtonsRoutingModule;
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


      var _buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./buttons.component */
      "xtqT");
      /* harmony import */


      var _dropdowns_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dropdowns.component */
      "QF1n");
      /* harmony import */


      var _brand_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./brand-buttons.component */
      "5EjJ");

      var routes = [{
        path: '',
        children: [{
          path: '',
          redirectTo: 'buttons'
        }, {
          path: 'view_profile',
          component: _buttons_component__WEBPACK_IMPORTED_MODULE_3__["ButtonsComponent"],
          data: {
            title: 'Profile'
          }
        }, {
          path: 'dropdowns',
          component: _dropdowns_component__WEBPACK_IMPORTED_MODULE_4__["DropdownsComponent"],
          data: {
            title: 'Dropdowns'
          }
        }, {
          path: 'brand-buttons',
          component: _brand_buttons_component__WEBPACK_IMPORTED_MODULE_5__["BrandButtonsComponent"],
          data: {
            title: 'Brand buttons'
          }
        }]
      }];

      var ButtonsRoutingModule = function ButtonsRoutingModule() {
        _classCallCheck(this, ButtonsRoutingModule);
      };

      ButtonsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ButtonsRoutingModule);
      /***/
    },

    /***/
    "sJ7Y":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/buttons/brand-buttons.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sJ7Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Brand Buttons</strong>\n          <small>Usage ex.</small>\n          <code style=\"text-transform:lowercase\">&lt;button class=\"btn btn-brand btn-facebook\"&gt;&lt;span&gt;Facebook&lt;/span&gt;&lt;/button&gt;</code>\n        </div>\n        <div class=\"card-body\">\n          <h6>Size Small\n            <small>Add this class\n              <code>.btn-sm</code>\n            </small>\n          </h6>\n          <p>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-facebook mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-facebook\"></i>\n              <span>Facebook</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-twitter mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-twitter\"></i>\n              <span>Twitter</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-linkedin mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-linkedin\"></i>\n              <span>LinkedIn</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-flickr mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-flickr\"></i>\n              <span>Flickr</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-tumblr mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-tumblr\"></i>\n              <span>Tumblr</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-xing mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-xing\"></i>\n              <span>Xing</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-github mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-github\"></i>\n              <span>Github</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-html5 mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-html5\"></i>\n              <span>HTML5</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-openid mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-openid\"></i>\n              <span>OpenID</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-stack-overflow mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-stack-overflow\"></i>\n              <span>StackOverflow</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-css3 mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-css3\"></i>\n              <span>CSS3</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-youtube mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-youtube\"></i>\n              <span>YouTube</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-dribbble mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-dribbble\"></i>\n              <span>Dribbble</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-google-plus mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-google-plus\"></i>\n              <span>Google+</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-instagram mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-instagram\"></i>\n              <span>Instagram</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-pinterest mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-pinterest\"></i>\n              <span>Pinterest</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-vk mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vk\"></i>\n              <span>VK</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-yahoo mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-yahoo\"></i>\n              <span>Yahoo</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-behance mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-behance\"></i>\n              <span>Behance</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-dropbox mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-dropbox\"></i>\n              <span>Dropbox</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-reddit mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-reddit\"></i>\n              <span>Reddit</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-spotify mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-spotify\"></i>\n              <span>Spotify</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-vine mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vine\"></i>\n              <span>Vine</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-foursquare mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-foursquare\"></i>\n              <span>Forsquare</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-vimeo mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vimeo\"></i>\n              <span>Vimeo</span>\n            </button>\n          </p>\n          <h6>Size Normal</h6>\n          <p>\n            <button type=\"button\" class=\"btn btn-brand btn-facebook mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-facebook\"></i>\n              <span>Facebook</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-twitter mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-twitter\"></i>\n              <span>Twitter</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-linkedin mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-linkedin\"></i>\n              <span>LinkedIn</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-flickr mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-flickr\"></i>\n              <span>Flickr</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-tumblr mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-tumblr\"></i>\n              <span>Tumblr</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-xing mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-xing\"></i>\n              <span>Xing</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-github mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-github\"></i>\n              <span>Github</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-html5 mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-html5\"></i>\n              <span>HTML5</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-openid mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-openid\"></i>\n              <span>OpenID</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-stack-overflow mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-stack-overflow\"></i>\n              <span>StackOverflow</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-css3 mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-css3\"></i>\n              <span>CSS3</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-youtube mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-youtube\"></i>\n              <span>YouTube</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-dribbble mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-dribbble\"></i>\n              <span>Dribbble</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-google-plus mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-google-plus\"></i>\n              <span>Google+</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-instagram mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-instagram\"></i>\n              <span>Instagram</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-pinterest mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-pinterest\"></i>\n              <span>Pinterest</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-vk mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vk\"></i>\n              <span>VK</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-yahoo mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-yahoo\"></i>\n              <span>Yahoo</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-behance mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-behance\"></i>\n              <span>Behance</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-dropbox mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-dropbox\"></i>\n              <span>Dropbox</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-reddit mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-reddit\"></i>\n              <span>Reddit</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-spotify mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-spotify\"></i>\n              <span>Spotify</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-vine mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vine\"></i>\n              <span>Vine</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-foursquare mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-foursquare\"></i>\n              <span>Forsquare</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-vimeo mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vimeo\"></i>\n              <span>Vimeo</span>\n            </button>\n          </p>\n          <h6>Size Large\n            <small>Add this class\n              <code>.btn-lg</code>\n            </small>\n          </h6>\n          <p>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-facebook mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-facebook\"></i>\n              <span>Facebook</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-twitter mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-twitter\"></i>\n              <span>Twitter</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-linkedin mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-linkedin\"></i>\n              <span>LinkedIn</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-flickr mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-flickr\"></i>\n              <span>Flickr</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-tumblr mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-tumblr\"></i>\n              <span>Tumblr</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-xing mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-xing\"></i>\n              <span>Xing</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-github mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-github\"></i>\n              <span>Github</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-html5 mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-html5\"></i>\n              <span>HTML5</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-openid mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-openid\"></i>\n              <span>OpenID</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-stack-overflow mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-stack-overflow\"></i>\n              <span>StackOverflow</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-css3 mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-css3\"></i>\n              <span>CSS3</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-youtube mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-youtube\"></i>\n              <span>YouTube</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-dribbble mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-dribbble\"></i>\n              <span>Dribbble</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-google-plus mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-google-plus\"></i>\n              <span>Google+</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-instagram mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-instagram\"></i>\n              <span>Instagram</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-pinterest mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-pinterest\"></i>\n              <span>Pinterest</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-vk mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vk\"></i>\n              <span>VK</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-yahoo mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-yahoo\"></i>\n              <span>Yahoo</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-behance mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-behance\"></i>\n              <span>Behance</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-dropbox mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-dropbox\"></i>\n              <span>Dropbox</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-reddit mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-reddit\"></i>\n              <span>Reddit</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-spotify mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-spotify\"></i>\n              <span>Spotify</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-vine mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vine\"></i>\n              <span>Vine</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-foursquare mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-foursquare\"></i>\n              <span>Forsquare</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-vimeo mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vimeo\"></i>\n              <span>Vimeo</span>\n            </button>\n          </p>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Brand Buttons</strong>\n          <small>Only icons. Usage ex.</small>\n          <code style=\"text-transform:lowercase\">&lt;button class=\"btn btn-brand btn-facebook\"&gt;&lt;span&gt;Facebook&lt;/span&gt;&lt;/button&gt;</code>\n        </div>\n        <div class=\"card-body\">\n          <h6>Size Small\n            <small>Add this class\n              <code>.btn-sm</code>\n            </small>\n          </h6>\n          <p>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-facebook mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-facebook\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-twitter mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-twitter\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-linkedin mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-linkedin\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-flickr mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-flickr\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-tumblr mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-tumblr\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-xing mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-xing\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-github mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-github\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-html5 mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-html5\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-openid mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-openid\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-stack-overflow mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-stack-overflow\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-css3 mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-css3\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-youtube mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-youtube\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-dribbble mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-dribbble\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-google-plus mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-google-plus\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-instagram mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-instagram\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-pinterest mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-pinterest\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-vk mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vk\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-yahoo mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-yahoo\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-behance mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-behance\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-dropbox mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-dropbox\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-reddit mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-reddit\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-spotify mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-spotify\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-vine mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vine\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-foursquare mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-foursquare\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-vimeo mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vimeo\"></i>\n            </button>\n          </p>\n          <h6>Size Normal</h6>\n          <p>\n            <button type=\"button\" class=\"btn btn-brand btn-facebook mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-facebook\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-twitter mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-twitter\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-linkedin mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-linkedin\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-flickr mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-flickr\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-tumblr mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-tumblr\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-xing mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-xing\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-github mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-github\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-html5 mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-html5\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-openid mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-openid\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-stack-overflow mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-stack-overflow\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-css3 mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-css3\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-youtube mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-youtube\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-dribbble mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-dribbble\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-google-plus mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-google-plus\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-instagram mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-instagram\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-pinterest mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-pinterest\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-vk mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vk\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-yahoo mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-yahoo\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-behance mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-behance\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-dropbox mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-dropbox\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-reddit mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-reddit\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-spotify mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-spotify\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-vine mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vine\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-foursquare mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-foursquare\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-vimeo mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vimeo\"></i>\n            </button>\n          </p>\n          <h6>Size Large\n            <small>Add this class\n              <code>.btn-lg</code>\n            </small>\n          </h6>\n          <p>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-facebook mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-facebook\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-twitter mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-twitter\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-linkedin mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-linkedin\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-flickr mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-flickr\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-tumblr mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-tumblr\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-xing mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-xing\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-github mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-github\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-html5 mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-html5\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-openid mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-openid\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-stack-overflow mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-stack-overflow\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-css3 mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-css3\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-youtube mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-youtube\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-dribbble mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-dribbble\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-google-plus mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-google-plus\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-instagram mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-instagram\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-pinterest mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-pinterest\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-vk mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vk\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-yahoo mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-yahoo\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-behance mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-behance\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-dropbox mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-dropbox\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-reddit mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-reddit\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-spotify mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-spotify\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-vine mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vine\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-foursquare mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-foursquare\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-vimeo mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vimeo\"></i>\n            </button>\n          </p>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Brand Buttons</strong>\n          <small>Only text. Usage ex.</small>\n          <code style=\"text-transform:lowercase\">&lt;button class=\"btn btn-brand btn-facebook text\"&gt;&lt;span&gt;Facebook&lt;/span&gt;&lt;/button&gt;</code>\n        </div>\n        <div class=\"card-body\">\n          <h6>Size Small\n            <small>Add this class\n              <code>.btn-sm</code>\n            </small>\n          </h6>\n          <p>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-facebook mr-1\" style=\"margin-bottom: 4px\">\n              <span>Facebook</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-twitter mr-1\" style=\"margin-bottom: 4px\">\n              <span>Twitter</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-linkedin mr-1\" style=\"margin-bottom: 4px\">\n              <span>LinkedIn</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-flickr mr-1\" style=\"margin-bottom: 4px\">\n              <span>Flickr</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-tumblr mr-1\" style=\"margin-bottom: 4px\">\n              <span>Tumblr</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-xing mr-1\" style=\"margin-bottom: 4px\">\n              <span>Xing</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-github mr-1\" style=\"margin-bottom: 4px\">\n              <span>Github</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-html5 mr-1\" style=\"margin-bottom: 4px\">\n              <span>HTML5</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-openid mr-1\" style=\"margin-bottom: 4px\">\n              <span>OpenID</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-stack-overflow mr-1\" style=\"margin-bottom: 4px\">\n              <span>StackOverflow</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-css3 mr-1\" style=\"margin-bottom: 4px\">\n              <span>CSS3</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-youtube mr-1\" style=\"margin-bottom: 4px\">\n              <span>YouTube</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-dribbble mr-1\" style=\"margin-bottom: 4px\">\n              <span>Dribbble</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-google-plus mr-1\" style=\"margin-bottom: 4px\">\n              <span>Google+</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-instagram mr-1\" style=\"margin-bottom: 4px\">\n              <span>Instagram</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-pinterest mr-1\" style=\"margin-bottom: 4px\">\n              <span>Pinterest</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-vk mr-1\" style=\"margin-bottom: 4px\">\n              <span>VK</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-yahoo mr-1\" style=\"margin-bottom: 4px\">\n              <span>Yahoo</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-behance mr-1\" style=\"margin-bottom: 4px\">\n              <span>Behance</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-dropbox mr-1\" style=\"margin-bottom: 4px\">\n              <span>Dropbox</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-reddit mr-1\" style=\"margin-bottom: 4px\">\n              <span>Reddit</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-spotify mr-1\" style=\"margin-bottom: 4px\">\n              <span>Spotify</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-vine mr-1\" style=\"margin-bottom: 4px\">\n              <span>Vine</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-foursquare mr-1\" style=\"margin-bottom: 4px\">\n              <span>Forsquare</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-vimeo mr-1\" style=\"margin-bottom: 4px\">\n              <span>Vimeo</span>\n            </button>\n          </p>\n          <h6>Size Normal</h6>\n          <p>\n            <button type=\"button\" class=\"btn btn-brand btn-facebook mr-1\" style=\"margin-bottom: 4px\">\n              <span>Facebook</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-twitter mr-1\" style=\"margin-bottom: 4px\">\n              <span>Twitter</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-linkedin mr-1\" style=\"margin-bottom: 4px\">\n              <span>LinkedIn</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-flickr mr-1\" style=\"margin-bottom: 4px\">\n              <span>Flickr</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-tumblr mr-1\" style=\"margin-bottom: 4px\">\n              <span>Tumblr</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-xing mr-1\" style=\"margin-bottom: 4px\">\n              <span>Xing</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-github mr-1\" style=\"margin-bottom: 4px\">\n              <span>Github</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-html5 mr-1\" style=\"margin-bottom: 4px\">\n              <span>HTML5</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-openid mr-1\" style=\"margin-bottom: 4px\">\n              <span>OpenID</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-stack-overflow mr-1\" style=\"margin-bottom: 4px\">\n              <span>StackOverflow</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-css3 mr-1\" style=\"margin-bottom: 4px\">\n              <span>CSS3</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-youtube mr-1\" style=\"margin-bottom: 4px\">\n              <span>YouTube</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-dribbble mr-1\" style=\"margin-bottom: 4px\">\n              <span>Dribbble</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-google-plus mr-1\" style=\"margin-bottom: 4px\">\n              <span>Google+</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-instagram mr-1\" style=\"margin-bottom: 4px\">\n              <span>Instagram</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-pinterest mr-1\" style=\"margin-bottom: 4px\">\n              <span>Pinterest</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-vk mr-1\" style=\"margin-bottom: 4px\">\n              <span>VK</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-yahoo mr-1\" style=\"margin-bottom: 4px\">\n              <span>Yahoo</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-behance mr-1\" style=\"margin-bottom: 4px\">\n              <span>Behance</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-dropbox mr-1\" style=\"margin-bottom: 4px\">\n              <span>Dropbox</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-reddit mr-1\" style=\"margin-bottom: 4px\">\n              <span>Reddit</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-spotify mr-1\" style=\"margin-bottom: 4px\">\n              <span>Spotify</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-vine mr-1\" style=\"margin-bottom: 4px\">\n              <span>Vine</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-foursquare mr-1\" style=\"margin-bottom: 4px\">\n              <span>Forsquare</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-vimeo mr-1\" style=\"margin-bottom: 4px\">\n              <span>Vimeo</span>\n            </button>\n          </p>\n          <h6>Size Large\n            <small>Add this class\n              <code>.btn-lg</code>\n            </small>\n          </h6>\n          <p>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-facebook mr-1\" style=\"margin-bottom: 4px\">\n              <span>Facebook</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-twitter mr-1\" style=\"margin-bottom: 4px\">\n              <span>Twitter</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-linkedin mr-1\" style=\"margin-bottom: 4px\">\n              <span>LinkedIn</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-flickr mr-1\" style=\"margin-bottom: 4px\">\n              <span>Flickr</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-tumblr mr-1\" style=\"margin-bottom: 4px\">\n              <span>Tumblr</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-xing mr-1\" style=\"margin-bottom: 4px\">\n              <span>Xing</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-github mr-1\" style=\"margin-bottom: 4px\">\n              <span>Github</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-html5 mr-1\" style=\"margin-bottom: 4px\">\n              <span>HTML5</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-openid mr-1\" style=\"margin-bottom: 4px\">\n              <span>OpenID</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-stack-overflow mr-1\" style=\"margin-bottom: 4px\">\n              <span>StackOverflow</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-css3 mr-1\" style=\"margin-bottom: 4px\">\n              <span>CSS3</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-youtube mr-1\" style=\"margin-bottom: 4px\">\n              <span>YouTube</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-dribbble mr-1\" style=\"margin-bottom: 4px\">\n              <span>Dribbble</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-google-plus mr-1\" style=\"margin-bottom: 4px\">\n              <span>Google+</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-instagram mr-1\" style=\"margin-bottom: 4px\">\n              <span>Instagram</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-pinterest mr-1\" style=\"margin-bottom: 4px\">\n              <span>Pinterest</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-vk mr-1\" style=\"margin-bottom: 4px\">\n              <span>VK</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-yahoo mr-1\" style=\"margin-bottom: 4px\">\n              <span>Yahoo</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-behance mr-1\" style=\"margin-bottom: 4px\">\n              <span>Behance</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-dropbox mr-1\" style=\"margin-bottom: 4px\">\n              <span>Dropbox</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-reddit mr-1\" style=\"margin-bottom: 4px\">\n              <span>Reddit</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-spotify mr-1\" style=\"margin-bottom: 4px\">\n              <span>Spotify</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-vine mr-1\" style=\"margin-bottom: 4px\">\n              <span>Vine</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-foursquare mr-1\" style=\"margin-bottom: 4px\">\n              <span>Forsquare</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-vimeo mr-1\" style=\"margin-bottom: 4px\">\n              <span>Vimeo</span>\n            </button>\n          </p>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  <!--/.row-->\n</div>\n";
      /***/
    },

    /***/
    "sgt0":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/buttons/buttons.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function sgt0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h2>Profile</h2>\n    </div>\n    <div class=\"card-body\">\n      <form>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"shopName\"><strong>Name of the Shop</strong></label>\n            <input type=\"text\" class=\"form-control\" id=\"shopName\">\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"contactNumber\"><strong>Customer contact number</strong></label>\n            <input type=\"number\" class=\"form-control\" id=\"contactNumber\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"address\"><strong>Address</strong></label>\n          <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"1234 Main St\">\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"city\"><strong>City</strong></label>\n            <input type=\"text\" class=\"form-control\" id=\"city\">\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"state\"><strong>State</strong></label>\n            <select id=\"state\" class=\"form-control\">\n              <option selected>Choose...</option>\n              <option>...</option>\n            </select>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"pincode\"><strong>Pin code</strong></label>\n            <input type=\"text\" class=\"form-control\" id=\"pincode\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"gmapLink\"><strong>Google map link</strong></label>\n          <input type=\"text\" class=\"form-control\" id=\"gmapLink\" placeholder=\"Apartment, studio, or floor\">\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-4\">\n            <label for=\"latitude\"><strong>Latitude</strong></label>\n            <input type=\"text\" class=\"form-control\" id=\"latitude\">\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"longitude\"><strong>Longitude</strong></label>\n            <input type=\"text\" class=\"form-control\" id=\"longitude\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"logo\"><strong>Logo</strong></label>\n          <div class=\"custom-file\">\n            <input type=\"file\" class=\"custom-file-input\" id=\"customFile\">\n            <label class=\"custom-file-label\" for=\"customFile\">Choose file</label>\n          </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n      </form>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "xtqT":
    /*!****************************************************!*\
      !*** ./src/app/views/buttons/buttons.component.ts ***!
      \****************************************************/

    /*! exports provided: ButtonsComponent */

    /***/
    function xtqT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function () {
        return ButtonsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_buttons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./buttons.component.html */
      "sgt0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ButtonsComponent = function ButtonsComponent() {
        _classCallCheck(this, ButtonsComponent);
      };

      ButtonsComponent.ctorParameters = function () {
        return [];
      };

      ButtonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_buttons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ButtonsComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-buttons-buttons-module-es5.js.map