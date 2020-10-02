(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-myparents-myparents-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/myparents/myparents.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/myparents/myparents.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" fill=\"clear\">\n      <ion-menu-button menu=\"first\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title size=\"small\">Mis Parientes</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content class=\"padding\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let depe of dependens\">\n        <ion-card class=\"cardParent\">\n          <ion-row>\n            <ion-col size=\"8\">\n              <ion-avatar>\n                <img src=\"../assets/imgs/avatars/nino.png\" alt=\"\">\n              </ion-avatar>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-button class=\"botonEliminarParent\" fill=\"clear\" color=\"primary\" (click)=\"deleteParent(depe)\">\n                <ion-icon name=\"close\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"11\" class=\"eliminar\">\n            </ion-col>\n            <ion-col size=\"12\" class=\"contenidoDatos\">\n              <h3 class=\"nombrePariente\">{{depe.name}} {{depe.surname1}}</h3>\n              <p *ngIf=\"depe.relation\" class=\"parentesco\">{{depe.relation.name}}</p>\n              <p class=\"edad\">{{depe.edad}} años</p>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class=\"center\">\n    <ion-button color=\"primary\" size=\"full\" (click)=\"showForm()\" class=\"botonCrear\">\n      Agregar familiar\n    </ion-button>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/myparents/myparents-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/myparents/myparents-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MyparentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyparentsPageRoutingModule", function() { return MyparentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _myparents_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myparents.page */ "./src/app/pages/myparents/myparents.page.ts");




const routes = [
    {
        path: '',
        component: _myparents_page__WEBPACK_IMPORTED_MODULE_3__["MyparentsPage"]
    }
];
let MyparentsPageRoutingModule = class MyparentsPageRoutingModule {
};
MyparentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyparentsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/myparents/myparents.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/myparents/myparents.module.ts ***!
  \*****************************************************/
/*! exports provided: MyparentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyparentsPageModule", function() { return MyparentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _myparents_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./myparents-routing.module */ "./src/app/pages/myparents/myparents-routing.module.ts");
/* harmony import */ var _myparents_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myparents.page */ "./src/app/pages/myparents/myparents.page.ts");







let MyparentsPageModule = class MyparentsPageModule {
};
MyparentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _myparents_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyparentsPageRoutingModule"]
        ],
        declarations: [_myparents_page__WEBPACK_IMPORTED_MODULE_6__["MyparentsPage"]]
    })
], MyparentsPageModule);



/***/ }),

