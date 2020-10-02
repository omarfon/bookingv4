(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-card-card-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/card/card.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/card/card.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\" hideBackButton=\"true\" persistent=\"true\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"first\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <img class=\"logoCura\" src=\"assets/imgs/curaBlanco.png\" alt=\"\">\n    </ion-title>\n    <!--    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"goToCuida()\" slot=\"end\" clear>\n        <img class=\"logoIrACuida\" src=\"assets/imgs/logoCuidaWhite.png\" alt=\"\">\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content #mycontent fullscreen>\n  <div [scrollArea]=\"mycontent\">\n    <div id=\"busqueda\">\n      <ion-list padding>\n        <ion-item>\n          <ion-label position=\"floating\">Busca por especialidad</ion-label>\n          <ion-select *ngIf=\"servicios\" [(ngModel)]=\"id\" #specialty (ionChange)=\"onChangueSpecialty(specialty.value)\">\n            <ion-select-option [value]=\"specialty.id\" *ngFor=\"let specialty of servicios\">{{specialty.description}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-searchbar showCancelButton=\"never\" (keyup)=\"buscarDoctor()\" [(ngModel)]=\"search\"\n          placeholder=\"Busca por nombre\">\n        </ion-searchbar>\n\n        <ion-item>\n          <ion-label position=\"floating\">Busca por fecha</ion-label>\n          <ion-input type=\"date\" (ionChange)=\"getDoctorsPerDay()\" [(ngModel)]=\"fromDate\"></ion-input>\n        </ion-item>\n\n      </ion-list>\n    </div>\n  </div>\n\n  <div *ngFor=\"let item of doctorsF; let itemDoctor = index\">\n    <div class=\"box-main-content\" [ngStyle]=\"{'display': item.isAvailable ? 'block' : 'none'}\">\n      <div class=\"datosDoctor\">\n        <ion-row>\n          <ion-col size=\"4\" class=\"imageDoctor\">\n            <img src=\"{{SERVERImage}}{{item.id}}.png\" (error)=\"errorHandler($event)\" alt=\"\">\n          </ion-col>\n          <ion-col size=\"8\" right>\n            <p class=\"doctor\">{{ item.fullName | lowercase}}</p>\n            <p class=\"especialidad\">{{item.service.description | lowercase}}</p>\n            <p class=\"centro\">Centro: Mendiola</p>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div class=\"disponibles\">\n        <div class=\"diasCitas\">\n          <p>Próximos días disponibles</p>\n          <ul>\n            <ion-row>\n              <ion-col size=\"2\" *ngFor=\"let items of item.availables; let index = index\">\n                <li (click)=\"stateShow(itemDoctor, index, items)\"\n                  [ngClass]=\"{'active': boxCaID == index && itemDoctor === boxID}\">\n                  <div class=\"box-day\" id=\"{{index}}\">{{items.date | date:'fullDate' :'es' | slice:0:3}}</div>\n                </li>\n                <span class=\"day\">{{items.date | date:'dd':'es'}}</span>\n              </ion-col>\n            </ion-row>\n          </ul>\n        </div>\n        <div class=\"horasCitas\">\n          <div style=\"overflow: hidden;\" *ngFor=\"let itemss of item.availables; let ii = index\">\n            <div *ngIf=\"itemDoctor === boxID && boxCaID === ii\" id=\"{{ii}}\" class=\"box-hour\">\n              <!-- <p class=\"p-hour-dispo\">Horario disponible Consulta Externa</p> -->\n              <div class=\"box-hour-main\">\n                <ion-row>\n                  <ion-col size=\"3\" *ngFor=\"let items of itemss.hours; let indexxx = index\">\n                    <span id=\"{{'span-elegir-doctor-horaydia-'+item.service.idTraking}}\">\n                      <div\n                        [ngClass]=\"{'hourdispo': itemss.hours[indexxx].isAvailable === true, 'desactive': itemss.hours[indexxx].isAvailable === false}\"\n                        (click)=\"goToFinancer(item,items)\">\n                        {{items.hour | slice:0:5}}\n                      </div>\n                    </span>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"doctorsF.length < 1\">\n    <div>\n      <p class=\"textoSalva\">No hay doctores disponibles para esta especialidad en este momento.... </p>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/card/card-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/card/card-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPageRoutingModule", function() { return CardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.page */ "./src/app/pages/card/card.page.ts");




const routes = [
    {
        path: '',
        component: _card_page__WEBPACK_IMPORTED_MODULE_3__["CardPage"]
    }
];
let CardPageRoutingModule = class CardPageRoutingModule {
};
CardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CardPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/card/card.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/card/card.module.ts ***!
  \*******************************************/
/*! exports provided: CardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPageModule", function() { return CardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _card_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-routing.module */ "./src/app/pages/card/card-routing.module.ts");
/* harmony import */ var _card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card.page */ "./src/app/pages/card/card.page.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");













