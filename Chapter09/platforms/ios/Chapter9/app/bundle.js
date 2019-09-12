require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home/home.module": [
		"./home/home.module.ts",
		"vendor",
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./news/news.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./detail/detail.component.ts");




var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "detail/:id", component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"] },
    { path: "news", component: _news_news_component__WEBPACK_IMPORTED_MODULE_2__["NewsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        translate.setTranslation('en', {
            TITLE: 'Title',
            DESC: 'Description',
            CHOOSE_LANG: 'Choose your language',
            NEWS: 'News',
            NEXT: 'Next',
            LANG_UPDATED: 'Language Updated'
        });
        translate.setTranslation('es', {
            TITLE: 'Título',
            DESC: 'Descripción',
            CHOOSE_LANG: 'Elige tu idioma',
            NEWS: 'Noticias',
            NEXT: 'Siguiente',
            LANG_UPDATED: 'Idioma actualizado'
        });
        translate.setDefaultLang('en');
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "<page-router-outlet></page-router-outlet>"
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '-!../node_modules/css-loader/dist/cjs.js??ref--6-1!nativescript-theme-core/css/core.light.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), "");

// Module
exports.push([module.i, "\n", ""]);

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/nativescript.module");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./news/news.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./detail/detail.component.ts");










var nsNgCoreImport_Generated = __webpack_require__("@angular/core");
var NSLazyModulesLoader_Generated = /** @class */ (function () {
    function NSLazyModulesLoader_Generated(_compiler, config) {
        this._compiler = _compiler;
        this._config = config || {
            factoryPathPrefix: '',
            factoryPathSuffix: '.ngfactory',
        };
    }
    NSLazyModulesLoader_Generated.prototype.load = function (path) {
        var offlineMode = this._compiler instanceof nsNgCoreImport_Generated.Compiler;
        return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
    };
    NSLazyModulesLoader_Generated.prototype.loadAndCompile = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        if (exportName === undefined) {
            exportName = 'default';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(module)
            .then(function (module) { return module[exportName]; })
            .then(function (type) { return _this.checkNotEmpty(type, module, exportName); })
            .then(function (type) { return _this._compiler.compileModuleAsync(type); });
    };
    NSLazyModulesLoader_Generated.prototype.loadFactory = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        var factoryClassSuffix = 'NgFactory';
        if (exportName === undefined) {
            exportName = 'default';
            factoryClassSuffix = '';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix)
            .then(function (module) { return module[exportName + factoryClassSuffix]; })
            .then(function (factory) { return _this.checkNotEmpty(factory, module, exportName); });
    };
    NSLazyModulesLoader_Generated.prototype.checkNotEmpty = function (value, modulePath, exportName) {
        if (!value) {
            throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
        }
        return value;
    };
    NSLazyModulesLoader_Generated = __decorate([
        nsNgCoreImport_Generated.Injectable(),
        __param(1, nsNgCoreImport_Generated.Optional()),
        __metadata("design:paramtypes", [nsNgCoreImport_Generated.Compiler, nsNgCoreImport_Generated.SystemJsNgModuleLoaderConfig])
    ], NSLazyModulesLoader_Generated);
    return NSLazyModulesLoader_Generated;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot()
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_7__["NewsComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__["DetailComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ],
            providers: [
                _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
                { provide: nsNgCoreImport_Generated.NgModuleFactoryLoader, useClass: NSLazyModulesLoader_Generated }
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);



var API_URL = 'https://demo7831153.mockable.io';
var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.language = "English";
    }
    AppService.prototype.getUrl = function () {
        if (this.language === 'English') {
            return API_URL + "/en";
        }
        return API_URL + "/es";
    };
    AppService.prototype.getNews = function () {
        var _this = this;
        var url = this.getUrl();
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (news) { return _this.news = news.articles; }));
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./detail/detail.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\n\tvertical-align: center;\n\tfont-size: 20;\n\tmargin: 15;\n}\n\n.heading {\n\tfont-size: 15;\n}\n\nlabel {\n\tfont-size: 12px;\n\tpadding: 5px 10px;\n}"

/***/ }),

/***/ "./detail/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout class=\"main\" verticalAlignment=\"top\">\n\n    <Image row=\"0\" col=\"0\" height=\"300\" stretch=\"aspectFill\" class=\"card-img\" [src]=\"currentNews.urlToImage\"></Image>\n\n    <Label col=\"1\" class=\"tile\" [text]=\"'TITLE' | translate\" fontWeight=\"bold\" textWrap=\"true\"></Label>\n    <Label col=\"1\" class=\"description-text\" [text]=\"currentNews.title\" textWrap=\"true\"></Label>\n    <Label editable=\"false\" textWrap=\"true\" [text]=\"'DESC' | translate\" fontWeight=\"bold\">\n    </Label>\n    <Label editable=\"false\" class=\"description-value\" textWrap=\"true\" [text]=\"currentNews.description\">\n    </Label>\n    <Label editable=\"false\" textWrap=\"true\" [text]=\"currentNews.content\">\n    </Label>\n</StackLayout>"

