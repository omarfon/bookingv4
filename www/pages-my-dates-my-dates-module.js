(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-dates-my-dates-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-dates/my-dates.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-dates/my-dates.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"tertiary\" hideBackButton=\"true\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title size=\"small\"> Mi citas </ion-title>\n    <ion-buttons slot=\"end\">\n      <!--  <ion-button (click)=\"openVideo()\">\n        <ion-icon name=\"videocam\" color=\"danger\"></ion-icon>\n      </ion-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar color=\"tertiary\">\n    <ion-segment scrollable [(ngModel)]=\"citas\" color=\"secondary\">\n      <ion-segment-button value=\"miscitas\">\n        <label>Proximas citas</label>\n      </ion-segment-button>\n      <ion-segment-button value=\"citaspasadas\">\n        <label>Citas Pasadas</label>\n      </ion-segment-button>\n      <!-- <ion-segment-button value=\"citasfamiliares\">\n        <p>citas familiares</p>\n      </ion-segment-button> -->\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]=\"citas\">\n    <div *ngSwitchCase=\"'miscitas'\">\n      <ion-list *ngFor='let task of tasks'>\n        <ion-card class=\"bordeDerecho\" *ngIf=\"task; else notasks\">\n          <ion-row class=\"nopadding\">\n            <ion-col size=\"4\">\n              <ion-avatar item-start>\n                <img src=\"{{SERVERImage}}{{task.professionalId}}.png\" (error)=\"errorHandler($event)\">\n              </ion-avatar>\n            </ion-col>\n            <ion-col size=\"8\" (click)=\"goToDetailsTask(task)\">\n              <ion-col size=\"12\" class=\"nombrePrincipalBox\">\n                <p>Cita para: {{nombre}}</p>\n              </ion-col>\n              <h3 class=\"tituloCitas\" text-wrap>{{task.professionalName}} {{task.professionalLastName1}}\n                {{task.professionalLastName2}}</h3>\n              <p class=\"especialidad\" text-wrap> <span>Especialidad:</span>\n                {{ task.basicServiceDescription | lowercase }}</p>\n              <p class=\"sede\" *ngIf=\"task.provisionDescription !== 'TELEORIENTACION'\">Sede:\n                {{ task.centerName | lowercase }}</p>\n              <p class=\"sede\" *ngIf=\"task.provisionDescription === 'TELEORIENTACION'\">TELECONSULTA</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"gris\">\n              <ion-row>\n                <ion-col size=\"9\" class=\"diaCita\">\n                  <p class=\"day\">{{ task.appointmentDateTime | date:'d MMMM ' : 'es-ES' }} </p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"hourCita\">\n                  <p class=\"hour\">{{ task.appointmentDateTime | date: 'HH:mm' }}</p>\n                </ion-col>\n              </ion-row>\n\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-list>\n      <div>\n        <div *ngIf=\"conCitas\">\n          <div *ngFor=\"let citas of conCitas\">\n            <ion-list *ngFor='let task of citas.appointments'>\n              <ion-card class=\"bordeDerecho\">\n                <ion-row class=\"nopadding\">\n                  <ion-col size=\"4\">\n                    <ion-avatar item-start>\n                      <img src=\"{{SERVERImage}}{{task.professionalId}}.png\" (error)=\"errorHandler($event)\">\n                    </ion-avatar>\n                  </ion-col>\n                  <ion-col size=\"8\" (click)=\"gotoDetails(task)\">\n                    <ion-row>\n                      <ion-col size=\"12\" class=\"nombreFamiliarBox\">\n                        <p class=\"nombreFamiliar\">Cita para: {{task.patientName}}</p>\n                      </ion-col>\n                      <ion-col size=\"12\">\n                        <h3 class=\"tituloCitas\" text-wrap>\n                          {{task.professionalName}} {{task.professionalLastName1}} {{task.professionalLastName2}}</h3>\n                        <p class=\"especialidad\">{{ task.basicServiceDescription | lowercase }}\n                        </p>\n                        <p class=\"sede\" *ngIf=\"task.provisionDescription !== 'TELEORIENTACION'\">\n                          {{ task.centerName | lowercase }}</p>\n                        <p class=\"sede\" *ngIf=\"task.provisionDescription === 'TELEORIENTACION'\">TELECONSULTA</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col size=\"12\" class=\"gris\">\n                    <ion-row>\n                      <ion-col size=\"9\" class=\"diaCita\">\n                        <p class=\"day\">{{ task.appointmentDateTime | date:'d MMMM ' : 'es-ES' }} </p>\n                      </ion-col>\n                      <ion-col size=\"3\" class=\"hourCita\">\n                        <p class=\"hour\">{{ task.appointmentDateTime | date: 'HH:mm' }}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                </ion-row>\n              </ion-card>\n            </ion-list>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"conCitas < 1 && tasks.length < 1\" class=\"contenedorSinCitas\">\n        <!--  <div class=\"imagenSinCitas\">\n          <img src=\"assets/imgs/sinCitas.png\" alt=\"\">\n        </div> -->\n        <p class=\"textoCitasNulo\">No tienes citas pendientes</p>\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"'citaspasadas'\">\n      <ion-slides class=\"containerDepends\">\n        <ion-slide>\n          <div class=\"row\">\n            <ion-col size=\"12\">\n              <div class=\"botonConImagen\" (click)=\"getDatesUser()\">\n                <p>{{nombreCortado}}</p>\n              </div>\n            </ion-col>\n            <ion-col size=\"12\">\n              <p class=\"principalName\">{{nombre}}</p>\n            </ion-col>\n          </div>\n        </ion-slide>\n\n        <ion-slide *ngFor=\"let dep of dependens\">\n          <div class=\"row\">\n            <ion-col>\n              <div color=\"secondary\" class=\"botonConImagenParent\" (click)=\"getDatesDepends(dep)\">\n                <p>{{dep.name | slice:0:1}}</p>\n              </div>\n            </ion-col>\n            <ion-col>\n              <p class=\"nombreUsuarios\">{{dep.name}}</p>\n            </ion-col>\n          </div>\n        </ion-slide>\n      </ion-slides>\n      <ion-list *ngFor='let citaspa of citaspasadas'>\n        <ion-card class=\"bordeDerecho\" *ngIf=\"citaspasadas \">\n          <ion-row class=\"nopadding\">\n            <ion-col size=\"4\">\n              <ion-avatar item-start>\n                <img src=\"{{SERVERImage}}{{citaspa.codigo_personal}}.png\" (error)=\"errorHandler($event)\">\n\n              </ion-avatar>\n            </ion-col>\n            <ion-col size=\"8\">\n              <h3 class=\"tituloCitasPasadas\" text-wrap>{{citaspa.apellido1 | lowercase}}\n                {{citaspa.apellido2 | lowercase}}\n                {{citaspa.nombre | lowercase}}</h3>\n              <p class=\"especialidad\" text-wrap>CMP: {{ citaspa.codigo_colegiado | lowercase }}</p>\n              <p class=\"especialidad\" text-wrap>{{ citaspa.servicio_basico | lowercase }}</p>\n              <p class=\"sede\">Sede: {{ citaspa.nombre_centro | lowercase }}</p>\n            </ion-col>\n            <ion-grid>\n              <!--     <ion-row *ngIf=\"citaspa.tiene_receta == 1\">\n                <ion-col size=\"10\" class=\"centrado\">\n                  <p>receta para esta cita:</p>\n                </ion-col>\n                <ion-col size=\"2\">\n                  <ion-button clear class=\"iconoDerecha\" (click)=\"goToRecipe(citaspa)\">\n                    <ion-icon name=\"attach\">\n                    </ion-icon>\n                  </ion-button>\n                </ion-col>\n              </ion-row> -->\n            </ion-grid>\n            <ion-col size=\"12\" class=\"gris\">\n              <ion-row>\n                <ion-col class=\"diaCita\">\n                  <p class=\"day\">{{ citaspa.date | slice:0:10 | date:'d MMMM ' : 'es' }} </p>\n                </ion-col>\n                <ion-col class=\"hourCita\">\n                  <p class=\"hour\">{{ citaspa.hora | slice:11:16}}</p>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n        <div *ngIf=\"!citaspasadas.encuentros && !citaspasadas\">\n          <p class=\"textoCitasNulo\">No tienes citas pasadas</p>\n        </div>\n      </ion-list>\n    </div>\n\n  </div>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/my-dates/my-dates-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/my-dates/my-dates-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MyDatesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDatesPageRoutingModule", function() { return MyDatesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_dates_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-dates.page */ "./src/app/pages/my-dates/my-dates.page.ts");




const routes = [
    {
        path: '',
        component: _my_dates_page__WEBPACK_IMPORTED_MODULE_3__["MyDatesPage"]
    }
];
let MyDatesPageRoutingModule = class MyDatesPageRoutingModule {
};
MyDatesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyDatesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/my-dates/my-dates.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/my-dates/my-dates.module.ts ***!
  \***************************************************/
/*! exports provided: MyDatesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDatesPageModule", function() { return MyDatesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _my_dates_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-dates-routing.module */ "./src/app/pages/my-dates/my-dates-routing.module.ts");
/* harmony import */ var _my_dates_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-dates.page */ "./src/app/pages/my-dates/my-dates.page.ts");







