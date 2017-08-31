webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_index_paginas__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTING; });


var APP_ROUTES = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__components_index_paginas__["a" /* PortafolioComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__components_index_paginas__["b" /* AboutoComponent */] },
    { path: 'producto/:id', component: __WEBPACK_IMPORTED_MODULE_1__components_index_paginas__["c" /* ProductoComponent */] },
    { path: 'buscar/:termino', component: __WEBPACK_IMPORTED_MODULE_1__components_index_paginas__["d" /* SearchComponent */] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var APP_ROUTING = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES, { useHash: true });
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_informacion_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(_is) {
        this._is = _is;
        this.anio = new Date().getFullYear();
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(161)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_informacion_service__["a" /* InformacionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_informacion_service__["a" /* InformacionService */]) === "function" && _a || Object])
], FooterComponent);

var _a;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_informacion_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(_is, router) {
        this._is = _is;
        this.router = router;
    }
    HeaderComponent.prototype.buscarProducto = function (termino) {
        this.router.navigate(['buscar', termino]);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(162)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_informacion_service__["a" /* InformacionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_informacion_service__["a" /* InformacionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abouto_abouto_component__ = __webpack_require__(62);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__abouto_abouto_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portafolio_portafolio_component__ = __webpack_require__(63);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__portafolio_portafolio_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__producto_producto_component__ = __webpack_require__(64);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__producto_producto_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search_component__ = __webpack_require__(65);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__search_search_component__["a"]; });




//# sourceMappingURL=index.paginas.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<section class=\"ae-container-fluid rk-main\">\n  <!-- <app-portafolio></app-portafolio> -->\n  <!-- <app-producto></app-producto> -->\n  <router-outlet></router-outlet>\n</section>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports = "<div class=\"ae-grid au-xs-ta-center au-mb-4 animated fadeIn\">\n\n  <div *ngFor=\"let miembro of _is.equipo\"\n       class=\"ae-grid__item item-lg-4 ae-kappa au-mb-3\">\n    <img [src]=\"miembro.url\" alt=\"\" class=\"au-mb-3\">\n    <h5 class=\"ae-u-bolder au-mt-2\">{{ miembro.nombre }}</h5>\n    <p class=\"ae-u-bolder au-mb-3\">{{ miembro.subtitulo}}</p>\n    <p class=\"au-lg-ta-left au-mb-3 au-pl-4 au-pr-4\">\n      {{ miembro.frase }}.\n    </p>\n    <a href=\"https://twitter.com/{{ miembro.twitter}}\" target=\"_blank\" class=\"ae-u-bolder au-underline\">{{ miembro.twitter }}</a>\n  </div>\n\n</div>\n\n<div class=\"ae-grid au-pt-2\">\n  <div class=\"ae-grid__item item-lg-8 item-lg--offset-2\">\n    <h4 class=\"ae-u-bolder\">Title example</h4>\n    <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>\n  </div>\n</div>\n<div class=\"ae-grid ae-grid--alt au-xs-ptp-1\">\n  <div class=\"ae-grid__item--alt item-lg-4\">\n    <h6 class=\"ae-u-boldest\">About Us</h6>\n    <p class=\"au-lh-3\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n  </div>\n  <div class=\"ae-grid__item--alt item-lg-4\">\n    <h6 class=\"ae-u-boldest\">Our Mission</h6>\n    <p class=\"au-lh-3\">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n  </div>\n  <div class=\"ae-grid__item--alt item-lg-4\">\n    <h6 class=\"ae-u-boldest\">Our Clients</h6>\n    <p class=\"au-lh-3\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>\n    <p class=\"au-lh-3\">Nemo enim ipsam voluptatem quia voluptas</p>\n  </div>\n</div>\n<p class=\"au-flex au-pt-4 group-buttons\">\n  <a href=\"portfolio.html\" class=\"au-mt-4 arrow-button arrow-button--right arrow-button--out\">View Our Portfolio<span class=\"arrow-cont\">\n      <svg>\n        <use xlink:href=\"assets/img/symbols.svg#arrow\"></use>\n      </svg></span>\n    </a>\n</p>\n"

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<footer class=\"ae-container-fluid rk-footer \">\n  <div class=\"ae-grid ae-grid--collapse\">\n    <div class=\"ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-left\">\n      <ul class=\"rk-menu rk-footer-menu\">\n        <li class=\"rk-menu__item\" routerLinkActive=\"active\">\n          <a routerLink=\"about\" class=\"rk-menu__link\">Sobre nosotros</a>\n        </li>\n        <li class=\"rk-menu__item\" routerLinkActive=\"active\">\n          <a routerLink=\"\" class=\"rk-menu__link\">Documentos</a>\n        </li>\n        <li class=\"rk-menu__item\" routerLinkActive=\"active\">\n          <a routerLink=\"\" class=\"rk-menu__link\">Contátanos</a>\n        </li>\n      </ul>\n      <p class=\"rk-footer__text rk-footer__copy \"> <span class=\"ae-u-bold\">© </span><span class=\"ae-u-bolder\">{{ anio }}{{ _is.info.nombre_corto }}</span> Todos los derechos reservados.</p>\n    </div>\n    <div class=\"ae-grid__item item-lg-4 au-xs-ta-center\">\n      <a [href]=\"_is.info.facebook\" target=\"_blank\" class=\"rk-social-btn \">\n        <svg>\n          <use xlink:href=\"assets/img/symbols.svg#icon-facebook\"></use>\n        </svg>\n      </a>\n      <a [href]=\"_is.info.twitter\" target=\"_blank\" class=\"rk-social-btn \">\n        <svg>\n          <use xlink:href=\"assets/img/symbols.svg#icon-twitter\"></use>\n        </svg>\n      </a>\n      <a [href]=\"_is.info.instagram\" target=\"_blank\" class=\"rk-social-btn \">\n        <svg>\n          <use xlink:href=\"assets/img/symbols.svg#icon-pinterest\"></use>\n        </svg>\n      </a>\n        <!-- <a href=\"#0\" class=\"rk-social-btn \">\n        <svg>\n          <use xlink:href=\"assets/img/symbols.svg#icon-tumblr\"></use>\n        </svg></a> -->\n      </div>\n    <div class=\"ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-right\">\n      <p class=\"rk-footer__text rk-footer__contact \"> <span class=\"ae-u-bold\">Email: </span><span class=\"ae-u-bolder\"> <a href=\"mailTo:{{ _is.info.email }}\" class=\"rk-dark-color \">{{ _is.info.email }}</a></span></p>\n      <p class=\"rk-footer__text rk-footer__by\">Creado por: <a [href]=\"_is.info.pagina_autor\" target=\"_blank\" class=\"ae-u-bolder\">{{_is.info.nombre_corto }}.</a></p>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = "<header class=\"ae-container-fluid ae-container-fluid--full rk-header \">\n  <input type=\"checkbox\" id=\"mobile-menu\" class=\"rk-mobile-menu\">\n  <label for=\"mobile-menu\">\n    <svg>\n      <use xlink:href=\"assets/img/symbols.svg#bar\"></use>\n    </svg>\n    <svg>\n      <use xlink:href=\"assets/img/symbols.svg#bar\"></use>\n    </svg>\n    <svg>\n      <use xlink:href=\"assets/img/symbols.svg#bar\"></use>\n    </svg>\n  </label>\n  <div class=\"ae-container-fluid rk-topbar\">\n    <h1 class=\"rk-logo\">\n      <a routerLink=\"/\">{{_is.info.titulo }}<sup>tm</sup></a>\n    </h1>\n    <nav class=\"rk-navigation\">\n      <ul class=\"rk-menu\">\n        <li class=\"rk-menu__item\" routerLinkActive=\"active\">\n          <a routerLink=\"home\" class=\"rk-menu__link\">Home</a>\n        </li>\n        <li class=\"rk-menu__item\" routerLinkActive=\"active\">\n          <a routerLink=\"about\" class=\"rk-menu__link\">Sobre nosotros</a>\n        </li>\n        <!-- <li class=\"rk-menu__item\" routerLinkActive=\"active\">\n          <a href=\"blog.html\" class=\"rk-menu__link\">Blog</a>\n        </li>\n        <li class=\"rk-menu__item\" routerLinkActive=\"active\">\n          <a href=\"#0\" class=\"rk-menu__link\">Pages</a>\n          <nav class=\"rk-menu__sub\">\n            <ul class=\"rk-container\">\n              <li class=\"rk-menu__item\"><a href=\"about.html\" class=\"rk-menu__link\">About</a></li>\n              <li class=\"rk-menu__item\"><a href=\"documentation.html\" class=\"rk-menu__link\">Documentation</a></li>\n              <li class=\"rk-menu__item\"><a href=\"design-styles.html\" class=\"rk-menu__link\">Design Styles</a></li>\n            </ul>\n          </nav>\n        </li>\n        <li class=\"rk-menu__item\"><a href=\"contact.html\" class=\"rk-menu__link\">Contact Us</a>\n        </li> -->\n      </ul>\n      <div class=\"rk-search\">\n        <input name=\"buscar\"\n               (keyup.enter)=\"buscarProducto( buscarTexto.value )\"\n               #buscarTexto\n               type=\"text\" placeholder=\"Buscar\" id=\"urku-search\" class=\"rk-search-field\">\n        <label for=\"urku-search\">\n          <svg>\n            <use xlink:href=\"assets/img/symbols.svg#icon-search\"></use>\n          </svg>\n        </label>\n      </div>\n    </nav>\n  </div>\n</header>\n"

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "<section class=\"ae-container-fluid ae-container-fluid--inner rk-portfolio animated fadeIn\">\n\n  <!-- <div class=\"au-xs-ta-center au-lg-ta-left\">\n    <ul class=\"rk-menu rk-categories-menu\">\n      <li class=\"rk-menu__item\"><a href=\"portfolio.html\" class=\"rk-menu__link\">Flex</a>\n      </li>\n      <li class=\"rk-menu__item\"><a href=\"portfolio-alt.html\" class=\"rk-menu__link\">Switch</a>\n      </li>\n      <li class=\"rk-menu__item\"><a href=\"portfolio-raw.html\" class=\"rk-menu__link\">Static</a>\n      </li>\n      <li class=\"active rk-menu__item\"><a href=\"portfolio-masonry.html\" class=\"rk-menu__link\">Masonry</a>\n      </li>\n    </ul>\n  </div> -->\n\n  <!-- 1 -->\n  <div align=\"center\" *ngIf=\"_ps.cargando\">\n    <h2>Cargando ...</h2>\n    <div class=\"loader loader--style1\" title=\"0\" align=\"center\">\n    <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n     width=\"40px\" height=\"40px\" viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\" xml:space=\"preserve\">\n    <path opacity=\"0.2\" fill=\"#000\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n      s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n      c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"/>\n    <path fill=\"#000\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n      C22.32,8.481,24.301,9.057,26.013,10.047z\">\n      <animateTransform attributeType=\"xml\"\n        attributeName=\"transform\"\n        type=\"rotate\"\n        from=\"0 20 20\"\n        to=\"360 20 20\"\n        dur=\"0.5s\"\n        repeatCount=\"indefinite\"/>\n      </path>\n    </svg>\n  </div>\n    <p>\n      Espere por favor.\n    </p>\n  </div>\n\n  <div *ngIf=\"_ps.productos.length > 0 && !_ps.cargando\"\n       class=\"ae-masonry ae-masonry-md-2 ae-masonry-xl-4 animated fadeIn\">\n\n    <a *ngFor=\"let producto of _ps.productos\"\n       [routerLink]=\"['/producto', producto.cod]\"\n       class=\"rk-item ae-masonry__item\">\n      <img src=\"assets/productos/{{ producto.url }}.jpg\" alt=\"\">\n      <div class=\"item-meta\">\n        <h2>{{ producto.titulo }}</h2>\n        <p>{{ producto.categoria }}</p>\n      </div>\n    </a>\n\n  </div>\n</section>\n"

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"producto\">\n  <header [ngStyle]=\"{'background-image': 'url( assets/productos/'+cod+'/main.jpg)'}\"\n          class=\"rk-portfolio-cover\">\n    <div class=\"item-inside__meta\">\n      <h1 class=\"ae-u-bolder rk-portfolio-title \">{{ producto.producto }}</h1>\n      <p class=\"ae-theta rk-portfolio-category \">{{ producto.categoria }}</p>\n    </div>\n  </header>\n  <div class=\"ae-container-fluid\">\n    <div class=\"ae-grid ae-grid--collapse rk-portfolio-info \">\n      <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n        <h2 class=\"rk-portfolio-inner-title \">{{ producto.producto }}</h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"ae-container-fluid ae-container-fluid--inner rk-portfolio--inner\">\n    <div class=\"ae-grid ae-grid--collapse au-xs-ptp-1\">\n      <div class=\"ae-grid__item item-lg-5 au-lg-ptp-1\">\n        <h4 class=\"ae-u-bolder\">{{ producto.subtitulo1 }}</h4>\n        <p class=\"ae-eta\">\n          {{ producto.desc1}}\n        </p>\n      </div>\n      <div class=\"ae-grid__item item-lg-6 item-lg--offset-1\">\n        <img src=\"assets/productos/{{ cod }}/pic-1.jpg\" alt=\"Urku Portfolio\">\n      </div>\n    </div>\n    <div class=\"ae-grid ae-grid--collapse\">\n      <div class=\"ae-grid__item item-lg-8\">\n        <img src=\"assets/productos/{{ cod }}/pic-2.jpg\" alt=\"Urku Portfolio\">\n      </div>\n      <div class=\"ae-grid__item item-lg-3 item-lg--offset-1 au-lg-ptp-1\">\n        <p>\n          {{ producto.desc2 }}\n        </p>\n        <p class=\"ae-u-bolder\">{{ producto.subtitulo2 }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = "<section class=\"ae-container-fluid ae-container-fluid--inner rk-portfolio animated fadeIn\">\n\n  <!-- <div class=\"au-xs-ta-center au-lg-ta-left\">\n    <ul class=\"rk-menu rk-categories-menu\">\n      <li class=\"rk-menu__item\"><a href=\"portfolio.html\" class=\"rk-menu__link\">Flex</a>\n      </li>\n      <li class=\"rk-menu__item\"><a href=\"portfolio-alt.html\" class=\"rk-menu__link\">Switch</a>\n      </li>\n      <li class=\"rk-menu__item\"><a href=\"portfolio-raw.html\" class=\"rk-menu__link\">Static</a>\n      </li>\n      <li class=\"active rk-menu__item\"><a href=\"portfolio-masonry.html\" class=\"rk-menu__link\">Masonry</a>\n      </li>\n    </ul>\n  </div> -->\n\n  <!-- 1 -->\n  <div align=\"center\" *ngIf=\"_ps.cargando\">\n    <h2>Cargando ...</h2>\n    <div class=\"loader loader--style1\" title=\"0\" align=\"center\">\n    <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n     width=\"40px\" height=\"40px\" viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\" xml:space=\"preserve\">\n    <path opacity=\"0.2\" fill=\"#000\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n      s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n      c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"/>\n    <path fill=\"#000\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n      C22.32,8.481,24.301,9.057,26.013,10.047z\">\n      <animateTransform attributeType=\"xml\"\n        attributeName=\"transform\"\n        type=\"rotate\"\n        from=\"0 20 20\"\n        to=\"360 20 20\"\n        dur=\"0.5s\"\n        repeatCount=\"indefinite\"/>\n      </path>\n    </svg>\n  </div>\n    <p>\n      Espere por favor.\n    </p>\n  </div>\n\n  <div *ngIf=\"_ps.prodFiltrado.length > 0 && !_ps.cargando\"\n       class=\"ae-masonry ae-masonry-md-2 ae-masonry-xl-4 animated fadeIn\">\n\n    <a *ngFor=\"let producto of _ps.prodFiltrado\"\n       [routerLink]=\"['/producto', producto.cod]\"\n       class=\"rk-item ae-masonry__item\">\n      <img src=\"assets/productos/{{ producto.url }}.jpg\" alt=\"\">\n      <div class=\"item-meta\">\n        <h2>{{ producto.titulo }}</h2>\n        <p>{{ producto.categoria }}</p>\n      </div>\n    </a>\n\n  </div>\n</section>\n"

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformacionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InformacionService = (function () {
    function InformacionService(http) {
        this.http = http;
        this.info = {};
        this.cargada = false;
        this.nosotrosCargada = true;
        this.equipo = [];
        this.cargaInfo();
        this.cargaNosotros();
    }
    InformacionService.prototype.cargaInfo = function () {
        var _this = this;
        this.http.get("assets/data/info.pagina.json")
            .subscribe(function (data) {
            _this.info = data.json();
            _this.cargada = true;
        });
    };
    InformacionService.prototype.cargaNosotros = function () {
        var _this = this;
        this.http.get("https://x3database-c2ca7.firebaseio.com/equipo.json")
            .subscribe(function (data) {
            _this.equipo = data.json();
            _this.nosotrosCargada = true;
        });
    };
    return InformacionService;
}());
InformacionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], InformacionService);

var _a;
//# sourceMappingURL=informacion.service.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductosService = (function () {
    function ProductosService(http) {
        this.http = http;
        this.productos = [];
        this.prodFiltrado = [];
        this.cargando = true;
        this.cargarProductos();
    }
    ProductosService.prototype.buscarProducto = function (termino) {
        var _this = this;
        if (this.productos.length === 0) {
            this.cargarProductos().then(function () {
                _this.filtrarProductos(termino);
            });
        }
        else {
            this.filtrarProductos(termino);
        }
    };
    ProductosService.prototype.filtrarProductos = function (termino) {
        var _this = this;
        this.prodFiltrado = [];
        termino = termino.toLowerCase();
        this.productos.forEach(function (prod) {
            if (prod.categoria.indexOf(termino) >= 0 ||
                prod.titulo.toLowerCase().indexOf(termino) >= 0) {
                _this.prodFiltrado.push(prod);
            }
        });
    };
    ProductosService.prototype.cargarProductos = function () {
        var _this = this;
        this.cargando = true;
        var promesa = new Promise(function (resolve, reject) {
            if (_this.productos.length === 0) {
                var url = 'https://x3database-c2ca7.firebaseio.com/productos_idx.json';
                _this.http.get(url)
                    .subscribe(function (res) {
                    _this.productos = res.json();
                    _this.cargando = false;
                    resolve();
                });
            }
        });
        return promesa;
    };
    ProductosService.prototype.cargarProducto = function (id) {
        var url = "https://x3database-c2ca7.firebaseio.com/productos/" + id + ".json";
        return this.http.get(url);
    };
    return ProductosService;
}());
ProductosService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProductosService);

var _a;
//# sourceMappingURL=productos.service.js.map

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(92);


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_informacion_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutoComponent = (function () {
    function AboutoComponent(_is) {
        this._is = _is;
    }
    return AboutoComponent;
}());
AboutoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-abouto',
        template: __webpack_require__(160)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_informacion_service__["a" /* InformacionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_informacion_service__["a" /* InformacionService */]) === "function" && _a || Object])
], AboutoComponent);

