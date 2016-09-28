/**
 * Created by dhl on 2016/9/22.
 */
define(['angularAMD','uiRouter','lodash',
    '/public/js/directive/app.directive.js',
    '/public/js/directive/header.directive.js',
    '/public/js/directive/footer.directive.js',
    '/public/js/directive/quickSidebar.directive.js',
    '/public/js/directive/themePanel.directive.js',
    '/public/js/directive/sidebar.directive.js',
    '/public/js/directive/component/bsTable.directive.js',
], function (angularAMD) {
    'use strict';
    //angular.element(document).ready(function() {
    //    angular.bootstrap(document, ['myApp']);
    //});
    var myApp = angular.module('myApp', ['ui.router']);

    myApp.factory('settings', ['$rootScope', function($rootScope) {
        // supported languages
        var settings = {
            hideThemePanel:true,
            layout: {
                pageSidebarClosed: false, // sidebar menu state
                pageBodySolid: false, // solid body color state
                pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
            },
            layoutImgPath: Metronic.getAssetsPath() + 'admin/layout/img/',
            layoutCssPath: Metronic.getAssetsPath() + 'admin/layout/css/'
        };

        $rootScope.settings = settings;

        return settings;
    }]);

    myApp.config(function ($locationProvider, $stateProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/public/html/dashboard.html',
                controller: 'MainCtrl'
            })
            .state('home.user', angularAMD.route({
                url: '^/user',
                templateUrl: '/public/html/user/user.html',
                controllerUrl: '/public/js/controller/userCtrl.js'
                //controller: 'MainCtrl',
                //controllerUrl: '/public/js/view1Ctrl.js'
            }))


    })
    myApp.controller('MainCtrl', function ($scope,$state) {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
        $scope.view1 = function(){
            console.log('hello')
            $state.go('home.view1');
        }
        $scope.$on('$viewContentLoaded', function() {
            Metronic.init(); // Run metronic theme
            Metronic.setAssetsPath('../../../assets/'); // Set the assets folder path
        })
    });
    angularAMD.bootstrap(myApp);

    return myApp;
});