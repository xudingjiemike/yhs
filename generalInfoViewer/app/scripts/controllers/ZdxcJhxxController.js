/**
 * Created by sxfei on 2015/11/30.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .controller('ZdxcJhxxController', ['$scope', 'RwglService',
        function ($scope, RwglService) {
            var khid = '';

            /**
             * 获取驻点现场任务列表
             * @param khid
             *          客户ID
             */
            $scope.zdxcList = RwglService.getZdxcList();

            /**
             * 加载更多数据
             *
             */
            $scope.loadMoreData = function () {
                RwglService.loadZdxcList(khid, false);
            };

            $scope.$on("loadData", function (e, d) {
                if ('网点服务' == d) {
                    RwglService.loadZdxcList(khid, true);
                }
            });

        }]);