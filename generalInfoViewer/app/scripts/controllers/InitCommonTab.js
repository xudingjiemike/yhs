/**
 * Created by xudj on 15/12/16.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .controller('InitCommonTab',['$scope','SoftwareAuthorityService','BankAuthorityService','GiftApplyService','OrderService','SpService','_', function ($scope,SoftwareAuthorityService,BankAuthorityService,GiftApplyService,OrderService,SpService,_) {
        $scope.$on("loadData",function(){
            $scope.tableItems = SoftwareAuthorityService.getServiceAuthorityData("1");

        })
    }])
