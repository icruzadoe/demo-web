(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/activityregister/activityregister.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/activityregister/activityregister.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div class=\"center-container margin-container\">\r\n    <h2 class=\"text-center\">REGISTRO DE ACTIVIDAD DEL USUARIO</h2>\r\n    <br>\r\n    <br>\r\n    <form [formGroup]=\"registerActivityForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-row \">\r\n            <div class=\"col-md-6 mb-3\">\r\n                <label class=\"sr-only\" for=\"user\">Correo electrónico:</label>\r\n                <input type=\"text\" class=\"form-control mb-2\" id=\"agency\" placeholder=\"Ingrese el correo electrónico\"\r\n                    autocomplete=\"off\">\r\n            </div>\r\n            <div class=\"col-md-3 mb-3\">\r\n                <button type=\"submit\" class=\"btn btn-primary mb-2\" [disabled]=\"registerActivityForm.invalid\">BUSCAR\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <br>\r\n    <table class=\"table table-hover\">\r\n        <thead class=\"thead-color\">\r\n            <tr>\r\n                <th scope=\"col\">#</th>\r\n                <th scope=\"col\">NOMBRE DE AGENCIA</th>\r\n                <th scope=\"col\">IP</th>\r\n                <th scope=\"col\">NOMBRE DEL DESTINO</th>\r\n                <th scope=\"col\">EDITAR</th>\r\n                <th scope=\"col\">ELIMINAR</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <th scope=\"row\">1</th>\r\n                <td>Mark SANCHEZ PEREZ</td>\r\n                <td>192.168.2.18</td>\r\n                <td>carpeta/compartida</td>\r\n                <td>\r\n                    <button (click)=\"editUser($event)\" mat-button class=\"text-menu\">\r\n                        <i class=\"material-icons\">\r\n                            edit\r\n                        </i>\r\n                    </button>\r\n                </td>\r\n                <td>\r\n                    <button (click)=\"deleteUser($event)\" mat-button class=\"text-menu\">\r\n                        <i class=\"material-icons\">\r\n                            delete\r\n                        </i>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/addagency/addagency.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addagency/addagency.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div class=\"center-container\">\r\n    <div class=\"col-md-6 user-container margin-bottom\">\r\n        <div class=\"card rounded-0\">\r\n            <div class=\"card-body\">\r\n                <h2 class=\"text-center\">REGISTRAR AGENCIA </h2>\r\n                <form [formGroup]=\"agencyForm\" (ngSubmit)=\"onSubmit()\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">Nombre:</label>\r\n                        <input class=\"form-control\" type=\"text\" formControlName=\"name\" id=\"name\" autocomplete=\"off\"\r\n                            placeholder=\"Ingrese el nombre de la agencia\">\r\n                        <div class=\"form-control is-invalid\"\r\n                            *ngIf=\"agencyForm.controls['name'].hasError('required') && agencyForm.controls['name'].touched\">\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"ip\">IP:</label>\r\n                        <input class=\"form-control\" type=\"number\" formControlName=\"ip\" id=\"ip\" autocomplete=\"off\"\r\n                            placeholder=\"Ingrese el número de la IP\">\r\n                        <div class=\"form-control is-invalid\"\r\n                            *ngIf=\"agencyForm.controls['ip'].hasError('required') && agencyForm.controls['ip'].touched\">\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"nameFolder\">Nnombre de la carpeta:</label>\r\n                        <input class=\"form-control\" type=\"text\" formControlName=\"nameFolder\" id=\"nameFolder\"\r\n                            autocomplete=\"off\" placeholder=\"Ingrese el nombre de la carpeta\">\r\n                        <div class=\"form-control is-invalid\"\r\n                            *ngIf=\"agencyForm.controls['nameFolder'].hasError('required') && agencyForm.controls['nameFolder'].touched\">\r\n\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <button class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"agencyForm.invalid\">REGISTRAR</button>\r\n\r\n                    <div *ngIf=\"invalidLogin\">\r\n                        <div>\r\n                            Invalid credentials.\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <br>\r\n                <button (click)=\"cancel($event)\" class=\"btn btn-lg btn-block btn-secondary\">CANCELAR</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<p>ESTE ES EL INCIO</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/app.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/app.component.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-page\">\r\n  \r\n  <router-outlet></router-outlet>\r\n\r\n  <!--  ESTE MENU ES PARA MOVIL\r\n    <mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\r\n        <mat-sidenav class=\"content-menu\" #sidenav [mode]=\"mode.value\">\r\n          <p><button mat-button (click)=\"sidenav.toggle()\"><i class=\"material-icons\">list</i></button></p>\r\n          <p>\r\n              <button class=\"option-menu\" mat-menu-item>\r\n                <i class=\"material-icons\">\r\n                  home\r\n                </i>\r\n                Inicio\r\n              </button>\r\n              <button class=\"option-menu\" mat-menu-item>\r\n                <i class=\"material-icons\">\r\n                  missed_video_call\r\n                </i>\r\n                Públicar video\r\n              </button>\r\n              <button class=\"option-menu\" mat-menu-item>\r\n                <i class=\"material-icons\">\r\n                  image\r\n                </i>\r\n                Públicar banner\r\n              </button>\r\n              <button class=\"option-menu\" mat-menu-item>\r\n                <i class=\"material-icons\">\r\n                  edit\r\n                </i>\r\n                Publicar texto\r\n              </button>\r\n              <button class=\"option-menu\" mat-menu-item>\r\n                <i class=\"material-icons\">\r\n                    person\r\n                </i>\r\n                  Iniciar sesión\r\n              </button>\r\n          </p>\r\n        </mat-sidenav>\r\n        <mat-sidenav-content >\r\n          <p><button mat-button (click)=\"sidenav.toggle()\"><i class=\"material-icons\">list</i></button></p>\r\n        </mat-sidenav-content>\r\n      </mat-sidenav-container>\r\n      \r\n      <div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\r\n      -->    \r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div class=\"center-container\">\r\n    <div class=\"col-md-6 user-container\">\r\n        <div class=\"card rounded-0\">\r\n            <div class=\"card-body\">\r\n                <h2 class=\"text-center\">Iniciar sesión </h2>\r\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n                    <i class=\"material-icons icon-login\">\r\n                        person\r\n                    </i>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"email\">Correo electrónico:</label>\r\n                        <input class=\"form-control\" type=\"email\" formControlName=\"email\" id=\"email\" placeholder=\"Ingrese su correo electrónico\" autocomplete=\"off\">\r\n                        <div\r\n                            *ngIf=\"loginForm.controls['email'].hasError('required') && loginForm.controls['email'].touched\">\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"password\">Contraseña:</label>\r\n                        <input class=\"form-control\" type=\"password\" formControlName=\"password\" id=\"password\" placeholder=\"Ingrese su contraseña\"\r\n                            autocomplete=\"off\">\r\n                        <div\r\n                            *ngIf=\"loginForm.controls['password'].hasError('required') && loginForm.controls['password'].touched\">\r\n\r\n                        </div>\r\n                    </div>\r\n                    <button class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"loginForm.invalid\">INICIAR SESIÓN</button>\r\n                    <br>\r\n                    <br>\r\n                    <div *ngIf=\"invalidLogin\">\r\n                        <div>\r\n                            Invalid credentials.\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manageagency/manageagency.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manageagency/manageagency.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div class=\"center-container margin-container\">\r\n    <h2 class=\"text-center\">GESTIONAR AGENCIA</h2>\r\n    <br>\r\n    <button (click)=\"addAgency($event)\" class=\"btn btn-primary\">\r\n        AGREGAR AGENCIA\r\n    </button>\r\n    <br>\r\n    <br>\r\n    <form [formGroup]=\"agencyForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-row \">\r\n            <div class=\"col-md-6 mb-3\">\r\n                <label class=\"sr-only\" for=\"agency\">Agencia:</label>\r\n                <input type=\"text\" class=\"form-control mb-2\" id=\"agency\" placeholder=\"Ingrese el nombre de la agencia\"\r\n                    autocomplete=\"off\">\r\n            </div>\r\n            <div class=\"col-md-3 mb-3\">\r\n                <button type=\"submit\" class=\"btn btn-primary mb-2\" [disabled]=\"agencyForm.invalid\">BUSCAR\r\n                    AGENCIA\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <br>\r\n    <table class=\"table table-hover\">\r\n        <thead class=\"thead-color\">\r\n            <tr>\r\n                <th scope=\"col\">#</th>\r\n                <th scope=\"col\">NOMBRE DE AGENCIA</th>\r\n                <th scope=\"col\">IP</th>\r\n                <th scope=\"col\">NOMBRE DEL DESTINO</th>\r\n                <th scope=\"col\">EDITAR</th>\r\n                <th scope=\"col\">ELIMINAR</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <th scope=\"row\">1</th>\r\n                <td>Mark SANCHEZ PEREZ</td>\r\n                <td>192.168.2.18</td>\r\n                <td>carpeta/compartida</td>\r\n                <td>\r\n                    <button (click)=\"editUser($event)\" mat-button class=\"text-menu\">\r\n                        <i class=\"material-icons\">\r\n                            edit\r\n                        </i>\r\n                    </button>\r\n                </td>\r\n                <td>\r\n                    <button (click)=\"deleteUser($event)\" mat-button class=\"text-menu\">\r\n                        <i class=\"material-icons\">\r\n                            delete\r\n                        </i>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manageuser/manageuser.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manageuser/manageuser.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div class=\"center-container margin-container\">\r\n    <h2 class=\"text-center\">Gestionar usuarios</h2>\r\n    <br>\r\n    <button (click)=\"addUser($event)\" class=\"btn btn-primary\">\r\n        AGREGAR USUARIO\r\n    </button>\r\n    <br>\r\n    <br>\r\n    <form [formGroup]=\"loginForm\">\r\n        <div class=\"form-row \">\r\n            <div class=\"col-md-6 mb-3\">\r\n                <label class=\"sr-only\" for=\"email\">Correo electrónico:</label>\r\n                <input type=\"email\" class=\"form-control mb-2\" formControlName=\"email\" id=\"email\" placeholder=\"Ingrese su correo electrónico\"\r\n                    autocomplete=\"off\">\r\n            </div>\r\n            <div class=\"col-md-3 mb-3\">\r\n                <button (click)=\"onSubmit()\" class=\"btn btn-primary mb-2\" [disabled]=\"loginForm.invalid\">BUSCAR\r\n                    USUARIO\r\n                </button>\r\n            </div>\r\n            <div class=\"col-md-3 mb-3\">\r\n                    <button (click)=\"searchClean()\" class=\"btn btn-primary mb-2\" >borrar busqueda\r\n            </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <br>\r\n    <table class=\"table table-hover\">\r\n        <thead class=\"thead-color\">\r\n            <tr>\r\n                <th scope=\"col\">#</th>\r\n                <th scope=\"col\">NOMBRE</th>\r\n                <th scope=\"col\">CORREO ELECTRÓNICO</th>\r\n                <th scope=\"col\">CELULAR</th>\r\n                <th scope=\"col\">TIPO DE USUARIO</th>\r\n                <th scope=\"col\">EDITAR</th>\r\n                <th scope=\"col\">ELIMINAR</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody *ngFor=\"let user of users; index as i\" >\r\n            <tr>\r\n                <th scope=\"row\">{{i}}</th>\r\n                <td>{{user.username}}</td>\r\n                <td>{{user.correo}}</td>\r\n                <td>{{user.celular}}</td>\r\n                <td>{{user.privilegio}}</td>\r\n                <td>\r\n                    <button (click)=\"editUser(user)\" mat-button class=\"text-menu\" >\r\n                        <i class=\"material-icons\">\r\n                            edit\r\n                        </i>\r\n                    </button>\r\n                </td>\r\n                <td>\r\n                    <button (click)=\"deleteUser($event)\" mat-button class=\"text-menu\">\r\n                        <i class=\"material-icons\">\r\n                            delete\r\n                        </i>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/multimedia/multimedia.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/multimedia/multimedia.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<p>multimedia works!</p>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <mat-toolbar class=\"title-bar\" color=\"primary\">\r\n  <mat-toolbar-row class=\"navbar\">\r\n    <span>Web admin</span>\r\n    <span class=\"example-spacer\"></span>\r\n    <button *ngIf=\"showButton\" routerLink=\"/publishvideo\" mat-button class=\"text-menu\">PÚBLICAR VIDEO</button>\r\n    <button *ngIf=\"showButton\" routerLink=\"/publishbanner\" mat-button ton class=\"text-menu\">PÚBLICAR BANNER</button>\r\n    <button *ngIf=\"showButton\" routerLink=\"/publishtext\" mat-button class=\"text-menu\">PÚBLICAR TEXTO</button>\r\n    <button *ngIf=\"showButton\" routerLink=\"/home\" mat-button class=\"text-menu\">INICIO</button>\r\n    <div *ngIf=\"showButton\" routerLink=\"/login\" (click)=\"logout($event)\">\r\n      <button  mat-button class=\"text-menu\">\r\n        <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example user verified icon\">perm_identity\r\n        </mat-icon>\r\n        <span>CERRAR SESIÓN</span>\r\n      </button>\r\n    </div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar> -->\r\n\r\n<mat-sidenav-container class=\"example-container color-navbar\" *ngIf=\"shouldRun\">\r\n  <mat-sidenav class=\"content-menu\" #sidenav [mode]=\"mode.value\">\r\n    <p>\r\n      <button mat-button (click)=\"sidenav.toggle()\">\r\n          <i class=\"material-icons color-icon\">list</i>\r\n          <span class=\"color-icon\">MENU</span>\r\n      </button>\r\n    </p>\r\n    <p>\r\n      <button routerLink=\"/manageuser\" class=\"option-menu\" mat-menu-item>\r\n  \r\n        <span class=\"color-icon\">GESTIONAR USUARIOS</span>\r\n      </button>\r\n      <button routerLink=\"/multimedia\" class=\"option-menu\" mat-menu-item>\r\n  \r\n        <span class=\"color-icon\">PÚBLICAR VIDEO</span>\r\n        \r\n      </button>\r\n      <button routerLink=\"/publishbanner\" class=\"option-menu\" mat-menu-item>\r\n  \r\n        <span class=\"color-icon\">PÚBLICAR BANNER</span>\r\n        \r\n      </button>\r\n      <button routerLink=\"/publishaudio\" class=\"option-menu\" mat-menu-item>\r\n  \r\n        <span class=\"color-icon\">PÚBLICAR AUDIO</span>\r\n        \r\n      </button>\r\n      <button routerLink=\"/publishtext\" class=\"option-menu\" mat-menu-item>\r\n  \r\n        <span class=\"color-icon\">PÚBLICAR TEXTO</span>\r\n        \r\n      </button>\r\n      <button routerLink=\"/manageagency\" class=\"option-menu\" mat-menu-item>\r\n  \r\n        <span class=\"color-icon\">GESTIONAR AGENCIA</span>\r\n      </button>\r\n      <button routerLink=\"/activityregister\" class=\"option-menu\" mat-menu-item>\r\n\r\n        <span class=\"color-icon\">GESTIONAR ACTIVIDAD</span>\r\n      </button>\r\n      <button (click)=\"logout($event)\" class=\"option-menu\" mat-menu-item>\r\n     \r\n        <span class=\"color-icon\">CERRAR SESION</span>\r\n      </button>\r\n    </p>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <p class=\"menu-btn\">\r\n      <button mat-button (click)=\"sidenav.toggle()\">\r\n        <i class=\"material-icons color-icon\">list</i>\r\n        <span class=\"color-icon\">MENU</span>\r\n      </button>\r\n    </p>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/publishaudio/publishaudio.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publishaudio/publishaudio.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div class=\"center-container\">\r\n    <div class=\"col-md-6 user-container\">\r\n        <h2 class=\"text-center\">PÚBLICAR AUDIO </h2>\r\n        <form [formGroup]=\"publishAudioForm\" (ngSubmit)=\"upload()\">\r\n            <div class=\"form-group\">\r\n                <label for=\"titleAudio\">Título:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"titleAudio\" id=\"titleAudio\" autocomplete=\"off\">\r\n                <div\r\n                    *ngIf=\"publishAudioForm.controls['titleAudio'].hasError('required') && publishAudioForm.controls['titleAudio'].touched\">\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"descriptionAudio\">Descripción:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"descriptionAudio\" id=\"descriptionAudio\"\r\n                    autocomplete=\"off\">\r\n                <div\r\n                    *ngIf=\"publishAudioForm.controls['descriptionAudio'].hasError('required') && publishAudioForm.controls['descriptionAudio'].touched\">\r\n\r\n                </div>\r\n            </div>\r\n            <select class=\"custom-select\" (change)=\"selectPoint($event)\" formControlName=\"pointName\" name=\"select\"\r\n                id=\"point\">\r\n                <option selected>Selecciona un punto </option>\r\n                <option *ngFor=\"let point of points\" value=\"value1\">{{point.points}} </option>\r\n            </select>\r\n            <br>\r\n            <br>\r\n            <div class=\"form-group\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"fileVideo\">Agregar audio</label>\r\n                    <br>\r\n                    <input type=\"file\" name=\"file-1[]\" id=\"file-1\" class=\"inputfile inputfile-1\" multiple #fileInput\r\n                        data-multiple-caption=\"{count} archivos seleccionados\" multiple />\r\n                    <!-- \r\n                    <input type=\"file\" name=\"file-1[]\" id=\"file-1\" class=\"inputfile inputfile-1\"  multiple #fileInput data-multiple-caption=\"{count} archivos seleccionados\" multiple />\r\n                    <a class=\"boton_greentdp \" id=\"subirAudioVisible\" (click)=\"upload()\">SUBIR</a>\r\n                    <input formControlName=\"fileVideo\" type=\"file\" class=\"form-control-file\" id=\"fileVideo\"\r\n                        autocomplete=\"on\" (change)=\"loadImage($event)\"> -->\r\n                </div>\r\n                <div\r\n                    *ngIf=\"publishAudioForm.controls['fileVideo'].hasError('required') && publishAudioForm.controls['fileVideo'].touched\">\r\n\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <button class=\"btn btn-success\">Subir</button>\r\n            <div *ngIf=\"invalidLogin\">\r\n                <div>\r\n                    Invalid credentials.\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/publishbanner/publishbanner.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publishbanner/publishbanner.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div class=\"center-container\">\r\n    <div class=\"col-md-6 user-container\">\r\n        <h2 class=\"text-center\">Públicar banner </h2>\r\n        <form [formGroup]=\"publishBannerForm\" (ngSubmit)=\"upload()\">\r\n            <div class=\"form-group\">\r\n                <label for=\"titleBanner\">Título:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"titleBanner\" id=\"titleBanner\"\r\n                    autocomplete=\"off\" placeholder=\"Inrese el título\">\r\n                <div\r\n                    *ngIf=\"publishBannerForm.controls['titleBanner'].hasError('required') && publishBannerForm.controls['titleBanner'].touched\">\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"descriptionBanner\">Descripción:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"descriptionBanner\" id=\"descriptionBanner\"\r\n                    autocomplete=\"off\" placeholder=\"Ingrese la descripción\">\r\n                <div\r\n                    *ngIf=\"publishBannerForm.controls['descriptionBanner'].hasError('required') && publishBannerForm.controls['descriptionBanner'].touched\">\r\n\r\n                </div>\r\n            </div>\r\n            <select class=\"custom-select\" (change)=\"selectPoint($event)\" formControlName=\"pointName\" name=\"select\"\r\n                id=\"point\">\r\n                <option selected>Selecciona un punto </option>\r\n                <option *ngFor=\"let point of points\" value=\"value1\">{{point.points}} </option>\r\n            </select>\r\n            <br>\r\n            <br>\r\n            <div class=\"form-group\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"customFileLang\">Agregar imagen</label>\r\n                    <br>\r\n                    <input type=\"file\" name=\"file-1[]\" id=\"file-1\" class=\"inputfile inputfile-1\" multiple #fileInput\r\n                        data-multiple-caption=\"{count} archivos seleccionados\" multiple />\r\n                    <!-- <input formControlName=\"fileImage\" type=\"file\" class=\"form-control-file\" id=\"fileImage\"\r\n                        autocomplete=\"off\" (change)=\"loadImage($event)\">\r\n                </div> -->\r\n                    <div\r\n                        *ngIf=\"publishBannerForm.controls['fileImage'].hasError('required') && publishBannerForm.controls['fileImage'].touched\">\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <button class=\"btn btn-success\" [disabled]=\"publishBannerForm.invalid\">Subir</button>\r\n            <div *ngIf=\"invalidLogin\">\r\n                <div>\r\n                    Invalid credentials.\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/publishtext/publishtext.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publishtext/publishtext.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div class=\"center-container\">\r\n    <div class=\"col-md-6 user-container\">\r\n        <h2 class=\"text-center\">Públicar texto </h2>\r\n        <form [formGroup]=\"publishTextForm\" (ngSubmit)=\"upload()\">\r\n            <div class=\"form-group\">\r\n                <label for=\"titleText\">Titulo:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"titleText\" id=\"titleText\" autocomplete=\"off\" placeholder=\"Ingrese el título\">\r\n                <div\r\n                    *ngIf=\"publishTextForm.controls['titleText'].hasError('required') && publishTextForm.controls['titleText'].touched\">\r\n                   \r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"textContent\">Ingresa el texto:</label>\r\n                <textarea class=\"form-control\" type=\"text\" formControlName=\"textContent\" id=\"pwd\"\r\n                    autocomplete=\"off\" placeholder=\"Ingrese el texto\"></textarea>\r\n                <div\r\n                    *ngIf=\"publishTextForm.controls['textContent'].hasError('required') && publishTextForm.controls['textContent'].touched\">\r\n              \r\n                </div>\r\n            </div>\r\n            <select class=\"custom-select\" (change)=\"selectPoint($event)\" formControlName=\"pointName\" name=\"select\"\r\n                id=\"point\">\r\n                <option selected>Selecciona un punto </option>\r\n                <option *ngFor=\"let point of points\" value=\"value1\">{{point.points}} </option>\r\n            </select>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <button class=\"btn btn-success\" [disabled]=\"publishTextForm.invalid\">Públicar</button>\r\n            <div *ngIf=\"invalidLogin\">\r\n                <div>\r\n                    Invalid credentials.\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/publishvideo/publishvideo.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publishvideo/publishvideo.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div class=\"center-container\">\r\n    <div class=\"col-md-6 user-container\">\r\n        <h2 class=\"text-center\">Públicar video </h2>\r\n        <form [formGroup]=\"publishVideoForm\" (ngSubmit)=\"upload()\">\r\n            <div class=\"form-group\">\r\n                <label for=\"titleVideo\">Título:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"titleVideo\" id=\"titleVideo\" autocomplete=\"off\"\r\n                    placeholder=\"Ingrese el título\">\r\n                <div\r\n                    *ngIf=\"publishVideoForm.controls['titleVideo'].hasError('required') && publishVideoForm.controls['titleVideo'].touched\">\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"descriptionVideo\">Descripción:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"descriptionVideo\" id=\"descriptionVideo\"\r\n                    autocomplete=\"off\" placeholder=\"Ingrese la descripción\">\r\n                <div\r\n                    *ngIf=\"publishVideoForm.controls['descriptionVideo'].hasError('required') && publishVideoForm.controls['descriptionVideo'].touched\">\r\n\r\n                </div>\r\n            </div>\r\n            <select class=\"custom-select\" (change)=\"selectPoint($event)\" formControlName=\"pointName\" name=\"select\"\r\n                id=\"point\">\r\n                <option selected>Selecciona un punto </option>\r\n                <option *ngFor=\"let point of points\" value=\"value1\">{{point.points}} </option>\r\n            </select>\r\n            <br>\r\n            <br>\r\n            <div class=\"form-group\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"fileVideo\">Agregar video</label>\r\n                    <br>\r\n                    <input type=\"file\" name=\"file-1[]\" id=\"file-1\" class=\"inputfile inputfile-1\" multiple #fileInput\r\n                        data-multiple-caption=\"{count} archivos seleccionados\" multiple />\r\n                    <!-- <a class=\"boton_greentdp \" id=\"subirAudioVisible\" (click)=\"upload()\">SUBIR</a> -->\r\n                    <!-- <input formControlName=\"fileVideo\" type=\"file\" class=\"form-control-file\" id=\"fileVideo\"\r\n                        autocomplete=\"on\" (change)=\"loadImage($event)\"> -->\r\n                </div>\r\n                <div\r\n                    *ngIf=\"publishVideoForm.controls['fileVideo'].hasError('required') && publishVideoForm.controls['fileVideo'].touched\">\r\n\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <button class=\"btn btn-success\" (click)=\"upload()\">Subir</button>\r\n            <div *ngIf=\"invalidLogin\">\r\n                <div>\r\n                    Invalid credentials.\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registeruser/registeruser.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registeruser/registeruser.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div class=\"center-container\">\r\n    <div class=\"col-md-6 user-container margin-bottom\">\r\n        <div class=\"card rounded-0\">\r\n            <div class=\"card-body\">\r\n                <h2 class=\"text-center\">Registrar usuario </h2>\r\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n                    <i class=\"material-icons icon-register\">\r\n                        group_add\r\n                    </i>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"email\">Correo electrónico:</label>\r\n                        <input class=\"form-control\" type=\"email\" formControlName=\"email\" id=\"email\" autocomplete=\"off\">\r\n                        <div class=\"form-control is-invalid\"\r\n                            *ngIf=\"loginForm.controls['email'].hasError('required') && loginForm.controls['email'].touched\">\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                            <label for=\"name\">Nombres:</label>\r\n                            <input class=\"form-control\" type=\"name\" formControlName=\"name\" id=\"name\" autocomplete=\"off\">\r\n                            <div class=\"form-control is-invalid\"\r\n                                *ngIf=\"loginForm.controls['name'].hasError('required') && loginForm.controls['name'].touched\">\r\n    \r\n                            </div>\r\n                        </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"numCel\">Numero de celular:</label>\r\n                        <input class=\"form-control\" type=\"number\" formControlName=\"numCel\" id=\"numCel\"\r\n                            autocomplete=\"off\">\r\n                        <div class=\"form-control is-invalid\"\r\n                            *ngIf=\"loginForm.controls['numCel'].hasError('required') && loginForm.controls['numCel'].touched\">\r\n\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <label for=\"numCel\">Seleccione un tipo de usuario:</label>\r\n                    <select class=\"custom-select\" (change)=\"selectTyprUser($event)\" formControlName=\"typeUser\"\r\n                        name=\"select\" id=\"typeUser\">\r\n                        <option *ngFor=\"let user of typeUsers\" value=\"value1\">{{user.type}} </option>\r\n                    </select>\r\n                    <br>\r\n                    <br>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"pwd\">Contraseña:</label>\r\n                        <input class=\"form-control\" type=\"password\" formControlName=\"password\" id=\"pwd\"\r\n                            autocomplete=\"off\">\r\n                        <div class=\"message-alert\"\r\n                            *ngIf=\"loginForm.controls['password'].hasError('required') && loginForm.controls['password'].touched\">\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"container-btn-form\">\r\n                        <button class=\"btn btn-primary  btn-register\" [disabled]=\"loginForm.invalid\">REGISTRAR</button>\r\n                        <button (click)=\"cancel()\" class=\"btn btn-secondary\"\r\n                            [disabled]=\"loginForm.valid\">CANCELAR</button>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"invalidLogin\">\r\n                        <div>\r\n                            Invalid credentials.\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/activityregister/activityregister.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/activityregister/activityregister.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".margin-container{\r\n    margin: 30px;\r\n}\r\n\r\n.add-user{\r\n    height: 150px;\r\n    width: 150px;\r\n    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.thead-color{\r\n    background-color: #3f51b5 !important;\r\n    color: white !important;\r\n}\r\n\r\n.size-icon{\r\n    font-size: 70px;\r\n    border-radius: 15px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aXZpdHlyZWdpc3Rlci9hY3Rpdml0eXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9hY3Rpdml0eXJlZ2lzdGVyL2FjdGl2aXR5cmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4tY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG59XHJcblxyXG4uYWRkLXVzZXJ7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi50aGVhZC1jb2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2l6ZS1pY29ue1xyXG4gICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/activityregister/activityregister.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/activityregister/activityregister.component.ts ***!
  \****************************************************************/
/*! exports provided: ActivityregisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityregisterComponent", function() { return ActivityregisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ActivityregisterComponent = class ActivityregisterComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.registerActivityForm = this.formBuilder.group({
            user: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
};
ActivityregisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ActivityregisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activityregister',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./activityregister.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/activityregister/activityregister.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./activityregister.component.css */ "./src/app/activityregister/activityregister.component.css")).default]
    })
], ActivityregisterComponent);



