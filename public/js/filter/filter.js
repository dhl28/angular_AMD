/**
 * Created by dhl on 2016/9/23.
 */
define(['angularAMD'], function (angularAMD) {
    angularAMD.filter('filterBoolean', [function () {
        return function (input, type) {
            var result = "";
            if (typeof input != 'boolean') {
                if (input === "True") {
                    result = "是";
                } else if (input === "False") {
                    result = "否";
                } else {
                    result = "—";
                }

            } else {
                result = input ? "是" : "否";
            }
            return result;
        }
    }])
});