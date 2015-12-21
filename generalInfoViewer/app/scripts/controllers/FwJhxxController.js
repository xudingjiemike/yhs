/**
 * Created by sxfei on 2015/11/30.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .controller('FwJhxxController', ['$scope','RwglService',
        function ($scope,RwglService) {

            /**
             * 获取请回电任务列表
             * @param khid
             *          客户ID
             */
            $scope.callbackList = RwglService.getCallbackList();
            /**
             * 获取外呼任务列表
             * @param khid
             *          客户ID
             */
            $scope.calloutList =  RwglService.getCalloutList();
            /**
             * 获取远程任务列表
             * @param khid
             *          客户ID
             */
            $scope.ycrwList = RwglService.getYcrwList();
            /**
             * 获取上门任务列表
             * @param khid
             *          客户ID
             */
            $scope.smrwList =  RwglService.getSmrwList();
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
            $scope.loadMoreData = function(){
                alert(aa);
                RwglService.loadMoreData();
            };

            $scope.$on("loadData",function(e,d){
                if('回电'==d) {
                    RwglService.loadCallbackList();
                }else if('外呼'==d) {
                    RwglService.loadCalloutList();
                }else if('远程'==d) {
                    RwglService.loadYcrwList();
                }else if('派发'==d) {
                    RwglService.loadSmrwList();
                }else if('网点服务'==d) {
                    RwglService.loadZdxcList();
                }
            });

        }]);