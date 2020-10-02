(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-master-detail-master-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master-detail/master-detail.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master-detail/master-detail.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>master-detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/master-detail/master-detail-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/master-detail/master-detail-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: MasterDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterDetailPageRoutingModule", function() { return MasterDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _master_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master-detail.page */ "./src/app/pages/master-detail/master-detail.page.ts");




const routes = [
    {
        path: '',
        component: _master_detail_page__WEBPACK_IMPORTED_MODULE_3__["MasterDetailPage"]
    }
];
let MasterDetailPageRoutingModule = class MasterDetailPageRoutingModule {
};
MasterDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MasterDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/master-detail/master-detail.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/master-detail/master-detail.module.ts ***!
  \*************************************************************/
/*! exports provided: MasterDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterDetailPageModule", function() { return MasterDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _master_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./master-detail-routing.module */ "./src/app/pages/master-detail/master-detail-routing.module.ts");
/* harmony import */ var _master_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./master-detail.page */ "./src/app/pages/master-detail/master-detail.page.ts");







let MasterDetailPageModule = class MasterDetailPageModule {
};
MasterDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _master_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["MasterDetailPageRoutingModule"]
        ],
        declarations: [_master_detail_page__WEBPACK_IMPORTED_MODULE_6__["MasterDetailPage"]]
    })
], MasterDetailPageModule);



/***/ }),

/***/ "./src/app/pages/master-detail/master-detail.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/master-detail/master-detail.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hc3Rlci1kZXRhaWwvbWFzdGVyLWRldGFpbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/master-detail/master-detail.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/master-detail/master-detail.page.ts ***!
  \***********************************************************/
/*! exports provided: MasterDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterDetailPage", function() { return MasterDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MasterDetailPage = class MasterDetailPage {
    constructor() { }
    ngOnInit() {
    }
};
MasterDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-master-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./master-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master-detail/master-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./master-detail.page.scss */ "./src/app/pages/master-detail/master-detail.page.scss")).default]
    })
], MasterDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-master-detail-master-detail-module.js.map