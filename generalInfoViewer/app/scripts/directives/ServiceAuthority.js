/**
 * Created by xudj on 15/12/15.
 */
angular.module('ui.yypt5.yhgl.GeneralInfoViewer')
    .directive('yhlxrServiceAuthority',function(){
       return {
           restrict: 'EA',
           replace:true,
           controller:['$scope','ServiceAuthorityService','_',function($scope,ServiceAuthorityService,_){
               //ServiceAuthorityService.LoadData("1");

               $scope.serviceAuthorityInfos = ServiceAuthorityService.getServiceAuthorityData("1");


           }],
           templateUrl: 'views/template/serviceAuthority/serviceAuthority.html'
       }
    });