/***/ }),

/***/ "./src/app/addagency/addagency.component.css":
/*!***************************************************!*\
  !*** ./src/app/addagency/addagency.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center-container{\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 60px;\r\n  }\r\n\r\n  .message-alert{\r\n      color: red;\r\n  }\r\n\r\n  .container-btn-form{\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-content: center;\r\n  }\r\n\r\n  .btn-register{\r\n      margin-right: 20px;\r\n  }\r\n\r\n  .icon-register{\r\n    font-size: 6em;\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n\r\n  .margin-bottom{\r\n    margin-bottom: 25px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkYWdlbmN5L2FkZGFnZW5jeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7RUFDbEI7O0VBRUE7TUFDSSxVQUFVO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHFCQUFxQjtFQUN2Qjs7RUFFQTtNQUNJLGtCQUFrQjtFQUN0Qjs7RUFHRjtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYWRkYWdlbmN5L2FkZGFnZW5jeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlci1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgLm1lc3NhZ2UtYWxlcnR7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLWJ0bi1mb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5idG4tcmVnaXN0ZXJ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gIFxyXG4uaWNvbi1yZWdpc3RlcntcclxuICAgIGZvbnQtc2l6ZTogNmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm1hcmdpbi1ib3R0b217XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/addagency/addagency.component.ts":
/*!**************************************************!*\
  !*** ./src/app/addagency/addagency.component.ts ***!
  \**************************************************/
