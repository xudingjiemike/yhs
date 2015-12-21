/**
 * Created by sxfei on 2015/11/30.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .controller('CallbackJhxxController', ['$scope','RwglService',
        function ($scope,RwglService) {
            var khid = '';
            /**
             * 获取请回电任务列表
             * @param khid
             *          客户ID
             */
            $scope.callbackList = RwglService.getCallbackList();

            /**
             * 加载更多数据
             *
             */
            $scope.loadMoreData = function(){
                RwglService.loadCallbackList(khid,false);
            };

            $scope.$on("loadData",function(e,d){
                if('回电'==d) {
                    RwglService.loadCallbackList(khid,true);
                }
            });

        }]);