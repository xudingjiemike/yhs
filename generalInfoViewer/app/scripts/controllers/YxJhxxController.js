/**
 * Created by sxfei on 2015/11/30.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .controller('YxJhxxController', ['$scope','XsService',
        function ($scope,XsService) {
            /**
             * 获取线索列表
             * @param khid
             *          客户ID
             */
            $scope.getXsList = function(khid){
                XsService.getXsList(khid).success(function(data){
                    $scope.xsList = data.data;
                });
            };
            $scope.$on("loadData",function(e,d){
                if('线索'==d){
                    alert(d);
                    $scope.getXsList();
                }
            });



        }]);