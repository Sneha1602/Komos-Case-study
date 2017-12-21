//
// Created by IFML2NG2 on 2017/12/21 13:17:27
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
	selector: 'login',
	templateUrl: 'app/views/login.component.html',
	providers: [LoggerService,DisplayPropertiesService,AuthenticationService,DataService],
	directives: [NgClass  ],
	pipes: []
})

export class LoginComponent {
	//Generate variables for parameters and bindings
	// bindings for fields in form
		username: string;
		password: string;
	// PROTECTED REGION ID _SGc7MJxuEee_2OeSSzYyRQ.login ENABLED START
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
	
		loginEvent(){
			this.loginActionAction();
		}
	
		loginActionAction(){
			// PROTECTED REGION ID _ZYq5sJxwEee_2OeSSzYyRQ.loginAction ENABLED START
if(this._authenticationService.login(this.username, this.password)){
    this._router.navigate(['mainMenu']);
}
			// PROTECTED REGION END
		}

	
	// called when component is initiated			
	ngOnInit(){
		// Check authentication requirements, if empty, no authentication requirements for this component
		
		
		
		// PROTECTED REGION ID _SGc7MJxuEee_2OeSSzYyRQ.ngOnInit ENABLED START
		// PROTECTED REGION END
	}
}
