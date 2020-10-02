(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-charge-charge-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charge/charge.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charge/charge.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>charge</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/charge/charge-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/charge/charge-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ChargePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargePageRoutingModule", function() { return ChargePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _charge_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charge.page */ "./src/app/pages/charge/charge.page.ts");




const routes = [
    {
        path: '',
        component: _charge_page__WEBPACK_IMPORTED_MODULE_3__["ChargePage"]
    }
];
let ChargePageRoutingModule = class ChargePageRoutingModule {
};
ChargePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChargePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/charge/charge.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/charge/charge.module.ts ***!
  \***********************************************/
/*! exports provided: ChargePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargePageModule", function() { return ChargePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _charge_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charge-routing.module */ "./src/app/pages/charge/charge-routing.module.ts");
/* harmony import */ var _charge_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charge.page */ "./src/app/pages/charge/charge.page.ts");







let ChargePageModule = class ChargePageModule {
};
ChargePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _charge_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChargePageRoutingModule"]
        ],
        declarations: [_charge_page__WEBPACK_IMPORTED_MODULE_6__["ChargePage"]]
    })
], ChargePageModule);



/***/ }),

/***/ "./src/app/pages/charge/charge.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/charge/charge.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJnZS9jaGFyZ2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/charge/charge.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/charge/charge.page.ts ***!
  \*********************************************/
/*! exports provided: ChargePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargePage", function() { return ChargePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ChargePage = class ChargePage {
    constructor() { }
    ngOnInit() {
    }
};
ChargePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-charge',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./charge.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charge/charge.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./charge.page.scss */ "./src/app/pages/charge/charge.page.scss")).default]
    })
], ChargePage);



/***/ })

}]);
//# sourceMappingURL=pages-charge-charge-module.js.map