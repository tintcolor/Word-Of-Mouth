webpackJsonp([1],{

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gigs__ = __webpack_require__(741);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GigsPageModule", function() { return GigsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GigsPageModule = (function () {
    function GigsPageModule() {
    }
    return GigsPageModule;
}());
GigsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__gigs__["a" /* GigsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gigs__["a" /* GigsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__gigs__["a" /* GigsPage */]
        ]
    })
], GigsPageModule);

//# sourceMappingURL=gigs.module.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_homeService__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_one_gig_view_one_gig__ = __webpack_require__(735);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GigsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the GigsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var GigsPage = (function () {
    function GigsPage(navCtrl, navParams, authHttp, homeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authHttp = authHttp;
        this.homeService = homeService;
        this.mainJob = this.navParams.get("mainPosition");
        this.isAllGigs = this.navParams.get("isAllGigs");
    }
    GigsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.isAllGigs == true) {
            this.authHttp.get("http://localhost:8080/gigs/").map(function (data) { return data.json(); })
                .subscribe(function (data) {
                //console.log(data.json());
                _this.displayGigs(data);
                _this.jobs = data;
            }, //
            function (//
                err) { return console.log(err); });
        }
        else {
            this.authHttp.get("http://localhost:8080/mygigs/" + this.mainJob).map(function (data) { return data.json(); })
                .subscribe(function (data) {
                //console.log(data.json());
                _this.displayGigs(data);
                _this.jobs = data;
            }, //
            function (//
                err) { return console.log(err); });
        }
    };
    GigsPage.prototype.itemTapped = function (event, job) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__view_one_gig_view_one_gig__["a" /* ViewOneGigPage */], {
            item: job
        });
    };
    GigsPage.prototype.displayGigs = function (gigs) {
        console.log(this.jobs == null);
        this.jobs = gigs;
        // for (let gig of gigs) {
        //   console.log(gig);
        //   this.jobs = gig.seeking;
        //   console.log("Above me");
        // }
    };
    return GigsPage;
}());
GigsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-gigs',template:/*ion-inline-start:"/Users/anthonyjones/dev/Word-Of-Mouth/frontend/src/pages/gigs.1/gigs.html"*/'<!--\n  Generated template for the GigsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Gigs looking for someone with your skills</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n <div class="gig-card-list">\n    <button  *ngFor="let job of jobs" (click)="itemTapped($event, job)">\n  \n<ion-card>\n  <!--<img src="img/nin-live.png"/>-->\n  <ion-card-content>\n    <ion-card-title>\n     <span *ngIf="job?.seeking !=null">{{job.seeking}}</span>\n      </ion-card-title>\n    <p>\n        <span *ngIf="job?.seeking !=null">{{job.description}}</span>\n     \n        <span *ngIf="job?.seeking !=rate">{{job.rate}} </span>\n    </p>\n  </ion-card-content>\n</ion-card>\n  \n\n\n\n      <span *ngIf="job?.seeking ==null">There aren\'t any job postings for you at the moment, please check back later</span>\n       \n     \n      \n    </button>\n\n </div>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/anthonyjones/dev/Word-Of-Mouth/frontend/src/pages/gigs.1/gigs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"],
        __WEBPACK_IMPORTED_MODULE_3__home_homeService__["a" /* HomeService */]])
], GigsPage);

//# sourceMappingURL=gigs.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map