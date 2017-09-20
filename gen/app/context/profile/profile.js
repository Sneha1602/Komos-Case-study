// Generated by ContextProfileGenerator
"use strict";
// Is the central profile class that connects the different user-defined context-entities
var platform_profile_1 = require('./platform.profile');
var app_profile_1 = require('./app.profile');
var Profile = (function () {
    function Profile() {
        // initialize context profiles			    	
        this.platform = new platform_profile_1.PlatformProfile();
        this.app = new app_profile_1.AppProfile();
    }
    // get Platform profile
    Profile.prototype.getPlatform = function () {
        return this.platform;
    };
    // get App profile
    Profile.prototype.getApp = function () {
        return this.app;
    };
    return Profile;
}());
exports.Profile = Profile;
//# sourceMappingURL=profile.js.map