/***/ }),

/***/ "./detail/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.service.ts");



var DetailComponent = /** @class */ (function () {
    function DetailComponent(route, appService) {
        this.route = route;
        this.appService = appService;
        this.currentNews = {};
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getNews(params.id);
        });
    };
    DetailComponent.prototype.getNews = function (id) {
        var data = this.appService.news;
        this.currentNews = data.find(function (item) { return id == item.source.id; });
    };
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Detail",
            template: __webpack_require__("./detail/detail.component.html"),
            styles: [__webpack_require__("./detail/detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-angular/platform");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        


var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./news/news.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n.main-layout {\n    margin-top: 0;\n    margin-bottom: -2;\n}\n\n.list-item {\n    margin-bottom: 2;\n    height: 25%;\n}\n\n.item-title {\n    background-color: rgba(0,0,0,0.4);\n    color: white;\n    vertical-align: bottom;\n    padding: 16;\n    font-size: 14;\n}\n\n.button {\n    border: 1px solid black;\n    background: gray;\n    height: 5%;\n    position: fixed;\n    top: 0;\n    right: 0;\n}"

/***/ }),

/***/ "./news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar [title]=\"'NEWS' | translate\" class=\"action-bar\">\n</ActionBar>\n<GridLayout>\n    <ListView [items]=\"data\">\n        <ng-template let-data=\"item\">\n            <GridLayout class=\"list-item\" [nsRouterLink]=\"['/detail', data.source.id]\">\n                <Image [src]=\"data.urlToImage\" class=\"image\" stretch=\"aspectFill\"></Image>\n                <Label [text]=\"data.title\" class=\"item-title\" textWrap=\"true\"></Label>\n            </GridLayout>\n        </ng-template>\n    </ListView>\n</GridLayout>"

/***/ }),

/***/ "./news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app.service.ts");


var NewsComponent = /** @class */ (function () {
    function NewsComponent(appService) {
        this.appService = appService;
        this.selectedListPickerIndex = 0;
    }
    NewsComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    NewsComponent.prototype.getData = function () {
        var _this = this;
        this.appService.getNews()
            .subscribe(function (response) {
            _this.data = response.articles;
        });
    };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "News",
            template: __webpack_require__("./news/news.component.html"),
            styles: [__webpack_require__("./news/news.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "@angular/common/http":
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/router":
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "nativescript-angular/common":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/common");

/***/ }),

/***/ "nativescript-angular/forms":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/forms");

/***/ }),

/***/ "nativescript-angular/nativescript.module":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/nativescript.module");

/***/ }),

/***/ "nativescript-angular/platform":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/platform");

/***/ }),

/***/ "nativescript-angular/router":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/router");

/***/ }),

