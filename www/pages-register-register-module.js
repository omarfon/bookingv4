(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding>\n  <div class=\"contenedorTextoInicial\">\n    <h4 class=\"registroDeUsuarioTitulo\">Completa tu registro para obtener una cuenta...así de facil..</h4>\n  </div>\n\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerNewUser()\" novalidate padding class=\"formulario\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"name\" name=\"name\" placeholder=\"Nombres\"></ion-input>\n        </ion-item>\n        <div\n          *ngIf=\"registerForm.get('name').errors && registerForm.get('name').dirty || registerForm.get('name').touched\"\n          no-lines>\n          <p *ngIf=\"registerForm.get('name').hasError('required')\" class=\"error\">El nombre es requerido</p>\n        </div>\n        <!-- <div *ngIf=\"registerForm.get('name').errors && registerForm.get('name').touched\" no-lines>\n            <p *ngIf=\"registerForm.get('name').hasError('required')\" class=\"error\">el nombre es requerido</p>\n        </div> -->\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"surname1\" name=\"surname1\" placeholder=\"Apellido Paterno\"></ion-input>\n        </ion-item>\n        <div\n          *ngIf=\"registerForm.get('surname1').errors && registerForm.get('surname1').dirty || registerForm.get('surname1').touched\"\n          no-lines>\n          <p *ngIf=\"registerForm.get('surname1').hasError('required')\" class=\"error\">El apellido paterno requerido</p>\n        </div>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"surname2\" name=\"surname1\" placeholder=\"Apellido Materno\"></ion-input>\n        </ion-item>\n        <div\n          *ngIf=\"registerForm.get('surname2').errors && registerForm.get('surname2').dirty || registerForm.get('surname2').touched\"\n          no-lines>\n          <p *ngIf=\"registerForm.get('surname2').hasError('required')\" class=\"error\">El apellido materno es requerido\n          </p>\n        </div>\n      </ion-col>\n      <ion-col>\n        <ion-item lines=\"none\">\n          <ion-input type=\"email\" formControlName=\"email\" name=\"email\" placeholder=\"Email:\"></ion-input>\n        </ion-item>\n        <div\n          *ngIf=\"registerForm.get('email').errors && registerForm.get('email').dirty || registerForm.get('email').touched\"\n          lines=\"none\">\n          <p *ngIf=\"registerForm.get('email').hasError('required')\" class=\"error\">Email requerido</p>\n          <p *ngIf=\"registerForm.get('email').hasError('email')\" class=\"error\">El correo electronico no es valido</p>\n        </div>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\">\n          <!-- <ion-label floating>Fecha de nacimiento:</ion-label> -->\n          <ion-datetime displayFormat=\"DD/MM/YYYY\" formControlName=\"birthdate\" name=\"birthdate\" max=\"{{actual}}\"\n            placeholder=\"Fecha de nacimiento\"></ion-datetime>\n          <!-- <ion-input type=\"date\" formControlName=\"birthdate\" name=\"date_of_birth\" placeholder=\"Fecha de nacimiento\"></ion-input> -->\n        </ion-item>\n        <div\n          *ngIf=\"registerForm.get('birthdate').errors && registerForm.get('birthdate').dirty || registerForm.get('birthdate').touched\"\n          no-lines>\n          <p *ngIf=\"registerForm.get('birthdate').hasError('required')\" class=\"error\">La fecha de nacimiento es\n            requerida</p>\n        </div>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\">\n          <ion-select formControlName=\"gender\" name=\"gender\" placeholder=\"Sexo\" [(ngModel)]=\"gender\"\n            (ionChange)=\"cambiogenero($event)\">\n            <ion-select-option *ngFor=\"let gender of genders\" [value]=\"gender\">{{gender.name}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <div\n          *ngIf=\"registerForm.get('gender').errors && registerForm.get('gender').dirty || registerForm.get('gender').touched\"\n          no-lines>\n          <p *ngIf=\"registerForm.get('gender').hasError('required')\" class=\"error\">El género requerido</p>\n        </div>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\">\n          <ion-input type=\"tel\" formControlName=\"phone\" name=\"phone\" placeholder=\"Telefono\"></ion-input>\n        </ion-item>\n        <div\n          *ngIf=\"registerForm.get('phone').errors && registerForm.get('phone').dirty || registerForm.get('phone').touched\"\n          no-lines>\n          <p *ngIf=\"registerForm.get('phone').hasError('required')\" class=\"error\">Teléfono requerida</p>\n          <p *ngIf=\"registerForm.get('phone').hasError('minLength')\" class=\"error\">introducir mínimo 9 caracteres</p>\n        </div>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\">\n          <ion-select formControlName=\"documentType\" name=\"documentType\" [(ngModel)]=\"document\"\n            (ionChange)=\"cambioDocumento($event)\" placeholder=\"Tipo de documento\">\n            <ion-select-option *ngFor=\"let document of documents\" [value]=\"document\">{{document.name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <div\n          *ngIf=\"registerForm.get('documentType').errors && registerForm.get('documentType').dirty || registerForm.get('documentType').touched\"\n          no-lines>\n          <p *ngIf=\"registerForm.get('documentType').hasError('required')\" class=\"error\">Tipo de documento requerido</p>\n        </div>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\">\n          <ion-input *ngIf=\"!_documenType\" placeholder=\"Nº de documento\"></ion-input>\n          <ion-input *ngIf=\"_documenType && _documenType.id == 3\" placeholder=\"Nº de Carne\" type=\"tel\" min=\"0\"\n            formControlName=\"documentNumber\" name=\"documentNumber\" minlength=12 maxlength=12 stacked></ion-input>\n          <ion-input *ngIf=\"_documenType && _documenType.id == '1'\" placeholder=\"Nº de Dni\" type=\"tel\" min=\"0\"\n            formControlName=\"documentNumber\" name=\"documentNumber\" minlength=8 maxlength=8 stacked></ion-input>\n          <ion-input *ngIf=\"_documenType &&_documenType.id == 2\" placeholder=\"Nº de Pasaporte\" type=\"tel\" min=\"0\"\n            formControlName=\"documentNumber\" name=\"documentNumber\" minlength=12 maxlength=12 stacked></ion-input>\n          <!-- <p color=\"danger\" ion-text *ngIf=\"registerForm.get('dni').hasError('required')\">DNI requerido</p> -->\n        </ion-item>\n        <div\n          *ngIf=\"registerForm.get('documentNumber').errors && registerForm.get('documentNumber').dirty || registerForm.get('documentNumber').touched\"\n          placeholder=\"Nº de documento\" no-lines>\n          <p *ngIf=\"registerForm.get('documentNumber').hasError('required')\" class=\"error\">El tipo de documento es\n            requerido</p>\n        </div>\n      </ion-col>\n\n\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\">\n          <ion-input type=\"password\" required name=\"password\" formControlName=\"password\"\n            placeholder=\"Contraseña, mínima 8 caracteres\"></ion-input>\n        </ion-item>\n        <div\n          *ngIf=\"registerForm.get('password').errors && registerForm.get('password').dirty || registerForm.get('password').touched\"\n          no-lines>\n          <p *ngIf=\"registerForm.get('password').hasError('required')\" class=\"error\">La contraseña es requerida\n            caracteres</p>\n          <p *ngIf=\"registerForm.get('password').hasError('minLength')\" class=\"error\">Introducir minimo 8 caracteres</p>\n        </div>\n      </ion-col>\n\n\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\">\n          <ion-input type=\"password\" formControlName=\"password_confirmation\" name=\"password_confirmation\"\n            placeholder=\"repetir contraseña\"></ion-input>\n          <div\n            *ngIf=\"registerForm.get('password_confirmation').errors && registerForm.get('password_confirmation').dirty || registerForm.get('password_confirmation').touched\">\n            <p *ngIf=\"registerForm.get('password_confirmation').hasError('required')\" class=\"error\">la confirmación de\n              la contraseña es requerida</p>\n          </div>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\">\n          <ion-label class=\"terminosyCondiciones\">Acepto los términos y condiciones</ion-label>\n          <ion-checkbox formControlName=\"aprobed\" name=\"aprobed\" [(ngModel)]=\"aprobed\"\n            (ionChange)=\"aceptaCondiciones(aprobed)\"></ion-checkbox>\n        </ion-item>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-button type=\"submit\" [disabled]=\"!registerForm.valid || !validacion()\" fill=\"block\" color=\"tertiary\"\n      class=\"alto50\">Registro</ion-button>\n  </form>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" class=\"izquierda\">\n        <ion-button fill=\"clear\" class=\"bajas\" (click)=\"seeConditions() \">terminos y condiciones</ion-button>\n      </ion-col>\n      <ion-col size=\"6\" class=\"derecha \">\n        <ion-button ion-button fill=\"clear\" class=\"bajas derecha\" (click)=\"goToLogin() \">Tengo una cuenta</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/register/register-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/pages/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".registroDeUsuarioTitulo {\n  color: #fff;\n  text-align: left;\n  width: 80%;\n  margin-left: 10%;\n  font-size: 1.2em;\n  font-weight: 200;\n  padding-top: 20px;\n  padding-bottom: 10px !important;\n}\n\nion-content {\n  --background: #1BABA0 !important;\n}\n\nion-item {\n  --background: transparent !important;\n}\n\nion-input {\n  background: #fff;\n  height: 50px;\n  border-bottom: none !important;\n}\n\nion-input:active {\n  background-color: #1BABA0;\n}\n\n.contenedorTextoInicial {\n  background: #061175;\n  height: 80px;\n  color: #fff;\n  border-bottom-right-radius: 45px;\n}\n\nion-label {\n  font-size: 0.8em;\n  margin-left: 10px;\n  z-index: 500;\n}\n\n.formulario {\n  margin-top: 5px !important;\n}\n\n.alto50 {\n  height: 50px;\n  margin-top: 15px;\n  --background: #061175;\n  color: #fff;\n  width: 90%;\n  margin-left: 5%;\n}\n\n.bajas {\n  text-transform: lowercase;\n  font-size: 0.9em;\n  font-weight: 400;\n  color: #061175;\n  font-weight: 400;\n  margin-top: -5px;\n}\n\n.izquierda {\n  text-align: left !important;\n}\n\n.derecha {\n  text-align: right !important;\n}\n\nion-input {\n  color: #061175 !important;\n  --placeholder-color: #061175;\n  --placeholder-margin-left: 10px;\n  --placeholder-font-style: .8em;\n}\n\nion-select {\n  width: 100% !important;\n  min-width: 100%;\n  background: #fff;\n  border-radius: 5px;\n  font-size: 0.8em;\n  color: #061175 !important;\n  height: 50px;\n  --placeholder-color: #061175;\n}\n\n.datetime-text {\n  padding-left: -15px !important;\n  --placeholder-color: #061175 !important;\n  --placeholder-font-style: .9em;\n}\n\nion-select::-moz-placeholder {\n  font-size: 1em;\n}\n\nion-select::-ms-input-placeholder {\n  font-size: 1em;\n}\n\nion-select::placeholder {\n  font-size: 1em;\n}\n\n.select-text {\n  min-width: 80px;\n  color: #000 !important;\n  font-size: 1em;\n}\n\nion-datetime {\n  font-size: 0.8em;\n  background: #fff;\n  width: 100%;\n  height: 50px;\n  --placeholder-color: #061175 !important;\n}\n\n.error {\n  font-size: 0.7em;\n  color: red;\n  margin-top: 2px;\n  margin-left: 20px;\n  width: 90%;\n}\n\n.error:before {\n  content: \"*\";\n  margin-right: 5px;\n}\n\n.terminosyCondiciones {\n  color: #061175;\n}\n\n.outpadding {\n  width: 92%;\n  margin-left: 5%;\n  height: 50px;\n  background: #fff !important;\n  font-size: 1.3em;\n  text-align: left;\n}\n\n.datetime-md .datetime-placeholder {\n  margin-left: -15px;\n  font-size: 0.9em;\n  color: #061175;\n}\n\n.select-text {\n  color: #000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbWFyL3Byb3llY3Rvcy9EZXYvYm9va2luZ3Y0L3NyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQ0NOOztBREVJO0VBQ0UsZ0NBQUE7QUNDTjs7QURFSTtFQUNFLG9DQUFBO0FDQ047O0FERUk7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQ0NOOztBREVJO0VBQ0UseUJBQUE7QUNDTjs7QURHSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQ0FOOztBREdJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNBTjs7QURHSTtFQUNFLDBCQUFBO0FDQU47O0FER0k7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0FOOztBREdJO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBTjs7QURHSTtFQUNFLDJCQUFBO0FDQU47O0FER0k7RUFDRSw0QkFBQTtBQ0FOOztBREdJO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7QUNBTjs7QURHSTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDQU47O0FER0k7RUFDRSw4QkFBQTtFQUNBLHVDQUFBO0VBQ0EsOEJBQUE7QUNBTjs7QURHSTtFQUNFLGNBQUE7QUNBTjs7QURESTtFQUNFLGNBQUE7QUNBTjs7QURESTtFQUNFLGNBQUE7QUNBTjs7QURHSTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNBTjs7QURHSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0FDQU47O0FESUk7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDRE47O0FESUk7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNETjs7QURJSTtFQUNFLGNBQUE7QUNETjs7QURJSTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0ROOztBRElJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNETjs7QURJSTtFQUNFLHNCQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLnJlZ2lzdHJvRGVVc3VhcmlvVGl0dWxvIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjMUJBQkEwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGlvbi1pbnB1dCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGlvbi1pbnB1dDphY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFCQUJBMDtcblxuICAgIH1cblxuICAgIC5jb250ZW5lZG9yVGV4dG9JbmljaWFsIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwNjExNzU7XG4gICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0NXB4O1xuICAgIH1cblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IC44ZW07XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIHotaW5kZXg6IDUwMDtcbiAgICB9XG5cbiAgICAuZm9ybXVsYXJpbyB7XG4gICAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuYWx0bzUwIHtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAtLWJhY2tncm91bmQ6ICMwNjExNzU7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgfVxuXG4gICAgLmJhamFzIHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgICBmb250LXNpemU6IC45ZW07XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgY29sb3I6ICMwNjExNzU7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICB9XG5cbiAgICAuaXpxdWllcmRhIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuZGVyZWNoYSB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGlvbi1pbnB1dCB7XG4gICAgICBjb2xvcjogIzA2MTE3NSAhaW1wb3J0YW50O1xuICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzA2MTE3NTtcbiAgICAgIC0tcGxhY2Vob2xkZXItbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IC44ZW07XG4gICAgfVxuXG4gICAgaW9uLXNlbGVjdCB7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICAgIGNvbG9yOiAjMDYxMTc1ICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMDYxMTc1O1xuICAgIH1cblxuICAgIC5kYXRldGltZS10ZXh0IHtcbiAgICAgIHBhZGRpbmctbGVmdDogLTE1cHggIWltcG9ydGFudDtcbiAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICMwNjExNzUgIWltcG9ydGFudDtcbiAgICAgIC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTogLjllbTtcbiAgICB9XG5cbiAgICBpb24tc2VsZWN0OjpwbGFjZWhvbGRlciB7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG5cbiAgICAuc2VsZWN0LXRleHQge1xuICAgICAgbWluLXdpZHRoOiA4MHB4O1xuICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cblxuICAgIGlvbi1kYXRldGltZSB7XG4gICAgICBmb250LXNpemU6IC44ZW07XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMDYxMTc1ICFpbXBvcnRhbnQ7XG5cbiAgICB9XG5cbiAgICAuZXJyb3Ige1xuICAgICAgZm9udC1zaXplOiAuN2VtO1xuICAgICAgY29sb3I6IHJlZDtcbiAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG5cbiAgICAuZXJyb3I6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcqJztcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIH1cblxuICAgIC50ZXJtaW5vc3lDb25kaWNpb25lcyB7XG4gICAgICBjb2xvcjogIzA2MTE3NTtcbiAgICB9XG5cbiAgICAub3V0cGFkZGluZyB7XG4gICAgICB3aWR0aDogOTIlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgLmRhdGV0aW1lLW1kIC5kYXRldGltZS1wbGFjZWhvbGRlciB7XG4gICAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gICAgICBmb250LXNpemU6IC45ZW07XG4gICAgICBjb2xvcjogIzA2MTE3NTtcbiAgICB9XG5cbiAgICAuc2VsZWN0LXRleHQge1xuICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICB9IiwiLnJlZ2lzdHJvRGVVc3VhcmlvVGl0dWxvIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogIzFCQUJBMCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUJBQkEwO1xufVxuXG4uY29udGVuZWRvclRleHRvSW5pY2lhbCB7XG4gIGJhY2tncm91bmQ6ICMwNjExNzU7XG4gIGhlaWdodDogODBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0NXB4O1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgei1pbmRleDogNTAwO1xufVxuXG4uZm9ybXVsYXJpbyB7XG4gIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uYWx0bzUwIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICAtLWJhY2tncm91bmQ6ICMwNjExNzU7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5iYWphcyB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMDYxMTc1O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4uaXpxdWllcmRhIHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uZGVyZWNoYSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGNvbG9yOiAjMDYxMTc1ICFpbXBvcnRhbnQ7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICMwNjExNzU7XG4gIC0tcGxhY2Vob2xkZXItbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTogLjhlbTtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogIzA2MTE3NSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICMwNjExNzU7XG59XG5cbi5kYXRldGltZS10ZXh0IHtcbiAgcGFkZGluZy1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMDYxMTc1ICFpbXBvcnRhbnQ7XG4gIC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTogLjllbTtcbn1cblxuaW9uLXNlbGVjdDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLnNlbGVjdC10ZXh0IHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzA2MTE3NSAhaW1wb3J0YW50O1xufVxuXG4uZXJyb3Ige1xuICBmb250LXNpemU6IDAuN2VtO1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB3aWR0aDogOTAlO1xufVxuXG4uZXJyb3I6YmVmb3JlIHtcbiAgY29udGVudDogXCIqXCI7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4udGVybWlub3N5Q29uZGljaW9uZXMge1xuICBjb2xvcjogIzA2MTE3NTtcbn1cblxuLm91dHBhZGRpbmcge1xuICB3aWR0aDogOTIlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuM2VtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZGF0ZXRpbWUtbWQgLmRhdGV0aW1lLXBsYWNlaG9sZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogIzA2MTE3NTtcbn1cblxuLnNlbGVjdC10ZXh0IHtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_data_basic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-basic.service */ "./src/app/services/data-basic.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_crudparent_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/crudparent.service */ "./src/app/services/crudparent.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









let RegisterPage = class RegisterPage {
    constructor(alertCtrl, fb, userProvider, crudPvr, dataPvr, router, route) {
        this.alertCtrl = alertCtrl;
        this.fb = fb;
        this.userProvider = userProvider;
        this.crudPvr = crudPvr;
        this.dataPvr = dataPvr;
        this.router = router;
        this.route = route;
        this.cambio = false;
        this.aprobed = false;
        this.gender = {
            id: 0,
            name: ""
        };
        this.document = {
            id: 0,
            name: ""
        };
        this.hora = null;
        const data = this.route.snapshot.paramMap.get('data');
        this.tipoConsulta = JSON.parse(data);
        this.escogido = this.tipoConsulta.escogido;
        /* this.hora = this.navParams.get('hora');
        this.doctor = this.navParams.get('doctor');
        this.available = this.navParams.get('available');
        this.texto = this.navParams.get('texto'); */
        /* console.log(this.hora, this.available,this.doctor, this.texto); */
    }
    ngOnInit() {
        this.actual = moment__WEBPACK_IMPORTED_MODULE_8__().format('YYYY-MM-DD');
        // console.log('fecha actual:',this.actual);
        this.dataPvr.getGenders().subscribe(datagenders => {
            this.genders = datagenders;
            console.log('this.genders:', this.genders);
        });
        this.dataPvr.getDocuments().subscribe(documents => {
            this.documents = documents;
            console.log('this.documents:', this.documents);
        });
        this.registerForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            surname1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            surname2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            birthdate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            documentType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            documentNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(9)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]],
            password_confirmation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]],
            aprobed: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    }
    validacion() {
        const valid = this.registerForm.value;
        if (valid.password == valid.password_confirmation && valid.aprobed == true) {
            return true;
        }
        else {
            return false;
        }
    }
    cambiogenero($event) {
        this._gender = this.gender;
        console.log('this.gender:', this._gender);
    }
    cambioDocumento($event) {
        this._documenType = this.document;
        console.log('this.document', this._documenType);
    }
    aceptaCondiciones(aprobed) {
        console.log('aprobed', aprobed);
    }
    seeConditions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let terminos = yield this.alertCtrl.create({
                header: 'TÉRMINOS Y CONDICIONES',
                message: 'Los siguientes términos y condiciones de uso (en adelante, "Términos") son un acuerdo legal entre el usuario y Centros de Salud Peruanos S.A.C., RUC N° con RUC N°20602393934, con domicilio en Jirón Carlos Villarán N°611, Urbanización Santa Catalina, Distrito de La Victoria, Provincia y Departamento de Lima, Perú (en adelante "CSP" o "nosotros", " nos” o "nuestro "), para establecer el marco legal y contractual aplicable al registro, uso, baja o interacción en la plataforma ofrecida por CSP para el acceso a los servicios que presta CLÍNICA AVIVA y todas las aplicaciones móviles o sitios web que pertenecen, operan, tienen licencia o están bajo el control de CSP (en adelante, “Aplicación móvil”, “Aplicaciones móviles”, “Sitio Web” o "Sitios Web"). AL ACCEDER O UTILIZAR LAS APLICACIONES O SITIOS WEB, EL USUARIO SE COMPROMETE A RESPETAR ESTOS TÉRMINOS Y NUESTRA POLÍTICA DE PRIVACIDAD. SI NO ESTÁ DE ACUERDO CON ESTOS TÉRMINOS, NO ACCEDA NI UTILICE LAS APLICACIONES O LOS SITIOS WEB  Al utilizar el Sitio Web o Aplicaciones Móviles, usted declara y garantiza que: usted tiene el poder legal y la autoridad para aceptar y estar sujeto a estos Términos; y, si nos ha proporcionado información como consecuencia del uso del Sitio Web, dicha información es verdadera y precisa. Facilitar información falsa, engañosa o incorrecta puede dar lugar a responsabilidades tanto civiles como penales. Si tienes dudas al respecto, te recomendamos que consultes con tu asesor legal. El acceso y utilización del Sitio Web y Aplicaciones Móviles implica la declaración expresa del usuario de conocer y aceptar plenamente todas las disposiciones, normas, instrucciones, responsabilidades y políticas contenidas en los presentes Términos. En consecuencia, el usuario debe leer detenidamente los presentes Términos cada vez que acceda al Sitio Web, Aplicaciones Móviles y Servicios, pues podrían sufrir variaciones o actualizaciones sin previo aviso, en atención a nuevos requerimientos legales o por necesidades internas para cumplir con las mejores prácticas de negocio. Finalidad de la Aplicación o el Sitio Web La finalidad de las Aplicaciones Móviles o del Sitio Web y es proporcionar a nuestros pacientes, usuarios y al público en general (en adelante, los “Usuarios” o el “Usuario”), una plataforma de acceso a los servicios médicos que presta CLÍNICA AVIVA, así como a información de salud, propia o suministrada por CSP o sus empresas relacionadas relevantes para el usuario.La información suministrada de naturaleza médica tiene fines informativos y no sustituye el asesoramiento médico profesional, la ayuda, el diagnóstico o el tratamiento. Condiciones de uso de la Aplicación o Sitio Web Los Usuarios aceptan que el uso de la Aplicación o Sitio Web requiere de conectividad a Internet. En ese sentido, los Usuarios aceptan que CSP no se hace responsable por problemas de conectividad que limiten, restrinjan o impidan el uso. Los Usuarios entienden que la Aplicación o el Sitio Web podrá ser usado por todo el público en general que tenga una conexión web. Sin embargo, CSP recomienda su uso sólo a personas mayores de dieciocho (18) años de edad. Se encuentra prohibido el uso del Sitio Web o Aplicaciones Móviles por parte de los Usuarios para fines contrarios a las normas vigentes, el orden público y las buenas costumbres. CSP podrá enviar avisos de servicio, mensajes administrativos y otro tipo de información para la adecuada conectividad. Será responsabilidad de los Usuarios mantener actualizados sus datos registrados en el Sitio Web y Aplicaciones Móviles, así como ejecutar las actualizaciones disponibles. En el supuesto que alguna de las disposiciones contenidas en los presentes Términos y Condiciones de Uso sea declarado ilegal, inválido o nulo, el resto de términos quedará vigente y aplicable para cualquier supuesto. Para acceder a los servicios, el usuario creará una cuenta de acceso con nombre de usuario y contraseña, por tanto, deberá mantener la confidencialidad de la contraseña pues el Usuario es responsable de la información personal y actividad que se desarrolle en su cuenta o a través de ella. Si el Usuario debe cuidar de cerrar siempre la sesión a fin de evitar accesos indebidos por parte de terceros. Para asegurar la disponibilidad de las Aplicaciones móviles y Sitio Web, así como la ausencia de errores en cualquier transmisión de información que pudiera tener lugar; CSP cuenta con el soporte necesario y adecuado. Sin perjuicio de ello, CSP no garantiza que el contenido del Sitio Web, Aplicaciones Móviles o Servicios será ininterrumpido o libre de errores, que los defectos serán corregidos, o que los servicios o los servidores que hacen que el uso esté disponible, se encuentren libre de virus u otros componentes dañinos. El Sitio Web y Aplicaciones Móviles pueden incluir inexactitudes técnicas o errores tipográficos, y CSP puede hacer cambios o mejoras en cualquier momento. Asimismo, CSP no garantiza que el uso del Sitio Web, Aplicaciones móviles y Servicios no infringirá los derechos de terceros y no asume ninguna responsabilidad o responsabilidad por errores u omisiones en el contenido provisto. Limitación de Responsabilidad En la medida en que la legislación aplicable lo permita, CSP o cualquiera de sus gerentes, funcionarios, profesionales de salud, colaboradores, representantes, no serán responsables ante el usuario o ante cualquier tercero por cualquier daño que surja de o en relación con el uso del Sitio Web y Aplicación Móvil. La Aplicación o el sitio Web pueden contener enlaces a otros sitios Web controlados u ofrecidos por terceras personas. CSP declara que no se hace responsable en relación a ninguna información, materiales, productos o servicios que aparezcan o que se ofrezcan en cualquiera de los sitios pertenecientes a terceras personas con enlaces a este sitio Web.  Derechos de Autor y Propiedad Intelectual El usuarios acepta que CSP es la única y exclusiva titular sobre todas sus marcas registradas en el Perú, así como cualquier otra marca registrada, marcas de servicio y/o logotipos contenidos en la Aplicación o el Sitio Web. En tal sentido, se encuentra expresamente prohibido que dichas marcas y/o logotipos sean copiadas, reproducidas, modificadas o utilizadas de cualquier manera sin autorización expresa de CSP.  Política de Protección de Datos Personales:Al momento de registrarse en la Aplicación o Sitio Web, el usuario deberá registrar sus datos personales. Los datos personales que proporcione a CSP podrían contener datos sensibles. En vista de ello, el usuario autoriza a CSP a recopilar y dar tratamiento (por sí mismo o a través de terceros) a sus datos personales, para que incluso pueda elaborar bases de datos con información sobre su nombre, apellido, edad, nacionalidad, estado civil, documento de identidad, ocupación, domicilio, correo electrónico, teléfono celular, estado de salud, afecciones, preexistencias, que sean proporcionados por el usuario y/o sean recopilados o generados por CSP y/o cualquier tercero, como consecuencia de la utilización de la Aplicación o Sitio Web, o como consecuencia de alguna otra relación comercial que el usuario mantenga y/o haya mantenido con CSP. En ese sentido, a fin de dar tratamiento a la información conforme se indica en este documento, el usuario otorga a CSP su consentimiento libre, previo, expreso, inequívoco e informado, para que (por sí mismo o a través de terceros) pueda: recopilar, registrar, organizar, almacenar, conservar, elaborar, modificar, bloquear, suprimir, extraer, consultar, utilizar, transferir, exportar, importar o procesar (tratar) de cualquier otra forma sus datos personales, conforme a Ley. El usuario declara conocer que los datos pueden ser alojados en plataformas cuyos servidores se encuentren en el extranjero, consintiendo el flujo transfronterizo de sus datos. Esta autorización es indefinida y estará vigente hasta que el usuario la revoque. El usuario tiene derecho a revocar en cualquier momento su consentimiento, comunicando su decisión por escrito a CSP quien podrá informarle a través de cualquier medio de comunicación, sobre otros canales para que puedan hacer efectiva la revocatoria. Asimismo, el usuario declara haber sido informado que podrán ejercer en cualquier momento sus derechos de acceso, rectificación, cancelación y oposición de sus datos de acuerdo a la legislación vigente. Para ello efectuará su solicitud por escrito a CSP, quien podrá informarle a través de cualquier medio de comunicación, sobre otros canales para que pueda hacer efectivo el ejercicio de sus derechos. CSP es titular y responsable de las bases de datos originadas por el tratamiento de los Datos Personales que recopile, los mismos que considerará como fidedignos, dado que el usuario los otorga en calidad de Declaración Jurada. Asimismo, CSP declara que ha adoptado los niveles de seguridad apropiados para el resguardo de la información, respetando las medidas de seguridad técnica aplicables a cada categoría y tipo de tratamiento de las Bases de Datos; asimismo, declara que respeta los principios de legalidad, consentimiento, finalidad, proporcionalidad, calidad, disposición de recurso, nivel de protección adecuado, conforme a las disposiciones de la Ley de Protección de Datos vigente en Perú. El usuario acepta y da su consentimiento a fin de que CSP le envíe por medios electrónicos ofertas, promociones, comunicados, u otros análogos sobre los servicios de salud que ofrece. Asimismo, declara conocer y acepta que algunos datos sean compartidos con otras empresas del Grupo INTERCORP y Grupo NEXUS, integrantes del mismo grupo empresarial de CSP, para efectos de ofrecerle beneficios, promociones y publicidad de los servicios que presten o bienes que ofrezcan. Ley Aplicable Estos Términos se regirán e interpretarán de acuerdo con las leyes de la República del Perú. Asimismo, el Usuario declara su conformidad de someter cualquier discrepancia a la jurisdicción de los  jueces y tribunales de la Corte Superior de Justicia de Lima Norte. Modificaciones Los presentes Términos han sido actualizados a JUNIO 2019 y podrán ser modificados por CSP en cualquier momento.',
                buttons: ['OK']
            });
            yield terminos.present();
        });
    }
    changue() {
        this.cambio = true;
    }
    /*   registerNewUser(){
        let data = this.registerForm.value;
        let datos:any ={
          email          : data.email,
          password       : data.password,
          name           : data.name,
          surname1       : data.surname1,
          surname2       : data.surname2,
          birthdate      : data.birthdate,
          gender         :{
              id         : this._gender.id,
              name       :this._gender.name
          },
          documentType   :{
              id         : this._documenType.id,
              name       : this._documenType.name
          },
          documentNumber : data.documentNumber,
          phone          : data.phone
          // code           : "123"
        }
  
        let email = {email:datos.email}
        this.crudPvr.validateEmail(email).subscribe(data =>{
          this.resolve = data;
          console.log(this.resolve);
          if(this.resolve.result == "ok"){
            let data = {
              datos: datos , hora : this.hora , available: this.available , doctor: this.doctor, resolve: this.resolve
            }
            let datosObj = JSON.stringify(data);
            this.router.navigate(['code', datosObj])
          }else {
              this.mailExisting();
          }
        });
      } */
    registerNewUser() {
        let data = this.registerForm.value;
        console.log('data de formulario:', data);
        let datos = {
            email: data.email,
            password: data.password,
            name: data.name,
            surname1: data.surname1,
            surname2: data.surname2,
            birthdate: data.birthdate,
            gender: {
                id: this._gender.id,
                name: this._gender.name
            },
            documentType: {
                id: this._documenType.id,
                name: this._documenType.name
            },
            documentNumber: data.documentNumber,
            phone: data.phone
            // code           : "123"
        };
        data.code = 1234;
        data.id = "sendbooking";
        data.birthdate = moment__WEBPACK_IMPORTED_MODULE_8__(data.birthdate).format('YYYY-MM-DD');
        console.log('this.data: ', data.birthdate);
        console.log('this.data: ', data);
        console.log('data armada:', data);
        this.userProvider.createNewUser(data).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.createOk = data;
            console.log('la vuelta de this.createOK:', this.createOk);
            /* this.createOk = data; */
            console.log('datos que vienen del logueo: por registro:', this.createOk);
            localStorage.setItem('idTokenUser', this.createOk.patientId);
            localStorage.setItem('emailUser', this.createOk.userEmail);
            localStorage.setItem('authorization', this.createOk.authorization);
            localStorage.setItem('role', this.createOk.role);
            localStorage.setItem('photoUrl', this.createOk.photoUrl);
            localStorage.setItem('name', this.createOk.name);
            localStorage.setItem('patientName', this.createOk.patientName);
            localStorage.setItem('token', this.createOk.firebaseToken);
            localStorage.setItem('token', data.firebaseToken);
            localStorage.setItem('uid', data.userId);
            localStorage.setItem('sigIn', 'completo');
            if (this.tipoConsulta) {
                const data = JSON.stringify(this.tipoConsulta);
                this.router.navigate(['financer', data]);
            }
            else {
                this.router.navigate(['/login']);
            }
            console.log("pasó!!!");
            console.log('pasó logeado', this.createOk);
            if (localStorage.getItem('token')) {
                const token = localStorage.getItem('token');
            }
        }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('err', err);
            const alert = yield this.alertCtrl.create({
                header: 'Error en el envio del código',
                message: `${err.error.message}`,
                buttons: [{
                        text: 'Intentar de nuevo',
                        role: 'cancel'
                    }]
            });
            yield alert.present();
        }));
    }
    mailExisting() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: "Correo Utilizado",
                message: "el correo que ha ingresado ya existe, talvez lo ingresó mal o pruebe con otro",
                buttons: [
                    {
                        text: 'Intentar de nuevo',
                        role: 'cancel'
                    }
                ]
            });
            yield alert.present();
        });
    }
    goToLogin() {
        this.router.navigate(['login']);
        /* this.navCtrl.push(LoginPage); */
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_services_crudparent_service__WEBPACK_IMPORTED_MODULE_6__["CrudparentService"] },
    { type: src_app_services_data_basic_service__WEBPACK_IMPORTED_MODULE_2__["DataBasicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")).default]
    })
], RegisterPage);



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



/***/ }),

/***/ "./src/app/services/data-basic.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/data-basic.service.ts ***!
  \************************************************/
/*! exports provided: DataBasicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataBasicService", function() { return DataBasicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let DataBasicService = class DataBasicService {
    constructor(http) {
        this.http = http;
        this.SERVER = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"];
        this.apiUrl = `${this.SERVER}users/`;
    }
    getGenders() {
        const authorization = localStorage.getItem('authorization');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": authorization });
        return this.http.get(this.apiUrl + 'genders', { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            return data;
        }));
    }
    getDocuments() {
        const authorization = localStorage.getItem('authorization');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": authorization });
        return this.http.get(this.apiUrl + 'documenttypes', { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            return data;
        }));
    }
};
DataBasicService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataBasicService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataBasicService);



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module.js.map