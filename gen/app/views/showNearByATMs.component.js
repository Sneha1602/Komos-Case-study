//
// Created by IFML2NG2 on 2018/03/26 23:19:34
//
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
// Angular Imports
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
// Service Imports
var logger_service_1 = require('../services/logger.service');
var authentication_service_1 = require('../services/authentication.service');
var data_service_1 = require('../services/data.service');
var displayProperties_service_1 = require('../services/displayProperties.service');
// domain concept imports
var ShowNearByATMsComponent = (function () {
    function ShowNearByATMsComponent() {
    }
    ShowNearByATMsComponent.prototype.onMapsReady = function () {
        var paderborn = new google.maps.LatLng(51.718921, 8.757509);
        var mapOptions = {
            zoom: 9,
            center: paderborn
        };
        this.map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
        var marker = new google.maps.Marker({
            position: paderborn
        });
        //google.maps.event.addListener(marker, 'click', ( () => this.select.next("i was a map click")) )
        marker.setMap(this.map);
    };
    ShowNearByATMsComponent.prototype.ngAfterViewInit = function () {
        window.googleMapsReady = this.onMapsReady.bind(this);
        var script = document.createElement("script");
        script.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(script);
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyASK-EACxPsXrQauWhZ83HSYpuq7rh0yyg&callback=googleMapsReady";
    };
    ShowNearByATMsComponent = __decorate([
        core_1.Component({
            selector: 'showNearByATMs',
            templateUrl: 'app/views/showNearByATMs.component.html',
            providers: [logger_service_1.LoggerService, displayProperties_service_1.DisplayPropertiesService, authentication_service_1.AuthenticationService, data_service_1.DataService],
            directives: [common_1.NgClass],
            pipes: []
        }), 
        __metadata('design:paramtypes', [])
    ], ShowNearByATMsComponent);
    return ShowNearByATMsComponent;
}());
exports.ShowNearByATMsComponent = ShowNearByATMsComponent;
//# sourceMappingURL=showNearByATMs.component.js.map