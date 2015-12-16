/**
 * Created by Zhang on 2015/12/16.
 */
angular.module('ui.yypt5.yhgl.GeneralInfoViewer.SearchInfo')
    .directive('searchInfo', function () {
        return {
            restrict: 'EA',
            replace:true,
            controller:"SearchInfoController",
            templateUrl: 'views/template/information/SearchInfo.html'
        };
    });