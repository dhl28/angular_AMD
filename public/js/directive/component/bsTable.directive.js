/**
 * Created by dhl on 2016/9/23.
 */
define(['angularAMD'], function (angularAMD) {
    angularAMD.directive('bsTable', ['$compile', function($compile) {
        return {
            restrict: 'A',
            link: function(scope, el, attrs) {
                var options = scope.$eval(attrs.bsTable); // evaluate config object from angular controller

                // create table over element
                el.bootstrapTable(options);

                // monitor DOM changes inside table, to compile dynamic cell content
                el.bind('body-changed.bs.table', function() {
                    $compile(el)(scope);
                });
            }
        };
    }]);
});