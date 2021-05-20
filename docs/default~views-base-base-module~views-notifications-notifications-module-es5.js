(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-base-base-module~views-notifications-notifications-module"], {
    /***/
    "LqlI":
    /*!**************************************************************************!*\
      !*** ./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js ***!
      \**************************************************************************/

    /*! exports provided: BsModalRef, BsModalService, MODAL_CONFIG_DEFAULT_OVERRIDE, ModalBackdropComponent, ModalBackdropOptions, ModalContainerComponent, ModalDirective, ModalModule, ModalOptions, ɵa */

    /***/
    function LqlI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BsModalRef", function () {
        return BsModalRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BsModalService", function () {
        return BsModalService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MODAL_CONFIG_DEFAULT_OVERRIDE", function () {
        return MODAL_CONFIG_DEFAULT_OVERRIDE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function () {
        return ModalBackdropComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalBackdropOptions", function () {
        return ModalBackdropOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function () {
        return ModalContainerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalDirective", function () {
        return ModalDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalModule", function () {
        return ModalModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalOptions", function () {
        return ModalOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return CLASS_NAME;
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


      var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-bootstrap/component-loader */
      "z/SZ");
      /* harmony import */


      var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/positioning */
      "2uy1");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @template T
       */
      // tslint:disable-next-line:no-any


      var _c0 = ["*"];

      var BsModalRef = function BsModalRef() {
        _classCallCheck(this, BsModalRef);

        /**
         * Hides the modal
         */
        this.hide = Function;
        /**
         * Sets new class to modal window
         */

        this.setClass = Function;
      };

      BsModalRef.ɵfac = function BsModalRef_Factory(t) {
        return new (t || BsModalRef)();
      };

      BsModalRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BsModalRef,
        factory: BsModalRef.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsModalRef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ModalBackdropOptions =
      /**
       * @param {?} options
       */
      function ModalBackdropOptions(options) {
        _classCallCheck(this, ModalBackdropOptions);

        this.animate = true;
        Object.assign(this, options);
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @template T
       */


      var ModalOptions = function ModalOptions() {
        _classCallCheck(this, ModalOptions);
      };

      ModalOptions.ɵfac = function ModalOptions_Factory(t) {
        return new (t || ModalOptions)();
      };

      ModalOptions.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ModalOptions,
        factory: ModalOptions.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalOptions, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();

      if (false) {}
      /** @type {?} */


      var modalConfigDefaults = {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: false,
        ignoreBackdropClick: false,
        "class": '',
        animated: true,
        initialState: {}
      };
      /** @type {?} */

      var MODAL_CONFIG_DEFAULT_OVERRIDE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('override-default-config');
      /** @type {?} */

      var CLASS_NAME = {
        SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
        BACKDROP: 'modal-backdrop',
        OPEN: 'modal-open',
        FADE: 'fade',
        IN: 'in',
        // bs3
        SHOW: 'show' // bs4

      };
      /** @type {?} */

      var SELECTOR = {
        DIALOG: '.modal-dialog',
        DATA_TOGGLE: '[data-toggle="modal"]',
        DATA_DISMISS: '[data-dismiss="modal"]',
        FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
      };
      /** @type {?} */

      var TRANSITION_DURATIONS = {
        MODAL: 300,
        BACKDROP: 150
      };
      /** @type {?} */

      var DISMISS_REASONS = {
        BACKRDOP: 'backdrop-click',
        ESC: 'esc',
        BACK: 'browser-back-navigation-clicked'
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var ModalContainerComponent = /*#__PURE__*/function () {
        /**
         * @param {?} options
         * @param {?} _element
         * @param {?} _renderer
         */
        function ModalContainerComponent(options, _element, _renderer) {
          _classCallCheck(this, ModalContainerComponent);

          this._element = _element;
          this._renderer = _renderer;
          this.isShown = false;
          this.isModalHiding = false;
          this.clickStartedInContent = false;
          this.config = Object.assign({}, options);
        }
        /**
         * @return {?}
         */


        _createClass(ModalContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            if (this.isAnimated) {
              this._renderer.addClass(this._element.nativeElement, CLASS_NAME.FADE);
            }

            this._renderer.setStyle(this._element.nativeElement, 'display', 'block');

            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this.isShown = true;

              _this._renderer.addClass(_this._element.nativeElement, Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
            }, this.isAnimated ? TRANSITION_DURATIONS.BACKDROP : 0);

            if (document && document.body) {
              if (this.bsModalService.getModalsCount() === 1) {
                this.bsModalService.checkScrollbar();
                this.bsModalService.setScrollbar();
              }

              this._renderer.addClass(document.body, CLASS_NAME.OPEN);
            }

            if (this._element.nativeElement) {
              this._element.nativeElement.focus();
            }
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onClickStarted",
          value: function onClickStarted(event) {
            this.clickStartedInContent = event.target !== this._element.nativeElement;
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onClickStop",
          value: function onClickStop(event) {
            /** @type {?} */
            var clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;

            if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || !clickedInBackdrop) {
              this.clickStartedInContent = false;
              return;
            }

            this.bsModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
            this.hide();
          }
          /**
           * @return {?}
           */

        }, {
          key: "onPopState",
          value: function onPopState() {
            this.bsModalService.setDismissReason(DISMISS_REASONS.BACK);
            this.hide();
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onEsc",
          value: function onEsc(event) {
            if (!this.isShown) {
              return;
            } // tslint:disable-next-line:deprecation


            if (event.keyCode === 27 || event.key === 'Escape') {
              event.preventDefault();
            }

            if (this.config.keyboard && this.level === this.bsModalService.getModalsCount()) {
              this.bsModalService.setDismissReason(DISMISS_REASONS.ESC);
              this.hide();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.isShown) {
              this.hide();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "hide",
          value: function hide() {
            var _this2 = this;

            if (this.isModalHiding || !this.isShown) {
              return;
            }

            this.isModalHiding = true;

            this._renderer.removeClass(this._element.nativeElement, Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])() ? CLASS_NAME.IN : CLASS_NAME.SHOW);

            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this2.isShown = false;

              if (document && document.body && _this2.bsModalService.getModalsCount() === 1) {
                _this2._renderer.removeClass(document.body, CLASS_NAME.OPEN);
              }

              _this2.bsModalService.hide(_this2.config.id);

              _this2.isModalHiding = false;
            }, this.isAnimated ? TRANSITION_DURATIONS.MODAL : 0);
          }
        }]);

        return ModalContainerComponent;
      }();

      ModalContainerComponent.ɵfac = function ModalContainerComponent_Factory(t) {
        return new (t || ModalContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ModalOptions), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      ModalContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ModalContainerComponent,
        selectors: [["modal-container"]],
        hostAttrs: ["role", "dialog", "tabindex", "-1", 1, "modal"],
        hostVars: 3,
        hostBindings: function ModalContainerComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ModalContainerComponent_mousedown_HostBindingHandler($event) {
              return ctx.onClickStarted($event);
            })("mouseup", function ModalContainerComponent_mouseup_HostBindingHandler($event) {
              return ctx.onClickStop($event);
            })("popstate", function ModalContainerComponent_popstate_HostBindingHandler() {
              return ctx.onPopState();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keydown.esc", function ModalContainerComponent_keydown_esc_HostBindingHandler($event) {
              return ctx.onEsc($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-modal", true)("aria-labelledby", ctx.config.ariaLabelledBy)("aria-describedby", ctx.config.ariaDescribedby);
          }
        },
        ngContentSelectors: _c0,
        decls: 3,
        vars: 2,
        consts: [["role", "document"], [1, "modal-content"]],
        template: function ModalContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("modal-dialog" + (ctx.config["class"] ? " " + ctx.config["class"] : ""));
          }
        },
        encapsulation: 2
      });
      /** @nocollapse */

      ModalContainerComponent.ctorParameters = function () {
        return [{
          type: ModalOptions
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      };

      ModalContainerComponent.propDecorators = {
        onClickStarted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousedown', ['$event']]
        }],
        onClickStop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseup', ['$event']]
        }],
        onPopState: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:popstate']
        }],
        onEsc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:keydown.esc', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'modal-container',
            template: "\n    <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n      <div class=\"modal-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
            host: {
              "class": 'modal',
              role: 'dialog',
              tabindex: '-1',
              '[attr.aria-modal]': 'true',
              '[attr.aria-labelledby]': 'config.ariaLabelledBy',
              '[attr.aria-describedby]': 'config.ariaDescribedby'
            }
          }]
        }], function () {
          return [{
            type: ModalOptions
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          /**
           * @param {?} event
           * @return {?}
           */
          onClickStarted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          onClickStop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseup', ['$event']]
          }],

          /**
           * @return {?}
           */
          onPopState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:popstate']
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          onEsc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keydown.esc', ['$event']]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * This component will be added as background layout for modals if enabled
       */


      var ModalBackdropComponent = /*#__PURE__*/function () {
        /**
         * @param {?} element
         * @param {?} renderer
         */
        function ModalBackdropComponent(element, renderer) {
          _classCallCheck(this, ModalBackdropComponent);

          this._isShown = false;
          this.element = element;
          this.renderer = renderer;
        }
        /**
         * @return {?}
         */


        _createClass(ModalBackdropComponent, [{
          key: "isAnimated",
          get: function get() {
            return this._isAnimated;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._isAnimated = value; // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
          }
          /**
           * @return {?}
           */

        }, {
          key: "isShown",
          get: function get() {
            return this._isShown;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._isShown = value;

            if (value) {
              this.renderer.addClass(this.element.nativeElement, "".concat(CLASS_NAME.IN));
            } else {
              this.renderer.removeClass(this.element.nativeElement, "".concat(CLASS_NAME.IN));
            }

            if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
              if (value) {
                this.renderer.addClass(this.element.nativeElement, "".concat(CLASS_NAME.SHOW));
              } else {
                this.renderer.removeClass(this.element.nativeElement, "".concat(CLASS_NAME.SHOW));
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.isAnimated) {
              this.renderer.addClass(this.element.nativeElement, "".concat(CLASS_NAME.FADE));
              ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].reflow(this.element.nativeElement);
            }

            this.isShown = true;
          }
        }]);

        return ModalBackdropComponent;
      }();

      ModalBackdropComponent.ɵfac = function ModalBackdropComponent_Factory(t) {
        return new (t || ModalBackdropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      ModalBackdropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ModalBackdropComponent,
        selectors: [["bs-modal-backdrop"]],
        hostAttrs: [1, "modal-backdrop"],
        decls: 0,
        vars: 0,
        template: function ModalBackdropComponent_Template(rf, ctx) {},
        encapsulation: 2
      });
      /** @nocollapse */

      ModalBackdropComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalBackdropComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'bs-modal-backdrop',
            template: ' ',
            host: {
              "class": CLASS_NAME.BACKDROP
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var TRANSITION_DURATION = 300;
      /** @type {?} */

      var BACKDROP_TRANSITION_DURATION = 150;
      /**
       * Mark any code with directive to show it's content in modal
       */

      var ModalDirective = /*#__PURE__*/function () {
        /**
         * @param {?} _element
         * @param {?} _viewContainerRef
         * @param {?} _renderer
         * @param {?} clf
         * @param {?} modalDefaultOption
         */
        function ModalDirective(_element, _viewContainerRef, _renderer, clf, modalDefaultOption) {
          _classCallCheck(this, ModalDirective);

          this._element = _element;
          this._renderer = _renderer;
          /**
           * This event fires immediately when the `show` instance method is called.
           */

          this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * This event is fired when the modal has been made visible to the user
           * (will wait for CSS transitions to complete)
           */

          this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * This event is fired immediately when
           * the hide instance method has been called.
           */

          this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * This event is fired when the modal has finished being
           * hidden from the user (will wait for CSS transitions to complete).
           */

          this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this._isShown = false;
          this.isBodyOverflowing = false;
          this.originalBodyPadding = 0;
          this.scrollbarWidth = 0;
          this.timerHideModal = 0;
          this.timerRmBackDrop = 0;
          this.isNested = false;
          this.clickStartedInContent = false;
          this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
          this._config = modalDefaultOption || modalConfigDefaults;
        }
        /**
         * allows to set modal configuration via element property
         * @param {?} conf
         * @return {?}
         */


        _createClass(ModalDirective, [{
          key: "config",
          get:
          /**
           * @return {?}
           */
          function get() {
            return this._config;
          }
          /**
           * @return {?}
           */
          ,
          set: function set(conf) {
            this._config = this.getConfig(conf);
          }
        }, {
          key: "isShown",
          get: function get() {
            return this._isShown;
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onClickStarted",
          value: function onClickStarted(event) {
            this.clickStartedInContent = event.target !== this._element.nativeElement;
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onClickStop",
          value: function onClickStop(event) {
            /** @type {?} */
            var clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;

            if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || !clickedInBackdrop) {
              this.clickStartedInContent = false;
              return;
            }

            this.dismissReason = DISMISS_REASONS.BACKRDOP;
            this.hide(event);
          } // todo: consider preventing default and stopping propagation

          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onEsc",
          value: function onEsc(event) {
            if (!this._isShown) {
              return;
            } // tslint:disable-next-line:deprecation


            if (event.keyCode === 27 || event.key === 'Escape') {
              event.preventDefault();
            }

            if (this.config.keyboard) {
              this.dismissReason = DISMISS_REASONS.ESC;
              this.hide();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.config = void 0;

            if (this._isShown) {
              this._isShown = false;
              this.hideModal();

              this._backdrop.dispose();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this._config = this._config || this.getConfig();
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              if (_this3._config.show) {
                _this3.show();
              }
            }, 0);
          }
          /* Public methods */

          /**
           * Allows to manually toggle modal visibility
           * @return {?}
           */

        }, {
          key: "toggle",
          value: function toggle() {
            return this._isShown ? this.hide() : this.show();
          }
          /**
           * Allows to manually open modal
           * @return {?}
           */

        }, {
          key: "show",
          value: function show() {
            var _this4 = this;

            this.dismissReason = null;
            this.onShow.emit(this);

            if (this._isShown) {
              return;
            }

            clearTimeout(this.timerHideModal);
            clearTimeout(this.timerRmBackDrop);
            this._isShown = true;
            this.checkScrollbar();
            this.setScrollbar();

            if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
              if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.classList.contains(CLASS_NAME.OPEN)) {
                this.isNested = true;
              } else {
                this._renderer.addClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, CLASS_NAME.OPEN);
              }
            }

            this.showBackdrop(
            /**
            * @return {?}
            */
            function () {
              _this4.showElement();
            });
          }
          /**
           * Allows to manually close modal
           * @param {?=} event
           * @return {?}
           */

        }, {
          key: "hide",
          value: function hide(event) {
            var _this5 = this;

            if (event) {
              event.preventDefault();
            }

            this.onHide.emit(this); // todo: add an option to prevent hiding

            if (!this._isShown) {
              return;
            }

            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].clearTimeout(this.timerHideModal);
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].clearTimeout(this.timerRmBackDrop);
            this._isShown = false;

            this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.IN);

            if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
              this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.SHOW);
            } // this._addClassIn = false;


            if (this._config.animated) {
              this.timerHideModal = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout(
              /**
              * @return {?}
              */
              function () {
                return _this5.hideModal();
              }, TRANSITION_DURATION);
            } else {
              this.hideModal();
            }
          }
          /**
           * Private methods \@internal
           * @protected
           * @param {?=} config
           * @return {?}
           */

        }, {
          key: "getConfig",
          value: function getConfig(config) {
            return Object.assign({}, this._config, config);
          }
          /**
           *  Show dialog
           * \@internal
           * @protected
           * @return {?}
           */

        }, {
          key: "showElement",
          value: function showElement() {
            var _this6 = this;

            // todo: replace this with component loader usage
            if (!this._element.nativeElement.parentNode || this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
              // don't move modals dom position
              if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
                ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.appendChild(this._element.nativeElement);
              }
            }

            this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');

            this._renderer.setAttribute(this._element.nativeElement, 'aria-modal', 'true');

            this._renderer.setStyle(this._element.nativeElement, 'display', 'block');

            this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);

            if (this._config.animated) {
              ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].reflow(this._element.nativeElement);
            } // this._addClassIn = true;


            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.IN);

            if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
              this._renderer.addClass(this._element.nativeElement, CLASS_NAME.SHOW);
            }
            /** @type {?} */


            var transitionComplete =
            /**
            * @return {?}
            */
            function transitionComplete() {
              if (_this6._config.focus) {
                _this6._element.nativeElement.focus();
              }

              _this6.onShown.emit(_this6);
            };

            if (this._config.animated) {
              setTimeout(transitionComplete, TRANSITION_DURATION);
            } else {
              transitionComplete();
            }
          }
          /**
           * \@internal
           * @protected
           * @return {?}
           */

        }, {
          key: "hideModal",
          value: function hideModal() {
            var _this7 = this;

            this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');

            this._renderer.setStyle(this._element.nativeElement, 'display', 'none');

            this.showBackdrop(
            /**
            * @return {?}
            */
            function () {
              if (!_this7.isNested) {
                if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
                  _this7._renderer.removeClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, CLASS_NAME.OPEN);
                }

                _this7.resetScrollbar();
              }

              _this7.resetAdjustments();

              _this7.focusOtherModal();

              _this7.onHidden.emit(_this7);
            });
          } // todo: original show was calling a callback when done, but we can use
          // promise

          /**
           * \@internal
           * @protected
           * @param {?=} callback
           * @return {?}
           */

        }, {
          key: "showBackdrop",
          value: function showBackdrop(callback) {
            var _this8 = this;

            if (this._isShown && this.config.backdrop && (!this.backdrop || !this.backdrop.instance.isShown)) {
              this.removeBackdrop();

              this._backdrop.attach(ModalBackdropComponent).to('body').show({
                isAnimated: this._config.animated
              });

              this.backdrop = this._backdrop._componentRef;

              if (!callback) {
                return;
              }

              if (!this._config.animated) {
                callback();
                return;
              }

              setTimeout(callback, BACKDROP_TRANSITION_DURATION);
            } else if (!this._isShown && this.backdrop) {
              this.backdrop.instance.isShown = false;
              /** @type {?} */

              var callbackRemove =
              /**
              * @return {?}
              */
              function callbackRemove() {
                _this8.removeBackdrop();

                if (callback) {
                  callback();
                }
              };

              if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
              } else {
                callbackRemove();
              }
            } else if (callback) {
              callback();
            }
          }
          /**
           * \@internal
           * @protected
           * @return {?}
           */

        }, {
          key: "removeBackdrop",
          value: function removeBackdrop() {
            this._backdrop.hide();
          }
          /**
           * Events tricks
           * @protected
           * @return {?}
           */
          // no need for it
          // protected setEscapeEvent():void {
          //   if (this._isShown && this._config.keyboard) {
          //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
          //       if (event.which === 27) {
          //         this.hide()
          //       }
          //     })
          //
          //   } else if (!this._isShown) {
          //     $(this._element).off(Event.KEYDOWN_DISMISS)
          //   }
          // }
          // protected setResizeEvent():void {
          // console.log(this.renderer.listenGlobal('', Event.RESIZE));
          // if (this._isShown) {
          //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
          // } else {
          //   $(window).off(Event.RESIZE)
          // }
          // }

        }, {
          key: "focusOtherModal",
          value: function focusOtherModal() {
            if (this._element.nativeElement.parentElement == null) {
              return;
            }
            /** @type {?} */


            var otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');

            if (!otherOpenedModals.length) {
              return;
            }

            otherOpenedModals[otherOpenedModals.length - 1].focus();
          }
          /**
           * \@internal
           * @protected
           * @return {?}
           */

        }, {
          key: "resetAdjustments",
          value: function resetAdjustments() {
            this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');

            this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
          }
          /** Scroll bar tricks */

          /**
           * \@internal
           * @protected
           * @return {?}
           */

        }, {
          key: "checkScrollbar",
          value: function checkScrollbar() {
            this.isBodyOverflowing = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.clientWidth < ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth;
            this.scrollbarWidth = this.getScrollbarWidth();
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "setScrollbar",
          value: function setScrollbar() {
            if (!ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"]) {
              return;
            }

            this.originalBodyPadding = parseInt(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].getComputedStyle(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body).getPropertyValue('padding-right') || 0, 10);

            if (this.isBodyOverflowing) {
              ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = "".concat(this.originalBodyPadding + this.scrollbarWidth, "px");
            }
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "resetScrollbar",
          value: function resetScrollbar() {
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = "".concat(this.originalBodyPadding, "px");
          } // thx d.walsh

          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "getScrollbarWidth",
          value: function getScrollbarWidth() {
            /** @type {?} */
            var scrollDiv = this._renderer.createElement('div');

            this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);

            this._renderer.appendChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);
            /** @type {?} */


            var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

            this._renderer.removeChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);

            return scrollbarWidth;
          }
        }]);

        return ModalDirective;
      }();

      ModalDirective.ɵfac = function ModalDirective_Factory(t) {
        return new (t || ModalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MODAL_CONFIG_DEFAULT_OVERRIDE, 8));
      };

      ModalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ModalDirective,
        selectors: [["", "bsModal", ""]],
        hostBindings: function ModalDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ModalDirective_mousedown_HostBindingHandler($event) {
              return ctx.onClickStarted($event);
            })("mouseup", function ModalDirective_mouseup_HostBindingHandler($event) {
              return ctx.onClickStop($event);
            })("keydown.esc", function ModalDirective_keydown_esc_HostBindingHandler($event) {
              return ctx.onEsc($event);
            });
          }
        },
        inputs: {
          config: "config"
        },
        outputs: {
          onShow: "onShow",
          onShown: "onShown",
          onHide: "onHide",
          onHidden: "onHidden"
        },
        exportAs: ["bs-modal"]
      });
      /** @nocollapse */

      ModalDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]
        }, {
          type: ModalOptions,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MODAL_CONFIG_DEFAULT_OVERRIDE]
          }]
        }];
      };

      ModalDirective.propDecorators = {
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onShow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onShown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onHide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onHidden: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onClickStarted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousedown', ['$event']]
        }],
        onClickStop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseup', ['$event']]
        }],
        onEsc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.esc', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[bsModal]',
            exportAs: 'bs-modal'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]
          }, {
            type: ModalOptions,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MODAL_CONFIG_DEFAULT_OVERRIDE]
            }]
          }];
        }, {
          onShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onShown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          onClickStarted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          onClickStop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseup', ['$event']]
          }],
          // todo: consider preventing default and stopping propagation

          /**
           * @param {?} event
           * @return {?}
           */
          onEsc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown.esc', ['$event']]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var BsModalService = /*#__PURE__*/function () {
        /**
         * @param {?} rendererFactory
         * @param {?} clf
         * @param {?} modalDefaultOption
         */
        function BsModalService(rendererFactory, clf, modalDefaultOption) {
          _classCallCheck(this, BsModalService);

          this.clf = clf;
          this.modalDefaultOption = modalDefaultOption; // tslint:disable-next-line:no-any

          this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // tslint:disable-next-line:no-any

          this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // tslint:disable-next-line:no-any

          this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // tslint:disable-next-line:no-any

          this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isBodyOverflowing = false;
          this.originalBodyPadding = 0;
          this.scrollbarWidth = 0;
          this.modalsCount = 0;
          this.lastDismissReason = null;
          this.loaders = [];
          this._backdropLoader = this.clf.createLoader(null, null, null);
          this._renderer = rendererFactory.createRenderer(null, null);
          this.config = modalDefaultOption ? Object.assign({}, modalConfigDefaults, modalDefaultOption) : modalConfigDefaults;
        }
        /**
         * Shows a modal
         * @template T
         * @param {?} content
         * @param {?=} config
         * @return {?}
         */


        _createClass(BsModalService, [{
          key: "show",
          value: function show( // tslint:disable-next-line:no-any
          content, config) {
            this.modalsCount++;

            this._createLoaders();
            /** @type {?} */


            var id = (config === null || config === void 0 ? void 0 : config.id) || new Date().getUTCMilliseconds();
            this.config = this.modalDefaultOption ? Object.assign({}, modalConfigDefaults, this.modalDefaultOption, config) : Object.assign({}, modalConfigDefaults, config);
            this.config.id = id;

            this._showBackdrop();

            this.lastDismissReason = null;
            return this._showModal(content);
          }
          /**
           * @param {?=} id
           * @return {?}
           */

        }, {
          key: "hide",
          value: function hide(id) {
            var _this9 = this;

            if (this.modalsCount === 1 || id == null) {
              this._hideBackdrop();

              this.resetScrollbar();
            }

            this.modalsCount = this.modalsCount >= 1 && id != null ? this.modalsCount - 1 : 0;
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this9._hideModal(id);

              _this9.removeLoaders(id);
            }, this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0);
          }
          /**
           * @return {?}
           */

        }, {
          key: "_showBackdrop",
          value: function _showBackdrop() {
            /** @type {?} */
            var isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
            /** @type {?} */

            var isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;

            if (this.modalsCount === 1) {
              this.removeBackdrop();

              if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader.attach(ModalBackdropComponent).to('body').show({
                  isAnimated: this.config.animated
                });

                this.backdropRef = this._backdropLoader._componentRef;
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "_hideBackdrop",
          value: function _hideBackdrop() {
            var _this10 = this;

            if (!this.backdropRef) {
              return;
            }

            this.backdropRef.instance.isShown = false;
            /** @type {?} */

            var duration = this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0;
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              return _this10.removeBackdrop();
            }, duration);
          } // tslint:disable-next-line:no-any

          /**
           * @param {?} content
           * @return {?}
           */

        }, {
          key: "_showModal",
          value: function _showModal(content) {
            var _a;
            /** @type {?} */


            var modalLoader = this.loaders[this.loaders.length - 1];

            if (this.config && this.config.providers) {
              var _iterator = _createForOfIteratorHelper(this.config.providers),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var provider = _step.value;
                  modalLoader.provide(provider);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
            /** @type {?} */


            var bsModalRef = new BsModalRef();
            /** @type {?} */

            var modalContainerRef = modalLoader.provide({
              provide: ModalOptions,
              useValue: this.config
            }).provide({
              provide: BsModalRef,
              useValue: bsModalRef
            }).attach(ModalContainerComponent).to('body');

            bsModalRef.hide =
            /**
            * @return {?}
            */
            function () {
              return modalContainerRef.instance.hide();
            };

            bsModalRef.setClass =
            /**
            * @param {?} newClass
            * @return {?}
            */
            function (newClass) {
              modalContainerRef.instance.config["class"] = newClass;
            };

            bsModalRef.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            bsModalRef.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.copyEvent(modalLoader.onBeforeHide, bsModalRef.onHide);
            this.copyEvent(modalLoader.onHidden, bsModalRef.onHidden); // call 'show' method after assign setClass in bsModalRef.
            // it makes modal component's bsModalRef available to call setClass method

            modalContainerRef.show({
              content: content,
              isAnimated: this.config.animated,
              initialState: this.config.initialState,
              bsModalService: this,
              id: this.config.id
            });
            modalContainerRef.instance.level = this.getModalsCount();
            bsModalRef.content = modalLoader.getInnerComponent() || null;
            bsModalRef.id = (_a = modalContainerRef.instance.config) === null || _a === void 0 ? void 0 : _a.id;
            return bsModalRef;
          }
          /**
           * @param {?=} id
           * @return {?}
           */

        }, {
          key: "_hideModal",
          value: function _hideModal(id) {
            if (id != null) {
              /** @type {?} */
              var indexToRemove = this.loaders.findIndex(
              /**
              * @param {?} loader
              * @return {?}
              */
              function (loader) {
                return loader.instance.config.id === id;
              });
              /** @type {?} */

              var modalLoader = this.loaders[indexToRemove];

              if (modalLoader) {
                modalLoader.hide(id);
              }
            } else {
              this.loaders.forEach(
              /**
              * @param {?} loader
              * @return {?}
              */
              function (loader) {
                loader.hide(loader.instance.config.id);
              });
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "getModalsCount",
          value: function getModalsCount() {
            return this.modalsCount;
          }
          /**
           * @param {?} reason
           * @return {?}
           */

        }, {
          key: "setDismissReason",
          value: function setDismissReason(reason) {
            this.lastDismissReason = reason;
          }
          /**
           * @return {?}
           */

        }, {
          key: "removeBackdrop",
          value: function removeBackdrop() {
            this._renderer.removeClass(document.body, CLASS_NAME.OPEN);

            this._backdropLoader.hide();

            this.backdropRef = null;
          }
          /** Checks if the body is overflowing and sets scrollbar width */

          /**
           * \@internal
           * @return {?}
           */

        }, {
          key: "checkScrollbar",
          value: function checkScrollbar() {
            this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
            this.scrollbarWidth = this.getScrollbarWidth();
          }
          /**
           * @return {?}
           */

        }, {
          key: "setScrollbar",
          value: function setScrollbar() {
            if (!document) {
              return;
            }

            this.originalBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right') || '0', 10);

            if (this.isBodyOverflowing) {
              document.body.style.paddingRight = "".concat(this.originalBodyPadding + this.scrollbarWidth, "px");
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "resetScrollbar",
          value: function resetScrollbar() {
            document.body.style.paddingRight = "".concat(this.originalBodyPadding, "px");
          } // thx d.walsh

          /**
           * @private
           * @return {?}
           */

        }, {
          key: "getScrollbarWidth",
          value: function getScrollbarWidth() {
            /** @type {?} */
            var scrollDiv = this._renderer.createElement('div');

            this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);

            this._renderer.appendChild(document.body, scrollDiv);
            /** @type {?} */


            var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

            this._renderer.removeChild(document.body, scrollDiv);

            return scrollbarWidth;
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_createLoaders",
          value: function _createLoaders() {
            /** @type {?} */
            var loader = this.clf.createLoader(null, null, null);
            this.copyEvent(loader.onBeforeShow, this.onShow);
            this.copyEvent(loader.onShown, this.onShown);
            this.copyEvent(loader.onBeforeHide, this.onHide);
            this.copyEvent(loader.onHidden, this.onHidden);
            this.loaders.push(loader);
          }
          /**
           * @private
           * @param {?=} id
           * @return {?}
           */

        }, {
          key: "removeLoaders",
          value: function removeLoaders(id) {
            if (id != null) {
              /** @type {?} */
              var indexToRemove = this.loaders.findIndex(
              /**
              * @param {?} loader
              * @return {?}
              */
              function (loader) {
                return loader.instance.config.id === id;
              });

              if (indexToRemove >= 0) {
                this.loaders.splice(indexToRemove, 1);
                this.loaders.forEach(
                /**
                * @param {?} loader
                * @param {?} i
                * @return {?}
                */
                function (loader, i) {
                  loader.instance.level = i + 1;
                });
              }
            } else {
              this.loaders.splice(0, this.loaders.length);
            }
          } // tslint:disable-next-line:no-any

          /**
           * @private
           * @param {?} from
           * @param {?} to
           * @return {?}
           */

        }, {
          key: "copyEvent",
          value: function copyEvent(from, to) {
            var _this11 = this;

            from.subscribe(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              to.emit(_this11.lastDismissReason || data);
            });
          }
        }]);

        return BsModalService;
      }();

      BsModalService.ɵfac = function BsModalService_Factory(t) {
        return new (t || BsModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MODAL_CONFIG_DEFAULT_OVERRIDE, 8));
      };

      BsModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BsModalService,
        factory: BsModalService.ɵfac
      });
      /** @nocollapse */

      BsModalService.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
        }, {
          type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]
        }, {
          type: ModalOptions,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MODAL_CONFIG_DEFAULT_OVERRIDE]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsModalService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
          }, {
            type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]
          }, {
            type: ModalOptions,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MODAL_CONFIG_DEFAULT_OVERRIDE]
            }]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ModalModule = /*#__PURE__*/function () {
        function ModalModule() {
          _classCallCheck(this, ModalModule);
        }

        _createClass(ModalModule, null, [{
          key: "forRoot",
          value:
          /**
           * @return {?}
           */
          function forRoot() {
            return {
              ngModule: ModalModule,
              providers: [BsModalService, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
            };
          }
          /**
           * @return {?}
           */

        }, {
          key: "forChild",
          value: function forChild() {
            return {
              ngModule: ModalModule,
              providers: [BsModalService, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
            };
          }
        }]);

        return ModalModule;
      }();

      ModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ModalModule
      });
      ModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ModalModule_Factory(t) {
          return new (t || ModalModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModalModule, {
          declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent],
          exports: [ModalBackdropComponent, ModalDirective]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent],
            exports: [ModalBackdropComponent, ModalDirective],
            entryComponents: [ModalBackdropComponent, ModalContainerComponent]
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
      //# sourceMappingURL=ngx-bootstrap-modal.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~views-base-base-module~views-notifications-notifications-module-es5.js.map