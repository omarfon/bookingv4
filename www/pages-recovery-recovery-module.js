(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recovery-recovery-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recovery/recovery.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recovery/recovery.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n  <ion-toolbar color=\"primary\">\n    <ion-title>Código de Recuperación</ion-title>\n    <!-- <ion-buttons left> \n      <button ion-button clear\n              click=\"goToLogin()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <p class=\"codigoValida\">hemos enviado al correo el código de validación con el que podrás recuperar tu cuenta....</p>\n <ion-row>\n   <form [formGroup]=\"formCode\" (ngSubmit)=\"saveData(formCode.value)\" novalidate>\n   <div size=\"12\">\n     <ion-row class=\"padding\">\n         <ion-col class=\"rectanguloInput\">\n           <ion-input type=\"tel\"\n                        minlength=\"1\"\n                        maxlength=\"1\"\n                       [(ngModel)]=\"primero\"\n                       formControlName=\"primero\"\n                        ></ion-input>\n          </ion-col>\n         <ion-col class=\"rectanguloInput\">\n            <ion-input type=\"tel\"\n                      minlength=\"1\"\n                      maxlength=\"1\"\n                        [(ngModel)]=\"segundo\"\n                        formControlName=\"segundo\"\n                        ></ion-input>\n          </ion-col>\n         <ion-col class=\"rectanguloInput\">\n           <ion-input type=\"tel\"\n                      minlength=\"1\"\n                      maxlength=\"1\"\n                      tercero=\"tercero\"\n                      formControlName=\"tercero\"\n                      ngModel></ion-input>\n          </ion-col>\n          <ion-col class=\"rectanguloInput\">\n              <ion-input type=\"tel\"\n                      minlength=\"1\"\n                      maxlength=\"1\"\n                         tercero=\"cuarto\"\n                         formControlName=\"cuarto\"\n                         ngModel></ion-input>\n             </ion-col>\n            </ion-row>\n            <div class=\"containerInputs\">\n                <h3 class=\"tituloContraseña\">Cambia la contraseña</h3>\n                <p class=\"recuerda\">Recuerda ingresar minimo 8 carácteres y al menos un número</p>\n                 <ion-item>\n                     <ion-label position=\"floating\">contraseña nueva</ion-label>\n                     <ion-input type=\"password\"\n                                 formControlName=\"password\"\n                                 ngModel>\n                     </ion-input>\n                   </ion-item>\n\n                   <ion-item>\n                       <ion-label position=\"floating\">Repetir contraseña nueva</ion-label>\n                       <ion-input type=\"password\"\n                                   formControlName=\"passwordRepeat\"\n                                   ngModel>\n                       </ion-input>\n                     </ion-item>\n              </div>\n            <div class=\"center\">\n              <ion-button\n                      block\n                       type=\"submit\"\n                       class=\"botonRecuperar\"\n                       [disabled]=\"!formCode.valid || !validacion()\">\n                 Recuperar\n              </ion-button>\n            </div>\n   </div>\n\n  </form>\n</ion-row>\n\n\n <!-- <div class=\"center\">\n   <p class=\"newCode\">Si no recibiste o caducó tu codigo puedes solicitar uno nuevo.</p>\n   <ion-button\n          class=\"codigoreen\"\n          clear\n          (click)=\"sendCode()\">reenviar códido\n </ion-button>\n </div> -->\n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/recovery/recovery-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/recovery/recovery-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RecoveryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryPageRoutingModule", function() { return RecoveryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _recovery_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recovery.page */ "./src/app/pages/recovery/recovery.page.ts");




const routes = [
    {
        path: '',
        component: _recovery_page__WEBPACK_IMPORTED_MODULE_3__["RecoveryPage"]
    }
];
let RecoveryPageRoutingModule = class RecoveryPageRoutingModule {
};
RecoveryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecoveryPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/recovery/recovery.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/recovery/recovery.module.ts ***!
  \***************************************************/
/*! exports provided: RecoveryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryPageModule", function() { return RecoveryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _recovery_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recovery-routing.module */ "./src/app/pages/recovery/recovery-routing.module.ts");
/* harmony import */ var _recovery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recovery.page */ "./src/app/pages/recovery/recovery.page.ts");







let RecoveryPageModule = class RecoveryPageModule {
};
RecoveryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _recovery_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecoveryPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_recovery_page__WEBPACK_IMPORTED_MODULE_6__["RecoveryPage"]]
    })
], RecoveryPageModule);



/***/ }),

