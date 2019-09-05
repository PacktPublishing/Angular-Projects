webpackHotUpdate("bundle",{

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
        this.language = "english";
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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ087QUFDYjtBQUVyQyxJQUFNLE9BQU8sR0FBRyxpQ0FBaUMsQ0FBQztBQUdsRDtJQUNJLG9CQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ3BDLGFBQVEsR0FBRyxTQUFTLENBQUM7SUFEbUIsQ0FBQztJQUl6QywyQkFBTSxHQUFOO1FBQ0YsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUNoQyxPQUFVLE9BQU8sUUFBSyxDQUFDO1NBQ3ZCO1FBRUQsT0FBVSxPQUFPLFFBQUssQ0FBQztJQUN4QixDQUFDO0lBRUUsNEJBQU8sR0FBUDtRQUFBLGlCQUtDO1FBSkcsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUMxQiwwREFBRyxDQUFDLFVBQUMsSUFBUyxJQUFLLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBekIsQ0FBeUIsQ0FBQyxDQUNoRCxDQUFDO0lBQ04sQ0FBQztJQWxCUSxVQUFVO1FBRHRCLGdFQUFVLEVBQUU7eUNBRWlCLCtEQUFVO09BRDNCLFVBQVUsQ0FtQnRCO0lBQUQsaUJBQUM7Q0FBQTtBQW5Cc0IiLCJmaWxlIjoiYnVuZGxlLjQ1OWQ3ODRlYmJlZDVhMmZhODVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly9kZW1vNzgzMTE1My5tb2NrYWJsZS5pbyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuICAgIGxhbmd1YWdlID0gXCJlbmdsaXNoXCI7XG4gICAgbmV3cztcblxuICAgIGdldFVybCgpIHtcblx0XHRpZiAodGhpcy5sYW5ndWFnZSA9PT0gJ0VuZ2xpc2gnKSB7XG5cdFx0XHRyZXR1cm4gYCR7QVBJX1VSTH0vZW5gO1xuXHRcdH1cblxuXHRcdHJldHVybiBgJHtBUElfVVJMfS9lc2A7XG5cdH1cblxuICAgIGdldE5ld3MoKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkucGlwZShcbiAgICAgICAgICAgIHRhcCgobmV3czogYW55KSA9PiB0aGlzLm5ld3MgPSBuZXdzLmFydGljbGVzKSxcbiAgICAgICAgKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==