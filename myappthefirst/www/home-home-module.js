(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/@ionic-native/speech-recognition/ngx/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic-native/speech-recognition/ngx/index.js ***!
  \********************************************************************/
/*! exports provided: SpeechRecognition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechRecognition", function() { return SpeechRecognition; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SpeechRecognition = /** @class */ (function (_super) {
    __extends(SpeechRecognition, _super);
    function SpeechRecognition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpeechRecognition.prototype.isRecognitionAvailable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isRecognitionAvailable", {}, arguments); };
    SpeechRecognition.prototype.startListening = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "startListening", { "callbackOrder": "reverse", "observable": true }, arguments); };
    SpeechRecognition.prototype.stopListening = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "stopListening", {}, arguments); };
    SpeechRecognition.prototype.getSupportedLanguages = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getSupportedLanguages", {}, arguments); };
    SpeechRecognition.prototype.hasPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "hasPermission", {}, arguments); };
    SpeechRecognition.prototype.requestPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "requestPermission", {}, arguments); };
    SpeechRecognition.pluginName = "SpeechRecognition";
    SpeechRecognition.plugin = "cordova-plugin-speechrecognition";
    SpeechRecognition.pluginRef = "plugins.speechRecognition";
    SpeechRecognition.repo = "https://github.com/pbakondy/cordova-plugin-speechrecognition";
    SpeechRecognition.platforms = ["Android", "iOS"];
    SpeechRecognition = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], SpeechRecognition);
    return SpeechRecognition;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NwZWVjaC1yZWNvZ25pdGlvbi9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQTZHSyxxQ0FBaUI7Ozs7SUFNdEQsa0RBQXNCO0lBWXRCLDBDQUFjLGFBQ1osT0FBMkM7SUFTN0MseUNBQWE7SUFTYixpREFBcUI7SUFTckIseUNBQWE7SUFTYiw2Q0FBaUI7Ozs7OztJQXZETixpQkFBaUI7UUFIN0IsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGlCQUFpQjs0QkEvRzlCO0VBK0d1QyxpQkFBaUI7U0FBM0MsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCB0eXBlIFNwZWVjaFJlY29nbml0aW9uTGlzdGVuaW5nT3B0aW9ucyA9XG4gIHwgU3BlZWNoUmVjb2duaXRpb25MaXN0ZW5pbmdPcHRpb25zSU9TXG4gIHwgU3BlZWNoUmVjb2duaXRpb25MaXN0ZW5pbmdPcHRpb25zQW5kcm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBTcGVlY2hSZWNvZ25pdGlvbkxpc3RlbmluZ09wdGlvbnNJT1Mge1xuICAvKipcbiAgICogdXNlZCBsYW5ndWFnZSBmb3IgcmVjb2duaXRpb24gKGRlZmF1bHQgYFwiZW4tVVNcImApXG4gICAqL1xuICBsYW5ndWFnZT86IHN0cmluZztcblxuICAvKipcbiAgICogdW1iZXIgb2YgcmV0dXJuIG1hdGNoZXMgKGRlZmF1bHQgYDVgKVxuICAgKi9cbiAgbWF0Y2hlcz86IG51bWJlcjtcblxuICAvKipcbiAgICogQWxsb3cgcGFydGlhbCByZXN1bHRzIHRvIGJlIHJldHVybmVkIChkZWZhdWx0IGBmYWxzZWApXG4gICAqL1xuICBzaG93UGFydGlhbD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3BlZWNoUmVjb2duaXRpb25MaXN0ZW5pbmdPcHRpb25zQW5kcm9pZCB7XG4gIC8qKlxuICAgKiB1c2VkIGxhbmd1YWdlIGZvciByZWNvZ25pdGlvbiAoZGVmYXVsdCBgXCJlbi1VU1wiYClcbiAgICovXG4gIGxhbmd1YWdlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBudW1iZXIgb2YgcmV0dXJuIG1hdGNoZXMgKG1heGltdW0gbnVtYmVyIG9mIG1hdGNoZXMpXG4gICAqL1xuICBtYXRjaGVzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBkaXNwbGF5ZWQgcHJvbXB0IG9mIGxpc3RlbmVyIHBvcHVwIHdpbmRvd1xuICAgKi9cbiAgcHJvbXB0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBkaXNwbGF5IGxpc3RlbmVyIHBvcHVwIHdpbmRvdyB3aXRoIHByb21wdCAoZGVmYXVsdCBgdHJ1ZWApXG4gICAqL1xuICBzaG93UG9wdXA/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBbGxvdyBwYXJ0aWFsIHJlc3VsdHMgdG8gYmUgcmV0dXJuZWQgKGRlZmF1bHQgYGZhbHNlYClcbiAgICovXG4gIHNob3dQYXJ0aWFsPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBTcGVlY2ggUmVjb2duaXRpb25cbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzcGVlY2ggcmVjb2duaXRpb24gdXNpbmcgY2xvdWQgc2VydmljZXNcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNwZWVjaFJlY29nbml0aW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zcGVlY2gtcmVjb2duaXRpb24vbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNwZWVjaFJlY29nbml0aW9uOiBTcGVlY2hSZWNvZ25pdGlvbikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqXG4gKiAvLyBDaGVjayBmZWF0dXJlIGF2YWlsYWJsZVxuICogdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5pc1JlY29nbml0aW9uQXZhaWxhYmxlKClcbiAqICAgLnRoZW4oKGF2YWlsYWJsZTogYm9vbGVhbikgPT4gY29uc29sZS5sb2coYXZhaWxhYmxlKSlcbiAqXG4gKiAvLyBTdGFydCB0aGUgcmVjb2duaXRpb24gcHJvY2Vzc1xuICogdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5zdGFydExpc3RlbmluZyhvcHRpb25zKVxuICogICAuc3Vic2NyaWJlKFxuICogICAgIChtYXRjaGVzOiBzdHJpbmdbXSkgPT4gY29uc29sZS5sb2cobWF0Y2hlcyksXG4gKiAgICAgKG9uZXJyb3IpID0+IGNvbnNvbGUubG9nKCdlcnJvcjonLCBvbmVycm9yKVxuICogICApXG4gKlxuICogLy8gU3RvcCB0aGUgcmVjb2duaXRpb24gcHJvY2VzcyAoaU9TIG9ubHkpXG4gKiB0aGlzLnNwZWVjaFJlY29nbml0aW9uLnN0b3BMaXN0ZW5pbmcoKVxuICpcbiAqIC8vIEdldCB0aGUgbGlzdCBvZiBzdXBwb3J0ZWQgbGFuZ3VhZ2VzXG4gKiB0aGlzLnNwZWVjaFJlY29nbml0aW9uLmdldFN1cHBvcnRlZExhbmd1YWdlcygpXG4gKiAgIC50aGVuKFxuICogICAgIChsYW5ndWFnZXM6IHN0cmluZ1tdKSA9PiBjb25zb2xlLmxvZyhsYW5ndWFnZXMpLFxuICogICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gKiAgIClcbiAqXG4gKiAvLyBDaGVjayBwZXJtaXNzaW9uXG4gKiB0aGlzLnNwZWVjaFJlY29nbml0aW9uLmhhc1Blcm1pc3Npb24oKVxuICogICAudGhlbigoaGFzUGVybWlzc2lvbjogYm9vbGVhbikgPT4gY29uc29sZS5sb2coaGFzUGVybWlzc2lvbikpXG4gKlxuICogLy8gUmVxdWVzdCBwZXJtaXNzaW9uc1xuICogdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpXG4gKiAgIC50aGVuKFxuICogICAgICgpID0+IGNvbnNvbGUubG9nKCdHcmFudGVkJyksXG4gKiAgICAgKCkgPT4gY29uc29sZS5sb2coJ0RlbmllZCcpXG4gKiAgIClcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTcGVlY2hSZWNvZ25pdGlvbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXNwZWVjaHJlY29nbml0aW9uJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5zcGVlY2hSZWNvZ25pdGlvbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcGJha29uZHkvY29yZG92YS1wbHVnaW4tc3BlZWNocmVjb2duaXRpb24nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNwZWVjaFJlY29nbml0aW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2hlY2sgZmVhdHVyZSBhdmFpbGFibGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNSZWNvZ25pdGlvbkF2YWlsYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgdGhlIHJlY29nbml0aW9uIHByb2Nlc3NcbiAgICogQHJldHVybiB7UHJvbWlzZTwgc3RyaW5nW10gPn0gbGlzdCBvZiByZWNvZ25pemVkIHRlcm1zXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgc3RhcnRMaXN0ZW5pbmcoXG4gICAgb3B0aW9ucz86IFNwZWVjaFJlY29nbml0aW9uTGlzdGVuaW5nT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgdGhlIHJlY29nbml0aW9uIHByb2Nlc3NcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcExpc3RlbmluZygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBsaXN0IG9mIHN1cHBvcnRlZCBsYW5ndWFnZXNcbiAgICogQHJldHVybiB7UHJvbWlzZTwgc3RyaW5nW10gPn0gbGlzdCBvZiBsYW5ndWFnZXNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U3VwcG9ydGVkTGFuZ3VhZ2VzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgcGVybWlzc2lvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBoYXMgcGVybWlzc2lvblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoYXNQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHBlcm1pc3Npb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");