/*! exports provided: AddagencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddagencyComponent", function() { return AddagencyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AddagencyComponent = class AddagencyComponent {
    constructor(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
    }
    ngOnInit() {
        this.agencyForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            ip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nameFolder: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    onSubmit() {
    }
    cancel(event) {
        this.router.navigate(['manageagency']);
    }
};
AddagencyComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddagencyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addagency',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addagency.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/addagency/addagency.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addagency.component.css */ "./src/app/addagency/addagency.component.css")).default]
    })
], AddagencyComponent);



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _publishaudio_publishaudio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../publishaudio/publishaudio.component */ "./src/app/publishaudio/publishaudio.component.ts");
/* harmony import */ var _activityregister_activityregister_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../activityregister/activityregister.component */ "./src/app/activityregister/activityregister.component.ts");
/* harmony import */ var _manageagency_manageagency_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../manageagency/manageagency.component */ "./src/app/manageagency/manageagency.component.ts");
/* harmony import */ var _addagency_addagency_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../addagency/addagency.component */ "./src/app/addagency/addagency.component.ts");
/* harmony import */ var _manageuser_manageuser_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../manageuser/manageuser.component */ "./src/app/manageuser/manageuser.component.ts");
/* harmony import */ var _registeruser_registeruser_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../registeruser/registeruser.component */ "./src/app/registeruser/registeruser.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _publishbanner_publishbanner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../publishbanner/publishbanner.component */ "./src/app/publishbanner/publishbanner.component.ts");
/* harmony import */ var _publishtext_publishtext_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../publishtext/publishtext.component */ "./src/app/publishtext/publishtext.component.ts");
/* harmony import */ var _publishvideo_publishvideo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../publishvideo/publishvideo.component */ "./src/app/publishvideo/publishvideo.component.ts");
/* harmony import */ var _multimedia_multimedia_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../multimedia/multimedia.component */ "./src/app/multimedia/multimedia.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authGuard_injectable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../authGuard.injectable */ "./src/app/authGuard.injectable.ts");















