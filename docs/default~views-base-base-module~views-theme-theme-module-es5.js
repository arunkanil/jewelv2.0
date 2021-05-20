(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-base-base-module~views-theme-theme-module"], {
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
          var _this = this;

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
            _this.elementPosition = _this.getElementPosition();
            _this.touchstartTime = new Date().getTime();

            if (_this.eventType === undefined) {
              _this.getTouchstartPosition(event);
            }

            _this.runHandler("touchstart", event);
          };
          /* Touchmove */


          this.handleTouchmove = function (event) {
            var touches = event.touches; // Pan

            if (_this.detectPan(touches)) {
              _this.runHandler("pan", event);
            } // Pinch


            if (_this.detectPinch(event)) {
              _this.runHandler("pinch", event);
            } // Linear swipe


            switch (_this.detectLinearSwipe(event)) {
              case "horizontal-swipe":
                event.swipeType = "horizontal-swipe";

                _this.runHandler("horizontal-swipe", event);

                break;

              case "vertical-swipe":
                event.swipeType = "vertical-swipe";

                _this.runHandler("vertical-swipe", event);

                break;
            } // Linear swipe


            if (_this.detectLinearSwipe(event) || _this.eventType === 'horizontal-swipe' || _this.eventType === 'vertical-swipe') {
              _this.handleLinearSwipe(event);
            }
          };
          /* Touchend */


          this.handleTouchend = function (event) {
            var touches = event.touches; // Double Tap

            if (_this.detectDoubleTap()) {
              _this.runHandler("double-tap", event);
            } // Tap


            _this.detectTap();

            _this.runHandler("touchend", event);

            _this.eventType = 'touchend';

            if (touches && touches.length === 0) {
              _this.eventType = undefined;
              _this.i = 0;
            }
          };
          /* Mousedown */


          this.handleMousedown = function (event) {
            _this.isMousedown = true;
            _this.elementPosition = _this.getElementPosition();
            _this.touchstartTime = new Date().getTime();

            if (_this.eventType === undefined) {
              _this.getMousedownPosition(event);
            }

            _this.runHandler("mousedown", event);
          };
          /* Mousemove */


          this.handleMousemove = function (event) {
            //event.preventDefault();
            if (!_this.isMousedown) {
              return;
            } // Pan


            _this.runHandler("pan", event); // Linear swipe


            switch (_this.detectLinearSwipe(event)) {
              case "horizontal-swipe":
                event.swipeType = "horizontal-swipe";

                _this.runHandler("horizontal-swipe", event);

                break;

              case "vertical-swipe":
                event.swipeType = "vertical-swipe";

                _this.runHandler("vertical-swipe", event);

                break;
            } // Linear swipe


            if (_this.detectLinearSwipe(event) || _this.eventType === 'horizontal-swipe' || _this.eventType === 'vertical-swipe') {
              _this.handleLinearSwipe(event);
            }
          };
          /* Mouseup */


          this.handleMouseup = function (event) {
            // Tap
            _this.detectTap();

            _this.isMousedown = false;

            _this.runHandler("mouseup", event);

            _this.eventType = undefined;
            _this.i = 0;
          };
          /* Wheel */


          this.handleWheel = function (event) {
            _this.runHandler("wheel", event);
          };
          /* Resize */


          this.handleResize = function (event) {
            _this.runHandler("resize", event);
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
            var _this2 = this;

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
                clearTimeout(_this2.doubleTapTimeout);
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
          var _this3 = this;

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
            _this3.container.handleTouchstart();

            _this3.slide.handleTouchstart(event);
          };

          this.handleHorizontalSwipe = function (event) {
            _this3.container.handleHorizontalSwipe();
          };

          this.handleTouchend = function (event) {
            if (_this3.properties.freeScroll) {
              _this3.container.handleTouchend();
            } else {
              _this3.container.handleTouchend(true);

              _this3.slide.handleTouchend(event);
            }
          };

          this.isNextArrowDisabled = function () {
            return _this3.slide.isNextArrowDisabled();
          };

          this.isPrevArrowDisabled = function () {
            return _this3.slide.isPrevArrowDisabled();
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
            var _this4 = this;

            this.autoplayId = setInterval(function () {
              _this4.next();
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
          var _this5 = this;

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
            _this5.touches.addEventListeners("mousemove", "handleMousemove");

            _this5.carousel.handleTouchstart(event);

            _this5.isMoving = true;
          };

          this.handleHorizontalSwipe = function (event) {
            event.preventDefault();

            _this5.carousel.handleHorizontalSwipe(event);
          };

          this.handleTouchend = function (event) {
            var touches = event.touches;

            _this5.carousel.handleTouchend(event);

            _this5.touches.removeEventListeners("mousemove", "handleMousemove");

            _this5.isMoving = false;
          };

          this.handleTap = function (event) {
            var outboundEvent = {
              name: 'click'
            };
            var nodes = Array.prototype.slice.call(_this5.cellsElement.children);
            var cellElement = event.srcElement.closest(".carousel-cell");
            var i = nodes.indexOf(cellElement);
            var cellIndex = nodes.indexOf(cellElement);

            if (_this5.images) {//outboundEvent.fileIndex = this.carousel.getFileIndex(i);
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
            var _this6 = this;

            var observer = new MutationObserver(function (mutations) {
              _this6.onDomChanges();
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

    }
  }]);
})();
//# sourceMappingURL=default~views-base-base-module~views-theme-theme-module-es5.js.map