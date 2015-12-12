/**
 * Created by sxfei on 2015/11/30.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.Taxlnstitution')
    .controller('FwJhxxController', ['$scope','RwglService','SmsService',
        function ($scope,RwglService,SmsService) {

            /**
             * 获取请回电任务列表
             * @param khid
             *          客户ID
             */
            $scope.getCallbackList = function(khid){
                RwglService.getCallbackList(khid).success(function(data){
                    $scope.callbackList = data.data;
                });
            };
            /**
             * 获取外呼任务列表
             * @param khid
             *          客户ID
             */
            $scope.getCalloutList = function(khid){
                RwglService.getCalloutList(khid).success(function(data){
                    $scope.calloutList = data.data;
                });
            };
            /**
             * 获取远程任务列表
             * @param khid
             *          客户ID
             */
            $scope.getYcrwList = function(khid){
                RwglService.getYcrwList(khid).success(function(data){
                    $scope.ycrwList = data.data;
                });
            };
            /**
             * 获取上门任务列表
             * @param khid
             *          客户ID
             */
            $scope.getSmrwList = function(khid){
                RwglService.getSmrwList(khid).success(function(data){
                    $scope.smrwList = data.data;
                });
            };
            /**
             * 获取驻点现场任务列表
             * @param khid
             *          客户ID
             */
            $scope.getZdxcList = function(khid){
                RwglService.getZdxcList(khid).success(function(data){
                    $scope.zdxcList = data.data;
                });
            };
            /**
             * 获取发送短信列表
             * @param khid
             *          客户ID
             */
            $scope.getDxList = function(khid){
                SmsService.getDxList(khid).success(function(data){
                    $scope.dxList = data.data;
                });
            };
            $(document).ready(function(){
                $(".style2.tabs").on("click",".tab",function(){
                    if(!$(this).hasClass("active")){
                        var tabContentEl = $(".cont-left .style2 .tab-content-box");
                        //alert(tabContentEl);
                        var index = 8 - $(this).nextAll(".tab").length;
                        var position = -index*12.5;
                        tabContentEl.css("-webkit-transform","translate("+position+"%,0)");
                        $(".cont-left .style2 .tab").removeClass("active");
                        $(this).addClass("active");
                        $(".tabs.style2 .active-bar").css({width:$(this).width()+"px", left: this.offsetLeft+10 +"px"});
                        $scope.getCallbackList('');
                        $scope.getCalloutList();
                        $scope.getYcrwList();
                        $scope.getSmrwList();
                        $scope.getZdxcList()
                        $scope.getDxList();
                    }
                });
                $(".style2.tabs .tab:eq(0)").click();
                $scope.getCallbackList('');
                $scope.getCalloutList();
                $scope.getYcrwList();
                $scope.getSmrwList();
                $scope.getZdxcList()
                $scope.getDxList();
            });

        }]);