const routes = [
    { path: 'publishvideo', component: _publishvideo_publishvideo_component__WEBPACK_IMPORTED_MODULE_10__["PublishvideoComponent"], canActivate: [_authGuard_injectable__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'multimedia', component: _multimedia_multimedia_component__WEBPACK_IMPORTED_MODULE_11__["MultimediaComponent"], canActivate: [_authGuard_injectable__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'publishtext', component: _publishtext_publishtext_component__WEBPACK_IMPORTED_MODULE_9__["PublishtextComponent"], canActivate: [_authGuard_injectable__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'publishbanner', component: _publishbanner_publishbanner_component__WEBPACK_IMPORTED_MODULE_8__["PublishbannerComponent"], canActivate: [_authGuard_injectable__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'registeruser', component: _registeruser_registeruser_component__WEBPACK_IMPORTED_MODULE_6__["RegisteruserComponent"] },
    { path: 'manageuser', component: _manageuser_manageuser_component__WEBPACK_IMPORTED_MODULE_5__["ManageuserComponent"], canActivate: [_authGuard_injectable__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'manageagency', component: _manageagency_manageagency_component__WEBPACK_IMPORTED_MODULE_3__["ManageAgencyComponent"], canActivate: [_authGuard_injectable__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'addagency', component: _addagency_addagency_component__WEBPACK_IMPORTED_MODULE_4__["AddagencyComponent"], canActivate: [_authGuard_injectable__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'publishaudio', component: _publishaudio_publishaudio_component__WEBPACK_IMPORTED_MODULE_1__["PublishaudioComponent"], canActivate: [_authGuard_injectable__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'activityregister', component: _activityregister_activityregister_component__WEBPACK_IMPORTED_MODULE_2__["ActivityregisterComponent"], canActivate: [_authGuard_injectable__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], pathMatch: 'full' },
    { path: '**', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["NgModule"])({
        declarations: [],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _manageagency_manageagency_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manageagency/manageagency.component */ "./src/app/manageagency/manageagency.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _inicio_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio/app.component */ "./src/app/inicio/app.component.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _publishtext_publishtext_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./publishtext/publishtext.component */ "./src/app/publishtext/publishtext.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _publishvideo_publishvideo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./publishvideo/publishvideo.component */ "./src/app/publishvideo/publishvideo.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _publishbanner_publishbanner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./publishbanner/publishbanner.component */ "./src/app/publishbanner/publishbanner.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registeruser_registeruser_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./registeruser/registeruser.component */ "./src/app/registeruser/registeruser.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _authGuard_injectable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./authGuard.injectable */ "./src/app/authGuard.injectable.ts");
/* harmony import */ var _manageuser_manageuser_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./manageuser/manageuser.component */ "./src/app/manageuser/manageuser.component.ts");
/* harmony import */ var _addagency_addagency_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./addagency/addagency.component */ "./src/app/addagency/addagency.component.ts");
/* harmony import */ var _activityregister_activityregister_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./activityregister/activityregister.component */ "./src/app/activityregister/activityregister.component.ts");
/* harmony import */ var _multimedia_multimedia_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./multimedia/multimedia.component */ "./src/app/multimedia/multimedia.component.ts");
/* harmony import */ var _publishaudio_publishaudio_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./publishaudio/publishaudio.component */ "./src/app/publishaudio/publishaudio.component.ts");






//servicios




//Animations

//Material

//conexion a internet

//routing







//guardado validacion de inicio de sesion para navegar entre pantallas






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _inicio_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _publishvideo_publishvideo_component__WEBPACK_IMPORTED_MODULE_14__["PublishvideoComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
            _publishtext_publishtext_component__WEBPACK_IMPORTED_MODULE_8__["PublishtextComponent"],
            _publishbanner_publishbanner_component__WEBPACK_IMPORTED_MODULE_16__["PublishbannerComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
            _registeruser_registeruser_component__WEBPACK_IMPORTED_MODULE_18__["RegisteruserComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
            _manageuser_manageuser_component__WEBPACK_IMPORTED_MODULE_21__["ManageuserComponent"],
            _manageagency_manageagency_component__WEBPACK_IMPORTED_MODULE_1__["ManageAgencyComponent"],
            _addagency_addagency_component__WEBPACK_IMPORTED_MODULE_22__["AddagencyComponent"],
            _activityregister_activityregister_component__WEBPACK_IMPORTED_MODULE_23__["ActivityregisterComponent"],
            _multimedia_multimedia_component__WEBPACK_IMPORTED_MODULE_24__["MultimediaComponent"],
            _publishaudio_publishaudio_component__WEBPACK_IMPORTED_MODULE_25__["PublishaudioComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _material__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
            _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
        ],
        providers: [
            _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _services_upload_service__WEBPACK_IMPORTED_MODULE_7__["UploadService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            _authGuard_injectable__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"],
        ],
        bootstrap: [_inicio_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/authGuard.injectable.ts":
/*!*****************************************!*\
  !*** ./src/app/authGuard.injectable.ts ***!
  \*****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        let login = JSON.parse(localStorage.getItem('login'));
        if (login.user = !null && login.auth) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/inicio/app.component.css":
/*!******************************************!*\
  !*** ./src/app/inicio/app.component.css ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.example-container > * {\r\n  width: 50%;\r\n  margin-left : 20px;\r\n  margin-top: 40px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lvL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCOztBQUVsQiIsImZpbGUiOiJzcmMvYXBwL2luaWNpby9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0IDogMjBweDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG5cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/inicio/app.component.ts":
/*!*****************************************!*\
  !*** ./src/app/inicio/app.component.ts ***!
  \*****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let AppComponent = class AppComponent {
    constructor() {
        this.mode = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('over');
        this.shouldRun = true;
    }
    ngOnInit() {
        this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
    }
    onResize(event) {
        this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2;
        console.log("ROW :", this.breakpoint);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/inicio/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-right-align {\r\n    text-align: right;\r\n  }\r\n  \r\n  input.example-right-align::-webkit-outer-spin-button,\r\n  input.example-right-align::-webkit-inner-spin-button {\r\n    display: none;\r\n  }\r\n  \r\n  input.example-right-align {\r\n    -moz-appearance: textfield;\r\n  }\r\n  \r\n  .title-page{\r\n    text-align: center;\r\n    margin-top: 0px !important;\r\n    font-weight: bold;\r\n    font: sans-serif;\r\n}\r\n  \r\n  .center-container{\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 60px;\r\n}\r\n  \r\n  .icon-login{\r\n  font-size: 6em;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUsYUFBYTtFQUNmOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztFQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0VBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXJpZ2h0LWFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICBpbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG4gIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxuICB9XHJcblxyXG4gIC50aXRsZS1wYWdle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQ6IHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jZW50ZXItY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG5cclxuLmljb24tbG9naW57XHJcbiAgZm9udC1zaXplOiA2ZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let LoginComponent = class LoginComponent {
    constructor(formBuilder, _serviceLogin, router) {
        this.formBuilder = formBuilder;
        this._serviceLogin = _serviceLogin;
        this.router = router;
        this.invalidLogin = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        let loginData = JSON.parse(localStorage.getItem('login'));
        if (loginData) {
            if (loginData.user = !null && loginData.auth) {
                this.router.navigate(['manageuser']);
            }
        }
    }
    onSubmit() {
        if (this.loginForm.invalid) {
            return;
        }
        this._serviceLogin.login(this.loginForm.controls.password.value, this.loginForm.controls.email.value)
            .subscribe((data) => {
            localStorage.setItem('point', JSON.stringify(data));
            let login = {
                "user": this.loginForm.controls.email.value,
                "auth": true,
            };
            localStorage.setItem('login', JSON.stringify(login));
            this.router.navigate(['/manageuser']);
        }, (error) => {
            console.error(error);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/manageagency/manageagency.component.css":
/*!*********************************************************!*\
  !*** ./src/app/manageagency/manageagency.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".margin-container{\r\n    margin: 30px;\r\n}\r\n\r\n.add-user{\r\n    height: 150px;\r\n    width: 150px;\r\n    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.thead-color{\r\n    background-color: #3f51b5 !important;\r\n    color: white !important;\r\n}\r\n\r\n.size-icon{\r\n    font-size: 70px;\r\n    border-radius: 15px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlYWdlbmN5L21hbmFnZWFnZW5jeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlYWdlbmN5L21hbmFnZWFnZW5jeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbi1jb250YWluZXJ7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbn1cclxuXHJcbi5hZGQtdXNlcntcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLnRoZWFkLWNvbG9ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaXplLWljb257XHJcbiAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/manageagency/manageagency.component.ts":
/*!********************************************************!*\
  !*** ./src/app/manageagency/manageagency.component.ts ***!
  \********************************************************/
/*! exports provided: ManageAgencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAgencyComponent", function() { return ManageAgencyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ManageAgencyComponent = class ManageAgencyComponent {
    constructor(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
    }
    ngOnInit() {
        this.agencyForm = this.formBuilder.group({
            agency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    addAgency(event) {
        this.router.navigate(['addagency']);
    }
};
ManageAgencyComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ManageAgencyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manageagency',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manageagency.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manageagency/manageagency.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manageagency.component.css */ "./src/app/manageagency/manageagency.component.css")).default]
    })
], ManageAgencyComponent);



/***/ }),

