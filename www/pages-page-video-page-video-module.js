(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-page-video-page-video-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-video/page-video.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-video/page-video.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar traslucent color=\"transparent\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"closeSession()\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [id]=\"localCallId\" class=\"local\"></div>\n\n  <div *ngFor=\"let callId of remoteCalls\" [id]=\"callId\" class=\"remote\"></div>\n  <div class=\"container-buttons\">\n    <ion-row>\n      <ion-col size=\"10\" class=\"datosDoctor\">\n        <p class=\"horaInicio\">Doctor:</p>\n        <p class=\"NombreDoctor\">{{nombreDoctor}}</p>\n        <p class=\"horaInicio fondo\">{{time}}</p>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-row>\n          <ion-col>\n            <ion-button fill=\"clear\" color=\"light\">\n              <ion-icon name=\"mic-off\" (click)=\"mute()\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button fill=\"clear\" color=\"light\">\n              <ion-icon name=\"videocam\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"12\" class=\"containerIconos\" (click)=\"leave()\">\n        <ion-icon name=\"call\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/page-video/page-video-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/page-video/page-video-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PageVideoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageVideoPageRoutingModule", function() { return PageVideoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _page_video_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-video.page */ "./src/app/pages/page-video/page-video.page.ts");




const routes = [
    {
        path: '',
        component: _page_video_page__WEBPACK_IMPORTED_MODULE_3__["PageVideoPage"]
    }
];
let PageVideoPageRoutingModule = class PageVideoPageRoutingModule {
};
PageVideoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PageVideoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/page-video/page-video.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/page-video/page-video.module.ts ***!
  \*******************************************************/
/*! exports provided: PageVideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageVideoPageModule", function() { return PageVideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _page_video_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-video-routing.module */ "./src/app/pages/page-video/page-video-routing.module.ts");
/* harmony import */ var _page_video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-video.page */ "./src/app/pages/page-video/page-video.page.ts");







let PageVideoPageModule = class PageVideoPageModule {
};
PageVideoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _page_video_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageVideoPageRoutingModule"]
        ],
        declarations: [_page_video_page__WEBPACK_IMPORTED_MODULE_6__["PageVideoPage"]]
    })
], PageVideoPageModule);



/***/ }),

