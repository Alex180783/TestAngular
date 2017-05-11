"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Vopros_i_Otvet = (function () {
    function Vopros_i_Otvet(Is, Ot) {
        this.Is = Is;
        this.Ot = new Array();
    }
    return Vopros_i_Otvet;
}());
exports.Vopros_i_Otvet = Vopros_i_Otvet;
var AppComponent = (function () {
    function AppComponent() {
        this.questions = QUESTIONS;
    }
    AppComponent.prototype.addQuestion = function (Is, Ot) {
        this.questions.push(new Vopros_i_Otvet(Is, Ot));
    };
    ;
    AppComponent.prototype.onSelect = function (Vopros_na_Otvet) {
        console.log(Vopros_na_Otvet);
        this.selectedQuestion = Vopros_na_Otvet;
        console.log(this.selectedQuestion);
    };
    ;
    AppComponent.prototype.addOtvet = function (Otv) {
        var i;
        for (i = 0; i < this.questions.length; i++) {
            if (this.questions[i] == this.selectedQuestion) {
                this.questions[i].Ot.push(Otv);
                return (this.selectedQuestion.Ot);
            }
            ;
        }
        ;
        console.log(this.questions[i].Ot);
    };
    ;
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
;
var QUESTIONS = [];
//# sourceMappingURL=app.component.js.map