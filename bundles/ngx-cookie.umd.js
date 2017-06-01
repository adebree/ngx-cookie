(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ngx-cookie"] = factory(require("@angular/core"), require("@angular/common"));
	else
		root["ngx-cookie"] = factory(root["@angular/core"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COOKIE_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CookieOptionsProvider; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var COOKIE_OPTIONS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('COOKIE_OPTIONS');
/** @private */
var CookieOptionsProvider = (function () {
    function CookieOptionsProvider(options, _injector) {
        if (options === void 0) { options = {}; }
        this._injector = _injector;
        this.defaultOptions = {
            path: this._injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_common__["APP_BASE_HREF"], '/'),
            domain: null,
            expires: null,
            secure: false
        };
        this._options = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* mergeOptions */])(this.defaultOptions, options);
    }
    Object.defineProperty(CookieOptionsProvider.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    return CookieOptionsProvider;
}());
CookieOptionsProvider = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(COOKIE_OPTIONS)),
    __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
], CookieOptionsProvider);



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cookie_options_provider__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CookieService = (function () {
    function CookieService(_optionsProvider) {
        this._optionsProvider = _optionsProvider;
        this.options = this._optionsProvider.options;
    }
    Object.defineProperty(CookieService.prototype, "cookieString", {
        get: function () {
            return document.cookie || '';
        },
        set: function (val) {
            document.cookie = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name CookieService#get
     *
     * @description
     * Returns the value of given cookie key.
     *
     * @param {string} key Id to use for lookup.
     * @returns {string} Raw cookie value.
     */
    CookieService.prototype.get = function (key) {
        return this._cookieReader()[key];
    };
    /**
     * @name CookieService#getObject
     *
     * @description
     * Returns the deserialized value of given cookie key.
     *
     * @param {string} key Id to use for lookup.
     * @returns {Object} Deserialized cookie value.
     */
    CookieService.prototype.getObject = function (key) {
        var value = this.get(key);
        return value ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["f" /* safeJsonParse */])(value) : value;
    };
    /**
     * @name CookieService#getAll
     *
     * @description
     * Returns a key value object with all the cookies.
     *
     * @returns {Object} All cookies
     */
    CookieService.prototype.getAll = function () {
        return this._cookieReader();
    };
    /**
     * @name CookieService#put
     *
     * @description
     * Sets a value for given cookie key.
     *
     * @param {string} key Id for the `value`.
     * @param {string} value Raw value to be stored.
     * @param {CookieOptions} options (Optional) Options object.
     */
    CookieService.prototype.put = function (key, value, options) {
        this._cookieWriter()(key, value, options);
    };
    /**
     * @name CookieService#putObject
     *
     * @description
     * Serializes and sets a value for given cookie key.
     *
     * @param {string} key Id for the `value`.
     * @param {Object} value Value to be stored.
     * @param {CookieOptions} options (Optional) Options object.
     */
    CookieService.prototype.putObject = function (key, value, options) {
        this.put(key, JSON.stringify(value), options);
    };
    /**
     * @name CookieService#remove
     *
     * @description
     * Remove given cookie.
     *
     * @param {string} key Id of the key-value pair to delete.
     * @param {CookieOptions} options (Optional) Options object.
     */
    CookieService.prototype.remove = function (key, options) {
        this._cookieWriter()(key, undefined, options);
    };
    /**
     * @name CookieService#removeAll
     *
     * @description
     * Remove all cookies.
     */
    CookieService.prototype.removeAll = function () {
        var _this = this;
        var cookies = this.getAll();
        Object.keys(cookies).forEach(function (key) {
            _this.remove(key);
        });
    };
    CookieService.prototype._cookieReader = function () {
        var lastCookies = {};
        var lastCookieString = '';
        var cookieArray, cookie, i, index, name;
        var currentCookieString = this.cookieString;
        if (currentCookieString !== lastCookieString) {
            lastCookieString = currentCookieString;
            cookieArray = lastCookieString.split('; ');
            lastCookies = {};
            for (i = 0; i < cookieArray.length; i++) {
                cookie = cookieArray[i];
                index = cookie.indexOf('=');
                if (index > 0) {
                    name = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* safeDecodeURIComponent */])(cookie.substring(0, index));
                    // the first value that is seen for a cookie is the most
                    // specific one.  values for the same cookie name that
                    // follow are for less specific paths.
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* isBlank */])(lastCookies[name])) {
                        lastCookies[name] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* safeDecodeURIComponent */])(cookie.substring(index + 1));
                    }
                }
            }
        }
        return lastCookies;
    };
    CookieService.prototype._cookieWriter = function () {
        var that = this;
        return function (name, value, options) {
            that.cookieString = that._buildCookieString(name, value, options);
        };
    };
    CookieService.prototype._buildCookieString = function (name, value, options) {
        var opts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* mergeOptions */])(this.options, options);
        var expires = opts.expires;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* isBlank */])(value)) {
            expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
            value = '';
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* isString */])(expires)) {
            expires = new Date(expires);
        }
        var str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        str += opts.path ? ';path=' + opts.path : '';
        str += opts.domain ? ';domain=' + opts.domain : '';
        str += expires ? ';expires=' + expires.toUTCString() : '';
        str += opts.secure ? ';secure' : '';
        // per http://www.ietf.org/rfc/rfc2109.txt browser must allow at minimum:
        // - 300 cookies
        // - 20 cookies per unique domain
        // - 4096 bytes per cookie
        var cookieLength = str.length + 1;
        if (cookieLength > 4096) {
            console.log("Cookie '" + name + "' possibly not set or overflowed because it was too \n      large (" + cookieLength + " > 4096 bytes)!");
        }
        return str;
    };
    return CookieService;
}());
CookieService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cookie_options_provider__["b" /* CookieOptionsProvider */]])
], CookieService);



