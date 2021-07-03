(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/shaheershahabudeen/Software Experiments/portfolio/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "QX6l":
    /*!**************************************************!*\
      !*** ./src/app/dashboard/dashboard.component.ts ***!
      \**************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function QX6l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)();
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 15,
        vars: 0,
        consts: [[2, "padding-bottom", "30px"], [1, "card-views"], [1, "card-comments"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "What's up guys!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempora consequatur nisi nostrum nobis voluptas exercitationem magnam hic consectetur modi.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Views");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "What's up guys!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus totam eum vel ducimus voluptas eveniet architecto labore vitae cupiditate. Pariatur optio facere autem, nisi quod laboriosam totam impedit illum, molestiae qui repudiandae culpa reiciendis laudantium. Itaque, vel numquam, ea error, velit esse tenetur labore aut aliquid sed sequi est nesciunt fugit id voluptate? Soluta labore delectus, recusandae deserunt at expedita iure nesciunt laboriosam dolor rerum vitae consectetur assumenda itaque consequuntur? Deleniti enim sapiente ducimus. Officiis illum corporis cupiditate laudantium cumque? Obcaecati ipsam quaerat laboriosam illo minima iste voluptatum eius illum eaque? Exercitationem assumenda consectetur a nisi tenetur doloremque et eaque quasi doloribus soluta asperiores magnam ipsam, hic rerum itaque modi corporis magni quod praesentium cum dignissimos ullam eos quos. Eaque vel repellat non tempore assumenda eveniet, pariatur porro vero id dignissimos blanditiis, recusandae odit reprehenderit. Libero voluptatum aliquam a quam, perspiciatis reprehenderit deserunt pariatur voluptatem aspernatur modi quis excepturi nemo, ea amet magnam quisquam sed placeat. Placeat ducimus facere ipsum, repellat magnam enim libero soluta minima quis quisquam, quaerat sapiente vero fugit sit eos aut. Quia earum illo id impedit quibusdam quaerat sequi suscipit cumque voluptas. Dolore beatae optio distinctio tempore illum magnam itaque ut ullam, et quam consequuntur sequi!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["*[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n    height: 100vh;\n    margin: 0;\n}\nsection[_ngcontent-%COMP%] {\n    padding: 8rem;\n    height: 100vh;\n}\nsection[_ngcontent-%COMP%]:nth-of-type(2) {\n    background: rgba(0, 88, 202);\n    color: white;\n}\n.card-views[_ngcontent-%COMP%] {\n    background: linear-gradient(45deg,#D0CEFF, #6E57BC);\n    width: 150px;\n    height: 150px;\n    border-radius: 20px;\n    padding: 15px;\n    overflow: auto;\n}\n.card-comments[_ngcontent-%COMP%] {\n    background: linear-gradient(45deg,#f3f3f3, #ffffff);\n    width: 150px;\n    height: 150px;\n    border-radius: 20px;\n    box-shadow: black 5px 5px 5px 0.1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG1EQUFtRDtJQUNuRCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztBQUNsQjtBQUVBO0lBQ0ksbURBQW1EO0lBQ25ELFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlDQUFpQztBQUNyQyIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogMDtcbn1cbnNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDhyZW07XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuc2VjdGlvbjpudGgtb2YtdHlwZSgyKSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCA4OCwgMjAyKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uY2FyZC12aWV3cyB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCNEMENFRkYsICM2RTU3QkMpO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmNhcmQtY29tbWVudHMge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywjZjNmM2YzLCAjZmZmZmZmKTtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IGJsYWNrIDVweCA1cHggNXB4IDAuMTtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var smooth_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! smooth-scrollbar */
      "V0Rq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_socket_socket_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/socket/socket-service.service */
      "cZ7/");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "kWWo");
      /* harmony import */


      var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./portfolio/portfolio.component */
      "zyDg");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "QX6l");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(document, socketService) {
          _classCallCheck(this, AppComponent);

          this.document = document;
          this.socketService = socketService;
          this.title = 'portfolio';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// Listen to events from socket-io server
            // this.socketService.listen('test event').subscribe((data) => {
            //   // console.log(data);
            // })
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var scrollbar = smooth_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"].init(document.querySelector('#smooth-scrollbar'));
            scrollbar.options.damping = 0.1;
            scrollbar.options.renderByPixels = false;
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_socket_socket_service_service__WEBPACK_IMPORTED_MODULE_3__["SocketServiceService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 4,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-portfolio");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "kWWo");
      /* harmony import */


      var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./portfolio/portfolio.component */
      "zyDg");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "QX6l");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "cZ7/":
    /*!***********************************************************!*\
      !*** ./src/app/services/socket/socket-service.service.ts ***!
      \***********************************************************/

    /*! exports provided: SocketServiceService */

    /***/
    function cZ7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocketServiceService", function () {
        return SocketServiceService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! socket.io-client */
      "jifJ");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SocketServiceService = /*#__PURE__*/function () {
        // readonly uri: string = "ws://localhost:3000";
        function SocketServiceService() {
          _classCallCheck(this, SocketServiceService);

          this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_1__["io"])('ws://localhost:3000', {
            transports: ['websocket']
          });
        }

        _createClass(SocketServiceService, [{
          key: "listen",
          value: function listen(eventName) {
            var _this = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
              _this.socket.on(eventName, function (data) {
                subscriber.next(data);
              });
            });
          }
        }, {
          key: "emit",
          value: function emit(eventName, data) {
            this.socket.emit(eventName, data);
          }
        }]);

        return SocketServiceService;
      }();

      SocketServiceService.ɵfac = function SocketServiceService_Factory(t) {
        return new (t || SocketServiceService)();
      };

      SocketServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: SocketServiceService,
        factory: SocketServiceService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "kWWo":
    /*!********************************************!*\
      !*** ./src/app/navbar/navbar.component.ts ***!
      \********************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function kWWo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent() {
          _classCallCheck(this, NavbarComponent);

          this.ustAnimation = [{
            a: 'U',
            b: 'S',
            c: 'T',
            d: '.'
          }];
          this.ust = 'UST.';
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.animateUSTLogo();
          }
        }, {
          key: "animateUSTLogo",
          value: function animateUSTLogo() {
            var _this2 = this;

            setInterval(function () {
              var array = _this2.ust.split('');

              array.sort(function () {
                return Math.random() - 0.5;
              });
              var randomisedText = {
                a: array[0],
                b: array[1],
                c: array[2],
                d: array[3]
              };
              _this2.ustAnimation = randomisedText;
            }, 1000);
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)();
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 17,
        vars: 4,
        consts: [["role", "navigationBar", 1, "navigation-bar"], [1, "spacer"], [2, "font-weight", "bolder"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Creative Developer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ustAnimation.a);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ustAnimation.b);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ustAnimation.c);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ustAnimation.d);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */", "[_nghost-%COMP%] {\n      \n      font-size: 14px;\n      color: #333;\n      box-sizing: border-box;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "zyDg":
    /*!**************************************************!*\
      !*** ./src/app/portfolio/portfolio.component.ts ***!
      \**************************************************/

    /*! exports provided: PortfolioComponent */

    /***/
    function zyDg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
        return PortfolioComponent;
      });
      /* harmony import */


      var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! three */
      "Womt");
      /* harmony import */


      var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! three/examples/jsm/controls/OrbitControls */
      "RyHr");
      /* harmony import */


      var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! three/examples/jsm/loaders/GLTFLoader.js */
      "NK00");
      /* harmony import */


      var three_examples_jsm_loaders_DRACOLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! three/examples/jsm/loaders/DRACOLoader.js */
      "DKVj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_socket_socket_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/socket/socket-service.service */
      "cZ7/");

      var PortfolioComponent = /*#__PURE__*/function () {
        function PortfolioComponent(socketService) {
          _classCallCheck(this, PortfolioComponent);

          this.socketService = socketService;
          this.flag = false;
          this.models = [];
        }

        _createClass(PortfolioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            // Listen to events from socket-io server
            this.socketService.listen('test event').subscribe(function (data) {
              console.log(data);
            }); // Sending out my existense to server

            this.socketService.emit('send message', 'Hello every body'); // Server sending back all the user existence

            this.socketService.listen('sendtoall').subscribe(function (data) {// playJoiningSound();
            }); // Disconnection status

            this.socketService.listen('disconnectionstatus').subscribe(function (data) {
              playDisconnectedSound();
            }); //Canvas

            var canvas = document.querySelector('.webgl'); //Scene Initialisation  

            var scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
            var fog = new three__WEBPACK_IMPORTED_MODULE_0__["Fog"]('#262837', 1, 15); // scene.fog = fog
            // Sounds

            var userJoiningSound = new Audio('/assets/sounds/joined.mp3');

            var playJoiningSound = function playJoiningSound() {
              userJoiningSound.currentTime = 0;
              userJoiningSound.play();
            };

            var userDisconnectedSound = new Audio('/assets/sounds/disconnected.mp3');

            var playDisconnectedSound = function playDisconnectedSound() {
              userDisconnectedSound.currentTime = 0;
              userDisconnectedSound.play();
            }; // Texture Loader


            var textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"](); // Loaders and decoders

            var dracoLoader = new three_examples_jsm_loaders_DRACOLoader_js__WEBPACK_IMPORTED_MODULE_3__["DRACOLoader"]();
            dracoLoader.setDecoderPath('assets/decoders/draco/');
            var gltfLoader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__["GLTFLoader"]();
            gltfLoader.setDRACOLoader(dracoLoader); // Textures

            var bakedTexture = textureLoader.load('assets/models/2/baked.jpg');
            bakedTexture.flipY = false;
            bakedTexture.encoding = three__WEBPACK_IMPORTED_MODULE_0__["sRGBEncoding"]; //foootball

            var ballTexture = textureLoader.load('assets/models/2/football.jpg'); // Material
            //Baked Material

            var bakedMaterial = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
              map: bakedTexture,
              side: three__WEBPACK_IMPORTED_MODULE_0__["DoubleSide"]
            }); // Model

            gltfLoader.load('assets/models/2/model.glb', function (gltf) {
              var mergedMesh = gltf.scene.children.find(function (child) {
                return child.name === 'baked';
              });

              if (mergedMesh instanceof three__WEBPACK_IMPORTED_MODULE_0__["Mesh"]) {
                mergedMesh.material = bakedMaterial;
              }

              scene.add(gltf.scene);
              gltf.scene.receiveShadow = true;

              _this3.models.push(gltf.scene);
            });
            var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["SphereGeometry"](0.15, 32, 32);
            var material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
              map: ballTexture
            });
            var ball = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, material);
            scene.add(ball);
            ball.position.y = 0.15;
            ball.castShadow = true;
            ball.receiveShadow = true;
            var light = new three__WEBPACK_IMPORTED_MODULE_0__["AmbientLight"](0x404040); // soft white light

            scene.add(light);
            light.position.y = 2; // Font Loader

            var fontLoader = new three__WEBPACK_IMPORTED_MODULE_0__["FontLoader"]();
            fontLoader.load('assets/fonts/helvetiker_regular.typeface.json', function (font) {
              var textGeometry = new three__WEBPACK_IMPORTED_MODULE_0__["TextBufferGeometry"]('UST', {
                font: font,
                size: .5,
                height: 0.05,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5
              }); //Make the text center

              textGeometry.computeBoundingBox();
              textGeometry.center();
              var textMaterial = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
                color: 0xffffff
              });
              var text = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](textGeometry, textMaterial);
              text.rotation.y = Math.PI / 2;
              text.position.x = -3.60; // text.position.z = - 3

              text.position.y = 3.2; // scene.add(text)

              text.castShadow = true;
              text.receiveShadow = true;
            }); //Renderer Size

            var sizes = {
              width: innerWidth,
              height: innerHeight
            }; //Render Initialisation

            var renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]();
            document.body.appendChild(renderer.domElement);
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_0__["PCFSoftShadowMap"];
            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_0__["sRGBEncoding"];
            renderer.setClearColor('#ffffff'); //Camera Initialisation

            var camera = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](75, sizes.width / sizes.height, 0.1, 10000);
            camera.position.x = 0;
            camera.position.y = 5;
            camera.position.z = 12;
            camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 0));
            scene.add(camera); //Controls

            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__["OrbitControls"](camera, renderer.domElement);
            controls.enableDamping = true; //Resize Event

            window.addEventListener('resize', function () {
              // Update sizes
              sizes.width = window.innerWidth;
              sizes.height = window.innerHeight; //Update camera

              camera.aspect = sizes.width / sizes.height;
              camera.updateProjectionMatrix(); //Update renderer

              renderer.setSize(sizes.width, sizes.height);
              renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            }); // Clock

            var clock = new three__WEBPACK_IMPORTED_MODULE_0__["Clock"]();
            var oldELapsedTime = 0; //Animate

            var tick = function tick() {
              //Clock
              var elapsedTime = clock.getElapsedTime();
              var deltaTime = elapsedTime - oldELapsedTime;
              oldELapsedTime = elapsedTime;
              controls.update();

              if (_this3.models) {
                _this3.models.forEach(function (model) {
                  model.rotation.y += 0.002;
                });
              } //Rendering Section


              renderer.render(scene, camera);
              window.requestAnimationFrame(tick);
            };

            tick();
          }
        }]);

        return PortfolioComponent;
      }();

      PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) {
        return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_socket_socket_service_service__WEBPACK_IMPORTED_MODULE_5__["SocketServiceService"]));
      };

      PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: PortfolioComponent,
        selectors: [["app-portfolio"]],
        decls: 0,
        vars: 0,
        template: function PortfolioComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3J0Zm9saW8uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map