/**
 * Created by xudj on 15/12/16.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .controller('TabsController',['$scope','SoftwareAuthorityService','BankAuthorityService','GiftApplyService','OrderService','SpService','_', function ($scope,SoftwareAuthorityService,BankAuthorityService,GiftApplyService,OrderService,SpService,_) {


          //$scope.$on("loadSubData",function(e,d){
          //    if(angular.equals(d,"软件授权")){
          //        $scope.tableItems = SoftwareAuthorityService.getServiceAuthorityData("1");
          //    }
          //
          //    if(angular.equals(d,"银行托收")){
          //        $scope.tableItems = BankAuthorityService.getBankAuthorityData("1");
          //    }
          //    if(angular.equals(d,"礼品申请")){
          //        $scope.tableItems = GiftApplyService.getGiftApplyData("1");
          //    }
          //    if(angular.equals(d,"订单")){
          //        $scope.tableItems = OrderService.getOrderData("1");
          //    }
          //    if(angular.equals(d,"SP")){
          //        $scope.tableItems = SpService.getSpData("1");
          //    }
          //})
        //$scope.$on("loadSubData1",function(e,d){
        //        $scope.tableItems = BankAuthorityService.getBankAuthorityData("1");
        //    console.log(123);
        //})


    }])