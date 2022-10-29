(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["vendor"],{

/***/ "../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateModule", function() { return TranslateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateLoader", function() { return TranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateFakeLoader", function() { return TranslateFakeLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_STORE", function() { return USE_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_DEFAULT_LANG", function() { return USE_DEFAULT_LANG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingTranslationHandler", function() { return MissingTranslationHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeMissingTranslationHandler", function() { return FakeMissingTranslationHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateParser", function() { return TranslateParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateDefaultParser", function() { return TranslateDefaultParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateCompiler", function() { return TranslateCompiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateFakeCompiler", function() { return TranslateFakeCompiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateDirective", function() { return TranslateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return TranslatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateStore", function() { return TranslateStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
TranslateLoader = /** @class */ (function () {
    function TranslateLoader() {
    }
    return TranslateLoader;
}());
/**
 * This loader is just a placeholder that does nothing, in case you don't need a loader at all
 */
var TranslateFakeLoader = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TranslateFakeLoader, _super);
    function TranslateFakeLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    TranslateFakeLoader.prototype.getTranslation = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
    };
    TranslateFakeLoader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return TranslateFakeLoader;
}(TranslateLoader));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
MissingTranslationHandler = /** @class */ (function () {
    function MissingTranslationHandler() {
    }
    return MissingTranslationHandler;
}());
/**
 * This handler is just a placeholder that does nothing, in case you don't need a missing translation handler at all
 */
var FakeMissingTranslationHandler = /** @class */ (function () {
    function FakeMissingTranslationHandler() {
    }
    /**
     * @param {?} params
     * @return {?}
     */
    FakeMissingTranslationHandler.prototype.handle = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        return params.key;
    };
    FakeMissingTranslationHandler.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return FakeMissingTranslationHandler;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
TranslateCompiler = /** @class */ (function () {
    function TranslateCompiler() {
    }
    return TranslateCompiler;
}());
/**
 * This compiler is just a placeholder that does nothing, in case you don't need a compiler at all
 */
var TranslateFakeCompiler = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TranslateFakeCompiler, _super);
    function TranslateFakeCompiler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} value
     * @param {?} lang
     * @return {?}
     */
    TranslateFakeCompiler.prototype.compile = /**
     * @param {?} value
     * @param {?} lang
     * @return {?}
     */
    function (value, lang) {
        return value;
    };
    /**
     * @param {?} translations
     * @param {?} lang
     * @return {?}
     */
    TranslateFakeCompiler.prototype.compileTranslations = /**
     * @param {?} translations
     * @param {?} lang
     * @return {?}
     */
    function (translations, lang) {
        return translations;
    };
    TranslateFakeCompiler.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return TranslateFakeCompiler;
}(TranslateCompiler));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/* tslint:disable */
/**
 * Determines if two objects or two values are equivalent.
 *
 * Two objects or values are considered equivalent if at least one of the following is true:
 *
 * * Both objects or values pass `===` comparison.
 * * Both objects or values are of the same type and all of their properties are equal by
 *   comparing them with `equals`.
 *
 * @param {?} o1 Object or value to compare.
 * @param {?} o2 Object or value to compare.
 * @return {?} true if arguments are equal.
 */
function equals(o1, o2) {
    if (o1 === o2)
        return true;
    if (o1 === null || o2 === null)
        return false;
    if (o1 !== o1 && o2 !== o2)
        return true; // NaN === NaN
    // NaN === NaN
    /** @type {?} */
    var t1 = typeof o1;
    /** @type {?} */
    var t2 = typeof o2;
    /** @type {?} */
    var length;
    /** @type {?} */
    var key;
    /** @type {?} */
    var keySet;
    if (t1 == t2 && t1 == 'object') {
        if (Array.isArray(o1)) {
            if (!Array.isArray(o2))
                return false;
            if ((length = o1.length) == o2.length) {
                for (key = 0; key < length; key++) {
                    if (!equals(o1[key], o2[key]))
                        return false;
                }
                return true;
            }
        }
        else {
            if (Array.isArray(o2)) {
                return false;
            }
            keySet = Object.create(null);
            for (key in o1) {
                if (!equals(o1[key], o2[key])) {
                    return false;
                }
                keySet[key] = true;
            }
            for (key in o2) {
                if (!(key in keySet) && typeof o2[key] !== 'undefined') {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}
/* tslint:enable */
/**
 * @param {?} value
 * @return {?}
 */
function isDefined(value) {
    return typeof value !== 'undefined' && value !== null;
}
/**
 * @param {?} item
 * @return {?}
 */
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
/**
 * @param {?} target
 * @param {?} source
 * @return {?}
 */
function mergeDeep(target, source) {
    /** @type {?} */
    var output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(function (key) {
            var _a, _b;
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, (_a = {}, _a[key] = source[key], _a));
                }
                else {
                    output[key] = mergeDeep(target[key], source[key]);
                }
            }
            else {
                Object.assign(output, (_b = {}, _b[key] = source[key], _b));
            }
        });
    }
    return output;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
TranslateParser = /** @class */ (function () {
    function TranslateParser() {
    }
    return TranslateParser;
}());
var TranslateDefaultParser = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TranslateDefaultParser, _super);
    function TranslateDefaultParser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
        return _this;
    }
    /**
     * @param {?} expr
     * @param {?=} params
     * @return {?}
     */
    TranslateDefaultParser.prototype.interpolate = /**
     * @param {?} expr
     * @param {?=} params
     * @return {?}
     */
    function (expr, params) {
        /** @type {?} */
        var result;
        if (typeof expr === 'string') {
            result = this.interpolateString(expr, params);
        }
        else if (typeof expr === 'function') {
            result = this.interpolateFunction(expr, params);
        }
        else {
            // this should not happen, but an unrelated TranslateService test depends on it
            result = (/** @type {?} */ (expr));
        }
        return result;
    };
    /**
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    TranslateDefaultParser.prototype.getValue = /**
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    function (target, key) {
        /** @type {?} */
        var keys = key.split('.');
        key = '';
        do {
            key += keys.shift();
            if (isDefined(target) && isDefined(target[key]) && (typeof target[key] === 'object' || !keys.length)) {
                target = target[key];
                key = '';
            }
            else if (!keys.length) {
                target = undefined;
            }
            else {
                key += '.';
            }
        } while (keys.length);
        return target;
    };
    /**
     * @param {?} fn
     * @param {?=} params
     * @return {?}
     */
    TranslateDefaultParser.prototype.interpolateFunction = /**
     * @param {?} fn
     * @param {?=} params
     * @return {?}
     */
    function (fn, params) {
        return fn(params);
    };
    /**
     * @param {?} expr
     * @param {?=} params
     * @return {?}
     */
    TranslateDefaultParser.prototype.interpolateString = /**
     * @param {?} expr
     * @param {?=} params
     * @return {?}
     */
    function (expr, params) {
        var _this = this;
        if (!params) {
            return expr;
        }
        return expr.replace(this.templateMatcher, function (substring, b) {
            /** @type {?} */
            var r = _this.getValue(params, b);
            return isDefined(r) ? r : substring;
        });
    };
    TranslateDefaultParser.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return TranslateDefaultParser;
}(TranslateParser));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TranslateStore = /** @class */ (function () {
    function TranslateStore() {
        /**
         * The lang currently used
         */
        this.currentLang = this.defaultLang;
        /**
         * a list of translations per lang
         */
        this.translations = {};
        /**
         * an array of langs
         */
        this.langs = [];
        /**
         * An EventEmitter to listen to translation change events
         * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
         *     // do something
         * });
         */
        this.onTranslationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
         *     // do something
         * });
         */
        this.onLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * An EventEmitter to listen to default lang change events
         * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
         *     // do something
         * });
         */
        this.onDefaultLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    return TranslateStore;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var USE_STORE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('USE_STORE');
/** @type {?} */
var USE_DEFAULT_LANG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('USE_DEFAULT_LANG');
var TranslateService = /** @class */ (function () {
    /**
     *
     * @param store an instance of the store (that is supposed to be unique)
     * @param currentLoader An instance of the loader currently used
     * @param compiler An instance of the compiler currently used
     * @param parser An instance of the parser currently used
     * @param missingTranslationHandler A handler for missing translations.
     * @param isolate whether this service should use the store or not
     * @param useDefaultLang whether we should use default language translation when current language translation is missing.
     */
    function TranslateService(store, currentLoader, compiler, parser, missingTranslationHandler, useDefaultLang, isolate) {
        if (useDefaultLang === void 0) { useDefaultLang = true; }
        if (isolate === void 0) { isolate = false; }
        this.store = store;
        this.currentLoader = currentLoader;
        this.compiler = compiler;
        this.parser = parser;
        this.missingTranslationHandler = missingTranslationHandler;
        this.useDefaultLang = useDefaultLang;
        this.isolate = isolate;
        this.pending = false;
        this._onTranslationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._onLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._onDefaultLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._langs = [];
        this._translations = {};
        this._translationRequests = {};
    }
    Object.defineProperty(TranslateService.prototype, "onTranslationChange", {
        /**
         * An EventEmitter to listen to translation change events
         * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
           *     // do something
           * });
         */
        get: /**
         * An EventEmitter to listen to translation change events
         * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
         *     // do something
         * });
         * @return {?}
         */
        function () {
            return this.isolate ? this._onTranslationChange : this.store.onTranslationChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "onLangChange", {
        /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
           *     // do something
           * });
         */
        get: /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
         *     // do something
         * });
         * @return {?}
         */
        function () {
            return this.isolate ? this._onLangChange : this.store.onLangChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "onDefaultLangChange", {
        /**
         * An EventEmitter to listen to default lang change events
         * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
           *     // do something
           * });
         */
        get: /**
         * An EventEmitter to listen to default lang change events
         * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
         *     // do something
         * });
         * @return {?}
         */
        function () {
            return this.isolate ? this._onDefaultLangChange : this.store.onDefaultLangChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "defaultLang", {
        /**
         * The default lang to fallback when translations are missing on the current lang
         */
        get: /**
         * The default lang to fallback when translations are missing on the current lang
         * @return {?}
         */
        function () {
            return this.isolate ? this._defaultLang : this.store.defaultLang;
        },
        set: /**
         * @param {?} defaultLang
         * @return {?}
         */
        function (defaultLang) {
            if (this.isolate) {
                this._defaultLang = defaultLang;
            }
            else {
                this.store.defaultLang = defaultLang;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "currentLang", {
        /**
         * The lang currently used
         */
        get: /**
         * The lang currently used
         * @return {?}
         */
        function () {
            return this.isolate ? this._currentLang : this.store.currentLang;
        },
        set: /**
         * @param {?} currentLang
         * @return {?}
         */
        function (currentLang) {
            if (this.isolate) {
                this._currentLang = currentLang;
            }
            else {
                this.store.currentLang = currentLang;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "langs", {
        /**
         * an array of langs
         */
        get: /**
         * an array of langs
         * @return {?}
         */
        function () {
            return this.isolate ? this._langs : this.store.langs;
        },
        set: /**
         * @param {?} langs
         * @return {?}
         */
        function (langs) {
            if (this.isolate) {
                this._langs = langs;
            }
            else {
                this.store.langs = langs;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "translations", {
        /**
         * a list of translations per lang
         */
        get: /**
         * a list of translations per lang
         * @return {?}
         */
        function () {
            return this.isolate ? this._translations : this.store.translations;
        },
        set: /**
         * @param {?} translations
         * @return {?}
         */
        function (translations) {
            if (this.isolate) {
                this._translations = translations;
            }
            else {
                this.store.translations = translations;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the default language to use as a fallback
     */
    /**
     * Sets the default language to use as a fallback
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.setDefaultLang = /**
     * Sets the default language to use as a fallback
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        var _this = this;
        if (lang === this.defaultLang) {
            return;
        }
        /** @type {?} */
        var pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the defaultLang immediately
            if (!this.defaultLang) {
                this.defaultLang = lang;
            }
            pending.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
                .subscribe(function (res) {
                _this.changeDefaultLang(lang);
            });
        }
        else { // we already have this language
            this.changeDefaultLang(lang);
        }
    };
    /**
     * Gets the default language used
     */
    /**
     * Gets the default language used
     * @return {?}
     */
    TranslateService.prototype.getDefaultLang = /**
     * Gets the default language used
     * @return {?}
     */
    function () {
        return this.defaultLang;
    };
    /**
     * Changes the lang currently used
     */
    /**
     * Changes the lang currently used
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.use = /**
     * Changes the lang currently used
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        var _this = this;
        // don't change the language if the language given is already selected
        if (lang === this.currentLang) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.translations[lang]);
        }
        /** @type {?} */
        var pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the currentLang immediately
            if (!this.currentLang) {
                this.currentLang = lang;
            }
            pending.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
                .subscribe(function (res) {
                _this.changeLang(lang);
            });
            return pending;
        }
        else { // we have this language, return an Observable
            this.changeLang(lang);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.translations[lang]);
        }
    };
    /**
     * Retrieves the given translations
     */
    /**
     * Retrieves the given translations
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.retrieveTranslations = /**
     * Retrieves the given translations
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        /** @type {?} */
        var pending;
        // if this language is unavailable, ask for it
        if (typeof this.translations[lang] === "undefined") {
            this._translationRequests[lang] = this._translationRequests[lang] || this.getTranslation(lang);
            pending = this._translationRequests[lang];
        }
        return pending;
    };
    /**
     * Gets an object of translations for a given language with the current loader
     * and passes it through the compiler
     */
    /**
     * Gets an object of translations for a given language with the current loader
     * and passes it through the compiler
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.getTranslation = /**
     * Gets an object of translations for a given language with the current loader
     * and passes it through the compiler
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        var _this = this;
        this.pending = true;
        /** @type {?} */
        var loadingTranslations = this.currentLoader.getTranslation(lang).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        this.loadingTranslations = loadingTranslations.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.compiler.compileTranslations(res, lang); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        this.loadingTranslations
            .subscribe(function (res) {
            _this.translations[lang] = res;
            _this.updateLangs();
            _this.pending = false;
        }, function (err) {
            _this.pending = false;
        });
        return loadingTranslations;
    };
    /**
     * Manually sets an object of translations for a given language
     * after passing it through the compiler
     */
    /**
     * Manually sets an object of translations for a given language
     * after passing it through the compiler
     * @param {?} lang
     * @param {?} translations
     * @param {?=} shouldMerge
     * @return {?}
     */
    TranslateService.prototype.setTranslation = /**
     * Manually sets an object of translations for a given language
     * after passing it through the compiler
     * @param {?} lang
     * @param {?} translations
     * @param {?=} shouldMerge
     * @return {?}
     */
    function (lang, translations, shouldMerge) {
        if (shouldMerge === void 0) { shouldMerge = false; }
        translations = this.compiler.compileTranslations(translations, lang);
        if (shouldMerge && this.translations[lang]) {
            this.translations[lang] = mergeDeep(this.translations[lang], translations);
        }
        else {
            this.translations[lang] = translations;
        }
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Returns an array of currently available langs
     */
    /**
     * Returns an array of currently available langs
     * @return {?}
     */
    TranslateService.prototype.getLangs = /**
     * Returns an array of currently available langs
     * @return {?}
     */
    function () {
        return this.langs;
    };
    /**
     * Add available langs
     */
    /**
     * Add available langs
     * @param {?} langs
     * @return {?}
     */
    TranslateService.prototype.addLangs = /**
     * Add available langs
     * @param {?} langs
     * @return {?}
     */
    function (langs) {
        var _this = this;
        langs.forEach(function (lang) {
            if (_this.langs.indexOf(lang) === -1) {
                _this.langs.push(lang);
            }
        });
    };
    /**
     * Update the list of available langs
     */
    /**
     * Update the list of available langs
     * @return {?}
     */
    TranslateService.prototype.updateLangs = /**
     * Update the list of available langs
     * @return {?}
     */
    function () {
        this.addLangs(Object.keys(this.translations));
    };
    /**
     * Returns the parsed result of the translations
     */
    /**
     * Returns the parsed result of the translations
     * @param {?} translations
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?}
     */
    TranslateService.prototype.getParsedResult = /**
     * Returns the parsed result of the translations
     * @param {?} translations
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?}
     */
    function (translations, key, interpolateParams) {
        var e_1, _a, e_2, _b;
        /** @type {?} */
        var res;
        if (key instanceof Array) {
            /** @type {?} */
            var result = {};
            /** @type {?} */
            var observables = false;
            try {
                for (var key_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(key), key_1_1 = key_1.next(); !key_1_1.done; key_1_1 = key_1.next()) {
                    var k = key_1_1.value;
                    result[k] = this.getParsedResult(translations, k, interpolateParams);
                    if (typeof result[k].subscribe === "function") {
                        observables = true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (key_1_1 && !key_1_1.done && (_a = key_1.return)) _a.call(key_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (observables) {
                /** @type {?} */
                var mergedObs = void 0;
                try {
                    for (var key_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(key), key_2_1 = key_2.next(); !key_2_1.done; key_2_1 = key_2.next()) {
                        var k = key_2_1.value;
                        /** @type {?} */
                        var obs = typeof result[k].subscribe === "function" ? result[k] : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])((/** @type {?} */ (result[k])));
                        if (typeof mergedObs === "undefined") {
                            mergedObs = obs;
                        }
                        else {
                            mergedObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(mergedObs, obs);
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (key_2_1 && !key_2_1.done && (_b = key_2.return)) _b.call(key_2);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                return mergedObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["toArray"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (arr) {
                    /** @type {?} */
                    var obj = {};
                    arr.forEach(function (value, index) {
                        obj[key[index]] = value;
                    });
                    return obj;
                }));
            }
            return result;
        }
        if (translations) {
            res = this.parser.interpolate(this.parser.getValue(translations, key), interpolateParams);
        }
        if (typeof res === "undefined" && this.defaultLang && this.defaultLang !== this.currentLang && this.useDefaultLang) {
            res = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], key), interpolateParams);
        }
        if (typeof res === "undefined") {
            /** @type {?} */
            var params = { key: key, translateService: this };
            if (typeof interpolateParams !== 'undefined') {
                params.interpolateParams = interpolateParams;
            }
            res = this.missingTranslationHandler.handle(params);
        }
        return typeof res !== "undefined" ? res : key;
    };
    /**
     * Gets the translated value of a key (or an array of keys)
     * @returns the translated key, or an object of translated keys
     */
    /**
     * Gets the translated value of a key (or an array of keys)
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?} the translated key, or an object of translated keys
     */
    TranslateService.prototype.get = /**
     * Gets the translated value of a key (or an array of keys)
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?} the translated key, or an object of translated keys
     */
    function (key, interpolateParams) {
        var _this = this;
        if (!isDefined(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        // check if we are loading a new translation to use
        if (this.pending) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                /** @type {?} */
                var onComplete = function (res) {
                    observer.next(res);
                    observer.complete();
                };
                /** @type {?} */
                var onError = function (err) {
                    observer.error(err);
                };
                _this.loadingTranslations.subscribe(function (res) {
                    res = _this.getParsedResult(res, key, interpolateParams);
                    if (typeof res.subscribe === "function") {
                        res.subscribe(onComplete, onError);
                    }
                    else {
                        onComplete(res);
                    }
                }, onError);
            });
        }
        else {
            /** @type {?} */
            var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
            if (typeof res.subscribe === "function") {
                return res;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(res);
            }
        }
    };
    /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the language changes.
     * @returns A stream of the translated key, or an object of translated keys
     */
    /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the language changes.
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?} A stream of the translated key, or an object of translated keys
     */
    TranslateService.prototype.stream = /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the language changes.
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?} A stream of the translated key, or an object of translated keys
     */
    function (key, interpolateParams) {
        var _this = this;
        if (!isDefined(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(this.get(key, interpolateParams), this.onLangChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (event) {
            /** @type {?} */
            var res = _this.getParsedResult(event.translations, key, interpolateParams);
            if (typeof res.subscribe === "function") {
                return res;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(res);
            }
        })));
    };
    /**
     * Returns a translation instantly from the internal state of loaded translation.
     * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
     */
    /**
     * Returns a translation instantly from the internal state of loaded translation.
     * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?}
     */
    TranslateService.prototype.instant = /**
     * Returns a translation instantly from the internal state of loaded translation.
     * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?}
     */
    function (key, interpolateParams) {
        if (!isDefined(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        /** @type {?} */
        var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
        if (typeof res.subscribe !== "undefined") {
            if (key instanceof Array) {
                /** @type {?} */
                var obj_1 = {};
                key.forEach(function (value, index) {
                    obj_1[key[index]] = key[index];
                });
                return obj_1;
            }
            return key;
        }
        else {
            return res;
        }
    };
    /**
     * Sets the translated value of a key, after compiling it
     */
    /**
     * Sets the translated value of a key, after compiling it
     * @param {?} key
     * @param {?} value
     * @param {?=} lang
     * @return {?}
     */
    TranslateService.prototype.set = /**
     * Sets the translated value of a key, after compiling it
     * @param {?} key
     * @param {?} value
     * @param {?=} lang
     * @return {?}
     */
    function (key, value, lang) {
        if (lang === void 0) { lang = this.currentLang; }
        this.translations[lang][key] = this.compiler.compile(value, lang);
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Changes the current lang
     */
    /**
     * Changes the current lang
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.changeLang = /**
     * Changes the current lang
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        this.currentLang = lang;
        this.onLangChange.emit({ lang: lang, translations: this.translations[lang] });
        // if there is no default lang, use the one that we just set
        if (!this.defaultLang) {
            this.changeDefaultLang(lang);
        }
    };
    /**
     * Changes the default lang
     */
    /**
     * Changes the default lang
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.changeDefaultLang = /**
     * Changes the default lang
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        this.defaultLang = lang;
        this.onDefaultLangChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Allows to reload the lang file from the file
     */
    /**
     * Allows to reload the lang file from the file
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.reloadLang = /**
     * Allows to reload the lang file from the file
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        this.resetLang(lang);
        return this.getTranslation(lang);
    };
    /**
     * Deletes inner translation
     */
    /**
     * Deletes inner translation
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.resetLang = /**
     * Deletes inner translation
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        this._translationRequests[lang] = undefined;
        this.translations[lang] = undefined;
    };
    /**
     * Returns the language code name from the browser, e.g. "de"
     */
    /**
     * Returns the language code name from the browser, e.g. "de"
     * @return {?}
     */
    TranslateService.prototype.getBrowserLang = /**
     * Returns the language code name from the browser, e.g. "de"
     * @return {?}
     */
    function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        /** @type {?} */
        var browserLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserLang = browserLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        if (browserLang.indexOf('-') !== -1) {
            browserLang = browserLang.split('-')[0];
        }
        if (browserLang.indexOf('_') !== -1) {
            browserLang = browserLang.split('_')[0];
        }
        return browserLang;
    };
    /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     */
    /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     * @return {?}
     */
    TranslateService.prototype.getBrowserCultureLang = /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     * @return {?}
     */
    function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        /** @type {?} */
        var browserCultureLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserCultureLang = browserCultureLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        return browserCultureLang;
    };
    TranslateService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    /** @nocollapse */
    TranslateService.ctorParameters = function () { return [
        { type: TranslateStore },
        { type: TranslateLoader },
        { type: TranslateCompiler },
        { type: TranslateParser },
        { type: MissingTranslationHandler },
        { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [USE_DEFAULT_LANG,] }] },
        { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [USE_STORE,] }] }
    ]; };
    return TranslateService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TranslateDirective = /** @class */ (function () {
    function TranslateDirective(translateService, element, _ref) {
        var _this = this;
        this.translateService = translateService;
        this.element = element;
        this._ref = _ref;
        // subscribe to onTranslationChange event, in case the translations of the current lang change
        if (!this.onTranslationChangeSub) {
            this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe(function (event) {
                if (event.lang === _this.translateService.currentLang) {
                    _this.checkNodes(true, event.translations);
                }
            });
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChangeSub) {
            this.onLangChangeSub = this.translateService.onLangChange.subscribe(function (event) {
                _this.checkNodes(true, event.translations);
            });
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub = this.translateService.onDefaultLangChange.subscribe(function (event) {
                _this.checkNodes(true);
            });
        }
    }
    Object.defineProperty(TranslateDirective.prototype, "translate", {
        set: /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (key) {
                this.key = key;
                this.checkNodes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateDirective.prototype, "translateParams", {
        set: /**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            if (!equals(this.currentParams, params)) {
                this.currentParams = params;
                this.checkNodes(true);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TranslateDirective.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this.checkNodes();
    };
    /**
     * @param {?=} forceUpdate
     * @param {?=} translations
     * @return {?}
     */
    TranslateDirective.prototype.checkNodes = /**
     * @param {?=} forceUpdate
     * @param {?=} translations
     * @return {?}
     */
    function (forceUpdate, translations) {
        if (forceUpdate === void 0) { forceUpdate = false; }
        /** @type {?} */
        var nodes = this.element.nativeElement.childNodes;
        // if the element is empty
        if (!nodes.length) {
            // we add the key as content
            this.setContent(this.element.nativeElement, this.key);
            nodes = this.element.nativeElement.childNodes;
        }
        for (var i = 0; i < nodes.length; ++i) {
            /** @type {?} */
            var node = nodes[i];
            if (node.nodeType === 3) { // node type 3 is a text node
                // node type 3 is a text node
                /** @type {?} */
                var key = void 0;
                if (this.key) {
                    key = this.key;
                    if (forceUpdate) {
                        node.lastKey = null;
                    }
                }
                else {
                    /** @type {?} */
                    var content = this.getContent(node);
                    /** @type {?} */
                    var trimmedContent = content.trim();
                    if (trimmedContent.length) {
                        // we want to use the content as a key, not the translation value
                        if (content !== node.currentValue) {
                            key = trimmedContent;
                            // the content was changed from the user, we'll use it as a reference if needed
                            node.originalContent = this.getContent(node);
                        }
                        else if (node.originalContent && forceUpdate) { // the content seems ok, but the lang has changed
                            node.lastKey = null;
                            // the current content is the translation, not the key, use the last real content as key
                            key = node.originalContent.trim();
                        }
                    }
                }
                this.updateValue(key, node, translations);
            }
        }
    };
    /**
     * @param {?} key
     * @param {?} node
     * @param {?} translations
     * @return {?}
     */
    TranslateDirective.prototype.updateValue = /**
     * @param {?} key
     * @param {?} node
     * @param {?} translations
     * @return {?}
     */
    function (key, node, translations) {
        var _this = this;
        if (key) {
            if (node.lastKey === key && this.lastParams === this.currentParams) {
                return;
            }
            this.lastParams = this.currentParams;
            /** @type {?} */
            var onTranslation = function (res) {
                if (res !== key) {
                    node.lastKey = key;
                }
                if (!node.originalContent) {
                    node.originalContent = _this.getContent(node);
                }
                node.currentValue = isDefined(res) ? res : (node.originalContent || key);
                // we replace in the original content to preserve spaces that we might have trimmed
                _this.setContent(node, _this.key ? node.currentValue : node.originalContent.replace(key, node.currentValue));
                _this._ref.markForCheck();
            };
            if (isDefined(translations)) {
                /** @type {?} */
                var res = this.translateService.getParsedResult(translations, key, this.currentParams);
                if (typeof res.subscribe === "function") {
                    res.subscribe(onTranslation);
                }
                else {
                    onTranslation(res);
                }
            }
            else {
                this.translateService.get(key, this.currentParams).subscribe(onTranslation);
            }
        }
    };
    /**
     * @param {?} node
     * @return {?}
     */
    TranslateDirective.prototype.getContent = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return isDefined(node.textContent) ? node.textContent : node.data;
    };
    /**
     * @param {?} node
     * @param {?} content
     * @return {?}
     */
    TranslateDirective.prototype.setContent = /**
     * @param {?} node
     * @param {?} content
     * @return {?}
     */
    function (node, content) {
        if (isDefined(node.textContent)) {
            node.textContent = content;
        }
        else {
            node.data = content;
        }
    };
    /**
     * @return {?}
     */
    TranslateDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.onLangChangeSub) {
            this.onLangChangeSub.unsubscribe();
        }
        if (this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub.unsubscribe();
        }
        if (this.onTranslationChangeSub) {
            this.onTranslationChangeSub.unsubscribe();
        }
    };
    TranslateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[translate],[ngx-translate]'
                },] }
    ];
    /** @nocollapse */
    TranslateDirective.ctorParameters = function () { return [
        { type: TranslateService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    TranslateDirective.propDecorators = {
        translate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        translateParams: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return TranslateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(translate, _ref) {
        this.translate = translate;
        this._ref = _ref;
        this.value = '';
    }
    /**
     * @param {?} key
     * @param {?=} interpolateParams
     * @param {?=} translations
     * @return {?}
     */
    TranslatePipe.prototype.updateValue = /**
     * @param {?} key
     * @param {?=} interpolateParams
     * @param {?=} translations
     * @return {?}
     */
    function (key, interpolateParams, translations) {
        var _this = this;
        /** @type {?} */
        var onTranslation = function (res) {
            _this.value = res !== undefined ? res : key;
            _this.lastKey = key;
            _this._ref.markForCheck();
        };
        if (translations) {
            /** @type {?} */
            var res = this.translate.getParsedResult(translations, key, interpolateParams);
            if (typeof res.subscribe === 'function') {
                res.subscribe(onTranslation);
            }
            else {
                onTranslation(res);
            }
        }
        this.translate.get(key, interpolateParams).subscribe(onTranslation);
    };
    /**
     * @param {?} query
     * @param {...?} args
     * @return {?}
     */
    TranslatePipe.prototype.transform = /**
     * @param {?} query
     * @param {...?} args
     * @return {?}
     */
    function (query) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!query || query.length === 0) {
            return query;
        }
        // if we ask another time for the same key, return the last value
        if (equals(query, this.lastKey) && equals(args, this.lastParams)) {
            return this.value;
        }
        /** @type {?} */
        var interpolateParams;
        if (isDefined(args[0]) && args.length) {
            if (typeof args[0] === 'string' && args[0].length) {
                // we accept objects written in the template such as {n:1}, {'n':1}, {n:'v'}
                // which is why we might need to change it to real JSON objects such as {"n":1} or {"n":"v"}
                /** @type {?} */
                var validArgs = args[0]
                    .replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g, '"$2":')
                    .replace(/:(\s)?(\')(.*?)(\')/g, ':"$3"');
                try {
                    interpolateParams = JSON.parse(validArgs);
                }
                catch (e) {
                    throw new SyntaxError("Wrong parameter in TranslatePipe. Expected a valid Object, received: " + args[0]);
                }
            }
            else if (typeof args[0] === 'object' && !Array.isArray(args[0])) {
                interpolateParams = args[0];
            }
        }
        // store the query, in case it changes
        this.lastKey = query;
        // store the params, in case they change
        this.lastParams = args;
        // set the value
        this.updateValue(query, interpolateParams);
        // if there is a subscription to onLangChange, clean it
        this._dispose();
        // subscribe to onTranslationChange event, in case the translations change
        if (!this.onTranslationChange) {
            this.onTranslationChange = this.translate.onTranslationChange.subscribe(function (event) {
                if (_this.lastKey && event.lang === _this.translate.currentLang) {
                    _this.lastKey = null;
                    _this.updateValue(query, interpolateParams, event.translations);
                }
            });
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChange) {
            this.onLangChange = this.translate.onLangChange.subscribe(function (event) {
                if (_this.lastKey) {
                    _this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    _this.updateValue(query, interpolateParams, event.translations);
                }
            });
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChange) {
            this.onDefaultLangChange = this.translate.onDefaultLangChange.subscribe(function () {
                if (_this.lastKey) {
                    _this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    _this.updateValue(query, interpolateParams);
                }
            });
        }
        return this.value;
    };
    /**
     * Clean any existing subscription to change events
     */
    /**
     * Clean any existing subscription to change events
     * @return {?}
     */
    TranslatePipe.prototype._dispose = /**
     * Clean any existing subscription to change events
     * @return {?}
     */
    function () {
        if (typeof this.onTranslationChange !== 'undefined') {
            this.onTranslationChange.unsubscribe();
            this.onTranslationChange = undefined;
        }
        if (typeof this.onLangChange !== 'undefined') {
            this.onLangChange.unsubscribe();
            this.onLangChange = undefined;
        }
        if (typeof this.onDefaultLangChange !== 'undefined') {
            this.onDefaultLangChange.unsubscribe();
            this.onDefaultLangChange = undefined;
        }
    };
    /**
     * @return {?}
     */
    TranslatePipe.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._dispose();
    };
    TranslatePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'translate',
                    pure: false // required to update the value when the promise is resolved
                },] }
    ];
    /** @nocollapse */
    TranslatePipe.ctorParameters = function () { return [
        { type: TranslateService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    return TranslatePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TranslateModule = /** @class */ (function () {
    function TranslateModule() {
    }
    /**
     * Use this method in your root module to provide the TranslateService
     */
    /**
     * Use this method in your root module to provide the TranslateService
     * @param {?=} config
     * @return {?}
     */
    TranslateModule.forRoot = /**
     * Use this method in your root module to provide the TranslateService
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: TranslateLoader, useClass: TranslateFakeLoader },
                config.compiler || { provide: TranslateCompiler, useClass: TranslateFakeCompiler },
                config.parser || { provide: TranslateParser, useClass: TranslateDefaultParser },
                config.missingTranslationHandler || { provide: MissingTranslationHandler, useClass: FakeMissingTranslationHandler },
                TranslateStore,
                { provide: USE_STORE, useValue: config.isolate },
                { provide: USE_DEFAULT_LANG, useValue: config.useDefaultLang },
                TranslateService
            ]
        };
    };
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     */
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     * @param {?=} config
     * @return {?}
     */
    TranslateModule.forChild = /**
     * Use this method in your other (non root) modules to import the directive/pipe
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: TranslateLoader, useClass: TranslateFakeLoader },
                config.compiler || { provide: TranslateCompiler, useClass: TranslateFakeCompiler },
                config.parser || { provide: TranslateParser, useClass: TranslateDefaultParser },
                config.missingTranslationHandler || { provide: MissingTranslationHandler, useClass: FakeMissingTranslationHandler },
                { provide: USE_STORE, useValue: config.isolate },
                { provide: USE_DEFAULT_LANG, useValue: config.useDefaultLang },
                TranslateService
            ]
        };
    };
    TranslateModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [
                        TranslatePipe,
                        TranslateDirective
                    ],
                    exports: [
                        TranslatePipe,
                        TranslateDirective
                    ]
                },] }
    ];
    return TranslateModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRyYW5zbGF0ZS1jb3JlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Abmd4LXRyYW5zbGF0ZS9jb3JlL2xpYi90cmFuc2xhdGUubG9hZGVyLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9jb3JlL2xpYi9taXNzaW5nLXRyYW5zbGF0aW9uLWhhbmRsZXIudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2NvcmUvbGliL3RyYW5zbGF0ZS5jb21waWxlci50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvY29yZS9saWIvdXRpbC50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvY29yZS9saWIvdHJhbnNsYXRlLnBhcnNlci50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvY29yZS9saWIvdHJhbnNsYXRlLnN0b3JlLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9jb3JlL2xpYi90cmFuc2xhdGUuc2VydmljZS50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvY29yZS9saWIvdHJhbnNsYXRlLmRpcmVjdGl2ZS50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvY29yZS9saWIvdHJhbnNsYXRlLnBpcGUudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2NvcmUvcHVibGljX2FwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge09ic2VydmFibGUsIG9mfSBmcm9tIFwicnhqc1wiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHJhbnNsYXRlTG9hZGVyIHtcbiAgYWJzdHJhY3QgZ2V0VHJhbnNsYXRpb24obGFuZzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+O1xufVxuXG4vKipcbiAqIFRoaXMgbG9hZGVyIGlzIGp1c3QgYSBwbGFjZWhvbGRlciB0aGF0IGRvZXMgbm90aGluZywgaW4gY2FzZSB5b3UgZG9uJ3QgbmVlZCBhIGxvYWRlciBhdCBhbGxcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZUZha2VMb2FkZXIgZXh0ZW5kcyBUcmFuc2xhdGVMb2FkZXIge1xuICBnZXRUcmFuc2xhdGlvbihsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBvZih7fSk7XG4gIH1cbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSBcIi4vdHJhbnNsYXRlLnNlcnZpY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyUGFyYW1zIHtcbiAgLyoqXG4gICAqIHRoZSBrZXkgdGhhdCdzIG1pc3NpbmcgaW4gdHJhbnNsYXRpb24gZmlsZXNcbiAgICovXG4gIGtleTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBhbiBpbnN0YW5jZSBvZiB0aGUgc2VydmljZSB0aGF0IHdhcyB1bmFibGUgdG8gdHJhbnNsYXRlIHRoZSBrZXkuXG4gICAqL1xuICB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlO1xuXG4gIC8qKlxuICAgKiBpbnRlcnBvbGF0aW9uIHBhcmFtcyB0aGF0IHdlcmUgcGFzc2VkIGFsb25nIGZvciB0cmFuc2xhdGluZyB0aGUgZ2l2ZW4ga2V5LlxuICAgKi9cbiAgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3Q7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIHtcbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIG1pc3NpbmcgdHJhbnNsYXRpb25zLlxuICAgKlxuICAgKiBAcGFyYW0gcGFyYW1zIGNvbnRleHQgZm9yIHJlc29sdmluZyBhIG1pc3NpbmcgdHJhbnNsYXRpb25cbiAgICogQHJldHVybnMgYSB2YWx1ZSBvciBhbiBvYnNlcnZhYmxlXG4gICAqIElmIGl0IHJldHVybnMgYSB2YWx1ZSwgdGhlbiB0aGlzIHZhbHVlIGlzIHVzZWQuXG4gICAqIElmIGl0IHJldHVybiBhbiBvYnNlcnZhYmxlLCB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgdGhpcyBvYnNlcnZhYmxlIHdpbGwgYmUgdXNlZCAoZXhjZXB0IGlmIHRoZSBtZXRob2Qgd2FzIFwiaW5zdGFudFwiKS5cbiAgICogSWYgaXQgZG9lc24ndCByZXR1cm4gdGhlbiB0aGUga2V5IHdpbGwgYmUgdXNlZCBhcyBhIHZhbHVlXG4gICAqL1xuICBhYnN0cmFjdCBoYW5kbGUocGFyYW1zOiBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyUGFyYW1zKTogYW55O1xufVxuXG4vKipcbiAqIFRoaXMgaGFuZGxlciBpcyBqdXN0IGEgcGxhY2Vob2xkZXIgdGhhdCBkb2VzIG5vdGhpbmcsIGluIGNhc2UgeW91IGRvbid0IG5lZWQgYSBtaXNzaW5nIHRyYW5zbGF0aW9uIGhhbmRsZXIgYXQgYWxsXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWtlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciBpbXBsZW1lbnRzIE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIge1xuICBoYW5kbGUocGFyYW1zOiBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcGFyYW1zLmtleTtcbiAgfVxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHJhbnNsYXRlQ29tcGlsZXIge1xuICBhYnN0cmFjdCBjb21waWxlKHZhbHVlOiBzdHJpbmcsIGxhbmc6IHN0cmluZyk6IHN0cmluZyB8IEZ1bmN0aW9uO1xuXG4gIGFic3RyYWN0IGNvbXBpbGVUcmFuc2xhdGlvbnModHJhbnNsYXRpb25zOiBhbnksIGxhbmc6IHN0cmluZyk6IGFueTtcbn1cblxuLyoqXG4gKiBUaGlzIGNvbXBpbGVyIGlzIGp1c3QgYSBwbGFjZWhvbGRlciB0aGF0IGRvZXMgbm90aGluZywgaW4gY2FzZSB5b3UgZG9uJ3QgbmVlZCBhIGNvbXBpbGVyIGF0IGFsbFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlRmFrZUNvbXBpbGVyIGV4dGVuZHMgVHJhbnNsYXRlQ29tcGlsZXIge1xuICBjb21waWxlKHZhbHVlOiBzdHJpbmcsIGxhbmc6IHN0cmluZyk6IHN0cmluZyB8IEZ1bmN0aW9uIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBjb21waWxlVHJhbnNsYXRpb25zKHRyYW5zbGF0aW9uczogYW55LCBsYW5nOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB0cmFuc2xhdGlvbnM7XG4gIH1cbn1cbiIsIi8qIHRzbGludDpkaXNhYmxlICovXG4vKipcbiAqIERldGVybWluZXMgaWYgdHdvIG9iamVjdHMgb3IgdHdvIHZhbHVlcyBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBUd28gb2JqZWN0cyBvciB2YWx1ZXMgYXJlIGNvbnNpZGVyZWQgZXF1aXZhbGVudCBpZiBhdCBsZWFzdCBvbmUgb2YgdGhlIGZvbGxvd2luZyBpcyB0cnVlOlxuICpcbiAqICogQm90aCBvYmplY3RzIG9yIHZhbHVlcyBwYXNzIGA9PT1gIGNvbXBhcmlzb24uXG4gKiAqIEJvdGggb2JqZWN0cyBvciB2YWx1ZXMgYXJlIG9mIHRoZSBzYW1lIHR5cGUgYW5kIGFsbCBvZiB0aGVpciBwcm9wZXJ0aWVzIGFyZSBlcXVhbCBieVxuICogICBjb21wYXJpbmcgdGhlbSB3aXRoIGBlcXVhbHNgLlxuICpcbiAqIEBwYXJhbSBvMSBPYmplY3Qgb3IgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSBvMiBPYmplY3Qgb3IgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHRydWUgaWYgYXJndW1lbnRzIGFyZSBlcXVhbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhvMTogYW55LCBvMjogYW55KTogYm9vbGVhbiB7XG4gIGlmIChvMSA9PT0gbzIpIHJldHVybiB0cnVlO1xuICBpZiAobzEgPT09IG51bGwgfHwgbzIgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgaWYgKG8xICE9PSBvMSAmJiBvMiAhPT0gbzIpIHJldHVybiB0cnVlOyAvLyBOYU4gPT09IE5hTlxuICBsZXQgdDEgPSB0eXBlb2YgbzEsIHQyID0gdHlwZW9mIG8yLCBsZW5ndGg6IG51bWJlciwga2V5OiBhbnksIGtleVNldDogYW55O1xuICBpZiAodDEgPT0gdDIgJiYgdDEgPT0gJ29iamVjdCcpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvMSkpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShvMikpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICgobGVuZ3RoID0gbzEubGVuZ3RoKSA9PSBvMi5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChrZXkgPSAwOyBrZXkgPCBsZW5ndGg7IGtleSsrKSB7XG4gICAgICAgICAgaWYgKCFlcXVhbHMobzFba2V5XSwgbzJba2V5XSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobzIpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGtleVNldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBmb3IgKGtleSBpbiBvMSkge1xuICAgICAgICBpZiAoIWVxdWFscyhvMVtrZXldLCBvMltrZXldKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBrZXlTZXRba2V5XSA9IHRydWU7XG4gICAgICB9XG4gICAgICBmb3IgKGtleSBpbiBvMikge1xuICAgICAgICBpZiAoIShrZXkgaW4ga2V5U2V0KSAmJiB0eXBlb2YgbzJba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG4vKiB0c2xpbnQ6ZW5hYmxlICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RlZmluZWQodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KGl0ZW06IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGl0ZW0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCh0YXJnZXQ6IGFueSwgc291cmNlOiBhbnkpOiBhbnkge1xuICBsZXQgb3V0cHV0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGFyZ2V0KTtcbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5OiBhbnkpID0+IHtcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgaWYgKCEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKG91dHB1dCwge1trZXldOiBzb3VyY2Vba2V5XX0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG91dHB1dFtrZXldID0gbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ob3V0cHV0LCB7W2tleV06IHNvdXJjZVtrZXldfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7aXNEZWZpbmVkfSBmcm9tIFwiLi91dGlsXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUcmFuc2xhdGVQYXJzZXIge1xuICAvKipcbiAgICogSW50ZXJwb2xhdGVzIGEgc3RyaW5nIHRvIHJlcGxhY2UgcGFyYW1ldGVyc1xuICAgKiBcIlRoaXMgaXMgYSB7eyBrZXkgfX1cIiA9PT4gXCJUaGlzIGlzIGEgdmFsdWVcIiwgd2l0aCBwYXJhbXMgPSB7IGtleTogXCJ2YWx1ZVwiIH1cbiAgICogQHBhcmFtIGV4cHJcbiAgICogQHBhcmFtIHBhcmFtc1xuICAgKi9cbiAgYWJzdHJhY3QgaW50ZXJwb2xhdGUoZXhwcjogc3RyaW5nIHwgRnVuY3Rpb24sIHBhcmFtcz86IGFueSk6IHN0cmluZztcblxuICAvKipcbiAgICogR2V0cyBhIHZhbHVlIGZyb20gYW4gb2JqZWN0IGJ5IGNvbXBvc2VkIGtleVxuICAgKiBwYXJzZXIuZ2V0VmFsdWUoeyBrZXkxOiB7IGtleUE6ICd2YWx1ZUknIH19LCAna2V5MS5rZXlBJykgPT0+ICd2YWx1ZUknXG4gICAqIEBwYXJhbSB0YXJnZXRcbiAgICogQHBhcmFtIGtleVxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0VmFsdWUodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKTogYW55XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVEZWZhdWx0UGFyc2VyIGV4dGVuZHMgVHJhbnNsYXRlUGFyc2VyIHtcbiAgdGVtcGxhdGVNYXRjaGVyOiBSZWdFeHAgPSAve3tcXHM/KFtee31cXHNdKilcXHM/fX0vZztcblxuICBwdWJsaWMgaW50ZXJwb2xhdGUoZXhwcjogc3RyaW5nIHwgRnVuY3Rpb24sIHBhcmFtcz86IGFueSk6IHN0cmluZyB7XG4gICAgbGV0IHJlc3VsdDogc3RyaW5nO1xuXG4gICAgaWYgKHR5cGVvZiBleHByID09PSAnc3RyaW5nJykge1xuICAgICAgcmVzdWx0ID0gdGhpcy5pbnRlcnBvbGF0ZVN0cmluZyhleHByLCBwYXJhbXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cHIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW50ZXJwb2xhdGVGdW5jdGlvbihleHByLCBwYXJhbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzIHNob3VsZCBub3QgaGFwcGVuLCBidXQgYW4gdW5yZWxhdGVkIFRyYW5zbGF0ZVNlcnZpY2UgdGVzdCBkZXBlbmRzIG9uIGl0XG4gICAgICByZXN1bHQgPSBleHByIGFzIHN0cmluZztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0VmFsdWUodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKTogYW55IHtcbiAgICBsZXQga2V5cyA9IGtleS5zcGxpdCgnLicpO1xuICAgIGtleSA9ICcnO1xuICAgIGRvIHtcbiAgICAgIGtleSArPSBrZXlzLnNoaWZ0KCk7XG4gICAgICBpZiAoaXNEZWZpbmVkKHRhcmdldCkgJiYgaXNEZWZpbmVkKHRhcmdldFtrZXldKSAmJiAodHlwZW9mIHRhcmdldFtrZXldID09PSAnb2JqZWN0JyB8fCAha2V5cy5sZW5ndGgpKSB7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldFtrZXldO1xuICAgICAgICBrZXkgPSAnJztcbiAgICAgIH0gZWxzZSBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgICAgIHRhcmdldCA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleSArPSAnLic7XG4gICAgICB9XG4gICAgfSB3aGlsZSAoa2V5cy5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIHByaXZhdGUgaW50ZXJwb2xhdGVGdW5jdGlvbihmbjogRnVuY3Rpb24sIHBhcmFtcz86IGFueSkge1xuICAgIHJldHVybiBmbihwYXJhbXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnRlcnBvbGF0ZVN0cmluZyhleHByOiBzdHJpbmcsIHBhcmFtcz86IGFueSkge1xuICAgIGlmICghcGFyYW1zKSB7XG4gICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwci5yZXBsYWNlKHRoaXMudGVtcGxhdGVNYXRjaGVyLCAoc3Vic3RyaW5nOiBzdHJpbmcsIGI6IHN0cmluZykgPT4ge1xuICAgICAgbGV0IHIgPSB0aGlzLmdldFZhbHVlKHBhcmFtcywgYik7XG4gICAgICByZXR1cm4gaXNEZWZpbmVkKHIpID8gciA6IHN1YnN0cmluZztcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0RlZmF1bHRMYW5nQ2hhbmdlRXZlbnQsIExhbmdDaGFuZ2VFdmVudCwgVHJhbnNsYXRpb25DaGFuZ2VFdmVudH0gZnJvbSBcIi4vdHJhbnNsYXRlLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVN0b3JlIHtcbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGxhbmcgdG8gZmFsbGJhY2sgd2hlbiB0cmFuc2xhdGlvbnMgYXJlIG1pc3Npbmcgb24gdGhlIGN1cnJlbnQgbGFuZ1xuICAgKi9cbiAgcHVibGljIGRlZmF1bHRMYW5nOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBsYW5nIGN1cnJlbnRseSB1c2VkXG4gICAqL1xuICBwdWJsaWMgY3VycmVudExhbmc6IHN0cmluZyA9IHRoaXMuZGVmYXVsdExhbmc7XG5cbiAgLyoqXG4gICAqIGEgbGlzdCBvZiB0cmFuc2xhdGlvbnMgcGVyIGxhbmdcbiAgICovXG4gIHB1YmxpYyB0cmFuc2xhdGlvbnM6IGFueSA9IHt9O1xuXG4gIC8qKlxuICAgKiBhbiBhcnJheSBvZiBsYW5nc1xuICAgKi9cbiAgcHVibGljIGxhbmdzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgLyoqXG4gICAqIEFuIEV2ZW50RW1pdHRlciB0byBsaXN0ZW4gdG8gdHJhbnNsYXRpb24gY2hhbmdlIGV2ZW50c1xuICAgKiBvblRyYW5zbGF0aW9uQ2hhbmdlLnN1YnNjcmliZSgocGFyYW1zOiBUcmFuc2xhdGlvbkNoYW5nZUV2ZW50KSA9PiB7XG4gICAgICogICAgIC8vIGRvIHNvbWV0aGluZ1xuICAgICAqIH0pO1xuICAgKi9cbiAgcHVibGljIG9uVHJhbnNsYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGlvbkNoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNsYXRpb25DaGFuZ2VFdmVudD4oKTtcblxuICAvKipcbiAgICogQW4gRXZlbnRFbWl0dGVyIHRvIGxpc3RlbiB0byBsYW5nIGNoYW5nZSBldmVudHNcbiAgICogb25MYW5nQ2hhbmdlLnN1YnNjcmliZSgocGFyYW1zOiBMYW5nQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgKiAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICogfSk7XG4gICAqL1xuICBwdWJsaWMgb25MYW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TGFuZ0NoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TGFuZ0NoYW5nZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBBbiBFdmVudEVtaXR0ZXIgdG8gbGlzdGVuIHRvIGRlZmF1bHQgbGFuZyBjaGFuZ2UgZXZlbnRzXG4gICAqIG9uRGVmYXVsdExhbmdDaGFuZ2Uuc3Vic2NyaWJlKChwYXJhbXM6IERlZmF1bHRMYW5nQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgKiAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICogfSk7XG4gICAqL1xuICBwdWJsaWMgb25EZWZhdWx0TGFuZ0NoYW5nZTogRXZlbnRFbWl0dGVyPERlZmF1bHRMYW5nQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxEZWZhdWx0TGFuZ0NoYW5nZUV2ZW50PigpO1xufVxuIiwiaW1wb3J0IHtFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge2NvbmNhdCwgbWVyZ2UsIE9ic2VydmFibGUsIE9ic2VydmVyLCBvZn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7bWFwLCBzaGFyZSwgc3dpdGNoTWFwLCB0YWtlLCB0b0FycmF5fSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7TWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciwgTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlclBhcmFtc30gZnJvbSBcIi4vbWlzc2luZy10cmFuc2xhdGlvbi1oYW5kbGVyXCI7XG5pbXBvcnQge1RyYW5zbGF0ZUNvbXBpbGVyfSBmcm9tIFwiLi90cmFuc2xhdGUuY29tcGlsZXJcIjtcbmltcG9ydCB7VHJhbnNsYXRlTG9hZGVyfSBmcm9tIFwiLi90cmFuc2xhdGUubG9hZGVyXCI7XG5pbXBvcnQge1RyYW5zbGF0ZVBhcnNlcn0gZnJvbSBcIi4vdHJhbnNsYXRlLnBhcnNlclwiO1xuXG5pbXBvcnQge1RyYW5zbGF0ZVN0b3JlfSBmcm9tIFwiLi90cmFuc2xhdGUuc3RvcmVcIjtcbmltcG9ydCB7aXNEZWZpbmVkLCBtZXJnZURlZXB9IGZyb20gXCIuL3V0aWxcIjtcblxuZXhwb3J0IGNvbnN0IFVTRV9TVE9SRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdVU0VfU1RPUkUnKTtcbmV4cG9ydCBjb25zdCBVU0VfREVGQVVMVF9MQU5HID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ1VTRV9ERUZBVUxUX0xBTkcnKTtcblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGlvbkNoYW5nZUV2ZW50IHtcbiAgdHJhbnNsYXRpb25zOiBhbnk7XG4gIGxhbmc6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYW5nQ2hhbmdlRXZlbnQge1xuICBsYW5nOiBzdHJpbmc7XG4gIHRyYW5zbGF0aW9uczogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHRMYW5nQ2hhbmdlRXZlbnQge1xuICBsYW5nOiBzdHJpbmc7XG4gIHRyYW5zbGF0aW9uczogYW55O1xufVxuXG5kZWNsYXJlIGludGVyZmFjZSBXaW5kb3cge1xuICBuYXZpZ2F0b3I6IGFueTtcbn1cblxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IFdpbmRvdztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVNlcnZpY2Uge1xuICBwcml2YXRlIGxvYWRpbmdUcmFuc2xhdGlvbnM6IE9ic2VydmFibGU8YW55PjtcbiAgcHJpdmF0ZSBwZW5kaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX29uVHJhbnNsYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGlvbkNoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNsYXRpb25DaGFuZ2VFdmVudD4oKTtcbiAgcHJpdmF0ZSBfb25MYW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TGFuZ0NoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TGFuZ0NoYW5nZUV2ZW50PigpO1xuICBwcml2YXRlIF9vbkRlZmF1bHRMYW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGVmYXVsdExhbmdDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPERlZmF1bHRMYW5nQ2hhbmdlRXZlbnQ+KCk7XG4gIHByaXZhdGUgX2RlZmF1bHRMYW5nOiBzdHJpbmc7XG4gIHByaXZhdGUgX2N1cnJlbnRMYW5nOiBzdHJpbmc7XG4gIHByaXZhdGUgX2xhbmdzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gIHByaXZhdGUgX3RyYW5zbGF0aW9uczogYW55ID0ge307XG4gIHByaXZhdGUgX3RyYW5zbGF0aW9uUmVxdWVzdHM6IGFueSA9IHt9O1xuXG4gIC8qKlxuICAgKiBBbiBFdmVudEVtaXR0ZXIgdG8gbGlzdGVuIHRvIHRyYW5zbGF0aW9uIGNoYW5nZSBldmVudHNcbiAgICogb25UcmFuc2xhdGlvbkNoYW5nZS5zdWJzY3JpYmUoKHBhcmFtczogVHJhbnNsYXRpb25DaGFuZ2VFdmVudCkgPT4ge1xuICAgICAqICAgICAvLyBkbyBzb21ldGhpbmdcbiAgICAgKiB9KTtcbiAgICovXG4gIGdldCBvblRyYW5zbGF0aW9uQ2hhbmdlKCk6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGlvbkNoYW5nZUV2ZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuaXNvbGF0ZSA/IHRoaXMuX29uVHJhbnNsYXRpb25DaGFuZ2UgOiB0aGlzLnN0b3JlLm9uVHJhbnNsYXRpb25DaGFuZ2U7XG4gIH1cblxuICAvKipcbiAgICogQW4gRXZlbnRFbWl0dGVyIHRvIGxpc3RlbiB0byBsYW5nIGNoYW5nZSBldmVudHNcbiAgICogb25MYW5nQ2hhbmdlLnN1YnNjcmliZSgocGFyYW1zOiBMYW5nQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgKiAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICogfSk7XG4gICAqL1xuICBnZXQgb25MYW5nQ2hhbmdlKCk6IEV2ZW50RW1pdHRlcjxMYW5nQ2hhbmdlRXZlbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5pc29sYXRlID8gdGhpcy5fb25MYW5nQ2hhbmdlIDogdGhpcy5zdG9yZS5vbkxhbmdDaGFuZ2U7XG4gIH1cblxuICAvKipcbiAgICogQW4gRXZlbnRFbWl0dGVyIHRvIGxpc3RlbiB0byBkZWZhdWx0IGxhbmcgY2hhbmdlIGV2ZW50c1xuICAgKiBvbkRlZmF1bHRMYW5nQ2hhbmdlLnN1YnNjcmliZSgocGFyYW1zOiBEZWZhdWx0TGFuZ0NoYW5nZUV2ZW50KSA9PiB7XG4gICAgICogICAgIC8vIGRvIHNvbWV0aGluZ1xuICAgICAqIH0pO1xuICAgKi9cbiAgZ2V0IG9uRGVmYXVsdExhbmdDaGFuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNvbGF0ZSA/IHRoaXMuX29uRGVmYXVsdExhbmdDaGFuZ2UgOiB0aGlzLnN0b3JlLm9uRGVmYXVsdExhbmdDaGFuZ2U7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgbGFuZyB0byBmYWxsYmFjayB3aGVuIHRyYW5zbGF0aW9ucyBhcmUgbWlzc2luZyBvbiB0aGUgY3VycmVudCBsYW5nXG4gICAqL1xuICBnZXQgZGVmYXVsdExhbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pc29sYXRlID8gdGhpcy5fZGVmYXVsdExhbmcgOiB0aGlzLnN0b3JlLmRlZmF1bHRMYW5nO1xuICB9XG5cbiAgc2V0IGRlZmF1bHRMYW5nKGRlZmF1bHRMYW5nOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5pc29sYXRlKSB7XG4gICAgICB0aGlzLl9kZWZhdWx0TGFuZyA9IGRlZmF1bHRMYW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLmRlZmF1bHRMYW5nID0gZGVmYXVsdExhbmc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBsYW5nIGN1cnJlbnRseSB1c2VkXG4gICAqL1xuICBnZXQgY3VycmVudExhbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pc29sYXRlID8gdGhpcy5fY3VycmVudExhbmcgOiB0aGlzLnN0b3JlLmN1cnJlbnRMYW5nO1xuICB9XG5cbiAgc2V0IGN1cnJlbnRMYW5nKGN1cnJlbnRMYW5nOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5pc29sYXRlKSB7XG4gICAgICB0aGlzLl9jdXJyZW50TGFuZyA9IGN1cnJlbnRMYW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLmN1cnJlbnRMYW5nID0gY3VycmVudExhbmc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGFuIGFycmF5IG9mIGxhbmdzXG4gICAqL1xuICBnZXQgbGFuZ3MoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmlzb2xhdGUgPyB0aGlzLl9sYW5ncyA6IHRoaXMuc3RvcmUubGFuZ3M7XG4gIH1cblxuICBzZXQgbGFuZ3MobGFuZ3M6IHN0cmluZ1tdKSB7XG4gICAgaWYgKHRoaXMuaXNvbGF0ZSkge1xuICAgICAgdGhpcy5fbGFuZ3MgPSBsYW5ncztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5sYW5ncyA9IGxhbmdzO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBhIGxpc3Qgb2YgdHJhbnNsYXRpb25zIHBlciBsYW5nXG4gICAqL1xuICBnZXQgdHJhbnNsYXRpb25zKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuaXNvbGF0ZSA/IHRoaXMuX3RyYW5zbGF0aW9ucyA6IHRoaXMuc3RvcmUudHJhbnNsYXRpb25zO1xuICB9XG5cbiAgc2V0IHRyYW5zbGF0aW9ucyh0cmFuc2xhdGlvbnM6IGFueSkge1xuICAgIGlmICh0aGlzLmlzb2xhdGUpIHtcbiAgICAgIHRoaXMuX3RyYW5zbGF0aW9ucyA9IHRyYW5zbGF0aW9ucztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS50cmFuc2xhdGlvbnMgPSB0cmFuc2xhdGlvbnM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBzdG9yZSBhbiBpbnN0YW5jZSBvZiB0aGUgc3RvcmUgKHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgdW5pcXVlKVxuICAgKiBAcGFyYW0gY3VycmVudExvYWRlciBBbiBpbnN0YW5jZSBvZiB0aGUgbG9hZGVyIGN1cnJlbnRseSB1c2VkXG4gICAqIEBwYXJhbSBjb21waWxlciBBbiBpbnN0YW5jZSBvZiB0aGUgY29tcGlsZXIgY3VycmVudGx5IHVzZWRcbiAgICogQHBhcmFtIHBhcnNlciBBbiBpbnN0YW5jZSBvZiB0aGUgcGFyc2VyIGN1cnJlbnRseSB1c2VkXG4gICAqIEBwYXJhbSBtaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIEEgaGFuZGxlciBmb3IgbWlzc2luZyB0cmFuc2xhdGlvbnMuXG4gICAqIEBwYXJhbSBpc29sYXRlIHdoZXRoZXIgdGhpcyBzZXJ2aWNlIHNob3VsZCB1c2UgdGhlIHN0b3JlIG9yIG5vdFxuICAgKiBAcGFyYW0gdXNlRGVmYXVsdExhbmcgd2hldGhlciB3ZSBzaG91bGQgdXNlIGRlZmF1bHQgbGFuZ3VhZ2UgdHJhbnNsYXRpb24gd2hlbiBjdXJyZW50IGxhbmd1YWdlIHRyYW5zbGF0aW9uIGlzIG1pc3NpbmcuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmU6IFRyYW5zbGF0ZVN0b3JlLFxuICAgICAgICAgICAgICBwdWJsaWMgY3VycmVudExvYWRlcjogVHJhbnNsYXRlTG9hZGVyLFxuICAgICAgICAgICAgICBwdWJsaWMgY29tcGlsZXI6IFRyYW5zbGF0ZUNvbXBpbGVyLFxuICAgICAgICAgICAgICBwdWJsaWMgcGFyc2VyOiBUcmFuc2xhdGVQYXJzZXIsXG4gICAgICAgICAgICAgIHB1YmxpYyBtaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyOiBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLFxuICAgICAgICAgICAgICBASW5qZWN0KFVTRV9ERUZBVUxUX0xBTkcpIHByaXZhdGUgdXNlRGVmYXVsdExhbmc6IGJvb2xlYW4gPSB0cnVlLFxuICAgICAgICAgICAgICBASW5qZWN0KFVTRV9TVE9SRSkgcHJpdmF0ZSBpc29sYXRlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IGxhbmd1YWdlIHRvIHVzZSBhcyBhIGZhbGxiYWNrXG4gICAqL1xuICBwdWJsaWMgc2V0RGVmYXVsdExhbmcobGFuZzogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKGxhbmcgPT09IHRoaXMuZGVmYXVsdExhbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcGVuZGluZzogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5yZXRyaWV2ZVRyYW5zbGF0aW9ucyhsYW5nKTtcblxuICAgIGlmICh0eXBlb2YgcGVuZGluZyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgLy8gb24gaW5pdCBzZXQgdGhlIGRlZmF1bHRMYW5nIGltbWVkaWF0ZWx5XG4gICAgICBpZiAoIXRoaXMuZGVmYXVsdExhbmcpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0TGFuZyA9IGxhbmc7XG4gICAgICB9XG5cbiAgICAgIHBlbmRpbmcucGlwZSh0YWtlKDEpKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuY2hhbmdlRGVmYXVsdExhbmcobGFuZyk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7IC8vIHdlIGFscmVhZHkgaGF2ZSB0aGlzIGxhbmd1YWdlXG4gICAgICB0aGlzLmNoYW5nZURlZmF1bHRMYW5nKGxhbmcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBkZWZhdWx0IGxhbmd1YWdlIHVzZWRcbiAgICovXG4gIHB1YmxpYyBnZXREZWZhdWx0TGFuZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRMYW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGxhbmcgY3VycmVudGx5IHVzZWRcbiAgICovXG4gIHB1YmxpYyB1c2UobGFuZzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvLyBkb24ndCBjaGFuZ2UgdGhlIGxhbmd1YWdlIGlmIHRoZSBsYW5ndWFnZSBnaXZlbiBpcyBhbHJlYWR5IHNlbGVjdGVkXG4gICAgaWYgKGxhbmcgPT09IHRoaXMuY3VycmVudExhbmcpIHtcbiAgICAgIHJldHVybiBvZih0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSk7XG4gICAgfVxuXG4gICAgbGV0IHBlbmRpbmc6IE9ic2VydmFibGU8YW55PiA9IHRoaXMucmV0cmlldmVUcmFuc2xhdGlvbnMobGFuZyk7XG5cbiAgICBpZiAodHlwZW9mIHBlbmRpbmcgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIC8vIG9uIGluaXQgc2V0IHRoZSBjdXJyZW50TGFuZyBpbW1lZGlhdGVseVxuICAgICAgaWYgKCF0aGlzLmN1cnJlbnRMYW5nKSB7XG4gICAgICAgIHRoaXMuY3VycmVudExhbmcgPSBsYW5nO1xuICAgICAgfVxuXG4gICAgICBwZW5kaW5nLnBpcGUodGFrZSgxKSlcbiAgICAgICAgLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmNoYW5nZUxhbmcobGFuZyk7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcGVuZGluZztcbiAgICB9IGVsc2UgeyAvLyB3ZSBoYXZlIHRoaXMgbGFuZ3VhZ2UsIHJldHVybiBhbiBPYnNlcnZhYmxlXG4gICAgICB0aGlzLmNoYW5nZUxhbmcobGFuZyk7XG5cbiAgICAgIHJldHVybiBvZih0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgZ2l2ZW4gdHJhbnNsYXRpb25zXG4gICAqL1xuICBwcml2YXRlIHJldHJpZXZlVHJhbnNsYXRpb25zKGxhbmc6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IHBlbmRpbmc6IE9ic2VydmFibGU8YW55PjtcblxuICAgIC8vIGlmIHRoaXMgbGFuZ3VhZ2UgaXMgdW5hdmFpbGFibGUsIGFzayBmb3IgaXRcbiAgICBpZiAodHlwZW9mIHRoaXMudHJhbnNsYXRpb25zW2xhbmddID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aGlzLl90cmFuc2xhdGlvblJlcXVlc3RzW2xhbmddID0gdGhpcy5fdHJhbnNsYXRpb25SZXF1ZXN0c1tsYW5nXSB8fCB0aGlzLmdldFRyYW5zbGF0aW9uKGxhbmcpO1xuICAgICAgcGVuZGluZyA9IHRoaXMuX3RyYW5zbGF0aW9uUmVxdWVzdHNbbGFuZ107XG4gICAgfVxuXG4gICAgcmV0dXJuIHBlbmRpbmc7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhbiBvYmplY3Qgb2YgdHJhbnNsYXRpb25zIGZvciBhIGdpdmVuIGxhbmd1YWdlIHdpdGggdGhlIGN1cnJlbnQgbG9hZGVyXG4gICAqIGFuZCBwYXNzZXMgaXQgdGhyb3VnaCB0aGUgY29tcGlsZXJcbiAgICovXG4gIHB1YmxpYyBnZXRUcmFuc2xhdGlvbihsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHRoaXMucGVuZGluZyA9IHRydWU7XG4gICAgY29uc3QgbG9hZGluZ1RyYW5zbGF0aW9ucyA9IHRoaXMuY3VycmVudExvYWRlci5nZXRUcmFuc2xhdGlvbihsYW5nKS5waXBlKHNoYXJlKCkpO1xuICAgIHRoaXMubG9hZGluZ1RyYW5zbGF0aW9ucyA9IGxvYWRpbmdUcmFuc2xhdGlvbnMucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICBtYXAoKHJlczogT2JqZWN0KSA9PiB0aGlzLmNvbXBpbGVyLmNvbXBpbGVUcmFuc2xhdGlvbnMocmVzLCBsYW5nKSksXG4gICAgICBzaGFyZSgpXG4gICAgKTtcblxuICAgIHRoaXMubG9hZGluZ1RyYW5zbGF0aW9uc1xuICAgICAgLnN1YnNjcmliZSgocmVzOiBPYmplY3QpID0+IHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbnNbbGFuZ10gPSByZXM7XG4gICAgICAgIHRoaXMudXBkYXRlTGFuZ3MoKTtcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICB9LCAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBsb2FkaW5nVHJhbnNsYXRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hbnVhbGx5IHNldHMgYW4gb2JqZWN0IG9mIHRyYW5zbGF0aW9ucyBmb3IgYSBnaXZlbiBsYW5ndWFnZVxuICAgKiBhZnRlciBwYXNzaW5nIGl0IHRocm91Z2ggdGhlIGNvbXBpbGVyXG4gICAqL1xuICBwdWJsaWMgc2V0VHJhbnNsYXRpb24obGFuZzogc3RyaW5nLCB0cmFuc2xhdGlvbnM6IE9iamVjdCwgc2hvdWxkTWVyZ2U6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRyYW5zbGF0aW9ucyA9IHRoaXMuY29tcGlsZXIuY29tcGlsZVRyYW5zbGF0aW9ucyh0cmFuc2xhdGlvbnMsIGxhbmcpO1xuICAgIGlmIChzaG91bGRNZXJnZSAmJiB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSkge1xuICAgICAgdGhpcy50cmFuc2xhdGlvbnNbbGFuZ10gPSBtZXJnZURlZXAodGhpcy50cmFuc2xhdGlvbnNbbGFuZ10sIHRyYW5zbGF0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHJhbnNsYXRpb25zW2xhbmddID0gdHJhbnNsYXRpb25zO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUxhbmdzKCk7XG4gICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlLmVtaXQoe2xhbmc6IGxhbmcsIHRyYW5zbGF0aW9uczogdGhpcy50cmFuc2xhdGlvbnNbbGFuZ119KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGN1cnJlbnRseSBhdmFpbGFibGUgbGFuZ3NcbiAgICovXG4gIHB1YmxpYyBnZXRMYW5ncygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5sYW5ncztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYXZhaWxhYmxlIGxhbmdzXG4gICAqL1xuICBwdWJsaWMgYWRkTGFuZ3MobGFuZ3M6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcbiAgICBsYW5ncy5mb3JFYWNoKChsYW5nOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICh0aGlzLmxhbmdzLmluZGV4T2YobGFuZykgPT09IC0xKSB7XG4gICAgICAgIHRoaXMubGFuZ3MucHVzaChsYW5nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGxpc3Qgb2YgYXZhaWxhYmxlIGxhbmdzXG4gICAqL1xuICBwcml2YXRlIHVwZGF0ZUxhbmdzKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkTGFuZ3MoT2JqZWN0LmtleXModGhpcy50cmFuc2xhdGlvbnMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwYXJzZWQgcmVzdWx0IG9mIHRoZSB0cmFuc2xhdGlvbnNcbiAgICovXG4gIHB1YmxpYyBnZXRQYXJzZWRSZXN1bHQodHJhbnNsYXRpb25zOiBhbnksIGtleTogYW55LCBpbnRlcnBvbGF0ZVBhcmFtcz86IE9iamVjdCk6IGFueSB7XG4gICAgbGV0IHJlczogc3RyaW5nIHwgT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gICAgaWYgKGtleSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fSxcbiAgICAgICAgb2JzZXJ2YWJsZXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGsgb2Yga2V5KSB7XG4gICAgICAgIHJlc3VsdFtrXSA9IHRoaXMuZ2V0UGFyc2VkUmVzdWx0KHRyYW5zbGF0aW9ucywgaywgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdFtrXS5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIG9ic2VydmFibGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG9ic2VydmFibGVzKSB7XG4gICAgICAgIGxldCBtZXJnZWRPYnM6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICAgICAgZm9yIChsZXQgayBvZiBrZXkpIHtcbiAgICAgICAgICBsZXQgb2JzID0gdHlwZW9mIHJlc3VsdFtrXS5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIiA/IHJlc3VsdFtrXSA6IG9mKHJlc3VsdFtrXSBhcyBzdHJpbmcpO1xuICAgICAgICAgIGlmICh0eXBlb2YgbWVyZ2VkT2JzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBtZXJnZWRPYnMgPSBvYnM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lcmdlZE9icyA9IG1lcmdlKG1lcmdlZE9icywgb2JzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lcmdlZE9icy5waXBlKFxuICAgICAgICAgIHRvQXJyYXkoKSxcbiAgICAgICAgICBtYXAoKGFycjogQXJyYXk8c3RyaW5nPikgPT4ge1xuICAgICAgICAgICAgbGV0IG9iajogYW55ID0ge307XG4gICAgICAgICAgICBhcnIuZm9yRWFjaCgodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICBvYmpba2V5W2luZGV4XV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBpZiAodHJhbnNsYXRpb25zKSB7XG4gICAgICByZXMgPSB0aGlzLnBhcnNlci5pbnRlcnBvbGF0ZSh0aGlzLnBhcnNlci5nZXRWYWx1ZSh0cmFuc2xhdGlvbnMsIGtleSksIGludGVycG9sYXRlUGFyYW1zKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlcyA9PT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLmRlZmF1bHRMYW5nICYmIHRoaXMuZGVmYXVsdExhbmcgIT09IHRoaXMuY3VycmVudExhbmcgJiYgdGhpcy51c2VEZWZhdWx0TGFuZykge1xuICAgICAgcmVzID0gdGhpcy5wYXJzZXIuaW50ZXJwb2xhdGUodGhpcy5wYXJzZXIuZ2V0VmFsdWUodGhpcy50cmFuc2xhdGlvbnNbdGhpcy5kZWZhdWx0TGFuZ10sIGtleSksIGludGVycG9sYXRlUGFyYW1zKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlcyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgbGV0IHBhcmFtczogTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlclBhcmFtcyA9IHtrZXksIHRyYW5zbGF0ZVNlcnZpY2U6IHRoaXN9O1xuICAgICAgaWYgKHR5cGVvZiBpbnRlcnBvbGF0ZVBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcGFyYW1zLmludGVycG9sYXRlUGFyYW1zID0gaW50ZXJwb2xhdGVQYXJhbXM7XG4gICAgICB9XG4gICAgICByZXMgPSB0aGlzLm1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIuaGFuZGxlKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiByZXMgIT09IFwidW5kZWZpbmVkXCIgPyByZXMgOiBrZXk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgdHJhbnNsYXRlZCB2YWx1ZSBvZiBhIGtleSAob3IgYW4gYXJyYXkgb2Yga2V5cylcbiAgICogQHJldHVybnMgdGhlIHRyYW5zbGF0ZWQga2V5LCBvciBhbiBvYmplY3Qgb2YgdHJhbnNsYXRlZCBrZXlzXG4gICAqL1xuICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiwgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3QpOiBPYnNlcnZhYmxlPHN0cmluZyB8IGFueT4ge1xuICAgIGlmICghaXNEZWZpbmVkKGtleSkgfHwgIWtleS5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUGFyYW1ldGVyIFwia2V5XCIgcmVxdWlyZWRgKTtcbiAgICB9XG4gICAgLy8gY2hlY2sgaWYgd2UgYXJlIGxvYWRpbmcgYSBuZXcgdHJhbnNsYXRpb24gdG8gdXNlXG4gICAgaWYgKHRoaXMucGVuZGluZykge1xuICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8c3RyaW5nPikgPT4ge1xuICAgICAgICBsZXQgb25Db21wbGV0ZSA9IChyZXM6IHN0cmluZykgPT4ge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgb25FcnJvciA9IChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubG9hZGluZ1RyYW5zbGF0aW9ucy5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgcmVzID0gdGhpcy5nZXRQYXJzZWRSZXN1bHQocmVzLCBrZXksIGludGVycG9sYXRlUGFyYW1zKTtcbiAgICAgICAgICBpZiAodHlwZW9mIHJlcy5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmVzLnN1YnNjcmliZShvbkNvbXBsZXRlLCBvbkVycm9yKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb25Db21wbGV0ZShyZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgb25FcnJvcik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHJlcyA9IHRoaXMuZ2V0UGFyc2VkUmVzdWx0KHRoaXMudHJhbnNsYXRpb25zW3RoaXMuY3VycmVudExhbmddLCBrZXksIGludGVycG9sYXRlUGFyYW1zKTtcbiAgICAgIGlmICh0eXBlb2YgcmVzLnN1YnNjcmliZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gb2YocmVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmVhbSBvZiB0cmFuc2xhdGVkIHZhbHVlcyBvZiBhIGtleSAob3IgYW4gYXJyYXkgb2Yga2V5cykgd2hpY2ggdXBkYXRlc1xuICAgKiB3aGVuZXZlciB0aGUgbGFuZ3VhZ2UgY2hhbmdlcy5cbiAgICogQHJldHVybnMgQSBzdHJlYW0gb2YgdGhlIHRyYW5zbGF0ZWQga2V5LCBvciBhbiBvYmplY3Qgb2YgdHJhbnNsYXRlZCBrZXlzXG4gICAqL1xuICBwdWJsaWMgc3RyZWFtKGtleTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiwgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3QpOiBPYnNlcnZhYmxlPHN0cmluZyB8IGFueT4ge1xuICAgIGlmICghaXNEZWZpbmVkKGtleSkgfHwgIWtleS5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUGFyYW1ldGVyIFwia2V5XCIgcmVxdWlyZWRgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uY2F0KFxuICAgICAgdGhpcy5nZXQoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcyksXG4gICAgICB0aGlzLm9uTGFuZ0NoYW5nZS5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKGV2ZW50OiBMYW5nQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCByZXMgPSB0aGlzLmdldFBhcnNlZFJlc3VsdChldmVudC50cmFuc2xhdGlvbnMsIGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICAgIGlmICh0eXBlb2YgcmVzLnN1YnNjcmliZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb2YocmVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgdHJhbnNsYXRpb24gaW5zdGFudGx5IGZyb20gdGhlIGludGVybmFsIHN0YXRlIG9mIGxvYWRlZCB0cmFuc2xhdGlvbi5cbiAgICogQWxsIHJ1bGVzIHJlZ2FyZGluZyB0aGUgY3VycmVudCBsYW5ndWFnZSwgdGhlIHByZWZlcnJlZCBsYW5ndWFnZSBvZiBldmVuIGZhbGxiYWNrIGxhbmd1YWdlcyB3aWxsIGJlIHVzZWQgZXhjZXB0IGFueSBwcm9taXNlIGhhbmRsaW5nLlxuICAgKi9cbiAgcHVibGljIGluc3RhbnQoa2V5OiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+LCBpbnRlcnBvbGF0ZVBhcmFtcz86IE9iamVjdCk6IHN0cmluZyB8IGFueSB7XG4gICAgaWYgKCFpc0RlZmluZWQoa2V5KSB8fCAha2V5Lmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQYXJhbWV0ZXIgXCJrZXlcIiByZXF1aXJlZGApO1xuICAgIH1cblxuICAgIGxldCByZXMgPSB0aGlzLmdldFBhcnNlZFJlc3VsdCh0aGlzLnRyYW5zbGF0aW9uc1t0aGlzLmN1cnJlbnRMYW5nXSwga2V5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XG4gICAgaWYgKHR5cGVvZiByZXMuc3Vic2NyaWJlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBpZiAoa2V5IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgbGV0IG9iajogYW55ID0ge307XG4gICAgICAgIGtleS5mb3JFYWNoKCh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgb2JqW2tleVtpbmRleF1dID0ga2V5W2luZGV4XTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgICB9XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0cmFuc2xhdGVkIHZhbHVlIG9mIGEga2V5LCBhZnRlciBjb21waWxpbmcgaXRcbiAgICovXG4gIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGxhbmc6IHN0cmluZyA9IHRoaXMuY3VycmVudExhbmcpOiB2b2lkIHtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXVtrZXldID0gdGhpcy5jb21waWxlci5jb21waWxlKHZhbHVlLCBsYW5nKTtcbiAgICB0aGlzLnVwZGF0ZUxhbmdzKCk7XG4gICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlLmVtaXQoe2xhbmc6IGxhbmcsIHRyYW5zbGF0aW9uczogdGhpcy50cmFuc2xhdGlvbnNbbGFuZ119KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBjdXJyZW50IGxhbmdcbiAgICovXG4gIHByaXZhdGUgY2hhbmdlTGFuZyhsYW5nOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRMYW5nID0gbGFuZztcbiAgICB0aGlzLm9uTGFuZ0NoYW5nZS5lbWl0KHtsYW5nOiBsYW5nLCB0cmFuc2xhdGlvbnM6IHRoaXMudHJhbnNsYXRpb25zW2xhbmddfSk7XG5cbiAgICAvLyBpZiB0aGVyZSBpcyBubyBkZWZhdWx0IGxhbmcsIHVzZSB0aGUgb25lIHRoYXQgd2UganVzdCBzZXRcbiAgICBpZiAoIXRoaXMuZGVmYXVsdExhbmcpIHtcbiAgICAgIHRoaXMuY2hhbmdlRGVmYXVsdExhbmcobGFuZyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGRlZmF1bHQgbGFuZ1xuICAgKi9cbiAgcHJpdmF0ZSBjaGFuZ2VEZWZhdWx0TGFuZyhsYW5nOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmRlZmF1bHRMYW5nID0gbGFuZztcbiAgICB0aGlzLm9uRGVmYXVsdExhbmdDaGFuZ2UuZW1pdCh7bGFuZzogbGFuZywgdHJhbnNsYXRpb25zOiB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXX0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyB0byByZWxvYWQgdGhlIGxhbmcgZmlsZSBmcm9tIHRoZSBmaWxlXG4gICAqL1xuICBwdWJsaWMgcmVsb2FkTGFuZyhsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHRoaXMucmVzZXRMYW5nKGxhbmcpO1xuICAgIHJldHVybiB0aGlzLmdldFRyYW5zbGF0aW9uKGxhbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgaW5uZXIgdHJhbnNsYXRpb25cbiAgICovXG4gIHB1YmxpYyByZXNldExhbmcobGFuZzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fdHJhbnNsYXRpb25SZXF1ZXN0c1tsYW5nXSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsYW5ndWFnZSBjb2RlIG5hbWUgZnJvbSB0aGUgYnJvd3NlciwgZS5nLiBcImRlXCJcbiAgICovXG4gIHB1YmxpYyBnZXRCcm93c2VyTGFuZygpOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93Lm5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgbGV0IGJyb3dzZXJMYW5nOiBhbnkgPSB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlcyA/IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VzWzBdIDogbnVsbDtcbiAgICBicm93c2VyTGFuZyA9IGJyb3dzZXJMYW5nIHx8IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgd2luZG93Lm5hdmlnYXRvci5icm93c2VyTGFuZ3VhZ2UgfHwgd2luZG93Lm5hdmlnYXRvci51c2VyTGFuZ3VhZ2U7XG5cbiAgICBpZiAoYnJvd3NlckxhbmcuaW5kZXhPZignLScpICE9PSAtMSkge1xuICAgICAgYnJvd3NlckxhbmcgPSBicm93c2VyTGFuZy5zcGxpdCgnLScpWzBdO1xuICAgIH1cblxuICAgIGlmIChicm93c2VyTGFuZy5pbmRleE9mKCdfJykgIT09IC0xKSB7XG4gICAgICBicm93c2VyTGFuZyA9IGJyb3dzZXJMYW5nLnNwbGl0KCdfJylbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJyb3dzZXJMYW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1bHR1cmUgbGFuZ3VhZ2UgY29kZSBuYW1lIGZyb20gdGhlIGJyb3dzZXIsIGUuZy4gXCJkZS1ERVwiXG4gICAqL1xuICBwdWJsaWMgZ2V0QnJvd3NlckN1bHR1cmVMYW5nKCk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW5kb3cubmF2aWdhdG9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBsZXQgYnJvd3NlckN1bHR1cmVMYW5nOiBhbnkgPSB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlcyA/IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VzWzBdIDogbnVsbDtcbiAgICBicm93c2VyQ3VsdHVyZUxhbmcgPSBicm93c2VyQ3VsdHVyZUxhbmcgfHwgd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSB8fCB3aW5kb3cubmF2aWdhdG9yLmJyb3dzZXJMYW5ndWFnZSB8fCB3aW5kb3cubmF2aWdhdG9yLnVzZXJMYW5ndWFnZTtcblxuICAgIHJldHVybiBicm93c2VyQ3VsdHVyZUxhbmc7XG4gIH1cbn1cbiIsImltcG9ydCB7QWZ0ZXJWaWV3Q2hlY2tlZCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0RlZmF1bHRMYW5nQ2hhbmdlRXZlbnQsIExhbmdDaGFuZ2VFdmVudCwgVHJhbnNsYXRlU2VydmljZSwgVHJhbnNsYXRpb25DaGFuZ2VFdmVudH0gZnJvbSAnLi90cmFuc2xhdGUuc2VydmljZSc7XG5pbXBvcnQge2VxdWFscywgaXNEZWZpbmVkfSBmcm9tICcuL3V0aWwnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdHJhbnNsYXRlXSxbbmd4LXRyYW5zbGF0ZV0nXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQsIE9uRGVzdHJveSB7XG4gIGtleTogc3RyaW5nO1xuICBsYXN0UGFyYW1zOiBhbnk7XG4gIGN1cnJlbnRQYXJhbXM6IGFueTtcbiAgb25MYW5nQ2hhbmdlU3ViOiBTdWJzY3JpcHRpb247XG4gIG9uRGVmYXVsdExhbmdDaGFuZ2VTdWI6IFN1YnNjcmlwdGlvbjtcbiAgb25UcmFuc2xhdGlvbkNoYW5nZVN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIEBJbnB1dCgpIHNldCB0cmFuc2xhdGUoa2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoa2V5KSB7XG4gICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgIHRoaXMuY2hlY2tOb2RlcygpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpIHNldCB0cmFuc2xhdGVQYXJhbXMocGFyYW1zOiBhbnkpIHtcbiAgICBpZiAoIWVxdWFscyh0aGlzLmN1cnJlbnRQYXJhbXMsIHBhcmFtcykpIHtcbiAgICAgIHRoaXMuY3VycmVudFBhcmFtcyA9IHBhcmFtcztcbiAgICAgIHRoaXMuY2hlY2tOb2Rlcyh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIC8vIHN1YnNjcmliZSB0byBvblRyYW5zbGF0aW9uQ2hhbmdlIGV2ZW50LCBpbiBjYXNlIHRoZSB0cmFuc2xhdGlvbnMgb2YgdGhlIGN1cnJlbnQgbGFuZyBjaGFuZ2VcbiAgICBpZiAoIXRoaXMub25UcmFuc2xhdGlvbkNoYW5nZVN1Yikge1xuICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlU3ViID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uVHJhbnNsYXRpb25DaGFuZ2Uuc3Vic2NyaWJlKChldmVudDogVHJhbnNsYXRpb25DaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQubGFuZyA9PT0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmN1cnJlbnRMYW5nKSB7XG4gICAgICAgICAgdGhpcy5jaGVja05vZGVzKHRydWUsIGV2ZW50LnRyYW5zbGF0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHN1YnNjcmliZSB0byBvbkxhbmdDaGFuZ2UgZXZlbnQsIGluIGNhc2UgdGhlIGxhbmd1YWdlIGNoYW5nZXNcbiAgICBpZiAoIXRoaXMub25MYW5nQ2hhbmdlU3ViKSB7XG4gICAgICB0aGlzLm9uTGFuZ0NoYW5nZVN1YiA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChldmVudDogTGFuZ0NoYW5nZUV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuY2hlY2tOb2Rlcyh0cnVlLCBldmVudC50cmFuc2xhdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gc3Vic2NyaWJlIHRvIG9uRGVmYXVsdExhbmdDaGFuZ2UgZXZlbnQsIGluIGNhc2UgdGhlIGRlZmF1bHQgbGFuZ3VhZ2UgY2hhbmdlc1xuICAgIGlmICghdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlU3ViKSB7XG4gICAgICB0aGlzLm9uRGVmYXVsdExhbmdDaGFuZ2VTdWIgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25EZWZhdWx0TGFuZ0NoYW5nZS5zdWJzY3JpYmUoKGV2ZW50OiBEZWZhdWx0TGFuZ0NoYW5nZUV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuY2hlY2tOb2Rlcyh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICB0aGlzLmNoZWNrTm9kZXMoKTtcbiAgfVxuXG4gIGNoZWNrTm9kZXMoZm9yY2VVcGRhdGUgPSBmYWxzZSwgdHJhbnNsYXRpb25zPzogYW55KSB7XG4gICAgbGV0IG5vZGVzOiBOb2RlTGlzdCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXM7XG4gICAgLy8gaWYgdGhlIGVsZW1lbnQgaXMgZW1wdHlcbiAgICBpZiAoIW5vZGVzLmxlbmd0aCkge1xuICAgICAgLy8gd2UgYWRkIHRoZSBrZXkgYXMgY29udGVudFxuICAgICAgdGhpcy5zZXRDb250ZW50KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLmtleSk7XG4gICAgICBub2RlcyA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXM7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxldCBub2RlOiBhbnkgPSBub2Rlc1tpXTtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7IC8vIG5vZGUgdHlwZSAzIGlzIGEgdGV4dCBub2RlXG4gICAgICAgIGxldCBrZXk6IHN0cmluZztcbiAgICAgICAgaWYgKHRoaXMua2V5KSB7XG4gICAgICAgICAga2V5ID0gdGhpcy5rZXk7XG4gICAgICAgICAgaWYgKGZvcmNlVXBkYXRlKSB7XG4gICAgICAgICAgICBub2RlLmxhc3RLZXkgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudChub2RlKTtcbiAgICAgICAgICBsZXQgdHJpbW1lZENvbnRlbnQgPSBjb250ZW50LnRyaW0oKTtcbiAgICAgICAgICBpZiAodHJpbW1lZENvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyB3ZSB3YW50IHRvIHVzZSB0aGUgY29udGVudCBhcyBhIGtleSwgbm90IHRoZSB0cmFuc2xhdGlvbiB2YWx1ZVxuICAgICAgICAgICAgaWYgKGNvbnRlbnQgIT09IG5vZGUuY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICAgIGtleSA9IHRyaW1tZWRDb250ZW50O1xuICAgICAgICAgICAgICAvLyB0aGUgY29udGVudCB3YXMgY2hhbmdlZCBmcm9tIHRoZSB1c2VyLCB3ZSdsbCB1c2UgaXQgYXMgYSByZWZlcmVuY2UgaWYgbmVlZGVkXG4gICAgICAgICAgICAgIG5vZGUub3JpZ2luYWxDb250ZW50ID0gdGhpcy5nZXRDb250ZW50KG5vZGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLm9yaWdpbmFsQ29udGVudCAmJiBmb3JjZVVwZGF0ZSkgeyAvLyB0aGUgY29udGVudCBzZWVtcyBvaywgYnV0IHRoZSBsYW5nIGhhcyBjaGFuZ2VkXG4gICAgICAgICAgICAgIG5vZGUubGFzdEtleSA9IG51bGw7XG4gICAgICAgICAgICAgIC8vIHRoZSBjdXJyZW50IGNvbnRlbnQgaXMgdGhlIHRyYW5zbGF0aW9uLCBub3QgdGhlIGtleSwgdXNlIHRoZSBsYXN0IHJlYWwgY29udGVudCBhcyBrZXlcbiAgICAgICAgICAgICAga2V5ID0gbm9kZS5vcmlnaW5hbENvbnRlbnQudHJpbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKGtleSwgbm9kZSwgdHJhbnNsYXRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVWYWx1ZShrZXk6IHN0cmluZywgbm9kZTogYW55LCB0cmFuc2xhdGlvbnM6IGFueSkge1xuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChub2RlLmxhc3RLZXkgPT09IGtleSAmJiB0aGlzLmxhc3RQYXJhbXMgPT09IHRoaXMuY3VycmVudFBhcmFtcykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGFzdFBhcmFtcyA9IHRoaXMuY3VycmVudFBhcmFtcztcblxuICAgICAgbGV0IG9uVHJhbnNsYXRpb24gPSAocmVzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHJlcyAhPT0ga2V5KSB7XG4gICAgICAgICAgbm9kZS5sYXN0S2V5ID0ga2V5O1xuICAgICAgICB9XG4gICAgICAgIGlmICghbm9kZS5vcmlnaW5hbENvbnRlbnQpIHtcbiAgICAgICAgICBub2RlLm9yaWdpbmFsQ29udGVudCA9IHRoaXMuZ2V0Q29udGVudChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBub2RlLmN1cnJlbnRWYWx1ZSA9IGlzRGVmaW5lZChyZXMpID8gcmVzIDogKG5vZGUub3JpZ2luYWxDb250ZW50IHx8IGtleSk7XG4gICAgICAgIC8vIHdlIHJlcGxhY2UgaW4gdGhlIG9yaWdpbmFsIGNvbnRlbnQgdG8gcHJlc2VydmUgc3BhY2VzIHRoYXQgd2UgbWlnaHQgaGF2ZSB0cmltbWVkXG4gICAgICAgIHRoaXMuc2V0Q29udGVudChub2RlLCB0aGlzLmtleSA/IG5vZGUuY3VycmVudFZhbHVlIDogbm9kZS5vcmlnaW5hbENvbnRlbnQucmVwbGFjZShrZXksIG5vZGUuY3VycmVudFZhbHVlKSk7XG4gICAgICAgIHRoaXMuX3JlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChpc0RlZmluZWQodHJhbnNsYXRpb25zKSkge1xuICAgICAgICBsZXQgcmVzID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldFBhcnNlZFJlc3VsdCh0cmFuc2xhdGlvbnMsIGtleSwgdGhpcy5jdXJyZW50UGFyYW1zKTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXMuc3Vic2NyaWJlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICByZXMuc3Vic2NyaWJlKG9uVHJhbnNsYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9uVHJhbnNsYXRpb24ocmVzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldChrZXksIHRoaXMuY3VycmVudFBhcmFtcykuc3Vic2NyaWJlKG9uVHJhbnNsYXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENvbnRlbnQobm9kZTogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gaXNEZWZpbmVkKG5vZGUudGV4dENvbnRlbnQpID8gbm9kZS50ZXh0Q29udGVudCA6IG5vZGUuZGF0YTtcbiAgfVxuXG4gIHNldENvbnRlbnQobm9kZTogYW55LCBjb250ZW50OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoaXNEZWZpbmVkKG5vZGUudGV4dENvbnRlbnQpKSB7XG4gICAgICBub2RlLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5kYXRhID0gY29udGVudDtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5vbkxhbmdDaGFuZ2VTdWIpIHtcbiAgICAgIHRoaXMub25MYW5nQ2hhbmdlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZVN1Yikge1xuICAgICAgdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZVN1Yikge1xuICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIE9uRGVzdHJveSwgUGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RlZmF1bHRMYW5nQ2hhbmdlRXZlbnQsIExhbmdDaGFuZ2VFdmVudCwgVHJhbnNsYXRlU2VydmljZSwgVHJhbnNsYXRpb25DaGFuZ2VFdmVudH0gZnJvbSAnLi90cmFuc2xhdGUuc2VydmljZSc7XG5pbXBvcnQge2VxdWFscywgaXNEZWZpbmVkfSBmcm9tICcuL3V0aWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5AUGlwZSh7XG4gIG5hbWU6ICd0cmFuc2xhdGUnLFxuICBwdXJlOiBmYWxzZSAvLyByZXF1aXJlZCB0byB1cGRhdGUgdGhlIHZhbHVlIHdoZW4gdGhlIHByb21pc2UgaXMgcmVzb2x2ZWRcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0sIE9uRGVzdHJveSB7XG4gIHZhbHVlOiBzdHJpbmcgPSAnJztcbiAgbGFzdEtleTogc3RyaW5nO1xuICBsYXN0UGFyYW1zOiBhbnlbXTtcbiAgb25UcmFuc2xhdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPFRyYW5zbGF0aW9uQ2hhbmdlRXZlbnQ+O1xuICBvbkxhbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxMYW5nQ2hhbmdlRXZlbnQ+O1xuICBvbkRlZmF1bHRMYW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGVmYXVsdExhbmdDaGFuZ2VFdmVudD47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsIHByaXZhdGUgX3JlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKGtleTogc3RyaW5nLCBpbnRlcnBvbGF0ZVBhcmFtcz86IE9iamVjdCwgdHJhbnNsYXRpb25zPzogYW55KTogdm9pZCB7XG4gICAgbGV0IG9uVHJhbnNsYXRpb24gPSAocmVzOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSByZXMgIT09IHVuZGVmaW5lZCA/IHJlcyA6IGtleTtcbiAgICAgIHRoaXMubGFzdEtleSA9IGtleTtcbiAgICAgIHRoaXMuX3JlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9O1xuICAgIGlmICh0cmFuc2xhdGlvbnMpIHtcbiAgICAgIGxldCByZXMgPSB0aGlzLnRyYW5zbGF0ZS5nZXRQYXJzZWRSZXN1bHQodHJhbnNsYXRpb25zLCBrZXksIGludGVycG9sYXRlUGFyYW1zKTtcbiAgICAgIGlmICh0eXBlb2YgcmVzLnN1YnNjcmliZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXMuc3Vic2NyaWJlKG9uVHJhbnNsYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25UcmFuc2xhdGlvbihyZXMpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnRyYW5zbGF0ZS5nZXQoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcykuc3Vic2NyaWJlKG9uVHJhbnNsYXRpb24pO1xuICB9XG5cbiAgdHJhbnNmb3JtKHF1ZXJ5OiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcbiAgICBpZiAoIXF1ZXJ5IHx8IHF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH1cblxuICAgIC8vIGlmIHdlIGFzayBhbm90aGVyIHRpbWUgZm9yIHRoZSBzYW1lIGtleSwgcmV0dXJuIHRoZSBsYXN0IHZhbHVlXG4gICAgaWYgKGVxdWFscyhxdWVyeSwgdGhpcy5sYXN0S2V5KSAmJiBlcXVhbHMoYXJncywgdGhpcy5sYXN0UGFyYW1zKSkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IGludGVycG9sYXRlUGFyYW1zOiBPYmplY3Q7XG4gICAgaWYgKGlzRGVmaW5lZChhcmdzWzBdKSAmJiBhcmdzLmxlbmd0aCkge1xuICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJyAmJiBhcmdzWzBdLmxlbmd0aCkge1xuICAgICAgICAvLyB3ZSBhY2NlcHQgb2JqZWN0cyB3cml0dGVuIGluIHRoZSB0ZW1wbGF0ZSBzdWNoIGFzIHtuOjF9LCB7J24nOjF9LCB7bjondid9XG4gICAgICAgIC8vIHdoaWNoIGlzIHdoeSB3ZSBtaWdodCBuZWVkIHRvIGNoYW5nZSBpdCB0byByZWFsIEpTT04gb2JqZWN0cyBzdWNoIGFzIHtcIm5cIjoxfSBvciB7XCJuXCI6XCJ2XCJ9XG4gICAgICAgIGxldCB2YWxpZEFyZ3M6IHN0cmluZyA9IGFyZ3NbMF1cbiAgICAgICAgICAucmVwbGFjZSgvKFxcJyk/KFthLXpBLVowLTlfXSspKFxcJyk/KFxccyk/Oi9nLCAnXCIkMlwiOicpXG4gICAgICAgICAgLnJlcGxhY2UoLzooXFxzKT8oXFwnKSguKj8pKFxcJykvZywgJzpcIiQzXCInKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpbnRlcnBvbGF0ZVBhcmFtcyA9IEpTT04ucGFyc2UodmFsaWRBcmdzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgV3JvbmcgcGFyYW1ldGVyIGluIFRyYW5zbGF0ZVBpcGUuIEV4cGVjdGVkIGEgdmFsaWQgT2JqZWN0LCByZWNlaXZlZDogJHthcmdzWzBdfWApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShhcmdzWzBdKSkge1xuICAgICAgICBpbnRlcnBvbGF0ZVBhcmFtcyA9IGFyZ3NbMF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gc3RvcmUgdGhlIHF1ZXJ5LCBpbiBjYXNlIGl0IGNoYW5nZXNcbiAgICB0aGlzLmxhc3RLZXkgPSBxdWVyeTtcblxuICAgIC8vIHN0b3JlIHRoZSBwYXJhbXMsIGluIGNhc2UgdGhleSBjaGFuZ2VcbiAgICB0aGlzLmxhc3RQYXJhbXMgPSBhcmdzO1xuXG4gICAgLy8gc2V0IHRoZSB2YWx1ZVxuICAgIHRoaXMudXBkYXRlVmFsdWUocXVlcnksIGludGVycG9sYXRlUGFyYW1zKTtcblxuICAgIC8vIGlmIHRoZXJlIGlzIGEgc3Vic2NyaXB0aW9uIHRvIG9uTGFuZ0NoYW5nZSwgY2xlYW4gaXRcbiAgICB0aGlzLl9kaXNwb3NlKCk7XG5cbiAgICAvLyBzdWJzY3JpYmUgdG8gb25UcmFuc2xhdGlvbkNoYW5nZSBldmVudCwgaW4gY2FzZSB0aGUgdHJhbnNsYXRpb25zIGNoYW5nZVxuICAgIGlmICghdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uVHJhbnNsYXRpb25DaGFuZ2UgPSB0aGlzLnRyYW5zbGF0ZS5vblRyYW5zbGF0aW9uQ2hhbmdlLnN1YnNjcmliZSgoZXZlbnQ6IFRyYW5zbGF0aW9uQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubGFzdEtleSAmJiBldmVudC5sYW5nID09PSB0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZykge1xuICAgICAgICAgIHRoaXMubGFzdEtleSA9IG51bGw7XG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShxdWVyeSwgaW50ZXJwb2xhdGVQYXJhbXMsIGV2ZW50LnRyYW5zbGF0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHN1YnNjcmliZSB0byBvbkxhbmdDaGFuZ2UgZXZlbnQsIGluIGNhc2UgdGhlIGxhbmd1YWdlIGNoYW5nZXNcbiAgICBpZiAoIXRoaXMub25MYW5nQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uTGFuZ0NoYW5nZSA9IHRoaXMudHJhbnNsYXRlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKGV2ZW50OiBMYW5nQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubGFzdEtleSkge1xuICAgICAgICAgIHRoaXMubGFzdEtleSA9IG51bGw7IC8vIHdlIHdhbnQgdG8gbWFrZSBzdXJlIGl0IGRvZXNuJ3QgcmV0dXJuIHRoZSBzYW1lIHZhbHVlIHVudGlsIGl0J3MgYmVlbiB1cGRhdGVkXG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShxdWVyeSwgaW50ZXJwb2xhdGVQYXJhbXMsIGV2ZW50LnRyYW5zbGF0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHN1YnNjcmliZSB0byBvbkRlZmF1bHRMYW5nQ2hhbmdlIGV2ZW50LCBpbiBjYXNlIHRoZSBkZWZhdWx0IGxhbmd1YWdlIGNoYW5nZXNcbiAgICBpZiAoIXRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZSkge1xuICAgICAgdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlID0gdGhpcy50cmFuc2xhdGUub25EZWZhdWx0TGFuZ0NoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5sYXN0S2V5KSB7XG4gICAgICAgICAgdGhpcy5sYXN0S2V5ID0gbnVsbDsgLy8gd2Ugd2FudCB0byBtYWtlIHN1cmUgaXQgZG9lc24ndCByZXR1cm4gdGhlIHNhbWUgdmFsdWUgdW50aWwgaXQncyBiZWVuIHVwZGF0ZWRcbiAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHF1ZXJ5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFuIGFueSBleGlzdGluZyBzdWJzY3JpcHRpb24gdG8gY2hhbmdlIGV2ZW50c1xuICAgKi9cbiAgcHJpdmF0ZSBfZGlzcG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZS51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMub25MYW5nQ2hhbmdlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5vbkxhbmdDaGFuZ2UudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMub25MYW5nQ2hhbmdlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZS51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2Rpc3Bvc2UoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgUHJvdmlkZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1RyYW5zbGF0ZUxvYWRlciwgVHJhbnNsYXRlRmFrZUxvYWRlcn0gZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5sb2FkZXJcIjtcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQge01pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIEZha2VNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyfSBmcm9tIFwiLi9saWIvbWlzc2luZy10cmFuc2xhdGlvbi1oYW5kbGVyXCI7XG5pbXBvcnQge1RyYW5zbGF0ZVBhcnNlciwgVHJhbnNsYXRlRGVmYXVsdFBhcnNlcn0gZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5wYXJzZXJcIjtcbmltcG9ydCB7VHJhbnNsYXRlQ29tcGlsZXIsIFRyYW5zbGF0ZUZha2VDb21waWxlcn0gZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5jb21waWxlclwiO1xuaW1wb3J0IHtUcmFuc2xhdGVEaXJlY3RpdmV9IGZyb20gXCIuL2xpYi90cmFuc2xhdGUuZGlyZWN0aXZlXCI7XG5pbXBvcnQge1RyYW5zbGF0ZVBpcGV9IGZyb20gXCIuL2xpYi90cmFuc2xhdGUucGlwZVwiO1xuaW1wb3J0IHtUcmFuc2xhdGVTdG9yZX0gZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5zdG9yZVwiO1xuaW1wb3J0IHtVU0VfU1RPUkV9IGZyb20gXCIuL2xpYi90cmFuc2xhdGUuc2VydmljZVwiO1xuaW1wb3J0IHtVU0VfREVGQVVMVF9MQU5HfSBmcm9tIFwiLi9saWIvdHJhbnNsYXRlLnNlcnZpY2VcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5sb2FkZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi90cmFuc2xhdGUuc2VydmljZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vbGliL21pc3NpbmctdHJhbnNsYXRpb24taGFuZGxlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5wYXJzZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi90cmFuc2xhdGUuY29tcGlsZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi90cmFuc2xhdGUuZGlyZWN0aXZlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9saWIvdHJhbnNsYXRlLnBpcGVcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi90cmFuc2xhdGUuc3RvcmVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGVNb2R1bGVDb25maWcge1xuICBsb2FkZXI/OiBQcm92aWRlcjtcbiAgY29tcGlsZXI/OiBQcm92aWRlcjtcbiAgcGFyc2VyPzogUHJvdmlkZXI7XG4gIG1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXI/OiBQcm92aWRlcjtcbiAgLy8gaXNvbGF0ZSB0aGUgc2VydmljZSBpbnN0YW5jZSwgb25seSB3b3JrcyBmb3IgbGF6eSBsb2FkZWQgbW9kdWxlcyBvciBjb21wb25lbnRzIHdpdGggdGhlIFwicHJvdmlkZXJzXCIgcHJvcGVydHlcbiAgaXNvbGF0ZT86IGJvb2xlYW47XG4gIHVzZURlZmF1bHRMYW5nPzogYm9vbGVhbjtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVHJhbnNsYXRlUGlwZSxcbiAgICBUcmFuc2xhdGVEaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRyYW5zbGF0ZVBpcGUsXG4gICAgVHJhbnNsYXRlRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlTW9kdWxlIHtcbiAgLyoqXG4gICAqIFVzZSB0aGlzIG1ldGhvZCBpbiB5b3VyIHJvb3QgbW9kdWxlIHRvIHByb3ZpZGUgdGhlIFRyYW5zbGF0ZVNlcnZpY2VcbiAgICovXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogVHJhbnNsYXRlTW9kdWxlQ29uZmlnID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRyYW5zbGF0ZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBjb25maWcubG9hZGVyIHx8IHtwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsIHVzZUNsYXNzOiBUcmFuc2xhdGVGYWtlTG9hZGVyfSxcbiAgICAgICAgY29uZmlnLmNvbXBpbGVyIHx8IHtwcm92aWRlOiBUcmFuc2xhdGVDb21waWxlciwgdXNlQ2xhc3M6IFRyYW5zbGF0ZUZha2VDb21waWxlcn0sXG4gICAgICAgIGNvbmZpZy5wYXJzZXIgfHwge3Byb3ZpZGU6IFRyYW5zbGF0ZVBhcnNlciwgdXNlQ2xhc3M6IFRyYW5zbGF0ZURlZmF1bHRQYXJzZXJ9LFxuICAgICAgICBjb25maWcubWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB8fCB7cHJvdmlkZTogTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciwgdXNlQ2xhc3M6IEZha2VNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyfSxcbiAgICAgICAgVHJhbnNsYXRlU3RvcmUsXG4gICAgICAgIHtwcm92aWRlOiBVU0VfU1RPUkUsIHVzZVZhbHVlOiBjb25maWcuaXNvbGF0ZX0sXG4gICAgICAgIHtwcm92aWRlOiBVU0VfREVGQVVMVF9MQU5HLCB1c2VWYWx1ZTogY29uZmlnLnVzZURlZmF1bHRMYW5nfSxcbiAgICAgICAgVHJhbnNsYXRlU2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRoaXMgbWV0aG9kIGluIHlvdXIgb3RoZXIgKG5vbiByb290KSBtb2R1bGVzIHRvIGltcG9ydCB0aGUgZGlyZWN0aXZlL3BpcGVcbiAgICovXG4gIHN0YXRpYyBmb3JDaGlsZChjb25maWc6IFRyYW5zbGF0ZU1vZHVsZUNvbmZpZyA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUcmFuc2xhdGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgY29uZmlnLmxvYWRlciB8fCB7cHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLCB1c2VDbGFzczogVHJhbnNsYXRlRmFrZUxvYWRlcn0sXG4gICAgICAgIGNvbmZpZy5jb21waWxlciB8fCB7cHJvdmlkZTogVHJhbnNsYXRlQ29tcGlsZXIsIHVzZUNsYXNzOiBUcmFuc2xhdGVGYWtlQ29tcGlsZXJ9LFxuICAgICAgICBjb25maWcucGFyc2VyIHx8IHtwcm92aWRlOiBUcmFuc2xhdGVQYXJzZXIsIHVzZUNsYXNzOiBUcmFuc2xhdGVEZWZhdWx0UGFyc2VyfSxcbiAgICAgICAgY29uZmlnLm1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgfHwge3Byb3ZpZGU6IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIHVzZUNsYXNzOiBGYWtlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcn0sXG4gICAgICAgIHtwcm92aWRlOiBVU0VfU1RPUkUsIHVzZVZhbHVlOiBjb25maWcuaXNvbGF0ZX0sXG4gICAgICAgIHtwcm92aWRlOiBVU0VfREVGQVVMVF9MQU5HLCB1c2VWYWx1ZTogY29uZmlnLnVzZURlZmF1bHRMYW5nfSxcbiAgICAgICAgVHJhbnNsYXRlU2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsInRzbGliXzEuX192YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUdBOzs7O0lBQUE7S0FFQztJQUFELHNCQUFDO0NBQUEsSUFBQTs7OztBQUtEO0lBQ3lDQSx1Q0FBZTtJQUR4RDs7S0FLQzs7Ozs7SUFIQyw0Q0FBYzs7OztJQUFkLFVBQWUsSUFBWTtRQUN6QixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNmOztnQkFKRixVQUFVOztJQUtYLDBCQUFDO0NBQUEsQ0FKd0MsZUFBZTs7Ozs7O0FDWHhEOzs7QUFvQkE7Ozs7SUFBQTtLQVdDO0lBQUQsZ0NBQUM7Q0FBQSxJQUFBOzs7O0FBS0Q7SUFBQTtLQUtDOzs7OztJQUhDLDhDQUFNOzs7O0lBQU4sVUFBTyxNQUF1QztRQUM1QyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUM7S0FDbkI7O2dCQUpGLFVBQVU7O0lBS1gsb0NBQUM7Q0FMRDs7Ozs7Ozs7O0FDbENBOzs7O0lBQUE7S0FJQztJQUFELHdCQUFDO0NBQUEsSUFBQTs7OztBQUtEO0lBQzJDQSx5Q0FBaUI7SUFENUQ7O0tBU0M7Ozs7OztJQVBDLHVDQUFPOzs7OztJQUFQLFVBQVEsS0FBYSxFQUFFLElBQVk7UUFDakMsT0FBTyxLQUFLLENBQUM7S0FDZDs7Ozs7O0lBRUQsbURBQW1COzs7OztJQUFuQixVQUFvQixZQUFpQixFQUFFLElBQVk7UUFDakQsT0FBTyxZQUFZLENBQUM7S0FDckI7O2dCQVJGLFVBQVU7O0lBU1gsNEJBQUM7Q0FBQSxDQVIwQyxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRTVELFNBQWdC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

/***/ }),

/***/ "../node_modules/@nstudio/nativescript-snackbar/snackbar.common.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DismissReasons;
(function (DismissReasons) {
    DismissReasons["SWIPE"] = "Swipe";
    DismissReasons["ACTION"] = "Action";
    DismissReasons["TIMEOUT"] = "Timeout";
    DismissReasons["MANUAL"] = "Manual";
    DismissReasons["CONSECUTIVE"] = "Consecutive";
    DismissReasons["UNKNOWN"] = "Unknown";
})(DismissReasons = exports.DismissReasons || (exports.DismissReasons = {}));
//# sourceMappingURL=snackbar.common.js.map

/***/ }),

/***/ "../node_modules/@nstudio/nativescript-snackbar/snackbar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var snackbar_common_1 = __webpack_require__("../node_modules/@nstudio/nativescript-snackbar/snackbar.common.js");
__export(__webpack_require__("../node_modules/@nstudio/nativescript-snackbar/snackbar.common.js"));
var SnackBar = (function () {
    function SnackBar() {
        this._snackbar = null;
        this._isDismissedManual = false;
    }
    SnackBar.prototype.simple = function (snackText) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var timeout = 3;
            try {
                _this._snackbar = SSSnackbar.snackbarWithMessageActionTextDurationActionBlockDismissalBlock(snackText, null, timeout, function (args) {
                    _this._snackbar.dismiss();
                    resolve({
                        command: 'Dismiss',
                        reason: snackbar_common_1.DismissReasons.MANUAL,
                        event: args
                    });
                }, function (args) {
                    resolve({
                        command: 'Dismiss',
                        reason: snackbar_common_1.DismissReasons.TIMEOUT,
                        event: args
                    });
                });
                _this._snackbar.show();
            }
            catch (ex) {
                reject(ex);
            }
        });
    };
    SnackBar.prototype.action = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!options.hideDelay)
                    options.hideDelay = 3000;
                _this._snackbar = SSSnackbar.snackbarWithMessageActionTextDurationActionBlockDismissalBlock(options.snackText, options.actionText, options.hideDelay / 1000, function (args) {
                    resolve({
                        command: 'Action',
                        event: args
                    });
                }, function (args) {
                    var reason = _this._isDismissedManual
                        ? snackbar_common_1.DismissReasons.MANUAL
                        : snackbar_common_1.DismissReasons.TIMEOUT;
                    _this._isDismissedManual = false;
                    resolve({
                        command: 'Dismiss',
                        reason: reason,
                        event: args
                    });
                });
                _this._snackbar.show();
            }
            catch (ex) {
                reject(ex);
            }
        });
    };
    SnackBar.prototype.dismiss = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._snackbar !== null && _this._snackbar !== 'undefined') {
                try {
                    _this._isDismissedManual = true;
                    _this._snackbar.dismiss();
                    setTimeout(function () {
                        resolve({
                            action: 'Dismiss',
                            reason: snackbar_common_1.DismissReasons.MANUAL
                        });
                    }, 200);
                }
                catch (ex) {
                    reject(ex);
                }
            }
            else {
                resolve({
                    action: 'None',
                    message: 'No actionbar to dismiss'
                });
            }
        });
    };
    return SnackBar;
}());
exports.SnackBar = SnackBar;
//# sourceMappingURL=snackbar.ios.js.map

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/hmr/hmr-update.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const hot = __webpack_require__("../node_modules/nativescript-dev-webpack/hot.js");
const file_system_1 = __webpack_require__("tns-core-modules/file-system");
function hmrUpdate() {
    const applicationFiles = file_system_1.knownFolders.currentApp();
    const latestHash = __webpack_require__["h"]();
    return hot(latestHash, filename => applicationFiles.getFile(filename));
}
exports.hmrUpdate = hmrUpdate;
//# sourceMappingURL=hmr-update.js.map

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/hmr/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hmr_update_1 = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/hmr-update.js");
exports.hmrUpdate = hmr_update_1.hmrUpdate;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/hot.js":
/***/ (function(module, exports, __webpack_require__) {

const hmrPrefix = 'HMR:';
const log = {
    info: (message) => console.info(`${hmrPrefix} ${message}`),
    warn: (message) => console.warn(`${hmrPrefix} ${message}`),
    error: (message) => console.error(`${hmrPrefix} ${message}`),
};
const refresh = 'Application needs to be restarted in order to apply the changes.';
const hotOptions = {
    ignoreUnaccepted: false,
    ignoreDeclined: false,
    ignoreErrored: false,
    onUnaccepted(data) {
        const chain = [].concat(data.chain);
        const last = chain[chain.length - 1];

        if (last === 0) {
            chain.pop();
        }

        log.warn(`Ignored an update to unaccepted module: `);
        chain.forEach(mod => log.warn(`         ➭ ${mod}`));
    },
    onDeclined(data) {
        log.warn(`Ignored an update to declined module:`);
        data.chain.forEach(mod => log.warn(`         ➭ ${mod}`));
    },
    onErrored(data) {
        log.warn(
            `Ignored an error while updating module ${data.moduleId} <${data.type}>`
        );
        log.warn(data.error);
    },
};

let nextHash;
let currentHash;

function upToDate() {
    return nextHash.indexOf(__webpack_require__.h()) >= 0;
}

function result(modules, appliedModules) {
    const unaccepted = modules.filter(
        (moduleId) => appliedModules && appliedModules.indexOf(moduleId) < 0
    );

    if (unaccepted.length > 0) {
        log.warn('The following modules could not be updated:');

        for (const moduleId of unaccepted) {
            log.warn(`          ⦻ ${moduleId}`);
        }
    }

    if (!(appliedModules || []).length) {
        log.info('No Modules Updated.');
    } else {
        log.info('The following modules were updated:');

        for (const moduleId of appliedModules) {
            log.info(`         ↻ ${moduleId}`);
        }

        const numberIds = appliedModules.every(
            (moduleId) => typeof moduleId === 'number'
        );
        if (numberIds) {
            log.info(
                'Please consider using the NamedModulesPlugin for module names.'
            );
        }
    }
}

function check(options) {
    return module.hot
        .check()
        .then((modules) => {
            if (!modules) {
                log.warn(
                    `Cannot find update. ${refresh}`
                );
                return null;
            }

            return module.hot
                .apply(hotOptions)
                .then((appliedModules) => {
                    let nextCheck;
                    if (!upToDate()) {
                        nextCheck = check(options);
                    }

                    result(modules, appliedModules);

                    if (upToDate()) {
                        // Do not modify message - CLI depends on this exact content to determine hmr operation status.
                        log.info(`Successfully applied update with hmr hash ${currentHash}. App is up to date.`);
                    }

                    return nextCheck || null;
                })
                .catch((err) => {
                    const status = module.hot.status();
                    if (['abort', 'fail'].indexOf(status) >= 0) {
                        // Do not modify message - CLI depends on this exact content to determine hmr operation status.
                        log.error(`Cannot apply update with hmr hash ${currentHash}.`);
                        log.error(err.message || err.stack);
                    } else {
                        log.error(`Update failed: ${err.message || err.stack}`);
                    }
                });
        })
        .catch((err) => {
            const status = module.hot.status();
            if (['abort', 'fail'].indexOf(status) >= 0) {
                log.error(`Cannot check for update. ${refresh}`);
                log.error(err.message || err.stack);
            } else {
                log.error(`Update check failed: ${err.message || err.stack}`);
            }
        });
}

if (true) {
    log.info('Hot Module Replacement Enabled. Waiting for signal.');
} else {}

function update(latestHash, options) {
    nextHash = latestHash;
    if (!upToDate()) {
        const status = module.hot.status();

        if (status === 'idle') {
            //Do not modify message - CLI depends on this exact content to determine hmr operation status.
            log.info(`Checking for updates to the bundle with hmr hash ${currentHash}.`);
            return check(options);
        } else if (['abort', 'fail'].indexOf(status) >= 0) {
            log.warn(
                `Cannot apply update. A previous update ${status}ed. ${refresh}`
            );
        }
    }
};

function getNextHash(hash, getFileContent) {
    const file = getFileContent(`${hash}.hot-update.json`);
    return file.readText().then(hotUpdateContent => {
        if (hotUpdateContent) {
            const manifest = JSON.parse(hotUpdateContent);
            const newHash = manifest.h;
            return getNextHash(newHash, getFileContent);
        } else {
            return Promise.resolve(hash);
        }
    }).catch(error => Promise.reject(error));
}

module.exports = function checkState(initialHash, getFileContent) {
    currentHash = initialHash;
    return getNextHash(initialHash, getFileContent).then(nextHash => {
        if (nextHash != initialHash) {
            return update(nextHash, {});
        }
    })
}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/load-application-css-angular.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const loadCss = __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css.js");

module.exports = function() {
    loadCss(function() {
        global.registerModule("./app.css", () => __webpack_require__("./app.css"));
    });
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/load-application-css.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (loadModuleFn) {
    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    loadModuleFn();

    application.loadAppCss();
}


/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
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

/***/ "../node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BuZ3gtdHJhbnNsYXRlL2NvcmUvZmVzbTUvbmd4LXRyYW5zbGF0ZS1jb3JlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQG5zdHVkaW8vbmF0aXZlc2NyaXB0LXNuYWNrYmFyL3NuYWNrYmFyLmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Buc3R1ZGlvL25hdGl2ZXNjcmlwdC1zbmFja2Jhci9zbmFja2Jhci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9obXIvaG1yLXVwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9obXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svaG90LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2xvYWQtYXBwbGljYXRpb24tY3NzLWFuZ3VsYXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svbG9hZC1hcHBsaWNhdGlvbi1jc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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Ozs7OztBQ25NQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoidmVuZG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX19leHRlbmRzLCBfX3ZhbHVlcyB9IGZyb20gJ3RzbGliJztcbmltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbmplY3Rpb25Ub2tlbiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIFBpcGUsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvZiwgY29uY2F0LCBtZXJnZSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZSwgc3dpdGNoTWFwLCB0YWtlLCB0b0FycmF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxuICogQHN1cHByZXNzIHtjaGVja1R5cGVzLGV4dHJhUmVxdWlyZSx1c2VsZXNzQ29kZX0gY2hlY2tlZCBieSB0c2NcbiAqL1xuLyoqXG4gKiBAYWJzdHJhY3RcbiAqL1xudmFyICAvKipcbiAqIEBhYnN0cmFjdFxuICovXG5UcmFuc2xhdGVMb2FkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVHJhbnNsYXRlTG9hZGVyKCkge1xuICAgIH1cbiAgICByZXR1cm4gVHJhbnNsYXRlTG9hZGVyO1xufSgpKTtcbi8qKlxuICogVGhpcyBsb2FkZXIgaXMganVzdCBhIHBsYWNlaG9sZGVyIHRoYXQgZG9lcyBub3RoaW5nLCBpbiBjYXNlIHlvdSBkb24ndCBuZWVkIGEgbG9hZGVyIGF0IGFsbFxuICovXG52YXIgVHJhbnNsYXRlRmFrZUxvYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVHJhbnNsYXRlRmFrZUxvYWRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUcmFuc2xhdGVGYWtlTG9hZGVyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gbGFuZ1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVHJhbnNsYXRlRmFrZUxvYWRlci5wcm90b3R5cGUuZ2V0VHJhbnNsYXRpb24gPSAvKipcbiAgICAgKiBAcGFyYW0gez99IGxhbmdcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChsYW5nKSB7XG4gICAgICAgIHJldHVybiBvZih7fSk7XG4gICAgfTtcbiAgICBUcmFuc2xhdGVGYWtlTG9hZGVyLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogSW5qZWN0YWJsZSB9XG4gICAgXTtcbiAgICByZXR1cm4gVHJhbnNsYXRlRmFrZUxvYWRlcjtcbn0oVHJhbnNsYXRlTG9hZGVyKSk7XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXMsZXh0cmFSZXF1aXJlLHVzZWxlc3NDb2RlfSBjaGVja2VkIGJ5IHRzY1xuICovXG4vKipcbiAqIEBhYnN0cmFjdFxuICovXG52YXIgIC8qKlxuICogQGFic3RyYWN0XG4gKi9cbk1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcigpIHtcbiAgICB9XG4gICAgcmV0dXJuIE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXI7XG59KCkpO1xuLyoqXG4gKiBUaGlzIGhhbmRsZXIgaXMganVzdCBhIHBsYWNlaG9sZGVyIHRoYXQgZG9lcyBub3RoaW5nLCBpbiBjYXNlIHlvdSBkb24ndCBuZWVkIGEgbWlzc2luZyB0cmFuc2xhdGlvbiBoYW5kbGVyIGF0IGFsbFxuICovXG52YXIgRmFrZU1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRmFrZU1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gcGFyYW1zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGYWtlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlci5wcm90b3R5cGUuaGFuZGxlID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSBwYXJhbXNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5rZXk7XG4gICAgfTtcbiAgICBGYWtlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlci5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IEluamVjdGFibGUgfVxuICAgIF07XG4gICAgcmV0dXJuIEZha2VNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyO1xufSgpKTtcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlcyxleHRyYVJlcXVpcmUsdXNlbGVzc0NvZGV9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbi8qKlxuICogQGFic3RyYWN0XG4gKi9cbnZhciAgLyoqXG4gKiBAYWJzdHJhY3RcbiAqL1xuVHJhbnNsYXRlQ29tcGlsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVHJhbnNsYXRlQ29tcGlsZXIoKSB7XG4gICAgfVxuICAgIHJldHVybiBUcmFuc2xhdGVDb21waWxlcjtcbn0oKSk7XG4vKipcbiAqIFRoaXMgY29tcGlsZXIgaXMganVzdCBhIHBsYWNlaG9sZGVyIHRoYXQgZG9lcyBub3RoaW5nLCBpbiBjYXNlIHlvdSBkb24ndCBuZWVkIGEgY29tcGlsZXIgYXQgYWxsXG4gKi9cbnZhciBUcmFuc2xhdGVGYWtlQ29tcGlsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRyYW5zbGF0ZUZha2VDb21waWxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUcmFuc2xhdGVGYWtlQ29tcGlsZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7P30gbGFuZ1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVHJhbnNsYXRlRmFrZUNvbXBpbGVyLnByb3RvdHlwZS5jb21waWxlID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7P30gbGFuZ1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHZhbHVlLCBsYW5nKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdHJhbnNsYXRpb25zXG4gICAgICogQHBhcmFtIHs/fSBsYW5nXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVGYWtlQ29tcGlsZXIucHJvdG90eXBlLmNvbXBpbGVUcmFuc2xhdGlvbnMgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IHRyYW5zbGF0aW9uc1xuICAgICAqIEBwYXJhbSB7P30gbGFuZ1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHRyYW5zbGF0aW9ucywgbGFuZykge1xuICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25zO1xuICAgIH07XG4gICAgVHJhbnNsYXRlRmFrZUNvbXBpbGVyLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogSW5qZWN0YWJsZSB9XG4gICAgXTtcbiAgICByZXR1cm4gVHJhbnNsYXRlRmFrZUNvbXBpbGVyO1xufShUcmFuc2xhdGVDb21waWxlcikpO1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxuICogQHN1cHByZXNzIHtjaGVja1R5cGVzLGV4dHJhUmVxdWlyZSx1c2VsZXNzQ29kZX0gY2hlY2tlZCBieSB0c2NcbiAqL1xuLyogdHNsaW50OmRpc2FibGUgKi9cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0d28gb2JqZWN0cyBvciB0d28gdmFsdWVzIGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIFR3byBvYmplY3RzIG9yIHZhbHVlcyBhcmUgY29uc2lkZXJlZCBlcXVpdmFsZW50IGlmIGF0IGxlYXN0IG9uZSBvZiB0aGUgZm9sbG93aW5nIGlzIHRydWU6XG4gKlxuICogKiBCb3RoIG9iamVjdHMgb3IgdmFsdWVzIHBhc3MgYD09PWAgY29tcGFyaXNvbi5cbiAqICogQm90aCBvYmplY3RzIG9yIHZhbHVlcyBhcmUgb2YgdGhlIHNhbWUgdHlwZSBhbmQgYWxsIG9mIHRoZWlyIHByb3BlcnRpZXMgYXJlIGVxdWFsIGJ5XG4gKiAgIGNvbXBhcmluZyB0aGVtIHdpdGggYGVxdWFsc2AuXG4gKlxuICogQHBhcmFtIHs/fSBvMSBPYmplY3Qgb3IgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7P30gbzIgT2JqZWN0IG9yIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJuIHs/fSB0cnVlIGlmIGFyZ3VtZW50cyBhcmUgZXF1YWwuXG4gKi9cbmZ1bmN0aW9uIGVxdWFscyhvMSwgbzIpIHtcbiAgICBpZiAobzEgPT09IG8yKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBpZiAobzEgPT09IG51bGwgfHwgbzIgPT09IG51bGwpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZiAobzEgIT09IG8xICYmIG8yICE9PSBvMilcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIE5hTiA9PT0gTmFOXG4gICAgLy8gTmFOID09PSBOYU5cbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgdmFyIHQxID0gdHlwZW9mIG8xO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICB2YXIgdDIgPSB0eXBlb2YgbzI7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIHZhciBsZW5ndGg7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIHZhciBrZXk7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIHZhciBrZXlTZXQ7XG4gICAgaWYgKHQxID09IHQyICYmIHQxID09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG8xKSkge1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG8yKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAoKGxlbmd0aCA9IG8xLmxlbmd0aCkgPT0gbzIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yIChrZXkgPSAwOyBrZXkgPCBsZW5ndGg7IGtleSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXF1YWxzKG8xW2tleV0sIG8yW2tleV0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG8yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVNldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBvMSkge1xuICAgICAgICAgICAgICAgIGlmICghZXF1YWxzKG8xW2tleV0sIG8yW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAga2V5U2V0W2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChrZXkgaW4gbzIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShrZXkgaW4ga2V5U2V0KSAmJiB0eXBlb2YgbzJba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbi8qIHRzbGludDplbmFibGUgKi9cbi8qKlxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgIT09IG51bGw7XG59XG4vKipcbiAqIEBwYXJhbSB7P30gaXRlbVxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QoaXRlbSkge1xuICAgIHJldHVybiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkpO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IHRhcmdldFxuICogQHBhcmFtIHs/fSBzb3VyY2VcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIG1lcmdlRGVlcCh0YXJnZXQsIHNvdXJjZSkge1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICB2YXIgb3V0cHV0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGFyZ2V0KTtcbiAgICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ob3V0cHV0LCAoX2EgPSB7fSwgX2Fba2V5XSA9IHNvdXJjZVtrZXldLCBfYSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2tleV0gPSBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKG91dHB1dCwgKF9iID0ge30sIF9iW2tleV0gPSBzb3VyY2Vba2V5XSwgX2IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG59XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXMsZXh0cmFSZXF1aXJlLHVzZWxlc3NDb2RlfSBjaGVja2VkIGJ5IHRzY1xuICovXG4vKipcbiAqIEBhYnN0cmFjdFxuICovXG52YXIgIC8qKlxuICogQGFic3RyYWN0XG4gKi9cblRyYW5zbGF0ZVBhcnNlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFuc2xhdGVQYXJzZXIoKSB7XG4gICAgfVxuICAgIHJldHVybiBUcmFuc2xhdGVQYXJzZXI7XG59KCkpO1xudmFyIFRyYW5zbGF0ZURlZmF1bHRQYXJzZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRyYW5zbGF0ZURlZmF1bHRQYXJzZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVHJhbnNsYXRlRGVmYXVsdFBhcnNlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnRlbXBsYXRlTWF0Y2hlciA9IC97e1xccz8oW157fVxcc10qKVxccz99fS9nO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZXhwclxuICAgICAqIEBwYXJhbSB7Pz19IHBhcmFtc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVHJhbnNsYXRlRGVmYXVsdFBhcnNlci5wcm90b3R5cGUuaW50ZXJwb2xhdGUgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IGV4cHJcbiAgICAgKiBAcGFyYW0gez89fSBwYXJhbXNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChleHByLCBwYXJhbXMpIHtcbiAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICBpZiAodHlwZW9mIGV4cHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmludGVycG9sYXRlU3RyaW5nKGV4cHIsIHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGV4cHIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuaW50ZXJwb2xhdGVGdW5jdGlvbihleHByLCBwYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gdGhpcyBzaG91bGQgbm90IGhhcHBlbiwgYnV0IGFuIHVucmVsYXRlZCBUcmFuc2xhdGVTZXJ2aWNlIHRlc3QgZGVwZW5kcyBvbiBpdFxuICAgICAgICAgICAgcmVzdWx0ID0gKC8qKiBAdHlwZSB7P30gKi8gKGV4cHIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSB0YXJnZXRcbiAgICAgKiBAcGFyYW0gez99IGtleVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVHJhbnNsYXRlRGVmYXVsdFBhcnNlci5wcm90b3R5cGUuZ2V0VmFsdWUgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IHRhcmdldFxuICAgICAqIEBwYXJhbSB7P30ga2V5XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICB2YXIga2V5cyA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgICBrZXkgPSAnJztcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAga2V5ICs9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgICAgIGlmIChpc0RlZmluZWQodGFyZ2V0KSAmJiBpc0RlZmluZWQodGFyZ2V0W2tleV0pICYmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICdvYmplY3QnIHx8ICFrZXlzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXRba2V5XTtcbiAgICAgICAgICAgICAgICBrZXkgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGtleSArPSAnLic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKGtleXMubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgKiBAcGFyYW0gez89fSBwYXJhbXNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFRyYW5zbGF0ZURlZmF1bHRQYXJzZXIucHJvdG90eXBlLmludGVycG9sYXRlRnVuY3Rpb24gPSAvKipcbiAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICogQHBhcmFtIHs/PX0gcGFyYW1zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoZm4sIHBhcmFtcykge1xuICAgICAgICByZXR1cm4gZm4ocGFyYW1zKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZXhwclxuICAgICAqIEBwYXJhbSB7Pz19IHBhcmFtc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVHJhbnNsYXRlRGVmYXVsdFBhcnNlci5wcm90b3R5cGUuaW50ZXJwb2xhdGVTdHJpbmcgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IGV4cHJcbiAgICAgKiBAcGFyYW0gez89fSBwYXJhbXNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChleHByLCBwYXJhbXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCFwYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBleHByO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHByLnJlcGxhY2UodGhpcy50ZW1wbGF0ZU1hdGNoZXIsIGZ1bmN0aW9uIChzdWJzdHJpbmcsIGIpIHtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgICAgIHZhciByID0gX3RoaXMuZ2V0VmFsdWUocGFyYW1zLCBiKTtcbiAgICAgICAgICAgIHJldHVybiBpc0RlZmluZWQocikgPyByIDogc3Vic3RyaW5nO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFRyYW5zbGF0ZURlZmF1bHRQYXJzZXIuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBJbmplY3RhYmxlIH1cbiAgICBdO1xuICAgIHJldHVybiBUcmFuc2xhdGVEZWZhdWx0UGFyc2VyO1xufShUcmFuc2xhdGVQYXJzZXIpKTtcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlcyxleHRyYVJlcXVpcmUsdXNlbGVzc0NvZGV9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbnZhciBUcmFuc2xhdGVTdG9yZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFuc2xhdGVTdG9yZSgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBsYW5nIGN1cnJlbnRseSB1c2VkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmN1cnJlbnRMYW5nID0gdGhpcy5kZWZhdWx0TGFuZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGEgbGlzdCBvZiB0cmFuc2xhdGlvbnMgcGVyIGxhbmdcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJhbnNsYXRpb25zID0ge307XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhbiBhcnJheSBvZiBsYW5nc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5sYW5ncyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogQW4gRXZlbnRFbWl0dGVyIHRvIGxpc3RlbiB0byB0cmFuc2xhdGlvbiBjaGFuZ2UgZXZlbnRzXG4gICAgICAgICAqIG9uVHJhbnNsYXRpb25DaGFuZ2Uuc3Vic2NyaWJlKChwYXJhbXM6IFRyYW5zbGF0aW9uQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgICAgICogICAgIC8vIGRvIHNvbWV0aGluZ1xuICAgICAgICAgKiB9KTtcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIEV2ZW50RW1pdHRlciB0byBsaXN0ZW4gdG8gbGFuZyBjaGFuZ2UgZXZlbnRzXG4gICAgICAgICAqIG9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKHBhcmFtczogTGFuZ0NoYW5nZUV2ZW50KSA9PiB7XG4gICAgICAgICAqICAgICAvLyBkbyBzb21ldGhpbmdcbiAgICAgICAgICogfSk7XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9uTGFuZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIEV2ZW50RW1pdHRlciB0byBsaXN0ZW4gdG8gZGVmYXVsdCBsYW5nIGNoYW5nZSBldmVudHNcbiAgICAgICAgICogb25EZWZhdWx0TGFuZ0NoYW5nZS5zdWJzY3JpYmUoKHBhcmFtczogRGVmYXVsdExhbmdDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgKiAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIH1cbiAgICByZXR1cm4gVHJhbnNsYXRlU3RvcmU7XG59KCkpO1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxuICogQHN1cHByZXNzIHtjaGVja1R5cGVzLGV4dHJhUmVxdWlyZSx1c2VsZXNzQ29kZX0gY2hlY2tlZCBieSB0c2NcbiAqL1xuLyoqIEB0eXBlIHs/fSAqL1xudmFyIFVTRV9TVE9SRSA9IG5ldyBJbmplY3Rpb25Ub2tlbignVVNFX1NUT1JFJyk7XG4vKiogQHR5cGUgez99ICovXG52YXIgVVNFX0RFRkFVTFRfTEFORyA9IG5ldyBJbmplY3Rpb25Ub2tlbignVVNFX0RFRkFVTFRfTEFORycpO1xudmFyIFRyYW5zbGF0ZVNlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmUgYW4gaW5zdGFuY2Ugb2YgdGhlIHN0b3JlICh0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIHVuaXF1ZSlcbiAgICAgKiBAcGFyYW0gY3VycmVudExvYWRlciBBbiBpbnN0YW5jZSBvZiB0aGUgbG9hZGVyIGN1cnJlbnRseSB1c2VkXG4gICAgICogQHBhcmFtIGNvbXBpbGVyIEFuIGluc3RhbmNlIG9mIHRoZSBjb21waWxlciBjdXJyZW50bHkgdXNlZFxuICAgICAqIEBwYXJhbSBwYXJzZXIgQW4gaW5zdGFuY2Ugb2YgdGhlIHBhcnNlciBjdXJyZW50bHkgdXNlZFxuICAgICAqIEBwYXJhbSBtaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIEEgaGFuZGxlciBmb3IgbWlzc2luZyB0cmFuc2xhdGlvbnMuXG4gICAgICogQHBhcmFtIGlzb2xhdGUgd2hldGhlciB0aGlzIHNlcnZpY2Ugc2hvdWxkIHVzZSB0aGUgc3RvcmUgb3Igbm90XG4gICAgICogQHBhcmFtIHVzZURlZmF1bHRMYW5nIHdoZXRoZXIgd2Ugc2hvdWxkIHVzZSBkZWZhdWx0IGxhbmd1YWdlIHRyYW5zbGF0aW9uIHdoZW4gY3VycmVudCBsYW5ndWFnZSB0cmFuc2xhdGlvbiBpcyBtaXNzaW5nLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFRyYW5zbGF0ZVNlcnZpY2Uoc3RvcmUsIGN1cnJlbnRMb2FkZXIsIGNvbXBpbGVyLCBwYXJzZXIsIG1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIHVzZURlZmF1bHRMYW5nLCBpc29sYXRlKSB7XG4gICAgICAgIGlmICh1c2VEZWZhdWx0TGFuZyA9PT0gdm9pZCAwKSB7IHVzZURlZmF1bHRMYW5nID0gdHJ1ZTsgfVxuICAgICAgICBpZiAoaXNvbGF0ZSA9PT0gdm9pZCAwKSB7IGlzb2xhdGUgPSBmYWxzZTsgfVxuICAgICAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgICAgIHRoaXMuY3VycmVudExvYWRlciA9IGN1cnJlbnRMb2FkZXI7XG4gICAgICAgIHRoaXMuY29tcGlsZXIgPSBjb21waWxlcjtcbiAgICAgICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG4gICAgICAgIHRoaXMubWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciA9IG1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXI7XG4gICAgICAgIHRoaXMudXNlRGVmYXVsdExhbmcgPSB1c2VEZWZhdWx0TGFuZztcbiAgICAgICAgdGhpcy5pc29sYXRlID0gaXNvbGF0ZTtcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX29uVHJhbnNsYXRpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMuX29uTGFuZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5fb25EZWZhdWx0TGFuZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5fbGFuZ3MgPSBbXTtcbiAgICAgICAgdGhpcy5fdHJhbnNsYXRpb25zID0ge307XG4gICAgICAgIHRoaXMuX3RyYW5zbGF0aW9uUmVxdWVzdHMgPSB7fTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLCBcIm9uVHJhbnNsYXRpb25DaGFuZ2VcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQW4gRXZlbnRFbWl0dGVyIHRvIGxpc3RlbiB0byB0cmFuc2xhdGlvbiBjaGFuZ2UgZXZlbnRzXG4gICAgICAgICAqIG9uVHJhbnNsYXRpb25DaGFuZ2Uuc3Vic2NyaWJlKChwYXJhbXM6IFRyYW5zbGF0aW9uQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgICAgICAgKiAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICAgICAgICogfSk7XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IC8qKlxuICAgICAgICAgKiBBbiBFdmVudEVtaXR0ZXIgdG8gbGlzdGVuIHRvIHRyYW5zbGF0aW9uIGNoYW5nZSBldmVudHNcbiAgICAgICAgICogb25UcmFuc2xhdGlvbkNoYW5nZS5zdWJzY3JpYmUoKHBhcmFtczogVHJhbnNsYXRpb25DaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgKiAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNvbGF0ZSA/IHRoaXMuX29uVHJhbnNsYXRpb25DaGFuZ2UgOiB0aGlzLnN0b3JlLm9uVHJhbnNsYXRpb25DaGFuZ2U7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZSwgXCJvbkxhbmdDaGFuZ2VcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQW4gRXZlbnRFbWl0dGVyIHRvIGxpc3RlbiB0byBsYW5nIGNoYW5nZSBldmVudHNcbiAgICAgICAgICogb25MYW5nQ2hhbmdlLnN1YnNjcmliZSgocGFyYW1zOiBMYW5nQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgICAgICAgKiAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICAgICAgICogfSk7XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IC8qKlxuICAgICAgICAgKiBBbiBFdmVudEVtaXR0ZXIgdG8gbGlzdGVuIHRvIGxhbmcgY2hhbmdlIGV2ZW50c1xuICAgICAgICAgKiBvbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChwYXJhbXM6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgKiAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNvbGF0ZSA/IHRoaXMuX29uTGFuZ0NoYW5nZSA6IHRoaXMuc3RvcmUub25MYW5nQ2hhbmdlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUsIFwib25EZWZhdWx0TGFuZ0NoYW5nZVwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBFdmVudEVtaXR0ZXIgdG8gbGlzdGVuIHRvIGRlZmF1bHQgbGFuZyBjaGFuZ2UgZXZlbnRzXG4gICAgICAgICAqIG9uRGVmYXVsdExhbmdDaGFuZ2Uuc3Vic2NyaWJlKChwYXJhbXM6IERlZmF1bHRMYW5nQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgICAgICAgKiAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICAgICAgICogfSk7XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IC8qKlxuICAgICAgICAgKiBBbiBFdmVudEVtaXR0ZXIgdG8gbGlzdGVuIHRvIGRlZmF1bHQgbGFuZyBjaGFuZ2UgZXZlbnRzXG4gICAgICAgICAqIG9uRGVmYXVsdExhbmdDaGFuZ2Uuc3Vic2NyaWJlKChwYXJhbXM6IERlZmF1bHRMYW5nQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgICAgICogICAgIC8vIGRvIHNvbWV0aGluZ1xuICAgICAgICAgKiB9KTtcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzb2xhdGUgPyB0aGlzLl9vbkRlZmF1bHRMYW5nQ2hhbmdlIDogdGhpcy5zdG9yZS5vbkRlZmF1bHRMYW5nQ2hhbmdlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUsIFwiZGVmYXVsdExhbmdcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRlZmF1bHQgbGFuZyB0byBmYWxsYmFjayB3aGVuIHRyYW5zbGF0aW9ucyBhcmUgbWlzc2luZyBvbiB0aGUgY3VycmVudCBsYW5nXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IC8qKlxuICAgICAgICAgKiBUaGUgZGVmYXVsdCBsYW5nIHRvIGZhbGxiYWNrIHdoZW4gdHJhbnNsYXRpb25zIGFyZSBtaXNzaW5nIG9uIHRoZSBjdXJyZW50IGxhbmdcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzb2xhdGUgPyB0aGlzLl9kZWZhdWx0TGFuZyA6IHRoaXMuc3RvcmUuZGVmYXVsdExhbmc7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZGVmYXVsdExhbmdcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChkZWZhdWx0TGFuZykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNvbGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlZmF1bHRMYW5nID0gZGVmYXVsdExhbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLmRlZmF1bHRMYW5nID0gZGVmYXVsdExhbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZSwgXCJjdXJyZW50TGFuZ1wiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbGFuZyBjdXJyZW50bHkgdXNlZFxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiAvKipcbiAgICAgICAgICogVGhlIGxhbmcgY3VycmVudGx5IHVzZWRcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzb2xhdGUgPyB0aGlzLl9jdXJyZW50TGFuZyA6IHRoaXMuc3RvcmUuY3VycmVudExhbmc7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY3VycmVudExhbmdcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChjdXJyZW50TGFuZykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNvbGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRMYW5nID0gY3VycmVudExhbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLmN1cnJlbnRMYW5nID0gY3VycmVudExhbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZSwgXCJsYW5nc1wiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhbiBhcnJheSBvZiBsYW5nc1xuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiAvKipcbiAgICAgICAgICogYW4gYXJyYXkgb2YgbGFuZ3NcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzb2xhdGUgPyB0aGlzLl9sYW5ncyA6IHRoaXMuc3RvcmUubGFuZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gbGFuZ3NcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChsYW5ncykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNvbGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xhbmdzID0gbGFuZ3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLmxhbmdzID0gbGFuZ3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZSwgXCJ0cmFuc2xhdGlvbnNcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogYSBsaXN0IG9mIHRyYW5zbGF0aW9ucyBwZXIgbGFuZ1xuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiAvKipcbiAgICAgICAgICogYSBsaXN0IG9mIHRyYW5zbGF0aW9ucyBwZXIgbGFuZ1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNvbGF0ZSA/IHRoaXMuX3RyYW5zbGF0aW9ucyA6IHRoaXMuc3RvcmUudHJhbnNsYXRpb25zO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHRyYW5zbGF0aW9uc1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKHRyYW5zbGF0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNvbGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zbGF0aW9ucyA9IHRyYW5zbGF0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUudHJhbnNsYXRpb25zID0gdHJhbnNsYXRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBkZWZhdWx0IGxhbmd1YWdlIHRvIHVzZSBhcyBhIGZhbGxiYWNrXG4gICAgICovXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZGVmYXVsdCBsYW5ndWFnZSB0byB1c2UgYXMgYSBmYWxsYmFja1xuICAgICAqIEBwYXJhbSB7P30gbGFuZ1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuc2V0RGVmYXVsdExhbmcgPSAvKipcbiAgICAgKiBTZXRzIHRoZSBkZWZhdWx0IGxhbmd1YWdlIHRvIHVzZSBhcyBhIGZhbGxiYWNrXG4gICAgICogQHBhcmFtIHs/fSBsYW5nXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAobGFuZykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAobGFuZyA9PT0gdGhpcy5kZWZhdWx0TGFuZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgdmFyIHBlbmRpbmcgPSB0aGlzLnJldHJpZXZlVHJhbnNsYXRpb25zKGxhbmcpO1xuICAgICAgICBpZiAodHlwZW9mIHBlbmRpbmcgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIC8vIG9uIGluaXQgc2V0IHRoZSBkZWZhdWx0TGFuZyBpbW1lZGlhdGVseVxuICAgICAgICAgICAgaWYgKCF0aGlzLmRlZmF1bHRMYW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0TGFuZyA9IGxhbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwZW5kaW5nLnBpcGUodGFrZSgxKSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2VEZWZhdWx0TGFuZyhsYW5nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgeyAvLyB3ZSBhbHJlYWR5IGhhdmUgdGhpcyBsYW5ndWFnZVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZWZhdWx0TGFuZyhsYW5nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZGVmYXVsdCBsYW5ndWFnZSB1c2VkXG4gICAgICovXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZGVmYXVsdCBsYW5ndWFnZSB1c2VkXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5nZXREZWZhdWx0TGFuZyA9IC8qKlxuICAgICAqIEdldHMgdGhlIGRlZmF1bHQgbGFuZ3VhZ2UgdXNlZFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0TGFuZztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoYW5nZXMgdGhlIGxhbmcgY3VycmVudGx5IHVzZWRcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBDaGFuZ2VzIHRoZSBsYW5nIGN1cnJlbnRseSB1c2VkXG4gICAgICogQHBhcmFtIHs/fSBsYW5nXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS51c2UgPSAvKipcbiAgICAgKiBDaGFuZ2VzIHRoZSBsYW5nIGN1cnJlbnRseSB1c2VkXG4gICAgICogQHBhcmFtIHs/fSBsYW5nXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAobGFuZykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBkb24ndCBjaGFuZ2UgdGhlIGxhbmd1YWdlIGlmIHRoZSBsYW5ndWFnZSBnaXZlbiBpcyBhbHJlYWR5IHNlbGVjdGVkXG4gICAgICAgIGlmIChsYW5nID09PSB0aGlzLmN1cnJlbnRMYW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gb2YodGhpcy50cmFuc2xhdGlvbnNbbGFuZ10pO1xuICAgICAgICB9XG4gICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgdmFyIHBlbmRpbmcgPSB0aGlzLnJldHJpZXZlVHJhbnNsYXRpb25zKGxhbmcpO1xuICAgICAgICBpZiAodHlwZW9mIHBlbmRpbmcgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIC8vIG9uIGluaXQgc2V0IHRoZSBjdXJyZW50TGFuZyBpbW1lZGlhdGVseVxuICAgICAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRMYW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGFuZyA9IGxhbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwZW5kaW5nLnBpcGUodGFrZSgxKSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2VMYW5nKGxhbmcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcGVuZGluZztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHsgLy8gd2UgaGF2ZSB0aGlzIGxhbmd1YWdlLCByZXR1cm4gYW4gT2JzZXJ2YWJsZVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VMYW5nKGxhbmcpO1xuICAgICAgICAgICAgcmV0dXJuIG9mKHRoaXMudHJhbnNsYXRpb25zW2xhbmddKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSBnaXZlbiB0cmFuc2xhdGlvbnNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIGdpdmVuIHRyYW5zbGF0aW9uc1xuICAgICAqIEBwYXJhbSB7P30gbGFuZ1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUucmV0cmlldmVUcmFuc2xhdGlvbnMgPSAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIGdpdmVuIHRyYW5zbGF0aW9uc1xuICAgICAqIEBwYXJhbSB7P30gbGFuZ1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICB2YXIgcGVuZGluZztcbiAgICAgICAgLy8gaWYgdGhpcyBsYW5ndWFnZSBpcyB1bmF2YWlsYWJsZSwgYXNrIGZvciBpdFxuICAgICAgICBpZiAodHlwZW9mIHRoaXMudHJhbnNsYXRpb25zW2xhbmddID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLl90cmFuc2xhdGlvblJlcXVlc3RzW2xhbmddID0gdGhpcy5fdHJhbnNsYXRpb25SZXF1ZXN0c1tsYW5nXSB8fCB0aGlzLmdldFRyYW5zbGF0aW9uKGxhbmcpO1xuICAgICAgICAgICAgcGVuZGluZyA9IHRoaXMuX3RyYW5zbGF0aW9uUmVxdWVzdHNbbGFuZ107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBlbmRpbmc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXRzIGFuIG9iamVjdCBvZiB0cmFuc2xhdGlvbnMgZm9yIGEgZ2l2ZW4gbGFuZ3VhZ2Ugd2l0aCB0aGUgY3VycmVudCBsb2FkZXJcbiAgICAgKiBhbmQgcGFzc2VzIGl0IHRocm91Z2ggdGhlIGNvbXBpbGVyXG4gICAgICovXG4gICAgLyoqXG4gICAgICogR2V0cyBhbiBvYmplY3Qgb2YgdHJhbnNsYXRpb25zIGZvciBhIGdpdmVuIGxhbmd1YWdlIHdpdGggdGhlIGN1cnJlbnQgbG9hZGVyXG4gICAgICogYW5kIHBhc3NlcyBpdCB0aHJvdWdoIHRoZSBjb21waWxlclxuICAgICAqIEBwYXJhbSB7P30gbGFuZ1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuZ2V0VHJhbnNsYXRpb24gPSAvKipcbiAgICAgKiBHZXRzIGFuIG9iamVjdCBvZiB0cmFuc2xhdGlvbnMgZm9yIGEgZ2l2ZW4gbGFuZ3VhZ2Ugd2l0aCB0aGUgY3VycmVudCBsb2FkZXJcbiAgICAgKiBhbmQgcGFzc2VzIGl0IHRocm91Z2ggdGhlIGNvbXBpbGVyXG4gICAgICogQHBhcmFtIHs/fSBsYW5nXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAobGFuZykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnBlbmRpbmcgPSB0cnVlO1xuICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgIHZhciBsb2FkaW5nVHJhbnNsYXRpb25zID0gdGhpcy5jdXJyZW50TG9hZGVyLmdldFRyYW5zbGF0aW9uKGxhbmcpLnBpcGUoc2hhcmUoKSk7XG4gICAgICAgIHRoaXMubG9hZGluZ1RyYW5zbGF0aW9ucyA9IGxvYWRpbmdUcmFuc2xhdGlvbnMucGlwZSh0YWtlKDEpLCBtYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gX3RoaXMuY29tcGlsZXIuY29tcGlsZVRyYW5zbGF0aW9ucyhyZXMsIGxhbmcpOyB9KSwgc2hhcmUoKSk7XG4gICAgICAgIHRoaXMubG9hZGluZ1RyYW5zbGF0aW9uc1xuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICBfdGhpcy50cmFuc2xhdGlvbnNbbGFuZ10gPSByZXM7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVMYW5ncygpO1xuICAgICAgICAgICAgX3RoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBfdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbG9hZGluZ1RyYW5zbGF0aW9ucztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1hbnVhbGx5IHNldHMgYW4gb2JqZWN0IG9mIHRyYW5zbGF0aW9ucyBmb3IgYSBnaXZlbiBsYW5ndWFnZVxuICAgICAqIGFmdGVyIHBhc3NpbmcgaXQgdGhyb3VnaCB0aGUgY29tcGlsZXJcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBNYW51YWxseSBzZXRzIGFuIG9iamVjdCBvZiB0cmFuc2xhdGlvbnMgZm9yIGEgZ2l2ZW4gbGFuZ3VhZ2VcbiAgICAgKiBhZnRlciBwYXNzaW5nIGl0IHRocm91Z2ggdGhlIGNvbXBpbGVyXG4gICAgICogQHBhcmFtIHs/fSBsYW5nXG4gICAgICogQHBhcmFtIHs/fSB0cmFuc2xhdGlvbnNcbiAgICAgKiBAcGFyYW0gez89fSBzaG91bGRNZXJnZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuc2V0VHJhbnNsYXRpb24gPSAvKipcbiAgICAgKiBNYW51YWxseSBzZXRzIGFuIG9iamVjdCBvZiB0cmFuc2xhdGlvbnMgZm9yIGEgZ2l2ZW4gbGFuZ3VhZ2VcbiAgICAgKiBhZnRlciBwYXNzaW5nIGl0IHRocm91Z2ggdGhlIGNvbXBpbGVyXG4gICAgICogQHBhcmFtIHs/fSBsYW5nXG4gICAgICogQHBhcmFtIHs/fSB0cmFuc2xhdGlvbnNcbiAgICAgKiBAcGFyYW0gez89fSBzaG91bGRNZXJnZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKGxhbmcsIHRyYW5zbGF0aW9ucywgc2hvdWxkTWVyZ2UpIHtcbiAgICAgICAgaWYgKHNob3VsZE1lcmdlID09PSB2b2lkIDApIHsgc2hvdWxkTWVyZ2UgPSBmYWxzZTsgfVxuICAgICAgICB0cmFuc2xhdGlvbnMgPSB0aGlzLmNvbXBpbGVyLmNvbXBpbGVUcmFuc2xhdGlvbnModHJhbnNsYXRpb25zLCBsYW5nKTtcbiAgICAgICAgaWYgKHNob3VsZE1lcmdlICYmIHRoaXMudHJhbnNsYXRpb25zW2xhbmddKSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSA9IG1lcmdlRGVlcCh0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSwgdHJhbnNsYXRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRpb25zW2xhbmddID0gdHJhbnNsYXRpb25zO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTGFuZ3MoKTtcbiAgICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlLmVtaXQoeyBsYW5nOiBsYW5nLCB0cmFuc2xhdGlvbnM6IHRoaXMudHJhbnNsYXRpb25zW2xhbmddIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBjdXJyZW50bHkgYXZhaWxhYmxlIGxhbmdzXG4gICAgICovXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBjdXJyZW50bHkgYXZhaWxhYmxlIGxhbmdzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5nZXRMYW5ncyA9IC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgY3VycmVudGx5IGF2YWlsYWJsZSBsYW5nc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYW5ncztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZCBhdmFpbGFibGUgbGFuZ3NcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBBZGQgYXZhaWxhYmxlIGxhbmdzXG4gICAgICogQHBhcmFtIHs/fSBsYW5nc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuYWRkTGFuZ3MgPSAvKipcbiAgICAgKiBBZGQgYXZhaWxhYmxlIGxhbmdzXG4gICAgICogQHBhcmFtIHs/fSBsYW5nc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKGxhbmdzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGxhbmdzLmZvckVhY2goZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5sYW5ncy5pbmRleE9mKGxhbmcpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmxhbmdzLnB1c2gobGFuZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBsaXN0IG9mIGF2YWlsYWJsZSBsYW5nc1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgbGlzdCBvZiBhdmFpbGFibGUgbGFuZ3NcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLnVwZGF0ZUxhbmdzID0gLyoqXG4gICAgICogVXBkYXRlIHRoZSBsaXN0IG9mIGF2YWlsYWJsZSBsYW5nc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkZExhbmdzKE9iamVjdC5rZXlzKHRoaXMudHJhbnNsYXRpb25zKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwYXJzZWQgcmVzdWx0IG9mIHRoZSB0cmFuc2xhdGlvbnNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwYXJzZWQgcmVzdWx0IG9mIHRoZSB0cmFuc2xhdGlvbnNcbiAgICAgKiBAcGFyYW0gez99IHRyYW5zbGF0aW9uc1xuICAgICAqIEBwYXJhbSB7P30ga2V5XG4gICAgICogQHBhcmFtIHs/PX0gaW50ZXJwb2xhdGVQYXJhbXNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLmdldFBhcnNlZFJlc3VsdCA9IC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBhcnNlZCByZXN1bHQgb2YgdGhlIHRyYW5zbGF0aW9uc1xuICAgICAqIEBwYXJhbSB7P30gdHJhbnNsYXRpb25zXG4gICAgICogQHBhcmFtIHs/fSBrZXlcbiAgICAgKiBAcGFyYW0gez89fSBpbnRlcnBvbGF0ZVBhcmFtc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHRyYW5zbGF0aW9ucywga2V5LCBpbnRlcnBvbGF0ZVBhcmFtcykge1xuICAgICAgICB2YXIgZV8xLCBfYSwgZV8yLCBfYjtcbiAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICB2YXIgcmVzO1xuICAgICAgICBpZiAoa2V5IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlcyA9IGZhbHNlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXlfMSA9IF9fdmFsdWVzKGtleSksIGtleV8xXzEgPSBrZXlfMS5uZXh0KCk7ICFrZXlfMV8xLmRvbmU7IGtleV8xXzEgPSBrZXlfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGsgPSBrZXlfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRba10gPSB0aGlzLmdldFBhcnNlZFJlc3VsdCh0cmFuc2xhdGlvbnMsIGssIGludGVycG9sYXRlUGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHRba10uc3Vic2NyaWJlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmFibGVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5XzFfMSAmJiAha2V5XzFfMS5kb25lICYmIChfYSA9IGtleV8xLnJldHVybikpIF9hLmNhbGwoa2V5XzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob2JzZXJ2YWJsZXMpIHtcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICAgICAgdmFyIG1lcmdlZE9icyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXlfMiA9IF9fdmFsdWVzKGtleSksIGtleV8yXzEgPSBrZXlfMi5uZXh0KCk7ICFrZXlfMl8xLmRvbmU7IGtleV8yXzEgPSBrZXlfMi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrID0ga2V5XzJfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYnMgPSB0eXBlb2YgcmVzdWx0W2tdLnN1YnNjcmliZSA9PT0gXCJmdW5jdGlvblwiID8gcmVzdWx0W2tdIDogb2YoKC8qKiBAdHlwZSB7P30gKi8gKHJlc3VsdFtrXSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVyZ2VkT2JzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2VkT2JzID0gb2JzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2VkT2JzID0gbWVyZ2UobWVyZ2VkT2JzLCBvYnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5XzJfMSAmJiAha2V5XzJfMS5kb25lICYmIChfYiA9IGtleV8yLnJldHVybikpIF9iLmNhbGwoa2V5XzIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lcmdlZE9icy5waXBlKHRvQXJyYXkoKSwgbWFwKGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0ge307XG4gICAgICAgICAgICAgICAgICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtrZXlbaW5kZXhdXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmFuc2xhdGlvbnMpIHtcbiAgICAgICAgICAgIHJlcyA9IHRoaXMucGFyc2VyLmludGVycG9sYXRlKHRoaXMucGFyc2VyLmdldFZhbHVlKHRyYW5zbGF0aW9ucywga2V5KSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzID09PSBcInVuZGVmaW5lZFwiICYmIHRoaXMuZGVmYXVsdExhbmcgJiYgdGhpcy5kZWZhdWx0TGFuZyAhPT0gdGhpcy5jdXJyZW50TGFuZyAmJiB0aGlzLnVzZURlZmF1bHRMYW5nKSB7XG4gICAgICAgICAgICByZXMgPSB0aGlzLnBhcnNlci5pbnRlcnBvbGF0ZSh0aGlzLnBhcnNlci5nZXRWYWx1ZSh0aGlzLnRyYW5zbGF0aW9uc1t0aGlzLmRlZmF1bHRMYW5nXSwga2V5KSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICB2YXIgcGFyYW1zID0geyBrZXk6IGtleSwgdHJhbnNsYXRlU2VydmljZTogdGhpcyB9O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnRlcnBvbGF0ZVBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuaW50ZXJwb2xhdGVQYXJhbXMgPSBpbnRlcnBvbGF0ZVBhcmFtcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcyA9IHRoaXMubWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlci5oYW5kbGUocGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHlwZW9mIHJlcyAhPT0gXCJ1bmRlZmluZWRcIiA/IHJlcyA6IGtleTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHRyYW5zbGF0ZWQgdmFsdWUgb2YgYSBrZXkgKG9yIGFuIGFycmF5IG9mIGtleXMpXG4gICAgICogQHJldHVybnMgdGhlIHRyYW5zbGF0ZWQga2V5LCBvciBhbiBvYmplY3Qgb2YgdHJhbnNsYXRlZCBrZXlzXG4gICAgICovXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgdHJhbnNsYXRlZCB2YWx1ZSBvZiBhIGtleSAob3IgYW4gYXJyYXkgb2Yga2V5cylcbiAgICAgKiBAcGFyYW0gez99IGtleVxuICAgICAqIEBwYXJhbSB7Pz19IGludGVycG9sYXRlUGFyYW1zXG4gICAgICogQHJldHVybiB7P30gdGhlIHRyYW5zbGF0ZWQga2V5LCBvciBhbiBvYmplY3Qgb2YgdHJhbnNsYXRlZCBrZXlzXG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuZ2V0ID0gLyoqXG4gICAgICogR2V0cyB0aGUgdHJhbnNsYXRlZCB2YWx1ZSBvZiBhIGtleSAob3IgYW4gYXJyYXkgb2Yga2V5cylcbiAgICAgKiBAcGFyYW0gez99IGtleVxuICAgICAqIEBwYXJhbSB7Pz19IGludGVycG9sYXRlUGFyYW1zXG4gICAgICogQHJldHVybiB7P30gdGhlIHRyYW5zbGF0ZWQga2V5LCBvciBhbiBvYmplY3Qgb2YgdHJhbnNsYXRlZCBrZXlzXG4gICAgICovXG4gICAgZnVuY3Rpb24gKGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCFpc0RlZmluZWQoa2V5KSB8fCAha2V5Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyYW1ldGVyIFxcXCJrZXlcXFwiIHJlcXVpcmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIGFyZSBsb2FkaW5nIGEgbmV3IHRyYW5zbGF0aW9uIHRvIHVzZVxuICAgICAgICBpZiAodGhpcy5wZW5kaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICAgICAgICAgIHZhciBvbkNvbXBsZXRlID0gZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICAgICAgdmFyIG9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBfdGhpcy5sb2FkaW5nVHJhbnNsYXRpb25zLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IF90aGlzLmdldFBhcnNlZFJlc3VsdChyZXMsIGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlcy5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN1YnNjcmliZShvbkNvbXBsZXRlLCBvbkVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGUocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG9uRXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICB2YXIgcmVzID0gdGhpcy5nZXRQYXJzZWRSZXN1bHQodGhpcy50cmFuc2xhdGlvbnNbdGhpcy5jdXJyZW50TGFuZ10sIGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXMuc3Vic2NyaWJlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdHJlYW0gb2YgdHJhbnNsYXRlZCB2YWx1ZXMgb2YgYSBrZXkgKG9yIGFuIGFycmF5IG9mIGtleXMpIHdoaWNoIHVwZGF0ZXNcbiAgICAgKiB3aGVuZXZlciB0aGUgbGFuZ3VhZ2UgY2hhbmdlcy5cbiAgICAgKiBAcmV0dXJucyBBIHN0cmVhbSBvZiB0aGUgdHJhbnNsYXRlZCBrZXksIG9yIGFuIG9iamVjdCBvZiB0cmFuc2xhdGVkIGtleXNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc3RyZWFtIG9mIHRyYW5zbGF0ZWQgdmFsdWVzIG9mIGEga2V5IChvciBhbiBhcnJheSBvZiBrZXlzKSB3aGljaCB1cGRhdGVzXG4gICAgICogd2hlbmV2ZXIgdGhlIGxhbmd1YWdlIGNoYW5nZXMuXG4gICAgICogQHBhcmFtIHs/fSBrZXlcbiAgICAgKiBAcGFyYW0gez89fSBpbnRlcnBvbGF0ZVBhcmFtc1xuICAgICAqIEByZXR1cm4gez99IEEgc3RyZWFtIG9mIHRoZSB0cmFuc2xhdGVkIGtleSwgb3IgYW4gb2JqZWN0IG9mIHRyYW5zbGF0ZWQga2V5c1xuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLnN0cmVhbSA9IC8qKlxuICAgICAqIFJldHVybnMgYSBzdHJlYW0gb2YgdHJhbnNsYXRlZCB2YWx1ZXMgb2YgYSBrZXkgKG9yIGFuIGFycmF5IG9mIGtleXMpIHdoaWNoIHVwZGF0ZXNcbiAgICAgKiB3aGVuZXZlciB0aGUgbGFuZ3VhZ2UgY2hhbmdlcy5cbiAgICAgKiBAcGFyYW0gez99IGtleVxuICAgICAqIEBwYXJhbSB7Pz19IGludGVycG9sYXRlUGFyYW1zXG4gICAgICogQHJldHVybiB7P30gQSBzdHJlYW0gb2YgdGhlIHRyYW5zbGF0ZWQga2V5LCBvciBhbiBvYmplY3Qgb2YgdHJhbnNsYXRlZCBrZXlzXG4gICAgICovXG4gICAgZnVuY3Rpb24gKGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCFpc0RlZmluZWQoa2V5KSB8fCAha2V5Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyYW1ldGVyIFxcXCJrZXlcXFwiIHJlcXVpcmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25jYXQodGhpcy5nZXQoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcyksIHRoaXMub25MYW5nQ2hhbmdlLnBpcGUoc3dpdGNoTWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICAgICAgdmFyIHJlcyA9IF90aGlzLmdldFBhcnNlZFJlc3VsdChldmVudC50cmFuc2xhdGlvbnMsIGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXMuc3Vic2NyaWJlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgdHJhbnNsYXRpb24gaW5zdGFudGx5IGZyb20gdGhlIGludGVybmFsIHN0YXRlIG9mIGxvYWRlZCB0cmFuc2xhdGlvbi5cbiAgICAgKiBBbGwgcnVsZXMgcmVnYXJkaW5nIHRoZSBjdXJyZW50IGxhbmd1YWdlLCB0aGUgcHJlZmVycmVkIGxhbmd1YWdlIG9mIGV2ZW4gZmFsbGJhY2sgbGFuZ3VhZ2VzIHdpbGwgYmUgdXNlZCBleGNlcHQgYW55IHByb21pc2UgaGFuZGxpbmcuXG4gICAgICovXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRyYW5zbGF0aW9uIGluc3RhbnRseSBmcm9tIHRoZSBpbnRlcm5hbCBzdGF0ZSBvZiBsb2FkZWQgdHJhbnNsYXRpb24uXG4gICAgICogQWxsIHJ1bGVzIHJlZ2FyZGluZyB0aGUgY3VycmVudCBsYW5ndWFnZSwgdGhlIHByZWZlcnJlZCBsYW5ndWFnZSBvZiBldmVuIGZhbGxiYWNrIGxhbmd1YWdlcyB3aWxsIGJlIHVzZWQgZXhjZXB0IGFueSBwcm9taXNlIGhhbmRsaW5nLlxuICAgICAqIEBwYXJhbSB7P30ga2V5XG4gICAgICogQHBhcmFtIHs/PX0gaW50ZXJwb2xhdGVQYXJhbXNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLmluc3RhbnQgPSAvKipcbiAgICAgKiBSZXR1cm5zIGEgdHJhbnNsYXRpb24gaW5zdGFudGx5IGZyb20gdGhlIGludGVybmFsIHN0YXRlIG9mIGxvYWRlZCB0cmFuc2xhdGlvbi5cbiAgICAgKiBBbGwgcnVsZXMgcmVnYXJkaW5nIHRoZSBjdXJyZW50IGxhbmd1YWdlLCB0aGUgcHJlZmVycmVkIGxhbmd1YWdlIG9mIGV2ZW4gZmFsbGJhY2sgbGFuZ3VhZ2VzIHdpbGwgYmUgdXNlZCBleGNlcHQgYW55IHByb21pc2UgaGFuZGxpbmcuXG4gICAgICogQHBhcmFtIHs/fSBrZXlcbiAgICAgKiBAcGFyYW0gez89fSBpbnRlcnBvbGF0ZVBhcmFtc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpIHtcbiAgICAgICAgaWYgKCFpc0RlZmluZWQoa2V5KSB8fCAha2V5Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyYW1ldGVyIFxcXCJrZXlcXFwiIHJlcXVpcmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgdmFyIHJlcyA9IHRoaXMuZ2V0UGFyc2VkUmVzdWx0KHRoaXMudHJhbnNsYXRpb25zW3RoaXMuY3VycmVudExhbmddLCBrZXksIGludGVycG9sYXRlUGFyYW1zKTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXMuc3Vic2NyaWJlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBpZiAoa2V5IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICAgICAgdmFyIG9ial8xID0ge307XG4gICAgICAgICAgICAgICAga2V5LmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBvYmpfMVtrZXlbaW5kZXhdXSA9IGtleVtpbmRleF07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ial8xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHRyYW5zbGF0ZWQgdmFsdWUgb2YgYSBrZXksIGFmdGVyIGNvbXBpbGluZyBpdFxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHRyYW5zbGF0ZWQgdmFsdWUgb2YgYSBrZXksIGFmdGVyIGNvbXBpbGluZyBpdFxuICAgICAqIEBwYXJhbSB7P30ga2V5XG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Pz19IGxhbmdcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLnNldCA9IC8qKlxuICAgICAqIFNldHMgdGhlIHRyYW5zbGF0ZWQgdmFsdWUgb2YgYSBrZXksIGFmdGVyIGNvbXBpbGluZyBpdFxuICAgICAqIEBwYXJhbSB7P30ga2V5XG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Pz19IGxhbmdcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChrZXksIHZhbHVlLCBsYW5nKSB7XG4gICAgICAgIGlmIChsYW5nID09PSB2b2lkIDApIHsgbGFuZyA9IHRoaXMuY3VycmVudExhbmc7IH1cbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbnNbbGFuZ11ba2V5XSA9IHRoaXMuY29tcGlsZXIuY29tcGlsZSh2YWx1ZSwgbGFuZyk7XG4gICAgICAgIHRoaXMudXBkYXRlTGFuZ3MoKTtcbiAgICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlLmVtaXQoeyBsYW5nOiBsYW5nLCB0cmFuc2xhdGlvbnM6IHRoaXMudHJhbnNsYXRpb25zW2xhbmddIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hhbmdlcyB0aGUgY3VycmVudCBsYW5nXG4gICAgICovXG4gICAgLyoqXG4gICAgICogQ2hhbmdlcyB0aGUgY3VycmVudCBsYW5nXG4gICAgICogQHBhcmFtIHs/fSBsYW5nXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5jaGFuZ2VMYW5nID0gLyoqXG4gICAgICogQ2hhbmdlcyB0aGUgY3VycmVudCBsYW5nXG4gICAgICogQHBhcmFtIHs/fSBsYW5nXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAobGFuZykge1xuICAgICAgICB0aGlzLmN1cnJlbnRMYW5nID0gbGFuZztcbiAgICAgICAgdGhpcy5vbkxhbmdDaGFuZ2UuZW1pdCh7IGxhbmc6IGxhbmcsIHRyYW5zbGF0aW9uczogdGhpcy50cmFuc2xhdGlvbnNbbGFuZ10gfSk7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIGRlZmF1bHQgbGFuZywgdXNlIHRoZSBvbmUgdGhhdCB3ZSBqdXN0IHNldFxuICAgICAgICBpZiAoIXRoaXMuZGVmYXVsdExhbmcpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRGVmYXVsdExhbmcobGFuZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoYW5nZXMgdGhlIGRlZmF1bHQgbGFuZ1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIENoYW5nZXMgdGhlIGRlZmF1bHQgbGFuZ1xuICAgICAqIEBwYXJhbSB7P30gbGFuZ1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuY2hhbmdlRGVmYXVsdExhbmcgPSAvKipcbiAgICAgKiBDaGFuZ2VzIHRoZSBkZWZhdWx0IGxhbmdcbiAgICAgKiBAcGFyYW0gez99IGxhbmdcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChsYW5nKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdExhbmcgPSBsYW5nO1xuICAgICAgICB0aGlzLm9uRGVmYXVsdExhbmdDaGFuZ2UuZW1pdCh7IGxhbmc6IGxhbmcsIHRyYW5zbGF0aW9uczogdGhpcy50cmFuc2xhdGlvbnNbbGFuZ10gfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBbGxvd3MgdG8gcmVsb2FkIHRoZSBsYW5nIGZpbGUgZnJvbSB0aGUgZmlsZVxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEFsbG93cyB0byByZWxvYWQgdGhlIGxhbmcgZmlsZSBmcm9tIHRoZSBmaWxlXG4gICAgICogQHBhcmFtIHs/fSBsYW5nXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5yZWxvYWRMYW5nID0gLyoqXG4gICAgICogQWxsb3dzIHRvIHJlbG9hZCB0aGUgbGFuZyBmaWxlIGZyb20gdGhlIGZpbGVcbiAgICAgKiBAcGFyYW0gez99IGxhbmdcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChsYW5nKSB7XG4gICAgICAgIHRoaXMucmVzZXRMYW5nKGxhbmcpO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRUcmFuc2xhdGlvbihsYW5nKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgaW5uZXIgdHJhbnNsYXRpb25cbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGlubmVyIHRyYW5zbGF0aW9uXG4gICAgICogQHBhcmFtIHs/fSBsYW5nXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5yZXNldExhbmcgPSAvKipcbiAgICAgKiBEZWxldGVzIGlubmVyIHRyYW5zbGF0aW9uXG4gICAgICogQHBhcmFtIHs/fSBsYW5nXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAobGFuZykge1xuICAgICAgICB0aGlzLl90cmFuc2xhdGlvblJlcXVlc3RzW2xhbmddID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhbmd1YWdlIGNvZGUgbmFtZSBmcm9tIHRoZSBicm93c2VyLCBlLmcuIFwiZGVcIlxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhbmd1YWdlIGNvZGUgbmFtZSBmcm9tIHRoZSBicm93c2VyLCBlLmcuIFwiZGVcIlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuZ2V0QnJvd3NlckxhbmcgPSAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsYW5ndWFnZSBjb2RlIG5hbWUgZnJvbSB0aGUgYnJvd3NlciwgZS5nLiBcImRlXCJcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW5kb3cubmF2aWdhdG9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgIHZhciBicm93c2VyTGFuZyA9IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VzID8gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZXNbMF0gOiBudWxsO1xuICAgICAgICBicm93c2VyTGFuZyA9IGJyb3dzZXJMYW5nIHx8IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgd2luZG93Lm5hdmlnYXRvci5icm93c2VyTGFuZ3VhZ2UgfHwgd2luZG93Lm5hdmlnYXRvci51c2VyTGFuZ3VhZ2U7XG4gICAgICAgIGlmIChicm93c2VyTGFuZy5pbmRleE9mKCctJykgIT09IC0xKSB7XG4gICAgICAgICAgICBicm93c2VyTGFuZyA9IGJyb3dzZXJMYW5nLnNwbGl0KCctJylbMF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJyb3dzZXJMYW5nLmluZGV4T2YoJ18nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGJyb3dzZXJMYW5nID0gYnJvd3Nlckxhbmcuc3BsaXQoJ18nKVswXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnJvd3Nlckxhbmc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdWx0dXJlIGxhbmd1YWdlIGNvZGUgbmFtZSBmcm9tIHRoZSBicm93c2VyLCBlLmcuIFwiZGUtREVcIlxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1bHR1cmUgbGFuZ3VhZ2UgY29kZSBuYW1lIGZyb20gdGhlIGJyb3dzZXIsIGUuZy4gXCJkZS1ERVwiXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5nZXRCcm93c2VyQ3VsdHVyZUxhbmcgPSAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdWx0dXJlIGxhbmd1YWdlIGNvZGUgbmFtZSBmcm9tIHRoZSBicm93c2VyLCBlLmcuIFwiZGUtREVcIlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdy5uYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgdmFyIGJyb3dzZXJDdWx0dXJlTGFuZyA9IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VzID8gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZXNbMF0gOiBudWxsO1xuICAgICAgICBicm93c2VyQ3VsdHVyZUxhbmcgPSBicm93c2VyQ3VsdHVyZUxhbmcgfHwgd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSB8fCB3aW5kb3cubmF2aWdhdG9yLmJyb3dzZXJMYW5ndWFnZSB8fCB3aW5kb3cubmF2aWdhdG9yLnVzZXJMYW5ndWFnZTtcbiAgICAgICAgcmV0dXJuIGJyb3dzZXJDdWx0dXJlTGFuZztcbiAgICB9O1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBJbmplY3RhYmxlIH1cbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgIHsgdHlwZTogVHJhbnNsYXRlU3RvcmUgfSxcbiAgICAgICAgeyB0eXBlOiBUcmFuc2xhdGVMb2FkZXIgfSxcbiAgICAgICAgeyB0eXBlOiBUcmFuc2xhdGVDb21waWxlciB9LFxuICAgICAgICB7IHR5cGU6IFRyYW5zbGF0ZVBhcnNlciB9LFxuICAgICAgICB7IHR5cGU6IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgfSxcbiAgICAgICAgeyB0eXBlOiBCb29sZWFuLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtVU0VfREVGQVVMVF9MQU5HLF0gfV0gfSxcbiAgICAgICAgeyB0eXBlOiBCb29sZWFuLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtVU0VfU1RPUkUsXSB9XSB9XG4gICAgXTsgfTtcbiAgICByZXR1cm4gVHJhbnNsYXRlU2VydmljZTtcbn0oKSk7XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXMsZXh0cmFSZXF1aXJlLHVzZWxlc3NDb2RlfSBjaGVja2VkIGJ5IHRzY1xuICovXG52YXIgVHJhbnNsYXRlRGlyZWN0aXZlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRyYW5zbGF0ZURpcmVjdGl2ZSh0cmFuc2xhdGVTZXJ2aWNlLCBlbGVtZW50LCBfcmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZSA9IHRyYW5zbGF0ZVNlcnZpY2U7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuX3JlZiA9IF9yZWY7XG4gICAgICAgIC8vIHN1YnNjcmliZSB0byBvblRyYW5zbGF0aW9uQ2hhbmdlIGV2ZW50LCBpbiBjYXNlIHRoZSB0cmFuc2xhdGlvbnMgb2YgdGhlIGN1cnJlbnQgbGFuZyBjaGFuZ2VcbiAgICAgICAgaWYgKCF0aGlzLm9uVHJhbnNsYXRpb25DaGFuZ2VTdWIpIHtcbiAgICAgICAgICAgIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZVN1YiA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5vblRyYW5zbGF0aW9uQ2hhbmdlLnN1YnNjcmliZShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQubGFuZyA9PT0gX3RoaXMudHJhbnNsYXRlU2VydmljZS5jdXJyZW50TGFuZykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jaGVja05vZGVzKHRydWUsIGV2ZW50LnRyYW5zbGF0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIG9uTGFuZ0NoYW5nZSBldmVudCwgaW4gY2FzZSB0aGUgbGFuZ3VhZ2UgY2hhbmdlc1xuICAgICAgICBpZiAoIXRoaXMub25MYW5nQ2hhbmdlU3ViKSB7XG4gICAgICAgICAgICB0aGlzLm9uTGFuZ0NoYW5nZVN1YiA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNoZWNrTm9kZXModHJ1ZSwgZXZlbnQudHJhbnNsYXRpb25zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHN1YnNjcmliZSB0byBvbkRlZmF1bHRMYW5nQ2hhbmdlIGV2ZW50LCBpbiBjYXNlIHRoZSBkZWZhdWx0IGxhbmd1YWdlIGNoYW5nZXNcbiAgICAgICAgaWYgKCF0aGlzLm9uRGVmYXVsdExhbmdDaGFuZ2VTdWIpIHtcbiAgICAgICAgICAgIHRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZVN1YiA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5vbkRlZmF1bHRMYW5nQ2hhbmdlLnN1YnNjcmliZShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jaGVja05vZGVzKHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zbGF0ZURpcmVjdGl2ZS5wcm90b3R5cGUsIFwidHJhbnNsYXRlXCIsIHtcbiAgICAgICAgc2V0OiAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBrZXlcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTm9kZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zbGF0ZURpcmVjdGl2ZS5wcm90b3R5cGUsIFwidHJhbnNsYXRlUGFyYW1zXCIsIHtcbiAgICAgICAgc2V0OiAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBwYXJhbXNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgICAgIGlmICghZXF1YWxzKHRoaXMuY3VycmVudFBhcmFtcywgcGFyYW1zKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhcmFtcyA9IHBhcmFtcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTm9kZXModHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVHJhbnNsYXRlRGlyZWN0aXZlLnByb3RvdHlwZS5uZ0FmdGVyVmlld0NoZWNrZWQgPSAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jaGVja05vZGVzKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez89fSBmb3JjZVVwZGF0ZVxuICAgICAqIEBwYXJhbSB7Pz19IHRyYW5zbGF0aW9uc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVHJhbnNsYXRlRGlyZWN0aXZlLnByb3RvdHlwZS5jaGVja05vZGVzID0gLyoqXG4gICAgICogQHBhcmFtIHs/PX0gZm9yY2VVcGRhdGVcbiAgICAgKiBAcGFyYW0gez89fSB0cmFuc2xhdGlvbnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChmb3JjZVVwZGF0ZSwgdHJhbnNsYXRpb25zKSB7XG4gICAgICAgIGlmIChmb3JjZVVwZGF0ZSA9PT0gdm9pZCAwKSB7IGZvcmNlVXBkYXRlID0gZmFsc2U7IH1cbiAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzO1xuICAgICAgICAvLyBpZiB0aGUgZWxlbWVudCBpcyBlbXB0eVxuICAgICAgICBpZiAoIW5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gd2UgYWRkIHRoZSBrZXkgYXMgY29udGVudFxuICAgICAgICAgICAgdGhpcy5zZXRDb250ZW50KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLmtleSk7XG4gICAgICAgICAgICBub2RlcyA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXM7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7IC8vIG5vZGUgdHlwZSAzIGlzIGEgdGV4dCBub2RlXG4gICAgICAgICAgICAgICAgLy8gbm9kZSB0eXBlIDMgaXMgYSB0ZXh0IG5vZGVcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gdGhpcy5rZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3JjZVVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5sYXN0S2V5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHJpbW1lZENvbnRlbnQgPSBjb250ZW50LnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyaW1tZWRDb250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2Ugd2FudCB0byB1c2UgdGhlIGNvbnRlbnQgYXMgYSBrZXksIG5vdCB0aGUgdHJhbnNsYXRpb24gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50ICE9PSBub2RlLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHRyaW1tZWRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBjb250ZW50IHdhcyBjaGFuZ2VkIGZyb20gdGhlIHVzZXIsIHdlJ2xsIHVzZSBpdCBhcyBhIHJlZmVyZW5jZSBpZiBuZWVkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLm9yaWdpbmFsQ29udGVudCA9IHRoaXMuZ2V0Q29udGVudChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUub3JpZ2luYWxDb250ZW50ICYmIGZvcmNlVXBkYXRlKSB7IC8vIHRoZSBjb250ZW50IHNlZW1zIG9rLCBidXQgdGhlIGxhbmcgaGFzIGNoYW5nZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmxhc3RLZXkgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBjdXJyZW50IGNvbnRlbnQgaXMgdGhlIHRyYW5zbGF0aW9uLCBub3QgdGhlIGtleSwgdXNlIHRoZSBsYXN0IHJlYWwgY29udGVudCBhcyBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBub2RlLm9yaWdpbmFsQ29udGVudC50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShrZXksIG5vZGUsIHRyYW5zbGF0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30ga2V5XG4gICAgICogQHBhcmFtIHs/fSBub2RlXG4gICAgICogQHBhcmFtIHs/fSB0cmFuc2xhdGlvbnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFRyYW5zbGF0ZURpcmVjdGl2ZS5wcm90b3R5cGUudXBkYXRlVmFsdWUgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IGtleVxuICAgICAqIEBwYXJhbSB7P30gbm9kZVxuICAgICAqIEBwYXJhbSB7P30gdHJhbnNsYXRpb25zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoa2V5LCBub2RlLCB0cmFuc2xhdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgaWYgKG5vZGUubGFzdEtleSA9PT0ga2V5ICYmIHRoaXMubGFzdFBhcmFtcyA9PT0gdGhpcy5jdXJyZW50UGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sYXN0UGFyYW1zID0gdGhpcy5jdXJyZW50UGFyYW1zO1xuICAgICAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICAgICAgdmFyIG9uVHJhbnNsYXRpb24gPSBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcyAhPT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGFzdEtleSA9IGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLm9yaWdpbmFsQ29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLm9yaWdpbmFsQ29udGVudCA9IF90aGlzLmdldENvbnRlbnQobm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUuY3VycmVudFZhbHVlID0gaXNEZWZpbmVkKHJlcykgPyByZXMgOiAobm9kZS5vcmlnaW5hbENvbnRlbnQgfHwga2V5KTtcbiAgICAgICAgICAgICAgICAvLyB3ZSByZXBsYWNlIGluIHRoZSBvcmlnaW5hbCBjb250ZW50IHRvIHByZXNlcnZlIHNwYWNlcyB0aGF0IHdlIG1pZ2h0IGhhdmUgdHJpbW1lZFxuICAgICAgICAgICAgICAgIF90aGlzLnNldENvbnRlbnQobm9kZSwgX3RoaXMua2V5ID8gbm9kZS5jdXJyZW50VmFsdWUgOiBub2RlLm9yaWdpbmFsQ29udGVudC5yZXBsYWNlKGtleSwgbm9kZS5jdXJyZW50VmFsdWUpKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5fcmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChpc0RlZmluZWQodHJhbnNsYXRpb25zKSkge1xuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgICAgICAgICB2YXIgcmVzID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldFBhcnNlZFJlc3VsdCh0cmFuc2xhdGlvbnMsIGtleSwgdGhpcy5jdXJyZW50UGFyYW1zKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlcy5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICByZXMuc3Vic2NyaWJlKG9uVHJhbnNsYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb25UcmFuc2xhdGlvbihyZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXQoa2V5LCB0aGlzLmN1cnJlbnRQYXJhbXMpLnN1YnNjcmliZShvblRyYW5zbGF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBub2RlXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVEaXJlY3RpdmUucHJvdG90eXBlLmdldENvbnRlbnQgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IG5vZGVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJldHVybiBpc0RlZmluZWQobm9kZS50ZXh0Q29udGVudCkgPyBub2RlLnRleHRDb250ZW50IDogbm9kZS5kYXRhO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBub2RlXG4gICAgICogQHBhcmFtIHs/fSBjb250ZW50XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVEaXJlY3RpdmUucHJvdG90eXBlLnNldENvbnRlbnQgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IG5vZGVcbiAgICAgKiBAcGFyYW0gez99IGNvbnRlbnRcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChub2RlLCBjb250ZW50KSB7XG4gICAgICAgIGlmIChpc0RlZmluZWQobm9kZS50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5kYXRhID0gY29udGVudDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVEaXJlY3RpdmUucHJvdG90eXBlLm5nT25EZXN0cm95ID0gLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9uTGFuZ0NoYW5nZVN1Yikge1xuICAgICAgICAgICAgdGhpcy5vbkxhbmdDaGFuZ2VTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlU3ViKSB7XG4gICAgICAgICAgICB0aGlzLm9uRGVmYXVsdExhbmdDaGFuZ2VTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlU3ViKSB7XG4gICAgICAgICAgICB0aGlzLm9uVHJhbnNsYXRpb25DaGFuZ2VTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVHJhbnNsYXRlRGlyZWN0aXZlLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ1t0cmFuc2xhdGVdLFtuZ3gtdHJhbnNsYXRlXSdcbiAgICAgICAgICAgICAgICB9LF0gfVxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgVHJhbnNsYXRlRGlyZWN0aXZlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICB7IHR5cGU6IFRyYW5zbGF0ZVNlcnZpY2UgfSxcbiAgICAgICAgeyB0eXBlOiBFbGVtZW50UmVmIH0sXG4gICAgICAgIHsgdHlwZTogQ2hhbmdlRGV0ZWN0b3JSZWYgfVxuICAgIF07IH07XG4gICAgVHJhbnNsYXRlRGlyZWN0aXZlLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICB0cmFuc2xhdGU6IFt7IHR5cGU6IElucHV0IH1dLFxuICAgICAgICB0cmFuc2xhdGVQYXJhbXM6IFt7IHR5cGU6IElucHV0IH1dXG4gICAgfTtcbiAgICByZXR1cm4gVHJhbnNsYXRlRGlyZWN0aXZlO1xufSgpKTtcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlcyxleHRyYVJlcXVpcmUsdXNlbGVzc0NvZGV9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbnZhciBUcmFuc2xhdGVQaXBlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRyYW5zbGF0ZVBpcGUodHJhbnNsYXRlLCBfcmVmKSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gdHJhbnNsYXRlO1xuICAgICAgICB0aGlzLl9yZWYgPSBfcmVmO1xuICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30ga2V5XG4gICAgICogQHBhcmFtIHs/PX0gaW50ZXJwb2xhdGVQYXJhbXNcbiAgICAgKiBAcGFyYW0gez89fSB0cmFuc2xhdGlvbnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFRyYW5zbGF0ZVBpcGUucHJvdG90eXBlLnVwZGF0ZVZhbHVlID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSBrZXlcbiAgICAgKiBAcGFyYW0gez89fSBpbnRlcnBvbGF0ZVBhcmFtc1xuICAgICAqIEBwYXJhbSB7Pz19IHRyYW5zbGF0aW9uc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKGtleSwgaW50ZXJwb2xhdGVQYXJhbXMsIHRyYW5zbGF0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgIHZhciBvblRyYW5zbGF0aW9uID0gZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgX3RoaXMudmFsdWUgPSByZXMgIT09IHVuZGVmaW5lZCA/IHJlcyA6IGtleTtcbiAgICAgICAgICAgIF90aGlzLmxhc3RLZXkgPSBrZXk7XG4gICAgICAgICAgICBfdGhpcy5fcmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodHJhbnNsYXRpb25zKSB7XG4gICAgICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICB2YXIgcmVzID0gdGhpcy50cmFuc2xhdGUuZ2V0UGFyc2VkUmVzdWx0KHRyYW5zbGF0aW9ucywga2V5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlcy5zdWJzY3JpYmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXMuc3Vic2NyaWJlKG9uVHJhbnNsYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb25UcmFuc2xhdGlvbihyZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJhbnNsYXRlLmdldChrZXksIGludGVycG9sYXRlUGFyYW1zKS5zdWJzY3JpYmUob25UcmFuc2xhdGlvbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHF1ZXJ5XG4gICAgICogQHBhcmFtIHsuLi4/fSBhcmdzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVQaXBlLnByb3RvdHlwZS50cmFuc2Zvcm0gPSAvKipcbiAgICAgKiBAcGFyYW0gez99IHF1ZXJ5XG4gICAgICogQHBhcmFtIHsuLi4/fSBhcmdzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFxdWVyeSB8fCBxdWVyeS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBxdWVyeTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB3ZSBhc2sgYW5vdGhlciB0aW1lIGZvciB0aGUgc2FtZSBrZXksIHJldHVybiB0aGUgbGFzdCB2YWx1ZVxuICAgICAgICBpZiAoZXF1YWxzKHF1ZXJ5LCB0aGlzLmxhc3RLZXkpICYmIGVxdWFscyhhcmdzLCB0aGlzLmxhc3RQYXJhbXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgIHZhciBpbnRlcnBvbGF0ZVBhcmFtcztcbiAgICAgICAgaWYgKGlzRGVmaW5lZChhcmdzWzBdKSAmJiBhcmdzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJyAmJiBhcmdzWzBdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vIHdlIGFjY2VwdCBvYmplY3RzIHdyaXR0ZW4gaW4gdGhlIHRlbXBsYXRlIHN1Y2ggYXMge246MX0sIHsnbic6MX0sIHtuOid2J31cbiAgICAgICAgICAgICAgICAvLyB3aGljaCBpcyB3aHkgd2UgbWlnaHQgbmVlZCB0byBjaGFuZ2UgaXQgdG8gcmVhbCBKU09OIG9iamVjdHMgc3VjaCBhcyB7XCJuXCI6MX0gb3Ige1wiblwiOlwidlwifVxuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgICAgICAgICB2YXIgdmFsaWRBcmdzID0gYXJnc1swXVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKFxcJyk/KFthLXpBLVowLTlfXSspKFxcJyk/KFxccyk/Oi9nLCAnXCIkMlwiOicpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC86KFxccyk/KFxcJykoLio/KShcXCcpL2csICc6XCIkM1wiJyk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVQYXJhbXMgPSBKU09OLnBhcnNlKHZhbGlkQXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihcIldyb25nIHBhcmFtZXRlciBpbiBUcmFuc2xhdGVQaXBlLiBFeHBlY3RlZCBhIHZhbGlkIE9iamVjdCwgcmVjZWl2ZWQ6IFwiICsgYXJnc1swXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGFyZ3NbMF0pKSB7XG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVQYXJhbXMgPSBhcmdzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHN0b3JlIHRoZSBxdWVyeSwgaW4gY2FzZSBpdCBjaGFuZ2VzXG4gICAgICAgIHRoaXMubGFzdEtleSA9IHF1ZXJ5O1xuICAgICAgICAvLyBzdG9yZSB0aGUgcGFyYW1zLCBpbiBjYXNlIHRoZXkgY2hhbmdlXG4gICAgICAgIHRoaXMubGFzdFBhcmFtcyA9IGFyZ3M7XG4gICAgICAgIC8vIHNldCB0aGUgdmFsdWVcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShxdWVyeSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHN1YnNjcmlwdGlvbiB0byBvbkxhbmdDaGFuZ2UsIGNsZWFuIGl0XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2UoKTtcbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIG9uVHJhbnNsYXRpb25DaGFuZ2UgZXZlbnQsIGluIGNhc2UgdGhlIHRyYW5zbGF0aW9ucyBjaGFuZ2VcbiAgICAgICAgaWYgKCF0aGlzLm9uVHJhbnNsYXRpb25DaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZSA9IHRoaXMudHJhbnNsYXRlLm9uVHJhbnNsYXRpb25DaGFuZ2Uuc3Vic2NyaWJlKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5sYXN0S2V5ICYmIGV2ZW50LmxhbmcgPT09IF90aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sYXN0S2V5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlVmFsdWUocXVlcnksIGludGVycG9sYXRlUGFyYW1zLCBldmVudC50cmFuc2xhdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHN1YnNjcmliZSB0byBvbkxhbmdDaGFuZ2UgZXZlbnQsIGluIGNhc2UgdGhlIGxhbmd1YWdlIGNoYW5nZXNcbiAgICAgICAgaWYgKCF0aGlzLm9uTGFuZ0NoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5vbkxhbmdDaGFuZ2UgPSB0aGlzLnRyYW5zbGF0ZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5sYXN0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxhc3RLZXkgPSBudWxsOyAvLyB3ZSB3YW50IHRvIG1ha2Ugc3VyZSBpdCBkb2Vzbid0IHJldHVybiB0aGUgc2FtZSB2YWx1ZSB1bnRpbCBpdCdzIGJlZW4gdXBkYXRlZFxuICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVWYWx1ZShxdWVyeSwgaW50ZXJwb2xhdGVQYXJhbXMsIGV2ZW50LnRyYW5zbGF0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIG9uRGVmYXVsdExhbmdDaGFuZ2UgZXZlbnQsIGluIGNhc2UgdGhlIGRlZmF1bHQgbGFuZ3VhZ2UgY2hhbmdlc1xuICAgICAgICBpZiAoIXRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlID0gdGhpcy50cmFuc2xhdGUub25EZWZhdWx0TGFuZ0NoYW5nZS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5sYXN0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxhc3RLZXkgPSBudWxsOyAvLyB3ZSB3YW50IHRvIG1ha2Ugc3VyZSBpdCBkb2Vzbid0IHJldHVybiB0aGUgc2FtZSB2YWx1ZSB1bnRpbCBpdCdzIGJlZW4gdXBkYXRlZFxuICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVWYWx1ZShxdWVyeSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xlYW4gYW55IGV4aXN0aW5nIHN1YnNjcmlwdGlvbiB0byBjaGFuZ2UgZXZlbnRzXG4gICAgICovXG4gICAgLyoqXG4gICAgICogQ2xlYW4gYW55IGV4aXN0aW5nIHN1YnNjcmlwdGlvbiB0byBjaGFuZ2UgZXZlbnRzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVQaXBlLnByb3RvdHlwZS5fZGlzcG9zZSA9IC8qKlxuICAgICAqIENsZWFuIGFueSBleGlzdGluZyBzdWJzY3JpcHRpb24gdG8gY2hhbmdlIGV2ZW50c1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZS51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vbkxhbmdDaGFuZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLm9uTGFuZ0NoYW5nZS51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdGhpcy5vbkxhbmdDaGFuZ2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9uRGVmYXVsdExhbmdDaGFuZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLm9uRGVmYXVsdExhbmdDaGFuZ2UudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVQaXBlLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9kaXNwb3NlKCk7XG4gICAgfTtcbiAgICBUcmFuc2xhdGVQaXBlLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogSW5qZWN0YWJsZSB9LFxuICAgICAgICB7IHR5cGU6IFBpcGUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICd0cmFuc2xhdGUnLFxuICAgICAgICAgICAgICAgICAgICBwdXJlOiBmYWxzZSAvLyByZXF1aXJlZCB0byB1cGRhdGUgdGhlIHZhbHVlIHdoZW4gdGhlIHByb21pc2UgaXMgcmVzb2x2ZWRcbiAgICAgICAgICAgICAgICB9LF0gfVxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgVHJhbnNsYXRlUGlwZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgeyB0eXBlOiBUcmFuc2xhdGVTZXJ2aWNlIH0sXG4gICAgICAgIHsgdHlwZTogQ2hhbmdlRGV0ZWN0b3JSZWYgfVxuICAgIF07IH07XG4gICAgcmV0dXJuIFRyYW5zbGF0ZVBpcGU7XG59KCkpO1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxuICogQHN1cHByZXNzIHtjaGVja1R5cGVzLGV4dHJhUmVxdWlyZSx1c2VsZXNzQ29kZX0gY2hlY2tlZCBieSB0c2NcbiAqL1xudmFyIFRyYW5zbGF0ZU1vZHVsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFuc2xhdGVNb2R1bGUoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVzZSB0aGlzIG1ldGhvZCBpbiB5b3VyIHJvb3QgbW9kdWxlIHRvIHByb3ZpZGUgdGhlIFRyYW5zbGF0ZVNlcnZpY2VcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBVc2UgdGhpcyBtZXRob2QgaW4geW91ciByb290IG1vZHVsZSB0byBwcm92aWRlIHRoZSBUcmFuc2xhdGVTZXJ2aWNlXG4gICAgICogQHBhcmFtIHs/PX0gY29uZmlnXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCA9IC8qKlxuICAgICAqIFVzZSB0aGlzIG1ldGhvZCBpbiB5b3VyIHJvb3QgbW9kdWxlIHRvIHByb3ZpZGUgdGhlIFRyYW5zbGF0ZVNlcnZpY2VcbiAgICAgKiBAcGFyYW0gez89fSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IHt9OyB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogVHJhbnNsYXRlTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgY29uZmlnLmxvYWRlciB8fCB7IHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlciwgdXNlQ2xhc3M6IFRyYW5zbGF0ZUZha2VMb2FkZXIgfSxcbiAgICAgICAgICAgICAgICBjb25maWcuY29tcGlsZXIgfHwgeyBwcm92aWRlOiBUcmFuc2xhdGVDb21waWxlciwgdXNlQ2xhc3M6IFRyYW5zbGF0ZUZha2VDb21waWxlciB9LFxuICAgICAgICAgICAgICAgIGNvbmZpZy5wYXJzZXIgfHwgeyBwcm92aWRlOiBUcmFuc2xhdGVQYXJzZXIsIHVzZUNsYXNzOiBUcmFuc2xhdGVEZWZhdWx0UGFyc2VyIH0sXG4gICAgICAgICAgICAgICAgY29uZmlnLm1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgfHwgeyBwcm92aWRlOiBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLCB1c2VDbGFzczogRmFrZU1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgfSxcbiAgICAgICAgICAgICAgICBUcmFuc2xhdGVTdG9yZSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IFVTRV9TVE9SRSwgdXNlVmFsdWU6IGNvbmZpZy5pc29sYXRlIH0sXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBVU0VfREVGQVVMVF9MQU5HLCB1c2VWYWx1ZTogY29uZmlnLnVzZURlZmF1bHRMYW5nIH0sXG4gICAgICAgICAgICAgICAgVHJhbnNsYXRlU2VydmljZVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXNlIHRoaXMgbWV0aG9kIGluIHlvdXIgb3RoZXIgKG5vbiByb290KSBtb2R1bGVzIHRvIGltcG9ydCB0aGUgZGlyZWN0aXZlL3BpcGVcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBVc2UgdGhpcyBtZXRob2QgaW4geW91ciBvdGhlciAobm9uIHJvb3QpIG1vZHVsZXMgdG8gaW1wb3J0IHRoZSBkaXJlY3RpdmUvcGlwZVxuICAgICAqIEBwYXJhbSB7Pz19IGNvbmZpZ1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvckNoaWxkID0gLyoqXG4gICAgICogVXNlIHRoaXMgbWV0aG9kIGluIHlvdXIgb3RoZXIgKG5vbiByb290KSBtb2R1bGVzIHRvIGltcG9ydCB0aGUgZGlyZWN0aXZlL3BpcGVcbiAgICAgKiBAcGFyYW0gez89fSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IHt9OyB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogVHJhbnNsYXRlTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgY29uZmlnLmxvYWRlciB8fCB7IHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlciwgdXNlQ2xhc3M6IFRyYW5zbGF0ZUZha2VMb2FkZXIgfSxcbiAgICAgICAgICAgICAgICBjb25maWcuY29tcGlsZXIgfHwgeyBwcm92aWRlOiBUcmFuc2xhdGVDb21waWxlciwgdXNlQ2xhc3M6IFRyYW5zbGF0ZUZha2VDb21waWxlciB9LFxuICAgICAgICAgICAgICAgIGNvbmZpZy5wYXJzZXIgfHwgeyBwcm92aWRlOiBUcmFuc2xhdGVQYXJzZXIsIHVzZUNsYXNzOiBUcmFuc2xhdGVEZWZhdWx0UGFyc2VyIH0sXG4gICAgICAgICAgICAgICAgY29uZmlnLm1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgfHwgeyBwcm92aWRlOiBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLCB1c2VDbGFzczogRmFrZU1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IFVTRV9TVE9SRSwgdXNlVmFsdWU6IGNvbmZpZy5pc29sYXRlIH0sXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBVU0VfREVGQVVMVF9MQU5HLCB1c2VWYWx1ZTogY29uZmlnLnVzZURlZmF1bHRMYW5nIH0sXG4gICAgICAgICAgICAgICAgVHJhbnNsYXRlU2VydmljZVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH07XG4gICAgVHJhbnNsYXRlTW9kdWxlLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogTmdNb2R1bGUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNsYXRlUGlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zbGF0ZURpcmVjdGl2ZVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2xhdGVQaXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNsYXRlRGlyZWN0aXZlXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LF0gfVxuICAgIF07XG4gICAgcmV0dXJuIFRyYW5zbGF0ZU1vZHVsZTtcbn0oKSk7XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXMsZXh0cmFSZXF1aXJlLHVzZWxlc3NDb2RlfSBjaGVja2VkIGJ5IHRzY1xuICovXG5cbmV4cG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSwgVHJhbnNsYXRlTG9hZGVyLCBUcmFuc2xhdGVGYWtlTG9hZGVyLCBVU0VfU1RPUkUsIFVTRV9ERUZBVUxUX0xBTkcsIFRyYW5zbGF0ZVNlcnZpY2UsIE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIEZha2VNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLCBUcmFuc2xhdGVQYXJzZXIsIFRyYW5zbGF0ZURlZmF1bHRQYXJzZXIsIFRyYW5zbGF0ZUNvbXBpbGVyLCBUcmFuc2xhdGVGYWtlQ29tcGlsZXIsIFRyYW5zbGF0ZURpcmVjdGl2ZSwgVHJhbnNsYXRlUGlwZSwgVHJhbnNsYXRlU3RvcmUgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2libWQ0TFhSeVlXNXpiR0YwWlMxamIzSmxMbXB6TG0xaGNDSXNJbk52ZFhKalpYTWlPbHNpYm1jNkx5OUFibWQ0TFhSeVlXNXpiR0YwWlM5amIzSmxMMnhwWWk5MGNtRnVjMnhoZEdVdWJHOWhaR1Z5TG5Seklpd2libWM2THk5QWJtZDRMWFJ5WVc1emJHRjBaUzlqYjNKbEwyeHBZaTl0YVhOemFXNW5MWFJ5WVc1emJHRjBhVzl1TFdoaGJtUnNaWEl1ZEhNaUxDSnVaem92TDBCdVozZ3RkSEpoYm5Oc1lYUmxMMk52Y21VdmJHbGlMM1J5WVc1emJHRjBaUzVqYjIxd2FXeGxjaTUwY3lJc0ltNW5PaTh2UUc1bmVDMTBjbUZ1YzJ4aGRHVXZZMjl5WlM5c2FXSXZkWFJwYkM1MGN5SXNJbTVuT2k4dlFHNW5lQzEwY21GdWMyeGhkR1V2WTI5eVpTOXNhV0l2ZEhKaGJuTnNZWFJsTG5CaGNuTmxjaTUwY3lJc0ltNW5PaTh2UUc1bmVDMTBjbUZ1YzJ4aGRHVXZZMjl5WlM5c2FXSXZkSEpoYm5Oc1lYUmxMbk4wYjNKbExuUnpJaXdpYm1jNkx5OUFibWQ0TFhSeVlXNXpiR0YwWlM5amIzSmxMMnhwWWk5MGNtRnVjMnhoZEdVdWMyVnlkbWxqWlM1MGN5SXNJbTVuT2k4dlFHNW5lQzEwY21GdWMyeGhkR1V2WTI5eVpTOXNhV0l2ZEhKaGJuTnNZWFJsTG1ScGNtVmpkR2wyWlM1MGN5SXNJbTVuT2k4dlFHNW5lQzEwY21GdWMyeGhkR1V2WTI5eVpTOXNhV0l2ZEhKaGJuTnNZWFJsTG5CcGNHVXVkSE1pTENKdVp6b3ZMMEJ1WjNndGRISmhibk5zWVhSbEwyTnZjbVV2Y0hWaWJHbGpYMkZ3YVM1MGN5SmRMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdlMGx1YW1WamRHRmliR1Y5SUdaeWIyMGdYQ0pBWVc1bmRXeGhjaTlqYjNKbFhDSTdYRzVwYlhCdmNuUWdlMDlpYzJWeWRtRmliR1VzSUc5bWZTQm1jbTl0SUZ3aWNuaHFjMXdpTzF4dVhHNWxlSEJ2Y25RZ1lXSnpkSEpoWTNRZ1kyeGhjM01nVkhKaGJuTnNZWFJsVEc5aFpHVnlJSHRjYmlBZ1lXSnpkSEpoWTNRZ1oyVjBWSEpoYm5Oc1lYUnBiMjRvYkdGdVp6b2djM1J5YVc1bktUb2dUMkp6WlhKMllXSnNaVHhoYm5rK08xeHVmVnh1WEc0dktpcGNiaUFxSUZSb2FYTWdiRzloWkdWeUlHbHpJR3AxYzNRZ1lTQndiR0ZqWldodmJHUmxjaUIwYUdGMElHUnZaWE1nYm05MGFHbHVaeXdnYVc0Z1kyRnpaU0I1YjNVZ1pHOXVKM1FnYm1WbFpDQmhJR3h2WVdSbGNpQmhkQ0JoYkd4Y2JpQXFMMXh1UUVsdWFtVmpkR0ZpYkdVb0tWeHVaWGh3YjNKMElHTnNZWE56SUZSeVlXNXpiR0YwWlVaaGEyVk1iMkZrWlhJZ1pYaDBaVzVrY3lCVWNtRnVjMnhoZEdWTWIyRmtaWElnZTF4dUlDQm5aWFJVY21GdWMyeGhkR2x2Ymloc1lXNW5PaUJ6ZEhKcGJtY3BPaUJQWW5ObGNuWmhZbXhsUEdGdWVUNGdlMXh1SUNBZ0lISmxkSFZ5YmlCdlppaDdmU2s3WEc0Z0lIMWNibjFjYmlJc0ltbHRjRzl5ZENCN1NXNXFaV04wWVdKc1pYMGdabkp2YlNCY0lrQmhibWQxYkdGeUwyTnZjbVZjSWp0Y2JtbHRjRzl5ZENCN1ZISmhibk5zWVhSbFUyVnlkbWxqWlgwZ1puSnZiU0JjSWk0dmRISmhibk5zWVhSbExuTmxjblpwWTJWY0lqdGNibHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JOYVhOemFXNW5WSEpoYm5Oc1lYUnBiMjVJWVc1a2JHVnlVR0Z5WVcxeklIdGNiaUFnTHlvcVhHNGdJQ0FxSUhSb1pTQnJaWGtnZEdoaGRDZHpJRzFwYzNOcGJtY2dhVzRnZEhKaGJuTnNZWFJwYjI0Z1ptbHNaWE5jYmlBZ0lDb3ZYRzRnSUd0bGVUb2djM1J5YVc1bk8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCaGJpQnBibk4wWVc1alpTQnZaaUIwYUdVZ2MyVnlkbWxqWlNCMGFHRjBJSGRoY3lCMWJtRmliR1VnZEc4Z2RISmhibk5zWVhSbElIUm9aU0JyWlhrdVhHNGdJQ0FxTDF4dUlDQjBjbUZ1YzJ4aGRHVlRaWEoyYVdObE9pQlVjbUZ1YzJ4aGRHVlRaWEoyYVdObE8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCcGJuUmxjbkJ2YkdGMGFXOXVJSEJoY21GdGN5QjBhR0YwSUhkbGNtVWdjR0Z6YzJWa0lHRnNiMjVuSUdadmNpQjBjbUZ1YzJ4aGRHbHVaeUIwYUdVZ1oybDJaVzRnYTJWNUxseHVJQ0FnS2k5Y2JpQWdhVzUwWlhKd2IyeGhkR1ZRWVhKaGJYTS9PaUJQWW1wbFkzUTdYRzU5WEc1Y2JtVjRjRzl5ZENCaFluTjBjbUZqZENCamJHRnpjeUJOYVhOemFXNW5WSEpoYm5Oc1lYUnBiMjVJWVc1a2JHVnlJSHRjYmlBZ0x5b3FYRzRnSUNBcUlFRWdablZ1WTNScGIyNGdkR2hoZENCb1lXNWtiR1Z6SUcxcGMzTnBibWNnZEhKaGJuTnNZWFJwYjI1ekxseHVJQ0FnS2x4dUlDQWdLaUJBY0dGeVlXMGdjR0Z5WVcxeklHTnZiblJsZUhRZ1ptOXlJSEpsYzI5c2RtbHVaeUJoSUcxcGMzTnBibWNnZEhKaGJuTnNZWFJwYjI1Y2JpQWdJQ29nUUhKbGRIVnlibk1nWVNCMllXeDFaU0J2Y2lCaGJpQnZZbk5sY25aaFlteGxYRzRnSUNBcUlFbG1JR2wwSUhKbGRIVnlibk1nWVNCMllXeDFaU3dnZEdobGJpQjBhR2x6SUhaaGJIVmxJR2x6SUhWelpXUXVYRzRnSUNBcUlFbG1JR2wwSUhKbGRIVnliaUJoYmlCdlluTmxjblpoWW14bExDQjBhR1VnZG1Gc2RXVWdjbVYwZFhKdVpXUWdZbmtnZEdocGN5QnZZbk5sY25aaFlteGxJSGRwYkd3Z1ltVWdkWE5sWkNBb1pYaGpaWEIwSUdsbUlIUm9aU0J0WlhSb2IyUWdkMkZ6SUZ3aWFXNXpkR0Z1ZEZ3aUtTNWNiaUFnSUNvZ1NXWWdhWFFnWkc5bGMyNG5kQ0J5WlhSMWNtNGdkR2hsYmlCMGFHVWdhMlY1SUhkcGJHd2dZbVVnZFhObFpDQmhjeUJoSUhaaGJIVmxYRzRnSUNBcUwxeHVJQ0JoWW5OMGNtRmpkQ0JvWVc1a2JHVW9jR0Z5WVcxek9pQk5hWE56YVc1blZISmhibk5zWVhScGIyNUlZVzVrYkdWeVVHRnlZVzF6S1RvZ1lXNTVPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlGUm9hWE1nYUdGdVpHeGxjaUJwY3lCcWRYTjBJR0VnY0d4aFkyVm9iMnhrWlhJZ2RHaGhkQ0JrYjJWeklHNXZkR2hwYm1jc0lHbHVJR05oYzJVZ2VXOTFJR1J2YmlkMElHNWxaV1FnWVNCdGFYTnphVzVuSUhSeVlXNXpiR0YwYVc5dUlHaGhibVJzWlhJZ1lYUWdZV3hzWEc0Z0tpOWNia0JKYm1wbFkzUmhZbXhsS0NsY2JtVjRjRzl5ZENCamJHRnpjeUJHWVd0bFRXbHpjMmx1WjFSeVlXNXpiR0YwYVc5dVNHRnVaR3hsY2lCcGJYQnNaVzFsYm5SeklFMXBjM05wYm1kVWNtRnVjMnhoZEdsdmJraGhibVJzWlhJZ2UxeHVJQ0JvWVc1a2JHVW9jR0Z5WVcxek9pQk5hWE56YVc1blZISmhibk5zWVhScGIyNUlZVzVrYkdWeVVHRnlZVzF6S1RvZ2MzUnlhVzVuSUh0Y2JpQWdJQ0J5WlhSMWNtNGdjR0Z5WVcxekxtdGxlVHRjYmlBZ2ZWeHVmVnh1SWl3aWFXMXdiM0owSUh0SmJtcGxZM1JoWW14bGZTQm1jbTl0SUZ3aVFHRnVaM1ZzWVhJdlkyOXlaVndpTzF4dVhHNWxlSEJ2Y25RZ1lXSnpkSEpoWTNRZ1kyeGhjM01nVkhKaGJuTnNZWFJsUTI5dGNHbHNaWElnZTF4dUlDQmhZbk4wY21GamRDQmpiMjF3YVd4bEtIWmhiSFZsT2lCemRISnBibWNzSUd4aGJtYzZJSE4wY21sdVp5azZJSE4wY21sdVp5QjhJRVoxYm1OMGFXOXVPMXh1WEc0Z0lHRmljM1J5WVdOMElHTnZiWEJwYkdWVWNtRnVjMnhoZEdsdmJuTW9kSEpoYm5Oc1lYUnBiMjV6T2lCaGJua3NJR3hoYm1jNklITjBjbWx1WnlrNklHRnVlVHRjYm4xY2JseHVMeW9xWEc0Z0tpQlVhR2x6SUdOdmJYQnBiR1Z5SUdseklHcDFjM1FnWVNCd2JHRmpaV2h2YkdSbGNpQjBhR0YwSUdSdlpYTWdibTkwYUdsdVp5d2dhVzRnWTJGelpTQjViM1VnWkc5dUozUWdibVZsWkNCaElHTnZiWEJwYkdWeUlHRjBJR0ZzYkZ4dUlDb3ZYRzVBU1c1cVpXTjBZV0pzWlNncFhHNWxlSEJ2Y25RZ1kyeGhjM01nVkhKaGJuTnNZWFJsUm1GclpVTnZiWEJwYkdWeUlHVjRkR1Z1WkhNZ1ZISmhibk5zWVhSbFEyOXRjR2xzWlhJZ2UxeHVJQ0JqYjIxd2FXeGxLSFpoYkhWbE9pQnpkSEpwYm1jc0lHeGhibWM2SUhOMGNtbHVaeWs2SUhOMGNtbHVaeUI4SUVaMWJtTjBhVzl1SUh0Y2JpQWdJQ0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdJSDFjYmx4dUlDQmpiMjF3YVd4bFZISmhibk5zWVhScGIyNXpLSFJ5WVc1emJHRjBhVzl1Y3pvZ1lXNTVMQ0JzWVc1bk9pQnpkSEpwYm1jcE9pQmhibmtnZTF4dUlDQWdJSEpsZEhWeWJpQjBjbUZ1YzJ4aGRHbHZibk03WEc0Z0lIMWNibjFjYmlJc0lpOHFJSFJ6YkdsdWREcGthWE5oWW14bElDb3ZYRzR2S2lwY2JpQXFJRVJsZEdWeWJXbHVaWE1nYVdZZ2RIZHZJRzlpYW1WamRITWdiM0lnZEhkdklIWmhiSFZsY3lCaGNtVWdaWEYxYVhaaGJHVnVkQzVjYmlBcVhHNGdLaUJVZDI4Z2IySnFaV04wY3lCdmNpQjJZV3gxWlhNZ1lYSmxJR052Ym5OcFpHVnlaV1FnWlhGMWFYWmhiR1Z1ZENCcFppQmhkQ0JzWldGemRDQnZibVVnYjJZZ2RHaGxJR1p2Ykd4dmQybHVaeUJwY3lCMGNuVmxPbHh1SUNwY2JpQXFJQ29nUW05MGFDQnZZbXBsWTNSeklHOXlJSFpoYkhWbGN5QndZWE56SUdBOVBUMWdJR052YlhCaGNtbHpiMjR1WEc0Z0tpQXFJRUp2ZEdnZ2IySnFaV04wY3lCdmNpQjJZV3gxWlhNZ1lYSmxJRzltSUhSb1pTQnpZVzFsSUhSNWNHVWdZVzVrSUdGc2JDQnZaaUIwYUdWcGNpQndjbTl3WlhKMGFXVnpJR0Z5WlNCbGNYVmhiQ0JpZVZ4dUlDb2dJQ0JqYjIxd1lYSnBibWNnZEdobGJTQjNhWFJvSUdCbGNYVmhiSE5nTGx4dUlDcGNiaUFxSUVCd1lYSmhiU0J2TVNCUFltcGxZM1FnYjNJZ2RtRnNkV1VnZEc4Z1kyOXRjR0Z5WlM1Y2JpQXFJRUJ3WVhKaGJTQnZNaUJQWW1wbFkzUWdiM0lnZG1Gc2RXVWdkRzhnWTI5dGNHRnlaUzVjYmlBcUlFQnlaWFIxY201eklIUnlkV1VnYVdZZ1lYSm5kVzFsYm5SeklHRnlaU0JsY1hWaGJDNWNiaUFxTDF4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUdWeGRXRnNjeWh2TVRvZ1lXNTVMQ0J2TWpvZ1lXNTVLVG9nWW05dmJHVmhiaUI3WEc0Z0lHbG1JQ2h2TVNBOVBUMGdieklwSUhKbGRIVnliaUIwY25WbE8xeHVJQ0JwWmlBb2J6RWdQVDA5SUc1MWJHd2dmSHdnYnpJZ1BUMDlJRzUxYkd3cElISmxkSFZ5YmlCbVlXeHpaVHRjYmlBZ2FXWWdLRzh4SUNFOVBTQnZNU0FtSmlCdk1pQWhQVDBnYnpJcElISmxkSFZ5YmlCMGNuVmxPeUF2THlCT1lVNGdQVDA5SUU1aFRseHVJQ0JzWlhRZ2RERWdQU0IwZVhCbGIyWWdiekVzSUhReUlEMGdkSGx3Wlc5bUlHOHlMQ0JzWlc1bmRHZzZJRzUxYldKbGNpd2dhMlY1T2lCaGJua3NJR3RsZVZObGREb2dZVzU1TzF4dUlDQnBaaUFvZERFZ1BUMGdkRElnSmlZZ2RERWdQVDBnSjI5aWFtVmpkQ2NwSUh0Y2JpQWdJQ0JwWmlBb1FYSnlZWGt1YVhOQmNuSmhlU2h2TVNrcElIdGNiaUFnSUNBZ0lHbG1JQ2doUVhKeVlYa3VhWE5CY25KaGVTaHZNaWtwSUhKbGRIVnliaUJtWVd4elpUdGNiaUFnSUNBZ0lHbG1JQ2dvYkdWdVozUm9JRDBnYnpFdWJHVnVaM1JvS1NBOVBTQnZNaTVzWlc1bmRHZ3BJSHRjYmlBZ0lDQWdJQ0FnWm05eUlDaHJaWGtnUFNBd095QnJaWGtnUENCc1pXNW5kR2c3SUd0bGVTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2FXWWdLQ0ZsY1hWaGJITW9iekZiYTJWNVhTd2diekpiYTJWNVhTa3BJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RISjFaVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2FXWWdLRUZ5Y21GNUxtbHpRWEp5WVhrb2J6SXBLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lHdGxlVk5sZENBOUlFOWlhbVZqZEM1amNtVmhkR1VvYm5Wc2JDazdYRzRnSUNBZ0lDQm1iM0lnS0d0bGVTQnBiaUJ2TVNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvSVdWeGRXRnNjeWh2TVZ0clpYbGRMQ0J2TWx0clpYbGRLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCclpYbFRaWFJiYTJWNVhTQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCbWIzSWdLR3RsZVNCcGJpQnZNaWtnZTF4dUlDQWdJQ0FnSUNCcFppQW9JU2hyWlhrZ2FXNGdhMlY1VTJWMEtTQW1KaUIwZVhCbGIyWWdiekpiYTJWNVhTQWhQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNiaUFnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lISmxkSFZ5YmlCMGNuVmxPMXh1SUNBZ0lIMWNiaUFnZlZ4dUlDQnlaWFIxY200Z1ptRnNjMlU3WEc1OVhHNHZLaUIwYzJ4cGJuUTZaVzVoWW14bElDb3ZYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJwYzBSbFptbHVaV1FvZG1Gc2RXVTZJR0Z1ZVNrNklHSnZiMnhsWVc0Z2UxeHVJQ0J5WlhSMWNtNGdkSGx3Wlc5bUlIWmhiSFZsSUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmlCMllXeDFaU0FoUFQwZ2JuVnNiRHRjYm4xY2JseHVaWGh3YjNKMElHWjFibU4wYVc5dUlHbHpUMkpxWldOMEtHbDBaVzA2SUdGdWVTazZJR0p2YjJ4bFlXNGdlMXh1SUNCeVpYUjFjbTRnS0dsMFpXMGdKaVlnZEhsd1pXOW1JR2wwWlcwZ1BUMDlJQ2R2WW1wbFkzUW5JQ1ltSUNGQmNuSmhlUzVwYzBGeWNtRjVLR2wwWlcwcEtUdGNibjFjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUcxbGNtZGxSR1ZsY0NoMFlYSm5aWFE2SUdGdWVTd2djMjkxY21ObE9pQmhibmtwT2lCaGJua2dlMXh1SUNCc1pYUWdiM1YwY0hWMElEMGdUMkpxWldOMExtRnpjMmxuYmloN2ZTd2dkR0Z5WjJWMEtUdGNiaUFnYVdZZ0tHbHpUMkpxWldOMEtIUmhjbWRsZENrZ0ppWWdhWE5QWW1wbFkzUW9jMjkxY21ObEtTa2dlMXh1SUNBZ0lFOWlhbVZqZEM1clpYbHpLSE52ZFhKalpTa3VabTl5UldGamFDZ29hMlY1T2lCaGJua3BJRDArSUh0Y2JpQWdJQ0FnSUdsbUlDaHBjMDlpYW1WamRDaHpiM1Z5WTJWYmEyVjVYU2twSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0VvYTJWNUlHbHVJSFJoY21kbGRDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNCUFltcGxZM1F1WVhOemFXZHVLRzkxZEhCMWRDd2dlMXRyWlhsZE9pQnpiM1Z5WTJWYmEyVjVYWDBwTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lHOTFkSEIxZEZ0clpYbGRJRDBnYldWeVoyVkVaV1Z3S0hSaGNtZGxkRnRyWlhsZExDQnpiM1Z5WTJWYmEyVjVYU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUU5aWFtVmpkQzVoYzNOcFoyNG9iM1YwY0hWMExDQjdXMnRsZVYwNklITnZkWEpqWlZ0clpYbGRmU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU2s3WEc0Z0lIMWNiaUFnY21WMGRYSnVJRzkxZEhCMWREdGNibjFjYmlJc0ltbHRjRzl5ZENCN1NXNXFaV04wWVdKc1pYMGdabkp2YlNCY0lrQmhibWQxYkdGeUwyTnZjbVZjSWp0Y2JtbHRjRzl5ZENCN2FYTkVaV1pwYm1Wa2ZTQm1jbTl0SUZ3aUxpOTFkR2xzWENJN1hHNWNibVY0Y0c5eWRDQmhZbk4wY21GamRDQmpiR0Z6Y3lCVWNtRnVjMnhoZEdWUVlYSnpaWElnZTF4dUlDQXZLaXBjYmlBZ0lDb2dTVzUwWlhKd2IyeGhkR1Z6SUdFZ2MzUnlhVzVuSUhSdklISmxjR3hoWTJVZ2NHRnlZVzFsZEdWeWMxeHVJQ0FnS2lCY0lsUm9hWE1nYVhNZ1lTQjdleUJyWlhrZ2ZYMWNJaUE5UFQ0Z1hDSlVhR2x6SUdseklHRWdkbUZzZFdWY0lpd2dkMmwwYUNCd1lYSmhiWE1nUFNCN0lHdGxlVG9nWENKMllXeDFaVndpSUgxY2JpQWdJQ29nUUhCaGNtRnRJR1Y0Y0hKY2JpQWdJQ29nUUhCaGNtRnRJSEJoY21GdGMxeHVJQ0FnS2k5Y2JpQWdZV0p6ZEhKaFkzUWdhVzUwWlhKd2IyeGhkR1VvWlhod2Nqb2djM1J5YVc1bklId2dSblZ1WTNScGIyNHNJSEJoY21GdGN6ODZJR0Z1ZVNrNklITjBjbWx1Wnp0Y2JseHVJQ0F2S2lwY2JpQWdJQ29nUjJWMGN5QmhJSFpoYkhWbElHWnliMjBnWVc0Z2IySnFaV04wSUdKNUlHTnZiWEJ2YzJWa0lHdGxlVnh1SUNBZ0tpQndZWEp6WlhJdVoyVjBWbUZzZFdVb2V5QnJaWGt4T2lCN0lHdGxlVUU2SUNkMllXeDFaVWtuSUgxOUxDQW5hMlY1TVM1clpYbEJKeWtnUFQwK0lDZDJZV3gxWlVrblhHNGdJQ0FxSUVCd1lYSmhiU0IwWVhKblpYUmNiaUFnSUNvZ1FIQmhjbUZ0SUd0bGVWeHVJQ0FnS2k5Y2JpQWdZV0p6ZEhKaFkzUWdaMlYwVm1Gc2RXVW9kR0Z5WjJWME9pQmhibmtzSUd0bGVUb2djM1J5YVc1bktUb2dZVzU1WEc1OVhHNWNia0JKYm1wbFkzUmhZbXhsS0NsY2JtVjRjRzl5ZENCamJHRnpjeUJVY21GdWMyeGhkR1ZFWldaaGRXeDBVR0Z5YzJWeUlHVjRkR1Z1WkhNZ1ZISmhibk5zWVhSbFVHRnljMlZ5SUh0Y2JpQWdkR1Z0Y0d4aGRHVk5ZWFJqYUdWeU9pQlNaV2RGZUhBZ1BTQXZlM3RjWEhNL0tGdGVlMzFjWEhOZEtpbGNYSE0vZlgwdlp6dGNibHh1SUNCd2RXSnNhV01nYVc1MFpYSndiMnhoZEdVb1pYaHdjam9nYzNSeWFXNW5JSHdnUm5WdVkzUnBiMjRzSUhCaGNtRnRjejg2SUdGdWVTazZJSE4wY21sdVp5QjdYRzRnSUNBZ2JHVjBJSEpsYzNWc2REb2djM1J5YVc1bk8xeHVYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppQmxlSEJ5SUQwOVBTQW5jM1J5YVc1bkp5a2dlMXh1SUNBZ0lDQWdjbVZ6ZFd4MElEMGdkR2hwY3k1cGJuUmxjbkJ2YkdGMFpWTjBjbWx1WnlobGVIQnlMQ0J3WVhKaGJYTXBPMXh1SUNBZ0lIMGdaV3h6WlNCcFppQW9kSGx3Wlc5bUlHVjRjSElnUFQwOUlDZG1kVzVqZEdsdmJpY3BJSHRjYmlBZ0lDQWdJSEpsYzNWc2RDQTlJSFJvYVhNdWFXNTBaWEp3YjJ4aGRHVkdkVzVqZEdsdmJpaGxlSEJ5TENCd1lYSmhiWE1wTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQXZMeUIwYUdseklITm9iM1ZzWkNCdWIzUWdhR0Z3Y0dWdUxDQmlkWFFnWVc0Z2RXNXlaV3hoZEdWa0lGUnlZVzV6YkdGMFpWTmxjblpwWTJVZ2RHVnpkQ0JrWlhCbGJtUnpJRzl1SUdsMFhHNGdJQ0FnSUNCeVpYTjFiSFFnUFNCbGVIQnlJR0Z6SUhOMGNtbHVaenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2NtVnpkV3gwTzF4dUlDQjlYRzVjYmlBZ1oyVjBWbUZzZFdVb2RHRnlaMlYwT2lCaGJua3NJR3RsZVRvZ2MzUnlhVzVuS1RvZ1lXNTVJSHRjYmlBZ0lDQnNaWFFnYTJWNWN5QTlJR3RsZVM1emNHeHBkQ2duTGljcE8xeHVJQ0FnSUd0bGVTQTlJQ2NuTzF4dUlDQWdJR1J2SUh0Y2JpQWdJQ0FnSUd0bGVTQXJQU0JyWlhsekxuTm9hV1owS0NrN1hHNGdJQ0FnSUNCcFppQW9hWE5FWldacGJtVmtLSFJoY21kbGRDa2dKaVlnYVhORVpXWnBibVZrS0hSaGNtZGxkRnRyWlhsZEtTQW1KaUFvZEhsd1pXOW1JSFJoY21kbGRGdHJaWGxkSUQwOVBTQW5iMkpxWldOMEp5QjhmQ0FoYTJWNWN5NXNaVzVuZEdncEtTQjdYRzRnSUNBZ0lDQWdJSFJoY21kbGRDQTlJSFJoY21kbGRGdHJaWGxkTzF4dUlDQWdJQ0FnSUNCclpYa2dQU0FuSnp0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb0lXdGxlWE11YkdWdVozUm9LU0I3WEc0Z0lDQWdJQ0FnSUhSaGNtZGxkQ0E5SUhWdVpHVm1hVzVsWkR0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUd0bGVTQXJQU0FuTGljN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlNCM2FHbHNaU0FvYTJWNWN5NXNaVzVuZEdncE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhSaGNtZGxkRHRjYmlBZ2ZWeHVYRzRnSUhCeWFYWmhkR1VnYVc1MFpYSndiMnhoZEdWR2RXNWpkR2x2YmlobWJqb2dSblZ1WTNScGIyNHNJSEJoY21GdGN6ODZJR0Z1ZVNrZ2UxeHVJQ0FnSUhKbGRIVnliaUJtYmlod1lYSmhiWE1wTzF4dUlDQjlYRzVjYmlBZ2NISnBkbUYwWlNCcGJuUmxjbkJ2YkdGMFpWTjBjbWx1WnlobGVIQnlPaUJ6ZEhKcGJtY3NJSEJoY21GdGN6ODZJR0Z1ZVNrZ2UxeHVJQ0FnSUdsbUlDZ2hjR0Z5WVcxektTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1pYaHdjanRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z1pYaHdjaTV5WlhCc1lXTmxLSFJvYVhNdWRHVnRjR3hoZEdWTllYUmphR1Z5TENBb2MzVmljM1J5YVc1bk9pQnpkSEpwYm1jc0lHSTZJSE4wY21sdVp5a2dQVDRnZTF4dUlDQWdJQ0FnYkdWMElISWdQU0IwYUdsekxtZGxkRlpoYkhWbEtIQmhjbUZ0Y3l3Z1lpazdYRzRnSUNBZ0lDQnlaWFIxY200Z2FYTkVaV1pwYm1Wa0tISXBJRDhnY2lBNklITjFZbk4wY21sdVp6dGNiaUFnSUNCOUtUdGNiaUFnZlZ4dWZWeHVJaXdpYVcxd2IzSjBJSHRGZG1WdWRFVnRhWFIwWlhKOUlHWnliMjBnWENKQVlXNW5kV3hoY2k5amIzSmxYQ0k3WEc1cGJYQnZjblFnZTBSbFptRjFiSFJNWVc1blEyaGhibWRsUlhabGJuUXNJRXhoYm1kRGFHRnVaMlZGZG1WdWRDd2dWSEpoYm5Oc1lYUnBiMjVEYUdGdVoyVkZkbVZ1ZEgwZ1puSnZiU0JjSWk0dmRISmhibk5zWVhSbExuTmxjblpwWTJWY0lqdGNibHh1Wlhod2IzSjBJR05zWVhOeklGUnlZVzV6YkdGMFpWTjBiM0psSUh0Y2JpQWdMeW9xWEc0Z0lDQXFJRlJvWlNCa1pXWmhkV3gwSUd4aGJtY2dkRzhnWm1Gc2JHSmhZMnNnZDJobGJpQjBjbUZ1YzJ4aGRHbHZibk1nWVhKbElHMXBjM05wYm1jZ2IyNGdkR2hsSUdOMWNuSmxiblFnYkdGdVoxeHVJQ0FnS2k5Y2JpQWdjSFZpYkdsaklHUmxabUYxYkhSTVlXNW5PaUJ6ZEhKcGJtYzdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGUm9aU0JzWVc1bklHTjFjbkpsYm5Sc2VTQjFjMlZrWEc0Z0lDQXFMMXh1SUNCd2RXSnNhV01nWTNWeWNtVnVkRXhoYm1jNklITjBjbWx1WnlBOUlIUm9hWE11WkdWbVlYVnNkRXhoYm1jN1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUdFZ2JHbHpkQ0J2WmlCMGNtRnVjMnhoZEdsdmJuTWdjR1Z5SUd4aGJtZGNiaUFnSUNvdlhHNGdJSEIxWW14cFl5QjBjbUZ1YzJ4aGRHbHZibk02SUdGdWVTQTlJSHQ5TzF4dVhHNGdJQzhxS2x4dUlDQWdLaUJoYmlCaGNuSmhlU0J2WmlCc1lXNW5jMXh1SUNBZ0tpOWNiaUFnY0hWaWJHbGpJR3hoYm1kek9pQkJjbkpoZVR4emRISnBibWMrSUQwZ1cxMDdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFRnVJRVYyWlc1MFJXMXBkSFJsY2lCMGJ5QnNhWE4wWlc0Z2RHOGdkSEpoYm5Oc1lYUnBiMjRnWTJoaGJtZGxJR1YyWlc1MGMxeHVJQ0FnS2lCdmJsUnlZVzV6YkdGMGFXOXVRMmhoYm1kbExuTjFZbk5qY21saVpTZ29jR0Z5WVcxek9pQlVjbUZ1YzJ4aGRHbHZia05vWVc1blpVVjJaVzUwS1NBOVBpQjdYRzRnSUNBZ0lDb2dJQ0FnSUM4dklHUnZJSE52YldWMGFHbHVaMXh1SUNBZ0lDQXFJSDBwTzF4dUlDQWdLaTljYmlBZ2NIVmliR2xqSUc5dVZISmhibk5zWVhScGIyNURhR0Z1WjJVNklFVjJaVzUwUlcxcGRIUmxjanhVY21GdWMyeGhkR2x2YmtOb1lXNW5aVVYyWlc1MFBpQTlJRzVsZHlCRmRtVnVkRVZ0YVhSMFpYSThWSEpoYm5Oc1lYUnBiMjVEYUdGdVoyVkZkbVZ1ZEQ0b0tUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1FXNGdSWFpsYm5SRmJXbDBkR1Z5SUhSdklHeHBjM1JsYmlCMGJ5QnNZVzVuSUdOb1lXNW5aU0JsZG1WdWRITmNiaUFnSUNvZ2IyNU1ZVzVuUTJoaGJtZGxMbk4xWW5OamNtbGlaU2dvY0dGeVlXMXpPaUJNWVc1blEyaGhibWRsUlhabGJuUXBJRDArSUh0Y2JpQWdJQ0FnS2lBZ0lDQWdMeThnWkc4Z2MyOXRaWFJvYVc1blhHNGdJQ0FnSUNvZ2ZTazdYRzRnSUNBcUwxeHVJQ0J3ZFdKc2FXTWdiMjVNWVc1blEyaGhibWRsT2lCRmRtVnVkRVZ0YVhSMFpYSThUR0Z1WjBOb1lXNW5aVVYyWlc1MFBpQTlJRzVsZHlCRmRtVnVkRVZ0YVhSMFpYSThUR0Z1WjBOb1lXNW5aVVYyWlc1MFBpZ3BPMXh1WEc0Z0lDOHFLbHh1SUNBZ0tpQkJiaUJGZG1WdWRFVnRhWFIwWlhJZ2RHOGdiR2x6ZEdWdUlIUnZJR1JsWm1GMWJIUWdiR0Z1WnlCamFHRnVaMlVnWlhabGJuUnpYRzRnSUNBcUlHOXVSR1ZtWVhWc2RFeGhibWREYUdGdVoyVXVjM1ZpYzJOeWFXSmxLQ2h3WVhKaGJYTTZJRVJsWm1GMWJIUk1ZVzVuUTJoaGJtZGxSWFpsYm5RcElEMCtJSHRjYmlBZ0lDQWdLaUFnSUNBZ0x5OGdaRzhnYzI5dFpYUm9hVzVuWEc0Z0lDQWdJQ29nZlNrN1hHNGdJQ0FxTDF4dUlDQndkV0pzYVdNZ2IyNUVaV1poZFd4MFRHRnVaME5vWVc1blpUb2dSWFpsYm5SRmJXbDBkR1Z5UEVSbFptRjFiSFJNWVc1blEyaGhibWRsUlhabGJuUStJRDBnYm1WM0lFVjJaVzUwUlcxcGRIUmxjanhFWldaaGRXeDBUR0Z1WjBOb1lXNW5aVVYyWlc1MFBpZ3BPMXh1ZlZ4dUlpd2lhVzF3YjNKMElIdEZkbVZ1ZEVWdGFYUjBaWElzSUVsdWFtVmpkQ3dnU1c1cVpXTjBZV0pzWlN3Z1NXNXFaV04wYVc5dVZHOXJaVzU5SUdaeWIyMGdYQ0pBWVc1bmRXeGhjaTlqYjNKbFhDSTdYRzVwYlhCdmNuUWdlMk52Ym1OaGRDd2diV1Z5WjJVc0lFOWljMlZ5ZG1GaWJHVXNJRTlpYzJWeWRtVnlMQ0J2Wm4wZ1puSnZiU0JjSW5KNGFuTmNJanRjYm1sdGNHOXlkQ0I3YldGd0xDQnphR0Z5WlN3Z2MzZHBkR05vVFdGd0xDQjBZV3RsTENCMGIwRnljbUY1ZlNCbWNtOXRJRndpY25ocWN5OXZjR1Z5WVhSdmNuTmNJanRjYm1sdGNHOXlkQ0I3VFdsemMybHVaMVJ5WVc1emJHRjBhVzl1U0dGdVpHeGxjaXdnVFdsemMybHVaMVJ5WVc1emJHRjBhVzl1U0dGdVpHeGxjbEJoY21GdGMzMGdabkp2YlNCY0lpNHZiV2x6YzJsdVp5MTBjbUZ1YzJ4aGRHbHZiaTFvWVc1a2JHVnlYQ0k3WEc1cGJYQnZjblFnZTFSeVlXNXpiR0YwWlVOdmJYQnBiR1Z5ZlNCbWNtOXRJRndpTGk5MGNtRnVjMnhoZEdVdVkyOXRjR2xzWlhKY0lqdGNibWx0Y0c5eWRDQjdWSEpoYm5Oc1lYUmxURzloWkdWeWZTQm1jbTl0SUZ3aUxpOTBjbUZ1YzJ4aGRHVXViRzloWkdWeVhDSTdYRzVwYlhCdmNuUWdlMVJ5WVc1emJHRjBaVkJoY25ObGNuMGdabkp2YlNCY0lpNHZkSEpoYm5Oc1lYUmxMbkJoY25ObGNsd2lPMXh1WEc1cGJYQnZjblFnZTFSeVlXNXpiR0YwWlZOMGIzSmxmU0JtY205dElGd2lMaTkwY21GdWMyeGhkR1V1YzNSdmNtVmNJanRjYm1sdGNHOXlkQ0I3YVhORVpXWnBibVZrTENCdFpYSm5aVVJsWlhCOUlHWnliMjBnWENJdUwzVjBhV3hjSWp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUZWVFJWOVRWRTlTUlNBOUlHNWxkeUJKYm1wbFkzUnBiMjVVYjJ0bGJqeHpkSEpwYm1jK0tDZFZVMFZmVTFSUFVrVW5LVHRjYm1WNGNHOXlkQ0JqYjI1emRDQlZVMFZmUkVWR1FWVk1WRjlNUVU1SElEMGdibVYzSUVsdWFtVmpkR2x2YmxSdmEyVnVQSE4wY21sdVp6NG9KMVZUUlY5RVJVWkJWVXhVWDB4QlRrY25LVHRjYmx4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCVWNtRnVjMnhoZEdsdmJrTm9ZVzVuWlVWMlpXNTBJSHRjYmlBZ2RISmhibk5zWVhScGIyNXpPaUJoYm5rN1hHNGdJR3hoYm1jNklITjBjbWx1Wnp0Y2JuMWNibHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JNWVc1blEyaGhibWRsUlhabGJuUWdlMXh1SUNCc1lXNW5PaUJ6ZEhKcGJtYzdYRzRnSUhSeVlXNXpiR0YwYVc5dWN6b2dZVzU1TzF4dWZWeHVYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRVJsWm1GMWJIUk1ZVzVuUTJoaGJtZGxSWFpsYm5RZ2UxeHVJQ0JzWVc1bk9pQnpkSEpwYm1jN1hHNGdJSFJ5WVc1emJHRjBhVzl1Y3pvZ1lXNTVPMXh1ZlZ4dVhHNWtaV05zWVhKbElHbHVkR1Z5Wm1GalpTQlhhVzVrYjNjZ2UxeHVJQ0J1WVhacFoyRjBiM0k2SUdGdWVUdGNibjFjYmx4dVpHVmpiR0Z5WlNCamIyNXpkQ0IzYVc1a2IzYzZJRmRwYm1SdmR6dGNibHh1UUVsdWFtVmpkR0ZpYkdVb0tWeHVaWGh3YjNKMElHTnNZWE56SUZSeVlXNXpiR0YwWlZObGNuWnBZMlVnZTF4dUlDQndjbWwyWVhSbElHeHZZV1JwYm1kVWNtRnVjMnhoZEdsdmJuTTZJRTlpYzJWeWRtRmliR1U4WVc1NVBqdGNiaUFnY0hKcGRtRjBaU0J3Wlc1a2FXNW5PaUJpYjI5c1pXRnVJRDBnWm1Gc2MyVTdYRzRnSUhCeWFYWmhkR1VnWDI5dVZISmhibk5zWVhScGIyNURhR0Z1WjJVNklFVjJaVzUwUlcxcGRIUmxjanhVY21GdWMyeGhkR2x2YmtOb1lXNW5aVVYyWlc1MFBpQTlJRzVsZHlCRmRtVnVkRVZ0YVhSMFpYSThWSEpoYm5Oc1lYUnBiMjVEYUdGdVoyVkZkbVZ1ZEQ0b0tUdGNiaUFnY0hKcGRtRjBaU0JmYjI1TVlXNW5RMmhoYm1kbE9pQkZkbVZ1ZEVWdGFYUjBaWEk4VEdGdVowTm9ZVzVuWlVWMlpXNTBQaUE5SUc1bGR5QkZkbVZ1ZEVWdGFYUjBaWEk4VEdGdVowTm9ZVzVuWlVWMlpXNTBQaWdwTzF4dUlDQndjbWwyWVhSbElGOXZia1JsWm1GMWJIUk1ZVzVuUTJoaGJtZGxPaUJGZG1WdWRFVnRhWFIwWlhJOFJHVm1ZWFZzZEV4aGJtZERhR0Z1WjJWRmRtVnVkRDRnUFNCdVpYY2dSWFpsYm5SRmJXbDBkR1Z5UEVSbFptRjFiSFJNWVc1blEyaGhibWRsUlhabGJuUStLQ2s3WEc0Z0lIQnlhWFpoZEdVZ1gyUmxabUYxYkhSTVlXNW5PaUJ6ZEhKcGJtYzdYRzRnSUhCeWFYWmhkR1VnWDJOMWNuSmxiblJNWVc1bk9pQnpkSEpwYm1jN1hHNGdJSEJ5YVhaaGRHVWdYMnhoYm1kek9pQkJjbkpoZVR4emRISnBibWMrSUQwZ1cxMDdYRzRnSUhCeWFYWmhkR1VnWDNSeVlXNXpiR0YwYVc5dWN6b2dZVzU1SUQwZ2UzMDdYRzRnSUhCeWFYWmhkR1VnWDNSeVlXNXpiR0YwYVc5dVVtVnhkV1Z6ZEhNNklHRnVlU0E5SUh0OU8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCQmJpQkZkbVZ1ZEVWdGFYUjBaWElnZEc4Z2JHbHpkR1Z1SUhSdklIUnlZVzV6YkdGMGFXOXVJR05vWVc1blpTQmxkbVZ1ZEhOY2JpQWdJQ29nYjI1VWNtRnVjMnhoZEdsdmJrTm9ZVzVuWlM1emRXSnpZM0pwWW1Vb0tIQmhjbUZ0Y3pvZ1ZISmhibk5zWVhScGIyNURhR0Z1WjJWRmRtVnVkQ2tnUFQ0Z2UxeHVJQ0FnSUNBcUlDQWdJQ0F2THlCa2J5QnpiMjFsZEdocGJtZGNiaUFnSUNBZ0tpQjlLVHRjYmlBZ0lDb3ZYRzRnSUdkbGRDQnZibFJ5WVc1emJHRjBhVzl1UTJoaGJtZGxLQ2s2SUVWMlpXNTBSVzFwZEhSbGNqeFVjbUZ1YzJ4aGRHbHZia05vWVc1blpVVjJaVzUwUGlCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWFYTnZiR0YwWlNBL0lIUm9hWE11WDI5dVZISmhibk5zWVhScGIyNURhR0Z1WjJVZ09pQjBhR2x6TG5OMGIzSmxMbTl1VkhKaGJuTnNZWFJwYjI1RGFHRnVaMlU3WEc0Z0lIMWNibHh1SUNBdktpcGNiaUFnSUNvZ1FXNGdSWFpsYm5SRmJXbDBkR1Z5SUhSdklHeHBjM1JsYmlCMGJ5QnNZVzVuSUdOb1lXNW5aU0JsZG1WdWRITmNiaUFnSUNvZ2IyNU1ZVzVuUTJoaGJtZGxMbk4xWW5OamNtbGlaU2dvY0dGeVlXMXpPaUJNWVc1blEyaGhibWRsUlhabGJuUXBJRDArSUh0Y2JpQWdJQ0FnS2lBZ0lDQWdMeThnWkc4Z2MyOXRaWFJvYVc1blhHNGdJQ0FnSUNvZ2ZTazdYRzRnSUNBcUwxeHVJQ0JuWlhRZ2IyNU1ZVzVuUTJoaGJtZGxLQ2s2SUVWMlpXNTBSVzFwZEhSbGNqeE1ZVzVuUTJoaGJtZGxSWFpsYm5RK0lIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXBjMjlzWVhSbElEOGdkR2hwY3k1ZmIyNU1ZVzVuUTJoaGJtZGxJRG9nZEdocGN5NXpkRzl5WlM1dmJreGhibWREYUdGdVoyVTdYRzRnSUgxY2JseHVJQ0F2S2lwY2JpQWdJQ29nUVc0Z1JYWmxiblJGYldsMGRHVnlJSFJ2SUd4cGMzUmxiaUIwYnlCa1pXWmhkV3gwSUd4aGJtY2dZMmhoYm1kbElHVjJaVzUwYzF4dUlDQWdLaUJ2YmtSbFptRjFiSFJNWVc1blEyaGhibWRsTG5OMVluTmpjbWxpWlNnb2NHRnlZVzF6T2lCRVpXWmhkV3gwVEdGdVowTm9ZVzVuWlVWMlpXNTBLU0E5UGlCN1hHNGdJQ0FnSUNvZ0lDQWdJQzh2SUdSdklITnZiV1YwYUdsdVoxeHVJQ0FnSUNBcUlIMHBPMXh1SUNBZ0tpOWNiaUFnWjJWMElHOXVSR1ZtWVhWc2RFeGhibWREYUdGdVoyVW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11YVhOdmJHRjBaU0EvSUhSb2FYTXVYMjl1UkdWbVlYVnNkRXhoYm1kRGFHRnVaMlVnT2lCMGFHbHpMbk4wYjNKbExtOXVSR1ZtWVhWc2RFeGhibWREYUdGdVoyVTdYRzRnSUgxY2JseHVJQ0F2S2lwY2JpQWdJQ29nVkdobElHUmxabUYxYkhRZ2JHRnVaeUIwYnlCbVlXeHNZbUZqYXlCM2FHVnVJSFJ5WVc1emJHRjBhVzl1Y3lCaGNtVWdiV2x6YzJsdVp5QnZiaUIwYUdVZ1kzVnljbVZ1ZENCc1lXNW5YRzRnSUNBcUwxeHVJQ0JuWlhRZ1pHVm1ZWFZzZEV4aGJtY29LVG9nYzNSeWFXNW5JSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVwYzI5c1lYUmxJRDhnZEdocGN5NWZaR1ZtWVhWc2RFeGhibWNnT2lCMGFHbHpMbk4wYjNKbExtUmxabUYxYkhSTVlXNW5PMXh1SUNCOVhHNWNiaUFnYzJWMElHUmxabUYxYkhSTVlXNW5LR1JsWm1GMWJIUk1ZVzVuT2lCemRISnBibWNwSUh0Y2JpQWdJQ0JwWmlBb2RHaHBjeTVwYzI5c1lYUmxLU0I3WEc0Z0lDQWdJQ0IwYUdsekxsOWtaV1poZFd4MFRHRnVaeUE5SUdSbFptRjFiSFJNWVc1bk8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0IwYUdsekxuTjBiM0psTG1SbFptRjFiSFJNWVc1bklEMGdaR1ZtWVhWc2RFeGhibWM3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnTHlvcVhHNGdJQ0FxSUZSb1pTQnNZVzVuSUdOMWNuSmxiblJzZVNCMWMyVmtYRzRnSUNBcUwxeHVJQ0JuWlhRZ1kzVnljbVZ1ZEV4aGJtY29LVG9nYzNSeWFXNW5JSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVwYzI5c1lYUmxJRDhnZEdocGN5NWZZM1Z5Y21WdWRFeGhibWNnT2lCMGFHbHpMbk4wYjNKbExtTjFjbkpsYm5STVlXNW5PMXh1SUNCOVhHNWNiaUFnYzJWMElHTjFjbkpsYm5STVlXNW5LR04xY25KbGJuUk1ZVzVuT2lCemRISnBibWNwSUh0Y2JpQWdJQ0JwWmlBb2RHaHBjeTVwYzI5c1lYUmxLU0I3WEc0Z0lDQWdJQ0IwYUdsekxsOWpkWEp5Wlc1MFRHRnVaeUE5SUdOMWNuSmxiblJNWVc1bk8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0IwYUdsekxuTjBiM0psTG1OMWNuSmxiblJNWVc1bklEMGdZM1Z5Y21WdWRFeGhibWM3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnTHlvcVhHNGdJQ0FxSUdGdUlHRnljbUY1SUc5bUlHeGhibWR6WEc0Z0lDQXFMMXh1SUNCblpYUWdiR0Z1WjNNb0tUb2djM1J5YVc1blcxMGdlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbWx6YjJ4aGRHVWdQeUIwYUdsekxsOXNZVzVuY3lBNklIUm9hWE11YzNSdmNtVXViR0Z1WjNNN1hHNGdJSDFjYmx4dUlDQnpaWFFnYkdGdVozTW9iR0Z1WjNNNklITjBjbWx1WjF0ZEtTQjdYRzRnSUNBZ2FXWWdLSFJvYVhNdWFYTnZiR0YwWlNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVmYkdGdVozTWdQU0JzWVc1bmN6dGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnZEdocGN5NXpkRzl5WlM1c1lXNW5jeUE5SUd4aGJtZHpPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJoSUd4cGMzUWdiMllnZEhKaGJuTnNZWFJwYjI1eklIQmxjaUJzWVc1blhHNGdJQ0FxTDF4dUlDQm5aWFFnZEhKaGJuTnNZWFJwYjI1ektDazZJR0Z1ZVNCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWFYTnZiR0YwWlNBL0lIUm9hWE11WDNSeVlXNXpiR0YwYVc5dWN5QTZJSFJvYVhNdWMzUnZjbVV1ZEhKaGJuTnNZWFJwYjI1ek8xeHVJQ0I5WEc1Y2JpQWdjMlYwSUhSeVlXNXpiR0YwYVc5dWN5aDBjbUZ1YzJ4aGRHbHZibk02SUdGdWVTa2dlMXh1SUNBZ0lHbG1JQ2gwYUdsekxtbHpiMnhoZEdVcElIdGNiaUFnSUNBZ0lIUm9hWE11WDNSeVlXNXpiR0YwYVc5dWN5QTlJSFJ5WVc1emJHRjBhVzl1Y3p0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdkR2hwY3k1emRHOXlaUzUwY21GdWMyeGhkR2x2Ym5NZ1BTQjBjbUZ1YzJ4aGRHbHZibk03WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnTHlvcVhHNGdJQ0FxWEc0Z0lDQXFJRUJ3WVhKaGJTQnpkRzl5WlNCaGJpQnBibk4wWVc1alpTQnZaaUIwYUdVZ2MzUnZjbVVnS0hSb1lYUWdhWE1nYzNWd2NHOXpaV1FnZEc4Z1ltVWdkVzVwY1hWbEtWeHVJQ0FnS2lCQWNHRnlZVzBnWTNWeWNtVnVkRXh2WVdSbGNpQkJiaUJwYm5OMFlXNWpaU0J2WmlCMGFHVWdiRzloWkdWeUlHTjFjbkpsYm5Sc2VTQjFjMlZrWEc0Z0lDQXFJRUJ3WVhKaGJTQmpiMjF3YVd4bGNpQkJiaUJwYm5OMFlXNWpaU0J2WmlCMGFHVWdZMjl0Y0dsc1pYSWdZM1Z5Y21WdWRHeDVJSFZ6WldSY2JpQWdJQ29nUUhCaGNtRnRJSEJoY25ObGNpQkJiaUJwYm5OMFlXNWpaU0J2WmlCMGFHVWdjR0Z5YzJWeUlHTjFjbkpsYm5Sc2VTQjFjMlZrWEc0Z0lDQXFJRUJ3WVhKaGJTQnRhWE56YVc1blZISmhibk5zWVhScGIyNUlZVzVrYkdWeUlFRWdhR0Z1Wkd4bGNpQm1iM0lnYldsemMybHVaeUIwY21GdWMyeGhkR2x2Ym5NdVhHNGdJQ0FxSUVCd1lYSmhiU0JwYzI5c1lYUmxJSGRvWlhSb1pYSWdkR2hwY3lCelpYSjJhV05sSUhOb2IzVnNaQ0IxYzJVZ2RHaGxJSE4wYjNKbElHOXlJRzV2ZEZ4dUlDQWdLaUJBY0dGeVlXMGdkWE5sUkdWbVlYVnNkRXhoYm1jZ2QyaGxkR2hsY2lCM1pTQnphRzkxYkdRZ2RYTmxJR1JsWm1GMWJIUWdiR0Z1WjNWaFoyVWdkSEpoYm5Oc1lYUnBiMjRnZDJobGJpQmpkWEp5Wlc1MElHeGhibWQxWVdkbElIUnlZVzV6YkdGMGFXOXVJR2x6SUcxcGMzTnBibWN1WEc0Z0lDQXFMMXh1SUNCamIyNXpkSEoxWTNSdmNpaHdkV0pzYVdNZ2MzUnZjbVU2SUZSeVlXNXpiR0YwWlZOMGIzSmxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQndkV0pzYVdNZ1kzVnljbVZ1ZEV4dllXUmxjam9nVkhKaGJuTnNZWFJsVEc5aFpHVnlMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQndkV0pzYVdNZ1kyOXRjR2xzWlhJNklGUnlZVzV6YkdGMFpVTnZiWEJwYkdWeUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCd2RXSnNhV01nY0dGeWMyVnlPaUJVY21GdWMyeGhkR1ZRWVhKelpYSXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIQjFZbXhwWXlCdGFYTnphVzVuVkhKaGJuTnNZWFJwYjI1SVlXNWtiR1Z5T2lCTmFYTnphVzVuVkhKaGJuTnNZWFJwYjI1SVlXNWtiR1Z5TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JBU1c1cVpXTjBLRlZUUlY5RVJVWkJWVXhVWDB4QlRrY3BJSEJ5YVhaaGRHVWdkWE5sUkdWbVlYVnNkRXhoYm1jNklHSnZiMnhsWVc0Z1BTQjBjblZsTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JBU1c1cVpXTjBLRlZUUlY5VFZFOVNSU2tnY0hKcGRtRjBaU0JwYzI5c1lYUmxPaUJpYjI5c1pXRnVJRDBnWm1Gc2MyVXBJSHRjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCVFpYUnpJSFJvWlNCa1pXWmhkV3gwSUd4aGJtZDFZV2RsSUhSdklIVnpaU0JoY3lCaElHWmhiR3hpWVdOclhHNGdJQ0FxTDF4dUlDQndkV0pzYVdNZ2MyVjBSR1ZtWVhWc2RFeGhibWNvYkdGdVp6b2djM1J5YVc1bktUb2dkbTlwWkNCN1hHNGdJQ0FnYVdZZ0tHeGhibWNnUFQwOUlIUm9hWE11WkdWbVlYVnNkRXhoYm1jcElIdGNiaUFnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JzWlhRZ2NHVnVaR2x1WnpvZ1QySnpaWEoyWVdKc1pUeGhibmsrSUQwZ2RHaHBjeTV5WlhSeWFXVjJaVlJ5WVc1emJHRjBhVzl1Y3loc1lXNW5LVHRjYmx4dUlDQWdJR2xtSUNoMGVYQmxiMllnY0dWdVpHbHVaeUFoUFQwZ1hDSjFibVJsWm1sdVpXUmNJaWtnZTF4dUlDQWdJQ0FnTHk4Z2IyNGdhVzVwZENCelpYUWdkR2hsSUdSbFptRjFiSFJNWVc1bklHbHRiV1ZrYVdGMFpXeDVYRzRnSUNBZ0lDQnBaaUFvSVhSb2FYTXVaR1ZtWVhWc2RFeGhibWNwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVrWldaaGRXeDBUR0Z1WnlBOUlHeGhibWM3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhCbGJtUnBibWN1Y0dsd1pTaDBZV3RsS0RFcEtWeHVJQ0FnSUNBZ0lDQXVjM1ZpYzJOeWFXSmxLQ2h5WlhNNklHRnVlU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJSFJvYVhNdVkyaGhibWRsUkdWbVlYVnNkRXhoYm1jb2JHRnVaeWs3WEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUgwZ1pXeHpaU0I3SUM4dklIZGxJR0ZzY21WaFpIa2dhR0YyWlNCMGFHbHpJR3hoYm1kMVlXZGxYRzRnSUNBZ0lDQjBhR2x6TG1Ob1lXNW5aVVJsWm1GMWJIUk1ZVzVuS0d4aGJtY3BPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJIWlhSeklIUm9aU0JrWldaaGRXeDBJR3hoYm1kMVlXZGxJSFZ6WldSY2JpQWdJQ292WEc0Z0lIQjFZbXhwWXlCblpYUkVaV1poZFd4MFRHRnVaeWdwT2lCemRISnBibWNnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG1SbFptRjFiSFJNWVc1bk8xeHVJQ0I5WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRU5vWVc1blpYTWdkR2hsSUd4aGJtY2dZM1Z5Y21WdWRHeDVJSFZ6WldSY2JpQWdJQ292WEc0Z0lIQjFZbXhwWXlCMWMyVW9iR0Z1WnpvZ2MzUnlhVzVuS1RvZ1QySnpaWEoyWVdKc1pUeGhibmsrSUh0Y2JpQWdJQ0F2THlCa2IyNG5kQ0JqYUdGdVoyVWdkR2hsSUd4aGJtZDFZV2RsSUdsbUlIUm9aU0JzWVc1bmRXRm5aU0JuYVhabGJpQnBjeUJoYkhKbFlXUjVJSE5sYkdWamRHVmtYRzRnSUNBZ2FXWWdLR3hoYm1jZ1BUMDlJSFJvYVhNdVkzVnljbVZ1ZEV4aGJtY3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnZaaWgwYUdsekxuUnlZVzV6YkdGMGFXOXVjMXRzWVc1blhTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2JHVjBJSEJsYm1ScGJtYzZJRTlpYzJWeWRtRmliR1U4WVc1NVBpQTlJSFJvYVhNdWNtVjBjbWxsZG1WVWNtRnVjMnhoZEdsdmJuTW9iR0Z1WnlrN1hHNWNiaUFnSUNCcFppQW9kSGx3Wlc5bUlIQmxibVJwYm1jZ0lUMDlJRndpZFc1a1pXWnBibVZrWENJcElIdGNiaUFnSUNBZ0lDOHZJRzl1SUdsdWFYUWdjMlYwSUhSb1pTQmpkWEp5Wlc1MFRHRnVaeUJwYlcxbFpHbGhkR1ZzZVZ4dUlDQWdJQ0FnYVdZZ0tDRjBhR2x6TG1OMWNuSmxiblJNWVc1bktTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVkzVnljbVZ1ZEV4aGJtY2dQU0JzWVc1bk8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQndaVzVrYVc1bkxuQnBjR1VvZEdGclpTZ3hLU2xjYmlBZ0lDQWdJQ0FnTG5OMVluTmpjbWxpWlNnb2NtVnpPaUJoYm5rcElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpMbU5vWVc1blpVeGhibWNvYkdGdVp5azdYRzRnSUNBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNCeVpYUjFjbTRnY0dWdVpHbHVaenRjYmlBZ0lDQjlJR1ZzYzJVZ2V5QXZMeUIzWlNCb1lYWmxJSFJvYVhNZ2JHRnVaM1ZoWjJVc0lISmxkSFZ5YmlCaGJpQlBZbk5sY25aaFlteGxYRzRnSUNBZ0lDQjBhR2x6TG1Ob1lXNW5aVXhoYm1jb2JHRnVaeWs3WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUJ2WmloMGFHbHpMblJ5WVc1emJHRjBhVzl1YzF0c1lXNW5YU2s3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnTHlvcVhHNGdJQ0FxSUZKbGRISnBaWFpsY3lCMGFHVWdaMmwyWlc0Z2RISmhibk5zWVhScGIyNXpYRzRnSUNBcUwxeHVJQ0J3Y21sMllYUmxJSEpsZEhKcFpYWmxWSEpoYm5Oc1lYUnBiMjV6S0d4aGJtYzZJSE4wY21sdVp5azZJRTlpYzJWeWRtRmliR1U4WVc1NVBpQjdYRzRnSUNBZ2JHVjBJSEJsYm1ScGJtYzZJRTlpYzJWeWRtRmliR1U4WVc1NVBqdGNibHh1SUNBZ0lDOHZJR2xtSUhSb2FYTWdiR0Z1WjNWaFoyVWdhWE1nZFc1aGRtRnBiR0ZpYkdVc0lHRnpheUJtYjNJZ2FYUmNiaUFnSUNCcFppQW9kSGx3Wlc5bUlIUm9hWE11ZEhKaGJuTnNZWFJwYjI1elcyeGhibWRkSUQwOVBTQmNJblZ1WkdWbWFXNWxaRndpS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbDkwY21GdWMyeGhkR2x2YmxKbGNYVmxjM1J6VzJ4aGJtZGRJRDBnZEdocGN5NWZkSEpoYm5Oc1lYUnBiMjVTWlhGMVpYTjBjMXRzWVc1blhTQjhmQ0IwYUdsekxtZGxkRlJ5WVc1emJHRjBhVzl1S0d4aGJtY3BPMXh1SUNBZ0lDQWdjR1Z1WkdsdVp5QTlJSFJvYVhNdVgzUnlZVzV6YkdGMGFXOXVVbVZ4ZFdWemRITmJiR0Z1WjEwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSEJsYm1ScGJtYzdYRzRnSUgxY2JseHVJQ0F2S2lwY2JpQWdJQ29nUjJWMGN5QmhiaUJ2WW1wbFkzUWdiMllnZEhKaGJuTnNZWFJwYjI1eklHWnZjaUJoSUdkcGRtVnVJR3hoYm1kMVlXZGxJSGRwZEdnZ2RHaGxJR04xY25KbGJuUWdiRzloWkdWeVhHNGdJQ0FxSUdGdVpDQndZWE56WlhNZ2FYUWdkR2h5YjNWbmFDQjBhR1VnWTI5dGNHbHNaWEpjYmlBZ0lDb3ZYRzRnSUhCMVlteHBZeUJuWlhSVWNtRnVjMnhoZEdsdmJpaHNZVzVuT2lCemRISnBibWNwT2lCUFluTmxjblpoWW14bFBHRnVlVDRnZTF4dUlDQWdJSFJvYVhNdWNHVnVaR2x1WnlBOUlIUnlkV1U3WEc0Z0lDQWdZMjl1YzNRZ2JHOWhaR2x1WjFSeVlXNXpiR0YwYVc5dWN5QTlJSFJvYVhNdVkzVnljbVZ1ZEV4dllXUmxjaTVuWlhSVWNtRnVjMnhoZEdsdmJpaHNZVzVuS1M1d2FYQmxLSE5vWVhKbEtDa3BPMXh1SUNBZ0lIUm9hWE11Ykc5aFpHbHVaMVJ5WVc1emJHRjBhVzl1Y3lBOUlHeHZZV1JwYm1kVWNtRnVjMnhoZEdsdmJuTXVjR2x3WlNoY2JpQWdJQ0FnSUhSaGEyVW9NU2tzWEc0Z0lDQWdJQ0J0WVhBb0tISmxjem9nVDJKcVpXTjBLU0E5UGlCMGFHbHpMbU52YlhCcGJHVnlMbU52YlhCcGJHVlVjbUZ1YzJ4aGRHbHZibk1vY21WekxDQnNZVzVuS1Nrc1hHNGdJQ0FnSUNCemFHRnlaU2dwWEc0Z0lDQWdLVHRjYmx4dUlDQWdJSFJvYVhNdWJHOWhaR2x1WjFSeVlXNXpiR0YwYVc5dWMxeHVJQ0FnSUNBZ0xuTjFZbk5qY21saVpTZ29jbVZ6T2lCUFltcGxZM1FwSUQwK0lIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1MGNtRnVjMnhoZEdsdmJuTmJiR0Z1WjEwZ1BTQnlaWE03WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkWEJrWVhSbFRHRnVaM01vS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3Wlc1a2FXNW5JRDBnWm1Gc2MyVTdYRzRnSUNBZ0lDQjlMQ0FvWlhKeU9pQmhibmtwSUQwK0lIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1d1pXNWthVzVuSUQwZ1ptRnNjMlU3WEc0Z0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUhKbGRIVnliaUJzYjJGa2FXNW5WSEpoYm5Oc1lYUnBiMjV6TzF4dUlDQjlYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFMWhiblZoYkd4NUlITmxkSE1nWVc0Z2IySnFaV04wSUc5bUlIUnlZVzV6YkdGMGFXOXVjeUJtYjNJZ1lTQm5hWFpsYmlCc1lXNW5kV0ZuWlZ4dUlDQWdLaUJoWm5SbGNpQndZWE56YVc1bklHbDBJSFJvY205MVoyZ2dkR2hsSUdOdmJYQnBiR1Z5WEc0Z0lDQXFMMXh1SUNCd2RXSnNhV01nYzJWMFZISmhibk5zWVhScGIyNG9iR0Z1WnpvZ2MzUnlhVzVuTENCMGNtRnVjMnhoZEdsdmJuTTZJRTlpYW1WamRDd2djMmh2ZFd4a1RXVnlaMlU2SUdKdmIyeGxZVzRnUFNCbVlXeHpaU2s2SUhadmFXUWdlMXh1SUNBZ0lIUnlZVzV6YkdGMGFXOXVjeUE5SUhSb2FYTXVZMjl0Y0dsc1pYSXVZMjl0Y0dsc1pWUnlZVzV6YkdGMGFXOXVjeWgwY21GdWMyeGhkR2x2Ym5Nc0lHeGhibWNwTzF4dUlDQWdJR2xtSUNoemFHOTFiR1JOWlhKblpTQW1KaUIwYUdsekxuUnlZVzV6YkdGMGFXOXVjMXRzWVc1blhTa2dlMXh1SUNBZ0lDQWdkR2hwY3k1MGNtRnVjMnhoZEdsdmJuTmJiR0Z1WjEwZ1BTQnRaWEpuWlVSbFpYQW9kR2hwY3k1MGNtRnVjMnhoZEdsdmJuTmJiR0Z1WjEwc0lIUnlZVzV6YkdGMGFXOXVjeWs3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lIUm9hWE11ZEhKaGJuTnNZWFJwYjI1elcyeGhibWRkSUQwZ2RISmhibk5zWVhScGIyNXpPMXh1SUNBZ0lIMWNiaUFnSUNCMGFHbHpMblZ3WkdGMFpVeGhibWR6S0NrN1hHNGdJQ0FnZEdocGN5NXZibFJ5WVc1emJHRjBhVzl1UTJoaGJtZGxMbVZ0YVhRb2UyeGhibWM2SUd4aGJtY3NJSFJ5WVc1emJHRjBhVzl1Y3pvZ2RHaHBjeTUwY21GdWMyeGhkR2x2Ym5OYmJHRnVaMTE5S1R0Y2JpQWdmVnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlNaWFIxY201eklHRnVJR0Z5Y21GNUlHOW1JR04xY25KbGJuUnNlU0JoZG1GcGJHRmliR1VnYkdGdVozTmNiaUFnSUNvdlhHNGdJSEIxWW14cFl5Qm5aWFJNWVc1bmN5Z3BPaUJCY25KaGVUeHpkSEpwYm1jK0lIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXNZVzVuY3p0Y2JpQWdmVnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQkJaR1FnWVhaaGFXeGhZbXhsSUd4aGJtZHpYRzRnSUNBcUwxeHVJQ0J3ZFdKc2FXTWdZV1JrVEdGdVozTW9iR0Z1WjNNNklFRnljbUY1UEhOMGNtbHVaejRwT2lCMmIybGtJSHRjYmlBZ0lDQnNZVzVuY3k1bWIzSkZZV05vS0Noc1lXNW5PaUJ6ZEhKcGJtY3BJRDArSUh0Y2JpQWdJQ0FnSUdsbUlDaDBhR2x6TG14aGJtZHpMbWx1WkdWNFQyWW9iR0Z1WnlrZ1BUMDlJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YkdGdVozTXVjSFZ6YUNoc1lXNW5LVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlLVHRjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCVmNHUmhkR1VnZEdobElHeHBjM1FnYjJZZ1lYWmhhV3hoWW14bElHeGhibWR6WEc0Z0lDQXFMMXh1SUNCd2NtbDJZWFJsSUhWd1pHRjBaVXhoYm1kektDazZJSFp2YVdRZ2UxeHVJQ0FnSUhSb2FYTXVZV1JrVEdGdVozTW9UMkpxWldOMExtdGxlWE1vZEdocGN5NTBjbUZ1YzJ4aGRHbHZibk1wS1R0Y2JpQWdmVnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlNaWFIxY201eklIUm9aU0J3WVhKelpXUWdjbVZ6ZFd4MElHOW1JSFJvWlNCMGNtRnVjMnhoZEdsdmJuTmNiaUFnSUNvdlhHNGdJSEIxWW14cFl5Qm5aWFJRWVhKelpXUlNaWE4xYkhRb2RISmhibk5zWVhScGIyNXpPaUJoYm5rc0lHdGxlVG9nWVc1NUxDQnBiblJsY25CdmJHRjBaVkJoY21GdGN6ODZJRTlpYW1WamRDazZJR0Z1ZVNCN1hHNGdJQ0FnYkdWMElISmxjem9nYzNSeWFXNW5JSHdnVDJKelpYSjJZV0pzWlR4emRISnBibWMrTzF4dVhHNGdJQ0FnYVdZZ0tHdGxlU0JwYm5OMFlXNWpaVzltSUVGeWNtRjVLU0I3WEc0Z0lDQWdJQ0JzWlhRZ2NtVnpkV3gwT2lCaGJua2dQU0I3ZlN4Y2JpQWdJQ0FnSUNBZ2IySnpaWEoyWVdKc1pYTTZJR0p2YjJ4bFlXNGdQU0JtWVd4elpUdGNiaUFnSUNBZ0lHWnZjaUFvYkdWMElHc2diMllnYTJWNUtTQjdYRzRnSUNBZ0lDQWdJSEpsYzNWc2RGdHJYU0E5SUhSb2FYTXVaMlYwVUdGeWMyVmtVbVZ6ZFd4MEtIUnlZVzV6YkdGMGFXOXVjeXdnYXl3Z2FXNTBaWEp3YjJ4aGRHVlFZWEpoYlhNcE8xeHVJQ0FnSUNBZ0lDQnBaaUFvZEhsd1pXOW1JSEpsYzNWc2RGdHJYUzV6ZFdKelkzSnBZbVVnUFQwOUlGd2lablZ1WTNScGIyNWNJaWtnZTF4dUlDQWdJQ0FnSUNBZ0lHOWljMlZ5ZG1GaWJHVnpJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdhV1lnS0c5aWMyVnlkbUZpYkdWektTQjdYRzRnSUNBZ0lDQWdJR3hsZENCdFpYSm5aV1JQWW5NNklFOWljMlZ5ZG1GaWJHVThjM1J5YVc1blBqdGNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdheUJ2WmlCclpYa3BJSHRjYmlBZ0lDQWdJQ0FnSUNCc1pYUWdiMkp6SUQwZ2RIbHdaVzltSUhKbGMzVnNkRnRyWFM1emRXSnpZM0pwWW1VZ1BUMDlJRndpWm5WdVkzUnBiMjVjSWlBL0lISmxjM1ZzZEZ0clhTQTZJRzltS0hKbGMzVnNkRnRyWFNCaGN5QnpkSEpwYm1jcE8xeHVJQ0FnSUNBZ0lDQWdJR2xtSUNoMGVYQmxiMllnYldWeVoyVmtUMkp6SUQwOVBTQmNJblZ1WkdWbWFXNWxaRndpS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J0WlhKblpXUlBZbk1nUFNCdlluTTdYRzRnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHMWxjbWRsWkU5aWN5QTlJRzFsY21kbEtHMWxjbWRsWkU5aWN5d2diMkp6S1R0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRzFsY21kbFpFOWljeTV3YVhCbEtGeHVJQ0FnSUNBZ0lDQWdJSFJ2UVhKeVlYa29LU3hjYmlBZ0lDQWdJQ0FnSUNCdFlYQW9LR0Z5Y2pvZ1FYSnlZWGs4YzNSeWFXNW5QaWtnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHOWlham9nWVc1NUlEMGdlMzA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmhjbkl1Wm05eVJXRmphQ2dvZG1Gc2RXVTZJSE4wY21sdVp5d2dhVzVrWlhnNklHNTFiV0psY2lrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQnZZbXBiYTJWNVcybHVaR1Y0WFYwZ1BTQjJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHOWlhanRjYmlBZ0lDQWdJQ0FnSUNCOUtWeHVJQ0FnSUNBZ0lDQXBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdjbVYwZFhKdUlISmxjM1ZzZER0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2RISmhibk5zWVhScGIyNXpLU0I3WEc0Z0lDQWdJQ0J5WlhNZ1BTQjBhR2x6TG5CaGNuTmxjaTVwYm5SbGNuQnZiR0YwWlNoMGFHbHpMbkJoY25ObGNpNW5aWFJXWVd4MVpTaDBjbUZ1YzJ4aGRHbHZibk1zSUd0bGVTa3NJR2x1ZEdWeWNHOXNZWFJsVUdGeVlXMXpLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JSEpsY3lBOVBUMGdYQ0oxYm1SbFptbHVaV1JjSWlBbUppQjBhR2x6TG1SbFptRjFiSFJNWVc1bklDWW1JSFJvYVhNdVpHVm1ZWFZzZEV4aGJtY2dJVDA5SUhSb2FYTXVZM1Z5Y21WdWRFeGhibWNnSmlZZ2RHaHBjeTUxYzJWRVpXWmhkV3gwVEdGdVp5a2dlMXh1SUNBZ0lDQWdjbVZ6SUQwZ2RHaHBjeTV3WVhKelpYSXVhVzUwWlhKd2IyeGhkR1VvZEdocGN5NXdZWEp6WlhJdVoyVjBWbUZzZFdVb2RHaHBjeTUwY21GdWMyeGhkR2x2Ym5OYmRHaHBjeTVrWldaaGRXeDBUR0Z1WjEwc0lHdGxlU2tzSUdsdWRHVnljRzlzWVhSbFVHRnlZVzF6S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2RIbHdaVzltSUhKbGN5QTlQVDBnWENKMWJtUmxabWx1WldSY0lpa2dlMXh1SUNBZ0lDQWdiR1YwSUhCaGNtRnRjem9nVFdsemMybHVaMVJ5WVc1emJHRjBhVzl1U0dGdVpHeGxjbEJoY21GdGN5QTlJSHRyWlhrc0lIUnlZVzV6YkdGMFpWTmxjblpwWTJVNklIUm9hWE45TzF4dUlDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCcGJuUmxjbkJ2YkdGMFpWQmhjbUZ0Y3lBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUh0Y2JpQWdJQ0FnSUNBZ2NHRnlZVzF6TG1sdWRHVnljRzlzWVhSbFVHRnlZVzF6SUQwZ2FXNTBaWEp3YjJ4aGRHVlFZWEpoYlhNN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCeVpYTWdQU0IwYUdsekxtMXBjM05wYm1kVWNtRnVjMnhoZEdsdmJraGhibVJzWlhJdWFHRnVaR3hsS0hCaGNtRnRjeWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIUjVjR1Z2WmlCeVpYTWdJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUJ5WlhNZ09pQnJaWGs3WEc0Z0lIMWNibHh1SUNBdktpcGNiaUFnSUNvZ1IyVjBjeUIwYUdVZ2RISmhibk5zWVhSbFpDQjJZV3gxWlNCdlppQmhJR3RsZVNBb2IzSWdZVzRnWVhKeVlYa2diMllnYTJWNWN5bGNiaUFnSUNvZ1FISmxkSFZ5Ym5NZ2RHaGxJSFJ5WVc1emJHRjBaV1FnYTJWNUxDQnZjaUJoYmlCdlltcGxZM1FnYjJZZ2RISmhibk5zWVhSbFpDQnJaWGx6WEc0Z0lDQXFMMXh1SUNCd2RXSnNhV01nWjJWMEtHdGxlVG9nYzNSeWFXNW5JSHdnUVhKeVlYazhjM1J5YVc1blBpd2dhVzUwWlhKd2IyeGhkR1ZRWVhKaGJYTS9PaUJQWW1wbFkzUXBPaUJQWW5ObGNuWmhZbXhsUEhOMGNtbHVaeUI4SUdGdWVUNGdlMXh1SUNBZ0lHbG1JQ2doYVhORVpXWnBibVZrS0d0bGVTa2dmSHdnSVd0bGVTNXNaVzVuZEdncElIdGNiaUFnSUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2loZ1VHRnlZVzFsZEdWeUlGd2lhMlY1WENJZ2NtVnhkV2x5WldSZ0tUdGNiaUFnSUNCOVhHNGdJQ0FnTHk4Z1kyaGxZMnNnYVdZZ2QyVWdZWEpsSUd4dllXUnBibWNnWVNCdVpYY2dkSEpoYm5Oc1lYUnBiMjRnZEc4Z2RYTmxYRzRnSUNBZ2FXWWdLSFJvYVhNdWNHVnVaR2x1WnlrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUU5aWMyVnlkbUZpYkdVdVkzSmxZWFJsS0NodlluTmxjblpsY2pvZ1QySnpaWEoyWlhJOGMzUnlhVzVuUGlrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JzWlhRZ2IyNURiMjF3YkdWMFpTQTlJQ2h5WlhNNklITjBjbWx1WnlrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUc5aWMyVnlkbVZ5TG01bGVIUW9jbVZ6S1R0Y2JpQWdJQ0FnSUNBZ0lDQnZZbk5sY25abGNpNWpiMjF3YkdWMFpTZ3BPMXh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJQ0FnSUNCc1pYUWdiMjVGY25KdmNpQTlJQ2hsY25JNklHRnVlU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJRzlpYzJWeWRtVnlMbVZ5Y205eUtHVnljaWs3WEc0Z0lDQWdJQ0FnSUgwN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpHbHVaMVJ5WVc1emJHRjBhVzl1Y3k1emRXSnpZM0pwWW1Vb0tISmxjem9nWVc1NUtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ2NtVnpJRDBnZEdocGN5NW5aWFJRWVhKelpXUlNaWE4xYkhRb2NtVnpMQ0JyWlhrc0lHbHVkR1Z5Y0c5c1lYUmxVR0Z5WVcxektUdGNiaUFnSUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltSUhKbGN5NXpkV0p6WTNKcFltVWdQVDA5SUZ3aVpuVnVZM1JwYjI1Y0lpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVnpMbk4xWW5OamNtbGlaU2h2YmtOdmJYQnNaWFJsTENCdmJrVnljbTl5S1R0Y2JpQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYjI1RGIyMXdiR1YwWlNoeVpYTXBPMXh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTd2diMjVGY25KdmNpazdYRzRnSUNBZ0lDQjlLVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2JHVjBJSEpsY3lBOUlIUm9hWE11WjJWMFVHRnljMlZrVW1WemRXeDBLSFJvYVhNdWRISmhibk5zWVhScGIyNXpXM1JvYVhNdVkzVnljbVZ1ZEV4aGJtZGRMQ0JyWlhrc0lHbHVkR1Z5Y0c5c1lYUmxVR0Z5WVcxektUdGNiaUFnSUNBZ0lHbG1JQ2gwZVhCbGIyWWdjbVZ6TG5OMVluTmpjbWxpWlNBOVBUMGdYQ0ptZFc1amRHbHZibHdpS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCeVpYTTdYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2IyWW9jbVZ6S1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNBdktpcGNiaUFnSUNvZ1VtVjBkWEp1Y3lCaElITjBjbVZoYlNCdlppQjBjbUZ1YzJ4aGRHVmtJSFpoYkhWbGN5QnZaaUJoSUd0bGVTQW9iM0lnWVc0Z1lYSnlZWGtnYjJZZ2EyVjVjeWtnZDJocFkyZ2dkWEJrWVhSbGMxeHVJQ0FnS2lCM2FHVnVaWFpsY2lCMGFHVWdiR0Z1WjNWaFoyVWdZMmhoYm1kbGN5NWNiaUFnSUNvZ1FISmxkSFZ5Ym5NZ1FTQnpkSEpsWVcwZ2IyWWdkR2hsSUhSeVlXNXpiR0YwWldRZ2EyVjVMQ0J2Y2lCaGJpQnZZbXBsWTNRZ2IyWWdkSEpoYm5Oc1lYUmxaQ0JyWlhselhHNGdJQ0FxTDF4dUlDQndkV0pzYVdNZ2MzUnlaV0Z0S0d0bGVUb2djM1J5YVc1bklId2dRWEp5WVhrOGMzUnlhVzVuUGl3Z2FXNTBaWEp3YjJ4aGRHVlFZWEpoYlhNL09pQlBZbXBsWTNRcE9pQlBZbk5sY25aaFlteGxQSE4wY21sdVp5QjhJR0Z1ZVQ0Z2UxeHVJQ0FnSUdsbUlDZ2hhWE5FWldacGJtVmtLR3RsZVNrZ2ZId2dJV3RsZVM1c1pXNW5kR2dwSUh0Y2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWhnVUdGeVlXMWxkR1Z5SUZ3aWEyVjVYQ0lnY21WeGRXbHlaV1JnS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdZMjl1WTJGMEtGeHVJQ0FnSUNBZ2RHaHBjeTVuWlhRb2EyVjVMQ0JwYm5SbGNuQnZiR0YwWlZCaGNtRnRjeWtzWEc0Z0lDQWdJQ0IwYUdsekxtOXVUR0Z1WjBOb1lXNW5aUzV3YVhCbEtGeHVJQ0FnSUNBZ0lDQnpkMmwwWTJoTllYQW9LR1YyWlc1ME9pQk1ZVzVuUTJoaGJtZGxSWFpsYm5RcElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J5WlhNZ1BTQjBhR2x6TG1kbGRGQmhjbk5sWkZKbGMzVnNkQ2hsZG1WdWRDNTBjbUZ1YzJ4aGRHbHZibk1zSUd0bGVTd2dhVzUwWlhKd2IyeGhkR1ZRWVhKaGJYTXBPMXh1SUNBZ0lDQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ2NtVnpMbk4xWW5OamNtbGlaU0E5UFQwZ1hDSm1kVzVqZEdsdmJsd2lLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2NtVnpPMXh1SUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2IyWW9jbVZ6S1R0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBwWEc0Z0lDQWdJQ0FwS1R0Y2JpQWdmVnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlNaWFIxY201eklHRWdkSEpoYm5Oc1lYUnBiMjRnYVc1emRHRnVkR3g1SUdaeWIyMGdkR2hsSUdsdWRHVnlibUZzSUhOMFlYUmxJRzltSUd4dllXUmxaQ0IwY21GdWMyeGhkR2x2Ymk1Y2JpQWdJQ29nUVd4c0lISjFiR1Z6SUhKbFoyRnlaR2x1WnlCMGFHVWdZM1Z5Y21WdWRDQnNZVzVuZFdGblpTd2dkR2hsSUhCeVpXWmxjbkpsWkNCc1lXNW5kV0ZuWlNCdlppQmxkbVZ1SUdaaGJHeGlZV05ySUd4aGJtZDFZV2RsY3lCM2FXeHNJR0psSUhWelpXUWdaWGhqWlhCMElHRnVlU0J3Y205dGFYTmxJR2hoYm1Sc2FXNW5MbHh1SUNBZ0tpOWNiaUFnY0hWaWJHbGpJR2x1YzNSaGJuUW9hMlY1T2lCemRISnBibWNnZkNCQmNuSmhlVHh6ZEhKcGJtYytMQ0JwYm5SbGNuQnZiR0YwWlZCaGNtRnRjejg2SUU5aWFtVmpkQ2s2SUhOMGNtbHVaeUI4SUdGdWVTQjdYRzRnSUNBZ2FXWWdLQ0ZwYzBSbFptbHVaV1FvYTJWNUtTQjhmQ0FoYTJWNUxteGxibWQwYUNrZ2UxeHVJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0dCUVlYSmhiV1YwWlhJZ1hDSnJaWGxjSWlCeVpYRjFhWEpsWkdBcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUd4bGRDQnlaWE1nUFNCMGFHbHpMbWRsZEZCaGNuTmxaRkpsYzNWc2RDaDBhR2x6TG5SeVlXNXpiR0YwYVc5dWMxdDBhR2x6TG1OMWNuSmxiblJNWVc1blhTd2dhMlY1TENCcGJuUmxjbkJ2YkdGMFpWQmhjbUZ0Y3lrN1hHNGdJQ0FnYVdZZ0tIUjVjR1Z2WmlCeVpYTXVjM1ZpYzJOeWFXSmxJQ0U5UFNCY0luVnVaR1ZtYVc1bFpGd2lLU0I3WEc0Z0lDQWdJQ0JwWmlBb2EyVjVJR2x1YzNSaGJtTmxiMllnUVhKeVlYa3BJSHRjYmlBZ0lDQWdJQ0FnYkdWMElHOWlham9nWVc1NUlEMGdlMzA3WEc0Z0lDQWdJQ0FnSUd0bGVTNW1iM0pGWVdOb0tDaDJZV3gxWlRvZ2MzUnlhVzVuTENCcGJtUmxlRG9nYm5WdFltVnlLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdiMkpxVzJ0bGVWdHBibVJsZUYxZElEMGdhMlY1VzJsdVpHVjRYVHRjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdlltbzdYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQnlaWFIxY200Z2EyVjVPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnY21Wek8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlRaWFJ6SUhSb1pTQjBjbUZ1YzJ4aGRHVmtJSFpoYkhWbElHOW1JR0VnYTJWNUxDQmhablJsY2lCamIyMXdhV3hwYm1jZ2FYUmNiaUFnSUNvdlhHNGdJSEIxWW14cFl5QnpaWFFvYTJWNU9pQnpkSEpwYm1jc0lIWmhiSFZsT2lCemRISnBibWNzSUd4aGJtYzZJSE4wY21sdVp5QTlJSFJvYVhNdVkzVnljbVZ1ZEV4aGJtY3BPaUIyYjJsa0lIdGNiaUFnSUNCMGFHbHpMblJ5WVc1emJHRjBhVzl1YzF0c1lXNW5YVnRyWlhsZElEMGdkR2hwY3k1amIyMXdhV3hsY2k1amIyMXdhV3hsS0haaGJIVmxMQ0JzWVc1bktUdGNiaUFnSUNCMGFHbHpMblZ3WkdGMFpVeGhibWR6S0NrN1hHNGdJQ0FnZEdocGN5NXZibFJ5WVc1emJHRjBhVzl1UTJoaGJtZGxMbVZ0YVhRb2UyeGhibWM2SUd4aGJtY3NJSFJ5WVc1emJHRjBhVzl1Y3pvZ2RHaHBjeTUwY21GdWMyeGhkR2x2Ym5OYmJHRnVaMTE5S1R0Y2JpQWdmVnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQkRhR0Z1WjJWeklIUm9aU0JqZFhKeVpXNTBJR3hoYm1kY2JpQWdJQ292WEc0Z0lIQnlhWFpoZEdVZ1kyaGhibWRsVEdGdVp5aHNZVzVuT2lCemRISnBibWNwT2lCMmIybGtJSHRjYmlBZ0lDQjBhR2x6TG1OMWNuSmxiblJNWVc1bklEMGdiR0Z1Wnp0Y2JpQWdJQ0IwYUdsekxtOXVUR0Z1WjBOb1lXNW5aUzVsYldsMEtIdHNZVzVuT2lCc1lXNW5MQ0IwY21GdWMyeGhkR2x2Ym5NNklIUm9hWE11ZEhKaGJuTnNZWFJwYjI1elcyeGhibWRkZlNrN1hHNWNiaUFnSUNBdkx5QnBaaUIwYUdWeVpTQnBjeUJ1YnlCa1pXWmhkV3gwSUd4aGJtY3NJSFZ6WlNCMGFHVWdiMjVsSUhSb1lYUWdkMlVnYW5WemRDQnpaWFJjYmlBZ0lDQnBaaUFvSVhSb2FYTXVaR1ZtWVhWc2RFeGhibWNwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVZMmhoYm1kbFJHVm1ZWFZzZEV4aGJtY29iR0Z1WnlrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFTm9ZVzVuWlhNZ2RHaGxJR1JsWm1GMWJIUWdiR0Z1WjF4dUlDQWdLaTljYmlBZ2NISnBkbUYwWlNCamFHRnVaMlZFWldaaGRXeDBUR0Z1Wnloc1lXNW5PaUJ6ZEhKcGJtY3BPaUIyYjJsa0lIdGNiaUFnSUNCMGFHbHpMbVJsWm1GMWJIUk1ZVzVuSUQwZ2JHRnVaenRjYmlBZ0lDQjBhR2x6TG05dVJHVm1ZWFZzZEV4aGJtZERhR0Z1WjJVdVpXMXBkQ2g3YkdGdVp6b2diR0Z1Wnl3Z2RISmhibk5zWVhScGIyNXpPaUIwYUdsekxuUnlZVzV6YkdGMGFXOXVjMXRzWVc1blhYMHBPMXh1SUNCOVhHNWNiaUFnTHlvcVhHNGdJQ0FxSUVGc2JHOTNjeUIwYnlCeVpXeHZZV1FnZEdobElHeGhibWNnWm1sc1pTQm1jbTl0SUhSb1pTQm1hV3hsWEc0Z0lDQXFMMXh1SUNCd2RXSnNhV01nY21Wc2IyRmtUR0Z1Wnloc1lXNW5PaUJ6ZEhKcGJtY3BPaUJQWW5ObGNuWmhZbXhsUEdGdWVUNGdlMXh1SUNBZ0lIUm9hWE11Y21WelpYUk1ZVzVuS0d4aGJtY3BPMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbWRsZEZSeVlXNXpiR0YwYVc5dUtHeGhibWNwTzF4dUlDQjlYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFUmxiR1YwWlhNZ2FXNXVaWElnZEhKaGJuTnNZWFJwYjI1Y2JpQWdJQ292WEc0Z0lIQjFZbXhwWXlCeVpYTmxkRXhoYm1jb2JHRnVaem9nYzNSeWFXNW5LVG9nZG05cFpDQjdYRzRnSUNBZ2RHaHBjeTVmZEhKaGJuTnNZWFJwYjI1U1pYRjFaWE4wYzF0c1lXNW5YU0E5SUhWdVpHVm1hVzVsWkR0Y2JpQWdJQ0IwYUdsekxuUnlZVzV6YkdGMGFXOXVjMXRzWVc1blhTQTlJSFZ1WkdWbWFXNWxaRHRjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCU1pYUjFjbTV6SUhSb1pTQnNZVzVuZFdGblpTQmpiMlJsSUc1aGJXVWdabkp2YlNCMGFHVWdZbkp2ZDNObGNpd2daUzVuTGlCY0ltUmxYQ0pjYmlBZ0lDb3ZYRzRnSUhCMVlteHBZeUJuWlhSQ2NtOTNjMlZ5VEdGdVp5Z3BPaUJ6ZEhKcGJtY2dlMXh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdkMmx1Wkc5M0lEMDlQU0FuZFc1a1pXWnBibVZrSnlCOGZDQjBlWEJsYjJZZ2QybHVaRzkzTG01aGRtbG5ZWFJ2Y2lBOVBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUIxYm1SbFptbHVaV1E3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdiR1YwSUdKeWIzZHpaWEpNWVc1bk9pQmhibmtnUFNCM2FXNWtiM2N1Ym1GMmFXZGhkRzl5TG14aGJtZDFZV2RsY3lBL0lIZHBibVJ2ZHk1dVlYWnBaMkYwYjNJdWJHRnVaM1ZoWjJWeld6QmRJRG9nYm5Wc2JEdGNiaUFnSUNCaWNtOTNjMlZ5VEdGdVp5QTlJR0p5YjNkelpYSk1ZVzVuSUh4OElIZHBibVJ2ZHk1dVlYWnBaMkYwYjNJdWJHRnVaM1ZoWjJVZ2ZId2dkMmx1Wkc5M0xtNWhkbWxuWVhSdmNpNWljbTkzYzJWeVRHRnVaM1ZoWjJVZ2ZId2dkMmx1Wkc5M0xtNWhkbWxuWVhSdmNpNTFjMlZ5VEdGdVozVmhaMlU3WEc1Y2JpQWdJQ0JwWmlBb1luSnZkM05sY2t4aGJtY3VhVzVrWlhoUFppZ25MU2NwSUNFOVBTQXRNU2tnZTF4dUlDQWdJQ0FnWW5KdmQzTmxja3hoYm1jZ1BTQmljbTkzYzJWeVRHRnVaeTV6Y0d4cGRDZ25MU2NwV3pCZE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaGljbTkzYzJWeVRHRnVaeTVwYm1SbGVFOW1LQ2RmSnlrZ0lUMDlJQzB4S1NCN1hHNGdJQ0FnSUNCaWNtOTNjMlZ5VEdGdVp5QTlJR0p5YjNkelpYSk1ZVzVuTG5Od2JHbDBLQ2RmSnlsYk1GMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUdKeWIzZHpaWEpNWVc1bk8xeHVJQ0I5WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRkpsZEhWeWJuTWdkR2hsSUdOMWJIUjFjbVVnYkdGdVozVmhaMlVnWTI5a1pTQnVZVzFsSUdaeWIyMGdkR2hsSUdKeWIzZHpaWElzSUdVdVp5NGdYQ0prWlMxRVJWd2lYRzRnSUNBcUwxeHVJQ0J3ZFdKc2FXTWdaMlYwUW5KdmQzTmxja04xYkhSMWNtVk1ZVzVuS0NrNklITjBjbWx1WnlCN1hHNGdJQ0FnYVdZZ0tIUjVjR1Z2WmlCM2FXNWtiM2NnUFQwOUlDZDFibVJsWm1sdVpXUW5JSHg4SUhSNWNHVnZaaUIzYVc1a2IzY3VibUYyYVdkaGRHOXlJRDA5UFNBbmRXNWtaV1pwYm1Wa0p5a2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIVnVaR1ZtYVc1bFpEdGNiaUFnSUNCOVhHNWNiaUFnSUNCc1pYUWdZbkp2ZDNObGNrTjFiSFIxY21WTVlXNW5PaUJoYm5rZ1BTQjNhVzVrYjNjdWJtRjJhV2RoZEc5eUxteGhibWQxWVdkbGN5QS9JSGRwYm1SdmR5NXVZWFpwWjJGMGIzSXViR0Z1WjNWaFoyVnpXekJkSURvZ2JuVnNiRHRjYmlBZ0lDQmljbTkzYzJWeVEzVnNkSFZ5WlV4aGJtY2dQU0JpY205M2MyVnlRM1ZzZEhWeVpVeGhibWNnZkh3Z2QybHVaRzkzTG01aGRtbG5ZWFJ2Y2k1c1lXNW5kV0ZuWlNCOGZDQjNhVzVrYjNjdWJtRjJhV2RoZEc5eUxtSnliM2R6WlhKTVlXNW5kV0ZuWlNCOGZDQjNhVzVrYjNjdWJtRjJhV2RoZEc5eUxuVnpaWEpNWVc1bmRXRm5aVHRjYmx4dUlDQWdJSEpsZEhWeWJpQmljbTkzYzJWeVEzVnNkSFZ5WlV4aGJtYzdYRzRnSUgxY2JuMWNiaUlzSW1sdGNHOXlkQ0I3UVdaMFpYSldhV1YzUTJobFkydGxaQ3dnUTJoaGJtZGxSR1YwWldOMGIzSlNaV1lzSUVScGNtVmpkR2wyWlN3Z1JXeGxiV1Z1ZEZKbFppd2dTVzV3ZFhRc0lFOXVSR1Z6ZEhKdmVYMGdabkp2YlNBblFHRnVaM1ZzWVhJdlkyOXlaU2M3WEc1cGJYQnZjblFnZTFOMVluTmpjbWx3ZEdsdmJuMGdabkp2YlNBbmNuaHFjeWM3WEc1cGJYQnZjblFnZTBSbFptRjFiSFJNWVc1blEyaGhibWRsUlhabGJuUXNJRXhoYm1kRGFHRnVaMlZGZG1WdWRDd2dWSEpoYm5Oc1lYUmxVMlZ5ZG1salpTd2dWSEpoYm5Oc1lYUnBiMjVEYUdGdVoyVkZkbVZ1ZEgwZ1puSnZiU0FuTGk5MGNtRnVjMnhoZEdVdWMyVnlkbWxqWlNjN1hHNXBiWEJ2Y25RZ2UyVnhkV0ZzY3l3Z2FYTkVaV1pwYm1Wa2ZTQm1jbTl0SUNjdUwzVjBhV3duTzF4dVhHNUFSR2x5WldOMGFYWmxLSHRjYmlBZ2MyVnNaV04wYjNJNklDZGJkSEpoYm5Oc1lYUmxYU3hiYm1kNExYUnlZVzV6YkdGMFpWMG5YRzU5S1Z4dVpYaHdiM0owSUdOc1lYTnpJRlJ5WVc1emJHRjBaVVJwY21WamRHbDJaU0JwYlhCc1pXMWxiblJ6SUVGbWRHVnlWbWxsZDBOb1pXTnJaV1FzSUU5dVJHVnpkSEp2ZVNCN1hHNGdJR3RsZVRvZ2MzUnlhVzVuTzF4dUlDQnNZWE4wVUdGeVlXMXpPaUJoYm5rN1hHNGdJR04xY25KbGJuUlFZWEpoYlhNNklHRnVlVHRjYmlBZ2IyNU1ZVzVuUTJoaGJtZGxVM1ZpT2lCVGRXSnpZM0pwY0hScGIyNDdYRzRnSUc5dVJHVm1ZWFZzZEV4aGJtZERhR0Z1WjJWVGRXSTZJRk4xWW5OamNtbHdkR2x2Ymp0Y2JpQWdiMjVVY21GdWMyeGhkR2x2YmtOb1lXNW5aVk4xWWpvZ1UzVmljMk55YVhCMGFXOXVPMXh1WEc0Z0lFQkpibkIxZENncElITmxkQ0IwY21GdWMyeGhkR1VvYTJWNU9pQnpkSEpwYm1jcElIdGNiaUFnSUNCcFppQW9hMlY1S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbXRsZVNBOUlHdGxlVHRjYmlBZ0lDQWdJSFJvYVhNdVkyaGxZMnRPYjJSbGN5Z3BPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJRUJKYm5CMWRDZ3BJSE5sZENCMGNtRnVjMnhoZEdWUVlYSmhiWE1vY0dGeVlXMXpPaUJoYm5rcElIdGNiaUFnSUNCcFppQW9JV1Z4ZFdGc2N5aDBhR2x6TG1OMWNuSmxiblJRWVhKaGJYTXNJSEJoY21GdGN5a3BJSHRjYmlBZ0lDQWdJSFJvYVhNdVkzVnljbVZ1ZEZCaGNtRnRjeUE5SUhCaGNtRnRjenRjYmlBZ0lDQWdJSFJvYVhNdVkyaGxZMnRPYjJSbGN5aDBjblZsS1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCamIyNXpkSEoxWTNSdmNpaHdjbWwyWVhSbElIUnlZVzV6YkdGMFpWTmxjblpwWTJVNklGUnlZVzV6YkdGMFpWTmxjblpwWTJVc0lIQnlhWFpoZEdVZ1pXeGxiV1Z1ZERvZ1JXeGxiV1Z1ZEZKbFppd2djSEpwZG1GMFpTQmZjbVZtT2lCRGFHRnVaMlZFWlhSbFkzUnZjbEpsWmlrZ2UxeHVJQ0FnSUM4dklITjFZbk5qY21saVpTQjBieUJ2YmxSeVlXNXpiR0YwYVc5dVEyaGhibWRsSUdWMlpXNTBMQ0JwYmlCallYTmxJSFJvWlNCMGNtRnVjMnhoZEdsdmJuTWdiMllnZEdobElHTjFjbkpsYm5RZ2JHRnVaeUJqYUdGdVoyVmNiaUFnSUNCcFppQW9JWFJvYVhNdWIyNVVjbUZ1YzJ4aGRHbHZia05vWVc1blpWTjFZaWtnZTF4dUlDQWdJQ0FnZEdocGN5NXZibFJ5WVc1emJHRjBhVzl1UTJoaGJtZGxVM1ZpSUQwZ2RHaHBjeTUwY21GdWMyeGhkR1ZUWlhKMmFXTmxMbTl1VkhKaGJuTnNZWFJwYjI1RGFHRnVaMlV1YzNWaWMyTnlhV0psS0NobGRtVnVkRG9nVkhKaGJuTnNZWFJwYjI1RGFHRnVaMlZGZG1WdWRDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCcFppQW9aWFpsYm5RdWJHRnVaeUE5UFQwZ2RHaHBjeTUwY21GdWMyeGhkR1ZUWlhKMmFXTmxMbU4xY25KbGJuUk1ZVzVuS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkR2hwY3k1amFHVmphMDV2WkdWektIUnlkV1VzSUdWMlpXNTBMblJ5WVc1emJHRjBhVzl1Y3lrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMHBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJSE4xWW5OamNtbGlaU0IwYnlCdmJreGhibWREYUdGdVoyVWdaWFpsYm5Rc0lHbHVJR05oYzJVZ2RHaGxJR3hoYm1kMVlXZGxJR05vWVc1blpYTmNiaUFnSUNCcFppQW9JWFJvYVhNdWIyNU1ZVzVuUTJoaGJtZGxVM1ZpS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbTl1VEdGdVowTm9ZVzVuWlZOMVlpQTlJSFJvYVhNdWRISmhibk5zWVhSbFUyVnlkbWxqWlM1dmJreGhibWREYUdGdVoyVXVjM1ZpYzJOeWFXSmxLQ2hsZG1WdWREb2dUR0Z1WjBOb1lXNW5aVVYyWlc1MEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZMmhsWTJ0T2IyUmxjeWgwY25WbExDQmxkbVZ1ZEM1MGNtRnVjMnhoZEdsdmJuTXBPMXh1SUNBZ0lDQWdmU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnYzNWaWMyTnlhV0psSUhSdklHOXVSR1ZtWVhWc2RFeGhibWREYUdGdVoyVWdaWFpsYm5Rc0lHbHVJR05oYzJVZ2RHaGxJR1JsWm1GMWJIUWdiR0Z1WjNWaFoyVWdZMmhoYm1kbGMxeHVJQ0FnSUdsbUlDZ2hkR2hwY3k1dmJrUmxabUYxYkhSTVlXNW5RMmhoYm1kbFUzVmlLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtOXVSR1ZtWVhWc2RFeGhibWREYUdGdVoyVlRkV0lnUFNCMGFHbHpMblJ5WVc1emJHRjBaVk5sY25acFkyVXViMjVFWldaaGRXeDBUR0Z1WjBOb1lXNW5aUzV6ZFdKelkzSnBZbVVvS0dWMlpXNTBPaUJFWldaaGRXeDBUR0Z1WjBOb1lXNW5aVVYyWlc1MEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZMmhsWTJ0T2IyUmxjeWgwY25WbEtUdGNiaUFnSUNBZ0lIMHBPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJRzVuUVdaMFpYSldhV1YzUTJobFkydGxaQ2dwSUh0Y2JpQWdJQ0IwYUdsekxtTm9aV05yVG05a1pYTW9LVHRjYmlBZ2ZWeHVYRzRnSUdOb1pXTnJUbTlrWlhNb1ptOXlZMlZWY0dSaGRHVWdQU0JtWVd4elpTd2dkSEpoYm5Oc1lYUnBiMjV6UHpvZ1lXNTVLU0I3WEc0Z0lDQWdiR1YwSUc1dlpHVnpPaUJPYjJSbFRHbHpkQ0E5SUhSb2FYTXVaV3hsYldWdWRDNXVZWFJwZG1WRmJHVnRaVzUwTG1Ob2FXeGtUbTlrWlhNN1hHNGdJQ0FnTHk4Z2FXWWdkR2hsSUdWc1pXMWxiblFnYVhNZ1pXMXdkSGxjYmlBZ0lDQnBaaUFvSVc1dlpHVnpMbXhsYm1kMGFDa2dlMXh1SUNBZ0lDQWdMeThnZDJVZ1lXUmtJSFJvWlNCclpYa2dZWE1nWTI5dWRHVnVkRnh1SUNBZ0lDQWdkR2hwY3k1elpYUkRiMjUwWlc1MEtIUm9hWE11Wld4bGJXVnVkQzV1WVhScGRtVkZiR1Z0Wlc1MExDQjBhR2x6TG10bGVTazdYRzRnSUNBZ0lDQnViMlJsY3lBOUlIUm9hWE11Wld4bGJXVnVkQzV1WVhScGRtVkZiR1Z0Wlc1MExtTm9hV3hrVG05a1pYTTdYRzRnSUNBZ2ZWeHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2JtOWtaWE11YkdWdVozUm9PeUFySzJrcElIdGNiaUFnSUNBZ0lHeGxkQ0J1YjJSbE9pQmhibmtnUFNCdWIyUmxjMXRwWFR0Y2JpQWdJQ0FnSUdsbUlDaHViMlJsTG01dlpHVlVlWEJsSUQwOVBTQXpLU0I3SUM4dklHNXZaR1VnZEhsd1pTQXpJR2x6SUdFZ2RHVjRkQ0J1YjJSbFhHNGdJQ0FnSUNBZ0lHeGxkQ0JyWlhrNklITjBjbWx1Wnp0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWEyVjVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2EyVjVJRDBnZEdocGN5NXJaWGs3WEc0Z0lDQWdJQ0FnSUNBZ2FXWWdLR1p2Y21ObFZYQmtZWFJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J1YjJSbExteGhjM1JMWlhrZ1BTQnVkV3hzTzF4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0JzWlhRZ1kyOXVkR1Z1ZENBOUlIUm9hWE11WjJWMFEyOXVkR1Z1ZENodWIyUmxLVHRjYmlBZ0lDQWdJQ0FnSUNCc1pYUWdkSEpwYlcxbFpFTnZiblJsYm5RZ1BTQmpiMjUwWlc1MExuUnlhVzBvS1R0Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvZEhKcGJXMWxaRU52Ym5SbGJuUXViR1Z1WjNSb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QjNaU0IzWVc1MElIUnZJSFZ6WlNCMGFHVWdZMjl1ZEdWdWRDQmhjeUJoSUd0bGVTd2dibTkwSUhSb1pTQjBjbUZ1YzJ4aGRHbHZiaUIyWVd4MVpWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHTnZiblJsYm5RZ0lUMDlJRzV2WkdVdVkzVnljbVZ1ZEZaaGJIVmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR3RsZVNBOUlIUnlhVzF0WldSRGIyNTBaVzUwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCMGFHVWdZMjl1ZEdWdWRDQjNZWE1nWTJoaGJtZGxaQ0JtY205dElIUm9aU0IxYzJWeUxDQjNaU2RzYkNCMWMyVWdhWFFnWVhNZ1lTQnlaV1psY21WdVkyVWdhV1lnYm1WbFpHVmtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHNXZaR1V1YjNKcFoybHVZV3hEYjI1MFpXNTBJRDBnZEdocGN5NW5aWFJEYjI1MFpXNTBLRzV2WkdVcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNodWIyUmxMbTl5YVdkcGJtRnNRMjl1ZEdWdWRDQW1KaUJtYjNKalpWVndaR0YwWlNrZ2V5QXZMeUIwYUdVZ1kyOXVkR1Z1ZENCelpXVnRjeUJ2YXl3Z1luVjBJSFJvWlNCc1lXNW5JR2hoY3lCamFHRnVaMlZrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRzV2WkdVdWJHRnpkRXRsZVNBOUlHNTFiR3c3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUhSb1pTQmpkWEp5Wlc1MElHTnZiblJsYm5RZ2FYTWdkR2hsSUhSeVlXNXpiR0YwYVc5dUxDQnViM1FnZEdobElHdGxlU3dnZFhObElIUm9aU0JzWVhOMElISmxZV3dnWTI5dWRHVnVkQ0JoY3lCclpYbGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2EyVjVJRDBnYm05a1pTNXZjbWxuYVc1aGJFTnZiblJsYm5RdWRISnBiU2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjBhR2x6TG5Wd1pHRjBaVlpoYkhWbEtHdGxlU3dnYm05a1pTd2dkSEpoYm5Oc1lYUnBiMjV6S1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCMWNHUmhkR1ZXWVd4MVpTaHJaWGs2SUhOMGNtbHVaeXdnYm05a1pUb2dZVzU1TENCMGNtRnVjMnhoZEdsdmJuTTZJR0Z1ZVNrZ2UxeHVJQ0FnSUdsbUlDaHJaWGtwSUh0Y2JpQWdJQ0FnSUdsbUlDaHViMlJsTG14aGMzUkxaWGtnUFQwOUlHdGxlU0FtSmlCMGFHbHpMbXhoYzNSUVlYSmhiWE1nUFQwOUlIUm9hWE11WTNWeWNtVnVkRkJoY21GdGN5a2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSFJvYVhNdWJHRnpkRkJoY21GdGN5QTlJSFJvYVhNdVkzVnljbVZ1ZEZCaGNtRnRjenRjYmx4dUlDQWdJQ0FnYkdWMElHOXVWSEpoYm5Oc1lYUnBiMjRnUFNBb2NtVnpPaUJ6ZEhKcGJtY3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSEpsY3lBaFBUMGdhMlY1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdibTlrWlM1c1lYTjBTMlY1SUQwZ2EyVjVPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hibTlrWlM1dmNtbG5hVzVoYkVOdmJuUmxiblFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnViMlJsTG05eWFXZHBibUZzUTI5dWRHVnVkQ0E5SUhSb2FYTXVaMlYwUTI5dWRHVnVkQ2h1YjJSbEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J1YjJSbExtTjFjbkpsYm5SV1lXeDFaU0E5SUdselJHVm1hVzVsWkNoeVpYTXBJRDhnY21WeklEb2dLRzV2WkdVdWIzSnBaMmx1WVd4RGIyNTBaVzUwSUh4OElHdGxlU2s3WEc0Z0lDQWdJQ0FnSUM4dklIZGxJSEpsY0d4aFkyVWdhVzRnZEdobElHOXlhV2RwYm1Gc0lHTnZiblJsYm5RZ2RHOGdjSEpsYzJWeWRtVWdjM0JoWTJWeklIUm9ZWFFnZDJVZ2JXbG5hSFFnYUdGMlpTQjBjbWx0YldWa1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzJWMFEyOXVkR1Z1ZENodWIyUmxMQ0IwYUdsekxtdGxlU0EvSUc1dlpHVXVZM1Z5Y21WdWRGWmhiSFZsSURvZ2JtOWtaUzV2Y21sbmFXNWhiRU52Ym5SbGJuUXVjbVZ3YkdGalpTaHJaWGtzSUc1dlpHVXVZM1Z5Y21WdWRGWmhiSFZsS1NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDNKbFppNXRZWEpyUm05eVEyaGxZMnNvS1R0Y2JpQWdJQ0FnSUgwN1hHNWNiaUFnSUNBZ0lHbG1JQ2hwYzBSbFptbHVaV1FvZEhKaGJuTnNZWFJwYjI1ektTa2dlMXh1SUNBZ0lDQWdJQ0JzWlhRZ2NtVnpJRDBnZEdocGN5NTBjbUZ1YzJ4aGRHVlRaWEoyYVdObExtZGxkRkJoY25ObFpGSmxjM1ZzZENoMGNtRnVjMnhoZEdsdmJuTXNJR3RsZVN3Z2RHaHBjeTVqZFhKeVpXNTBVR0Z5WVcxektUdGNiaUFnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJ5WlhNdWMzVmljMk55YVdKbElEMDlQU0JjSW1aMWJtTjBhVzl1WENJcElIdGNiaUFnSUNBZ0lDQWdJQ0J5WlhNdWMzVmljMk55YVdKbEtHOXVWSEpoYm5Oc1lYUnBiMjRwTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lHOXVWSEpoYm5Oc1lYUnBiMjRvY21WektUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1MGNtRnVjMnhoZEdWVFpYSjJhV05sTG1kbGRDaHJaWGtzSUhSb2FYTXVZM1Z5Y21WdWRGQmhjbUZ0Y3lrdWMzVmljMk55YVdKbEtHOXVWSEpoYm5Oc1lYUnBiMjRwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdkbGRFTnZiblJsYm5Rb2JtOWtaVG9nWVc1NUtUb2djM1J5YVc1bklIdGNiaUFnSUNCeVpYUjFjbTRnYVhORVpXWnBibVZrS0c1dlpHVXVkR1Y0ZEVOdmJuUmxiblFwSUQ4Z2JtOWtaUzUwWlhoMFEyOXVkR1Z1ZENBNklHNXZaR1V1WkdGMFlUdGNiaUFnZlZ4dVhHNGdJSE5sZEVOdmJuUmxiblFvYm05a1pUb2dZVzU1TENCamIyNTBaVzUwT2lCemRISnBibWNwT2lCMmIybGtJSHRjYmlBZ0lDQnBaaUFvYVhORVpXWnBibVZrS0c1dlpHVXVkR1Y0ZEVOdmJuUmxiblFwS1NCN1hHNGdJQ0FnSUNCdWIyUmxMblJsZUhSRGIyNTBaVzUwSUQwZ1kyOXVkR1Z1ZER0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdibTlrWlM1a1lYUmhJRDBnWTI5dWRHVnVkRHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0J1WjA5dVJHVnpkSEp2ZVNncElIdGNiaUFnSUNCcFppQW9kR2hwY3k1dmJreGhibWREYUdGdVoyVlRkV0lwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViMjVNWVc1blEyaGhibWRsVTNWaUxuVnVjM1ZpYzJOeWFXSmxLQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hSb2FYTXViMjVFWldaaGRXeDBUR0Z1WjBOb1lXNW5aVk4xWWlrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV2YmtSbFptRjFiSFJNWVc1blEyaGhibWRsVTNWaUxuVnVjM1ZpYzJOeWFXSmxLQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hSb2FYTXViMjVVY21GdWMyeGhkR2x2YmtOb1lXNW5aVk4xWWlrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV2YmxSeVlXNXpiR0YwYVc5dVEyaGhibWRsVTNWaUxuVnVjM1ZpYzJOeWFXSmxLQ2s3WEc0Z0lDQWdmVnh1SUNCOVhHNTlYRzRpTENKcGJYQnZjblFnZTBOb1lXNW5aVVJsZEdWamRHOXlVbVZtTENCRmRtVnVkRVZ0YVhSMFpYSXNJRWx1YW1WamRHRmliR1VzSUU5dVJHVnpkSEp2ZVN3Z1VHbHdaU3dnVUdsd1pWUnlZVzV6Wm05eWJYMGdabkp2YlNBblFHRnVaM1ZzWVhJdlkyOXlaU2M3WEc1cGJYQnZjblFnZTBSbFptRjFiSFJNWVc1blEyaGhibWRsUlhabGJuUXNJRXhoYm1kRGFHRnVaMlZGZG1WdWRDd2dWSEpoYm5Oc1lYUmxVMlZ5ZG1salpTd2dWSEpoYm5Oc1lYUnBiMjVEYUdGdVoyVkZkbVZ1ZEgwZ1puSnZiU0FuTGk5MGNtRnVjMnhoZEdVdWMyVnlkbWxqWlNjN1hHNXBiWEJ2Y25RZ2UyVnhkV0ZzY3l3Z2FYTkVaV1pwYm1Wa2ZTQm1jbTl0SUNjdUwzVjBhV3duTzF4dVhHNUFTVzVxWldOMFlXSnNaU2dwWEc1QVVHbHdaU2g3WEc0Z0lHNWhiV1U2SUNkMGNtRnVjMnhoZEdVbkxGeHVJQ0J3ZFhKbE9pQm1ZV3h6WlNBdkx5QnlaWEYxYVhKbFpDQjBieUIxY0dSaGRHVWdkR2hsSUhaaGJIVmxJSGRvWlc0Z2RHaGxJSEJ5YjIxcGMyVWdhWE1nY21WemIyeDJaV1JjYm4wcFhHNWxlSEJ2Y25RZ1kyeGhjM01nVkhKaGJuTnNZWFJsVUdsd1pTQnBiWEJzWlcxbGJuUnpJRkJwY0dWVWNtRnVjMlp2Y20wc0lFOXVSR1Z6ZEhKdmVTQjdYRzRnSUhaaGJIVmxPaUJ6ZEhKcGJtY2dQU0FuSnp0Y2JpQWdiR0Z6ZEV0bGVUb2djM1J5YVc1bk8xeHVJQ0JzWVhOMFVHRnlZVzF6T2lCaGJubGJYVHRjYmlBZ2IyNVVjbUZ1YzJ4aGRHbHZia05vWVc1blpUb2dSWFpsYm5SRmJXbDBkR1Z5UEZSeVlXNXpiR0YwYVc5dVEyaGhibWRsUlhabGJuUStPMXh1SUNCdmJreGhibWREYUdGdVoyVTZJRVYyWlc1MFJXMXBkSFJsY2p4TVlXNW5RMmhoYm1kbFJYWmxiblErTzF4dUlDQnZia1JsWm1GMWJIUk1ZVzVuUTJoaGJtZGxPaUJGZG1WdWRFVnRhWFIwWlhJOFJHVm1ZWFZzZEV4aGJtZERhR0Z1WjJWRmRtVnVkRDQ3WEc1Y2JpQWdZMjl1YzNSeWRXTjBiM0lvY0hKcGRtRjBaU0IwY21GdWMyeGhkR1U2SUZSeVlXNXpiR0YwWlZObGNuWnBZMlVzSUhCeWFYWmhkR1VnWDNKbFpqb2dRMmhoYm1kbFJHVjBaV04wYjNKU1pXWXBJSHRjYmlBZ2ZWeHVYRzRnSUhWd1pHRjBaVlpoYkhWbEtHdGxlVG9nYzNSeWFXNW5MQ0JwYm5SbGNuQnZiR0YwWlZCaGNtRnRjejg2SUU5aWFtVmpkQ3dnZEhKaGJuTnNZWFJwYjI1elB6b2dZVzU1S1RvZ2RtOXBaQ0I3WEc0Z0lDQWdiR1YwSUc5dVZISmhibk5zWVhScGIyNGdQU0FvY21Wek9pQnpkSEpwYm1jcElEMCtJSHRjYmlBZ0lDQWdJSFJvYVhNdWRtRnNkV1VnUFNCeVpYTWdJVDA5SUhWdVpHVm1hVzVsWkNBL0lISmxjeUE2SUd0bGVUdGNiaUFnSUNBZ0lIUm9hWE11YkdGemRFdGxlU0E5SUd0bGVUdGNiaUFnSUNBZ0lIUm9hWE11WDNKbFppNXRZWEpyUm05eVEyaGxZMnNvS1R0Y2JpQWdJQ0I5TzF4dUlDQWdJR2xtSUNoMGNtRnVjMnhoZEdsdmJuTXBJSHRjYmlBZ0lDQWdJR3hsZENCeVpYTWdQU0IwYUdsekxuUnlZVzV6YkdGMFpTNW5aWFJRWVhKelpXUlNaWE4xYkhRb2RISmhibk5zWVhScGIyNXpMQ0JyWlhrc0lHbHVkR1Z5Y0c5c1lYUmxVR0Z5WVcxektUdGNiaUFnSUNBZ0lHbG1JQ2gwZVhCbGIyWWdjbVZ6TG5OMVluTmpjbWxpWlNBOVBUMGdKMloxYm1OMGFXOXVKeWtnZTF4dUlDQWdJQ0FnSUNCeVpYTXVjM1ZpYzJOeWFXSmxLRzl1VkhKaGJuTnNZWFJwYjI0cE8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2IyNVVjbUZ1YzJ4aGRHbHZiaWh5WlhNcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdJQ0IwYUdsekxuUnlZVzV6YkdGMFpTNW5aWFFvYTJWNUxDQnBiblJsY25CdmJHRjBaVkJoY21GdGN5a3VjM1ZpYzJOeWFXSmxLRzl1VkhKaGJuTnNZWFJwYjI0cE8xeHVJQ0I5WEc1Y2JpQWdkSEpoYm5ObWIzSnRLSEYxWlhKNU9pQnpkSEpwYm1jc0lDNHVMbUZ5WjNNNklHRnVlVnRkS1RvZ1lXNTVJSHRjYmlBZ0lDQnBaaUFvSVhGMVpYSjVJSHg4SUhGMVpYSjVMbXhsYm1kMGFDQTlQVDBnTUNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhGMVpYSjVPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJR2xtSUhkbElHRnpheUJoYm05MGFHVnlJSFJwYldVZ1ptOXlJSFJvWlNCellXMWxJR3RsZVN3Z2NtVjBkWEp1SUhSb1pTQnNZWE4wSUhaaGJIVmxYRzRnSUNBZ2FXWWdLR1Z4ZFdGc2N5aHhkV1Z5ZVN3Z2RHaHBjeTVzWVhOMFMyVjVLU0FtSmlCbGNYVmhiSE1vWVhKbmN5d2dkR2hwY3k1c1lYTjBVR0Z5WVcxektTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11ZG1Gc2RXVTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2JHVjBJR2x1ZEdWeWNHOXNZWFJsVUdGeVlXMXpPaUJQWW1wbFkzUTdYRzRnSUNBZ2FXWWdLR2x6UkdWbWFXNWxaQ2hoY21keld6QmRLU0FtSmlCaGNtZHpMbXhsYm1kMGFDa2dlMXh1SUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJoY21keld6QmRJRDA5UFNBbmMzUnlhVzVuSnlBbUppQmhjbWR6V3pCZExteGxibWQwYUNrZ2UxeHVJQ0FnSUNBZ0lDQXZMeUIzWlNCaFkyTmxjSFFnYjJKcVpXTjBjeUIzY21sMGRHVnVJR2x1SUhSb1pTQjBaVzF3YkdGMFpTQnpkV05vSUdGeklIdHVPakY5TENCN0oyNG5PakY5TENCN2Jqb25kaWQ5WEc0Z0lDQWdJQ0FnSUM4dklIZG9hV05vSUdseklIZG9lU0IzWlNCdGFXZG9kQ0J1WldWa0lIUnZJR05vWVc1blpTQnBkQ0IwYnlCeVpXRnNJRXBUVDA0Z2IySnFaV04wY3lCemRXTm9JR0Z6SUh0Y0ltNWNJam94ZlNCdmNpQjdYQ0p1WENJNlhDSjJYQ0o5WEc0Z0lDQWdJQ0FnSUd4bGRDQjJZV3hwWkVGeVozTTZJSE4wY21sdVp5QTlJR0Z5WjNOYk1GMWNiaUFnSUNBZ0lDQWdJQ0F1Y21Wd2JHRmpaU2d2S0Z4Y0p5ay9LRnRoTFhwQkxWb3dMVGxmWFNzcEtGeGNKeWsvS0Z4Y2N5ay9PaTluTENBblhDSWtNbHdpT2ljcFhHNGdJQ0FnSUNBZ0lDQWdMbkpsY0d4aFkyVW9Mem9vWEZ4ektUOG9YRnduS1NndUtqOHBLRnhjSnlrdlp5d2dKenBjSWlRelhDSW5LVHRjYmlBZ0lDQWdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdJQ0JwYm5SbGNuQnZiR0YwWlZCaGNtRnRjeUE5SUVwVFQwNHVjR0Z5YzJVb2RtRnNhV1JCY21kektUdGNiaUFnSUNBZ0lDQWdmU0JqWVhSamFDQW9aU2tnZTF4dUlDQWdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5QlRlVzUwWVhoRmNuSnZjaWhnVjNKdmJtY2djR0Z5WVcxbGRHVnlJR2x1SUZSeVlXNXpiR0YwWlZCcGNHVXVJRVY0Y0dWamRHVmtJR0VnZG1Gc2FXUWdUMkpxWldOMExDQnlaV05sYVhabFpEb2dKSHRoY21keld6QmRmV0FwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tIUjVjR1Z2WmlCaGNtZHpXekJkSUQwOVBTQW5iMkpxWldOMEp5QW1KaUFoUVhKeVlYa3VhWE5CY25KaGVTaGhjbWR6V3pCZEtTa2dlMXh1SUNBZ0lDQWdJQ0JwYm5SbGNuQnZiR0YwWlZCaGNtRnRjeUE5SUdGeVozTmJNRjA3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnYzNSdmNtVWdkR2hsSUhGMVpYSjVMQ0JwYmlCallYTmxJR2wwSUdOb1lXNW5aWE5jYmlBZ0lDQjBhR2x6TG14aGMzUkxaWGtnUFNCeGRXVnllVHRjYmx4dUlDQWdJQzh2SUhOMGIzSmxJSFJvWlNCd1lYSmhiWE1zSUdsdUlHTmhjMlVnZEdobGVTQmphR0Z1WjJWY2JpQWdJQ0IwYUdsekxteGhjM1JRWVhKaGJYTWdQU0JoY21kek8xeHVYRzRnSUNBZ0x5OGdjMlYwSUhSb1pTQjJZV3gxWlZ4dUlDQWdJSFJvYVhNdWRYQmtZWFJsVm1Gc2RXVW9jWFZsY25rc0lHbHVkR1Z5Y0c5c1lYUmxVR0Z5WVcxektUdGNibHh1SUNBZ0lDOHZJR2xtSUhSb1pYSmxJR2x6SUdFZ2MzVmljMk55YVhCMGFXOXVJSFJ2SUc5dVRHRnVaME5vWVc1blpTd2dZMnhsWVc0Z2FYUmNiaUFnSUNCMGFHbHpMbDlrYVhOd2IzTmxLQ2s3WEc1Y2JpQWdJQ0F2THlCemRXSnpZM0pwWW1VZ2RHOGdiMjVVY21GdWMyeGhkR2x2YmtOb1lXNW5aU0JsZG1WdWRDd2dhVzRnWTJGelpTQjBhR1VnZEhKaGJuTnNZWFJwYjI1eklHTm9ZVzVuWlZ4dUlDQWdJR2xtSUNnaGRHaHBjeTV2YmxSeVlXNXpiR0YwYVc5dVEyaGhibWRsS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbTl1VkhKaGJuTnNZWFJwYjI1RGFHRnVaMlVnUFNCMGFHbHpMblJ5WVc1emJHRjBaUzV2YmxSeVlXNXpiR0YwYVc5dVEyaGhibWRsTG5OMVluTmpjbWxpWlNnb1pYWmxiblE2SUZSeVlXNXpiR0YwYVc5dVEyaGhibWRsUlhabGJuUXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWJHRnpkRXRsZVNBbUppQmxkbVZ1ZEM1c1lXNW5JRDA5UFNCMGFHbHpMblJ5WVc1emJHRjBaUzVqZFhKeVpXNTBUR0Z1WnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFJvYVhNdWJHRnpkRXRsZVNBOUlHNTFiR3c3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTUxY0dSaGRHVldZV3gxWlNoeGRXVnllU3dnYVc1MFpYSndiMnhoZEdWUVlYSmhiWE1zSUdWMlpXNTBMblJ5WVc1emJHRjBhVzl1Y3lrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMHBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJSE4xWW5OamNtbGlaU0IwYnlCdmJreGhibWREYUdGdVoyVWdaWFpsYm5Rc0lHbHVJR05oYzJVZ2RHaGxJR3hoYm1kMVlXZGxJR05vWVc1blpYTmNiaUFnSUNCcFppQW9JWFJvYVhNdWIyNU1ZVzVuUTJoaGJtZGxLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtOXVUR0Z1WjBOb1lXNW5aU0E5SUhSb2FYTXVkSEpoYm5Oc1lYUmxMbTl1VEdGdVowTm9ZVzVuWlM1emRXSnpZM0pwWW1Vb0tHVjJaVzUwT2lCTVlXNW5RMmhoYm1kbFJYWmxiblFwSUQwK0lIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXViR0Z6ZEV0bGVTa2dlMXh1SUNBZ0lDQWdJQ0FnSUhSb2FYTXViR0Z6ZEV0bGVTQTlJRzUxYkd3N0lDOHZJSGRsSUhkaGJuUWdkRzhnYldGclpTQnpkWEpsSUdsMElHUnZaWE51SjNRZ2NtVjBkWEp1SUhSb1pTQnpZVzFsSUhaaGJIVmxJSFZ1ZEdsc0lHbDBKM01nWW1WbGJpQjFjR1JoZEdWa1hHNGdJQ0FnSUNBZ0lDQWdkR2hwY3k1MWNHUmhkR1ZXWVd4MVpTaHhkV1Z5ZVN3Z2FXNTBaWEp3YjJ4aGRHVlFZWEpoYlhNc0lHVjJaVzUwTG5SeVlXNXpiR0YwYVc5dWN5azdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDBwTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzh2SUhOMVluTmpjbWxpWlNCMGJ5QnZia1JsWm1GMWJIUk1ZVzVuUTJoaGJtZGxJR1YyWlc1MExDQnBiaUJqWVhObElIUm9aU0JrWldaaGRXeDBJR3hoYm1kMVlXZGxJR05vWVc1blpYTmNiaUFnSUNCcFppQW9JWFJvYVhNdWIyNUVaV1poZFd4MFRHRnVaME5vWVc1blpTa2dlMXh1SUNBZ0lDQWdkR2hwY3k1dmJrUmxabUYxYkhSTVlXNW5RMmhoYm1kbElEMGdkR2hwY3k1MGNtRnVjMnhoZEdVdWIyNUVaV1poZFd4MFRHRnVaME5vWVc1blpTNXpkV0p6WTNKcFltVW9LQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXNZWE4wUzJWNUtTQjdYRzRnSUNBZ0lDQWdJQ0FnZEdocGN5NXNZWE4wUzJWNUlEMGdiblZzYkRzZ0x5OGdkMlVnZDJGdWRDQjBieUJ0WVd0bElITjFjbVVnYVhRZ1pHOWxjMjRuZENCeVpYUjFjbTRnZEdobElITmhiV1VnZG1Gc2RXVWdkVzUwYVd3Z2FYUW5jeUJpWldWdUlIVndaR0YwWldSY2JpQWdJQ0FnSUNBZ0lDQjBhR2x6TG5Wd1pHRjBaVlpoYkhWbEtIRjFaWEo1TENCcGJuUmxjbkJ2YkdGMFpWQmhjbUZ0Y3lrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMHBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMblpoYkhWbE8xeHVJQ0I5WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRU5zWldGdUlHRnVlU0JsZUdsemRHbHVaeUJ6ZFdKelkzSnBjSFJwYjI0Z2RHOGdZMmhoYm1kbElHVjJaVzUwYzF4dUlDQWdLaTljYmlBZ2NISnBkbUYwWlNCZlpHbHpjRzl6WlNncE9pQjJiMmxrSUh0Y2JpQWdJQ0JwWmlBb2RIbHdaVzltSUhSb2FYTXViMjVVY21GdWMyeGhkR2x2YmtOb1lXNW5aU0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY3BJSHRjYmlBZ0lDQWdJSFJvYVhNdWIyNVVjbUZ1YzJ4aGRHbHZia05vWVc1blpTNTFibk4xWW5OamNtbGlaU2dwTzF4dUlDQWdJQ0FnZEdocGN5NXZibFJ5WVc1emJHRjBhVzl1UTJoaGJtZGxJRDBnZFc1a1pXWnBibVZrTzF4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JSFJvYVhNdWIyNU1ZVzVuUTJoaGJtZGxJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5a2dlMXh1SUNBZ0lDQWdkR2hwY3k1dmJreGhibWREYUdGdVoyVXVkVzV6ZFdKelkzSnBZbVVvS1R0Y2JpQWdJQ0FnSUhSb2FYTXViMjVNWVc1blEyaGhibWRsSUQwZ2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2RIbHdaVzltSUhSb2FYTXViMjVFWldaaGRXeDBUR0Z1WjBOb1lXNW5aU0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY3BJSHRjYmlBZ0lDQWdJSFJvYVhNdWIyNUVaV1poZFd4MFRHRnVaME5vWVc1blpTNTFibk4xWW5OamNtbGlaU2dwTzF4dUlDQWdJQ0FnZEdocGN5NXZia1JsWm1GMWJIUk1ZVzVuUTJoaGJtZGxJRDBnZFc1a1pXWnBibVZrTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUc1blQyNUVaWE4wY205NUtDazZJSFp2YVdRZ2UxeHVJQ0FnSUhSb2FYTXVYMlJwYzNCdmMyVW9LVHRjYmlBZ2ZWeHVmVnh1SWl3aWFXMXdiM0owSUh0T1owMXZaSFZzWlN3Z1RXOWtkV3hsVjJsMGFGQnliM1pwWkdWeWN5d2dVSEp2ZG1sa1pYSjlJR1p5YjIwZ1hDSkFZVzVuZFd4aGNpOWpiM0psWENJN1hHNXBiWEJ2Y25RZ2UxUnlZVzV6YkdGMFpVeHZZV1JsY2l3Z1ZISmhibk5zWVhSbFJtRnJaVXh2WVdSbGNuMGdabkp2YlNCY0lpNHZiR2xpTDNSeVlXNXpiR0YwWlM1c2IyRmtaWEpjSWp0Y2JtbHRjRzl5ZENCN1ZISmhibk5zWVhSbFUyVnlkbWxqWlgwZ1puSnZiU0JjSWk0dmJHbGlMM1J5WVc1emJHRjBaUzV6WlhKMmFXTmxYQ0k3WEc1cGJYQnZjblFnZTAxcGMzTnBibWRVY21GdWMyeGhkR2x2YmtoaGJtUnNaWElzSUVaaGEyVk5hWE56YVc1blZISmhibk5zWVhScGIyNUlZVzVrYkdWeWZTQm1jbTl0SUZ3aUxpOXNhV0l2YldsemMybHVaeTEwY21GdWMyeGhkR2x2Ymkxb1lXNWtiR1Z5WENJN1hHNXBiWEJ2Y25RZ2UxUnlZVzV6YkdGMFpWQmhjbk5sY2l3Z1ZISmhibk5zWVhSbFJHVm1ZWFZzZEZCaGNuTmxjbjBnWm5KdmJTQmNJaTR2YkdsaUwzUnlZVzV6YkdGMFpTNXdZWEp6WlhKY0lqdGNibWx0Y0c5eWRDQjdWSEpoYm5Oc1lYUmxRMjl0Y0dsc1pYSXNJRlJ5WVc1emJHRjBaVVpoYTJWRGIyMXdhV3hsY24wZ1puSnZiU0JjSWk0dmJHbGlMM1J5WVc1emJHRjBaUzVqYjIxd2FXeGxjbHdpTzF4dWFXMXdiM0owSUh0VWNtRnVjMnhoZEdWRWFYSmxZM1JwZG1WOUlHWnliMjBnWENJdUwyeHBZaTkwY21GdWMyeGhkR1V1WkdseVpXTjBhWFpsWENJN1hHNXBiWEJ2Y25RZ2UxUnlZVzV6YkdGMFpWQnBjR1Y5SUdaeWIyMGdYQ0l1TDJ4cFlpOTBjbUZ1YzJ4aGRHVXVjR2x3WlZ3aU8xeHVhVzF3YjNKMElIdFVjbUZ1YzJ4aGRHVlRkRzl5WlgwZ1puSnZiU0JjSWk0dmJHbGlMM1J5WVc1emJHRjBaUzV6ZEc5eVpWd2lPMXh1YVcxd2IzSjBJSHRWVTBWZlUxUlBVa1Y5SUdaeWIyMGdYQ0l1TDJ4cFlpOTBjbUZ1YzJ4aGRHVXVjMlZ5ZG1salpWd2lPMXh1YVcxd2IzSjBJSHRWVTBWZlJFVkdRVlZNVkY5TVFVNUhmU0JtY205dElGd2lMaTlzYVdJdmRISmhibk5zWVhSbExuTmxjblpwWTJWY0lqdGNibHh1Wlhod2IzSjBJQ29nWm5KdmJTQmNJaTR2YkdsaUwzUnlZVzV6YkdGMFpTNXNiMkZrWlhKY0lqdGNibVY0Y0c5eWRDQXFJR1p5YjIwZ1hDSXVMMnhwWWk5MGNtRnVjMnhoZEdVdWMyVnlkbWxqWlZ3aU8xeHVaWGh3YjNKMElDb2dabkp2YlNCY0lpNHZiR2xpTDIxcGMzTnBibWN0ZEhKaGJuTnNZWFJwYjI0dGFHRnVaR3hsY2x3aU8xeHVaWGh3YjNKMElDb2dabkp2YlNCY0lpNHZiR2xpTDNSeVlXNXpiR0YwWlM1d1lYSnpaWEpjSWp0Y2JtVjRjRzl5ZENBcUlHWnliMjBnWENJdUwyeHBZaTkwY21GdWMyeGhkR1V1WTI5dGNHbHNaWEpjSWp0Y2JtVjRjRzl5ZENBcUlHWnliMjBnWENJdUwyeHBZaTkwY21GdWMyeGhkR1V1WkdseVpXTjBhWFpsWENJN1hHNWxlSEJ2Y25RZ0tpQm1jbTl0SUZ3aUxpOXNhV0l2ZEhKaGJuTnNZWFJsTG5CcGNHVmNJanRjYm1WNGNHOXlkQ0FxSUdaeWIyMGdYQ0l1TDJ4cFlpOTBjbUZ1YzJ4aGRHVXVjM1J2Y21WY0lqdGNibHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JVY21GdWMyeGhkR1ZOYjJSMWJHVkRiMjVtYVdjZ2UxeHVJQ0JzYjJGa1pYSS9PaUJRY205MmFXUmxjanRjYmlBZ1kyOXRjR2xzWlhJL09pQlFjbTkyYVdSbGNqdGNiaUFnY0dGeWMyVnlQem9nVUhKdmRtbGtaWEk3WEc0Z0lHMXBjM05wYm1kVWNtRnVjMnhoZEdsdmJraGhibVJzWlhJL09pQlFjbTkyYVdSbGNqdGNiaUFnTHk4Z2FYTnZiR0YwWlNCMGFHVWdjMlZ5ZG1salpTQnBibk4wWVc1alpTd2diMjVzZVNCM2IzSnJjeUJtYjNJZ2JHRjZlU0JzYjJGa1pXUWdiVzlrZFd4bGN5QnZjaUJqYjIxd2IyNWxiblJ6SUhkcGRHZ2dkR2hsSUZ3aWNISnZkbWxrWlhKelhDSWdjSEp2Y0dWeWRIbGNiaUFnYVhOdmJHRjBaVDg2SUdKdmIyeGxZVzQ3WEc0Z0lIVnpaVVJsWm1GMWJIUk1ZVzVuUHpvZ1ltOXZiR1ZoYmp0Y2JuMWNibHh1UUU1blRXOWtkV3hsS0h0Y2JpQWdaR1ZqYkdGeVlYUnBiMjV6T2lCYlhHNGdJQ0FnVkhKaGJuTnNZWFJsVUdsd1pTeGNiaUFnSUNCVWNtRnVjMnhoZEdWRWFYSmxZM1JwZG1WY2JpQWdYU3hjYmlBZ1pYaHdiM0owY3pvZ1cxeHVJQ0FnSUZSeVlXNXpiR0YwWlZCcGNHVXNYRzRnSUNBZ1ZISmhibk5zWVhSbFJHbHlaV04wYVhabFhHNGdJRjFjYm4wcFhHNWxlSEJ2Y25RZ1kyeGhjM01nVkhKaGJuTnNZWFJsVFc5a2RXeGxJSHRjYmlBZ0x5b3FYRzRnSUNBcUlGVnpaU0IwYUdseklHMWxkR2h2WkNCcGJpQjViM1Z5SUhKdmIzUWdiVzlrZFd4bElIUnZJSEJ5YjNacFpHVWdkR2hsSUZSeVlXNXpiR0YwWlZObGNuWnBZMlZjYmlBZ0lDb3ZYRzRnSUhOMFlYUnBZeUJtYjNKU2IyOTBLR052Ym1acFp6b2dWSEpoYm5Oc1lYUmxUVzlrZFd4bFEyOXVabWxuSUQwZ2UzMHBPaUJOYjJSMWJHVlhhWFJvVUhKdmRtbGtaWEp6SUh0Y2JpQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdibWROYjJSMWJHVTZJRlJ5WVc1emJHRjBaVTF2WkhWc1pTeGNiaUFnSUNBZ0lIQnliM1pwWkdWeWN6b2dXMXh1SUNBZ0lDQWdJQ0JqYjI1bWFXY3ViRzloWkdWeUlIeDhJSHR3Y205MmFXUmxPaUJVY21GdWMyeGhkR1ZNYjJGa1pYSXNJSFZ6WlVOc1lYTnpPaUJVY21GdWMyeGhkR1ZHWVd0bFRHOWhaR1Z5ZlN4Y2JpQWdJQ0FnSUNBZ1kyOXVabWxuTG1OdmJYQnBiR1Z5SUh4OElIdHdjbTkyYVdSbE9pQlVjbUZ1YzJ4aGRHVkRiMjF3YVd4bGNpd2dkWE5sUTJ4aGMzTTZJRlJ5WVc1emJHRjBaVVpoYTJWRGIyMXdhV3hsY24wc1hHNGdJQ0FnSUNBZ0lHTnZibVpwWnk1d1lYSnpaWElnZkh3Z2UzQnliM1pwWkdVNklGUnlZVzV6YkdGMFpWQmhjbk5sY2l3Z2RYTmxRMnhoYzNNNklGUnlZVzV6YkdGMFpVUmxabUYxYkhSUVlYSnpaWEo5TEZ4dUlDQWdJQ0FnSUNCamIyNW1hV2N1YldsemMybHVaMVJ5WVc1emJHRjBhVzl1U0dGdVpHeGxjaUI4ZkNCN2NISnZkbWxrWlRvZ1RXbHpjMmx1WjFSeVlXNXpiR0YwYVc5dVNHRnVaR3hsY2l3Z2RYTmxRMnhoYzNNNklFWmhhMlZOYVhOemFXNW5WSEpoYm5Oc1lYUnBiMjVJWVc1a2JHVnlmU3hjYmlBZ0lDQWdJQ0FnVkhKaGJuTnNZWFJsVTNSdmNtVXNYRzRnSUNBZ0lDQWdJSHR3Y205MmFXUmxPaUJWVTBWZlUxUlBVa1VzSUhWelpWWmhiSFZsT2lCamIyNW1hV2N1YVhOdmJHRjBaWDBzWEc0Z0lDQWdJQ0FnSUh0d2NtOTJhV1JsT2lCVlUwVmZSRVZHUVZWTVZGOU1RVTVITENCMWMyVldZV3gxWlRvZ1kyOXVabWxuTG5WelpVUmxabUYxYkhSTVlXNW5mU3hjYmlBZ0lDQWdJQ0FnVkhKaGJuTnNZWFJsVTJWeWRtbGpaVnh1SUNBZ0lDQWdYVnh1SUNBZ0lIMDdYRzRnSUgxY2JseHVJQ0F2S2lwY2JpQWdJQ29nVlhObElIUm9hWE1nYldWMGFHOWtJR2x1SUhsdmRYSWdiM1JvWlhJZ0tHNXZiaUJ5YjI5MEtTQnRiMlIxYkdWeklIUnZJR2x0Y0c5eWRDQjBhR1VnWkdseVpXTjBhWFpsTDNCcGNHVmNiaUFnSUNvdlhHNGdJSE4wWVhScFl5Qm1iM0pEYUdsc1pDaGpiMjVtYVdjNklGUnlZVzV6YkdGMFpVMXZaSFZzWlVOdmJtWnBaeUE5SUh0OUtUb2dUVzlrZFd4bFYybDBhRkJ5YjNacFpHVnljeUI3WEc0Z0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lHNW5UVzlrZFd4bE9pQlVjbUZ1YzJ4aGRHVk5iMlIxYkdVc1hHNGdJQ0FnSUNCd2NtOTJhV1JsY25NNklGdGNiaUFnSUNBZ0lDQWdZMjl1Wm1sbkxteHZZV1JsY2lCOGZDQjdjSEp2ZG1sa1pUb2dWSEpoYm5Oc1lYUmxURzloWkdWeUxDQjFjMlZEYkdGemN6b2dWSEpoYm5Oc1lYUmxSbUZyWlV4dllXUmxjbjBzWEc0Z0lDQWdJQ0FnSUdOdmJtWnBaeTVqYjIxd2FXeGxjaUI4ZkNCN2NISnZkbWxrWlRvZ1ZISmhibk5zWVhSbFEyOXRjR2xzWlhJc0lIVnpaVU5zWVhOek9pQlVjbUZ1YzJ4aGRHVkdZV3RsUTI5dGNHbHNaWEo5TEZ4dUlDQWdJQ0FnSUNCamIyNW1hV2N1Y0dGeWMyVnlJSHg4SUh0d2NtOTJhV1JsT2lCVWNtRnVjMnhoZEdWUVlYSnpaWElzSUhWelpVTnNZWE56T2lCVWNtRnVjMnhoZEdWRVpXWmhkV3gwVUdGeWMyVnlmU3hjYmlBZ0lDQWdJQ0FnWTI5dVptbG5MbTFwYzNOcGJtZFVjbUZ1YzJ4aGRHbHZia2hoYm1Sc1pYSWdmSHdnZTNCeWIzWnBaR1U2SUUxcGMzTnBibWRVY21GdWMyeGhkR2x2YmtoaGJtUnNaWElzSUhWelpVTnNZWE56T2lCR1lXdGxUV2x6YzJsdVoxUnlZVzV6YkdGMGFXOXVTR0Z1Wkd4bGNuMHNYRzRnSUNBZ0lDQWdJSHR3Y205MmFXUmxPaUJWVTBWZlUxUlBVa1VzSUhWelpWWmhiSFZsT2lCamIyNW1hV2N1YVhOdmJHRjBaWDBzWEc0Z0lDQWdJQ0FnSUh0d2NtOTJhV1JsT2lCVlUwVmZSRVZHUVZWTVZGOU1RVTVITENCMWMyVldZV3gxWlRvZ1kyOXVabWxuTG5WelpVUmxabUYxYkhSTVlXNW5mU3hjYmlBZ0lDQWdJQ0FnVkhKaGJuTnNZWFJsVTJWeWRtbGpaVnh1SUNBZ0lDQWdYVnh1SUNBZ0lIMDdYRzRnSUgxY2JuMWNiaUpkTENKdVlXMWxjeUk2V3lKMGMyeHBZbDh4TGw5ZlpYaDBaVzVrY3lJc0luUnpiR2xpWHpFdVgxOTJZV3gxWlhNaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3p0QlFVZEJPenM3TzBsQlFVRTdTMEZGUXp0SlFVRkVMSE5DUVVGRE8wTkJRVUVzU1VGQlFUczdPenRCUVV0RU8wbEJRM2xEUVN4MVEwRkJaVHRKUVVSNFJEczdTMEZMUXpzN096czdTVUZJUXl3MFEwRkJZenM3T3p0SlFVRmtMRlZCUVdVc1NVRkJXVHRSUVVONlFpeFBRVUZQTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRMUVVObU96dG5Ra0ZLUml4VlFVRlZPenRKUVV0WUxEQkNRVUZETzBOQlFVRXNRMEZLZDBNc1pVRkJaVHM3T3pzN08wRkRXSGhFT3pzN1FVRnZRa0U3T3pzN1NVRkJRVHRMUVZkRE8wbEJRVVFzWjBOQlFVTTdRMEZCUVN4SlFVRkJPenM3TzBGQlMwUTdTVUZCUVR0TFFVdERPenM3T3p0SlFVaERMRGhEUVVGTk96czdPMGxCUVU0c1ZVRkJUeXhOUVVGMVF6dFJRVU0xUXl4UFFVRlBMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU03UzBGRGJrSTdPMmRDUVVwR0xGVkJRVlU3TzBsQlMxZ3NiME5CUVVNN1EwRk1SRHM3T3pzN096czdPMEZEYkVOQk96czdPMGxCUVVFN1MwRkpRenRKUVVGRUxIZENRVUZETzBOQlFVRXNTVUZCUVRzN096dEJRVXRFTzBsQlF6SkRRU3g1UTBGQmFVSTdTVUZFTlVRN08wdEJVME03T3pzN096dEpRVkJETEhWRFFVRlBPenM3T3p0SlFVRlFMRlZCUVZFc1MwRkJZU3hGUVVGRkxFbEJRVms3VVVGRGFrTXNUMEZCVHl4TFFVRkxMRU5CUVVNN1MwRkRaRHM3T3pzN08wbEJSVVFzYlVSQlFXMUNPenM3T3p0SlFVRnVRaXhWUVVGdlFpeFpRVUZwUWl4RlFVRkZMRWxCUVZrN1VVRkRha1FzVDBGQlR5eFpRVUZaTEVOQlFVTTdTMEZEY2tJN08yZENRVkpHTEZWQlFWVTdPMGxCVTFnc05FSkJRVU03UTBGQlFTeERRVkl3UXl4cFFrRkJhVUk3T3pzN096czdPenM3T3pzN096czdPenM3TzBGRFJUVkVMRk5CUVdkQ0xFMUJRVTBzUTBGQlF5eEZRVUZQTEVWQlFVVXNSVUZCVHp0SlFVTnlReXhKUVVGSkxFVkJRVVVzUzBGQlN5eEZRVUZGTzFGQlFVVXNUMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkRNMElzU1VGQlNTeEZRVUZGTEV0QlFVc3NTVUZCU1N4SlFVRkpMRVZCUVVVc1MwRkJTeXhKUVVGSk8xRkJRVVVzVDBGQlR5eExRVUZMTEVOQlFVTTdTVUZETjBNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVWQlFVVXNTMEZCU3l4RlFVRkZPMUZCUVVVc1QwRkJUeXhKUVVGSkxFTkJRVU03T3p0UlFVTndReXhGUVVGRkxFZEJRVWNzVDBGQlR5eEZRVUZGT3p0UlFVRkZMRVZCUVVVc1IwRkJSeXhQUVVGUExFVkJRVVU3TzFGQlFVVXNUVUZCWXpzN1VVRkJSU3hIUVVGUk96dFJRVUZGTEUxQlFWYzdTVUZEZWtVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4UlFVRlJMRVZCUVVVN1VVRkRPVUlzU1VGQlNTeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRk8xbEJRM0pDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVVzUTBGQlF6dG5Ra0ZCUlN4UFFVRlBMRXRCUVVzc1EwRkJRenRaUVVOeVF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJReXhOUVVGTkxFdEJRVXNzUlVGQlJTeERRVUZETEUxQlFVMHNSVUZCUlR0blFrRkRja01zUzBGQlN5eEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVTdiMEpCUTJwRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0M1FrRkJSU3hQUVVGUExFdEJRVXNzUTBGQlF6dHBRa0ZETjBNN1owSkJRMFFzVDBGQlR5eEpRVUZKTEVOQlFVTTdZVUZEWWp0VFFVTkdPMkZCUVUwN1dVRkRUQ3hKUVVGSkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVN1owSkJRM0pDTEU5QlFVOHNTMEZCU3l4RFFVRkRPMkZCUTJRN1dVRkRSQ3hOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVNM1FpeExRVUZMTEVkQlFVY3NTVUZCU1N4RlFVRkZMRVZCUVVVN1owSkJRMlFzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVN2IwSkJRemRDTEU5QlFVOHNTMEZCU3l4RFFVRkRPMmxDUVVOa08yZENRVU5FTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU03WVVGRGNFSTdXVUZEUkN4TFFVRkxMRWRCUVVjc1NVRkJTU3hGUVVGRkxFVkJRVVU3WjBKQlEyUXNTVUZCU1N4RlFVRkZMRWRCUVVjc1NVRkJTU3hOUVVGTkxFTkJRVU1zU1VGQlNTeFBRVUZQTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhYUVVGWExFVkJRVVU3YjBKQlEzUkVMRTlCUVU4c1MwRkJTeXhEUVVGRE8ybENRVU5rTzJGQlEwWTdXVUZEUkN4UFFVRlBMRWxCUVVrc1EwRkJRenRUUVVOaU8wdEJRMFk3U1VGRFJDeFBRVUZQTEV0QlFVc3NRMEZCUXp0RFFVTmtPenM3T3pzN1FVRkhSQ3hUUVVGblFpeFRRVUZUTEVOQlFVTXNTMEZCVlR0SlFVTnNReXhQUVVGUExFOUJRVThzUzBGQlN5eExRVUZMTEZkQlFWY3NTVUZCU1N4TFFVRkxMRXRCUVVzc1NVRkJTU3hEUVVGRE8wTkJRM1pFT3pzN096dEJRVVZFTEZOQlFXZENMRkZCUVZFc1EwRkJReXhKUVVGVE8wbEJRMmhETEZGQlFWRXNTVUZCU1N4SlFVRkpMRTlCUVU4c1NVRkJTU3hMUVVGTExGRkJRVkVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3UTBGRGJrVTdPenM3T3p0QlFVVkVMRk5CUVdkQ0xGTkJRVk1zUTBGQlF5eE5RVUZYTEVWQlFVVXNUVUZCVnpzN1VVRkROVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVGRkxFMUJRVTBzUTBGQlF6dEpRVU4wUXl4SlFVRkpMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVN1VVRkRlRU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlF5eEhRVUZST3p0WlFVTnVReXhKUVVGSkxGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSVHRuUWtGRGVrSXNTVUZCU1N4RlFVRkZMRWRCUVVjc1NVRkJTU3hOUVVGTkxFTkJRVU1zUlVGQlJUdHZRa0ZEY0VJc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEZsQlFVY3NSMEZCUXl4SFFVRkhMRWxCUVVjc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZGTEVOQlFVTTdhVUpCUXpkRE8zRkNRVUZOTzI5Q1FVTk1MRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMmxDUVVOdVJEdGhRVU5HTzJsQ1FVRk5PMmRDUVVOTUxFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4WlFVRkhMRWRCUVVNc1IwRkJSeXhKUVVGSExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCUlN4RFFVRkRPMkZCUXpkRE8xTkJRMFlzUTBGQlF5eERRVUZETzB0QlEwbzdTVUZEUkN4UFFVRlBMRTFCUVUwc1EwRkJRenREUVVObU96czdPenM3T3pzN1FVTjRSVVE3T3pzN1NVRkJRVHRMUVdkQ1F6dEpRVUZFTEhOQ1FVRkRPME5CUVVFc1NVRkJRVHM3U1VGSE1rTkJMREJEUVVGbE8wbEJSRE5FTzFGQlFVRXNjVVZCYlVSRE8xRkJha1JETEhGQ1FVRmxMRWRCUVZjc2RVSkJRWFZDTEVOQlFVTTdPMHRCYVVSdVJEczdPenM3TzBsQkwwTlJMRFJEUVVGWE96czdPenRKUVVGc1FpeFZRVUZ0UWl4SlFVRjFRaXhGUVVGRkxFMUJRVms3TzFsQlEyeEVMRTFCUVdNN1VVRkZiRUlzU1VGQlNTeFBRVUZQTEVsQlFVa3NTMEZCU3l4UlFVRlJMRVZCUVVVN1dVRkROVUlzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1UwRkRMME03WVVGQlRTeEpRVUZKTEU5QlFVOHNTVUZCU1N4TFFVRkxMRlZCUVZVc1JVRkJSVHRaUVVOeVF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeERRVUZETEVsQlFVa3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRUUVVOcVJEdGhRVUZOT3p0WlFVVk1MRTFCUVUwc2MwSkJRVWNzU1VGQlNTeEZRVUZWTEVOQlFVTTdVMEZEZWtJN1VVRkZSQ3hQUVVGUExFMUJRVTBzUTBGQlF6dExRVU5tT3pzN096czdTVUZGUkN4NVEwRkJVVHM3T3pzN1NVRkJVaXhWUVVGVExFMUJRVmNzUlVGQlJTeEhRVUZYT3p0WlFVTXpRaXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNN1VVRkRla0lzUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTlVMRWRCUVVjN1dVRkRSQ3hIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMWxCUTNCQ0xFbEJRVWtzVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTMEZCU3l4UFFVRlBMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eFJRVUZSTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVU3WjBKQlEzQkhMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUTNKQ0xFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdZVUZEVmp0cFFrRkJUU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlR0blFrRkRka0lzVFVGQlRTeEhRVUZITEZOQlFWTXNRMEZCUXp0aFFVTndRanRwUWtGQlRUdG5Ra0ZEVEN4SFFVRkhMRWxCUVVrc1IwRkJSeXhEUVVGRE8yRkJRMW83VTBGRFJpeFJRVUZSTEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVN1VVRkZkRUlzVDBGQlR5eE5RVUZOTEVOQlFVTTdTMEZEWmpzN096czdPMGxCUlU4c2IwUkJRVzFDT3pzN096dEpRVUV6UWl4VlFVRTBRaXhGUVVGWkxFVkJRVVVzVFVGQldUdFJRVU53UkN4UFFVRlBMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dExRVU51UWpzN096czdPMGxCUlU4c2EwUkJRV2xDT3pzN096dEpRVUY2UWl4VlFVRXdRaXhKUVVGWkxFVkJRVVVzVFVGQldUdFJRVUZ3UkN4cFFrRlRRenRSUVZKRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVTdXVUZEV0N4UFFVRlBMRWxCUVVrc1EwRkJRenRUUVVOaU8xRkJSVVFzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhsUVVGbExFVkJRVVVzVlVGQlF5eFRRVUZwUWl4RlFVRkZMRU5CUVZNN08yZENRVU5xUlN4RFFVRkRMRWRCUVVjc1MwRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTJoRExFOUJRVThzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhUUVVGVExFTkJRVU03VTBGRGNrTXNRMEZCUXl4RFFVRkRPMHRCUTBvN08yZENRV3hFUml4VlFVRlZPenRKUVcxRVdDdzJRa0ZCUXp0RFFVRkJMRU5CYkVReVF5eGxRVUZsT3pzN096czdRVU4wUWpORU8wbEJSMEU3T3pzN1VVRlRVeXhuUWtGQlZ5eEhRVUZYTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN096czdVVUZMZGtNc2FVSkJRVmtzUjBGQlVTeEZRVUZGTEVOQlFVTTdPenM3VVVGTGRrSXNWVUZCU3l4SFFVRnJRaXhGUVVGRkxFTkJRVU03T3pzN096czdVVUZSTVVJc2QwSkJRVzFDTEVkQlFYbERMRWxCUVVrc1dVRkJXU3hGUVVFd1FpeERRVUZET3pzN096czdPMUZCVVhaSExHbENRVUZaTEVkQlFXdERMRWxCUVVrc1dVRkJXU3hGUVVGdFFpeERRVUZET3pzN096czdPMUZCVVd4R0xIZENRVUZ0UWl4SFFVRjVReXhKUVVGSkxGbEJRVmtzUlVGQk1FSXNRMEZCUXp0TFFVTXZSenRKUVVGRUxIRkNRVUZETzBOQlFVRTdPenM3T3pzN1FVTndRMFFzU1VGQllTeFRRVUZUTEVkQlFVY3NTVUZCU1N4alFVRmpMRU5CUVZNc1YwRkJWeXhEUVVGRE96dEJRVU5vUlN4SlFVRmhMR2RDUVVGblFpeEhRVUZITEVsQlFVa3NZMEZCWXl4RFFVRlRMR3RDUVVGclFpeERRVUZET3pzN096czdPenM3T3pzN1NVRjNTVFZGTERCQ1FVRnRRaXhMUVVGeFFpeEZRVU55UWl4aFFVRTRRaXhGUVVNNVFpeFJRVUV5UWl4RlFVTXpRaXhOUVVGMVFpeEZRVU4yUWl4NVFrRkJiMFFzUlVGRGVrSXNZMEZCT0VJc1JVRkRja01zVDBGQmQwSTdVVUZFYWtJc0swSkJRVUVzUlVGQlFTeHhRa0ZCT0VJN1VVRkRja01zZDBKQlFVRXNSVUZCUVN4bFFVRjNRanRSUVU0MVF5eFZRVUZMTEVkQlFVd3NTMEZCU3l4RFFVRm5RanRSUVVOeVFpeHJRa0ZCWVN4SFFVRmlMR0ZCUVdFc1EwRkJhVUk3VVVGRE9VSXNZVUZCVVN4SFFVRlNMRkZCUVZFc1EwRkJiVUk3VVVGRE0wSXNWMEZCVFN4SFFVRk9MRTFCUVUwc1EwRkJhVUk3VVVGRGRrSXNPRUpCUVhsQ0xFZEJRWHBDTEhsQ1FVRjVRaXhEUVVFeVFqdFJRVU42UWl4dFFrRkJZeXhIUVVGa0xHTkJRV01zUTBGQlowSTdVVUZEY2tNc1dVRkJUeXhIUVVGUUxFOUJRVThzUTBGQmFVSTdVVUZ3U0haRUxGbEJRVThzUjBGQldTeExRVUZMTEVOQlFVTTdVVUZEZWtJc2VVSkJRVzlDTEVkQlFYbERMRWxCUVVrc1dVRkJXU3hGUVVFd1FpeERRVUZETzFGQlEzaEhMR3RDUVVGaExFZEJRV3RETEVsQlFVa3NXVUZCV1N4RlFVRnRRaXhEUVVGRE8xRkJRMjVHTEhsQ1FVRnZRaXhIUVVGNVF5eEpRVUZKTEZsQlFWa3NSVUZCTUVJc1EwRkJRenRSUVVkNFJ5eFhRVUZOTEVkQlFXdENMRVZCUVVVc1EwRkJRenRSUVVNelFpeHJRa0ZCWVN4SFFVRlJMRVZCUVVVc1EwRkJRenRSUVVONFFpeDVRa0ZCYjBJc1IwRkJVU3hGUVVGRkxFTkJRVU03UzBFMlIzUkRPMGxCY2tkRUxITkNRVUZKTEdsRVFVRnRRanM3T3pzN096czdPenM3T3pzN1VVRkJka0k3V1VGRFJTeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExHOUNRVUZ2UWl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zYlVKQlFXMUNMRU5CUVVNN1UwRkRiRVk3T3p0UFFVRkJPMGxCVVVRc2MwSkJRVWtzTUVOQlFWazdPenM3T3pzN096czdPenM3TzFGQlFXaENPMWxCUTBVc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTTdVMEZEY0VVN096dFBRVUZCTzBsQlVVUXNjMEpCUVVrc2FVUkJRVzFDT3pzN096czdPenM3T3pzN096dFJRVUYyUWp0WlFVTkZMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4dFFrRkJiVUlzUTBGQlF6dFRRVU5zUmpzN08wOUJRVUU3U1VGTFJDeHpRa0ZCU1N4NVEwRkJWenM3T3pzN096czdVVUZCWmp0WlFVTkZMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZETzFOQlEyeEZPenM3T3p0UlFVVkVMRlZCUVdkQ0xGZEJRVzFDTzFsQlEycERMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJUdG5Ra0ZEYUVJc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eFhRVUZYTEVOQlFVTTdZVUZEYWtNN2FVSkJRVTA3WjBKQlEwd3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhYUVVGWExFZEJRVWNzVjBGQlZ5eERRVUZETzJGQlEzUkRPMU5CUTBZN096dFBRVkpCTzBsQllVUXNjMEpCUVVrc2VVTkJRVmM3T3pzN096czdPMUZCUVdZN1dVRkRSU3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXp0VFFVTnNSVHM3T3pzN1VVRkZSQ3hWUVVGblFpeFhRVUZ0UWp0WlFVTnFReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVTdaMEpCUTJoQ0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NWMEZCVnl4RFFVRkRPMkZCUTJwRE8ybENRVUZOTzJkQ1FVTk1MRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVjBGQlZ5eEhRVUZITEZkQlFWY3NRMEZCUXp0aFFVTjBRenRUUVVOR096czdUMEZTUVR0SlFXRkVMSE5DUVVGSkxHMURRVUZMT3pzN096czdPenRSUVVGVU8xbEJRMFVzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNN1UwRkRkRVE3T3pzN08xRkJSVVFzVlVGQlZTeExRVUZsTzFsQlEzWkNMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJUdG5Ra0ZEYUVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTTdZVUZEY2tJN2FVSkJRVTA3WjBKQlEwd3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETzJGQlF6RkNPMU5CUTBZN096dFBRVkpCTzBsQllVUXNjMEpCUVVrc01FTkJRVms3T3pzN096czdPMUZCUVdoQ08xbEJRMFVzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNN1UwRkRjRVU3T3pzN08xRkJSVVFzVlVGQmFVSXNXVUZCYVVJN1dVRkRhRU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMmRDUVVOb1FpeEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRmxCUVZrc1EwRkJRenRoUVVOdVF6dHBRa0ZCVFR0blFrRkRUQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZsQlFWa3NSMEZCUnl4WlFVRlpMRU5CUVVNN1lVRkRlRU03VTBGRFJqczdPMDlCVWtFN096czdPenM3T3p0SlFXZERUU3g1UTBGQll6czdPenM3U1VGQmNrSXNWVUZCYzBJc1NVRkJXVHRSUVVGc1F5eHBRa0Z2UWtNN1VVRnVRa01zU1VGQlNTeEpRVUZKTEV0QlFVc3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSVHRaUVVNM1FpeFBRVUZQTzFOQlExSTdPMWxCUlVjc1QwRkJUeXhIUVVGdlFpeEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zU1VGQlNTeERRVUZETzFGQlJUbEVMRWxCUVVrc1QwRkJUeXhQUVVGUExFdEJRVXNzVjBGQlZ5eEZRVUZGT3p0WlFVVnNReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0blFrRkRja0lzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNN1lVRkRla0k3V1VGRlJDeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHBRa0ZEYkVJc1UwRkJVeXhEUVVGRExGVkJRVU1zUjBGQlVUdG5Ra0ZEYkVJc1MwRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yRkJRemxDTEVOQlFVTXNRMEZCUXp0VFFVTk9PMkZCUVUwN1dVRkRUQ3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VTBGRE9VSTdTMEZEUmpzN096czdPenM3U1VGTFRTeDVRMEZCWXpzN096dEpRVUZ5UWp0UlFVTkZMRTlCUVU4c1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dExRVU42UWpzN096czdPenM3TzBsQlMwMHNPRUpCUVVjN096czdPMGxCUVZZc1ZVRkJWeXhKUVVGWk8xRkJRWFpDTEdsQ1FYbENRenM3VVVGMlFrTXNTVUZCU1N4SlFVRkpMRXRCUVVzc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJUdFpRVU0zUWl4UFFVRlBMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRjRU03TzFsQlJVY3NUMEZCVHl4SFFVRnZRaXhKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1NVRkJTU3hEUVVGRE8xRkJSVGxFTEVsQlFVa3NUMEZCVHl4UFFVRlBMRXRCUVVzc1YwRkJWeXhGUVVGRk96dFpRVVZzUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJUdG5Ra0ZEY2tJc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdZVUZEZWtJN1dVRkZSQ3hQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRwUWtGRGJFSXNVMEZCVXl4RFFVRkRMRlZCUVVNc1IwRkJVVHRuUWtGRGJFSXNTMEZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dGhRVU4yUWl4RFFVRkRMRU5CUVVNN1dVRkZUQ3hQUVVGUExFOUJRVThzUTBGQlF6dFRRVU5vUWp0aFFVRk5PMWxCUTB3c1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVVjBRaXhQUVVGUExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRGNFTTdTMEZEUmpzN096czdPenM3TzBsQlMwOHNLME5CUVc5Q096czdPenRKUVVFMVFpeFZRVUUyUWl4SlFVRlpPenRaUVVOdVF5eFBRVUYzUWpzN1VVRkhOVUlzU1VGQlNTeFBRVUZQTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzVjBGQlZ5eEZRVUZGTzFsQlEyeEVMRWxCUVVrc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVNdlJpeFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRzlDUVVGdlFpeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMU5CUXpORE8xRkJSVVFzVDBGQlR5eFBRVUZQTEVOQlFVTTdTMEZEYUVJN096czdPenM3T3pzN08wbEJUVTBzZVVOQlFXTTdPenM3T3p0SlFVRnlRaXhWUVVGelFpeEpRVUZaTzFGQlFXeERMR2xDUVcxQ1F6dFJRV3hDUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF6czdXVUZEWkN4dFFrRkJiVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRkRha1lzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhIUVVGSExHMUNRVUZ0UWl4RFFVRkRMRWxCUVVrc1EwRkRha1FzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVTlFMRWRCUVVjc1EwRkJReXhWUVVGRExFZEJRVmNzU1VGQlN5eFBRVUZCTEV0QlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWxCUVVrc1EwRkJReXhIUVVGQkxFTkJRVU1zUlVGRGJFVXNTMEZCU3l4RlFVRkZMRU5CUTFJc1EwRkJRenRSUVVWR0xFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJN1lVRkRja0lzVTBGQlV5eERRVUZETEZWQlFVTXNSMEZCVnp0WlFVTnlRaXhMUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRaUVVNNVFpeExRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1dVRkRia0lzUzBGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TFFVRkxMRU5CUVVNN1UwRkRkRUlzUlVGQlJTeFZRVUZETEVkQlFWRTdXVUZEVml4TFFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF6dFRRVU4wUWl4RFFVRkRMRU5CUVVNN1VVRkZUQ3hQUVVGUExHMUNRVUZ0UWl4RFFVRkRPMHRCUXpWQ096czdPenM3T3pzN096czdPMGxCVFUwc2VVTkJRV003T3pzN096czdPMGxCUVhKQ0xGVkJRWE5DTEVsQlFWa3NSVUZCUlN4WlFVRnZRaXhGUVVGRkxGZEJRVFJDTzFGQlFUVkNMRFJDUVVGQkxFVkJRVUVzYlVKQlFUUkNPMUZCUTNCR0xGbEJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRzFDUVVGdFFpeERRVUZETEZsQlFWa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOeVJTeEpRVUZKTEZkQlFWY3NTVUZCU1N4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzFsQlF6RkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNXVUZCV1N4RFFVRkRMRU5CUVVNN1UwRkROVVU3WVVGQlRUdFpRVU5NTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzV1VGQldTeERRVUZETzFOQlEzaERPMUZCUTBRc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzFGQlEyNUNMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEZsQlFWa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZETEVOQlFVTXNRMEZCUXp0TFFVTndSanM3T3pzN096czdTVUZMVFN4dFEwRkJVVHM3T3p0SlFVRm1PMUZCUTBVc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzB0QlEyNUNPenM3T3pzN096czdTVUZMVFN4dFEwRkJVVHM3T3pzN1NVRkJaaXhWUVVGblFpeExRVUZ2UWp0UlFVRndReXhwUWtGTlF6dFJRVXhETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJReXhKUVVGWk8xbEJRM3BDTEVsQlFVa3NTMEZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVN1owSkJRMjVETEV0QlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJGQlEzWkNPMU5CUTBZc1EwRkJReXhEUVVGRE8wdEJRMG83T3pzN096czdPMGxCUzA4c2MwTkJRVmM3T3pzN1NVRkJia0k3VVVGRFJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1MwRkRMME03T3pzN096czdPenM3TzBsQlMwMHNNRU5CUVdVN096czdPenM3U1VGQmRFSXNWVUZCZFVJc1dVRkJhVUlzUlVGQlJTeEhRVUZSTEVWQlFVVXNhVUpCUVRCQ096czdXVUZEZUVVc1IwRkJaME03VVVGRmNFTXNTVUZCU1N4SFFVRkhMRmxCUVZrc1MwRkJTeXhGUVVGRk96dG5Ra0ZEY0VJc1RVRkJUU3hIUVVGUkxFVkJRVVU3TzJkQ1FVTnNRaXhYUVVGWExFZEJRVmtzUzBGQlN6czdaMEpCUXpsQ0xFdEJRV01zU1VGQlFTeFJRVUZCUXl4VFFVRkJMRWRCUVVjc1EwRkJRU3gzUWtGQlFTeDVRMEZCUlR0dlFrRkJaQ3hKUVVGSkxFTkJRVU1zWjBKQlFVRTdiMEpCUTFJc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1dVRkJXU3hGUVVGRkxFTkJRVU1zUlVGQlJTeHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8yOUNRVU55UlN4SlFVRkpMRTlCUVU4c1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNTMEZCU3l4VlFVRlZMRVZCUVVVN2QwSkJRemRETEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNN2NVSkJRM0JDTzJsQ1FVTkdPenM3T3pzN096czdXVUZEUkN4SlFVRkpMRmRCUVZjc1JVRkJSVHM3YjBKQlExZ3NVMEZCVXl4VFFVRnZRanM3YjBKQlEycERMRXRCUVdNc1NVRkJRU3hSUVVGQlFTeFRRVUZCTEVkQlFVY3NRMEZCUVN4M1FrRkJRU3g1UTBGQlJUdDNRa0ZCWkN4SlFVRkpMRU5CUVVNc1owSkJRVUU3T3pSQ1FVTktMRWRCUVVjc1IwRkJSeXhQUVVGUExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRXRCUVVzc1ZVRkJWU3hIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRzlDUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCVnp0M1FrRkRla1lzU1VGQlNTeFBRVUZQTEZOQlFWTXNTMEZCU3l4WFFVRlhMRVZCUVVVN05FSkJRM0JETEZOQlFWTXNSMEZCUnl4SFFVRkhMRU5CUVVNN2VVSkJRMnBDT3paQ1FVRk5PelJDUVVOTUxGTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8zbENRVU51UXp0eFFrRkRSanM3T3pzN096czdPMmRDUVVORUxFOUJRVThzVTBGQlV5eERRVUZETEVsQlFVa3NRMEZEYmtJc1QwRkJUeXhGUVVGRkxFVkJRMVFzUjBGQlJ5eERRVUZETEZWQlFVTXNSMEZCYTBJN08zZENRVU5xUWl4SFFVRkhMRWRCUVZFc1JVRkJSVHR2UWtGRGFrSXNSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGRExFdEJRV0VzUlVGQlJTeExRVUZoTzNkQ1FVTjJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRE8zRkNRVU42UWl4RFFVRkRMRU5CUVVNN2IwSkJRMGdzVDBGQlR5eEhRVUZITEVOQlFVTTdhVUpCUTFvc1EwRkJReXhEUVVOSUxFTkJRVU03WVVGRFNEdFpRVU5FTEU5QlFVOHNUVUZCVFN4RFFVRkRPMU5CUTJZN1VVRkZSQ3hKUVVGSkxGbEJRVmtzUlVGQlJUdFpRVU5vUWl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zV1VGQldTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RlFVRkZMR2xDUVVGcFFpeERRVUZETEVOQlFVTTdVMEZETTBZN1VVRkZSQ3hKUVVGSkxFOUJRVThzUjBGQlJ5eExRVUZMTEZkQlFWY3NTVUZCU1N4SlFVRkpMRU5CUVVNc1YwRkJWeXhKUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEV0QlFVc3NTVUZCU1N4RFFVRkRMRmRCUVZjc1NVRkJTU3hKUVVGSkxFTkJRVU1zWTBGQll5eEZRVUZGTzFsQlEyeElMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNSVUZCUlN4cFFrRkJhVUlzUTBGQlF5eERRVUZETzFOQlEyeElPMUZCUlVRc1NVRkJTU3hQUVVGUExFZEJRVWNzUzBGQlN5eFhRVUZYTEVWQlFVVTdPMmRDUVVNeFFpeE5RVUZOTEVkQlFXOURMRVZCUVVNc1IwRkJSeXhMUVVGQkxFVkJRVVVzWjBKQlFXZENMRVZCUVVVc1NVRkJTU3hGUVVGRE8xbEJRek5GTEVsQlFVa3NUMEZCVHl4cFFrRkJhVUlzUzBGQlN5eFhRVUZYTEVWQlFVVTdaMEpCUXpWRExFMUJRVTBzUTBGQlF5eHBRa0ZCYVVJc1IwRkJSeXhwUWtGQmFVSXNRMEZCUXp0aFFVTTVRenRaUVVORUxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMU5CUTNKRU8xRkJSVVFzVDBGQlR5eFBRVUZQTEVkQlFVY3NTMEZCU3l4WFFVRlhMRWRCUVVjc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF6dExRVU12UXpzN096czdPenM3T3pzN1NVRk5UU3c0UWtGQlJ6czdPenM3TzBsQlFWWXNWVUZCVnl4SFFVRXlRaXhGUVVGRkxHbENRVUV3UWp0UlFVRnNSU3hwUWtFclFrTTdVVUU1UWtNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFVkJRVVU3V1VGRGJFTXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXcwUWtGQk1FSXNRMEZCUXl4RFFVRkRPMU5CUXpkRE96dFJRVVZFTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRaUVVOb1FpeFBRVUZQTEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJReXhSUVVFd1FqczdiMEpCUXpsRExGVkJRVlVzUjBGQlJ5eFZRVUZETEVkQlFWYzdiMEpCUXpOQ0xGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2IwSkJRMjVDTEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRwUWtGRGNrSTdPMjlDUVVOSExFOUJRVThzUjBGQlJ5eFZRVUZETEVkQlFWRTdiMEpCUTNKQ0xGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2FVSkJRM0pDTzJkQ1FVTkVMRXRCUVVrc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4VFFVRlRMRU5CUVVNc1ZVRkJReXhIUVVGUk8yOUNRVU14UXl4SFFVRkhMRWRCUVVjc1MwRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMR2xDUVVGcFFpeERRVUZETEVOQlFVTTdiMEpCUTNoRUxFbEJRVWtzVDBGQlR5eEhRVUZITEVOQlFVTXNVMEZCVXl4TFFVRkxMRlZCUVZVc1JVRkJSVHQzUWtGRGRrTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1EwRkJReXhWUVVGVkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdjVUpCUTNCRE8zbENRVUZOTzNkQ1FVTk1MRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dHhRa0ZEYWtJN2FVSkJRMFlzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0aFFVTmlMRU5CUVVNc1EwRkJRenRUUVVOS08yRkJRVTA3TzJkQ1FVTkVMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4cFFrRkJhVUlzUTBGQlF6dFpRVU16Uml4SlFVRkpMRTlCUVU4c1IwRkJSeXhEUVVGRExGTkJRVk1zUzBGQlN5eFZRVUZWTEVWQlFVVTdaMEpCUTNaRExFOUJRVThzUjBGQlJ5eERRVUZETzJGQlExbzdhVUpCUVUwN1owSkJRMHdzVDBGQlR5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkRhRUk3VTBGRFJqdExRVU5HT3pzN096czdPenM3T3pzN08wbEJUMDBzYVVOQlFVMDdPenM3T3pzN1NVRkJZaXhWUVVGakxFZEJRVEpDTEVWQlFVVXNhVUpCUVRCQ08xRkJRWEpGTEdsQ1FXbENRenRSUVdoQ1F5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNSVUZCUlR0WlFVTnNReXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETERSQ1FVRXdRaXhEUVVGRExFTkJRVU03VTBGRE4wTTdVVUZGUkN4UFFVRlBMRTFCUVUwc1EwRkRXQ3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlN4cFFrRkJhVUlzUTBGQlF5eEZRVU5vUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGRGNFSXNVMEZCVXl4RFFVRkRMRlZCUVVNc1MwRkJjMEk3TzJkQ1FVTjZRaXhIUVVGSExFZEJRVWNzUzBGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hGUVVGRkxFZEJRVWNzUlVGQlJTeHBRa0ZCYVVJc1EwRkJRenRaUVVNMVJTeEpRVUZKTEU5QlFVOHNSMEZCUnl4RFFVRkRMRk5CUVZNc1MwRkJTeXhWUVVGVkxFVkJRVVU3WjBKQlEzWkRMRTlCUVU4c1IwRkJSeXhEUVVGRE8yRkJRMW83YVVKQlFVMDdaMEpCUTB3c1QwRkJUeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdZVUZEYUVJN1UwRkRSaXhEUVVGRExFTkJRMGdzUTBGQlF5eERRVUZETzB0QlEwNDdPenM3T3pzN096czdPenRKUVUxTkxHdERRVUZQT3pzN096czdPMGxCUVdRc1ZVRkJaU3hIUVVFeVFpeEZRVUZGTEdsQ1FVRXdRanRSUVVOd1JTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNSVUZCUlR0WlFVTnNReXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETERSQ1FVRXdRaXhEUVVGRExFTkJRVU03VTBGRE4wTTdPMWxCUlVjc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMR2xDUVVGcFFpeERRVUZETzFGQlF6TkdMRWxCUVVrc1QwRkJUeXhIUVVGSExFTkJRVU1zVTBGQlV5eExRVUZMTEZkQlFWY3NSVUZCUlR0WlFVTjRReXhKUVVGSkxFZEJRVWNzV1VGQldTeExRVUZMTEVWQlFVVTdPMjlDUVVOd1FpeExRVUZITEVkQlFWRXNSVUZCUlR0blFrRkRha0lzUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRkRMRXRCUVdFc1JVRkJSU3hMUVVGaE8yOUNRVU4yUXl4TFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8ybENRVU01UWl4RFFVRkRMRU5CUVVNN1owSkJRMGdzVDBGQlR5eExRVUZITEVOQlFVTTdZVUZEV2p0WlFVTkVMRTlCUVU4c1IwRkJSeXhEUVVGRE8xTkJRMW83WVVGQlRUdFpRVU5NTEU5QlFVOHNSMEZCUnl4RFFVRkRPMU5CUTFvN1MwRkRSanM3T3pzN096czdPenM3U1VGTFRTdzRRa0ZCUnpzN096czdPenRKUVVGV0xGVkJRVmNzUjBGQlZ5eEZRVUZGTEV0QlFXRXNSVUZCUlN4SlFVRXJRanRSUVVFdlFpeHhRa0ZCUVN4RlFVRkJMRTlCUVdVc1NVRkJTU3hEUVVGRExGZEJRVmM3VVVGRGNFVXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRiRVVzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMUZCUTI1Q0xFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRmxCUVZrc1JVRkJSU3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkRMRU5CUVVNc1EwRkJRenRMUVVOd1JqczdPenM3T3pzN08wbEJTMDhzY1VOQlFWVTdPenM3TzBsQlFXeENMRlZCUVcxQ0xFbEJRVms3VVVGRE4wSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRGVFSXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRmxCUVZrc1JVRkJSU3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkRMRU5CUVVNc1EwRkJRenM3VVVGSE5VVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVU3V1VGRGNrSXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMU5CUXpsQ08wdEJRMFk3T3pzN096czdPenRKUVV0UExEUkRRVUZwUWpzN096czdTVUZCZWtJc1ZVRkJNRUlzU1VGQldUdFJRVU53UXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU40UWl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeFpRVUZaTEVWQlFVVXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlF5eERRVUZETEVOQlFVTTdTMEZEY0VZN096czdPenM3T3p0SlFVdE5MSEZEUVVGVk96czdPenRKUVVGcVFpeFZRVUZyUWl4SlFVRlpPMUZCUXpWQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRja0lzVDBGQlR5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wdEJRMnhET3pzN096czdPenM3U1VGTFRTeHZRMEZCVXpzN096czdTVUZCYUVJc1ZVRkJhVUlzU1VGQldUdFJRVU16UWl4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1UwRkJVeXhEUVVGRE8xRkJRelZETEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETzB0QlEzSkRPenM3T3pzN096dEpRVXROTEhsRFFVRmpPenM3TzBsQlFYSkNPMUZCUTBVc1NVRkJTU3hQUVVGUExFMUJRVTBzUzBGQlN5eFhRVUZYTEVsQlFVa3NUMEZCVHl4TlFVRk5MRU5CUVVNc1UwRkJVeXhMUVVGTExGZEJRVmNzUlVGQlJUdFpRVU0xUlN4UFFVRlBMRk5CUVZNc1EwRkJRenRUUVVOc1FqczdXVUZGUnl4WFFVRlhMRWRCUVZFc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eFRRVUZUTEVkQlFVY3NUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1R0UlFVTjRSaXhYUVVGWExFZEJRVWNzVjBGQlZ5eEpRVUZKTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hKUVVGSkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNaVUZCWlN4SlFVRkpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zV1VGQldTeERRVUZETzFGQlJUVklMRWxCUVVrc1YwRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSVHRaUVVOdVF5eFhRVUZYTEVkQlFVY3NWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTjZRenRSUVVWRUxFbEJRVWtzVjBGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJUdFpRVU51UXl4WFFVRlhMRWRCUVVjc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVONlF6dFJRVVZFTEU5QlFVOHNWMEZCVnl4RFFVRkRPMHRCUTNCQ096czdPenM3T3p0SlFVdE5MR2RFUVVGeFFqczdPenRKUVVFMVFqdFJRVU5GTEVsQlFVa3NUMEZCVHl4TlFVRk5MRXRCUVVzc1YwRkJWeXhKUVVGSkxFOUJRVThzVFVGQlRTeERRVUZETEZOQlFWTXNTMEZCU3l4WFFVRlhMRVZCUVVVN1dVRkROVVVzVDBGQlR5eFRRVUZUTEVOQlFVTTdVMEZEYkVJN08xbEJSVWNzYTBKQlFXdENMRWRCUVZFc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eFRRVUZUTEVkQlFVY3NUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1R0UlFVTXZSaXhyUWtGQmEwSXNSMEZCUnl4clFrRkJhMElzU1VGQlNTeE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1NVRkJTU3hOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEdWQlFXVXNTVUZCU1N4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGbEJRVmtzUTBGQlF6dFJRVVV4U1N4UFFVRlBMR3RDUVVGclFpeERRVUZETzB0QlF6TkNPenRuUWtGMlpVWXNWVUZCVlRzN096dG5Ra0V6UWtnc1kwRkJZenRuUWtGSVpDeGxRVUZsTzJkQ1FVUm1MR2xDUVVGcFFqdG5Ra0ZGYWtJc1pVRkJaVHRuUWtGSVppeDVRa0ZCZVVJN09FTkJjMHBzUWl4TlFVRk5MRk5CUVVNc1owSkJRV2RDT3poRFFVTjJRaXhOUVVGTkxGTkJRVU1zVTBGQlV6czdTVUZwV0M5Q0xIVkNRVUZETzBOQmVHVkVPenM3T3pzN1FVTnVRMEU3U1VFNFFrVXNORUpCUVc5Q0xHZENRVUZyUXl4RlFVRlZMRTlCUVcxQ0xFVkJRVlVzU1VGQmRVSTdVVUZCY0Vnc2FVSkJkVUpETzFGQmRrSnRRaXh4UWtGQlowSXNSMEZCYUVJc1owSkJRV2RDTEVOQlFXdENPMUZCUVZVc1dVRkJUeXhIUVVGUUxFOUJRVThzUTBGQldUdFJRVUZWTEZOQlFVa3NSMEZCU2l4SlFVRkpMRU5CUVcxQ096dFJRVVZzU0N4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExITkNRVUZ6UWl4RlFVRkZPMWxCUTJoRExFbEJRVWtzUTBGQlF5eHpRa0ZCYzBJc1IwRkJSeXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNVMEZCVXl4RFFVRkRMRlZCUVVNc1MwRkJOa0k3WjBKQlF6bEhMRWxCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzUzBGQlN5eExRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVjBGQlZ5eEZRVUZGTzI5Q1FVTndSQ3hMUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03YVVKQlF6TkRPMkZCUTBZc1EwRkJReXhEUVVGRE8xTkJRMG83TzFGQlIwUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhsUVVGbExFVkJRVVU3V1VGRGVrSXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1IwRkJSeXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1dVRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eFZRVUZETEV0QlFYTkNPMmRDUVVONlJpeExRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdZVUZETTBNc1EwRkJReXhEUVVGRE8xTkJRMG83TzFGQlIwUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXh6UWtGQmMwSXNSVUZCUlR0WlFVTm9ReXhKUVVGSkxFTkJRVU1zYzBKQlFYTkNMRWRCUVVjc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRzFDUVVGdFFpeERRVUZETEZOQlFWTXNRMEZCUXl4VlFVRkRMRXRCUVRaQ08yZENRVU01Unl4TFFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJGQlEzWkNMRU5CUVVNc1EwRkJRenRUUVVOS08wdEJRMFk3U1VGeVEwUXNjMEpCUVdFc2VVTkJRVk03T3pzN08xRkJRWFJDTEZWQlFYVkNMRWRCUVZjN1dVRkRhRU1zU1VGQlNTeEhRVUZITEVWQlFVVTdaMEpCUTFBc1NVRkJTU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTTdaMEpCUTJZc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETzJGQlEyNUNPMU5CUTBZN096dFBRVUZCTzBsQlJVUXNjMEpCUVdFc0swTkJRV1U3T3pzN08xRkJRVFZDTEZWQlFUWkNMRTFCUVZjN1dVRkRkRU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRkxFMUJRVTBzUTBGQlF5eEZRVUZGTzJkQ1FVTjJReXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEUxQlFVMHNRMEZCUXp0blFrRkROVUlzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRoUVVOMlFqdFRRVU5HT3pzN1QwRkJRVHM3T3p0SlFUSkNSQ3dyUTBGQmEwSTdPenRKUVVGc1FqdFJRVU5GTEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJRenRMUVVOdVFqczdPenM3TzBsQlJVUXNkVU5CUVZVN096czdPMGxCUVZZc1ZVRkJWeXhYUVVGdFFpeEZRVUZGTEZsQlFXdENPMUZCUVhaRExEUkNRVUZCTEVWQlFVRXNiVUpCUVcxQ096dFpRVU40UWl4TFFVRkxMRWRCUVdFc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eGhRVUZoTEVOQlFVTXNWVUZCVlRzN1VVRkZNMFFzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVN08xbEJSV3BDTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eGhRVUZoTEVWQlFVVXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRM1JFTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExHRkJRV0VzUTBGQlF5eFZRVUZWTEVOQlFVTTdVMEZETDBNN1VVRkRSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlRzN1owSkJRMnBETEVsQlFVa3NSMEZCVVN4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM2hDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1MwRkJTeXhEUVVGRExFVkJRVVU3T3p0dlFrRkRia0lzUjBGQlJ5eFRRVUZSTzJkQ1FVTm1MRWxCUVVrc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJUdHZRa0ZEV2l4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF6dHZRa0ZEWml4SlFVRkpMRmRCUVZjc1JVRkJSVHQzUWtGRFppeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJRenR4UWtGRGNrSTdhVUpCUTBZN2NVSkJRVTA3TzNkQ1FVTkVMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXpzN2QwSkJReTlDTEdOQlFXTXNSMEZCUnl4UFFVRlBMRU5CUVVNc1NVRkJTU3hGUVVGRk8yOUNRVU51UXl4SlFVRkpMR05CUVdNc1EwRkJReXhOUVVGTkxFVkJRVVU3TzNkQ1FVVjZRaXhKUVVGSkxFOUJRVThzUzBGQlN5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZPelJDUVVOcVF5eEhRVUZITEVkQlFVY3NZMEZCWXl4RFFVRkRPenMwUWtGRmNrSXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPM2xDUVVNNVF6czJRa0ZCVFN4SlFVRkpMRWxCUVVrc1EwRkJReXhsUVVGbExFbEJRVWtzVjBGQlZ5eEZRVUZGT3pSQ1FVTTVReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXpzN05FSkJSWEJDTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzNsQ1FVTnVRenR4UWtGRFJqdHBRa0ZEUmp0blFrRkRSQ3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVkQlFVY3NSVUZCUlN4SlFVRkpMRVZCUVVVc1dVRkJXU3hEUVVGRExFTkJRVU03WVVGRE0wTTdVMEZEUmp0TFFVTkdPenM3T3pzN08wbEJSVVFzZDBOQlFWYzdPenM3T3p0SlFVRllMRlZCUVZrc1IwRkJWeXhGUVVGRkxFbEJRVk1zUlVGQlJTeFpRVUZwUWp0UlFVRnlSQ3hwUWtGblEwTTdVVUV2UWtNc1NVRkJTU3hIUVVGSExFVkJRVVU3V1VGRFVDeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRXRCUVVzc1IwRkJSeXhKUVVGSkxFbEJRVWtzUTBGQlF5eFZRVUZWTEV0QlFVc3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1JVRkJSVHRuUWtGRGJFVXNUMEZCVHp0aFFVTlNPMWxCUlVRc1NVRkJTU3hEUVVGRExGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRPenRuUWtGRmFrTXNZVUZCWVN4SFFVRkhMRlZCUVVNc1IwRkJWenRuUWtGRE9VSXNTVUZCU1N4SFFVRkhMRXRCUVVzc1IwRkJSeXhGUVVGRk8yOUNRVU5tTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1IwRkJSeXhEUVVGRE8ybENRVU53UWp0blFrRkRSQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEdWQlFXVXNSVUZCUlR0dlFrRkRla0lzU1VGQlNTeERRVUZETEdWQlFXVXNSMEZCUnl4TFFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJsQ1FVTTVRenRuUWtGRFJDeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEVsQlFVa3NTVUZCU1N4RFFVRkRMR1ZCUVdVc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF6czdaMEpCUlhwRkxFdEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVWQlFVVXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlF6TkhMRXRCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTTdZVUZETVVJN1dVRkZSQ3hKUVVGSkxGTkJRVk1zUTBGQlF5eFpRVUZaTEVOQlFVTXNSVUZCUlRzN2IwSkJRM1pDTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNaVUZCWlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hIUVVGSExFVkJRVVVzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXp0blFrRkRkRVlzU1VGQlNTeFBRVUZQTEVkQlFVY3NRMEZCUXl4VFFVRlRMRXRCUVVzc1ZVRkJWU3hGUVVGRk8yOUNRVU4yUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzJsQ1FVTTVRanR4UWtGQlRUdHZRa0ZEVEN4aFFVRmhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03YVVKQlEzQkNPMkZCUTBZN2FVSkJRVTA3WjBKQlEwd3NTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRVZCUVVVc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJRenRoUVVNM1JUdFRRVU5HTzB0QlEwWTdPenM3TzBsQlJVUXNkVU5CUVZVN096czdTVUZCVml4VlFVRlhMRWxCUVZNN1VVRkRiRUlzVDBGQlR5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJRenRMUVVOdVJUczdPenM3TzBsQlJVUXNkVU5CUVZVN096czdPMGxCUVZZc1ZVRkJWeXhKUVVGVExFVkJRVVVzVDBGQlpUdFJRVU51UXl4SlFVRkpMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVTdXVUZETDBJc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eFBRVUZQTEVOQlFVTTdVMEZETlVJN1lVRkJUVHRaUVVOTUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NUMEZCVHl4RFFVRkRPMU5CUTNKQ08wdEJRMFk3T3pzN1NVRkZSQ3gzUTBGQlZ6czdPMGxCUVZnN1VVRkRSU3hKUVVGSkxFbEJRVWtzUTBGQlF5eGxRVUZsTEVWQlFVVTdXVUZEZUVJc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0VFFVTndRenRSUVVWRUxFbEJRVWtzU1VGQlNTeERRVUZETEhOQ1FVRnpRaXhGUVVGRk8xbEJReTlDTEVsQlFVa3NRMEZCUXl4elFrRkJjMElzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0VFFVTXpRenRSUVVWRUxFbEJRVWtzU1VGQlNTeERRVUZETEhOQ1FVRnpRaXhGUVVGRk8xbEJReTlDTEVsQlFVa3NRMEZCUXl4elFrRkJjMElzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0VFFVTXpRenRMUVVOR096dG5Ra0YwU2tZc1UwRkJVeXhUUVVGRE8yOUNRVU5VTEZGQlFWRXNSVUZCUlN3MlFrRkJOa0k3YVVKQlEzaERPenM3TzJkQ1FVeG5SQ3huUWtGQlowSTdaMEpCUmxRc1ZVRkJWVHRuUWtGQmVFTXNhVUpCUVdsQ096czdORUpCWjBKNFF5eExRVUZMTzJ0RFFVOU1MRXRCUVVzN08wbEJjVWxTTEhsQ1FVRkRPME5CZGtwRU96czdPenM3UVVOTVFUdEpRV2xDUlN4MVFrRkJiMElzVTBGQk1rSXNSVUZCVlN4SlFVRjFRanRSUVVFMVJDeGpRVUZUTEVkQlFWUXNVMEZCVXl4RFFVRnJRanRSUVVGVkxGTkJRVWtzUjBGQlNpeEpRVUZKTEVOQlFXMUNPMUZCVUdoR0xGVkJRVXNzUjBGQlZ5eEZRVUZGTEVOQlFVTTdTMEZSYkVJN096czdPenM3U1VGRlJDeHRRMEZCVnpzN096czdPMGxCUVZnc1ZVRkJXU3hIUVVGWExFVkJRVVVzYVVKQlFUQkNMRVZCUVVVc1dVRkJhMEk3VVVGQmRrVXNhVUpCWlVNN08xbEJaRXNzWVVGQllTeEhRVUZITEZWQlFVTXNSMEZCVnp0WlFVTTVRaXhMUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVkQlFVY3NTMEZCU3l4VFFVRlRMRWRCUVVjc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF6dFpRVU16UXl4TFFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFZEJRVWNzUTBGQlF6dFpRVU51UWl4TFFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETzFOQlF6RkNPMUZCUTBRc1NVRkJTU3haUVVGWkxFVkJRVVU3TzJkQ1FVTmFMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEdWQlFXVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1IwRkJSeXhGUVVGRkxHbENRVUZwUWl4RFFVRkRPMWxCUXpsRkxFbEJRVWtzVDBGQlR5eEhRVUZITEVOQlFVTXNVMEZCVXl4TFFVRkxMRlZCUVZVc1JVRkJSVHRuUWtGRGRrTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dGhRVU01UWp0cFFrRkJUVHRuUWtGRFRDeGhRVUZoTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkRjRUk3VTBGRFJqdFJRVU5FTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUlVGQlJTeHBRa0ZCYVVJc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXp0TFFVTnlSVHM3T3pzN08wbEJSVVFzYVVOQlFWTTdPenM3TzBsQlFWUXNWVUZCVlN4TFFVRmhPMUZCUVhaQ0xHbENRWFZGUXp0UlFYWkZkMElzWTBGQll6dGhRVUZrTEZWQlFXTXNSVUZCWkN4eFFrRkJZeXhGUVVGa0xFbEJRV003V1VGQlpDdzJRa0ZCWXpzN1VVRkRja01zU1VGQlNTeERRVUZETEV0QlFVc3NTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU5vUXl4UFFVRlBMRXRCUVVzc1EwRkJRenRUUVVOa096dFJRVWRFTEVsQlFVa3NUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVWQlFVVTdXVUZEYUVVc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzFOQlEyNUNPenRaUVVWSExHbENRVUY1UWp0UlFVTTNRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzFsQlEzSkRMRWxCUVVrc1QwRkJUeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NVVUZCVVN4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVTdPenM3YjBKQlJ6ZERMRk5CUVZNc1IwRkJWeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzNGQ1FVTTFRaXhQUVVGUExFTkJRVU1zYTBOQlFXdERMRVZCUVVVc1QwRkJUeXhEUVVGRE8zRkNRVU53UkN4UFFVRlBMRU5CUVVNc2MwSkJRWE5DTEVWQlFVVXNUMEZCVHl4RFFVRkRPMmRDUVVNelF5eEpRVUZKTzI5Q1FVTkdMR2xDUVVGcFFpeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03YVVKQlF6TkRPMmRDUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTzI5Q1FVTldMRTFCUVUwc1NVRkJTU3hYUVVGWExFTkJRVU1zTUVWQlFYZEZMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVWNzUTBGQlF5eERRVUZETzJsQ1FVTXhSenRoUVVOR08ybENRVUZOTEVsQlFVa3NUMEZCVHl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVVVGQlVTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlR0blFrRkRha1VzYVVKQlFXbENMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlF6ZENPMU5CUTBZN08xRkJSMFFzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TFFVRkxMRU5CUVVNN08xRkJSM0pDTEVsQlFVa3NRMEZCUXl4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRE96dFJRVWQyUWl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFdEJRVXNzUlVGQlJTeHBRa0ZCYVVJc1EwRkJReXhEUVVGRE96dFJRVWN6UXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03TzFGQlIyaENMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRVZCUVVVN1dVRkROMElzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zVTBGQlV5eERRVUZETEZWQlFVTXNTMEZCTmtJN1owSkJRM0JITEVsQlFVa3NTMEZCU1N4RFFVRkRMRTlCUVU4c1NVRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeExRVUZMTEV0QlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1YwRkJWeXhGUVVGRk8yOUNRVU0zUkN4TFFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF6dHZRa0ZEY0VJc1MwRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eExRVUZMTEVWQlFVVXNhVUpCUVdsQ0xFVkJRVVVzUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMmxDUVVOb1JUdGhRVU5HTEVOQlFVTXNRMEZCUXp0VFFVTktPenRSUVVkRUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZPMWxCUTNSQ0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhaUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEZWQlFVTXNTMEZCYzBJN1owSkJReTlGTEVsQlFVa3NTMEZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHR2UWtGRGFFSXNTMEZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU03YjBKQlEzQkNMRXRCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUzBGQlN5eEZRVUZGTEdsQ1FVRnBRaXhGUVVGRkxFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0cFFrRkRhRVU3WVVGRFJpeERRVUZETEVOQlFVTTdVMEZEU2pzN1VVRkhSQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhGUVVGRk8xbEJRemRDTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRzFDUVVGdFFpeERRVUZETEZOQlFWTXNRMEZCUXp0blFrRkRkRVVzU1VGQlNTeExRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMjlDUVVOb1FpeExRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJRenR2UWtGRGNFSXNTMEZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhMUVVGTExFVkJRVVVzYVVKQlFXbENMRU5CUVVNc1EwRkJRenRwUWtGRE5VTTdZVUZEUml4RFFVRkRMRU5CUVVNN1UwRkRTanRSUVVWRUxFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0TFFVTnVRanM3T3pzN096czdTVUZMVHl4blEwRkJVVHM3T3p0SlFVRm9RanRSUVVORkxFbEJRVWtzVDBGQlR5eEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFdEJRVXNzVjBGQlZ5eEZRVUZGTzFsQlEyNUVMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRaUVVOMlF5eEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFZEJRVWNzVTBGQlV5eERRVUZETzFOQlEzUkRPMUZCUTBRc1NVRkJTU3hQUVVGUExFbEJRVWtzUTBGQlF5eFpRVUZaTEV0QlFVc3NWMEZCVnl4RlFVRkZPMWxCUXpWRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1dVRkRhRU1zU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4VFFVRlRMRU5CUVVNN1UwRkRMMEk3VVVGRFJDeEpRVUZKTEU5QlFVOHNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeExRVUZMTEZkQlFWY3NSVUZCUlR0WlFVTnVSQ3hKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03V1VGRGRrTXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeEhRVUZITEZOQlFWTXNRMEZCUXp0VFFVTjBRenRMUVVOR096czdPMGxCUlVRc2JVTkJRVmM3T3p0SlFVRllPMUZCUTBVc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzB0QlEycENPenRuUWtFNVNFWXNWVUZCVlR0blFrRkRWaXhKUVVGSkxGTkJRVU03YjBKQlEwb3NTVUZCU1N4RlFVRkZMRmRCUVZjN2IwSkJRMnBDTEVsQlFVa3NSVUZCUlN4TFFVRkxPMmxDUVVOYU96czdPMmRDUVZCblJDeG5Ra0ZCWjBJN1owSkJSSHBFTEdsQ1FVRnBRanM3U1VGdFNYcENMRzlDUVVGRE8wTkJMMGhFT3pzN096czdRVU5LUVR0SlFTdENRVHRMUVN0RFF6czdPenM3T3pzN08wbEJha05STEhWQ1FVRlBPenM3T3p0SlFVRmtMRlZCUVdVc1RVRkJhME03VVVGQmJFTXNkVUpCUVVFc1JVRkJRU3hYUVVGclF6dFJRVU12UXl4UFFVRlBPMWxCUTB3c1VVRkJVU3hGUVVGRkxHVkJRV1U3V1VGRGVrSXNVMEZCVXl4RlFVRkZPMmRDUVVOVUxFMUJRVTBzUTBGQlF5eE5RVUZOTEVsQlFVa3NSVUZCUXl4UFFVRlBMRVZCUVVVc1pVRkJaU3hGUVVGRkxGRkJRVkVzUlVGQlJTeHRRa0ZCYlVJc1JVRkJRenRuUWtGRE1VVXNUVUZCVFN4RFFVRkRMRkZCUVZFc1NVRkJTU3hGUVVGRExFOUJRVThzUlVGQlJTeHBRa0ZCYVVJc1JVRkJSU3hSUVVGUkxFVkJRVVVzY1VKQlFYRkNMRVZCUVVNN1owSkJRMmhHTEUxQlFVMHNRMEZCUXl4TlFVRk5MRWxCUVVrc1JVRkJReXhQUVVGUExFVkJRVVVzWlVGQlpTeEZRVUZGTEZGQlFWRXNSVUZCUlN4elFrRkJjMElzUlVGQlF6dG5Ra0ZETjBVc1RVRkJUU3hEUVVGRExIbENRVUY1UWl4SlFVRkpMRVZCUVVNc1QwRkJUeXhGUVVGRkxIbENRVUY1UWl4RlFVRkZMRkZCUVZFc1JVRkJSU3cyUWtGQk5rSXNSVUZCUXp0blFrRkRha2dzWTBGQll6dG5Ra0ZEWkN4RlFVRkRMRTlCUVU4c1JVRkJSU3hUUVVGVExFVkJRVVVzVVVGQlVTeEZRVUZGTEUxQlFVMHNRMEZCUXl4UFFVRlBMRVZCUVVNN1owSkJRemxETEVWQlFVTXNUMEZCVHl4RlFVRkZMR2RDUVVGblFpeEZRVUZGTEZGQlFWRXNSVUZCUlN4TlFVRk5MRU5CUVVNc1kwRkJZeXhGUVVGRE8yZENRVU0xUkN4blFrRkJaMEk3WVVGRGFrSTdVMEZEUml4RFFVRkRPMHRCUTBnN096czdPenM3T3p0SlFVdE5MSGRDUVVGUk96czdPenRKUVVGbUxGVkJRV2RDTEUxQlFXdERPMUZCUVd4RExIVkNRVUZCTEVWQlFVRXNWMEZCYTBNN1VVRkRhRVFzVDBGQlR6dFpRVU5NTEZGQlFWRXNSVUZCUlN4bFFVRmxPMWxCUTNwQ0xGTkJRVk1zUlVGQlJUdG5Ra0ZEVkN4TlFVRk5MRU5CUVVNc1RVRkJUU3hKUVVGSkxFVkJRVU1zVDBGQlR5eEZRVUZGTEdWQlFXVXNSVUZCUlN4UlFVRlJMRVZCUVVVc2JVSkJRVzFDTEVWQlFVTTdaMEpCUXpGRkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVsQlFVa3NSVUZCUXl4UFFVRlBMRVZCUVVVc2FVSkJRV2xDTEVWQlFVVXNVVUZCVVN4RlFVRkZMSEZDUVVGeFFpeEZRVUZETzJkQ1FVTm9SaXhOUVVGTkxFTkJRVU1zVFVGQlRTeEpRVUZKTEVWQlFVTXNUMEZCVHl4RlFVRkZMR1ZCUVdVc1JVRkJSU3hSUVVGUkxFVkJRVVVzYzBKQlFYTkNMRVZCUVVNN1owSkJRemRGTEUxQlFVMHNRMEZCUXl4NVFrRkJlVUlzU1VGQlNTeEZRVUZETEU5QlFVOHNSVUZCUlN4NVFrRkJlVUlzUlVGQlJTeFJRVUZSTEVWQlFVVXNOa0pCUVRaQ0xFVkJRVU03WjBKQlEycElMRVZCUVVNc1QwRkJUeXhGUVVGRkxGTkJRVk1zUlVGQlJTeFJRVUZSTEVWQlFVVXNUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJRenRuUWtGRE9VTXNSVUZCUXl4UFFVRlBMRVZCUVVVc1owSkJRV2RDTEVWQlFVVXNVVUZCVVN4RlFVRkZMRTFCUVUwc1EwRkJReXhqUVVGakxFVkJRVU03WjBKQlF6VkVMR2RDUVVGblFqdGhRVU5xUWp0VFFVTkdMRU5CUVVNN1MwRkRTRHM3WjBKQk9VTkdMRkZCUVZFc1UwRkJRenR2UWtGRFVpeFpRVUZaTEVWQlFVVTdkMEpCUTFvc1lVRkJZVHQzUWtGRFlpeHJRa0ZCYTBJN2NVSkJRMjVDTzI5Q1FVTkVMRTlCUVU4c1JVRkJSVHQzUWtGRFVDeGhRVUZoTzNkQ1FVTmlMR3RDUVVGclFqdHhRa0ZEYmtJN2FVSkJRMFk3TzBsQmMwTkVMSE5DUVVGRE8wTkJMME5FT3pzN096czdPenM3SW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIERpc21pc3NSZWFzb25zO1xuKGZ1bmN0aW9uIChEaXNtaXNzUmVhc29ucykge1xuICAgIERpc21pc3NSZWFzb25zW1wiU1dJUEVcIl0gPSBcIlN3aXBlXCI7XG4gICAgRGlzbWlzc1JlYXNvbnNbXCJBQ1RJT05cIl0gPSBcIkFjdGlvblwiO1xuICAgIERpc21pc3NSZWFzb25zW1wiVElNRU9VVFwiXSA9IFwiVGltZW91dFwiO1xuICAgIERpc21pc3NSZWFzb25zW1wiTUFOVUFMXCJdID0gXCJNYW51YWxcIjtcbiAgICBEaXNtaXNzUmVhc29uc1tcIkNPTlNFQ1VUSVZFXCJdID0gXCJDb25zZWN1dGl2ZVwiO1xuICAgIERpc21pc3NSZWFzb25zW1wiVU5LTk9XTlwiXSA9IFwiVW5rbm93blwiO1xufSkoRGlzbWlzc1JlYXNvbnMgPSBleHBvcnRzLkRpc21pc3NSZWFzb25zIHx8IChleHBvcnRzLkRpc21pc3NSZWFzb25zID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNuYWNrYmFyLmNvbW1vbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgc25hY2tiYXJfY29tbW9uXzEgPSByZXF1aXJlKFwiLi9zbmFja2Jhci5jb21tb25cIik7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zbmFja2Jhci5jb21tb25cIikpO1xudmFyIFNuYWNrQmFyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTbmFja0JhcigpIHtcbiAgICAgICAgdGhpcy5fc25hY2tiYXIgPSBudWxsO1xuICAgICAgICB0aGlzLl9pc0Rpc21pc3NlZE1hbnVhbCA9IGZhbHNlO1xuICAgIH1cbiAgICBTbmFja0Jhci5wcm90b3R5cGUuc2ltcGxlID0gZnVuY3Rpb24gKHNuYWNrVGV4dCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHRpbWVvdXQgPSAzO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fc25hY2tiYXIgPSBTU1NuYWNrYmFyLnNuYWNrYmFyV2l0aE1lc3NhZ2VBY3Rpb25UZXh0RHVyYXRpb25BY3Rpb25CbG9ja0Rpc21pc3NhbEJsb2NrKHNuYWNrVGV4dCwgbnVsbCwgdGltZW91dCwgZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX3NuYWNrYmFyLmRpc21pc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiAnRGlzbWlzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFzb246IHNuYWNrYmFyX2NvbW1vbl8xLkRpc21pc3NSZWFzb25zLk1BTlVBTCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBhcmdzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogJ0Rpc21pc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhc29uOiBzbmFja2Jhcl9jb21tb25fMS5EaXNtaXNzUmVhc29ucy5USU1FT1VULFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGFyZ3NcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3NuYWNrYmFyLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIHJlamVjdChleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU25hY2tCYXIucHJvdG90eXBlLmFjdGlvbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5oaWRlRGVsYXkpXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuaGlkZURlbGF5ID0gMzAwMDtcbiAgICAgICAgICAgICAgICBfdGhpcy5fc25hY2tiYXIgPSBTU1NuYWNrYmFyLnNuYWNrYmFyV2l0aE1lc3NhZ2VBY3Rpb25UZXh0RHVyYXRpb25BY3Rpb25CbG9ja0Rpc21pc3NhbEJsb2NrKG9wdGlvbnMuc25hY2tUZXh0LCBvcHRpb25zLmFjdGlvblRleHQsIG9wdGlvbnMuaGlkZURlbGF5IC8gMTAwMCwgZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiAnQWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBhcmdzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSBfdGhpcy5faXNEaXNtaXNzZWRNYW51YWxcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc25hY2tiYXJfY29tbW9uXzEuRGlzbWlzc1JlYXNvbnMuTUFOVUFMXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHNuYWNrYmFyX2NvbW1vbl8xLkRpc21pc3NSZWFzb25zLlRJTUVPVVQ7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9pc0Rpc21pc3NlZE1hbnVhbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdEaXNtaXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYXNvbjogcmVhc29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGFyZ3NcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3NuYWNrYmFyLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIHJlamVjdChleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU25hY2tCYXIucHJvdG90eXBlLmRpc21pc3MgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLl9zbmFja2JhciAhPT0gbnVsbCAmJiBfdGhpcy5fc25hY2tiYXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2lzRGlzbWlzc2VkTWFudWFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX3NuYWNrYmFyLmRpc21pc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdEaXNtaXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFzb246IHNuYWNrYmFyX2NvbW1vbl8xLkRpc21pc3NSZWFzb25zLk1BTlVBTFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdOb25lJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ05vIGFjdGlvbmJhciB0byBkaXNtaXNzJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBTbmFja0Jhcjtcbn0oKSk7XG5leHBvcnRzLlNuYWNrQmFyID0gU25hY2tCYXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zbmFja2Jhci5pb3MuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaG90ID0gcmVxdWlyZShcIi4uL2hvdFwiKTtcbmNvbnN0IGZpbGVfc3lzdGVtXzEgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiKTtcbmZ1bmN0aW9uIGhtclVwZGF0ZSgpIHtcbiAgICBjb25zdCBhcHBsaWNhdGlvbkZpbGVzID0gZmlsZV9zeXN0ZW1fMS5rbm93bkZvbGRlcnMuY3VycmVudEFwcCgpO1xuICAgIGNvbnN0IGxhdGVzdEhhc2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fW1wiaFwiXSgpO1xuICAgIHJldHVybiBob3QobGF0ZXN0SGFzaCwgZmlsZW5hbWUgPT4gYXBwbGljYXRpb25GaWxlcy5nZXRGaWxlKGZpbGVuYW1lKSk7XG59XG5leHBvcnRzLmhtclVwZGF0ZSA9IGhtclVwZGF0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhtci11cGRhdGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaG1yX3VwZGF0ZV8xID0gcmVxdWlyZShcIi4vaG1yLXVwZGF0ZVwiKTtcbmV4cG9ydHMuaG1yVXBkYXRlID0gaG1yX3VwZGF0ZV8xLmhtclVwZGF0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImNvbnN0IGhtclByZWZpeCA9ICdITVI6JztcbmNvbnN0IGxvZyA9IHtcbiAgICBpbmZvOiAobWVzc2FnZSkgPT4gY29uc29sZS5pbmZvKGAke2htclByZWZpeH0gJHttZXNzYWdlfWApLFxuICAgIHdhcm46IChtZXNzYWdlKSA9PiBjb25zb2xlLndhcm4oYCR7aG1yUHJlZml4fSAke21lc3NhZ2V9YCksXG4gICAgZXJyb3I6IChtZXNzYWdlKSA9PiBjb25zb2xlLmVycm9yKGAke2htclByZWZpeH0gJHttZXNzYWdlfWApLFxufTtcbmNvbnN0IHJlZnJlc2ggPSAnQXBwbGljYXRpb24gbmVlZHMgdG8gYmUgcmVzdGFydGVkIGluIG9yZGVyIHRvIGFwcGx5IHRoZSBjaGFuZ2VzLic7XG5jb25zdCBob3RPcHRpb25zID0ge1xuICAgIGlnbm9yZVVuYWNjZXB0ZWQ6IGZhbHNlLFxuICAgIGlnbm9yZURlY2xpbmVkOiBmYWxzZSxcbiAgICBpZ25vcmVFcnJvcmVkOiBmYWxzZSxcbiAgICBvblVuYWNjZXB0ZWQoZGF0YSkge1xuICAgICAgICBjb25zdCBjaGFpbiA9IFtdLmNvbmNhdChkYXRhLmNoYWluKTtcbiAgICAgICAgY29uc3QgbGFzdCA9IGNoYWluW2NoYWluLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGlmIChsYXN0ID09PSAwKSB7XG4gICAgICAgICAgICBjaGFpbi5wb3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvZy53YXJuKGBJZ25vcmVkIGFuIHVwZGF0ZSB0byB1bmFjY2VwdGVkIG1vZHVsZTogYCk7XG4gICAgICAgIGNoYWluLmZvckVhY2gobW9kID0+IGxvZy53YXJuKGAgICAgICAgICDinq0gJHttb2R9YCkpO1xuICAgIH0sXG4gICAgb25EZWNsaW5lZChkYXRhKSB7XG4gICAgICAgIGxvZy53YXJuKGBJZ25vcmVkIGFuIHVwZGF0ZSB0byBkZWNsaW5lZCBtb2R1bGU6YCk7XG4gICAgICAgIGRhdGEuY2hhaW4uZm9yRWFjaChtb2QgPT4gbG9nLndhcm4oYCAgICAgICAgIOKerSAke21vZH1gKSk7XG4gICAgfSxcbiAgICBvbkVycm9yZWQoZGF0YSkge1xuICAgICAgICBsb2cud2FybihcbiAgICAgICAgICAgIGBJZ25vcmVkIGFuIGVycm9yIHdoaWxlIHVwZGF0aW5nIG1vZHVsZSAke2RhdGEubW9kdWxlSWR9IDwke2RhdGEudHlwZX0+YFxuICAgICAgICApO1xuICAgICAgICBsb2cud2FybihkYXRhLmVycm9yKTtcbiAgICB9LFxufTtcblxubGV0IG5leHRIYXNoO1xubGV0IGN1cnJlbnRIYXNoO1xuXG5mdW5jdGlvbiB1cFRvRGF0ZSgpIHtcbiAgICByZXR1cm4gbmV4dEhhc2guaW5kZXhPZihfX3dlYnBhY2tfaGFzaF9fKSA+PSAwO1xufVxuXG5mdW5jdGlvbiByZXN1bHQobW9kdWxlcywgYXBwbGllZE1vZHVsZXMpIHtcbiAgICBjb25zdCB1bmFjY2VwdGVkID0gbW9kdWxlcy5maWx0ZXIoXG4gICAgICAgIChtb2R1bGVJZCkgPT4gYXBwbGllZE1vZHVsZXMgJiYgYXBwbGllZE1vZHVsZXMuaW5kZXhPZihtb2R1bGVJZCkgPCAwXG4gICAgKTtcblxuICAgIGlmICh1bmFjY2VwdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbG9nLndhcm4oJ1RoZSBmb2xsb3dpbmcgbW9kdWxlcyBjb3VsZCBub3QgYmUgdXBkYXRlZDonKTtcblxuICAgICAgICBmb3IgKGNvbnN0IG1vZHVsZUlkIG9mIHVuYWNjZXB0ZWQpIHtcbiAgICAgICAgICAgIGxvZy53YXJuKGAgICAgICAgICAg4qa7ICR7bW9kdWxlSWR9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShhcHBsaWVkTW9kdWxlcyB8fCBbXSkubGVuZ3RoKSB7XG4gICAgICAgIGxvZy5pbmZvKCdObyBNb2R1bGVzIFVwZGF0ZWQuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbG9nLmluZm8oJ1RoZSBmb2xsb3dpbmcgbW9kdWxlcyB3ZXJlIHVwZGF0ZWQ6Jyk7XG5cbiAgICAgICAgZm9yIChjb25zdCBtb2R1bGVJZCBvZiBhcHBsaWVkTW9kdWxlcykge1xuICAgICAgICAgICAgbG9nLmluZm8oYCAgICAgICAgIOKGuyAke21vZHVsZUlkfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbnVtYmVySWRzID0gYXBwbGllZE1vZHVsZXMuZXZlcnkoXG4gICAgICAgICAgICAobW9kdWxlSWQpID0+IHR5cGVvZiBtb2R1bGVJZCA9PT0gJ251bWJlcidcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKG51bWJlcklkcykge1xuICAgICAgICAgICAgbG9nLmluZm8oXG4gICAgICAgICAgICAgICAgJ1BsZWFzZSBjb25zaWRlciB1c2luZyB0aGUgTmFtZWRNb2R1bGVzUGx1Z2luIGZvciBtb2R1bGUgbmFtZXMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hlY2sob3B0aW9ucykge1xuICAgIHJldHVybiBtb2R1bGUuaG90XG4gICAgICAgIC5jaGVjaygpXG4gICAgICAgIC50aGVuKChtb2R1bGVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW1vZHVsZXMpIHtcbiAgICAgICAgICAgICAgICBsb2cud2FybihcbiAgICAgICAgICAgICAgICAgICAgYENhbm5vdCBmaW5kIHVwZGF0ZS4gJHtyZWZyZXNofWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbW9kdWxlLmhvdFxuICAgICAgICAgICAgICAgIC5hcHBseShob3RPcHRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKChhcHBsaWVkTW9kdWxlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dENoZWNrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXVwVG9EYXRlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRDaGVjayA9IGNoZWNrKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0KG1vZHVsZXMsIGFwcGxpZWRNb2R1bGVzKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodXBUb0RhdGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG8gbm90IG1vZGlmeSBtZXNzYWdlIC0gQ0xJIGRlcGVuZHMgb24gdGhpcyBleGFjdCBjb250ZW50IHRvIGRldGVybWluZSBobXIgb3BlcmF0aW9uIHN0YXR1cy5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5pbmZvKGBTdWNjZXNzZnVsbHkgYXBwbGllZCB1cGRhdGUgd2l0aCBobXIgaGFzaCAke2N1cnJlbnRIYXNofS4gQXBwIGlzIHVwIHRvIGRhdGUuYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dENoZWNrIHx8IG51bGw7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBtb2R1bGUuaG90LnN0YXR1cygpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoWydhYm9ydCcsICdmYWlsJ10uaW5kZXhPZihzdGF0dXMpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvIG5vdCBtb2RpZnkgbWVzc2FnZSAtIENMSSBkZXBlbmRzIG9uIHRoaXMgZXhhY3QgY29udGVudCB0byBkZXRlcm1pbmUgaG1yIG9wZXJhdGlvbiBzdGF0dXMuXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoYENhbm5vdCBhcHBseSB1cGRhdGUgd2l0aCBobXIgaGFzaCAke2N1cnJlbnRIYXNofS5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIuc3RhY2spO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKGBVcGRhdGUgZmFpbGVkOiAke2Vyci5tZXNzYWdlIHx8IGVyci5zdGFja31gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gbW9kdWxlLmhvdC5zdGF0dXMoKTtcbiAgICAgICAgICAgIGlmIChbJ2Fib3J0JywgJ2ZhaWwnXS5pbmRleE9mKHN0YXR1cykgPj0gMCkge1xuICAgICAgICAgICAgICAgIGxvZy5lcnJvcihgQ2Fubm90IGNoZWNrIGZvciB1cGRhdGUuICR7cmVmcmVzaH1gKTtcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyLnN0YWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9nLmVycm9yKGBVcGRhdGUgY2hlY2sgZmFpbGVkOiAke2Vyci5tZXNzYWdlIHx8IGVyci5zdGFja31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59XG5cbmlmIChtb2R1bGUuaG90KSB7XG4gICAgbG9nLmluZm8oJ0hvdCBNb2R1bGUgUmVwbGFjZW1lbnQgRW5hYmxlZC4gV2FpdGluZyBmb3Igc2lnbmFsLicpO1xufSBlbHNlIHtcbiAgICBsb2cuZXJyb3IoJ0hvdCBNb2R1bGUgUmVwbGFjZW1lbnQgaXMgZGlzYWJsZWQuJyk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZShsYXRlc3RIYXNoLCBvcHRpb25zKSB7XG4gICAgbmV4dEhhc2ggPSBsYXRlc3RIYXNoO1xuICAgIGlmICghdXBUb0RhdGUoKSkge1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBtb2R1bGUuaG90LnN0YXR1cygpO1xuXG4gICAgICAgIGlmIChzdGF0dXMgPT09ICdpZGxlJykge1xuICAgICAgICAgICAgLy9EbyBub3QgbW9kaWZ5IG1lc3NhZ2UgLSBDTEkgZGVwZW5kcyBvbiB0aGlzIGV4YWN0IGNvbnRlbnQgdG8gZGV0ZXJtaW5lIGhtciBvcGVyYXRpb24gc3RhdHVzLlxuICAgICAgICAgICAgbG9nLmluZm8oYENoZWNraW5nIGZvciB1cGRhdGVzIHRvIHRoZSBidW5kbGUgd2l0aCBobXIgaGFzaCAke2N1cnJlbnRIYXNofS5gKTtcbiAgICAgICAgICAgIHJldHVybiBjaGVjayhvcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIGlmIChbJ2Fib3J0JywgJ2ZhaWwnXS5pbmRleE9mKHN0YXR1cykgPj0gMCkge1xuICAgICAgICAgICAgbG9nLndhcm4oXG4gICAgICAgICAgICAgICAgYENhbm5vdCBhcHBseSB1cGRhdGUuIEEgcHJldmlvdXMgdXBkYXRlICR7c3RhdHVzfWVkLiAke3JlZnJlc2h9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGdldE5leHRIYXNoKGhhc2gsIGdldEZpbGVDb250ZW50KSB7XG4gICAgY29uc3QgZmlsZSA9IGdldEZpbGVDb250ZW50KGAke2hhc2h9LmhvdC11cGRhdGUuanNvbmApO1xuICAgIHJldHVybiBmaWxlLnJlYWRUZXh0KCkudGhlbihob3RVcGRhdGVDb250ZW50ID0+IHtcbiAgICAgICAgaWYgKGhvdFVwZGF0ZUNvbnRlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hbmlmZXN0ID0gSlNPTi5wYXJzZShob3RVcGRhdGVDb250ZW50KTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0hhc2ggPSBtYW5pZmVzdC5oO1xuICAgICAgICAgICAgcmV0dXJuIGdldE5leHRIYXNoKG5ld0hhc2gsIGdldEZpbGVDb250ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaGFzaCk7XG4gICAgICAgIH1cbiAgICB9KS5jYXRjaChlcnJvciA9PiBQcm9taXNlLnJlamVjdChlcnJvcikpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNoZWNrU3RhdGUoaW5pdGlhbEhhc2gsIGdldEZpbGVDb250ZW50KSB7XG4gICAgY3VycmVudEhhc2ggPSBpbml0aWFsSGFzaDtcbiAgICByZXR1cm4gZ2V0TmV4dEhhc2goaW5pdGlhbEhhc2gsIGdldEZpbGVDb250ZW50KS50aGVuKG5leHRIYXNoID0+IHtcbiAgICAgICAgaWYgKG5leHRIYXNoICE9IGluaXRpYWxIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlKG5leHRIYXNoLCB7fSk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuIiwiY29uc3QgbG9hZENzcyA9IHJlcXVpcmUoXCIuL2xvYWQtYXBwbGljYXRpb24tY3NzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgIGxvYWRDc3MoZnVuY3Rpb24oKSB7XG4gICAgICAgIGdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIi4vYXBwLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwifi9hcHBcIikpO1xuICAgIH0pO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobG9hZE1vZHVsZUZuKSB7XG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgbG9hZE1vZHVsZUZuKCk7XG5cbiAgICBhcHBsaWNhdGlvbi5sb2FkQXBwQ3NzKCk7XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwic291cmNlUm9vdCI6IiJ9