(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-page-faceform-page-faceform-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-faceform/page-faceform.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-faceform/page-faceform.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>page-faceform</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/page-faceform/page-faceform-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/page-faceform/page-faceform-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: PageFaceformPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFaceformPageRoutingModule", function() { return PageFaceformPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _page_faceform_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-faceform.page */ "./src/app/pages/page-faceform/page-faceform.page.ts");




const routes = [
    {
        path: '',
        component: _page_faceform_page__WEBPACK_IMPORTED_MODULE_3__["PageFaceformPage"]
    }
];
let PageFaceformPageRoutingModule = class PageFaceformPageRoutingModule {
};
PageFaceformPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PageFaceformPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/page-faceform/page-faceform.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/page-faceform/page-faceform.module.ts ***!
  \*************************************************************/
/*! exports provided: PageFaceformPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFaceformPageModule", function() { return PageFaceformPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _page_faceform_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-faceform-routing.module */ "./src/app/pages/page-faceform/page-faceform-routing.module.ts");
/* harmony import */ var _page_faceform_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-faceform.page */ "./src/app/pages/page-faceform/page-faceform.page.ts");







let PageFaceformPageModule = class PageFaceformPageModule {
};
PageFaceformPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _page_faceform_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageFaceformPageRoutingModule"]
        ],
        declarations: [_page_faceform_page__WEBPACK_IMPORTED_MODULE_6__["PageFaceformPage"]]
    })
], PageFaceformPageModule);



/***/ }),

/***/ "./src/app/pages/page-faceform/page-faceform.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/page-faceform/page-faceform.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2UtZmFjZWZvcm0vcGFnZS1mYWNlZm9ybS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/page-faceform/page-faceform.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/page-faceform/page-faceform.page.ts ***!
  \***********************************************************/
/*! exports provided: PageFaceformPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFaceformPage", function() { return PageFaceformPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PageFaceformPage = class PageFaceformPage {
    constructor() { }
    ngOnInit() {
    }
};
PageFaceformPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-faceform',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./page-faceform.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-faceform/page-faceform.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./page-faceform.page.scss */ "./src/app/pages/page-faceform/page-faceform.page.scss")).default]
    })
], PageFaceformPage);



/***/ })

}]);
//# sourceMappingURL=pages-page-faceform-page-faceform-module.js.map