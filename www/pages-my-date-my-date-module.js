(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-date-my-date-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-date/my-date.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-date/my-date.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"light\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title size=\"small\">Detalle Cita</ion-title>\n        <ion-buttons slot=\"end\" *ngIf=\"task.provisionId === 845337\">\n            <ion-button (click)=\"getpermissions()\">\n                <ion-icon name=\"videocam\" color=\"danger\" class=\"iconSize\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content has-header=\"true\" class=\"padding\">\n    <ion-list>\n        <img id=\"profile-image\" src=\"{{SERVERImage}}{{task.professionalId}}.png\" (error)=\"errorHandler($event)\">\n        <h3 class=\"nombreDoctor text-center\">{{ task.professionalName }} {{ task.professionalLastName1 }}\n            {{ task.professionalLastName2 }} </h3>\n\n\n        <ion-item *ngIf=\"task.provisionId === 44\">\n            <ion-icon item-start><i class=\"fa fa-hospital-o\" aria-hidden=\"true\"></i></ion-icon>\n            <ion-label class=\"heightNoventa\">Sede:</ion-label>\n            <ion-label *ngIf=\"task\" class=\"blue\"> {{ task.centerName | lowercase }}</ion-label>\n        </ion-item>\n\n        <ion-item *ngIf=\"task.provisionId === 845337\">\n            <ion-icon item-start><i class=\"fa fa-hospital-o\" aria-hidden=\"true\"></i></ion-icon>\n            <ion-label class=\"heightNoventa\">Consulta tipo:</ion-label>\n            <ion-label *ngIf=\"task\" class=\"blue\"> Teleorientación</ion-label>\n        </ion-item>\n\n        <ion-item>\n            <ion-icon item-start><i class=\"fa fa-heartbeat\" aria-hidden=\"true\"></i></ion-icon>\n            <ion-label class=\"heightNoventa\">Especialidad:</ion-label>\n            <!-- <ion-label *ngIf=\"taskpa\" class=\"blue\"> {{ taskpa.service.basicService.description | lowercase }}</ion-label> -->\n            <ion-label *ngIf=\"task\" class=\"blue\"> {{ task.basicServiceDescription | lowercase }}</ion-label>\n        </ion-item>\n\n        <ion-item>\n            <ion-icon item-start><i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i></ion-icon>\n            <ion-label class=\"heightNoventa\">Fecha:</ion-label>\n            <!-- <ion-label *ngIf=\"taskpa\" class=\"blue\"> {{ taskpa.appointmentDateTime | date:'EEEE d , MMMM ' : 'es' }}</ion-label> -->\n            <ion-label *ngIf=\"task\" class=\"blue\"> {{ task.appointmentDateTime | date:'EEEE d , MMMM ' : 'es' }}\n            </ion-label>\n        </ion-item>\n\n        <ion-item>\n            <ion-icon item-start><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i></ion-icon>\n            <ion-label class=\"heightNoventa\">Hora:</ion-label>\n            <!-- <ion-label *ngIf=\"taskpa\" class=\"blue\"> {{ taskpa.appointmentDateTime | date: 'HH:mm' }}</ion-label> -->\n            <ion-label *ngIf=\"task\" class=\"blue\"> {{ task.appointmentDateTime | date: 'HH:mm' }}</ion-label>\n        </ion-item>\n\n        <ion-item>\n            <ion-icon item-start><i class=\"fa fa-universal-access\" aria-hidden=\"true\"></i></ion-icon>\n            <ion-label class=\"heightNoventa\">Seguro:</ion-label>\n            <!-- <ion-label *ngIf=\"taskpa\" class=\"blue\"> {{ taskpa.plan.description | lowercase }}</ion-label> -->\n            <ion-label *ngIf=\"task\" class=\"blue\"> {{ task.planDescription | lowercase }}</ion-label>\n        </ion-item>\n    </ion-list>\n    <ion-row padding *ngIf=\"task.pagado === 'no'\">\n        <ion-col size=\"6\">\n            <ion-button expand=\"full\" color=\"warning\" (click)='desactivateTask(task)'>ELIMINAR</ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n            <ion-button (click)=\"back()\" color=\"primary\" expand=\"full\">\n                VOLVER\n            </ion-button>\n        </ion-col>\n    </ion-row>\n    <ion-row padding *ngIf=\"task.pagado === 'yes'\">\n        <ion-col size=\"8\">\n            <ion-button (click)=\"openModalData()\" expand=\"full\" color=\"warning\">CITA NO CANCELABLE</ion-button>\n        </ion-col>\n        <ion-col size=\"4\">\n            <ion-button (click)=\"back()\" color=\"primary\" expand=\"full\">\n                VOLVER\n            </ion-button>\n        </ion-col>\n    </ion-row>\n    <ion-col *ngIf=\"task.pagado === 'no'\">\n        <p class=\"teleconsultaText\">\n            Recuerda llegar 30 minutos antes para que puedas hacer tu preconsulta y tener una consulta puntual.\n        </p>\n    </ion-col>\n    <ion-col *ngIf=\"task.pagado === 'yes'\">\n        <p class=\"teleconsultaText\">\n            Recuerda conectarte unos minutos antes de tu consulta, dandole click a la cámara , luego entraras a espera\n            unos segundos.\n        </p>\n    </ion-col>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/my-date/my-date-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/my-date/my-date-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MyDatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDatePageRoutingModule", function() { return MyDatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_date_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-date.page */ "./src/app/pages/my-date/my-date.page.ts");




const routes = [
    {
        path: '',
        component: _my_date_page__WEBPACK_IMPORTED_MODULE_3__["MyDatePage"]
    }
];
let MyDatePageRoutingModule = class MyDatePageRoutingModule {
};
MyDatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyDatePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/my-date/my-date.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/my-date/my-date.module.ts ***!
  \*************************************************/
/*! exports provided: MyDatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDatePageModule", function() { return MyDatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _my_date_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-date-routing.module */ "./src/app/pages/my-date/my-date-routing.module.ts");
/* harmony import */ var _my_date_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-date.page */ "./src/app/pages/my-date/my-date.page.ts");







