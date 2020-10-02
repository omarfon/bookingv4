(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pay-pay-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pay/pay.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pay/pay.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button menu=\"first\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Pago</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <h3 class=\"titleCardPago\">Lo que has escogido hasta el momento</h3>\n    <div class=\"container-gris\">\n        <div class=\"containerResumen\">\n            <ion-card class=\"CardDatosServicio\">\n                <h3 class=\"tituloConsulta\" *ngIf=\"hora.params.provisionId[0] === 44\">CONSULTA EXTERNA</h3>\n                <h3 class=\"tituloTeleOri\" *ngIf=\"hora.params.provisionId[0] === 845337\">TELEORIENTACION</h3>\n                <div>\n                    <ion-row class=\"centrar\">\n                        <ion-col size=\"4\">\n                            <img id=\"profile-image\" src=\"{{SERVERImage}}{{doctor.id}}.png\"\n                                (error)=\"errorHandler($event)\">\n\n                        </ion-col>\n                        <ion-col size=\"8\">\n                            <h3 class=\"nombreDoctor\" text-center>\n                                {{ doctor.fullname }}\n                            </h3>\n                            <div class=\"sedeContainer\">\n                                <!-- <p bold class=\"izquierda\">Sede:</p> -->\n                                <!-- <p class=\"sede\" type=\"text\" disabled=\"true\">Mendiola</p> -->\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </div>\n                <div *ngIf=\"depe\" class=\"centrar\">\n                    <p class=\"izquierda\">Cita reservada para:</p>\n                    <p class=\"blue grande\" item-end type=\"text\" disabled=\"true\">\n                        {{ depe.name}}\n                    </p>\n                </div>\n                <div class=\"centrar\">\n                    <p class=\"izquierda\">Especialidad:</p>\n                    <p item-end class=\"blue\" disabled=\"true\"> {{ doctor.service.description }}</p>\n                </div>\n                <div class=\"centrar\">\n                    <p class=\"izquierda\">Fecha:</p>\n                    <p item-end class=\"blue altas\" disabled=\"true\">\n                        {{ available | date:'EEEE d De MMMM' : 'es' }}\n                    </p>\n                </div>\n                <div class=\"centrar\">\n                    <p class=\"izquierda\">Hora:</p>\n                    <p class=\"blue\" type=\"text\" disabled=\"true\">\n                        {{ hora.hour | slice:0:5}}\n                    </p>\n                </div>\n                <div class=\"centrar\">\n                    <p class=\"izquierda\">Costo:</p>\n                    <p class=\"blue\" item-end type=\"text\" disabled=\"true\">\n                        S/.{{ price }}\n                    </p>\n                </div>\n\n            </ion-card>\n        </div>\n\n        <hr class=\"linea\">\n        <div>\n            <h4 class=\"tituloPagos\">Escoge la forma en la que vas a pagar y listo...</h4>\n            <ion-row>\n                <ion-col size=\"6\">\n                    <ion-button *ngIf=\"!depe && hora.params.provisionId[0] == 44\" color=\"primary\" class=\"botonAccept\"\n                        block (click)=\"next()\">\n                        <ion-row>\n                            <ion-col size=\"12\" class=\"botonEfectivo\">\n                                <img class=\"iconosImagenes\" src=\"assets/imgs/cobro/efectivo.png\" alt=\"\">\n                            </ion-col>\n                            <ion-col size=\"12\">\n                                <p>Pago en Local</p>\n                            </ion-col>\n                        </ion-row>\n                    </ion-button>\n                    <ion-button *ngIf=\"depe && hora.params.provisionId[0] == 44\" color=\"primary\" class=\"botonAccept\"\n                        block (click)=\"nextDepe()\">\n                        <ion-row>\n                            <ion-col size=\"12\">\n                                <img class=\"iconosImagenes\" src=\"assets/imgs/cobro/efectivo.png\" alt=\"\">\n                            </ion-col>\n                            <ion-col size=\"12\">\n                                <p>pago en local </p>\n                            </ion-col>\n                        </ion-row>\n                    </ion-button>\n\n                </ion-col>\n\n                <ion-col size=\"6\" *ngIf=\"hora.params.provisionId[0] == 44\">\n                    <ion-button *ngIf=\"payCulqiCharges == true \" color=\"secondary\" class=\"botonAccept\" block\n                        (click)=\"payCulqi()\">\n                        <ion-row>\n                            <ion-col size=\"12\" class=\"botonTarjeta\">\n                                <img class=\"iconosImagenes\" src=\"assets/imgs/cobro/tarjeta.png\" alt=\"\">\n                            </ion-col>\n                            <ion-col size=\"12\">\n                                <p>Pago con tarjeta</p>\n                            </ion-col>\n                        </ion-row>\n                    </ion-button>\n                    <ion-button *ngIf=\"retrying == true\" color=\"secondary\" class=\"botonAccept\" block (click)=\"retry()\">\n                        <ion-row>\n                            <ion-col size=\"12\" class=\"botonTarjeta\">\n                                <img class=\"iconosImagenes\" src=\"assets/imgs/cobro/tarjeta.png\" alt=\"\">\n                            </ion-col>\n                            <ion-col size=\"12\">\n                                <p>Reintentar Pago</p>\n                            </ion-col>\n                        </ion-row>\n                    </ion-button>\n                </ion-col>\n                <ion-col size=\"12\" *ngIf=\"hora.params.provisionId[0] == 845337\">\n                    <ion-button *ngIf=\"payCulqiCharges == true\" color=\"secondary\" class=\"botonAccept\" block\n                        (click)=\"payCulqi()\">\n                        <ion-row>\n                            <ion-col size=\"12\" class=\"botonTarjeta\">\n                                <img class=\"iconosImagenes\" src=\"assets/imgs/cobro/tarjeta.png\" alt=\"\">\n                            </ion-col>\n                            <ion-col size=\"12\">\n                                <p>Pago con tarjeta</p>\n                            </ion-col>\n                        </ion-row>\n                    </ion-button>\n                    <ion-button *ngIf=\"retrying == true\" color=\"secondary\" class=\"botonAccept\" block (click)=\"retry()\">\n                        <ion-row>\n                            <ion-col size=\"12\" class=\"botonTarjeta\">\n                                <img class=\"iconosImagenes\" src=\"assets/imgs/cobro/tarjeta.png\" alt=\"\">\n                            </ion-col>\n                            <ion-col size=\"12\">\n                                <p>Reintentar Pago</p>\n                            </ion-col>\n                        </ion-row>\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n        </div>\n    </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/pay/pay-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/pay/pay-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PayPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPageRoutingModule", function() { return PayPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pay_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pay.page */ "./src/app/pages/pay/pay.page.ts");




const routes = [
    {
        path: '',
        component: _pay_page__WEBPACK_IMPORTED_MODULE_3__["PayPage"]
    }
];
let PayPageRoutingModule = class PayPageRoutingModule {
};
PayPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PayPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/pay/pay.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/pay/pay.module.ts ***!
  \*****************************************/
/*! exports provided: PayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPageModule", function() { return PayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pay_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pay-routing.module */ "./src/app/pages/pay/pay-routing.module.ts");
/* harmony import */ var _pay_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pay.page */ "./src/app/pages/pay/pay.page.ts");







