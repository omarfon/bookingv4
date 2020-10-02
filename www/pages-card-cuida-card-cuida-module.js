(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-card-cuida-card-cuida-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/card-cuida/card-cuida.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/card-cuida/card-cuida.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar hideBackButton=\"true\" persistent=\"true\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"first\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <img class=\"logoCuida\" src=\"assets/imgs/cuidaBlanco.png\" alt=\"\">\n    </ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button (click)=\"goToCura()\" slot=\"end\" clear>\n        <img class=\"logoIrACura\" src=\"assets/imgs/logoCuraWhite.png\" alt=\"\">\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n\n  <div [scrollArea]=\"mycontent\" headerHeight=\"240\">\n    <div id=\"busqueda\">\n      <ion-list padding>\n        <ion-item>\n          <ion-label position=\"floating\">Busca por especialidad</ion-label>\n          <ion-select *ngIf=\"servicios\" [(ngModel)]=\"id\" #specialty (ionChange)=\"onChangueSpecialty(specialty.value)\">\n            <ion-select-option [value]=\"specialty.id\" *ngFor=\"let specialty of servicios\">{{specialty.description}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Busca por doctor</ion-label>\n          <ion-input type=\"text\" (keyup)=\"buscarDoctor()\" [(ngModel)]=\"search\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Busca por fecha</ion-label>\n          <ion-input type=\"date\" (ionChange)=\"getDoctorsPerDay()\" [(ngModel)]=\"fromDate\"></ion-input>\n        </ion-item>\n\n      </ion-list>\n    </div>\n  </div>\n</ion-header>\n\n\n<ion-content #mycontent fullscreen>\n  <div *ngFor=\"let item of doctorsF; let itemDoctor = index\">\n    <div class=\"box-main-content\" [ngStyle]=\"{'display': item.isAvailable ? 'block' : 'none'}\">\n      <div class=\"datosDoctor\">\n        <ion-row>\n          <ion-col size=\"4\" class=\"imageDoctor\">\n            <img src=\"{{SERVERImage}}{{item.id}}.png\" (error)=\"errorHandler($event)\" alt=\"\">\n          </ion-col>\n          <ion-col size=\"8\" right>\n            <p class=\"doctor\">{{ item.fullName | lowercase}}</p>\n            <p class=\"especialidad\">{{item.service.description | lowercase}}</p>\n            <p class=\"centro\">Centro: Mendiola</p>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div class=\"disponibles\">\n        <div class=\"diasCitas\">\n          <p>Próximos días disponibles</p>\n          <ul>\n            <ion-row>\n              <ion-col size=\"2\" *ngFor=\"let items of item.availables; let index = index\">\n                <li (click)=\"stateShow(itemDoctor, index, items)\"\n                  [ngClass]=\"{'active': boxCaID == index && itemDoctor === boxID}\">\n                  <div class=\"box-day\" id=\"{{index}}\">{{items.date | date:'fullDate' :'es' | slice:0:3}}</div>\n                </li>\n                <span class=\"day\">{{items.date | date:'dd':'es'}}</span>\n              </ion-col>\n            </ion-row>\n          </ul>\n        </div>\n        <div class=\"horasCitas\">\n          <div style=\"overflow: hidden;\" *ngFor=\"let itemss of item.availables; let ii = index\">\n            <div *ngIf=\"itemDoctor === boxID && boxCaID === ii\" id=\"{{i}}\" class=\"box-hour\">\n              <!-- <p class=\"p-hour-dispo\">Horario disponible consulta externa</p> -->\n              <div class=\"box-hour-main\">\n                <ion-row>\n                  <ion-col size=\"3\" *ngFor=\"let items of itemss.hours; let indexxx = index\">\n                    <span id=\"{{'span-elegir-doctor-horaydia-'+item.service.idTraking}}\">\n                      <div\n                        [ngClass]=\"{'hourdispo': itemss.hours[indexxx].isAvailable === true, 'desactive': itemss.hours[indexxx].isAvailable === false}\"\n                        (click)=\"goToFinancer(item,items)\">\n                        {{items.hour | slice:0:5}}\n                      </div>\n                    </span>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"!doctorsF && doctorsF.length < 1\">\n    <div>\n      <p class=\"textoSalva\">No hay doctores disponibles para esta especialidad en este momento.... </p>\n    </div>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/card-cuida/card-cuida-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/card-cuida/card-cuida-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CardCuidaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardCuidaPageRoutingModule", function() { return CardCuidaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _card_cuida_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-cuida.page */ "./src/app/pages/card-cuida/card-cuida.page.ts");




const routes = [
    {
        path: '',
        component: _card_cuida_page__WEBPACK_IMPORTED_MODULE_3__["CardCuidaPage"]
    }
];
let CardCuidaPageRoutingModule = class CardCuidaPageRoutingModule {
};
CardCuidaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CardCuidaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/card-cuida/card-cuida.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/card-cuida/card-cuida.module.ts ***!
  \*******************************************************/
/*! exports provided: CardCuidaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardCuidaPageModule", function() { return CardCuidaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _card_cuida_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-cuida.page */ "./src/app/pages/card-cuida/card-cuida.page.ts");
/* harmony import */ var _card_cuida_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-cuida-routing.module */ "./src/app/pages/card-cuida/card-cuida-routing.module.ts");







