angular.module('MyFirstPhonegap', ['ngRoute', 'MyFirstPhonegap.services', 'MyFirstPhonegap.controllers'])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'MainCtrl',
            templateUrl: 'partials/main.html'
        })
        .when('/view', {
            controller: 'ViewCtrl',
            templateUrl: 'partials/view.html'
        })
        .otherwise({redirectTo: '/'});
    });
