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
var statistics_service_1 = require("./statistics.service");
var StatisticsComponent = (function () {
    function StatisticsComponent(statisticsService) {
        this.statisticsService = statisticsService;
        this.isLoaded = false;
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.statisticsService.getStatistics().subscribe(function (values) {
            _this.statistics = values;
            _this.isLoaded = true;
        }, function (error) { return console.log(error); });
    };
    StatisticsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'statistics',
            templateUrl: 'statistics.component.html'
        }), 
        __metadata('design:paramtypes', [statistics_service_1.StatisticsService])
    ], StatisticsComponent);
    return StatisticsComponent;
}());
exports.StatisticsComponent = StatisticsComponent;
//# sourceMappingURL=statistics.component.js.map