/***/ "./src/app/pages/recovery/recovery.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/recovery/recovery.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.codigoValida {\n  color: #96999C;\n  text-align: center;\n  font-size: 1em;\n  font-weight: 300;\n  padding-top: 1em;\n  width: 90%;\n  margin-left: 5%;\n}\n.rectanguloInput {\n  border: 2px solid #96999C;\n  height: 40px;\n  width: 40px !important;\n  margin: 2px;\n  border-radius: 5px;\n}\n.center {\n  text-align: center;\n  margin-top: 20px;\n}\n.codigoreen {\n  color: #062F51;\n  font-size: 1em;\n  text-transform: lowercase;\n  font-size: 1.2em;\n  font-weight: lighter;\n  border: 1px solid #062F51;\n  border-radius: 10px;\n}\n.botonRecuperar {\n  background: #00B6A3;\n  width: 100%;\n}\n.newCode {\n  color: #062F51;\n  font-size: 0.9em;\n  width: 90%;\n  margin-left: 5%;\n  margin-top: 20px;\n}\n.tituloContraseña {\n  width: 90%;\n  margin-left: 5%;\n  color: #062F51;\n  text-align: center;\n  font-size: 1.1em;\n  margin-bottom: 0 !important;\n  margin-top: 20px;\n}\n.text-input-md {\n  font-size: 2em;\n  color: #00B6A3;\n  text-align: center;\n  font-weight: 600;\n}\n.padding {\n  width: 80%;\n  margin-left: 10%;\n}\n.recuerda {\n  width: 90%;\n  margin-left: 5%;\n  margin-top: 20px;\n  text-align: center;\n}\n.containerInputs {\n  width: 90%;\n  margin-left: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVjb3ZlcnkvcmVjb3ZlcnkucGFnZS5zY3NzIiwiL1VzZXJzL29tYXIvcHJveWVjdG9zL0Rldi9ib29raW5ndjQvc3JjL2FwcC9wYWdlcy9yZWNvdmVyeS9yZWNvdmVyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQVo7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FEQ047QUNDSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FERU47QUNBSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QURHTjtBQ0RJO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FESU47QUNGSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBREtOO0FDSEk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FETU47QUNKSTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FET047QUNMSTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRFFOO0FDTkk7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QURTUjtBQ1BJO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FEVVI7QUNSSTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FEV1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWNvdmVyeS9yZWNvdmVyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29kaWdvVmFsaWRhIHtcbiAgY29sb3I6ICM5Njk5OUM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmctdG9wOiAxZW07XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLnJlY3Rhbmd1bG9JbnB1dCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5Njk5OUM7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNvZGlnb3JlZW4ge1xuICBjb2xvcjogIzA2MkY1MTtcbiAgZm9udC1zaXplOiAxZW07XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDYyRjUxO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYm90b25SZWN1cGVyYXIge1xuICBiYWNrZ3JvdW5kOiAjMDBCNkEzO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5ld0NvZGUge1xuICBjb2xvcjogIzA2MkY1MTtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udGl0dWxvQ29udHJhc2XDsWEge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGNvbG9yOiAjMDYyRjUxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnRleHQtaW5wdXQtbWQge1xuICBmb250LXNpemU6IDJlbTtcbiAgY29sb3I6ICMwMEI2QTM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnBhZGRpbmcge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4ucmVjdWVyZGEge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lcklucHV0cyB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn0iLCIgICAgLmNvZGlnb1ZhbGlkYXtcbiAgICAgIGNvbG9yOiAjOTY5OTlDO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgcGFkZGluZy10b3A6IDFlbTtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgfVxuICAgIC5yZWN0YW5ndWxvSW5wdXR7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjOTY5OTlDO1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgd2lkdGg6IDQwcHghaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOjJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xuICAgIH1cbiAgICAuY2VudGVye1xuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgfVxuICAgIC5jb2RpZ29yZWVue1xuICAgICAgY29sb3I6IzA2MkY1MTtcbiAgICAgIGZvbnQtc2l6ZToxZW07XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgICAgZm9udC1zaXplOjEuMmVtO1xuICAgICAgZm9udC13ZWlnaHQ6bGlnaHRlcjtcbiAgICAgIGJvcmRlcjoxcHggc29saWQgIzA2MkY1MTtcbiAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICB9XG4gICAgLmJvdG9uUmVjdXBlcmFye1xuICAgICAgYmFja2dyb3VuZDojMDBCNkEzO1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICB9XG4gICAgLm5ld0NvZGV7XG4gICAgICBjb2xvcjojMDYyRjUxO1xuICAgICAgZm9udC1zaXplOi45ZW07XG4gICAgICB3aWR0aDo5MCU7XG4gICAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgfVxuICAgIC50aXR1bG9Db250cmFzZcOxYXtcbiAgICAgIHdpZHRoOjkwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICAgIGNvbG9yOiMwNjJGNTE7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6MS4xZW07XG4gICAgICBtYXJnaW4tYm90dG9tOjAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIH1cbiAgICAudGV4dC1pbnB1dC1tZHtcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgY29sb3I6ICMwMEI2QTM7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAucGFkZGluZ3tcbiAgICAgICAgd2lkdGg6ODAlO1xuICAgICAgICBtYXJnaW4tbGVmdDoxMCU7XG4gICAgfVxuICAgIC5yZWN1ZXJkYXtcbiAgICAgICAgd2lkdGg6OTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmNvbnRhaW5lcklucHV0c3tcbiAgICAgICAgd2lkdGg6OTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgfVxuXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/pages/recovery/recovery.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/recovery/recovery.page.ts ***!
  \*************************************************/
