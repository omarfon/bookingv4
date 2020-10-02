(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-page-formpre-page-formpre-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-formpre/page-formpre.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-formpre/page-formpre.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>page-formpre</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/page-formpre/page-formpre-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/page-formpre/page-formpre-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: PageFormprePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFormprePageRoutingModule", function() { return PageFormprePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _page_formpre_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-formpre.page */ "./src/app/pages/page-formpre/page-formpre.page.ts");




const routes = [
    {
        path: '',
        component: _page_formpre_page__WEBPACK_IMPORTED_MODULE_3__["PageFormprePage"]
    }
];
let PageFormprePageRoutingModule = class PageFormprePageRoutingModule {
};
PageFormprePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PageFormprePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/page-formpre/page-formpre.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/page-formpre/page-formpre.module.ts ***!
  \***********************************************************/
/*! exports provided: PageFormprePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFormprePageModule", function() { return PageFormprePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _page_formpre_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-formpre-routing.module */ "./src/app/pages/page-formpre/page-formpre-routing.module.ts");
/* harmony import */ var _page_formpre_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-formpre.page */ "./src/app/pages/page-formpre/page-formpre.page.ts");







let PageFormprePageModule = class PageFormprePageModule {
};
PageFormprePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _page_formpre_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageFormprePageRoutingModule"]
        ],
        declarations: [_page_formpre_page__WEBPACK_IMPORTED_MODULE_6__["PageFormprePage"]]
    })
], PageFormprePageModule);



/***/ }),

/***/ "./src/app/pages/page-formpre/page-formpre.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/page-formpre/page-formpre.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2UtZm9ybXByZS9wYWdlLWZvcm1wcmUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/page-formpre/page-formpre.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/page-formpre/page-formpre.page.ts ***!
  \*********************************************************/
/*! exports provided: PageFormprePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFormprePage", function() { return PageFormprePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PageFormprePage = class PageFormprePage {
    constructor() { }
    ngOnInit() {
    }
};
PageFormprePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-formpre',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./page-formpre.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-formpre/page-formpre.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./page-formpre.page.scss */ "./src/app/pages/page-formpre/page-formpre.page.scss")).default]
    })
], PageFormprePage);



/***/ })

}]);
//# sourceMappingURL=pages-page-formpre-page-formpre-module.js.map