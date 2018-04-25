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
var ShowNearByATMsComponent = (function () {
    function ShowNearByATMsComponent() {
    }
    ShowNearByATMsComponent.prototype.onMapsReady = function () {
        var _this = this;
        var paderborn = new google.maps.LatLng(51.71, 8.75);
        var mapOptions = {
            zoom: 15,
            center: paderborn,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
        this.infoWindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(this.map);
        service.nearbySearch({
            location: paderborn,
            radius: 500,
            type: ['atm']
        }, function (results, status) {
            _this.callback(results, status);
        });
    };
    ShowNearByATMsComponent.prototype.callback = function (results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                var placeLoc = results[i].geometry.location;
                var marker = new google.maps.Marker({
                    map: this.map,
                    position: results[i].geometry.location
                });
                google.maps.event.addListener(marker, 'click', function () {
                    this.infowindow.setContent(results[i].name);
                    this.infowindow.open(this.map, this);
                });
                var placeLoc = results[i].geometry.location;
                var marker = new google.maps.Marker({
                    position: results[i].geometry.location,
                });
                marker.setMap(this.map);
            }
        }
    };
    ShowNearByATMsComponent.prototype.ngAfterViewInit = function () {
        window.googleMapsReady = this.onMapsReady.bind(this);
        var script = document.createElement("script");
        script.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(script);
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyASK-EACxPsXrQauWhZ83HSYpuq7rh0yyg&libraries=places&callback=googleMapsReady";
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