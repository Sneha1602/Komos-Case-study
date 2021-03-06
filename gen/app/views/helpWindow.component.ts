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
	selector: 'helpWindow',
	templateUrl: 'app/views/helpWindow.component.html',
	providers: [LoggerService,DisplayPropertiesService,AuthenticationService,DataService],
	directives: [NgClass  ],
	pipes: []
})

export class HelpWindowComponent {
	//Generate variables for parameters and bindings
	// bindings for fields in form
		question: string;
	// PROTECTED REGION ID _CeMbfTEwEeifUboAQqDOdA.helpWindow ENABLED START
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
	
		submitQuestion(){
			this.submitQuestionActionAction();
		}
	
		submitQuestionActionAction(){
			// PROTECTED REGION ID _VjTENjEwEeifUboAQqDOdA.submitQuestionAction ENABLED START
this._router.navigate(['transactionView']);
			// PROTECTED REGION END
		}

	
	// called when component is initiated			
	ngOnInit(){
		// Check authentication requirements, if empty, no authentication requirements for this component
		
		
		
		// PROTECTED REGION ID _CeMbfTEwEeifUboAQqDOdA.ngOnInit ENABLED START
		// PROTECTED REGION END
	}
}