/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isBlank;
/* harmony export (immutable) */ __webpack_exports__["b"] = isPresent;
/* harmony export (immutable) */ __webpack_exports__["c"] = isString;
/* harmony export (immutable) */ __webpack_exports__["d"] = mergeOptions;
/* harmony export (immutable) */ __webpack_exports__["e"] = safeDecodeURIComponent;
/* harmony export (immutable) */ __webpack_exports__["f"] = safeJsonParse;
function isBlank(obj) {
    return obj === undefined || obj === null;
}
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
function isString(obj) {
    return typeof obj === 'string';
}
function mergeOptions(oldOptions, newOptions) {
    if (!newOptions) {
        return oldOptions;
    }
    return {
        path: isPresent(newOptions.path) ? newOptions.path : oldOptions.path,
        domain: isPresent(newOptions.domain) ? newOptions.domain : oldOptions.domain,
        expires: isPresent(newOptions.expires) ? newOptions.expires : oldOptions.expires,
        secure: isPresent(newOptions.secure) ? newOptions.secure : oldOptions.secure,
    };
}
function safeDecodeURIComponent(str) {
    try {
        return decodeURIComponent(str);
    }
    catch (e) {
        return str;
    }
}
function safeJsonParse(str) {
    try {
        return JSON.parse(str);
    }
    catch (e) {
        return str;
    }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cookie_service__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = cookieServiceFactory;

function cookieServiceFactory(cookieOptionsProvider) {
    return new __WEBPACK_IMPORTED_MODULE_0__cookie_service__["a" /* CookieService */](cookieOptionsProvider);
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cookie_service__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cookie_options_provider__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieBackendService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CookieBackendService = (function (_super) {
    __extends(CookieBackendService, _super);
    function CookieBackendService(request, response, _optionsProvider) {
        var _this = _super.call(this, _optionsProvider) || this;
        _this.request = request;
        _this.response = response;
        return _this;
    }
    Object.defineProperty(CookieBackendService.prototype, "cookieString", {
        get: function () {
            return this.request.headers.cookie || '';
        },
        set: function (val) {
            this.request.headers.cookie = val;
            this.response.headers.cookie = val;
        },
        enumerable: true,
        configurable: true
    });
    return CookieBackendService;
}(__WEBPACK_IMPORTED_MODULE_1__cookie_service__["a" /* CookieService */]));
CookieBackendService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('REQUEST')), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('RESPONSE')),
    __metadata("design:paramtypes", [Object, Object, __WEBPACK_IMPORTED_MODULE_2__cookie_options_provider__["b" /* CookieOptionsProvider */]])
], CookieBackendService);