/***/ "./src/app/manageuser/manageuser.component.css":
/*!*****************************************************!*\
  !*** ./src/app/manageuser/manageuser.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".margin-container{\r\n    margin: 30px;\r\n}\r\n\r\n.add-user{\r\n    height: 150px;\r\n    width: 150px;\r\n    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.thead-color{\r\n    background-color: #3f51b5 !important;\r\n    color: white !important;\r\n}\r\n\r\n.size-icon{\r\n    font-size: 70px;\r\n    border-radius: 15px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdldXNlci9tYW5hZ2V1c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9tYW5hZ2V1c2VyL21hbmFnZXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4tY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG59XHJcblxyXG4uYWRkLXVzZXJ7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi50aGVhZC1jb2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2l6ZS1pY29ue1xyXG4gICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/manageuser/manageuser.component.ts":
/*!****************************************************!*\
  !*** ./src/app/manageuser/manageuser.component.ts ***!
  \****************************************************/
/*! exports provided: ManageuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageuserComponent", function() { return ManageuserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ManageuserComponent = class ManageuserComponent {
    constructor(formBuilder, router, _serviceUser) {
        this.formBuilder = formBuilder;
        this.router = router;
        this._serviceUser = _serviceUser;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
        });
        this.listUsers();
        /*
         this.users = [
           {
             "id":2,
             "username":"juan cabrichon",
             "correo": "fabidecolichon@gmail.com",
             "celular": 98765444,
             "privilegio" : "admin",
           },
           {
             "id":3,
             "username":"fabiola de cabrichon",
             "correo": "fabidecolichon@gmail.com",
             "celular": 98765444,
             "privilegio" : "user",
           },
           {
             "id":4,
             "username":"jorge chavez soplanuca",
             "correo": "soplanuca@gmail.com",
             "celular": 98765444,
             "privilegio" : "admin",
           },
           {
             "id":5,
             "username":"juan cabrichon",
             "correo": "fabidecolichon@gmail.com",
             "celular": 98765444,
             "privilegio" : "admin",
           }
         ]*/
        this.usersBuckup = this.users;
    }
    listUsers() {
        this._serviceUser.listUser().subscribe((data) => {
            this.users = data;
        }, (error) => {
            console.error(error);
        });
    }
    addUser(event) {
        this.router.navigate(['registeruser']);
    }
    editUser(user) {
        localStorage.setItem("user", JSON.stringify(user));
        console.log(JSON.parse(localStorage.getItem('user')));
        this.router.navigate(['registeruser']);
    }
    deleteUser(event) {
    }
    onSubmit() {
        let email = this.loginForm.controls.email.value;
        let userSelect = this.users.filter(user => user.correo == email);
        this.users = userSelect;
    }
    searchClean() {
        this.users = this.usersBuckup;
    }
};
ManageuserComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
];
ManageuserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-manageuser',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manageuser.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manageuser/manageuser.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manageuser.component.css */ "./src/app/manageuser/manageuser.component.css")).default]
    })
], ManageuserComponent);



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");











let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        ],
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/multimedia/multimedia.component.css":
/*!*****************************************************!*\
  !*** ./src/app/multimedia/multimedia.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL211bHRpbWVkaWEvbXVsdGltZWRpYS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/multimedia/multimedia.component.ts":
/*!****************************************************!*\
  !*** ./src/app/multimedia/multimedia.component.ts ***!
  \****************************************************/
/*! exports provided: MultimediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultimediaComponent", function() { return MultimediaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_multimedia_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/multimedia.service */ "./src/app/services/multimedia.service.ts");