let PayPageModule = class PayPageModule {
};
PayPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pay_routing_module__WEBPACK_IMPORTED_MODULE_5__["PayPageRoutingModule"]
        ],
        declarations: [_pay_page__WEBPACK_IMPORTED_MODULE_6__["PayPage"]]
    })
], PayPageModule);



/***/ }),

/***/ "./src/app/pages/pay/pay.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/pay/pay.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f1f3f8;\n}\n\n.visa {\n  background-repeat: no-repeat;\n  background-position: center;\n  /* background-image: url('./../../assets/img/card/visa.png'); */\n}\n\n.mastercard {\n  background-repeat: no-repeat;\n  background-position: center;\n  /*  background-image: url('./../../assets/img/card/mastercard.gif'); */\n}\n\n.parrafoFinanciador {\n  color: #062F51;\n  text-align: center;\n  margin-bottom: 2em;\n  font-size: 1.2em;\n  font-weight: 300;\n  padding-top: 1em;\n  width: 90%;\n  margin-left: 5%;\n}\n\n.seguroList {\n  width: 90% !important;\n  margin-left: 5% !important;\n}\n\n.evaluate {\n  --background: #fff !important;\n  width: 90%;\n  margin-left: 5%;\n  border: none !important;\n  border-bottom: 0.5px solid #D8D8D8 !important;\n  height: auto;\n}\n\n.evaluate p {\n  color: #00B6A3;\n  font-size: 1.2em;\n  font-weight: 400;\n  margin-top: 8px;\n  text-transform: capitalize;\n}\n\n.item-md,\n.item-ios {\n  color: #9B9B9B;\n  font-size: 1em;\n  --background: none;\n}\n\n.button.segment-activated {\n  border-bottom: 1px solid #979797;\n}\n\n.item-md-light,\n.item-divider-md-light,\n.item-ios-light,\n.item-divider-ios-light {\n  --background: #fff;\n}\n\n.paymenyquestion {\n  margin-top: 3em;\n}\n\n.tiny {\n  font-size: 0.9em;\n}\n\n.cajagris {\n  --background: #9B9B9B;\n  height: 100% !important;\n}\n\n.pagoEfectivo {\n  color: #9B9B9B;\n  font-size: 1em;\n  font-style: italic;\n  margin-bottom: 5em;\n  text-align: center;\n  width: 90%;\n  margin-left: 5%;\n  margin-top: 1em;\n}\n\n.tituloPagos {\n  color: #062F51;\n  width: 80%;\n  text-align: center;\n  margin-left: 10%;\n  margin-top: 10px !important;\n  font-size: 1.2em;\n  padding-top: 1em;\n  font-weight: 200;\n}\n\n.tituloMetodos {\n  color: #9B9B9B;\n  padding-top: 1em;\n  font-weight: 300;\n  text-align: center;\n  margin-top: 0 !important;\n}\n\n.container-gris {\n  background-color: #F3F6F6;\n  height: 100%;\n  padding-bottom: 1.5em;\n}\n\n.precio {\n  margin-right: 20px;\n  color: #062F51;\n  margin-bottom: 3em;\n  font-size: 1.1em;\n  font-weight: 500;\n}\n\n.list-ios > .item-block:last-child {\n  border-bottom: none;\n}\n\n.item-md.item-block .item-inner {\n  margin-bottom: 5px;\n}\n\n.item-md {\n  margin-bottom: 5px;\n}\n\n.list-md .item-block .item-inner,\n.item-md.item-block .item-inner {\n  border-bottom: none;\n}\n\n.botonAccept {\n  height: 120px !important;\n  /* margin-top:-10px; */\n  width: 90%;\n  margin-left: 5%;\n}\n\n.segment-md .segment-button {\n  border-bottom: none;\n}\n\n.segment-md .segment-button.activated,\n.segment-md .segment-button.segment-activated {\n  color: #00B6A3;\n  border-bottom: 1px solid #00B6A3;\n}\n\n.nombreDoctor {\n  color: #00B6A3;\n  font-size: 1.3em;\n  text-align: right !important;\n  margin-right: 20px;\n}\n\n.blue {\n  color: #979797;\n  font-weight: 600;\n  text-align: right;\n  margin-right: 20px !important;\n}\n\nion-label {\n  margin-top: 5px !important;\n  margin-bottom: 5px !important;\n}\n\nimg {\n  width: 100px;\n  margin-left: calc(50% - 50px);\n}\n\n.resumen {\n  padding-bottom: 1em;\n}\n\n.centrar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 5px;\n}\n\n.centrar .izquierda {\n  color: #062F51;\n  margin-left: 20px;\n}\n\n.containerTextoPago {\n  background: #007198;\n}\n\n.containerTextoPago h3 {\n  color: #fff !important;\n  font-weight: 400;\n  padding: 10px 0;\n  margin-top: 0;\n  font-size: 1.1em;\n  text-align: center;\n}\n\n.sedeContainer {\n  text-align: right;\n}\n\n.sede {\n  color: #062F51;\n  font-size: 1.4em;\n  margin-right: 20px;\n}\n\n.containerResumen {\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n\n.altas {\n  text-transform: capitalize;\n}\n\n.grande {\n  font-size: 1.3em;\n  color: #00B6A3;\n}\n\n.CardDatosServicio {\n  border-top-right-radius: 25px;\n}\n\n.titleCardPago {\n  color: #062F51;\n  padding: 0.3em 0;\n  text-align: center;\n  font-size: 1.2em;\n  margin-bottom: -15px;\n}\n\n.linea {\n  border-style: double;\n  border-color: #007198;\n  border: 1px;\n  margin-top: 10px !important;\n}\n\n.iconosImagenes {\n  text-align: center;\n  width: 60px;\n  height: auto;\n}\n\n.botonTarjeta,\n.botonEfectivo {\n  text-align: center !important;\n}\n\n.tituloTeleOri {\n  font-weight: 400;\n  font-size: 1.5em;\n  background: #062F51;\n  color: #fff;\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 0.5em 0;\n}\n\n.tituloConsulta {\n  font-weight: 400;\n  font-size: 1.5em;\n  background: #062F51;\n  color: #fff;\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 0.5em 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbWFyL3Byb3llY3Rvcy9EZXYvYm9va2luZ3Y0L3NyYy9hcHAvcGFnZXMvcGF5L3BheS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BheS9wYXkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0kscUJBQUE7QUNDUjs7QURFSTtFQUNJLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrREFBQTtBQ0NSOztBREVJO0VBQ0ksNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNFQUFBO0FDQ1I7O0FERUk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDQ1I7O0FERUk7RUFDSSxxQkFBQTtFQUNBLDBCQUFBO0FDQ1I7O0FERUk7RUFDSSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLFlBQUE7QUNDUjs7QURDUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FDQ1o7O0FER0k7O0VBRUksY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0FSOztBRElJO0VBQ0ksZ0NBQUE7QUNEUjs7QURJSTs7OztFQUlJLGtCQUFBO0FDRFI7O0FESUk7RUFDSSxlQUFBO0FDRFI7O0FESUk7RUFDSSxnQkFBQTtBQ0RSOztBRElJO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtBQ0RSOztBRElJO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNEUjs7QURJSTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDRFI7O0FESUk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUNEUjs7QURJSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDRFI7O0FESUk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNEUjs7QURJSTtFQUNJLG1CQUFBO0FDRFI7O0FESUk7RUFDSSxrQkFBQTtBQ0RSOztBRElJO0VBQ0ksa0JBQUE7QUNEUjs7QURJSTs7RUFFSSxtQkFBQTtBQ0RSOztBRElJO0VBQ0ksd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDRFI7O0FESUk7RUFDSSxtQkFBQTtBQ0RSOztBRElJOztFQUVJLGNBQUE7RUFDQSxnQ0FBQTtBQ0RSOztBRElJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQ0RSOztBRElJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQ0RSOztBRElJO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtBQ0RSOztBRElJO0VBQ0ksWUFBQTtFQUNBLDZCQUFBO0FDRFI7O0FESUk7RUFDSSxtQkFBQTtBQ0RSOztBREtJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQ0ZSOztBRElRO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDRlo7O0FETUk7RUFDSSxtQkFBQTtBQ0hSOztBREtRO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0haOztBRE9JO0VBQ0ksaUJBQUE7QUNKUjs7QURPSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSlI7O0FET0k7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDSlI7O0FET0k7RUFDSSwwQkFBQTtBQ0pSOztBRE9JO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDSlI7O0FET0k7RUFDSSw2QkFBQTtBQ0pSOztBRE9JO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDSlI7O0FET0k7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FDSlI7O0FET0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSlI7O0FET0k7O0VBRUksNkJBQUE7QUNKUjs7QURPSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0pSOztBRE9JO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDSlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXkvcGF5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICBpb24tY29udGVudCB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2YxZjNmODtcbiAgICB9XG5cbiAgICAudmlzYSB7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLy4uLy4uL2Fzc2V0cy9pbWcvY2FyZC92aXNhLnBuZycpOyAqL1xuICAgIH1cblxuICAgIC5tYXN0ZXJjYXJkIHtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAvKiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLy4uLy4uL2Fzc2V0cy9pbWcvY2FyZC9tYXN0ZXJjYXJkLmdpZicpOyAqL1xuICAgIH1cblxuICAgIC5wYXJyYWZvRmluYW5jaWFkb3Ige1xuICAgICAgICBjb2xvcjogIzA2MkY1MTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxZW07XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICB9XG5cbiAgICAuc2VndXJvTGlzdCB7XG4gICAgICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmV2YWx1YXRlIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IC41cHggc29saWQgI0Q4RDhEOCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogIzAwQjZBMztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaXRlbS1tZCxcbiAgICAuaXRlbS1pb3Mge1xuICAgICAgICBjb2xvcjogIzlCOUI5QjtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5Nzk3OTc7XG4gICAgfVxuXG4gICAgLmJ1dHRvbi5zZWdtZW50LWFjdGl2YXRlZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTc5Nzk3O1xuICAgIH1cblxuICAgIC5pdGVtLW1kLWxpZ2h0LFxuICAgIC5pdGVtLWRpdmlkZXItbWQtbGlnaHQsXG4gICAgLml0ZW0taW9zLWxpZ2h0LFxuICAgIC5pdGVtLWRpdmlkZXItaW9zLWxpZ2h0IHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgIH1cblxuICAgIC5wYXltZW55cXVlc3Rpb24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAzZW07XG4gICAgfVxuXG4gICAgLnRpbnkge1xuICAgICAgICBmb250LXNpemU6IC45ZW07XG4gICAgfVxuXG4gICAgLmNhamFncmlzIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjOUI5QjlCO1xuICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucGFnb0VmZWN0aXZvIHtcbiAgICAgICAgY29sb3I6ICM5QjlCOUI7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICB9XG5cbiAgICAudGl0dWxvUGFnb3Mge1xuICAgICAgICBjb2xvcjogIzA2MkY1MTtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIHBhZGRpbmctdG9wOiAxZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgfVxuXG4gICAgLnRpdHVsb01ldG9kb3Mge1xuICAgICAgICBjb2xvcjogIzlCOUI5QjtcbiAgICAgICAgcGFkZGluZy10b3A6IDFlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lci1ncmlzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjZGNjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgfVxuXG4gICAgLnByZWNpbyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6ICMwNjJGNTE7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICAubGlzdC1pb3M+Lml0ZW0tYmxvY2s6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuXG4gICAgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICAuaXRlbS1tZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICAubGlzdC1tZCAuaXRlbS1ibG9jayAuaXRlbS1pbm5lcixcbiAgICAuaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG5cbiAgICAuYm90b25BY2NlcHQge1xuICAgICAgICBoZWlnaHQ6IDEyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC8qIG1hcmdpbi10b3A6LTEwcHg7ICovXG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICB9XG5cbiAgICAuc2VnbWVudC1tZCAuc2VnbWVudC1idXR0b24ge1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cblxuICAgIC5zZWdtZW50LW1kIC5zZWdtZW50LWJ1dHRvbi5hY3RpdmF0ZWQsXG4gICAgLnNlZ21lbnQtbWQgLnNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYWN0aXZhdGVkIHtcbiAgICAgICAgY29sb3I6ICMwMEI2QTM7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDBCNkEzO1xuICAgIH1cblxuICAgIC5ub21icmVEb2N0b3Ige1xuICAgICAgICBjb2xvcjogIzAwQjZBMztcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIH1cblxuICAgIC5ibHVlIHtcbiAgICAgICAgY29sb3I6ICM5Nzk3OTc7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLSA1MHB4KTtcbiAgICB9XG5cbiAgICAucmVzdW1lbiB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgLmNlbnRyYXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcblxuICAgICAgICAuaXpxdWllcmRhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDYyRjUxO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGFpbmVyVGV4dG9QYWdvIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwNzE5ODtcblxuICAgICAgICBoMyB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNlZGVDb250YWluZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG5cbiAgICAuc2VkZSB7XG4gICAgICAgIGNvbG9yOiAjMDYyRjUxO1xuICAgICAgICBmb250LXNpemU6IDEuNGVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lclJlc3VtZW4ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIH1cblxuICAgIC5hbHRhcyB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cblxuICAgIC5ncmFuZGUge1xuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICBjb2xvcjogIzAwQjZBMztcbiAgICB9XG5cbiAgICAuQ2FyZERhdG9zU2VydmljaW8ge1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgICB9XG5cbiAgICAudGl0bGVDYXJkUGFnbyB7XG4gICAgICAgIGNvbG9yOiAjMDYyRjUxO1xuICAgICAgICBwYWRkaW5nOiAuM2VtIDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XG4gICAgfVxuXG4gICAgLmxpbmVhIHtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBkb3VibGU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzE5ODtcbiAgICAgICAgYm9yZGVyOiAxcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaWNvbm9zSW1hZ2VuZXMge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgLmJvdG9uVGFyamV0YSxcbiAgICAuYm90b25FZmVjdGl2byB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC50aXR1bG9UZWxlT3JpIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgYmFja2dyb3VuZDogIzA2MkY1MTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgcGFkZGluZzogLjVlbSAwO1xuICAgIH1cblxuICAgIC50aXR1bG9Db25zdWx0YSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgIGJhY2tncm91bmQ6ICMwNjJGNTE7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IC41ZW0gMDtcbiAgICB9IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmMWYzZjg7XG59XG5cbi52aXNhIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vLi4vLi4vYXNzZXRzL2ltZy9jYXJkL3Zpc2EucG5nJyk7ICovXG59XG5cbi5tYXN0ZXJjYXJkIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAvKiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLy4uLy4uL2Fzc2V0cy9pbWcvY2FyZC9tYXN0ZXJjYXJkLmdpZicpOyAqL1xufVxuXG4ucGFycmFmb0ZpbmFuY2lhZG9yIHtcbiAgY29sb3I6ICMwNjJGNTE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nLXRvcDogMWVtO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5zZWd1cm9MaXN0IHtcbiAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNSUgIWltcG9ydGFudDtcbn1cblxuLmV2YWx1YXRlIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNEOEQ4RDggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmV2YWx1YXRlIHAge1xuICBjb2xvcjogIzAwQjZBMztcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLml0ZW0tbWQsXG4uaXRlbS1pb3Mge1xuICBjb2xvcjogIzlCOUI5QjtcbiAgZm9udC1zaXplOiAxZW07XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmJ1dHRvbi5zZWdtZW50LWFjdGl2YXRlZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTc5Nzk3O1xufVxuXG4uaXRlbS1tZC1saWdodCxcbi5pdGVtLWRpdmlkZXItbWQtbGlnaHQsXG4uaXRlbS1pb3MtbGlnaHQsXG4uaXRlbS1kaXZpZGVyLWlvcy1saWdodCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnBheW1lbnlxdWVzdGlvbiB7XG4gIG1hcmdpbi10b3A6IDNlbTtcbn1cblxuLnRpbnkge1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuXG4uY2FqYWdyaXMge1xuICAtLWJhY2tncm91bmQ6ICM5QjlCOUI7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ucGFnb0VmZWN0aXZvIHtcbiAgY29sb3I6ICM5QjlCOUI7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbi1ib3R0b206IDVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuLnRpdHVsb1BhZ29zIHtcbiAgY29sb3I6ICMwNjJGNTE7XG4gIHdpZHRoOiA4MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBwYWRkaW5nLXRvcDogMWVtO1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4udGl0dWxvTWV0b2RvcyB7XG4gIGNvbG9yOiAjOUI5QjlCO1xuICBwYWRkaW5nLXRvcDogMWVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lci1ncmlzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjZGNjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMS41ZW07XG59XG5cbi5wcmVjaW8ge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjMDYyRjUxO1xuICBtYXJnaW4tYm90dG9tOiAzZW07XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5saXN0LWlvcyA+IC5pdGVtLWJsb2NrOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uaXRlbS1tZCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmxpc3QtbWQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIsXG4uaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmJvdG9uQWNjZXB0IHtcbiAgaGVpZ2h0OiAxMjBweCAhaW1wb3J0YW50O1xuICAvKiBtYXJnaW4tdG9wOi0xMHB4OyAqL1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5zZWdtZW50LW1kIC5zZWdtZW50LWJ1dHRvbiB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5zZWdtZW50LW1kIC5zZWdtZW50LWJ1dHRvbi5hY3RpdmF0ZWQsXG4uc2VnbWVudC1tZCAuc2VnbWVudC1idXR0b24uc2VnbWVudC1hY3RpdmF0ZWQge1xuICBjb2xvcjogIzAwQjZBMztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMEI2QTM7XG59XG5cbi5ub21icmVEb2N0b3Ige1xuICBjb2xvcjogIzAwQjZBMztcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uYmx1ZSB7XG4gIGNvbG9yOiAjOTc5Nzk3O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLSA1MHB4KTtcbn1cblxuLnJlc3VtZW4ge1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xufVxuXG4uY2VudHJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmNlbnRyYXIgLml6cXVpZXJkYSB7XG4gIGNvbG9yOiAjMDYyRjUxO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmNvbnRhaW5lclRleHRvUGFnbyB7XG4gIGJhY2tncm91bmQ6ICMwMDcxOTg7XG59XG4uY29udGFpbmVyVGV4dG9QYWdvIGgzIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBmb250LXNpemU6IDEuMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWRlQ29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5zZWRlIHtcbiAgY29sb3I6ICMwNjJGNTE7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmNvbnRhaW5lclJlc3VtZW4ge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uYWx0YXMge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmdyYW5kZSB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGNvbG9yOiAjMDBCNkEzO1xufVxuXG4uQ2FyZERhdG9zU2VydmljaW8ge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcbn1cblxuLnRpdGxlQ2FyZFBhZ28ge1xuICBjb2xvcjogIzA2MkY1MTtcbiAgcGFkZGluZzogMC4zZW0gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAtMTVweDtcbn1cblxuLmxpbmVhIHtcbiAgYm9yZGVyLXN0eWxlOiBkb3VibGU7XG4gIGJvcmRlci1jb2xvcjogIzAwNzE5ODtcbiAgYm9yZGVyOiAxcHg7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmljb25vc0ltYWdlbmVzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uYm90b25UYXJqZXRhLFxuLmJvdG9uRWZlY3Rpdm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLnRpdHVsb1RlbGVPcmkge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBiYWNrZ3JvdW5kOiAjMDYyRjUxO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAwLjVlbSAwO1xufVxuXG4udGl0dWxvQ29uc3VsdGEge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBiYWNrZ3JvdW5kOiAjMDYyRjUxO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAwLjVlbSAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/pay/pay.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pay/pay.page.ts ***!
  \***************************************/
