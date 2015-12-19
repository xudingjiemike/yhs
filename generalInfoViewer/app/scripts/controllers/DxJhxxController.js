/**
 * Created by sxfei on 2015/11/30.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .controller('DxJhxxController', ['$scope','SmsService',
        function ($scope,SmsService) {
            /**
             * 获取线索列表
             * @param khid
             *          客户ID
             */
            $scope.dxList = SmsService.getDxList();

            $scope.$on("loadData",function(e,d){
                if('短信'==d){
                    SmsService.loadDxList();
                }
            });



        }]);