let MultimediaComponent = class MultimediaComponent {
    constructor(_multimediaService) {
        this._multimediaService = _multimediaService;
    }
    ngOnInit() {
        this._multimediaService.listarMedia()
            .subscribe((data) => {
            // localStorage.setItem('', JSON.stringify(data));
            //  alert("DATA: "+JSON.stringify(data))
        }, (error) => {
            console.error(error);
        });
    }
};
MultimediaComponent.ctorParameters = () => [
    { type: _services_multimedia_service__WEBPACK_IMPORTED_MODULE_2__["MultimediaService"] }
];
MultimediaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-multimedia',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./multimedia.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/multimedia/multimedia.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./multimedia.component.css */ "./src/app/multimedia/multimedia.component.css")).default]
    })
], MultimediaComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .navbar{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.mat-drawer-container{\r\n    position: inherit;\r\n} */\r\n\r\n.example-icon {\r\n    padding: 0 14px;\r\n  }\r\n\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.title-bar{\r\n    width: 100%;\r\n    height: 12%;\r\n}\r\n\r\n.container-body{\r\n    display: flex;\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n    align-items: center;\r\n    width: 80%;\r\n}\r\n\r\n.container-video{\r\n    height: 400px;\r\n    width: 75%;\r\n    display: flex;\r\n}\r\n\r\n.container-banner{\r\n    height: 100%;\r\n    width: 25%;\r\n    overflow: hidden;\r\n    margin-left: 15px;\r\n}\r\n\r\n.list-banner{\r\n    display: flex;\r\n    padding: 0;\r\n    width: 400%;\r\n    overflow: hidden;\r\n    -webkit-animation: cambio 20s infinite;\r\n            animation: cambio 20s infinite;\r\n    \r\n}\r\n\r\n.item-banner{\r\n    width: 100%;\r\n    list-style: none;\r\n    /* display: contents; */\r\n}\r\n\r\n.img-banner{\r\n    width: 100%;\r\n}\r\n\r\n@-webkit-keyframes cambio{\r\n    0% {margin-left: 0;}\r\n   20% {margin-left: 0;}\r\n    25% {margin-left: -100%;}\r\n    45% {margin-left: -100%;}\r\n    50% {margin-left: -200%;}\r\n    70% {margin-left: -200%;}\r\n}\r\n\r\n@keyframes cambio{\r\n    0% {margin-left: 0;}\r\n   20% {margin-left: 0;}\r\n    25% {margin-left: -100%;}\r\n    45% {margin-left: -100%;}\r\n    50% {margin-left: -200%;}\r\n    70% {margin-left: -200%;}\r\n}\r\n\r\n.text-menu{\r\n    font-size: 16px;\r\n    color: white;\r\n}\r\n\r\n.example-container {\r\n    width: 200px;\r\n    position: inherit;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n\r\n.content-menu{\r\n    width: 15%;\r\n    background-color: #3f51b5 !important;\r\n    display: flex !important;\r\n    flex-direction: column !important;\r\n  }\r\n\r\n.option-menu{\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: 100%;\r\n    height: 50px;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n\r\n.example-events {\r\n    width: 300px;\r\n    height: 200px;\r\n    overflow: auto;\r\n    border: 1px solid #555;\r\n  }\r\n\r\n.container-text{\r\n    width: 80%;\r\n    height: 18%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-right: 10%;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    margin-left: 10%;\r\n    text-align: justify;\r\n    font: normal normal normal 16px/1.4em avenir-lt-w01_35-light1475496,sans-serif;\r\n  }\r\n\r\n.title-text{\r\n    font: normal normal bold 28px/1.4em georgia,palatino,'book antiqua','palatino linotype',serif;\r\n  }\r\n\r\n.color-navbar{\r\n    background-color: #3f51b5 !important;\r\n    width: 100% !important;\r\n\r\n  }\r\n\r\n.mat-button-wrapper{\r\n    color: white !important;\r\n  }\r\n\r\n.color-icon{\r\n    color: white !important;\r\n  }\r\n\r\n.option-menu{\r\n    border: 1px solid black;\r\n  }\r\n\r\n.menu-btn{\r\n    margin-bottom: 0px !important;\r\n    margin-top: 0px !important;\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0dBT0c7O0FBRUg7SUFDSSxlQUFlO0VBQ2pCOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHNDQUE4QjtZQUE5Qiw4QkFBOEI7O0FBRWxDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxJQUFJLGNBQWMsQ0FBQztHQUNwQixLQUFLLGNBQWMsQ0FBQztJQUNuQixLQUFLLGtCQUFrQixDQUFDO0lBQ3hCLEtBQUssa0JBQWtCLENBQUM7SUFDeEIsS0FBSyxrQkFBa0IsQ0FBQztJQUN4QixLQUFLLGtCQUFrQixDQUFDO0FBQzVCOztBQVBBO0lBQ0ksSUFBSSxjQUFjLENBQUM7R0FDcEIsS0FBSyxjQUFjLENBQUM7SUFDbkIsS0FBSyxrQkFBa0IsQ0FBQztJQUN4QixLQUFLLGtCQUFrQixDQUFDO0lBQ3hCLEtBQUssa0JBQWtCLENBQUM7SUFDeEIsS0FBSyxrQkFBa0IsQ0FBQztBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0VBQ1Y7O0FBRUE7SUFDRSxVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLHdCQUF3QjtJQUN4QixpQ0FBaUM7RUFDbkM7O0FBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDhFQUE4RTtFQUNoRjs7QUFFQTtJQUNFLDZGQUE2RjtFQUMvRjs7QUFFQTtJQUNFLG9DQUFvQztJQUNwQyxzQkFBc0I7O0VBRXhCOztBQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztBQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztBQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztBQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjs7RUFFckIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAubmF2YmFye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm1hdC1kcmF3ZXItY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IGluaGVyaXQ7XHJcbn0gKi9cclxuXHJcbi5leGFtcGxlLWljb24ge1xyXG4gICAgcGFkZGluZzogMCAxNHB4O1xyXG4gIH1cclxuICBcclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLnRpdGxlLWJhcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMiU7XHJcbn1cclxuXHJcbi5jb250YWluZXItYm9keXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lci12aWRlb3tcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1iYW5uZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4ubGlzdC1iYW5uZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiA0MDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGFuaW1hdGlvbjogY2FtYmlvIDIwcyBpbmZpbml0ZTtcclxuICAgIFxyXG59XHJcblxyXG4uaXRlbS1iYW5uZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAvKiBkaXNwbGF5OiBjb250ZW50czsgKi9cclxufVxyXG5cclxuLmltZy1iYW5uZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBjYW1iaW97XHJcbiAgICAwJSB7bWFyZ2luLWxlZnQ6IDA7fVxyXG4gICAyMCUge21hcmdpbi1sZWZ0OiAwO31cclxuICAgIDI1JSB7bWFyZ2luLWxlZnQ6IC0xMDAlO31cclxuICAgIDQ1JSB7bWFyZ2luLWxlZnQ6IC0xMDAlO31cclxuICAgIDUwJSB7bWFyZ2luLWxlZnQ6IC0yMDAlO31cclxuICAgIDcwJSB7bWFyZ2luLWxlZnQ6IC0yMDAlO31cclxufVxyXG5cclxuLnRleHQtbWVudXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtbWVudXtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgfSAgICAgXHJcbiAgXHJcbiAgLm9wdGlvbi1tZW51e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1ldmVudHMge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXItdGV4dHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDE4JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTZweC8xLjRlbSBhdmVuaXItbHQtdzAxXzM1LWxpZ2h0MTQ3NTQ5NixzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlLXRleHR7XHJcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMjhweC8xLjRlbSBnZW9yZ2lhLHBhbGF0aW5vLCdib29rIGFudGlxdWEnLCdwYWxhdGlubyBsaW5vdHlwZScsc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2xvci1uYXZiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5cclxuICB9XHJcblxyXG4gIC5tYXQtYnV0dG9uLXdyYXBwZXJ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jb2xvci1pY29ue1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAub3B0aW9uLW1lbnV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB9XHJcblxyXG4gIC5tZW51LWJ0bntcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NavbarComponent = class NavbarComponent {
    constructor(router) {
        this.router = router;
        this.mode = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('over');
        this.shouldRun = false;
    }
    ngOnInit() {
        this.loginData = JSON.parse(localStorage.getItem('login'));
        if (this.loginData) {
            if (this.loginData.user = !null && this.loginData.auth) {
                this.shouldRun = true;
            }
        }
    }
    logout(event) {
        localStorage.clear();
        this.router.navigate(['']);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/publishaudio/publishaudio.component.css":
/*!*********************************************************!*\
  !*** ./src/app/publishaudio/publishaudio.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n    margin-left : 20px;\r\n    margin-top: 40px;\r\n  }\r\n  \r\n  .title-page{\r\n      text-align: center;\r\n      margin-top: 0px !important;\r\n      font-weight: bold;\r\n      font: sans-serif;\r\n  }\r\n  \r\n  .form-row{\r\n      margin-top: 0px !important;\r\n  }\r\n  \r\n  .center-container{\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 60px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGlzaGF1ZGlvL3B1Ymxpc2hhdWRpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7TUFDSSxrQkFBa0I7TUFDbEIsMEJBQTBCO01BQzFCLGlCQUFpQjtNQUNqQixnQkFBZ0I7RUFDcEI7O0VBRUE7TUFDSSwwQkFBMEI7RUFDOUI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL3B1Ymxpc2hhdWRpby9wdWJsaXNoYXVkaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0IDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUtcGFnZXtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQ6IHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1yb3d7XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlci1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/publishaudio/publishaudio.component.ts":
/*!********************************************************!*\
  !*** ./src/app/publishaudio/publishaudio.component.ts ***!
  \********************************************************/
/*! exports provided: PublishaudioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishaudioComponent", function() { return PublishaudioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/upload.service */ "./src/app/services/upload.service.ts");




let PublishaudioComponent = class PublishaudioComponent {
    constructor(formBuilder, _uploadService) {
        this.formBuilder = formBuilder;
        this._uploadService = _uploadService;
        this.invalidLogin = false;
    }
    ngOnInit() {
        //this.breakpoint = (window.innerWidth <= 400) ? 1 : 1;
        this.points = JSON.parse(localStorage.getItem('point'));
        this.publishAudioForm = this.formBuilder.group({
            titleAudio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            descriptionAudio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fileVideo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pointName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    loadImage(event) {
        // console.log("event :", event)
        // console.log("target :", event.target)
        // console.log("files :", event.target.files)
        // console.log("loadImage :", event.target.files[0].name)
        this.fileName = event.target.files[0].name;
        this.files = event.target.files;
    }
    upload() {
        if (this.publishAudioForm.invalid) {
            return;
        }
        //console.log("Video Fomr :", this.publishAudioForm)
        let audioElement = this.inputEl.nativeElement;
        //console.log('Archivos:' + audioElement.files.length);
        let file = audioElement.files[0];
        this._uploadService.upload2(audioElement.files, this.publishAudioForm.controls.titleAudio.value, this.publishAudioForm.controls.descriptionAudio.value);
        /*   this._uploadService.upload(
             this.fileName,
             this.publishVideoForm.controls.titleVideo.value,
             this.publishVideoForm.controls.descriptionVideo.value,
             this.publishVideoForm.controls.pointName.value, "1")
             .subscribe(
               (data) => { // Success
                 console.log(" data :", data)
               },
               (error) => {
                 console.error(error);
               }
             );*/
    }
    selectPoint(e) {
        this.publishAudioForm.controls.pointName.setValue(e.target.value, {
            onlySelf: true
        });
    }
};
PublishaudioComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput', { static: true })
], PublishaudioComponent.prototype, "inputEl", void 0);
PublishaudioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publishaudio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./publishaudio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/publishaudio/publishaudio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./publishaudio.component.css */ "./src/app/publishaudio/publishaudio.component.css")).default]
    })
], PublishaudioComponent);



