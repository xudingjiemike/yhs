/**
 * Created by apple on 15/12/15.
 */
/**
 * Created by apple on 15/12/9.
 */
angular.module('ui.yypt5.yhgl.GeneralInfoViewer')
    .directive('yhlxrBusinessGeneral',function(){
       return {
           restrict: 'EA',
           replace:true,
           controller:['$scope','BusinessGeneralService','_',function($scope,BusinessGeneralService,_){
               ServiceAuthorityService.LoadData("1");
               $scope.serviceAuthorityInfos = ServiceAuthorityService.getServiceAuthorityData();

           }],
           templateUrl: 'views/template/serviceAuthority/serviceAuthority.html'
       }
    });