/**
 * Created by sxfei on 2015/11/30.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .controller('SqJhxxController', ['$scope', 'YhzxService',
        function ($scope, YhzxService) {
            var khid = '';

            /**
             * 获取投诉建议列表
             * @param khid
             *          客户ID
             */
            $scope.tsjyList = YhzxService.getTsjyList();

            $scope.$on("loadData", function (e, d) {
                if ('诉求' == d) {
                    YhzxService.loadTsjyList(khid);
                }
            });

            $scope.pageChanged = function () {
                YhzxService.loadTsjyList(khid);
            };

        }]);