/***/ "./src/app/pages/page-video/page-video.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/page-video/page-video.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .top-video {\n    position: absolute;\n    bottom: 0;\n    right: 10px;\n    max-width: 100px;\n    z-index: 2;\n  } */\nion-content {\n  height: 100vh !important;\n}\n#partnert-video {\n  position: fixed;\n  right: 1rem;\n  bottom: 1rem;\n  width: 20vw;\n  height: 20vh;\n  border-radius: 5px;\n  overflow: hidden;\n  z-index: 1;\n}\n#my-video {\n  position: fixed;\n  bottom: 0;\n  right: 10px;\n  width: 30vw;\n  height: 20vh;\n  /* height: 100vh */\n}\n.local {\n  position: fixed;\n  right: 1rem;\n  top: 1.5rem;\n  width: 20vw;\n  height: 20vh;\n  border-radius: 5px;\n  overflow: hidden;\n  z-index: 1;\n}\n.remote {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n}\nion-toolbar {\n  --ion-toolbar-background-color: transparent;\n  --ion-toolbar-text-color: white;\n}\n.header-md:after {\n  background-image: none;\n}\n.container-buttons {\n  z-index: 5;\n  position: fixed;\n  bottom: 1.5rem;\n  width: 100%;\n}\n.datosDoctor p {\n  color: #fff;\n  margin-left: 20px;\n}\n.datosDoctor .NombreDoctor {\n  margin-top: -10px;\n  margin-bottom: 20px;\n  font-size: 1em;\n  font-weight: 500;\n  color: white;\n}\n.datosDoctor .horaInicio {\n  color: rgba(255, 255, 255, 0.9);\n  margin-top: -15px;\n}\n.datosDoctor .fondo {\n  background: rgba(0, 0, 0, 0.7);\n  width: 25%;\n  padding: 5px;\n  border-radius: 3px;\n}\n.containerIconos {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.containerIconos ion-icon {\n  background-color: red;\n  color: #fff;\n  font-size: 20px;\n  padding: 20px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbWFyL3Byb3llY3Rvcy9EZXYvYm9va2luZ3Y0L3NyYy9hcHAvcGFnZXMvcGFnZS12aWRlby9wYWdlLXZpZGVvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGFnZS12aWRlby9wYWdlLXZpZGVvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0tBQUE7QUFPRTtFQUNFLHdCQUFBO0FDQ0o7QURDRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNFSjtBREFFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0dKO0FEQUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDR0o7QURBRTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDR0o7QURERTtFQUNFLDJDQUFBO0VBQ0EsK0JBQUE7QUNJSjtBREZJO0VBQ0Usc0JBQUE7QUNLTjtBREhFO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ01OO0FESEk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNNTjtBREpJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNNTjtBREpJO0VBQ0UsK0JBQUE7RUFDQSxpQkFBQTtBQ01OO0FESkk7RUFDRSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNNTjtBREhFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDTUo7QURMSTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNPTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2UtdmlkZW8vcGFnZS12aWRlby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAudG9wLXZpZGVvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgei1pbmRleDogMjtcbiAgfSAqL1xuICBpb24tY29udGVudHtcbiAgICBoZWlnaHQ6IDEwMHZoIWltcG9ydGFudDtcbiAgfVxuICAjcGFydG5lcnQtdmlkZW8ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMXJlbTtcbiAgICBib3R0b206IDFyZW07XG4gICAgd2lkdGg6IDIwdnc7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgI215LXZpZGVve1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDMwdnc7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIC8qIGhlaWdodDogMTAwdmggKi87XG4gIH1cblxuICAubG9jYWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMXJlbTtcbiAgICB0b3A6IDEuNXJlbTtcbiAgICB3aWR0aDogMjB2dztcbiAgICBoZWlnaHQ6IDIwdmg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgei1pbmRleDogMTtcbiAgfVxuICBcbiAgLnJlbW90ZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0taW9uLXRvb2xiYXItdGV4dC1jb2xvcjogd2hpdGU7ICAgIFxuICAgIH1cbiAgICAuaGVhZGVyLW1kOmFmdGVye1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICB9XG4gIC5jb250YWluZXItYnV0dG9uc3tcbiAgICAgIHotaW5kZXg6NTtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIGJvdHRvbToxLjVyZW07XG4gICAgICB3aWR0aDoxMDAlO1xuICAgIH1cbiAgLmRhdG9zRG9jdG9ye1xuICAgIHB7XG4gICAgICBjb2xvcjojZmZmO1xuICAgICAgbWFyZ2luLWxlZnQ6MjBweDtcbiAgICB9XG4gICAgLk5vbWJyZURvY3RvcntcbiAgICAgIG1hcmdpbi10b3A6LTEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOjIwcHg7XG4gICAgICBmb250LXNpemU6MWVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiByZ2JhKCRjb2xvcjogI2ZmZiwgJGFscGhhOiAxKTtcbiAgICB9XG4gICAgLmhvcmFJbmljaW97XG4gICAgICBjb2xvcjpyZ2JhKCRjb2xvcjogI2ZmZiwgJGFscGhhOiAwLjkpO1xuICAgICAgbWFyZ2luLXRvcDotMTVweDtcbiAgICB9XG4gICAgLmZvbmRve1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC43KTtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgfVxuICB9XG4gIC5jb250YWluZXJJY29ub3N7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaW9uLWljb257XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcbiAgICAgIGNvbG9yOiNmZmY7XG4gICAgICBmb250LXNpemU6MjBweDtcbiAgICAgIHBhZGRpbmc6MjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgIH1cbiAgfVxuXG4gICIsIi8qIC50b3AtdmlkZW8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICB6LWluZGV4OiAyO1xuICB9ICovXG5pb24tY29udGVudCB7XG4gIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbn1cblxuI3BhcnRuZXJ0LXZpZGVvIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMXJlbTtcbiAgYm90dG9tOiAxcmVtO1xuICB3aWR0aDogMjB2dztcbiAgaGVpZ2h0OiAyMHZoO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDE7XG59XG5cbiNteS12aWRlbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMTBweDtcbiAgd2lkdGg6IDMwdnc7XG4gIGhlaWdodDogMjB2aDtcbiAgLyogaGVpZ2h0OiAxMDB2aCAqL1xufVxuXG4ubG9jYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAxcmVtO1xuICB0b3A6IDEuNXJlbTtcbiAgd2lkdGg6IDIwdnc7XG4gIGhlaWdodDogMjB2aDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxO1xufVxuXG4ucmVtb3RlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWlvbi10b29sYmFyLXRleHQtY29sb3I6IHdoaXRlO1xufVxuXG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cblxuLmNvbnRhaW5lci1idXR0b25zIHtcbiAgei1pbmRleDogNTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDEuNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kYXRvc0RvY3RvciBwIHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmRhdG9zRG9jdG9yIC5Ob21icmVEb2N0b3Ige1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kYXRvc0RvY3RvciAuaG9yYUluaWNpbyB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xufVxuLmRhdG9zRG9jdG9yIC5mb25kbyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgd2lkdGg6IDI1JTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5jb250YWluZXJJY29ub3Mge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFpbmVySWNvbm9zIGlvbi1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/page-video/page-video.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/page-video/page-video.page.ts ***!
  \*****************************************************/
