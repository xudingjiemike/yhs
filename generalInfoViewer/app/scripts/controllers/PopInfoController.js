/**
 * Created by Zhang on 2015/12/11.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.PopInfo')
    .controller('PopInfoController',['_','$scope',function(_, $scope){
        $scope.hideDialogWindow=function($event){
            $($event.target).parents(".dialog").hide();
            if($(".dialog:visible").length == 0){
                $($event.target).parents(".layer").hide();
            }
            $(".menus .active").removeClass("active");
        };
    }]);