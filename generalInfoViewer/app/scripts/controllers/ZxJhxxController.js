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

            $scope.$on("loadData", function (e, d) {
                if ('咨询' == d) {
                    YhzxService.loadZxjlList(khid,true);
                }
            });
            /**
             * 加载更多数据
             *
             */
            $scope.loadMoreData = function(){
                YhzxService.loadZxjlList(khid,false);
            };
        }]);