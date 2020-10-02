(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recomendations-recomendations-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recomendations/recomendations.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recomendations/recomendations.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>recomendations</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/recomendations/recomendations-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/recomendations/recomendations-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: RecomendationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecomendationsPageRoutingModule", function() { return RecomendationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _recomendations_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recomendations.page */ "./src/app/pages/recomendations/recomendations.page.ts");




const routes = [
    {
        path: '',
        component: _recomendations_page__WEBPACK_IMPORTED_MODULE_3__["RecomendationsPage"]
    }
];
let RecomendationsPageRoutingModule = class RecomendationsPageRoutingModule {
};
RecomendationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecomendationsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/recomendations/recomendations.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/recomendations/recomendations.module.ts ***!
  \***************************************************************/
/*! exports provided: RecomendationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecomendationsPageModule", function() { return RecomendationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _recomendations_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recomendations-routing.module */ "./src/app/pages/recomendations/recomendations-routing.module.ts");
/* harmony import */ var _recomendations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recomendations.page */ "./src/app/pages/recomendations/recomendations.page.ts");







let RecomendationsPageModule = class RecomendationsPageModule {
};
RecomendationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _recomendations_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecomendationsPageRoutingModule"]
        ],
        declarations: [_recomendations_page__WEBPACK_IMPORTED_MODULE_6__["RecomendationsPage"]]
    })
], RecomendationsPageModule);



/***/ }),

/***/ "./src/app/pages/recomendations/recomendations.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/recomendations/recomendations.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY29tZW5kYXRpb25zL3JlY29tZW5kYXRpb25zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/recomendations/recomendations.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/recomendations/recomendations.page.ts ***!
  \*************************************************************/
/*! exports provided: RecomendationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecomendationsPage", function() { return RecomendationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let RecomendationsPage = class RecomendationsPage {
    constructor() { }
    ngOnInit() {
    }
};
RecomendationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recomendations',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./recomendations.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recomendations/recomendations.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./recomendations.page.scss */ "./src/app/pages/recomendations/recomendations.page.scss")).default]
    })
], RecomendationsPage);



/***/ })

}]);
//# sourceMappingURL=pages-recomendations-recomendations-module.js.map