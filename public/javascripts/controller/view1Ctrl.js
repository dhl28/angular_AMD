/**
 * Created by dhl on 2016/9/22.
 */
// Controller_Other.js
define(['app'], function (app) {
    var view1Ctrl =  function ($scope) {
        $scope.title = "from other";
        console.log('viewCtrl');
        $scope.sayHello = function(){
            console.log('hello view1');
        }
    }
    app.register.controller('view1Ctrl', view1Ctrl);
});