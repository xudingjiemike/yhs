/**
 * Created by Zhang on 2015/12/10.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.ContLeft')
    .controller('InformationController',function($scope){
        var isHover = false;
        $scope.showDetail=function(){
            if(!isHover){
                isHover = true;
                $('.show-detail').addClass("hovered");
                $(".company-info").slideDown(300);
            }
        };
        $scope.hideDetail=function(){
            $('.company-info').slideUp(300,function(){
                $(".show-detail").removeClass("hovered");
                isHover = false;
            });
        };
        $scope.showAgent=function(){
            $(".layer").show();
            $(".ztop").removeClass("ztop");
            $("#agentDialog").addClass("ztop").show();
        };
        $scope.closeAgent=function(){
            $('#agentClose').parents(".dialog").hide();
            if($(".dialog:visible").length == 0){
                $('#agentClose').parents(".layer").hide();
            }
            $(".menus .active").removeClass("active");
        };
        $scope.showManage=function(){
            $(".layer").show();
            $(".ztop").removeClass("ztop");
            $("#manageDialog").addClass("ztop").show();
        };
        $scope.closeManage=function(){
            $('#manageClose').parents(".dialog").hide();
            if($(".dialog:visible").length == 0){
                $('#manageClose').parents(".layer").hide();
            }
            $(".menus .active").removeClass("active");
        };
    });