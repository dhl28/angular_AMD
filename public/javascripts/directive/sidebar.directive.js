/**
 * Created by dhl on 2016/9/23.
 */
define(['angularAMD'], function (angularAMD) {
    angularAMD.directive('sideBar', [ function () {
        return {
            require: '?ngModel',
            // can be used as attribute or element
            restrict: 'AE',
            // which markup this directive generates
            templateUrl:'/public/html/layout/sidebar.html',
            scope: {},
            link: function (scope, element, attrs, controller) {
                console.log('sidebar init');
                Layout.init();
            }
        };
    }])
});