/***/ }),

/***/ "./src/app/publishbanner/publishbanner.component.css":
/*!***********************************************************!*\
  !*** ./src/app/publishbanner/publishbanner.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n    margin-left : 20px;\r\n    margin-top: 40px;\r\n  }\r\n  \r\n  .title-page{\r\n      text-align: center;\r\n      margin-top: 0px !important;\r\n      font-weight: bold;\r\n      font: sans-serif;\r\n  }\r\n  \r\n  .form-row{\r\n      margin-top: 0px !important;\r\n  }\r\n  \r\n  .center-container{\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 60px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGlzaGJhbm5lci9wdWJsaXNoYmFubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7RUFFQTtNQUNJLGtCQUFrQjtNQUNsQiwwQkFBMEI7TUFDMUIsaUJBQWlCO01BQ2pCLGdCQUFnQjtFQUNwQjs7RUFFQTtNQUNJLDBCQUEwQjtFQUM5Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcHVibGlzaGJhbm5lci9wdWJsaXNoYmFubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdCA6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlLXBhZ2V7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250OiBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tcm93e1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jZW50ZXItY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/publishbanner/publishbanner.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/publishbanner/publishbanner.component.ts ***!
  \**********************************************************/
/*! exports provided: PublishbannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishbannerComponent", function() { return PublishbannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/upload.service */ "./src/app/services/upload.service.ts");




let PublishbannerComponent = class PublishbannerComponent {
    constructor(formBuilder, _uploadService) {
        this.formBuilder = formBuilder;
        this._uploadService = _uploadService;
        this.invalidLogin = false;
    }
    ngOnInit() {
        //this.breakpoint = (window.innerWidth <= 400) ? 1 : 1;
        this.points = JSON.parse(localStorage.getItem('point'));
        this.publishBannerForm = this.formBuilder.group({
            titleBanner: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            descriptionBanner: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fileImage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pointName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    loadImage(event) {
        // console.log("event :", event)
        // console.log("target :", event.target)
        // console.log("files :", event.target.files)
        // console.log("loadImage :", event.target.files[0].name)
        this.fileName = event.target.files[0].name;
        this.files = event.target.files;
    }
    upload() {
        if (this.publishBannerForm.invalid) {
            return;
        }
        //console.log("Video Fomr :", this.publishBannerForm)
        let audioElement = this.inputEl.nativeElement;
        //console.log('Archivos:' + audioElement.files.length);
        let file = audioElement.files[0];
        this._uploadService.upload2(audioElement.files, this.publishBannerForm.controls.titleVideo.value, this.publishBannerForm.controls.descriptionVideo.value);
        /*   this._uploadService.upload(
             this.fileName,
             this.publishVideoForm.controls.titleVideo.value,
             this.publishVideoForm.controls.descriptionVideo.value,
             this.publishVideoForm.controls.pointName.value, "1")
             .subscribe(
               (data) => { // Success
                 console.log(" data :", data)
               },
               (error) => {
                 console.error(error);
               }
             );*/
    }
    selectPoint(e) {
        this.publishBannerForm.controls.pointName.setValue(e.target.value, {
            onlySelf: true
        });
    }
};
PublishbannerComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput', { static: true })
], PublishbannerComponent.prototype, "inputEl", void 0);
PublishbannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publishbanner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./publishbanner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/publishbanner/publishbanner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./publishbanner.component.css */ "./src/app/publishbanner/publishbanner.component.css")).default]
    })
], PublishbannerComponent);



/***/ }),

/***/ "./src/app/publishtext/publishtext.component.css":
/*!*******************************************************!*\
  !*** ./src/app/publishtext/publishtext.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n    margin-left : 20px;\r\n    margin-top: 40px;\r\n  }\r\n  \r\n  .title-page{\r\n      text-align: center;\r\n      margin-top: 0px !important;\r\n      font-weight: bold;\r\n      font: sans-serif;\r\n  }\r\n  \r\n  .form-row{\r\n      margin-top: 0px !important;\r\n  }\r\n  \r\n  .content-text{\r\n    display: flex;\r\n    margin-top: 0px;\r\n    flex-direction: column;\r\n    width: 400px !important;\r\n  }\r\n  \r\n  .title-text{\r\n    margin-bottom: 24px;\r\n  }\r\n  \r\n  .txt-area{\r\n    height: 200px !important;\r\n    width: 200px !important;\r\n  }\r\n  \r\n  .center-container{\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 60px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGlzaHRleHQvcHVibGlzaHRleHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO01BQ0ksa0JBQWtCO01BQ2xCLDBCQUEwQjtNQUMxQixpQkFBaUI7TUFDakIsZ0JBQWdCO0VBQ3BCOztFQUVBO01BQ0ksMEJBQTBCO0VBQzlCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcHVibGlzaHRleHQvcHVibGlzaHRleHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0IDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUtcGFnZXtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQ6IHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1yb3d7XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtdGV4dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGl0bGUtdGV4dHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgfVxyXG5cclxuICAudHh0LWFyZWF7XHJcbiAgICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jZW50ZXItY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/publishtext/publishtext.component.ts":
/*!******************************************************!*\
  !*** ./src/app/publishtext/publishtext.component.ts ***!
  \******************************************************/
/*! exports provided: PublishtextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishtextComponent", function() { return PublishtextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_publishtext_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/publishtext.service */ "./src/app/services/publishtext.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let PublishtextComponent = class PublishtextComponent {
    constructor(formBuilder, _publishText) {
        this.formBuilder = formBuilder;
        this._publishText = _publishText;
        this.invalidLogin = false;
    }
    ngOnInit() {
        //this.breakpoint = (window.innerWidth <= 400) ? 1 : 1;
        this.points = JSON.parse(localStorage.getItem('point'));
        console.log("this.pointData :", this.points);
        this.publishTextForm = this.formBuilder.group({
            titleText: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            textContent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pointName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    upload() {
        console.log("hiciste click");
        if (this.publishTextForm.invalid) {
            return;
        }
        console.log("loginForm :", this.publishTextForm);
        this._publishText.publishText(this.publishTextForm.controls.titleText.value, this.publishTextForm.controls.textContent.value, this.publishTextForm.controls.pointName.value)
            .subscribe((data) => {
            console.log(" data :", data);
        }, (error) => {
            console.error(error);
        });
    }
    selectPoint(e) {
        console.log("event", e);
        this.publishTextForm.controls.pointName.setValue(e.target.value, {
            onlySelf: true
        });
    }
};
PublishtextComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_publishtext_service__WEBPACK_IMPORTED_MODULE_1__["PublishtextService"] }
];
PublishtextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-publishtext',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./publishtext.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/publishtext/publishtext.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./publishtext.component.css */ "./src/app/publishtext/publishtext.component.css")).default]
    })
], PublishtextComponent);



