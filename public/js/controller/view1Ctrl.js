/**
 * Created by dhl on 2016/9/22.
 */
// Controller_Other.js
define(['webApp'], function (webApp) {
    var view1Ctrl =  function ($scope) {
        $scope.title = "from other";
        console.log('viewCtrl');
        $scope.sayHello = function(){
            alert('hello world');
        }
    }
    return view1Ctrl;
});