let MyDatesPageModule = class MyDatesPageModule {
};
MyDatesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_dates_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyDatesPageRoutingModule"]
        ],
        declarations: [_my_dates_page__WEBPACK_IMPORTED_MODULE_6__["MyDatesPage"]]
    })
], MyDatesPageModule);



/***/ }),

/***/ "./src/app/pages/my-dates/my-dates.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/my-dates/my-dates.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f1f3f8 !important;\n}\n\nion-avatar {\n  width: 100%;\n  height: 100%;\n}\n\nion-avatar img {\n  height: 80px !important;\n  width: 80px !important;\n  border-radius: 10% !important;\n  margin-left: 10px;\n  display: block;\n}\n\nh3 {\n  color: #00B6A3 !important;\n  font-size: 1.1em;\n  text-align: right;\n  margin-right: 16px !important;\n  font-weight: 600;\n  margin-top: 1em !important;\n}\n\n.especialidad {\n  color: #A7A9AC;\n  font-weight: 500;\n  text-transform: capitalize;\n  font-size: 1.1em;\n  text-align: right;\n  margin-top: -5px;\n  margin-right: 16px;\n  /*  span{\n          color:#062F51;\n          font-size:.8em;\n        } */\n}\n\n.list-ios {\n  margin: 0;\n}\n\n.sede {\n  color: #062F51;\n  font-weight: 400;\n  text-align: right;\n  margin-right: 16px;\n  font-size: 0.9em;\n  margin-top: -5px;\n  text-transform: capitalize;\n}\n\n.bar-button-default-md:hover:not(.disable-hover),\n.bar-button-clear-md-default:hover:not(.disable-hover),\n.bar-button-md-default:hover:not(.disable-hover) {\n  color: #fff !important;\n}\n\n.textoCitasNulo {\n  color: #062F51;\n  text-align: center;\n  font-size: 1.5em;\n}\n\n.gris {\n  background: #F3F6F6;\n}\n\n.item-md {\n  padding: 0;\n}\n\n.item-inner {\n  padding-right: 0 !important;\n}\n\n.label-md {\n  margin: 0;\n}\n\n.diaCita {\n  color: #062F51;\n}\n\n.diaCita p {\n  text-align: left;\n  font-size: 1em;\n  font-weight: 500;\n  margin-left: 5px;\n}\n\n.hourCita p {\n  text-align: right;\n  margin-right: 5px;\n  font-size: 1em;\n  font-weight: 600;\n  color: #00B6A3;\n}\n\n.tituloCitas {\n  width: 90%;\n  margin-left: 5%;\n  text-transform: capitalize;\n  font-size: 1.2em;\n  margin-top: -10px !important;\n}\n\n.tituloCitasPasadas {\n  width: 90%;\n  margin-left: 5%;\n  text-transform: capitalize;\n  font-size: 1.2em;\n}\n\n.iconoDerecha {\n  text-align: right;\n}\n\n.centrado {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.centrado p {\n  margin-left: 10px;\n  color: #A7A9AC;\n}\n\n.nombreFamiliarBox {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.nombreFamiliarBox p {\n  border-top-right-radius: 10px;\n  width: 90%;\n  background: #00B6A3;\n  color: #fff;\n  padding: 0.2em 0.5em;\n  text-align: right;\n  margin-left: 5%;\n}\n\n.segment-md-secondary .segment-button {\n  color: #fff !important;\n}\n\n.containerDepends {\n  background: #F3F6F6;\n  height: 90px;\n  margin-bottom: 40px;\n  text-align: center;\n  position: -webkit-sticky;\n  position: sticky;\n}\n\n.nombreUsuarios {\n  color: #A7A9AC;\n  font-size: 0.7em;\n  margin-top: -10px;\n}\n\n.principalName {\n  color: #A7A9AC;\n  font-size: 0.7em;\n  margin-top: -10px;\n}\n\n.nombrePrincipalBox {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.nombrePrincipalBox p {\n  background: #062F51 !important;\n  border-top-right-radius: 10px;\n  color: #fff;\n  padding: 0.2em 0.5em;\n  text-align: right;\n  margin-right: 16px;\n  margin-top: 10px;\n}\n\nion-slide {\n  width: 100px !important;\n  text-align: center !important;\n}\n\n.swiper-container {\n  width: 100%;\n  margin-top: 20px;\n}\n\n.botonConImagen {\n  text-align: center;\n  background-color: #062F51;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.botonConImagen p {\n  color: #F3F6F6;\n  font-size: 1.4em;\n  font-weight: 400;\n}\n\n.botonConImagenParent {\n  text-align: center;\n  background-color: #00B6A3;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.botonConImagenParent p {\n  color: #F3F6F6;\n  font-size: 1.4em;\n  font-weight: 400;\n}\n\n.botonConImagen:hover {\n  color: #FF634C;\n  background: none !important;\n  font-size: 1.2em;\n  width: 50px;\n  height: 50px;\n  border: 2px dashed #FF634C;\n}\n\n.principalName {\n  color: #062F51;\n  font-size: 0.7em;\n  margin-top: -10px;\n  text-transform: capitalize !important;\n}\n\nion-button:active {\n  background: red;\n}\n\n.contenedorSinCitas {\n  margin-top: 20vh;\n}\n\n.imagenSinCitas {\n  width: 130px;\n  margin-left: calc(50% - 65px);\n}\n\n.bordeDerecho {\n  border-top-right-radius: 25px !important;\n  background: #fff;\n}\n\nion-segment-button {\n  color: #fff !important;\n}\n\nion-segment-button:active {\n  color: #fff;\n}\n\n.nopadding {\n  padding: none;\n  margin: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbWFyL3Byb3llY3Rvcy9EZXYvYm9va2luZ3Y0L3NyYy9hcHAvcGFnZXMvbXktZGF0ZXMvbXktZGF0ZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9teS1kYXRlcy9teS1kYXRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDRSxnQ0FBQTtBQ0NOOztBREVJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDTjs7QURFSTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NOOztBREVJO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDQ047O0FERUk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0E7OztXQUFBO0FDSU47O0FERUk7RUFDRSxTQUFBO0FDQ047O0FERUk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDQ047O0FERUk7OztFQUdFLHNCQUFBO0FDQ047O0FERUk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NOOztBREVJO0VBQ0UsbUJBQUE7QUNDTjs7QURFSTtFQUNFLFVBQUE7QUNDTjs7QURFSTtFQUNFLDJCQUFBO0FDQ047O0FERUk7RUFDRSxTQUFBO0FDQ047O0FERUk7RUFDRSxjQUFBO0FDQ047O0FEQ007RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ1I7O0FESU07RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0RSOztBREtJO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUNGTjs7QURLSTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0ZOOztBREtJO0VBQ0UsaUJBQUE7QUNGTjs7QURLSTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDRk47O0FESU07RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNGUjs7QURNSTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUNITjs7QURLTTtFQUNFLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDSFI7O0FET0k7RUFDRSxzQkFBQTtBQ0pOOztBRE9JO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUNKTjs7QURPSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSk47O0FET0k7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0pOOztBRE9JO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQ0pOOztBRE1NO0VBQ0UsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0pSOztBRFFJO0VBQ0UsdUJBQUE7RUFDQSw2QkFBQTtBQ0xOOztBRFFJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDTE47O0FEUUk7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDTE47O0FET007RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0xSOztBRFNJO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ05OOztBRFFNO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNOUjs7QURVSTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ1BOOztBRFVJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtBQ1BOOztBRFVJO0VBQ0UsZUFBQTtBQ1BOOztBRFVJO0VBQ0UsZ0JBQUE7QUNQTjs7QURVSTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtBQ1BOOztBRFVJO0VBQ0Usd0NBQUE7RUFDQSxnQkFBQTtBQ1BOOztBRFVJO0VBQ0Usc0JBQUE7QUNQTjs7QURVSTtFQUNFLFdBQUE7QUNQTjs7QURVSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDUE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9teS1kYXRlcy9teS1kYXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgaW9uLWNvbnRlbnQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZjFmM2Y4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgaW9uLWF2YXRhciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICBpb24tYXZhdGFyIGltZyB7XG4gICAgICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMCUgIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgY29sb3I6ICMwMEI2QTMgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweCAhaW1wb3J0YW50O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIG1hcmdpbi10b3A6IDFlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5lc3BlY2lhbGlkYWQge1xuICAgICAgY29sb3I6ICNBN0E5QUM7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgLyogIHNwYW57XG4gICAgICAgICAgICAgIGNvbG9yOiMwNjJGNTE7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTouOGVtO1xuICAgICAgICAgICAgfSAqL1xuICAgIH1cblxuICAgIC5saXN0LWlvcyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgLnNlZGUge1xuICAgICAgY29sb3I6ICMwNjJGNTE7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICBmb250LXNpemU6IC45ZW07XG4gICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuXG4gICAgLmJhci1idXR0b24tZGVmYXVsdC1tZDpob3Zlcjpub3QoLmRpc2FibGUtaG92ZXIpLFxuICAgIC5iYXItYnV0dG9uLWNsZWFyLW1kLWRlZmF1bHQ6aG92ZXI6bm90KC5kaXNhYmxlLWhvdmVyKSxcbiAgICAuYmFyLWJ1dHRvbi1tZC1kZWZhdWx0OmhvdmVyOm5vdCguZGlzYWJsZS1ob3Zlcikge1xuICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAudGV4dG9DaXRhc051bG8ge1xuICAgICAgY29sb3I6ICMwNjJGNTE7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIH1cblxuICAgIC5ncmlzIHtcbiAgICAgIGJhY2tncm91bmQ6ICNGM0Y2RjY7XG4gICAgfVxuXG4gICAgLml0ZW0tbWQge1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAuaXRlbS1pbm5lciB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmxhYmVsLW1kIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAuZGlhQ2l0YSB7XG4gICAgICBjb2xvcjogIzA2MkY1MTtcblxuICAgICAgcCB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5ob3VyQ2l0YSB7XG4gICAgICBwIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICMwMEI2QTM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRpdHVsb0NpdGFzIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICBtYXJnaW4tdG9wOiAtMTBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC50aXR1bG9DaXRhc1Bhc2FkYXMge1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB9XG5cbiAgICAuaWNvbm9EZXJlY2hhIHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cblxuICAgIC5jZW50cmFkbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBjb2xvcjogI0E3QTlBQztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubm9tYnJlRmFtaWxpYXJCb3gge1xuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG5cbiAgICAgIHAge1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwQjZBMztcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IC4yZW0gLjVlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VnbWVudC1tZC1zZWNvbmRhcnkgLnNlZ21lbnQtYnV0dG9uIHtcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lckRlcGVuZHMge1xuICAgICAgYmFja2dyb3VuZDogI0YzRjZGNjtcbiAgICAgIGhlaWdodDogOTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIH1cblxuICAgIC5ub21icmVVc3VhcmlvcyB7XG4gICAgICBjb2xvcjogI0E3QTlBQztcbiAgICAgIGZvbnQtc2l6ZTogLjdlbTtcbiAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIH1cblxuICAgIC5wcmluY2lwYWxOYW1lIHtcbiAgICAgIGNvbG9yOiAjQTdBOUFDO1xuICAgICAgZm9udC1zaXplOiAuN2VtO1xuICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgfVxuXG4gICAgLm5vbWJyZVByaW5jaXBhbEJveCB7XG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcblxuICAgICAgcCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwNjJGNTEgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwYWRkaW5nOiAuMmVtIC41ZW07XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW9uLXNsaWRlIHtcbiAgICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnN3aXBlci1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC5ib3RvbkNvbkltYWdlbiB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYyRjUxO1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBwIHtcbiAgICAgICAgY29sb3I6ICNGM0Y2RjY7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJvdG9uQ29uSW1hZ2VuUGFyZW50IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEI2QTM7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIHAge1xuICAgICAgICBjb2xvcjogI0YzRjZGNjtcbiAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYm90b25Db25JbWFnZW46aG92ZXIge1xuICAgICAgY29sb3I6ICNGRjYzNEM7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBib3JkZXI6IDJweCBkYXNoZWQgI0ZGNjM0QztcbiAgICB9XG5cbiAgICAucHJpbmNpcGFsTmFtZSB7XG4gICAgICBjb2xvcjogIzA2MkY1MTtcbiAgICAgIGZvbnQtc2l6ZTogLjdlbTtcbiAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgfVxuXG4gICAgLmNvbnRlbmVkb3JTaW5DaXRhcyB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHZoO1xuICAgIH1cblxuICAgIC5pbWFnZW5TaW5DaXRhcyB7XG4gICAgICB3aWR0aDogMTMwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLSA2NXB4KTtcbiAgICB9XG5cbiAgICAuYm9yZGVEZXJlY2hvIHtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIH1cblxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbjphY3RpdmUge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgLm5vcGFkZGluZyB7XG4gICAgICBwYWRkaW5nOiBub25lO1xuICAgICAgbWFyZ2luOiBub25lO1xuICAgIH0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2YxZjNmOCAhaW1wb3J0YW50O1xufVxuXG5pb24tYXZhdGFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLWF2YXRhciBpbWcge1xuICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaDMge1xuICBjb2xvcjogIzAwQjZBMyAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuMWVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDFlbSAhaW1wb3J0YW50O1xufVxuXG4uZXNwZWNpYWxpZGFkIHtcbiAgY29sb3I6ICNBN0E5QUM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDEuMWVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAvKiAgc3BhbntcbiAgICAgICAgICBjb2xvcjojMDYyRjUxO1xuICAgICAgICAgIGZvbnQtc2l6ZTouOGVtO1xuICAgICAgICB9ICovXG59XG5cbi5saXN0LWlvcyB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNlZGUge1xuICBjb2xvcjogIzA2MkY1MTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5iYXItYnV0dG9uLWRlZmF1bHQtbWQ6aG92ZXI6bm90KC5kaXNhYmxlLWhvdmVyKSxcbi5iYXItYnV0dG9uLWNsZWFyLW1kLWRlZmF1bHQ6aG92ZXI6bm90KC5kaXNhYmxlLWhvdmVyKSxcbi5iYXItYnV0dG9uLW1kLWRlZmF1bHQ6aG92ZXI6bm90KC5kaXNhYmxlLWhvdmVyKSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0b0NpdGFzTnVsbyB7XG4gIGNvbG9yOiAjMDYyRjUxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5ncmlzIHtcbiAgYmFja2dyb3VuZDogI0YzRjZGNjtcbn1cblxuLml0ZW0tbWQge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLmxhYmVsLW1kIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZGlhQ2l0YSB7XG4gIGNvbG9yOiAjMDYyRjUxO1xufVxuLmRpYUNpdGEgcCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uaG91ckNpdGEgcCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDBCNkEzO1xufVxuXG4udGl0dWxvQ2l0YXMge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW4tdG9wOiAtMTBweCAhaW1wb3J0YW50O1xufVxuXG4udGl0dWxvQ2l0YXNQYXNhZGFzIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLmljb25vRGVyZWNoYSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2VudHJhZG8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY2VudHJhZG8gcCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogI0E3QTlBQztcbn1cblxuLm5vbWJyZUZhbWlsaWFyQm94IHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbi5ub21icmVGYW1pbGlhckJveCBwIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGJhY2tncm91bmQ6ICMwMEI2QTM7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwLjJlbSAwLjVlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLnNlZ21lbnQtbWQtc2Vjb25kYXJ5IC5zZWdtZW50LWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXJEZXBlbmRzIHtcbiAgYmFja2dyb3VuZDogI0YzRjZGNjtcbiAgaGVpZ2h0OiA5MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG59XG5cbi5ub21icmVVc3VhcmlvcyB7XG4gIGNvbG9yOiAjQTdBOUFDO1xuICBmb250LXNpemU6IDAuN2VtO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuLnByaW5jaXBhbE5hbWUge1xuICBjb2xvcjogI0E3QTlBQztcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbi5ub21icmVQcmluY2lwYWxCb3gge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuLm5vbWJyZVByaW5jaXBhbEJveCBwIHtcbiAgYmFja2dyb3VuZDogIzA2MkY1MSAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5pb24tc2xpZGUge1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5zd2lwZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5ib3RvbkNvbkltYWdlbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MkY1MTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ib3RvbkNvbkltYWdlbiBwIHtcbiAgY29sb3I6ICNGM0Y2RjY7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5ib3RvbkNvbkltYWdlblBhcmVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjZBMztcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ib3RvbkNvbkltYWdlblBhcmVudCBwIHtcbiAgY29sb3I6ICNGM0Y2RjY7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5ib3RvbkNvbkltYWdlbjpob3ZlciB7XG4gIGNvbG9yOiAjRkY2MzRDO1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjRkY2MzRDO1xufVxuXG4ucHJpbmNpcGFsTmFtZSB7XG4gIGNvbG9yOiAjMDYyRjUxO1xuICBmb250LXNpemU6IDAuN2VtO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cblxuaW9uLWJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5jb250ZW5lZG9yU2luQ2l0YXMge1xuICBtYXJnaW4tdG9wOiAyMHZoO1xufVxuXG4uaW1hZ2VuU2luQ2l0YXMge1xuICB3aWR0aDogMTMwcHg7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDY1cHgpO1xufVxuXG4uYm9yZGVEZXJlY2hvIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uOmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubm9wYWRkaW5nIHtcbiAgcGFkZGluZzogbm9uZTtcbiAgbWFyZ2luOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/my-dates/my-dates.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/my-dates/my-dates.page.ts ***!
  \*************************************************/
