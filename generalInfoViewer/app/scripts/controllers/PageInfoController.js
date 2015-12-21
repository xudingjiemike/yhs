/**
 * Created by Zhang on 2015/12/11.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .controller('PageInfoController', ['$scope', '$timeout','pageInfoService', 'Config', function ($scope, $timeout, pageInfoService, Config) {
        $scope.$on('loadData',function(e,d){
            console.log(d.tagtype);
            fetchData(d.tagtype);
        });
        var fetchData=function(isLoad){
            var lxrid, khid, khlx, yhdm;
            switch (isLoad) {
                case '0':
                    lxrid = '19c2f04ff6564c60bc4bc7a648c356ec';
                    khid = '799cb25280c6439a8aff592707451606';
                    khlx = '0';
                    yhdm = '';
                    $scope.contactsInfo = pageInfoService.getContacts(lxrid, khid, khlx, yhdm);
                    $timeout(function(){
                        $scope.contactsOld=$scope.contactsInfo.bz;
                    },1000);
                    break;
                case '1':
                    khid = 'd7f39ebeb67049e1a9b815e70127ab66';
                    $scope.Config = Config;
                    $scope.companyInfo = pageInfoService.getCompany(khid);
                    $timeout(function(){
                        $scope.companyOld=$scope.companyInfo.bz;
                    },1000);
                    break;
                case '2':
                    yhdm = 'SWSBD0010';
                    $scope.Config = Config;
                    $scope.intermediaryInfo = pageInfoService.getIntermediary(yhdm);
                    $timeout(function(){
                        $scope.intermediaryOld=$scope.intermediaryInfo.bz;
                    },1000);
            }
        };
        $scope.loadPageInfo = function () {
            //fetchData();
        };

        $scope.$watch('contactsInfo.bz',function(newValue){
            if(newValue&&$scope.contactsOld){
                if(newValue===$scope.contactsOld){
                    $('button.lxr').attr('disabled',true);
                }else{
                    $('button.lxr').attr('disabled',false);
                }
            }
        });

        $scope.$watch('companyInfo.bz',function(newValue){
            if($scope.companyOld){
                if(newValue===$scope.companyOld){
                    $('button.dwyh').attr('disabled',true);
                }else{
                    $('button.dwyh').attr('disabled',false);
                }
            }
        });

        $scope.$watch('intermediaryInfo.bz',function(newValue){
            if($scope.intermediaryOld){
                if(newValue===$scope.intermediaryOld){
                    $('button.zjjg').attr('disabled',true);
                }else{
                    $('button.zjjg').attr('disabled',false);
                }
            }
        });

        var isDetailHover = false;
        $scope.showDetailInfo = function () {
            if (!isDetailHover) {
                isDetailHover = true;
                $('.show-detail').addClass("hovered");
                $(".company-info").slideDown(300);
            }
        };
        $scope.hideDetailInfo = function () {
            $('.company-info').slideUp(300, function () {
                $(".show-detail").removeClass("hovered");
                isDetailHover = false;
            });
        };

        var isAgentlHover = false;
        $scope.showAgentInfo = function () {
            if (!isAgentlHover) {
                isAgentlHover = true;
                $('.show-agent').addClass("hovered");
                $(".agent-info").slideDown(300);
            }
        };

        $scope.hideAgentInfo = function ($event) {
            $('.agent-info').slideUp(300, function () {
                $(".show-agent").removeClass("hovered");
                isAgentlHover = false;
            });
        };

        $scope.showManageWindow = function () {
            //打开工作台【人员管理】标签页
        };

        $scope.saveRemark = function ($event) {
            $($event.target).attr('disabled',true);
            var dataId = $($event.target).parent().children('input.dataId').val();
            var filedKey = 'bz';
            var filedValue = $.trim($($event.target).parent().children('input.bz').val());
            switch ($scope.tabType) {
                case '0':
                    $scope.updateContactsRemarkResult = pageInfoService.updateContacts(dataId, filedKey, filedValue);
                    $timeout(function(){
                        if(!$scope.updateContactsRemarkResult){
                            $($event.target).attr('disabled',false);
                        }
                    },1000);
                    break;
                case '1':
                    $scope.updateContactsRemarkResult = pageInfoService.updateCompany(dataId, filedKey, filedValue);
                    $timeout(function(){
                        if(!$scope.updateContactsRemarkResult){
                            $($event.target).attr('disabled',false);
                        }
                    },1000);
                    break;
                case '2':
                    $scope.updateIntermediaryRemarkResult = pageInfoService.updateIntermediary(dataId, filedKey, filedValue);
                    $timeout(function(){
                        if(!$scope.updateIntermediaryRemarkResult){
                            $($event.target).attr('disabled',false);
                        }
                    },1000);
            }
        };
    }]);