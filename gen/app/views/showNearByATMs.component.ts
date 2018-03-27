//
// Created by IFML2NG2 on 2018/03/27 14:40:05
//

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
	providers: [LoggerService,DisplayPropertiesService,AuthenticationService,DataService],
	directives: [NgClass  ],
	pipes: []
})

export class ShowNearByATMsComponent implements AfterViewInit{
		private map: any;
		constructor() {
		}
		onMapsReady(){
		  let paderborn = new google.maps.LatLng(51.71, 8.75);
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
		}
		ngAfterViewInit(){
		  (<any>window).googleMapsReady=this.onMapsReady.bind(this);
		   var script = document.createElement("script");
		  script.type = "text/javascript";
		  document.getElementsByTagName("head")[0].appendChild(script);
		  script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyASK-EACxPsXrQauWhZ83HSYpuq7rh0yyg&callback=googleMapsReady";
	  
		}
	  
	  }
	
