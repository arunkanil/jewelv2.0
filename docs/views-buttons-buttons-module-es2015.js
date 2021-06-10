(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-buttons-buttons-module"],{

/***/ "2W4T":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/buttons/dropdowns.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Bootstrap Dropdowns\n          <div class=\"card-header-actions\">\n            <a href=\"https://valor-software.com/ngx-bootstrap/#/dropdowns\" target=\"_blank\">\n              <small className=\"text-muted\">docs</small>\n            </a>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"btn-group\" dropdown>\n            <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n              Button dropdown <span class=\"caret\"></span>\n            </button>\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n              <li class=\"divider dropdown-divider\"></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Dropdowns\n          <small>trigger by <code>&lt;a&gt;</code></small>\n        </div>\n        <div class=\"card-body\">\n      <span dropdown (onShown)=\"onShown()\" (onHidden)=\"onHidden()\" (isOpenChange)=\"isOpenChange()\">\n        <a href dropdownToggle (click)=\"false\">Click me for a dropdown, yo!</a>\n          <ul *dropdownMenu class=\"dropdown-menu\">\n            <li *ngFor=\"let choice of items\">\n              <a class=\"dropdown-item\" href=\"#\">{{choice}}</a>\n            </li>\n          </ul>\n      </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Dropdowns\n          <small>split button</small>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"btn-group\" dropdown>\n            <button type=\"button\" class=\"btn btn-danger\">Action</button>\n            <button type=\"button\" dropdownToggle class=\"btn btn-danger dropdown-toggle dropdown-toggle-split\">\n              <span class=\"caret\"></span>\n              <span class=\"sr-only\">Split button!</span>\n            </button>\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a>\n              </li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else\n                here</a></li>\n              <li class=\"divider dropdown-divider\"></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Dropdowns\n          <small>manual triggers</small>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"btn-group\" dropdown [isOpen]=\"status.isOpen\" (isOpenChange)=\"change($event)\" placement=\"top\">\n            <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n              Button dropdown <span class=\"caret\"></span>\n            </button>\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a>\n              </li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else\n                here</a></li>\n              <li class=\"divider dropdown-divider\"></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"toggleDropdown($event)\">Toggle</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Dropdowns\n          <small>disabled menu</small>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"btn-group\" dropdown [isDisabled]=\"disabled\">\n            <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdownToggle\">\n              Button dropdown <span class=\"caret\"></span>\n            </button>\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a>\n              </li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else\n                here</a></li>\n              <li class=\"divider dropdown-divider\"></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"disabled = !disabled\">\n            Enable/Disable\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Dropdowns\n          <small>menu alignment</small>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"btn-group\" dropdown placement=\"bottom right\">\n            <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n              This menu is right-aligned <span class=\"caret\"></span>\n            </button>\n            <ul *dropdownMenu class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n              <li class=\"divider dropdown-divider\"></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Dropdowns\n          <small>dropup variation</small>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"btn-group\" dropdown [dropup]=\"isDropup\">\n            <button id=\"button-dropup\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n              Dropup <span class=\"caret\"></span>\n            </button>\n            <ul id=\"dropdown-dropup\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-dropup\">\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a>\n              </li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else\n                here</a></li>\n              <li class=\"divider dropdown-divider\"></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"checkbox\">\n            <label>\n              <input type=\"checkbox\" value=\"true\" [(ngModel)]=\"isDropup\"\n                     style=\"display: inline-block;\">\n              {{ isDropup ? 'Is dropup' : 'Is dropdown' }}\n            </label>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Dropdowns\n          <small> with <code>autoClose</code></small>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"btn-group\" dropdown [autoClose]=\"autoClose\">\n            <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n              Button dropdown <span class=\"caret\"></span>\n            </button>\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a>\n              </li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else\n                here</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "5EjJ":
/*!**********************************************************!*\
  !*** ./src/app/views/buttons/brand-buttons.component.ts ***!
  \**********************************************************/
/*! exports provided: BrandButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandButtonsComponent", function() { return BrandButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_brand_buttons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./brand-buttons.component.html */ "sJ7Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let BrandButtonsComponent = class BrandButtonsComponent {
    constructor() { }
};
BrandButtonsComponent.ctorParameters = () => [];
BrandButtonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_brand_buttons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], BrandButtonsComponent);



