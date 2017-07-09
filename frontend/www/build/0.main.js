webpackJsonp([0],{

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_one_gig__ = __webpack_require__(746);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewOneGigPageModule", function() { return ViewOneGigPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewOneGigPageModule = (function () {
    function ViewOneGigPageModule() {
    }
    return ViewOneGigPageModule;
}());
ViewOneGigPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__view_one_gig__["a" /* ViewOneGigPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_one_gig__["a" /* ViewOneGigPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__view_one_gig__["a" /* ViewOneGigPage */]
        ]
    })
], ViewOneGigPageModule);

//# sourceMappingURL=view-one-gig.module.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__colleague_list_colleague_list__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environment_config__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewOneGigPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewOneGigPage = (function () {
    function ViewOneGigPage(navCtrl, navParams, authHttp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authHttp = authHttp;
        this.item = this.navParams.get("item");
    }
    ViewOneGigPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.objectParser();
        this.authHttp.get(__WEBPACK_IMPORTED_MODULE_4__environment_config__["a" /* SERVER_URL */] + "recommendations/" + this.item.id).map(function (data) { return data.json(); })
            .subscribe(function (data) {
            _this.displayRecommendations(data);
        }, //
        function (//
            err) { return console.log(err); });
    };
    ViewOneGigPage.prototype.objectParser = function () {
        this.seeking = this.item.seeking;
        this.description = this.item.description;
        this.location = this.item.location;
        this.date = this.item.date;
    };
    ViewOneGigPage.prototype.recommend = function () {
        //send this object aka item to next page, the next page should display all friends, 
        //and once clicked it should alter the post and add the person
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__colleague_list_colleague_list__["a" /* ColleagueListPage */], { item: this.item });
    };
    ViewOneGigPage.prototype.displayRecommendations = function (recommedation) {
        this.recommendations = recommedation;
    };
    return ViewOneGigPage;
}());
ViewOneGigPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-view-one-gig',template:/*ion-inline-start:"/Users/anthonyjones/dev/Word-Of-Mouth/frontend/src/pages/view-one-gig.1/view-one-gig.html"*/'<!--\n  Generated template for the ViewOneGigPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <img class="header-logo" src="assets/img/headerlogo.png">\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <h1>{{seeking}} </h1><br />\n  <h3>Description: {{description}}</h3>\n  <h3>Location: {{location}} </h3>\n  <p>Date: {{date}}</p>\n\n  <button (click)="recommend()">Recommend A Colleague</button>\n\n\n  \n\n</ion-content>'/*ion-inline-end:"/Users/anthonyjones/dev/Word-Of-Mouth/frontend/src/pages/view-one-gig.1/view-one-gig.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"]])
], ViewOneGigPage);

//# sourceMappingURL=view-one-gig.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map