/***/ }),

/***/ "./src/app/publishvideo/publishvideo.component.css":
/*!*********************************************************!*\
  !*** ./src/app/publishvideo/publishvideo.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n    margin-left : 20px;\r\n    margin-top: 40px;\r\n  }\r\n  \r\n  .title-page{\r\n      text-align: center;\r\n      margin-top: 0px !important;\r\n      font-weight: bold;\r\n      font: sans-serif;\r\n  }\r\n  \r\n  .form-row{\r\n      margin-top: 0px !important;\r\n  }\r\n  \r\n  .center-container{\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 60px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGlzaHZpZGVvL3B1Ymxpc2h2aWRlby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7TUFDSSxrQkFBa0I7TUFDbEIsMEJBQTBCO01BQzFCLGlCQUFpQjtNQUNqQixnQkFBZ0I7RUFDcEI7O0VBRUE7TUFDSSwwQkFBMEI7RUFDOUI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL3B1Ymxpc2h2aWRlby9wdWJsaXNodmlkZW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0IDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUtcGFnZXtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQ6IHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1yb3d7XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlci1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ "./src/app/publishvideo/publishvideo.component.ts":
/*!********************************************************!*\
  !*** ./src/app/publishvideo/publishvideo.component.ts ***!
  \********************************************************/
/*! exports provided: PublishvideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishvideoComponent", function() { return PublishvideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/upload.service */ "./src/app/services/upload.service.ts");




let PublishvideoComponent = class PublishvideoComponent {
    constructor(formBuilder, _uploadService) {
        this.formBuilder = formBuilder;
        this._uploadService = _uploadService;
        this.invalidLogin = false;
    }
    ngOnInit() {
        //this.breakpoint = (window.innerWidth <= 400) ? 1 : 1;
        this.points = JSON.parse(localStorage.getItem('point'));
        this.publishVideoForm = this.formBuilder.group({
            titleVideo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            descriptionVideo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fileVideo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pointName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    loadImage(event) {
        // console.log("event :", event)
        // console.log("target :", event.target)
        // console.log("files :", event.target.files)
        // console.log("loadImage :", event.target.files[0].name)
        this.fileName = event.target.files[0].name;
        this.files = event.target.files;
    }
    upload() {
        console.log("hiciste click");
        if (this.publishVideoForm.invalid) {
            return;
        }
        // console.log("Video Fomr :", this.publishVideoForm)
        let audioElement = this.inputEl.nativeElement;
        // console.log('Archivos:' + audioElement.files.length);
        let file = audioElement.files[0];
        this._uploadService.upload2(audioElement.files, this.publishVideoForm.controls.titleVideo.value, this.publishVideoForm.controls.descriptionVideo.value);
        /*   this._uploadService.upload(
             this.fileName,
             this.publishVideoForm.controls.titleVideo.value,
             this.publishVideoForm.controls.descriptionVideo.value,
             this.publishVideoForm.controls.pointName.value, "1")
             .subscribe(
               (data) => { // Success
                 console.log(" data :", data)
               },
               (error) => {
                 console.error(error);
               }
             );*/
    }
    selectPoint(e) {
        // console.log("event", e)
        this.publishVideoForm.controls.pointName.setValue(e.target.value, {
            onlySelf: true
        });
    }
};
PublishvideoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput', { static: true })
], PublishvideoComponent.prototype, "inputEl", void 0);
PublishvideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publishvideo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./publishvideo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/publishvideo/publishvideo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./publishvideo.component.css */ "./src/app/publishvideo/publishvideo.component.css")).default]
    })
], PublishvideoComponent);



/***/ }),

/***/ "./src/app/registeruser/registeruser.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registeruser/registeruser.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center-container{\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 60px;\r\n  }\r\n\r\n  .message-alert{\r\n      color: red;\r\n  }\r\n\r\n  .container-btn-form{\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-content: center;\r\n  }\r\n\r\n  .btn-register{\r\n      margin-right: 20px;\r\n  }\r\n\r\n  .icon-register{\r\n    font-size: 6em;\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n\r\n  .margin-bottom{\r\n    margin-bottom: 25px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXJ1c2VyL3JlZ2lzdGVydXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7RUFDbEI7O0VBRUE7TUFDSSxVQUFVO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHFCQUFxQjtFQUN2Qjs7RUFFQTtNQUNJLGtCQUFrQjtFQUN0Qjs7RUFHRjtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXJ1c2VyL3JlZ2lzdGVydXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlci1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgLm1lc3NhZ2UtYWxlcnR7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLWJ0bi1mb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5idG4tcmVnaXN0ZXJ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gIFxyXG4uaWNvbi1yZWdpc3RlcntcclxuICAgIGZvbnQtc2l6ZTogNmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm1hcmdpbi1ib3R0b217XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/registeruser/registeruser.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registeruser/registeruser.component.ts ***!
  \********************************************************/
/*! exports provided: RegisteruserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteruserComponent", function() { return RegisteruserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegisteruserComponent = class RegisteruserComponent {
    constructor(formBuilder, _serviceUser, router) {
        this.formBuilder = formBuilder;
        this._serviceUser = _serviceUser;
        this.router = router;
        this.invalidLogin = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            numCel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            typeUser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.typeUsers = [
            {
                type: "admin",
            },
            {
                type: "user",
            }
        ];
    }
    onSubmit() {
        if (this.loginForm.invalid) {
            return;
        }
        this._serviceUser.register(this.loginForm.controls.password.value, this.loginForm.controls.numCel.value, this.loginForm.controls.email.value)
            .subscribe((data) => {
            console.log(" data :", data);
        }, (error) => {
            console.error(error);
        });
    }
    selectTypeUser(event) {
        console.log(event);
    }
    cancel() {
        this.router.navigate(['manageuser']);
    }
};
RegisteruserComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegisteruserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-registeruser',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registeruser.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registeruser/registeruser.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registeruser.component.css */ "./src/app/registeruser/registeruser.component.css")).default]
    })
], RegisteruserComponent);



/***/ }),

/***/ "./src/app/services/globals.ts":
/*!*************************************!*\
  !*** ./src/app/services/globals.ts ***!
  \*************************************/
/*! exports provided: BASE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// Testing
var BASE_URL = 'https://caja-sullana.us-south.cf.appdomain.cloud/';
//Local -->
//export var BASE_URL = 'http://localhost:4200/';


/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals */ "./src/app/services/globals.ts");




let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
    }
    login(password, email) {
        return this.http.post(_globals__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + 'login', {
            password: password,
            username: "null",
            correo: email,
        });
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/services/multimedia.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/multimedia.service.ts ***!
  \************************************************/
/*! exports provided: MultimediaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultimediaService", function() { return MultimediaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals */ "./src/app/services/globals.ts");




let MultimediaService = class MultimediaService {
    constructor(http) {
        this.http = http;
    }
    listarMedia() {
        return this.http.get(_globals__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + 'listarMedia');
    }
};
MultimediaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MultimediaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MultimediaService);



/***/ }),

/***/ "./src/app/services/publishtext.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/publishtext.service.ts ***!
  \*************************************************/
/*! exports provided: PublishtextService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishtextService", function() { return PublishtextService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals */ "./src/app/services/globals.ts");




let PublishtextService = class PublishtextService {
    constructor(http) {
        this.http = http;
    }
    publishText(tittle, description, point) {
        console.log("publish service :", point);
        return this.http.post(_globals__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + 'update/text', {
            title: tittle,
            description: description,
            point: point,
        });
    }
};
PublishtextService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PublishtextService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PublishtextService);



/***/ }),

/***/ "./src/app/services/upload.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/upload.service.ts ***!
  \********************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals */ "./src/app/services/globals.ts");




let UploadService = class UploadService {
    constructor(http) {
        this.http = http;
        this.urlprueba = _globals__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + 'file/upload2';
    }
    upload(file, title, description, point, category) {
        console.log("upload service - file :", file);
        return this.http.post(_globals__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + 'file/upload2', {
            file: file,
            title: title,
            description: description,
            point: point,
            category: category,
        });
    }
    upload2(file, title, des) {
        return new Promise((resolve, reject) => {
            let formData = new FormData();
            let xhr = new XMLHttpRequest();
            let files = file;
            var f;
            /* if (params) {
               for (var key in params) {
                 if (params.hasOwnProperty(key)) {
                   formData.append(key, params[key]);
                 }
               }
             }*/
            formData.append('file', file[0]);
            formData.append('title', title);
            formData.append('description', des);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', this.urlprueba, true);
            xhr.send(formData);
        });
    }
};
UploadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UploadService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals */ "./src/app/services/globals.ts");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    register(password, numCel, email) {
        return this.http.post(_globals__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + 'register', {
            username: "admin",
            password: password,
            numCel: numCel,
            correo: email,
        });
    }
    listUser() {
        console.log("listUser");
        return this.http.get(_globals__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + 'listarUsuario');
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\tarjeta_credito\demo-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map