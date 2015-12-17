/**
 * Created by Zhang on 2015/12/11.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.PageInfo')
    .controller('PageInfoController',['$scope','PageInfoService','PopInfoService',function($scope,PageInfoService){
        $scope.loadPageInfo=function(){
            var lxrid,khid,khlx,yhdm;
            switch($scope.tabType){
                case '0':
                    lxrid='19c2f04ff6564c60bc4bc7a648c356ec';
                    khid='799cb25280c6439a8aff592707451606';
                    khlx='0';
                    yhdm='';
                    $scope.contactsInfo = PageInfoService.getContacts(lxrid,khid,khlx,yhdm);
                    break;
                case '1':
                    khid='d7f39ebeb67049e1a9b815e70127ab66';
                    $scope.companyInfo = PageInfoService.getCompany(khid);
                    break;
                case '2':
                    yhdm='SWSBD0010';
                    $scope.intermediaryInfo = PageInfoService.getIntermediary(yhdm);
                }
        };

        var isDetailHover = false;
        $scope.showDetailInfo=function(){
            if(!isDetailHover){
                isDetailHover = true;
                $('.show-detail').addClass("hovered");
                $(".company-info").slideDown(300);
            }
        };
        $scope.hideDetailInfo=function(){
            $('.company-info').slideUp(300,function(){
                $(".show-detail").removeClass("hovered");
                isDetailHover = false;
            });
        };

        var isAgentlHover = false;
        $scope.showAgentInfo=function(){
            if(!isAgentlHover){
                isAgentlHover = true;
                $('.show-agent').addClass("hovered");
                $(".agent-info").slideDown(300);
            }
        };

        $scope.hideAgentInfo=function(){
            $('.agent-info').slideUp(300,function(){
                $(".show-agent").removeClass("hovered");
                isAgentlHover = false;
            });
        };

        $scope.showManageWindow=function(){
            $(".layer").show();
            $(".ztop").removeClass("ztop");
            $(".delegate-search").addClass("ztop").show();
        };

        $scope.saveRemark=function(){

        };
    }]);