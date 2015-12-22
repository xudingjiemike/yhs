/**
 * Created by xudj on 15/12/15.
 */
angular.module('ui.yypt5.yhgl.GeneralInfoViewer')
    .directive('yhlxrServiceAuthority',function(){

       return {
           restrict: 'EA',
           replace:true,
           controller:['$scope','ServiceAuthorityService','_','DataStore',function($scope,ServiceAuthorityService,_,DataStore){
               //ServiceAuthorityService.LoadData("1");
               var Params = {};
               angular.copy(DataStore.getAll(),Params);

               $scope.serviceAuthorityInfos = ServiceAuthorityService.getServiceAuthorityData(Params);


           }],
           templateUrl: 'views/template/serviceAuthority/serviceAuthority.html'
       }
    });