/***/ }),

/***/ "NBjn":
/*!***********************************************************!*\
  !*** ./src/app/views/buttons/customerdetail.component.ts ***!
  \***********************************************************/
/*! exports provided: KPCustomerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KPCustomerDetailComponent", function() { return KPCustomerDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customerdetail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customerdetail.component.html */ "OTGb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");







let KPCustomerDetailComponent = class KPCustomerDetailComponent {
    constructor(dataservice, activatedRouter, fb) {
        this.dataservice = dataservice;
        this.activatedRouter = activatedRouter;
        this.fb = fb;
        this.loading = true;
        this.details = [];
        this.btnLoading = false;
        this.groups = [];
        this.commentForm = this.fb.group({
            RemarksText: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            event_date_time: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            is_verified: [false],
        });
    }
    ngOnInit() {
        this.getLists();
        this.activatedRouter.params.subscribe((params) => {
            this.id = params["id"];
        });
        this.dataservice.getSingleCustomer(this.id).valueChanges.subscribe((result) => {
            console.log("getSingleCustomer", result.data.customer);
            this.details = result.data.customer;
            this.loading = false;
        });
    }
    getLists() {
        this.loading = true;
        this.dataservice.getGroups().valueChanges.subscribe((result) => {
            console.log("getGroups", result.data.groups);
            this.groups = result.data.groups;
        });
    }
    CommentSubmit() {
        let resp = {};
        console.log(this.commentForm.value);
        this.dataservice
            .AddCustomerComment(this.details.id, this.commentForm.value)
            .subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.updateCustomer) {
                alert("Comment added successfully!");
                this.commentModal.hide();
            }
            else {
                alert("Failed. Please check the fields!");
            }
        });
    }
};
KPCustomerDetailComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
KPCustomerDetailComponent.propDecorators = {
    commentModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["commentModal",] }]
};
KPCustomerDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_customerdetail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
], KPCustomerDetailComponent);



/***/ }),

/***/ "OTGb":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/buttons/customerdetail.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n            <h2>Customer Details</h2>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <table class=\"table table-striped\">\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>ID</td>\r\n                                <td>{{details?.id}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Name Of Father</td>\r\n                                <td>{{details?.NameOfBride}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Name Of Father</td>\r\n                                <td>{{details?.NameOfFather}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Name Of Mother</td>\r\n                                <td>{{ details?.NameOfMother }}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Marriage Date</td>\r\n                                <td>{{ details?.MarriageDate }}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Marriage Month</td>\r\n                                <td>{{ details?.MarriageMonth }}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Agent</td>\r\n                                <td>\r\n                                    <span class=\"badge badge-warning\">{{ details.tele_caller_contact?.Name }}</span>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>House Name</td>\r\n                                <td>{{ details.Address?.HouseName }}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Landmark</td>\r\n                                <td>{{ details.Address?.Landmark }}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Locality</td>\r\n                                <td>{{ details.Address?.locality?.Name }}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <div class=\"card\" *ngFor=\"let item of details.TelecallerRemarks\">\r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">{{item.CallHistory.event_date_time}}</h5>\r\n                            <p class=\"card-text\">{{item.RemarksText}}</p>\r\n                            <span\r\n                                class=\"badge badge-primary\">{{item.CallHistory.users_permissions_user.username}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"commentModal.show()\">\r\n                        Add Comment\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div bsModal #commentModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\n            aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <h4 class=\"modal-title\">Add Comment</h4>\r\n                        <button type=\"button\" class=\"close\" (click)=\"commentModal.hide()\" aria-label=\"Close\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <form [formGroup]=\"commentForm\" (ngSubmit)=\"CommentSubmit()\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"name\">Remarks</label>\r\n                                <textarea class=\"form-control\" maxlength=\"250\" id=\"RemarksText\" name=\"RemarksText\"\r\n                                    formControlName=\"RemarksText\" placeholder=\"Enter remarks\"></textarea>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"email\">Date</label>\r\n                                <input type=\"datetime-local\" class=\"form-control\" id=\"event_date_time\"\r\n                                    name=\"event_date_time\" formControlName=\"event_date_time\" />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <!-- <input type=\"checkbox\" class=\"form-control\" id=\"is_verified\" name=\"is_verified\"\r\n                                    formControlName=\"is_verified\" />\r\n                                <label for=\"is_verified\">Verification</label> -->\r\n                                <div class=\"checkbox\">\r\n                                    <label>\r\n                                        <input type=\"checkbox\" value=\"true\" id=\"is_verified\" name=\"is_verified\"\r\n                                            formControlName=\"is_verified\">\r\n                                        Customer Verified\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\r\n                                Close\r\n                            </button>\r\n                            <button type=\"submit\" class=\"btn btn-primary ml-2\"\r\n                                [disabled]=\"btnLoading || !commentForm.valid\">\r\n                                <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\"\r\n                                    aria-hidden=\"true\"></span>\r\n                                Save changes\r\n                            </button>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n                <!-- /.modal-content -->\r\n            </div>\r\n            <!-- /.modal-dialog -->\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "QF1n":
/*!******************************************************!*\
  !*** ./src/app/views/buttons/dropdowns.component.ts ***!
  \******************************************************/
