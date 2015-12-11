/**
 * Created by Zhang on 2015/12/10.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.ContLeft')
    .controller('InformationController',function($scope){
        var isPersonHover = false;
        var isCompanyHover = false;
        $scope.showPersonDetail=function($event){
            if(!isPersonHover){
                isPersonHover = true;
                $($event.currentTarget).addClass("hovered");
                $("#personInfo").slideDown(300);
            }
        };
        $scope.hidePersonDetail=function(){
            $('#personInfo').slideUp(300,function(){
                $('#personDetail').removeClass("hovered");
                isPersonHover = false;
            });
        };
        $scope.showCompanyDetail=function($event){
            if(!isCompanyHover){
                isCompanyHover = true;
                $($event.currentTarget).addClass("hovered");
                $("#companyInfo").slideDown(300);
            }
        };
        $scope.hideCompanyDetail=function(){
            $('#companyInfo').slideUp(300,function(){
                $("#companyDetail").removeClass("hovered");
                isCompanyHover = false;
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