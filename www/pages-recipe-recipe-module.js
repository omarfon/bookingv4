(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recipe-recipe-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recipe/recipe.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recipe/recipe.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Mis Recetas</ion-title>\n  </ion-toolbar>\n  <p margin class=\"NombreBienvenida\">Hola {{nameUser}}</p>\n  <p margin class=\"cantidadRecetas\" *ngIf=\"recipe\">tienes: {{recipe[0].prescripciones[0].length}} recetas</p>\n\n</ion-header>\n<ion-content>\n  <div class=\"containerCards\">\n    <ion-card>\n      <!-- ion-row>\n        <ion-col size=\"4\">\n          <div class=\"iconoReceta\">\n            <p class=\"dia\">{{recipe.prescripciones[0].fecha_encuentro | date:'dd'}}</p>\n            <p class=\"mes\">{{recipe.prescripciones[0].inicio_prescripcion | date:'MMMM'}}</p>\n          </div>\n        </ion-col>\n        <ion-col size=\"8\" id=\"cajaDatosCita\">\n          <p class=\"resultado top\">{{recipe.prescripciones[0].nombre_personal}}\n            {{recipe.prescripciones[0].apellidop_personal}} {{recipe.prescripciones[0].apellidom_personal}}</p>\n          <p class=\"especialidad\"> Medicinas:</p>\n          <p class=\"resultado\">{{recipe.prescripciones.length}} Medicina</p>\n        </ion-col>\n        </ion-row> -->\n      <!-- <mat-accordion class=\"accordionNutrition\">\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              <p class=\"textoVerReceta\">ver receta</p>\n            </mat-panel-title>\n          </mat-expansion-panel-header> -->\n\n      <div>\n        <ion-row>\n          <ion-col size=\"3\" class=\"containerIconAndDays\">\n            <img src=\"assets/imgs/recipes/{{recipe[0].prescripciones[0].formasfar_pk}}.png\" alt=\"\">\n            <p class=\"cantidadDeDias\">{{recipe[0].prescripciones[0].dias_duracion_prescripcion}}</p>\n            <p class=\"dias\">días de tratamiento</p>\n          </ion-col>\n          <ion-col size=\"9\" class=\"containerDatosPastilla\">\n            <h3 class=\"nombrePastilla\" *ngIf=\"recipe[0].prescripciones[0].nombre_generico\">\n              {{recipe[0].prescripciones[0].nombre_generico}}\n            </h3>\n            <p class=\"textoAlternativo\" *ngIf=\"recipe[0].prescripciones[0].marca_comercial\">\n              o puedes encontrarlo como:\n            </p>\n            <p class=\"nombrePastilla\" *ngIf=\"recipe[0].prescripciones[0].marca_comercial\">\n              {{recipe[0].prescripciones[0].marca_comercial}}\n            </p>\n            <p class=\"inicio\">Inicio: {{recipe[0].prescripciones[0].inicio_prescripcion | date: \"dd MMMM yyyy\"}}</p>\n            <p class=\"inicio\">Fin: {{recipe[0].prescripciones[0].fin_prescripcion | date: \"dd MMMM yyyy\" }}</p>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf=\"recipe[0].prescripciones[0] && recipe[0].prescripciones[0].cada_x_horas == 8\" class=\"down\">\n          <h4 class=\"tituloDeLasTomas\"> tomas de 3 veces por día</h4>\n          <ion-row padding>\n            <ion-col class=\"cuadrados\">\n              <p> 6-9 am</p>\n              <p class=\"cantidad\">{{recipe[0].prescripciones[0].cantidad_pau}}\n                {{recipe[0].prescripciones[0].unidad_desc_corta}}</p>\n            </ion-col>\n            <ion-col class=\"cuadrados\">\n              <p> 2-4 pm</p>\n              <p class=\"cantidad\"> {{recipe[0].prescripciones[0].cantidad_pau}}\n                {{recipe[0].prescripciones[0].unidad_desc_corta}} </p>\n            </ion-col>\n            <ion-col class=\"cuadrados\">\n              <p>10-12 m</p>\n              <p class=\"cantidad\"> {{recipe[0].prescripciones[0].cantidad_pau}}\n                {{recipe[0].prescripciones[0].unidad_desc_corta}} </p>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <div *ngIf=\"recipe[0].prescripciones[0] && recipe[0].prescripciones[0].cada_x_horas == 12\" class=\"down\">\n          <p class=\"tituloDeLasTomas\"> tomas de 2 veces por día</p>\n          <ion-row padding>\n            <ion-col class=\"cuadrados\">\n              <p> 6-7 am</p>\n              <p class=\"cantidad\">{{recipe[0].prescripciones[0].cantidad_pau}}\n                {{recipe[0].prescripciones[0].unidad_desc_corta}}</p>\n            </ion-col>\n            <ion-col class=\"cuadrados\">\n              <p>6-7 pm</p>\n              <p class=\"cantidad\"> {{recipe[0].prescripciones[0].cantidad_pau}}\n                {{recipe[0].prescripciones[0].unidad_desc_corta}} </p>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <div *ngIf=\"recipe[0].prescripciones[0] && recipe[0].prescripciones[0].cada_x_horas == 6\" class=\"down\">\n          <p class=\"tituloDeLasTomas\"> tomas de 4 veces por día</p>\n          <ion-row padding>\n            <ion-col class=\"cuadrados\">\n              <p> 6-7 am</p>\n              <p class=\"cantidad\">{{recipe[0].prescripciones[0].cantidad_pau}}\n                {{recipe[0].prescripciones[0].unidad_desc_corta}}</p>\n            </ion-col>\n            <ion-col class=\"cuadrados\">\n              <p> 12-1 pm</p>\n              <p class=\"cantidad\">{{recipe[0].prescripciones[0].cantidad_pau}}\n                {{recipe[0].prescripciones[0].unidad_desc_corta}}</p>\n            </ion-col>\n            <ion-col class=\"cuadrados\">\n              <p> 6-7 pm</p>\n              <p class=\"cantidad\">{{recipe[0].prescripciones[0].cantidad_pau}}\n                {{recipe[0].prescripciones[0].unidad_desc_corta}}</p>\n            </ion-col>\n            <ion-col class=\"cuadrados\">\n              <p>12-1 m</p>\n              <p class=\"cantidad\"> {{recipe[0].prescripciones[0].cantidad_pau}}\n                {{recipe[0].prescripciones[0].unidad_desc_corta}} </p>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <div *ngIf=\"recipe[0].prescripciones[0] && recipe[0].prescripciones[0].cada_x_horas == 24\" class=\"down\">\n          <p class=\"tituloDeLasTomas\"> toma de 1 vez por día</p>\n          <ion-row padding>\n            <ion-col class=\"cuadrados\">\n              <p> 6-7 am</p>\n              <p class=\"cantidad\">{{recipe[0].prescripciones[0].cantidad_pau}}\n                {{recipe[0].prescripciones[0].unidad_desc_corta}}</p>\n            </ion-col>\n\n          </ion-row>\n        </div>\n\n        <div *ngIf=\"recipe[0].prescripciones[0] && recipe[0].prescripciones[0].cada_x_horas == 2\" class=\"down\">\n          <p class=\"tituloDeLasTomas\"> toma de 12 veces por día</p>\n          <ion-row padding>\n            <ion-col class=\"cuadrados\">\n              <p> 6-7 am</p>\n              <p class=\"cantidad\">{{recipe[0].prescripciones[0].cantidad_pau}}\n                {{recipe[0].prescripciones[0].unidad_desc_corta}}</p>\n            </ion-col>\n            <ion-col class=\"cuadrados\">\n              <p> 8-9 pm</p>\n              <p class=\"cantidad\">{{recipe[0].prescripciones[0].cantidad_pau}}\n                {{recipe[0].prescripciones[0].unidad_desc_corta}}</p>\n            </ion-col>\n            <ion-col class=\"cuadrados\">\n              <p> 10-11 pm</p>\n              <p class=\"cantidad\">{{recipe[0].prescripciones[0].cantidad_pau}}\n                {{recipe[0].prescripciones[0].unidad_desc_corta}}</p>\n            </ion-col>\n            <ion-col class=\"cuadrados\">\n              <p>12-1 m</p>\n              <p class=\"cantidad\"> {{recipe[0].prescripciones[0].cantidad_pau}}\n                {{recipe[0].prescripciones[0].unidad_desc_corta}} </p>\n            </ion-col>\n            <ion-col class=\"cuadrados\">\n              <p>2-3 m</p>\n              <p class=\"cantidad\"> {{recipe[0].prescripciones[0].cantidad_pau}}\n                {{recipe[0].prescripciones[0].unidad_desc_corta}} </p>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n\n      <!--      </mat-expansion-panel>\n      </mat-accordion> -->\n    </ion-card>\n  </div>\n  <ng-template #norecipes>\n    <p class=\"norecipes\"> aun no tienes recetas....</p>\n  </ng-template>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/recipe/recipe-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/recipe/recipe-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: RecipePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipePageRoutingModule", function() { return RecipePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _recipe_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe.page */ "./src/app/pages/recipe/recipe.page.ts");




const routes = [
    {
        path: '',
        component: _recipe_page__WEBPACK_IMPORTED_MODULE_3__["RecipePage"]
    }
];
let RecipePageRoutingModule = class RecipePageRoutingModule {
};
RecipePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecipePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/recipe/recipe.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/recipe/recipe.module.ts ***!
  \***********************************************/
/*! exports provided: RecipePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipePageModule", function() { return RecipePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _recipe_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe.page */ "./src/app/pages/recipe/recipe.page.ts");
/* harmony import */ var _recipe_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipe-routing.module */ "./src/app/pages/recipe/recipe-routing.module.ts");