/*! exports provided: DropdownsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownsComponent", function() { return DropdownsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dropdowns_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dropdowns.component.html */ "2W4T");
/* harmony import */ var _dropdowns_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdowns.component.css */ "S6b1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let DropdownsComponent = class DropdownsComponent {
    constructor() {
        this.status = { isOpen: false };
        this.disabled = false;
        this.isDropup = true;
        this.autoClose = false;
        this.items = [
            'The first choice!',
            'And another choice for you.',
            'but wait! A third!'
        ];
    }
    ngOnDestroy() {
        this.status.isOpen = false;
    }
    onHidden() {
        console.log('Dropdown is hidden');
    }
    onShown() {
        console.log('Dropdown is shown');
    }
    isOpenChange() {
        console.log('Dropdown state is changed');
    }
    toggleDropdown($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isOpen = !this.status.isOpen;
    }
    change(value) {
        this.status.isOpen = value;
    }
};
DropdownsComponent.ctorParameters = () => [];
DropdownsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_dropdowns_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dropdowns_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], DropdownsComponent);



/***/ }),

/***/ "Reju":
/*!*************************************************!*\
  !*** ./src/app/views/buttons/buttons.module.ts ***!
  \*************************************************/
/*! exports provided: ButtonsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return ButtonsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _buttons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons.component */ "xtqT");
/* harmony import */ var _brand_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brand-buttons.component */ "5EjJ");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var _dropdowns_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dropdowns.component */ "QF1n");
/* harmony import */ var _buttons_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./buttons-routing.module */ "bAeT");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ag-grid-angular */ "YFAK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _customerdetail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customerdetail.component */ "NBjn");






// Dropdowns Component


// Buttons Routing

// Angular



let ButtonsModule = class ButtonsModule {
};
ButtonsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__["AgGridModule"].withComponents([]),
            _buttons_routing_module__WEBPACK_IMPORTED_MODULE_8__["ButtonsRoutingModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ],
        declarations: [
            _buttons_component__WEBPACK_IMPORTED_MODULE_4__["ButtonsComponent"],
            _dropdowns_component__WEBPACK_IMPORTED_MODULE_7__["DropdownsComponent"],
            _brand_buttons_component__WEBPACK_IMPORTED_MODULE_5__["BrandButtonsComponent"],
            _customerdetail_component__WEBPACK_IMPORTED_MODULE_11__["KPCustomerDetailComponent"]
        ]
    })
], ButtonsModule);



/***/ }),

/***/ "S6b1":
/*!*******************************************************!*\
  !*** ./src/app/views/buttons/dropdowns.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropup .dropdown-menu {\n  /*transform: none!important;*/\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3ducy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0FBQy9CIiwiZmlsZSI6ImRyb3Bkb3ducy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3B1cCAuZHJvcGRvd24tbWVudSB7XG4gIC8qdHJhbnNmb3JtOiBub25lIWltcG9ydGFudDsqL1xufVxuIl19 */");

