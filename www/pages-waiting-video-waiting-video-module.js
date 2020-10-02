(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-waiting-video-waiting-video-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/waiting-video/waiting-video.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/waiting-video/waiting-video.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <!-- <ion-back-button slot=\"start\"></ion-back-button> -->\n      <ion-icon name=\"arrow-back\" slot=\"start\" (click)=\"goToBack()\" class=\"iconoback\">volver</ion-icon>\n    </ion-buttons>\n    <ion-title>Volver</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides>\n    <ion-slide\n      style=\"background-image:url({{SERVERImage}}{{dataDoctor.professionalId}}.png); background-repeat: no-repeat; background-size:cover; height: 100vh;\"\n      (error)=\"errorHandler($event)\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <h1>En Espera...</h1>\n        </ion-col>\n        <ion-col size=\"6\"></ion-col>\n        <ion-col size=\"6\">\n          <p>El doctor <b>{{dataDoctor.professionalFullName}}</b> estará contigo en breves momentos</p>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n  </ion-slides>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/waiting-video/waiting-video-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/waiting-video/waiting-video-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: WaitingVideoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitingVideoPageRoutingModule", function() { return WaitingVideoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _waiting_video_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./waiting-video.page */ "./src/app/pages/waiting-video/waiting-video.page.ts");




const routes = [
    {
        path: '',
        component: _waiting_video_page__WEBPACK_IMPORTED_MODULE_3__["WaitingVideoPage"]
    }
];
let WaitingVideoPageRoutingModule = class WaitingVideoPageRoutingModule {
};
WaitingVideoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WaitingVideoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/waiting-video/waiting-video.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/waiting-video/waiting-video.module.ts ***!
  \*************************************************************/
/*! exports provided: WaitingVideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitingVideoPageModule", function() { return WaitingVideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _waiting_video_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./waiting-video-routing.module */ "./src/app/pages/waiting-video/waiting-video-routing.module.ts");
/* harmony import */ var _waiting_video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./waiting-video.page */ "./src/app/pages/waiting-video/waiting-video.page.ts");







let WaitingVideoPageModule = class WaitingVideoPageModule {
};
WaitingVideoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _waiting_video_routing_module__WEBPACK_IMPORTED_MODULE_5__["WaitingVideoPageRoutingModule"]
        ],
        declarations: [_waiting_video_page__WEBPACK_IMPORTED_MODULE_6__["WaitingVideoPage"]]
    })
], WaitingVideoPageModule);



/***/ }),

/***/ "./src/app/pages/waiting-video/waiting-video.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/waiting-video/waiting-video.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nh1 {\n  font-size: 2.2em;\n  font-weight: 600;\n  text-align: left;\n  color: #00a8cc;\n  margin-left: 20px;\n}\n\np {\n  font-size: 1.2em;\n  font-weight: 400;\n  text-align: left;\n  color: #00a8cc;\n  margin-left: 20px;\n}\n\n.iconoback {\n  margin-left: 20px !important;\n  font-size: 1.4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbWFyL3Byb3llY3Rvcy9EZXYvYm9va2luZ3Y0L3NyYy9hcHAvcGFnZXMvd2FpdGluZy12aWRlby93YWl0aW5nLXZpZGVvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvd2FpdGluZy12aWRlby93YWl0aW5nLXZpZGVvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2FpdGluZy12aWRlby93YWl0aW5nLXZpZGVvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDIuMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogIzAwYThjYztcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxucCB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICMwMGE4Y2M7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5pY29ub2JhY2sge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbn0iLCJpb24tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMi4yZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMDBhOGNjO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMDBhOGNjO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmljb25vYmFjayB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/waiting-video/waiting-video.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/waiting-video/waiting-video.page.ts ***!
  \***********************************************************/
/*! exports provided: WaitingVideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitingVideoPage", function() { return WaitingVideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_permissions_video_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/permissions-video.service */ "./src/app/services/permissions-video.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");








