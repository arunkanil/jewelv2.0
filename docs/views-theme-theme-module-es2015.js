(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-theme-theme-module"],{

/***/ "7L++":
/*!*************************************************!*\
  !*** ./src/app/views/theme/colors.component.ts ***!
  \*************************************************/
/*! exports provided: VerifiedListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifiedListComponent", function() { return VerifiedListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_colors_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./colors.component.html */ "ayjt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");








let VerifiedListComponent = class VerifiedListComponent {
    constructor(dataservice, router, fb) {
        this.dataservice = dataservice;
        this.router = router;
        this.fb = fb;
        this.callerForm = this.fb.group({
            id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
        this.loading = true;
        this.btnLoading = false;
        this.orders = {};
        this.columnDefs = [];
        this.rowData = [];
        this.users = [];
        this.btnDisabled = true;
        this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_5__["customersColumn"]];
        this.rowSelection = "multiple";
    }
    ngOnInit() {
        this.getLists();
    }
    getLists() {
        this.loading = true;
        let filter = {
            is_verified: true,
            kp_caller_assigned_null: true,
        };
        this.dataservice
            .getCustomersFilter(filter)
            .valueChanges.subscribe((result) => {
            console.log("getCustomersFilter", result.data.customers);
            this.rowData = result.data.customers;
        });
        this.dataservice
            .getUsers("KP_CALLER")
            .valueChanges.subscribe((result) => {
            console.log("getUsers", result.data.users);
            this.users = result.data.users;
        });
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    onSelectionChanged(event) {
        this.selectedRows = this.gridApi.getSelectedRows();
        if (this.selectedRows.length > 0) {
            this.btnDisabled = false;
        }
        else {
            this.btnDisabled = true;
        }
        console.log(this.selectedRows);
        // this.router.navigate(
        //   ["/kpcaller/kp_customer_details", selectedRows[0].id],
        //   {
        //     state: { data: selectedRows },
        //   }
        // );
    }
    FormSubmit() {
        let resp = {};
        console.log(this.callerForm.value, Array.from(this.selectedRows, (x) => x.id));
        this.dataservice
            .SetKpCaller(this.callerForm.value.id, Array.from(this.selectedRows, (x) => x.id))
            .subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.updateUser) {
                alert("Assigned successfully!");
                this.getLists();
                this.myModal.hide();
            }
            else {
                alert("Failed. Please check the fields!");
            }
        });
    }
};
VerifiedListComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }
];
VerifiedListComponent.propDecorators = {
    myModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["myModal",] }]
};
VerifiedListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_colors_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
], VerifiedListComponent);



/***/ }),

/***/ "AgMk":
/*!*********************************************!*\
  !*** ./src/app/views/theme/theme.module.ts ***!
  \*********************************************/
/*! exports provided: ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-angular */ "YFAK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _colors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./colors.component */ "7L++");
/* harmony import */ var _theme_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme-routing.module */ "Mdpn");

// Angular






// import { TypographyComponent } from './typography.component';
// Theme Routing

let ThemeModule = class ThemeModule {
};
ThemeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _theme_routing_module__WEBPACK_IMPORTED_MODULE_7__["ThemeRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridModule"].withComponents([]),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ],
        declarations: [
            _colors_component__WEBPACK_IMPORTED_MODULE_6__["VerifiedListComponent"],
        ]
    })
], ThemeModule);



/***/ }),

/***/ "Mdpn":
/*!*****************************************************!*\
  !*** ./src/app/views/theme/theme-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ThemeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeRoutingModule", function() { return ThemeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _colors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colors.component */ "7L++");




const routes = [
    {
        path: '',
        // data: {
        //   title: 'Theme'
        // },
        children: [
            {
                path: '',
                redirectTo: 'manager'
            },
            {
                path: 'verified_list',
                component: _colors_component__WEBPACK_IMPORTED_MODULE_3__["VerifiedListComponent"],
                data: {
                    title: 'Verified List'
                }
            },
        ]
    }
];
let ThemeRoutingModule = class ThemeRoutingModule {
};
ThemeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ThemeRoutingModule);



/***/ }),

/***/ "ayjt":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/colors.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\n      <h2>Verified List</h2>\n      <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" [disabled]=\"btnDisabled\"\n        (click)=\"myModal.show()\">\n        Assign to caller\n      </button>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <ag-grid-angular #agGrid style=\"width: 100%; height: 500px\" id=\"myGrid\" class=\"ag-theme-alpine\"\n            [columnDefs]=\"columnDefs\" [rowData]=\"rowData\" [rowSelection]=\"rowSelection\"\n            (gridReady)=\"onGridReady($event)\" (selectionChanged)=\"onSelectionChanged($event)\" animateRows=\"true\">\n          </ag-grid-angular>\n        </div>\n      </div>\n    </div>\n    <div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n      aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Assign to Caller</h4>\n            <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <form [formGroup]=\"callerForm\" (ngSubmit)=\"FormSubmit()\">\n              <div class=\"form-group\">\n                <label for=\"id\">KP Caller</label>\n                <select class=\"form-control\" id=\"id\" required ngModel name=\"group\" formControlName=\"id\">\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option *ngFor=\"let item of users\" value=\"{{ item.id }}\">\n                    {{ item.username }}\n                  </option>\n                </select>\n              </div>\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n                Close\n              </button>\n              <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !callerForm.valid\">\n                <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\"\n                  aria-hidden=\"true\"></span>\n                Save changes\n              </button>\n            </form>\n          </div>\n        </div>\n        <!-- /.modal-content -->\n      </div>\n    </div>\n  </div>\n</div>");

/***/ })

}]);
//# sourceMappingURL=views-theme-theme-module-es2015.js.map