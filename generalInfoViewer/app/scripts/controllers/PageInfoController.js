/**
 * Created by Zhang on 2015/12/11.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.PageInfo')
    .controller('PageInfoController',['$scope','PageInfoService',function($scope,PageInfoService){
        $scope.loadCompanyInfo=function(){
            $scope.companyInfo = PageInfoService.getCompany('');
            setTimeout(function(){
                console.log($scope.companyInfo.data);
            },1000);
        };
        var isHover = false;
        $scope.showDetailInfo=function(){
            if(!isHover){
                isHover = true;
                $('.show-detail').addClass("hovered");
                $(".company-info").slideDown(300);
            }
        };
        $scope.hideDetailInfo=function(){
            $('.company-info').slideUp(300,function(){
                $(".show-detail").removeClass("hovered");
                isHover = false;
            });
        };
        $scope.showDialogWindow=function(){

            $(".layer").show();
            $(".ztop").removeClass("ztop");
            $(".delegate-search").addClass("ztop").show();
        };
    }]);