let WaitingVideoPage = class WaitingVideoPage {
    constructor(routes, router, nav, permissionSrv, alertCtrl, iab) {
        this.routes = routes;
        this.router = router;
        this.nav = nav;
        this.permissionSrv = permissionSrv;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.SERVERImage = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["API_IMAGES"];
        const data = this.routes.snapshot.paramMap.get('data');
        this.dataDoctor = JSON.parse(data);
        console.log('thisdataDoctor:', this.dataDoctor);
    }
    ngOnInit() {
        this.verifyToken();
    }
    verifyToken() {
        this.resultado = setInterval(() => {
            this.getPermissionVideo();
        }, 10000);
        /*  if (this.token != '') {
           clearInterval(this.resultado);
         } */
    }
    errorHandler(event) {
        event.target.src.style = "background-image:url(https://1.bp.blogspot.com/-p8EFlkXywyE/UDZvWTyr1bI/AAAAAAAAEU0/xL8pmKN1KOY/s1600/facebook.png); background-repeat: no-repeat; background-size:cover; height: 100vh;";
    }
    openVideo() {
        console.log('resultado de la data para permisos:', this.permisionsData, this.dataDoctor);
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["OPENTELE"];
        const appId = encodeURIComponent(this.dataDoctor.appointmentId);
        const professional = encodeURIComponent(this.dataDoctor.professionalId);
        const professionalName = encodeURIComponent(this.dataDoctor.professionalName);
        const professionalLastName1 = encodeURIComponent(this.dataDoctor.professionalLastName1);
        const professionalLastName2 = encodeURIComponent(this.dataDoctor.professionalLastName2);
        const basicServiceDescription = encodeURIComponent(this.dataDoctor.basicServiceDescription);
        const patientId = encodeURIComponent(this.dataDoctor.patientId);
        const channel = encodeURIComponent(this.permisionsData.channel);
        let options = "location=yes,hidden=yes,beforeload=yes,hideurlbar=yes";
        const browser = this.iab.create(`${url}/telecon/%7B"appointmentId":${appId},"basicServiceDescription":"${basicServiceDescription}","professionalId":${professional},"professionalName":"${professionalName}","professionalLastName1":"${professionalLastName1}","professionalLastName2":"${professionalLastName2}","patientId":${patientId},"channel":"${channel}"%7D`, '_system', options);
    }
    getPermissionVideo() {
        let patientId = this.dataDoctor.patientId;
        let appoinmentid = this.dataDoctor.appointmentId;
        if (this.dataDoctor.familiar === true) {
            this.permissionSrv.getAuthoParent(appoinmentid, patientId).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.token = data.token;
                this.permisionsData = data;
                if (this.token === "") {
                    console.log('aun no llega token');
                }
                else if (this.token === 'finalizado') {
                    this.router.navigate(['home']);
                    const alert = yield this.alertCtrl.create({
                        header: 'Cita Terminada',
                        subHeader: 'Esta cita ya ha finalizado',
                        buttons: [
                            {
                                text: 'ok'
                            }
                        ]
                    });
                    yield alert.present();
                    clearInterval(this.resultado);
                }
                else {
                    /*  clearInterval(this.resultado); */
                    const data = JSON.stringify(this.dataDoctor);
                    this.openVideo();
                    clearInterval(this.resultado);
                    this.goToBack();
                }
                console.log(data);
            }), err => {
                console.log(err);
            });
        }
        else {
            this.permissionSrv.getPermissionsVideo(appoinmentid).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.permisionsData = data;
                this.token = data.token;
                if (this.token === "") {
                    console.log('aun no llega token');
                }
                else if (this.token === 'finalizado') {
                    this.router.navigate(['home']);
                    const alert = yield this.alertCtrl.create({
                        header: 'Cita Terminada',
                        subHeader: 'Esta cita ya ha finalizado',
                        buttons: [
                            {
                                text: 'ok'
                            }
                        ]
                    });
                    yield alert.present();
                    clearInterval(this.resultado);
                }
                else {
                    /*  clearInterval(this.resultado); */
                    this.openVideo();
                    clearInterval(this.resultado);
                    this.goToBack();
                }
                console.log(data);
            }), err => {
                console.log(err);
            });
        }
    }
    goToBack() {
        clearInterval(this.resultado);
        this.nav.back();
    }
};
WaitingVideoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_permissions_video_service__WEBPACK_IMPORTED_MODULE_5__["PermissionsVideoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] }
];
WaitingVideoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-waiting-video',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./waiting-video.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/waiting-video/waiting-video.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./waiting-video.page.scss */ "./src/app/pages/waiting-video/waiting-video.page.scss")).default]
    })
], WaitingVideoPage);



/***/ })

}]);
//# sourceMappingURL=pages-waiting-video-waiting-video-module.js.map