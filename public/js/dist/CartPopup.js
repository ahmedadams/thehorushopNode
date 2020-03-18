(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        CartPopup: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./resources/js/components/CartPopup.js", "vendors" ]);
    return checkDeferredModules();
})({
    "./node_modules/object-assign/index.js": function(module, exports, __webpack_require__) {
        "use strict";
        eval("/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/\n\n\n/* eslint-disable no-unused-vars */\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nfunction toObject(val) {\n\tif (val === null || val === undefined) {\n\t\tthrow new TypeError('Object.assign cannot be called with null or undefined');\n\t}\n\n\treturn Object(val);\n}\n\nfunction shouldUseNative() {\n\ttry {\n\t\tif (!Object.assign) {\n\t\t\treturn false;\n\t\t}\n\n\t\t// Detect buggy property enumeration order in older V8 versions.\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=4118\n\t\tvar test1 = new String('abc');  // eslint-disable-line no-new-wrappers\n\t\ttest1[5] = 'de';\n\t\tif (Object.getOwnPropertyNames(test1)[0] === '5') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test2 = {};\n\t\tfor (var i = 0; i < 10; i++) {\n\t\t\ttest2['_' + String.fromCharCode(i)] = i;\n\t\t}\n\t\tvar order2 = Object.getOwnPropertyNames(test2).map(function (n) {\n\t\t\treturn test2[n];\n\t\t});\n\t\tif (order2.join('') !== '0123456789') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test3 = {};\n\t\t'abcdefghijklmnopqrst'.split('').forEach(function (letter) {\n\t\t\ttest3[letter] = letter;\n\t\t});\n\t\tif (Object.keys(Object.assign({}, test3)).join('') !==\n\t\t\t\t'abcdefghijklmnopqrst') {\n\t\t\treturn false;\n\t\t}\n\n\t\treturn true;\n\t} catch (err) {\n\t\t// We don't expect any of the above to throw, but better to be safe.\n\t\treturn false;\n\t}\n}\n\nmodule.exports = shouldUseNative() ? Object.assign : function (target, source) {\n\tvar from;\n\tvar to = toObject(target);\n\tvar symbols;\n\n\tfor (var s = 1; s < arguments.length; s++) {\n\t\tfrom = Object(arguments[s]);\n\n\t\tfor (var key in from) {\n\t\t\tif (hasOwnProperty.call(from, key)) {\n\t\t\t\tto[key] = from[key];\n\t\t\t}\n\t\t}\n\n\t\tif (getOwnPropertySymbols) {\n\t\t\tsymbols = getOwnPropertySymbols(from);\n\t\t\tfor (var i = 0; i < symbols.length; i++) {\n\t\t\t\tif (propIsEnumerable.call(from, symbols[i])) {\n\t\t\t\t\tto[symbols[i]] = from[symbols[i]];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn to;\n};\n\n\n//# sourceURL=webpack:///./node_modules/object-assign/index.js?");
    },
    "./node_modules/prop-types/checkPropTypes.js": function(module, exports, __webpack_require__) {
        "use strict";
        eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar printWarning = function() {};\n\nif (true) {\n  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ \"./node_modules/prop-types/lib/ReactPropTypesSecret.js\");\n  var loggedTypeFailures = {};\n  var has = Function.call.bind(Object.prototype.hasOwnProperty);\n\n  printWarning = function(text) {\n    var message = 'Warning: ' + text;\n    if (typeof console !== 'undefined') {\n      console.error(message);\n    }\n    try {\n      // --- Welcome to debugging React ---\n      // This error was thrown as a convenience so that you can use this stack\n      // to find the callsite that caused this warning to fire.\n      throw new Error(message);\n    } catch (x) {}\n  };\n}\n\n/**\n * Assert that the values match with the type specs.\n * Error messages are memorized and will only be shown once.\n *\n * @param {object} typeSpecs Map of name to a ReactPropType\n * @param {object} values Runtime values that need to be type-checked\n * @param {string} location e.g. \"prop\", \"context\", \"child context\"\n * @param {string} componentName Name of the component for error messages.\n * @param {?Function} getStack Returns the component stack.\n * @private\n */\nfunction checkPropTypes(typeSpecs, values, location, componentName, getStack) {\n  if (true) {\n    for (var typeSpecName in typeSpecs) {\n      if (has(typeSpecs, typeSpecName)) {\n        var error;\n        // Prop type validation may throw. In case they do, we don't want to\n        // fail the render phase where it didn't fail before. So we log it.\n        // After these have been cleaned up, we'll let them throw.\n        try {\n          // This is intentionally an invariant that gets caught. It's the same\n          // behavior as without this statement except with a better message.\n          if (typeof typeSpecs[typeSpecName] !== 'function') {\n            var err = Error(\n              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +\n              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'\n            );\n            err.name = 'Invariant Violation';\n            throw err;\n          }\n          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);\n        } catch (ex) {\n          error = ex;\n        }\n        if (error && !(error instanceof Error)) {\n          printWarning(\n            (componentName || 'React class') + ': type specification of ' +\n            location + ' `' + typeSpecName + '` is invalid; the type checker ' +\n            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +\n            'You may have forgotten to pass an argument to the type checker ' +\n            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +\n            'shape all require an argument).'\n          );\n        }\n        if (error instanceof Error && !(error.message in loggedTypeFailures)) {\n          // Only monitor this failure once because there tends to be a lot of the\n          // same error.\n          loggedTypeFailures[error.message] = true;\n\n          var stack = getStack ? getStack() : '';\n\n          printWarning(\n            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')\n          );\n        }\n      }\n    }\n  }\n}\n\n/**\n * Resets warning cache when testing.\n *\n * @private\n */\ncheckPropTypes.resetWarningCache = function() {\n  if (true) {\n    loggedTypeFailures = {};\n  }\n}\n\nmodule.exports = checkPropTypes;\n\n\n//# sourceURL=webpack:///./node_modules/prop-types/checkPropTypes.js?");
    },
    "./node_modules/prop-types/lib/ReactPropTypesSecret.js": function(module, exports, __webpack_require__) {
        "use strict";
        eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';\n\nmodule.exports = ReactPropTypesSecret;\n\n\n//# sourceURL=webpack:///./node_modules/prop-types/lib/ReactPropTypesSecret.js?");
    },
    "./resources/js/components/CartPopup.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartPopup; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\nclass CartPopup extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.clickedBtn = () => {};\n\n    this.state = {\n      name: "adam8Creats"\n    };\n  }\n\n  test() {\n    return _asyncToGenerator(function* () {})();\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "cart-popup",\n      className: ""\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "cart-header"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "header"\n    }, "Shopping Cart")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "cart-units"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "unit-container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "unit"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n      src: "/img/products/nike-airforce1-offwhite-volt.png"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "delete-btn"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "circle"\n    }, "X")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "unit-container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "unit"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n      src: "/img/products/nike-airforce1-offwhite-volt.png"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "delete-btn"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "circle"\n    }, "X")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "unit-container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "unit"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n      src: "/img/products/nike-airforce1-offwhite-volt.png"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "delete-btn"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "circle"\n    }, "X")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "unit-container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "unit"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n      src: "/img/products/nike-airforce1-offwhite-volt.png"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "delete-btn"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "circle"\n    }, "X")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "unit-container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "unit"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n      src: "/img/products/nike-airforce1-offwhite-volt.png"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "delete-btn"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "circle"\n    }, "X")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "unit-container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "unit"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n      src: "/img/products/nike-airforce1-offwhite-volt.png"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "delete-btn"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "circle"\n    }, "X"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "product-total"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "border-container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "header"\n    }, "Total"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "quantity"\n    }, "x4"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "total-cost"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "border-container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "header"\n    }, "Total"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "quantity"\n    }, "\\xA32,000"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "checkout"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "title"\n    }, "checkout"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "ti-shopping-cart"\n    })));\n  }\n\n}\n\n//# sourceURL=webpack:///./resources/js/components/CartPopup.js?');
    }
});