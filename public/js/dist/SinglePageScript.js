(function(modules) {
    var installedModules = {};
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
    return __webpack_require__(__webpack_require__.s = "./resources/js/SinglePageScript.js");
})({
    "./resources/js/SinglePageScript.js": function(module, exports) {
        eval("throw new Error(\"Module build failed (from ./node_modules/prettier-loader/prettier-loader.js):\\nSyntaxError: Unexpected token (32:29)\\n  30 |     prevButton.classList.add('is-hidden');\\n  31 |     nextButton.classList.remove('is-hidden');\\n> 32 |   } else if (targetIndex ==== slides.length -1) {\\n     |                             ^\\n  33 |     prevButton.classList.remove('is-hidden');\\n  34 |     nextButton.classList.add('is-hidden');\\n  35 |   } else {\\n    at e (/mnt/c/projects/horus/node_modules/prettier/parser-babylon.js:1:344)\\n    at Object.parse (/mnt/c/projects/horus/node_modules/prettier/parser-babylon.js:1:262322)\\n    at Object.parse (/mnt/c/projects/horus/node_modules/prettier/index.js:9739:19)\\n    at coreFormat (/mnt/c/projects/horus/node_modules/prettier/index.js:13252:23)\\n    at format (/mnt/c/projects/horus/node_modules/prettier/index.js:13510:73)\\n    at formatWithCursor (/mnt/c/projects/horus/node_modules/prettier/index.js:13526:12)\\n    at /mnt/c/projects/horus/node_modules/prettier/index.js:44207:15\\n    at Object.format (/mnt/c/projects/horus/node_modules/prettier/index.js:44226:12)\\n    at getConfig.then.config (/mnt/c/projects/horus/node_modules/prettier-loader/prettier-loader.js:69:33)\");\n\n//# sourceURL=webpack:///./resources/js/SinglePageScript.js?");
    }
});