/***/ }),

/***/ "bAeT":
/*!*********************************************************!*\
  !*** ./src/app/views/buttons/buttons-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ButtonsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsRoutingModule", function() { return ButtonsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons.component */ "xtqT");
/* harmony import */ var _customerdetail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customerdetail.component */ "NBjn");





const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'kpcaller'
            },
            {
                path: 'verification',
                component: _buttons_component__WEBPACK_IMPORTED_MODULE_3__["ButtonsComponent"],
                data: {
                    title: 'Profile'
                }
            },
            {
                path: 'assigned',
                component: _buttons_component__WEBPACK_IMPORTED_MODULE_3__["ButtonsComponent"],
                data: {
                    title: 'Assigned List'
                }
            },
            {
                path: 'dnf',
                component: _buttons_component__WEBPACK_IMPORTED_MODULE_3__["ButtonsComponent"],
                data: {
                    title: 'DNF'
                }
            },
            {
                path: 'kp_customer_details/:id',
                component: _customerdetail_component__WEBPACK_IMPORTED_MODULE_4__["KPCustomerDetailComponent"],
                data: {
                    title: 'Customer Details'
                }
            },
        ]
    }
];
let ButtonsRoutingModule = class ButtonsRoutingModule {
};
ButtonsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ButtonsRoutingModule);



/***/ }),

