(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas id=\"snow\" #snow></canvas>\r\n<div class=\"row container\">\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"greet\">\r\n      <img src=\"./assets/text.png\" alt=\"greet\" class=\"col-md-12\">\r\n    </div>\r\n    <div class=\"main\">\r\n      <div>\r\n        <img src=\"/assets/fmb.png\" alt=\"logo Fresh Media Bulgaria\" class=\"fmb-logo\"\r\n             (click)=\"playAudioXmas($event, 'http://play.global.audio/radio1-koleda.aac')\">\r\n      </div>\r\n      <div class=\"row\">\r\n        <div *ngFor=\"let radio of radios\" class=\"col-sm-12 col-md-1\">\r\n          <a [href]=\"'#' + radio.class\" (mouseenter)=\"hoverTree($event)\" [class]=\"radio.class\"\r\n             (mouseleave)=\"unHoverTree($event)\"\r\n             (click)=\"playAudio($event, radio.stream)\"><img [class]=\"radio.imgClass\" [src]=\"radio.img\"\r\n                                                            [alt]=\"radio.name\"></a>\r\n          <a [href]=\"radio.link\" target=\"_blank\"><img class=\"logo\" [src]=\"radio.logo\" [alt]=\"radio.name\"></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.row {\n  margin: 0 auto; }\n  div.row .main {\n    text-align: center;\n    z-index: 1;\n    position: relative;\n    background-color: white;\n    border-radius: 15px;\n    padding: 13px; }\n  div.row .main .fmb-logo {\n      width: 200px;\n      margin-top: 35px;\n      z-index: 2;\n      position: relative; }\n  div.row .main div.row {\n      margin: -140px 0 35px;\n      z-index: 1;\n      position: relative; }\n  @media screen and (max-width: 750px) {\n        div.row .main div.row {\n          margin: 0; } }\n  div.row .main div.row div.col-md-1 {\n        display: grid;\n        margin-left: 50px;\n        padding: 0; }\n  @media screen and (max-width: 750px) {\n          div.row .main div.row div.col-md-1 {\n            margin-left: 0; } }\n  div.row .main div.row div.col-md-1:first-child {\n          margin-left: 0; }\n  div.row .main div.row div.col-md-1 a.bgradio img, div.row .main div.row div.col-md-1 a.radio1 img, div.row .main div.row div.col-md-1 a.radio1rock img, div.row .main div.row div.col-md-1 a.radioenergy img, div.row .main div.row div.col-md-1 a.city img, div.row .main div.row div.col-md-1 a.radioveronika img, div.row .main div.row div.col-md-1 a.nova img, div.row .main div.row div.col-md-1 a.novanews img {\n          padding-top: 200px;\n          width: 90px; }\n  div.row .main div.row div.col-md-1 a.bgradio:hover, div.row .main div.row div.col-md-1 a.bgradio img.active, div.row .main div.row div.col-md-1 a.radio1:hover, div.row .main div.row div.col-md-1 a.radio1 img.active, div.row .main div.row div.col-md-1 a.radio1rock:hover, div.row .main div.row div.col-md-1 a.radio1rock img.active, div.row .main div.row div.col-md-1 a.radioenergy:hover, div.row .main div.row div.col-md-1 a.radioenergy img.active, div.row .main div.row div.col-md-1 a.city:hover, div.row .main div.row div.col-md-1 a.city img.active, div.row .main div.row div.col-md-1 a.radioveronika:hover, div.row .main div.row div.col-md-1 a.radioveronika img.active, div.row .main div.row div.col-md-1 a.nova:hover, div.row .main div.row div.col-md-1 a.nova img.active, div.row .main div.row div.col-md-1 a.novanews:hover, div.row .main div.row div.col-md-1 a.novanews img.active {\n          background-repeat: no-repeat;\n          background-position: center;\n          background-position-y: top;\n          background-size: 2px; }\n  div.row .main div.row div.col-md-1 a.bgradio:hover, div.row .main div.row div.col-md-1 a.bgradio img.active {\n          background-image: url(\"/assets/LINE_UP.gif\"); }\n  div.row .main div.row div.col-md-1 a.radio1:hover, div.row .main div.row div.col-md-1 a.radio1 img.active, div.row .main div.row div.col-md-1 a.radio1rock:hover, div.row .main div.row div.col-md-1 a.radio1rock img.active {\n          background-image: url(\"/assets/radio1/R1_LINE.gif\"); }\n  div.row .main div.row div.col-md-1 a.radioenergy:hover, div.row .main div.row div.col-md-1 a.radioenergy img.active, div.row .main div.row div.col-md-1 a.radioveronika:hover, div.row .main div.row div.col-md-1 a.radioveronika img.active {\n          background-image: url(\"/assets/radioenergy/NRJ_VERONIKA_LINE.gif\"); }\n  div.row .main div.row div.col-md-1 a.city:hover, div.row .main div.row div.col-md-1 a.city img.active {\n          background-image: url(\"/assets/city/CITY_LINE.gif\"); }\n  div.row .main div.row div.col-md-1 a.nova:hover, div.row .main div.row div.col-md-1 a.nova img.active {\n          background-image: url(\"/assets/nova/NOVA_LINE.gif\"); }\n  div.row .main div.row div.col-md-1 a.novanews:hover, div.row .main div.row div.col-md-1 a.novanews img.active {\n          background-image: url(\"/assets/novanews/NOVANEWS_LINE.gif\"); }\n  div.row .main div.row div.col-md-1 a {\n          text-align: center; }\n  div.row .main div.row div.col-md-1 a .logo {\n            width: 90px;\n            margin-top: 10px; }\n  div.row .greet {\n    text-align: center;\n    margin-top: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXHByb2plY3RzXFxuZ2FcXGNocmlzbWFzQ2FyZDIwMTgvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWMsRUF5R2Y7RUExR0Q7SUFJSSxtQkFBa0I7SUFDbEIsV0FBVTtJQUNWLG1CQUFrQjtJQUNsQix3QkFBdUI7SUFDdkIsb0JBQW1CO0lBQ25CLGNBQWEsRUEyRmQ7RUFwR0g7TUFZTSxhQUFZO01BQ1osaUJBQWdCO01BQ2hCLFdBQVU7TUFDVixtQkFBa0IsRUFDbkI7RUFoQkw7TUFtQk0sc0JBQXFCO01BSXJCLFdBQVU7TUFDVixtQkFBa0IsRUEyRW5CO0VBL0VDO1FBcEJOO1VBcUJRLFVBQVMsRUE4RVosRUFBQTtFQW5HTDtRQTJCUSxjQUFhO1FBQ2Isa0JBQWlCO1FBQ2pCLFdBQVUsRUFxRVg7RUFwRUM7VUE5QlI7WUErQlUsZUFBYyxFQW1FakIsRUFBQTtFQWxHUDtVQW1DVSxlQUFjLEVBQ2Y7RUFwQ1Q7VUF3Q1ksbUJBQWtCO1VBQ2xCLFlBQVcsRUFDWjtFQTFDWDtVQTZDWSw2QkFBNEI7VUFDNUIsNEJBQTJCO1VBQzNCLDJCQUEwQjtVQUMxQixxQkFBb0IsRUFDckI7RUFqRFg7VUF1RGMsNkNBQTRDLEVBQzdDO0VBeERiO1VBNkRjLG9EQUFtRCxFQUNwRDtFQTlEYjtVQW1FYyxtRUFBa0UsRUFDbkU7RUFwRWI7VUF5RWMsb0RBQW1ELEVBQ3BEO0VBMUViO1VBK0VjLG9EQUFtRCxFQUNwRDtFQWhGYjtVQXFGYyw0REFBMkQsRUFDNUQ7RUF0RmI7VUEyRlUsbUJBQWtCLEVBTW5CO0VBakdUO1lBOEZZLFlBQVc7WUFDWCxpQkFBZ0IsRUFDakI7RUFoR1g7SUF1R0ksbUJBQWtCO0lBQ2xCLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5yb3cge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAubWFpbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTNweDtcclxuXHJcbiAgICAuZm1iLWxvZ28ge1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICBkaXYucm93IHtcclxuICAgICAgbWFyZ2luOiAtMTQwcHggMCAzNXB4O1xyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICBkaXYuY29sLW1kLTEge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYS5iZ3JhZGlvLCBhLnJhZGlvMSwgYS5yYWRpbzFyb2NrLCBhLnJhZGlvZW5lcmd5LCBhLmNpdHksIGEucmFkaW92ZXJvbmlrYSwgYS5ub3ZhLCBhLm5vdmFuZXdzIHtcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpob3ZlciwgJiBpbWcuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IHRvcDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICYuYmdyYWRpbyB7XHJcbiAgICAgICAgICAgICY6aG92ZXIsICYgaW1nLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9MSU5FX1VQLmdpZlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYucmFkaW8xLCAmLnJhZGlvMXJvY2sge1xyXG4gICAgICAgICAgICAmOmhvdmVyLCAmIGltZy5hY3RpdmUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvcmFkaW8xL1IxX0xJTkUuZ2lmXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5yYWRpb2VuZXJneSwgJi5yYWRpb3Zlcm9uaWthIHtcclxuICAgICAgICAgICAgJjpob3ZlciwgJiBpbWcuYWN0aXZlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3JhZGlvZW5lcmd5L05SSl9WRVJPTklLQV9MSU5FLmdpZlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYuY2l0eSB7XHJcbiAgICAgICAgICAgICY6aG92ZXIsICYgaW1nLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9jaXR5L0NJVFlfTElORS5naWZcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLm5vdmEge1xyXG4gICAgICAgICAgICAmOmhvdmVyLCAmIGltZy5hY3RpdmUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvbm92YS9OT1ZBX0xJTkUuZ2lmXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5ub3ZhbmV3cyB7XHJcbiAgICAgICAgICAgICY6aG92ZXIsICYgaW1nLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9ub3ZhbmV3cy9OT1ZBTkVXU19MSU5FLmdpZlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ncmVldCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.radios = [
            {
                img: './assets/BG_UNHOVER.gif',
                imgHover: './assets/BG_HOVER.gif',
                imgUnHover: './assets/BG_UNHOVER.gif',
                name: 'Бг Радио',
                link: 'https://www.bgradio.bg',
                logo: './assets/LOGO_BG.png',
                class: 'bgradio',
                imgClass: '',
                stream: 'http://play.global.audio/bgradio.aac',
                play: false,
                snowColor: '#ECA032'
            },
            {
                img: './assets/radio1/R1_UNHOVER.gif',
                imgHover: './assets/radio1/R1_HOVER.gif',
                imgUnHover: './assets/radio1/R1_UNHOVER.gif',
                name: 'Радио 1',
                link: 'https://www.radio1.bg',
                logo: './assets/radio1/R1_LOGO.png',
                class: 'radio1',
                imgClass: '',
                stream: 'http://play.global.audio/radio1.aac',
                play: false,
                snowColor: '#EC6E31'
            },
            {
                img: './assets/radio1/R1_UNHOVER.gif',
                imgHover: './assets/radio1/R1_HOVER.gif',
                imgUnHover: './assets/radio1/R1_UNHOVER.gif',
                name: 'Радио 1 Rock',
                link: 'https://www.radio1rock.bg',
                logo: './assets/radio1/R1R.png',
                class: 'radio1rock',
                imgClass: '',
                stream: 'http://play.global.audio/radio1rock.aac',
                play: false,
                snowColor: '#EC6E31'
            },
            {
                img: './assets/radioenergy/NRJ_VERONIKA_UNHOVER.gif',
                imgHover: './assets/radioenergy/NRJ_VERONIKA_HOVER.gif',
                imgUnHover: './assets/radioenergy/NRJ_VERONIKA_UNHOVER.gif',
                name: 'Радио Energy',
                link: 'https://www.radioenergy.bg',
                logo: './assets/radioenergy/NRJ.png',
                class: 'radioenergy',
                imgClass: '',
                stream: 'http://play.global.audio/nrj.aac',
                play: false,
                snowColor: '#EB1F2A'
            },
            {
                img: './assets/city/CITY_UN.gif',
                imgHover: './assets/city/CITY_HOVER.gif',
                imgUnHover: './assets/city/CITY_UN.gif',
                name: 'City Radio & TV',
                link: 'https://www.city.bg',
                logo: './assets/city/city.png',
                class: 'city',
                imgClass: '',
                stream: 'http://play.global.audio/city.aac',
                play: false,
                snowColor: '#289df6'
            },
            {
                img: './assets/radioenergy/NRJ_VERONIKA_UNHOVER.gif',
                imgHover: './assets/radioenergy/NRJ_VERONIKA_HOVER.gif',
                imgUnHover: './assets/radioenergy/NRJ_VERONIKA_UNHOVER.gif',
                name: 'Радио Вероника',
                link: 'https://www.radioveronika.bg',
                logo: './assets/radioenergy/veronika.png',
                class: 'radioveronika',
                imgClass: '',
                stream: 'http://play.global.audio/veronika.aac',
                play: false,
                snowColor: '#EB1F2A'
            },
            {
                img: './assets/nova/NOVA_UN.gif',
                imgHover: './assets/nova/NOVA_HOVER.gif',
                imgUnHover: './assets/nova/NOVA_UN.gif',
                name: 'Радио Nova',
                link: 'https://www.radionova.bg',
                logo: './assets/nova/nova.png',
                class: 'nova',
                imgClass: '',
                stream: 'http://play.global.audio/nova.aac',
                play: false,
                snowColor: '#FF1E71'
            },
            {
                img: './assets/novanews/nn.png',
                imgHover: './assets/novanews/NOVANEWS_HOVER.gif',
                imgUnHover: './assets/novanews/nn.png',
                name: 'Радио Нова News',
                link: 'http://www.radionovanews.bg',
                logo: './assets/novanews/novanews.png',
                class: 'novanews',
                imgClass: '',
                stream: 'http://play.global.audio/novanews.ogg',
                play: false,
                snowColor: '#154987'
            },
        ];
        this.currentPlaying = new Audio();
        this.previousRadio = '';
    }
    AppComponent.prototype.hoverTree = function (e) {
        var currentRadio = this.radios.filter(function (r) { return r.class === e.target.className; })[0];
        currentRadio.img = currentRadio.imgHover;
    };
    AppComponent.prototype.unHoverTree = function (e) {
        var currentRadio = this.radios.filter(function (r) { return r.class === e.target.className; })[0];
        if (!currentRadio.play) {
            currentRadio.img = currentRadio.imgUnHover;
        }
    };
    AppComponent.prototype.playAudio = function (e, stream) {
        var _this = this;
        var currentRadio = this.radios.filter(function (r) { return r.class === e.target.parentElement.className; })[0];
        if (!currentRadio.imgClass) {
            currentRadio.imgClass = 'active';
        }
        currentRadio.play = true;
        currentRadio.img = currentRadio.imgHover;
        if (this.previousRadio) {
            var lastRadio = this.radios.filter(function (r) { return r.class === _this.previousRadio; })[0];
            lastRadio.play = false;
            lastRadio.img = lastRadio.imgUnHover;
            if (lastRadio.imgClass) {
                lastRadio.imgClass = '';
            }
            if (!this.currentPlaying.paused) {
                this.currentPlaying.pause();
            }
        }
        if (currentRadio.class === this.previousRadio) {
            this.previousRadio = '';
        }
        else {
            this.previousRadio = currentRadio.class;
            this.currentPlaying.src = stream;
            this.currentPlaying.load();
            var playPromise = this.currentPlaying.play();
            if (playPromise !== undefined) {
                playPromise.then(function (play) {
                    // Automatic playback started!
                    // Show playing UI.
                })
                    .catch(function (error) {
                    // Auto-play was prevented
                    // Show paused UI.
                    _this.currentPlaying.pause();
                    console.log(error);
                });
            }
        }
    };
    AppComponent.prototype.playAudioXmas = function (e, stream) {
        var _this = this;
        if (this.previousRadio) {
            var lastRadio = this.radios.filter(function (r) { return r.class === _this.previousRadio; })[0];
            lastRadio.play = false;
            lastRadio.img = lastRadio.imgUnHover;
            if (lastRadio.imgClass) {
                lastRadio.imgClass = '';
            }
            if (!this.currentPlaying.paused) {
                this.currentPlaying.pause();
            }
        }
        if (!this.currentPlaying.paused) {
            this.currentPlaying.pause();
        }
        else {
            this.currentPlaying.src = stream;
            this.currentPlaying.load();
            var playPromise = this.currentPlaying.play();
            if (playPromise !== undefined) {
                playPromise.then(function (play) {
                    // Automatic playback started!
                    // Show playing UI.
                })
                    .catch(function (error) {
                    // Auto-play was prevented
                    // Show paused UI.
                    _this.currentPlaying.pause();
                    console.log(error);
                });
            }
        }
        this.previousRadio = '';
    };
    AppComponent.prototype.changeSnowColor = function (color) {
        var canvas = this.layout.nativeElement;
        var context = canvas.getContext("2d");
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        context.fillStyle = color;
        context.beginPath();
        context.fill();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("snow"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "layout", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\projects\nga\chrismasCard2018\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map