/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cookie_service__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_cookie_factory__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cookie_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_cookie_backend_service__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CookieBackendService", function() { return __WEBPACK_IMPORTED_MODULE_4__src_cookie_backend_service__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "COOKIE_OPTIONS", function() { return __WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CookieOptionsProvider", function() { return __WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "cookieServiceFactory", function() { return __WEBPACK_IMPORTED_MODULE_3__src_cookie_factory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_utils__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isBlank", function() { return __WEBPACK_IMPORTED_MODULE_5__src_utils__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isPresent", function() { return __WEBPACK_IMPORTED_MODULE_5__src_utils__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return __WEBPACK_IMPORTED_MODULE_5__src_utils__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return __WEBPACK_IMPORTED_MODULE_5__src_utils__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "safeDecodeURIComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__src_utils__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "safeJsonParse", function() { return __WEBPACK_IMPORTED_MODULE_5__src_utils__["f"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieModule", function() { return CookieModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CookieModule = CookieModule_1 = (function () {
    function CookieModule() {
    }
    /**
     * Use this method in your root module to provide the CookieService
     * @param {CookieOptions} options
     * @returns {ModuleWithProviders}
     */
    CookieModule.forRoot = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: CookieModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["a" /* COOKIE_OPTIONS */], useValue: options },
                { provide: __WEBPACK_IMPORTED_MODULE_2__src_cookie_service__["a" /* CookieService */], useFactory: __WEBPACK_IMPORTED_MODULE_3__src_cookie_factory__["a" /* cookieServiceFactory */], deps: [__WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["b" /* CookieOptionsProvider */]] }
            ]
        };
    };
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     * @param {CookieOptions} options
     * @returns {ModuleWithProviders}
     */
    CookieModule.forChild = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: CookieModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["a" /* COOKIE_OPTIONS */], useValue: options },
                { provide: __WEBPACK_IMPORTED_MODULE_2__src_cookie_service__["a" /* CookieService */], useFactory: __WEBPACK_IMPORTED_MODULE_3__src_cookie_factory__["a" /* cookieServiceFactory */], deps: [__WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["b" /* CookieOptionsProvider */]] }
            ]
        };
    };
    return CookieModule;
}());
CookieModule = CookieModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        providers: [__WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["b" /* CookieOptionsProvider */]]
    })
], CookieModule);