/***/ "sJ7Y":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/buttons/brand-buttons.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Brand Buttons</strong>\n          <small>Usage ex.</small>\n          <code style=\"text-transform:lowercase\">&lt;button class=\"btn btn-brand btn-facebook\"&gt;&lt;span&gt;Facebook&lt;/span&gt;&lt;/button&gt;</code>\n        </div>\n        <div class=\"card-body\">\n          <h6>Size Small\n            <small>Add this class\n              <code>.btn-sm</code>\n            </small>\n          </h6>\n          <p>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-facebook mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-facebook\"></i>\n              <span>Facebook</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-twitter mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-twitter\"></i>\n              <span>Twitter</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-linkedin mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-linkedin\"></i>\n              <span>LinkedIn</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-flickr mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-flickr\"></i>\n              <span>Flickr</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-tumblr mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-tumblr\"></i>\n              <span>Tumblr</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-xing mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-xing\"></i>\n              <span>Xing</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-github mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-github\"></i>\n              <span>Github</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-html5 mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-html5\"></i>\n              <span>HTML5</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-openid mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-openid\"></i>\n              <span>OpenID</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-stack-overflow mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-stack-overflow\"></i>\n              <span>StackOverflow</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-css3 mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-css3\"></i>\n              <span>CSS3</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-youtube mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-youtube\"></i>\n              <span>YouTube</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-dribbble mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-dribbble\"></i>\n              <span>Dribbble</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-google-plus mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-google-plus\"></i>\n              <span>Google+</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-instagram mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-instagram\"></i>\n              <span>Instagram</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-pinterest mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-pinterest\"></i>\n              <span>Pinterest</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-vk mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vk\"></i>\n              <span>VK</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-yahoo mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-yahoo\"></i>\n              <span>Yahoo</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-behance mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-behance\"></i>\n              <span>Behance</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-dropbox mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-dropbox\"></i>\n              <span>Dropbox</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-reddit mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-reddit\"></i>\n              <span>Reddit</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-spotify mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-spotify\"></i>\n              <span>Spotify</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-vine mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vine\"></i>\n              <span>Vine</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-foursquare mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-foursquare\"></i>\n              <span>Forsquare</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-vimeo mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vimeo\"></i>\n              <span>Vimeo</span>\n            </button>\n          </p>\n          <h6>Size Normal</h6>\n          <p>\n            <button type=\"button\" class=\"btn btn-brand btn-facebook mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-facebook\"></i>\n              <span>Facebook</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-twitter mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-twitter\"></i>\n              <span>Twitter</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-linkedin mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-linkedin\"></i>\n              <span>LinkedIn</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-flickr mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-flickr\"></i>\n              <span>Flickr</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-tumblr mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-tumblr\"></i>\n              <span>Tumblr</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-xing mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-xing\"></i>\n              <span>Xing</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-github mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-github\"></i>\n              <span>Github</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-html5 mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-html5\"></i>\n              <span>HTML5</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-openid mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-openid\"></i>\n              <span>OpenID</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-stack-overflow mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-stack-overflow\"></i>\n              <span>StackOverflow</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-css3 mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-css3\"></i>\n              <span>CSS3</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-youtube mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-youtube\"></i>\n              <span>YouTube</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-dribbble mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-dribbble\"></i>\n              <span>Dribbble</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-google-plus mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-google-plus\"></i>\n              <span>Google+</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-instagram mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-instagram\"></i>\n              <span>Instagram</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-pinterest mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-pinterest\"></i>\n              <span>Pinterest</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-vk mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vk\"></i>\n              <span>VK</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-yahoo mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-yahoo\"></i>\n              <span>Yahoo</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-behance mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-behance\"></i>\n              <span>Behance</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-dropbox mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-dropbox\"></i>\n              <span>Dropbox</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-reddit mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-reddit\"></i>\n              <span>Reddit</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-spotify mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-spotify\"></i>\n              <span>Spotify</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-vine mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vine\"></i>\n              <span>Vine</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-foursquare mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-foursquare\"></i>\n              <span>Forsquare</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-vimeo mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vimeo\"></i>\n              <span>Vimeo</span>\n            </button>\n          </p>\n          <h6>Size Large\n            <small>Add this class\n              <code>.btn-lg</code>\n            </small>\n          </h6>\n          <p>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-facebook mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-facebook\"></i>\n              <span>Facebook</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-twitter mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-twitter\"></i>\n              <span>Twitter</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-linkedin mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-linkedin\"></i>\n              <span>LinkedIn</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-flickr mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-flickr\"></i>\n              <span>Flickr</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-tumblr mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-tumblr\"></i>\n              <span>Tumblr</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-xing mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-xing\"></i>\n              <span>Xing</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-github mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-github\"></i>\n              <span>Github</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-html5 mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-html5\"></i>\n              <span>HTML5</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-openid mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-openid\"></i>\n              <span>OpenID</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-stack-overflow mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-stack-overflow\"></i>\n              <span>StackOverflow</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-css3 mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-css3\"></i>\n              <span>CSS3</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-youtube mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-youtube\"></i>\n              <span>YouTube</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-dribbble mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-dribbble\"></i>\n              <span>Dribbble</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-google-plus mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-google-plus\"></i>\n              <span>Google+</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-instagram mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-instagram\"></i>\n              <span>Instagram</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-pinterest mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-pinterest\"></i>\n              <span>Pinterest</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-vk mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vk\"></i>\n              <span>VK</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-yahoo mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-yahoo\"></i>\n              <span>Yahoo</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-behance mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-behance\"></i>\n              <span>Behance</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-dropbox mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-dropbox\"></i>\n              <span>Dropbox</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-reddit mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-reddit\"></i>\n              <span>Reddit</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-spotify mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-spotify\"></i>\n              <span>Spotify</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-vine mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vine\"></i>\n              <span>Vine</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-foursquare mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-foursquare\"></i>\n              <span>Forsquare</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-vimeo mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vimeo\"></i>\n              <span>Vimeo</span>\n            </button>\n          </p>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Brand Buttons</strong>\n          <small>Only icons. Usage ex.</small>\n          <code style=\"text-transform:lowercase\">&lt;button class=\"btn btn-brand btn-facebook\"&gt;&lt;span&gt;Facebook&lt;/span&gt;&lt;/button&gt;</code>\n        </div>\n        <div class=\"card-body\">\n          <h6>Size Small\n            <small>Add this class\n              <code>.btn-sm</code>\n            </small>\n          </h6>\n          <p>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-facebook mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-facebook\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-twitter mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-twitter\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-linkedin mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-linkedin\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-flickr mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-flickr\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-tumblr mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-tumblr\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-xing mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-xing\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-github mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-github\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-html5 mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-html5\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-openid mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-openid\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-stack-overflow mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-stack-overflow\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-css3 mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-css3\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-youtube mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-youtube\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-dribbble mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-dribbble\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-google-plus mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-google-plus\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-instagram mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-instagram\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-pinterest mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-pinterest\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-vk mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vk\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-yahoo mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-yahoo\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-behance mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-behance\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-dropbox mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-dropbox\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-reddit mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-reddit\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-spotify mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-spotify\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-vine mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vine\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-foursquare mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-foursquare\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-vimeo mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vimeo\"></i>\n            </button>\n          </p>\n          <h6>Size Normal</h6>\n          <p>\n            <button type=\"button\" class=\"btn btn-brand btn-facebook mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-facebook\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-twitter mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-twitter\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-linkedin mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-linkedin\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-flickr mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-flickr\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-tumblr mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-tumblr\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-xing mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-xing\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-github mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-github\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-html5 mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-html5\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-openid mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-openid\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-stack-overflow mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-stack-overflow\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-css3 mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-css3\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-youtube mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-youtube\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-dribbble mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-dribbble\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-google-plus mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-google-plus\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-instagram mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-instagram\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-pinterest mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-pinterest\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-vk mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vk\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-yahoo mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-yahoo\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-behance mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-behance\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-dropbox mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-dropbox\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-reddit mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-reddit\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-spotify mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-spotify\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-vine mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vine\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-foursquare mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-foursquare\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-vimeo mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vimeo\"></i>\n            </button>\n          </p>\n          <h6>Size Large\n            <small>Add this class\n              <code>.btn-lg</code>\n            </small>\n          </h6>\n          <p>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-facebook mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-facebook\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-twitter mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-twitter\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-linkedin mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-linkedin\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-flickr mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-flickr\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-tumblr mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-tumblr\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-xing mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-xing\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-github mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-github\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-html5 mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-html5\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-openid mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-openid\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-stack-overflow mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-stack-overflow\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-css3 mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-css3\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-youtube mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-youtube\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-dribbble mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-dribbble\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-google-plus mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-google-plus\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-instagram mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-instagram\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-pinterest mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-pinterest\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-vk mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vk\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-yahoo mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-yahoo\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-behance mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-behance\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-dropbox mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-dropbox\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-reddit mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-reddit\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-spotify mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-spotify\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-vine mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vine\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-foursquare mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-foursquare\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-vimeo mr-1\" style=\"margin-bottom: 4px\">\n              <i class=\"fa fa-vimeo\"></i>\n            </button>\n          </p>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Brand Buttons</strong>\n          <small>Only text. Usage ex.</small>\n          <code style=\"text-transform:lowercase\">&lt;button class=\"btn btn-brand btn-facebook text\"&gt;&lt;span&gt;Facebook&lt;/span&gt;&lt;/button&gt;</code>\n        </div>\n        <div class=\"card-body\">\n          <h6>Size Small\n            <small>Add this class\n              <code>.btn-sm</code>\n            </small>\n          </h6>\n          <p>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-facebook mr-1\" style=\"margin-bottom: 4px\">\n              <span>Facebook</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-twitter mr-1\" style=\"margin-bottom: 4px\">\n              <span>Twitter</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-linkedin mr-1\" style=\"margin-bottom: 4px\">\n              <span>LinkedIn</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-flickr mr-1\" style=\"margin-bottom: 4px\">\n              <span>Flickr</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-tumblr mr-1\" style=\"margin-bottom: 4px\">\n              <span>Tumblr</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-xing mr-1\" style=\"margin-bottom: 4px\">\n              <span>Xing</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-github mr-1\" style=\"margin-bottom: 4px\">\n              <span>Github</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-html5 mr-1\" style=\"margin-bottom: 4px\">\n              <span>HTML5</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-openid mr-1\" style=\"margin-bottom: 4px\">\n              <span>OpenID</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-stack-overflow mr-1\" style=\"margin-bottom: 4px\">\n              <span>StackOverflow</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-css3 mr-1\" style=\"margin-bottom: 4px\">\n              <span>CSS3</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-youtube mr-1\" style=\"margin-bottom: 4px\">\n              <span>YouTube</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-dribbble mr-1\" style=\"margin-bottom: 4px\">\n              <span>Dribbble</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-google-plus mr-1\" style=\"margin-bottom: 4px\">\n              <span>Google+</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-instagram mr-1\" style=\"margin-bottom: 4px\">\n              <span>Instagram</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-pinterest mr-1\" style=\"margin-bottom: 4px\">\n              <span>Pinterest</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-vk mr-1\" style=\"margin-bottom: 4px\">\n              <span>VK</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-yahoo mr-1\" style=\"margin-bottom: 4px\">\n              <span>Yahoo</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-behance mr-1\" style=\"margin-bottom: 4px\">\n              <span>Behance</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-dropbox mr-1\" style=\"margin-bottom: 4px\">\n              <span>Dropbox</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-reddit mr-1\" style=\"margin-bottom: 4px\">\n              <span>Reddit</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-spotify mr-1\" style=\"margin-bottom: 4px\">\n              <span>Spotify</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-vine mr-1\" style=\"margin-bottom: 4px\">\n              <span>Vine</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-foursquare mr-1\" style=\"margin-bottom: 4px\">\n              <span>Forsquare</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-sm btn-vimeo mr-1\" style=\"margin-bottom: 4px\">\n              <span>Vimeo</span>\n            </button>\n          </p>\n          <h6>Size Normal</h6>\n          <p>\n            <button type=\"button\" class=\"btn btn-brand btn-facebook mr-1\" style=\"margin-bottom: 4px\">\n              <span>Facebook</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-twitter mr-1\" style=\"margin-bottom: 4px\">\n              <span>Twitter</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-linkedin mr-1\" style=\"margin-bottom: 4px\">\n              <span>LinkedIn</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-flickr mr-1\" style=\"margin-bottom: 4px\">\n              <span>Flickr</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-tumblr mr-1\" style=\"margin-bottom: 4px\">\n              <span>Tumblr</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-xing mr-1\" style=\"margin-bottom: 4px\">\n              <span>Xing</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-github mr-1\" style=\"margin-bottom: 4px\">\n              <span>Github</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-html5 mr-1\" style=\"margin-bottom: 4px\">\n              <span>HTML5</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-openid mr-1\" style=\"margin-bottom: 4px\">\n              <span>OpenID</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-stack-overflow mr-1\" style=\"margin-bottom: 4px\">\n              <span>StackOverflow</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-css3 mr-1\" style=\"margin-bottom: 4px\">\n              <span>CSS3</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-youtube mr-1\" style=\"margin-bottom: 4px\">\n              <span>YouTube</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-dribbble mr-1\" style=\"margin-bottom: 4px\">\n              <span>Dribbble</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-google-plus mr-1\" style=\"margin-bottom: 4px\">\n              <span>Google+</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-instagram mr-1\" style=\"margin-bottom: 4px\">\n              <span>Instagram</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-pinterest mr-1\" style=\"margin-bottom: 4px\">\n              <span>Pinterest</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-vk mr-1\" style=\"margin-bottom: 4px\">\n              <span>VK</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-yahoo mr-1\" style=\"margin-bottom: 4px\">\n              <span>Yahoo</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-behance mr-1\" style=\"margin-bottom: 4px\">\n              <span>Behance</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-dropbox mr-1\" style=\"margin-bottom: 4px\">\n              <span>Dropbox</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-reddit mr-1\" style=\"margin-bottom: 4px\">\n              <span>Reddit</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-spotify mr-1\" style=\"margin-bottom: 4px\">\n              <span>Spotify</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-vine mr-1\" style=\"margin-bottom: 4px\">\n              <span>Vine</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-foursquare mr-1\" style=\"margin-bottom: 4px\">\n              <span>Forsquare</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-vimeo mr-1\" style=\"margin-bottom: 4px\">\n              <span>Vimeo</span>\n            </button>\n          </p>\n          <h6>Size Large\n            <small>Add this class\n              <code>.btn-lg</code>\n            </small>\n          </h6>\n          <p>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-facebook mr-1\" style=\"margin-bottom: 4px\">\n              <span>Facebook</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-twitter mr-1\" style=\"margin-bottom: 4px\">\n              <span>Twitter</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-linkedin mr-1\" style=\"margin-bottom: 4px\">\n              <span>LinkedIn</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-flickr mr-1\" style=\"margin-bottom: 4px\">\n              <span>Flickr</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-tumblr mr-1\" style=\"margin-bottom: 4px\">\n              <span>Tumblr</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-xing mr-1\" style=\"margin-bottom: 4px\">\n              <span>Xing</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-github mr-1\" style=\"margin-bottom: 4px\">\n              <span>Github</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-html5 mr-1\" style=\"margin-bottom: 4px\">\n              <span>HTML5</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-openid mr-1\" style=\"margin-bottom: 4px\">\n              <span>OpenID</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-stack-overflow mr-1\" style=\"margin-bottom: 4px\">\n              <span>StackOverflow</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-css3 mr-1\" style=\"margin-bottom: 4px\">\n              <span>CSS3</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-youtube mr-1\" style=\"margin-bottom: 4px\">\n              <span>YouTube</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-dribbble mr-1\" style=\"margin-bottom: 4px\">\n              <span>Dribbble</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-google-plus mr-1\" style=\"margin-bottom: 4px\">\n              <span>Google+</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-instagram mr-1\" style=\"margin-bottom: 4px\">\n              <span>Instagram</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-pinterest mr-1\" style=\"margin-bottom: 4px\">\n              <span>Pinterest</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-vk mr-1\" style=\"margin-bottom: 4px\">\n              <span>VK</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-yahoo mr-1\" style=\"margin-bottom: 4px\">\n              <span>Yahoo</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-behance mr-1\" style=\"margin-bottom: 4px\">\n              <span>Behance</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-dropbox mr-1\" style=\"margin-bottom: 4px\">\n              <span>Dropbox</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-reddit mr-1\" style=\"margin-bottom: 4px\">\n              <span>Reddit</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-spotify mr-1\" style=\"margin-bottom: 4px\">\n              <span>Spotify</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-vine mr-1\" style=\"margin-bottom: 4px\">\n              <span>Vine</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-foursquare mr-1\" style=\"margin-bottom: 4px\">\n              <span>Forsquare</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-brand btn-lg btn-vimeo mr-1\" style=\"margin-bottom: 4px\">\n              <span>Vimeo</span>\n            </button>\n          </p>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  <!--/.row-->\n</div>\n");

