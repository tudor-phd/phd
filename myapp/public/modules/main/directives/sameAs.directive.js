 'use strict';

 angular.module('myApp').directive('validateEqual', function(){
 		return {
 			require: 'ngModel',
 			link: function(scope, element, attr, ngModelCtrl){
 				function validateEquals(value){
 					var valid = (value === scope.$eval(attrs.validateEquals));
 					ngModelCtrl.$setValidity('equal', valid);
 					return valid ? value : undefined;
 				}
 				ngModelCtrl.$parsers.push(validateEqual);
 				ngModelCtrl.$formatters.push(validateEqual);

 				scope.$watch(attr.validateEquals, function(){
 					ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
 				})

 			}

 		};
 });