let MyDatePageModule = class MyDatePageModule {
};
MyDatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_date_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyDatePageRoutingModule"]
        ],
        declarations: [_my_date_page__WEBPACK_IMPORTED_MODULE_6__["MyDatePage"]]
    })
], MyDatePageModule);



/***/ }),

/***/ "./src/app/pages/my-date/my-date.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/my-date/my-date.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  margin-top: 30vh;\n  height: 70vh !important;\n  border-top-right-radius: 90px;\n}\n\n#content {\n  position: relative;\n  margin-top: 15%;\n  background-color: white;\n  padding-top: 2%;\n}\n\n#profile-info {\n  position: absolute;\n  top: -85px;\n  width: 100%;\n  z-index: 2;\n  height: auto;\n  text-align: center;\n}\n\n#profile-description {\n  font-size: 15px;\n  color: #888;\n}\n\n#profile-image {\n  display: block;\n  border-radius: 20px;\n  width: 180px;\n  height: 180px;\n  margin: 30px auto 0;\n  text-align: center;\n}\n\n.nombreDoctor {\n  margin-top: 40px;\n  margin-bottom: 40px;\n  color: #888;\n  font-weight: 600;\n  width: 80%;\n  margin-left: 10%;\n  font-size: 1.5em;\n  text-transform: capitalize;\n}\n\nion-label {\n  color: #4A4A4A;\n  font-size: 0.9em;\n  font-weight: 600;\n}\n\n.blue {\n  color: #062F51;\n  text-align: left;\n  font-size: 0.9em;\n  font-weight: 400;\n  text-transform: capitalize;\n}\n\nion-navbar ion-icon {\n  color: #fff;\n}\n\nion-icon {\n  color: #A7A9AB;\n  font-size: 0.7em;\n}\n\n.toolbar-md-primary .bar-button-default-md {\n  color: #fff !important;\n}\n\n.toolbar-title,\n.toolbar-title-md {\n  font-size: 1.3em !important;\n  font-weight: 400;\n}\n\n.item-inner {\n  margin-left: 5px !important;\n}\n\n.heightNoventa {\n  margin-right: 0 !important;\n}\n\n.segment-md-secondary {\n  color: #fff !important;\n}\n\nion-segment-button .segment-activated {\n  color: #fff !important;\n}\n\n.volverButton {\n  font-size: 2em;\n  font-weight: 200 !important;\n  color: #fff;\n}\n\n.volverTexto {\n  color: #fff;\n  margin-left: 15px !important;\n}\n\n.iconSize {\n  font-size: 30px;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.teleconsultaText {\n  color: #0f9170;\n  width: 90%;\n  margin-left: 5%;\n  text-align: center;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbWFyL3Byb3llY3Rvcy9EZXYvYm9va2luZ3Y0L3NyYy9hcHAvcGFnZXMvbXktZGF0ZS9teS1kYXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbXktZGF0ZS9teS1kYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBQ0NSOztBREVJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDQ1I7O0FERUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NSOztBREVJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNDUjs7QURFSTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NSOztBREdJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNBUjs7QURHSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQVI7O0FER0k7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNBUjs7QURHSTtFQUNJLFdBQUE7QUNBUjs7QURHSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0FSOztBREdJO0VBQ0ksc0JBQUE7QUNBUjs7QURHSTs7RUFFSSwyQkFBQTtFQUVBLGdCQUFBO0FDRFI7O0FESUk7RUFDSSwyQkFBQTtBQ0RSOztBRElJO0VBQ0ksMEJBQUE7QUNEUjs7QURJSTtFQUNJLHNCQUFBO0FDRFI7O0FESUk7RUFDSSxzQkFBQTtBQ0RSOztBRElJO0VBQ0ksY0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ0RSOztBRElJO0VBQ0ksV0FBQTtFQUNBLDRCQUFBO0FDRFI7O0FESUk7RUFDSSxlQUFBO0FDRFI7O0FESUk7RUFDSSxrQkFBQTtBQ0RSOztBRElJO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbXktZGF0ZS9teS1kYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICBpb24tY29udGVudCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwdmg7XG4gICAgICAgIGhlaWdodDogNzB2aCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOTBweDtcbiAgICB9XG5cbiAgICAjY29udGVudCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTUlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZy10b3A6IDIlO1xuICAgIH1cblxuICAgICNwcm9maWxlLWluZm8ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTg1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjcHJvZmlsZS1kZXNjcmlwdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgY29sb3I6ICM4ODg7XG4gICAgfVxuXG4gICAgI3Byb2ZpbGUtaW1hZ2Uge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgICBtYXJnaW46IDMwcHggYXV0byAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYmEoMCwwLDAsMC43KTtcbiAgICB9XG5cbiAgICAubm9tYnJlRG9jdG9yIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgY29sb3I6ICM4ODg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAjNEE0QTRBO1xuICAgICAgICBmb250LXNpemU6IC45ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLmJsdWUge1xuICAgICAgICBjb2xvcjogIzA2MkY1MTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC1zaXplOiAuOWVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG5cbiAgICBpb24tbmF2YmFyIGlvbi1pY29uIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogI0E3QTlBQjtcbiAgICAgICAgZm9udC1zaXplOiAuN2VtO1xuICAgIH1cblxuICAgIC50b29sYmFyLW1kLXByaW1hcnkgLmJhci1idXR0b24tZGVmYXVsdC1tZCB7XG4gICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnRvb2xiYXItdGl0bGUsXG4gICAgLnRvb2xiYXItdGl0bGUtbWQge1xuICAgICAgICBmb250LXNpemU6IDEuM2VtICFpbXBvcnRhbnQ7XG4gICAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG5cbiAgICAuaXRlbS1pbm5lciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaGVpZ2h0Tm92ZW50YSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5zZWdtZW50LW1kLXNlY29uZGFyeSB7XG4gICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIC5zZWdtZW50LWFjdGl2YXRlZCB7XG4gICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnZvbHZlckJ1dHRvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICBmb250LXdlaWdodDogMjAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIC52b2x2ZXJUZXh0byB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5pY29uU2l6ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG5cbiAgICAudGV4dC1jZW50ZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnRlbGVjb25zdWx0YVRleHQge1xuICAgICAgICBjb2xvcjogIzBmOTE3MDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuXG4gICAgLy9lc3RpbG9zIG51ZXZvIGNhcmQiLCJpb24tY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDMwdmg7XG4gIGhlaWdodDogNzB2aCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOTBweDtcbn1cblxuI2NvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDE1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAyJTtcbn1cblxuI3Byb2ZpbGUtaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtODVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDI7XG4gIGhlaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcHJvZmlsZS1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM4ODg7XG59XG5cbiNwcm9maWxlLWltYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiAxODBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm9tYnJlRG9jdG9yIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgY29sb3I6ICM4ODg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG5pb24tbGFiZWwge1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJsdWUge1xuICBjb2xvcjogIzA2MkY1MTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbmlvbi1uYXZiYXIgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogI0E3QTlBQjtcbiAgZm9udC1zaXplOiAwLjdlbTtcbn1cblxuLnRvb2xiYXItbWQtcHJpbWFyeSAuYmFyLWJ1dHRvbi1kZWZhdWx0LW1kIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLnRvb2xiYXItdGl0bGUsXG4udG9vbGJhci10aXRsZS1tZCB7XG4gIGZvbnQtc2l6ZTogMS4zZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLml0ZW0taW5uZXIge1xuICBtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWlnaHROb3ZlbnRhIHtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5zZWdtZW50LW1kLXNlY29uZGFyeSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiAuc2VnbWVudC1hY3RpdmF0ZWQge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4udm9sdmVyQnV0dG9uIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiAyMDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi52b2x2ZXJUZXh0byB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uaWNvblNpemUge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRlbGVjb25zdWx0YVRleHQge1xuICBjb2xvcjogIzBmOTE3MDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/my-date/my-date.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/my-date/my-date.page.ts ***!
  \***********************************************/
