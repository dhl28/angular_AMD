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

    //myApp.factory('settings', ['$rootScope', function($rootScope) {
    //    // supported languages
    //    var settings = {
    //        hideThemePanel:true,
    //        layout: {
    //            pageSidebarClosed: false, // sidebar menu state
    //            pageBodySolid: false, // solid body color state
    //            pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
    //        },
    //        layoutImgPath: Metronic.getAssetsPath() + 'admin/layout/img/',
    //        layoutCssPath: Metronic.getAssetsPath() + 'admin/layout/css/'
    //    };
    //
    //    $rootScope.settings = settings;
    //
    //    return settings;
    //}]);

    myApp.config(function ($locationProvider, $stateProvider,$urlRouterProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $urlRouterProvider.otherwise('/error');
        $stateProvider
            .state('home.error', {
                url: '^/error',
                templateUrl: '/public/html/404.html',
            })
            .state('home', {
                //abstract: true,
                url: '/',
                template: '<ui-view/>',
                controller: 'MainCtrl',
                redirectTo:'home.dashboard'
            })
            .state('home.dashboard', {
                url: '^/dashboard',
                templateUrl: '/public/html/dashboard.html',
                controller: 'MainCtrl'
            })
            .state('home.user', angularAMD.route({
                url: '^/user',
                templateUrl: '/public/html/user/user.html',
                controllerUrl: '/public/js/controller/userCtrl.js'
            }))
            .state('home.setting', angularAMD.route({
                url: '^/setting',
                templateUrl: '/public/html/setting/setting.html',
                controllerUrl: '/public/js/controller/settingCtrl.js'
            }))
            .state('home.application', angularAMD.route({
                url: '^/application',
                templateUrl: '/public/html/application/application.html',
                controllerUrl: '/public/js/controller/applicationCtrl.js'
            }))


    })
    //ui-router redirect
    myApp.run(['$rootScope', '$state', function($rootScope, $state) {
        $rootScope.$state = $state;
        var settings = {
            hideSidebarSearch:true,//hide sidebar search box
            hideThemePanel:true,//hide theme config button
            layout: {
                pageSidebarClosed: false, // sidebar menu state
                pageBodySolid: false, // solid body color state
                pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
            },
            layoutImgPath: Metronic.getAssetsPath() + 'admin/layout/img/',
            layoutCssPath: Metronic.getAssetsPath() + 'admin/layout/css/'
        };

        $rootScope.settings = settings;

        $rootScope.$on('$stateChangeStart', function(evt, to, params) {
            if (to.redirectTo) {
                evt.preventDefault();
                $state.go(to.redirectTo, params, {location: 'replace'})
            }
        });
    }])

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