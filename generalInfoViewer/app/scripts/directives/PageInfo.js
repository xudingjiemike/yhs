/**
 * Created by Zhang on 2015/12/11.
 */
angular.module('ui.yypt5.yhgl.GeneralInfoViewer.PageInfo')
    .directive('pageInfo', function () {
        return {
            restrict: 'EA',
            replace:true,
            scope:{
                tabType:'@'
            },
            controller:"PageInfoController",
            templateUrl: 'views/template/information/PageInfo.html'
        };
    });