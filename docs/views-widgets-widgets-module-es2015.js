(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-widgets-widgets-module"],{

/***/ "DXaZ":
/*!*********************************************************!*\
  !*** ./src/app/views/widgets/widgets-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WidgetsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsRoutingModule", function() { return WidgetsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _widgets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets.component */ "Q2d6");




const routes = [
    {
        path: '',
        component: _widgets_component__WEBPACK_IMPORTED_MODULE_3__["WidgetsComponent"],
        data: {
            title: 'Widgets'
        }
    }
];
let WidgetsRoutingModule = class WidgetsRoutingModule {
};
WidgetsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], WidgetsRoutingModule);



/***/ }),

/***/ "O5IU":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/widgets/widgets.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-white bg-primary\">\n        <div class=\"card-body pb-0\">\n          <div class=\"btn-group float-right\" dropdown>\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\n              <i class=\"icon-settings\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n          <div class=\"text-value\">9.823</div>\n          <div>Members online</div>\n        </div>\n        <div class=\"chart-wrapper mt-3 mx-3\" style=\"height:70px;\">\n          <canvas baseChart class=\"chart\"\n          [datasets]=\"lineChart1Data\"\n          [labels]=\"lineChart1Labels\"\n          [options]=\"lineChart1Options\"\n          [colors]=\"lineChart1Colours\"\n          [legend]=\"lineChart1Legend\"\n          [chartType]=\"lineChart1Type\"></canvas>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-white bg-info\">\n        <div class=\"card-body pb-0\">\n          <button type=\"button\" class=\"btn btn-transparent p-0 float-right\">\n            <i class=\"icon-location-pin\"></i>\n          </button>\n          <div class=\"text-value\">9.823</div>\n          <div>Members online</div>\n        </div>\n        <div class=\"chart-wrapper mt-3 mx-3\" style=\"height:70px;\">\n          <canvas baseChart class=\"chart\"\n          [datasets]=\"lineChart2Data\"\n          [labels]=\"lineChart2Labels\"\n          [options]=\"lineChart2Options\"\n          [colors]=\"lineChart2Colours\"\n          [legend]=\"lineChart2Legend\"\n          [chartType]=\"lineChart2Type\"></canvas>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-white bg-warning\">\n        <div class=\"card-body pb-0\">\n          <div class=\"btn-group float-right\" dropdown>\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\n              <i class=\"icon-settings\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n          <div class=\"text-value\">9.823</div>\n          <div>Members online</div>\n        </div>\n        <div class=\"chart-wrapper mt-3\" style=\"height:70px;\">\n          <canvas baseChart class=\"chart\"\n          [datasets]=\"lineChart3Data\"\n          [labels]=\"lineChart3Labels\"\n          [options]=\"lineChart3Options\"\n          [colors]=\"lineChart3Colours\"\n          [legend]=\"lineChart3Legend\"\n          [chartType]=\"lineChart3Type\"></canvas>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-white bg-danger\">\n        <div class=\"card-body pb-0\">\n          <div class=\"btn-group float-right\" dropdown>\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\n              <i class=\"icon-settings\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n          <div class=\"text-value\">9.823</div>\n          <div>Members online</div>\n        </div>\n        <div class=\"chart-wrapper mt-3 mx-3\" style=\"height:70px;\">\n          <canvas baseChart class=\"chart\"\n          [datasets]=\"barChart1Data\"\n          [labels]=\"barChart1Labels\"\n          [options]=\"barChart1Options\"\n          [colors]=\"barChart1Colours\"\n          [legend]=\"barChart1Legend\"\n          [chartType]=\"barChart1Type\"></canvas>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-header bg-primary\">\n          <div class=\"font-weight-bold\">\n            <span>SALE</span>\n            <span class=\"float-right\">$1.890,65</span>\n          </div>\n          <div>\n            <span>\n              <small>Today 6:43 AM</small>\n            </span>\n            <span class=\"float-right\">\n              <small>+432,50 (15,78%)</small>\n            </span>\n          </div>\n          <div class=\"chart-wrapper\" style=\"height:38px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"lineChart4Data\"\n            [labels]=\"lineChart4Labels\"\n            [options]=\"lineChart4Options\"\n            [colors]=\"lineChart4Colours\"\n            [legend]=\"lineChart4Legend\"\n            [chartType]=\"lineChart4Type\"></canvas>\n          </div>\n          <div class=\"chart-wrapper\" style=\"height:38px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"barChart2Data\"\n            [labels]=\"barChart2Labels\"\n            [options]=\"barChart2Options\"\n            [colors]=\"barChart2Colours\"\n            [legend]=\"barChart2Legend\"\n            [chartType]=\"barChart2Type\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-header bg-danger\">\n          <div class=\"font-weight-bold\">\n            <span>SALE</span>\n            <span class=\"float-right\">$1.890,65</span>\n          </div>\n          <div>\n            <span>\n              <small>Today 6:43 AM</small>\n            </span>\n            <span class=\"float-right\">\n              <small>+432,50 (15,78%)</small>\n            </span>\n          </div>\n          <div class=\"chart-wrapper\" style=\"height:38px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"lineChart4Data\"\n            [labels]=\"lineChart4Labels\"\n            [options]=\"lineChart4Options\"\n            [colors]=\"lineChart4Colours\"\n            [legend]=\"lineChart4Legend\"\n            [chartType]=\"lineChart4Type\"></canvas>\n          </div>\n          <div class=\"chart-wrapper\" style=\"height:38px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"barChart2Data\"\n            [labels]=\"barChart2Labels\"\n            [options]=\"barChart2Options\"\n            [colors]=\"barChart2Colours\"\n            [legend]=\"barChart2Legend\"\n            [chartType]=\"barChart2Type\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-header bg-success\">\n          <div class=\"font-weight-bold\">\n            <span>SALE</span>\n            <span class=\"float-right\">$1.890,65</span>\n          </div>\n          <div>\n            <span>\n              <small>Today 6:43 AM</small>\n            </span>\n            <span class=\"float-right\">\n              <small>+432,50 (15,78%)</small>\n            </span>\n          </div>\n          <div class=\"chart-wrapper\" style=\"height:38px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"lineChart4Data\"\n            [labels]=\"lineChart4Labels\"\n            [options]=\"lineChart4Options\"\n            [colors]=\"lineChart4Colours\"\n            [legend]=\"lineChart4Legend\"\n            [chartType]=\"lineChart4Type\"></canvas>\n          </div>\n          <div class=\"chart-wrapper\" style=\"height:38px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"barChart2Data\"\n            [labels]=\"barChart2Labels\"\n            [options]=\"barChart2Options\"\n            [colors]=\"barChart2Colours\"\n            [legend]=\"barChart2Legend\"\n            [chartType]=\"barChart2Type\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-header bg-warning\">\n          <div class=\"font-weight-bold\">\n            <span>SALE</span>\n            <span class=\"float-right\">$1.890,65</span>\n          </div>\n          <div>\n            <span>\n              <small>Today 6:43 AM</small>\n            </span>\n            <span class=\"float-right\">\n              <small>+432,50 (15,78%)</small>\n            </span>\n          </div>\n          <div class=\"chart-wrapper\" style=\"height:38px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"lineChart4Data\"\n            [labels]=\"lineChart4Labels\"\n            [options]=\"lineChart4Options\"\n            [colors]=\"lineChart4Colours\"\n            [legend]=\"lineChart4Legend\"\n            [chartType]=\"lineChart4Type\"></canvas>\n          </div>\n          <div class=\"chart-wrapper\" style=\"height:38px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"barChart2Data\"\n            [labels]=\"barChart2Labels\"\n            [options]=\"barChart2Options\"\n            [colors]=\"barChart2Colours\"\n            [legend]=\"barChart2Legend\"\n            [chartType]=\"barChart2Type\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"h4 m-0\">89.9%</div>\n          <div>Lorem ipsum...</div>\n          <div class=\"progress progress-xs my-3\">\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"h4 m-0\">12.124</div>\n          <div>Lorem ipsum...</div>\n          <div class=\"progress progress-xs my-3\">\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"h4 m-0\">$98.111,00</div>\n          <div>Lorem ipsum...</div>\n          <div class=\"progress progress-xs my-3\">\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"h4 m-0\">2 TB</div>\n          <div>Lorem ipsum...</div>\n          <div class=\"progress progress-xs my-3\">\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-white bg-primary\">\n        <div class=\"card-body\">\n          <div class=\"h4 m-0\">89.9%</div>\n          <div>Lorem ipsum...</div>\n          <div class=\"progress progress-white progress-xs my-3\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-white bg-warning\">\n        <div class=\"card-body\">\n          <div class=\"h4 m-0\">12.124</div>\n          <div>Lorem ipsum...</div>\n          <div class=\"progress progress-white progress-xs my-3\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-white bg-danger\">\n        <div class=\"card-body\">\n          <div class=\"h4 m-0\">$98.111,00</div>\n          <div>Lorem ipsum...</div>\n          <div class=\"progress progress-white progress-xs my-3\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-white bg-info\">\n        <div class=\"card-body\">\n          <div class=\"h4 m-0\">2 TB</div>\n          <div>Lorem ipsum...</div>\n          <div class=\"progress progress-white progress-xs my-3\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n\n  <div class=\"row\">\n    <div class=\"col-md-2 col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-body text-center\">\n          <div class=\"text-muted small text-uppercase font-weight-bold\">Title</div>\n          <div class=\"h2 py-3\">1,123</div>\n          <div class=\"chart-wrapper mx-auto\" style=\"height:40px;width:80px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"barChart3Data\"\n            [labels]=\"barChart3Labels\"\n            [options]=\"barChart3Options\"\n            [colors]=\"barChart3Primary\"\n            [legend]=\"barChart3Legend\"\n            [chartType]=\"barChart3Type\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-2 col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-body text-center\">\n          <div class=\"text-muted small text-uppercase font-weight-bold\">Title</div>\n          <div class=\"h2 py-3\">1,123</div>\n          <div class=\"chart-wrapper mx-auto\" style=\"height:40px;width:80px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"barChart3Data\"\n            [labels]=\"barChart3Labels\"\n            [options]=\"barChart3Options\"\n            [colors]=\"barChart3Danger\"\n            [legend]=\"barChart3Legend\"\n            [chartType]=\"barChart3Type\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-2 col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-body text-center\">\n          <div class=\"text-muted small text-uppercase font-weight-bold\">Title</div>\n          <div class=\"h2 py-3\">1,123</div>\n          <div class=\"chart-wrapper mx-auto\" style=\"height:40px;width:80px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"barChart3Data\"\n            [labels]=\"barChart3Labels\"\n            [options]=\"barChart3Options\"\n            [colors]=\"barChart3Success\"\n            [legend]=\"barChart3Legend\"\n            [chartType]=\"barChart3Type\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-2 col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-body text-center\">\n          <div class=\"text-muted small text-uppercase font-weight-bold\">Title</div>\n          <div class=\"h2 py-3\">1,123</div>\n          <div class=\"chart-wrapper mx-auto\" style=\"height:40px;width:80px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"lineChart5Data\"\n            [labels]=\"lineChart5Labels\"\n            [options]=\"lineChart5Options\"\n            [colors]=\"lineChart5Info\"\n            [legend]=\"lineChart5Legend\"\n            [chartType]=\"lineChart5Type\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-2 col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-body text-center\">\n          <div class=\"text-muted small text-uppercase font-weight-bold\">Title</div>\n          <div class=\"h2 py-3\">1,123</div>\n          <div class=\"chart-wrapper mx-auto\" style=\"height:40px;width:80px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"lineChart5Data\"\n            [labels]=\"lineChart5Labels\"\n            [options]=\"lineChart5Options\"\n            [colors]=\"lineChart5Success\"\n            [legend]=\"lineChart5Legend\"\n            [chartType]=\"lineChart5Type\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-2 col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-body text-center\">\n          <div class=\"text-muted small text-uppercase font-weight-bold\">Title</div>\n          <div class=\"h2 py-3\">1,123</div>\n          <div class=\"chart-wrapper mx-auto\" style=\"height:40px;width:80px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"lineChart5Data\"\n            [labels]=\"lineChart5Labels\"\n            [options]=\"lineChart5Options\"\n            [colors]=\"lineChart5Warning\"\n            [legend]=\"lineChart5Legend\"\n            [chartType]=\"lineChart5Type\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-3 clearfix\">\n          <i class=\"fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-primary mb-0 mt-2\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-3 clearfix\">\n          <i class=\"fa fa-laptop bg-info p-3 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-info mb-0 mt-2\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-3 clearfix\">\n          <i class=\"fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-warning mb-0 mt-2\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-3 clearfix\">\n          <i class=\"fa fa-bell bg-danger p-3 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-danger mb-0 mt-2\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-3 clearfix\">\n          <i class=\"fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-primary mb-0 mt-2\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n        <div class=\"card-footer px-3 py-2\">\n          <a class=\"font-weight-bold font-xs btn-block text-muted\" href=\"#\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-3 clearfix\">\n          <i class=\"fa fa-laptop bg-info p-3 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-info mb-0 mt-2\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n        <div class=\"card-footer px-3 py-2\">\n          <a class=\"font-weight-bold font-xs btn-block text-muted\" href=\"#\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-3 clearfix\">\n          <i class=\"fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-warning mb-0 mt-2\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n        <div class=\"card-footer px-3 py-2\">\n          <a class=\"font-weight-bold font-xs btn-block text-muted\" href=\"#\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-3 clearfix\">\n          <i class=\"fa fa-bell bg-danger p-3 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-danger mb-0 mt-2\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n        <div class=\"card-footer px-3 py-2\">\n          <a class=\"font-weight-bold font-xs btn-block text-muted\" href=\"#\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  <!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-0 clearfix\">\n          <i class=\"fa fa-cogs bg-primary p-4 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-primary mb-0 pt-3\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-0 clearfix\">\n          <i class=\"fa fa-laptop bg-info p-4 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-info mb-0 pt-3\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-0 clearfix\">\n          <i class=\"fa fa-moon-o bg-warning p-4 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-warning mb-0 pt-3\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-0 clearfix\">\n          <i class=\"fa fa-bell bg-danger p-4 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-danger mb-0 pt-3\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-0 clearfix\">\n          <i class=\"fa fa-cogs bg-primary p-4 px-5 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-primary mb-0 pt-3\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-0 clearfix\">\n          <i class=\"fa fa-laptop bg-info p-4 px-5 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-info mb-0 pt-3\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-0 clearfix\">\n          <i class=\"fa fa-moon-o bg-warning p-4 px-5 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-warning mb-0 pt-3\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-0 clearfix\">\n          <i class=\"fa fa-bell bg-danger p-4 px-5 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-danger mb-0 pt-3\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  <!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-facebook\">\n          <i class=\"fa fa-facebook\"></i>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">89k</div>\n            <div class=\"text-uppercase text-muted small\">friends</div>\n          </div>\n          <div>\n            <div class=\"text-value\">459</div>\n            <div class=\"text-uppercase text-muted small\">feeds</div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-twitter\">\n          <i class=\"fa fa-twitter\"></i>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">973k</div>\n            <div class=\"text-uppercase text-muted small\">followers</div>\n          </div>\n          <div>\n            <div class=\"text-value\">1.792</div>\n            <div class=\"text-uppercase text-muted small\">tweets</div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-linkedin\">\n          <i class=\"fa fa-linkedin\"></i>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">500+</div>\n            <div class=\"text-uppercase text-muted small\">contacts</div>\n          </div>\n          <div>\n            <div class=\"text-value\">292</div>\n            <div class=\"text-uppercase text-muted small\">feeds</div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-google-plus\">\n          <i class=\"fa fa-google-plus\"></i>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">894</div>\n            <div class=\"text-uppercase text-muted small\">followers</div>\n          </div>\n          <div>\n            <div class=\"text-value\">92</div>\n            <div class=\"text-uppercase text-muted small\">circles</div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n\n  <div class=\"card-group mb-4\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"h1 text-muted text-right mb-4\">\n          <i class=\"icon-people\"></i>\n        </div>\n        <div class=\"h4 mb-0\">87.500</div>\n        <small class=\"text-muted text-uppercase font-weight-bold\">Visitors</small>\n        <div class=\"progress progress-xs mt-3 mb-0\">\n          <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"h1 text-muted text-right mb-4\">\n          <i class=\"icon-user-follow\"></i>\n        </div>\n        <div class=\"h4 mb-0\">385</div>\n        <small class=\"text-muted text-uppercase font-weight-bold\">New Clients</small>\n        <div class=\"progress progress-xs mt-3 mb-0\">\n          <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"h1 text-muted text-right mb-4\">\n          <i class=\"icon-basket-loaded\"></i>\n        </div>\n        <div class=\"h4 mb-0\">1238</div>\n        <small class=\"text-muted text-uppercase font-weight-bold\">Products sold</small>\n        <div class=\"progress progress-xs mt-3 mb-0\">\n          <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"h1 text-muted text-right mb-4\">\n          <i class=\"icon-pie-chart\"></i>\n        </div>\n        <div class=\"h4 mb-0\">28%</div>\n        <small class=\"text-muted text-uppercase font-weight-bold\">Returning Visitors</small>\n        <div class=\"progress progress-xs mt-3 mb-0\">\n          <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"h1 text-muted text-right mb-4\">\n          <i class=\"icon-speedometer\"></i>\n        </div>\n        <div class=\"h4 mb-0\">5:34:11</div>\n        <small class=\"text-muted text-uppercase font-weight-bold\">Avg. Time</small>\n        <div class=\"progress progress-xs mt-3 mb-0\">\n          <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-2\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"h1 text-muted text-right mb-4\">\n            <i class=\"icon-people\"></i>\n          </div>\n          <div class=\"h4 mb-0\">87.500</div>\n          <small class=\"text-muted text-uppercase font-weight-bold\">Visitors</small>\n          <div class=\"progress progress-xs mt-3 mb-0\">\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-2\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"h1 text-muted text-right mb-4\">\n            <i class=\"icon-user-follow\"></i>\n          </div>\n          <div class=\"h4 mb-0\">385</div>\n          <small class=\"text-muted text-uppercase font-weight-bold\">New Clients</small>\n          <div class=\"progress progress-xs mt-3 mb-0\">\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-2\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"h1 text-muted text-right mb-4\">\n            <i class=\"icon-basket-loaded\"></i>\n          </div>\n          <div class=\"h4 mb-0\">1238</div>\n          <small class=\"text-muted text-uppercase font-weight-bold\">Products sold</small>\n          <div class=\"progress progress-xs mt-3 mb-0\">\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-2\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"h1 text-muted text-right mb-4\">\n            <i class=\"icon-pie-chart\"></i>\n          </div>\n          <div class=\"h4 mb-0\">28%</div>\n          <small class=\"text-muted text-uppercase font-weight-bold\">Returning Visitors</small>\n          <div class=\"progress progress-xs mt-3 mb-0\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-2\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"h1 text-muted text-right mb-4\">\n            <i class=\"icon-speedometer\"></i>\n          </div>\n          <div class=\"h4 mb-0\">5:34:11</div>\n          <small class=\"text-muted text-uppercase font-weight-bold\">Avg. Time</small>\n          <div class=\"progress progress-xs mt-3 mb-0\">\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-2\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"h1 text-muted text-right mb-4\">\n            <i class=\"icon-speech\"></i>\n          </div>\n          <div class=\"h4 mb-0\">972</div>\n          <small class=\"text-muted text-uppercase font-weight-bold\">Comments</small>\n          <div class=\"progress progress-xs mt-3 mb-0\">\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-2\">\n      <div class=\"card text-white bg-info\">\n        <div class=\"card-body\">\n          <div class=\"h1 text-muted text-right mb-4\">\n            <i class=\"icon-people\"></i>\n          </div>\n          <div class=\"h4 mb-0\">87.500</div>\n          <small class=\"text-muted text-uppercase font-weight-bold\">Visitors</small>\n          <div class=\"progress progress-white progress-xs mt-3\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-2\">\n      <div class=\"card text-white bg-success\">\n        <div class=\"card-body\">\n          <div class=\"h1 text-muted text-right mb-4\">\n            <i class=\"icon-user-follow\"></i>\n          </div>\n          <div class=\"h4 mb-0\">385</div>\n          <small class=\"text-muted text-uppercase font-weight-bold\">New Clients</small>\n          <div class=\"progress progress-white progress-xs mt-3\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-2\">\n      <div class=\"card text-white bg-warning\">\n        <div class=\"card-body\">\n          <div class=\"h1 text-muted text-right mb-4\">\n            <i class=\"icon-basket-loaded\"></i>\n          </div>\n          <div class=\"h4 mb-0\">1238</div>\n          <small class=\"text-muted text-uppercase font-weight-bold\">Products sold</small>\n          <div class=\"progress progress-white progress-xs mt-3\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-2\">\n      <div class=\"card text-white bg-primary\">\n        <div class=\"card-body\">\n          <div class=\"h1 text-muted text-right mb-4\">\n            <i class=\"icon-pie-chart\"></i>\n          </div>\n          <div class=\"h4 mb-0\">28%</div>\n          <small class=\"text-muted text-uppercase font-weight-bold\">Returning Visitors</small>\n          <div class=\"progress progress-white progress-xs mt-3\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-2\">\n      <div class=\"card text-white bg-danger\">\n        <div class=\"card-body\">\n          <div class=\"h1 text-muted text-right mb-4\">\n            <i class=\"icon-speedometer\"></i>\n          </div>\n          <div class=\"h4 mb-0\">5:34:11</div>\n          <small class=\"text-muted text-uppercase font-weight-bold\">Avg. Time</small>\n          <div class=\"progress progress-white progress-xs mt-3\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-2\">\n      <div class=\"card text-white bg-info\">\n        <div class=\"card-body\">\n          <div class=\"h1 text-muted text-right mb-4\">\n            <i class=\"icon-speech\"></i>\n          </div>\n          <div class=\"h4 mb-0\">972</div>\n          <small class=\"text-muted text-uppercase font-weight-bold\">Comments</small>\n          <div class=\"progress progress-white progress-xs mt-3\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n</div>\n");

