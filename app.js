'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('qzApp', ['ngRoute']);

app.filter('pct', function () {
    return function (value, nod) {
        return value.toFixed(nod);
    }
});

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'menu.html',
		controller : 'quizController'
	})
	.when('/?vw=ZodiacalMonths', {
		templateUrl: 'quizView.html',
		controller : 'quizController'
	})
});