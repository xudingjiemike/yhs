/**
 * Created by Zhang on 2015/12/11.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .controller('PageInfoController', ['$scope', '$timeout', 'pageInfoService', 'DataStore', 'Config',
        function ($scope, $timeout, pageInfoService, DataStore, Config) {
            $scope.loadPageInfo = function () {
                var param = {};
                switch ($scope.tabType) {
                    case '0':
                        //DataStore.set({
                        //    lxrid: '19c2f04ff6564c60bc4bc7a648c356ec',
                        //    khid: '799cb25280c6439a8aff592707451606',
                        //    khlx: '0',
                        //    yhdm: ''
                        //});
                        param = DataStore.getAll();
                        pageInfoService.getContacts({
                            lxrid: param.lxrid,
                            khid: param.khid,
                            khlx: param.khlx,
                            yhdm: param.yhdm
                        }).then(function (data) {
                            $scope.contactsInfo = data.data;
                            $scope.contactsOld = $scope.contactsInfo.bz;
                        });
                        break;
                    case '1':
                        //DataStore.set({
                        //    khid: 'd7f39ebeb67049e1a9b815e70127ab66'
                        //});
                        param = DataStore.getAll();
                        $scope.Config = Config;
                        pageInfoService.getCompany({
                            khid: param.khid
                        }).then(function (data) {
                            $scope.companyInfo = data.data;
                            $scope.companyOld = $scope.companyInfo.bz;
                        });
                        break;
                    case '2':
                        //DataStore.set({
                        //    yhdm: 'SWSBD0010'
                        //});
                        param = DataStore.getAll();
                        $scope.Config = Config;
                        pageInfoService.getIntermediary({
                            yhdm: param.yhdm
                        }).then(function (data) {
                            $scope.intermediaryInfo = data.data;
                            $scope.intermediaryOld = $scope.intermediaryInfo.bz;
                        });
                }
            };
            $scope.$watch('contactsInfo.bz', function (newValue) {
                if (newValue && $scope.contactsOld) {
                    if (newValue === $scope.contactsOld) {
                        $('button.lxr').attr('disabled', true);
                    } else {
                        $('button.lxr').attr('disabled', false);
                    }
                }
            });

            $scope.$watch('companyInfo.bz', function (newValue) {
                if (newValue && $scope.companyOld) {
                    if (newValue === $scope.companyOld) {
                        $('button.dwyh').attr('disabled', true);
                    } else {
                        $('button.dwyh').attr('disabled', false);
                    }
                }
            });

            $scope.$watch('intermediaryInfo.bz', function (newValue) {
                if (newValue && $scope.intermediaryOld) {
                    if (newValue === $scope.intermediaryOld) {
                        $('button.zjjg').attr('disabled', true);
                    } else {
                        $('button.zjjg').attr('disabled', false);
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

            $scope.showItem = function (item) {
                var khlx=DataStore.get('khlx');
                var obj={
                    yhjc:item.yhjc,
                    yhmc:item.yhmc
                };
                if(khlx==='0'){
                    obj.tagType='1';
                }else{
                    obj.tagType='2';
                }
                DataStore.set('khid',item.yhid);
                $scope.$emit('modifyTab',obj);
            };

            $scope.saveRemark = function ($event) {
                $($event.target).attr('disabled', true);
                var param={
                    dataId:$($event.target).parent().children('input.dataId').val(),
                    filedKey:'bz',
                    filedValue:$.trim($($event.target).parent().children('input.bz').val())
                };
                switch ($scope.tabType) {
                    case '0':
                        pageInfoService.updateContacts(param)
                            .then(function(data){
                                if(typeof(data.data)===null){
                                    $($event.target).attr('disabled', false);
                                }
                            });
                        break;
                    case '1':
                        pageInfoService.updateCompany(param)
                            .then(function(data){
                                if(typeof(data.data)===null){
                                    $($event.target).attr('disabled', false);
                                }
                            });
                        break;
                    case '2':
                        pageInfoService.updateIntermediary(param)
                            .then(function(data){
                            if(typeof(data.data)===null){
                                $($event.target).attr('disabled', false);
                            }
                        });
                }
            };
        }]);