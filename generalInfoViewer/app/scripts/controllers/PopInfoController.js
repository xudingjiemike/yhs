/**
 * Created by Zhang on 2015/12/11.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.PopInfo')
    .controller('PopInfoController',['$scope','PopInfoService',function($scope,PopInfoService){
        $scope.loadDialogWindow=function(){
            $scope.agentInfo = PopInfoService.getAgent('');
        };

        $scope.hideDialogWindow=function($event){
            $($event.target).parents(".dialog").hide();
            if($(".dialog:visible").length == 0){
                $($event.target).parents(".layer").hide();
            }
            $(".menus .active").removeClass("active");
        };
    }]);