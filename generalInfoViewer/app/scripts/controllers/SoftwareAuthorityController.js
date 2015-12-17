/**
 * Created by apple on 15/12/16.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .controller('SoftwareAuthorityController',['$scope','SoftwareAuthorityService','_', function ($scope,SoftwareAuthorityService,_) {
           $scope.$on("loadData",function(e,d){
               /***
                * 输出参数是id
                */
             $scope.tableItems = SoftwareAuthorityService.getServiceAuthorityData("1");
         })

    }]);