let RecipePageModule = class RecipePageModule {
};
RecipePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _recipe_routing_module__WEBPACK_IMPORTED_MODULE_6__["RecipePageRoutingModule"]
        ],
        declarations: [_recipe_page__WEBPACK_IMPORTED_MODULE_5__["RecipePage"]]
    })
], RecipePageModule);



/***/ }),

/***/ "./src/app/pages/recipe/recipe.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/recipe/recipe.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY2lwZS9yZWNpcGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/recipe/recipe.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/recipe/recipe.page.ts ***!
  \*********************************************/
/*! exports provided: RecipePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipePage", function() { return RecipePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_recipes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/recipes.service */ "./src/app/services/recipes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let RecipePage = class RecipePage {
    constructor(recipesPvr, router, routes) {
        this.recipesPvr = recipesPvr;
        this.router = router;
        this.routes = routes;
        this.itemExpanded = false;
        this.itemExpandHeight = 250;
    }
    ngOnInit() {
        let data = this.routes.snapshot.paramMap.get('datos');
        this._recipes = JSON.parse(data);
        if (this._recipes) {
            this.recipe = this._recipes;
            console.log('task en ', this.recipe);
        }
    }
};
RecipePage.ctorParameters = () => [
    { type: src_app_services_recipes_service__WEBPACK_IMPORTED_MODULE_2__["RecipesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
RecipePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./recipe.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recipe/recipe.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./recipe.page.scss */ "./src/app/pages/recipe/recipe.page.scss")).default]
    })
], RecipePage);



/***/ })

}]);
//# sourceMappingURL=pages-recipe-recipe-module.js.map