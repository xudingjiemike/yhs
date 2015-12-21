/**
 * Created by sxfei on 2015/11/30.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .controller('CalloutJhxxController', ['$scope','RwglService',
        function ($scope,RwglService) {
            var khid = '';
             /**
             * 获取外呼任务列表
             * @param khid
             *          客户ID
             */
            $scope.calloutList =  RwglService.getCalloutList();

            /**
             * 加载更多数据
             *
             */
            $scope.loadMoreData = function(){
                RwglService.loadCalloutList(khid,false);
            };

            $scope.$on("loadData",function(e,d){
                if('外呼'==d) {
                    RwglService.loadCalloutList(khid,true);
                }
            });

        }]);