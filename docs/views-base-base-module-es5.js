(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-base-base-module"], {
    /***/
    "/5UO":
    /*!**********************************************************!*\
      !*** ./src/app/views/base/readyfordelivery.component.ts ***!
      \**********************************************************/

    /*! exports provided: CustomersComponent */

    /***/
    function UO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomersComponent", function () {
        return CustomersComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_readyfordelivery_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./readyfordelivery.component.html */
      "77bT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../data.service */
      "R7Hv");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../constants/columnMetadata */
      "7nfi");

      var CustomersComponent = /*#__PURE__*/function () {
        function CustomersComponent(dataservice, router, fb) {
          _classCallCheck(this, CustomersComponent);

          this.dataservice = dataservice;
          this.router = router;
          this.fb = fb;
          this.customerForm = this.fb.group({
            NameOfBride: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            NameOfFather: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            NameOfMother: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            MarriageDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            MarriageMonth: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            tele_caller_contact: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            HouseName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            Landmark: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            locality: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
          });
          this.loading = true;
          this.btnLoading = false;
          this.orders = {};
          this.columnDefs = [];
          this.rowData = [];
          this.agents = [];
          this.localities = [];
          this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["customersColumn"]);
          this.Months = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["Months"]);
          this.rowSelection = "single";
        }

        _createClass(CustomersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getLists();
          }
        }, {
          key: "getLists",
          value: function getLists() {
            var _this = this;

            this.loading = true;
            this.dataservice.getCustomers().valueChanges.subscribe(function (result) {
              console.log("getCustomers", result.data.customers);
              _this.rowData = result.data.customers;
            });
            this.dataservice.getLocalities().valueChanges.subscribe(function (result) {
              console.log("getLocalities", result.data.localities);
              _this.localities = result.data.localities;
            });
            this.dataservice.getAgents().valueChanges.subscribe(function (result) {
              console.log("getAgents", result.data.teleCallerContacts);
              _this.agents = result.data.teleCallerContacts;
            });
          }
        }, {
          key: "onGridReady",
          value: function onGridReady(params) {
            this.gridApi = params.api;
            this.gridColumnApi = params.columnApi;
          }
        }, {
          key: "onSelectionChanged",
          value: function onSelectionChanged(event) {
            var selectedRows = this.gridApi.getSelectedRows();
            console.log(selectedRows);
            this.router.navigate(["/order/customer_details", selectedRows[0].id], {
              state: {
                data: selectedRows
              }
            });
          }
        }, {
          key: "FormSubmit",
          value: function FormSubmit() {
            var _this2 = this;

            var resp = {};
            console.log(this.customerForm.value);
            this.dataservice.Addcustomer(this.customerForm.value).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.createCustomer) {
                alert("customer added successfully!");

                _this2.getLists();

                _this2.myModal.hide();
              } else {
                alert("Failed. Please check the fields!");
              }
            });
          }
        }]);

        return CustomersComponent;
      }();

      CustomersComponent.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }];
      };

      CustomersComponent.propDecorators = {
        myModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["myModal"]
        }]
      };
      CustomersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_readyfordelivery_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], CustomersComponent);
      /***/
    },

    /***/
    "38Bd":
    /*!**************************************************************************************!*\
      !*** ./node_modules/ngx-bootstrap/progressbar/fesm2015/ngx-bootstrap-progressbar.js ***!
      \**************************************************************************************/

    /*! exports provided: BarComponent, ProgressbarComponent, ProgressbarConfig, ProgressbarModule */

    /***/
    function Bd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarComponent", function () {
        return BarComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function () {
        return ProgressbarComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressbarConfig", function () {
        return ProgressbarConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressbarModule", function () {
        return ProgressbarModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/utils */
      "hpHm");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      function ProgressbarComponent_bar_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.type)("value", ctx_r0._value)("max", ctx_r0._max);
        }
      }

      function ProgressbarComponent_ng_template_1_bar_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", item_r3.type)("value", item_r3.value)("max", item_r3.max);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.label);
        }
      }

      function ProgressbarComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProgressbarComponent_ng_template_1_bar_0_Template, 2, 4, "bar", 3);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1._value);
        }
      }

      var _c0 = ["*"];

      var ProgressbarConfig = function ProgressbarConfig() {
        _classCallCheck(this, ProgressbarConfig);

        /**
         * if `true` changing value of progress bar will be animated
         */
        this.animate = false;
        /**
         * maximum total value of progress element
         */

        this.max = 100;
      };

      ProgressbarConfig.ɵfac = function ProgressbarConfig_Factory(t) {
        return new (t || ProgressbarConfig)();
      };
      /** @nocollapse */


      ProgressbarConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function ProgressbarConfig_Factory() {
          return new ProgressbarConfig();
        },
        token: ProgressbarConfig,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressbarConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ProgressbarComponent = /*#__PURE__*/function () {
        /**
         * @param {?} config
         */
        function ProgressbarComponent(config) {
          _classCallCheck(this, ProgressbarComponent);

          this.isStacked = false;
          this._max = 100;
          this.addClass = true;
          /* tslint:disable-next-line:no-any */

          this.bars = [];
          Object.assign(this, config);
        }
        /**
         * if `true` changing value of progress bar will be animated
         * @param {?} value
         * @return {?}
         */


        _createClass(ProgressbarComponent, [{
          key: "animate",
          set: function set(value) {
            this._animate = value;
            this.bars.forEach(
            /**
            * @param {?} b
            * @return {?}
            */
            function (b) {
              b.animate = value;
            });
          }
          /**
           * If `true`, striped classes are applied
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "striped",
          set: function set(value) {
            this._striped = value;
            this.bars.forEach(
            /**
            * @param {?} b
            * @return {?}
            */
            function (b) {
              b.striped = value;
            });
          }
          /**
           * current value of progress bar. Could be a number or array of objects
           * like {"value":15,"type":"info","label":"15 %"}
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "value",
          set: function set(value) {
            this.isStacked = Array.isArray(value);
            this._value = value;
          }
          /**
           * @return {?}
           */

        }, {
          key: "isBs3",
          get: function get() {
            return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
          }
          /**
           * maximum total value of progress element
           * @return {?}
           */

        }, {
          key: "max",
          get: function get() {
            return this._max;
          }
          /**
           * @param {?} v
           * @return {?}
           */
          ,
          set: function set(v) {
            this._max = v;
            this.bars.forEach(
            /**
            * @param {?} bar
            * @return {?}
            */
            function (bar) {
              bar.recalculatePercentage();
            });
          }
          /**
           * @param {?} bar
           * @return {?}
           */

        }, {
          key: "addBar",
          value: function addBar(bar) {
            bar.animate = this._animate;
            bar.striped = this._striped;
            this.bars.push(bar);
          }
          /**
           * @param {?} bar
           * @return {?}
           */

        }, {
          key: "removeBar",
          value: function removeBar(bar) {
            this.bars.splice(this.bars.indexOf(bar), 1);
          }
        }]);

        return ProgressbarComponent;
      }();

      ProgressbarComponent.ɵfac = function ProgressbarComponent_Factory(t) {
        return new (t || ProgressbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ProgressbarConfig));
      };

      ProgressbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProgressbarComponent,
        selectors: [["progressbar"]],
        hostVars: 3,
        hostBindings: function ProgressbarComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("max", ctx.max);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("progress", ctx.addClass);
          }
        },
        inputs: {
          animate: "animate",
          striped: "striped",
          value: "value",
          max: "max",
          type: "type"
        },
        ngContentSelectors: _c0,
        decls: 2,
        vars: 2,
        consts: [[3, "type", "value", "max", 4, "ngIf"], [3, "ngIf"], [3, "type", "value", "max"], [3, "type", "value", "max", 4, "ngFor", "ngForOf"]],
        template: function ProgressbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProgressbarComponent_bar_0_Template, 2, 3, "bar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgressbarComponent_ng_template_1_Template, 1, 1, "ng-template", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isStacked);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isStacked);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], BarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]];
        },
        styles: ["[_nghost-%COMP%] {\n      width: 100%;\n      display: flex;\n    }"]
      });
      /** @nocollapse */

      ProgressbarComponent.ctorParameters = function () {
        return [{
          type: ProgressbarConfig
        }];
      };

      ProgressbarComponent.propDecorators = {
        animate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        striped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.max']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        addClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.progress']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'progressbar',
            template: "<bar [type]=\"type\" [value]=\"_value\" [max]=\"_max\" *ngIf=\"!isStacked\">\n  <ng-content></ng-content>\n</bar>\n<ng-template [ngIf]=\"isStacked\">\n  <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\" [max]=\"item.max\">{{ item.label }}</bar>\n</ng-template>\n",
            styles: ["\n    :host {\n      width: 100%;\n      display: flex;\n    }\n  "]
          }]
        }], function () {
          return [{
            type: ProgressbarConfig
          }];
        }, {
          addClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.progress']
          }],
          animate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          striped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.max']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // todo: number pipe
      // todo: use query from progress?


      var BarComponent = /*#__PURE__*/function () {
        /**
         * @param {?} el
         * @param {?} progress
         * @param {?} renderer
         */
        function BarComponent(el, progress, renderer) {
          _classCallCheck(this, BarComponent);

          this.el = el;
          this.renderer = renderer;
          this.addClass = true;
          this.percent = 0;
          this.progress = progress;
        }
        /**
         * @return {?}
         */


        _createClass(BarComponent, [{
          key: "setBarWidth",
          get: function get() {
            this.recalculatePercentage();
            return this.percent;
          }
          /**
           * @return {?}
           */

        }, {
          key: "isBs3",
          get: function get() {
            return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.progress.addBar(this);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.progress.removeBar(this);
          }
          /**
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.value) {
              if (!changes.value.currentValue && changes.value.currentValue !== 0) {
                return;
              }

              this.value = changes.value.currentValue;
              this.recalculatePercentage();
            }

            if (changes.type) {
              this.type = changes.type.currentValue;
              this.applyTypeClasses();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "recalculatePercentage",
          value: function recalculatePercentage() {
            this.percent = +(this.value / this.progress.max * 100).toFixed(2);
            /** @type {?} */

            var totalPercentage = this.progress.bars.reduce(
            /**
            * @param {?} total
            * @param {?} bar
            * @return {?}
            */
            function (total, bar) {
              return total + bar.percent;
            }, 0);

            if (totalPercentage > 100) {
              this.percent -= totalPercentage - 100;
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "applyTypeClasses",
          value: function applyTypeClasses() {
            if (this._prevType) {
              /** @type {?} */
              var barTypeClass = "progress-bar-".concat(this._prevType);
              /** @type {?} */

              var bgClass = "bg-".concat(this._prevType);
              this.renderer.removeClass(this.el.nativeElement, barTypeClass);
              this.renderer.removeClass(this.el.nativeElement, bgClass);
              this._prevType = null;
            }

            if (this.type) {
              /** @type {?} */
              var _barTypeClass = "progress-bar-".concat(this.type);
              /** @type {?} */


              var _bgClass = "bg-".concat(this.type);

              this.renderer.addClass(this.el.nativeElement, _barTypeClass);
              this.renderer.addClass(this.el.nativeElement, _bgClass);
              this._prevType = this.type;
            }
          }
        }]);

        return BarComponent;
      }();

      BarComponent.ɵfac = function BarComponent_Factory(t) {
        return new (t || BarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ProgressbarComponent, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      BarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BarComponent,
        selectors: [["bar"]],
        hostAttrs: ["role", "progressbar", "aria-valuemin", "0"],
        hostVars: 15,
        hostBindings: function BarComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.value)("aria-valuetext", ctx.percent ? ctx.percent.toFixed(0) + "%" : "")("aria-valuemax", ctx.max);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "100", "%")("width", ctx.setBarWidth, "%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("progress-bar-animated", !ctx.isBs3 && ctx.animate)("progress-bar-striped", ctx.striped)("active", ctx.isBs3 && ctx.animate)("progress-bar", ctx.addClass);
          }
        },
        inputs: {
          value: "value",
          type: "type",
          max: "max"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function BarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2
      });
      /** @nocollapse */

      BarComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: ProgressbarComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      };

      BarComponent.propDecorators = {
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        setBarWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.width.%']
        }],
        addClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.progress-bar']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'bar',
            template: "<ng-content></ng-content>\n",
            host: {
              role: 'progressbar',
              'aria-valuemin': '0',
              '[class.progress-bar-animated]': '!isBs3 && animate',
              '[class.progress-bar-striped]': 'striped',
              '[class.active]': 'isBs3 && animate',
              '[attr.aria-valuenow]': 'value',
              '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
              '[attr.aria-valuemax]': 'max',
              '[style.height.%]': '"100"'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: ProgressbarComponent,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          addClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.progress-bar']
          }],
          setBarWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width.%']
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ProgressbarModule = /*#__PURE__*/function () {
        function ProgressbarModule() {
          _classCallCheck(this, ProgressbarModule);
        }

        _createClass(ProgressbarModule, null, [{
          key: "forRoot",
          value:
          /**
           * @return {?}
           */
          function forRoot() {
            return {
              ngModule: ProgressbarModule,
              providers: []
            };
          }
        }]);

        return ProgressbarModule;
      }();

      ProgressbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProgressbarModule
      });
      ProgressbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProgressbarModule_Factory(t) {
          return new (t || ProgressbarModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProgressbarModule, {
          declarations: function declarations() {
            return [BarComponent, ProgressbarComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
          },
          exports: function exports() {
            return [BarComponent, ProgressbarComponent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressbarModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [BarComponent, ProgressbarComponent],
            exports: [BarComponent, ProgressbarComponent]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-bootstrap-progressbar.js.map

      /***/

    },

    /***/
    "6No5":
    /*!************************************************************************************!*\
      !*** ./node_modules/ngx-bootstrap/pagination/fesm2015/ngx-bootstrap-pagination.js ***!
      \************************************************************************************/

    /*! exports provided: PagerComponent, PaginationComponent, PaginationConfig, PaginationModule, ɵa, ɵb */

    /***/
    function No5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagerComponent", function () {
        return PagerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationComponent", function () {
        return PaginationComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationConfig", function () {
        return PaginationConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationModule", function () {
        return PaginationModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return PAGER_CONTROL_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return PAGINATION_CONTROL_VALUE_ACCESSOR;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Provides default values for Pagination and pager components
       */


      var _c0 = function _c0(a0, a1) {
        return {
          "pull-left": a0,
          "float-left": a1
        };
      };

      var _c1 = function _c1(a0, a1) {
        return {
          "pull-right": a0,
          "float-right": a1
        };
      };

      var _c2 = function _c2(a0, a1) {
        return {
          disabled: a0,
          currentPage: a1
        };
      };

      function PaginationComponent_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_1_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.selectPage(1, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.noPrevious() || ctx_r0.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.customFirstTemplate || _r11)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r0.noPrevious() || ctx_r0.disabled, ctx_r0.page));
        }
      }

      function PaginationComponent_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_2_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.selectPage(ctx_r17.page - 1, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r1.noPrevious() || ctx_r1.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.customPreviousTemplate || _r9)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r1.noPrevious() || ctx_r1.disabled, ctx_r1.page));
        }
      }

      var _c3 = function _c3(a0, a1, a2) {
        return {
          disabled: a0,
          $implicit: a1,
          currentPage: a2
        };
      };

      function PaginationComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_3_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var pg_r19 = ctx.$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.selectPage(pg_r19.number, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pg_r19 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pg_r19.active)("disabled", ctx_r2.disabled && !pg_r19.active);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.customPageTemplate || _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c3, ctx_r2.disabled, pg_r19, ctx_r2.page));
        }
      }

      function PaginationComponent_li_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_4_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.selectPage(ctx_r22.page + 1, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r3.noNext() || ctx_r3.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.customNextTemplate || _r7)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r3.noNext() || ctx_r3.disabled, ctx_r3.page));
        }
      }

      function PaginationComponent_li_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_5_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.selectPage(ctx_r24.totalPages, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r4.noNext() || ctx_r4.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.customLastTemplate || _r13)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r4.noNext() || ctx_r4.disabled, ctx_r4.page));
        }
      }

      function PaginationComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var page_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r26.text);
        }
      }

      function PaginationComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.getText("next"));
        }
      }

      function PaginationComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.getText("previous"));
        }
      }

      function PaginationComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.getText("first"));
        }
      }

      function PaginationComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.getText("last"));
        }
      }

      var PaginationConfig = function PaginationConfig() {
        _classCallCheck(this, PaginationConfig);

        this.main = {
          maxSize: void 0,
          itemsPerPage: 10,
          boundaryLinks: false,
          directionLinks: true,
          firstText: 'First',
          previousText: 'Previous',
          nextText: 'Next',
          lastText: 'Last',
          pageBtnClass: '',
          rotate: true
        };
        this.pager = {
          itemsPerPage: 15,
          previousText: '« Previous',
          nextText: 'Next »',
          pageBtnClass: '',
          align: true
        };
      };

      PaginationConfig.ɵfac = function PaginationConfig_Factory(t) {
        return new (t || PaginationConfig)();
      };
      /** @nocollapse */


      PaginationConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function PaginationConfig_Factory() {
          return new PaginationConfig();
        },
        token: PaginationConfig,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var PAGER_CONTROL_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],

        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return PagerComponent;
        }),
        multi: true
      };

      var PagerComponent = /*#__PURE__*/function () {
        /**
         * @param {?} elementRef
         * @param {?} paginationConfig
         * @param {?} changeDetection
         */
        function PagerComponent(elementRef, paginationConfig, changeDetection) {
          _classCallCheck(this, PagerComponent);

          this.elementRef = elementRef;
          this.changeDetection = changeDetection;
          /**
           * fired when total pages count changes, $event:number equals to total pages count
           */

          this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * fired when page was changed, $event:{page, itemsPerPage} equals to
           * object with current page index and number of items per page
           */

          this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onChange = Function.prototype;
          this.onTouched = Function.prototype;
          this.inited = false;
          this._page = 1;
          this.elementRef = elementRef;

          if (!this.config) {
            this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
          }
        }
        /**
         * maximum number of items per page. If value less than 1 will display all items on one page
         * @return {?}
         */


        _createClass(PagerComponent, [{
          key: "itemsPerPage",
          get: function get() {
            return this._itemsPerPage;
          }
          /**
           * @param {?} v
           * @return {?}
           */
          ,
          set: function set(v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
          }
          /**
           * total number of items in all pages
           * @return {?}
           */

        }, {
          key: "totalItems",
          get: function get() {
            return this._totalItems;
          }
          /**
           * @param {?} v
           * @return {?}
           */
          ,
          set: function set(v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
          }
          /**
           * @return {?}
           */

        }, {
          key: "totalPages",
          get: function get() {
            return this._totalPages;
          }
          /**
           * @param {?} v
           * @return {?}
           */
          ,
          set: function set(v) {
            this._totalPages = v;
            this.numPages.emit(v);

            if (this.inited) {
              this.selectPage(this.page);
            }
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "page",
          get:
          /**
           * @return {?}
           */
          function get() {
            return this._page;
          }
          /**
           * @param {?} config
           * @return {?}
           */
          ,
          set: function set(value) {
            /** @type {?} */
            var _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();

            if (_previous === this._page || typeof _previous === 'undefined') {
              return;
            }

            this.pageChanged.emit({
              page: this._page,
              itemsPerPage: this.itemsPerPage
            });
          }
        }, {
          key: "configureOptions",
          value: function configureOptions(config) {
            this.config = Object.assign({}, config);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (typeof window !== 'undefined') {
              this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
            } // watch for maxSize


            this.maxSize = typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
            this.rotate = typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
            this.boundaryLinks = typeof this.boundaryLinks !== 'undefined' ? this.boundaryLinks : this.config.boundaryLinks;
            this.directionLinks = typeof this.directionLinks !== 'undefined' ? this.directionLinks : this.config.directionLinks;
            this.pageBtnClass = typeof this.pageBtnClass !== 'undefined' ? this.pageBtnClass : this.config.pageBtnClass; // base class

            this.itemsPerPage = typeof this.itemsPerPage !== 'undefined' ? this.itemsPerPage : this.config.itemsPerPage;
            this.totalPages = this.calculateTotalPages(); // this class

            this.pages = this.getPages(this.page, this.totalPages);
            this.inited = true;
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.page = value;
            this.pages = this.getPages(this.page, this.totalPages);
          }
          /**
           * @param {?} key
           * @return {?}
           */

        }, {
          key: "getText",
          value: function getText(key) {
            // tslint:disable-next-line:no-any
            return (
              /** @type {?} */
              this["".concat(key, "Text")] ||
              /** @type {?} */
              this.config["".concat(key, "Text")]
            );
          }
          /**
           * @return {?}
           */

        }, {
          key: "noPrevious",
          value: function noPrevious() {
            return this.page === 1;
          }
          /**
           * @return {?}
           */

        }, {
          key: "noNext",
          value: function noNext() {
            return this.page === this.totalPages;
          }
          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * @param {?} page
           * @param {?=} event
           * @return {?}
           */

        }, {
          key: "selectPage",
          value: function selectPage(page, event) {
            if (event) {
              event.preventDefault();
            }

            if (!this.disabled) {
              if (event && event.target) {
                // tslint:disable-next-line:no-any

                /** @type {?} */
                var target = event.target;
                target.blur();
              }

              this.writeValue(page);
              this.onChange(this.page);
            }
          } // Create page object used in template

          /**
           * @protected
           * @param {?} num
           * @param {?} text
           * @param {?} active
           * @return {?}
           */

        }, {
          key: "makePage",
          value: function makePage(num, text, active) {
            return {
              text: text,
              number: num,
              active: active
            };
          }
          /**
           * @protected
           * @param {?} currentPage
           * @param {?} totalPages
           * @return {?}
           */

        }, {
          key: "getPages",
          value: function getPages(currentPage, totalPages) {
            /** @type {?} */
            var pages = []; // Default page limits

            /** @type {?} */

            var startPage = 1;
            /** @type {?} */

            var endPage = totalPages;
            /** @type {?} */

            var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages; // recompute if maxSize

            if (isMaxSized) {
              if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1; // Adjust if limit is exceeded

                if (endPage > totalPages) {
                  endPage = totalPages;
                  startPage = endPage - this.maxSize + 1;
                }
              } else {
                // Visible pages are paginated with maxSize
                startPage = (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1; // Adjust last page if limit is exceeded

                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
              }
            } // Add page number links


            for (var num = startPage; num <= endPage; num++) {
              /** @type {?} */
              var page = this.makePage(num, num.toString(), num === currentPage);
              pages.push(page);
            } // Add links to move between page sets


            if (isMaxSized && !this.rotate) {
              if (startPage > 1) {
                /** @type {?} */
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
              }

              if (endPage < totalPages) {
                /** @type {?} */
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
              }
            }

            return pages;
          } // base class

          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "calculateTotalPages",
          value: function calculateTotalPages() {
            /** @type {?} */
            var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
            return Math.max(totalPages || 0, 1);
          }
        }]);

        return PagerComponent;
      }();

      PagerComponent.ɵfac = function PagerComponent_Factory(t) {
        return new (t || PagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      PagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PagerComponent,
        selectors: [["pager"]],
        inputs: {
          itemsPerPage: "itemsPerPage",
          totalItems: "totalItems",
          maxSize: "maxSize",
          rotate: "rotate",
          boundaryLinks: "boundaryLinks",
          directionLinks: "directionLinks",
          pageBtnClass: "pageBtnClass",
          align: "align",
          firstText: "firstText",
          previousText: "previousText",
          nextText: "nextText",
          lastText: "lastText",
          disabled: "disabled"
        },
        outputs: {
          numPages: "numPages",
          pageChanged: "pageChanged"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PAGER_CONTROL_VALUE_ACCESSOR])],
        decls: 7,
        vars: 24,
        consts: [[1, "pager"], [3, "ngClass"], ["href", "", 3, "click"]],
        template: function PagerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerComponent_Template_a_click_2_listener($event) {
              return ctx.selectPage(ctx.page - 1, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerComponent_Template_a_click_5_listener($event) {
              return ctx.selectPage(ctx.page + 1, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pageBtnClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.noPrevious())("previous", ctx.align);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c0, ctx.align, ctx.align));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getText("previous"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pageBtnClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.noNext())("next", ctx.align);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c1, ctx.align, ctx.align));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getText("next"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        encapsulation: 2
      });
      /** @nocollapse */

      PagerComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: PaginationConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      PagerComponent.propDecorators = {
        align: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        boundaryLinks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        directionLinks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        firstText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        previousText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nextText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lastText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rotate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageBtnClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        numPages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        pageChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        itemsPerPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        totalItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pager',
            template: "<ul class=\"pager\">\n  <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\"\n      [ngClass]=\"{'pull-left': align, 'float-left': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a>\n  </li>\n  <li [class.disabled]=\"noNext()\" [class.next]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a>\n  </li>\n</ul>\n",
            providers: [PAGER_CONTROL_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: PaginationConfig
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          numPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          pageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          itemsPerPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          totalItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          rotate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          boundaryLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageBtnClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          firstText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          previousText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nextText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          lastText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function PageChangedEvent() {}

      if (false) {}
      /** @type {?} */


      var PAGINATION_CONTROL_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],

        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return PaginationComponent;
        }),
        multi: true
      };

      var PaginationComponent = /*#__PURE__*/function () {
        /**
         * @param {?} elementRef
         * @param {?} paginationConfig
         * @param {?} changeDetection
         */
        function PaginationComponent(elementRef, paginationConfig, changeDetection) {
          _classCallCheck(this, PaginationComponent);

          this.elementRef = elementRef;
          this.changeDetection = changeDetection;
          /**
           * fired when total pages count changes, $event:number equals to total pages count
           */

          this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * fired when page was changed, $event:{page, itemsPerPage} equals to object
           * with current page index and number of items per page
           */

          this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onChange = Function.prototype;
          this.onTouched = Function.prototype;
          this.inited = false;
          this._page = 1;
          this.elementRef = elementRef;

          if (!this.config) {
            this.configureOptions(paginationConfig.main);
          }
        }
        /**
         * maximum number of items per page. If value less than 1 will display all items on one page
         * @return {?}
         */


        _createClass(PaginationComponent, [{
          key: "itemsPerPage",
          get: function get() {
            return this._itemsPerPage;
          }
          /**
           * @param {?} v
           * @return {?}
           */
          ,
          set: function set(v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
          }
          /**
           * total number of items in all pages
           * @return {?}
           */

        }, {
          key: "totalItems",
          get: function get() {
            return this._totalItems;
          }
          /**
           * @param {?} v
           * @return {?}
           */
          ,
          set: function set(v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
          }
          /**
           * @return {?}
           */

        }, {
          key: "totalPages",
          get: function get() {
            return this._totalPages;
          }
          /**
           * @param {?} v
           * @return {?}
           */
          ,
          set: function set(v) {
            this._totalPages = v;
            this.numPages.emit(v);

            if (this.inited) {
              this.selectPage(this.page);
            }
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "page",
          get:
          /**
           * @return {?}
           */
          function get() {
            return this._page;
          }
          /**
           * @param {?} config
           * @return {?}
           */
          ,
          set: function set(value) {
            /** @type {?} */
            var _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();

            if (_previous === this._page || typeof _previous === 'undefined') {
              return;
            }

            this.pageChanged.emit({
              page: this._page,
              itemsPerPage: this.itemsPerPage
            });
          }
        }, {
          key: "configureOptions",
          value: function configureOptions(config) {
            this.config = Object.assign({}, config);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (typeof window !== 'undefined') {
              this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
            } // watch for maxSize


            this.maxSize = typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
            this.rotate = typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
            this.boundaryLinks = typeof this.boundaryLinks !== 'undefined' ? this.boundaryLinks : this.config.boundaryLinks;
            this.directionLinks = typeof this.directionLinks !== 'undefined' ? this.directionLinks : this.config.directionLinks;
            this.pageBtnClass = typeof this.pageBtnClass !== 'undefined' ? this.pageBtnClass : this.config.pageBtnClass; // base class

            this.itemsPerPage = typeof this.itemsPerPage !== 'undefined' ? this.itemsPerPage : this.config.itemsPerPage;
            this.totalPages = this.calculateTotalPages(); // this class

            this.pages = this.getPages(this.page, this.totalPages);
            this.inited = true;
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.page = value;
            this.pages = this.getPages(this.page, this.totalPages);
          }
          /**
           * @param {?} key
           * @return {?}
           */

        }, {
          key: "getText",
          value: function getText(key) {
            // tslint:disable-next-line:no-any
            return (
              /** @type {?} */
              this["".concat(key, "Text")] ||
              /** @type {?} */
              this.config["".concat(key, "Text")]
            );
          }
          /**
           * @return {?}
           */

        }, {
          key: "noPrevious",
          value: function noPrevious() {
            return this.page === 1;
          }
          /**
           * @return {?}
           */

        }, {
          key: "noNext",
          value: function noNext() {
            return this.page === this.totalPages;
          }
          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * @param {?} page
           * @param {?=} event
           * @return {?}
           */

        }, {
          key: "selectPage",
          value: function selectPage(page, event) {
            if (event) {
              event.preventDefault();
            }

            if (!this.disabled) {
              if (event && event.target) {
                // tslint:disable-next-line:no-any

                /** @type {?} */
                var target = event.target;
                target.blur();
              }

              this.writeValue(page);
              this.onChange(this.page);
            }
          } // Create page object used in template

          /**
           * @protected
           * @param {?} num
           * @param {?} text
           * @param {?} active
           * @return {?}
           */

        }, {
          key: "makePage",
          value: function makePage(num, text, active) {
            return {
              text: text,
              number: num,
              active: active
            };
          }
          /**
           * @protected
           * @param {?} currentPage
           * @param {?} totalPages
           * @return {?}
           */

        }, {
          key: "getPages",
          value: function getPages(currentPage, totalPages) {
            /** @type {?} */
            var pages = []; // Default page limits

            /** @type {?} */

            var startPage = 1;
            /** @type {?} */

            var endPage = totalPages;
            /** @type {?} */

            var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages; // recompute if maxSize

            if (isMaxSized) {
              if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1; // Adjust if limit is exceeded

                if (endPage > totalPages) {
                  endPage = totalPages;
                  startPage = endPage - this.maxSize + 1;
                }
              } else {
                // Visible pages are paginated with maxSize
                startPage = (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1; // Adjust last page if limit is exceeded

                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
              }
            } // Add page number links


            for (var num = startPage; num <= endPage; num++) {
              /** @type {?} */
              var page = this.makePage(num, num.toString(), num === currentPage);
              pages.push(page);
            } // Add links to move between page sets


            if (isMaxSized && !this.rotate) {
              if (startPage > 1) {
                /** @type {?} */
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
              }

              if (endPage < totalPages) {
                /** @type {?} */
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
              }
            }

            return pages;
          } // base class

          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "calculateTotalPages",
          value: function calculateTotalPages() {
            /** @type {?} */
            var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
            return Math.max(totalPages || 0, 1);
          }
        }]);

        return PaginationComponent;
      }();

      PaginationComponent.ɵfac = function PaginationComponent_Factory(t) {
        return new (t || PaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PaginationComponent,
        selectors: [["pagination"]],
        inputs: {
          itemsPerPage: "itemsPerPage",
          totalItems: "totalItems",
          maxSize: "maxSize",
          rotate: "rotate",
          boundaryLinks: "boundaryLinks",
          directionLinks: "directionLinks",
          pageBtnClass: "pageBtnClass",
          align: "align",
          firstText: "firstText",
          previousText: "previousText",
          nextText: "nextText",
          lastText: "lastText",
          disabled: "disabled",
          customPageTemplate: "customPageTemplate",
          customNextTemplate: "customNextTemplate",
          customPreviousTemplate: "customPreviousTemplate",
          customFirstTemplate: "customFirstTemplate",
          customLastTemplate: "customLastTemplate"
        },
        outputs: {
          numPages: "numPages",
          pageChanged: "pageChanged"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PAGINATION_CONTROL_VALUE_ACCESSOR])],
        decls: 16,
        vars: 6,
        consts: [[1, "pagination", 3, "ngClass"], ["class", "pagination-first page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-prev page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-page page-item", 3, "active", "disabled", 4, "ngFor", "ngForOf"], ["class", "pagination-next page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-last page-item", 3, "disabled", 4, "ngIf"], ["defaultPageTemplate", ""], ["defaultNextTemplate", ""], ["defaultPreviousTemplate", ""], ["defaultFirstTemplate", ""], ["defaultLastTemplate", ""], [1, "pagination-first", "page-item"], ["href", "", 1, "page-link", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "pagination-prev", "page-item"], [1, "pagination-page", "page-item"], [1, "pagination-next", "page-item"], [1, "pagination-last", "page-item"]],
        template: function PaginationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationComponent_li_1_Template, 3, 7, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationComponent_li_2_Template, 3, 7, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaginationComponent_li_3_Template, 3, 10, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationComponent_li_4_Template, 3, 7, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationComponent_li_5_Template, 3, 7, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PaginationComponent_ng_template_6_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PaginationComponent_ng_template_8_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PaginationComponent_ng_template_10_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PaginationComponent_ng_template_12_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PaginationComponent_ng_template_14_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classMap);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
        encapsulation: 2
      });
      /** @nocollapse */

      PaginationComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: PaginationConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      PaginationComponent.propDecorators = {
        align: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        boundaryLinks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        directionLinks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        firstText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        previousText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nextText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lastText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rotate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageBtnClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customPageTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customNextTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customPreviousTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customFirstTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customLastTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        numPages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        pageChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        itemsPerPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        totalItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pagination',
            template: "<ul class=\"pagination\" [ngClass]=\"classMap\">\n  <li class=\"pagination-first page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noPrevious() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customFirstTemplate || defaultFirstTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-prev page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noPrevious() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customPreviousTemplate || defaultPreviousTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li *ngFor=\"let pg of pages\"\n      [class.active]=\"pg.active\"\n      [class.disabled]=\"disabled && !pg.active\"\n      class=\"pagination-page page-item\">\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customPageTemplate || defaultPageTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: disabled, $implicit: pg, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-next page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noNext() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customNextTemplate || defaultNextTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-last page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noNext() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customLastTemplate || defaultLastTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n</ul>\n\n<ng-template #defaultPageTemplate let-page>{{ page.text }}</ng-template>\n\n<ng-template #defaultNextTemplate>{{ getText('next') }}</ng-template>\n\n<ng-template #defaultPreviousTemplate>{{ getText('previous') }}</ng-template>\n\n<ng-template #defaultFirstTemplate>{{ getText('first') }}</ng-template>\n\n<ng-template #defaultLastTemplate>{{ getText('last') }}</ng-template>\n",
            providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: PaginationConfig
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          numPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          pageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          itemsPerPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          totalItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          rotate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          boundaryLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageBtnClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          firstText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          previousText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nextText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          lastText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customPageTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customNextTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customPreviousTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customFirstTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customLastTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var PaginationModule = /*#__PURE__*/function () {
        function PaginationModule() {
          _classCallCheck(this, PaginationModule);
        }

        _createClass(PaginationModule, null, [{
          key: "forRoot",
          value:
          /**
           * @return {?}
           */
          function forRoot() {
            return {
              ngModule: PaginationModule,
              providers: []
            };
          }
        }]);

        return PaginationModule;
      }();

      PaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PaginationModule
      });
      PaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PaginationModule_Factory(t) {
          return new (t || PaginationModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaginationModule, {
          declarations: function declarations() {
            return [PagerComponent, PaginationComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
          },
          exports: function exports() {
            return [PagerComponent, PaginationComponent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [PagerComponent, PaginationComponent],
            exports: [PagerComponent, PaginationComponent]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-bootstrap-pagination.js.map

      /***/

    },

    /***/
    "77bT":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/readyfordelivery.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\n      <h2>Customers</h2>\n      <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"myModal.show()\">\n        New\n      </button>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <ag-grid-angular #agGrid style=\"width: 100%; height: 500px\" id=\"myGrid\" class=\"ag-theme-alpine\"\n            [columnDefs]=\"columnDefs\" [rowData]=\"rowData\" [rowSelection]=\"rowSelection\"\n            (gridReady)=\"onGridReady($event)\" (selectionChanged)=\"onSelectionChanged($event)\" animateRows=\"true\">\n          </ag-grid-angular>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add New Customer</h4>\n          <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form [formGroup]=\"customerForm\" (ngSubmit)=\"FormSubmit()\">\n            <div class=\"form-group\">\n              <label for=\"name\">Name of Bride</label>\n              <input type=\"text\" class=\"form-control\" id=\"NameOfBride\" name=\"NameOfBride\" formControlName=\"NameOfBride\"\n                placeholder=\"Enter bride's name\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Name of Father</label>\n              <input type=\"text\" class=\"form-control\" id=\"NameOfFather\" name=\"NameOfFather\"\n                formControlName=\"NameOfFather\" placeholder=\"Enter father's name\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Name of Mother</label>\n              <input type=\"text\" class=\"form-control\" id=\"NameOfMother\" name=\"NameOfMother\"\n                formControlName=\"NameOfMother\" placeholder=\"Enter mother's name\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"email\">Marriage date</label>\n              <input type=\"date\" class=\"form-control\" id=\"MarriageDate\" name=\"MarriageDate\"\n                formControlName=\"MarriageDate\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"group\">Marriage month</label>\n              <select class=\"form-control\" id=\"MarriageMonth\" required ngModel name=\"MarriageMonth\" formControlName=\"MarriageMonth\">\n                <option value=\"\" disabled selected hidden>Choose...</option>\n                <option *ngFor=\"let item of Months\" value=\"{{ item.id }}\">\n                  {{ item.Name }}\n                </option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"group\">Agent</label>\n              <select class=\"form-control\" id=\"tele_caller_contact\" required ngModel name=\"tele_caller_contact\" formControlName=\"tele_caller_contact\">\n                <option value=\"\" disabled selected hidden>Choose...</option>\n                <option *ngFor=\"let item of agents\" value=\"{{ item.id }}\">\n                  {{ item.Name }}\n                </option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">House Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"HouseName\" name=\"HouseName\"\n                formControlName=\"HouseName\" placeholder=\"Enter House Name\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Landmark</label>\n              <input type=\"text\" class=\"form-control\" id=\"Landmark\" name=\"Landmark\"\n                formControlName=\"Landmark\" placeholder=\"Enter Landmark\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"locality\">Name of locality</label>\n              <!-- <input type=\"text\" class=\"form-control\" id=\"locality\" name=\"locality\" formControlName=\"locality\"\n                placeholder=\"Enter locality\" /> -->\n                <select class=\"form-control\" id=\"locality\" required ngModel name=\"locality\" formControlName=\"locality\">\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option *ngFor=\"let item of localities\" value=\"{{ item.id }}\">\n                    {{ item.Name }}\n                  </option>\n                </select>\n            </div>\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n              Close\n            </button>\n            <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !customerForm.valid\">\n              <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n              Save changes\n            </button>\n          </form>\n        </div>\n      </div>\n      <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n  </div>\n  <!-- /.modal -->\n</div>";
      /***/
    },

    /***/
    "978R":
    /*!******************************************************************************!*\
      !*** ./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js ***!
      \******************************************************************************/

    /*! exports provided: TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule */

    /***/
    function R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipConfig", function () {
        return TooltipConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function () {
        return TooltipContainerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipDirective", function () {
        return TooltipDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipModule", function () {
        return TooltipModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/utils */
      "hpHm");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/component-loader */
      "z/SZ");
      /* harmony import */


      var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/positioning */
      "2uy1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Default values provider for tooltip
       */


      var _c0 = ["*"];

      var TooltipConfig = function TooltipConfig() {
        _classCallCheck(this, TooltipConfig);

        /**
         * sets disable adaptive position
         */
        this.adaptivePosition = true;
        /**
         * tooltip placement, supported positions: 'top', 'bottom', 'left', 'right'
         */

        this.placement = 'top';
        /**
         * array of event names which triggers tooltip opening
         */

        this.triggers = 'hover focus';
        /**
         * delay before showing the tooltip
         */

        this.delay = 0;
      };

      TooltipConfig.ɵfac = function TooltipConfig_Factory(t) {
        return new (t || TooltipConfig)();
      };
      /** @nocollapse */


      TooltipConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function TooltipConfig_Factory() {
          return new TooltipConfig();
        },
        token: TooltipConfig,
        providedIn: "root"
      });

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var TooltipContainerComponent = /*#__PURE__*/function () {
        /**
         * @param {?} config
         */
        function TooltipContainerComponent(config) {
          _classCallCheck(this, TooltipContainerComponent);

          Object.assign(this, config);
        }
        /**
         * @return {?}
         */


        _createClass(TooltipContainerComponent, [{
          key: "isBs3",
          get: function get() {
            return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.classMap = {
              "in": false,
              fade: false
            };
            this.classMap[this.placement] = true;
            this.classMap["tooltip-".concat(this.placement)] = true;
            this.classMap["in"] = true;

            if (this.animation) {
              this.classMap.fade = true;
            }

            if (this.containerClass) {
              this.classMap[this.containerClass] = true;
            }
          }
        }]);

        return TooltipContainerComponent;
      }();

      TooltipContainerComponent.ɵfac = function TooltipContainerComponent_Factory(t) {
        return new (t || TooltipContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TooltipConfig));
      };

      TooltipContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TooltipContainerComponent,
        selectors: [["bs-tooltip-container"]],
        hostAttrs: ["role", "tooltip"],
        hostVars: 7,
        hostBindings: function TooltipContainerComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("tooltip in tooltip-" + ctx.placement + " " + "bs-tooltip-" + ctx.placement + " " + ctx.placement + " " + ctx.containerClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", !ctx.isBs3)("bs3", ctx.isBs3);
          }
        },
        ngContentSelectors: _c0,
        decls: 3,
        vars: 0,
        consts: [[1, "tooltip-arrow", "arrow"], [1, "tooltip-inner"]],
        template: function TooltipContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".tooltip[_nghost-%COMP%] {\n      display: block;\n      pointer-events: none;\n    }\n    .bs3.tooltip.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -2px;\n    }\n    .bs3.tooltip.bottom[_nghost-%COMP%] {\n      margin-top: 0px;\n    }\n    .bs3.bs-tooltip-left[_nghost-%COMP%], .bs3.bs-tooltip-right[_nghost-%COMP%]{\n      margin: 0px;\n    }\n    .bs3.bs-tooltip-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-tooltip-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      margin: .3rem 0;\n    }"],
        changeDetection: 0
      });
      /** @nocollapse */

      TooltipContainerComponent.ctorParameters = function () {
        return [{
          type: TooltipConfig
        }];
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var id = 0;

      var TooltipDirective = /*#__PURE__*/function () {
        /**
         * @param {?} _viewContainerRef
         * @param {?} cis
         * @param {?} config
         * @param {?} _elementRef
         * @param {?} _renderer
         * @param {?} _positionService
         */
        function TooltipDirective(_viewContainerRef, cis, config, _elementRef, _renderer, _positionService) {
          _classCallCheck(this, TooltipDirective);

          this._elementRef = _elementRef;
          this._renderer = _renderer;
          this._positionService = _positionService;
          this.tooltipId = id++;
          /**
           * Fired when tooltip content changes
           */

          /* tslint:disable-next-line:no-any */

          this.tooltipChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Css class for tooltip container
           */

          this.containerClass = '';
          /**
           * @deprecated - removed, will be added to configuration
           */

          this.tooltipAnimation = true;
          /**
           * @deprecated
           */

          this.tooltipFadeDuration = 150;
          /**
           * @deprecated
           */

          this.tooltipStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this._tooltip = cis.createLoader(this._elementRef, _viewContainerRef, this._renderer).provide({
            provide: TooltipConfig,
            useValue: config
          });
          Object.assign(this, config);
          this.onShown = this._tooltip.onShown;
          this.onHidden = this._tooltip.onHidden;
        }
        /**
         * Returns whether or not the tooltip is currently being shown
         * @return {?}
         */


        _createClass(TooltipDirective, [{
          key: "isOpen",
          get: function get() {
            return this._tooltip.isShown;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            if (value) {
              this.show();
            } else {
              this.hide();
            }
          }
          /**
           * @deprecated - please use `tooltip` instead
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "htmlContent",
          set: function set(value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipHtml was deprecated, please use `tooltip` instead');
            this.tooltip = value;
          }
          /**
           * @deprecated - please use `placement` instead
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "_placement",
          set: function set(value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipPlacement was deprecated, please use `placement` instead');
            this.placement = value;
          }
          /**
           * @deprecated - please use `isOpen` instead
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "_isOpen",
          get:
          /**
           * @return {?}
           */
          function get() {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipIsOpen was deprecated, please use `isOpen` instead');
            return this.isOpen;
          }
          /**
           * @deprecated - please use `isDisabled` instead
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipIsOpen was deprecated, please use `isOpen` instead');
            this.isOpen = value;
          }
        }, {
          key: "_enable",
          get:
          /**
           * @return {?}
           */
          function get() {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipEnable was deprecated, please use `isDisabled` instead');
            return this.isDisabled;
          }
          /**
           * @deprecated - please use `container="body"` instead
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipEnable was deprecated, please use `isDisabled` instead');
            this.isDisabled = !value;
          }
        }, {
          key: "_appendToBody",
          get:
          /**
           * @return {?}
           */
          function get() {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            return this.container === 'body';
          }
          /**
           * @deprecated - will replaced with customClass
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            this.container = value ? 'body' : this.container;
          }
        }, {
          key: "_popupClass",
          set: function set(value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipClass deprecated');
          }
          /**
           * @deprecated - removed
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "_tooltipContext",
          set: function set(value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipContext deprecated');
          }
          /**
           * @deprecated
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "_tooltipPopupDelay",
          set: function set(value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipPopupDelay is deprecated, use `delay` instead');
            this.delay = value;
          }
          /**
           * @deprecated -  please use `triggers` instead
           * @return {?}
           */

        }, {
          key: "_tooltipTrigger",
          get: function get() {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipTrigger was deprecated, please use `triggers` instead');
            return this.triggers;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipTrigger was deprecated, please use `triggers` instead');
            this.triggers = (value || '').toString();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this._tooltip.listen({
              triggers: this.triggers,
              show:
              /**
              * @return {?}
              */
              function show() {
                return _this3.show();
              }
            });
            /* tslint:disable-next-line:no-any */


            this.tooltipChange.subscribe(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              if (!value) {
                _this3._tooltip.hide();
              }
            });
            this.onShown.subscribe(
            /**
            * @return {?}
            */
            function () {
              _this3.setAriaDescribedBy();
            });
            this.onHidden.subscribe(
            /**
            * @return {?}
            */
            function () {
              _this3.setAriaDescribedBy();
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "setAriaDescribedBy",
          value: function setAriaDescribedBy() {
            this._ariaDescribedby = this.isOpen ? "tooltip-".concat(this.tooltipId) : null;

            if (this._ariaDescribedby) {
              this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ariaDescribedby);
            } else {
              this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            }
          }
          /**
           * Toggles an element’s tooltip. This is considered a “manual” triggering of
           * the tooltip.
           * @return {?}
           */

        }, {
          key: "toggle",
          value: function toggle() {
            if (this.isOpen) {
              return this.hide();
            }

            this.show();
          }
          /**
           * Opens an element’s tooltip. This is considered a “manual” triggering of
           * the tooltip.
           * @return {?}
           */

        }, {
          key: "show",
          value: function show() {
            var _this4 = this;

            this._positionService.setOptions({
              modifiers: {
                flip: {
                  enabled: this.adaptivePosition
                },
                preventOverflow: {
                  enabled: this.adaptivePosition
                }
              }
            });

            if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.tooltip) {
              return;
            }
            /** @type {?} */


            var showTooltip =
            /**
            * @return {?}
            */
            function showTooltip() {
              if (_this4._delayTimeoutId) {
                _this4._delayTimeoutId = undefined;
              }

              _this4._tooltip.attach(TooltipContainerComponent).to(_this4.container).position({
                attachment: _this4.placement
              }).show({
                content: _this4.tooltip,
                placement: _this4.placement,
                containerClass: _this4.containerClass,
                id: "tooltip-".concat(_this4.tooltipId)
              });
            };
            /** @type {?} */


            var cancelDelayedTooltipShowing =
            /**
            * @return {?}
            */
            function cancelDelayedTooltipShowing() {
              if (_this4._tooltipCancelShowFn) {
                _this4._tooltipCancelShowFn();
              }
            };

            if (this.delay) {
              if (this._delaySubscription) {
                this._delaySubscription.unsubscribe();
              }

              this._delaySubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(this.delay).subscribe(
              /**
              * @return {?}
              */
              function () {
                showTooltip();
                cancelDelayedTooltipShowing();
              });

              if (this.triggers) {
                Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["parseTriggers"])(this.triggers).forEach(
                /**
                * @param {?} trigger
                * @return {?}
                */
                function (trigger) {
                  _this4._tooltipCancelShowFn = _this4._renderer.listen(_this4._elementRef.nativeElement, trigger.close,
                  /**
                  * @return {?}
                  */
                  function () {
                    _this4._delaySubscription.unsubscribe();

                    cancelDelayedTooltipShowing();
                  });
                });
              }
            } else {
              showTooltip();
            }
          }
          /**
           * Closes an element’s tooltip. This is considered a “manual” triggering of
           * the tooltip.
           * @return {?}
           */

        }, {
          key: "hide",
          value: function hide() {
            var _this5 = this;

            if (this._delayTimeoutId) {
              clearTimeout(this._delayTimeoutId);
              this._delayTimeoutId = undefined;
            }

            if (!this._tooltip.isShown) {
              return;
            }

            this._tooltip.instance.classMap["in"] = false;
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this5._tooltip.hide();
            }, this.tooltipFadeDuration);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._tooltip.dispose();

            this.tooltipChange.unsubscribe();

            if (this._delaySubscription) {
              this._delaySubscription.unsubscribe();
            }

            this.onShown.unsubscribe();
            this.onHidden.unsubscribe();
          }
        }]);

        return TooltipDirective;
      }();

      TooltipDirective.ɵfac = function TooltipDirective_Factory(t) {
        return new (t || TooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TooltipConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__["PositioningService"]));
      };

      TooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: TooltipDirective,
        selectors: [["", "tooltip", ""], ["", "tooltipHtml", ""]],
        inputs: {
          containerClass: "containerClass",
          tooltipAnimation: "tooltipAnimation",
          tooltipFadeDuration: "tooltipFadeDuration",
          isOpen: "isOpen",
          htmlContent: ["tooltipHtml", "htmlContent"],
          tooltip: "tooltip",
          _placement: ["tooltipPlacement", "_placement"],
          placement: "placement",
          _isOpen: ["tooltipIsOpen", "_isOpen"],
          _enable: ["tooltipEnable", "_enable"],
          isDisabled: "isDisabled",
          _appendToBody: ["tooltipAppendToBody", "_appendToBody"],
          container: "container",
          _popupClass: ["tooltipClass", "_popupClass"],
          _tooltipContext: ["tooltipContext", "_tooltipContext"],
          _tooltipPopupDelay: ["tooltipPopupDelay", "_tooltipPopupDelay"],
          delay: "delay",
          _tooltipTrigger: ["tooltipTrigger", "_tooltipTrigger"],
          triggers: "triggers",
          adaptivePosition: "adaptivePosition"
        },
        outputs: {
          tooltipChange: "tooltipChange",
          tooltipStateChanged: "tooltipStateChanged",
          onShown: "onShown",
          onHidden: "onHidden"
        },
        exportAs: ["bs-tooltip"]
      });
      /** @nocollapse */

      TooltipDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"]
        }, {
          type: TooltipConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__["PositioningService"]
        }];
      };

      TooltipDirective.propDecorators = {
        adaptivePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltip: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        placement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        triggers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        container: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        containerClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        delay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onShown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onHidden: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        htmlContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipHtml']
        }],
        _placement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipPlacement']
        }],
        _isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipIsOpen']
        }],
        _enable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipEnable']
        }],
        _appendToBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipAppendToBody']
        }],
        tooltipAnimation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _popupClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipClass']
        }],
        _tooltipContext: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipContext']
        }],
        _tooltipPopupDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipPopupDelay']
        }],
        tooltipFadeDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _tooltipTrigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipTrigger']
        }],
        tooltipStateChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["OnChange"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Object)], TooltipDirective.prototype, "tooltip", void 0);

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'bs-tooltip-container',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            // tslint:disable-next-line
            host: {
              '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
              '[class.show]': '!isBs3',
              '[class.bs3]': 'isBs3',
              '[attr.id]': 'this.id',
              role: 'tooltip'
            },
            template: "\n    <div class=\"tooltip-arrow arrow\"></div>\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    ",
            styles: ["\n    :host.tooltip {\n      display: block;\n      pointer-events: none;\n    }\n    :host.bs3.tooltip.top>.arrow {\n      margin-left: -2px;\n    }\n    :host.bs3.tooltip.bottom {\n      margin-top: 0px;\n    }\n    :host.bs3.bs-tooltip-left, :host.bs3.bs-tooltip-right{\n      margin: 0px;\n    }\n    :host.bs3.bs-tooltip-right .arrow, :host.bs3.bs-tooltip-left .arrow {\n      margin: .3rem 0;\n    }\n  "]
          }]
        }], function () {
          return [{
            type: TooltipConfig
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[tooltip], [tooltipHtml]',
            exportAs: 'bs-tooltip'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"]
          }, {
            type: TooltipConfig
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__["PositioningService"]
          }];
        }, {
          tooltipChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          tooltipAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          tooltipFadeDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          tooltipStateChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onShown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          htmlContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipHtml']
          }],
          tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          _placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipPlacement']
          }],
          placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          _isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipIsOpen']
          }],
          _enable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipEnable']
          }],
          isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          _appendToBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipAppendToBody']
          }],
          container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          _popupClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipClass']
          }],
          _tooltipContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipContext']
          }],
          _tooltipPopupDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipPopupDelay']
          }],
          delay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          _tooltipTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipTrigger']
          }],
          triggers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          adaptivePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var TooltipModule = /*#__PURE__*/function () {
        function TooltipModule() {
          _classCallCheck(this, TooltipModule);
        }

        _createClass(TooltipModule, null, [{
          key: "forRoot",
          value:
          /**
           * @return {?}
           */
          function forRoot() {
            return {
              ngModule: TooltipModule,
              providers: [ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__["PositioningService"]]
            };
          }
        }]);

        return TooltipModule;
      }();

      TooltipModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TooltipModule
      });
      TooltipModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TooltipModule_Factory(t) {
          return new (t || TooltipModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TooltipModule, {
          declarations: function declarations() {
            return [TooltipDirective, TooltipContainerComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]];
          },
          exports: function exports() {
            return [TooltipDirective];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
            declarations: [TooltipDirective, TooltipContainerComponent],
            exports: [TooltipDirective],
            entryComponents: [TooltipContainerComponent]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-bootstrap-tooltip.js.map

      /***/

    },

    /***/
    "Cvcy":
    /*!*******************************************!*\
      !*** ./src/app/views/base/base.module.ts ***!
      \*******************************************/

    /*! exports provided: BaseModule */

    /***/
    function Cvcy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseModule", function () {
        return BaseModule;
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


      var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-responsive-carousel */
      "T6vt");
      /* harmony import */


      var _readyfordelivery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./readyfordelivery.component */
      "/5UO");
      /* harmony import */


      var _allorders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./allorders.component */
      "D6iP");
      /* harmony import */


      var _neworders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./neworders.component */
      "EZE2");
      /* harmony import */


      var _agentdetail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./agentdetail.component */
      "xYI8");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/collapse */
      "St1U");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-bootstrap/popover */
      "KOzp");
      /* harmony import */


      var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap/progressbar */
      "38Bd");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var _base_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./base-routing.module */
      "cgWR");
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ag-grid-angular */
      "YFAK");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _customerdetail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./customerdetail.component */
      "YeRg"); // Angular
      // Forms Component
      // Tabs Component
      // Carousel Component
      // import { CarouselModule } from 'ngx-bootstrap/carousel';
      // Collapse Component
      // Dropdowns Component
      // Pagination Component
      // Popover Component
      // Progress Component
      // Tooltip Component
      // Components Routing


      var BaseModule = function BaseModule() {
        _classCallCheck(this, BaseModule);
      };

      BaseModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_17__["AgGridModule"].withComponents([]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _base_routing_module__WEBPACK_IMPORTED_MODULE_16__["BaseRoutingModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__["BsDropdownModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsModule"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__["IvyCarouselModule"], // CarouselModule.forRoot(),
        ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_10__["CollapseModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_12__["PaginationModule"].forRoot(), ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_13__["PopoverModule"].forRoot(), ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_14__["ProgressbarModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_15__["TooltipModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_18__["ModalModule"].forRoot()],
        declarations: [_readyfordelivery_component__WEBPACK_IMPORTED_MODULE_5__["CustomersComponent"], _allorders_component__WEBPACK_IMPORTED_MODULE_6__["AllOrdersComponent"], _neworders_component__WEBPACK_IMPORTED_MODULE_7__["AgentsComponent"], _agentdetail_component__WEBPACK_IMPORTED_MODULE_8__["AgentDetailComponent"], _customerdetail_component__WEBPACK_IMPORTED_MODULE_19__["CustomerDetailComponent"]]
      })], BaseModule);
      /***/
    },

    /***/
    "D6iP":
    /*!***************************************************!*\
      !*** ./src/app/views/base/allorders.component.ts ***!
      \***************************************************/

    /*! exports provided: AllOrdersComponent */

    /***/
    function D6iP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllOrdersComponent", function () {
        return AllOrdersComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_allorders_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./allorders.component.html */
      "r75j");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../data.service */
      "R7Hv");

      var AllOrdersComponent = /*#__PURE__*/function () {
        function AllOrdersComponent(dataservice) {
          _classCallCheck(this, AllOrdersComponent);

          this.dataservice = dataservice;
          this.loading = true;
          this.orders = [];
        }

        _createClass(AllOrdersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getOrders();
          }
        }, {
          key: "getOrders",
          value: function getOrders() {
            var _this6 = this;

            this.loading = true;
            this.dataservice.getOrders().subscribe(function (result) {
              _this6.orders = result.body;
              console.log("getOrders", _this6.orders);
              _this6.loading = false;
            });
          }
        }]);

        return AllOrdersComponent;
      }();

      AllOrdersComponent.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }];
      };

      AllOrdersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_allorders_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])], AllOrdersComponent);
      /***/
    },

    /***/
    "EZE2":
    /*!***************************************************!*\
      !*** ./src/app/views/base/neworders.component.ts ***!
      \***************************************************/

    /*! exports provided: AgentsComponent */

    /***/
    function EZE2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentsComponent", function () {
        return AgentsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_neworders_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./neworders.component.html */
      "KqUc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../data.service */
      "R7Hv");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../constants/columnMetadata */
      "7nfi");
      /* harmony import */


      var _utils_StatusRenderer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../utils/StatusRenderer */
      "MYrn");

      var AgentsComponent = /*#__PURE__*/function () {
        function AgentsComponent(dataservice, router, fb) {
          _classCallCheck(this, AgentsComponent);

          this.dataservice = dataservice;
          this.router = router;
          this.fb = fb;
          this.agentForm = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            phone1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            phone2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            phone3: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            group: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
          });
          this.loading = true;
          this.btnLoading = false;
          this.orders = {};
          this.columnDefs = [];
          this.rowData = [];
          this.groups = [];
          this.frameworkComponents = {
            statusRenderer: _utils_StatusRenderer__WEBPACK_IMPORTED_MODULE_8__["ActionRenderer"]
          };
          this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["AgentsColumn"]);
          this.rowSelection = "single";
        }

        _createClass(AgentsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getLists();
          }
        }, {
          key: "getLists",
          value: function getLists() {
            var _this7 = this;

            this.loading = true;
            this.dataservice.getAgents().valueChanges.subscribe(function (result) {
              console.log("getAgents", result.data.teleCallerContacts);
              _this7.rowData = result.data.teleCallerContacts;
            });
            this.dataservice.getGroups().valueChanges.subscribe(function (result) {
              console.log("getGroups", result.data.groups);
              _this7.groups = result.data.groups;
            });
          }
        }, {
          key: "onGridReady",
          value: function onGridReady(params) {
            this.gridApi = params.api;
            this.gridColumnApi = params.columnApi;
          }
        }, {
          key: "onSelectionChanged",
          value: function onSelectionChanged(event) {
            var selectedRows = this.gridApi.getSelectedRows();
            console.log(selectedRows);
            this.router.navigate(["/order/agent_details", selectedRows[0].id], {
              state: {
                data: selectedRows
              }
            });
          }
        }, {
          key: "FormSubmit",
          value: function FormSubmit() {
            var _this8 = this;

            var resp = {};
            console.log(this.agentForm.value);
            this.dataservice.AddAgent(this.agentForm.value).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.createTeleCallerContact) {
                alert("Agent added successfully!");

                _this8.getLists();

                _this8.myModal.hide();
              } else {
                alert("Failed. Please check the fields!");
              }
            });
          }
        }]);

        return AgentsComponent;
      }();

      AgentsComponent.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }];
      };

      AgentsComponent.propDecorators = {
        myModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["myModal"]
        }]
      };
      AgentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_neworders_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], AgentsComponent);
      /***/
    },

    /***/
    "KOzp":
    /*!******************************************************************************!*\
      !*** ./node_modules/ngx-bootstrap/popover/fesm2015/ngx-bootstrap-popover.js ***!
      \******************************************************************************/

    /*! exports provided: PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule */

    /***/
    function KOzp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverConfig", function () {
        return PopoverConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverContainerComponent", function () {
        return PopoverContainerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverDirective", function () {
        return PopoverDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverModule", function () {
        return PopoverModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/component-loader */
      "z/SZ");
      /* harmony import */


      var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-bootstrap/utils */
      "hpHm");
      /* harmony import */


      var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/positioning */
      "2uy1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Configuration service for the Popover directive.
       * You can inject this service, typically in your root component, and customize
       * the values of its properties in order to provide default values for all the
       * popovers used in the application.
       */


      function PopoverContainerComponent_h3_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
        }
      }

      var _c0 = ["*"];

      var PopoverConfig = function PopoverConfig() {
        _classCallCheck(this, PopoverConfig);

        /**
         * sets disable adaptive position
         */
        this.adaptivePosition = true;
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
         */

        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */

        this.triggers = 'click';
        this.outsideClick = false;
        /**
         * delay before showing the tooltip
         */

        this.delay = 0;
      };

      PopoverConfig.ɵfac = function PopoverConfig_Factory(t) {
        return new (t || PopoverConfig)();
      };
      /** @nocollapse */


      PopoverConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function PopoverConfig_Factory() {
          return new PopoverConfig();
        },
        token: PopoverConfig,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var PopoverContainerComponent = /*#__PURE__*/function () {
        /**
         * @param {?} config
         */
        function PopoverContainerComponent(config) {
          _classCallCheck(this, PopoverContainerComponent);

          Object.assign(this, config);
        }
        /**
         * @return {?}
         */


        _createClass(PopoverContainerComponent, [{
          key: "isBs3",
          get: function get() {
            return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["isBs3"])();
          }
        }]);

        return PopoverContainerComponent;
      }();

      PopoverContainerComponent.ɵfac = function PopoverContainerComponent_Factory(t) {
        return new (t || PopoverContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PopoverConfig));
      };

      PopoverContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PopoverContainerComponent,
        selectors: [["popover-container"]],
        hostAttrs: ["role", "tooltip", 2, "display", "block"],
        hostVars: 7,
        hostBindings: function PopoverContainerComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.popoverId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("popover in popover-" + ctx.placement + " " + "bs-popover-" + ctx.placement + " " + ctx.placement + " " + ctx.containerClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", !ctx.isBs3)("bs3", ctx.isBs3);
          }
        },
        inputs: {
          placement: "placement",
          title: "title"
        },
        ngContentSelectors: _c0,
        decls: 4,
        vars: 1,
        consts: [[1, "popover-arrow", "arrow"], ["class", "popover-title popover-header", 4, "ngIf"], [1, "popover-content", "popover-body"], [1, "popover-title", "popover-header"]],
        template: function PopoverContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopoverContainerComponent_h3_1_Template, 2, 1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: [".bs3.popover-top[_nghost-%COMP%] {\n      margin-bottom: 10px;\n    }\n    .bs3.popover.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -2px;\n    }\n    .bs3.popover.top[_nghost-%COMP%] {\n      margin-bottom: 10px;\n    }\n    .popover.bottom[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -4px;\n    }\n    .bs3.bs-popover-left[_nghost-%COMP%] {\n      margin-right: .5rem;\n    }\n    .bs3.bs-popover-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-popover-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%]{\n      margin: .3rem 0;\n    }"],
        changeDetection: 0
      });
      /** @nocollapse */

      PopoverContainerComponent.ctorParameters = function () {
        return [{
          type: PopoverConfig
        }];
      };

      PopoverContainerComponent.propDecorators = {
        placement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'popover-container',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            // tslint:disable-next-line
            host: {
              '[attr.id]': 'popoverId',
              '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
              '[class.show]': '!isBs3',
              '[class.bs3]': 'isBs3',
              role: 'tooltip',
              style: 'display:block;'
            },
            template: "<div class=\"popover-arrow arrow\"></div>\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\n<div class=\"popover-content popover-body\">\n  <ng-content></ng-content>\n</div>\n",
            styles: ["\n    :host.bs3.popover-top {\n      margin-bottom: 10px;\n    }\n    :host.bs3.popover.top>.arrow {\n      margin-left: -2px;\n    }\n    :host.bs3.popover.top {\n      margin-bottom: 10px;\n    }\n    :host.popover.bottom>.arrow {\n      margin-left: -4px;\n    }\n    :host.bs3.bs-popover-left {\n      margin-right: .5rem;\n    }\n    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{\n      margin: .3rem 0;\n    }\n    "]
          }]
        }], function () {
          return [{
            type: PopoverConfig
          }];
        }, {
          placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var id = 0;
      /**
       * A lightweight, extensible directive for fancy popover creation.
       */

      var PopoverDirective = /*#__PURE__*/function () {
        /**
         * @param {?} _config
         * @param {?} _elementRef
         * @param {?} _renderer
         * @param {?} _viewContainerRef
         * @param {?} cis
         * @param {?} _positionService
         */
        function PopoverDirective(_config, _elementRef, _renderer, _viewContainerRef, cis, _positionService) {
          _classCallCheck(this, PopoverDirective);

          this._elementRef = _elementRef;
          this._renderer = _renderer;
          this._positionService = _positionService;
          /**
           * unique id popover - use for aria-describedby
           */

          this.popoverId = id++;
          /**
           * Close popover on outside click
           */

          this.outsideClick = false;
          /**
           * Css class for popover container
           */

          this.containerClass = '';
          this._isInited = false;
          this._popover = cis.createLoader(_elementRef, _viewContainerRef, _renderer).provide({
            provide: PopoverConfig,
            useValue: _config
          });
          Object.assign(this, _config);
          this.onShown = this._popover.onShown;
          this.onHidden = this._popover.onHidden; // fix: no focus on button on Mac OS #1795

          if (typeof window !== 'undefined') {
            _elementRef.nativeElement.addEventListener('click',
            /**
            * @return {?}
            */
            function () {
              try {
                _elementRef.nativeElement.focus();
              } catch (err) {
                return;
              }
            });
          }
        }
        /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */


        _createClass(PopoverDirective, [{
          key: "isOpen",
          get: function get() {
            return this._popover.isShown;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            if (value) {
              this.show();
            } else {
              this.hide();
            }
          }
          /**
           * Set attribute aria-describedBy for element directive and
           * set id for the popover
           * @return {?}
           */

        }, {
          key: "setAriaDescribedBy",
          value: function setAriaDescribedBy() {
            this._ariaDescribedby = this.isOpen ? "ngx-popover-".concat(this.popoverId) : null;

            if (this._ariaDescribedby) {
              this._popover.instance.popoverId = this._ariaDescribedby;

              this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ariaDescribedby);
            } else {
              this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            }
          }
          /**
           * Opens an element’s popover. This is considered a “manual” triggering of
           * the popover.
           * @return {?}
           */

        }, {
          key: "show",
          value: function show() {
            var _this9 = this;

            if (this._popover.isShown || !this.popover || this._delayTimeoutId) {
              return;
            }

            this._positionService.setOptions({
              modifiers: {
                flip: {
                  enabled: this.adaptivePosition
                },
                preventOverflow: {
                  enabled: this.adaptivePosition
                }
              }
            });
            /** @type {?} */


            var showPopover =
            /**
            * @return {?}
            */
            function showPopover() {
              if (_this9._delayTimeoutId) {
                _this9._delayTimeoutId = undefined;
              }

              _this9._popover.attach(PopoverContainerComponent).to(_this9.container).position({
                attachment: _this9.placement
              }).show({
                content: _this9.popover,
                context: _this9.popoverContext,
                placement: _this9.placement,
                title: _this9.popoverTitle,
                containerClass: _this9.containerClass
              });

              if (!_this9.adaptivePosition) {
                _this9._positionService.calcPosition();

                _this9._positionService.deletePositionElement(_this9._popover._componentRef.location);
              }

              _this9.isOpen = true;

              _this9.setAriaDescribedBy();
            };
            /** @type {?} */


            var cancelDelayedTooltipShowing =
            /**
            * @return {?}
            */
            function cancelDelayedTooltipShowing() {
              if (_this9._popoverCancelShowFn) {
                _this9._popoverCancelShowFn();
              }
            };

            if (this.delay) {
              /** @type {?} */
              var _timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(this.delay).subscribe(
              /**
              * @return {?}
              */
              function () {
                showPopover();
                cancelDelayedTooltipShowing();
              });

              if (this.triggers) {
                Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["parseTriggers"])(this.triggers).forEach(
                /**
                * @param {?} trigger
                * @return {?}
                */
                function (trigger) {
                  _this9._popoverCancelShowFn = _this9._renderer.listen(_this9._elementRef.nativeElement, trigger.close,
                  /**
                  * @return {?}
                  */
                  function () {
                    _timer.unsubscribe();

                    cancelDelayedTooltipShowing();
                  });
                });
              }
            } else {
              showPopover();
            }
          }
          /**
           * Closes an element’s popover. This is considered a “manual” triggering of
           * the popover.
           * @return {?}
           */

        }, {
          key: "hide",
          value: function hide() {
            if (this._delayTimeoutId) {
              clearTimeout(this._delayTimeoutId);
              this._delayTimeoutId = undefined;
            }

            if (this.isOpen) {
              this._popover.hide();

              this.setAriaDescribedBy();
              this.isOpen = false;
            }
          }
          /**
           * Toggles an element’s popover. This is considered a “manual” triggering of
           * the popover.
           * @return {?}
           */

        }, {
          key: "toggle",
          value: function toggle() {
            if (this.isOpen) {
              return this.hide();
            }

            this.show();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            // fix: seems there are an issue with `routerLinkActive`
            // which result in duplicated call ngOnInit without call to ngOnDestroy
            // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
            if (this._isInited) {
              return;
            }

            this._isInited = true;

            this._popover.listen({
              triggers: this.triggers,
              outsideClick: this.outsideClick,
              show:
              /**
              * @return {?}
              */
              function show() {
                return _this10.show();
              },
              hide:
              /**
              * @return {?}
              */
              function hide() {
                return _this10.hide();
              }
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._popover.dispose();
          }
        }]);

        return PopoverDirective;
      }();

      PopoverDirective.ɵfac = function PopoverDirective_Factory(t) {
        return new (t || PopoverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PopoverConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]));
      };

      PopoverDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: PopoverDirective,
        selectors: [["", "popover", ""]],
        inputs: {
          outsideClick: "outsideClick",
          containerClass: "containerClass",
          isOpen: "isOpen",
          adaptivePosition: "adaptivePosition",
          popover: "popover",
          popoverContext: "popoverContext",
          popoverTitle: "popoverTitle",
          placement: "placement",
          triggers: "triggers",
          container: "container",
          delay: "delay"
        },
        outputs: {
          onShown: "onShown",
          onHidden: "onHidden"
        },
        exportAs: ["bs-popover"]
      });
      /** @nocollapse */

      PopoverDirective.ctorParameters = function () {
        return [{
          type: PopoverConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"]
        }, {
          type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]
        }];
      };

      PopoverDirective.propDecorators = {
        adaptivePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        popover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        popoverContext: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        popoverTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        placement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        outsideClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        triggers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        container: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        containerClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        delay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onShown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onHidden: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[popover]',
            exportAs: 'bs-popover'
          }]
        }], function () {
          return [{
            type: PopoverConfig
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"]
          }, {
            type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]
          }];
        }, {
          outsideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onShown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          adaptivePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          popover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          popoverContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          popoverTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          triggers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          delay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var PopoverModule = /*#__PURE__*/function () {
        function PopoverModule() {
          _classCallCheck(this, PopoverModule);
        }

        _createClass(PopoverModule, null, [{
          key: "forRoot",
          value:
          /**
           * @return {?}
           */
          function forRoot() {
            return {
              ngModule: PopoverModule,
              providers: [ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
            };
          }
        }]);

        return PopoverModule;
      }();

      PopoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PopoverModule
      });
      PopoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PopoverModule_Factory(t) {
          return new (t || PopoverModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopoverModule, {
          declarations: function declarations() {
            return [PopoverDirective, PopoverContainerComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]];
          },
          exports: function exports() {
            return [PopoverDirective];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
            declarations: [PopoverDirective, PopoverContainerComponent],
            exports: [PopoverDirective],
            entryComponents: [PopoverContainerComponent]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-bootstrap-popover.js.map

      /***/

    },

    /***/
    "KqUc":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/neworders.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function KqUc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div\n      class=\"card-header\"\n      style=\"display: flex; justify-content: space-between\"\n    >\n      <h2>Agents</h2>\n      <button\n        type=\"button\"\n        class=\"btn btn-primary\"\n        data-toggle=\"modal\"\n        (click)=\"myModal.show()\"\n      >\n        New\n      </button>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <ag-grid-angular\n            #agGrid\n            style=\"width: 100%; height: 500px\"\n            id=\"myGrid\"\n            class=\"ag-theme-alpine\"\n            [columnDefs]=\"columnDefs\"\n            [rowData]=\"rowData\"\n            [frameworkComponents]=\"frameworkComponents\"\n            [rowSelection]=\"rowSelection\"\n            (gridReady)=\"onGridReady($event)\"\n            (selectionChanged)=\"onSelectionChanged($event)\"\n            animateRows=\"true\"\n          >\n          </ag-grid-angular>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div\n    bsModal\n    #myModal=\"bs-modal\"\n    class=\"modal fade\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n    aria-labelledby=\"myModalLabel\"\n    aria-hidden=\"true\"\n  >\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add New Agent</h4>\n          <button\n            type=\"button\"\n            class=\"close\"\n            (click)=\"myModal.hide()\"\n            aria-label=\"Close\"\n          >\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form [formGroup]=\"agentForm\" (ngSubmit)=\"FormSubmit()\">\n            <div class=\"form-group\">\n              <label for=\"name\">Name</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"name\"\n                name=\"name\"\n                formControlName=\"name\"\n                placeholder=\"Enter agent name\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"email\">E-mail</label>\n              <input\n                type=\"email\"\n                class=\"form-control\"\n                id=\"email\"\n                name=\"email\"\n                formControlName=\"email\"\n                placeholder=\"Enter agent email\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"street\">Phone 1</label>\n              <input\n                type=\"number\"\n                class=\"form-control\"\n                id=\"phone1\"\n                name=\"phone1\"\n                formControlName=\"phone1\"\n                placeholder=\"Enter Phone 1\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"phone2\">Phone 2</label>\n              <input\n                type=\"number\"\n                class=\"form-control\"\n                id=\"phone2\"\n                name=\"phone2\"\n                formControlName=\"phone2\"\n                placeholder=\"Enter Phone 2\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"phone3\">Phone 3</label>\n              <input\n                type=\"number\"\n                class=\"form-control\"\n                id=\"phone3\"\n                name=\"phone3\"\n                formControlName=\"phone3\"\n                placeholder=\"Enter Phone 3\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"group\">Group</label>\n              <select\n                class=\"form-control\"\n                id=\"group\"\n                required\n                ngModel\n                name=\"group\"\n                formControlName=\"group\"\n              >\n                <option value=\"\" disabled selected hidden>Choose...</option>\n                <option *ngFor=\"let item of groups\" value=\"{{ item.id }}\">\n                  {{ item.Name }}\n                </option>\n              </select>\n            </div>\n            <button\n              type=\"button\"\n              class=\"btn btn-secondary\"\n              data-dismiss=\"modal\"\n            >\n              Close\n            </button>\n            <button\n              type=\"submit\"\n              class=\"btn btn-primary ml-2\"\n              [disabled]=\"btnLoading || !agentForm.valid\"\n            >\n              <span\n                *ngIf=\"btnLoading\"\n                class=\"spinner-border spinner-border-sm\"\n                role=\"status\"\n                aria-hidden=\"true\"\n              ></span>\n              Save changes\n            </button>\n          </form>\n        </div>\n      </div>\n      <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n  </div>\n  <!-- /.modal -->\n</div>\n";
      /***/
    },

    /***/
    "MYrn":
    /*!*****************************************!*\
      !*** ./src/app/utils/StatusRenderer.ts ***!
      \*****************************************/

    /*! exports provided: ActionRenderer */

    /***/
    function MYrn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionRenderer", function () {
        return ActionRenderer;
      }); // import edit from '../../images/edit.svg';
      // import deleteIcon from '../../images/deleteIcon.svg';


      function ActionRenderer() {
        // constructor(props) {
        //   super(props);
        //   this.onDelete = this.onDelete.bind(this);
        // }
        // onEdit = () => {
        //   this.props.context.componentParent.handleEdit(this.props.node.data);
        // };
        // onDelete = () => {
        //   this.props.context.componentParent.handleDelete(this.props.node.data);
        // };
        function onRowClicked(event) {
          console.log('Row selected methord.....!!', event);
          console.log('Row selected methord (Obj).....!!', event.data); // this.props.history.push({ pathname: this.props.onRowClickPath, state:{id :event.data.id} })
        } // render() {


        return "\n      <div>\n            <a>\n              <img src='assets/edit.svg' (click)=\"onRowClicked()\" style=\"width: 20px; cursor: pointer\" alt=\"delete\" />\n            </a>\n            <a>\n              <img src='assets/deleteIcon.svg' style=\"width: 20px; cursor: pointer\" alt=\"delete\" />\n            </a>\n      </div>\n    "; // }
      }
      /***/

    },

    /***/
    "SmBP":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/customerdetail.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SmBP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n    <div bsModal #deleteModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n        aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body text-center\">\r\n                    Do you want to delete this agent?\r\n                </div>\r\n                <div class=\"modal-footer justify-content-around\">\r\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">\r\n                        No! Cancel.\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteAgent()\">\r\n                        Yes! Delete.\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n            <h2>Customer Details</h2>\r\n            <span>\r\n                <!-- <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"myModal.show()\">\r\n                Edit\r\n            </button> -->\r\n                <!-- <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" (click)=\"deleteModal.show()\">\r\n                Delete\r\n            </button> -->\r\n            </span>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <table class=\"table table-striped\">\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>ID</td>\r\n                                <td>{{details?.id}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Name Of Father</td>\r\n                                <td>{{details?.NameOfBride}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Name Of Father</td>\r\n                                <td>{{details?.NameOfFather}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Name Of Mother</td>\r\n                                <td>{{ details?.NameOfMother }}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Marriage Date</td>\r\n                                <td>{{ details?.MarriageDate }}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Marriage Month</td>\r\n                                <td>{{ details?.MarriageMonth }}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Agent</td>\r\n                                <td>\r\n                                    <span class=\"badge badge-warning\">{{ details.tele_caller_contact?.Name }}</span>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>House Name</td>\r\n                                <td>{{ details.Address?.HouseName }}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Landmark</td>\r\n                                <td>{{ details.Address?.Landmark }}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Locality</td>\r\n                                <td>{{ details.Address?.locality?.Name }}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <div class=\"card\" *ngFor=\"let item of details.TelecallerRemarks\">\r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">{{item.CallHistory.event_date_time}}</h5>\r\n                            <p class=\"card-text\">{{item.RemarksText}}</p>\r\n                            <span\r\n                                class=\"badge badge-primary\">{{item.CallHistory.users_permissions_user.username}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"commentModal.show()\">\r\n                        Add Comment\r\n                    </button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n            aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <h4 class=\"modal-title\">Edit Agent</h4>\r\n                        <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <form [formGroup]=\"agentForm\" (ngSubmit)=\"FormSubmit()\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"name\">Name</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" formControlName=\"name\"\r\n                                    placeholder=\"Enter agent name\" />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"email\">E-mail</label>\r\n                                <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" formControlName=\"email\"\r\n                                    placeholder=\"Enter agent email\" />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"street\">Phone 1</label>\r\n                                <input type=\"number\" class=\"form-control\" id=\"phone1\" name=\"phone1\"\r\n                                    formControlName=\"phone1\" placeholder=\"Enter Phone 1\" />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"phone2\">Phone 2</label>\r\n                                <input type=\"number\" class=\"form-control\" id=\"phone2\" name=\"phone2\"\r\n                                    formControlName=\"phone2\" placeholder=\"Enter Phone 2\" />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"phone3\">Phone 3</label>\r\n                                <input type=\"number\" class=\"form-control\" id=\"phone3\" name=\"phone3\"\r\n                                    formControlName=\"phone3\" placeholder=\"Enter Phone 3\" />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"group\">Group</label>\r\n                                <select class=\"form-control\" id=\"group\" required ngModel name=\"group\"\r\n                                    formControlName=\"group\">\r\n                                    <option value=\"\" disabled selected hidden>Choose...</option>\r\n                                    <option *ngFor=\"let item of groups\" value=\"{{ item.id }}\">\r\n                                        {{ item.Name }}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\r\n                                Close\r\n                            </button>\r\n                            <button type=\"submit\" class=\"btn btn-primary ml-2\"\r\n                                [disabled]=\"btnLoading || !agentForm.valid\">\r\n                                <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\"\r\n                                    aria-hidden=\"true\"></span>\r\n                                Save changes\r\n                            </button>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n                <!-- /.modal-content -->\r\n            </div>\r\n            <!-- /.modal-dialog -->\r\n        </div>\r\n        <div bsModal #commentModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\n            aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <h4 class=\"modal-title\">Add Comment</h4>\r\n                        <button type=\"button\" class=\"close\" (click)=\"commentModal.hide()\" aria-label=\"Close\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <form [formGroup]=\"commentForm\" (ngSubmit)=\"CommentSubmit()\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"name\">Remarks</label>\r\n                                <textarea class=\"form-control\" maxlength=\"250\" id=\"RemarksText\" name=\"RemarksText\"\r\n                                    formControlName=\"RemarksText\" placeholder=\"Enter remarks\"></textarea>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"email\">Date</label>\r\n                                <input type=\"datetime-local\" class=\"form-control\" id=\"event_date_time\"\r\n                                    name=\"event_date_time\" formControlName=\"event_date_time\" />\r\n                            </div>\r\n                            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\r\n                                Close\r\n                            </button>\r\n                            <button type=\"submit\" class=\"btn btn-primary ml-2\"\r\n                                [disabled]=\"btnLoading || !commentForm.valid\">\r\n                                <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\"\r\n                                    aria-hidden=\"true\"></span>\r\n                                Save changes\r\n                            </button>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n                <!-- /.modal-content -->\r\n            </div>\r\n            <!-- /.modal-dialog -->\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "St1U":
    /*!********************************************************************************!*\
      !*** ./node_modules/ngx-bootstrap/collapse/fesm2015/ngx-bootstrap-collapse.js ***!
      \********************************************************************************/

    /*! exports provided: CollapseDirective, CollapseModule */

    /***/
    function St1U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollapseDirective", function () {
        return CollapseDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollapseModule", function () {
        return CollapseModule;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "GS7A");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var COLLAPSE_ANIMATION_TIMING = '400ms cubic-bezier(0.4,0.0,0.2,1)';
      /** @type {?} */

      var expandAnimation = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: 0,
        visibility: 'hidden'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(COLLAPSE_ANIMATION_TIMING, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: '*',
        visibility: 'visible'
      }))];
      /** @type {?} */

      var collapseAnimation = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: '*',
        visibility: 'visible'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(COLLAPSE_ANIMATION_TIMING, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: 0,
        visibility: 'hidden'
      }))];
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var CollapseDirective = /*#__PURE__*/function () {
        /**
         * @param {?} _el
         * @param {?} _renderer
         * @param {?} _builder
         */
        function CollapseDirective(_el, _renderer, _builder) {
          _classCallCheck(this, CollapseDirective);

          this._el = _el;
          this._renderer = _renderer;
          /**
           * This event fires as soon as content collapses
           */

          this.collapsed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event fires when collapsing is started
           */

          this.collapses = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event fires as soon as content becomes visible
           */

          this.expanded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event fires when expansion is started
           */

          this.expands = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // shown

          this.isExpanded = true;
          this.collapseNewValue = true; // hidden

          this.isCollapsed = false; // stale state

          this.isCollapse = true; // animation state

          this.isCollapsing = false;
          /**
           * turn on/off animation
           */

          this.isAnimated = false;
          this._display = 'block';
          this._stylesLoaded = false;
          this._COLLAPSE_ACTION_NAME = 'collapse';
          this._EXPAND_ACTION_NAME = 'expand';
          this._factoryCollapseAnimation = _builder.build(collapseAnimation);
          this._factoryExpandAnimation = _builder.build(expandAnimation);
        }
        /**
         * @param {?} value
         * @return {?}
         */


        _createClass(CollapseDirective, [{
          key: "display",
          set: function set(value) {
            if (!this.isAnimated) {
              this._renderer.setStyle(this._el.nativeElement, 'display', value);

              return;
            }

            this._display = value;

            if (value === 'none') {
              this.hide();
              return;
            }

            this.show();
          }
          /**
           * A flag indicating visibility of content (shown or hidden)
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "collapse",
          get:
          /**
           * @return {?}
           */
          function get() {
            return this.isExpanded;
          }
          /**
           * @return {?}
           */
          ,
          set: function set(value) {
            this.collapseNewValue = value;

            if (!this._player || this._isAnimationDone) {
              this.isExpanded = value;
              this.toggle();
            }
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            this._stylesLoaded = true;

            if (!this._player || !this._isAnimationDone) {
              return;
            }

            this._player.reset();

            this._renderer.setStyle(this._el.nativeElement, 'height', '*');
          }
          /**
           * allows to manually toggle content visibility
           * @return {?}
           */

        }, {
          key: "toggle",
          value: function toggle() {
            if (this.isExpanded) {
              this.hide();
            } else {
              this.show();
            }
          }
          /**
           * allows to manually hide content
           * @return {?}
           */

        }, {
          key: "hide",
          value: function hide() {
            var _this11 = this;

            this.isCollapsing = true;
            this.isExpanded = false;
            this.isCollapsed = true;
            this.isCollapsing = false;
            this.collapses.emit(this);
            this._isAnimationDone = false;
            this.animationRun(this.isAnimated, this._COLLAPSE_ACTION_NAME)(
            /**
            * @return {?}
            */
            function () {
              _this11._isAnimationDone = true;

              if (_this11.collapseNewValue !== _this11.isCollapsed && _this11.isAnimated) {
                _this11.show();

                return;
              }

              _this11.collapsed.emit(_this11);

              _this11._renderer.setStyle(_this11._el.nativeElement, 'display', 'none');
            });
          }
          /**
           * allows to manually show collapsed content
           * @return {?}
           */

        }, {
          key: "show",
          value: function show() {
            var _this12 = this;

            this._renderer.setStyle(this._el.nativeElement, 'display', this._display);

            this.isCollapsing = true;
            this.isExpanded = true;
            this.isCollapsed = false;
            this.isCollapsing = false;
            this.expands.emit(this);
            this._isAnimationDone = false;
            this.animationRun(this.isAnimated, this._EXPAND_ACTION_NAME)(
            /**
            * @return {?}
            */
            function () {
              _this12._isAnimationDone = true;

              if (_this12.collapseNewValue !== _this12.isCollapsed && _this12.isAnimated) {
                _this12.hide();

                return;
              }

              _this12.expanded.emit(_this12);

              _this12._renderer.removeStyle(_this12._el.nativeElement, 'overflow');
            });
          }
          /**
           * @param {?} isAnimated
           * @param {?} action
           * @return {?}
           */

        }, {
          key: "animationRun",
          value: function animationRun(isAnimated, action) {
            var _this13 = this;

            if (!isAnimated || !this._stylesLoaded) {
              return (
                /**
                * @param {?} callback
                * @return {?}
                */
                function (callback) {
                  return callback();
                }
              );
            }

            this._renderer.setStyle(this._el.nativeElement, 'overflow', 'hidden');

            this._renderer.addClass(this._el.nativeElement, 'collapse');
            /** @type {?} */


            var factoryAnimation = action === this._EXPAND_ACTION_NAME ? this._factoryExpandAnimation : this._factoryCollapseAnimation;

            if (this._player) {
              this._player.destroy();
            }

            this._player = factoryAnimation.create(this._el.nativeElement);

            this._player.play();

            return (
              /**
              * @param {?} callback
              * @return {?}
              */
              function (callback) {
                return _this13._player.onDone(callback);
              }
            );
          }
        }]);

        return CollapseDirective;
      }();

      CollapseDirective.ɵfac = function CollapseDirective_Factory(t) {
        return new (t || CollapseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_0__["AnimationBuilder"]));
      };

      CollapseDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CollapseDirective,
        selectors: [["", "collapse", ""]],
        hostVars: 10,
        hostBindings: function CollapseDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx.isExpanded)("aria-hidden", ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("collapse", ctx.isCollapse)("in", ctx.isExpanded)("show", ctx.isExpanded)("collapsing", ctx.isCollapsing);
          }
        },
        inputs: {
          isAnimated: "isAnimated",
          display: "display",
          collapse: "collapse"
        },
        outputs: {
          collapsed: "collapsed",
          collapses: "collapses",
          expanded: "expanded",
          expands: "expands"
        },
        exportAs: ["bs-collapse"]
      });
      /** @nocollapse */

      CollapseDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AnimationBuilder"]
        }];
      };

      CollapseDirective.propDecorators = {
        collapsed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        collapses: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        expanded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        expands: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        isExpanded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.in']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.show']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['attr.aria-expanded']
        }],
        isCollapsed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['attr.aria-hidden']
        }],
        isCollapse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.collapse']
        }],
        isCollapsing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.collapsing']
        }],
        display: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        isAnimated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        collapse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CollapseDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[collapse]',
            exportAs: 'bs-collapse',
            host: {
              '[class.collapse]': 'true'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
          }, {
            type: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AnimationBuilder"]
          }];
        }, {
          collapsed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          collapses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          expands: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          isExpanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.in']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.show']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.aria-expanded']
          }],
          isCollapsed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.aria-hidden']
          }],
          isCollapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.collapse']
          }],
          isCollapsing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.collapsing']
          }],
          isAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          display: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          collapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var CollapseModule = /*#__PURE__*/function () {
        function CollapseModule() {
          _classCallCheck(this, CollapseModule);
        }

        _createClass(CollapseModule, null, [{
          key: "forRoot",
          value:
          /**
           * @return {?}
           */
          function forRoot() {
            return {
              ngModule: CollapseModule,
              providers: []
            };
          }
        }]);

        return CollapseModule;
      }();

      CollapseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: CollapseModule
      });
      CollapseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function CollapseModule_Factory(t) {
          return new (t || CollapseModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CollapseModule, {
          declarations: [CollapseDirective],
          exports: [CollapseDirective]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CollapseModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [CollapseDirective],
            exports: [CollapseDirective]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-bootstrap-collapse.js.map

      /***/

    },

    /***/
    "T6vt":
    /*!******************************************************************************************!*\
      !*** ./node_modules/angular-responsive-carousel/fesm2015/angular-responsive-carousel.js ***!
      \******************************************************************************************/

    /*! exports provided: CarouselComponent, IvyCarouselModule */

    /***/
    function T6vt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
        return CarouselComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IvyCarouselModule", function () {
        return IvyCarouselModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function CarouselComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.counter);
        }
      }

      function CarouselComponent_ng_template_5_div_0_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
        }

        if (rf & 2) {
          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("object-fit", ctx_r8.objectFit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r8.getImage(i_r6)["image"]["path"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function CarouselComponent_ng_template_5_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ng_template_5_div_0_img_1_Template, 1, 3, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r7.getCellWidth() + "px")("border-radius", ctx_r7.borderRadius + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.getImage(i_r6) && ctx_r7.getImage(i_r6)["image"]);
        }
      }

      function CarouselComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_ng_template_5_div_0_Template, 2, 5, "div", 8);
        }

        if (rf & 2) {
          var i_r6 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r6 < ctx_r2.cellLimit);
        }
      }

      function CarouselComponent_div_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
        }

        if (rf & 2) {
          var i_r13 = ctx.index;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-dot-active", i_r13 === ctx_r11.activeDotIndex);
        }
      }

      function CarouselComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_div_6_div_1_Template, 1, 2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.dotsArr);
        }
      }

      function CarouselComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_7_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.prev();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_7_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-arrows-outside", ctx_r4.arrowsOutside)("carousel-dark-arrows", ctx_r4.arrowsTheme === "dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-arrow-disabled", ctx_r4.isPrevArrowDisabled());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-arrow-disabled", ctx_r4.isNextArrowDisabled());
        }
      }

      var _c0 = ["*"];

      var Touches = /*#__PURE__*/function () {
        function Touches(properties) {
          var _this14 = this;

          _classCallCheck(this, Touches);

          this.eventType = undefined;
          this.handlers = {};
          this.startX = 0;
          this.startY = 0;
          this.lastTap = 0;
          this.doubleTapMinTimeout = 300;
          this.tapMinTimeout = 200;
          this.touchstartTime = 0;
          this.i = 0;
          this.isMousedown = false;
          this._touchListeners = {
            "touchstart": "handleTouchstart",
            "touchmove": "handleTouchmove",
            "touchend": "handleTouchend"
          };
          this._mouseListeners = {
            "mousedown": "handleMousedown",
            "mousemove": "handleMousemove",
            "mouseup": "handleMouseup",
            "wheel": "handleWheel"
          };
          this._otherListeners = {
            "resize": "handleResize"
          };
          /*
           * Listeners
           */

          /* Touchstart */

          this.handleTouchstart = function (event) {
            _this14.elementPosition = _this14.getElementPosition();
            _this14.touchstartTime = new Date().getTime();

            if (_this14.eventType === undefined) {
              _this14.getTouchstartPosition(event);
            }

            _this14.runHandler("touchstart", event);
          };
          /* Touchmove */


          this.handleTouchmove = function (event) {
            var touches = event.touches; // Pan

            if (_this14.detectPan(touches)) {
              _this14.runHandler("pan", event);
            } // Pinch


            if (_this14.detectPinch(event)) {
              _this14.runHandler("pinch", event);
            } // Linear swipe


            switch (_this14.detectLinearSwipe(event)) {
              case "horizontal-swipe":
                event.swipeType = "horizontal-swipe";

                _this14.runHandler("horizontal-swipe", event);

                break;

              case "vertical-swipe":
                event.swipeType = "vertical-swipe";

                _this14.runHandler("vertical-swipe", event);

                break;
            } // Linear swipe


            if (_this14.detectLinearSwipe(event) || _this14.eventType === 'horizontal-swipe' || _this14.eventType === 'vertical-swipe') {
              _this14.handleLinearSwipe(event);
            }
          };
          /* Touchend */


          this.handleTouchend = function (event) {
            var touches = event.touches; // Double Tap

            if (_this14.detectDoubleTap()) {
              _this14.runHandler("double-tap", event);
            } // Tap


            _this14.detectTap();

            _this14.runHandler("touchend", event);

            _this14.eventType = 'touchend';

            if (touches && touches.length === 0) {
              _this14.eventType = undefined;
              _this14.i = 0;
            }
          };
          /* Mousedown */


          this.handleMousedown = function (event) {
            _this14.isMousedown = true;
            _this14.elementPosition = _this14.getElementPosition();
            _this14.touchstartTime = new Date().getTime();

            if (_this14.eventType === undefined) {
              _this14.getMousedownPosition(event);
            }

            _this14.runHandler("mousedown", event);
          };
          /* Mousemove */


          this.handleMousemove = function (event) {
            //event.preventDefault();
            if (!_this14.isMousedown) {
              return;
            } // Pan


            _this14.runHandler("pan", event); // Linear swipe


            switch (_this14.detectLinearSwipe(event)) {
              case "horizontal-swipe":
                event.swipeType = "horizontal-swipe";

                _this14.runHandler("horizontal-swipe", event);

                break;

              case "vertical-swipe":
                event.swipeType = "vertical-swipe";

                _this14.runHandler("vertical-swipe", event);

                break;
            } // Linear swipe


            if (_this14.detectLinearSwipe(event) || _this14.eventType === 'horizontal-swipe' || _this14.eventType === 'vertical-swipe') {
              _this14.handleLinearSwipe(event);
            }
          };
          /* Mouseup */


          this.handleMouseup = function (event) {
            // Tap
            _this14.detectTap();

            _this14.isMousedown = false;

            _this14.runHandler("mouseup", event);

            _this14.eventType = undefined;
            _this14.i = 0;
          };
          /* Wheel */


          this.handleWheel = function (event) {
            _this14.runHandler("wheel", event);
          };
          /* Resize */


          this.handleResize = function (event) {
            _this14.runHandler("resize", event);
          };

          this.properties = properties;
          this.element = this.properties.element;
          this.elementPosition = this.getElementPosition();
          this.toggleEventListeners('addEventListener');
        }

        _createClass(Touches, [{
          key: "touchListeners",
          get: function get() {
            return this.properties.touchListeners ? this.properties.touchListeners : this._touchListeners;
          }
        }, {
          key: "mouseListeners",
          get: function get() {
            return this.properties.mouseListeners ? this.properties.mouseListeners : this._mouseListeners;
          }
        }, {
          key: "otherListeners",
          get: function get() {
            return this.properties.otherListeners ? this.properties.otherListeners : this._otherListeners;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.toggleEventListeners('removeEventListener');
          }
        }, {
          key: "toggleEventListeners",
          value: function toggleEventListeners(action) {
            var listeners;

            if (this.properties.listeners === 'mouse and touch') {
              listeners = Object.assign(this.touchListeners, this.mouseListeners);
            } else {
              listeners = this.detectTouchScreen() ? this.touchListeners : this.mouseListeners;
            }

            if (this.properties.resize) {
              listeners = Object.assign(listeners, this.otherListeners);
            }

            for (var listener in listeners) {
              var handler = listeners[listener]; // Window

              if (listener === "resize") {
                if (action === 'addEventListener') {
                  window.addEventListener(listener, this[handler], false);
                }

                if (action === 'removeEventListener') {
                  window.removeEventListener(listener, this[handler], false);
                } // Document

              } else if (listener === 'mouseup' || listener === "mousemove") {
                if (action === 'addEventListener') {
                  document.addEventListener(listener, this[handler], false);
                }

                if (action === 'removeEventListener') {
                  document.removeEventListener(listener, this[handler], false);
                } // Element

              } else {
                if (action === 'addEventListener') {
                  this.element.addEventListener(listener, this[handler], false);
                }

                if (action === 'removeEventListener') {
                  this.element.removeEventListener(listener, this[handler], false);
                }
              }
            }
          }
        }, {
          key: "addEventListeners",
          value: function addEventListeners(listener, handler) {
            window.addEventListener(listener, this[handler], false);
          }
        }, {
          key: "removeEventListeners",
          value: function removeEventListeners(listener, handler) {
            window.removeEventListener(listener, this[handler], false);
          }
        }, {
          key: "handleLinearSwipe",
          value: function handleLinearSwipe(event) {
            //event.preventDefault();
            this.i++;

            if (this.i > 3) {
              this.eventType = this.getLinearSwipeType(event);
            }

            if (this.eventType === 'horizontal-swipe') {
              this.runHandler('horizontal-swipe', event);
            }

            if (this.eventType === 'vertical-swipe') {
              this.runHandler('vertical-swipe', event);
            }
          }
        }, {
          key: "runHandler",
          value: function runHandler(eventName, response) {
            if (this.handlers[eventName]) {
              this.handlers[eventName](response);
            }
          }
          /*
           * Detection
           */

        }, {
          key: "detectPan",
          value: function detectPan(touches) {
            return touches.length === 1 && !this.eventType || this.eventType === 'pan';
          }
        }, {
          key: "detectDoubleTap",
          value: function detectDoubleTap() {
            var _this15 = this;

            if (this.eventType != undefined) {
              return;
            }

            var currentTime = new Date().getTime();
            var tapLength = currentTime - this.lastTap;
            clearTimeout(this.doubleTapTimeout);

            if (tapLength < this.doubleTapMinTimeout && tapLength > 0) {
              return true;
            } else {
              this.doubleTapTimeout = setTimeout(function () {
                clearTimeout(_this15.doubleTapTimeout);
              }, this.doubleTapMinTimeout);
            }

            this.lastTap = currentTime;
          }
        }, {
          key: "detectTap",
          value: function detectTap() {
            if (this.eventType != undefined) {
              return;
            }

            var currentTime = new Date().getTime();
            var tapLength = currentTime - this.touchstartTime;

            if (tapLength > 0) {
              if (tapLength < this.tapMinTimeout) {
                this.runHandler("tap", event);
              } else {
                this.runHandler("longtap", event);
              }
            }
          }
        }, {
          key: "detectPinch",
          value: function detectPinch(event) {
            var touches = event.touches;
            return touches.length === 2 && this.eventType === undefined || this.eventType === 'pinch';
          }
        }, {
          key: "detectLinearSwipe",
          value: function detectLinearSwipe(event) {
            var touches = event.touches;

            if (touches) {
              if (touches.length === 1 && !this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
                return this.getLinearSwipeType(event);
              }
            } else {
              if (!this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
                return this.getLinearSwipeType(event);
              }
            }
          }
        }, {
          key: "getLinearSwipeType",
          value: function getLinearSwipeType(event) {
            if (this.eventType !== 'horizontal-swipe' && this.eventType !== 'vertical-swipe') {
              var movementX = Math.abs(this.moveLeft(0, event) - this.startX);
              var movementY = Math.abs(this.moveTop(0, event) - this.startY);

              if (movementY * 3 > movementX) {
                return 'vertical-swipe';
              } else {
                return 'horizontal-swipe';
              }
            } else {
              return this.eventType;
            }
          }
        }, {
          key: "getElementPosition",
          value: function getElementPosition() {
            return this.element.getBoundingClientRect();
          }
        }, {
          key: "getTouchstartPosition",
          value: function getTouchstartPosition(event) {
            this.startX = event.touches[0].clientX - this.elementPosition.left;
            this.startY = event.touches[0].clientY - this.elementPosition.top;
          }
        }, {
          key: "getMousedownPosition",
          value: function getMousedownPosition(event) {
            this.startX = event.clientX - this.elementPosition.left;
            this.startY = event.clientY - this.elementPosition.top;
          }
        }, {
          key: "moveLeft",
          value: function moveLeft(index, event) {
            var touches = event.touches;

            if (touches) {
              return touches[index].clientX - this.elementPosition.left;
            } else {
              return event.clientX - this.elementPosition.left;
            }
          }
        }, {
          key: "moveTop",
          value: function moveTop(index, event) {
            var touches = event.touches;

            if (touches) {
              return touches[index].clientY - this.elementPosition.top;
            } else {
              return event.clientY - this.elementPosition.top;
            }
          }
        }, {
          key: "detectTouchScreen",
          value: function detectTouchScreen() {
            var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

            var mq = function mq(query) {
              return window.matchMedia(query).matches;
            };

            if ('ontouchstart' in window) {
              return true;
            } // include the 'heartz' as a way to have a non matching MQ to help terminate the join
            // https://git.io/vznFH


            var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
            return mq(query);
          }
          /* Public properties and methods */

        }, {
          key: "on",
          value: function on(event, handler) {
            if (event) {
              this.handlers[event] = handler;
            }
          }
        }]);

        return Touches;
      }();

      var Carousel = /*#__PURE__*/function () {
        function Carousel(properties, utils, cells, container, slide) {
          var _this16 = this;

          _classCallCheck(this, Carousel);

          this.properties = properties;
          this.utils = utils;
          this.cells = cells;
          this.container = container;
          this.slide = slide;
          this.isContentImages = true;
          this.isLazyLoad = true;
          this.isContainerLocked = true;
          this.alignCells = "left";
          this.initialContainerPosition = 0;
          this.containerPullLimit = 100;

          this.handleTouchstart = function (event) {
            _this16.container.handleTouchstart();

            _this16.slide.handleTouchstart(event);
          };

          this.handleHorizontalSwipe = function (event) {
            _this16.container.handleHorizontalSwipe();
          };

          this.handleTouchend = function (event) {
            if (_this16.properties.freeScroll) {
              _this16.container.handleTouchend();
            } else {
              _this16.container.handleTouchend(true);

              _this16.slide.handleTouchend(event);
            }
          };

          this.isNextArrowDisabled = function () {
            return _this16.slide.isNextArrowDisabled();
          };

          this.isPrevArrowDisabled = function () {
            return _this16.slide.isPrevArrowDisabled();
          };

          this.init();
        }

        _createClass(Carousel, [{
          key: "cellLength",
          get: function get() {
            return this.cells.cellLength;
          }
        }, {
          key: "cellLengthInLightDOMMode",
          get: function get() {
            if (this.images) {
              var cellLength = this.visibleCellsCount + this.overflowCellsLimit * 2;

              if (cellLength > this.images.length) {
                cellLength = this.images.length;
              }

              return cellLength;
            } else {
              return this.cellLength;
            }
          }
        }, {
          key: "lastCellIndex",
          get: function get() {
            return this.images.length ? this.images.length - 1 : this.cells.cellLength - 1;
          }
        }, {
          key: "overflowCellsLimit",
          get: function get() {
            if (this.images && this.isImagesLessCellLimit) {
              return Math.floor((this.images.length - this.visibleCellsCount) / 2);
            } else {
              return this.properties.overflowCellsLimit;
            }
          }
        }, {
          key: "isImagesLessCellLimit",
          get: function get() {
            return this.properties.overflowCellsLimit * 2 + this.visibleCellsCount > this.images.length;
          }
        }, {
          key: "cellLimit",
          get: function get() {
            if (this.isLightDOM) {
              return this.visibleCellsCount + this.overflowCellsLimit * 2;
            } else {
              return this.properties.images.length;
            }
          }
        }, {
          key: "isLightDOM",
          get: function get() {
            return this.properties.lightDOM || this.properties.loop;
          }
        }, {
          key: "images",
          get: function get() {
            return this.properties.images;
          }
        }, {
          key: "margin",
          get: function get() {
            return this.properties.margin;
          }
        }, {
          key: "minSwipeDistance",
          get: function get() {
            return this.properties.minSwipeDistance;
          }
        }, {
          key: "transitionDuration",
          get: function get() {
            return this.properties.transitionDuration;
          }
        }, {
          key: "transitionTimingFunction",
          get: function get() {
            return this.properties.transitionTimingFunction;
          }
        }, {
          key: "fullCellWidth",
          get: function get() {
            return this.properties.cellWidth + this.margin;
          }
        }, {
          key: "visibleCellsCount",
          get: function get() {
            return Math.ceil(this.visibleWidth / this.fullCellWidth);
          }
        }, {
          key: "lapCounter",
          get: function get() {
            return Math.floor(this.slide.counter / this.cellLengthInLightDOMMode);
          }
        }, {
          key: "slideCounter",
          get: function get() {
            return this.slide.counter;
          }
        }, {
          key: "init",
          value: function init() {
            this.cellsElement = this.properties.cellsElement;
            this.visibleWidth = this.properties.visibleWidth || this.cellsElement.parentElement.clientWidth;
          }
        }, {
          key: "lineUpCells",
          value: function lineUpCells() {
            this.cells.lineUp();
          }
        }, {
          key: "handleTransitionend",
          value: function handleTransitionend() {
            this.slide.handleTransitionend();
          }
        }, {
          key: "getImage",
          value: function getImage(index) {
            return this.cells.getImage(index);
          }
        }, {
          key: "next",
          value: function next() {
            var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            if (!this.isNextArrowDisabled()) {
              this.slide.next(length);
            }
          }
        }, {
          key: "prev",
          value: function prev() {
            var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            this.slide.prev(length);
          }
        }, {
          key: "autoplay",
          value: function autoplay() {
            var _this17 = this;

            this.autoplayId = setInterval(function () {
              _this17.next();
            }, this.properties.autoplayInterval);
          }
        }, {
          key: "stopAutoplay",
          value: function stopAutoplay() {
            if (this.autoplayId) {
              clearInterval(this.autoplayId);
            }
          }
        }]);

        return Carousel;
      }();

      var Container = /*#__PURE__*/function () {
        function Container(carouselProperties, utils, cells) {
          _classCallCheck(this, Container);

          this.carouselProperties = carouselProperties;
          this.utils = utils;
          this.cells = cells;
          /* The index of the new position relative to
           * the active index, for example -1 or +1
           */

          this.newPositionIndex = 0;
          this.initialPositionX = 0;
          this.initialElementPositionX = 0;
          this.isLocked = true;
          this.pullLimit = 100;
          this.init();
        }

        _createClass(Container, [{
          key: "visibleWidth",
          get: function get() {
            return this.utils.visibleWidth;
          }
        }, {
          key: "overflowCellsLimit",
          get: function get() {
            return this.utils.overflowCellsLimit;
          }
        }, {
          key: "images",
          get: function get() {
            return this.carouselProperties.images;
          }
        }, {
          key: "element",
          get: function get() {
            return this.carouselProperties.cellsElement;
          }
        }, {
          key: "freeScroll",
          get: function get() {
            return this.carouselProperties.freeScroll;
          }
        }, {
          key: "fullCellWidth",
          get: function get() {
            return this.carouselProperties.cellWidth + this.carouselProperties.margin;
          }
        }, {
          key: "visibleCellsCount",
          get: function get() {
            return Math.ceil(this.visibleWidth / this.fullCellWidth);
          }
        }, {
          key: "transitionDuration",
          get: function get() {
            return this.carouselProperties.transitionDuration;
          }
        }, {
          key: "transitionTimingFunction",
          get: function get() {
            return this.carouselProperties.transitionTimingFunction;
          }
        }, {
          key: "cellLength",
          get: function get() {
            if (this.images) {
              return this.images.length;
            } else {
              return this.cells.cellLength;
            }
          }
        }, {
          key: "cellLengthInLightDOMMode",
          get: function get() {
            if (this.images) {
              var cellLength = this.visibleCellsCount + this.overflowCellsLimit * 2;

              if (cellLength > this.images.length) {
                cellLength = this.images.length;
              }

              return cellLength;
            } else {
              return this.cellLength;
            }
          }
        }, {
          key: "tooFewCells",
          get: function get() {
            return this.visibleCellsCount > this.cellLength;
          }
        }, {
          key: "disabled",
          get: function get() {
            return this.tooFewCells;
          }
        }, {
          key: "margin",
          get: function get() {
            return this.carouselProperties.margin;
          }
        }, {
          key: "isLightDOM",
          get: function get() {
            return this.carouselProperties.lightDOM || this.carouselProperties.loop;
          }
        }, {
          key: "init",
          value: function init() {
            this.setWidth();
          }
        }, {
          key: "handleTouchstart",
          value: function handleTouchstart() {
            this.startX = this.utils.getStartX(event);
            this.startTime = new Date().getTime();
            this.initialElementPositionX = this.getInitialElementPositionX();
          }
        }, {
          key: "handleHorizontalSwipe",
          value: function handleHorizontalSwipe() {
            if (this.disabled) {
              return;
            }

            if (!this.isSwipeInProgress) {
              this.startX = this.utils.getStartX(event);
              this.startTime = new Date().getTime();
              this.initialElementPositionX = this.getInitialElementPositionX();
            }

            this.isSwipeInProgress = true;
            this.moveX = this.utils.getMoveX(event);
            this.move();
          }
        }, {
          key: "handleTouchend",
          value: function handleTouchend() {
            var simpleProcessing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (this.disabled) {
              return;
            }
            /* If touchend was passed to the Slide class */


            if (simpleProcessing) {
              this.isSwipeInProgress = false;
              return;
            }

            this.isSwipeInProgress = false;
            this.finishMoving();
            this.clearInitialValues();
          }
        }, {
          key: "move",
          value: function move() {
            var positionX = this.getMovePositionX();
            var isPulled = this.detectPulled();
            var direction = this.getDirection();

            if (isPulled) {
              if (isPulled.edge === "left" && direction === "right" || isPulled.edge === "right" && direction === "left") {
                positionX = this.slowdownOnPull(positionX);
              }
            }

            this.transformPositionX(positionX, 0);

            if (this.freeScroll) {
              this.initialPositionX = positionX;
            }

            if (isPulled) {
              if (isPulled.edge === 'left' && isPulled.overflowX > this.pullLimit) {
                this.initialPositionX = 0;
              }

              if (isPulled.edge === 'right' && isPulled.overflowX > this.pullLimit) {
                this.initialPositionX = positionX;
              }
            }
          }
        }, {
          key: "getMovePositionX",
          value: function getMovePositionX() {
            var distance = this.getDistance();
            return this.initialElementPositionX - distance;
          }
        }, {
          key: "getDistance",
          value: function getDistance() {
            return this.startX - this.moveX;
          }
          /* If the container is pulled out of the left or right border */

        }, {
          key: "detectPulled",
          value: function detectPulled() {
            var currentPositionX = this.getCurrentPositionX();

            if (currentPositionX > 0) {
              return {
                edge: 'left',
                positionX: currentPositionX,
                overflowX: Math.abs(currentPositionX)
              };
            }

            if (currentPositionX < this.getEndPosition()) {
              return {
                edge: 'right',
                positionX: currentPositionX,
                overflowX: Math.abs(currentPositionX - this.getEndPosition())
              };
            }
          }
        }, {
          key: "slowdownOnPull",
          value: function slowdownOnPull(_positionX) {
            var distance = Math.abs(this.getDistance());
            var endPosition = this.getEndPosition();
            var isPulled = this.detectPulled();
            var decelerationRatio = 3 + isPulled.overflowX / 50;
            var positionX;

            if (isPulled.edge === 'left') {
              if (this.initialElementPositionX < 0) {
                distance = distance - Math.abs(this.initialElementPositionX);
              }

              var rubberPositionX = distance / decelerationRatio;
              positionX = rubberPositionX;

              if (this.initialElementPositionX > 0) {
                positionX = this.initialElementPositionX + rubberPositionX;
              }

              if (positionX > this.pullLimit) {
                positionX = this.pullLimit;
              }
            }

            if (isPulled.edge === 'right') {
              var _rubberPositionX = endPosition + (this.initialElementPositionX - distance - endPosition) / decelerationRatio;

              var containerWidth = this.getWidth();
              positionX = _rubberPositionX;

              if (this.initialElementPositionX < -(containerWidth - this.visibleWidth)) {
                positionX = containerWidth - this.visibleWidth + this.initialElementPositionX + _rubberPositionX;
              }

              if (positionX < endPosition - this.pullLimit) {
                positionX = endPosition - this.pullLimit;
              }
            }

            return positionX;
          }
        }, {
          key: "finishMoving",
          value: function finishMoving() {
            var positionX = this.getMovePositionX();
            var newPositionX;

            if (this.freeScroll) {
              newPositionX = this.getInertia();
            }
            /* Align container while pulling */


            newPositionX = this.getAlignedPositionOnPull(newPositionX);
            this.transformPositionX(newPositionX);
            this.setInitialPosition(positionX);
          }
          /* Returns the new position of the container with inertia */

        }, {
          key: "getInertia",
          value: function getInertia() {
            var distance = this.getDistance();
            var currentTime = new Date().getTime();
            var tapLength = currentTime - this.startTime;
            var inertia = distance / tapLength * 100;
            return this.initialPositionX - inertia;
          }
        }, {
          key: "getAlignedPositionOnPull",
          value: function getAlignedPositionOnPull(newPositionX) {
            var direction = this.getDirection();

            if (direction === 'left') {
              var endPosition = this.getEndPosition();

              if (newPositionX < endPosition) {
                return endPosition;
              }
            }

            if (direction === 'right') {
              if (newPositionX > 0) {
                return 0;
              }
            }

            return newPositionX;
          }
        }, {
          key: "getCurrentPositionX",
          value: function getCurrentPositionX() {
            var parentPosition = this.element.parentElement.getBoundingClientRect();
            var position = this.element.getBoundingClientRect();
            return position.left - parentPosition.left;
          }
        }, {
          key: "getEndPosition",
          value: function getEndPosition() {
            if (this.isLightDOM) {
              var imagesInContainer = this.cells.imageUtils.getImages();
              return -(imagesInContainer.length * this.fullCellWidth - this.visibleWidth - this.margin);
            } else {
              var width = this.getWidth();
              var visibleWidth = this.element.parentElement.clientWidth;
              return visibleWidth - width;
            }
          }
        }, {
          key: "transformPositionX",
          value: function transformPositionX(value) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.transitionDuration;

            if (value === undefined) {
              return;
            }

            this.element.style.transition = 'transform ' + duration + 'ms ' + this.transitionTimingFunction;
            this.element.style.transform = 'translateX(' + value + 'px)';
          }
        }, {
          key: "getWidth",
          value: function getWidth() {
            var width = this.cellLengthInLightDOMMode * this.fullCellWidth;
            var totalImageWidth = this.cellLength * this.fullCellWidth;

            if (totalImageWidth < width) {
              width = totalImageWidth;
            }

            return this.isLightDOM ? width : totalImageWidth;
          }
        }, {
          key: "setWidth",
          value: function setWidth() {
            var width = this.getWidth();
            this.element.style.width = width + "px";
          }
        }, {
          key: "setInitialPosition",
          value: function setInitialPosition(position) {
            this.initialPositionX = position;
          }
        }, {
          key: "getElementPosition",
          value: function getElementPosition() {
            return this.element.getBoundingClientRect();
          }
        }, {
          key: "getInitialElementPositionX",
          value: function getInitialElementPositionX() {
            var carouselElementPosition = this.utils.getCarouselElementPosition()['left'];
            return this.getElementPosition()['left'] - carouselElementPosition;
          }
        }, {
          key: "clearInitialValues",
          value: function clearInitialValues() {
            this.startX = this.moveX = undefined;
          }
        }, {
          key: "getDirection",
          value: function getDirection() {
            var direction = Math.sign(this.startX - this.moveX);

            if (direction === -1) {
              return 'right';
            }

            if (direction === 1) {
              return 'left';
            }
          }
        }]);

        return Container;
      }();

      var ImageUtils = /*#__PURE__*/function () {
        function ImageUtils(element) {
          _classCallCheck(this, ImageUtils);

          this.element = element;
        }

        _createClass(ImageUtils, [{
          key: "getImages",
          value: function getImages() {
            return this.cellStack.filter(this.filter);
          }
        }, {
          key: "comparePositions",
          value: function comparePositions(a, b) {
            if (a.positionX < b.positionX) {
              return -1;
            }

            if (a.positionX > b.positionX) {
              return 1;
            }

            return 0;
          }
        }, {
          key: "filter",
          value: function filter(cell) {
            return cell.img !== undefined;
          }
        }]);

        return ImageUtils;
      }();

      var Cells = /*#__PURE__*/function () {
        function Cells(carouselProperties, utils) {
          _classCallCheck(this, Cells);

          this.carouselProperties = carouselProperties;
          this.utils = utils;
          this.counter = 0;
          this.imageUtils = new ImageUtils(this.element);
          this.init(carouselProperties);
        }

        _createClass(Cells, [{
          key: "images",
          get: function get() {
            return this.carouselProperties.images;
          }
        }, {
          key: "cellLength",
          get: function get() {
            return this.cells.length;
          }
        }, {
          key: "fullCellWidth",
          get: function get() {
            return this.carouselProperties.cellWidth + this.carouselProperties.margin;
          }
        }, {
          key: "cellLengthInLightDOMMode",
          get: function get() {
            if (this.images) {
              var cellLength = this.visibleCellsCount + this.utils.overflowCellsLimit * 2;

              if (cellLength > this.images.length) {
                cellLength = this.images.length;
              }

              return cellLength;
            } else {
              return this.cellLength;
            }
          }
        }, {
          key: "visibleCellsCount",
          get: function get() {
            return Math.ceil(this.visibleWidth / this.fullCellWidth);
          }
        }, {
          key: "overflowCellsLimit",
          get: function get() {
            return this.carouselProperties.overflowCellsLimit;
          }
        }, {
          key: "isLightDOM",
          get: function get() {
            return this.carouselProperties.lightDOM || this.carouselProperties.loop;
          }
        }, {
          key: "lineUp",
          value: function lineUp() {
            var cells = this.element.children;
            this.imageUtils.cellStack = [];

            for (var i = 0; i < cells.length; i++) {
              var cell = cells[i];
              var positionX = this.getCellPositionInContainer(i);
              cell.style.transform = 'translateX(' + positionX + 'px)';
              cell.style.width = this.carouselProperties.cellWidth + 'px';

              if (this.getImage(i)) {
                this.imageUtils.cellStack.push({
                  index: i,
                  positionX: positionX,
                  img: this.getImage(i)['image']
                });
              }
            }

            ;
          }
        }, {
          key: "ifSequenceOfCellsIsChanged",
          value: function ifSequenceOfCellsIsChanged() {
            var cells = this.element.children;
            return cells[0]['style'].transform !== 'translateX(0px)';
          }
        }, {
          key: "getCellPositionInContainer",
          value: function getCellPositionInContainer(cellIndexInDOMTree) {
            var positionIndex = this.getCellIndexInContainer(cellIndexInDOMTree);
            return positionIndex * this.fullCellWidth;
          }
        }, {
          key: "getCellIndexInContainer",
          value: function getCellIndexInContainer(cellIndexInDOMTree) {
            var positionIndex;

            if (!this.isLightDOM) {
              return cellIndexInDOMTree;
            }

            var cellLength = this.cellLengthInLightDOMMode;
            var counter = this.counter - this.carouselProperties.overflowCellsLimit;

            if (counter > cellLength) {
              counter = counter % cellLength;
            }

            if (counter < 0) {
              return cellIndexInDOMTree;
            } else {
              positionIndex = cellIndexInDOMTree - counter;

              if (positionIndex < 0) {
                positionIndex = cellLength + positionIndex;
              }
            }

            return positionIndex;
          }
        }, {
          key: "getImage",
          value: function getImage(cellIndex) {
            if (!this.images) {
              return;
            }

            var imageIndex = this.getImageIndex(cellIndex);
            var file = this.images[imageIndex];

            if (file && !file.type) {
              file.type = 'image';
            }

            return {
              image: this.images[imageIndex],
              imageIndex: imageIndex
            };
          }
        }, {
          key: "getImageIndex",
          value: function getImageIndex(cellIndexInDOMTree) {
            var positionIndex = this.getCellIndexInContainer(cellIndexInDOMTree);
            var imageIndex;
            var overflowCellsLimit = this.carouselProperties.overflowCellsLimit;

            if (this.counter > overflowCellsLimit) {
              var cellLimitOverflow = this.counter - overflowCellsLimit;
              imageIndex = positionIndex + cellLimitOverflow;

              if (this.images && this.carouselProperties.loop) {
                imageIndex = imageIndex % this.images.length;
              }
            } else {
              imageIndex = cellIndexInDOMTree;
            }

            return imageIndex;
          }
        }, {
          key: "setCounter",
          value: function setCounter(value) {
            this.counter = value;
          }
        }, {
          key: "init",
          value: function init(carouselProperties) {
            this.element = this.carouselProperties.cellsElement;
            this.cells = this.element.children;
            this.visibleWidth = this.carouselProperties.visibleWidth || this.element.parentElement.clientWidth;
          }
        }]);

        return Cells;
      }();

      var Slide = /*#__PURE__*/function () {
        function Slide(carouselProperties, utils, cells, container) {
          _classCallCheck(this, Slide);

          this.carouselProperties = carouselProperties;
          this.utils = utils;
          this.cells = cells;
          this.container = container;
          this.counter = 0;
          this._counter = 0;
          this.initialPositionX = 0;
          this.currentPositionX = 0;
          this.init();
        }

        _createClass(Slide, [{
          key: "fullCellWidth",
          get: function get() {
            return this.carouselProperties.cellWidth + this.carouselProperties.margin;
          }
        }, {
          key: "margin",
          get: function get() {
            return this.carouselProperties.margin;
          }
        }, {
          key: "minSwipeDistance",
          get: function get() {
            return this.carouselProperties.minSwipeDistance;
          }
        }, {
          key: "visibleCellsCount",
          get: function get() {
            return Math.ceil(this.visibleWidth / this.fullCellWidth);
          }
        }, {
          key: "visibleCellsOverflowContainer",
          get: function get() {
            return this.visibleCellsCount * this.fullCellWidth - this.margin > this.visibleWidth;
          }
          /* The position to which the container returns after each slide
           * in the light DUM tree mode.
           */

        }, {
          key: "fixedContainerPosition",
          get: function get() {
            return -(this.overflowCellsLimit * this.fullCellWidth);
          }
        }, {
          key: "overflowCellsLimit",
          get: function get() {
            return this.carouselProperties.overflowCellsLimit;
          }
        }, {
          key: "images",
          get: function get() {
            return this.carouselProperties.images;
          }
        }, {
          key: "cellLength",
          get: function get() {
            if (this.isLightDOM) {
              return this.cells.cellLengthInLightDOMMode;
            } else {
              if (this.images) {
                return this.images.length;
              } else {
                return this.cells.cellLength;
              }
            }
          }
        }, {
          key: "isLightDOM",
          get: function get() {
            return this.carouselProperties.lightDOM || this.carouselProperties.loop;
          }
        }, {
          key: "init",
          value: function init() {
            this.visibleWidth = this.carouselProperties.visibleWidth || this.carouselProperties.hostElement.clientWidth;
          }
        }, {
          key: "handleTouchstart",
          value: function handleTouchstart(event) {
            /* Touchstart event is not called for arrow */
            this.isNotClickOnArrow = true;
            this.isSlideLengthLimited = undefined;

            if (!this.isSlideInProgress) {
              this.initialPositionX = this.container.getCurrentPositionX();
            }
          }
        }, {
          key: "handleTouchend",
          value: function handleTouchend(event) {
            if (!this.isNotClickOnArrow) {
              return;
            }

            this.currentPositionX = this.container.getCurrentPositionX();
            this.distanceAbs = Math.abs(this.initialPositionX - this.currentPositionX);
            this.distance = this.initialPositionX - this.currentPositionX;
            this.direction = this.getDirection();
            this.isNotClickOnArrow = undefined;
            this.handleSlide();
          }
        }, {
          key: "handleTransitionend",
          value: function handleTransitionend() {
            this.setCounter();
            this.isSlideInProgress = false;

            if (this.isLightDOM) {
              this.alignContainerFast();
            }
          }
        }, {
          key: "detectClickOnArrow",
          value: function detectClickOnArrow(event) {
            return event.target.classList.contains("carousel-arrow");
          }
        }, {
          key: "handleSlide",
          value: function handleSlide() {
            var customSlideLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            var isUsingButton = customSlideLength;
            var newPositionX;

            if (isUsingButton && this.isSlideInProgress || !this.direction) {
              return;
            }
            /* Custom slide length is used in arrows */


            if (customSlideLength) {
              this.slideLength = this.limitSlideLength(customSlideLength);

              if (!this.isSlideInProgress) {
                this.initialPositionX = this.container.getCurrentPositionX();
              }
            } else {
              this.slideLength = this.getSlideLength(this.distanceAbs);
            }
            /* Store intermediate counter value */


            this._counter = this.getPreliminaryCounter();

            if (this.direction === 'left') {
              if (!customSlideLength) {
                this.slideLength = this.limitSlideLength(this.getSlideLength(this.distanceAbs));
              }

              this._counter = this.getPreliminaryCounter();
              var isSlidesEnd = this.isSlidesEnd(this._counter);
              newPositionX = this.getPositionByIndex(this._counter);

              if (isSlidesEnd) {
                this._counter = this.counter;
                newPositionX = this.getPositionByIndex(this.counter);
                this.slideLength = 0;
              }
            }

            if (this.direction === 'right') {
              if (!customSlideLength) {
                this.slideLength = this.getSlideLength(this.distanceAbs);
              }

              if (this._counter < 0) {
                this._counter = this.counter;
                this.slideLength = this.counter;
              }

              newPositionX = this.getPositionByIndex(this.counter - this.slideLength);
            }

            if (this.container.getCurrentPositionX() !== newPositionX) {
              this.isSlideInProgress = true;
              this.container.transformPositionX(newPositionX);
            }
          }
        }, {
          key: "next",
          value: function next() {
            var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            this.direction = 'left';
            this.handleSlide(length);
          }
        }, {
          key: "prev",
          value: function prev() {
            var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            this.direction = 'right';
            this.handleSlide(length);
          }
        }, {
          key: "select",
          value: function select(index) {
            if (index > this.cellLength - 1) {
              return;
            }

            if (index > this.counter) {
              var length = index - this.counter;
              this.next(length);
            }

            if (index < this.counter) {
              var _length = this.counter - index;

              this.prev(_length);
            }
          }
        }, {
          key: "getPreliminaryCounter",
          value: function getPreliminaryCounter() {
            if (this.direction === 'left') {
              return this.counter + this.slideLength;
            }

            if (this.direction === 'right') {
              return this.counter - this.slideLength;
            }
          }
          /*
           * Limits the length of the slide during calls to the next() and prev()
           * methods if the specified position is outside the cell length
           */

        }, {
          key: "limitSlideLength",
          value: function limitSlideLength(slideLength) {
            if (slideLength > 1) {
              for (var i = 0; i < slideLength; i++) {
                var newCounter = this.counter + (slideLength - i);

                if (!this.isSlidesEnd(newCounter)) {
                  slideLength = slideLength - i;
                  this.isSlideLengthLimited = i > 0;
                  break;
                }
              }
            }

            return slideLength;
          }
          /* Offset the container to show the last cell completely */

        }, {
          key: "getPositionCorrection",
          value: function getPositionCorrection(counter) {
            var correction = 0;
            var isLastSlide = this.isLastSlide(counter);

            if (this.carouselProperties.loop || this.direction === "right") {
              return 0;
            }

            if (this.isSlideLengthLimited || isLastSlide) {
              var cellsWidth = this.cells.cellLengthInLightDOMMode * this.fullCellWidth;

              if (this.visibleWidth < cellsWidth) {
                correction = -(this.visibleCellsCount * this.fullCellWidth - this.visibleWidth - this.margin);
              }

              if (correction >= -this.margin) {
                correction = 0;
              }
            }

            return correction;
          }
        }, {
          key: "getSlideLength",
          value: function getSlideLength(distanceAbs) {
            var isLastSlide = this.isLastSlide(this.counter);
            /* If the last cell does not fit entirely, then the
             * length of the swipe to the left, from the extreme
             * right position, may be shorter than usual.
             */

            if (isLastSlide && this.direction === "right") {
              distanceAbs = distanceAbs + this.visibleWidth % this.fullCellWidth;
            }

            var length = Math.floor(distanceAbs / this.fullCellWidth);

            if (distanceAbs % this.fullCellWidth >= this.minSwipeDistance) {
              length++;
            }

            return length;
          }
        }, {
          key: "getDistanceAbs",
          value: function getDistanceAbs() {
            return Math.abs(this.initialPositionX - this.currentPositionX);
          }
        }, {
          key: "getDirection",
          value: function getDirection() {
            var direction = Math.sign(this.initialPositionX - this.currentPositionX);

            if (direction === -1) {
              return 'right';
            }

            if (direction === 1) {
              return 'left';
            }
          }
        }, {
          key: "isSlidesEnd",
          value: function isSlidesEnd(counter) {
            var margin = this.visibleCellsOverflowContainer ? 1 : 0;
            var imageLength = this.images ? this.images.length : this.cells.cellLength;

            if (this.carouselProperties.loop) {
              return false;
            } else {
              return imageLength - counter + margin < this.visibleCellsCount;
            }
          }
        }, {
          key: "isLastSlide",
          value: function isLastSlide(counter) {
            return this.isSlidesEnd(counter + 1);
          }
        }, {
          key: "setCounter",
          value: function setCounter() {
            if (this.direction === 'left') {
              this.counter = this.counter + this.slideLength;
            }

            if (this.direction === 'right') {
              this.counter = this.counter - this.slideLength;
            }
          }
        }, {
          key: "getPositionByIndex",
          value: function getPositionByIndex(_counter) {
            var correction = this.getPositionCorrection(this.counter + this.slideLength);
            var position;

            if (correction !== 0) {
              correction = correction + this.fullCellWidth;
            }

            if (this.direction === 'right') {
              correction = 0;
            }

            if (this.isLightDOM && this.isLightDOMMode(_counter) || this.isLightDOM && this.ifLeftDOMModeAtEnd(_counter)) {
              var initialPosition = this.getPositionWithoutCorrection(this.initialPositionX);
              var counterDifference = _counter - this.counter;
              position = initialPosition - (counterDifference * this.fullCellWidth - correction);
            } else {
              position = -(_counter * this.fullCellWidth - correction);
            }

            position = this.provideSafePosition(position);
            return position;
          }
        }, {
          key: "provideSafePosition",
          value: function provideSafePosition(position) {
            var endPosition = this.container.getEndPosition();

            if (this.direction === 'left') {
              if (position > 0) {
                position = 0;
              }
            }

            if (this.direction === 'right') {
              if (position < endPosition) {
                position = endPosition;
              }
            }

            return position;
          }
        }, {
          key: "getPositionWithoutCorrection",
          value: function getPositionWithoutCorrection(value) {
            var remainder = value % this.fullCellWidth;

            if (remainder !== 0) {
              return value - (this.fullCellWidth + remainder);
            } else {
              return value;
            }
          }
        }, {
          key: "isNextArrowDisabled",
          value: function isNextArrowDisabled() {
            return this.isLastSlide(this.counter);
          }
        }, {
          key: "isPrevArrowDisabled",
          value: function isPrevArrowDisabled() {
            return this.counter === 0;
          }
        }, {
          key: "alignContainerFast",
          value: function alignContainerFast() {
            if (this.isLightDOMMode(this.counter)) {
              var positionX = this.fixedContainerPosition;
              this.container.transformPositionX(positionX, 0);
              this.cells.setCounter(this.counter);
              this.cells.lineUp();
            } else if (this.ifLeftDOMModeToBeginning(this.counter)) {
              /* If we have already exited the light DOM mode but
               * the cells are still out of place
               */
              if (this.cells.ifSequenceOfCellsIsChanged()) {
                var _positionX2 = -(this.counter * this.fullCellWidth);

                this.container.transformPositionX(_positionX2, 0);
                this.cells.setCounter(this.counter);
                this.cells.lineUp();
              }
            } else if (this.ifLeftDOMModeAtEnd(this.counter)) {
              var containerPositionX = this.container.getCurrentPositionX();
              var containerWidth = this.container.getWidth();
              this.visibleWidth;

              if (this.isLastSlide(this.counter) && containerWidth + containerPositionX >= this.visibleWidth) {
                return;
              }

              var correction = this.getPositionCorrection(this.counter);

              if (correction !== 0) {
                correction = correction + this.fullCellWidth;
              }

              if (this.direction === 'right') {
                correction = 0;
              }

              var _positionX3 = this.fixedContainerPosition + correction;

              this.container.transformPositionX(_positionX3, 0);
              this.cells.setCounter(this.counter);
              this.cells.lineUp();
            }
          }
        }, {
          key: "isLightDOMMode",
          value: function isLightDOMMode(counter) {
            var flag;
            var remainderOfCells = this.images.length - this.overflowCellsLimit - this.visibleCellsCount;

            if (!this.isLightDOM) {
              return false;
            }

            if (counter > this.overflowCellsLimit && this.direction === "left" && counter <= remainderOfCells) {
              flag = true;
            }

            if (counter >= this.overflowCellsLimit && this.direction === "right" && counter < remainderOfCells) {
              flag = true;
            }

            if (this.counter > this.overflowCellsLimit && this.direction === "left" && this.counter <= remainderOfCells) {
              flag = true;
            }

            if (this.counter >= this.overflowCellsLimit && this.direction === "right" && this.counter < remainderOfCells) {
              flag = true;
            }

            return flag;
          }
        }, {
          key: "ifLeftDOMModeAtEnd",
          value: function ifLeftDOMModeAtEnd(counter) {
            var flag;
            var remainderOfCells = this.images.length - this.overflowCellsLimit - this.visibleCellsCount;

            if (counter >= remainderOfCells) {
              flag = true;
            }

            if (this.counter >= remainderOfCells) {
              flag = true;
            }

            return flag;
          }
        }, {
          key: "ifLeftDOMModeToBeginning",
          value: function ifLeftDOMModeToBeginning(counter) {
            var flag;

            if (counter <= this.overflowCellsLimit) {
              flag = true;
            }

            if (this.counter <= this.overflowCellsLimit) {
              flag = true;
            }

            return flag;
          }
        }]);

        return Slide;
      }();

      var Utils = /*#__PURE__*/function () {
        function Utils(carouselProperties) {
          _classCallCheck(this, Utils);

          this.carouselProperties = carouselProperties;
        }

        _createClass(Utils, [{
          key: "images",
          get: function get() {
            return this.carouselProperties.images;
          }
        }, {
          key: "overflowCellsLimit",
          get: function get() {
            if (this.images && this.isImagesLessCellLimit) {
              return Math.floor((this.images.length - this.visibleCellsCount) / 2);
            } else {
              return this.carouselProperties.overflowCellsLimit;
            }
          }
        }, {
          key: "isImagesLessCellLimit",
          get: function get() {
            return this.carouselProperties.overflowCellsLimit * 2 + this.visibleCellsCount > this.images.length;
          }
        }, {
          key: "visibleCellsCount",
          get: function get() {
            return Math.ceil(this.visibleWidth / this.fullCellWidth);
          }
        }, {
          key: "fullCellWidth",
          get: function get() {
            return this.carouselProperties.cellWidth + this.carouselProperties.margin;
          }
        }, {
          key: "visibleWidth",
          get: function get() {
            return this.carouselProperties.visibleWidth || this.carouselProperties.cellsElement.parentElement.clientWidth;
          }
        }, {
          key: "getStartX",
          value: function getStartX(event) {
            var touches = event.touches;
            var carouselElementPosition = this.getCarouselElementPosition()['left'];
            var startX;

            if (touches) {
              startX = touches[0].clientX - carouselElementPosition;
            } else {
              startX = event.clientX - carouselElementPosition;
            }

            return startX;
          }
        }, {
          key: "getMoveX",
          value: function getMoveX(event) {
            var touches = event.touches;
            var carouselElementPositionX = this.getCarouselElementPosition()['left'];

            if (touches) {
              return touches[0].clientX - carouselElementPositionX;
            } else {
              return event.clientX - carouselElementPositionX;
            }
          }
        }, {
          key: "getCarouselElementPosition",
          value: function getCarouselElementPosition() {
            return this.carouselProperties.hostElement.getBoundingClientRect();
          }
        }]);

        return Utils;
      }();

      var CarouselComponent = /*#__PURE__*/function () {
        function CarouselComponent(elementRef, ref) {
          var _this18 = this;

          _classCallCheck(this, CarouselComponent);

          this.elementRef = elementRef;
          this.ref = ref;
          this.minTimeout = 30;
          this._cellWidth = 200;
          this._loop = false;
          this._lightDOM = false;
          this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.height = 200;
          this.autoplay = false;
          this.autoplayInterval = 5000;
          this.pauseOnHover = true;
          this.dots = false;
          this.margin = 10;
          this.objectFit = 'cover';
          this.minSwipeDistance = 10;
          this.transitionDuration = 200;
          this.transitionTimingFunction = 'ease-out';
          this.counterSeparator = " / ";
          this.overflowCellsLimit = 3;
          this.listeners = 'mouse and touch';
          this.cellsToScroll = 1;
          this.freeScroll = false;
          this.arrows = true;
          this.arrowsTheme = 'light';
          this.hostClassCarousel = true;

          this.handleTouchstart = function (event) {
            //event.preventDefault();
            _this18.touches.addEventListeners("mousemove", "handleMousemove");

            _this18.carousel.handleTouchstart(event);

            _this18.isMoving = true;
          };

          this.handleHorizontalSwipe = function (event) {
            event.preventDefault();

            _this18.carousel.handleHorizontalSwipe(event);
          };

          this.handleTouchend = function (event) {
            var touches = event.touches;

            _this18.carousel.handleTouchend(event);

            _this18.touches.removeEventListeners("mousemove", "handleMousemove");

            _this18.isMoving = false;
          };

          this.handleTap = function (event) {
            var outboundEvent = {
              name: 'click'
            };
            var nodes = Array.prototype.slice.call(_this18.cellsElement.children);
            var cellElement = event.srcElement.closest(".carousel-cell");
            var i = nodes.indexOf(cellElement);
            var cellIndex = nodes.indexOf(cellElement);

            if (_this18.images) {//outboundEvent.fileIndex = this.carousel.getFileIndex(i);
              //outboundEvent.file = this.carousel.getFile(cellIndex);
            } else {
              outboundEvent.cellIndex = cellIndex;
            }
          };
        }

        _createClass(CarouselComponent, [{
          key: "isContainerLocked",
          get: function get() {
            return this.carousel.isContainerLocked;
          }
        }, {
          key: "slideCounter",
          get: function get() {
            return this.carousel.slideCounter;
          }
        }, {
          key: "lapCounter",
          get: function get() {
            return this.carousel.lapCounter;
          }
        }, {
          key: "isLandscape",
          get: function get() {
            return window.innerWidth > window.innerHeight;
          }
        }, {
          key: "isSafari",
          get: function get() {
            var ua = navigator.userAgent.toLowerCase();

            if (ua.indexOf('safari') !== -1) {
              return !(ua.indexOf('chrome') > -1);
            }
          }
        }, {
          key: "counter",
          get: function get() {
            var counter;

            if (this.loop) {
              counter = this.slideCounter % this.cellLength;
            } else {
              counter = this.slideCounter;
            }

            return counter + 1 + this.counterSeparator + this.cellLength;
          }
        }, {
          key: "cellsElement",
          get: function get() {
            return this.elementRef.nativeElement.querySelector('.carousel-cells');
          }
        }, {
          key: "isArrows",
          get: function get() {
            return this.arrows && !this.freeScroll;
          }
        }, {
          key: "isCounter",
          get: function get() {
            return this._isCounter && this.cellLength > 1;
          },
          set: function set(value) {
            if (value) {
              this._isCounter = value;
            }
          }
        }, {
          key: "activeDotIndex",
          get: function get() {
            return this.slideCounter % this.cellLength;
          }
        }, {
          key: "cellLimit",
          get: function get() {
            if (this.carousel) {
              return this.carousel.cellLimit;
            }
          }
        }, {
          key: "images",
          get: function get() {
            return this._images;
          },
          set: function set(images) {
            this._images = images;
          }
        }, {
          key: "cellWidth",
          set: function set(value) {
            if (value) {
              this._cellWidth = value;
            }
          }
        }, {
          key: "loop",
          get: function get() {
            if (this.images) {
              return this._loop;
            } else {
              return false;
            }
          },
          set: function set(value) {
            if (value) {
              this._loop = value;
            }
          }
        }, {
          key: "lightDOM",
          get: function get() {
            if (this.images) {
              return this._lightDOM;
            } else {
              return false;
            }
          },
          set: function set(value) {
            if (value) {
              this._lightDOM = value;
            }
          }
        }, {
          key: "onWindowResize",
          value: function onWindowResize(event) {
            this.landscapeMode = this.isLandscape;
            this.ref.detectChanges();
            this.initCarousel();
            this.carousel.lineUpCells();
          }
        }, {
          key: "onMousemove",
          value: function onMousemove(event) {
            if (this.autoplay && this.pauseOnHover) {
              this.carousel.stopAutoplay();
            }
          }
        }, {
          key: "onMouseleave",
          value: function onMouseleave(event) {
            if (this.autoplay && this.pauseOnHover) {
              this.carousel.autoplay();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isNgContent = this.cellsElement.children.length > 0;
            this.touches = new Touches({
              element: this.cellsElement,
              listeners: this.listeners,
              mouseListeners: {
                "mousedown": "handleMousedown",
                "mouseup": "handleMouseup"
              }
            });
            this.touches.on('touchstart', this.handleTouchstart);
            this.touches.on('horizontal-swipe', this.handleHorizontalSwipe);
            this.touches.on('touchend', this.handleTouchend);
            this.touches.on('mousedown', this.handleTouchstart);
            this.touches.on('mouseup', this.handleTouchend);
            this.touches.on('tap', this.handleTap);
            this.setDimensions();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.initCarousel();

            if (this.autoplay) {
              this.carousel.autoplay();
            }

            this.cellLength = this.getCellLength();
            this.dotsArr = Array(this.cellLength).fill(1);
            this.ref.detectChanges();
            this.carousel.lineUpCells();
            /* Start detecting changes in the DOM tree */

            this.detectDomChanges();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.width || changes.height || changes.images) {
              this.setDimensions();
              this.initCarousel();
              this.carousel.lineUpCells();
              this.ref.detectChanges();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.touches.destroy(); //this.carousel.destroy();
          }
        }, {
          key: "initCarousel",
          value: function initCarousel() {
            var carouselProperties = {
              id: this.id,
              cellsElement: this.elementRef.nativeElement.querySelector('.carousel-cells'),
              hostElement: this.elementRef.nativeElement,
              images: this.images,
              cellWidth: this.getCellWidth(),
              loop: this.loop,
              autoplayInterval: this.autoplayInterval,
              overflowCellsLimit: this.overflowCellsLimit,
              visibleWidth: this.width,
              margin: this.margin,
              minSwipeDistance: this.minSwipeDistance,
              transitionDuration: this.transitionDuration,
              transitionTimingFunction: this.transitionTimingFunction,
              videoProperties: this.videoProperties,
              eventHandler: this.events,
              freeScroll: this.freeScroll,
              lightDOM: this.lightDOM
            };
            this.utils = new Utils(carouselProperties);
            this.cells = new Cells(carouselProperties, this.utils);
            this.container = new Container(carouselProperties, this.utils, this.cells);
            this.slide = new Slide(carouselProperties, this.utils, this.cells, this.container);
            this.carousel = new Carousel(carouselProperties, this.utils, this.cells, this.container, this.slide);
          }
        }, {
          key: "detectDomChanges",
          value: function detectDomChanges() {
            var _this19 = this;

            var observer = new MutationObserver(function (mutations) {
              _this19.onDomChanges();
            });
            var config = {
              attributes: true,
              childList: true,
              characterData: true
            };
            observer.observe(this.elementRef.nativeElement, config);
          }
        }, {
          key: "onDomChanges",
          value: function onDomChanges() {
            this.cellLength = this.getCellLength();
            this.carousel.lineUpCells();
            this.ref.detectChanges();
          }
        }, {
          key: "setDimensions",
          value: function setDimensions() {
            this.hostStyleHeight = this.height + 'px';
            this.hostStyleWidth = this.width + 'px';
          }
        }, {
          key: "getImage",
          value: function getImage(index) {
            return this.carousel.getImage(index);
          }
        }, {
          key: "handleTransitionendCellContainer",
          value: function handleTransitionendCellContainer(event) {
            this.carousel.handleTransitionend();
          }
        }, {
          key: "toggleVideo",
          value: function toggleVideo(video) {
            event.preventDefault();

            if (this.videoProperties.noPlay) {
              return;
            }

            if (video.paused) {
              video.play();
              this.isVideoPlaying = true;
            } else {
              video.pause();
              this.isVideoPlaying = false;
            }

            this.ref.detectChanges();
          }
        }, {
          key: "getCellWidth",
          value: function getCellWidth() {
            var elementWidth = this.elementRef.nativeElement.clientWidth;

            if (this.cellsToShow) {
              var margin = this.cellsToShow > 1 ? this.margin : 0;
              var totalMargin = margin * (this.cellsToShow - 1);
              return (elementWidth - totalMargin) / this.cellsToShow;
            }

            if (this._cellWidth === '100%') {
              return elementWidth;
            } else {
              return this._cellWidth;
            }
          }
        }, {
          key: "next",
          value: function next() {
            this.carousel.next(this.cellsToScroll);
            this.carousel.stopAutoplay();
          }
        }, {
          key: "prev",
          value: function prev() {
            this.carousel.prev(this.cellsToScroll);
            this.carousel.stopAutoplay();
          }
        }, {
          key: "isNextArrowDisabled",
          value: function isNextArrowDisabled() {
            if (this.carousel) {
              return this.carousel.isNextArrowDisabled();
            }
          }
        }, {
          key: "isPrevArrowDisabled",
          value: function isPrevArrowDisabled() {
            if (this.carousel) {
              return this.carousel.isPrevArrowDisabled();
            }
          }
        }, {
          key: "getCellLength",
          value: function getCellLength() {
            if (this.images) {
              return this.images.length;
            } else {
              return this.cellsElement.children.length;
            }
          }
        }]);

        return CarouselComponent;
      }();

      CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
        return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CarouselComponent,
        selectors: [["carousel"], ["", "carousel", ""]],
        hostVars: 6,
        hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function CarouselComponent_resize_HostBindingHandler($event) {
              return ctx.onWindowResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("mousemove", function CarouselComponent_mousemove_HostBindingHandler($event) {
              return ctx.onMousemove($event);
            })("mouseleave", function CarouselComponent_mouseleave_HostBindingHandler($event) {
              return ctx.onMouseleave($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.hostStyleHeight)("width", ctx.hostStyleWidth);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel", ctx.hostClassCarousel);
          }
        },
        inputs: {
          height: "height",
          autoplay: "autoplay",
          autoplayInterval: "autoplayInterval",
          pauseOnHover: "pauseOnHover",
          dots: "dots",
          margin: "margin",
          objectFit: "objectFit",
          minSwipeDistance: "minSwipeDistance",
          transitionDuration: "transitionDuration",
          transitionTimingFunction: "transitionTimingFunction",
          counterSeparator: "counterSeparator",
          overflowCellsLimit: "overflowCellsLimit",
          listeners: "listeners",
          cellsToScroll: "cellsToScroll",
          freeScroll: "freeScroll",
          arrows: "arrows",
          arrowsTheme: "arrowsTheme",
          isCounter: ["counter", "isCounter"],
          images: "images",
          cellWidth: "cellWidth",
          loop: "loop",
          lightDOM: "lightDOM",
          id: "id",
          width: "width",
          borderRadius: "borderRadius",
          videoProperties: "videoProperties",
          cellsToShow: "cellsToShow",
          arrowsOutside: "arrowsOutside"
        },
        outputs: {
          events: "events"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 8,
        vars: 6,
        consts: [["class", "carousel-counter", 4, "ngIf"], [1, "carousel-container"], [1, "carousel-cells", 3, "transitionend"], ["cells", ""], ["ngFor", "", 3, "ngForOf"], ["class", "carousel-dots", 4, "ngIf"], ["class", "carousel-arrows", 3, "carousel-arrows-outside", "carousel-dark-arrows", 4, "ngIf"], [1, "carousel-counter"], ["class", "carousel-cell", 3, "width", "border-radius", 4, "ngIf"], [1, "carousel-cell"], ["draggable", "false", 3, "src", "object-fit", 4, "ngIf"], ["draggable", "false", 3, "src"], [1, "carousel-dots"], ["class", "carousel-dot", 3, "carousel-dot-active", 4, "ngFor", "ngForOf"], [1, "carousel-dot"], [1, "carousel-arrows"], [1, "carousel-arrow", "carousel-arrow-prev", 3, "click"], [1, "carousel-arrow", "carousel-arrow-next", 3, "click"]],
        template: function CarouselComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_div_0_Template, 2, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("transitionend", function CarouselComponent_Template_div_transitionend_2_listener($event) {
              return ctx.handleTransitionendCellContainer($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarouselComponent_ng_template_5_Template, 1, 1, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CarouselComponent_div_6_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CarouselComponent_div_7_Template, 3, 8, "div", 6);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCounter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-moving", ctx.isMoving);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dots);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isArrows);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        styles: ["[_nghost-%COMP%]{-moz-user-select:none;-webkit-user-select:none;box-sizing:border-box;display:block;height:100%;left:0;position:relative;top:0;transform-origin:top left;user-select:none;width:100%;z-index:10000}[_nghost-%COMP%]   .carousel-container[_ngcontent-%COMP%]{cursor:grab;height:100%;overflow:hidden;width:100%}[_nghost-%COMP%]   .carousel-container.carousel-moving[_ngcontent-%COMP%]{cursor:grabbing}[_nghost-%COMP%]   .carousel-counter[_ngcontent-%COMP%]{background-color:rgba(23,37,68,.3);border-radius:13px;color:#fff;font-size:11px;line-height:normal;padding:5px 7px;position:absolute;right:24px;text-align:right;top:8px;transition:opacity .2s;z-index:30}[_nghost-%COMP%]     .carousel-cells{display:block;height:100%;transition:transform .2s;width:100%;will-change:transform}[_nghost-%COMP%]     .carousel-cells .carousel-cell.swiper-prev-image{transform:translate3d(-100%,0,0)}[_nghost-%COMP%]     .carousel-cells .carousel-cell.swiper-next-image{transform:translate3d(100%,0,0)}[_nghost-%COMP%]     .carousel-cells .carousel-cell{height:100%;overflow:hidden;position:absolute;width:100%}[_nghost-%COMP%]     .carousel-cells .carousel-cell img, [_nghost-%COMP%]     .carousel-cells .carousel-cell video{height:100%;object-fit:contain;position:relative;width:100%}[_nghost-%COMP%]     .carousel-cells .carousel-cell img.swiper-hide{display:none}[_nghost-%COMP%]     .carousel-cells .carousel-cell .carousel-play{bottom:0;left:0;position:absolute;right:0;top:0;z-index:1}[_nghost-%COMP%]   .carousel-arrow[_ngcontent-%COMP%]{background-color:#fff;background-position:50%;background-repeat:no-repeat;background-size:31px;border-radius:100px;box-shadow:0 0 5px rgba(0,0,0,.15);cursor:pointer;height:40px;margin-top:-20px;position:absolute;top:50%;width:40px;z-index:10}[_nghost-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);left:10px}[_nghost-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);right:10px}[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%]{left:-60px}[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%]{right:-60px}[_nghost-%COMP%]   .carousel-dark-arrows[_ngcontent-%COMP%]   .carousel-arrow[_ngcontent-%COMP%]{filter:invert(1)}[_nghost-%COMP%]   .carousel-arrow-disabled[_ngcontent-%COMP%]{cursor:default;opacity:.5}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]{bottom:0;left:0;position:absolute;right:0;text-align:center;z-index:10}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .carousel-dot[_ngcontent-%COMP%]{border:2px solid #fff;border-radius:100px;display:inline-block;height:8px;margin:4px;width:8px}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .carousel-dot-active[_ngcontent-%COMP%]{background-color:#fff}"]
      });

      CarouselComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      CarouselComponent.propDecorators = {
        events: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autoplay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autoplayInterval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pauseOnHover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dots: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        borderRadius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        margin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        objectFit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minSwipeDistance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        transitionDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        transitionTimingFunction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        videoProperties: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        counterSeparator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        overflowCellsLimit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        listeners: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cellsToShow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cellsToScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        freeScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        arrows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        arrowsOutside: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        arrowsTheme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        images: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cellWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cellWidth']
        }],
        isCounter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['counter']
        }],
        loop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['loop']
        }],
        lightDOM: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['lightDOM']
        }],
        hostClassCarousel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.carousel']
        }],
        hostStyleHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.height']
        }],
        hostStyleWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.width']
        }],
        onWindowResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }],
        onMousemove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousemove', ['$event']]
        }],
        onMouseleave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseleave', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'carousel, [carousel]',
            template: "<div class=\"carousel-counter\" *ngIf=\"isCounter\">{{counter}}</div>\n\n<div class=\"carousel-container\" [class.carousel-moving]=\"isMoving\">\n\t<div class=\"carousel-cells\" #cells (transitionend)=\"handleTransitionendCellContainer($event)\">\n\t\t<ng-content></ng-content>\n\n\t\t<ng-template ngFor let-image [ngForOf]=\"images\" let-i=\"index\">\n\t\t\t<div class=\"carousel-cell\" \n\t\t\t\t[style.width]=\"getCellWidth()+'px'\"\n\t\t\t\t[style.border-radius]=\"borderRadius+'px'\"\n\t\t\t\t*ngIf=\"i < cellLimit\">\n\t\t\t\t<!-- Image -->\n\t\t\t\t<img \n\t\t\t\t\t*ngIf=\"getImage(i) && getImage(i)['image']\" \n\t\t\t\t\t[src]=\"getImage(i)['image']['path']\"\n\t\t\t\t\t[style.object-fit]=\"objectFit\"\n\t\t\t\t\tdraggable=\"false\" />\n\n\t\t\t</div>\n\t\t</ng-template>\n\t</div>\n\n\t<div class=\"carousel-dots\" *ngIf=\"dots\">\n\t\t<div class=\"carousel-dot\" [class.carousel-dot-active]=\"i === activeDotIndex\" *ngFor=\"let dot of dotsArr; index as i\"></div>\n\t</div>\n</div>\n\n<div class=\"carousel-arrows\" \n\t[class.carousel-arrows-outside]=\"arrowsOutside\" \n\t[class.carousel-dark-arrows]=\"arrowsTheme === 'dark'\"\n\t*ngIf=\"isArrows\">\n\t\n\t<div class=\"carousel-arrow carousel-arrow-prev\" [class.carousel-arrow-disabled]=\"isPrevArrowDisabled()\" (click)=\"prev()\"></div>\n\t<div class=\"carousel-arrow carousel-arrow-next\" [class.carousel-arrow-disabled]=\"isNextArrowDisabled()\" (click)=\"next()\"></div>\n</div>",
            styles: [":host{-moz-user-select:none;-webkit-user-select:none;box-sizing:border-box;display:block;height:100%;left:0;position:relative;top:0;transform-origin:top left;user-select:none;width:100%;z-index:10000}:host .carousel-container{cursor:grab;height:100%;overflow:hidden;width:100%}:host .carousel-container.carousel-moving{cursor:grabbing}:host .carousel-counter{background-color:rgba(23,37,68,.3);border-radius:13px;color:#fff;font-size:11px;line-height:normal;padding:5px 7px;position:absolute;right:24px;text-align:right;top:8px;transition:opacity .2s;z-index:30}:host ::ng-deep .carousel-cells{display:block;height:100%;transition:transform .2s;width:100%;will-change:transform}:host ::ng-deep .carousel-cells .carousel-cell.swiper-prev-image{transform:translate3d(-100%,0,0)}:host ::ng-deep .carousel-cells .carousel-cell.swiper-next-image{transform:translate3d(100%,0,0)}:host ::ng-deep .carousel-cells .carousel-cell{height:100%;overflow:hidden;position:absolute;width:100%}:host ::ng-deep .carousel-cells .carousel-cell img,:host ::ng-deep .carousel-cells .carousel-cell video{height:100%;object-fit:contain;position:relative;width:100%}:host ::ng-deep .carousel-cells .carousel-cell img.swiper-hide{display:none}:host ::ng-deep .carousel-cells .carousel-cell .carousel-play{bottom:0;left:0;position:absolute;right:0;top:0;z-index:1}:host .carousel-arrow{background-color:#fff;background-position:50%;background-repeat:no-repeat;background-size:31px;border-radius:100px;box-shadow:0 0 5px rgba(0,0,0,.15);cursor:pointer;height:40px;margin-top:-20px;position:absolute;top:50%;width:40px;z-index:10}:host .carousel-arrow-prev{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);left:10px}:host .carousel-arrow-next{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);right:10px}:host .carousel-arrows-outside .carousel-arrow-prev{left:-60px}:host .carousel-arrows-outside .carousel-arrow-next{right:-60px}:host .carousel-dark-arrows .carousel-arrow{filter:invert(1)}:host .carousel-arrow-disabled{cursor:default;opacity:.5}:host .carousel-dots{bottom:0;left:0;position:absolute;right:0;text-align:center;z-index:10}:host .carousel-dots .carousel-dot{border:2px solid #fff;border-radius:100px;display:inline-block;height:8px;margin:4px;width:8px}:host .carousel-dots .carousel-dot-active{background-color:#fff}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          events: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          autoplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          autoplayInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pauseOnHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dots: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          margin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          objectFit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          minSwipeDistance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          transitionDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          transitionTimingFunction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          counterSeparator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          overflowCellsLimit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          listeners: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cellsToScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          freeScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          arrows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          arrowsTheme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hostClassCarousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.carousel']
          }],
          isCounter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['counter']
          }],
          images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cellWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cellWidth']
          }],
          loop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['loop']
          }],
          lightDOM: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['lightDOM']
          }],
          onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
          }],
          onMousemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousemove', ['$event']]
          }],
          onMouseleave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave', ['$event']]
          }],
          hostStyleHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.height']
          }],
          hostStyleWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width']
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          borderRadius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          videoProperties: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cellsToShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          arrowsOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var IvyCarouselModule = function IvyCarouselModule() {
        _classCallCheck(this, IvyCarouselModule);
      };

      IvyCarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: IvyCarouselModule
      });
      IvyCarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function IvyCarouselModule_Factory(t) {
          return new (t || IvyCarouselModule)();
        },
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IvyCarouselModule, {
          declarations: function declarations() {
            return [CarouselComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [CarouselComponent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IvyCarouselModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [CarouselComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [CarouselComponent],
            providers: [],
            bootstrap: [],
            entryComponents: [CarouselComponent]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of angular-responsive-carousel
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=angular-responsive-carousel.js.map

      /***/

    },

    /***/
    "YeRg":
    /*!********************************************************!*\
      !*** ./src/app/views/base/customerdetail.component.ts ***!
      \********************************************************/

    /*! exports provided: CustomerDetailComponent */

    /***/
    function YeRg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerDetailComponent", function () {
        return CustomerDetailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_customerdetail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./customerdetail.component.html */
      "SmBP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../data.service */
      "R7Hv");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      var CustomerDetailComponent = /*#__PURE__*/function () {
        function CustomerDetailComponent(dataservice, activatedRouter, router, fb) {
          _classCallCheck(this, CustomerDetailComponent);

          this.dataservice = dataservice;
          this.activatedRouter = activatedRouter;
          this.router = router;
          this.fb = fb;
          this.loading = true;
          this.details = [];
          this.btnLoading = false;
          this.groups = [];
          this.agentForm = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            phone1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            phone2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            phone3: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            group: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
          });
          this.commentForm = this.fb.group({
            RemarksText: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            event_date_time: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
          });
        }

        _createClass(CustomerDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            this.getLists();
            this.activatedRouter.params.subscribe(function (params) {
              _this20.id = params["id"];
            });
            this.dataservice.getSingleCustomer(this.id).valueChanges.subscribe(function (result) {
              console.log("getSingleCustomer", result.data.customer);
              _this20.details = result.data.customer;
              _this20.agentForm = _this20.fb.group({
                name: [_this20.details.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                email: [_this20.details.Email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                phone1: [_this20.details.Contact_Number_1, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                phone2: [_this20.details.Contact_Number_2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                phone3: [_this20.details.Contact_Number_3, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                group: [_this20.details.group.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
              });
              _this20.loading = false;
            });
          }
        }, {
          key: "getLists",
          value: function getLists() {
            var _this21 = this;

            this.loading = true;
            this.dataservice.getGroups().valueChanges.subscribe(function (result) {
              console.log("getGroups", result.data.groups);
              _this21.groups = result.data.groups;
            });
          }
        }, {
          key: "FormSubmit",
          value: function FormSubmit() {
            var _this22 = this;

            var resp = {};
            console.log(this.agentForm.value);
            this.dataservice.EditAgent(this.details.id, this.agentForm.value).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.updateTeleCallerContact) {
                alert("Agent edited successfully!");

                _this22.myModal.hide();
              } else {
                alert("Failed. Please check the fields!");
              }
            });
          }
        }, {
          key: "CommentSubmit",
          value: function CommentSubmit() {
            var _this23 = this;

            var resp = {};
            console.log(this.commentForm.value);
            this.dataservice.AddCustomerComment(this.details.id, this.commentForm.value).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.updateCustomer) {
                alert("Comment added successfully!");

                _this23.commentModal.hide();
              } else {
                alert("Failed. Please check the fields!");
              }
            });
          }
        }, {
          key: "deleteAgent",
          value: function deleteAgent() {
            var _this24 = this;

            var resp = {};
            this.dataservice.DeleteAgent(this.id).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.deleteTeleCallerContact) {
                alert("Agent deleted successfully!");

                _this24.router.navigate(["/order/order_processing"]);

                _this24.deleteModal.hide();
              } else {
                alert("Failed. Please check again!");
              }
            });
          }
        }]);

        return CustomerDetailComponent;
      }();

      CustomerDetailComponent.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }];
      };

      CustomerDetailComponent.propDecorators = {
        myModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["myModal"]
        }],
        deleteModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["deleteModal"]
        }],
        commentModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["commentModal"]
        }]
      };
      CustomerDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_customerdetail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], CustomerDetailComponent);
      /***/
    },

    /***/
    "cgWR":
    /*!***************************************************!*\
      !*** ./src/app/views/base/base-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: BaseRoutingModule */

    /***/
    function cgWR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseRoutingModule", function () {
        return BaseRoutingModule;
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


      var _readyfordelivery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./readyfordelivery.component */
      "/5UO");
      /* harmony import */


      var _allorders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./allorders.component */
      "D6iP");
      /* harmony import */


      var _neworders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./neworders.component */
      "EZE2");
      /* harmony import */


      var _agentdetail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./agentdetail.component */
      "xYI8");
      /* harmony import */


      var _customerdetail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./customerdetail.component */
      "YeRg");
      /* harmony import */


      var _login_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../login/auth.guard */
      "nl+3");

      var routes = [{
        path: '',
        children: [{
          path: '',
          redirectTo: 'cards'
        }, {
          path: 'ready_for_delivery',
          canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
          component: _readyfordelivery_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"],
          data: {
            roles: 'TELE_CALLER',
            title: 'Customers'
          }
        }, {
          path: 'order_processing',
          canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
          component: _neworders_component__WEBPACK_IMPORTED_MODULE_5__["AgentsComponent"],
          data: {
            roles: 'TELE_CALLER',
            title: 'Agents'
          }
        }, {
          path: 'all_orders',
          component: _allorders_component__WEBPACK_IMPORTED_MODULE_4__["AllOrdersComponent"],
          data: {
            title: 'All Orders'
          }
        }, {
          path: 'agent_details/:id',
          component: _agentdetail_component__WEBPACK_IMPORTED_MODULE_6__["AgentDetailComponent"],
          data: {
            title: 'Agent Details'
          }
        }, {
          path: 'customer_details/:id',
          component: _customerdetail_component__WEBPACK_IMPORTED_MODULE_7__["CustomerDetailComponent"],
          data: {
            title: 'Customer Details'
          }
        }]
      }];

      var BaseRoutingModule = function BaseRoutingModule() {
        _classCallCheck(this, BaseRoutingModule);
      };

      BaseRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BaseRoutingModule);
      /***/
    },

    /***/
    "r75j":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/allorders.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function r75j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h2> All Orders</h2>\n    </div>\n    <div class=\"card-body\">\n      <div *ngFor=\"let item of orders\" class=\"row m-1\">\n        <div class=\"card\" style=\"width: 100%;\">\n          <div class=\"card-body\">\n            <div class=\"row\" style=\"justify-content: space-between;display: flex;\">\n              <div>\n                <h4>{{item.order_id}}</h4><br> Pick up date : Jan 22 2020 <br> Pick up time : 4:30 pm\n              </div>\n              <div>\n                <div class=\"price-displayer\" style=\"background-color: #4AD991;\"><span\n                    class=\"price\">{{item.total_amount}}</span> <br />\n                  <span>ORDER VALUE</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "wg56":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/agentdetail.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function wg56(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div bsModal #deleteModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body text-center\">\r\n          Do you want to delete this agent?\r\n        </div>\r\n        <div class=\"modal-footer justify-content-around\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">\r\n            No! Cancel.\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteAgent()\">\r\n            Yes! Delete.\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"card\">\r\n  <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n    <h2>Agent Details</h2>\r\n    <span>\r\n      <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"customerModal.show()\">\r\n        New Customer\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"myModal.show()\">\r\n        Edit\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" (click)=\"deleteModal.show()\">\r\n        Delete\r\n      </button></span>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <table class=\"table table-striped\">\r\n          <tbody>\r\n            <tr>\r\n              <td>ID</td>\r\n              <td>{{details.id}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Name</td>\r\n              <td>{{details.Name}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Contact 1</td>\r\n              <td>{{details.Contact_Number_1}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Contact 2</td>\r\n              <td>{{ details.Contact_Number_2 }}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Contact 3</td>\r\n              <td>{{ details.Contact_Number_3 }}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Email</td>\r\n              <td>{{ details.Email }}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Group</td>\r\n              <td>\r\n                <span class=\"badge badge-warning\">{{ details.group?.Name }}</span>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"card\" *ngFor=\"let item of details.telecaller_remarks\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">{{item.CallHistory.event_date_time}}</h5>\r\n            <p class=\"card-text\">{{item.RemarksText}}</p>\r\n            <span class=\"badge badge-primary\">{{item.CallHistory.users_permissions_user.username}}</span>\r\n          </div>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"commentModal.show()\">\r\n          Add Comment\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Edit Agent</h4>\r\n          <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form [formGroup]=\"agentForm\" (ngSubmit)=\"FormSubmit()\">\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" formControlName=\"name\"\r\n                placeholder=\"Enter agent name\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">E-mail</label>\r\n              <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" formControlName=\"email\"\r\n                placeholder=\"Enter agent email\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"street\">Phone 1</label>\r\n              <input type=\"number\" class=\"form-control\" id=\"phone1\" name=\"phone1\" formControlName=\"phone1\"\r\n                placeholder=\"Enter Phone 1\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"phone2\">Phone 2</label>\r\n              <input type=\"number\" class=\"form-control\" id=\"phone2\" name=\"phone2\" formControlName=\"phone2\"\r\n                placeholder=\"Enter Phone 2\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"phone3\">Phone 3</label>\r\n              <input type=\"number\" class=\"form-control\" id=\"phone3\" name=\"phone3\" formControlName=\"phone3\"\r\n                placeholder=\"Enter Phone 3\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"group\">Group</label>\r\n              <select class=\"form-control\" id=\"group\" required ngModel name=\"group\" formControlName=\"group\">\r\n                <option value=\"\" disabled selected hidden>Choose...</option>\r\n                <option *ngFor=\"let item of groups\" value=\"{{ item.id }}\">\r\n                  {{ item.Name }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\r\n              Close\r\n            </button>\r\n            <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !agentForm.valid\">\r\n              <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n              Save changes\r\n            </button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n  <div bsModal #commentModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Add Comment</h4>\r\n          <button type=\"button\" class=\"close\" (click)=\"commentModal.hide()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form [formGroup]=\"commentForm\" (ngSubmit)=\"CommentSubmit()\">\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Remarks</label>\r\n              <textarea class=\"form-control\" maxlength=\"250\" id=\"RemarksText\" name=\"RemarksText\"\r\n                formControlName=\"RemarksText\" placeholder=\"Enter remarks\"></textarea>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Date</label>\r\n              <input type=\"datetime-local\" class=\"form-control\" id=\"event_date_time\" name=\"event_date_time\"\r\n                formControlName=\"event_date_time\" />\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\r\n              Close\r\n            </button>\r\n            <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !commentForm.valid\">\r\n              <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n              Save changes\r\n            </button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n  <div bsModal #customerModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Add New Customer</h4>\r\n          <button type=\"button\" class=\"close\" (click)=\"customerModal.hide()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form [formGroup]=\"customerForm\" (ngSubmit)=\"customerSubmit()\">\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Name of Bride</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"NameOfBride\" name=\"NameOfBride\" formControlName=\"NameOfBride\"\r\n                placeholder=\"Enter bride's name\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Name of Father</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"NameOfFather\" name=\"NameOfFather\"\r\n                formControlName=\"NameOfFather\" placeholder=\"Enter father's name\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Name of Mother</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"NameOfMother\" name=\"NameOfMother\"\r\n                formControlName=\"NameOfMother\" placeholder=\"Enter mother's name\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Marriage date</label>\r\n              <input type=\"date\" class=\"form-control\" id=\"MarriageDate\" name=\"MarriageDate\"\r\n                formControlName=\"MarriageDate\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"group\">Marriage month</label>\r\n              <select class=\"form-control\" id=\"MarriageMonth\" required ngModel name=\"MarriageMonth\" formControlName=\"MarriageMonth\">\r\n                <option value=\"\" disabled selected hidden>Choose...</option>\r\n                <option *ngFor=\"let item of Months\" value=\"{{ item.id }}\">\r\n                  {{ item.Name }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n            <!-- <div class=\"form-group\">\r\n              <label for=\"group\">Agent</label>\r\n              <select class=\"form-control\" id=\"tele_caller_contact\" required ngModel name=\"tele_caller_contact\" formControlName=\"tele_caller_contact\">\r\n                <option value=\"\" disabled selected hidden>Choose...</option>\r\n                <option *ngFor=\"let item of agents\" value=\"{{ item.id }}\">\r\n                  {{ item.Name }}\r\n                </option>\r\n              </select>\r\n            </div> -->\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">House Name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"HouseName\" name=\"HouseName\"\r\n                formControlName=\"HouseName\" placeholder=\"Enter House Name\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Landmark</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"Landmark\" name=\"Landmark\"\r\n                formControlName=\"Landmark\" placeholder=\"Enter Landmark\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"locality\">Name of locality</label>\r\n              <!-- <input type=\"text\" class=\"form-control\" id=\"locality\" name=\"locality\" formControlName=\"locality\"\r\n                placeholder=\"Enter locality\" /> -->\r\n                <select class=\"form-control\" id=\"locality\" required ngModel name=\"locality\" formControlName=\"locality\">\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of localities\" value=\"{{ item.id }}\">\r\n                    {{ item.Name }}\r\n                  </option>\r\n                </select>\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\r\n              Close\r\n            </button>\r\n            <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !customerForm.valid\">\r\n              <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n              Save changes\r\n            </button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "xYI8":
    /*!*****************************************************!*\
      !*** ./src/app/views/base/agentdetail.component.ts ***!
      \*****************************************************/

    /*! exports provided: AgentDetailComponent */

    /***/
    function xYI8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentDetailComponent", function () {
        return AgentDetailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_agentdetail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./agentdetail.component.html */
      "wg56");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../data.service */
      "R7Hv");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../constants/columnMetadata */
      "7nfi");

      var AgentDetailComponent = /*#__PURE__*/function () {
        function AgentDetailComponent(dataservice, activatedRouter, router, fb) {
          _classCallCheck(this, AgentDetailComponent);

          this.dataservice = dataservice;
          this.activatedRouter = activatedRouter;
          this.router = router;
          this.fb = fb;
          this.loading = true;
          this.details = [];
          this.btnLoading = false;
          this.groups = [];
          this.localities = [];
          this.agentForm = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            phone1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            phone2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            phone3: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            group: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
          });
          this.commentForm = this.fb.group({
            RemarksText: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            event_date_time: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
          });
          this.Months = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["Months"]);
        }

        _createClass(AgentDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            this.getLists();
            this.activatedRouter.params.subscribe(function (params) {
              _this25.id = params["id"];
            });
            this.dataservice.getSingleAgent(this.id).valueChanges.subscribe(function (result) {
              console.log("getSingleAgent", result.data.teleCallerContact);
              _this25.details = result.data.teleCallerContact;
              _this25.agentForm = _this25.fb.group({
                name: [_this25.details.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                email: [_this25.details.Email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                phone1: [_this25.details.Contact_Number_1, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                phone2: [_this25.details.Contact_Number_2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                phone3: [_this25.details.Contact_Number_3, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                group: [_this25.details.group.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
              });
              _this25.loading = false;
            });
            this.customerForm = this.fb.group({
              NameOfBride: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              NameOfFather: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              NameOfMother: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              MarriageDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              MarriageMonth: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              tele_caller_contact: [this.id, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              HouseName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              Landmark: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              locality: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
            });
          }
        }, {
          key: "getLists",
          value: function getLists() {
            var _this26 = this;

            this.loading = true;
            this.dataservice.getGroups().valueChanges.subscribe(function (result) {
              console.log("getGroups", result.data.groups);
              _this26.groups = result.data.groups;
            });
            this.dataservice.getLocalities().valueChanges.subscribe(function (result) {
              console.log("getLocalities", result.data.localities);
              _this26.localities = result.data.localities;
            });
          }
        }, {
          key: "FormSubmit",
          value: function FormSubmit() {
            var _this27 = this;

            var resp = {};
            console.log(this.agentForm.value);
            this.dataservice.EditAgent(this.details.id, this.agentForm.value).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.updateTeleCallerContact) {
                alert("Agent edited successfully!");

                _this27.myModal.hide();
              } else {
                alert("Failed. Please check the fields!");
              }
            });
          }
        }, {
          key: "customerSubmit",
          value: function customerSubmit() {
            var _this28 = this;

            var resp = {};
            console.log(this.customerForm.value);
            this.dataservice.Addcustomer(this.customerForm.value).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.createCustomer) {
                alert("customer added successfully!");

                _this28.getLists();

                _this28.customerModal.hide();
              } else {
                alert("Failed. Please check the fields!");
              }
            });
          }
        }, {
          key: "CommentSubmit",
          value: function CommentSubmit() {
            var _this29 = this;

            var resp = {};
            console.log(this.commentForm.value);
            this.dataservice.AddComment(this.details.id, this.commentForm.value).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.updateTeleCallerContact) {
                alert("Comment added successfully!");

                _this29.commentModal.hide();
              } else {
                alert("Failed. Please check the fields!");
              }
            });
          }
        }, {
          key: "deleteAgent",
          value: function deleteAgent() {
            var _this30 = this;

            var resp = {};
            this.dataservice.DeleteAgent(this.id).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.deleteTeleCallerContact) {
                alert("Agent deleted successfully!");

                _this30.router.navigate(["/order/order_processing"]);

                _this30.deleteModal.hide();
              } else {
                alert("Failed. Please check again!");
              }
            });
          }
        }]);

        return AgentDetailComponent;
      }();

      AgentDetailComponent.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }];
      };

      AgentDetailComponent.propDecorators = {
        myModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["myModal"]
        }],
        customerModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["customerModal"]
        }],
        deleteModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["deleteModal"]
        }],
        commentModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["commentModal"]
        }]
      };
      AgentDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_agentdetail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], AgentDetailComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-base-base-module-es5.js.map