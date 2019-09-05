webpackHotUpdate(0,{

/***/ "./home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var nativescript_snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-snackbar/snackbar.js");
/* harmony import */ var nativescript_snackbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_snackbar__WEBPACK_IMPORTED_MODULE_3__);




var LANGUAGE_MAPPER = {
    English: 'en',
    Spanish: 'es'
};
var HomeComponent = /** @class */ (function () {
    function HomeComponent(appService, translate) {
        this.appService = appService;
        this.translate = translate;
        this.listPicker = ["English", "Spanish"];
        this.selectedListPickerIndex = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.setIndex = function (e) {
        var selectedIndex = e.object.selectedIndex;
        var snackbar = new nativescript_snackbar__WEBPACK_IMPORTED_MODULE_3__["SnackBar"]();
        this.appService.language = this.listPicker[selectedIndex];
        this.translate.setDefaultLang(LANGUAGE_MAPPER[this.listPicker[selectedIndex]]);
        this.translate.get('LANG_UPDATED').subscribe(function (val) {
            snackbar.simple(val, 'red', '#067ab4', 3, false);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __webpack_require__("./home/home.component.html"),
            styles: [__webpack_require__("./home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDTjtBQUNXO0FBQ047QUFFakQsSUFBTSxlQUFlLEdBQUc7SUFDcEIsT0FBTyxFQUFFLElBQUk7SUFDYixPQUFPLEVBQUUsSUFBSTtDQUNoQjtBQVFEO0lBTUksdUJBQ1ksVUFBc0IsRUFDdEIsU0FBMkI7UUFEM0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQU52QyxlQUFVLEdBQWtCLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELDRCQUF1QixHQUFXLENBQUMsQ0FBQztJQU1oQyxDQUFDO0lBRUwsZ0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsQ0FBQztRQUNOLElBQU0sYUFBYSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzdDLElBQU0sUUFBUSxHQUFHLElBQUksOERBQVEsRUFBRSxDQUFDO1FBRWhDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxhQUFHO1lBQzVDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXhCUSxhQUFhO1FBTnpCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUVoQiwyREFBb0M7O1NBRXZDLENBQUM7eUNBUTBCLHVEQUFVO1lBQ1gsb0VBQWdCO09BUjlCLGFBQWEsQ0EwQnpCO0lBQUQsb0JBQUM7Q0FBQTtBQTFCeUIiLCJmaWxlIjoiMC44NzgxZDFjMDQ2YWI4NTJmMDc1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gXCIuLi9hcHAuc2VydmljZVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgU25hY2tCYXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNuYWNrYmFyXCI7XG5cbmNvbnN0IExBTkdVQUdFX01BUFBFUiA9IHtcbiAgICBFbmdsaXNoOiAnZW4nLFxuICAgIFNwYW5pc2g6ICdlcydcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGxpc3RQaWNrZXI6IEFycmF5PHN0cmluZz4gPSBbXCJFbmdsaXNoXCIsIFwiU3BhbmlzaFwiXTtcbiAgICBzZWxlY3RlZExpc3RQaWNrZXJJbmRleDogbnVtYmVyID0gMDtcblxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYXBwU2VydmljZTogQXBwU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBzZXRJbmRleChlKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBlLm9iamVjdC5zZWxlY3RlZEluZGV4O1xuICAgICAgICBjb25zdCBzbmFja2JhciA9IG5ldyBTbmFja0JhcigpO1xuXG4gICAgICAgIHRoaXMuYXBwU2VydmljZS5sYW5ndWFnZSA9IHRoaXMubGlzdFBpY2tlcltzZWxlY3RlZEluZGV4XTtcbiAgICAgICAgdGhpcy50cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcoTEFOR1VBR0VfTUFQUEVSW3RoaXMubGlzdFBpY2tlcltzZWxlY3RlZEluZGV4XV0pO1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZS5nZXQoJ0xBTkdfVVBEQVRFRCcpLnN1YnNjcmliZSh2YWwgPT4ge1xuICAgICAgICAgICAgc25hY2tiYXIuc2ltcGxlKHZhbCwgJ3JlZCcsICcjMDY3YWI0JywgMywgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=