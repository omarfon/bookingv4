(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-options-options-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/options/options.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/options/options.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title size=\"small\">Cuida / Cura / Tele</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <h3 class=\"tituloOptions\">Escoge una de las opciones para poder listar los médicos</h3>\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"contenedorCura\" (click)=\"goToCardPage()\">\n        <!-- <p class=\"tituloCura\">Aviva Cura</p> -->\n        <img class=\"logo cura\" src=\"assets/imgs/curaBlanco.png\" alt=\"\">\n        <p class=\"parrafoCura\">Atendemos tus problemas de salud y urgencias de una manera integral y eficiente para que\n          vuelvas a estar sano lo antes posible.</p>\n      </div>\n    </ion-col>\n    <ion-col size=\"12\">\n      <div class=\"contenedorCuida\" (click)=\"goToCardCuidaPage()\">\n        <!-- <p class=\"tituloCura\">Aviva Cuida</p> -->\n        <img class=\"logo cuida\" src=\"assets/imgs/cuidaBlanco.png\" alt=\"\">\n        <p class=\"parrafoCuida\">Nos esforzamos por mantenerte sano mediante controles y chequeos con especialistas,\n          en\n          un ambiente exclusivo para gente que está sana y quiere mantenerse sana.</p>\n      </div>\n    </ion-col>\n\n    <ion-col size=\"12\">\n      <div class=\"contenedorTele\" (click)=\"goToCardPageTele()\" size=\"small\" color=\"tertiary\">\n        <!-- <p class=\"tituloCura\">Aviva Cuida</p> -->\n        <img class=\"logo cuida\" src=\"assets/imgs/avivatele.png\" alt=\"\">\n        <p class=\"parrafoTele\">Teleconsulta con un doctor desde la comodidad de tu hogar, recibe tus recetas por correo\n          y revisalas tambien en la aplicación</p>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/options/options-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/options/options-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: OptionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsPageRoutingModule", function() { return OptionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _options_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options.page */ "./src/app/pages/options/options.page.ts");




const routes = [
    {
        path: '',
        component: _options_page__WEBPACK_IMPORTED_MODULE_3__["OptionsPage"]
    }
];
let OptionsPageRoutingModule = class OptionsPageRoutingModule {
};
OptionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OptionsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/options/options.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/options/options.module.ts ***!
  \*************************************************/
/*! exports provided: OptionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsPageModule", function() { return OptionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _options_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./options-routing.module */ "./src/app/pages/options/options-routing.module.ts");
/* harmony import */ var _options_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./options.page */ "./src/app/pages/options/options.page.ts");







let OptionsPageModule = class OptionsPageModule {
};
OptionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _options_routing_module__WEBPACK_IMPORTED_MODULE_5__["OptionsPageRoutingModule"]
        ],
        declarations: [_options_page__WEBPACK_IMPORTED_MODULE_6__["OptionsPage"]]
    })
], OptionsPageModule);



/***/ }),