/***/ "rxjs":
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vZGV0YWlsL2RldGFpbC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2RldGFpbC9kZXRhaWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZGV0YWlsL2RldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9uZXdzL25ld3MuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9uZXdzL25ld3MuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbmV3cy9uZXdzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb24vaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL29wZXJhdG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUM7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFDakI7QUFDTTtBQUU1RCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsK0JBQStCLEVBQUU7SUFDL0QsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSx3RUFBZSxFQUFFO0lBQ2xELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsa0VBQWEsRUFBRTtDQUM3QyxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1Qiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENB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b0IsdURBQVU7T0FQbkIsYUFBYSxDQW9CekI7SUFBRCxvQkFBQztDQUFBO0FBcEJ5Qjs7Ozs7Ozs7QUNUMUIsaUQ7Ozs7Ozs7QUNBQSwwQzs7Ozs7OztBQ0FBLDRDOzs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7QUNBQSx1RDs7Ozs7OztBQ0FBLHFFOzs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7QUNBQSx3RDs7Ozs7OztBQ0FBLGlDOzs7Ozs7O0FDQUEsMkM7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLGlFOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxvRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaG9tZS9ob21lLm1vZHVsZVwiOiBbXG5cdFx0XCIuL2hvbWUvaG9tZS5tb2R1bGUudHNcIixcblx0XHRcInZlbmRvclwiLFxuXHRcdDBcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdHZhciBpZHMgPSBtYXBbcmVxXTtcblx0aWYoIWlkcykge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoaWRzLnNsaWNlKDEpLm1hcChfX3dlYnBhY2tfcmVxdWlyZV9fLmUpKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBpZCA9IGlkc1swXTtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eSByZWN1cnNpdmVcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOZXdzQ29tcG9uZW50IH0gZnJvbSBcIi4vbmV3cy9uZXdzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vZGV0YWlsL2RldGFpbC5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9ob21lXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwiaG9tZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9ob21lL2hvbWUubW9kdWxlI0hvbWVNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJkZXRhaWwvOmlkXCIsIGNvbXBvbmVudDogRGV0YWlsQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcIm5ld3NcIiwgY29tcG9uZW50OiBOZXdzQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICB0ZW1wbGF0ZTogYDxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+YFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcbiAgICB0cmFuc2xhdGUuc2V0VHJhbnNsYXRpb24oJ2VuJywge1xuICAgICAgVElUTEU6ICdUaXRsZScsXG4gICAgICBERVNDOiAnRGVzY3JpcHRpb24nLFxuICAgICAgQ0hPT1NFX0xBTkc6ICdDaG9vc2UgeW91ciBsYW5ndWFnZScsXG4gICAgICBORVdTOiAnTmV3cycsXG4gICAgICBORVhUOiAnTmV4dCcsXG4gICAgICBMQU5HX1VQREFURUQ6ICdMYW5ndWFnZSBVcGRhdGVkJ1xuICAgIH0pO1xuXG4gICAgdHJhbnNsYXRlLnNldFRyYW5zbGF0aW9uKCdlcycsIHtcbiAgICAgIFRJVExFOiAnVMOtdHVsbycsXG4gICAgICBERVNDOiAnRGVzY3JpcGNpw7NuJyxcbiAgICAgIENIT09TRV9MQU5HOiAnRWxpZ2UgdHUgaWRpb21hJyxcbiAgICAgIE5FV1M6ICdOb3RpY2lhcycsXG4gICAgICBORVhUOiAnU2lndWllbnRlJyxcbiAgICAgIExBTkdfVVBEQVRFRDogJ0lkaW9tYSBhY3R1YWxpemFkbydcbiAgICB9KTtcblxuICAgIHRyYW5zbGF0ZS5zZXREZWZhdWx0TGFuZygnZW4nKTtcbiAgfVxufVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiksIFwiXCIpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblwiLCBcIlwiXSk7XG5cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tIFwiLi9hcHAuc2VydmljZVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZXdzQ29tcG9uZW50IH0gZnJvbSBcIi4vbmV3cy9uZXdzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vZGV0YWlsL2RldGFpbC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICAgICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3QoKVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTmV3c0NvbXBvbmVudCxcbiAgICAgICAgRGV0YWlsQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBBcHBTZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly9kZW1vNzgzMTE1My5tb2NrYWJsZS5pbyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuICAgIGxhbmd1YWdlID0gXCJFbmdsaXNoXCI7XG4gICAgbmV3cztcblxuICAgIGdldFVybCgpIHtcblx0XHRpZiAodGhpcy5sYW5ndWFnZSA9PT0gJ0VuZ2xpc2gnKSB7XG5cdFx0XHRyZXR1cm4gYCR7QVBJX1VSTH0vZW5gO1xuXHRcdH1cblxuXHRcdHJldHVybiBgJHtBUElfVVJMfS9lc2A7XG5cdH1cblxuICAgIGdldE5ld3MoKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkucGlwZShcbiAgICAgICAgICAgIHRhcCgobmV3czogYW55KSA9PiB0aGlzLm5ld3MgPSBuZXdzLmFydGljbGVzKSxcbiAgICAgICAgKTtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIi5ob21lLXBhbmVse1xcblxcdHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAyMDtcXG5cXHRtYXJnaW46IDE1O1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuXFx0Zm9udC1zaXplOiAxNTtcXG59XFxuXFxubGFiZWwge1xcblxcdGZvbnQtc2l6ZTogMTJweDtcXG5cXHRwYWRkaW5nOiA1cHggMTBweDtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJtYWluXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwidG9wXFxcIj5cXG5cXG4gICAgPEltYWdlIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiBoZWlnaHQ9XFxcIjMwMFxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCIgY2xhc3M9XFxcImNhcmQtaW1nXFxcIiBbc3JjXT1cXFwiY3VycmVudE5ld3MudXJsVG9JbWFnZVxcXCI+PC9JbWFnZT5cXG5cXG4gICAgPExhYmVsIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRpbGVcXFwiIFt0ZXh0XT1cXFwiJ1RJVExFJyB8IHRyYW5zbGF0ZVxcXCIgZm9udFdlaWdodD1cXFwiYm9sZFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICAgIDxMYWJlbCBjb2w9XFxcIjFcXFwiIGNsYXNzPVxcXCJkZXNjcmlwdGlvbi10ZXh0XFxcIiBbdGV4dF09XFxcImN1cnJlbnROZXdzLnRpdGxlXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gICAgPExhYmVsIGVkaXRhYmxlPVxcXCJmYWxzZVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwiJ0RFU0MnIHwgdHJhbnNsYXRlXFxcIiBmb250V2VpZ2h0PVxcXCJib2xkXFxcIj5cXG4gICAgPC9MYWJlbD5cXG4gICAgPExhYmVsIGVkaXRhYmxlPVxcXCJmYWxzZVxcXCIgY2xhc3M9XFxcImRlc2NyaXB0aW9uLXZhbHVlXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJjdXJyZW50TmV3cy5kZXNjcmlwdGlvblxcXCI+XFxuICAgIDwvTGFiZWw+XFxuICAgIDxMYWJlbCBlZGl0YWJsZT1cXFwiZmFsc2VcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcImN1cnJlbnROZXdzLmNvbnRlbnRcXFwiPlxcbiAgICA8L0xhYmVsPlxcbjwvU3RhY2tMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuLi9hcHAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJEZXRhaWxcIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbJy4vZGV0YWlsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGN1cnJlbnROZXdzID0ge307XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG5cdFx0cHJpdmF0ZSBhcHBTZXJ2aWNlOiBBcHBTZXJ2aWNlXG5cdCkge1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG5cdFx0XHR0aGlzLmdldE5ld3MocGFyYW1zLmlkKTtcblx0XHR9KTtcblx0fVxuXG5cdGdldE5ld3MoaWQpIHtcblx0XHRjb25zdCBkYXRhID0gdGhpcy5hcHBTZXJ2aWNlLm5ld3M7XG5cdFx0dGhpcy5jdXJyZW50TmV3cyA9IGRhdGEuZmluZChpdGVtID0+IGlkID09IGl0ZW0uc291cmNlLmlkKTtcblx0fVxufSIsImltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwLm1vZHVsZSc7XG5pbXBvcnQge2VuYWJsZVByb2RNb2RlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmVuYWJsZVByb2RNb2RlKCk7XG5cbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcbi5tYWluLWxheW91dCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IC0yO1xcbn1cXG5cXG4ubGlzdC1pdGVtIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjtcXG4gICAgaGVpZ2h0OiAyNSU7XFxufVxcblxcbi5pdGVtLXRpdGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgIHBhZGRpbmc6IDE2O1xcbiAgICBmb250LXNpemU6IDE0O1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQ6IGdyYXk7XFxuICAgIGhlaWdodDogNSU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciBbdGl0bGVdPVxcXCInTkVXUycgfCB0cmFuc2xhdGVcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXG48L0FjdGlvbkJhcj5cXG48R3JpZExheW91dD5cXG4gICAgPExpc3RWaWV3IFtpdGVtc109XFxcImRhdGFcXFwiPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1kYXRhPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8R3JpZExheW91dCBjbGFzcz1cXFwibGlzdC1pdGVtXFxcIiBbbnNSb3V0ZXJMaW5rXT1cXFwiWycvZGV0YWlsJywgZGF0YS5zb3VyY2UuaWRdXFxcIj5cXG4gICAgICAgICAgICAgICAgPEltYWdlIFtzcmNdPVxcXCJkYXRhLnVybFRvSW1hZ2VcXFwiIGNsYXNzPVxcXCJpbWFnZVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiZGF0YS50aXRsZVxcXCIgY2xhc3M9XFxcIml0ZW0tdGl0bGVcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgIDwvTGlzdFZpZXc+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gXCIuLi9hcHAuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiTmV3c1wiLFxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogXCIuL25ld3MuY29tcG9uZW50Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbJy4vbmV3cy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmV3c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0c2VsZWN0ZWRMaXN0UGlja2VySW5kZXg6IG51bWJlciA9IDA7XG5cblx0cHVibGljIGRhdGE7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBhcHBTZXJ2aWNlOiBBcHBTZXJ2aWNlXG5cdCkgeyB9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5nZXREYXRhKCk7XG5cdH1cblxuXHRnZXREYXRhKCkge1xuXHRcdHRoaXMuYXBwU2VydmljZS5nZXROZXdzKClcblx0XHRcdC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcblx0XHRcdFx0dGhpcy5kYXRhID0gcmVzcG9uc2UuYXJ0aWNsZXM7XG5cdFx0XHR9KTtcblx0fVxufVxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb24vaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL29wZXJhdG9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9