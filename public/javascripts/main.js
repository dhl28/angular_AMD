/**
 * Created by dhl on 2016/8/8.
 */
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '../javascripts',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        'jquery': '/bower_components/jquery/dist/jquery.min',
        'angular': '/bower_components/angular/angular'
    },
    shim: {

        'angular':{
            exports: 'angular'
        },
        'underscore':{
            exports: '_'
        },
    }
});

// Start the main app logic.
requirejs(['jquery', 'angular'],
    function ($, angular) {
        //jQuery, canvas and the app/sub module are all
        //loaded and can be used here now.
        var app = angular.module('myApp', []);
        app.controller('MainCtrl', function($scope) {
            $scope.firstName= "John";
            $scope.lastName= "Doe";
        });
    });