/**
 * Created by dhl on 2016/8/8.
 */
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '/public/javascripts',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        'app':'/public/javascripts/webApp',
        'lodash': '/bower_components/lodash/dist/lodash',
        'angular': '/bower_components/angular/angular',
        'uiRouter': '/bower_components/angular-ui-router/release/angular-ui-router',
        'angularAMD': '/bower_components/angularAMD/angularAMD'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'uiRouter': {
            deps: ['angular']
        },
        'angularAMD': ['angular'],
        'lodash': {
            exports: '_'
        },
    },
    // kick start application
    deps: ['webApp']
});
//require(['jquery','angular','uiRouter'],function(){
//    intiApp();
//});
