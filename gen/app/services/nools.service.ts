import {Injectable, DynamicComponentLoader, Injector} from '@angular/core';
import { Router } from '@angular/router';

import { Profile } from '../context/profile/profile';
import { DisplayProperties } from '../helper/displayProperties';

import { ResourceService } from './resource.service';
import { DisplayPropertiesService } from '../services/displayProperties.service';
import { LoggerService } from './logger.service';

declare var nools: any;
declare var $: any;

@Injectable()
export class NoolsService {
	
	private flow;
	private m: Profile;
	
	constructor(
		private dcl: DynamicComponentLoader,
		private injector: Injector,
		private _Router: Router,
		private _LoggerService: LoggerService,
		private _ResourceService: ResourceService,
		private _DisplayPropertiesService: DisplayPropertiesService){
		this.flow = nools.flow("Profile Evaluation", function(flow){
			flow.rule("Lang de-de", {salience:1},[Profile,"m","m.getUser().getLanguage() == 0"], function(facts){
				_ResourceService.setLangFile("dede");
			});
			flow.rule("Lang en-us", {salience:1},[Profile,"m","m.getUser().getLanguage() == 1"], function(facts){
				_ResourceService.setLangFile("enus");
			});
			flow.rule("User angry", {salience:1},[Profile,"m","(m.getUser().getMood() == 1 && m.getApp().getMoodChecked() == true)"], function(facts){
				facts.m.getApp().setMoodChecked(true);
				_DisplayPropertiesService.pushNavigation({path:'/transactionView',key:'transactionView'});
				$('#_GboJAJ9yEeeQDN6CvfzAfw').css('font-size','26');
			});
			flow.rule("User not angry", {salience:1},[Profile,"m","(m.getUser().getMood() != 1 && m.getApp().getMoodChecked() == true)"], function(facts){
				facts.m.getApp().setMoodChecked(true);
				_DisplayPropertiesService.removeNavigationPath('/transactionView');
				$('#_GboJAJ9yEeeQDN6CvfzAfw').css('font-size','20');
			});
			flow.rule("Platform Desktop Mood checked Less Age", {salience:1},[Profile,"m","(m.getUser().getAge() <= 30 && m.getPlatform().getDeviceType() == 'desktop' && m.getUser().getMood() < 1)"], function(facts){
				_DisplayPropertiesService.setProperty('headerBarClass','row backgroundSecondary divLine borderSecondary');
				_DisplayPropertiesService.setProperty('routerOutletClass','col-md-10');
				_DisplayPropertiesService.setProperty('hideOnMobile','');
				_DisplayPropertiesService.setProperty('navbarContainerClass','sidebar-navbar col-md-2 backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarWrapperClass','sidebar-wrapper backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarHeaderClass','hideElement backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarCollapseClass','backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarItemListClass','sidebar-nav textPrimary backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('searchInputGroupClass','input-group col-md-6 col-md-offset-4 backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('isMobile',false);
				_DisplayPropertiesService.setProperty('buttonClass','btn btn-default btn-md');
				_DisplayPropertiesService.setProperty('bodyClass','backgroundTriangle');
			});
			flow.rule("Platform Desktop Mood checked Age More", {salience:1},[Profile,"m","(m.getUser().getAge() > 30 && m.getPlatform().getDeviceType() == 'desktop' && m.getUser().getMood() < 1)"], function(facts){
				_DisplayPropertiesService.setProperty('headerBarClass','row backgroundSecondary divLine borderSecondary');
				_DisplayPropertiesService.setProperty('routerOutletClass','col-md-10');
				_DisplayPropertiesService.setProperty('hideOnMobile','');
				_DisplayPropertiesService.setProperty('navbarContainerClass','sidebar-navbar col-md-2 backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarWrapperClass','sidebar-wrapper backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarHeaderClass','hideElement backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarCollapseClass','backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarItemListClass','sidebar-nav textPrimary backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('searchInputGroupClass','input-group col-md-6 col-md-offset-4 backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('isMobile',false);
				_DisplayPropertiesService.setProperty('buttonClass','btn btn-default btn-lg');
				_DisplayPropertiesService.setProperty('bodyClass','backgroundTriangle');
			});
			flow.rule("Platform Desktop Mood Not checked More Age", {salience:1},[Profile,"m","(m.getUser().getAge() > 30 && m.getPlatform().getDeviceType() == 'desktop' && m.getUser().getMood() >= 1)"], function(facts){
				_DisplayPropertiesService.setProperty('headerBarClass','row backgroundSecondary divLine borderSecondary');
				_DisplayPropertiesService.setProperty('routerOutletClass','col-md-10');
				_DisplayPropertiesService.setProperty('hideOnMobile','');
				_DisplayPropertiesService.setProperty('navbarContainerClass','sidebar-navbar col-md-2 backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarWrapperClass','sidebar-wrapper backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarHeaderClass','hideElement backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarCollapseClass','backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarItemListClass','sidebar-nav textPrimary backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('searchInputGroupClass','input-group col-md-6 col-md-offset-4 backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('isMobile',false);
				_DisplayPropertiesService.setProperty('buttonClass','btn btn-default btn-lg');
				_DisplayPropertiesService.setProperty('bodyClass','backgroundTertiary');
			});
			flow.rule("Platform Desktop Mood Not checked Less Age", {salience:1},[Profile,"m","(m.getUser().getAge() <= 30 && m.getPlatform().getDeviceType() == 'desktop' && m.getUser().getMood() >= 1)"], function(facts){
				_DisplayPropertiesService.setProperty('headerBarClass','row backgroundSecondary divLine borderSecondary');
				_DisplayPropertiesService.setProperty('routerOutletClass','col-md-10');
				_DisplayPropertiesService.setProperty('hideOnMobile','');
				_DisplayPropertiesService.setProperty('navbarContainerClass','sidebar-navbar col-md-2 backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarWrapperClass','sidebar-wrapper backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarHeaderClass','hideElement backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarCollapseClass','backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarItemListClass','sidebar-nav textPrimary backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('searchInputGroupClass','input-group col-md-6 col-md-offset-4 backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('isMobile',false);
				_DisplayPropertiesService.setProperty('buttonClass','btn btn-default btn-md');
				_DisplayPropertiesService.setProperty('bodyClass','backgroundTertiary');
			});
			flow.rule("Platform Desktop and Old", {salience:2},[Profile,"m","m.getPlatform().getDeviceType() == 'desktop'"], function(facts){
				_DisplayPropertiesService.setProperty('headerBarClass','row backgroundSecondary divLine borderSecondary');
				_DisplayPropertiesService.setProperty('routerOutletClass','col-md-10');
				_DisplayPropertiesService.setProperty('hideOnMobile','');
				_DisplayPropertiesService.setProperty('navbarContainerClass','sidebar-navbar col-md-2 backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarWrapperClass','sidebar-wrapper backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarHeaderClass','hideElement backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarCollapseClass','backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarItemListClass','sidebar-nav textPrimary backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('searchInputGroupClass','input-group col-md-6 col-md-offset-4 backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('isMobile',false);
			});
			flow.rule("Platform Mobile less than 1", {salience:6},[Profile,"m","(m.getPlatform().getDeviceType() == 'atm' && m.getUser().getMood() < 1)"], function(facts){
				_DisplayPropertiesService.setProperty('headerBarClass','hideElement backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('routerOutletClass','col-md-12');
				_DisplayPropertiesService.setProperty('hideOnMobile','hideElement backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarContainerClass','navbar navbar-default navbar-custom backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarWrapperClass','container-fluid backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarHeaderClass','navbar-header backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarCollapseClass','navbar-collapse collapse backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarItemListClass','sidebar-nav textPrimary backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('searchInputGroupClass','input-group backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('isMobile',true);
				_DisplayPropertiesService.setProperty('bodyClass','backgroundTriangle');
			});
			flow.rule("Platform Mobile greater than 1", {salience:6},[Profile,"m","(m.getPlatform().getDeviceType() == 'atm' && m.getUser().getMood() >= 1)"], function(facts){
				_DisplayPropertiesService.setProperty('headerBarClass','hideElement backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('routerOutletClass','col-md-12');
				_DisplayPropertiesService.setProperty('hideOnMobile','hideElement backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarContainerClass','navbar navbar-default navbar-custom backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarWrapperClass','container-fluid backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarHeaderClass','navbar-header backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarCollapseClass','navbar-collapse collapse backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('navbarItemListClass','sidebar-nav textPrimary backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('searchInputGroupClass','input-group backgroundSecondary borderSecondary');
				_DisplayPropertiesService.setProperty('isMobile',true);
				_DisplayPropertiesService.setProperty('bodyClass','backgroundTertiary');
			});
			flow.rule("Navigation Client", {salience:3},[Profile,"m","m.getApp().getUserRole() == 'client'"], function(facts){
				_DisplayPropertiesService.pushNavigation({path:'/mainMenu',key:'mainMenu'});
				_DisplayPropertiesService.pushNavigation({path:'/helpWindow',key:'helpWindow'});
				_DisplayPropertiesService.pushNavigation({path:'/showNearByATMs',key:'showNearByATMs'});
				_DisplayPropertiesService.pushNavigation({path:'/transactionView',key:'transactionView'});
			});
			flow.rule("Navigation Unregistered", {salience:1},[Profile,"m","m.getApp().getUserRole() != 'client'"], function(facts){
				_DisplayPropertiesService.clearNavigation();
			});
			flow.rule("Change Button Size", {salience:2},[Profile,"m","(m.getPlatform().getDeviceType() == 'desktop' && m.getUser().getAge() > 30)"], function(facts){
				$('#_M9m8oJxvEee_2OeSSzYyRQ').css('font-size','26');
				$('#_GboJAJ9yEeeQDN6CvfzAfw').css('font-size','26');
				$('#_QAydyTEwEeifUboAQqDOdA').css('font-size','26');
			});
		});
	}
		
	public getSession(){
		return this.flow.getSession();
	}
	
	public setProfile(m: Profile){
		this.m = m;
	}
}

