/**
 * Created by dhl on 2016/9/22.
 */
// Controller_Other.js
define(['webApp','../service/userService.js'], function (webApp) {
    var userCtrl =  function ($scope,userService,apiService) {
        $scope.title = "from other";
        $scope.isCheck = true;
        $scope.sayHello = function(){
            alert('hello world');
        }
        userService.getUsers();
        apiService.getUsers();
        //bootstrap-table options
        var columns = [ {
            title : '用户名',
            field : 'name'

        }, {
            title : '显示名',
            field : 'showName'

        }, {
            title : '邮箱',
            field : 'email'

        }, {
            title : '业务管理员',
            field : 'businessManager'

        }, {
            title : '修改时间',
            field : 'modifyTime'
        }, {
            field : 'pk',
            title : '操作',
            formatter : operationFormatter,
        } ];


        // cell formatter -操作栏
        function operationFormatter(value, row, index) {
            var html = '<div>'+
                    '<a class="fa fa-edit btn-cell" title="编辑"></a>'+
                    '<a class="fa fa-trash btn-cell" title="删除"></a>'+
                '</div>'
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
        var data = [{
            pk:'001',
            name:'douhl',
            showName:'窦洪亮',
            email:'douhl@yonyou.com',
            businessManager:'管理员',
            modifyTime:'2016-09-28 11:30:00'
        },{
            pk:'002',
            name:'anderson',
            showName:'neo',
            email:'anderson@gmail.com',
            businessManager:'数据挖掘',
            modifyTime:'2016-09-27 13:30:00'
        }];

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
    //webApp.controller('userCtrl',userCtrl)

    return ["$scope",'userService','apiService', userCtrl];
});