//import plugin speech
//import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                // SpeechRecognition,
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <p>Is listening ? : {{ isListening }}</p>\n  <button ion-button (click)=\"getPermission()\">Get Permission</button>\n  <button ion-button (click)=\"listen()\">\n    <div>\n      <ion-icon name=\"mic\">\n        <label>Speak to me</label>\n      </ion-icon>\n    </div>\n  </button>\n\n  <ion-card>\n    <ion-card-content *ngFor=\"let match of matches\">\n      <p>{{ match }}</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/speech-recognition/ngx */ "./node_modules/@ionic-native/speech-recognition/ngx/index.js");



//add to plugin


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, speech, zone) {
        this.navCtrl = navCtrl;
        this.speech = speech;
        this.zone = zone;
        this.isListening = false;
    }
    HomePage.prototype.hasPermission = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var permission, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.speech.hasPermission()];
                    case 1:
                        permission = _a.sent();
                        console.log(permission);
                        return [2 /*return*/, permission];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.getPermission = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                try {
                    this.speech.requestPermission();
                }
                catch (e) {
                    console.log(e);
                }
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.listen = function () {
        console.log('listen action triggered');
        if (this.isListening) {
            this.speech.stopListening();
            this.toggleListenMode();
            return;
        }
        this.toggleListenMode();
        var _this = this;
        this.speech.startListening()
            .subscribe(function (matches) {
            _this.zone.run(function () {
                _this.matches = matches;
            });
        }, function (error) { return console.error(error); });
    };
    HomePage.prototype.toggleListenMode = function () {
        this.isListening = this.isListening ? false : true;
        console.log('listening mode is now : ' + this.isListening);
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_3__["SpeechRecognition"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map