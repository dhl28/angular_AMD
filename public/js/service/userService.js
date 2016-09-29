/**
 * Created by dhl on 2016/9/23.
 */
define(['angularAMD'], function (angularAMD) {
    angularAMD.service('userService', [ function () {
        return {
            getUsers: function () {
                return [];
            }
        };
    }])
});