/*! exports provided: MyDatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDatePage", function() { return MyDatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_appoinment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/appoinment.service */ "./src/app/services/appoinment.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_permissions_video_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/permissions-video.service */ "./src/app/services/permissions-video.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");









let MyDatePage = class MyDatePage {
    constructor(toastCtrl, alertCtrl, actionSheetCtrl, appointmentProvider, modalCtrl, router, routes, permissionSrv, iab) {
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.appointmentProvider = appointmentProvider;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.routes = routes;
        this.permissionSrv = permissionSrv;
        this.iab = iab;
        this.SERVERImage = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["API_IMAGES"];
        let data = this.routes.snapshot.paramMap.get('datos');
        this.task = JSON.parse(data);
        console.log('task en ', this.task);
        /* this.date = this.dataArmada.appointmentId; */
    }
    ngOnInit() {
    }
    errorHandler(event) {
        event.target.src = "https://1.bp.blogspot.com/-p8EFlkXywyE/UDZvWTyr1bI/AAAAAAAAEU0/xL8pmKN1KOY/s1600/facebook.png";
    }
    openModalData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: 'Esta cita no se puede eliminar',
                subHeader: 'para mayor información comunicate a nuestro call center al número (01) 7154600 y te ayudaremos al respecto',
                buttons: [
                    {
                        text: 'Entiendo'
                    }
                ]
            });
            yield alert.present();
        });
    }
    desactivateTask(task) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alertCtrl.create({
                header: 'ANULAR CITA',
                message: '¿Estas seguro que quieres eliminar esta cita?',
                buttons: [
                    {
                        text: 'SI',
                        handler: data => {
                            const idPrin = localStorage.getItem('idTokenUser');
                            console.log(localStorage.getItem('idTokenUser'));
                            if (this.task.familiar === false) {
                                this.appointmentProvider.destroyAppointment(task).subscribe(data => {
                                    this.router.navigate(['my-dates']);
                                    /* this.navCtrl.push(MyDatesPage); */
                                });
                            }
                            else {
                                this.appointmentProvider.destroyAppointmentContact(task).subscribe(data => {
                                    this.router.navigate(['my-dates']);
                                    /* this.navCtrl.push(MyDatesPage); */
                                });
                            }
                        }
                    },
                    {
                        text: 'NO',
                        handler: () => {
                            return true;
                        }
                    }
                ],
            });
            confirm.present();
        });
    }
    getpermissions() {
        this.appointmentid = this.task.appointmentId;
        if (this.task.familiar === true) {
            this.permissionSrv.getAuthoParent(this.appointmentid, this.task.patientId).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.permisionsData = data;
                console.log('data', data);
                if (data.token === "") {
                    const data = JSON.stringify(this.task);
                    this.router.navigate(['waiting-video', data]);
                    console.log('enviar a pagina de espera');
                }
                else if (data.token === 'finalizado') {
                    const alert = yield this.alertCtrl.create({
                        header: 'Cita Terminada',
                        subHeader: 'Esta cita ya ha finalizado',
                        buttons: [
                            {
                                text: 'ok'
                            }
                        ]
                    });
                    yield alert.present();
                    this.router.navigate(['home']);
                }
                else {
                    /* const data = JSON.stringify(this.task);
                    this.router.navigate(['page-video', data]) */
                    this.openVideo();
                }
            }));
        }
        else {
            this.permisions();
        }
    }
    permisions() {
        this.permissionSrv.getPermissionsVideo(this.appointmentid).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('data pedida desde my-date:', data);
            this.permisionsData = data;
            if (data.token === "") {
                const data = JSON.stringify(this.task);
                this.router.navigate(['waiting-video', data]);
                /* console.log('enviar a pagina de espera'); */
            }
            else if (data.token === 'finalizado') {
                const alert = yield this.alertCtrl.create({
                    header: 'Cita Terminada',
                    subHeader: 'Esta cita ya ha finalizado, puedes ver el resumen en teleconsultas',
                    buttons: [
                        {
                            text: 'ok'
                        }
                    ]
                });
                yield alert.present();
                this.router.navigate(['home']);
            }
            else {
                const data = JSON.stringify(this.task);
                this.openVideo();
            }
        }));
    }
    openVideo() {
        this.permisionsData;
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["OPENTELE"];
        const appId = encodeURIComponent(this.task.appointmentId);
        const professional = encodeURIComponent(this.task.professionalId);
        const professionalName = encodeURIComponent(this.task.professionalName);
        const professionalLastName1 = encodeURIComponent(this.task.professionalLastName1);
        const professionalLastName2 = encodeURIComponent(this.task.professionalLastName2);
        const basicServiceDescription = encodeURIComponent(this.task.basicServiceDescription);
        const patientId = encodeURIComponent(this.task.patientId);
        const channel = encodeURIComponent(this.permisionsData.channel);
        console.log('resultado de la data para permisos:', this.permisionsData);
        let options = "location=yes,hidden=yes,beforeload=yes";
        const browser = this.iab.create(`${url}/telecon/%7B"appointmentId":${appId},"basicServiceDescription":"${basicServiceDescription}","professionalId":${professional},"professionalName":"${professionalName}","professionalLastName1":"${professionalLastName1}","professionalLastName2":"${professionalLastName2}","patientId":${patientId},"channel":"${channel}"%7D`, '_system', options);
    }
    back() {
        this.router.navigate(['home']);
    }
};
MyDatePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: src_app_services_appoinment_service__WEBPACK_IMPORTED_MODULE_2__["AppoinmentService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_permissions_video_service__WEBPACK_IMPORTED_MODULE_6__["PermissionsVideoService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] }
];
MyDatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-date',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-date.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-date/my-date.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-date.page.scss */ "./src/app/pages/my-date/my-date.page.scss")).default]
    })
], MyDatePage);



/***/ })

}]);
//# sourceMappingURL=pages-my-date-my-date-module.js.map