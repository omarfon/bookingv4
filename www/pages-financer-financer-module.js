(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-financer-financer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/financer/financer.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/financer/financer.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"first\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Financiador</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n  <h4 class=\"parrafoFinanciador\">Lo que nos queda es escoger para quien es la cita y el financiador, ya casi terminamos…\n  </h4>\n  <!-- <p class=\"teleconsulta\" *ngIf=\"hora.params.provisionId[0] == 838517\"> HAS ESCOGIDO TELECONSULTA</p> -->\n  <div>\n    <ion-row class=\"pading\">\n      <ion-col size=\"6\" class=\"cuadrado\">\n        <ion-button color=\"primary\" expand=\"full\" size=\"default\" [ngClass]=\"{'verde':vcolor === true}\"\n          (click)=\"passFinancer()\">\n          <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n          para mi\n        </ion-button>\n      </ion-col>\n\n      <ion-col size=\"6\" class=\"cuadrado\">\n        <ion-button (click)=\"openParents()\" expand=\"full\" size=\"default\" color=\"secondary\"\n          [ngClass]=\"{'verde': ccolor === true}\">\n          <ion-icon slot=\"start\" name=\"people\"></ion-icon>\n          un familiar\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <div *ngIf=\"addFamily\">\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let depe of parents\">\n          <ion-card (click)=\"passFinancerParent(depe)\" class=\"tarjetaDepes\">\n            <ion-row no-padding no-margin>\n              <ion-col>\n                <h3 class=\"nombrePariente\">{{depe.name}}</h3>\n              </ion-col>\n\n            </ion-row>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-row *ngIf=\"addFamily\" padding>\n      <ion-col size=\"12\">\n        <ion-button expand=\"block\" shape=\"round\" fill=\"outline\" color=\"success\" class=\"m-t-20\"\n          (click)=\"showDetailCreateParents()\">\n          <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n          Agregar Familiar\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n\n  </div>\n  <!-- fin del template de los familiares adjuntos -->\n\n  <div *ngIf=\"depe\">\n    <div *ngIf=\"personOk === true\">\n      <ion-row>\n        <ion-col size=\"3\" class=\"cardEscogidoImg\">\n          <img src=\"../assets/imgs/avatars/nino.png\" alt=\"\">\n        </ion-col>\n        <ion-col size=\"7\" class=\"containerNombre\">\n          <h3 class=\"nombrePariente\">escogiste a: {{depe.name}}</h3>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-button (click)=\"cleanDepe()\" clear color=\"primary\">\n            <ion-icon name=\"close\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n  <div class=\"containerPay\">\n\n    <h3 class=\"centerTitle\">Como quieres pagar?</h3>\n\n    <div class=\"contenedorPagadores\" *ngIf=\"planes\">\n      <ion-list>\n        <ion-radio-group>\n          <div *ngFor=\"let plan of planes\">\n            <ion-card *ngIf=\"plan.es_paquete_propio === 0 && plan.es_plan_propio === 0 \">\n              <ion-item>\n\n                <ion-label *ngIf=\"plan.siteds === 0\">{{plan.plan_desc}}</ion-label>\n                <ion-label *ngIf=\"plan.siteds === 1\">{{plan.Financiador}}</ion-label>\n                <ion-radio slot=\"start\" (click)=\"acceptFinancer(plan)\"></ion-radio>\n                <span item-right>\n                  <p *ngIf=\"plan.siteds === 0\">S/. {{plan.precio[0].total}}</p>\n                </span>\n              </ion-item>\n            </ion-card>\n\n            <ion-card *ngIf=\"plan.es_paquete_propio === 0 && plan.es_plan_propio === 1 \">\n              <ion-item>\n                <ion-radio slot=\"start\" (click)=\"acceptFinancer(plan)\"></ion-radio>\n                <ion-label *ngIf=\"plan.siteds === 0\">{{plan.plan_desc}}</ion-label>\n                <ion-label *ngIf=\"plan.siteds === 1\">{{plan.Financiador}}</ion-label>\n                <span item-right>\n                  <p *ngIf=\"plan.siteds === 1\">S/. {{plan.precio[0].total}}</p>\n                </span>\n              </ion-item>\n            </ion-card>\n          </div>\n          <div *ngFor=\"let plan of planes\">\n            <ion-list *ngIf=\"plan.es_paquete_propio == 1 && plan.es_plan_propio == 0 && plan.beneficios < 1\" no-lines>\n              <h4 *ngIf=\"plan.es_paquete_propio == 1 && plan.es_plan_propio == 0\" class=\"tituloPlanes\">\n                {{plan.plan_desc}}</h4>\n              <ion-card>\n                <ion-item class=\"bloques\" no-lines>\n                  <ion-radio [disabled]=\"disabled\" slot=\"start\" (click)=\"acceptFinancer(plan)\"></ion-radio>\n                  <ion-label>{{plan.plan_desc}}</ion-label>\n                  <span item-right>\n                    <p>S/. {{plan.precio[0].total}}</p>\n                  </span>\n                </ion-item>\n                <ion-row *ngIf=\" plan.cuotas[0].countCuotas> 0\">\n                  <ion-col size=\"10\">\n                    <p> este beneficio no se puede usar </p>\n                  </ion-col>\n                  <ion-col size=\"2\">\n                    <ion-icon name=\"information-circle\" (click)=\"openModalInfo()\"></ion-icon>\n                  </ion-col>\n                </ion-row>\n              </ion-card>\n            </ion-list>\n\n          </div>\n          <div *ngFor=\"let plan of planes\">\n            <ion-list *ngIf=\"plan.es_paquete_propio === 1 && plan.es_plan_propio === 0  && plan.beneficios\" no-lines>\n              <h4 *ngIf=\"plan.es_paquete_propio === 1 && plan.es_plan_propio === 0 && plan.beneficios.length > 0\"\n                class=\"tituloPlanes\">\n                {{plan.plan_desc}}</h4>\n              <ion-card *ngFor=\"let beneficio of plan.beneficios\">\n                <ion-item class=\"bloques\" no-lines>\n                  <ion-radio [disabled]=\"disabled\" slot=\"start\" (click)=\"acceptFinancerPaquete(plan)\"></ion-radio>\n                  <ion-label>{{beneficio.beneficio_paquete}}</ion-label>\n                  <span item-right *ngIf=\"beneficio.beneficio_paquete\">\n                    <p>{{beneficio.cantidad_veces}} / {{beneficio.cantidad_max}}</p>\n                  </span>\n                  <span item-right>\n                    <p *ngIf=\"plan.siteds === 1\">S/. {{plan.precio[0].total}}</p>\n                  </span>\n                </ion-item>\n                <ion-row *ngIf=\"plan.cuotas[0].countCuotas > 0\">\n                  <ion-col size=\"10\">\n                    <p> este beneficio no se puede usar </p>\n                  </ion-col>\n                  <ion-col size=\"2\">\n                    <ion-icon name=\"information-circle\" (click)=\"openModalInfo()\"></ion-icon>\n                  </ion-col>\n                </ion-row>\n              </ion-card>\n            </ion-list>\n\n          </div>\n\n        </ion-radio-group>\n      </ion-list>\n    </div>\n  </div>\n\n  <!-- <ion-button \n          color=\"secondary\"\n          block\n          center\n          class=\"botonPagar\"\n          (click)=\"goToPay()\"\n          [disabled]=\"!desabilitado == true\">\n      hacer el pago\n  </ion-button> -->\n\n  <!--  <button *ngIf=\"paquete == true\" \n  color=\"secondary\"\n  ion-button\n  block\n  center\n  class=\"botonPagar\"\n  (click)=\"next()\"\n  [disabled]=\"!desabilitado == true\">\n  hacer el pago\n</button> -->\n  <ion-button *ngIf=\"financer == true\" color=\"secondary\" block center class=\"botonPagar\" (click)=\"goToPay()\"\n    [disabled]=\"!desabilitado == true\">\n    Ir a Pago\n  </ion-button>\n\n  <ion-button *ngIf=\"paquete == true\" color=\"secondary\" block center class=\"botonPagar\" (click)=\"next()\"\n    [disabled]=\"!desabilitado == true\">\n    Reservar Cita\n  </ion-button>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/financer/financer-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/financer/financer-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: FinancerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancerPageRoutingModule", function() { return FinancerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _financer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./financer.page */ "./src/app/pages/financer/financer.page.ts");




const routes = [
    {
        path: '',
        component: _financer_page__WEBPACK_IMPORTED_MODULE_3__["FinancerPage"]
    }
];
let FinancerPageRoutingModule = class FinancerPageRoutingModule {
};
FinancerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FinancerPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/financer/financer.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/financer/financer.module.ts ***!
  \***************************************************/
/*! exports provided: FinancerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancerPageModule", function() { return FinancerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _financer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./financer-routing.module */ "./src/app/pages/financer/financer-routing.module.ts");
/* harmony import */ var _financer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./financer.page */ "./src/app/pages/financer/financer.page.ts");







