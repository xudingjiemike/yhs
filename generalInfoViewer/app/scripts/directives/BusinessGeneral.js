/**
 * Created by xudj on 15/12/15.
 */
angular.module('ui.yypt5.yhgl.GeneralInfoViewer')
    .directive('yhlxrBusinessGeneral',function(){
       return {
           restrict: 'EA',
           replace:true,
           controller:['$scope','BusinessGeneralService','_','DataStore',function($scope,BusinessGeneralService,_,DataStore){
              var Params = {};
               angular.copy(DataStore.getAll(),Params);
               $scope.BusinessGeneral = BusinessGeneralService.getBusinessGeneralData(Params);


           }],
           templateUrl: 'views/template/businessGeneral/businessGeneral.html'
       }
    });