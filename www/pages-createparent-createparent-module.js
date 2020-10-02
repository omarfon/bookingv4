(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-createparent-createparent-module"],{

/***/ "./src/app/pages/createparent/createparent-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/createparent/createparent-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CreateparentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateparentPageRoutingModule", function() { return CreateparentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _createparent_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createparent.page */ "./src/app/pages/createparent/createparent.page.ts");




const routes = [
    {
        path: '',
        component: _createparent_page__WEBPACK_IMPORTED_MODULE_3__["CreateparentPage"]
    }
];
let CreateparentPageRoutingModule = class CreateparentPageRoutingModule {
};
CreateparentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreateparentPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/createparent/createparent.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/createparent/createparent.module.ts ***!
  \***********************************************************/
/*! exports provided: CreateparentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateparentPageModule", function() { return CreateparentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _createparent_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createparent-routing.module */ "./src/app/pages/createparent/createparent-routing.module.ts");
/* harmony import */ var _createparent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createparent.page */ "./src/app/pages/createparent/createparent.page.ts");







let CreateparentPageModule = class CreateparentPageModule {
};
CreateparentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _createparent_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateparentPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_createparent_page__WEBPACK_IMPORTED_MODULE_6__["CreateparentPage"]]
    })
], CreateparentPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-createparent-createparent-module.js.map