/***/ }),

/***/ "Q2d6":
/*!****************************************************!*\
  !*** ./src/app/views/widgets/widgets.component.ts ***!
  \****************************************************/
/*! exports provided: WidgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsComponent", function() { return WidgetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_widgets_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./widgets.component.html */ "O5IU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/coreui/dist/js/coreui-utilities */ "NuRj");
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/coreui-plugin-chartjs-custom-tooltips */ "H++W");
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_4__);





let WidgetsComponent = class WidgetsComponent {
    constructor() {
        // lineChart1
        this.lineChart1Data = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Series A'
            }
        ];
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
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 40 - 5,
                            max: 84 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart1Colours = [
            {
                backgroundColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__["getStyle"])('--primary'),
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart1Legend = false;
        this.lineChart1Type = 'line';
        // lineChart2
        this.lineChart2Data = [
            {
                data: [1, 18, 9, 17, 34, 22, 11],
                label: 'Series A'
            }
        ];
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
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 1 - 5,
                            max: 34 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    tension: 0.00001,
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart2Colours = [
            {
                backgroundColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__["getStyle"])('--info'),
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart2Legend = false;
        this.lineChart2Type = 'line';
        // lineChart3
        this.lineChart3Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'Series A'
            }
        ];
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
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart3Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
            }
        ];
        this.lineChart3Legend = false;
        this.lineChart3Type = 'line';
        // barChart1
        this.barChart1Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
                label: 'Series A',
                barPercentage: 0.6
            }
        ];
        this.barChart1Labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
        this.barChart1Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_4__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            legend: {
                display: false
            }
        };
        this.barChart1Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.3)',
                borderWidth: 0
            }
        ];
        this.barChart1Legend = false;
        this.barChart1Type = 'bar';
        // lineChart4
        this.lineChart4Data = [
            {
                data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
                label: 'Series A'
            }
        ];
        this.lineChart4Labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.lineChart4Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_4__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        points: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: { point: { radius: 0 } },
            legend: {
                display: false
            }
        };
        this.lineChart4Colours = [
            {
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,255,255,.55)',
                borderWidth: 2
            }
        ];
        this.lineChart4Legend = false;
        this.lineChart4Type = 'line';
        // barChart2
        this.barChart2Data = [
            {
                data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
                label: 'Series A',
                barPercentage: 0.6
            }
        ];
        this.barChart2Labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.barChart2Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_4__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            beginAtZero: true,
                        }
                    }]
            },
            legend: {
                display: false
            }
        };
        this.barChart2Colours = [
            {
                backgroundColor: 'rgba(0,0,0,.2)',
                borderWidth: 0
            }
        ];
        this.barChart2Legend = false;
        this.barChart2Type = 'bar';
        // barChart3
        this.barChart3Data = [
            {
                data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
                label: 'Series A'
            }
        ];
        this.barChart3Labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.barChart3Options = {
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
        this.barChart3Primary = [
            {
                backgroundColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__["getStyle"])('--primary'),
                borderColor: 'transparent',
                borderWidth: 1
            }
        ];
        this.barChart3Danger = [
            {
                backgroundColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__["getStyle"])('--danger'),
                borderColor: 'transparent',
                borderWidth: 1
            }
        ];
        this.barChart3Success = [
            {
                backgroundColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__["getStyle"])('--success'),
                borderColor: 'transparent',
                borderWidth: 1
            }
        ];
        this.barChart3Legend = false;
        this.barChart3Type = 'bar';
        // lineChart5
        this.lineChart5Data = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Series A'
            }
        ];
        this.lineChart5Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart5Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_4__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        points: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: { point: { radius: 0 } },
            legend: {
                display: false
            }
        };
        this.lineChart5Info = [
            {
                backgroundColor: 'transparent',
                borderColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__["getStyle"])('--info'),
                borderWidth: 2
            }
        ];
        this.lineChart5Success = [
            {
                backgroundColor: 'transparent',
                borderColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__["getStyle"])('--info'),
                borderWidth: 2
            }
        ];
        this.lineChart5Warning = [
            {
                backgroundColor: 'transparent',
                borderColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__["getStyle"])('--warning'),
                borderWidth: 2
            }
        ];
        this.lineChart5Legend = false;
        this.lineChart5Type = 'line';
    }
};
WidgetsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_widgets_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], WidgetsComponent);



/***/ }),

/***/ "XVX6":
/*!*************************************************!*\
  !*** ./src/app/views/widgets/widgets.module.ts ***!
  \*************************************************/
/*! exports provided: WidgetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var _widgets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgets.component */ "Q2d6");
/* harmony import */ var _widgets_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgets-routing.module */ "DXaZ");






let WidgetsModule = class WidgetsModule {
};
WidgetsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _widgets_routing_module__WEBPACK_IMPORTED_MODULE_5__["WidgetsRoutingModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"]
        ],
        declarations: [_widgets_component__WEBPACK_IMPORTED_MODULE_4__["WidgetsComponent"]]
    })
], WidgetsModule);



/***/ })

}]);
//# sourceMappingURL=views-widgets-widgets-module-es2015.js.map