let CardCuidaPageModule = class CardCuidaPageModule {
};
CardCuidaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _card_cuida_routing_module__WEBPACK_IMPORTED_MODULE_6__["CardCuidaPageRoutingModule"],
        ],
        declarations: [_card_cuida_page__WEBPACK_IMPORTED_MODULE_5__["CardCuidaPage"]],
    })
], CardCuidaPageModule);



/***/ }),

/***/ "./src/app/pages/card-cuida/card-cuida.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/card-cuida/card-cuida.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f1f3f8;\n  height: 100vh;\n  padding-bottom: 220px !important;\n  margin-bottom: 150px !important;\n}\n\nion-toolbar {\n  --background: #f06e5a;\n}\n\n.list-md {\n  background: #F9FBFB !important;\n}\n\n.item-md {\n  --background: transparent !important;\n}\n\n#busqueda {\n  width: 95%;\n  margin-left: 2.5%;\n  margin-top: 10px;\n  height: 250px;\n}\n\n.swiper-slide {\n  width: 60px !important;\n  height: auto;\n}\n\n.dentroExpandable {\n  height: 60px;\n}\n\n.dentroExpandable p {\n  margin-top: -15px;\n}\n\n.swiper-container {\n  height: 55px !important;\n  width: 95%;\n  margin-left: 2.5%;\n}\n\n.centerItemsDays {\n  text-align: center;\n}\n\n.centerItemsDays p {\n  color: #4A4A4A;\n}\n\n.doctor {\n  font-weight: 200;\n  color: #007198;\n  font-size: 1.5em;\n  text-align: right;\n  margin-right: 15px;\n  line-height: 1.2em;\n  margin-top: 10px;\n  text-transform: capitalize;\n}\n\n.especialidad {\n  text-align: right;\n  color: grey;\n  margin-right: 15px;\n  font-size: 1.2em;\n  font-weight: lighter;\n  margin-top: 0 !important;\n  text-transform: capitalize;\n}\n\n.centro {\n  text-align: right;\n  margin-right: 15px;\n  font-size: 1.2em;\n  color: grey;\n  font-weight: 300;\n}\n\n.diasLibres {\n  text-align: center;\n}\n\n.diasLibres h6 {\n  font-size: 1.1em;\n  color: grey;\n  text-align: center;\n}\n\n.imageSlider {\n  width: 150px;\n  margin-left: calc(50% - 75px);\n  margin-top: 1em;\n  border-radius: 50%;\n}\n\n.cardSlider {\n  text-align: center;\n  width: 250px;\n}\n\n.tituloSlider {\n  color: #007198;\n  font-size: 1.4em;\n  text-align: center;\n  line-height: 1.2em;\n  width: 80%;\n  margin: 8%;\n}\n\n.diasColor {\n  background: #FF634C;\n  height: 30px;\n  width: 30px;\n  margin-top: 10px;\n  border-radius: 50%;\n  margin-left: 5px;\n  display: flex;\n  text-align: center;\n  justify-content: space-around;\n  align-items: center;\n  color: #fff;\n  font-size: 0.8em;\n  font-weight: 200;\n}\n\n.imageDoctor img {\n  border-radius: 15px;\n  margin-top: 1em;\n  margin-left: 1em;\n}\n\n.containerDays {\n  width: 90%;\n  margin-left: 5%;\n  transition: cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\n.item-label-stacked .select-md,\n.item-label-floating .select-md,\n.item-input-has-focus .label-md[floating],\n.input-has-focus .label-md[floating],\n.item-input-has-value .label-md[floating],\n.input-has-value .label-md[floating] {\n  color: #287195;\n}\n\n.horas {\n  font-size: 1em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 35px !important;\n}\n\n.horas p {\n  color: #007198;\n  border-radius: 20px;\n  padding: 0.3em 0.8em;\n  /* background: #3691be; */\n  border: 1px solid #007198;\n  font-weight: 400;\n  margin-right: 10px;\n}\n\n.icono {\n  margin-top: 15px;\n  color: grey;\n}\n\n.textoCitas {\n  color: #20668B;\n  margin-top: 50px;\n  text-align: center;\n}\n\n.gris {\n  background: red;\n}\n\n.mat-expansion-indicator {\n  color: #007198 !important;\n}\n\n/* a:hover {\n    background: #007198!important;\n    opacity: .9!important;\n} */\n\n/* a:hover{\n    background: red!important;\n} */\n\n.list-md .item-input.ng-valid.item-input-has-value:not(.input-has-focus):not(.item-input-has-focus):last-child,\n.list-md .item-input.ng-valid.input-has-value:not(.input-has-focus):not(.item-input-has-focus):last-child {\n  border-bottom-color: #dedede !important;\n  box-shadow: none !important;\n}\n\n.normal {\n  width: 100% !important;\n}\n\n.normal .swiper-slide {\n  width: 100% !important;\n}\n\n.normal .swiper-container {\n  height: auto !important;\n}\n\n/* .slide-zoom .ng-star-inserted{\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n} */\n\n.borrar {\n  display: none !important;\n}\n\n.cabecera {\n  background-color: #287195;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.grid {\n  margin-left: 40px;\n}\n\n.tarjeta {\n  border-top-right-radius: 20px;\n}\n\n.logoCuida {\n  width: 110px;\n  height: auto;\n}\n\n.logoIrACura {\n  width: 100px;\n}\n\na:focus {\n  background: #00B6A3 !important;\n  opacity: 0.9 !important;\n}\n\n.triangulo {\n  font-size: 1em;\n  background: none;\n  color: #20668B;\n  margin-top: -5px;\n}\n\na:hover {\n  background: #20668B;\n}\n\na:hover:after {\n  display: block;\n}\n\n.slider .slider-pager {\n  text-align: right;\n}\n\n.alignVertical {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.alignVertical ion-icon {\n  color: #4A4A4A;\n  font-size: 1.4em !important;\n}\n\n.expand-wrapper {\n  background: #f06e5a !important;\n}\n\n/* estilos IOS */\n\n.title-ios {\n  margin-left: -45px !important;\n}\n\n.dia {\n  margin-top: 10px;\n  width: 30px;\n  height: 30px;\n  font-size: 0.8em;\n}\n\n.diasDoctor {\n  font-size: 0.9em;\n}\n\nmat-expansion-panel-header ion-slides {\n  height: 100px;\n}\n\n.horariosDisponibles {\n  width: 100%;\n}\n\n.contenedorHoras {\n  height: 50px;\n}\n\n.box-main-content {\n  width: 92%;\n  margin-left: 4%;\n  margin-bottom: 15px;\n}\n\n.box-main-content .datosDoctor {\n  background: #fff;\n  border-top-right-radius: 20px;\n  margin-bottom: 10px;\n}\n\n.box-main-content .disponibles {\n  margin-top: -16px;\n}\n\n.box-main-content .disponibles .diasCitas {\n  background: #f6f6f6;\n  padding-bottom: 15px;\n}\n\n.box-main-content .disponibles .diasCitas p {\n  color: #052F51;\n  text-align: right;\n  font-size: 0.9em;\n  margin-right: 16px;\n  padding-top: 8px;\n}\n\n.box-main-content .disponibles .diasCitas ul {\n  margin: 0 !important;\n  padding: 0 10px !important;\n}\n\n.box-main-content .disponibles .diasCitas ul li {\n  /*                      display: block; */\n  list-style-type: none;\n  background: #FF634C;\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n  /*                    text-align: center; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.box-main-content .disponibles .diasCitas ul li .box-day {\n  color: #fff;\n}\n\n.box-main-content .disponibles .diasCitas ul span {\n  color: #052F51;\n  margin-top: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 15px;\n}\n\n.box-main-content .active {\n  background: #20668B !important;\n  color: #fff;\n}\n\n.box-main-content .horasCitas {\n  margin-top: -16px;\n  background: #20668B;\n}\n\n.box-main-content .horasCitas .box-hour {\n  margin-bottom: 50px;\n}\n\n.box-main-content .horasCitas .box-hour .p-hour-dispo {\n  text-align: center;\n  color: #fff;\n  font-size: 0.9em;\n  margin-top: 10px;\n}\n\n.box-main-content .horasCitas .box-hour .box-hour-main {\n  margin-bottom: 10px;\n}\n\n.box-main-content .horasCitas .box-hour .box-hour-main .hourdispo {\n  background: #052F51;\n  color: #fff;\n  padding: 0.2em 0;\n  width: 80%;\n  margin-left: 10%;\n  border-radius: 5px;\n  text-align: center;\n}\n\n.box-main-content .horasCitas .box-hour .box-hour-main .desactive {\n  background: #919191;\n  color: #fff;\n  padding: 0.2em 0;\n  width: 80%;\n  margin-left: 10%;\n  border-radius: 5px;\n  text-align: center;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbWFyL3Byb3llY3Rvcy9EZXYvYm9va2luZ3Y0L3NyYy9hcHAvcGFnZXMvY2FyZC1jdWlkYS9jYXJkLWN1aWRhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FyZC1jdWlkYS9jYXJkLWN1aWRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUNDUjs7QURFSTtFQUNJLHFCQUFBO0FDQ1I7O0FERUk7RUFDSSw4QkFBQTtBQ0NSOztBREVJO0VBQ0ksb0NBQUE7QUNDUjs7QURFSTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBRUEsYUFBQTtBQ0FSOztBREdJO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0FDQVI7O0FER0k7RUFDSSxZQUFBO0FDQVI7O0FERVE7RUFDSSxpQkFBQTtBQ0FaOztBRElJO0VBQ0ksdUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNEUjs7QURJSTtFQUNJLGtCQUFBO0FDRFI7O0FET1E7RUFDSSxjQUFBO0FDTFo7O0FEU0k7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNOUjs7QURTSTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7QUNOUjs7QURTSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ05SOztBRFNJO0VBRUksa0JBQUE7QUNQUjs7QURTUTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDUFo7O0FEWUk7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNUUjs7QURZSTtFQUNJLGtCQUFBO0VB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SSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUN6QnhCOztBRCtCUTtFQUNJLDhCQUFBO0VBQ0EsV0FBQTtBQzdCWjs7QURnQ1E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDOUJaOztBRGlDWTtFQUNJLG1CQUFBO0FDL0JoQjs7QURpQ2dCO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQy9CcEI7O0FEa0NnQjtFQUNJLG1CQUFBO0FDaENwQjs7QURrQ29CO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDaEN4Qjs7QURtQ29CO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNqQ3hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FyZC1jdWlkYS9jYXJkLWN1aWRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICBpb24tY29udGVudCB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2YxZjNmODtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNmMDZlNWE7XG4gICAgfVxuXG4gICAgLmxpc3QtbWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjlGQkZCICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLml0ZW0tbWQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgI2J1c3F1ZWRhIHtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIuNSU7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICB9XG5cbiAgICAuc3dpcGVyLXNsaWRlIHtcbiAgICAgICAgd2lkdGg6IDYwcHggIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIC5kZW50cm9FeHBhbmRhYmxlIHtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE1cHgsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc3dpcGVyLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogNTVweCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMi41JTtcbiAgICB9XG5cbiAgICAuY2VudGVySXRlbXNEYXlzIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC8vIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6ICM0QTRBNEE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZG9jdG9yIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgY29sb3I6ICMwMDcxOTg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuXG4gICAgLmVzcGVjaWFsaWRhZCB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG5cbiAgICAuY2VudHJvIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxuXG4gICAgLmRpYXNMaWJyZXMge1xuICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIGg2IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIC8vIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pbWFnZVNsaWRlciB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC0gNzVweCk7XG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cblxuICAgIC5jYXJkU2xpZGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgfVxuXG4gICAgLnRpdHVsb1NsaWRlciB7XG4gICAgICAgIGNvbG9yOiAjMDA3MTk4O1xuICAgICAgICBmb250LXNpemU6IDEuNGVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWFyZ2luOiA4JTtcbiAgICB9XG5cbiAgICAuZGlhc0NvbG9yIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGNjM0QztcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgIH1cblxuICAgIC5pbWFnZURvY3RvciBpbWcge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAycHggM3B4ICNBN0E5QUM7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lckRheXMge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgICAgIHRyYW5zaXRpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xuICAgIH1cblxuICAgIC5pdGVtLWxhYmVsLXN0YWNrZWQgLnNlbGVjdC1tZCxcbiAgICAuaXRlbS1sYWJlbC1mbG9hdGluZyAuc2VsZWN0LW1kLFxuICAgIC5pdGVtLWlucHV0LWhhcy1mb2N1cyAubGFiZWwtbWRbZmxvYXRpbmddLFxuICAgIC5pbnB1dC1oYXMtZm9jdXMgLmxhYmVsLW1kW2Zsb2F0aW5nXSxcbiAgICAuaXRlbS1pbnB1dC1oYXMtdmFsdWUgLmxhYmVsLW1kW2Zsb2F0aW5nXSxcbiAgICAuaW5wdXQtaGFzLXZhbHVlIC5sYWJlbC1tZFtmbG9hdGluZ10ge1xuICAgICAgICBjb2xvcjogIzI4NzE5NTtcbiAgICB9XG5cbiAgICAuaG9yYXMge1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6ICMwMDcxOTg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogLjNlbSAuOGVtO1xuICAgICAgICAgICAgLyogYmFja2dyb3VuZDogIzM2OTFiZTsgKi9cbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDcxOTg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmljb25vIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgfVxuXG4gICAgLnRleHRvQ2l0YXMge1xuICAgICAgICBjb2xvcjogIzIwNjY4QjtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5ncmlzIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgIH1cblxuICAgIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvciB7XG4gICAgICAgIGNvbG9yOiAjMDA3MTk4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLyogYTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDA3MTk4IWltcG9ydGFudDtcbiAgICAgIG9wYWNpdHk6IC45IWltcG9ydGFudDtcbiAgfSAqL1xuICAgIC8qIGE6aG92ZXJ7XG4gICAgICBiYWNrZ3JvdW5kOiByZWQhaW1wb3J0YW50O1xuICB9ICovXG5cbiAgICAubGlzdC1tZCAuaXRlbS1pbnB1dC5uZy12YWxpZC5pdGVtLWlucHV0LWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cyk6bGFzdC1jaGlsZCxcbiAgICAubGlzdC1tZCAuaXRlbS1pbnB1dC5uZy12YWxpZC5pbnB1dC1oYXMtdmFsdWU6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdCguaXRlbS1pbnB1dC1oYXMtZm9jdXMpOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZGVkZWRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubm9ybWFsIHtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblxuICAgICAgICAuc3dpcGVyLXNsaWRlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuc3dpcGVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qIC5zbGlkZS16b29tIC5uZy1zdGFyLWluc2VydGVke1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH0gKi9cbiAgICAuYm9ycmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jYWJlY2VyYSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyODcxOTU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuZ3JpZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIH1cblxuICAgIC50YXJqZXRhIHtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6I0Y3RkJGQjtcbiAgICB9XG5cbiAgICAubG9nb0N1aWRhIHtcbiAgICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgLmxvZ29JckFDdXJhIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cblxuICAgIGE6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDBCNkEzICFpbXBvcnRhbnQ7XG4gICAgICAgIG9wYWNpdHk6IC45ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnRyaWFuZ3VsbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBjb2xvcjogIzIwNjY4QjtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICB9XG5cbiAgICBhOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzIwNjY4QjtcbiAgICB9XG5cbiAgICBhOmhvdmVyOmFmdGVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2tcbiAgICB9XG5cbiAgICAuc2xpZGVyIC5zbGlkZXItcGFnZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG5cbiAgICAuYWxpZ25WZXJ0aWNhbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNEE0QTRBO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRlbSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmV4cGFuZC13cmFwcGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2YwNmU1YSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC8qIGVzdGlsb3MgSU9TICovXG4gICAgLnRpdGxlLWlvcyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNDVweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5kaWEge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgfVxuXG4gICAgLmRpYXNEb2N0b3Ige1xuICAgICAgICBmb250LXNpemU6IC45ZW07XG4gICAgfVxuXG4gICAgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgICAgICBpb24tc2xpZGVzIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaG9yYXJpb3NEaXNwb25pYmxlcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5jb250ZW5lZG9ySG9yYXMge1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuXG4gICAgLy9zdGlsb3MgY2FyZCBudWV2b1xuXG4gICAgLmJveC1tYWluLWNvbnRlbnQge1xuICAgICAgICB3aWR0aDogOTIlO1xuICAgICAgICBtYXJnaW4tbGVmdDogNCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cbiAgICAgICAgLmRhdG9zRG9jdG9yIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGlzcG9uaWJsZXMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE2cHg7XG5cbiAgICAgICAgICAgIC5kaWFzQ2l0YXMge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwNTJGNTE7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC45ZW07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jazsgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRjYzNEM7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAuYm94LWRheSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwNTJGNTE7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjA2NjhCICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ob3Jhc0NpdGFzIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xNnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzIwNjY4QjtcblxuXG4gICAgICAgICAgICAuYm94LWhvdXIge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG5cbiAgICAgICAgICAgICAgICAucC1ob3VyLWRpc3BvIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOWVtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5ib3gtaG91ci1tYWluIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgICAgICAgICAgICAgICAuaG91cmRpc3BvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwNTJGNTE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC4yZW0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmRlc2FjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOTE5MTkxO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuMmVtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmMWYzZjg7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmctYm90dG9tOiAyMjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNTBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI2YwNmU1YTtcbn1cblxuLmxpc3QtbWQge1xuICBiYWNrZ3JvdW5kOiAjRjlGQkZCICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtLW1kIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4jYnVzcXVlZGEge1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW4tbGVmdDogMi41JTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIHdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmRlbnRyb0V4cGFuZGFibGUge1xuICBoZWlnaHQ6IDYwcHg7XG59XG4uZGVudHJvRXhwYW5kYWJsZSBwIHtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG5cbi5zd2lwZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA1NXB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbi1sZWZ0OiAyLjUlO1xufVxuXG4uY2VudGVySXRlbXNEYXlzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNlbnRlckl0ZW1zRGF5cyBwIHtcbiAgY29sb3I6ICM0QTRBNEE7XG59XG5cbi5kb2N0b3Ige1xuICBmb250LXdlaWdodDogMjAwO1xuICBjb2xvcjogIzAwNzE5ODtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmVzcGVjaWFsaWRhZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogZ3JleTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmNlbnRybyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uZGlhc0xpYnJlcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kaWFzTGlicmVzIGg2IHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgY29sb3I6IGdyZXk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltYWdlU2xpZGVyIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLSA3NXB4KTtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jYXJkU2xpZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi50aXR1bG9TbGlkZXIge1xuICBjb2xvcjogIzAwNzE5ODtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMS4yZW07XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogOCU7XG59XG5cbi5kaWFzQ29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjRkY2MzRDO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4uaW1hZ2VEb2N0b3IgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuXG4uY29udGFpbmVyRGF5cyB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgdHJhbnNpdGlvbjogY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG59XG5cbi5pdGVtLWxhYmVsLXN0YWNrZWQgLnNlbGVjdC1tZCxcbi5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zZWxlY3QtbWQsXG4uaXRlbS1pbnB1dC1oYXMtZm9jdXMgLmxhYmVsLW1kW2Zsb2F0aW5nXSxcbi5pbnB1dC1oYXMtZm9jdXMgLmxhYmVsLW1kW2Zsb2F0aW5nXSxcbi5pdGVtLWlucHV0LWhhcy12YWx1ZSAubGFiZWwtbWRbZmxvYXRpbmddLFxuLmlucHV0LWhhcy12YWx1ZSAubGFiZWwtbWRbZmxvYXRpbmddIHtcbiAgY29sb3I6ICMyODcxOTU7XG59XG5cbi5ob3JhcyB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG59XG4uaG9yYXMgcCB7XG4gIGNvbG9yOiAjMDA3MTk4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAwLjNlbSAwLjhlbTtcbiAgLyogYmFja2dyb3VuZDogIzM2OTFiZTsgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNzE5ODtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uaWNvbm8ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBjb2xvcjogZ3JleTtcbn1cblxuLnRleHRvQ2l0YXMge1xuICBjb2xvcjogIzIwNjY4QjtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ3JpcyB7XG4gIGJhY2tncm91bmQ6IHJlZDtcbn1cblxuLm1hdC1leHBhbnNpb24taW5kaWNhdG9yIHtcbiAgY29sb3I6ICMwMDcxOTggIWltcG9ydGFudDtcbn1cblxuLyogYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzAwNzE5OCFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogLjkhaW1wb3J0YW50O1xufSAqL1xuLyogYTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiByZWQhaW1wb3J0YW50O1xufSAqL1xuLmxpc3QtbWQgLml0ZW0taW5wdXQubmctdmFsaWQuaXRlbS1pbnB1dC1oYXMtdmFsdWU6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdCguaXRlbS1pbnB1dC1oYXMtZm9jdXMpOmxhc3QtY2hpbGQsXG4ubGlzdC1tZCAuaXRlbS1pbnB1dC5uZy12YWxpZC5pbnB1dC1oYXMtdmFsdWU6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdCguaXRlbS1pbnB1dC1oYXMtZm9jdXMpOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZGVkZWRlICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm5vcm1hbCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4ubm9ybWFsIC5zd2lwZXItc2xpZGUge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuLm5vcm1hbCAuc3dpcGVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4vKiAuc2xpZGUtem9vbSAubmctc3Rhci1pbnNlcnRlZHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0gKi9cbi5ib3JyYXIge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jYWJlY2VyYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODcxOTU7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmdyaWQge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cblxuLnRhcmpldGEge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbn1cblxuLmxvZ29DdWlkYSB7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubG9nb0lyQUN1cmEge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbmE6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjMDBCNkEzICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAuOSAhaW1wb3J0YW50O1xufVxuXG4udHJpYW5ndWxvIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjMjA2NjhCO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG5hOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzIwNjY4Qjtcbn1cblxuYTpob3ZlcjphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2xpZGVyIC5zbGlkZXItcGFnZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmFsaWduVmVydGljYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hbGlnblZlcnRpY2FsIGlvbi1pY29uIHtcbiAgY29sb3I6ICM0QTRBNEE7XG4gIGZvbnQtc2l6ZTogMS40ZW0gIWltcG9ydGFudDtcbn1cblxuLmV4cGFuZC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2YwNmU1YSAhaW1wb3J0YW50O1xufVxuXG4vKiBlc3RpbG9zIElPUyAqL1xuLnRpdGxlLWlvcyB7XG4gIG1hcmdpbi1sZWZ0OiAtNDVweCAhaW1wb3J0YW50O1xufVxuXG4uZGlhIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLmRpYXNEb2N0b3Ige1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuXG5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciBpb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmhvcmFyaW9zRGlzcG9uaWJsZXMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRlbmVkb3JIb3JhcyB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmJveC1tYWluLWNvbnRlbnQge1xuICB3aWR0aDogOTIlO1xuICBtYXJnaW4tbGVmdDogNCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uYm94LW1haW4tY29udGVudCAuZGF0b3NEb2N0b3Ige1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5ib3gtbWFpbi1jb250ZW50IC5kaXNwb25pYmxlcyB7XG4gIG1hcmdpbi10b3A6IC0xNnB4O1xufVxuLmJveC1tYWluLWNvbnRlbnQgLmRpc3BvbmlibGVzIC5kaWFzQ2l0YXMge1xuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi5ib3gtbWFpbi1jb250ZW50IC5kaXNwb25pYmxlcyAuZGlhc0NpdGFzIHAge1xuICBjb2xvcjogIzA1MkY1MTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbi5ib3gtbWFpbi1jb250ZW50IC5kaXNwb25pYmxlcyAuZGlhc0NpdGFzIHVsIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgMTBweCAhaW1wb3J0YW50O1xufVxuLmJveC1tYWluLWNvbnRlbnQgLmRpc3BvbmlibGVzIC5kaWFzQ2l0YXMgdWwgbGkge1xuICAvKiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jazsgKi9cbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjRkY2MzRDO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC8qICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJveC1tYWluLWNvbnRlbnQgLmRpc3BvbmlibGVzIC5kaWFzQ2l0YXMgdWwgbGkgLmJveC1kYXkge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5ib3gtbWFpbi1jb250ZW50IC5kaXNwb25pYmxlcyAuZGlhc0NpdGFzIHVsIHNwYW4ge1xuICBjb2xvcjogIzA1MkY1MTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLmJveC1tYWluLWNvbnRlbnQgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMyMDY2OEIgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG4uYm94LW1haW4tY29udGVudCAuaG9yYXNDaXRhcyB7XG4gIG1hcmdpbi10b3A6IC0xNnB4O1xuICBiYWNrZ3JvdW5kOiAjMjA2NjhCO1xufVxuLmJveC1tYWluLWNvbnRlbnQgLmhvcmFzQ2l0YXMgLmJveC1ob3VyIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5ib3gtbWFpbi1jb250ZW50IC5ob3Jhc0NpdGFzIC5ib3gtaG91ciAucC1ob3VyLWRpc3BvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5ib3gtbWFpbi1jb250ZW50IC5ob3Jhc0NpdGFzIC5ib3gtaG91ciAuYm94LWhvdXItbWFpbiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uYm94LW1haW4tY29udGVudCAuaG9yYXNDaXRhcyAuYm94LWhvdXIgLmJveC1ob3VyLW1haW4gLmhvdXJkaXNwbyB7XG4gIGJhY2tncm91bmQ6ICMwNTJGNTE7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwLjJlbSAwO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ib3gtbWFpbi1jb250ZW50IC5ob3Jhc0NpdGFzIC5ib3gtaG91ciAuYm94LWhvdXItbWFpbiAuZGVzYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzkxOTE5MTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAuMmVtIDA7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/card-cuida/card-cuida.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/card-cuida/card-cuida.page.ts ***!
  \*****************************************************/
