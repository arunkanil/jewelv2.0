(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-dashboard-dashboard-module"], {
    /***/
    "6dU7":
    /*!*****************************************************!*\
      !*** ./src/app/views/dashboard/dashboard.module.ts ***!
      \*****************************************************/

    /*! exports provided: DashboardModule */

    /***/
    function dU7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/buttons */
      "aHM3");
      /* harmony import */


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dashboard.component */
      "l70X");
      /* harmony import */


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      "jUYC");

      var DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

      DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__["DashboardRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot()],
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]]
      })], DashboardModule);
      /***/
    },

    /***/
    "P3Bu":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/dashboard/dashboard.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function P3Bu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-white bg-info\">\n        <div class=\"card-body pb-0\">\n          <button type=\"button\" class=\"btn btn-transparent p-0 float-right\">\n            <i class=\"icon-location-pin\"></i>\n          </button>\n          <div class=\"text-value\">9.823</div>\n          <div>Members online</div>\n        </div>\n        <div class=\"chart-wrapper mt-3 mx-3\" style=\"height:70px;\">\n          <canvas baseChart class=\"chart\"\n          [datasets]=\"lineChart2Data\"\n          [labels]=\"lineChart2Labels\"\n          [options]=\"lineChart2Options\"\n          [colors]=\"lineChart2Colours\"\n          [legend]=\"lineChart2Legend\"\n          [chartType]=\"lineChart2Type\"></canvas>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-white bg-primary\">\n        <div class=\"card-body pb-0\">\n          <div class=\"btn-group float-right\" dropdown>\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\n              <i class=\"icon-settings\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n          <div class=\"text-value\">9.823</div>\n          <div>Members online</div>\n        </div>\n        <div class=\"chart-wrapper mt-3 mx-3\" style=\"height:70px;\">\n          <canvas baseChart class=\"chart\"\n                  [datasets]=\"lineChart1Data\"\n                  [labels]=\"lineChart1Labels\"\n                  [options]=\"lineChart1Options\"\n                  [colors]=\"lineChart1Colours\"\n                  [legend]=\"lineChart1Legend\"\n                  [chartType]=\"lineChart1Type\"></canvas>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-white bg-warning\">\n        <div class=\"card-body pb-0\">\n          <div class=\"btn-group float-right\" dropdown>\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\n              <i class=\"icon-settings\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n          <div class=\"text-value\">9.823</div>\n          <div>Members online</div>\n        </div>\n        <div class=\"chart-wrapper mt-3\" style=\"height:70px;\">\n          <canvas baseChart class=\"chart\"\n          [datasets]=\"lineChart3Data\"\n          [labels]=\"lineChart3Labels\"\n          [options]=\"lineChart3Options\"\n          [colors]=\"lineChart3Colours\"\n          [legend]=\"lineChart3Legend\"\n          [chartType]=\"lineChart3Type\"></canvas>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-white bg-danger\">\n        <div class=\"card-body pb-0\">\n          <div class=\"btn-group float-right\" dropdown>\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\n              <i class=\"icon-settings\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n          <div class=\"text-value\">9.823</div>\n          <div>Members online</div>\n        </div>\n        <div class=\"chart-wrapper mt-3 mx-3\" style=\"height:70px;\">\n          <canvas baseChart class=\"chart\"\n          [datasets]=\"barChart1Data\"\n          [labels]=\"barChart1Labels\"\n          [options]=\"barChart1Options\"\n          [colors]=\"barChart1Colours\"\n          [legend]=\"barChart1Legend\"\n          [chartType]=\"barChart1Type\"></canvas>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-sm-5\">\n          <h4 class=\"card-title mb-0\">Traffic</h4>\n          <div class=\"small text-muted\">November 2017</div>\n        </div><!--/.col-->\n        <div class=\"col-sm-7 d-none d-md-block\">\n          <button type=\"button\" class=\"btn btn-primary float-right\"><i class=\"icon-cloud-download\"></i></button>\n          <div class=\"btn-group btn-group-toggle float-right mr-3\" data-toggle=\"buttons\">\n            <label class=\"btn btn-outline-secondary\" [(ngModel)]=\"radioModel\" btnRadio=\"Day\" id=\"option1\">Day</label>\n            <label class=\"btn btn-outline-secondary\" [(ngModel)]=\"radioModel\" btnRadio=\"Month\" id=\"option2\">Month</label>\n            <label class=\"btn btn-outline-secondary\" [(ngModel)]=\"radioModel\" btnRadio=\"Year\" id=\"option3\">Year</label>\n          </div>\n        </div><!--/.col-->\n      </div><!--/.row-->\n      <div class=\"chart-wrapper\" style=\"height:300px;margin-top:40px;\">\n        <canvas baseChart class=\"chart\"\n        [datasets]=\"mainChartData\"\n        [labels]=\"mainChartLabels\"\n        [options]=\"mainChartOptions\"\n        [colors]=\"mainChartColours\"\n        [legend]=\"mainChartLegend\"\n        [chartType]=\"mainChartType\"></canvas>\n      </div>\n    </div>\n    <div class=\"card-footer\">\n      <div class=\"row text-center\">\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\n          <div class=\"text-muted\">Visits</div>\n          <strong>29.703 Users (40%)</strong>\n          <div class=\"progress progress-xs mt-2\">\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\n          <div class=\"text-muted\">Unique</div>\n          <strong>24.093 Users (20%)</strong>\n          <div class=\"progress progress-xs mt-2\">\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\n          <div class=\"text-muted\">Pageviews</div>\n          <strong>78.706 Views (60%)</strong>\n          <div class=\"progress progress-xs mt-2\">\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 60%\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\n          <div class=\"text-muted\">New Users</div>\n          <strong>22.123 Users (80%)</strong>\n          <div class=\"progress progress-xs mt-2\">\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\n          <div class=\"text-muted\">Bounce Rate</div>\n          <strong>40.15%</strong>\n          <div class=\"progress progress-xs mt-2\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--/.card-->\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-facebook\">\n          <i class=\"fa fa-facebook\"></i>\n          <div class=\"chart-wrapper\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"brandBoxChartData1\"\n            [labels]=\"brandBoxChartLabels\"\n            [options]=\"brandBoxChartOptions\"\n            [colors]=\"brandBoxChartColours\"\n            [legend]=\"brandBoxChartLegend\"\n            [chartType]=\"brandBoxChartType\"></canvas>\n          </div>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">89k</div>\n            <div class=\"text-uppercase text-muted small\">friends</div>\n          </div>\n          <div>\n            <div class=\"text-value\">459</div>\n            <div class=\"text-uppercase text-muted small\">feeds</div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-twitter\">\n          <i class=\"fa fa-twitter\"></i>\n          <div class=\"chart-wrapper\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"brandBoxChartData2\"\n            [labels]=\"brandBoxChartLabels\"\n            [options]=\"brandBoxChartOptions\"\n            [colors]=\"brandBoxChartColours\"\n            [legend]=\"brandBoxChartLegend\"\n            [chartType]=\"brandBoxChartType\"></canvas>\n          </div>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">973k</div>\n            <div class=\"text-uppercase text-muted small\">followers</div>\n          </div>\n          <div>\n            <div class=\"text-value\">1.792</div>\n            <div class=\"text-uppercase text-muted small\">tweets</div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-linkedin\">\n          <i class=\"fa fa-linkedin\"></i>\n          <div class=\"chart-wrapper\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"brandBoxChartData3\"\n            [labels]=\"brandBoxChartLabels\"\n            [options]=\"brandBoxChartOptions\"\n            [colors]=\"brandBoxChartColours\"\n            [legend]=\"brandBoxChartLegend\"\n            [chartType]=\"brandBoxChartType\"></canvas>\n          </div>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">500+</div>\n            <div class=\"text-uppercase text-muted small\">contacts</div>\n          </div>\n          <div>\n            <div class=\"text-value\">292</div>\n            <div class=\"text-uppercase text-muted small\">feeds</div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-google-plus\">\n          <i class=\"fa fa-google-plus\"></i>\n          <div class=\"chart-wrapper\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"brandBoxChartData4\"\n            [labels]=\"brandBoxChartLabels\"\n            [options]=\"brandBoxChartOptions\"\n            [colors]=\"brandBoxChartColours\"\n            [legend]=\"brandBoxChartLegend\"\n            [chartType]=\"brandBoxChartType\"></canvas>\n          </div>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">894</div>\n            <div class=\"text-uppercase text-muted small\">followers</div>\n          </div>\n          <div>\n            <div class=\"text-value\">92</div>\n            <div class=\"text-uppercase text-muted small\">circles</div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Traffic &amp; Sales\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"row\">\n                <div class=\"col-sm-6\">\n                  <div class=\"callout callout-info\">\n                    <small class=\"text-muted\">New Clients</small>\n                    <br>\n                    <strong class=\"h4\">9,123</strong>\n                  </div>\n                </div><!--/.col-->\n                <div class=\"col-sm-6\">\n                  <div class=\"callout callout-danger\">\n                    <small class=\"text-muted\">Recuring Clients</small>\n                    <br>\n                    <strong class=\"h4\">22,643</strong>\n                  </div>\n                </div><!--/.col-->\n              </div><!--/.row-->\n              <hr class=\"mt-0\">\n              <div class=\"progress-group mb-4\">\n                <div class=\"progress-group-prepend\">\n                  <span class=\"progress-group-text\">\n                    Monday\n                  </span>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 34%\" aria-valuenow=\"34\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 78%\" aria-valuenow=\"78\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"progress-group mb-4\">\n                <div class=\"progress-group-prepend\">\n                  <span class=\"progress-group-text\">\n                    Tuesday\n                  </span>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 56%\" aria-valuenow=\"56\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 94%\" aria-valuenow=\"94\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"progress-group mb-4\">\n                <div class=\"progress-group-prepend\">\n                  <span class=\"progress-group-text\">\n                    Wednesday\n                  </span>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 12%\" aria-valuenow=\"12\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 67%\" aria-valuenow=\"67\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"progress-group mb-4\">\n                <div class=\"progress-group-prepend\">\n                  <span class=\"progress-group-text\">\n                    Thursday\n                  </span>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 91%\" aria-valuenow=\"91\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"progress-group mb-4\">\n                <div class=\"progress-group-prepend\">\n                  <span class=\"progress-group-text\">\n                    Friday\n                  </span>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 22%\" aria-valuenow=\"22\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 73%\" aria-valuenow=\"73\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"progress-group mb-4\">\n                <div class=\"progress-group-prepend\">\n                  <span class=\"progress-group-text\">\n                    Saturday\n                  </span>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 53%\" aria-valuenow=\"53\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 82%\" aria-valuenow=\"82\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"progress-group mb-4\">\n                <div class=\"progress-group-prepend\">\n                  <span class=\"progress-group-text\">\n                    Sunday\n                  </span>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 9%\" aria-valuenow=\"9\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 69%\" aria-valuenow=\"69\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n            </div><!--/.col-->\n            <div class=\"col-sm-6\">\n              <div class=\"row\">\n                <div class=\"col-sm-6\">\n                  <div class=\"callout callout-warning\">\n                    <small class=\"text-muted\">Pageviews</small>\n                    <br>\n                    <strong class=\"h4\">78,623</strong>\n                  </div>\n                </div><!--/.col-->\n                <div class=\"col-sm-6\">\n                  <div class=\"callout callout-success\">\n                    <small class=\"text-muted\">Organic</small>\n                    <br>\n                    <strong class=\"h4\">49,123</strong>\n                  </div>\n                </div><!--/.col-->\n              </div><!--/.row-->\n              <hr class=\"mt-0\">\n              <div class=\"progress-group\">\n                <div class=\"progress-group-header\">\n                  <i class=\"icon-user progress-group-icon\"></i>\n                  <div>Male</div>\n                  <div class=\"ml-auto font-weight-bold\">43%</div>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"progress-group mb-5\">\n                <div class=\"progress-group-header\">\n                  <i class=\"icon-user-female progress-group-icon\"></i>\n                  <div>Female</div>\n                  <div class=\"ml-auto font-weight-bold\">37%</div>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"progress-group\">\n                <div class=\"progress-group-header align-items-end\">\n                  <i class=\"icon-globe progress-group-icon\"></i>\n                  <div>Organic Search</div>\n                  <div class=\"ml-auto font-weight-bold mr-2\">191.235</div>\n                  <div class=\"text-muted small\">(56%)</div>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 56%\" aria-valuenow=\"56\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"progress-group\">\n                <div class=\"progress-group-header align-items-end\">\n                  <i class=\"icon-social-facebook progress-group-icon\"></i>\n                  <div>Facebook</div>\n                  <div class=\"ml-auto font-weight-bold mr-2\">51.223</div>\n                  <div class=\"text-muted small\">(15%)</div>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 15%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"progress-group\">\n                <div class=\"progress-group-header align-items-end\">\n                  <i class=\"icon-social-twitter progress-group-icon\"></i>\n                  <div>Twitter</div>\n                  <div class=\"ml-auto font-weight-bold mr-2\">37.564</div>\n                  <div class=\"text-muted small\">(11%)</div>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 11%\" aria-valuenow=\"11\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"progress-group\">\n                <div class=\"progress-group-header align-items-end\">\n                  <i class=\"icon-social-linkedin progress-group-icon\"></i>\n                  <div>LinkedIn</div>\n                  <div class=\"ml-auto font-weight-bold mr-2\">27.319</div>\n                  <div class=\"text-muted small\">(8%)</div>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 8%\" aria-valuenow=\"8\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n            </div><!--/.col-->\n          </div><!--/.row-->\n          <br>\n          <table class=\"table table-responsive-sm table-hover table-outline mb-0\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th class=\"text-center\"><i class=\"icon-people\"></i></th>\n                <th>User</th>\n                <th class=\"text-center\">Country</th>\n                <th>Usage</th>\n                <th class=\"text-center\">Payment Method</th>\n                <th>Activity</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td class=\"text-center\">\n                  <div class=\"avatar\">\n                    <img src=\"assets/img/avatars/1.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    <span class=\"avatar-status badge-success\"></span>\n                  </div>\n                </td>\n                <td>\n                  <div>Yiorgos Avraamu</div>\n                  <div class=\"small text-muted\">\n                    <span>New</span> | Registered: Jan 1, 2015\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"flag-icon flag-icon-us h4 mb-0\" title=\"us\" id=\"us\"></i>\n                </td>\n                <td>\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <strong>50%</strong>\n                    </div>\n                    <div class=\"float-right\">\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                    </div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"fa fa-cc-mastercard\" style=\"font-size:24px\"></i>\n                </td>\n                <td>\n                  <div class=\"small text-muted\">Last login</div>\n                  <strong>10 sec ago</strong>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"text-center\">\n                  <div class=\"avatar\">\n                    <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    <span class=\"avatar-status badge-danger\"></span>\n                  </div>\n                </td>\n                <td>\n                  <div>Avram Tarasios</div>\n                  <div class=\"small text-muted\">\n\n                    <span>Recurring</span> | Registered: Jan 1, 2015\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"flag-icon flag-icon-br h4 mb-0\" title=\"br\" id=\"br\"></i>\n                </td>\n                <td>\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <strong>10%</strong>\n                    </div>\n                    <div class=\"float-right\">\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                    </div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"fa fa-cc-visa\" style=\"font-size:24px\"></i>\n                </td>\n                <td>\n                  <div class=\"small text-muted\">Last login</div>\n                  <strong>5 minutes ago</strong>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"text-center\">\n                  <div class=\"avatar\">\n                    <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    <span class=\"avatar-status badge-warning\"></span>\n                  </div>\n                </td>\n                <td>\n                  <div>Quintin Ed</div>\n                  <div class=\"small text-muted\">\n                    <span>New</span> | Registered: Jan 1, 2015\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"flag-icon flag-icon-in h4 mb-0\" title=\"in\" id=\"in\"></i>\n                </td>\n                <td>\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <strong>74%</strong>\n                    </div>\n                    <div class=\"float-right\">\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                    </div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 74%\" aria-valuenow=\"74\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"fa fa-cc-stripe\" style=\"font-size:24px\"></i>\n                </td>\n                <td>\n                  <div class=\"small text-muted\">Last login</div>\n                  <strong>1 hour ago</strong>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"text-center\">\n                  <div class=\"avatar\">\n                    <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    <span class=\"avatar-status badge-secondary\"></span>\n                  </div>\n                </td>\n                <td>\n                  <div>Enéas Kwadwo</div>\n                  <div class=\"small text-muted\">\n                    <span>New</span> | Registered: Jan 1, 2015\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"flag-icon flag-icon-fr h4 mb-0\" title=\"fr\" id=\"fr\"></i>\n                </td>\n                <td>\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <strong>98%</strong>\n                    </div>\n                    <div class=\"float-right\">\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                    </div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 98%\" aria-valuenow=\"98\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"fa fa-paypal\" style=\"font-size:24px\"></i>\n                </td>\n                <td>\n                  <div class=\"small text-muted\">Last login</div>\n                  <strong>Last month</strong>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"text-center\">\n                  <div class=\"avatar\">\n                    <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    <span class=\"avatar-status badge-success\"></span>\n                  </div>\n                </td>\n                <td>\n                  <div>Agapetus Tadeáš</div>\n                  <div class=\"small text-muted\">\n                    <span>New</span> | Registered: Jan 1, 2015\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"flag-icon flag-icon-es h4 mb-0\" title=\"es\" id=\"es\"></i>\n                </td>\n                <td>\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <strong>22%</strong>\n                    </div>\n                    <div class=\"float-right\">\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                    </div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 22%\" aria-valuenow=\"22\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"fa fa-google-wallet\" style=\"font-size:24px\"></i>\n                </td>\n                <td>\n                  <div class=\"small text-muted\">Last login</div>\n                  <strong>Last week</strong>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"text-center\">\n                  <div class=\"avatar\">\n                    <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    <span class=\"avatar-status badge-danger\"></span>\n                  </div>\n                </td>\n                <td>\n                  <div>Friderik Dávid</div>\n                  <div class=\"small text-muted\">\n                    <span>New</span> | Registered: Jan 1, 2015\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"flag-icon flag-icon-pl h4 mb-0\" title=\"pl\" id=\"pl\"></i>\n                </td>\n                <td>\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <strong>43%</strong>\n                    </div>\n                    <div class=\"float-right\">\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                    </div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"fa fa-cc-amex\" style=\"font-size:24px\"></i>\n                </td>\n                <td>\n                  <div class=\"small text-muted\">Last login</div>\n                  <strong>Yesterday</strong>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n</div>\n";
      /***/
    },

    /***/
    "aHM3":
    /*!******************************************************************************!*\
      !*** ./node_modules/ngx-bootstrap/buttons/fesm2015/ngx-bootstrap-buttons.js ***!
      \******************************************************************************/

    /*! exports provided: ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective, ButtonsModule, ɵa, ɵb, ɵc */

    /***/
    function aHM3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonCheckboxDirective", function () {
        return ButtonCheckboxDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonRadioDirective", function () {
        return ButtonRadioDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonRadioGroupDirective", function () {
        return ButtonRadioGroupDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonsModule", function () {
        return ButtonsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return CHECKBOX_CONTROL_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return RADIO_CONTROL_VALUE_ACCESSOR$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return RADIO_CONTROL_VALUE_ACCESSOR;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // TODO: config: activeClass - Class to apply to the checked buttons

      /** @type {?} */


      var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],

        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return ButtonCheckboxDirective;
        }),
        multi: true
      };
      /**
       * Add checkbox functionality to any element
       */

      var ButtonCheckboxDirective = /*#__PURE__*/function () {
        function ButtonCheckboxDirective() {
          _classCallCheck(this, ButtonCheckboxDirective);

          /**
           * Truthy value, will be set to ngModel
           */
          this.btnCheckboxTrue = true;
          /**
           * Falsy value, will be set to ngModel
           */

          this.btnCheckboxFalse = false;
          this.state = false;
          this.onChange = Function.prototype;
          this.onTouched = Function.prototype;
        } // view -> model

        /**
         * @return {?}
         */


        _createClass(ButtonCheckboxDirective, [{
          key: "onClick",
          value: function onClick() {
            if (this.isDisabled) {
              return;
            }

            this.toggle(!this.state);
            this.onChange(this.value);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.toggle(this.trueValue === this.value);
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "trueValue",
          get: function get() {
            return typeof this.btnCheckboxTrue !== 'undefined' ? this.btnCheckboxTrue : true;
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "falseValue",
          get: function get() {
            return typeof this.btnCheckboxFalse !== 'undefined' ? this.btnCheckboxFalse : false;
          }
          /**
           * @param {?} state
           * @return {?}
           */

        }, {
          key: "toggle",
          value: function toggle(state) {
            this.state = state;
            this.value = this.state ? this.trueValue : this.falseValue;
          } // ControlValueAccessor
          // model -> view

          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.state = this.trueValue === value;
            this.value = value ? this.trueValue : this.falseValue;
          }
          /**
           * @param {?} isDisabled
           * @return {?}
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.isDisabled = isDisabled;
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
        }]);

        return ButtonCheckboxDirective;
      }();

      ButtonCheckboxDirective.ɵfac = function ButtonCheckboxDirective_Factory(t) {
        return new (t || ButtonCheckboxDirective)();
      };

      ButtonCheckboxDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ButtonCheckboxDirective,
        selectors: [["", "btnCheckbox", ""]],
        hostVars: 3,
        hostBindings: function ButtonCheckboxDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonCheckboxDirective_click_HostBindingHandler() {
              return ctx.onClick();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-pressed", ctx.state);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.state);
          }
        },
        inputs: {
          btnCheckboxTrue: "btnCheckboxTrue",
          btnCheckboxFalse: "btnCheckboxFalse"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CHECKBOX_CONTROL_VALUE_ACCESSOR])]
      });
      ButtonCheckboxDirective.propDecorators = {
        btnCheckboxTrue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        btnCheckboxFalse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.active']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.aria-pressed']
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonCheckboxDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[btnCheckbox]',
            providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
          }]
        }], function () {
          return [];
        }, {
          btnCheckboxTrue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          btnCheckboxFalse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.active']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-pressed']
          }],
          // view -> model

          /**
           * @return {?}
           */
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var RADIO_CONTROL_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],

        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return ButtonRadioDirective;
        }),
        multi: true
      };
      /**
       * Create radio buttons or groups of buttons.
       * A value of a selected button is bound to a variable specified via ngModel.
       */

      var ButtonRadioDirective = /*#__PURE__*/function () {
        /**
         * @param {?} el
         * @param {?} cdr
         * @param {?} renderer
         * @param {?} group
         */
        function ButtonRadioDirective(el, cdr, renderer, group) {
          _classCallCheck(this, ButtonRadioDirective);

          this.el = el;
          this.cdr = cdr;
          this.renderer = renderer;
          this.group = group;
          this.onChange = Function.prototype;
          this.onTouched = Function.prototype;
          this.role = 'radio';
          this._hasFocus = false;
        }
        /**
         * Current value of radio component or group
         * @return {?}
         */


        _createClass(ButtonRadioDirective, [{
          key: "value",
          get: function get() {
            return this.group ? this.group.value : this._value;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            if (this.group) {
              this.group.value = value;
              return;
            }

            this._value = value;
          }
          /**
           * If `true` — radio button is disabled
           * @return {?}
           */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          }
          /**
           * @param {?} disabled
           * @return {?}
           */
          ,
          set: function set(disabled) {
            this.setDisabledState(disabled);
          }
          /**
           * @return {?}
           */

        }, {
          key: "controlOrGroupDisabled",
          get: function get() {
            return this.disabled || this.group && this.group.disabled ? true : undefined;
          }
          /**
           * @return {?}
           */

        }, {
          key: "hasDisabledClass",
          get: function get() {
            // Although the radio is disabled the active radio should still stand out.
            // The disabled class will prevent this so don't add it on the active radio
            return this.controlOrGroupDisabled && !this.isActive;
          }
          /**
           * @return {?}
           */

        }, {
          key: "isActive",
          get: function get() {
            return this.btnRadio === this.value;
          }
          /**
           * @return {?}
           */

        }, {
          key: "tabindex",
          get: function get() {
            if (this.controlOrGroupDisabled) {
              // Disabled radio buttons should not receive focus
              return undefined;
            } else if (this.isActive || this.group == null) {
              return 0;
            } else {
              return -1;
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "hasFocus",
          get: function get() {
            return this._hasFocus;
          }
          /**
           * @return {?}
           */

        }, {
          key: "toggleIfAllowed",
          value: function toggleIfAllowed() {
            if (!this.canToggle()) {
              return;
            }

            this.value = this.uncheckable && this.btnRadio === this.value ? undefined : this.btnRadio;

            this._onChange(this.value);
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onSpacePressed",
          value: function onSpacePressed(event) {
            this.toggleIfAllowed();
            event.preventDefault();
          }
          /**
           * @return {?}
           */

        }, {
          key: "focus",
          value: function focus() {
            this.el.nativeElement.focus();
          }
          /**
           * @return {?}
           */

        }, {
          key: "onFocus",
          value: function onFocus() {
            this._hasFocus = true;
          }
          /**
           * @return {?}
           */

        }, {
          key: "onBlur",
          value: function onBlur() {
            this._hasFocus = false;
            this.onTouched();
          }
          /**
           * @return {?}
           */

        }, {
          key: "canToggle",
          value: function canToggle() {
            return !this.controlOrGroupDisabled && (this.uncheckable || this.btnRadio !== this.value);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.uncheckable = typeof this.uncheckable !== 'undefined';
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "_onChange",
          value: function _onChange(value) {
            if (this.group) {
              this.group.value = value;
              return;
            }

            this.onTouched();
            this.onChange(value);
          } // ControlValueAccessor
          // model -> view

          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.value = value;
            this.cdr.markForCheck();
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
           * @param {?} disabled
           * @return {?}
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(disabled) {
            this._disabled = disabled;

            if (disabled) {
              this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
              return;
            }

            this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
          }
        }]);

        return ButtonRadioDirective;
      }();

      ButtonRadioDirective.ɵfac = function ButtonRadioDirective_Factory(t) {
        return new (t || ButtonRadioDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return ButtonRadioGroupDirective;
        }), 8));
      };

      ButtonRadioDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ButtonRadioDirective,
        selectors: [["", "btnRadio", ""]],
        hostVars: 8,
        hostBindings: function ButtonRadioDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonRadioDirective_click_HostBindingHandler() {
              return ctx.toggleIfAllowed();
            })("keydown.space", function ButtonRadioDirective_keydown_space_HostBindingHandler($event) {
              return ctx.onSpacePressed($event);
            })("focus", function ButtonRadioDirective_focus_HostBindingHandler() {
              return ctx.onFocus();
            })("blur", function ButtonRadioDirective_blur_HostBindingHandler() {
              return ctx.onBlur();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role)("aria-disabled", ctx.controlOrGroupDisabled)("aria-checked", ctx.isActive)("tabindex", ctx.tabindex);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.hasDisabledClass)("active", ctx.isActive);
          }
        },
        inputs: {
          value: "value",
          disabled: "disabled",
          uncheckable: "uncheckable",
          btnRadio: "btnRadio"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([RADIO_CONTROL_VALUE_ACCESSOR])]
      });
      /** @nocollapse */

      ButtonRadioDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: ButtonRadioGroupDirective,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return ButtonRadioGroupDirective;
            })]
          }]
        }];
      };

      ButtonRadioDirective.propDecorators = {
        btnRadio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        uncheckable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        controlOrGroupDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.aria-disabled']
        }],
        hasDisabledClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.disabled']
        }],
        isActive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.active']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.aria-checked']
        }],
        role: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.role']
        }],
        tabindex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.tabindex']
        }],
        toggleIfAllowed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }],
        onSpacePressed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.space', ['$event']]
        }],
        onFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['focus']
        }],
        onBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['blur']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonRadioDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[btnRadio]',
            providers: [RADIO_CONTROL_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: ButtonRadioGroupDirective,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
              /**
              * @return {?}
              */
              function () {
                return ButtonRadioGroupDirective;
              })]
            }]
          }];
        }, {
          role: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.role']
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          controlOrGroupDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-disabled']
          }],
          hasDisabledClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.disabled']
          }],
          isActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.active']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-checked']
          }],
          tabindex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.tabindex']
          }],

          /**
           * @return {?}
           */
          toggleIfAllowed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          onSpacePressed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown.space', ['$event']]
          }],

          /**
           * @return {?}
           */
          onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focus']
          }],

          /**
           * @return {?}
           */
          onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['blur']
          }],
          uncheckable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          btnRadio: [{
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


      var RADIO_CONTROL_VALUE_ACCESSOR$1 = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],

        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return ButtonRadioGroupDirective;
        }),
        multi: true
      };
      /**
       * A group of radio buttons.
       * A value of a selected button is bound to a variable specified via ngModel.
       */

      var ButtonRadioGroupDirective = /*#__PURE__*/function () {
        /**
         * @param {?} cdr
         */
        function ButtonRadioGroupDirective(cdr) {
          _classCallCheck(this, ButtonRadioGroupDirective);

          this.cdr = cdr;
          this.onChange = Function.prototype;
          this.onTouched = Function.prototype;
          this.role = 'radiogroup';
        }
        /**
         * @return {?}
         */


        _createClass(ButtonRadioGroupDirective, [{
          key: "value",
          get: function get() {
            return this._value;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._value = value;
            this.onChange(value);
          }
          /**
           * @return {?}
           */

        }, {
          key: "tabindex",
          get: function get() {
            if (this._disabled) {
              return null;
            } else {
              return 0;
            }
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this._value = value;
            this.cdr.markForCheck();
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
           * @param {?} disabled
           * @return {?}
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(disabled) {
            if (this.radioButtons) {
              this._disabled = disabled;
              this.radioButtons.forEach(
              /**
              * @param {?} buttons
              * @return {?}
              */
              function (buttons) {
                buttons.setDisabledState(disabled);
              });
              this.cdr.markForCheck();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "onFocus",
          value: function onFocus() {
            if (this._disabled) {
              return;
            }
            /** @type {?} */


            var activeRadio = this.getActiveOrFocusedRadio();

            if (activeRadio) {
              activeRadio.focus();
            } else {
              /** @type {?} */
              var firstEnabled = this.radioButtons.find(
              /**
              * @param {?} r
              * @return {?}
              */
              function (r) {
                return !r.disabled;
              });

              if (firstEnabled) {
                firstEnabled.focus();
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "onBlur",
          value: function onBlur() {
            if (this.onTouched) {
              this.onTouched();
            }
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "selectNext",
          value: function selectNext(event) {
            this.selectInDirection('next');
            event.preventDefault();
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "selectPrevious",
          value: function selectPrevious(event) {
            this.selectInDirection('previous');
            event.preventDefault();
          }
          /**
           * @return {?}
           */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          }
          /**
           * @private
           * @param {?} direction
           * @return {?}
           */

        }, {
          key: "selectInDirection",
          value: function selectInDirection(direction) {
            if (this._disabled) {
              return;
            }
            /**
             * @param {?} currentIndex
             * @param {?} buttonRadioDirectives
             * @return {?}
             */


            function nextIndex(currentIndex, buttonRadioDirectives) {
              /** @type {?} */
              var step = direction === 'next' ? 1 : -1;
              /** @type {?} */

              var calcIndex = (currentIndex + step) % buttonRadioDirectives.length;

              if (calcIndex < 0) {
                calcIndex = buttonRadioDirectives.length - 1;
              }

              return calcIndex;
            }
            /** @type {?} */


            var activeRadio = this.getActiveOrFocusedRadio();

            if (activeRadio) {
              /** @type {?} */
              var buttonRadioDirectives = this.radioButtons.toArray();
              /** @type {?} */

              var currentActiveIndex = buttonRadioDirectives.indexOf(activeRadio);

              for (var i = nextIndex(currentActiveIndex, buttonRadioDirectives); i !== currentActiveIndex; i = nextIndex(i, buttonRadioDirectives)) {
                if (buttonRadioDirectives[i].canToggle()) {
                  buttonRadioDirectives[i].toggleIfAllowed();
                  buttonRadioDirectives[i].focus();
                  break;
                }
              }
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "getActiveOrFocusedRadio",
          value: function getActiveOrFocusedRadio() {
            return this.radioButtons.find(
            /**
            * @param {?} button
            * @return {?}
            */
            function (button) {
              return button.isActive;
            }) || this.radioButtons.find(
            /**
            * @param {?} button
            * @return {?}
            */
            function (button) {
              return button.hasFocus;
            });
          }
        }]);

        return ButtonRadioGroupDirective;
      }();

      ButtonRadioGroupDirective.ɵfac = function ButtonRadioGroupDirective_Factory(t) {
        return new (t || ButtonRadioGroupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      ButtonRadioGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ButtonRadioGroupDirective,
        selectors: [["", "btnRadioGroup", ""]],
        contentQueries: function ButtonRadioGroupDirective_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, ButtonRadioDirective, 0);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.radioButtons = _t);
          }
        },
        hostVars: 2,
        hostBindings: function ButtonRadioGroupDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ButtonRadioGroupDirective_focus_HostBindingHandler() {
              return ctx.onFocus();
            })("blur", function ButtonRadioGroupDirective_blur_HostBindingHandler() {
              return ctx.onBlur();
            })("keydown.ArrowRight", function ButtonRadioGroupDirective_keydown_ArrowRight_HostBindingHandler($event) {
              return ctx.selectNext($event);
            })("keydown.ArrowDown", function ButtonRadioGroupDirective_keydown_ArrowDown_HostBindingHandler($event) {
              return ctx.selectNext($event);
            })("keydown.ArrowLeft", function ButtonRadioGroupDirective_keydown_ArrowLeft_HostBindingHandler($event) {
              return ctx.selectPrevious($event);
            })("keydown.ArrowUp", function ButtonRadioGroupDirective_keydown_ArrowUp_HostBindingHandler($event) {
              return ctx.selectPrevious($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role)("tabindex", ctx.tabindex);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([RADIO_CONTROL_VALUE_ACCESSOR$1])]
      });
      /** @nocollapse */

      ButtonRadioGroupDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      ButtonRadioGroupDirective.propDecorators = {
        role: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.role']
        }],
        radioButtons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return ButtonRadioDirective;
          })]
        }],
        tabindex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.tabindex']
        }],
        onFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['focus']
        }],
        onBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['blur']
        }],
        selectNext: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.ArrowRight', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.ArrowDown', ['$event']]
        }],
        selectPrevious: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.ArrowLeft', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.ArrowUp', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonRadioGroupDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[btnRadioGroup]',
            providers: [RADIO_CONTROL_VALUE_ACCESSOR$1]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          role: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.role']
          }],
          tabindex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.tabindex']
          }],

          /**
           * @return {?}
           */
          onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focus']
          }],

          /**
           * @return {?}
           */
          onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['blur']
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          selectNext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown.ArrowRight', ['$event']]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown.ArrowDown', ['$event']]
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          selectPrevious: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown.ArrowLeft', ['$event']]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown.ArrowUp', ['$event']]
          }],
          radioButtons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return ButtonRadioDirective;
            })]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ButtonsModule = /*#__PURE__*/function () {
        function ButtonsModule() {
          _classCallCheck(this, ButtonsModule);
        }

        _createClass(ButtonsModule, null, [{
          key: "forRoot",
          value:
          /**
           * @return {?}
           */
          function forRoot() {
            return {
              ngModule: ButtonsModule,
              providers: []
            };
          }
        }]);

        return ButtonsModule;
      }();

      ButtonsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ButtonsModule
      });
      ButtonsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ButtonsModule_Factory(t) {
          return new (t || ButtonsModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ButtonsModule, {
          declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective],
          exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective],
            exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective]
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
      //# sourceMappingURL=ngx-bootstrap-buttons.js.map

      /***/

    },

    /***/
    "jUYC":
    /*!*************************************************************!*\
      !*** ./src/app/views/dashboard/dashboard-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: DashboardRoutingModule */

    /***/
    function jUYC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
        return DashboardRoutingModule;
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


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard.component */
      "l70X");

      var routes = [{
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        data: {
          title: 'Dashboard'
        }
      }];

      var DashboardRoutingModule = function DashboardRoutingModule() {
        _classCallCheck(this, DashboardRoutingModule);
      };

      DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DashboardRoutingModule);
      /***/
    },

    /***/
    "l70X":
    /*!********************************************************!*\
      !*** ./src/app/views/dashboard/dashboard.component.ts ***!
      \********************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function l70X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "P3Bu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @coreui/coreui/dist/js/coreui-utilities */
      "NuRj");
      /* harmony import */


      var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @coreui/coreui-plugin-chartjs-custom-tooltips */
      "H++W");
      /* harmony import */


      var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_4__);

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);

          this.radioModel = 'Month'; // lineChart1

          this.lineChart1Data = [{
            data: [65, 59, 84, 84, 51, 55, 40],
            label: 'Series A'
          }];
          this.lineChart1Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
          this.lineChart1Options = {
            tooltips: {
              enabled: false,
              custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_4__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                gridLines: {
                  color: 'transparent',
                  zeroLineColor: 'transparent'
                },
                ticks: {
                  fontSize: 2,
                  fontColor: 'transparent'
                }
              }],
              yAxes: [{
                display: false,
                ticks: {
                  display: false,
                  min: 40 - 5,
                  max: 84 + 5
                }
              }]
            },
            elements: {
              line: {
                borderWidth: 1
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
              }
            },
            legend: {
              display: false
            }
          };
          this.lineChart1Colours = [{
            backgroundColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__["getStyle"])('--primary'),
            borderColor: 'rgba(255,255,255,.55)'
          }];
          this.lineChart1Legend = false;
          this.lineChart1Type = 'line'; // lineChart2

          this.lineChart2Data = [{
            data: [1, 18, 9, 17, 34, 22, 11],
            label: 'Series A'
          }];
          this.lineChart2Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
          this.lineChart2Options = {
            tooltips: {
              enabled: false,
              custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_4__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                gridLines: {
                  color: 'transparent',
                  zeroLineColor: 'transparent'
                },
                ticks: {
                  fontSize: 2,
                  fontColor: 'transparent'
                }
              }],
              yAxes: [{
                display: false,
                ticks: {
                  display: false,
                  min: 1 - 5,
                  max: 34 + 5
                }
              }]
            },
            elements: {
              line: {
                tension: 0.00001,
                borderWidth: 1
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
              }
            },
            legend: {
              display: false
            }
          };
          this.lineChart2Colours = [{
            backgroundColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__["getStyle"])('--info'),
            borderColor: 'rgba(255,255,255,.55)'
          }];
          this.lineChart2Legend = false;
          this.lineChart2Type = 'line'; // lineChart3

          this.lineChart3Data = [{
            data: [78, 81, 80, 45, 34, 12, 40],
            label: 'Series A'
          }];
          this.lineChart3Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
          this.lineChart3Options = {
            tooltips: {
              enabled: false,
              custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_4__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                display: false
              }],
              yAxes: [{
                display: false
              }]
            },
            elements: {
              line: {
                borderWidth: 2
              },
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4
              }
            },
            legend: {
              display: false
            }
          };
          this.lineChart3Colours = [{
            backgroundColor: 'rgba(255,255,255,.2)',
            borderColor: 'rgba(255,255,255,.55)'
          }];
          this.lineChart3Legend = false;
          this.lineChart3Type = 'line'; // barChart1

          this.barChart1Data = [{
            data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
            label: 'Series A',
            barPercentage: 0.6
          }];
          this.barChart1Labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
          this.barChart1Options = {
            tooltips: {
              enabled: false,
              custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_4__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                display: false
              }],
              yAxes: [{
                display: false
              }]
            },
            legend: {
              display: false
            }
          };
          this.barChart1Colours = [{
            backgroundColor: 'rgba(255,255,255,.3)',
            borderWidth: 0
          }];
          this.barChart1Legend = false;
          this.barChart1Type = 'bar'; // mainChart

          this.mainChartElements = 27;
          this.mainChartData1 = [];
          this.mainChartData2 = [];
          this.mainChartData3 = [];
          this.mainChartData = [{
            data: this.mainChartData1,
            label: 'Current'
          }, {
            data: this.mainChartData2,
            label: 'Previous'
          }, {
            data: this.mainChartData3,
            label: 'BEP'
          }];
          /* tslint:disable:max-line-length */

          this.mainChartLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
          /* tslint:enable:max-line-length */

          this.mainChartOptions = {
            tooltips: {
              enabled: false,
              custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_4__["CustomTooltips"],
              intersect: true,
              mode: 'index',
              position: 'nearest',
              callbacks: {
                labelColor: function labelColor(tooltipItem, chart) {
                  return {
                    backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor
                  };
                }
              }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                gridLines: {
                  drawOnChartArea: false
                },
                ticks: {
                  callback: function callback(value) {
                    return value.charAt(0);
                  }
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  maxTicksLimit: 5,
                  stepSize: Math.ceil(250 / 5),
                  max: 250
                }
              }]
            },
            elements: {
              line: {
                borderWidth: 2
              },
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3
              }
            },
            legend: {
              display: false
            }
          };
          this.mainChartColours = [{
            backgroundColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__["hexToRgba"])(Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__["getStyle"])('--info'), 10),
            borderColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__["getStyle"])('--info'),
            pointHoverBackgroundColor: '#fff'
          }, {
            backgroundColor: 'transparent',
            borderColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__["getStyle"])('--success'),
            pointHoverBackgroundColor: '#fff'
          }, {
            backgroundColor: 'transparent',
            borderColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__["getStyle"])('--danger'),
            pointHoverBackgroundColor: '#fff',
            borderWidth: 1,
            borderDash: [8, 5]
          }];
          this.mainChartLegend = false;
          this.mainChartType = 'line'; // social box charts

          this.brandBoxChartData1 = [{
            data: [65, 59, 84, 84, 51, 55, 40],
            label: 'Facebook'
          }];
          this.brandBoxChartData2 = [{
            data: [1, 13, 9, 17, 34, 41, 38],
            label: 'Twitter'
          }];
          this.brandBoxChartData3 = [{
            data: [78, 81, 80, 45, 34, 12, 40],
            label: 'LinkedIn'
          }];
          this.brandBoxChartData4 = [{
            data: [35, 23, 56, 22, 97, 23, 64],
            label: 'Google+'
          }];
          this.brandBoxChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
          this.brandBoxChartOptions = {
            tooltips: {
              enabled: false,
              custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_4__["CustomTooltips"]
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                display: false
              }],
              yAxes: [{
                display: false
              }]
            },
            elements: {
              line: {
                borderWidth: 2
              },
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3
              }
            },
            legend: {
              display: false
            }
          };
          this.brandBoxChartColours = [{
            backgroundColor: 'rgba(255,255,255,.1)',
            borderColor: 'rgba(255,255,255,.55)',
            pointHoverBackgroundColor: '#fff'
          }];
          this.brandBoxChartLegend = false;
          this.brandBoxChartType = 'line';
        }

        _createClass(DashboardComponent, [{
          key: "random",
          value: function random(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            // generate random values for mainChart
            for (var i = 0; i <= this.mainChartElements; i++) {
              this.mainChartData1.push(this.random(50, 200));
              this.mainChartData2.push(this.random(80, 100));
              this.mainChartData3.push(65);
            }
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], DashboardComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-dashboard-dashboard-module-es5.js.map