(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-create-parent-prime-create-parent-prime-module~pages-myparents-myparents-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-parent-prime/create-parent-prime.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-parent-prime/create-parent-prime.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"gris\">\n  <div class=\"cienPorCiento\">\n    <ion-row>\n      <ion-col size=\"10\">\n        <h3 class=\"tituloFamiliar\">Creación de cuenta Adicional</h3>\n      </ion-col>\n      <ion-col size=\"2\" class=\"contenedorButton\">\n        <ion-button shape=\"round\" (click)=\"closeModal()\" color=\"secondary\">\n          <ion-icon name=\"close-outline\">\n          </ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <form [formGroup]=\"formFamily\" (ngSubmit)=\"saveData(formFamily.value)\" novalidate>\n    <ion-list>\n\n      <ion-row padding>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\">Nombres:</ion-label>\n            <ion-input formControlName=\"name\" type=\"text\" maxlength=\"40\">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"floating\">Apellido Paterno:</ion-label>\n            <ion-input formControlName=\"paternal_surname\" type=\"text\" maxlength=\"40\">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"floating\">Apellido Materno:</ion-label>\n            <ion-input formControlName=\"maternal_surname\" type=\"text\" maxlength=\"40\">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"floating\">Documento:</ion-label>\n            <ion-select [(ngModel)]=\"change\" formControlName=\"type_document\" name=\"type_document\" position=\"floating\">\n              <ion-select-option value=\"D.N.I\">DNI</ion-select-option>\n              <ion-select-option value=\"carne_extranjeria\">Carne de Extranjeria</ion-select-option>\n              <ion-select-option value=\"pasaporte\">Pasaporte</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"floating\"> Nº Documento:</ion-label>\n            <ion-input *ngIf=\"change === 'D.N.I'\" type=\"tel\" formControlName=\"dni\" name=\"dni\" minlength=\"8\"\n              maxlength=\"8\" position=\"floating\"></ion-input>\n            <ion-input *ngIf=\"change === 'carne_extranjeria'\" type=\"tel\" formControlName=\"dni\" name=\"dni\" minlength=\"12\"\n              maxlength=\"12\" position=\"floating\"></ion-input>\n            <ion-input *ngIf=\"change === 'pasaporte'\" type=\"tel\" formControlName=\"dni\" name=\"dni\" minlength=\"12\"\n              maxlength=\"12\" position=\"floating\"></ion-input>\n            <!-- <p color=\"danger\" ion-text *ngIf=\"registerForm.get('dni').hasError('required')\">DNI requerido</p> -->\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"floating\">Sexo:</ion-label>\n            <ion-select formControlName=\"gender\" name=\"gender\">\n              <ion-select-option value=\"HOMBRE\">Hombre</ion-select-option>\n              <ion-select-option value=\"MUJER\">Mujer</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"floating\">Nacimiento:</ion-label>\n            <ion-datetime displayFormat=\"DD/MM/YYYY\" formControlName=\"date_of_birth\" name=\"date_of_birth\"\n              max=\"{{actual}}\"></ion-datetime>\n            <!-- <ion-input type=\"date\" formControlName=\"date_of_birth\" name=\"date_of_birth\"></ion-input> -->\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\">Parentesco:</ion-label>\n          <ion-select formControlName=\"kindred\" name=\"kindred\" position=\"floating\">\n            <ion-select-option value=\"{id:1, name:padre}\">Padre</ion-select-option>\n            <ion-select-option value=\"madre\">Madre</ion-select-option>\n            <ion-select-option value=\"hijo/a\">hijo/a</ion-select-option>\n            <!-- <ion-option value=\"daughter\">Hija</ion-option>\n          <ion-option value=\"uncle\">Tio</ion-option>\n          <ion-option value=\"aunt\">Tia</ion-option> -->\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-list>\n    <ion-button type=\"submit\" [disabled]=\"!desabilitadobutton\" size=\"block\" color=\"secondary\" class=\"guardaryContinuar\">\n      Guardar y continuar\n    </ion-button>\n  </form>\n  <!-- <ion-row>\n    <ion-col size=\"7\">\n\n    </ion-col>\n    <ion-col size=\"5\" class=\"contenedorButton\" (click)=\"closeModal()\">\n      <ion-button fill=\"clear\">\n        <p>cerrar</p>\n      </ion-button>\n    </ion-col>\n  </ion-row> -->\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/create-parent-prime/create-parent-prime.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/create-parent-prime/create-parent-prime.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  height: 85vh;\n  margin-top: 15vh;\n  border-top-left-radius: 45px;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.tituloFamiliar {\n  color: #00B6A3;\n  text-align: left;\n  margin-bottom: 10px;\n  font-size: 1.4em;\n  /*  margin-top:-10px!important; */\n  margin-left: -10px !important;\n}\n\n.cienPorCiento {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.buttonClose {\n  border-radius: 50% !important;\n  margin-top: -5px;\n  height: 28px;\n  text-align: right;\n  width: 25px;\n}\n\n.contenedorButton {\n  margin-top: 10px;\n  font-weight: 400;\n  text-align: right;\n}\n\nion-label {\n  font-size: 0.8em !important;\n  color: #336E81 !important;\n  padding-top: 5px !important;\n}\n\n.guardaryContinuar {\n  margin-top: 5px;\n  width: 90%;\n  margin-left: 5%;\n}\n\nion-scroll {\n  min-height: 80%;\n}\n\ninput::-moz-placeholder {\n  font-size: 0.8em;\n  color: #B6BFBF !important;\n}\n\ninput::-ms-input-placeholder {\n  font-size: 0.8em;\n  color: #B6BFBF !important;\n}\n\ninput::placeholder {\n  font-size: 0.8em;\n  color: #B6BFBF !important;\n}\n\n.select-text {\n  min-width: 80px;\n  color: #B6BFBF !important;\n}\n\n.list-md .item-block .item-inner {\n  border-bottom: none;\n}\n\n.colorIcon {\n  color: #336E81;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbWFyL3Byb3llY3Rvcy9EZXYvYm9va2luZ3Y0L3NyYy9hcHAvcGFnZXMvY3JlYXRlLXBhcmVudC1wcmltZS9jcmVhdGUtcGFyZW50LXByaW1lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3JlYXRlLXBhcmVudC1wcmltZS9jcmVhdGUtcGFyZW50LXByaW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7QUNDTjs7QURFSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDZCQUFBO0FDQ047O0FERUk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNDTjs7QURFSTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQ047O0FERUk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDTjs7QURFSTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQ0NOOztBREVJO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDQ047O0FERUk7RUFDRSxlQUFBO0FDQ047O0FERUk7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0FDQ047O0FESEk7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0FDQ047O0FESEk7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0FDQ047O0FERUk7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUNDTjs7QURFSTtFQUNFLG1CQUFBO0FDQ047O0FERUk7RUFDRSxjQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jcmVhdGUtcGFyZW50LXByaW1lL2NyZWF0ZS1wYXJlbnQtcHJpbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIGlvbi1jb250ZW50IHtcbiAgICAgIGhlaWdodDogODV2aDtcbiAgICAgIG1hcmdpbi10b3A6IDE1dmg7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0NXB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgfVxuXG4gICAgLnRpdHVsb0ZhbWlsaWFyIHtcbiAgICAgIGNvbG9yOiAjMDBCNkEzO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBmb250LXNpemU6IDEuNGVtO1xuICAgICAgLyogIG1hcmdpbi10b3A6LTEwcHghaW1wb3J0YW50OyAqL1xuICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNpZW5Qb3JDaWVudG8ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5idXR0b25DbG9zZSB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgIH1cblxuICAgIC5jb250ZW5lZG9yQnV0dG9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogLjhlbSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICMzMzZFODEgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuZ3VhcmRhcnlDb250aW51YXIge1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICB9XG5cbiAgICBpb24tc2Nyb2xsIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDgwJTtcbiAgICB9XG5cbiAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgICAgY29sb3I6ICNCNkJGQkYgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuc2VsZWN0LXRleHQge1xuICAgICAgbWluLXdpZHRoOiA4MHB4O1xuICAgICAgY29sb3I6ICNCNkJGQkYgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubGlzdC1tZCAuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cblxuICAgIC5jb2xvckljb24ge1xuICAgICAgY29sb3I6ICMzMzZFODE7XG4gICAgfSIsImlvbi1jb250ZW50IHtcbiAgaGVpZ2h0OiA4NXZoO1xuICBtYXJnaW4tdG9wOiAxNXZoO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0NXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi50aXR1bG9GYW1pbGlhciB7XG4gIGNvbG9yOiAjMDBCNkEzO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDEuNGVtO1xuICAvKiAgbWFyZ2luLXRvcDotMTBweCFpbXBvcnRhbnQ7ICovXG4gIG1hcmdpbi1sZWZ0OiAtMTBweCAhaW1wb3J0YW50O1xufVxuXG4uY2llblBvckNpZW50byB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ1dHRvbkNsb3NlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGhlaWdodDogMjhweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4uY29udGVuZWRvckJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXNpemU6IDAuOGVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMzM2RTgxICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcbn1cblxuLmd1YXJkYXJ5Q29udGludWFyIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbmlvbi1zY3JvbGwge1xuICBtaW4taGVpZ2h0OiA4MCU7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjQjZCRkJGICFpbXBvcnRhbnQ7XG59XG5cbi5zZWxlY3QtdGV4dCB7XG4gIG1pbi13aWR0aDogODBweDtcbiAgY29sb3I6ICNCNkJGQkYgIWltcG9ydGFudDtcbn1cblxuLmxpc3QtbWQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uY29sb3JJY29uIHtcbiAgY29sb3I6ICMzMzZFODE7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/create-parent-prime/create-parent-prime.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/create-parent-prime/create-parent-prime.page.ts ***!
  \***********************************************************************/
/*! exports provided: CreateParentPrimePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateParentPrimePage", function() { return CreateParentPrimePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_crudparent_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/crudparent.service */ "./src/app/services/crudparent.service.ts");
/* harmony import */ var src_app_services_dependens_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dependens.service */ "./src/app/services/dependens.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let CreateParentPrimePage = class CreateParentPrimePage {
    constructor(router, fb, dependentsPvr, loadingCtrl, crudPvr, alertCtrl, modalCtrl) {
        this.router = router;
        this.fb = fb;
        this.dependentsPvr = dependentsPvr;
        this.loadingCtrl = loadingCtrl;
        this.crudPvr = crudPvr;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.desabilitadobutton = true;
    }
    ngOnInit() {
        this.actual = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD');
        this.formFamily = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            paternal_surname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            maternal_surname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            date_of_birth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            type_document: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            dni: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(8)]],
            kindred: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        console.log('la data de formulario:', this.formFamily);
    }
    closeModal() {
        this.modalCtrl.dismiss();
    }
    saveData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.desabilitadobutton = false;
            if (this.formFamily.valid) {
                /*       const loading = await this.loadingCtrl.create({
                        message: 'Guardando datos de familiar.'
                      }); */
                let datos = this.formFamily.value;
                let data = {
                    relation: {
                        id: 4,
                        name: datos.kindred
                    },
                    name: datos.name,
                    surname1: datos.paternal_surname,
                    surname2: datos.maternal_surname,
                    birthdate: moment__WEBPACK_IMPORTED_MODULE_5__(datos.date_of_birth).format('YYYY-MM-DD'),
                    gender: {
                        id: 2,
                        name: datos.gender
                    },
                    documentType: {
                        id: 1,
                        name: datos.type_document
                    },
                    documentNumber: datos.dni
                };
                /*       await loading.present(); */
                this.crudPvr.createParent(data).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const loading = yield this.loadingCtrl.create({
                        message: 'Guardando datos de familiar.'
                    });
                    this.createParents = data;
                    yield loading.present();
                    this.dependentsPvr.getDependens().subscribe(dat => {
                        this._parents = dat;
                        let datos = {
                            parents: this._parents,
                            doctor: this.doctor,
                            available: this.available,
                            proposedate: this.available,
                            hora: this.hora,
                            depe: this.depe,
                            price: this.price
                        };
                        let dataArmada = JSON.stringify(datos);
                        this.router.navigate(['myparents', dataArmada]);
                        this.modalCtrl.dismiss();
                        loading.dismiss();
                    });
                }));
            }
            else {
                this.errorCreation();
                this.desabilitadobutton = true;
            }
        });
    }
    errorCreation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: 'Error en Creación',
                message: 'talvez faltan datos en el formulario o no estan todos los campos llenos',
                buttons: [
                    {
                        text: 'reintentar',
                        role: 'cancel'
                    }, {
                        text: 'salir',
                        handler: () => {
                            this.router.navigate(['home']);
                            /* this.navCtrl.setRoot(HomePage); */
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad CreateparentPage');
    }
};
CreateParentPrimePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_dependens_service__WEBPACK_IMPORTED_MODULE_4__["DependensService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: src_app_services_crudparent_service__WEBPACK_IMPORTED_MODULE_3__["CrudparentService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
CreateParentPrimePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-parent-prime',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-parent-prime.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-parent-prime/create-parent-prime.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-parent-prime.page.scss */ "./src/app/pages/create-parent-prime/create-parent-prime.page.scss")).default]
    })
], CreateParentPrimePage);



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
//# sourceMappingURL=default~pages-create-parent-prime-create-parent-prime-module~pages-myparents-myparents-module.js.map