/*! exports provided: CardCuidaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardCuidaPage", function() { return CardCuidaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_hello_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/hello.service */ "./src/app/services/hello.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







let CardCuidaPage = class CardCuidaPage {
    constructor(modalCtrl, helloPvr, elementRef, render, alertContrl, loadingCtrl, router) {
        this.modalCtrl = modalCtrl;
        this.helloPvr = helloPvr;
        this.elementRef = elementRef;
        this.render = render;
        this.alertContrl = alertContrl;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this._doctors = [];
        this.doctors = [];
        this.search = '';
        this.doctor = 0;
        this.horas = [];
        this.numDays = 6;
        this.servicios = [];
        this.doctoresData = [];
        this.itemExpanded = true;
        this.itemExpandHeight = 350;
        this.changueColor = false;
        this.hora = [];
        this.disponibles = true;
        this.SERVERImage = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_IMAGES"];
        this.mostrar = true;
        this.escogido = 44;
    }
    ngOnInit() {
        this.hora = null;
        /* this.hora = this.navParams.get('hora');
        this.doctor = this.navParams.get('doctor');
        this.available = this.navParams.get('available'); */
        if (this.hora) {
            let datos = {
                hora: this.hora,
                doctor: this.doctor,
                available: this.available
            };
            this.router.navigate(['financer', datos]);
        }
        else {
            console.log("no trae data, seguir con el proceso normal");
        }
        this.id = 38;
        this.fromDate = moment__WEBPACK_IMPORTED_MODULE_6__().format("YYYY-MM-DD");
        this.toDate = moment__WEBPACK_IMPORTED_MODULE_6__().add(this.numDays, "day").format("YYYY-MM-DD");
        this.disponibles = true;
        /*     llamada en la carga de la pagina para invocar a los servicios por defecto carga los doctores de medicina general*/
        this.helloPvr.getServicios().subscribe((servicios) => {
            this.servicios = servicios.centers[0].services.filter(x => x.block == 'cuida');
            console.log('this.servicios:', this.servicios);
            if (this.servicios.length > 0) {
                this.id = this.servicios[0].id;
                this.getDoctorsList();
            }
            if (servicios.length == 0) {
                this.sesionExpired();
            }
            if (servicios.status == false) {
                console.log('mostrar alert con error');
            }
        });
    }
    errorHandler(event) {
        event.target.src = "https://1.bp.blogspot.com/-p8EFlkXywyE/UDZvWTyr1bI/AAAAAAAAEU0/xL8pmKN1KOY/s1600/facebook.png";
    }
    sesionExpired() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertContrl.create({
                header: 'Sesión expirada',
                message: 'necesitas reiniciar sesión',
                buttons: [{
                        text: 'Ok',
                        handler: () => {
                            this.router.navigate(['login']);
                            /* this.navCtrl.push(LoginPage); */
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    /*   AQUI OBTENEMOS LOS DOCTORES EN LA CARGA DE LA PAGINA, POR DEFECTO TENEMOS A LOS DOCTORES DE MEDICINA GENERAL */
    getDoctorsList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.doctors = "";
            const loading = yield this.loadingCtrl.create({
                message: 'Cargando Doctores...',
                spinner: 'dots',
                duration: 4000
            });
            yield loading.present();
            /* const basicServiceId = this.id */
            /* console.log('basicServiceId' ,basicServiceId); */
            this.helloPvr.getDoctorsPerId(this.id).subscribe(doctors => {
                this.disponibles = false;
                if (doctors.length === 0) {
                    this.disponibles = true;
                    return null;
                }
                console.log(doctors);
                this.doctors = doctors;
                for (let doctor of doctors) {
                    this.helloPvr.getAvailablesPerDoctor(doctor.id, this.escogido, doctor.service.id, this.fromDate, this.toDate).subscribe((availables) => {
                        if (availables && availables.length > 0) {
                            doctor.availables = availables;
                            doctor.isAvailable = true;
                            doctor.expanded = false;
                        }
                    });
                }
                this.doctorsF = this.doctors;
                console.log('this.doctors:', this.doctorsF);
            });
            // loading.dismiss();
        });
    }
    onChangueSpecialty(specialty) {
        console.log('specialty en onChangueSpecialty:', specialty);
        this.id = specialty;
        this.getDoctorsList();
    }
    getDoctorsPerDay() {
        this.toDate = moment__WEBPACK_IMPORTED_MODULE_6__(this.fromDate).add(this.numDays, "day").format("YYYY-MM-DD");
        this.getDoctorsList();
    }
    buscarDoctor() {
        if (this.search.length == 1) {
            this.doctorsF = [];
            return;
        }
        console.log(this.search);
        if (this.search.length == 0) {
            /*     console.log('no hay busqueda');
                console.log(this.doctors); */
            this.doctorsF = this.doctors;
            return;
        }
        this.doctorsF = this.doctors.filter(doctor => {
            const isOk = doctor.fullName.toLowerCase().indexOf((this.search).toLowerCase()) != -1;
            return isOk;
        });
    }
    stateShow(item, index, items) {
        console.log(item, index, items);
        this.boxID = item;
        this.boxCaID = index;
        this.selectedDay = items;
    }
    expandedItem(doctor, available) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.hora) {
                const loading = yield this.loadingCtrl.create({
                    message: 'Cargando horas disponibles...',
                    spinner: 'bubbles',
                });
                yield loading.present();
                console.log('doctor:', doctor, available);
                this.selectedDay = available;
                console.log('selectedDay:', this.selectedDay);
                let id = doctor.id;
                let serviceId = doctor.service.id;
                let fromDate = this.selectedDay.date;
                let toDate = this.selectedDay.date;
                this.helloPvr.getAvailablesPerDoctor(id, this.escogido, serviceId, fromDate, toDate).subscribe(hoy => {
                    console.log('hoy', hoy);
                    this.dias = hoy[0].hours;
                    // console.log('this.dias:',this.dias);
                    this.doctors.map((listDoctor) => {
                        if (doctor == listDoctor) {
                            listDoctor.expanded = true;
                        }
                        else {
                            listDoctor.expanded = false;
                        }
                        return listDoctor;
                    });
                    this.horas = this.dias;
                    this.horasConsulta = this.dias.filter(x => x.params.provisionId[0] === 44);
                    if (this.horasConsulta.length > 0) {
                        this.mostrar = false;
                    }
                    else {
                        this.mostrar = true;
                    }
                    this.horasTele = this.dias.filter(x => x.params.provisionId[0] === 838517);
                    if (this.horasTele.length > 0) {
                        this.mostrar = false;
                    }
                    else {
                        this.mostrar = true;
                    }
                    console.log('horasConsulta:', this.horasTele, this.horasConsulta);
                    loading.dismiss();
                    console.log('las horas:', this.horas);
                    this.dia = available.date;
                    // console.log('dias', this.dias);
                });
            }
            else {
                console.log('doctor:', doctor, available);
                this.selectedDay = available;
                let id = doctor.id;
                let serviceId = doctor.service.id;
                let fromDate = this.selectedDay.date;
                let toDate = this.selectedDay.date;
                this.helloPvr.getAvailablesPerDoctor(id, this.escogido, serviceId, fromDate, toDate).subscribe(hoy => {
                    console.log('hoy', hoy);
                    this.dias = hoy[0].hours;
                    console.log('this.dias:', this.dias);
                    this.doctors.map((listDoctor) => {
                        if (doctor == listDoctor) {
                            listDoctor.expanded = true;
                        }
                        else {
                            listDoctor.expanded = false;
                        }
                        return listDoctor;
                    });
                    this.horas = this.dias;
                    const horasConsulta = this.dias.filter(x => x.params.provisionId[0] === 838517);
                    console.log('horasConsulta:', horasConsulta);
                    console.log('las horas:', this.horas);
                    this.dia = available.date;
                    // console.log('dias', this.dias);
                });
            }
        });
    }
    goToFinancer(doctor, hora) {
        console.log('doctor:', doctor);
        console.log('hora:', hora);
        console.log(this.selectedDay);
        let role = localStorage.getItem('role');
        if (role === 'public') {
            const datos = {
                centerId: hora.params.centerId,
                servicio_id: hora.params.serviceId,
                prestacion: hora.params.provisionId,
                medico_id: doctor.id,
                proposedate: this.selectedDay.date,
                hora: hora,
                /*  encuentro: this.escogido, */
                doctor: {
                    id: doctor.id,
                    fullname: doctor.fullName,
                    info: doctor.info,
                    service: doctor.service,
                    cmp: doctor.cmp
                }
            };
            const data = JSON.stringify(datos);
            this.router.navigate(['login', data]);
            // datos.present();
        }
        else {
            const datos = {
                centerId: hora.params.centerId,
                servicio_id: hora.params.serviceId,
                prestacion: hora.params.provisionId,
                medico_id: doctor.id,
                proposedate: this.selectedDay.date,
                hora: hora,
                /* encuentro: this.escogido, */
                doctor: {
                    id: doctor.id,
                    fullname: doctor.fullName,
                    info: doctor.info,
                    service: doctor.service,
                    cmp: doctor.cmp
                }
            };
            const data = JSON.stringify(datos);
            this.router.navigate(['financer', data]);
        }
    }
    nextSlide() {
        console.log('slideNext');
        /* this.slides.slideNext(); */
    }
    slidePrev() {
        console.log('slidePrev');
        /* this.slides.slidePrev(); */
    }
    goToCura() {
        this.router.navigate(['card']);
        /* this.navCtrl.push(CardCuidaPage); */
    }
};
CardCuidaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_hello_service__WEBPACK_IMPORTED_MODULE_2__["HelloService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('MyDays')
], CardCuidaPage.prototype, "MyDays", void 0);
CardCuidaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-cuida',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./card-cuida.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/card-cuida/card-cuida.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./card-cuida.page.scss */ "./src/app/pages/card-cuida/card-cuida.page.scss")).default]
    })
], CardCuidaPage);



/***/ })

}]);
//# sourceMappingURL=pages-card-cuida-card-cuida-module.js.map