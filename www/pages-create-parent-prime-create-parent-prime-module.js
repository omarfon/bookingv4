(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-parent-prime-create-parent-prime-module"],{

/***/ "./src/app/pages/create-parent-prime/create-parent-prime-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/create-parent-prime/create-parent-prime-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CreateParentPrimePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateParentPrimePageRoutingModule", function() { return CreateParentPrimePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_parent_prime_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-parent-prime.page */ "./src/app/pages/create-parent-prime/create-parent-prime.page.ts");




const routes = [
    {
        path: '',
        component: _create_parent_prime_page__WEBPACK_IMPORTED_MODULE_3__["CreateParentPrimePage"]
    }
];
let CreateParentPrimePageRoutingModule = class CreateParentPrimePageRoutingModule {
};
CreateParentPrimePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreateParentPrimePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/create-parent-prime/create-parent-prime.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/create-parent-prime/create-parent-prime.module.ts ***!
  \*************************************************************************/
/*! exports provided: CreateParentPrimePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateParentPrimePageModule", function() { return CreateParentPrimePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _create_parent_prime_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-parent-prime-routing.module */ "./src/app/pages/create-parent-prime/create-parent-prime-routing.module.ts");
/* harmony import */ var _create_parent_prime_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-parent-prime.page */ "./src/app/pages/create-parent-prime/create-parent-prime.page.ts");







let CreateParentPrimePageModule = class CreateParentPrimePageModule {
};
CreateParentPrimePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_parent_prime_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateParentPrimePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_create_parent_prime_page__WEBPACK_IMPORTED_MODULE_6__["CreateParentPrimePage"]]
    })
], CreateParentPrimePageModule);



/***/ })

}]);
//# sourceMappingURL=pages-create-parent-prime-create-parent-prime-module.js.map