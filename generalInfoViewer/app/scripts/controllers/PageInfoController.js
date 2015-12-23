/**
 * Created by Zhang on 2015/12/11.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .controller('PageInfoController', ['$scope', '$timeout', 'pageInfoService', 'DataStore', 'Config',
        function ($scope, $timeout, pageInfoService, DataStore, Config) {
            /**
             * 初始化加载数据
             */
            $scope.loadPageInfo = function () {
                var param = {};
                switch ($scope.tabType) {
                    case '0':
                        param = DataStore.getAll();
                        pageInfoService.getContacts({
                            lxrid: param.lxrid,
                            khid: param.yhid,
                            khlx: param.yhlx,
                            yhdm: param.yhdm
                        }).then(function (data) {
                            $scope.contactsInfo = data.data;
                            $scope.contactsOld = $scope.contactsInfo.bz;
                        });
                        break;
                    case '1':
                        param = DataStore.getAll();
                        $scope.Config = Config;
                        pageInfoService.getCompany({
                            khid: param.yhid
                        }).then(function (data) {
                            $scope.companyInfo = data.data;
                            $scope.companyOld = $scope.companyInfo.bz;
                        });
                        break;
                    case '2':
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

            /**
             * 监控联系人备注变化
             */
            $scope.$watch('contactsInfo.bz', function (newValue) {
                if (newValue && $scope.contactsOld) {
                    if (newValue === $scope.contactsOld) {
                        $('button.lxr').attr('disabled', true);
                    } else {
                        $('button.lxr').attr('disabled', false);
                    }
                }
            });

            /**
             * 监控单位用户备注变化
             */
            $scope.$watch('companyInfo.bz', function (newValue) {
                if (newValue && $scope.companyOld) {
                    if (newValue === $scope.companyOld) {
                        $('button.dwyh').attr('disabled', true);
                    } else {
                        $('button.dwyh').attr('disabled', false);
                    }
                }
            });

            /**
             * 监控中介机构备注变化
             */
            $scope.$watch('intermediaryInfo.bz', function (newValue) {
                if (newValue && $scope.intermediaryOld) {
                    if (newValue === $scope.intermediaryOld) {
                        $('button.zjjg').attr('disabled', true);
                    } else {
                        $('button.zjjg').attr('disabled', false);
                    }
                }
            });

            var isDetailHover = false;  //【详情】是否鼠标悬停

            /**
             * 显示【详情】信息
             */
            $scope.showDetailInfo = function () {
                if (!isDetailHover) {
                    isDetailHover = true;
                    $('.show-detail').addClass("hovered");
                    $(".company-info").slideDown(300);
                }
            };

            /**
             * 隐藏【详情】信息
             */
            $scope.hideDetailInfo = function () {
                $('.company-info').slideUp(300, function () {
                    $(".show-detail").removeClass("hovered");
                    isDetailHover = false;
                });
            };

            var isAgentlHover = false;  //【被代理】是否鼠标悬停

            /**
             * 显示【被代理】信息
             */
            $scope.showAgentInfo = function () {
                if (!isAgentlHover) {
                    isAgentlHover = true;
                    $('.show-agent').addClass("hovered");
                    $(".agent-info").slideDown(300);
                }
            };

            /**
             * 隐藏【被代理】信息
             */
            $scope.hideAgentInfo = function ($event) {
                $('.agent-info').slideUp(300, function () {
                    $(".show-agent").removeClass("hovered");
                    isAgentlHover = false;
                });
            };

            /**
             * 打开工作台【人员管理】标签页
             */
            $scope.showManageWindow = function () {

            };

            /**
             * 点击链接，打开/更新选项卡
             * @param item
             */
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
                DataStore.set({
                    yhid:item.yhid,
                    yhlx:obj.tagType,
                    kjid:''
                });
                $scope.$emit('modifyTab',obj);
            };

            /**
             * 保存备注
             * @param $event
             */
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