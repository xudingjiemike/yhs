/**
 * Created by sxfei on 2015/11/30.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .controller('YcrwJhxxController', ['$scope', 'RwglService',
        function ($scope, RwglService) {
            var khid = '';
            /**
             * 获取远程任务列表
             * @param khid
             *          客户ID
             */
            $scope.ycrwList = RwglService.getYcrwList();

            /**
             * 加载更多数据
             *
             */
            $scope.loadMoreData = function () {
                RwglService.loadYcrwList(khid, false);
            };

            $scope.$on("loadData", function (e, d) {
                if ('远程' == d) {
                    RwglService.loadYcrwList(khid, true);
                }
            });

        }]);