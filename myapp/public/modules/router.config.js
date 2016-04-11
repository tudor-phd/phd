/**
 * Created by tudor on 05.04.2016.
 */

var myApp = angular.module('myApp');

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'modules/main/partials/homePartial.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('login', {
            url: '/login',
            templateUrl: 'modules/main/partials/loginPartial.html'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'modules/main/partials/signupPartial.html'
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'modules/dashboard/partials/dashboardPartial.html'
        })
        .state('library', {
            url: '/library',
            templateUrl: 'modules/library/partials/libraryPartial.html'
        });

});