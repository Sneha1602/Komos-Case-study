// Angular Imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { AfterViewInit } from '@angular/core';

// Service Imports
import { LoggerService } from '../services/logger.service';
import { AuthenticationService } from '../services/authentication.service';
import { DataService } from '../services/data.service';
import { DisplayPropertiesService } from '../services/displayProperties.service';
import { ResourceService } from '../services/resource.service';

// domain concept imports

declare var google: any;
@Component({
	selector: 'showNearByATMs',
	templateUrl: 'app/views/showNearByATMs.component.html',
	providers: [LoggerService, DisplayPropertiesService, AuthenticationService, DataService],
	directives: [NgClass],
	pipes: []
})

export class ShowNearByATMsComponent implements AfterViewInit {
	private infoWindow;
	private map;
	constructor() {
	}

	onMapsReady() {
		let paderborn = new google.maps.LatLng(51.71, 8.75);
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
		}, (results, status) => {
			this.callback(results, status);
		});
	}

	callback(results, status) {
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
	}

	ngAfterViewInit() {
		(<any>window).googleMapsReady = this.onMapsReady.bind(this);
		var script = document.createElement("script");
		script.type = "text/javascript";
		document.getElementsByTagName("head")[0].appendChild(script);
		script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyASK-EACxPsXrQauWhZ83HSYpuq7rh0yyg&libraries=places&callback=googleMapsReady";

	}

}