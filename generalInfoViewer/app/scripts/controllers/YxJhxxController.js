/**
 * Created by sxfei on 2015/11/30.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .controller('YxJhxxController', ['$scope','XsService',
        function ($scope,XsService) {
            var khid = '';
            /**
             * 获取线索列表
             * @param khid
             *          客户ID
             */
            $scope.getXsList = XsService.getXsList();

            $scope.$on("loadData",function(e,d){
                if('线索'==d){
                    XsService.loadXsList(khid,true);
                }
            });
            /**
             * 加载更多数据
             *
             */
            $scope.loadMoreData = function(){
                XsService.loadXsList(khid,false);
            };


        }]);