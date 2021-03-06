//
// Created by IFML2NG2 on 2018/04/25 18:17:19
//

// Angular Imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';


// Service Imports
import { LoggerService } from '../services/logger.service';
import { AuthenticationService } from '../services/authentication.service';
import { DataService } from '../services/data.service';
import { DisplayPropertiesService } from '../services/displayProperties.service';
import { ResourceService } from '../services/resource.service';

// domain concept imports

@Component({
	selector: 'denomination',
	templateUrl: 'app/views/denomination.component.html',
	providers: [LoggerService,DisplayPropertiesService,AuthenticationService,DataService],
	directives: [NgClass  ],
	pipes: []
})

export class DenominationComponent {
	//Generate variables for parameters and bindings
	selectedTransferBinding:  any;
	isSelectedTransferBinding:  boolean;
	// bindings for fields in form
		fiveNotes: number;
		tenNotes: number;
		twentyNotes: number;
		fiftyNotes: number;
	// PROTECTED REGION ID _tzHksJ4dEeeQDN6CvfzAfw.denomination ENABLED START
	// PROTECTED REGION END

	constructor(
		private _router: Router,
		private _route: ActivatedRoute
,		private _loggerService: LoggerService,
				private _authenticationService: AuthenticationService,
				private _dataService: DataService,
				private _displayPropertiesService: DisplayPropertiesService,
				private _resourceService: ResourceService
		){
	}
		
	// stubs generated for view element events
	
		transfer(){
			this.transferActionAction();
		}
	
		transferActionAction(){
			// PROTECTED REGION ID _zryXAJ93EeeQDN6CvfzAfw.transferAction ENABLED START
			var five = 0
			var ten = 0
			var twenty = 0
			var fifty = 0

			if(this.fiveNotes != null){
				five = this.fiveNotes
			}if(this.tenNotes != null){
				ten = this.tenNotes
			}if(this.twentyNotes != null){
				twenty = this.twentyNotes
			}if(this.fiftyNotes != null){
				fifty = this.fiftyNotes
			}
			if((five+ten+twenty+fifty) > 0){
				this._dataService.initiateTransaction(localStorage.getItem('selectedAcc'), five, ten, twenty, fifty);
				this._router.navigate(['/mainMenu']);
			}
			// PROTECTED REGION END
		}

	
	// called when component is initiated			
	ngOnInit(){
		// Check authentication requirements, if empty, no authentication requirements for this component
		
		
		
		// PROTECTED REGION ID _tzHksJ4dEeeQDN6CvfzAfw.ngOnInit ENABLED START
		// PROTECTED REGION END
	}
}