/***/ "./src/app/pages/myparents/myparents.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/myparents/myparents.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f1f3f8;\n}\n\n.nombrePariente {\n  color: #336E81;\n  font-size: 1.1em;\n  font-weight: 400;\n  text-align: left;\n  margin-left: 10px;\n  margin-top: 10px;\n  margin-bottom: -10px;\n}\n\n.parentesco {\n  color: #336E81;\n  font-weight: 600;\n  text-align: left;\n  margin-left: 10px;\n}\n\n.edad {\n  text-align: left;\n  margin-left: 10px;\n  color: #336E81;\n}\n\n.center {\n  text-align: center;\n  margin-top: 30px;\n}\n\n.down20 {\n  margin-top: 30px;\n}\n\n.tituloFamiliar {\n  color: #336E81;\n  /* margin-bottom:10px; */\n  /*     margin-top:10px!important; */\n}\n\n.cienPorCiento {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.buttonClose {\n  border-radius: 50% !important;\n  margin-top: 0;\n  height: 28px;\n  width: 25px;\n}\n\n.buttonClose ion-icon {\n  color: #fff;\n}\n\n.contenedorButton {\n  text-align: left;\n}\n\nion-button {\n  text-align: left;\n}\n\nion-label {\n  font-size: 0.8em !important;\n  color: #336E81 !important;\n  padding-top: 15px !important;\n}\n\n.guardaryContinuar {\n  margin-top: -25px;\n}\n\nion-avatar img {\n  width: 70px;\n}\n\n.cardParent {\n  height: 160px;\n  border-top-left-radius: 30px;\n  background: #fff;\n  width: 95%;\n}\n\n.botonEliminarParent {\n  color: #fff;\n  border-radius: 50%;\n  /*      background:#f06e5a; */\n}\n\n.eliminar {\n  margin-top: -20px;\n}\n\n.contenidoDatos {\n  margin-top: -20px;\n}\n\n.botonCrear {\n  width: 90% !important;\n  margin-left: 5%;\n}\n\n.padding {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbWFyL3Byb3llY3Rvcy9EZXYvYm9va2luZ3Y0L3NyYy9hcHAvcGFnZXMvbXlwYXJlbnRzL215cGFyZW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL215cGFyZW50cy9teXBhcmVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0UscUJBQUE7QUNDTjs7QURFSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNDTjs7QURFSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDTjs7QURFSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ047O0FERUk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDQ047O0FERUk7RUFDRSxnQkFBQTtBQ0NOOztBREVJO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7QUNDTjs7QURFSTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDQ047O0FERUk7RUFDRSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NOOztBRENNO0VBQ0UsV0FBQTtBQ0NSOztBREdJO0VBQ0UsZ0JBQUE7QUNBTjs7QURHSTtFQUNFLGdCQUFBO0FDQU47O0FER0k7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUNBTjs7QURHSTtFQUNFLGlCQUFBO0FDQU47O0FER0k7RUFDRSxXQUFBO0FDQU47O0FER0k7RUFDRSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNBTjs7QURHSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FDQU47O0FER0k7RUFDRSxpQkFBQTtBQ0FOOztBREdJO0VBQ0UsaUJBQUE7QUNBTjs7QURHSTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ0FOOztBREdJO0VBQ0UsWUFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbXlwYXJlbnRzL215cGFyZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgaW9uLWNvbnRlbnQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZjFmM2Y4O1xuICAgIH1cblxuICAgIC5ub21icmVQYXJpZW50ZSB7XG4gICAgICBjb2xvcjogIzMzNkU4MTtcbiAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICAgIH1cblxuICAgIC5wYXJlbnRlc2NvIHtcbiAgICAgIGNvbG9yOiAjMzM2RTgxO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG5cbiAgICAuZWRhZCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBjb2xvcjogIzMzNkU4MTtcbiAgICB9XG5cbiAgICAuY2VudGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgfVxuXG4gICAgLmRvd24yMCB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cblxuICAgIC50aXR1bG9GYW1pbGlhciB7XG4gICAgICBjb2xvcjogIzMzNkU4MTtcbiAgICAgIC8qIG1hcmdpbi1ib3R0b206MTBweDsgKi9cbiAgICAgIC8qICAgICBtYXJnaW4tdG9wOjEwcHghaW1wb3J0YW50OyAqL1xuICAgIH1cblxuICAgIC5jaWVuUG9yQ2llbnRvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuYnV0dG9uQ2xvc2Uge1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgd2lkdGg6IDI1cHg7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvbnRlbmVkb3JCdXR0b24ge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogLjhlbSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICMzMzZFODEgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmd1YXJkYXJ5Q29udGludWFyIHtcbiAgICAgIG1hcmdpbi10b3A6IC0yNXB4O1xuICAgIH1cblxuICAgIGlvbi1hdmF0YXIgaW1nIHtcbiAgICAgIHdpZHRoOiA3MHB4O1xuICAgIH1cblxuICAgIC5jYXJkUGFyZW50IHtcbiAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgfVxuXG4gICAgLmJvdG9uRWxpbWluYXJQYXJlbnQge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAvKiAgICAgIGJhY2tncm91bmQ6I2YwNmU1YTsgKi9cbiAgICB9XG5cbiAgICAuZWxpbWluYXIge1xuICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRlbmlkb0RhdG9zIHtcbiAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIH1cblxuICAgIC5ib3RvbkNyZWFyIHtcbiAgICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICB9XG5cbiAgICAucGFkZGluZyB7XG4gICAgICBtYXJnaW46IDEwcHg7XG4gICAgfSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjFmM2Y4O1xufVxuXG4ubm9tYnJlUGFyaWVudGUge1xuICBjb2xvcjogIzMzNkU4MTtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xufVxuXG4ucGFyZW50ZXNjbyB7XG4gIGNvbG9yOiAjMzM2RTgxO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmVkYWQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6ICMzMzZFODE7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5kb3duMjAge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4udGl0dWxvRmFtaWxpYXIge1xuICBjb2xvcjogIzMzNkU4MTtcbiAgLyogbWFyZ2luLWJvdHRvbToxMHB4OyAqL1xuICAvKiAgICAgbWFyZ2luLXRvcDoxMHB4IWltcG9ydGFudDsgKi9cbn1cblxuLmNpZW5Qb3JDaWVudG8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYnV0dG9uQ2xvc2Uge1xuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjVweDtcbn1cbi5idXR0b25DbG9zZSBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY29udGVuZWRvckJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmlvbi1idXR0b24ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXNpemU6IDAuOGVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMzM2RTgxICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ndWFyZGFyeUNvbnRpbnVhciB7XG4gIG1hcmdpbi10b3A6IC0yNXB4O1xufVxuXG5pb24tYXZhdGFyIGltZyB7XG4gIHdpZHRoOiA3MHB4O1xufVxuXG4uY2FyZFBhcmVudCB7XG4gIGhlaWdodDogMTYwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiA5NSU7XG59XG5cbi5ib3RvbkVsaW1pbmFyUGFyZW50IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLyogICAgICBiYWNrZ3JvdW5kOiNmMDZlNWE7ICovXG59XG5cbi5lbGltaW5hciB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4uY29udGVuaWRvRGF0b3Mge1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuLmJvdG9uQ3JlYXIge1xuICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLnBhZGRpbmcge1xuICBtYXJnaW46IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/myparents/myparents.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/myparents/myparents.page.ts ***!
  \***************************************************/