var CookieModule_1;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxODI3Y2FhMzQxOTE4OWFmMGQ0YSIsIndlYnBhY2s6Ly8vLi9zcmMvY29va2llLW9wdGlvbnMtcHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nvb2tpZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nvb2tpZS5mYWN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb29raWUtYmFja2VuZC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy8uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEUwRTtBQUMxQjtBQUdUO0FBRWhDLElBQU0sY0FBYyxH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QUFPLEVBQUUsMEVBQWEsRUFBRSxVQUFVLEVBQUUsaUZBQW9CLEVBQUUsSUFBSSxFQUFFLENBQUMsMkZBQXFCLENBQUMsRUFBQzthQUMxRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHFCQUFRLEdBQWYsVUFBZ0IsT0FBMkI7UUFBM0Isc0NBQTJCO1FBQ3pDLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxjQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxFQUFDLE9BQU8sRUFBRSxvRkFBYyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUM7Z0JBQzVDLEVBQUMsT0FBTyxFQUFFLDBFQUFhLEVBQUUsVUFBVSxFQUFFLGlGQUFvQixFQUFFLElBQUksRUFBRSxDQUFDLDJGQUFxQixDQUFDLEVBQUM7YUFDMUY7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQztBQTlCWSxZQUFZO0lBSHhCLDhFQUFRLENBQUM7UUFDUixTQUFTLEVBQUUsQ0FBQywyRkFBcUIsQ0FBQztLQUNuQyxDQUFDO0dBQ1csWUFBWSxDQThCeEI7QUE5QndCIiwiZmlsZSI6Im5neC1jb29raWUudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAYW5ndWxhci9jb3JlXCIsIFwiQGFuZ3VsYXIvY29tbW9uXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5neC1jb29raWVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZ3gtY29va2llXCJdID0gZmFjdG9yeShyb290W1wiQGFuZ3VsYXIvY29yZVwiXSwgcm9vdFtcIkBhbmd1bGFyL2NvbW1vblwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDE4MjdjYWEzNDE5MTg5YWYwZDRhIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIEluamVjdCwgT3BhcXVlVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFQUF9CQVNFX0hSRUYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb29raWVPcHRpb25zIH0gZnJvbSAnLi9jb29raWUtb3B0aW9ucy5tb2RlbCc7XG5pbXBvcnQgeyBtZXJnZU9wdGlvbnMgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IENPT0tJRV9PUFRJT05TID0gbmV3IE9wYXF1ZVRva2VuKCdDT09LSUVfT1BUSU9OUycpO1xuXG4vKiogQHByaXZhdGUgKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb29raWVPcHRpb25zUHJvdmlkZXIge1xuXG4gIHByaXZhdGUgZGVmYXVsdE9wdGlvbnM6IENvb2tpZU9wdGlvbnM7XG4gIHByaXZhdGUgX29wdGlvbnM6IENvb2tpZU9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChDT09LSUVfT1BUSU9OUykgb3B0aW9uczogQ29va2llT3B0aW9ucyA9IHt9LFxuICAgICAgICAgICAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgcGF0aDogdGhpcy5faW5qZWN0b3IuZ2V0KEFQUF9CQVNFX0hSRUYsICcvJyksXG4gICAgICBkb21haW46IG51bGwsXG4gICAgICBleHBpcmVzOiBudWxsLFxuICAgICAgc2VjdXJlOiBmYWxzZVxuICAgIH07XG4gICAgdGhpcy5fb3B0aW9ucyA9IG1lcmdlT3B0aW9ucyh0aGlzLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgfVxuXG4gIGdldCBvcHRpb25zKCk6IENvb2tpZU9wdGlvbnMge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29va2llLW9wdGlvbnMtcHJvdmlkZXIudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvb2tpZU9wdGlvbnNQcm92aWRlciB9IGZyb20gJy4vY29va2llLW9wdGlvbnMtcHJvdmlkZXInO1xuaW1wb3J0IHsgQ29va2llT3B0aW9ucyB9IGZyb20gJy4vY29va2llLW9wdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgaXNCbGFuaywgaXNTdHJpbmcsIG1lcmdlT3B0aW9ucywgc2FmZURlY29kZVVSSUNvbXBvbmVudCwgc2FmZUpzb25QYXJzZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5kZWNsYXJlIGludGVyZmFjZSBEb2N1bWVudCB7XG4gIGNvb2tpZTogc3RyaW5nO1xufVxuZGVjbGFyZSBjb25zdCBkb2N1bWVudDogRG9jdW1lbnQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvb2tpZVNlcnZpY2Uge1xuICBnZXQoa2V5OiBzdHJpbmcpOiBzdHJpbmc7XG4gIGdldE9iamVjdChrZXk6IHN0cmluZyk6IE9iamVjdDtcbiAgZ2V0QWxsKCk6IE9iamVjdDtcbiAgcHV0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBvcHRpb25zPzogQ29va2llT3B0aW9ucyk6IHZvaWQ7XG4gIHB1dE9iamVjdChrZXk6IHN0cmluZywgdmFsdWU6IE9iamVjdCwgb3B0aW9ucz86IENvb2tpZU9wdGlvbnMpOiB2b2lkO1xuICByZW1vdmUoa2V5OiBzdHJpbmcsIG9wdGlvbnM/OiBDb29raWVPcHRpb25zKTogdm9pZDtcbiAgcmVtb3ZlQWxsKCk6IHZvaWQ7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb29raWVTZXJ2aWNlIGltcGxlbWVudHMgSUNvb2tpZVNlcnZpY2Uge1xuXG4gIHByb3RlY3RlZCBvcHRpb25zOiBDb29raWVPcHRpb25zO1xuXG4gIHByb3RlY3RlZCBnZXQgY29va2llU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNvb2tpZSB8fCAnJztcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXQgY29va2llU3RyaW5nKHZhbDogc3RyaW5nKSB7XG4gICAgZG9jdW1lbnQuY29va2llID0gdmFsO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfb3B0aW9uc1Byb3ZpZGVyOiBDb29raWVPcHRpb25zUHJvdmlkZXIpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLl9vcHRpb25zUHJvdmlkZXIub3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBDb29raWVTZXJ2aWNlI2dldFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgZ2l2ZW4gY29va2llIGtleS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBJZCB0byB1c2UgZm9yIGxvb2t1cC5cbiAgICogQHJldHVybnMge3N0cmluZ30gUmF3IGNvb2tpZSB2YWx1ZS5cbiAgICovXG4gIGdldChrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuICg8YW55PnRoaXMuX2Nvb2tpZVJlYWRlcigpKVtrZXldO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIENvb2tpZVNlcnZpY2UjZ2V0T2JqZWN0XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBSZXR1cm5zIHRoZSBkZXNlcmlhbGl6ZWQgdmFsdWUgb2YgZ2l2ZW4gY29va2llIGtleS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBJZCB0byB1c2UgZm9yIGxvb2t1cC5cbiAgICogQHJldHVybnMge09iamVjdH0gRGVzZXJpYWxpemVkIGNvb2tpZSB2YWx1ZS5cbiAgICovXG4gIGdldE9iamVjdChrZXk6IHN0cmluZyk6IE9iamVjdCB7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5nZXQoa2V5KTtcbiAgICByZXR1cm4gdmFsdWUgPyBzYWZlSnNvblBhcnNlKHZhbHVlKSA6IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIENvb2tpZVNlcnZpY2UjZ2V0QWxsXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBSZXR1cm5zIGEga2V5IHZhbHVlIG9iamVjdCB3aXRoIGFsbCB0aGUgY29va2llcy5cbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gQWxsIGNvb2tpZXNcbiAgICovXG4gIGdldEFsbCgpOiBPYmplY3Qge1xuICAgIHJldHVybiA8YW55PnRoaXMuX2Nvb2tpZVJlYWRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIENvb2tpZVNlcnZpY2UjcHV0XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBTZXRzIGEgdmFsdWUgZm9yIGdpdmVuIGNvb2tpZSBrZXkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgSWQgZm9yIHRoZSBgdmFsdWVgLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgUmF3IHZhbHVlIHRvIGJlIHN0b3JlZC5cbiAgICogQHBhcmFtIHtDb29raWVPcHRpb25zfSBvcHRpb25zIChPcHRpb25hbCkgT3B0aW9ucyBvYmplY3QuXG4gICAqL1xuICBwdXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIG9wdGlvbnM/OiBDb29raWVPcHRpb25zKSB7XG4gICAgdGhpcy5fY29va2llV3JpdGVyKCkoa2V5LCB2YWx1ZSwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgQ29va2llU2VydmljZSNwdXRPYmplY3RcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFNlcmlhbGl6ZXMgYW5kIHNldHMgYSB2YWx1ZSBmb3IgZ2l2ZW4gY29va2llIGtleS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBJZCBmb3IgdGhlIGB2YWx1ZWAuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBWYWx1ZSB0byBiZSBzdG9yZWQuXG4gICAqIEBwYXJhbSB7Q29va2llT3B0aW9uc30gb3B0aW9ucyAoT3B0aW9uYWwpIE9wdGlvbnMgb2JqZWN0LlxuICAgKi9cbiAgcHV0T2JqZWN0KGtleTogc3RyaW5nLCB2YWx1ZTogT2JqZWN0LCBvcHRpb25zPzogQ29va2llT3B0aW9ucykge1xuICAgIHRoaXMucHV0KGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBDb29raWVTZXJ2aWNlI3JlbW92ZVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogUmVtb3ZlIGdpdmVuIGNvb2tpZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBJZCBvZiB0aGUga2V5LXZhbHVlIHBhaXIgdG8gZGVsZXRlLlxuICAgKiBAcGFyYW0ge0Nvb2tpZU9wdGlvbnN9IG9wdGlvbnMgKE9wdGlvbmFsKSBPcHRpb25zIG9iamVjdC5cbiAgICovXG4gIHJlbW92ZShrZXk6IHN0cmluZywgb3B0aW9ucz86IENvb2tpZU9wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLl9jb29raWVXcml0ZXIoKShrZXksIHVuZGVmaW5lZCwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgQ29va2llU2VydmljZSNyZW1vdmVBbGxcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFJlbW92ZSBhbGwgY29va2llcy5cbiAgICovXG4gIHJlbW92ZUFsbCgpOiB2b2lkIHtcbiAgICBsZXQgY29va2llcyA9IHRoaXMuZ2V0QWxsKCk7XG4gICAgT2JqZWN0LmtleXMoY29va2llcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmUoa2V5KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2Nvb2tpZVJlYWRlcigpOiBPYmplY3Qge1xuICAgIGxldCBsYXN0Q29va2llcyA9IHt9O1xuICAgIGxldCBsYXN0Q29va2llU3RyaW5nID0gJyc7XG4gICAgbGV0IGNvb2tpZUFycmF5OiBzdHJpbmdbXSwgY29va2llOiBzdHJpbmcsIGk6IG51bWJlciwgaW5kZXg6IG51bWJlciwgbmFtZTogc3RyaW5nO1xuICAgIGxldCBjdXJyZW50Q29va2llU3RyaW5nID0gdGhpcy5jb29raWVTdHJpbmc7XG4gICAgaWYgKGN1cnJlbnRDb29raWVTdHJpbmcgIT09IGxhc3RDb29raWVTdHJpbmcpIHtcbiAgICAgIGxhc3RDb29raWVTdHJpbmcgPSBjdXJyZW50Q29va2llU3RyaW5nO1xuICAgICAgY29va2llQXJyYXkgPSBsYXN0Q29va2llU3RyaW5nLnNwbGl0KCc7ICcpO1xuICAgICAgbGFzdENvb2tpZXMgPSB7fTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjb29raWVBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb29raWUgPSBjb29raWVBcnJheVtpXTtcbiAgICAgICAgaW5kZXggPSBjb29raWUuaW5kZXhPZignPScpO1xuICAgICAgICBpZiAoaW5kZXggPiAwKSB7ICAvLyBpZ25vcmUgbmFtZWxlc3MgY29va2llc1xuICAgICAgICAgIG5hbWUgPSBzYWZlRGVjb2RlVVJJQ29tcG9uZW50KGNvb2tpZS5zdWJzdHJpbmcoMCwgaW5kZXgpKTtcbiAgICAgICAgICAvLyB0aGUgZmlyc3QgdmFsdWUgdGhhdCBpcyBzZWVuIGZvciBhIGNvb2tpZSBpcyB0aGUgbW9zdFxuICAgICAgICAgIC8vIHNwZWNpZmljIG9uZS4gIHZhbHVlcyBmb3IgdGhlIHNhbWUgY29va2llIG5hbWUgdGhhdFxuICAgICAgICAgIC8vIGZvbGxvdyBhcmUgZm9yIGxlc3Mgc3BlY2lmaWMgcGF0aHMuXG4gICAgICAgICAgaWYgKGlzQmxhbmsoKDxhbnk+bGFzdENvb2tpZXMpW25hbWVdKSkge1xuICAgICAgICAgICAgKDxhbnk+bGFzdENvb2tpZXMpW25hbWVdID0gc2FmZURlY29kZVVSSUNvbXBvbmVudChjb29raWUuc3Vic3RyaW5nKGluZGV4ICsgMSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGFzdENvb2tpZXM7XG4gIH1cblxuICBwcml2YXRlIF9jb29raWVXcml0ZXIoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIG9wdGlvbnM/OiBDb29raWVPcHRpb25zKSB7XG4gICAgICB0aGF0LmNvb2tpZVN0cmluZyA9IHRoYXQuX2J1aWxkQ29va2llU3RyaW5nKG5hbWUsIHZhbHVlLCBvcHRpb25zKTtcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfYnVpbGRDb29raWVTdHJpbmcobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBvcHRpb25zPzogQ29va2llT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgbGV0IG9wdHM6IENvb2tpZU9wdGlvbnMgPSBtZXJnZU9wdGlvbnModGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICBsZXQgZXhwaXJlczogYW55ID0gb3B0cy5leHBpcmVzO1xuICAgIGlmIChpc0JsYW5rKHZhbHVlKSkge1xuICAgICAgZXhwaXJlcyA9ICdUaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIEdNVCc7XG4gICAgICB2YWx1ZSA9ICcnO1xuICAgIH1cbiAgICBpZiAoaXNTdHJpbmcoZXhwaXJlcykpIHtcbiAgICAgIGV4cGlyZXMgPSBuZXcgRGF0ZShleHBpcmVzKTtcbiAgICB9XG5cbiAgICBsZXQgc3RyID0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICBzdHIgKz0gb3B0cy5wYXRoID8gJztwYXRoPScgKyBvcHRzLnBhdGggOiAnJztcbiAgICBzdHIgKz0gb3B0cy5kb21haW4gPyAnO2RvbWFpbj0nICsgb3B0cy5kb21haW4gOiAnJztcbiAgICBzdHIgKz0gZXhwaXJlcyA/ICc7ZXhwaXJlcz0nICsgZXhwaXJlcy50b1VUQ1N0cmluZygpIDogJyc7XG4gICAgc3RyICs9IG9wdHMuc2VjdXJlID8gJztzZWN1cmUnIDogJyc7XG5cbiAgICAvLyBwZXIgaHR0cDovL3d3dy5pZXRmLm9yZy9yZmMvcmZjMjEwOS50eHQgYnJvd3NlciBtdXN0IGFsbG93IGF0IG1pbmltdW06XG4gICAgLy8gLSAzMDAgY29va2llc1xuICAgIC8vIC0gMjAgY29va2llcyBwZXIgdW5pcXVlIGRvbWFpblxuICAgIC8vIC0gNDA5NiBieXRlcyBwZXIgY29va2llXG4gICAgbGV0IGNvb2tpZUxlbmd0aCA9IHN0ci5sZW5ndGggKyAxO1xuICAgIGlmIChjb29raWVMZW5ndGggPiA0MDk2KSB7XG4gICAgICBjb25zb2xlLmxvZyhgQ29va2llIFxcJyR7bmFtZX1cXCcgcG9zc2libHkgbm90IHNldCBvciBvdmVyZmxvd2VkIGJlY2F1c2UgaXQgd2FzIHRvbyBcbiAgICAgIGxhcmdlICgke2Nvb2tpZUxlbmd0aH0gPiA0MDk2IGJ5dGVzKSFgKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29va2llLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvb2tpZU9wdGlvbnMgfSBmcm9tICcuL2Nvb2tpZS1vcHRpb25zLm1vZGVsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQmxhbmsob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkIHx8IG9iaiA9PT0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJlc2VudChvYmo6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gb2JqICE9PSB1bmRlZmluZWQgJiYgb2JqICE9PSBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcob2JqOiBhbnkpOiBvYmogaXMgc3RyaW5nIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VPcHRpb25zKG9sZE9wdGlvbnM6IENvb2tpZU9wdGlvbnMsIG5ld09wdGlvbnM/OiBDb29raWVPcHRpb25zKTogQ29va2llT3B0aW9ucyB7XG4gIGlmICghbmV3T3B0aW9ucykge1xuICAgIHJldHVybiBvbGRPcHRpb25zO1xuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aDogaXNQcmVzZW50KG5ld09wdGlvbnMucGF0aCkgPyBuZXdPcHRpb25zLnBhdGggOiBvbGRPcHRpb25zLnBhdGgsXG4gICAgZG9tYWluOiBpc1ByZXNlbnQobmV3T3B0aW9ucy5kb21haW4pID8gbmV3T3B0aW9ucy5kb21haW4gOiBvbGRPcHRpb25zLmRvbWFpbixcbiAgICBleHBpcmVzOiBpc1ByZXNlbnQobmV3T3B0aW9ucy5leHBpcmVzKSA/IG5ld09wdGlvbnMuZXhwaXJlcyA6IG9sZE9wdGlvbnMuZXhwaXJlcyxcbiAgICBzZWN1cmU6IGlzUHJlc2VudChuZXdPcHRpb25zLnNlY3VyZSkgPyBuZXdPcHRpb25zLnNlY3VyZSA6IG9sZE9wdGlvbnMuc2VjdXJlLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FmZURlY29kZVVSSUNvbXBvbmVudChzdHI6IHN0cmluZykge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVKc29uUGFyc2Uoc3RyOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3V0aWxzLnRzIiwiaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJy4vY29va2llLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29va2llT3B0aW9uc1Byb3ZpZGVyIH0gZnJvbSAnLi9jb29raWUtb3B0aW9ucy1wcm92aWRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb29raWVTZXJ2aWNlRmFjdG9yeShjb29raWVPcHRpb25zUHJvdmlkZXI6IENvb2tpZU9wdGlvbnNQcm92aWRlcik6IENvb2tpZVNlcnZpY2Uge1xuICByZXR1cm4gbmV3IENvb2tpZVNlcnZpY2UoY29va2llT3B0aW9uc1Byb3ZpZGVyKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb29raWUuZmFjdG9yeS50cyIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnLi9jb29raWUuc2VydmljZSc7XG5pbXBvcnQgeyBDb29raWVPcHRpb25zUHJvdmlkZXIgfSBmcm9tICcuL2Nvb2tpZS1vcHRpb25zLXByb3ZpZGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvb2tpZUJhY2tlbmRTZXJ2aWNlIGV4dGVuZHMgQ29va2llU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnUkVRVUVTVCcpIHByaXZhdGUgcmVxdWVzdDogYW55LCBASW5qZWN0KCdSRVNQT05TRScpIHByaXZhdGUgcmVzcG9uc2U6IGFueSwgX29wdGlvbnNQcm92aWRlcjogQ29va2llT3B0aW9uc1Byb3ZpZGVyKSB7XG4gICAgc3VwZXIoX29wdGlvbnNQcm92aWRlcik7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGNvb2tpZVN0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QuaGVhZGVycy5jb29raWUgfHwgJyc7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0IGNvb2tpZVN0cmluZyh2YWw6IHN0cmluZykge1xuICAgIHRoaXMucmVxdWVzdC5oZWFkZXJzLmNvb2tpZSA9IHZhbDtcbiAgICB0aGlzLnJlc3BvbnNlLmhlYWRlcnMuY29va2llID0gdmFsO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvY29va2llLWJhY2tlbmQuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDT09LSUVfT1BUSU9OUywgQ29va2llT3B0aW9uc1Byb3ZpZGVyIH0gZnJvbSAnLi9zcmMvY29va2llLW9wdGlvbnMtcHJvdmlkZXInO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJy4vc3JjL2Nvb2tpZS5zZXJ2aWNlJztcbmltcG9ydCB7IENvb2tpZU9wdGlvbnMgfSBmcm9tICcuL3NyYy9jb29raWUtb3B0aW9ucy5tb2RlbCc7XG5pbXBvcnQgeyBjb29raWVTZXJ2aWNlRmFjdG9yeSB9IGZyb20gJy4vc3JjL2Nvb2tpZS5mYWN0b3J5JztcblxuZXhwb3J0ICogZnJvbSAnLi9zcmMvY29va2llLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvY29va2llLWJhY2tlbmQuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9jb29raWUtb3B0aW9ucy5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9jb29raWUtb3B0aW9ucy1wcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9jb29raWUuZmFjdG9yeSc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy91dGlscyc7XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW0Nvb2tpZU9wdGlvbnNQcm92aWRlcl1cbn0pXG5leHBvcnQgY2xhc3MgQ29va2llTW9kdWxlIHtcbiAgLyoqXG4gICAqIFVzZSB0aGlzIG1ldGhvZCBpbiB5b3VyIHJvb3QgbW9kdWxlIHRvIHByb3ZpZGUgdGhlIENvb2tpZVNlcnZpY2VcbiAgICogQHBhcmFtIHtDb29raWVPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtNb2R1bGVXaXRoUHJvdmlkZXJzfVxuICAgKi9cbiAgc3RhdGljIGZvclJvb3Qob3B0aW9uczogQ29va2llT3B0aW9ucyA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb29raWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6IENPT0tJRV9PUFRJT05TLCB1c2VWYWx1ZTogb3B0aW9uc30sXG4gICAgICAgIHtwcm92aWRlOiBDb29raWVTZXJ2aWNlLCB1c2VGYWN0b3J5OiBjb29raWVTZXJ2aWNlRmFjdG9yeSwgZGVwczogW0Nvb2tpZU9wdGlvbnNQcm92aWRlcl19XG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdGhpcyBtZXRob2QgaW4geW91ciBvdGhlciAobm9uIHJvb3QpIG1vZHVsZXMgdG8gaW1wb3J0IHRoZSBkaXJlY3RpdmUvcGlwZVxuICAgKiBAcGFyYW0ge0Nvb2tpZU9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybnMge01vZHVsZVdpdGhQcm92aWRlcnN9XG4gICAqL1xuICBzdGF0aWMgZm9yQ2hpbGQob3B0aW9uczogQ29va2llT3B0aW9ucyA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb29raWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6IENPT0tJRV9PUFRJT05TLCB1c2VWYWx1ZTogb3B0aW9uc30sXG4gICAgICAgIHtwcm92aWRlOiBDb29raWVTZXJ2aWNlLCB1c2VGYWN0b3J5OiBjb29raWVTZXJ2aWNlRmFjdG9yeSwgZGVwczogW0Nvb2tpZU9wdGlvbnNQcm92aWRlcl19XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vaW5kZXgudHMiXSwic291cmNlUm9vdCI6IiJ9