/*! exports provided: RecoveryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryPage", function() { return RecoveryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_crudparent_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/crudparent.service */ "./src/app/services/crudparent.service.ts");







let RecoveryPage = class RecoveryPage {
    constructor(router, crudPvr, form, userService, alertCtrl, loadingCtrl, routes) {
        this.router = router;
        this.crudPvr = crudPvr;
        this.form = form;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.routes = routes;
        const data = this.routes.snapshot.paramMap.get('data');
        this.datos = JSON.parse(data);
        console.log(data);
        /* this.datos = this.navParams.get('datos'); */
        console.log(this.datos);
        this.formCode = this.form.group({
            primero: [],
            segundo: [],
            tercero: [],
            cuarto: [],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            passwordRepeat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    }
    ngOnInit() {
    }
    validacion() {
        const valid = this.formCode.value;
        if (valid.password == valid.passwordRepeat) {
            return true;
        }
        else {
            return false;
        }
    }
    saveData() {
        let codigo = this.formCode.value;
        // console.log('codigo:', codigo);
        let uno = codigo.primero;
        let dos = codigo.segundo;
        let tres = codigo.tercero;
        let cuatro = codigo.cuarto;
        let code = uno + dos + tres + cuatro;
        // console.log(code);
        this.datos.code = code;
        this.datos.password = this.formCode.value.password;
        console.log('datos.code:', this.datos);
        // this.datos.id = this.code.id;
        // console.log('data armada:', this.datos);
        this.userService.recoveryLogin(this.datos).subscribe(data => {
            this.logeo = data;
            if (data) {
                localStorage.setItem('usuario', this.logeo.userEmail);
                localStorage.setItem('email', this.logeo.userEmail);
                localStorage.setItem('authorization', this.logeo.authorization);
                localStorage.setItem('id', this.logeo.patientId);
                localStorage.setItem('role', this.logeo.role);
                localStorage.setItem('photoUrl', this.logeo.photoUrl);
                localStorage.setItem('patientName', this.logeo.patientName);
                console.log('this.logeo:', this.logeo);
                this.recoverySuccess();
                this.router.navigate(['login']);
            }
            /* this.navCtrl.setRoot(LoginPage); */
        }, err => {
            console.log('el logeo:', this.logeo);
            this.erroCode();
        });
    }
    recoverySuccess() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: "Cuenta recuperada",
                message: "su cuenta se ha recuperado exitosamente",
                buttons: [
                    {
                        text: 'ok'
                    }
                ]
            });
            yield alert.present();
        });
    }
    erroCode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: `Error en la recuperación`,
                message: `${this.logeo.error.message}`,
                buttons: ['volver a intentar']
            });
            yield alert.present();
        });
    }
    goToLogin() {
        this.router.navigate(['login']);
        /* this.navCtrl.setRoot(LoginPage); */
    }
};
RecoveryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_crudparent_service__WEBPACK_IMPORTED_MODULE_6__["CrudparentService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
RecoveryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recovery',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./recovery.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recovery/recovery.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./recovery.page.scss */ "./src/app/pages/recovery/recovery.page.scss")).default]
    })
], RecoveryPage);



/***/ }),

/***/ "./src/app/services/crudparent.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/crudparent.service.ts ***!
  \************************************************/
/*! exports provided: CrudparentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudparentService", function() { return CrudparentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let CrudparentService = class CrudparentService {
    constructor(http) {
        this.http = http;
        this.SERVER = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"];
        this.apiUrl = `${this.SERVER}ebooking/appointments/createForUser/`;
        this.api = `${this.SERVER}users/register-dependent/`;
        this.apiCreate = `${this.SERVER}users/register`;
        this.apiValidate = `${this.SERVER}users/validate-email/register`;
    }
    createParentDate(subida, id, provisionId) {
        const authorization = localStorage.getItem('authorization');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": authorization });
        let params = JSON.parse(subida);
        params.provisions = [{ "default": false, "id": provisionId[0] }];
        return this.http.post(this.apiUrl + `${id}`, params, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((resp) => {
            return resp;
        }));
    }
    createParent(data) {
        const authorization = localStorage.getItem('authorization');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": authorization });
        let params = data;
        return this.http.post(this.api, params, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((resp) => {
            return resp;
        }));
    }
    createNewUser(datos) {
        const authorization = localStorage.getItem('authorization');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": authorization });
        let params = datos;
        return this.http.post(this.apiCreate, params, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((resp) => {
            return resp;
        }));
    }
    validateEmail(email) {
        const authorization = localStorage.getItem('authorization');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": authorization });
        let params = email;
        return this.http.post(this.apiValidate, params, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((resp) => {
            return resp;
        }));
    }
};
CrudparentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CrudparentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CrudparentService);



/***/ })

}]);
//# sourceMappingURL=pages-recovery-recovery-module.js.map