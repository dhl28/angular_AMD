/**
 * Created by dhl on 2016/9/23.
 */
define(['angularAMD'], function (angularAMD) {
    angularAMD.directive('footer', [ function () {
        return {
            require: '?ngModel',
            // can be used as attribute or element
            restrict: 'AE',
            // which markup this directive generates
            templateUrl:'/public/javascripts/directive/tpl/footer.html',
            scope: {},
            link: function (scope, element, attrs, controller) {
                Layout.initFooter(); ;
            }
        };
    }])
});