/**
 * Created by tudor on 05.04.2016.
 */
'use strict';
var myApp = angular.module('myApp',['ngAnimate', 'ui.bootstrap', 'ui.router']);

myApp.controller('mainController', function($scope, $uibModal, $log, $http, alert)
{
    $("#avatar-avatarbox").hide();
    $scope.items = ['Dashboard', 'Library', 'Training', 'Lips reading'];

  $scope.animationsEnabled = true;

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

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

  $scope.submit = function(){

  	var url = '/';
  	var user = {};
  	$http.post(url, user)
  	.success(function(res){
  		alert('success', 'Ok!', 'You are now registered');
  	})
  	.error(function(err){
  		alert('warning', 'Opps!', 'Could not register');
  	});
  }

});
