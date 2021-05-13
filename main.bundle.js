webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-panel/admin-panel.component.css":
/***/ (function(module, exports) {

module.exports = "table {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n  }\n  \n  td, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n  }\n  \n  tr:nth-child(even) {\n    background-color: #dddddd;\n  }"

/***/ }),

/***/ "./src/app/admin-panel/admin-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div>\n  <h4 *ngFor=\"let employee of employees\">{{employee}}</h4>\n</div> -->\n\n<h2>Employees <button (click)=\"enableAlertBox()\">Show Alert</button></h2>\n\n<table>\n  <tr>\n    <th>Employee Name</th><th><input type=\"date\"></th>\n  </tr>\n  <tr *ngFor=\"let employee of employees\">\n    <td>{{employee}}</td>\n  </tr>\n</table>\n<div *ngIf=\"viewAlertBox\">\n  <app-dialog (closeDialogCallBack)=\"closeAlertBox()\">\n  </app-dialog>\n  <app-register></app-register>\n  <app-login></app-login>\n</div>"

/***/ }),

/***/ "./src/app/admin-panel/admin-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminPanelComponent = /** @class */ (function () {
    function AdminPanelComponent(auth) {
        this.auth = auth;
        this.employees = [];
        this.viewAlertBox = false;
    }
    AdminPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.viewEmployees().subscribe(function (data) {
            console.log(data);
            data.forEach(function (element) {
                console.log(element.username);
                _this.employees.push(element.username);
            });
        });
    };
    AdminPanelComponent.prototype.enableAlertBox = function () {
        this.viewAlertBox = true;
    };
    AdminPanelComponent.prototype.closeAlertBox = function () {
        this.viewAlertBox = false;
    };
    AdminPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-panel',
            template: __webpack_require__("./src/app/admin-panel/admin-panel.component.html"),
            styles: [__webpack_require__("./src/app/admin-panel/admin-panel.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], AdminPanelComponent);
    return AdminPanelComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.onResize = function (event) {
        console.log('zooming in');
        document.activeElement.blur();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onResize", null);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__logout_logout_component__ = __webpack_require__("./src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__threedinterface_threedinterface_component__ = __webpack_require__("./src/app/threedinterface/threedinterface.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admin_panel_admin_panel_component__ = __webpack_require__("./src/app/admin-panel/admin-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_dialog_dialog_component__ = __webpack_require__("./src/app/shared/dialog/dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // For routes
 // For data handling in UI
 // For Posting and getting the data from UI










var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_11__logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_10__register_register_component__["a" /* RegisterComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_13__admin_panel_admin_panel_component__["a" /* AdminPanelComponent */] },
    { path: 'threedinterface', component: __WEBPACK_IMPORTED_MODULE_12__threedinterface_threedinterface_component__["a" /* ThreedinterfaceComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__threedinterface_threedinterface_component__["a" /* ThreedinterfaceComponent */],
                __WEBPACK_IMPORTED_MODULE_13__admin_panel_admin_panel_component__["a" /* AdminPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_14__shared_dialog_dialog_component__["a" /* DialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (username, password) {
        return this.http.post('/api/register', {
            username: username,
            password: password
        });
    };
    AuthService.prototype.viewEmployees = function () {
        return this.http.get('/api/viewemployees');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three_build_three_min_js__ = __webpack_require__("./node_modules/three/build/three.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three_build_three_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_three_build_three_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three_examples_jsm_controls_TrackballControls_js__ = __webpack_require__("./node_modules/three/examples/jsm/controls/TrackballControls.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.main();
    };
    DashboardComponent.prototype.main = function () {
        var scene = new __WEBPACK_IMPORTED_MODULE_1_three_build_three_min_js__["Scene"]();
        var camera = new __WEBPACK_IMPORTED_MODULE_1_three_build_three_min_js__["PerspectiveCamera"](60, window.innerWidth / window.innerHeight, 0.1, 10000);
        // WEBGL Renderer
        var renderer = new __WEBPACK_IMPORTED_MODULE_1_three_build_three_min_js__["WebGLRenderer"]({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        scene.background = new __WEBPACK_IMPORTED_MODULE_1_three_build_three_min_js__["Color"](0x000000);
        scene.fog = new __WEBPACK_IMPORTED_MODULE_1_three_build_three_min_js__["FogExp2"](0xcccccc, 0.002);
        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three_build_three_min_js__["CylinderGeometry"](0, 10, 30, 4, 1);
        var material = new __WEBPACK_IMPORTED_MODULE_1_three_build_three_min_js__["MeshPhongMaterial"]({ color: 0x05719D, flatShading: true });
        for (var i = 0; i < 500; i++) {
            var mesh = new __WEBPACK_IMPORTED_MODULE_1_three_build_three_min_js__["Mesh"](geometry, material);
            mesh.position.x = (Math.random() - 0.5) * 1000;
            mesh.position.y = (Math.random() - 0.5) * 1000;
            mesh.position.z = (Math.random() - 0.5) * 1000;
            mesh.updateMatrix();
            mesh.matrixAutoUpdate = false;
            scene.add(mesh);
        }
        var geometry1 = new __WEBPACK_IMPORTED_MODULE_1_three_build_three_min_js__["BoxGeometry"](10, 10, 10);
        var material1 = new __WEBPACK_IMPORTED_MODULE_1_three_build_three_min_js__["MeshStandardMaterial"]({ color: 0x9fdf9f, wireframe: false });
        var cube = new __WEBPACK_IMPORTED_MODULE_1_three_build_three_min_js__["Mesh"](geometry1, material1);
        scene.add(cube);
        var geometry2 = new __WEBPACK_IMPORTED_MODULE_1_three_build_three_min_js__["PlaneGeometry"](500, 500, 500);
        var material2 = new __WEBPACK_IMPORTED_MODULE_1_three_build_three_min_js__["MeshStandardMaterial"]({
            color: 0xe6e6ff,
            side: __WEBPACK_IMPORTED_MODULE_1_three_build_three_min_js__["DoubleSide"],
            roughness: 0.0,
            metalness: 0.0
        });
        var plane = new __WEBPACK_IMPORTED_MODULE_1_three_build_three_min_js__["Mesh"](geometry2, material2);
        plane.receiveShadow = true;
        scene.add(plane);
        plane.rotation.x = Math.PI / 2;
        var light = new __WEBPACK_IMPORTED_MODULE_1_three_build_three_min_js__["PointLight"](0xFFFFFF, 0.1);
        light.castShadow = true;
        scene.add(light);
        light.position.z = 300;
        camera.position.z = 1000;
        var controls = new __WEBPACK_IMPORTED_MODULE_2_three_examples_jsm_controls_TrackballControls_js__["a" /* TrackballControls */](camera, renderer.domElement);
        controls.rotateSpeed = 5.0;
        controls.zoomSpeed = 3.2;
        controls.panSpeed = 3;
        controls.keys = [65, 83, 68];
        window.addEventListener('resize', onWindowResize, false);
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            controls.handleResize();
        }
        var animate = function () {
            requestAnimationFrame(animate);
            // cube.rotation.y += 0.01;
            controls.update();
            renderer.render(scene, camera);
        };
        animate();
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n\t<div class=\"card-header\">\n  <h3>Sign In : {{username}} {{showMouseX}} {{showMouseY}}</h3>\n\t</div>\n\t<div class=\"card-body\">\n\n\t\t\t<div class=\"input-group form-group\">\n\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n\t\t\t\t</div>\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"username\" class=\"form-control\" placeholder=\"username\">\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<div class=\"input-group form-group\">\n\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\n\t\t\t\t</div>\n\t\t\t\t<input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"password\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<button (click)=\"login()\" class=\"btn float-right login_btn\">Login</button>\n\t\t\t</div>\n\n\t</div>\n\n\t<div\n\t[style.left]=\"setDivLocationX ? setDivLocationX : strShowMouseX\" \n\t[style.top]=\"setDivLocationY ? setDivLocationY : strShowMouseY\" \n\tid=\"floatingdiv\">\n\t<h1>{{username}}</h1><br>\n\t<h2 style=\"font-size: 10rem;color: black;\">{{showMouseX}}</h2><br>\n\t<h2 style=\"font-size: 10rem;color: black;\">{{showMouseY}}</h2>\n\t</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.setDivLocationX = null;
        this.setDivLocationY = null;
    }
    LoginComponent.prototype.onMouseMove = function (event) {
        this.showMouseX = event.clientX;
        this.showMouseY = event.clientY;
        this.strShowMouseX = this.showMouseX / 2 + 'px';
        this.strShowMouseY = this.showMouseY / 2 + 'px';
    };
    LoginComponent.prototype.onRighClick = function (event) {
        this.showMouseX = event.clientX;
        this.showMouseY = event.clientY;
        this.strShowMouseX = this.showMouseX / 2 + 'px';
        this.strShowMouseY = this.showMouseY / 2 + 'px';
        this.setDivLocationX = this.strShowMouseX;
        this.setDivLocationY = this.strShowMouseY;
        return false;
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        if (this.username == 'Shaheer' && this.password == '123') {
            alert("Login Success");
            this.router.navigate(['threedinterface']);
        }
        else {
            alert("Authentication Error!");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('document:mousemove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LoginComponent.prototype, "onMouseMove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('document:contextmenu', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LoginComponent.prototype, "onRighClick", null);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Log out works</p>"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logout',
            template: __webpack_require__("./src/app/logout/logout.component.html"),
            styles: [__webpack_require__("./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\n        <li class=\"nav-item\">\n          <a routerLink=\"/login\" class=\"nav-link\" aria-current=\"page\" href=\"#\">Login</a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"/register\" class=\"nav-link\" aria-current=\"page\" href=\"#\">Register</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/admin\">Admin</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/logout\">Logout</a>\n        </li>\n\n      </ul>\n      <form class=\"d-flex\">\n        <input class=\"form-control me-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success\" type=\"submit\">Search</button>\n      </form>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "form {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.container2 {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align:center;\r\n        -ms-flex-align:center;\r\n            align-items:center;\r\n    padding: 20px;\r\n    background: #eee;\r\n    border-radius: 20px;\r\n}\r\n\r\ninput#username, input#password, input#cpassword {\r\n    outline: 0;\r\n    font-size: 12px;\r\n    padding: 5px 10px;\r\n    margin: 5px;\r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"registerUser($event)\">\n\t<div class=\"container2\">\n\t\t<h2>Register</h2>\n\t\t<div *ngIf=\"isShowEmployeeClicked\">\n\t\t\t<h4 *ngFor=\"let employee of employees\">{{employee}}</h4>\n\t\t</div>\n\t\t<div>\n\t\t\t<input type=\"text\" autocomplete=\"off\" placeholder=\"Username\" id=\"username\">\n\t\t</div>\n\t\t<div>\n\t\t\t<input type=\"password\" autocomplete=\"off\" placeholder=\"Password\" id=\"password\">\n\t\t</div>\n\t\t<div>\n\t\t\t<input type=\"password\" autocomplete=\"off\" placeholder=\"Confirm Password\" id=\"cpassword\">\n\t\t</div>\n\t\t<div>\n\t\t\t<button type=\"submit\" id=\"submit\">Submit</button>\n\t\t</div>\n\t</div>\t\n</form>\n<input type=\"button\" value=\"View Employees\" (click)=\"viewEmployees()\">\n<input type=\"button\" value=\"Show\" (click)=\"showEmployees()\">\n<div *ngIf=\"viewAlertBox\">\n<app-dialog (closeDialogCallBack)=\"closeAlertBox()\">\n</app-dialog>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.employees = [];
        this.isShowEmployeeClicked = false;
        this.viewAlertBox = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.showEmployees = function () {
        console.log(this.employees);
        this.isShowEmployeeClicked = true;
    };
    RegisterComponent.prototype.viewEmployees = function () {
        var _this = this;
        this.employees = [];
        this.auth.viewEmployees().subscribe(function (data) {
            console.log(data);
            data.forEach(function (element) {
                console.log(element.username);
                _this.employees.push(element.username);
            });
        });
        this.isShowEmployeeClicked = false;
    };
    RegisterComponent.prototype.registerUser = function (event) {
        var _this = this;
        this.viewAlertBox = true;
        event.preventDefault();
        var errors = [];
        var target = event.target;
        var username = target.querySelector('#username').value;
        var password = target.querySelector('#password').value;
        var cpassword = target.querySelector('#cpassword').value;
        if (password !== cpassword) {
            errors.push("Passwords do not match");
            console.log(errors);
        }
        if (errors.length === 0) {
            this.auth.registerUser(username, password).subscribe(function (data) {
                console.log(data);
                if (data.success) {
                    _this.router.navigate(['dashboard']);
                }
            });
        }
        console.log(username, password);
    };
    RegisterComponent.prototype.closeAlertBox = function () {
        this.viewAlertBox = false;
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/shared/dialog/dialog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"dialogBox\">\n    <h2>Alert</h2>\n    <button (click)=\"closeDialogBox()\">Close</button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/shared/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
        this.closeDialogCallBack = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    DialogComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('no-scroll');
        console.log('length');
        console.log(document.getElementsByClassName('container').length);
    };
    DialogComponent.prototype.closeDialogBox = function () {
        this.closeDialogCallBack.emit();
        var body = document.getElementsByTagName('body')[0];
        if (document.getElementsByClassName('container').length >= 2) {
            console.log('disabling scroll since there are more than 1 container is available');
            body.classList.add('no-scroll');
        }
        else {
            console.log('removing sccroll since no container is existing');
            body.classList.remove('no-scroll');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], DialogComponent.prototype, "closeDialogCallBack", void 0);
    DialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dialog',
            template: __webpack_require__("./src/app/shared/dialog/dialog.component.html"),
            styles: [__webpack_require__("./src/app/shared/dialog/dialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/threedinterface/threedinterface.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/threedinterface/threedinterface.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/threedinterface/threedinterface.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreedinterfaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThreedinterfaceComponent = /** @class */ (function () {
    function ThreedinterfaceComponent() {
    }
    ThreedinterfaceComponent.prototype.ngOnInit = function () {
        // this.main();
    };
    ThreedinterfaceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-threedinterface',
            template: __webpack_require__("./src/app/threedinterface/threedinterface.component.html"),
            styles: [__webpack_require__("./src/app/threedinterface/threedinterface.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ThreedinterfaceComponent);
    return ThreedinterfaceComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map