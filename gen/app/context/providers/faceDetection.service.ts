// Generated by ContextProviderGenerator

// Contains Objects that push new data to the Context Controller

// Code for API/Library access has to be inserted in the file:"faceDetection.service.ts" 
// in the folder: static/app/context/providers/
		
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/Rx';

import { Mood } from '../types/Mood';

// PROTECTED REGION ID general ENABLED START
declare var affdex: any;
declare var $: any;
// PROTECTED REGION END

@Injectable()
export class FaceDetectionService {
	
	private age: number;
	private _ageSubject: BehaviorSubject<number> = new BehaviorSubject(0);
	public ageSubject: Observable<number> = this._ageSubject.asObservable();
	private mood: Mood;
	private _moodSubject: BehaviorSubject<Mood> = new BehaviorSubject(0);
	public moodSubject: Observable<Mood> = this._moodSubject.asObservable();
	private faceDetected: boolean;
	private _faceDetectedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
	public faceDetectedSubject: Observable<boolean> = this._faceDetectedSubject.asObservable();
	
	// PROTECTED REGION ID faceDetection ENABLED START
	// PROTECTED REGION END
	
	constructor(){
		// PROTECTED REGION ID constructor ENABLED START
        setTimeout(()=> {
                var divRoot = $("#affdex_elements")[0];

                // The captured frame's width in pixels
                var width = 1280;

                // The captured frame's height in pixels
                var height = 1024;

                /*
                Face detector configuration - If not specified, defaults to
                affdex.FaceDetectorMode.LARGE_FACES
                */
                var faceMode = affdex.FaceDetectorMode.LARGE_FACES;

                //Construct a CameraDetector and specify the image width / height and face detector mode.
                var detector = new affdex.CameraDetector(divRoot, width, height, faceMode);
                $( "#affdex_elements" ).hide();

                detector.detectEmotions.joy = true;
                detector.detectEmotions.anger = true;
                detector.detectAppearance.age = true;

                //Add a callback to notify when the detector is initialized and ready for runing.
                detector.addEventListener("onInitializeSuccess", () => {
                console.log("The detector reports initialized");
                //Display canvas instead of video feed because we want to draw the feature points on it
                $("#face_video_canvas").css("display", "none");
                $("#face_video").css("display", "none");  
                });

                //Add a callback to notify when camera access is allowed
                detector.addEventListener("onWebcamConnectSuccess", () => {
                console.log("Webcam access allowed");
                });

                //Add a callback to notify when camera access is denied
                detector.addEventListener("onWebcamConnectFailure", () => {
                console.log("webcam denied");
                });

                //Add a callback to notify when detector is stopped
                detector.addEventListener("onStopSuccess", () => {
                console.log("The detector reports stopped");
                });
                
                this.mood = null;
                this.age = 0;
                detector.addEventListener("onImageResultsSuccess", (faces: any, image: any, timestamp:any) => {
                        // console.log("Timestamp: " + timestamp.toFixed(2));
                        // console.log("Number of faces found: " + faces.length);
                        if (faces.length > 0) {
                                this.faceDetected = true;
                         }
                                //If joy of the first face is over 50% then show in log
                                // console.log("Emotions: " + JSON.stringify(faces[0].emotions, function(key, val) {
                                // return val.toFixed ? Number(val.toFixed(0)) : val;
                                // }));
                         else{
                           this.faceDetected = false;
                         }
                          
                          if(this.faceDetected){
                                if(faces[0].emotions.anger>10){
                                        this.mood = Mood.angry;
                                }else if(faces[0].emotions.joy>15){
                                        this.mood = Mood.happy;
                                }else{
                                        this.mood = Mood.indifferent;
                                }
                                // console.log(faces[0].appearance.age);
                                switch(faces[0].appearance.age){
                                        case 'Under 18': {
                                                this.age = 10;
                                                break;
                                        };
                                        case '18 - 24': {
                                                this.age = 20;
                                                break;
                                        };
                                        case '25 - 34': {
                                                this.age = 30;
                                                break;
                                        };
                                        case '35 - 44': {
                                                this.age = 40;
                                                break;
                                        };
                                        case '45 - 54': {
                                                this.age = 50;
                                                break;
                                        };
                                        case '55 - 64': {
                                                this.age = 60;
                                                break;
                                        };
                                        case '65+': {
                                                this.age = 70;
                                                break;
                                        };
                                        //Default is left out because an unkown age will just keep the last known age
                                        // default:{
                                        //         this.age = 40;
                                        // };
                                }
                          }
                          
                          else{
                                this.faceDetected = false;
                        }
                 
                });

                detector.start();
        }, 500);

		// PROTECTED REGION END
	}
	
	getAge(){
		
		// PROTECTED REGION ID age ENABLED START
		// PROTECTED REGION END
		
		this._ageSubject.next(this.age);
	}
	getMood(){
		
		// PROTECTED REGION ID mood ENABLED START
		// PROTECTED REGION END
		
		this._moodSubject.next(this.mood);
	}
	getFaceDetected(){
		
		// PROTECTED REGION ID faceDetected ENABLED START
		// PROTECTED REGION END
		
		this._faceDetectedSubject.next(this.faceDetected);
	}
	
	// PROTECTED REGION ID addMethods ENABLED START
	// PROTECTED REGION END
}