let CardPageModule = class CardPageModule {
};
CardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _card_routing_module__WEBPACK_IMPORTED_MODULE_5__["CardPageRoutingModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"]
        ],
        declarations: [_card_page__WEBPACK_IMPORTED_MODULE_6__["CardPage"]]
    })
], CardPageModule);



/***/ }),

/***/ "./src/app/pages/card/card.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/card/card.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f1f3f8;\n  height: 100vh;\n  padding-bottom: 220px !important;\n  margin-bottom: 150px !important;\n}\n\n.list-md {\n  background: #F9FBFB !important;\n}\n\n.item-md {\n  background: transparent !important;\n}\n\n#busqueda {\n  margin-top: 10px;\n  width: 95%;\n  margin-left: 2.5%;\n  height: 200px;\n}\n\n.swiper-slide {\n  width: 60px !important;\n  height: auto;\n}\n\n.dentroExpandable {\n  height: 60px;\n}\n\n.dentroExpandable p {\n  margin-top: -15px;\n}\n\n.swiper-container {\n  height: 55px !important;\n  width: 95%;\n  margin-left: 2.5%;\n}\n\n.centerItemsDays {\n  text-align: center;\n}\n\n.centerItemsDays p {\n  color: #4A4A4A;\n}\n\n.doctor {\n  font-weight: 200;\n  width: 90%;\n  margin-left: 5%;\n  color: #00B6A3;\n  font-size: 1.5em;\n  text-align: right;\n  margin-right: 15px;\n  line-height: 1.2em;\n  margin-top: 10px;\n  text-transform: capitalize;\n}\n\n.especialidad {\n  text-align: right;\n  color: grey;\n  margin-right: 15px;\n  font-size: 1.2em;\n  font-weight: lighter;\n  margin-top: 0 !important;\n  text-transform: capitalize;\n}\n\n.centro {\n  text-align: right;\n  margin-right: 15px;\n  font-size: 1.2em;\n  color: grey;\n  font-weight: 300;\n}\n\n.diasLibres {\n  text-align: center;\n}\n\n.diasLibres h6 {\n  font-size: 1.1em;\n  color: grey;\n  text-align: center;\n}\n\n.imageSlider {\n  width: 150px;\n  margin-left: calc(50% - 75px);\n  margin-top: 1em;\n  border-radius: 50%;\n}\n\n.cardSlider {\n  text-align: center;\n  width: 250px;\n}\n\n.tituloSlider {\n  color: #00B6A3;\n  font-size: 1.4em;\n  text-align: center;\n  line-height: 1.2em;\n  width: 80%;\n  margin: 8%;\n}\n\na {\n  background: #20668B;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  /*  margin-left: 15px; */\n  display: flex;\n  text-align: center;\n  justify-content: space-around;\n  align-items: center;\n  color: #fff;\n  font-size: 1.1em;\n  font-weight: 400;\n}\n\n.imageDoctor img {\n  border-radius: 15px;\n  margin-top: 1em;\n  margin-left: 1em;\n}\n\n.containerDays {\n  width: 90%;\n  margin-left: 5%;\n  transition: cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\n.item-label-stacked .select-md,\n.item-label-floating .select-md,\n.item-input-has-focus .label-md[floating],\n.input-has-focus .label-md[floating],\n.item-input-has-value .label-md[floating],\n.input-has-value .label-md[floating] {\n  color: #287195;\n}\n\n/*     .horas {\n    font-size: 1em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 35px!important;\n    p {\n        color: #fff;\n        border-radius: 20px;\n        padding: .1em .7em;\n        background: #20668B;\n        font-weight: 400;\n    }\n} */\n\n.horas {\n  font-size: 1em;\n  text-align: center;\n}\n\n.horas p {\n  background: #fff;\n  border-radius: 5px;\n  padding: 0.2em 0.6em;\n  color: #20668B;\n  border: 1px solid #20668B;\n  font-weight: 400;\n  margin-left: 10px;\n}\n\n.icono {\n  margin-top: 15px;\n  color: grey;\n}\n\n.textoCitas {\n  color: blue;\n  margin-top: 50px;\n  text-align: center;\n}\n\n.gris {\n  background: red;\n}\n\n.mat-expansion-indicator {\n  color: #007198 !important;\n}\n\na:focus {\n  background: #00B6A3 !important;\n  opacity: 0.9 !important;\n}\n\n.triangulo {\n  font-size: 1em;\n  background: none;\n  color: #20668B;\n  margin-top: -10px;\n}\n\n/*    a:after{\n    content:'';\n    border-style: solid;\n    border-width:0 25px 25px 25px;\n    border-color:transparent transparent #519DB9 transparent;\n    position: absolute;\n    top: 75px;\n    display: none; \n    z-index: 100;\n} */\n\na:hover:after {\n  display: block;\n}\n\na:hover {\n  background: #f74f35 !important;\n}\n\na:active {\n  background: #f74f35 !important;\n}\n\n.list-md .item-input.ng-valid.item-input-has-value:not(.input-has-focus):not(.item-input-has-focus):last-child,\n.list-md .item-input.ng-valid.input-has-value:not(.input-has-focus):not(.item-input-has-focus):last-child {\n  border-bottom-color: #dedede !important;\n  box-shadow: none !important;\n}\n\n.normal {\n  width: 100% !important;\n}\n\n.normal .swiper-slide {\n  width: 100% !important;\n}\n\n.normal .swiper-container {\n  height: auto !important;\n}\n\n/*    .slide-zoom .ng-star-inserted{\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n} */\n\n.borrar {\n  display: none !important;\n}\n\n.cabecera {\n  --background: #287195;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.grid {\n  margin-left: 40px;\n}\n\n.tarjeta {\n  border-top-right-radius: 20px;\n  margin-top: 0 !important;\n  margin-bottom: 3px;\n  /* background:#F7FBFB; */\n}\n\n.logoCura {\n  width: 110px;\n  height: auto;\n}\n\n.alignVertical {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.alignVertical ion-icon {\n  color: #4A4A4A;\n  font-size: 1.4em !important;\n}\n\n.swiper-pagination {\n  margin-top: 15px !important;\n}\n\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  padding-top: 15px !important;\n}\n\n.slide-zoom .ng-star-inserted {\n  height: 40px;\n}\n\n.turno {\n  color: #fff;\n}\n\n.textoSalva {\n  color: #20668B;\n  text-align: center;\n  width: 80%;\n  margin-left: 10%;\n  margin-top: 100px;\n  font-size: 1.1em;\n}\n\n.slider .slider-pager {\n  text-align: right;\n}\n\n.logoIrACuida {\n  width: 100px;\n}\n\n.title-ios {\n  margin-left: -45px !important;\n}\n\n.consulta {\n  background: #20668B;\n}\n\n.consulta .horas p {\n  background: #052F51;\n  color: #fff;\n}\n\n.teleconsulta {\n  background: #519DB9 !important;\n}\n\n.teleconsulta .horas p {\n  background: #f74f35;\n  color: #fff !important;\n}\n\n.sinPadding {\n  padding: 0 !important;\n}\n\n.divisor {\n  margin-top: 5px;\n}\n\n.iconoFlag {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.iconoFlag img {\n  width: 35px;\n}\n\nion-label {\n  color: #20668B !important;\n}\n\n.select-text {\n  color: #20668B !important;\n}\n\n.contenedorHoras {\n  height: 50px;\n  margin-top: -10px;\n}\n\n.dia {\n  margin-top: 15px;\n  width: 30px;\n  height: 30px;\n  font-size: 0.8em;\n}\n\n.diasDoctor {\n  font-size: 0.9em;\n}\n\nmat-expansion-panel-header ion-slides {\n  height: 100px;\n}\n\n.horariosDisponibles {\n  width: 100%;\n}\n\n.mat-expansion-panel {\n  background-color: #fff;\n  min-height: 60px;\n  box-shadow: none;\n}\n\nmat-form-field {\n  color: red !important;\n}\n\nmat-datepicker {\n  color: #287195;\n}\n\n.bax-main-content:last-child {\n  padding-bottom: 100px !important;\n  padding-bottom: 90px;\n}\n\n.box-main-content {\n  width: 92%;\n  margin-left: 4%;\n  margin-bottom: 25px;\n}\n\n.box-main-content .datosDoctor {\n  background: #fff;\n  border-top-right-radius: 20px;\n  padding-bottom: 10px;\n}\n\n.box-main-content .disponibles {\n  margin-top: -16px;\n}\n\n.box-main-content .disponibles .diasCitas {\n  background: #f6f6f6;\n  padding-bottom: 15px;\n}\n\n.box-main-content .disponibles .diasCitas p {\n  color: #052F51;\n  text-align: right;\n  font-size: 0.9em;\n  margin-right: 16px;\n  padding-top: 8px;\n}\n\n.box-main-content .disponibles .diasCitas ul {\n  margin: 0 !important;\n  padding: 0 10px !important;\n}\n\n.box-main-content .disponibles .diasCitas ul li {\n  /*                      display: block; */\n  list-style-type: none;\n  background: #519DB9;\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n  /*                    text-align: center; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.box-main-content .disponibles .diasCitas ul li .box-day {\n  color: #fff;\n}\n\n.box-main-content .disponibles .diasCitas ul span {\n  color: #052F51;\n  margin-top: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 15px;\n}\n\n.box-main-content .active {\n  background: #20668B !important;\n  color: #fff;\n}\n\n.box-main-content .horasCitas {\n  margin-top: -16px;\n  background: #20668B;\n}\n\n.box-main-content .horasCitas .box-hour {\n  margin-bottom: 50px;\n}\n\n.box-main-content .horasCitas .box-hour .p-hour-dispo {\n  text-align: center;\n  color: #fff;\n  font-size: 0.9em;\n  margin-top: 10px;\n}\n\n.box-main-content .horasCitas .box-hour .box-hour-main {\n  margin-bottom: 10px;\n}\n\n.box-main-content .horasCitas .box-hour .box-hour-main .hourdispo {\n  background: #052F51;\n  color: #fff;\n  padding: 0.2em 0;\n  width: 80%;\n  margin-left: 10%;\n  border-radius: 5px;\n  text-align: center;\n}\n\n.box-main-content .horasCitas .box-hour .box-hour-main .desactive {\n  background: #919191;\n  color: #fff;\n  padding: 0.2em 0;\n  width: 80%;\n  margin-left: 10%;\n  border-radius: 5px;\n  text-align: center;\n  pointer-events: none;\n}\n\n.desactive .hourdispo {\n  background-color: #4A4A4A;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbWFyL3Byb3llY3Rvcy9EZXYvYm9va2luZ3Y0L3NyYy9hcHAvcGFnZXMvY2FyZC9jYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FyZC9jYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUNDUjs7QURFSTtFQUNJLDhCQUFBO0FDQ1I7O0FERUk7RUFDSSxrQ0FBQTtBQ0NSOztBREVJO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFFQSxhQUFBO0FDQVI7O0FER0k7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QUNBUjs7QURHSTtFQUNJLFlBQUE7QUNBUjs7QURFUTtFQUNJLGlCQUFBO0FDQVo7O0FESUk7RUFDSSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0RSOztBRElJO0VBQ0ksa0JBQUE7QUNEUjs7QURPUTtFQUNJLGNBQUE7QUNMWjs7QURTSTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDTlI7O0FEU0k7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0FDTlI7O0FEU0k7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNOUjs7QURTSTtFQUVJLGtCQUFBO0FDUFI7O0FEU1E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1BaOztBRFlJO0VBQ0ksWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDVFI7O0FEWUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNUUjs7QURZSTtFQUNJLGNB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QTtFQUNBLGtCQUFBO0FDekN4Qjs7QUQ0Q29CO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUMxQ3hCOztBRG1EUTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ2hEWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcmQvY2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgaW9uLWNvbnRlbnQge1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNmMWYzZjg7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMjBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNTBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5saXN0LW1kIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0Y5RkJGQiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5pdGVtLW1kIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAjYnVzcXVlZGEge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMi41JTtcbiAgICAgICAgLy8gYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cblxuICAgIC5zd2lwZXItc2xpZGUge1xuICAgICAgICB3aWR0aDogNjBweCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgLmRlbnRyb0V4cGFuZGFibGUge1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTVweCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zd2lwZXItY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiA1NXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xuICAgIH1cblxuICAgIC5jZW50ZXJJdGVtc0RheXMge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAgICAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLy8gYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogIzRBNEE0QTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kb2N0b3Ige1xuICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgICAgIGNvbG9yOiAjMDBCNkEzO1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cblxuICAgIC5lc3BlY2lhbGlkYWQge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuXG4gICAgLmNlbnRybyB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgIH1cblxuICAgIC5kaWFzTGlicmVzIHtcbiAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMCFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICBoNiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaW1hZ2VTbGlkZXIge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDc1cHgpO1xuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG5cbiAgICAuY2FyZFNsaWRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgIH1cblxuICAgIC50aXR1bG9TbGlkZXIge1xuICAgICAgICBjb2xvcjogIzAwQjZBMztcbiAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1hcmdpbjogOCU7XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyMDY2OEI7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgLyogIG1hcmdpbi1sZWZ0OiAxNXB4OyAqL1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG5cbiAgICAuaW1hZ2VEb2N0b3IgaW1nIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggMnB4IDNweCAjQTdBOUFDO1xuICAgIH1cblxuICAgIC5jb250YWluZXJEYXlzIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgICB0cmFuc2l0aW9uOiBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcbiAgICB9XG5cbiAgICAuaXRlbS1sYWJlbC1zdGFja2VkIC5zZWxlY3QtbWQsXG4gICAgLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnNlbGVjdC1tZCxcbiAgICAuaXRlbS1pbnB1dC1oYXMtZm9jdXMgLmxhYmVsLW1kW2Zsb2F0aW5nXSxcbiAgICAuaW5wdXQtaGFzLWZvY3VzIC5sYWJlbC1tZFtmbG9hdGluZ10sXG4gICAgLml0ZW0taW5wdXQtaGFzLXZhbHVlIC5sYWJlbC1tZFtmbG9hdGluZ10sXG4gICAgLmlucHV0LWhhcy12YWx1ZSAubGFiZWwtbWRbZmxvYXRpbmddIHtcbiAgICAgICAgY29sb3I6ICMyODcxOTU7XG5cbiAgICB9XG5cbiAgICAvKiAgICAgLmhvcmFzIHtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDM1cHghaW1wb3J0YW50O1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IC4xZW0gLjdlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMDY2OEI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG4gICAgfSAqL1xuICAgIC5ob3JhcyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHAge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IC4yZW0gLjZlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjMjA2NjhCO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIwNjY4QjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pY29ubyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIGNvbG9yOiBncmV5O1xuICAgIH1cblxuICAgIC50ZXh0b0NpdGFzIHtcbiAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuZ3JpcyB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICB9XG5cbiAgICAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3Ige1xuICAgICAgICBjb2xvcjogIzAwNzE5OCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGE6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDBCNkEzICFpbXBvcnRhbnQ7XG4gICAgICAgIG9wYWNpdHk6IC45ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnRyaWFuZ3VsbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBjb2xvcjogIzIwNjY4QjtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgfVxuXG4gICAgLyogICAgYTphZnRlcntcbiAgICAgICAgY29udGVudDonJztcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOjAgMjVweCAyNXB4IDI1cHg7XG4gICAgICAgIGJvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjNTE5REI5IHRyYW5zcGFyZW50O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNzVweDtcbiAgICAgICAgZGlzcGxheTogbm9uZTsgXG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICB9ICovXG5cbiAgICBhOmhvdmVyOmFmdGVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgYTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNzRmMzUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBhOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNzRmMzUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubGlzdC1tZCAuaXRlbS1pbnB1dC5uZy12YWxpZC5pdGVtLWlucHV0LWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cyk6bGFzdC1jaGlsZCxcbiAgICAubGlzdC1tZCAuaXRlbS1pbnB1dC5uZy12YWxpZC5pbnB1dC1oYXMtdmFsdWU6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdCguaXRlbS1pbnB1dC1oYXMtZm9jdXMpOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZGVkZWRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubm9ybWFsIHtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblxuICAgICAgICAuc3dpcGVyLXNsaWRlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuc3dpcGVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qICAgIC5zbGlkZS16b29tIC5uZy1zdGFyLWluc2VydGVke1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9ICovXG4gICAgLmJvcnJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuY2FiZWNlcmEge1xuICAgICAgICAtLWJhY2tncm91bmQ6ICMyODcxOTU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuZ3JpZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIH1cblxuICAgIC50YXJqZXRhIHtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICAvKiBiYWNrZ3JvdW5kOiNGN0ZCRkI7ICovXG4gICAgfVxuXG4gICAgLmxvZ29DdXJhIHtcbiAgICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgLmFsaWduVmVydGljYWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogIzRBNEE0QTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40ZW0gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuc2xpZGUtem9vbSAubmctc3Rhci1pbnNlcnRlZCB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG5cbiAgICAudHVybm8ge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAudGV4dG9TYWx2YSB7XG4gICAgICAgIGNvbG9yOiAjMjA2NjhCO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIH1cblxuICAgIC5zbGlkZXIgLnNsaWRlci1wYWdlciB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cblxuICAgIC5sb2dvSXJBQ3VpZGEge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuXG4gICAgLnRpdGxlLWlvcyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNDVweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jb25zdWx0YSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyMDY2OEI7XG5cbiAgICAgICAgLmhvcmFzIHtcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwNTJGNTE7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGVsZWNvbnN1bHRhIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzUxOURCOSAhaW1wb3J0YW50O1xuXG4gICAgICAgIC5ob3JhcyB7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjc0ZjM1O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2luUGFkZGluZyB7XG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuZGl2aXNvciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB9XG5cbiAgICAuaWNvbm9GbGFnIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICMyMDY2OEIgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuc2VsZWN0LXRleHQge1xuICAgICAgICBjb2xvcjogIzIwNjY4QiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jb250ZW5lZG9ySG9yYXMge1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIH1cblxuICAgIC5kaWEge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgfVxuXG4gICAgLmRpYXNEb2N0b3Ige1xuICAgICAgICBmb250LXNpemU6IC45ZW07XG4gICAgfVxuXG4gICAgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgICAgICBpb24tc2xpZGVzIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaG9yYXJpb3NEaXNwb25pYmxlcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgbWluLWhlaWdodDogNjBweDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG5cbiAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBtYXQtZGF0ZXBpY2tlciB7XG4gICAgICAgIGNvbG9yOiAjMjg3MTk1O1xuICAgIH1cblxuICAgIC8vc3RpbG9zIGNhcmQgbnVldm9cbiAgICAuYmF4LW1haW4tY29udGVudDpsYXN0LWNoaWxkIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA5MHB4O1xuICAgIH1cblxuICAgIC5ib3gtbWFpbi1jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDkyJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuXG4gICAgICAgIC5kYXRvc0RvY3RvciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kaXNwb25pYmxlcyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTZweDtcblxuICAgICAgICAgICAgLmRpYXNDaXRhcyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcblxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzA1MkY1MTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOyAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzUxOURCOTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLyogICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5ib3gtZGF5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzA1MkY1MTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMDY2OEIgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhvcmFzQ2l0YXMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE2cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjA2NjhCO1xuXG5cbiAgICAgICAgICAgIC5ib3gtaG91ciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcblxuICAgICAgICAgICAgICAgIC5wLWhvdXItZGlzcG8ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC45ZW07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmJveC1ob3VyLW1haW4ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIC5ob3VyZGlzcG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzA1MkY1MTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogLjJlbSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZGVzYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5MTkxOTE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC4yZW0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kZXNhY3RpdmUge1xuICAgICAgICAuaG91cmRpc3BvIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0QTRBNEE7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgIH0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2YxZjNmODtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZy1ib3R0b206IDIyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0LW1kIHtcbiAgYmFja2dyb3VuZDogI0Y5RkJGQiAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1tZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbiNidXNxdWVkYSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbi1sZWZ0OiAyLjUlO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgd2lkdGg6IDYwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uZGVudHJvRXhwYW5kYWJsZSB7XG4gIGhlaWdodDogNjBweDtcbn1cbi5kZW50cm9FeHBhbmRhYmxlIHAge1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbn1cblxuLnN3aXBlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDU1cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luLWxlZnQ6IDIuNSU7XG59XG5cbi5jZW50ZXJJdGVtc0RheXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2VudGVySXRlbXNEYXlzIHAge1xuICBjb2xvcjogIzRBNEE0QTtcbn1cblxuLmRvY3RvciB7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgY29sb3I6ICMwMEI2QTM7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5lc3BlY2lhbGlkYWQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IGdyZXk7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5jZW50cm8ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmRpYXNMaWJyZXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGlhc0xpYnJlcyBoNiB7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGNvbG9yOiBncmV5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZVNsaWRlciB7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC0gNzVweCk7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2FyZFNsaWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4udGl0dWxvU2xpZGVyIHtcbiAgY29sb3I6ICMwMEI2QTM7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDglO1xufVxuXG5hIHtcbiAgYmFja2dyb3VuZDogIzIwNjY4QjtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAvKiAgbWFyZ2luLWxlZnQ6IDE1cHg7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuMWVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uaW1hZ2VEb2N0b3IgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuXG4uY29udGFpbmVyRGF5cyB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgdHJhbnNpdGlvbjogY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG59XG5cbi5pdGVtLWxhYmVsLXN0YWNrZWQgLnNlbGVjdC1tZCxcbi5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zZWxlY3QtbWQsXG4uaXRlbS1pbnB1dC1oYXMtZm9jdXMgLmxhYmVsLW1kW2Zsb2F0aW5nXSxcbi5pbnB1dC1oYXMtZm9jdXMgLmxhYmVsLW1kW2Zsb2F0aW5nXSxcbi5pdGVtLWlucHV0LWhhcy12YWx1ZSAubGFiZWwtbWRbZmxvYXRpbmddLFxuLmlucHV0LWhhcy12YWx1ZSAubGFiZWwtbWRbZmxvYXRpbmddIHtcbiAgY29sb3I6ICMyODcxOTU7XG59XG5cbi8qICAgICAuaG9yYXMge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDM1cHghaW1wb3J0YW50O1xuICAgIHAge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgcGFkZGluZzogLjFlbSAuN2VtO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMjA2NjhCO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbn0gKi9cbi5ob3JhcyB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaG9yYXMgcCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMC4yZW0gMC42ZW07XG4gIGNvbG9yOiAjMjA2NjhCO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjA2NjhCO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmljb25vIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi50ZXh0b0NpdGFzIHtcbiAgY29sb3I6IGJsdWU7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdyaXMge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5tYXQtZXhwYW5zaW9uLWluZGljYXRvciB7XG4gIGNvbG9yOiAjMDA3MTk4ICFpbXBvcnRhbnQ7XG59XG5cbmE6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjMDBCNkEzICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAuOSAhaW1wb3J0YW50O1xufVxuXG4udHJpYW5ndWxvIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjMjA2NjhCO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuLyogICAgYTphZnRlcntcbiAgICBjb250ZW50OicnO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOjAgMjVweCAyNXB4IDI1cHg7XG4gICAgYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM1MTlEQjkgdHJhbnNwYXJlbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNzVweDtcbiAgICBkaXNwbGF5OiBub25lOyBcbiAgICB6LWluZGV4OiAxMDA7XG59ICovXG5hOmhvdmVyOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjc0ZjM1ICFpbXBvcnRhbnQ7XG59XG5cbmE6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2Y3NGYzNSAhaW1wb3J0YW50O1xufVxuXG4ubGlzdC1tZCAuaXRlbS1pbnB1dC5uZy12YWxpZC5pdGVtLWlucHV0LWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cyk6bGFzdC1jaGlsZCxcbi5saXN0LW1kIC5pdGVtLWlucHV0Lm5nLXZhbGlkLmlucHV0LWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cyk6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNkZWRlZGUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubm9ybWFsIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5ub3JtYWwgLnN3aXBlci1zbGlkZSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4ubm9ybWFsIC5zd2lwZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi8qICAgIC5zbGlkZS16b29tIC5uZy1zdGFyLWluc2VydGVke1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSAqL1xuLmJvcnJhciB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmNhYmVjZXJhIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjg3MTk1O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ncmlkIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG5cbi50YXJqZXRhIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAvKiBiYWNrZ3JvdW5kOiNGN0ZCRkI7ICovXG59XG5cbi5sb2dvQ3VyYSB7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uYWxpZ25WZXJ0aWNhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFsaWduVmVydGljYWwgaW9uLWljb24ge1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZm9udC1zaXplOiAxLjRlbSAhaW1wb3J0YW50O1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24ge1xuICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG4gIHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zbGlkZS16b29tIC5uZy1zdGFyLWluc2VydGVkIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4udHVybm8ge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRleHRvU2FsdmEge1xuICBjb2xvcjogIzIwNjY4QjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgZm9udC1zaXplOiAxLjFlbTtcbn1cblxuLnNsaWRlciAuc2xpZGVyLXBhZ2VyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5sb2dvSXJBQ3VpZGEge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi50aXRsZS1pb3Mge1xuICBtYXJnaW4tbGVmdDogLTQ1cHggIWltcG9ydGFudDtcbn1cblxuLmNvbnN1bHRhIHtcbiAgYmFja2dyb3VuZDogIzIwNjY4Qjtcbn1cbi5jb25zdWx0YSAuaG9yYXMgcCB7XG4gIGJhY2tncm91bmQ6ICMwNTJGNTE7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udGVsZWNvbnN1bHRhIHtcbiAgYmFja2dyb3VuZDogIzUxOURCOSAhaW1wb3J0YW50O1xufVxuLnRlbGVjb25zdWx0YSAuaG9yYXMgcCB7XG4gIGJhY2tncm91bmQ6ICNmNzRmMzU7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5zaW5QYWRkaW5nIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4uZGl2aXNvciB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmljb25vRmxhZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmljb25vRmxhZyBpbWcge1xuICB3aWR0aDogMzVweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6ICMyMDY2OEIgIWltcG9ydGFudDtcbn1cblxuLnNlbGVjdC10ZXh0IHtcbiAgY29sb3I6ICMyMDY2OEIgIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbmVkb3JIb3JhcyB7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbi5kaWEge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4uZGlhc0RvY3RvciB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIGlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uaG9yYXJpb3NEaXNwb25pYmxlcyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG5tYXQtZGF0ZXBpY2tlciB7XG4gIGNvbG9yOiAjMjg3MTk1O1xufVxuXG4uYmF4LW1haW4tY29udGVudDpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA5MHB4O1xufVxuXG4uYm94LW1haW4tY29udGVudCB7XG4gIHdpZHRoOiA5MiU7XG4gIG1hcmdpbi1sZWZ0OiA0JTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5ib3gtbWFpbi1jb250ZW50IC5kYXRvc0RvY3RvciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5ib3gtbWFpbi1jb250ZW50IC5kaXNwb25pYmxlcyB7XG4gIG1hcmdpbi10b3A6IC0xNnB4O1xufVxuLmJveC1tYWluLWNvbnRlbnQgLmRpc3BvbmlibGVzIC5kaWFzQ2l0YXMge1xuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi5ib3gtbWFpbi1jb250ZW50IC5kaXNwb25pYmxlcyAuZGlhc0NpdGFzIHAge1xuICBjb2xvcjogIzA1MkY1MTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbi5ib3gtbWFpbi1jb250ZW50IC5kaXNwb25pYmxlcyAuZGlhc0NpdGFzIHVsIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgMTBweCAhaW1wb3J0YW50O1xufVxuLmJveC1tYWluLWNvbnRlbnQgLmRpc3BvbmlibGVzIC5kaWFzQ2l0YXMgdWwgbGkge1xuICAvKiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jazsgKi9cbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjNTE5REI5O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC8qICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJveC1tYWluLWNvbnRlbnQgLmRpc3BvbmlibGVzIC5kaWFzQ2l0YXMgdWwgbGkgLmJveC1kYXkge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5ib3gtbWFpbi1jb250ZW50IC5kaXNwb25pYmxlcyAuZGlhc0NpdGFzIHVsIHNwYW4ge1xuICBjb2xvcjogIzA1MkY1MTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLmJveC1tYWluLWNvbnRlbnQgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMyMDY2OEIgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG4uYm94LW1haW4tY29udGVudCAuaG9yYXNDaXRhcyB7XG4gIG1hcmdpbi10b3A6IC0xNnB4O1xuICBiYWNrZ3JvdW5kOiAjMjA2NjhCO1xufVxuLmJveC1tYWluLWNvbnRlbnQgLmhvcmFzQ2l0YXMgLmJveC1ob3VyIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5ib3gtbWFpbi1jb250ZW50IC5ob3Jhc0NpdGFzIC5ib3gtaG91ciAucC1ob3VyLWRpc3BvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5ib3gtbWFpbi1jb250ZW50IC5ob3Jhc0NpdGFzIC5ib3gtaG91ciAuYm94LWhvdXItbWFpbiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uYm94LW1haW4tY29udGVudCAuaG9yYXNDaXRhcyAuYm94LWhvdXIgLmJveC1ob3VyLW1haW4gLmhvdXJkaXNwbyB7XG4gIGJhY2tncm91bmQ6ICMwNTJGNTE7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwLjJlbSAwO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ib3gtbWFpbi1jb250ZW50IC5ob3Jhc0NpdGFzIC5ib3gtaG91ciAuYm94LWhvdXItbWFpbiAuZGVzYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzkxOTE5MTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAuMmVtIDA7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmRlc2FjdGl2ZSAuaG91cmRpc3BvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRBNEE0QTtcbiAgY29sb3I6ICNmZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/card/card.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/card/card.page.ts ***!
  \*****************************************/
