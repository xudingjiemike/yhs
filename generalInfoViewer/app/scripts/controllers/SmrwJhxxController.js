/**
 * Created by sxfei on 2015/11/30.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .controller('SmrwJhxxController', ['$scope','RwglService',
        function ($scope,RwglService) {
            var khid = '';

            /**
             * 获取上门任务列表
             * @param khid
             *          客户ID
             */
            $scope.smrwList =  RwglService.getSmrwList();


            /**
             * 加载更多数据
             *
             */
            $scope.loadMoreData = function(){
                RwglService.loadSmrwList(khid,false);
            };

            $scope.$on("loadData",function(e,d){
                if('派发'==d) {
                    RwglService.loadSmrwList(khid,true);
                }
            });

        }]);