var _a;
//# sourceMappingURL=abouto.component.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_productos_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortafolioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PortafolioComponent = (function () {
    function PortafolioComponent(_ps) {
        this._ps = _ps;
    }
    return PortafolioComponent;
}());
PortafolioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-portafolio',
        template: __webpack_require__(163)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_productos_service__["a" /* ProductosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_productos_service__["a" /* ProductosService */]) === "function" && _a || Object])
], PortafolioComponent);

var _a;
//# sourceMappingURL=portafolio.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_productos_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductoComponent = (function () {
    function ProductoComponent(route, _ps) {
        var _this = this;
        this.route = route;
        this._ps = _ps;
        this.producto = undefined;
        this.cod = undefined;
        route.params.subscribe(function (parametros) {
            _this.cod = parametros['id'];
            _ps.cargarProducto(_this.cod)
                .subscribe(function (res) {
                _this.producto = res.json();
            });
        });
    }
    return ProductoComponent;
}());
ProductoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-producto',
        template: __webpack_require__(164)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_productos_service__["a" /* ProductosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_productos_service__["a" /* ProductosService */]) === "function" && _b || Object])
], ProductoComponent);

var _a, _b;
//# sourceMappingURL=producto.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_productos_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = (function () {
    function SearchComponent(route, _ps) {
        var _this = this;
        this.route = route;
        this._ps = _ps;
        this.termino = undefined;
        route.params.subscribe(function (parametros) {
            _this.termino = parametros['termino'];
            _this._ps.buscarProducto(_this.termino);
        });
    }
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__(165)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_productos_service__["a" /* ProductosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_productos_service__["a" /* ProductosService */]) === "function" && _b || Object])
], SearchComponent);

var _a, _b;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 91;


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(104);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_informacion_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_productos_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_is, _ps) {
        this._is = _is;
        this._ps = _ps;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(159),
        styles: [__webpack_require__(158)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_informacion_service__["a" /* InformacionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_informacion_service__["a" /* InformacionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_productos_service__["a" /* ProductosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_productos_service__["a" /* ProductosService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_informacion_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_productos_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_header_header_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_footer_footer_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_portafolio_portafolio_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_abouto_abouto_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_producto_producto_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_search_search_component__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//Rutas

//Servicios


//Componentes







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_portafolio_portafolio_component__["a" /* PortafolioComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_abouto_abouto_component__["a" /* AboutoComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_producto_producto_component__["a" /* ProductoComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_search_search_component__["a" /* SearchComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* APP_ROUTING */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_informacion_service__["a" /* InformacionService */],
            __WEBPACK_IMPORTED_MODULE_6__services_productos_service__["a" /* ProductosService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.bundle.js.map