let FinancerPageModule = class FinancerPageModule {
};
FinancerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _financer_routing_module__WEBPACK_IMPORTED_MODULE_5__["FinancerPageRoutingModule"]
        ],
        declarations: [_financer_page__WEBPACK_IMPORTED_MODULE_6__["FinancerPage"]]
    })
], FinancerPageModule);



/***/ }),

/***/ "./src/app/pages/financer/financer.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/financer/financer.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f1f3f8;\n}\n\nion-card {\n  margin-bottom: 0;\n  margin-top: 2px;\n}\n\n.parrafoFinanciador {\n  color: #4A4A4A;\n  text-align: center;\n  /*        margin-bottom: 2em; */\n  font-size: 1.1em;\n  font-weight: 400;\n  padding-top: 1.5em;\n  width: 90%;\n  margin-left: 5%;\n}\n\n.seguroList {\n  width: 90% !important;\n  margin-left: 5% !important;\n}\n\n.evaluate {\n  background-color: #fff !important;\n  width: 90%;\n  margin-left: 5%;\n  border: none !important;\n  border-bottom: 0.5px solid #D8D8D8 !important;\n  height: auto;\n}\n\n.evaluate p {\n  color: #00B6A3;\n  font-size: 1.2em;\n  font-weight: 400;\n  margin-top: 8px;\n  text-transform: capitalize;\n}\n\n.item-md,\n.item-ios {\n  color: #9B9B9B;\n  font-size: 0.9em;\n  background: none;\n}\n\n.button.segment-activated {\n  border-bottom: 1px solid #979797;\n}\n\n.item-md-light,\n.item-divider-md-light,\n.item-ios-light,\n.item-divider-ios-light {\n  background-color: #fff;\n}\n\n.paymenyquestion {\n  margin-top: 3em;\n}\n\n.tiny {\n  font-size: 0.9em;\n}\n\n.cajagris {\n  background-color: #9B9B9B;\n}\n\n.pagoEfectivo {\n  color: #9B9B9B;\n  font-size: 1em;\n  font-style: italic;\n  margin-bottom: 5em;\n  text-align: center;\n  width: 90%;\n  margin-left: 5%;\n  margin-top: 1em;\n}\n\n.tituloMetodos {\n  color: #062F51;\n  margin-top: 2em;\n  font-weight: 300;\n}\n\n.container-gris {\n  background-color: #F3F6F6;\n  height: auto;\n  padding-bottom: 1.5em;\n}\n\n.precio {\n  margin-right: 20px;\n  color: #062F51;\n  margin-bottom: 3em;\n  font-size: 1.1em;\n  font-weight: 500;\n}\n\n.textoPrecio {\n  text-align: right !important;\n}\n\n.containerPrecio {\n  margin-top: -10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.moneda {\n  font-size: 1.4em;\n  font-weight: 600;\n}\n\n.list-ios > .item-block:last-child {\n  border-bottom: none;\n}\n\n.item-md.item-block .item-inner {\n  margin-bottom: 5px;\n}\n\n.item-md {\n  margin-bottom: 5px;\n}\n\n.list-md .item-block .item-inner,\n.item-md.item-block .item-inner {\n  border-bottom: none;\n}\n\n.botonAccept {\n  height: 50px !important;\n}\n\n.segment-md .segment-button {\n  border-bottom: none;\n}\n\n.segment-md .segment-button.activated,\n.segment-md .segment-button.segment-activated {\n  color: #00B6A3;\n  border-bottom: 1px solid #00B6A3;\n}\n\n.nombreDoctor {\n  color: #00B6A3;\n  font-size: 1.3em;\n  text-align: right !important;\n  margin-right: 10px;\n}\n\n.blue {\n  color: #979797;\n  font-weight: 600;\n  text-align: right;\n  margin-right: 40px !important;\n}\n\nion-label {\n  margin-top: 5px !important;\n  margin-bottom: 5px !important;\n  font-size: 0.8em !important;\n  color: #062F51;\n  text-transform: uppercase;\n}\n\nimg {\n  width: 100px;\n  margin-left: calc(50% - 50px);\n}\n\n.resumen {\n  padding-bottom: 1em;\n  background-color: #fff;\n}\n\n.centrar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 5px;\n}\n\n.centrar .izquierda {\n  color: #062F51;\n  margin-left: 40px;\n}\n\n.containerTextoPago {\n  background: #007198;\n}\n\n.containerTextoPago h3 {\n  color: #fff !important;\n  font-weight: 400;\n  padding: 10px 0;\n  margin-top: 0;\n  font-size: 1.1em;\n  text-align: center;\n}\n\n.me,\n.fam {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80px;\n  height: 80px;\n  border: solid 4px #00B6A3;\n  color: #007198;\n  text-align: center;\n  font-size: 1.2em;\n}\n\n.medio {\n  margin-top: 5vh;\n}\n\n.buttonAddFamily {\n  width: 90%;\n  margin-top: 20px;\n  height: 50px;\n}\n\n.botonPagar {\n  width: 90%;\n  margin-left: 5%;\n  height: 50px;\n}\n\n.nombrePariente {\n  color: #00B6A3;\n  font-size: 1.3em;\n  margin-top: 5px;\n  text-align: right;\n  margin-right: 10px;\n}\n\n.parentesco {\n  color: #4A4A4A;\n  text-align: right;\n  margin-right: 10px;\n}\n\n.edad {\n  text-align: right;\n  margin-right: 10px;\n}\n\n.center {\n  text-align: center;\n  margin-top: 30px;\n}\n\n.down20 {\n  margin-top: 30px;\n}\n\nion-avatar img {\n  width: 50px;\n}\n\n.cardEscogidoImg img {\n  width: 40px !important;\n  margin-left: 20px;\n}\n\n.containerNombre {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.verde {\n  --background: #00B6A3 !important;\n  color: #fff;\n}\n\n.tarjetaDepes {\n  height: 60px;\n  background: #007198;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: -5px;\n  border-top-right-radius: 15px;\n}\n\n.tarjetaDepes h3 {\n  color: #fff;\n  text-align: center;\n  font-size: 1.1em;\n}\n\n.contenedorPagadores {\n  --background: rgba(255, 255, 255, 0.9);\n  width: 90%;\n  margin-left: 5%;\n  margin-bottom: 20px;\n  border-top-right-radius: 30px;\n}\n\n.centerTitle {\n  text-align: center;\n  color: #007198;\n  margin-top: 10px;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n\n.nombrePago {\n  color: #007198;\n  font-size: 1em;\n  font-weight: 400;\n}\n\n.paquetes {\n  height: 90px;\n}\n\nion-slides {\n  height: auto !important;\n}\n\n.azul {\n  color: #007198;\n  font-size: 1.3em;\n  font-weight: 600;\n}\n\n.containerPay {\n  --background: #f1f3f8;\n}\n\n.tituloPlanes {\n  width: 95%;\n  margin-left: 2.5%;\n  text-align: center;\n  background: #062F51;\n  border-top-right-radius: 10px;\n  color: #fff;\n  font-size: 0.9em !important;\n  padding-top: 0.3em;\n  padding-bottom: -25px !important;\n  margin-top: 5px;\n  margin-bottom: 0 !important;\n}\n\n.noprice {\n  color: #062F51;\n  text-align: center;\n  width: 80%;\n  margin-left: 10%;\n  font-size: 1.6em;\n  font-weight: 400;\n}\n\n.teleconsulta {\n  color: #f74f35;\n  font-size: 1.5em;\n  text-align: center;\n  width: 90%;\n  margin-left: 5%;\n}\n\n.pading {\n  padding: 15px;\n}\n\nspan {\n  margin-top: 10px;\n  font-weight: 500;\n  color: #062F51;\n}\n\nion-list {\n  background: transparent !important;\n}\n\n.m-t-20 {\n  margin-top: 10px;\n}\n\nion-button {\n  width: 85% !important;\n  margin-left: 7.5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbWFyL3Byb3llY3Rvcy9EZXYvYm9va2luZ3Y0L3NyYy9hcHAvcGFnZXMvZmluYW5jZXIvZmluYW5jZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9maW5hbmNlci9maW5hbmNlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSxxQkFBQTtBQ0NSOztBREVJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDQ1I7O0FERUk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDQ1I7O0FERUk7RUFDSSxxQkFBQTtFQUNBLDBCQUFBO0FDQ1I7O0FERUk7RUFDSSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLFlBQUE7QUNDUjs7QURDUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FDQ1o7O0FER0k7O0VBRUksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBUjs7QURJSTtFQUNJLGdDQUFBO0FDRFI7O0FESUk7Ozs7RUFJSSxzQkFBQTtBQ0RSOztBRElJO0VBQ0ksZUFBQTtBQ0RSOztBRElJO0VBQ0ksZ0JBQUE7QUNEUjs7QURJSTtFQUNJLHlCQUFBO0FDRFI7O0FESUk7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0RSOztBRElJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RSOztBRElJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNEUjs7QURJSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0RSOztBRElJO0VBQ0ksNEJBQUE7QUNEUjs7QURJSTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNEUjs7QURJSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNEUjs7QURJSTtFQUNJLG1CQUFBO0FDRFI7O0FESUk7RUFDSSxrQkFBQTtBQ0RSOztBRElJO0VBQ0ksa0JBQUE7QUNEUjs7QURJSTs7RUFFSSxtQkFBQTtBQ0RSOztBRElJO0VBQ0ksdUJBQUE7QUNEUjs7QURJSTtFQUNJLG1CQUFBO0FDRFI7O0FESUk7O0VBRUksY0FBQTtFQUNBLGdDQUFBO0FDRFI7O0FESUk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDRFI7O0FESUk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDRFI7O0FESUk7RUFDSSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNEUjs7QURJSTtFQUNJLFlBQUE7RUFDQSw2QkFBQTtBQ0RSOztBRElJO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBQ0RSOztBRElJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQ0RSOztBREdRO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDRFo7O0FES0k7RUFDSSxtQkFBQTtBQ0ZSOztBRElRO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZaOztBRE1JOztFQUVJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDSFI7O0FETUk7RUFDSSxlQUFBO0FDSFI7O0FETUk7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDSFI7O0FETUk7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNIUjs7QURNSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSFI7O0FETUk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0hSOztBRE1JO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0hSOztBRE1JO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0hSOztBRE1JO0VBQ0ksZ0JBQUE7QUNIUjs7QURNSTtFQUNJLFdBQUE7QUNIUjs7QURNSTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7QUNIUjs7QURNSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSFI7O0FETUk7RUFDSSxnQ0FBQTtFQUNBLFdBQUE7QUNIUjs7QURNSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNIUjs7QURLUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDSFo7O0FET0k7RUFDSSxzQ0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0pSOztBRE9JO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDSlI7O0FET0k7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDSlI7O0FET0k7RUFDSSxZQUFBO0FDSlI7O0FET0k7RUFDSSx1QkFBQTtBQ0pSOztBRE9JO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNKUjs7QURPSTtFQUNJLHFCQUFBO0FDSlI7O0FET0k7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDSlI7O0FET0k7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSlI7O0FET0k7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDSlI7O0FET0k7RUFDSSxhQUFBO0FDSlI7O0FET0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0pSOztBRE9JO0VBQ0ksa0NBQUE7QUNKUjs7QURPSTtFQUNJLGdCQUFBO0FDSlI7O0FET0k7RUFDSSxxQkFBQTtFQUNBLDRCQUFBO0FDSlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9maW5hbmNlci9maW5hbmNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgaW9uLWNvbnRlbnQge1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNmMWYzZjg7XG4gICAgfVxuXG4gICAgaW9uLWNhcmQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgfVxuXG4gICAgLnBhcnJhZm9GaW5hbmNpYWRvciB7XG4gICAgICAgIGNvbG9yOiAjNEE0QTRBO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC8qICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07ICovXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxLjVlbTtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIH1cblxuICAgIC5zZWd1cm9MaXN0IHtcbiAgICAgICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tbGVmdDogNSUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuZXZhbHVhdGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IC41cHggc29saWQgI0Q4RDhEOCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogIzAwQjZBMztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaXRlbS1tZCxcbiAgICAuaXRlbS1pb3Mge1xuICAgICAgICBjb2xvcjogIzlCOUI5QjtcbiAgICAgICAgZm9udC1zaXplOiAuOWVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk3OTc5NztcbiAgICB9XG5cbiAgICAuYnV0dG9uLnNlZ21lbnQtYWN0aXZhdGVkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5Nzk3OTc7XG4gICAgfVxuXG4gICAgLml0ZW0tbWQtbGlnaHQsXG4gICAgLml0ZW0tZGl2aWRlci1tZC1saWdodCxcbiAgICAuaXRlbS1pb3MtbGlnaHQsXG4gICAgLml0ZW0tZGl2aWRlci1pb3MtbGlnaHQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIC5wYXltZW55cXVlc3Rpb24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAzZW07XG4gICAgfVxuXG4gICAgLnRpbnkge1xuICAgICAgICBmb250LXNpemU6IC45ZW07XG4gICAgfVxuXG4gICAgLmNhamFncmlzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzlCOUI5QjtcbiAgICB9XG5cbiAgICAucGFnb0VmZWN0aXZvIHtcbiAgICAgICAgY29sb3I6ICM5QjlCOUI7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICB9XG5cbiAgICAudGl0dWxvTWV0b2RvcyB7XG4gICAgICAgIGNvbG9yOiAjMDYyRjUxO1xuICAgICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lci1ncmlzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjZGNjtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgfVxuXG4gICAgLnByZWNpbyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6ICMwNjJGNTE7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICAudGV4dG9QcmVjaW8ge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jb250YWluZXJQcmVjaW8ge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLm1vbmVkYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLmxpc3QtaW9zPi5pdGVtLWJsb2NrOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cblxuICAgIC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgLml0ZW0tbWQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgLmxpc3QtbWQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIsXG4gICAgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuXG4gICAgLmJvdG9uQWNjZXB0IHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnNlZ21lbnQtbWQgLnNlZ21lbnQtYnV0dG9uIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG5cbiAgICAuc2VnbWVudC1tZCAuc2VnbWVudC1idXR0b24uYWN0aXZhdGVkLFxuICAgIC5zZWdtZW50LW1kIC5zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWFjdGl2YXRlZCB7XG4gICAgICAgIGNvbG9yOiAjMDBCNkEzO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwQjZBMztcbiAgICB9XG5cbiAgICAubm9tYnJlRG9jdG9yIHtcbiAgICAgICAgY29sb3I6ICMwMEI2QTM7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG5cbiAgICAuYmx1ZSB7XG4gICAgICAgIGNvbG9yOiAjOTc5Nzk3O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IC44ZW0gIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICMwNjJGNTE7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLSA1MHB4KTtcbiAgICB9XG5cbiAgICAucmVzdW1lbiB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgLmNlbnRyYXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcblxuICAgICAgICAuaXpxdWllcmRhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDYyRjUxO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGFpbmVyVGV4dG9QYWdvIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwNzE5ODtcblxuICAgICAgICBoMyB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm1lLFxuICAgIC5mYW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCA0cHggIzAwQjZBMztcbiAgICAgICAgY29sb3I6ICMwMDcxOTg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB9XG5cbiAgICAubWVkaW8ge1xuICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgfVxuXG4gICAgLmJ1dHRvbkFkZEZhbWlseSB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG5cbiAgICAuYm90b25QYWdhciB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cblxuICAgIC5ub21icmVQYXJpZW50ZSB7XG4gICAgICAgIGNvbG9yOiAjMDBCNkEzO1xuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLnBhcmVudGVzY28ge1xuICAgICAgICBjb2xvcjogIzRBNEE0QTtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG5cbiAgICAuZWRhZCB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLmNlbnRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG5cbiAgICAuZG93bjIwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG5cbiAgICBpb24tYXZhdGFyIGltZyB7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgIH1cblxuICAgIC5jYXJkRXNjb2dpZG9JbWcgaW1nIHtcbiAgICAgICAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lck5vbWJyZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC52ZXJkZSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzAwQjZBMyAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAudGFyamV0YURlcGVzIHtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDA3MTk4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC01cHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb250ZW5lZG9yUGFnYWRvcmVzIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gICAgfVxuXG4gICAgLmNlbnRlclRpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogIzAwNzE5ODtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG5cbiAgICAubm9tYnJlUGFnbyB7XG4gICAgICAgIGNvbG9yOiAjMDA3MTk4O1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG5cbiAgICAucGFxdWV0ZXMge1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgfVxuXG4gICAgaW9uLXNsaWRlcyB7XG4gICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5henVsIHtcbiAgICAgICAgY29sb3I6ICMwMDcxOTg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lclBheSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2YxZjNmODtcbiAgICB9XG5cbiAgICAudGl0dWxvUGxhbmVzIHtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIuNSU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogIzA2MkY1MTtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IC45ZW0gIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy10b3A6IC4zZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAtMjVweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubm9wcmljZSB7XG4gICAgICAgIGNvbG9yOiAjMDYyRjUxO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuXG4gICAgLnRlbGVjb25zdWx0YSB7XG4gICAgICAgIGNvbG9yOiAjZjc0ZjM1O1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICB9XG5cbiAgICAucGFkaW5nIHtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6ICMwNjJGNTFcbiAgICB9XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm0tdC0yMCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDcuNSUgIWltcG9ydGFudDtcbiAgICB9IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmMWYzZjg7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4ucGFycmFmb0ZpbmFuY2lhZG9yIHtcbiAgY29sb3I6ICM0QTRBNEE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogICAgICAgIG1hcmdpbi1ib3R0b206IDJlbTsgKi9cbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZy10b3A6IDEuNWVtO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5zZWd1cm9MaXN0IHtcbiAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNSUgIWltcG9ydGFudDtcbn1cblxuLmV2YWx1YXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjRDhEOEQ4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0bztcbn1cbi5ldmFsdWF0ZSBwIHtcbiAgY29sb3I6ICMwMEI2QTM7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5pdGVtLW1kLFxuLml0ZW0taW9zIHtcbiAgY29sb3I6ICM5QjlCOUI7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5idXR0b24uc2VnbWVudC1hY3RpdmF0ZWQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk3OTc5Nztcbn1cblxuLml0ZW0tbWQtbGlnaHQsXG4uaXRlbS1kaXZpZGVyLW1kLWxpZ2h0LFxuLml0ZW0taW9zLWxpZ2h0LFxuLml0ZW0tZGl2aWRlci1pb3MtbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4ucGF5bWVueXF1ZXN0aW9uIHtcbiAgbWFyZ2luLXRvcDogM2VtO1xufVxuXG4udGlueSB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi5jYWphZ3JpcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5QjlCOUI7XG59XG5cbi5wYWdvRWZlY3Rpdm8ge1xuICBjb2xvcjogIzlCOUI5QjtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luLWJvdHRvbTogNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4udGl0dWxvTWV0b2RvcyB7XG4gIGNvbG9yOiAjMDYyRjUxO1xuICBtYXJnaW4tdG9wOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5jb250YWluZXItZ3JpcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0Y2RjY7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDEuNWVtO1xufVxuXG4ucHJlY2lvIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzA2MkY1MTtcbiAgbWFyZ2luLWJvdHRvbTogM2VtO1xuICBmb250LXNpemU6IDEuMWVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGV4dG9QcmVjaW8ge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyUHJlY2lvIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9uZWRhIHtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmxpc3QtaW9zID4gLml0ZW0tYmxvY2s6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5pdGVtLW1kIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubGlzdC1tZCAuaXRlbS1ibG9jayAuaXRlbS1pbm5lcixcbi5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uYm90b25BY2NlcHQge1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbn1cblxuLnNlZ21lbnQtbWQgLnNlZ21lbnQtYnV0dG9uIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLnNlZ21lbnQtbWQgLnNlZ21lbnQtYnV0dG9uLmFjdGl2YXRlZCxcbi5zZWdtZW50LW1kIC5zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWFjdGl2YXRlZCB7XG4gIGNvbG9yOiAjMDBCNkEzO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwQjZBMztcbn1cblxuLm5vbWJyZURvY3RvciB7XG4gIGNvbG9yOiAjMDBCNkEzO1xuICBmb250LXNpemU6IDEuM2VtO1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5ibHVlIHtcbiAgY29sb3I6ICM5Nzk3OTc7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDAuOGVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDYyRjUxO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDUwcHgpO1xufVxuXG4ucmVzdW1lbiB7XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5jZW50cmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uY2VudHJhciAuaXpxdWllcmRhIHtcbiAgY29sb3I6ICMwNjJGNTE7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuXG4uY29udGFpbmVyVGV4dG9QYWdvIHtcbiAgYmFja2dyb3VuZDogIzAwNzE5ODtcbn1cbi5jb250YWluZXJUZXh0b1BhZ28gaDMge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1lLFxuLmZhbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXI6IHNvbGlkIDRweCAjMDBCNkEzO1xuICBjb2xvcjogIzAwNzE5ODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4ubWVkaW8ge1xuICBtYXJnaW4tdG9wOiA1dmg7XG59XG5cbi5idXR0b25BZGRGYW1pbHkge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5ib3RvblBhZ2FyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5ub21icmVQYXJpZW50ZSB7XG4gIGNvbG9yOiAjMDBCNkEzO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5wYXJlbnRlc2NvIHtcbiAgY29sb3I6ICM0QTRBNEE7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5lZGFkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmRvd24yMCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmlvbi1hdmF0YXIgaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5jYXJkRXNjb2dpZG9JbWcgaW1nIHtcbiAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5jb250YWluZXJOb21icmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnZlcmRlIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBCNkEzICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udGFyamV0YURlcGVzIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjMDA3MTk4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IC01cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xufVxuLnRhcmpldGFEZXBlcyBoMyB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbi5jb250ZW5lZG9yUGFnYWRvcmVzIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG59XG5cbi5jZW50ZXJUaXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDcxOTg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5ub21icmVQYWdvIHtcbiAgY29sb3I6ICMwMDcxOTg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ucGFxdWV0ZXMge1xuICBoZWlnaHQ6IDkwcHg7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmF6dWwge1xuICBjb2xvcjogIzAwNzE5ODtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNvbnRhaW5lclBheSB7XG4gIC0tYmFja2dyb3VuZDogI2YxZjNmODtcbn1cblxuLnRpdHVsb1BsYW5lcyB7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbi1sZWZ0OiAyLjUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwNjJGNTE7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMC4zZW07XG4gIHBhZGRpbmctYm90dG9tOiAtMjVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLm5vcHJpY2Uge1xuICBjb2xvcjogIzA2MkY1MTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBmb250LXNpemU6IDEuNmVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udGVsZWNvbnN1bHRhIHtcbiAgY29sb3I6ICNmNzRmMzU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4ucGFkaW5nIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuc3BhbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDYyRjUxO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5tLXQtMjAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNy41JSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/financer/financer.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/financer/financer.page.ts ***!
  \*************************************************/
