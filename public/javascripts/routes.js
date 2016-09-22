/**
 * Created by dhl on 2016/9/22.
 */
define(['app','angularAMD'], function (app,angularAMD) {
    'use strict';
    return app.config(function ($locationProvider, $stateProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/public/html/layout/main.html',
                controller: 'MainCtrl'
            })
            //.state('home.view1', {
            //    url: '^/view1',
            //    templateUrl: '/public/html/view1.html',
            //    controller:'view1Ctrl'
            //})
            .state('home.view1', angularAMD.route({
                url: '^/view1',
                templateUrl: '/public/html/view1.html',
                //controller: 'view1Ctrl',
                controllerUrl: '/public/javascripts/view1Ctrl.js'
            }))


    })
});