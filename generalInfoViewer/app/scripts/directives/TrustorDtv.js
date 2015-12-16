/**
 * Created by liliang on 2015/12/10.
 */
angular.module('ui.yypt5.yhgl.GeneralInfoViewer.Trustors')
    .directive('trustordir', function () {
        return {
            restrict: 'EA',
            controller:['$scope'],
            templateUrl: 'views/trustors.html',
            link: function(scope, elem, attrs) {
            }
        };
    });