/***/ "./src/app/pages/options/options.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/options/options.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tituloOptions {\n  color: #20668B;\n  font-size: 1.2em;\n  text-align: center;\n  width: 70%;\n  margin-left: 15%;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  font-weight: 400;\n  line-height: 1.1em;\n}\n\n.contenedorCura {\n  /*  background-image: url(../assets/imgs/options/cura.png); */\n  background: #00ACA0;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 90%;\n  margin-left: 5%;\n  height: 180px;\n  border-top-right-radius: 30px;\n  margin-bottom: 15px;\n}\n\n.contenedorCura img {\n  width: 180px;\n  /* margin-left:-10px; */\n}\n\nion-content {\n  --background: #f1f3f8;\n}\n\n.contenedorCuida {\n  background: #FB6E54;\n  /*  background-image: url(../assets/imgs/options/cuida.png); */\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 90%;\n  margin-left: 5%;\n  height: 180px;\n  border-top-right-radius: 30px;\n  margin-bottom: 15px;\n}\n\n.contenedorCuida img {\n  width: 180px;\n}\n\n.contenedorTele {\n  background: #4d089a;\n  /*  background-image: url(../assets/imgs/options/cuida.png); */\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 90%;\n  margin-left: 5%;\n  height: 180px;\n  border-top-right-radius: 30px;\n}\n\n.contenedorTele img {\n  width: 180px;\n}\n\n.tituloCura {\n  color: #ffffff;\n  font-size: 1.3em;\n  margin-left: 16px;\n  padding-top: 16px !important;\n  font-weight: 600;\n}\n\n.parrafoCura {\n  color: #ffffff;\n  font-size: 1.1em;\n  /* text-transform: italic; */\n  font-weight: 200;\n  text-align: left;\n  width: 90%;\n  margin-left: 16px !important;\n  margin-top: 10px;\n}\n\n.parrafoCuida {\n  color: #ffffff;\n  font-size: 1.1em;\n  /* text-transform: italic; */\n  font-weight: 200;\n  text-align: left;\n  width: 90%;\n  margin-left: 16px !important;\n  margin-top: 10px;\n}\n\n.parrafoTele {\n  color: #ffffff;\n  font-size: 1.1em;\n  /* text-transform: italic; */\n  font-weight: 200;\n  text-align: left;\n  width: 90%;\n  margin-left: 16px !important;\n  margin-top: 10px;\n}\n\n.contenedorIrA {\n  width: 40%;\n  background: #20668B;\n  position: relative;\n  float: right;\n  border-top-left-radius: 15px;\n}\n\n.contenedorIrA p {\n  color: #fff;\n  font-size: 1.1em;\n  text-align: right;\n  margin-right: 16px;\n}\n\n.contenedorIrACuida {\n  background: #20668B;\n  width: 40%;\n  position: relative;\n  float: right;\n  border-top-left-radius: 15px;\n}\n\n.contenedorIrACuida p {\n  color: #fff;\n  font-size: 1.1em;\n  text-align: right;\n  margin-right: 16px;\n}\n\n.contenedorBoton {\n  height: 120px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.contenedorLogo {\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.logo {\n  width: 80%;\n  margin-left: 5%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.textoCura {\n  text-align: center;\n  color: #20668B;\n  font-size: 0.9em;\n  width: 90%;\n  margin-left: 5%;\n}\n\n.textoCuida {\n  text-align: center;\n  color: #20668B;\n  font-size: 0.9em;\n  width: 90%;\n  margin-left: 5%;\n}\n\n.top-20 {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbWFyL3Byb3llY3Rvcy9EZXYvYm9va2luZ3Y0L3NyYy9hcHAvcGFnZXMvb3B0aW9ucy9vcHRpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3B0aW9ucy9vcHRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLDZEQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENFO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FER0E7RUFDRSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSw4REFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FERUU7RUFDRSxZQUFBO0FDQUo7O0FESUE7RUFDRSxtQkFBQTtFQUNBLDhEQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FDREY7O0FER0U7RUFDRSxZQUFBO0FDREo7O0FES0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDRkY7O0FESUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRko7O0FET0E7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQ0pGOztBRE1FO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0pKOztBRFFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDTEY7O0FEUUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNMRjs7QURRQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0xGOztBRFFBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0xGOztBRFFBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0xGOztBRFFBO0VBQ0UsZ0JBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29wdGlvbnMvb3B0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxvT3B0aW9ucyB7XG4gIGNvbG9yOiAjMjA2NjhCO1xuICBmb250LXNpemU6IDEuMmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjFlbTtcbn1cblxuLmNvbnRlbmVkb3JDdXJhIHtcbiAgLyogIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1ncy9vcHRpb25zL2N1cmEucG5nKTsgKi9cbiAgYmFja2dyb3VuZDogIzAwQUNBMDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBoZWlnaHQ6IDE4MHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICAvKiBtYXJnaW4tbGVmdDotMTBweDsgKi9cbiAgfVxufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2YxZjNmODtcbn1cblxuLmNvbnRlbmVkb3JDdWlkYSB7XG4gIGJhY2tncm91bmQ6ICNGQjZFNTQ7XG4gIC8qICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltZ3Mvb3B0aW9ucy9jdWlkYS5wbmcpOyAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGhlaWdodDogMTgwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG59XG5cbi5jb250ZW5lZG9yVGVsZSB7XG4gIGJhY2tncm91bmQ6ICM0ZDA4OWE7XG4gIC8qICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltZ3Mvb3B0aW9ucy9jdWlkYS5wbmcpOyAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGhlaWdodDogMTgwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG59XG5cbi50aXR1bG9DdXJhIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXRvcDogMTZweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucGFycmFmb0N1cmEge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgLyogdGV4dC10cmFuc2Zvcm06IGl0YWxpYzsgKi9cbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDE2cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnBhcnJhZm9DdWlkYSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDEuMWVtO1xuICAvKiB0ZXh0LXRyYW5zZm9ybTogaXRhbGljOyAqL1xuICBmb250LXdlaWdodDogMjAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogMTZweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucGFycmFmb1RlbGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgLyogdGV4dC10cmFuc2Zvcm06IGl0YWxpYzsgKi9cbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDE2cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNvbnRlbmVkb3JJckEge1xuICB3aWR0aDogNDAlO1xuICBiYWNrZ3JvdW5kOiAjMjA2NjhCO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiByaWdodDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcblxuICBwIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcblxuICB9XG59XG5cbi5jb250ZW5lZG9ySXJBQ3VpZGEge1xuICBiYWNrZ3JvdW5kOiAjMjA2NjhCO1xuICB3aWR0aDogNDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiByaWdodDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcblxuICBwIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgfVxufVxuXG4uY29udGVuZWRvckJvdG9uIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250ZW5lZG9yTG9nbyB7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udGV4dG9DdXJhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzIwNjY4QjtcbiAgZm9udC1zaXplOiAuOWVtO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi50ZXh0b0N1aWRhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzIwNjY4QjtcbiAgZm9udC1zaXplOiAuOWVtO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi50b3AtMjAge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSIsIi50aXR1bG9PcHRpb25zIHtcbiAgY29sb3I6ICMyMDY2OEI7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMWVtO1xufVxuXG4uY29udGVuZWRvckN1cmEge1xuICAvKiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWdzL29wdGlvbnMvY3VyYS5wbmcpOyAqL1xuICBiYWNrZ3JvdW5kOiAjMDBBQ0EwO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGhlaWdodDogMTgwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmNvbnRlbmVkb3JDdXJhIGltZyB7XG4gIHdpZHRoOiAxODBweDtcbiAgLyogbWFyZ2luLWxlZnQ6LTEwcHg7ICovXG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjFmM2Y4O1xufVxuXG4uY29udGVuZWRvckN1aWRhIHtcbiAgYmFja2dyb3VuZDogI0ZCNkU1NDtcbiAgLyogIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1ncy9vcHRpb25zL2N1aWRhLnBuZyk7ICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgaGVpZ2h0OiAxODBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uY29udGVuZWRvckN1aWRhIGltZyB7XG4gIHdpZHRoOiAxODBweDtcbn1cblxuLmNvbnRlbmVkb3JUZWxlIHtcbiAgYmFja2dyb3VuZDogIzRkMDg5YTtcbiAgLyogIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1ncy9vcHRpb25zL2N1aWRhLnBuZyk7ICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgaGVpZ2h0OiAxODBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG59XG4uY29udGVuZWRvclRlbGUgaW1nIHtcbiAgd2lkdGg6IDE4MHB4O1xufVxuXG4udGl0dWxvQ3VyYSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgcGFkZGluZy10b3A6IDE2cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnBhcnJhZm9DdXJhIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIC8qIHRleHQtdHJhbnNmb3JtOiBpdGFsaWM7ICovXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5wYXJyYWZvQ3VpZGEge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgLyogdGV4dC10cmFuc2Zvcm06IGl0YWxpYzsgKi9cbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDE2cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnBhcnJhZm9UZWxlIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIC8qIHRleHQtdHJhbnNmb3JtOiBpdGFsaWM7ICovXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jb250ZW5lZG9ySXJBIHtcbiAgd2lkdGg6IDQwJTtcbiAgYmFja2dyb3VuZDogIzIwNjY4QjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG59XG4uY29udGVuZWRvcklyQSBwIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5jb250ZW5lZG9ySXJBQ3VpZGEge1xuICBiYWNrZ3JvdW5kOiAjMjA2NjhCO1xuICB3aWR0aDogNDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiByaWdodDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbn1cbi5jb250ZW5lZG9ySXJBQ3VpZGEgcCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuMWVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuXG4uY29udGVuZWRvckJvdG9uIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250ZW5lZG9yTG9nbyB7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udGV4dG9DdXJhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzIwNjY4QjtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4udGV4dG9DdWlkYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyMDY2OEI7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLnRvcC0yMCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/options/options.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/options/options.page.ts ***!
  \***********************************************/
/*! exports provided: OptionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsPage", function() { return OptionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let OptionsPage = class OptionsPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToCardPage() {
        const datos = {
            escogido: 44
        };
        const data = JSON.stringify(datos);
        this.router.navigate(['/card', data]);
        /*  this.navCtrl.push(CardPage); */
    }
    goToCardPageTele() {
        const datos = {
            escogido: 845337
        };
        const data = JSON.stringify(datos);
        this.router.navigate(['card', data]);
    }
    goToCardCuidaPage() {
        this.router.navigate(['card-cuida']);
    }
};
OptionsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
OptionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-options',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./options.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/options/options.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./options.page.scss */ "./src/app/pages/options/options.page.scss")).default]
    })
], OptionsPage);



/***/ })

}]);
//# sourceMappingURL=pages-options-options-module.js.map