/*! exports provided: MyDatesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDatesPage", function() { return MyDatesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_dependens_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/dependens.service */ "./src/app/services/dependens.service.ts");
/* harmony import */ var src_app_services_appoinment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/appoinment.service */ "./src/app/services/appoinment.service.ts");
/* harmony import */ var src_app_services_recipes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/recipes.service */ "./src/app/services/recipes.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let MyDatesPage = class MyDatesPage {
    constructor(alertCtrl, modalCtrl, appointmentProvider, dependentsProvider, recipePvr, dependentsPvr, loadingCtrl, popoverCtrl, router) {
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.appointmentProvider = appointmentProvider;
        this.dependentsProvider = dependentsProvider;
        this.recipePvr = recipePvr;
        this.dependentsPvr = dependentsPvr;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.router = router;
        this.SERVERImage = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_IMAGES"];
        const nombrePatient = localStorage.getItem('patientName');
    }
    ngOnInit() {
        this.nombrePatient = localStorage.getItem('patientName');
        const separador = " ";
        if (this.nombrePatient) {
            this.nombre = this.nombrePatient.split(separador, 1);
            this.nombreCortado = this.nombrePatient.slice(0, 1);
        }
        else {
            /* console.log("seguir normal es invitado") */
        }
        // CON ESTA LLAMADA JALAMOS A LOS FAMILIARES
        this.dependentsPvr.getDependens().subscribe(data => {
            this.dependens = data;
            /* console.log('los dependientes:', this.dependens); */
        });
        // CON ESTA LLAMADA LAS CITAS DEL USUARIO PRINCIPAL
        this.appointmentProvider.getAppointmentsPast().subscribe((data) => {
            this.citas = 'miscitas';
            this.tasks = data;
            console.log('los tasks:', this.tasks);
            this.mostrar = this.tasks.length;
        }, err => {
            /* console.error('algo fallo') */
        });
        // CON ESTA LLAMADA TENEMOS LAS CITAS PASADAS DE LOS DEPENDIENTES
        this.dependentsProvider.getOldDependetsDay().subscribe((data) => {
            this.citaspasadas = data;
            this.sinpasadas = this.citaspasadas.length;
            /* console.log('citas pasadas:', this.citaspasadas); */
        });
        // AQUI LLAMAMOS A LAS CITAS PENDIENTES DE LOS FAMILIARES- AQUI VIENEN TODOS LOS FAMILIARES TENGAN CITAS PENDIENTES O  NO
        this.dependentsProvider.getdependesDay().subscribe((data) => {
            this.tasksParents = data;
            /* console.log('las citas de los familiares:', this.tasksParents); */
            this.conCitas = this.tasksParents.filter(t => t.appointments.length > 0);
            /* console.log('conCitas', this.conCitas); */
        });
    }
    errorHandler(event) {
        event.target.src = "https://1.bp.blogspot.com/-p8EFlkXywyE/UDZvWTyr1bI/AAAAAAAAEU0/xL8pmKN1KOY/s1600/facebook.png";
    }
    ionViewWillEnter() {
        const nombrePatient = localStorage.getItem('patientName');
        const separador = " ";
        if (nombrePatient) {
            this.nombre = nombrePatient.split(separador, 1);
            this.nombreCortado = nombrePatient.slice(0, 1);
        }
        else {
            /* console.log("seguir normal es invitado") */
        }
        // CON ESTA LLAMADA JALAMOS A LOS FAMILIARES
        this.dependentsPvr.getDependens().subscribe(data => {
            this.dependens = data;
            /* console.log('los dependientes:', this.dependens); */
        });
        // CON ESTA LLAMADA LAS CITAS DEL USUARIO PRINCIPAL
        this.appointmentProvider.getAppointmentsPast().subscribe(data => {
            this.citas = 'miscitas';
            this.tasks = data;
            /* console.log('los tasks usuario principal:', this.tasks); */
            this.mostrar = this.tasks.length;
        }, err => {
            console.error('algo fallo');
        });
        // CON ESTA LLAMADA TENEMOS LAS CITAS PASADAS DE LOS DEPENDIENTES
        this.dependentsProvider.getOldDependetsDay().subscribe((data) => {
            this.citaspasadas = data;
            this.sinpasadas = this.citaspasadas.length;
            /* console.log('citas pasadas:', this.citaspasadas); */
        });
        // AQUI LLAMAMOS A LAS CITAS PENDIENTES DE LOS FAMILIARES- AQUI VIENEN TODOS LOS FAMILIARES TENGAN CITAS PENDIENTES O  NO
        this.dependentsProvider.getdependesDay().subscribe((data) => {
            this.tasksParents = data;
            /* console.log('las citas de los familiares:', this.tasksParents); */
            this.conCitas = this.tasksParents.filter(t => t.appointments.length > 0);
            /* console.log('conCitas', this.conCitas); */
        });
    }
    gotoDetails(task) {
        console.log('task datos:', task);
        task.familiar = true;
        let datos = JSON.stringify(task);
        this.router.navigate(['my-date', datos]);
        /*    console.log(task.appointmentId); */
    }
    goToDetailsTask(task) {
        console.log('task datos:', task);
        task.familiar = false;
        let datos = JSON.stringify(task);
        this.router.navigate(['my-date', datos]);
        /* console.log(task.appointmentId); */
    }
    goToRecipe(citaspa) {
        /* console.log('citaspa', citaspa); */
        let id = citaspa.encuentro;
        /*  console.log('id:', id); */
        this.recipePvr.getRecipes(id).subscribe((data) => {
            this.recipe = data;
            const datos = JSON.stringify(this.recipe);
            /* console.log('this.recipe:', this.recipe); */
            this.router.navigate(['recipe', datos]);
        });
    }
    getDatesUser() {
        // traer nuevamente las citas de el usuario pincipal y renderizarlas
        this.dependentsProvider.getOldDependetsDay().subscribe((data) => {
            this._citaspasadas = data;
            this.citaspasadas = this._citaspasadas;
            this.sinpasadas = this.citaspasadas.length;
            /* console.log('citas pasadas:', this.citaspasadas); */
        });
    }
    getDatesDepends(dep) {
        const id = dep.patientId;
        this.dependentsProvider.getDependentDay(id).subscribe(data => {
            this.$citaspasadas = data;
            /* console.log('citas de dependientes jalada:', this.$citaspasadas); */
            this.citaspasadas = this.$citaspasadas[0].encuentros;
        });
    }
    openVideo() {
        this.router.navigate(['page-video']);
    }
};
MyDatesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: src_app_services_appoinment_service__WEBPACK_IMPORTED_MODULE_4__["AppoinmentService"] },
    { type: src_app_services_dependens_service__WEBPACK_IMPORTED_MODULE_3__["DependensService"] },
    { type: src_app_services_recipes_service__WEBPACK_IMPORTED_MODULE_5__["RecipesService"] },
    { type: src_app_services_dependens_service__WEBPACK_IMPORTED_MODULE_3__["DependensService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
MyDatesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-dates',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-dates.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-dates/my-dates.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-dates.page.scss */ "./src/app/pages/my-dates/my-dates.page.scss")).default]
    })
], MyDatesPage);



