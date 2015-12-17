/**
 * Created by sxfei on 2015/11/30.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .controller('ZxJhxxController', ['$scope', 'YhzxService',
        function ($scope, YhzxService) {
            var khid = '';
            /**
             * 获取咨询列表
             * @param khid
             *          客户ID
             */
            $scope.zxjlList = YhzxService.getZxjlList();
            /**
             * 获取投诉建议列表
             * @param khid
             *          客户ID
             */
            $scope.tsjyList = YhzxService.getTsjyList();

            $scope.$on("loadData", function (e, d) {
                if ('诉求' == d) {
                    YhzxService.loadTsjyList(khid);
                } else if ('咨询' == d) {
                    alert(d);
                    YhzxService.loadZxjlList(khid);
                }
            });
            /**
             * 分页
             */
            $scope.pageObj = YhzxService.FindTotalItems();

            $scope.pageChanged = function () {
                YhzxService.loadZxjlList($scope.pageObj.currentPageNumber, khid);
            };

        }]);