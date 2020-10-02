(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\" hideBackButton=\"true\" persistent=\"true\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"first\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons *ngIf=\"nombre\" slot=\"end\">\n    </ion-buttons>\n  </ion-toolbar>\n  <div class=\"contenedorDatos\">\n    <div>\n      <ion-row class=\"containerDatos\">\n        <ion-col size=\"7\" class=\"nombreUsuario\">\n          {{nombre}}\n        </ion-col>\n        <!--     <ion-col size=\"2\" class=\"containerIcon\">\n            <ion-icon name=\"notifications\"></ion-icon>  \n            <ion-badge color=\"danger\">4</ion-badge>\n          </ion-col> -->\n        <ion-col size=\"2\"></ion-col>\n        <ion-col size=\"2\">\n          <div class=\"usuarioImg\" (click)=\"openMydata($event)\">\n            <p>{{nombre | slice:0:1}}</p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n</ion-header>\n\n<ion-content padding>\n  <h4 class=\"tituloSliderOpciones\">Funcionalidades Booking</h4>\n  <!-- <ion-slides>\n  <ion-slide class=\"containerOptions\"\n              >\n      \n  </ion-slide>\n\n    <ion-slide class=\"containerOptions\"\n              >\n      \n  </ion-slide>\n\n  <ion-slide class=\"containerOptions\"\n              >\n      \n  </ion-slide>\n\n</ion-slides> -->\n  <ion-row>\n    <ion-col>\n      <div>\n        <div class=\"cajaContenedora\">\n          <ion-card class=\"containerRounded\" (click)=\"goToAppointments()\">\n            <img src=\"assets/imgs/intro/appointments.svg\" alt=\"\">\n          </ion-card>\n          <ion-badge *ngIf=\"citapendiente\" color=\"danger\" item-end>{{citapendiente}}</ion-badge>\n          <p class=\"textoCard\">Citas</p>\n        </div>\n      </div>\n    </ion-col>\n    <ion-col>\n      <div>\n        <div class=\"cajaContenedora\">\n          <ion-card class=\"containerRounded\" (click)=\"goToDates()\">\n            <img src=\"assets/imgs/intro/medicines.svg\" alt=\"\">\n          </ion-card>\n          <ion-badge *ngIf=\"recipendiente\" item-end>{{recipendiente}}</ion-badge>\n          <p class=\"textoCard\">Recetas</p>\n        </div>\n      </div>\n    </ion-col>\n    <ion-col>\n      <div>\n        <div class=\"cajaContenedora\">\n          <ion-card class=\"containerRounded\" (click)=\"goToParents()\">\n            <img src=\"assets/imgs/intro/parents.png\" alt=\"\">\n          </ion-card>\n          <ion-badge *ngIf=\"recipendiente\" slot=\"start\">{{dependens}}</ion-badge>\n          <p class=\"textoCard\">Parientes</p>\n        </div>\n      </div>\n    </ion-col>\n    <ion-col>\n      <div>\n        <div class=\"cajaContenedora\">\n          <ion-card class=\"containerRounded\" (click)=\"goToTele()\">\n            <!-- <ion-card class=\"containerRounded\" (click)=\"openVideo()\"> -->\n            <img src=\"assets/imgs/intro/tele.png\" alt=\"\">\n          </ion-card>\n          <ion-badge *ngIf=\"recipendiente\" slot=\"start\">{{cantConsultas}}</ion-badge>\n          <p class=\"textoCard\">Teleconsultas</p>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <!-- <h4 class=\"tituloSliderOpciones\">Lo nuevo en Aviva</h4>\n<ion-slides class=\"containerNoticias\" [options]=\"slideOpts\">\n  <ion-slide>\n    <ion-card >\n      <img  src=\"assets/imgs/vacuna.png\" alt=\"\">\n      <ion-card-content>\n      </ion-card-content>\n    </ion-card>  \n  </ion-slide>\n\n  <ion-slide>\n    <ion-card>\n      <img  src=\"https://i.blogs.es/a90382/parto-hospitalario/450_1000.jpg\" alt=\"\">\n    </ion-card>  \n  </ion-slide>\n\n  <ion-slide>\n    <ion-card>\n      <img src=\"https://lineapolitica.com/wp-content/uploads/2019/07/terapiaLENGUA.jpg\" alt=\"\">\n    </ion-card>  \n  </ion-slide>\n</ion-slides>   -->\n\n  <div size=\"12\" class=\"padding\">\n    <ion-button class=\"principal\" size=\"large\" expand=\"block\" color=\"secondary\" (click)=\"goToOptions()\">\n      reservar cita\n    </ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".down30 {\n  padding-top: 20%;\n}\n\nion-content {\n  --background: #f1f3f8 !important;\n}\n\n.nextDay {\n  border-radius: 0;\n  color: grey;\n}\n\n.nextDay ion-icon {\n  color: grey;\n}\n\n.history {\n  border-radius: 0;\n  color: grey;\n}\n\n.history ion-icon {\n  color: grey;\n}\n\n.recipes {\n  border-radius: 0;\n  border-left: 15px solid #92DCE8;\n  color: grey;\n}\n\n.recipes ion-icon {\n  color: grey;\n}\n\n.principal {\n  /* background-image: url(../../assets/imgs/reservaButton.png);\n    background-size: cover;\n    z-index:-2; */\n  /* margin-top:20px!important; */\n  border-top-right-radius: 45px !important;\n  background: #0c7b93;\n  color: #fff;\n  border-radius: none !important;\n  border-top-right-radius: 30px;\n  height: 80px;\n}\n\n.principal ion-icon {\n  color: #fff;\n}\n\n.principal ion-item {\n  margin-top: 10px;\n  font-size: 1.1em;\n}\n\n.principal .card-ios {\n  --background: #00B6A3 !important;\n  border-radius: 0 !important;\n  height: 90px;\n}\n\n.principal .item-ios {\n  --background: transparent;\n}\n\n.principal .item-md {\n  --background: transparent;\n}\n\n.containerNoticias {\n  margin-bottom: 30px !important;\n}\n\n.reserve {\n  color: #fff;\n  font-size: 1.3em;\n}\n\n.font11 {\n  font-size: 1.3em;\n  color: #A7A9AC;\n}\n\nmat-expansion-panel-header ion-col {\n  display: flex;\n  align-items: center;\n}\n\nmat-expansion-panel-header ion-col ion-icon {\n  color: #00B6A3;\n  font-size: 1.3em;\n}\n\n.mat-expansion-panel-content {\n  --background: #F3F6F6 !important;\n}\n\nmat-expansion-panel-header {\n  height: 70px !important;\n  --background: #fff;\n}\n\nmat-expansion-panel {\n  margin-bottom: 15px;\n}\n\nmat-expansion-panel ion-icon {\n  font-size: 1.5em !important;\n}\n\n.mat-expansion-indicator {\n  color: #A7A9AC !important;\n}\n\nimg {\n  width: 90px;\n  border-radius: 10%;\n}\n\n.down10 {\n  padding-top: 30px !important;\n}\n\n.tituloCitas {\n  text-align: right;\n  color: #287195 !important;\n  font-size: 0.9em;\n}\n\n.especialidad {\n  text-align: right;\n  color: #00B6A3;\n  font-size: 0.8em;\n  margin-top: -5px;\n}\n\n.sede,\n.day,\n.hour {\n  text-align: right;\n  color: #A7A9AC;\n  font-size: 0.9em;\n  margin-top: -8px;\n}\n\n.textoRecetas {\n  text-align: center;\n  color: #287195;\n  width: 80%;\n  margin-left: 10%;\n  padding-top: 20px;\n}\n\n.logueado {\n  font-size: 0.8em;\n  margin-right: 10px;\n  /*      background:#00B6A3; */\n  padding: 5px;\n  border-radius: 10px;\n}\n\n.contenedorIcono img {\n  width: 40px;\n}\n\n.contenedorNombrePastilla {\n  text-align: right;\n}\n\n.contenedorNombrePastilla p {\n  color: #A7A9AC;\n  font-size: 1em;\n  text-align: right;\n}\n\n.nombreMedicamento {\n  font-weight: 900;\n  color: #00B6A3;\n}\n\n.vecesXdia {\n  color: #287195;\n  font-weight: 500;\n  font-size: 0.9em;\n}\n\n.contenedorReceta .item-md {\n  background: transparent !important;\n}\n\n.nombreDepe {\n  text-align: right;\n  --background: #00B6A3;\n  color: #fff;\n  padding-top: 0.2em;\n  padding-bottom: 0.2em;\n  padding-right: 16px;\n}\n\n.inicioDePrescripcion {\n  color: #287195;\n  font-size: 0.8em;\n}\n\n.diasFaltantes {\n  color: #287195;\n  font-size: 0.8em;\n  font-weight: 400;\n}\n\n.contenedor {\n  height: 150px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top-right-radius: 20px;\n}\n\n.cura {\n  --background: #287195;\n}\n\n.cuida {\n  --background: #00ACA0;\n}\n\n/* estilos para IOS */\n\n.contenedorDatos {\n  height: 130px;\n  border-bottom-left-radius: 15px !important;\n  border-bottom-right-radius: 15px !important;\n  background: #09a6ce;\n  width: 100%;\n  margin: 0 !important;\n}\n\nion-nav {\n  --background: transparent !important;\n}\n\n.card-ios {\n  margin: 0 !important;\n  width: 100% !important;\n}\n\n/*     ion-card{\n      background: transparent!important;\n  } */\n\n.containerRounded {\n  height: 120px;\n  width: 150px;\n  border-radius: 15px;\n  --background: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.containerRounded img {\n  width: 60px;\n  /*    margin-left:calc(50% - 25px);\n    margin-top:15%; */\n}\n\n/*     ion-slide{\n  } */\n\n.swiper-container,\nion-slides {\n  height: 180px !important;\n}\n\n.textoCard {\n  margin-top: -5px;\n  font-size: 0.9em;\n}\n\n.containerOptions {\n  width: 150px !important;\n  height: 180px !important;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.usuarioImg {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  background: #fff;\n  border: 1px dashed #b64900;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.usuarioImg p {\n  color: #FF634C;\n  font-size: 2em;\n  font-weight: 500;\n  margin-top: 10px;\n}\n\n.containerLogo {\n  margin-bottom: 30px;\n}\n\n.containerLogo img {\n  width: 40px;\n  margin-left: 30px;\n}\n\n.nombreUsuario {\n  color: #fff;\n  font-size: 1.5em;\n  text-transform: capitalize;\n  font-weight: 400;\n}\n\n.containerDatos {\n  margin-left: 20px;\n}\n\n.containerIcon {\n  text-align: center;\n}\n\n.containerIcon ion-icon {\n  color: #fff;\n  font-size: 1.8em !important;\n  margin-top: 10px;\n}\n\n.cajaContenedora {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.tituloSliderOpciones {\n  font-size: 1.2em;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: #7a7c7c;\n  margin-top: 20px !important;\n  margin-left: 20px;\n  margin-bottom: 10px !important;\n}\n\n.NotiSobreContainer {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 20px;\n  left: 15px;\n}\n\nion-badge {\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  float: right !important;\n  margin-left: 50px;\n  top: 20px;\n}\n\n.padding {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbWFyL3Byb3llY3Rvcy9EZXYvYm9va2luZ3Y0L3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQ0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0k7RUFDSSxXQUFBO0FDQ1I7O0FER0E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURFSTtFQUNJLFdBQUE7QUNBUjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0FDREo7O0FER0k7RUFDSSxXQUFBO0FDRFI7O0FES0E7RUFDSTs7aUJBQUE7RUFHQSwrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUNGSjs7QURJSTtFQUNJLFdBQUE7QUNGUjs7QURLSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNIUjs7QURNSTtFQUNJLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FDSlI7O0FET0k7RUFDSSx5QkFBQTtBQ0xSOztBRFFJO0VBQ0kseUJBQUE7QUNOUjs7QURVQTtFQUNJLDhCQUFBO0FDUEo7O0FEVUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNQSjs7QURVQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ1BKOztBRFVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDUEo7O0FEVUk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNSUjs7QURZQTtFQUNJLGdDQUFBO0FDVEo7O0FEWUE7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0FDVEo7O0FEYUE7RUFDSSxtQkFBQTtBQ1ZKOztBRFlJO0VBQ0ksMkJBQUE7QUNWUjs7QURjQTtFQUNJLHlCQUFBO0FDWEo7O0FEY0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNYSjs7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Q0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FDckJKOztBRHdCQTtFQUNJLGFBQUE7QUNyQkoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvd24zMCB7XG4gICAgcGFkZGluZy10b3A6IDIwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2YxZjNmOCAhaW1wb3J0YW50O1xufVxuXG4ubmV4dERheSB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBjb2xvcjogZ3JleTtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgfVxufVxuXG4uaGlzdG9yeSB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBjb2xvcjogZ3JleTtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgfVxufVxuXG4ucmVjaXBlcyB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjOTJEQ0U4O1xuICAgIGNvbG9yOiBncmV5O1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogZ3JleTtcbiAgICB9XG59XG5cbi5wcmluY2lwYWwge1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1ncy9yZXNlcnZhQnV0dG9uLnBuZyk7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgei1pbmRleDotMjsgKi9cbiAgICAvKiBtYXJnaW4tdG9wOjIwcHghaW1wb3J0YW50OyAqL1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogIzBjN2I5MztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgfVxuXG4gICAgLmNhcmQtaW9zIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDBCNkEzICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgIH1cblxuICAgIC5pdGVtLWlvcyB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgLml0ZW0tbWQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuLmNvbnRhaW5lck5vdGljaWFzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yZXNlcnZlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEuM2VtO1xufVxuXG4uZm9udDExIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGNvbG9yOiAjQTdBOUFDO1xufVxuXG5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciBpb24tY29sIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiAjMDBCNkEzO1xuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIH1cbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjNGNkY2ICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG5cbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLm1hdC1leHBhbnNpb24taW5kaWNhdG9yIHtcbiAgICBjb2xvcjogI0E3QTlBQyAhaW1wb3J0YW50O1xufVxuXG5pbWcge1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cblxuLmRvd24xMCB7XG4gICAgcGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLnRpdHVsb0NpdGFzIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjogIzI4NzE5NSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbn1cblxuLmVzcGVjaWFsaWRhZCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6ICMwMEI2QTM7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi5zZWRlLFxuLmRheSxcbi5ob3VyIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjogI0E3QTlBQztcbiAgICBmb250LXNpemU6IC45ZW07XG4gICAgbWFyZ2luLXRvcDogLThweDtcbn1cblxuLnRleHRvUmVjZXRhcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMjg3MTk1O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmxvZ3VlYWRvIHtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgLy8gdGV4dC10cmFuc2Zvcm06bG93ZXJjYXNlO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAvKiAgICAgIGJhY2tncm91bmQ6IzAwQjZBMzsgKi9cbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmNvbnRlbmVkb3JJY29ubyBpbWcge1xuICAgIHdpZHRoOiA0MHB4O1xufVxuXG4uY29udGVuZWRvck5vbWJyZVBhc3RpbGxhIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgIHAge1xuICAgICAgICBjb2xvcjogI0E3QTlBQztcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbn1cblxuLm5vbWJyZU1lZGljYW1lbnRvIHtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGNvbG9yOiAjMDBCNkEzO1xufVxuXG4udmVjZXNYZGlhIHtcbiAgICBjb2xvcjogIzI4NzE5NTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbn1cblxuLmNvbnRlbmVkb3JSZWNldGEge1xuICAgIC5pdGVtLW1kIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5ub21icmVEZXBlIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAtLWJhY2tncm91bmQ6ICMwMEI2QTM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZy10b3A6IC4yZW07XG4gICAgcGFkZGluZy1ib3R0b206IC4yZW07XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuLmluaWNpb0RlUHJlc2NyaXBjaW9uIHtcbiAgICBjb2xvcjogIzI4NzE5NTtcbiAgICBmb250LXNpemU6IC44ZW07XG59XG5cbi5kaWFzRmFsdGFudGVzIHtcbiAgICBjb2xvcjogIzI4NzE5NTtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNvbnRlbmVkb3Ige1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xufVxuXG4uY3VyYSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjg3MTk1O1xufVxuXG4uY3VpZGEge1xuICAgIC0tYmFja2dyb3VuZDogIzAwQUNBMDtcbn1cblxuLyogZXN0aWxvcyBwYXJhIElPUyAqL1xuLmNvbnRlbmVkb3JEYXRvcyB7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAjMDlhNmNlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tbmF2IHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWlvcyB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLyogICAgIGlvbi1jYXJke1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xuICB9ICovXG4uY29udGFpbmVyUm91bmRlZCB7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIC8qICAgIG1hcmdpbi1sZWZ0OmNhbGMoNTAlIC0gMjVweCk7XG4gICAgICAgICAgbWFyZ2luLXRvcDoxNSU7ICovXG4gICAgfVxufVxuXG4vKiAgICAgaW9uLXNsaWRle1xuICB9ICovXG4uc3dpcGVyLWNvbnRhaW5lcixcbmlvbi1zbGlkZXMge1xuICAgIGhlaWdodDogMTgwcHggIWltcG9ydGFudDtcbn1cblxuLnRleHRvQ2FyZCB7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICBmb250LXNpemU6IC45ZW07XG59XG5cbi5jb250YWluZXJPcHRpb25zIHtcbiAgICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDE4MHB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnVzdWFyaW9JbWcge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2I2NDkwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBwIHtcbiAgICAgICAgY29sb3I6ICNGRjYzNEM7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cblxufVxuXG4uY29udGFpbmVyTG9nbyB7XG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuXG4gICAgfVxuXG4gICAgbWFyZ2luLWJvdHRvbTozMHB4O1xufVxuXG4ubm9tYnJlVXN1YXJpbyB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY29udGFpbmVyRGF0b3Mge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uY29udGFpbmVySWNvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAxLjhlbSAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbn1cblxuLmNhamFDb250ZW5lZG9yYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aXR1bG9TbGlkZXJPcGNpb25lcyB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICM3YTdjN2M7XG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cblxuLk5vdGlTb2JyZUNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiAxNXB4O1xufVxuXG5pb24tYmFkZ2Uge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgdG9wOiAyMHB4O1xufVxuXG4ucGFkZGluZyB7XG4gICAgcGFkZGluZzogMjBweDtcbn0iLCIuZG93bjMwIHtcbiAgcGFkZGluZy10b3A6IDIwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmMWYzZjggIWltcG9ydGFudDtcbn1cblxuLm5leHREYXkge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBjb2xvcjogZ3JleTtcbn1cbi5uZXh0RGF5IGlvbi1pY29uIHtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5oaXN0b3J5IHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgY29sb3I6IGdyZXk7XG59XG4uaGlzdG9yeSBpb24taWNvbiB7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4ucmVjaXBlcyB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICM5MkRDRTg7XG4gIGNvbG9yOiBncmV5O1xufVxuLnJlY2lwZXMgaW9uLWljb24ge1xuICBjb2xvcjogZ3JleTtcbn1cblxuLnByaW5jaXBhbCB7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1ncy9yZXNlcnZhQnV0dG9uLnBuZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB6LWluZGV4Oi0yOyAqL1xuICAvKiBtYXJnaW4tdG9wOjIwcHghaW1wb3J0YW50OyAqL1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNDVweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjMGM3YjkzO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLnByaW5jaXBhbCBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnByaW5jaXBhbCBpb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG4ucHJpbmNpcGFsIC5jYXJkLWlvcyB7XG4gIC0tYmFja2dyb3VuZDogIzAwQjZBMyAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogOTBweDtcbn1cbi5wcmluY2lwYWwgLml0ZW0taW9zIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5wcmluY2lwYWwgLml0ZW0tbWQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uY29udGFpbmVyTm90aWNpYXMge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yZXNlcnZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59XG5cbi5mb250MTEge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBjb2xvcjogI0E3QTlBQztcbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIgaW9uLWNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciBpb24tY29sIGlvbi1pY29uIHtcbiAgY29sb3I6ICMwMEI2QTM7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNGM0Y2RjYgIWltcG9ydGFudDtcbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbm1hdC1leHBhbnNpb24tcGFuZWwgaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuNWVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtZXhwYW5zaW9uLWluZGljYXRvciB7XG4gIGNvbG9yOiAjQTdBOUFDICFpbXBvcnRhbnQ7XG59XG5cbmltZyB7XG4gIHdpZHRoOiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbi5kb3duMTAge1xuICBwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xufVxuXG4udGl0dWxvQ2l0YXMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICMyODcxOTUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuLmVzcGVjaWFsaWRhZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzAwQjZBMztcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLnNlZGUsXG4uZGF5LFxuLmhvdXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICNBN0E5QUM7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIG1hcmdpbi10b3A6IC04cHg7XG59XG5cbi50ZXh0b1JlY2V0YXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMjg3MTk1O1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmxvZ3VlYWRvIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAvKiAgICAgIGJhY2tncm91bmQ6IzAwQjZBMzsgKi9cbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY29udGVuZWRvckljb25vIGltZyB7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4uY29udGVuZWRvck5vbWJyZVBhc3RpbGxhIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY29udGVuZWRvck5vbWJyZVBhc3RpbGxhIHAge1xuICBjb2xvcjogI0E3QTlBQztcbiAgZm9udC1zaXplOiAxZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubm9tYnJlTWVkaWNhbWVudG8ge1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogIzAwQjZBMztcbn1cblxuLnZlY2VzWGRpYSB7XG4gIGNvbG9yOiAjMjg3MTk1O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuXG4uY29udGVuZWRvclJlY2V0YSAuaXRlbS1tZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5ub21icmVEZXBlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIC0tYmFja2dyb3VuZDogIzAwQjZBMztcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctdG9wOiAwLjJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG4uaW5pY2lvRGVQcmVzY3JpcGNpb24ge1xuICBjb2xvcjogIzI4NzE5NTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLmRpYXNGYWx0YW50ZXMge1xuICBjb2xvcjogIzI4NzE5NTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNvbnRlbmVkb3Ige1xuICBoZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG59XG5cbi5jdXJhIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjg3MTk1O1xufVxuXG4uY3VpZGEge1xuICAtLWJhY2tncm91bmQ6ICMwMEFDQTA7XG59XG5cbi8qIGVzdGlsb3MgcGFyYSBJT1MgKi9cbi5jb250ZW5lZG9yRGF0b3Mge1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICMwOWE2Y2U7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLW5hdiB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtaW9zIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi8qICAgICBpb24tY2FyZHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcbiAgfSAqL1xuLmNvbnRhaW5lclJvdW5kZWQge1xuICBoZWlnaHQ6IDEyMHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFpbmVyUm91bmRlZCBpbWcge1xuICB3aWR0aDogNjBweDtcbiAgLyogICAgbWFyZ2luLWxlZnQ6Y2FsYyg1MCUgLSAyNXB4KTtcbiAgICBtYXJnaW4tdG9wOjE1JTsgKi9cbn1cblxuLyogICAgIGlvbi1zbGlkZXtcbiAgfSAqL1xuLnN3aXBlci1jb250YWluZXIsXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxODBweCAhaW1wb3J0YW50O1xufVxuXG4udGV4dG9DYXJkIHtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuLmNvbnRhaW5lck9wdGlvbnMge1xuICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxODBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udXN1YXJpb0ltZyB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNiNjQ5MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnVzdWFyaW9JbWcgcCB7XG4gIGNvbG9yOiAjRkY2MzRDO1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNvbnRhaW5lckxvZ28ge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmNvbnRhaW5lckxvZ28gaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4ubm9tYnJlVXN1YXJpbyB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuNWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNvbnRhaW5lckRhdG9zIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5jb250YWluZXJJY29uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lckljb24gaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxLjhlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY2FqYUNvbnRlbmVkb3JhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aXR1bG9TbGlkZXJPcGNpb25lcyB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjN2E3YzdjO1xuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5Ob3RpU29icmVDb250YWluZXIge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogMTVweDtcbn1cblxuaW9uLWJhZGdlIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIHRvcDogMjBweDtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_appoinment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/appoinment.service */ "./src/app/services/appoinment.service.ts");
/* harmony import */ var _services_authorization_public_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authorization-public.service */ "./src/app/services/authorization-public.service.ts");
/* harmony import */ var _services_dependens_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/dependens.service */ "./src/app/services/dependens.service.ts");
/* harmony import */ var _services_recipes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/recipes.service */ "./src/app/services/recipes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_get_dates_tele_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/get-dates-tele.service */ "./src/app/services/get-dates-tele.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/profile/profile.page */ "./src/app/pages/profile/profile.page.ts");



