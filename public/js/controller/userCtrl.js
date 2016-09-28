/**
 * Created by dhl on 2016/9/22.
 */
// Controller_Other.js
define(['webApp'], function (webApp) {
    var userCtrl =  function ($scope) {
        $scope.title = "from other";
        $scope.sayHello = function(){
            alert('hello world');
        }
        //bootstrap-table options
        var columns = [ {
            title : '名称',
            field : 'tagName'

        }, {
            title : '编码',
            field : 'tagKey'

        }, {
            title : '标签类型',
            field : 'tagType'

        }, {
            title : '标签属性',
            field : 'tagProp'

        }, {
            title : '是否启用',
            field : 'isEnabled',
            formatter : isEnableFormatter,
        }, {
            field : 'pk',
            title : '操作',
            formatter : operationFormatter,
        } ];

        // cell formatter - 是否启用
        function isEnableFormatter(value, row, index) {
            var html = "<div data-pk=\"" + row.pk + "\">";
            switch (row.isEnabled) {
                case 1:
                    html += "<img class='pointer validEnabletooltip' data-toggle='tooltip' data-placement='right' src = '/dm/resource/img/switch-on.png' >&nbsp";
                    break;
                case 0:
                    html += "<img class='pointer validEnabletooltip' data-toggle='tooltip' data-placement='right' src = '/dm/resource/img/switch-off.png' >&nbsp";
                    break;
                default:
                    html += "<img class='pointer validEnabletooltip' data-toggle='tooltip' data-placement='right' src = '/dm/resource/img/switch-off.png' >&nbsp";
                    break;
            }
            html += "</div>"
            return html;
        }
        ;

        // cell formatter -操作栏
        function operationFormatter(value, row, index) {
            var html = "<div data-pk=\"" + value + "\">"
            html += "<span class='" + getCellClass('edit', row)
                + "' data-toggle='tooltip' data-placement='right'>&#xe616;</span>"
            html += "<span class='" + getCellClass('del', row)
                + "' data-toggle='tooltip' data-placement='right'>&#xe619;</span>";
            html += "</div>"
            return html;
        }
        function getCellClass(oprationType, row) {
            var editClass = "iconfont cell-operation cell-edit";
            var delClass = "iconfont cell-operation cell-del";
            if (row.isPreset == 1) {
                editClass += " ae-disabled";
                delClass += " ae-disabled";
            }
            switch (oprationType) {
                case 'edit':
                    return editClass;
                    break;
                case 'del':
                    return delClass;
                    break;
                default:
                    return "iconfont";
                    break;
            }
        }
        //mock data
        var data = [];

        $scope.bsOpts = {
            columns : columns,
            striped : true,
            data : data,
            pageSize : 10,
            pagination : true,
            sortable : false,
            sidePagination : "client"
        }

    }
    return userCtrl;
});