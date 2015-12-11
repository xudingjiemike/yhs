/**
 * Created by Zhang on 2015/12/11.
 */
angular.module('ui.yypt5.yhgl.GeneralInfoViewer.PopInfo')
    .directive('popInfo', function () {
        return {
            restrict: 'EA',
            controller:"PopInfoController",
            templateUrl: 'views/template/information/PopInfo.html'
        };
    });