/***/ }),

/***/ "sgt0":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/buttons/buttons.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\n      <h2>Assigned List</h2>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <ag-grid-angular #agGrid style=\"width: 100%; height: 500px\" id=\"myGrid\" class=\"ag-theme-alpine\"\n            [columnDefs]=\"columnDefs\" [rowData]=\"rowData\" [rowSelection]=\"rowSelection\"\n            (gridReady)=\"onGridReady($event)\" (selectionChanged)=\"onSelectionChanged($event)\" animateRows=\"true\">\n          </ag-grid-angular>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "xtqT":
/*!****************************************************!*\
  !*** ./src/app/views/buttons/buttons.component.ts ***!
  \****************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_buttons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./buttons.component.html */ "sgt0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");






let ButtonsComponent = class ButtonsComponent {
    constructor(dataservice, router) {
        this.dataservice = dataservice;
        this.router = router;
        this.loading = true;
        this.btnLoading = false;
        this.orders = {};
        this.columnDefs = [];
        this.rowData = [];
        this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_5__["customersColumn"]];
        this.rowSelection = "single";
    }
    ngOnInit() {
        this.getLists();
    }
    getLists() {
        this.loading = true;
        let filter = {
            kp_id: localStorage.getItem("uid"),
        };
        this.dataservice.getCustomersFilter(filter).valueChanges.subscribe((result) => {
            console.log("getCustomersFilter", result.data.customers);
            this.rowData = result.data.customers;
        });
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    onSelectionChanged(event) {
        var selectedRows = this.gridApi.getSelectedRows();
        console.log(selectedRows);
        this.router.navigate(["/kpcaller/kp_customer_details", selectedRows[0].id], {
            state: { data: selectedRows },
        });
    }
};
ButtonsComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ButtonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_buttons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ButtonsComponent);



/***/ })

}]);
//# sourceMappingURL=views-buttons-buttons-module-es2015.js.map