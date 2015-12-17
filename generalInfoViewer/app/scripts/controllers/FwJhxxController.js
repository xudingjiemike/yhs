/**
 * Created by sxfei on 2015/11/30.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .controller('FwJhxxController', ['$scope','RwglService','SmsService',
        function ($scope,RwglService,SmsService) {

            /**
             * 获取请回电任务列表
             * @param khid
             *          客户ID
             */
            $scope.getCallbackList = function(khid){
                RwglService.getCallbackList(khid).success(function(data){
                    $scope.callbackList = data.data;
                });
            };
            /**
             * 获取外呼任务列表
             * @param khid
             *          客户ID
             */
            $scope.getCalloutList = function(khid){
                RwglService.getCalloutList(khid).success(function(data){
                    $scope.calloutList = data.data;
                });
            };
            /**
             * 获取远程任务列表
             * @param khid
             *          客户ID
             */
            $scope.getYcrwList = function(khid){
                RwglService.getYcrwList(khid).success(function(data){
                    $scope.ycrwList = data.data;
                });
            };
            /**
             * 获取上门任务列表
             * @param khid
             *          客户ID
             */
            $scope.getSmrwList = function(khid){
                RwglService.getSmrwList(khid).success(function(data){
                    $scope.smrwList = data.data;
                });
            };
            /**
             * 获取驻点现场任务列表
             * @param khid
             *          客户ID
             */
            $scope.getZdxcList = function(khid){
                RwglService.getZdxcList(khid).success(function(data){
                    $scope.zdxcList = data.data;
                });
            };
            /**
             * 获取发送短信列表
             * @param khid
             *          客户ID
             */
            $scope.getDxList = function(khid){
                SmsService.getDxList(khid).success(function(data){
                    $scope.dxList = data;
                });
            };
            $scope.$on("loadData",function(e,d){
                if('投诉'==d) {
                    $scope.getCallbackList('');
                    $scope.getCalloutList();
                    $scope.getYcrwList();
                    $scope.getSmrwList();
                    $scope.getZdxcList();
                    $scope.getDxList();
                }
            });

        }]);