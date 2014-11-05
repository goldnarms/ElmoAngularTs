/// <reference path="_all.d.ts" />
module App {
    'use strict';
    var app = angular.module('app', [])
        .controller("homeCtrl", App.Home.HomeController)
        .directive("elMap", App.Directives.Map.prototype.injection());
} 