(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-appoinment-appoinment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/appoinment/appoinment.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/appoinment/appoinment.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>appoinment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/appoinment/appoinment-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/appoinment/appoinment-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AppoinmentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppoinmentPageRoutingModule", function() { return AppoinmentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _appoinment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appoinment.page */ "./src/app/pages/appoinment/appoinment.page.ts");




const routes = [
    {
        path: '',
        component: _appoinment_page__WEBPACK_IMPORTED_MODULE_3__["AppoinmentPage"]
    }
];
let AppoinmentPageRoutingModule = class AppoinmentPageRoutingModule {
};
AppoinmentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppoinmentPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/appoinment/appoinment.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/appoinment/appoinment.module.ts ***!
  \*******************************************************/
/*! exports provided: AppoinmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppoinmentPageModule", function() { return AppoinmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _appoinment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appoinment-routing.module */ "./src/app/pages/appoinment/appoinment-routing.module.ts");
/* harmony import */ var _appoinment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appoinment.page */ "./src/app/pages/appoinment/appoinment.page.ts");







let AppoinmentPageModule = class AppoinmentPageModule {
};
AppoinmentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _appoinment_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppoinmentPageRoutingModule"]
        ],
        declarations: [_appoinment_page__WEBPACK_IMPORTED_MODULE_6__["AppoinmentPage"]]
    })
], AppoinmentPageModule);



/***/ }),

/***/ "./src/app/pages/appoinment/appoinment.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/appoinment/appoinment.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcG9pbm1lbnQvYXBwb2lubWVudC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/appoinment/appoinment.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/appoinment/appoinment.page.ts ***!
  \*****************************************************/
/*! exports provided: AppoinmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppoinmentPage", function() { return AppoinmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppoinmentPage = class AppoinmentPage {
    constructor() { }
    ngOnInit() {
    }
};
AppoinmentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appoinment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./appoinment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/appoinment/appoinment.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./appoinment.page.scss */ "./src/app/pages/appoinment/appoinment.page.scss")).default]
    })
], AppoinmentPage);



/***/ })

}]);
//# sourceMappingURL=pages-appoinment-appoinment-module.js.map