//cambiando servicios







//inappbrowser


let HomePage = class HomePage {
    constructor(autho, alertCtrl, recipesPvr, appointmentProvider, dependensProvider, router, tcs, iab, popoverCtrl) {
        this.autho = autho;
        this.alertCtrl = alertCtrl;
        this.recipesPvr = recipesPvr;
        this.appointmentProvider = appointmentProvider;
        this.dependensProvider = dependensProvider;
        this.router = router;
        this.tcs = tcs;
        this.iab = iab;
        this.popoverCtrl = popoverCtrl;
        this.card = [];
        this.cardone = [];
        this.cardtwo = [];
        this.cardthree = [];
        this.itemExpanded = true;
        this.itemExpandHeight = 100;
        this.tasks = [];
        /*  private SERVERImage = Constants.IMAGESDOCTORS; */
        this.mensaje = false;
        this.slideOpts = {
            slidesPerView: 1,
            speed: 400
        };
    }
    ngOnInit() {
        let nombrePatient = localStorage.getItem('patientName');
        let separador = " ";
        if (nombrePatient) {
            /* this.nombre = nombrePatient.split(separador ,  1); */
            this.nombre = nombrePatient;
        }
        else {
            console.log("seguir normal es invitado");
        }
        this.getDependens();
        this.getDatesTele();
        const authorization = localStorage.getItem('authorization');
        if (!authorization) {
            this.autho.getKey().subscribe((data) => {
                localStorage.setItem('authorization', data.authorization);
                // localStorage.setItem('idTokenUser', data.patientId);
                localStorage.setItem('role', data.role);
                if (data.role == 'public') {
                }
                else {
                    this.obtenerUltimaFecha();
                }
            }, (err) => {
                this.nored();
            });
        }
        else {
            let rol = localStorage.getItem("role");
            if (rol && rol == 'user') {
                this.obtenerUltimaFecha();
            }
        }
    }
    ionViewWillEnter() {
        let nombrePatient = localStorage.getItem('patientName');
        let separador = " ";
        if (nombrePatient) {
            /* this.nombre = nombrePatient.split(separador ,  1); */
            this.nombre = nombrePatient;
        }
        else {
            console.log("seguir normal es invitado");
        }
        this.getDependens();
        const authorization = localStorage.getItem('authorization');
        if (!authorization) {
            this.autho.getKey().subscribe((data) => {
                localStorage.setItem('authorization', data.authorization);
                // localStorage.setItem('idTokenUser', data.patientId);
                localStorage.setItem('role', data.role);
                if (data.role == 'public') {
                }
                else {
                    this.obtenerUltimaFecha();
                }
            }, (err) => {
                this.nored();
            });
        }
        else {
            let rol = localStorage.getItem("role");
            if (rol && rol == 'user') {
                this.obtenerUltimaFecha();
            }
        }
    }
    openVideo() {
        const browser = this.iab.create('https://aviva.pe');
    }
    nored() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Problema con el servidor',
                message: 'actualmente hay un problema con el servidor ,por favor, intenta nuevamente en unos minutos.',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'Cancel'
                    }
                ]
            });
            yield alert.present();
        });
    }
    obtenerUltimaFecha() {
        // citas del usuario principal
        this.appointmentProvider.getAppointmentsPeruser().subscribe((data) => {
            if (data.ok == false) {
                this.tasks = [];
                return;
            }
            this.tasks = data;
            this.citapendiente = this.tasks.length;
            console.log('this.tasks:', this.tasks);
        });
        //llamadas en la carga las recetas mas recientes
        this.recipesPvr.getAllRecipes().subscribe((data) => {
            if (data.ok == false) {
                this.recipes = [];
                return;
            }
            if (this.recipes = []) {
                this.mensaje = true;
            }
            else {
                this.mensaje = false;
            }
            this.recipes = data;
            this.recipendiente = this.recipes.length;
            console.log('this._recipes:', this.recipes);
            const diaOne = moment__WEBPACK_IMPORTED_MODULE_2__(this.recipes.inicio_prescripcion);
            const diaTwo = moment__WEBPACK_IMPORTED_MODULE_2__(this.recipes.fin_prescripcion);
            this.diasFaltantes = diaOne.diff(diaTwo);
        });
        // citas de los dependientes
        this.dependensProvider.getdependesDay().subscribe((data) => {
            if (data.ok == false) {
                this.depesCitas = [];
                return;
            }
            this.depesCitas = data;
            // console.log('this.depesCitas:', this.depesCitas);
            this.depesCitas.map(depe => {
                if (depe.appointments == 0) {
                    console.log('los depes que no tienen citas', depe);
                }
                else {
                    this.citasDepes = depe.appointments[0];
                    console.log('los depe con citas:', this.citasDepes);
                    if (this.recipes && this.citasDepes) {
                        this.citapendiente = 2;
                    }
                    else {
                        this.citapendiente = this.citapendiente;
                    }
                }
            });
        });
    }
    getDependens() {
        this.dependensProvider.getDependens().subscribe(data => {
            this.dependens = data;
            if (this.dependens.length > 0) {
                this.dependens = this.dependens.length;
            }
            else {
                this.dependens = 0;
            }
        });
        console.log('los dependientes:', this.dependens);
    }
    irACard() {
        this.router.navigate(['card']);
    }
    goToOptions() {
        this.router.navigate(['options']);
    }
    goToAppointments() {
        this.router.navigate(['my-dates']);
    }
    goToTele() {
        this.router.navigate(['telecon']);
    }
    goToDates() {
        console.log('ir a mis recetas');
        this.router.navigate(['recipes']);
    }
    goToParents() {
        console.log('ir a mis parientes');
        this.router.navigate(['myparents']);
    }
    goToData() {
        this.router.navigate(['profile']);
    }
    getDatesTele() {
        let idUser = localStorage.getItem('idTokenUser');
        this.tcs.getDatesConsulta(idUser).subscribe(data => {
            this.consultas = data;
            if (this.consultas.length > 0) {
                this.cantConsultas = this.consultas.length;
            }
            else {
                this.cantConsultas = 0;
            }
        });
    }
    openMydata(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('open modal datos paciente');
            const popover = yield this.popoverCtrl.create({
                component: _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_11__["ProfilePage"],
                event: ev,
                translucent: true
            });
            yield popover.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_authorization_public_service__WEBPACK_IMPORTED_MODULE_4__["AuthorizationPublicService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _services_recipes_service__WEBPACK_IMPORTED_MODULE_6__["RecipesService"] },
    { type: _services_appoinment_service__WEBPACK_IMPORTED_MODULE_3__["AppoinmentService"] },
    { type: _services_dependens_service__WEBPACK_IMPORTED_MODULE_5__["DependensService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_get_dates_tele_service__WEBPACK_IMPORTED_MODULE_9__["GetDatesTeleService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



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
//# sourceMappingURL=home-home-module.js.map