/*! exports provided: PayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPage", function() { return PayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_appoinment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/appoinment.service */ "./src/app/services/appoinment.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_crudparent_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/crudparent.service */ "./src/app/services/crudparent.service.ts");
/* harmony import */ var src_app_services_culqi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/culqi.service */ "./src/app/services/culqi.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









let PayPage = class PayPage {
    constructor(fb, alertCtrl, modalCtrl, appointmentProvider, actionSheet, loadingCtrl, crudPvr, culqiPvr, router, routes) {
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.appointmentProvider = appointmentProvider;
        this.actionSheet = actionSheet;
        this.loadingCtrl = loadingCtrl;
        this.crudPvr = crudPvr;
        this.culqiPvr = culqiPvr;
        this.router = router;
        this.routes = routes;
        this.currentAppointment = null;
        this.payCulqiCharges = true;
        this.retrying = false;
        this.nots = [
            { "id": "1", "name": "En local" },
            { "id": "2", "name": "Con tarjeta" },
        ];
        this.SERVERImage = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["API_IMAGES"];
        this.desactivadoBoton = true;
        this.desactivadoBotonLocal = true;
        const data = this.routes.snapshot.paramMap.get('datos');
        this.dataArmada = JSON.parse(data);
        console.log(this.dataArmada);
    }
    ngOnInit() {
        window['culqi'] = this.culqi.bind(this);
        this.desactivadoBoton = true;
        this.desactivadoBotonLocal = true;
        /*  this.culqiData = JSON.parse(localStorage.getItem('culqiData')); */
        /* console.log('culqi guardada en local', localStorage.getItem('culqiData')); */
        this.pago = 'enLocal';
        this.doctor = this.dataArmada.doctor;
        this.available = this.dataArmada.available;
        this.hora = this.dataArmada.hora;
        this.depe = this.dataArmada.depe;
        this.prestacion = this.hora.params.provisionId[0];
        console.log('this.hora:', this.hora);
        console.log('this.depe:', this.depe);
        /* this.depe = this.navParams.get('depe'); */
        this.price = this.dataArmada.price;
        console.log('this.price:', this.price);
        /* this.prestacion = this.navParams.get('prestacion'); */
        console.log('this.prestacion:', this.prestacion);
        this.subida = this.hora.listjson;
        this.plan = this.dataArmada.plan;
        console.log('la hora', this.plan, this.plan);
        /* window['Culqi'].publicKey = 'pk_live_CyArY9ygzb0d7oZb'; */
        window['Culqi'].publicKey = 'pk_test_e85SD7RVrWlW0u7z';
    }
    errorHandler(event) {
        event.target.src = "https://1.bp.blogspot.com/-p8EFlkXywyE/UDZvWTyr1bI/AAAAAAAAEU0/xL8pmKN1KOY/s1600/facebook.png";
    }
    formPre() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: "Creación de cita",
                message: "la cita que reservaste ha sido creada satisfactoriamente.",
                buttons: [
                    {
                        text: "OK",
                        role: 'cancel'
                    }
                ]
            });
            yield alert.present();
        });
    }
    dateValid(month, year) {
        return (group) => {
            let date = new Date();
            let monthInput = group.controls[month];
            let yearInput = group.controls[year];
            if (yearInput.value == date.getFullYear())
                if (monthInput.value < ("0" + (date.getMonth() + 1)).slice(-2))
                    return monthInput.setErrors({ notEquivalent: true });
        };
    }
    /*   deleteDate() {
        this.appointmentProvider.destroyAppointment(this.currentAppointment).subscribe(data => {
          console.log('destruyendo cita', data)
        })
      } */
    payCulqi() {
        this.desactivadoBoton = false;
        console.log('this.price:', this.plan);
        if (this.currentAppointment) {
            this.payCulqiCharges = true;
            this.openCulqi();
            return;
        }
        if (this.depe) {
            let id = this.depe._id;
            /* let id = this.depe.patientId; */
            let provisionId = this.hora.params.provisionId;
            console.log('provisionId ', provisionId);
            this.crudPvr.createParentDate(this.subida, id, provisionId)
                .subscribe((data) => {
                this.currentAppointment = data;
                this.patientId = this.currentAppointment.patientId;
                this.appointmentId = this.currentAppointment.appointmentId;
                this.checkStatusParent();
                console.log('creacion de cita para familiar', this.currentAppointment);
                this.openCulqi();
            }, err => {
                if (this.currentAppointment !== null) {
                    this.openCulqi();
                    return;
                }
                console.log('err', err);
                if (!err) {
                    return;
                }
                const code = err.error.data.errorCode;
                let alert;
                switch (code) {
                    case 15006:
                        // case 15035:
                        alert = this.alertCtrl.create({
                            header: 'Aviso al Cliente',
                            message: 'Ya tienes una cita en una hora cercana a esta.',
                            buttons: [
                                {
                                    text: 'Buscar otra hora',
                                    handler: data => {
                                        this.router.navigate(['card']);
                                        /* this.navCtrl.setRoot(CardPage); */
                                    }
                                }
                            ]
                        });
                        alert.present();
                        break;
                    case 15009:
                    case 15035:
                        alert = this.alertCtrl.create({
                            header: 'Aviso al Cliente',
                            message: 'El horario escogido ya fue tomado .',
                            buttons: [
                                {
                                    text: 'Buscar otra hora',
                                    handler: data => {
                                        this.router.navigate(['card']);
                                        /*                         this.navCtrl.setRoot(CardPage); */
                                    }
                                }
                            ],
                        });
                        alert.present();
                        break;
                    default:
                        break;
                }
            });
        }
        else {
            let provisionId = this.hora.params.provisionId;
            this.appointmentProvider.createAppointment(this.subida, provisionId)
                .subscribe((data) => {
                this.currentAppointment = data;
                this.appointmentId = this.currentAppointment.appointmentId;
                this.checkStatus();
                console.log('creando cita para paciente principal:', this.currentAppointment);
                this.openCulqi();
            }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (this.currentAppointment !== null) {
                    this.openCulqi();
                    return;
                }
                console.log('err', err);
                if (!err) {
                    return;
                }
                const code = err.error.help;
                const alert = yield this.alertCtrl.create({
                    header: 'Error en la creación',
                    subHeader: `${code}`,
                    buttons: [
                        {
                            text: 'buscar otra',
                            handler: () => {
                                this.router.navigate(['options']);
                            }
                        },
                        {
                            text: 'Salir',
                            handler: () => {
                                this.router.navigate(['home']);
                            }
                        }
                    ]
                });
                yield alert.present();
            }));
        }
    }
    createDateFinal() {
        let provisionId = this.hora.params.provisionId;
        this.appointmentProvider.createAppointment(this.subida, provisionId)
            .subscribe((data) => {
            this.currentAppointment = data;
            console.log('creando cita para paciente principal:', this.currentAppointment);
            this.openCulqi();
        }, err => {
            if (this.currentAppointment !== null) {
                return;
            }
        });
    }
    openCulqi() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loadingPago = yield this.loadingCtrl.create({
                message: "Haciendo el cobro...",
            });
            yield loadingPago.present();
            let appointment = this.currentAppointment;
            if (this.currentAppointment) {
                console.log('this.plan', this.plan);
                const settings = {
                    title: this.plan.plan_desc,
                    description: this.plan.precio[0].prest_item_desc,
                    currency: "PEN",
                    amount: this.price * 100
                };
                window['Culqi'].options({
                    style: {
                        logo: 'https://api.aviva.pe/logo_aviva.png'
                    }
                });
                window['Culqi'].settings(settings);
                console.log("open Culqi en settings:", settings);
                const metadata = {
                    patientId: this.currentAppointment.patient.id,
                    appointmentId: this.currentAppointment.appointmentId,
                    planId: this.plan.plan_pk,
                    precioSinIGV: this.plan.precio[0].prest_precio_val,
                    precioConIGV: this.plan.precio[0].total
                };
                console.log('metadata:', metadata);
                window['Culqi'].open();
                this.i = setInterval(() => {
                    const culqiObj = window['Culqi'];
                    console.log('culqiObj:', culqiObj);
                    if (culqiObj['closeEvent'] != null) {
                        console.log('Formulario culqi cerrado', culqiObj['closeEvent']);
                        clearInterval(this.i);
                        clearInterval(this.check);
                        loadingPago.dismiss();
                    }
                    if (culqiObj['error'] != undefined) {
                        console.log('Formulario culqi error', culqiObj['error']);
                        /* this.deleteDate(); */
                        clearInterval(this.i);
                        clearInterval(this.check);
                        this.loadingCtrl.dismiss();
                    }
                }, 30000);
                loadingPago.dismiss();
            }
        });
    }
    checkStatus() {
        this.check = setInterval(() => {
            this.appointmentProvider.chekstatusAppointment(this.appointmentId).subscribe((status) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log({ status });
                if (status.status === "pendiente") {
                    console.log('sigue pendiente');
                }
                else if (status.status === 'confirmada') {
                    clearInterval(this.check);
                    clearInterval(this.i);
                }
                else {
                    window['Culqi'].close();
                    const alert = yield this.alertCtrl.create({
                        header: 'Problema de Creación',
                        subHeader: 'El tiempo para pago se ha agotado',
                        buttons: [
                            {
                                text: 'intentar de nuevo',
                                handler: () => {
                                    this.router.navigate(['options']);
                                }
                            }
                        ]
                    });
                    yield alert.present();
                    clearInterval(this.check);
                    clearInterval(this.i);
                }
            }));
        }, 30000);
    }
    checkStatusParent() {
        const userId = this.currentAppointment.patient.id;
        const appointmentId = this.currentAppointment.appointmentId;
        this.check = setInterval(() => {
            this.appointmentProvider.chekstatusAppointmentParent(userId, appointmentId).subscribe((status) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log({ status });
                if (status.status === "pendiente") {
                    console.log('sigue pendiente');
                }
                else {
                    window['Culqi'].close();
                    const alert = yield this.alertCtrl.create({
                        header: 'Problema de Creación',
                        subHeader: 'El tiempo para pago se ha agotado',
                        buttons: [
                            {
                                text: 'intentar de nuevo',
                                handler: () => {
                                    this.router.navigate(['options']);
                                }
                            }
                        ]
                    });
                    yield alert.present();
                    clearInterval(this.check);
                    clearInterval(this.i);
                }
            }));
        }, 30000);
    }
    confirmCreate(appointmentId) {
        this.appointmentProvider.confirmDate(appointmentId).subscribe(confirm => {
            console.log({ confirm });
        });
    }
    confirmCreateParent(patientId, appointmentId) {
        this.appointmentProvider.confirmDateParent(patientId, appointmentId).subscribe(confirm => {
            console.log({ confirm });
        });
    }
    culqi() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('culqi del componente', this);
            if (window['Culqi'].token) {
                const getSettings = window['Culqi'].getSettings;
                const metadata = {
                    patientId: this.currentAppointment.patient.id,
                    appointmentId: this.currentAppointment.appointmentId,
                    planId: this.plan.plan_pk,
                    precioSinIGV: this.plan.precio[0].prest_precio_val,
                    precioConIGV: this.plan.precio[0].total
                };
                const data = {
                    amount: getSettings.amount,
                    currency_code: getSettings.currency,
                    email: window['Culqi'].token.email,
                    source_id: window['Culqi'].token.id,
                    metadata
                };
                console.log('data:', data);
                const loading = yield this.loadingCtrl.create({
                    message: 'pagando cita'
                });
                yield loading.present();
                this.payCulqiCharges = true;
                const self = this;
                this.culqiPvr.charges(data).subscribe((vuelta) => {
                    this.vuelta = vuelta;
                    console.log('data', vuelta);
                    loading.dismiss();
                    clearInterval(this.check);
                    this.payCulqiCharges = true;
                    if (vuelta.message === "ok") {
                        this.router.navigate(['home']);
                        this.formPre();
                    }
                    else {
                        return;
                    }
                }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (this.prestacion === 44) {
                        console.log('error:', err);
                        this.loadingCtrl.dismiss();
                        const alertError = yield this.alertCtrl.create({
                            header: 'error en tarjeta',
                            message: 'problema en el cargo en su tarjeta',
                            buttons: [
                                {
                                    text: 'cerrar',
                                    handler: () => {
                                        this.payCulqiCharges = true;
                                        this.desactivadoBoton = true;
                                        this.router.navigate(['options']);
                                    }
                                },
                                {
                                    text: 'Pagar en clínica',
                                    handler: () => {
                                        this.router.navigate(['home']);
                                        clearInterval(this.check);
                                    }
                                }
                            ],
                        });
                        yield alertError.present();
                    }
                    else {
                        console.log('error:', err);
                        this.loadingCtrl.dismiss();
                        const alertError = yield this.alertCtrl.create({
                            header: 'error en tarjeta',
                            message: 'problema en el cargo en su tarjeta',
                            buttons: [
                                {
                                    text: 'cerrar',
                                    handler: () => {
                                        this.payCulqiCharges = true;
                                        this.desactivadoBoton = true;
                                        this.router.navigate(['options']);
                                    }
                                },
                                {
                                    text: 'intentar de nuevo',
                                    handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                        this.openCulqi();
                                    })
                                }
                            ],
                        });
                    }
                }));
            }
            else {
                console.log('token error', window['Culqi'].error);
            }
        });
    }
    payClinic() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: 'error al hacer cargo',
                message: 'hubo un error alhacer cargo con la tarjeta',
                buttons: [
                    {
                        text: 'reintentar',
                        handler: () => {
                            this.desactivadoBoton = true;
                        }
                    },
                    {
                        text: 'Pagar en Clínica',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            let alert = yield this.alertCtrl.create({
                                header: "Pago en Clínica",
                                message: 'Tu pago no pudo ser realizado pero no te preocupes paga en la clínica tu cita fue reservada ...',
                                buttons: [
                                    {
                                        text: 'ok'
                                    }
                                ]
                            });
                            yield alert.present();
                            this.router.navigate(['mydates']);
                            /*         this.navCtrl.setRoot(MyDatesPage); */
                        })
                    }
                ]
            });
            alert.present();
        });
    }
    next() {
        let provisionId = this.prestacion;
        this.desactivadoBotonLocal = false;
        this.appointmentProvider.createAppointment(this.subida, provisionId).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('data devuelta:', data);
            let appointmentId = data.appointmentId;
            this.confirmCreate(appointmentId);
            if (data.ok == false) {
                this.problemReserva(data);
            }
            else {
                const loading = yield this.loadingCtrl.create({
                    message: "creando cita"
                });
                yield loading.present();
                this.createCita();
                loading.dismiss();
                this.router.navigate(['home']);
            }
        }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.prestacion === 44) {
                const alert = yield this.alertCtrl.create({
                    header: "Error de Creación",
                    subHeader: `Su cita no ha podido crearse por, ${err.error.help}`,
                    buttons: [
                        {
                            text: 'Ok entiendo',
                            handler: () => {
                                this.router.navigate(['home']);
                            }
                        },
                        {
                            text: 'Pagar en clínica',
                            handler: () => {
                                this.router.navigate(['/']);
                                clearInterval(this.check);
                            }
                        }
                    ]
                });
                yield alert.present();
                console.log('err', err);
            }
            else {
                const alert = yield this.alertCtrl.create({
                    header: "Error de Creación",
                    subHeader: `Su cita no ha podido crearse por, ${err.error.help}`,
                    buttons: [
                        {
                            text: 'Ok entiendo',
                            handler: () => {
                                this.router.navigate(['home']);
                            }
                        },
                        {
                            text: 'buscar nueva',
                            handler: () => {
                                this.router.navigate(['options']);
                                clearInterval(this.check);
                            }
                        }
                    ]
                });
                yield alert.present();
                console.log('err', err);
            }
        }));
    }
    createCita() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: "Creación de cita",
                message: "la cita que reservaste ha sido creada satisfactoriamente.",
                buttons: [
                    {
                        text: "Ok",
                        role: "Cancel"
                    }
                ]
            });
            yield alert.present();
        });
    }
    problemReserva(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: "Problema de reserva",
                message: `${data.error.help}`,
                buttons: [
                    {
                        text: 'Buscar otro horario',
                        handler: () => {
                            this.router.navigate(['card']);
                            /* this.navCtrl.push(CardPage); */
                        }
                    }, {
                        text: 'cancelar',
                        handler: () => {
                            this.router.navigate(['home']);
                            /* this.navCtrl.push(HomePage); */
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    nextDepe() {
        this.desactivadoBotonLocal = false;
        let id = this.depe._id;
        let provisionId = this.hora.params.provisionId;
        console.log('el id que va para creacion de familiar:', id);
        this.crudPvr.createParentDate(this.subida, id, provisionId).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const appointmentId = data.appointmentId;
            const patientId = data.patient.id;
            const loading = yield this.loadingCtrl.create({
                message: "creando cita"
            });
            yield loading.present();
            this.createCita();
            this.router.navigate(['home']);
            loading.dismiss();
            if (data) {
                this.confirmCreateParent(patientId, appointmentId);
            }
        }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('error en la creación:', err);
            const alert = yield this.alertCtrl.create({
                header: "Error de Creación",
                subHeader: `Su cita no ha podido crearse por, ${err.error.help}`,
                buttons: [
                    {
                        text: 'Ok entiendo',
                        handler: () => {
                            this.router.navigate(['home']);
                        }
                    },
                    {
                        text: 'buscar nueva',
                        handler: () => {
                            this.router.navigate(['options']);
                        }
                    }
                ]
            });
            yield alert.present();
            console.log('err', err);
        }));
    }
    waitingCreate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: "creando cita"
            });
            yield loading.present();
        });
    }
    createDate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: "Creación de cita",
                message: "la cita que reservaste ha sido creada satisfactoriamente.",
                buttons: [
                    {
                        text: "Ok",
                        role: "Cancel"
                    }
                ]
            });
            yield alert.present();
        });
    }
};
PayPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_appoinment_service__WEBPACK_IMPORTED_MODULE_2__["AppoinmentService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: src_app_services_crudparent_service__WEBPACK_IMPORTED_MODULE_5__["CrudparentService"] },
    { type: src_app_services_culqi_service__WEBPACK_IMPORTED_MODULE_6__["CulqiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
];
PayPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pay',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pay.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pay/pay.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pay.page.scss */ "./src/app/pages/pay/pay.page.scss")).default]
    })
], PayPage);



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

/***/ "./src/app/services/culqi.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/culqi.service.ts ***!
  \*******************************************/
/*! exports provided: CulqiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CulqiService", function() { return CulqiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let CulqiService = class CulqiService {
    constructor(http) {
        this.http = http;
        this.SERVER = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"];
        this.apiUrlCulqi = `${this.SERVER}ebooking/culqi-charges`;
    }
    charges(data) {
        const authorization = localStorage.getItem('authorization');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": authorization });
        let params = data;
        return this.http.post(this.apiUrlCulqi, params, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            return data;
        }));
    }
};
CulqiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CulqiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CulqiService);



/***/ })

}]);
//# sourceMappingURL=pages-pay-pay-module.js.map