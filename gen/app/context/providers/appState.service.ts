// Generated by ContextProviderGenerator

// Contains Objects that push new data to the Context Controller

// Code for API/Library access has to be inserted in the file:"appState.service.ts" 
// in the folder: static/app/context/providers/
		
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/Rx';


// PROTECTED REGION ID general ENABLED START
// PROTECTED REGION END

@Injectable()
export class AppStateService {
	
	private moodChecked: boolean;
	private _moodCheckedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
	public moodCheckedSubject: Observable<boolean> = this._moodCheckedSubject.asObservable();
	
	// PROTECTED REGION ID appState ENABLED START
	// PROTECTED REGION END
	
	constructor(){
		// PROTECTED REGION ID constructor ENABLED START
                this.moodChecked = false;
		// PROTECTED REGION END
	}
	
	getMoodChecked(){
		
		// PROTECTED REGION ID moodChecked ENABLED START
		// PROTECTED REGION END
		
		this._moodCheckedSubject.next(this.moodChecked);
	}
	
	// PROTECTED REGION ID addMethods ENABLED START
	// PROTECTED REGION END
}
