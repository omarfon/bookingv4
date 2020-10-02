(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding class=\"gris\" no-bounce>\n  <div class=\"contenedorCabecera\">\n    <img src=\"assets/imgs/login/logoWhite.svg\" alt=\"\">\n  </div>\n  <!-- <h5 class=\"textoAzul\" text-center> ¡Hola! <br />Estas en el paso 1 de 5 para tu consulta virtual con un\n    pediatra, <span> haz login o registrate es sencillo!!!!</span></h5> -->\n\n\n  <!-- <div class=\"white\">\n          <div padding>\n              <button ion-button (click)=\"registrarUsuario()\" full color=\"primary\" class=\"alto50\">Registrarse</button>\n          </div>\n  \n      </div> -->\n\n  <div class=\"containerInputs\">\n    <!-- <p style=\"text-align: center\">{{msg}}</p> -->\n\n    <form #formulario=\"ngForm\">\n\n      <ion-item lines=\"none\">\n        <!-- <ion-label floating>Email</ion-label> -->\n        <ion-input type=\"text\" required name=\"email\" placeholder=\"Email\" ngModel>\n        </ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <!--  <ion-label floating>Contraseña</ion-label> -->\n        <ion-input [type]=\"password_type\" name=\"password\" placeholder=\"Contraseña\" ngModel>\n          <!--  <button slot=\"end\">\n                               <ion-icon slot=\"end\" (click)=\"changeType()\" color=\"secondary\" name=\"eye\"></ion-icon>\n                             </button> -->\n        </ion-input>\n      </ion-item>\n    </form>\n    <ion-button (click)=\"startSesion(formulario)\" block class=\"inicioSesion\">iniciar Sesión</ion-button>\n  </div>\n  <p (click)=\"goToRecovery()\" class=\"textoOlvido\">Olvidé la contraseña\n  </p>\n\n  <ion-row padding class=\"containerBotones\">\n    <ion-col size=\"12\" class=\"center\">\n      <ion-button class=\"register\" (click)=\"registrarUsuario()\">\n        registrarme\n      </ion-button>\n    </ion-col>\n    <!--             <ion-col size=\"6\" class=\"center\">\n              <ion-button\n              class=\"registerFacebook\"\n              (click)=\"registrarUsuarioFacebook()\">\n              Facebook\n            </ion-button>\n          </ion-col> -->\n  </ion-row>\n  <ion-col size=\"12\" class=\"centrarInvitado\">\n    <ion-button fill=\"outline\" *ngIf=\"this.hora == undefined\" class=\"noLogin\" (click)=\"goToHome()\">Ingresar como\n      invitado\n    </ion-button>\n  </ion-col>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bajar {\n  padding-top: 30px;\n  padding-bottom: 10px;\n}\n\nion-content {\n  --background: url('fondo.png') 0 0/100% 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  /* background:#d4d7dd!important; */\n}\n\n.textoAzul {\n  color: #fff;\n  line-height: 1.3;\n  font-weight: 400;\n  text-align: right;\n  font-size: 1.6em;\n  width: 80%;\n  margin-left: 12.5%;\n  margin-top: 30px;\n  font-weight: 400;\n}\n\n.textoAzul span {\n  font-weight: 500;\n  color: #00b6a3;\n}\n\nion-input {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  --background: rgba(255, 255, 255, 0.4);\n  color: #050e8b !important;\n  height: 50px;\n  border-bottom: transparent !important;\n}\n\nion-item {\n  --background: transparent !important;\n  border-bottom: transparent !important;\n}\n\n.row {\n  margin-left: 0 !important;\n}\n\n.item-input::after {\n  border-bottom-color: transparent !important;\n}\n\n.item-inner {\n  border-bottom: transparent !important;\n}\n\n.inicioSesion {\n  margin-top: 2em;\n  --background: #00b6a3 !important;\n  box-shadow: 0 2px 2px 0 #C8C7C7;\n  height: 50px;\n  border-top-right-radius: 15px;\n  width: 90%;\n  margin-left: 5%;\n}\n\n.alto50 {\n  height: 50px !important;\n}\n\n.item-ios.item-block .item-inner {\n  border: 1px solid grey;\n  margin-bottom: 0.5em;\n}\n\n.item-input ion-label {\n  color: grey;\n  margin-left: 10px !important;\n}\n\n.noMargin {\n  margin: 0;\n  padding: 0;\n}\n\n.noLogin {\n  color: #fff;\n  padding: 0.5em 2em;\n  border-radius: 20px;\n  text-transform: capitalize;\n  text-align: center;\n  --background: rgba(0, 182, 164, 0.021);\n  text-align: left;\n}\n\n.noLogin:active {\n  --background: rgba(0, 182, 164, 0.103);\n}\n\n.item-ios.item-block .item-inner {\n  border: none !important;\n  /* border-bottom: 0.55px solid #c8c7cc!important; */\n}\n\n.item-ios {\n  --background: transparent !important;\n}\n\n.textoOlvido {\n  color: #fff;\n  text-align: center;\n  margin-bottom: 20px;\n  font-weight: 600;\n  /* border: 1px solid #00b6a3; */\n  padding-top: 0.5em;\n  padding-bottom: 0.5em;\n  border-radius: 10px;\n  width: 60%;\n  margin-left: 20%;\n  height: 40px;\n  --background: #287195;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.containerInputs {\n  margin-top: 20vh;\n}\n\n.register {\n  text-transform: capitalize;\n  width: 100%;\n  text-align: right;\n  border-radius: 20px;\n  --background: #C8C7C7;\n  color: #000;\n}\n\n.registerFacebook {\n  text-transform: capitalize;\n  width: 100%;\n  text-align: right;\n  border-radius: 20px;\n  --background-color: #2f2895;\n}\n\n.containerBotones {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 20px;\n}\n\n/*   .center{\n   display: flex;\n   justify-content: center;\n   align-items: center;\n} */\n\n.ojo {\n  padding-top: 15px !important;\n  font-size: 1.2em !important;\n}\n\n.alertcss {\n  --background: #00b6a3 !important;\n}\n\n.alert-head {\n  --background-color: red;\n}\n\n.contenedorCabecera img {\n  position: -webkit-sticky;\n  position: sticky;\n  width: 40%;\n  height: auto;\n  margin-top: 30px;\n  margin-left: 30%;\n  z-index: 1000;\n}\n\n.alert-wrapper {\n  border-top-right-radius: 40px !important;\n  --background: #00b6a3 !important;\n}\n\n.centrarInvitado {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n}\n\n.scroll-content {\n  padding-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbWFyL3Byb3llY3Rvcy9EZXYvYm9va2luZ3Y0L3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FDQ1I7O0FERUk7RUFDSSw0Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtBQ0NSOztBREVJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NSOztBRENRO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDQ1o7O0FER0k7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtBQ0FSOztBREdJO0VBQ0ksb0NBQUE7RUFDQSxxQ0FBQTtBQ0FSOztBREdJO0VBQ0kseUJBQUE7QUNBUjs7QURHSTtFQUNJLDJDQUFBO0FDQVI7O0FER0k7RUFDSSxxQ0FBQTtBQ0FSOztBREdJO0VBQ0ksZUFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0FSOztBREdJO0VBQ0ksdUJBQUE7QUNBUjs7QURHSTtFQUNJLHNCQUFBO0VBQ0Esb0JBQUE7QUNBUjs7QURHSTtFQUNJLFdBQUE7RUFDQSw0QkFBQTtBQ0FSOztBREdJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNBUjs7QURHSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNBUjs7QURHSTtFQUNJLHNDQUFBO0FDQVI7O0FER0k7RUFDSSx1QkFBQTtFQUNBLG1EQUFBO0FDQVI7O0FER0k7RUFDSSxvQ0FBQTtBQ0FSOztBREdJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBUjs7QURHSTtFQUNJLGdCQUFBO0FDQVI7O0FER0k7RUFDSSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDQVI7O0FER0k7RUFDSSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUNBUjs7QURHSTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0FSOztBREdJOzs7O0dBQUE7O0FBS0E7RUFDSSw0QkFBQTtFQUNBLDJCQUFBO0FDQVI7O0FER0k7RUFDSSxnQ0FBQTtBQ0FSOztBREdJO0VBQ0ksdUJBQUE7QUNBUjs7QURJUTtFQUNJLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDRFo7O0FES0k7RUFDSSx3Q0FBQTtFQUNBLGdDQUFBO0FDRlI7O0FES0k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNGUjs7QURLSTtFQUNJLDRCQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLmJhamFyIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvbG9naW4vZm9uZG8ucG5nKSAwIDAvMTAwJSAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAvKiBiYWNrZ3JvdW5kOiNkNGQ3ZGQhaW1wb3J0YW50OyAqL1xuICAgIH1cblxuICAgIC50ZXh0b0F6dWwge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMi41JTtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBjb2xvcjogIzAwYjZhMztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAgICAgICBjb2xvcjogIzA1MGU4YiAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnJvdyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLml0ZW0taW5wdXQ6OmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmluaWNpb1Nlc2lvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDBiNmEzICFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwICNDOEM3Qzc7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICB9XG5cbiAgICAuYWx0bzUwIHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICAgIH1cblxuICAgIC5pdGVtLWlucHV0IGlvbi1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5ub01hcmdpbiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAubm9Mb2dpbiB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwYWRkaW5nOiAuNWVtIDJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDE4MiwgMTY0LCAwLjAyMSk7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgLm5vTG9naW46YWN0aXZlIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDE4MiwgMTY0LCAwLjEwMyk7XG4gICAgfVxuXG4gICAgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgLyogYm9yZGVyLWJvdHRvbTogMC41NXB4IHNvbGlkICNjOGM3Y2MhaW1wb3J0YW50OyAqL1xuICAgIH1cblxuICAgIC5pdGVtLWlvcyB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAudGV4dG9PbHZpZG8ge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjMDBiNmEzOyAqL1xuICAgICAgICBwYWRkaW5nLXRvcDogLjVlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IC41ZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMjg3MTk1O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuY29udGFpbmVySW5wdXRzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjB2aDtcbiAgICB9XG5cbiAgICAucmVnaXN0ZXIge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNDOEM3Qzc7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cblxuICAgIC5yZWdpc3RlckZhY2Vib29rIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMmYyODk1O1xuICAgIH1cblxuICAgIC5jb250YWluZXJCb3RvbmVzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuXG4gICAgLyogICAuY2VudGVye1xuICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9ICovXG4gICAgLm9qbyB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuYWxlcnRjc3Mge1xuICAgICAgICAtLWJhY2tncm91bmQ6ICMwMGI2YTMgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuYWxlcnQtaGVhZCB7XG4gICAgICAgIC0tYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIH1cblxuICAgIC5jb250ZW5lZG9yQ2FiZWNlcmEge1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWxlcnQtd3JhcHBlciB7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzAwYjZhMyAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jZW50cmFySW52aXRhZG8ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgLnNjcm9sbC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICB9IiwiLmJhamFyIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL2xvZ2luL2ZvbmRvLnBuZykgMCAwLzEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgLyogYmFja2dyb3VuZDojZDRkN2RkIWltcG9ydGFudDsgKi9cbn1cblxuLnRleHRvQXp1bCB7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxLjZlbTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDEyLjUlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLnRleHRvQXp1bCBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMGI2YTM7XG59XG5cbmlvbi1pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICBjb2xvcjogIzA1MGU4YiAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1ib3R0b206IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4ucm93IHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuLml0ZW0taW5wdXQ6OmFmdGVyIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uaW5pY2lvU2VzaW9uIHtcbiAgbWFyZ2luLXRvcDogMmVtO1xuICAtLWJhY2tncm91bmQ6ICMwMGI2YTMgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgI0M4QzdDNztcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4uYWx0bzUwIHtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbi5pdGVtLWlucHV0IGlvbi1sYWJlbCB7XG4gIGNvbG9yOiBncmV5O1xuICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ubm9NYXJnaW4ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5ub0xvZ2luIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAuNWVtIDJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDE4MiwgMTY0LCAwLjAyMSk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5ub0xvZ2luOmFjdGl2ZSB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLCAxODIsIDE2NCwgMC4xMDMpO1xufVxuXG4uaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAvKiBib3JkZXItYm90dG9tOiAwLjU1cHggc29saWQgI2M4YzdjYyFpbXBvcnRhbnQ7ICovXG59XG5cbi5pdGVtLWlvcyB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnRleHRvT2x2aWRvIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgIzAwYjZhMzsgKi9cbiAgcGFkZGluZy10b3A6IDAuNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIGhlaWdodDogNDBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjMjg3MTk1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lcklucHV0cyB7XG4gIG1hcmdpbi10b3A6IDIwdmg7XG59XG5cbi5yZWdpc3RlciB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogI0M4QzdDNztcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5yZWdpc3RlckZhY2Vib29rIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMmYyODk1O1xufVxuXG4uY29udGFpbmVyQm90b25lcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4vKiAgIC5jZW50ZXJ7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xufSAqL1xuLm9qbyB7XG4gIHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS4yZW0gIWltcG9ydGFudDtcbn1cblxuLmFsZXJ0Y3NzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBiNmEzICFpbXBvcnRhbnQ7XG59XG5cbi5hbGVydC1oZWFkIHtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5jb250ZW5lZG9yQ2FiZWNlcmEgaW1nIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMzAlO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4uYWxlcnQtd3JhcHBlciB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0MHB4ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogIzAwYjZhMyAhaW1wb3J0YW50O1xufVxuXG4uY2VudHJhckludml0YWRvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_authorization_public_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authorization-public.service */ "./src/app/services/authorization-public.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let LoginPage = class LoginPage {
    constructor(userService, alertCtrl, authPvr, modalCtrl, router) {
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.authPvr = authPvr;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.change = false;
        this.password_type = 'password';
    }
    ngOnInit() {
        /*   this.hora = this.navParams.get('hora');
          this.doctor = this.navParams.get('doctor');
          this.available = this.navParams.get('available'); */
        const auto = localStorage.getItem('authorization');
        if (!auto) {
            this.authPvr.getKey().subscribe(data => {
                this.authPublic = data;
                localStorage.setItem('authorization', this.authPublic.authorization);
                localStorage.setItem('role', this.authPublic.role);
            });
            localStorage.removeItem('idTokenUser');
            localStorage.removeItem('emailUser');
        }
        else {
            return;
        }
        // localStorage.removeItem('authorization');
        // localStorage.removeItem('role');
    }
    startSesion(formulario) {
        this.userService.doSignIn(formulario.value.email.toLowerCase(), formulario.value.password)
            .subscribe(
        /*  if(data.status.error == 400 || data.status.error == 401 || DataCue.status.error == 402 */
        (data) => {
            /* if(data.ok == false){
              this.msg = data.message;
            let alert = this.alertCtrl.create({
              title: 'Error de Login',
              subTitle: `${this.msg}`,
              buttons: ['Volver a intentar']
            });
            alert.present();
            }else{ */
            console.log('data:', data);
            this.msg = "";
            localStorage.setItem('PacienteData', JSON.stringify(data));
            localStorage.setItem('idTokenUser', data.patientId);
            localStorage.setItem('emailUser', formulario.value.email);
            localStorage.setItem('authorization', data.authorization);
            localStorage.setItem('role', data.role);
            localStorage.setItem('patientName', data.patientName);
            localStorage.setItem('image', data.photoUrl);
            // localStorage.setItem('')
            /*         this.events.publish('user:logged', 'logged');
                    this.events.publish('change:foto'); */
            if (!this.hora)
                this.router.navigate(['home']);
            /* this.navCtrl.push(HomePage ) */
            else
                this.router.navigate(['financer', data]);
            /*  this.navCtrl.push(FinancerPage, {hora: this.hora, available: this.available , doctor:this.doctor }); */
            /* } */
        }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(err);
            this.msg = err.error.message;
            const alert = yield this.alertCtrl.create({
                header: 'Error de Login',
                message: `${this.msg}`,
                buttons: ['Volver a intentar']
            });
            yield alert.present();
        }));
    }
    registrarUsuario() {
        /*  if(this.hora !== undefined){
           this.router.navigate(['register'])
           this.navCtrl.setRoot(RegisterPage , {hora: this.hora, available: this.available, doctor: this.doctor, texto: "viene con data"});
         }
         else{
           this.router.navigate(['register']);
           this.navCtrl.push(RegisterPage, {texto: "vienen sin data"});
         } */
        this.router.navigate(['register']);
    }
    goToHome() {
        this.router.navigate(['home']);
        /* this.navCtrl.push(HomePage); */
    }
    goToRecovery() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: "Olvidaste tu contraseña...?",
                message: 'Ingresa tu correo electronico',
                inputs: [
                    {
                        name: 'email',
                        placeholder: 'email',
                        type: 'email'
                    }
                ],
                buttons: [
                    {
                        text: 'Enviar',
                        handler: data => {
                            console.log('enviando correo electronico');
                            let email = data.email;
                            console.log('lo que se almacena en correo:', email);
                            this.userService.sendValidation(email).subscribe(data => {
                                this.datos = data;
                                console.log('this.datos:', this.datos);
                                if (this.datos.result == 'ok') {
                                    let data = JSON.stringify(this.datos);
                                    this.router.navigate(['recovery', data]);
                                    /*  this.navCtrl.push(RecoverycodePage , {
                                       datos:this.datos
                                 }); */
                                }
                                else {
                                    /* const alert = await this.alertCtrl.create({
                                      header:"Correo no valido",
                                      message:`${this.datos.error.message}`,
                                      buttons: ['volver a intentar'],
                                      cssClass: 'alertcss'
                                  })
                                  await alert.present() */
                                    console.log('correo no valido levantar un alert o pintar un mensaje');
                                }
                            });
                        }
                    }
                ]
            });
            yield alert.present();
            /* this.navCtrl.push(RecoveryPage); */
            /* let modal = this.modalCtrl.create(LossPage, {
             dato:"1"
            });
            modal.present(); */
        });
    }
    changeType() {
        // cambie el password type
        this.password_type = this.password_type === 'text' ? 'password' : 'text';
    }
    registrarUsuarioFacebook() {
        this.router.navigate(['faceform']);
        /* this.navCtrl.push(PagesFaceformPage); */
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_authorization_public_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationPublicService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map