/*! exports provided: FinancerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancerPage", function() { return FinancerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_financer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/financer.service */ "./src/app/services/financer.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_appoinment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/appoinment.service */ "./src/app/services/appoinment.service.ts");
/* harmony import */ var src_app_services_dependens_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/dependens.service */ "./src/app/services/dependens.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _createparent_createparent_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../createparent/createparent.page */ "./src/app/pages/createparent/createparent.page.ts");
/* harmony import */ var src_app_services_crudparent_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/crudparent.service */ "./src/app/services/crudparent.service.ts");










let FinancerPage = class FinancerPage {
    constructor(fb, alertCtrl, financierProvider, modalCtrl, appointmentProvider, actionSheet, loadingCtrl, dependentsPvr, router, routes, crudPrv) {
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.financierProvider = financierProvider;
        this.modalCtrl = modalCtrl;
        this.appointmentProvider = appointmentProvider;
        this.actionSheet = actionSheet;
        this.loadingCtrl = loadingCtrl;
        this.dependentsPvr = dependentsPvr;
        this.router = router;
        this.routes = routes;
        this.crudPrv = crudPrv;
        this.isAndroid = false;
        this.firtClick = false;
        this.isInsurance = false;
        this.isInsuranceName = false;
        this.isCard = false;
        this.isPlace = false;
        this.payment = false;
        this.open = false;
        this.currentAppointment = null;
        this.personOk = false;
        this.addFamily = false;
        this.secureOk = false;
        this.vcolor = false;
        this.ccolor = false;
        this.yes = false;
        this.no = false;
        this.desabilitado = false;
        this.nomark = false;
        this.paquete = true;
        const data = this.routes.snapshot.paramMap.get('data');
        this.dataArmada = JSON.parse(data);
        this.available = this.dataArmada.proposedate;
        this.prestacion = this.dataArmada.prestacion[0];
        console.log(data);
    }
    ngOnInit() {
        console.log('this.dataArmada:', this.dataArmada);
        this.hora = this.dataArmada.hora;
        this.doctor = this.dataArmada.doctor;
        this.subida = this.dataArmada.hora.listjson;
        this.encuentro = this.dataArmada.encuentro;
        this.available = this.dataArmada.proposedate;
        ;
        console.log('this.encuentro:', this.encuentro);
        this.dependentsPvr.getDependens().subscribe(data => {
            this.parents = data;
            /* console.log('this.parents:', this.parents); */
        });
        this.financierProvider.getFinanciers().subscribe(data => {
            this.items = data;
            /* console.log('los financiadores:', data); */
            // this.items.shift();
        });
        /* this.isAndroid = platform.is('android'); */
        this.subida = this.hora.listjson;
        let role = localStorage.getItem('role');
        if (role == 'guest') {
            let datos = {
                hora: this.hora,
                doctor: this.doctor,
                available: this.available
            };
            this.router.navigate(['login', datos]);
            // datos.present();
        }
        else {
            console.log("si hay constraseña. que pase");
        }
    }
    evaluateEnsurance() {
        this.firtClick = !this.firtClick;
        this.isInsurance = false;
        this.isInsuranceName = true;
        this.payment = false;
        this.isPlace = false;
        this.isCard = false;
    }
    planesPaciente() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'cargando financiadores'
            });
            yield loading.present();
            let centerId = this.hora.params.centerId;
            let servicio_id = this.hora.params.serviceId;
            let prestacion_id = this.hora.params.provisionId;
            let medico_id = this.doctor.id;
            this.financierProvider.getPlanesPaciente(centerId, servicio_id, prestacion_id, medico_id, this.available).subscribe(data => {
                this.planes = data;
                loading.dismiss();
                console.log('this.planes:', this.planes);
            });
        });
    }
    // si la cita es para el usuario pasará mostrando la ventana de financiador
    passFinancer(depe) {
        this.personOk = !this.personOk;
        this.personOk = true;
        this.addFamily = false;
        this.depe = depe;
        this.vcolor = true;
        this.ccolor = false;
        this.price = null;
        this.desabilitado = false;
        this.planesPaciente();
    }
    // mostrar los familiares adjuntos o la opción de crear uno nuevo
    openParents() {
        this.addFamily = true;
        this.personOk = false;
        this.ccolor = true;
        this.vcolor = false;
        this.nomark = false;
        this.desabilitado = true;
        this.planes = [];
    }
    passFinancerParent(depe) {
        this.addFamily = false;
        this.personOk = true;
        this.depe = depe;
        this.vcolor = false;
        this.ccolor = true;
        this.desabilitado = false;
        console.log('depe', depe);
        let paciente_id = depe.patientId;
        let servicio_id = this.hora.params.serviceId;
        let prestacion_id = this.hora.params.provisionId;
        let medico_id = this.doctor.id;
        this.financierProvider.getplanesContacto(paciente_id, servicio_id, prestacion_id, medico_id, this.available).subscribe(data => {
            this.planes = data;
            console.log(this.planes);
        });
    }
    cleanDepe() {
        this.secureOk = false;
        this.depe = {};
        this.openParents();
        // console.log(this.depe);
        // this.personOk = false;
        // this.vcolor = false;
        // this.ccolor = false;
        this.nomark = false;
    }
    // mostrar el modal de la creación de familiares
    showDetailCreateParents() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = {
                doctor: this.doctor,
                available: this.available,
                hora: this.hora,
                depe: this.depe,
                price: this.price,
                prestacion: this.prestacion
            };
            const modal = yield this.modalCtrl.create({
                component: _createparent_createparent_page__WEBPACK_IMPORTED_MODULE_8__["CreateparentPage"],
                componentProps: data,
                cssClass: 'my-custom-classParets'
            });
            yield modal.present();
        });
    }
    acceptFinancer(plan) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (plan.siteds === 1) {
                this.paquete = true;
                this.financer = false;
                const alert = yield this.alertCtrl.create({
                    header: 'Reserva con seguro',
                    subHeader: 'podrás registrar tu cita y pagar en local, el monto a cobrar será el copago de tu aseguradora',
                    buttons: [
                        {
                            text: 'entiendo'
                        }
                    ]
                });
                alert.present();
            }
            else {
                this.paquete = false;
                this.financer = true;
            }
            this.plan = plan;
            this.nomark = true;
            this.desabilitado = true;
            this.plan = plan;
            this.price = plan.precio[0].total;
            console.log('el plan:', plan);
        });
    }
    acceptFinancerPaquete(plan) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (plan.codigo_garante_pk === 1) {
                this.paquete = true;
                this.financer = false;
                const alert = yield this.alertCtrl.create({
                    header: 'Reserva con plan materno',
                    subHeader: 'Podras registrar tu consulta con los beneficios de tu plan seleccionado.',
                    buttons: [
                        {
                            text: 'entiendo'
                        }
                    ]
                });
                alert.present();
            }
            else {
                this.paquete = false;
                this.financer = true;
            }
            this.plan = plan;
            this.nomark = true;
            this.desabilitado = true;
            this.plan = plan;
            this.price = plan.precio[0].total;
            console.log('el plan:', plan);
        });
    }
    // función para ir a pagos
    goToPay() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.price > 0) {
                console.log('precio y plan', this.price, this.plan);
                let data = {
                    doctor: this.doctor,
                    available: this.available,
                    hora: this.hora,
                    depe: this.depe,
                    price: this.price,
                    prestacion: this.prestacion,
                    plan: this.plan
                };
                const datos = JSON.stringify(data);
                this.router.navigate(['pay', datos]);
                console.log('el precio', this.price, this.prestacion);
            }
            else {
                if (this.currentAppointment == true) {
                    const loading = yield this.loadingCtrl.create({
                        message: "creando cita"
                    });
                    yield loading.present();
                    let provisionId = this.hora.params.provisionId;
                    this.appointmentProvider.createAppointment(this.subida, provisionId).subscribe(data => {
                        // console.log("se ha creado la cita");
                        this.createCita();
                        loading.dismiss();
                        this.router.navigate(['home']);
                        /* this.navCtrl.setRoot(HomePage); */
                    });
                }
                else {
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
                }
                this.router.navigate(['home']);
                /* this.navCtrl.setRoot(HomePage); */
            }
        });
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
    doSubmitData() {
        let data = this.parents;
        console.log('la data pasado por el modal:', data);
    }
    next() {
        if (this.prestacion == 44) {
            let provisionId = this.prestacion;
            console.log(provisionId);
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
                                }
                            }
                        ]
                    });
                    yield alert.present();
                    console.log('err', err);
                }
            }));
        }
        else {
            return;
        }
    }
    confirmCreate(appointmentId) {
        console.log('confirmaci');
    }
    /*  nextDepe() {
       this.crudPrv.createParentDate(this.subida, id, this.encuentro).subscribe(async data => {
         const appointmentId = data.appointmentId;
         const patientId = data.patient.id;
         const loading = await this.loadingCtrl.create({
           message: "creando cita"
         });
         await loading.present();
         this.createCita();
         this.router.navigate(['home']);
         loading.dismiss();
         if (data) {
           this.confirmCreateParent(patientId, appointmentId);
         }
       }, async err => {
         console.log('error en la creación:', err);
         const alert = await this.alertCtrl.create({
           header: "Error de Creación",
           subHeader: `Su cita no ha podido crearse por, ${err.error.help}`,
           buttons: [
             {
               text: 'Ok entiendo',
               handler: () => {
                 this.router.navigate(['home'])
               }
             },
             {
               text: 'buscar nueva',
               handler: () => {
                 this.router.navigate(['options'])
               }
             }
           ]
         })
         await alert.present();
         console.log('err', err);
   
       });
     } */
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
    confirmCreateParent(patientId, appointmentId) {
        this.appointmentProvider.confirmDateParent(patientId, appointmentId).subscribe(confirm => {
            console.log({ confirm });
        });
    }
};
FinancerPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_financer_service__WEBPACK_IMPORTED_MODULE_3__["FinancerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_appoinment_service__WEBPACK_IMPORTED_MODULE_5__["AppoinmentService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_dependens_service__WEBPACK_IMPORTED_MODULE_6__["DependensService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: src_app_services_crudparent_service__WEBPACK_IMPORTED_MODULE_9__["CrudparentService"] }
];
FinancerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-financer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./financer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/financer/financer.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./financer.page.scss */ "./src/app/pages/financer/financer.page.scss")).default]
    })
], FinancerPage);



