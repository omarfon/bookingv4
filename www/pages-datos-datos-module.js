(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-datos-datos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datos/datos.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datos/datos.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>datos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/datos/datos-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/datos/datos-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: DatosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosPageRoutingModule", function() { return DatosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _datos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datos.page */ "./src/app/pages/datos/datos.page.ts");




const routes = [
    {
        path: '',
        component: _datos_page__WEBPACK_IMPORTED_MODULE_3__["DatosPage"]
    }
];
let DatosPageRoutingModule = class DatosPageRoutingModule {
};
DatosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DatosPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/datos/datos.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/datos/datos.module.ts ***!
  \*********************************************/
/*! exports provided: DatosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosPageModule", function() { return DatosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _datos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datos-routing.module */ "./src/app/pages/datos/datos-routing.module.ts");
/* harmony import */ var _datos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datos.page */ "./src/app/pages/datos/datos.page.ts");







let DatosPageModule = class DatosPageModule {
};
DatosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _datos_routing_module__WEBPACK_IMPORTED_MODULE_5__["DatosPageRoutingModule"]
        ],
        declarations: [_datos_page__WEBPACK_IMPORTED_MODULE_6__["DatosPage"]]
    })
], DatosPageModule);



/***/ }),

/***/ "./src/app/pages/datos/datos.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/datos/datos.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhdG9zL2RhdG9zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/datos/datos.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/datos/datos.page.ts ***!
  \*******************************************/
/*! exports provided: DatosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosPage", function() { return DatosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DatosPage = class DatosPage {
    constructor() { }
    ngOnInit() {
    }
};
DatosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-datos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./datos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datos/datos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./datos.page.scss */ "./src/app/pages/datos/datos.page.scss")).default]
    })
], DatosPage);



/***/ })

}]);
//# sourceMappingURL=pages-datos-datos-module.js.map