/**
 * Created by xudj on 15/12/15.
 */
angular.module('ui.yypt5.yhgl.GeneralInfoViewer')
    .directive('yhlxrBusinessGeneral',function(){
       return {
           restrict: 'EA',
           replace:true,
           controller:['$scope','BusinessGeneralService','_',function($scope,BusinessGeneralService,_){
               //ServiceAuthorityService.LoadData("1");
               //$scope.BusinessGeneralService = BusinessGeneralService.getServiceAuthorityData();

           }],
           templateUrl: 'views/template/businessGeneral/businessGeneral.html'
       }
    });