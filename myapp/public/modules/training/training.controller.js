'use strict';
var myApp = angular.module('myApp');

myApp.controller('trainingController', function($scope)
{
	SDK.applicationId = "6765300097490006919";
	var sdk = new SDKConnection();
	var web = new WebAvatar();
	web.connection = sdk;
	web.avatar = "667624";
	web.voice = "";
	web.width = "300";
	web.height = "300";
	web.createBox();
	web.addMessage("Welcome to training page", "", "", "");
	web.processMessages();

	$scope.translateText = function() {
		var text = $scope.trainingText;
		web.addMessage(text, "", "", "");
		web.processMessages();
	}
});