/*! exports provided: CardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPage", function() { return CardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_hello_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/hello.service */ "./src/app/services/hello.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







let CardPage = class CardPage {
    constructor(modalCtrl, helloPvr, elementRef, render, alertContrl, loadingCtrl, router, route) {
        this.modalCtrl = modalCtrl;
        this.helloPvr = helloPvr;
        this.elementRef = elementRef;
        this.render = render;
        this.alertContrl = alertContrl;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.route = route;
        this._doctors = [];
        this.doctors = [];
        this.id = 3;
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
        this.IMAGEONERROR = `this.SERVERImage + default.png`;
        this.mostrar = true;
        this.getDoctorsList();
    }
    ngOnInit() {
        this.hora = null;
        const data = this.route.snapshot.paramMap.get('data');
        this.tipoConsulta = JSON.parse(data);
        this.escogido = this.tipoConsulta.escogido;
        console.log('this.tipoConsulta:', this.tipoConsulta);
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
        this.fromDate = moment__WEBPACK_IMPORTED_MODULE_6__().format("YYYY-MM-DD");
        this.toDate = moment__WEBPACK_IMPORTED_MODULE_6__().add(this.numDays, "day").format("YYYY-MM-DD");
        this.disponibles = true;
        /*     llamada en la carga de la pagina para invocar a los servicios por defecto carga los doctores de medicina general*/
        this.helloPvr.getServicios().subscribe((servicios) => {
            this.servicios = servicios.centers[0].services.filter(x => x.block == 'cura');
            console.log('this.servicios:', this.servicios);
            if (this.servicios.length > 0) {
                /* this.id = this.servicios[0].id; */
                /* this.id = 3; */
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
            });
            yield loading.present();
            this.helloPvr.getDoctorsPerId(this.id).subscribe(doctors => {
                this.disponibles = false;
                if (doctors.length == 0) {
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
                loading.dismiss();
            });
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.id = 3;
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
                    encuentro: this.escogido,
                    doctor: {
                        id: doctor.id,
                        fullname: doctor.fullName,
                        info: doctor.info,
                        service: doctor.service,
                        cmp: doctor.cmp
                    }
                };
                const alert = yield this.alertContrl.create({
                    header: 'Inicia Registro',
                    subHeader: 'crea una cuenta para que puedas registrar una cita',
                    buttons: [
                        {
                            text: 'Entiendo',
                        }
                    ]
                });
                yield alert.present();
                const data = JSON.stringify(datos);
                this.router.navigate(['register', data]);
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
                    encuentro: this.escogido,
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
        });
    }
    nextSlide() {
        console.log('slideNext');
        /* this.slides.slideNext(); */
    }
    slidePrev() {
        console.log('slidePrev');
        /* this.slides.slidePrev(); */
    }
    goToCuida() {
        this.router.navigate(['card-cuida']);
        /* this.navCtrl.push(CardCuidaPage); */
    }
};
CardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_hello_service__WEBPACK_IMPORTED_MODULE_2__["HelloService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('MyDays')
], CardPage.prototype, "MyDays", void 0);
CardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./card.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/card/card.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./card.page.scss */ "./src/app/pages/card/card.page.scss")).default]
    })
], CardPage);



/***/ })

}]);
//# sourceMappingURL=pages-card-card-module.js.map