/*! exports provided: MyparentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyparentsPage", function() { return MyparentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_dependens_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dependens.service */ "./src/app/services/dependens.service.ts");
/* harmony import */ var src_app_services_crudparent_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/crudparent.service */ "./src/app/services/crudparent.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_parent_prime_create_parent_prime_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../create-parent-prime/create-parent-prime.page */ "./src/app/pages/create-parent-prime/create-parent-prime.page.ts");









let MyparentsPage = class MyparentsPage {
    constructor(router, fb, dependentsPvr, crudPvr, alertCtrl, modalCtrl) {
        this.router = router;
        this.fb = fb;
        this.dependentsPvr = dependentsPvr;
        this.crudPvr = crudPvr;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.openForm = false;
        this.getDependens();
        this.formFamily = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            paternal_surname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            maternal_surname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            date_of_birth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            type_document: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            dni: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(8)]],
            user_id: [localStorage.getItem('idTokenUser')],
            kindred: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            // email           : [ String(Math.floor(Math.random() * 9e15)) + '@ipsum.com' ],
            // password        : [ String(Math.floor(Math.random() * 9e15)) ]
        });
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.getDependens();
    }
    getDependens() {
        this.actual = moment__WEBPACK_IMPORTED_MODULE_3__().format('y');
        this.dependentsPvr.getDependens().subscribe((dependens) => {
            this._dependens = dependens.map(dependend => {
                dependend.edad = moment__WEBPACK_IMPORTED_MODULE_3__().diff(dependend.birthdate, 'years');
                return dependend;
            });
            this.dependens = this._dependens;
            console.log('los dependientes:', this._dependens);
        });
    }
    saveData() {
        let datos = this.formFamily.value;
        let data = {
            relation: {
                id: 4,
                name: datos.kindred
            },
            name: datos.name,
            surname1: datos.paternal_surname,
            surname2: datos.maternal_surname,
            birthdate: datos.date_of_birth,
            gender: {
                id: 2,
                name: datos.gender
            },
            documentType: {
                id: 1,
                name: datos.type_document
            },
            documentNumber: datos.dni
        };
        this.crudPvr.createParent(data).subscribe(data => {
            this.createParents = data;
            this.dependentsPvr.getDependens().subscribe(dat => {
                this.parents = dat;
                this.dependens = this.parents;
                console.log(this.parents);
                this.openForm = false;
            });
        });
    }
    activeAction() {
        console.log('botom slider');
    }
    deleteParent(depe) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('lo que me trae depe', depe);
            let id = depe._id;
            let eliminado = depe.name;
            const alert = yield this.alertCtrl.create({
                header: `eliminar de sus contactos a ${eliminado} ?`,
                message: 'si desea continuar seleccione ok, sino es el caso cancele',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            this.dependentsPvr.deleteDepend(id).subscribe(data => {
                                this.dependentsPvr.getDependens().subscribe(dato => {
                                    this._dependens = dato;
                                    this.dependens = this._dependens;
                                    console.log('lo que es ahora parientes', this.dependens);
                                });
                            });
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'Cancel',
                        handler: () => {
                            console.log('se le hace dismiss al alert');
                            // alert.dismiss();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    showForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _create_parent_prime_create_parent_prime_page__WEBPACK_IMPORTED_MODULE_8__["CreateParentPrimePage"],
                cssClass: 'my-custom-class'
            });
            yield modal.present();
        });
    }
};
MyparentsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_dependens_service__WEBPACK_IMPORTED_MODULE_4__["DependensService"] },
    { type: src_app_services_crudparent_service__WEBPACK_IMPORTED_MODULE_5__["CrudparentService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
MyparentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myparents',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./myparents.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/myparents/myparents.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./myparents.page.scss */ "./src/app/pages/myparents/myparents.page.scss")).default]
    })
], MyparentsPage);



/***/ })

}]);
//# sourceMappingURL=pages-myparents-myparents-module.js.map