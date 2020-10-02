(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-form-register-form-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-register/form-register.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-register/form-register.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>form-register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/form-register/form-register-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/form-register/form-register-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: FormRegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRegisterPageRoutingModule", function() { return FormRegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-register.page */ "./src/app/pages/form-register/form-register.page.ts");




const routes = [
    {
        path: '',
        component: _form_register_page__WEBPACK_IMPORTED_MODULE_3__["FormRegisterPage"]
    }
];
let FormRegisterPageRoutingModule = class FormRegisterPageRoutingModule {
};
FormRegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormRegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/form-register/form-register.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/form-register/form-register.module.ts ***!
  \*************************************************************/
/*! exports provided: FormRegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRegisterPageModule", function() { return FormRegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-register-routing.module */ "./src/app/pages/form-register/form-register-routing.module.ts");
/* harmony import */ var _form_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-register.page */ "./src/app/pages/form-register/form-register.page.ts");







let FormRegisterPageModule = class FormRegisterPageModule {
};
FormRegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_register_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormRegisterPageRoutingModule"]
        ],
        declarations: [_form_register_page__WEBPACK_IMPORTED_MODULE_6__["FormRegisterPage"]]
    })
], FormRegisterPageModule);



/***/ }),

/***/ "./src/app/pages/form-register/form-register.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/form-register/form-register.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zvcm0tcmVnaXN0ZXIvZm9ybS1yZWdpc3Rlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/form-register/form-register.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/form-register/form-register.page.ts ***!
  \***********************************************************/
/*! exports provided: FormRegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRegisterPage", function() { return FormRegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FormRegisterPage = class FormRegisterPage {
    constructor() { }
    ngOnInit() {
    }
};
FormRegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-register/form-register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-register.page.scss */ "./src/app/pages/form-register/form-register.page.scss")).default]
    })
], FormRegisterPage);



/***/ })

}]);
//# sourceMappingURL=pages-form-register-form-register-module.js.map