/***/ }),

/***/ "./src/app/services/financer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/financer.service.ts ***!
  \**********************************************/
/*! exports provided: FinancerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancerService", function() { return FinancerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let FinancerService = class FinancerService {
    constructor(http) {
        this.http = http;
        this.SERVER = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"];
        this.apiUrl = `${this.SERVER}ebooking/`;
    }
    getFinanciers() {
        const authorization = localStorage.getItem('authorization');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": authorization });
        return this.http.get(this.apiUrl + 'planes-paciente', { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            return data;
        }));
    }
    getFinancier(financier_id) {
        const authorization = localStorage.getItem('authorization');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": authorization });
        return this.http.get(this.apiUrl + `${financier_id}`, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            return data;
        }));
    }
    getPrice(servicio_id, prestacion_id, producto_id, medico_id, proposed_date) {
        // let params = { proposed_date: proposed_date, center_id: center_id, basic_service_id: basic_service_id, doctor_id: doctor_id }
        const authorization = localStorage.getItem('authorization');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": authorization });
        return this.http.get(this.apiUrl + `citas/precio-prestacion?servicio_id=${servicio_id}&prestacion_id=${prestacion_id}&producto_id=${producto_id}&medico_id=${medico_id}&fecha=${proposed_date}`, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            return data;
        }));
    }
    getPlanesPaciente(centerId, servicio_id, prestacion_id, medico_id, proposed_date) {
        const authorization = localStorage.getItem('authorization');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": authorization });
        return this.http.get(this.apiUrl + `planes-paciente-precio-prestacion?center_id=${centerId}&servicio_id=${servicio_id}&prestacion_id=${prestacion_id}&medico_id=${medico_id}&fecha=${proposed_date}`, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            return data;
        }));
    }
    getplanesContacto(paciente_id, servicio_id, prestacion_id, medico_id, proposed_date) {
        const authorization = localStorage.getItem('authorization');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": authorization });
        return this.http.get(this.apiUrl + `planes-paciente-contacto-precio-prestacion?paciente_id=${paciente_id}&servicio_id=${servicio_id}&prestacion_id=${prestacion_id}&medico_id=${medico_id}&fecha=${proposed_date}`, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            return data;
        }));
    }
    getProvisions(centerId, basicServiceId) {
        const authorization = localStorage.getItem('authorization');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": authorization });
        return this.http.get(this.apiUrl + `centers/${centerId}/basicservices/${basicServiceId}/provisions`, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            return data;
        }));
    }
};
FinancerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FinancerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FinancerService);



/***/ })

}]);
//# sourceMappingURL=pages-financer-financer-module.js.map