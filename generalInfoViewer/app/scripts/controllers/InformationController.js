/**
 * Created by Zhang on 2015/12/10.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.ContLeft')
    .controller('InformationController',function($scope){
        var isHover = false;
        $scope.mouseLeaveEvent=function(){
            $('.company-info').slideUp(300,function(){
                $(".show-detail").removeClass("hovered");
                isHover = false;
            });
        };

        $scope.mouseOverEvent=function(){
            if(!isHover){
                isHover = true;
                $('.show-detail').addClass("hovered");
                $(".company-info").slideDown(300);
            }
        };
    });