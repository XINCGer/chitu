/*!
 * 
 *  maishu-chitu v3.4.0
 *  https://github.com/ansiboy/chitu
 *  
 *  Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 *  Licensed under the MIT License.
 * 
 */
define(["maishu-chitu-service"], function(__WEBPACK_EXTERNAL_MODULE_maishu_chitu_service__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./out/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./out/Application.js":
/*!****************************!*\
  !*** ./out/Application.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! maishu-chitu-service */ "maishu-chitu-service"), __webpack_require__(/*! ./PageMaster */ "./out/PageMaster.js"), __webpack_require__(/*! ./Errors */ "./out/Errors.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, maishu_chitu_service_1, PageMaster_1, Errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const DefaultPageName = "index";
    function parseUrl(url) {
        if (!url)
            throw Errors_1.Errors.argumentNull('url');
        let sharpIndex = url.indexOf('#');
        let routeString;
        if (sharpIndex >= 0)
            routeString = url.substr(sharpIndex + 1);
        else
            routeString = url;
        if (!routeString)
            throw Errors_1.Errors.canntParseRouteString(url);
        if (routeString.startsWith('!')) {
            throw Errors_1.Errors.canntParseRouteString(routeString);
        }
        let routePath;
        let search = null;
        let param_spliter_index = routeString.indexOf('?');
        if (param_spliter_index >= 0) {
            search = routeString.substr(param_spliter_index + 1);
            routePath = routeString.substring(0, param_spliter_index);
        }
        else {
            routePath = routeString;
        }
        if (!routePath)
            routePath = DefaultPageName;
        let values = {};
        if (search) {
            values = pareeUrlQuery(search);
        }
        let pageName = routePath;
        return { pageName, values };
    }
    exports.parseUrl = parseUrl;
    function pareeUrlQuery(query) {
        let match, pl = /\+/g, search = /([^&=]+)=?([^&]*)/g, decode = function (s) {
            return decodeURIComponent(s.replace(pl, " "));
        };
        let urlParams = {};
        while (match = search.exec(query))
            urlParams[decode(match[1])] = decode(match[2]);
        return urlParams;
    }
    function createPageUrl(pageName, params) {
        let path_parts = pageName.split('.');
        let path = path_parts.join('/');
        if (!params)
            return `${path}`;
        let paramsText = '';
        for (let key in params) {
            let value = params[key];
            if (typeof value == "function" || value == null)
                continue;
            value = encodeURIComponent(value);
            paramsText = paramsText == '' ? `?${key}=${value}` : paramsText + `&${key}=${value}`;
        }
        return `${path}${paramsText}`;
    }
    exports.createPageUrl = createPageUrl;
    class Application extends PageMaster_1.PageMaster {
        constructor(args) {
            super(Application.containers((args || {}).container), (args || {}).parser);
            this._runned = false;
        }
        static containers(container) {
            let r = {};
            if (container == null) {
                r[Application.DefaultContainerName] = document.body;
                return r;
            }
            if (container.tagName) {
                r[Application.DefaultContainerName] = container;
                return r;
            }
            r = container;
            if (!Application.DefaultContainerName)
                throw Errors_1.Errors.containerIsNotExists(Application.DefaultContainerName);
            return r;
        }
        parseUrl(url) {
            if (!url)
                throw Errors_1.Errors.argumentNull('url');
            let routeData = parseUrl(url);
            return routeData;
        }
        createUrl(pageName, values) {
            return createPageUrl(pageName, values);
        }
        run() {
            if (this._runned)
                return;
            let showPage = () => {
                let url = location.href;
                let sharpIndex = url.indexOf('#');
                if (sharpIndex < 0) {
                    url = '#' + DefaultPageName;
                }
                else {
                    url = url.substr(sharpIndex + 1);
                }
                if (url.startsWith('!')) {
                    return;
                }
                this.showPage(url);
            };
            showPage();
            window.addEventListener('hashchange', () => {
                if (this.location.skip) {
                    delete this.location.skip;
                    return;
                }
                showPage();
            });
            this._runned = true;
        }
        setLocationHash(pageUrl) {
            this.location.hash = `#${pageUrl}`;
            this.location.skip = true;
        }
        get location() {
            return location;
        }
        redirect(pageUrl, args) {
            if (!pageUrl)
                throw Errors_1.Errors.argumentNull('pageUrl');
            let page = this.showPage(pageUrl, args);
            let url = this.createUrl(page.name, page.data);
            this.setLocationHash(url);
            return page;
        }
        forward(pageUrl, args, setUrl) {
            if (!pageUrl)
                throw Errors_1.Errors.argumentNull('pageNameOrUrl');
            if (setUrl == null)
                setUrl = true;
            let page = this.showPage(pageUrl, args, true);
            if (setUrl) {
                let url = this.createUrl(page.name, page.data);
                this.setLocationHash(url);
            }
            return page;
        }
        back() {
            this.closeCurrentPage();
            setTimeout(() => {
                history.back();
            }, 100);
        }
        createService(type) {
            type = type || maishu_chitu_service_1.Service;
            let service = new type();
            service.error.add((sender, error) => {
                this.error.fire(this, error, null);
            });
            return service;
        }
    }
    Application.DefaultContainerName = 'default';
    exports.Application = Application;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./out/Errors.js":
/*!***********************!*\
  !*** ./out/Errors.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Errors {
        static pageNodeNotExists(pageName) {
            let msg = `Page node named ${pageName} is not exists.`;
            return new Error(msg);
        }
        static actionCanntNull(pageName) {
            let msg = `Action of '${pageName}' can not be null.`;
            return new Error(msg);
        }
        static argumentNull(paramName) {
            var msg = `The argument "${paramName}" cannt be null.`;
            return new Error(msg);
        }
        static modelFileExpecteFunction(script) {
            var msg = `The eval result of script file "${script}" is expected a function.`;
            return new Error(msg);
        }
        static paramTypeError(paramName, expectedType) {
            var msg = `The param "${paramName}" is expected "${expectedType}" type.`;
            return new Error(msg);
        }
        static paramError(msg) {
            return new Error(msg);
        }
        static pathPairRequireView(index) {
            var msg = `The view value is required for path pair, but the item with index "${index}" is miss it.`;
            return new Error(msg);
        }
        static notImplemented(name) {
            var msg = `'The method "${name}" is not implemented.'`;
            return new Error(msg);
        }
        static routeExists(name) {
            var msg = `Route named "${name}" is exists.`;
            return new Error(msg);
        }
        static noneRouteMatched(url) {
            var msg = `None route matched with url "${url}".`;
            var error = new Error(msg);
            return error;
        }
        static emptyStack() {
            return new Error('The stack is empty.');
        }
        static canntParseUrl(url) {
            var msg = `Can not parse the url "${url}" to route data.`;
            return new Error(msg);
        }
        static canntParseRouteString(routeString) {
            var msg = `Can not parse the route string "${routeString}" to route data.;`;
            return new Error(msg);
        }
        static routeDataRequireController() {
            var msg = 'The route data does not contains a "controller" file.';
            return new Error(msg);
        }
        static routeDataRequireAction() {
            var msg = 'The route data does not contains a "action" file.';
            return new Error(msg);
        }
        static viewCanntNull() {
            var msg = 'The view or viewDeferred of the page cannt null.';
            return new Error(msg);
        }
        static createPageFail(pageName) {
            var msg = `Create page "${pageName}" fail.`;
            return new Error(msg);
        }
        static actionTypeError(pageName) {
            let msg = `The action in page '${pageName}' is expect as function.`;
            return new Error(msg);
        }
        static canntFindAction(pageName) {
            let msg = `Cannt find action in page '${pageName}', is the exports has default field?`;
            return new Error(msg);
        }
        static exportsCanntNull(pageName) {
            let msg = `Exports of page '${pageName}' is null.`;
            return new Error(msg);
        }
        static scrollerElementNotExists() {
            let msg = "Scroller element is not exists.";
            return new Error(msg);
        }
        static resourceExists(resourceName, pageName) {
            let msg = `Rosource '${resourceName}' is exists in the resources of page '${pageName}'.`;
            return new Error(msg);
        }
        static siteMapRootCanntNull() {
            let msg = `The site map root node can not be null.`;
            return new Error(msg);
        }
        static duplicateSiteMapNode(name) {
            let msg = `The site map node ${name} is exists.`;
            return new Error(msg);
        }
        static unexpectedNullValue() {
            let msg = `Unexpected null value.`;
            return new Error(msg);
        }
        static containerIsNotExists(name) {
            let msg = `Container '${name}' is not exists`;
            return new Error(msg);
        }
    }
    exports.Errors = Errors;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./out/Page.js":
/*!*********************!*\
  !*** ./out/Page.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! maishu-chitu-service */ "maishu-chitu-service"), __webpack_require__(/*! ./Errors */ "./out/Errors.js"), __webpack_require__(/*! ./Application */ "./out/Application.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, maishu_chitu_service_1, Errors_1, Application_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Page {
        constructor(params) {
            this.data = {};
            this.showing = maishu_chitu_service_1.Callbacks();
            this.shown = maishu_chitu_service_1.Callbacks();
            this.hiding = maishu_chitu_service_1.Callbacks();
            this.hidden = maishu_chitu_service_1.Callbacks();
            this.closing = maishu_chitu_service_1.Callbacks();
            this.closed = maishu_chitu_service_1.Callbacks();
            this.messageReceived = maishu_chitu_service_1.Callbacks();
            this._element = params.element;
            this._app = params.app;
            this._displayer = params.displayer;
            let routeData = Application_1.parseUrl(params.url);
            this.data = Object.assign(routeData.values, params.data || {});
            this._name = routeData.pageName;
            this._url = params.url;
            this._container = params.container;
        }
        on_showing() {
            return this.showing.fire(this, this.data);
        }
        on_shown() {
            return this.shown.fire(this, this.data);
        }
        on_hiding() {
            return this.hiding.fire(this, this.data);
        }
        on_hidden() {
            return this.hidden.fire(this, this.data);
        }
        on_closing() {
            return this.closing.fire(this, this.data);
        }
        on_closed() {
            return this.closed.fire(this, this.data);
        }
        show() {
            this.on_showing();
            let currentPage = this._app.currentPage;
            if (this == currentPage) {
                currentPage = null;
            }
            return this._displayer.show(this, currentPage).then(o => {
                this.on_shown();
            });
        }
        hide(currentPage) {
            this.on_hiding();
            return this._displayer.hide(this, currentPage).then(o => {
                this.on_hidden();
            });
        }
        close() {
            this.on_closing();
            let parentElement = this._element.parentElement;
            if (parentElement == null)
                throw Errors_1.Errors.unexpectedNullValue();
            parentElement.removeChild(this._element);
            this.on_closed();
            return Promise.resolve();
        }
        createService(type) {
            type = type || maishu_chitu_service_1.Service;
            let service = new type();
            service.error.add((sender, error) => {
                this._app.error.fire(this._app, error, this);
            });
            return service;
        }
        reload() {
            this.app.reload(this);
        }
        get element() {
            return this._element;
        }
        get name() {
            return this._name;
        }
        get url() {
            return this._url;
        }
        get app() {
            return this._app;
        }
        get container() {
            return this._container;
        }
    }
    exports.Page = Page;
    class PageDisplayerImplement {
        show(page, previous) {
            page.element.style.display = 'block';
            if (previous != null) {
                previous.element.style.display = 'none';
            }
            return Promise.resolve();
        }
        hide(page, previous) {
            page.element.style.display = 'none';
            if (previous != null) {
                previous.element.style.display = 'block';
            }
            return Promise.resolve();
        }
    }
    exports.PageDisplayerImplement = PageDisplayerImplement;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./out/PageMaster.js":
/*!***************************!*\
  !*** ./out/PageMaster.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! maishu-chitu-service */ "maishu-chitu-service"), __webpack_require__(/*! ./Page */ "./out/Page.js"), __webpack_require__(/*! ./Application */ "./out/Application.js"), __webpack_require__(/*! ./Errors */ "./out/Errors.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, maishu_chitu_service_1, Page_1, Application_1, Errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PageMaster {
        constructor(containers, parser) {
            this.pageCreated = maishu_chitu_service_1.Callbacks();
            this.pageShowing = maishu_chitu_service_1.Callbacks();
            this.pageShown = maishu_chitu_service_1.Callbacks();
            this.pageType = Page_1.Page;
            this.pageDisplayType = Page_1.PageDisplayerImplement;
            this.cachePages = {};
            this.page_stack = new Array();
            this.nodes = {};
            this.MAX_PAGE_COUNT = 100;
            this.pageTagName = "div";
            this.pagePlaceholder = PageMaster.defaultPagePlaceholder;
            this.error = maishu_chitu_service_1.Callbacks();
            this._defaultPageNodeParser = null;
            this.parser = parser || this.defaultPageNodeParser;
            if (!containers)
                throw Errors_1.Errors.argumentNull("containers");
            this.parser.actions = this.parser.actions || {};
            this.containers = containers;
            this.pageContainers = {};
        }
        sendMessage(sender, page, message) {
            let pages;
            if (typeof page == "string")
                pages = this.page_stack.filter(o => o.name == page);
            else
                pages = this.page_stack.filter(o => o instanceof page);
            pages.forEach(p => {
                p.messageReceived.fire(sender, message);
            });
        }
        get defaultPageNodeParser() {
            if (this._defaultPageNodeParser == null) {
                let nodes = {};
                this._defaultPageNodeParser = {
                    actions: {},
                    parse: (pageName) => {
                        let node = nodes[pageName];
                        if (node == null) {
                            let path = `modules_${pageName}`.split('_').join('/');
                            node = { action: this.createDefaultAction(path, this.loadjs), name: pageName };
                            nodes[pageName] = node;
                        }
                        return node;
                    }
                };
            }
            return this._defaultPageNodeParser;
        }
        createDefaultAction(url, loadjs) {
            return (page) => __awaiter(this, void 0, void 0, function* () {
                let actionExports = yield loadjs(url);
                if (!actionExports)
                    throw Errors_1.Errors.exportsCanntNull(url);
                let _action = actionExports.default;
                if (_action == null) {
                    throw Errors_1.Errors.canntFindAction(page.name);
                }
                let result;
                if (PageMaster.isClass(_action)) {
                    let action = _action;
                    result = new action(page, this);
                }
                else {
                    let action = _action;
                    result = action(page, this);
                }
                return result;
            });
        }
        loadjs(path) {
            return new Promise((reslove, reject) => {
                requirejs([path], function (result) {
                    reslove(result);
                }, function (err) {
                    reject(err);
                });
            });
        }
        on_pageCreated(page) {
            return this.pageCreated.fire(this, page);
        }
        get currentPage() {
            if (this.page_stack.length > 0)
                return this.page_stack[this.page_stack.length - 1];
            return null;
        }
        cachePageKey(containerName, pageUrl) {
            let key = `${containerName}_${pageUrl}`;
            return key;
        }
        getPage(pageUrl, containerName, values) {
            if (!pageUrl)
                throw Errors_1.Errors.argumentNull('pageUrl');
            let key = this.cachePageKey(containerName, pageUrl);
            values = values || {};
            let cachePage = this.cachePages[key];
            if (cachePage != null) {
                let r = Application_1.parseUrl(pageUrl);
                cachePage.data = Object.assign(values || {}, r.values);
                return { page: cachePage, isNew: false };
            }
            let page = this.createPage(pageUrl, containerName, values);
            this.cachePages[key] = page;
            this.on_pageCreated(page);
            return { page, isNew: true };
        }
        createPage(pageUrl, containerName, values) {
            if (!pageUrl)
                throw Errors_1.Errors.argumentNull('pageUrl');
            if (!containerName)
                throw Errors_1.Errors.argumentNull('containerName');
            values = values || {};
            let r = Application_1.parseUrl(pageUrl);
            let element = this.createPageElement(r.pageName, containerName);
            let displayer = new this.pageDisplayType(this);
            let container = this.containers[containerName];
            if (!container)
                throw Errors_1.Errors.containerIsNotExists(containerName);
            console.assert(this.pageType != null);
            let page = new this.pageType({
                app: this,
                url: pageUrl,
                data: values,
                displayer,
                element,
                container: { name: containerName, element: container },
            });
            let showing = (sender) => {
                for (let key in this.containers) {
                    if (key == sender.container.name) {
                        sender.container.element.style.removeProperty('display');
                    }
                    else {
                        this.containers[key].style.display = 'none';
                    }
                }
                this.pageShowing.fire(this, sender);
            };
            let shown = (sender) => {
                this.pageShown.fire(this, sender);
            };
            page.showing.add(showing);
            page.shown.add(shown);
            page.closed.add(() => {
                page.showing.remove(showing);
                page.shown.remove(shown);
                let key = this.cachePageKey(page.container.name, page.url);
                delete this.cachePages[key];
                this.page_stack = this.page_stack.filter(o => o != page);
            });
            return page;
        }
        createPageElement(pageName, containerName) {
            if (!containerName)
                throw Errors_1.Errors.argumentNull('containerName');
            let container = this.containers[containerName];
            if (!container)
                throw Errors_1.Errors.containerIsNotExists(containerName);
            let placeholder = container.querySelector(`.${this.pagePlaceholder}`);
            if (placeholder == null)
                placeholder = container;
            let element = document.createElement(this.pageTagName);
            placeholder.appendChild(element);
            return element;
        }
        showPage(pageUrl, args, forceRender) {
            args = args || {};
            forceRender = forceRender == null ? false : true;
            let values = {};
            let funs = {};
            for (let key in args) {
                let arg = args[key];
                if (typeof arg == 'function') {
                    funs[key] = arg;
                }
                else {
                    values[key] = arg;
                }
            }
            let r = Application_1.parseUrl(pageUrl);
            values = Object.assign(values, r.values);
            pageUrl = Application_1.createPageUrl(r.pageName, values);
            if (!pageUrl)
                throw Errors_1.Errors.argumentNull('pageName');
            if (this.currentPage != null && this.currentPage.url == pageUrl)
                return this.currentPage;
            let containerName = values.container || this.pageContainers[r.pageName] || Application_1.Application.DefaultContainerName;
            let { page, isNew } = this.getPage(pageUrl, containerName, args);
            if (isNew || forceRender) {
                let action = this.findPageAction(pageUrl);
                if (action == null)
                    throw Errors_1.Errors.actionCanntNull(pageUrl);
                action(page, this);
            }
            page.show();
            this.pushPage(page);
            console.assert(page == this.currentPage, "page is not current page");
            return page;
        }
        reload(page) {
            let action = this.findPageAction(page.url);
            console.assert(action != null);
            action(page, this);
        }
        pushPage(page) {
            this.page_stack.push(page);
            if (this.page_stack.length > this.MAX_PAGE_COUNT) {
                let page = this.page_stack.shift();
                if (page) {
                    page.close();
                }
            }
        }
        findPageAction(pageUrl) {
            let routeData = Application_1.parseUrl(pageUrl);
            let pageName = routeData.pageName;
            let node = this.findPageNode(pageName);
            if (node == null)
                throw Errors_1.Errors.pageNodeNotExists(pageName);
            let action = node.action;
            if (action == null)
                throw Errors_1.Errors.actionCanntNull(pageName);
            return node.action;
        }
        findPageNode(pageName) {
            if (this.nodes[pageName])
                return this.nodes[pageName];
            let node = null;
            let action = this.parser.actions ? this.parser.actions[pageName] : null;
            if (action != null) {
                node = { action, name: pageName };
            }
            if (node == null && this.parser.parse != null) {
                node = this.parser.parse(pageName, this);
                console.assert(node.action != null);
            }
            if (node != null)
                this.nodes[pageName] = node;
            return node;
        }
        closeCurrentPage(passData) {
            var page = this.page_stack.pop();
            if (page == null)
                return;
            page.close();
            if (this.currentPage) {
                if (passData) {
                    console.assert(this.currentPage.data != null);
                    this.currentPage.data = Object.assign(this.currentPage.data, passData);
                }
                this.currentPage.show();
            }
        }
        get pageStack() {
            return this.page_stack;
        }
    }
    PageMaster.defaultPagePlaceholder = "page-placeholder";
    PageMaster.isClass = (function () {
        var toString = Function.prototype.toString;
        function fnBody(fn) {
            return toString.call(fn).replace(/^[^{]*{\s*/, '').replace(/\s*}[^}]*$/, '');
        }
        function isClass(fn) {
            return (typeof fn === 'function' &&
                (/^class(\s|\{\}$)/.test(toString.call(fn)) ||
                    (/^.*classCallCheck\(/.test(fnBody(fn)))));
        }
        return isClass;
    })();
    exports.PageMaster = PageMaster;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./out/index.js":
/*!**********************!*\
  !*** ./out/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Application */ "./out/Application.js"), __webpack_require__(/*! ./PageMaster */ "./out/PageMaster.js"), __webpack_require__(/*! ./Page */ "./out/Page.js"), __webpack_require__(/*! maishu-chitu-service */ "maishu-chitu-service")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Application_1, PageMaster_1, Page_1, maishu_chitu_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Application = Application_1.Application;
    exports.parseUrl = Application_1.parseUrl;
    exports.createPageUrl = Application_1.createPageUrl;
    exports.PageMaster = PageMaster_1.PageMaster;
    exports.Page = Page_1.Page;
    exports.Callback = maishu_chitu_service_1.Callback;
    exports.Callbacks = maishu_chitu_service_1.Callbacks;
    exports.ValueStore = maishu_chitu_service_1.ValueStore;
    exports.Service = maishu_chitu_service_1.Service;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "maishu-chitu-service":
/*!***************************************!*\
  !*** external "maishu-chitu-service" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_maishu_chitu_service__;

/***/ })

/******/ })});;
//# sourceMappingURL=index.js.map