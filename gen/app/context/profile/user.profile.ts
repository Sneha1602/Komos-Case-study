// Generated by ContextEntityGenerator

// contains properties for user context

import { Mood } from '../types/Mood';
import { Language } from '../types/Language';

export class UserProfile {
	
	private age: number;
	private mood: Mood;
	private faceDetected: boolean;
	private language: Language;
    
    constructor(){};
    
	public setAge(v: number){
	    this.age = v;
	};
	
	public getAge(): number{
	    return this.age;
	}
	public setMood(v: Mood){
	    this.mood = v;
	};
	
	public getMood(): Mood{
	    return this.mood;
	}
	public setFaceDetected(v: boolean){
	    this.faceDetected = v;
	};
	
	public getFaceDetected(): boolean{
	    return this.faceDetected;
	}
	public setLanguage(v: Language){
	    this.language = v;
	};
	
	public getLanguage(): Language{
	    return 0;
	}
}

