'use strict';
var myApp = angular.module('myApp');

myApp.controller('lipsReadingController', function($scope, $uibModal, $log)
{
	 $scope.items = ['Webcam', 'Speacking', 'Translation', 'Charts'];
	$("#avatar-avatarbox").hide();
	  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.openWebCam = function(size){
  	    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myWebCam.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });  
  }

});