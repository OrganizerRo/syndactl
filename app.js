'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('qzApp', ['ngRoute']);

app.filter('pct', function () {
    return function (value, nod) {
        return value.toFixed(nod);
    }
});