/*! exports provided: PageVideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageVideoPage", function() { return PageVideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_agora__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-agora */ "./node_modules/ngx-agora/__ivy_ngcc__/fesm2015/ngx-agora.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_appoinment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/appoinment.service */ "./src/app/services/appoinment.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_services_permissions_video_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/permissions-video.service */ "./src/app/services/permissions-video.service.ts");








let PageVideoPage = class PageVideoPage {
    constructor(elRef, router, ngxAgoraService, activateRoute, appointmetSrv, nav, routes, permissionSrv) {
        this.elRef = elRef;
        this.router = router;
        this.ngxAgoraService = ngxAgoraService;
        this.activateRoute = activateRoute;
        this.appointmetSrv = appointmetSrv;
        this.nav = nav;
        this.routes = routes;
        this.permissionSrv = permissionSrv;
        this.topVideoFrame = 'partner-video';
        this.title = 'angular-video';
        this.remoteCalls = [];
        const data = this.routes.snapshot.paramMap.get('data');
        this.dataPermissions = JSON.parse(data);
        console.log('dataPermissions:', this.dataPermissions);
        if (data) {
            this.getPermissionVideo();
        }
    }
    ngOnInit() {
        this.crhono();
        this.nombreDoctor = localStorage.getItem('doctor');
        this.idDoctor = localStorage.getItem('idDoctor');
    }
    getPermissionVideo() {
        let appoinmentid = this.dataPermissions.appointmentId;
        let patientId = this.dataPermissions.patientId;
        if (this.dataPermissions.familiar === true) {
            this.permissionSrv.getAuthoParent(patientId, appoinmentid).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('data', data);
                this.channel = data.channel;
                this.token = data.token;
                this.localCallId = data.uid.toString();
                this.uid = data.uid;
                this.initVideo();
            }));
        }
        else {
            this.permissionSrv.getPermissionsVideo(appoinmentid).subscribe(data => {
                console.log('data', data);
                this.channel = data.channel;
                this.token = data.token;
                this.localCallId = data.uid.toString();
                this.uid = data.uid;
                this.initVideo();
            }, err => {
                console.log(err);
            });
        }
    }
    initVideo() {
        this.client = this.ngxAgoraService.createClient({ mode: 'rtc', codec: 'h264' });
        this.assignClientHandlers();
        this.localStream = this.ngxAgoraService.createStream({ streamID: this.uid, audio: true, video: true, screen: false });
        this.assignLocalStreamHandlers();
        this.initLocalStream(() => this.join(uid => this.publish(), error => console.error(error)));
        this.localStream.setVideoProfile('720p_3');
    }
    crhono() {
        setInterval(() => {
            this.updateTime();
        }, 1000);
    }
    updateTime() {
        this.time = moment__WEBPACK_IMPORTED_MODULE_6__().format('hh:mm:ss');
    }
    join(onSuccess, onFailure) {
        this.client.join(this.token, this.channel, this.uid, onSuccess, onFailure);
    }
    /**
     * Attempts to upload the created local A/V stream to a joined chat room.
     */
    publish() {
        this.client.publish(this.localStream, err => console.log('Publish local stream error: ' + err));
    }
    assignLocalStreamHandlers() {
        this.localStream.on(ngx_agora__WEBPACK_IMPORTED_MODULE_2__["StreamEvent"].MediaAccessAllowed, () => {
            console.log('accessAllowed');
        });
        // The user has denied access to the camera and mic.
        this.localStream.on(ngx_agora__WEBPACK_IMPORTED_MODULE_2__["StreamEvent"].MediaAccessDenied, () => {
            console.log('accessDenied');
        });
    }
    initLocalStream(onSuccess) {
        this.localStream.init(() => {
            // The user has granted access to the camera and mic.
            console.log(this.localCallId);
            this.localStream.play(this.localCallId);
            if (onSuccess) {
                onSuccess();
            }
        }, err => console.error('getUserMedia failed', err));
    }
    assignClientHandlers() {
        this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_2__["ClientEvent"].LocalStreamPublished, evt => {
            console.log('Publish local stream successfully');
        });
        this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_2__["ClientEvent"].Error, error => {
            console.log('Got error msg:', error.reason);
            if (error.reason === 'DYNAMIC_KEY_TIMEOUT') {
                this.client.renewChannelKey('', () => console.log('Renewed the channel key successfully.'), renewError => console.error('Renew channel key failed: ', renewError));
            }
        });
        this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_2__["ClientEvent"].RemoteStreamAdded, evt => {
            const stream = evt.stream;
            this.client.subscribe(stream, { audio: true, video: true }, err => {
                console.log('Subscribe stream failed', err);
            });
        });
        this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_2__["ClientEvent"].RemoteStreamSubscribed, evt => {
            const stream = evt.stream;
            const id = this.getRemoteId(stream);
            if (!this.remoteCalls.length) {
                this.remoteCalls.push(id);
                setTimeout(() => stream.play(id), 1000);
            }
        });
        this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_2__["ClientEvent"].RemoteStreamRemoved, evt => {
            const stream = evt.stream;
            if (stream) {
                stream.stop();
                this.remoteCalls = [];
                console.log(`Remote stream is removed ${stream.getId()}`);
            }
        });
        this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_2__["ClientEvent"].PeerLeave, evt => {
            const stream = evt.stream;
            if (stream) {
                stream.stop();
                this.remoteCalls = this.remoteCalls.filter(call => call !== `${this.getRemoteId(stream)}`);
                console.log(`${evt.uid} left from this channel`);
            }
        });
    }
    getRemoteId(stream) {
        return `agora_remote-${stream.getId()}`;
    }
    closePage() {
        this.nav.back();
        this.client.leave(() => {
            console.log("Leavel channel successfully");
        }, (err) => {
            console.log("Leave channel failed");
        });
        this.localStream.close();
    }
    leave() {
        this.client.leave(() => {
            console.log("Leavel channel successfully");
        }, (err) => {
            console.log("Leave channel failed");
        });
        this.router.navigate(['/home']);
        this.localStream.close();
    }
    mute() {
        this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_2__["ClientEvent"].RemoveVideoMuted, evt => {
            console.log('video desactivado');
        });
        this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_2__["ClientEvent"].PeerLeave, () => {
            console.log('eliminar a otro usuario');
        });
    }
    ;
    /*  dejar(){
   
       this.client.on('peer-leave', (evt) => {
         const stream = evt.stream;
         if (stream) {
           stream.stop();
           this.remoteCalls = this.remoteCalls.filter(call => call === `#agora_remote${stream.getId()}`);
           console.log(`${evt.uid} left from this channel`);
         }
       });
     }*/
    /*   remove(){
        this.ngxAgoraService.client.on( "stream-removed" () ,(evt) => {
          const stream = evt.stream;
          stream.stop();
          this.remoteCalls = this.remoteCalls.filter(call => call === `#agora_remote${stream.getId()}`);
          console.log(`Remote stream is removed ${stream.getId()}`);
        });
      }  */
    closeSession() {
        this.localStream.on(ngx_agora__WEBPACK_IMPORTED_MODULE_2__["StreamEvent"].MediaAccessDenied, () => {
            console.log('access Denied');
        });
        this.client.leave();
        this.localStream.stop();
        this.client.off;
        console.log('cerrar localStream');
    }
};
PageVideoPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_agora__WEBPACK_IMPORTED_MODULE_2__["NgxAgoraService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_appoinment_service__WEBPACK_IMPORTED_MODULE_4__["AppoinmentService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_permissions_video_service__WEBPACK_IMPORTED_MODULE_7__["PermissionsVideoService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('date')
], PageVideoPage.prototype, "date", void 0);
PageVideoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-video',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./page-video.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-video/page-video.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./page-video.page.scss */ "./src/app/pages/page-video/page-video.page.scss")).default]
    })
], PageVideoPage);



/***/ })

}]);
//# sourceMappingURL=pages-page-video-page-video-module.js.map