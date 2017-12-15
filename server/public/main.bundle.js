webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes_app_routing_module__ = __webpack_require__("../../../../../src/app/routes/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_client_client_service__ = __webpack_require__("../../../../../src/app/services/client/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_register_register_service__ = __webpack_require__("../../../../../src/app/services/register/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_validation_validation_service__ = __webpack_require__("../../../../../src/app/services/validation/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_app_app_component__ = __webpack_require__("../../../../../src/app/components/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_lunch_lunch_component__ = __webpack_require__("../../../../../src/app/components/lunch/lunch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_client_client_component__ = __webpack_require__("../../../../../src/app/components/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modules






// Routing Modules


// Material Modules















// Services




// Components






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            // Put components here!
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__components_app_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_lunch_lunch_component__["a" /* LunchComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_client_client_component__["a" /* ClientComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_login_login_component__["a" /* LoginComponent */]
            ],
            // Module Imports here
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__routes_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["j" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["l" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["k" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["i" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_dialog__["b" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__auth0_angular_jwt__["b" /* JwtModule */].forRoot({
                    config: {
                        tokenGetter: function () {
                            return localStorage.getItem('id_token');
                        },
                        whitelistedDomains: ['http://localhost:3000']
                    }
                })
            ],
            // Add Services here
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__services_client_client_service__["a" /* ClientService */],
                __WEBPACK_IMPORTED_MODULE_14__services_register_register_service__["a" /* RegisterService */],
                __WEBPACK_IMPORTED_MODULE_15__services_validation_validation_service__["a" /* ValidationService */],
                __WEBPACK_IMPORTED_MODULE_16__services_auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_17__components_app_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  color: #000;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 250%;\r\n}\r\n\r\n.selected {\r\n  background-color: #CFD8DC !important;\r\n  color: white;\r\n}\r\n.heroes {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 15em;\r\n}\r\n.heroes li {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.heroes li.selected:hover {\r\n  background-color: #BBD8DC !important;\r\n  color: white;\r\n}\r\n.heroes li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.heroes .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n.heroes .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #000;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n\r\nh1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\n\n.drop-down-menu {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-sidenav-container class=\"example-container\" fullscreen>\n<mat-toolbar color=\"primary\">\n  <button type=\"button\" mat-icon-button (click)=\"sidenav.open()\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <span> Demo </span>\n  <span class=\"drop-down-menu\"></span>\n  <span>\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n    <mat-icon>more_vert</mat-icon>\n    </button>\n  </span>\n  <mat-menu #menu=\"matMenu\">\n    <button mat-menu-item (click)=\"onLogoutClick()\">\n      <mat-icon>logout</mat-icon>\n      <span>Logout</span>\n    </button>\n    <button mat-menu-item disabled>\n      <mat-icon>voicemail</mat-icon>\n      <span>Check voicemail</span>\n    </button>\n    <button mat-menu-item>\n      <mat-icon>notifications_off</mat-icon>\n      <span>Disable alerts</span>\n    </button>\n  </mat-menu>\n</mat-toolbar>\n\n  <mat-sidenav #sidenav >\n    <h3 mat-subheader>Blaze</h3>\n    <mat-list>\n      <mat-list-item  *ngIf=\"authService.loggedIn()\"><mat-icon>event</mat-icon><a routerLink=\"/lunch\" mat-button> Lunch </a></mat-list-item>\n      <mat-divider></mat-divider>\n      <mat-list-item  *ngIf=\"authService.loggedIn()\"><mat-icon>event</mat-icon><a routerLink=\"/client\" mat-button> Client </a></mat-list-item>\n      <mat-divider></mat-divider>\n      <mat-list-item><mat-icon>event</mat-icon><a routerLink=\"/user\" mat-button> User </a></mat-list-item>\n      <mat-divider></mat-divider>\n      <mat-list-item><mat-icon>event</mat-icon><a routerLink=\"/register\" mat-button> Register </a></mat-list-item>\n      <mat-divider></mat-divider>\n      <mat-list-item><mat-icon>event</mat-icon><a routerLink=\"/login\" mat-button> Login </a></mat-list-item>\n    </mat-list>\n  </mat-sidenav>\n\n<flash-messages></flash-messages>\n<router-outlet></router-outlet>\n\n\n</mat-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.title = 'Blaze';
    }
    AppComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You have logged out!', { cssClass: 'alert-success', timeout: 5000 });
        this.router.navigate(['/login']);
        return false;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            styles: [__webpack_require__("../../../../../src/app/components/app/app.component.css")],
            template: __webpack_require__("../../../../../src/app/components/app/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/client/client.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  color: #000;\r\n}\r\n* {\r\nmargin-top: 0.5em;\r\nmargin-left: 10px;\r\n}\r\n.example-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.example-container {\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/client/client.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h1>Client Information</h1>\n  <h2> Add Client </h2>\n  <div class =\"container\">\n  <form (submit)=\"addClient()\" class=\"example-form\" class=\"flex-container\">\n    <div class=\"form-group\">\n      <mat-form-field class=\"example-container\" >\n        <input matInput placeholder=\"First Name\" [(ngModel)]=\"first_name\" name=\"first_name\">\n      </mat-form-field>\n    </div>\n    <div  fxFlex=\"5%\" >  </div>\n    <div class=\"form-group\">\n      <mat-form-field class=\"example-container\">\n        <input matInput placeholder=\"Last Name\" [(ngModel)]=\"last_name\" name=\"last_name\">\n      </mat-form-field>\n    </div>\n    <div  fxFlex=\"5%\" >  </div>\n\n    <div class=\"form-group\">\n      <mat-form-field class=\"example-container\">\n        <input matInput placeholder=\"Phone Number\" [(ngModel)]=\"phone\" name=\"phone\">\n      </mat-form-field>\n    </div>\n    <button type=\"submit\" onClick=\"window.location.reload()\"  mat-icon-button >\n      <mat-icon>add</mat-icon>\n    </button>\n  </form>\n\n  </div>\n  <hr>\n  <h2> Client Records </h2>\n  <div class =\"container\">\n    <div *ngFor = \"let client of clients\">\n      <div class =\"container\" class=\"flex-container\">\n        <form #updateForm=\"ngForm\" (submit)=\"updateClient()\" class=\"example-form\" class=\"flex-container\">\n\n            <mat-form-field>\n              <input matInput name=\"first_name\" [(ngModel)]=\"client.first_name\" value=\"\">\n            </mat-form-field>\n\n            <mat-form-field>\n              <input matInput name=\"last_name\" [(ngModel)]=\"client.last_name\" value=\"\">\n            </mat-form-field>\n\n            <mat-form-field>\n              <input matInput name=\"phone\" [(ngModel)]=\"client.phone\" value=\"\">\n            </mat-form-field>\n\n            <button type=\"button\" mat-icon-button (click)=\"updateClient(client)\" onClick=\"window.location.reload()\" value=\"Update\">\n              <mat-icon>update</mat-icon>\n            </button>\n\n            <button type=\"button\" mat-icon-button (click)=\"deleteClient(client._id)\" value=\"Delete\">\n              <mat-icon>delete</mat-icon>\n            </button>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/client/client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_client_client_service__ = __webpack_require__("../../../../../src/app/services/client/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientComponent = (function () {
    function ClientComponent(clientService, authService, router) {
        this.clientService = clientService;
        this.authService = authService;
        this.router = router;
    }
    ClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authClient().subscribe(function (client) {
            _this.user = client.user;
        }, function (err) {
            console.log(err);
        });
        this.clientService.getClient()
            .subscribe(function (clients) {
            return _this.clients = clients;
        });
    };
    ClientComponent.prototype.addClient = function () {
        var _this = this;
        var newClient = {
            first_name: this.first_name,
            last_name: this.last_name,
            phone: this.phone
        };
        this.clientService.addClient(newClient)
            .subscribe(function (client) {
            _this.clients.push(client);
        });
    };
    ClientComponent.prototype.updateClient = function (client) {
        var _this = this;
        var updateClient = {
            _id: client._id,
            first_name: client.first_name,
            last_name: client.last_name,
            phone: client.phone
        };
        this.clientService.updateClient(updateClient)
            .subscribe(function (result) {
            _this.clientService.getClient();
        });
    };
    ClientComponent.prototype.deleteClient = function (id) {
        var clients = this.clients;
        this.clientService.deleteClient(id)
            .subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < clients.length; i++) {
                    if (clients[i]._id == id) {
                        clients.splice(i, 1);
                    }
                }
            }
        });
    };
    ClientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'client',
            template: __webpack_require__("../../../../../src/app/components/client/client.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/client/client.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_client_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-full-width {\n  width: 100%;\n}\n.right{\n  float:right;\n  margin-right: 5%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Login</h1>\n<div class =\"container\">\n<form (submit)=\"onLogin()\" class=\"example-form\" class=\"flex-container\">\n  <div class=\"form-group\">\n    <mat-form-field class=\"example-container example-full-width\">\n      <input matInput placeholder=\"User Name\" [(ngModel)]=\"user_name\" name=\"user_name\" required>\n    </mat-form-field>\n  </div>\n\n  <div class=\"form-group\">\n    <mat-form-field class=\"example-container example-full-width\">\n      <input matInput placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\" required>\n    </mat-form-field>\n  </div>\n\n  <button type=\"button\" mat-raised-button routerLink=\"/register\" color=\"secondary\">\n    Sign Up\n  </button>\n  <span class=\"right\">\n  <button type=\"submit\" mat-raised-button color=\"primary\">\n    Login\n  </button>\n</span>\n\n</form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validation_validation_service__ = __webpack_require__("../../../../../src/app/services/validation/validation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage, validationService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.validationService = validationService;
    }
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        var user = {
            user_name: this.user_name,
            password: this.password
        };
        //Required Fields
        if (!this.validationService.validateUser(user)) {
            this.flashMessage.show('Please fill in all the fields', { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        this.authService.authenticateUser(user)
            .subscribe(function (user) {
            if (user.success) {
                _this.authService.storeUserData(user.token, user.user);
                _this.flashMessage.show('Welcome to the Demo', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/client']);
            }
            else {
                _this.flashMessage.show('Incorrect User Name or Password', { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__services_validation_validation_service__["a" /* ValidationService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/lunch/lunch.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  color: #000;\r\n}\r\n* {\r\nmargin-top: 0.5em;\r\n}\r\n\r\n.example-card {\r\n  width: 400px;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/volcano.jpg") + ");\r\n  background-size: cover;\r\n}\r\n\r\n\r\n\r\n/*.example-full-width {\r\n  width: 20%;\r\n}*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/lunch/lunch.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\r\n<h1>Lunch Menu</h1>\r\n<form class=\"example-form\" class=\"flex-container\"  >\r\n  <mat-form-field class=\"example-full-width\" >\r\n    <input matInput placeholder=\"First Name\" value=\"\">\r\n  </mat-form-field>\r\n   <div  fxFlex=\"5%\" >  </div>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Favorite food\" value=\"\">\r\n  </mat-form-field>\r\n</form>\n<button type=\"button\" mat-icon-button (click)=\"sidenav.open()\">\n  <mat-icon>save</mat-icon>\n</button>\n<mat-checkbox>Check me!</mat-checkbox>\r\n<button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\r\n<mat-menu #menu=\"matMenu\">\r\n  <button mat-menu-item>Item 1</button>\r\n  <button mat-menu-item>Item 2</button>\r\n</mat-menu>\r\n\r\n<mat-grid-list cols=\"4\" rowHeight=\"100px\">\r\n  <mat-grid-tile\r\n      *ngFor=\"let tile of tiles\"\r\n      [colspan]=\"tile.cols\"\r\n      [rowspan]=\"tile.rows\"\r\n      [style.background]=\"tile.color\">\r\n    {{tile.text}}\r\n  </mat-grid-tile>\r\n</mat-grid-list>\r\n\r\n<mat-grid-list cols=\"2\" rowHeight=\"1:1\">\r\n  <mat-grid-tile>\r\n    <mat-card class=\"example-card\">\r\n      <mat-card-header>\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n        <mat-card-title>Shin Uchiha</mat-card-title>\r\n        <mat-card-subtitle>Drop</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <img mat-card-image src=\"./assets/images/volcano.jpg\" alt=\"Photo of a Shiba Inu\">\r\n      <mat-card-content>\r\n        <p>\r\n        Welcome to the thunder dome\r\n        </p>\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <button mat-button>LIKE</button>\r\n        <button mat-button>SHARE</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </mat-grid-tile>\r\n  <mat-grid-tile>\r\n    <mat-card class=\"example-card\">\r\n      <mat-card-header>\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n        <mat-card-title>Shin Uchiha</mat-card-title>\r\n        <mat-card-subtitle>Drop</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <img mat-card-image src=\"./assets/images/volcano.jpg\" alt=\"Photo of a Shiba Inu\">\r\n      <mat-card-content>\r\n        <p>\r\n        Welcome to the thunder dome\r\n        </p>\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <button mat-button>LIKE</button>\r\n        <button mat-button>SHARE</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </mat-grid-tile>\r\n  <mat-grid-tile>\r\n    <mat-card class=\"example-card\">\r\n      <mat-card-header>\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n        <mat-card-title>Shin Uchiha</mat-card-title>\r\n        <mat-card-subtitle>Drop</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <img mat-card-image src=\"./assets/images/volcano.jpg\" alt=\"Photo of a Shiba Inu\">\r\n      <mat-card-content>\r\n        <p>\r\n        Welcome to the thunder dome\r\n        </p>\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <button mat-button>LIKE</button>\r\n        <button mat-button>SHARE</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </mat-grid-tile>\r\n  <mat-grid-tile>\r\n    <mat-card class=\"example-card\">\r\n      <mat-card-header>\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n        <mat-card-title>Shin Uchiha</mat-card-title>\r\n        <mat-card-subtitle>Drop</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <img mat-card-image src=\"./assets/images/volcano.jpg\" alt=\"Photo of a Shiba Inu\">\r\n      <mat-card-content>\r\n        <p>\r\n        Welcome to the thunder dome\r\n        </p>\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <button mat-button>LIKE</button>\r\n        <button mat-button>SHARE</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </mat-grid-tile>\r\n</mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/lunch/lunch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LunchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LunchComponent = (function () {
    function LunchComponent(authService) {
        this.authService = authService;
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
    LunchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authLunch().subscribe(function (lunch) {
            _this.user = lunch.user;
        }, function (err) {
            console.log(err);
        });
    };
    LunchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lunch',
            styles: [__webpack_require__("../../../../../src/app/components/lunch/lunch.component.css")],
            template: __webpack_require__("../../../../../src/app/components/lunch/lunch.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]])
    ], LunchComponent);
    return LunchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-full-width {\n  width: 100%;\n}\n\n.warning {\n      background-color: #f89406;\n      border-color: #e96506;\n      color: #ffffff;\n    }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Register</h1>\n<div class =\"container\">\n<form (submit)=\"addUser()\" class=\"example-form\" class=\"flex-container\">\n  <div class=\"form-group\">\n    <mat-form-field class=\"example-container example-full-width\" >\n      <input matInput placeholder=\"First Name\" [(ngModel)]=\"first_name\" name=\"first_name\" required>\n    </mat-form-field>\n  </div>\n  <div class=\"form-group\">\n    <mat-form-field class=\"example-container example-full-width\">\n      <input matInput placeholder=\"Last Name\" [(ngModel)]=\"last_name\" name=\"last_name\" required>\n    </mat-form-field>\n  </div>\n\n  <div class=\"form-group\">\n    <mat-form-field class=\"example-container example-full-width\">\n      <input matInput placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\" required>\n    </mat-form-field>\n  </div>\n\n  <div class=\"form-group\">\n    <mat-form-field class=\"example-container example-full-width\">\n      <input matInput placeholder=\"User Name\" [(ngModel)]=\"user_name\" name=\"user_name\" required>\n    </mat-form-field>\n  </div>\n\n  <div class=\"form-group\">\n    <mat-form-field class=\"example-container example-full-width\">\n      <input matInput placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\" type=\"password\" required>\n    </mat-form-field>\n  </div>\n  <button type=\"button\" mat-raised-button color=\"secondary\" onClick=\"form.reset()\">\n    Clear\n  </button>\n\n  <button type=\"submit\" mat-raised-button color=\"primary\">\n    Register\n  </button>\n\n</form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_register_register_service__ = __webpack_require__("../../../../../src/app/services/register/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validation_validation_service__ = __webpack_require__("../../../../../src/app/services/validation/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(registerService, validationService, router, flashMessage) {
        this.registerService = registerService;
        this.validationService = validationService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterComponent.prototype.addUser = function () {
        var _this = this;
        var newUser = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            user_name: this.user_name,
            password: this.password
        };
        //Required Fields
        if (!this.validationService.validateRegister(newUser)) {
            this.flashMessage.show('Please fill in all the fields', { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        // Required Email
        if (!this.validationService.validateEmail(this.email)) {
            this.flashMessage.show('Please a valid email', { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        this.registerService.addUser(newUser)
            .subscribe(function (user) {
            if (user.success) {
                _this.flashMessage.show('You have been Registerd', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_register_register_service__["a" /* RegisterService */],
            __WEBPACK_IMPORTED_MODULE_3__services_validation_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/components/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            localStorage.removeItem('token');
            this.router.navigateByUrl('/login');
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/routes/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_lunch_lunch_component__ = __webpack_require__("../../../../../src/app/components/lunch/lunch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_client_client_component__ = __webpack_require__("../../../../../src/app/components/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'lunch', component: __WEBPACK_IMPORTED_MODULE_3__components_lunch_lunch_component__["a" /* LunchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'client', component: __WEBPACK_IMPORTED_MODULE_4__components_client_client_component__["a" /* ClientComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_5__components_user_user_component__["a" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_6__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http, jwtHelperService) {
        this.http = http;
        this.jwtHelperService = jwtHelperService;
    }
    //Auth User
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // authenticate User Lunch Routes
    AuthService.prototype.authLunch = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/api/authLunch', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // authenticate User Client Routes
    AuthService.prototype.authClient = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/api/authClient', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loggedIn = function () {
        var token = this.jwtHelperService.tokenGetter();
        if (!token) {
            return false;
        }
        var tokenExpired = this.jwtHelperService.isTokenExpired(token);
        return !tokenExpired;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__auth0_angular_jwt__["a" /* JwtHelperService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/client/client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientService = (function () {
    function ClientService(http) {
        this.http = http;
    }
    // retrieving ClientService
    ClientService.prototype.getClient = function () {
        return this.http.get('http://localhost:3000/api/client')
            .map(function (res) { return res.json(); });
    };
    //add Client
    ClientService.prototype.addClient = function (newClient) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/client', newClient, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //update
    ClientService.prototype.updateClient = function (newClient) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:3000/api/client/' + newClient._id, newClient, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //delete
    ClientService.prototype.deleteClient = function (id) {
        return this.http.delete('http://localhost:3000/api/client/' + id)
            .map(function (res) { return res.json(); });
    };
    ClientService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "../../../../../src/app/services/register/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterService = (function () {
    function RegisterService(http) {
        this.http = http;
    }
    //add User
    RegisterService.prototype.addUser = function (newUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/user', newUser, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    RegisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validation/validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ValidationService = (function () {
    function ValidationService(http) {
        this.http = http;
    }
    ValidationService.prototype.validateRegister = function (user) {
        if (user.first_name == undefined || user.last_name == undefined || user.email == undefined || user.user_name == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidationService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidationService.prototype.validateUser = function (user) {
        if (user.user_name == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ValidationService);
    return ValidationService;
}());



/***/ }),

/***/ "../../../../../src/assets/images/volcano.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "volcano.85142ba590e8b7f50de7.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map