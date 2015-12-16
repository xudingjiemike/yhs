/**
 * Created by Zhang on 2015/12/11.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.PageInfo')
    .controller('PageInfoController',['$scope','PageInfoService','PopInfoService',function($scope,PageInfoService,PopInfoService){
        $scope.loadPageInfo=function(){
            switch($scope.tabType){
                case '0':
                    var lxrid='19c2f04ff6564c60bc4bc7a648c356ec';
                    var khid='799cb25280c6439a8aff592707451606';
                    var khlx='0';
                    var yhdm='';
                    $scope.contactsInfo = PageInfoService.getContacts(lxrid,khid,khlx,yhdm);
                    setTimeout(function(){
                        console.log($scope.contactsInfo);
                    },1000);
                    break;
                case '1':
                    var khid='d7f39ebeb67049e1a9b815e70127ab66';
                    $scope.companyInfo = PageInfoService.getCompany(khid);
                    setTimeout(function(){
                        console.log($scope.companyInfo);
                    },1000);
                    break;
                case '2':
                    var yhdm='SWSBD0010';
                    $scope.intermediaryInfo = PageInfoService.getIntermediary(yhdm);
                    setTimeout(function(){
                        console.log($scope.intermediaryInfo);
                    },1000);
                }
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
            $scope.agentInfo = PopInfoService.getAgent();
            setTimeout(function(){
                console.log($scope.agentInfo);
            },1000);
            $(".layer").show();
            $(".ztop").removeClass("ztop");
            $(".delegate-search").addClass("ztop").show();
        };
    }]);