/***/ }),

/***/ "./src/app/services/dependens.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/dependens.service.ts ***!
  \***********************************************/
/*! exports provided: DependensService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependensService", function() { return DependensService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let DependensService = class DependensService {
    constructor(http) {
        this.http = http;
        this.SERVER = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"];
        this.apiUrl = `${this.SERVER}users/dependents`;
        this.apiDelete = `${this.SERVER}users/removecontact?userId=`;
        this.apiDatesParents = `${this.SERVER}ebooking/citas-paciente-contactos`;
        this.apiOldDates = `${this.SERVER}ebooking/encuentrosPaciente`;
        this.apiDatesParentsv2 = `${this.SERVER}ebooking/encuentros-paciente-contacto`;
    }
    getDependens() {
        const authorization = localStorage.getItem('authorization');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": authorization });
        return this.http.get(this.apiUrl, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            return data;
        }));
    }
    // con esta llamada estamos trayendo las citas de todos los dependientes
    getdependesDay() {
        const authorization = localStorage.getItem('authorization');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": authorization });
        return this.http.get(this.apiDatesParents, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            return data;
        }));
    }
    getDependentDay(id) {
        const authorization = localStorage.getItem('authorization');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": authorization });
        return this.http.get(this.apiDatesParentsv2 + `/${id}`, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            return data;
        }));
    }
    // con esta llamada se esta trayendo las citas pasadas del usuario validado
    getOldDependetsDay() {
        const authorization = localStorage.getItem('authorization');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": authorization });
        return this.http.get(this.apiOldDates, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            return data;
        }));
    }
    // con esta llamada estamos eliminando de mi lista a los dependientes...
    deleteDepend(id) {
        const authorization = localStorage.getItem('authorization');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": authorization });
        return this.http.delete(this.apiDelete + `${id}`, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            return data;
        }));
    }
};
DependensService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DependensService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DependensService);



/***/ })

}]);
//# sourceMappingURL=pages-my-dates-my-dates-module.js.map