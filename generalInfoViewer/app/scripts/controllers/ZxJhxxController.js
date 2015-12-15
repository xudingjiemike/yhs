/**
 * Created by sxfei on 2015/11/30.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.Taxlnstitution')
    .controller('ZxJhxxController', ['$scope','YhzxService',
        function ($scope,YhzxService) {

            /**
             * 获取咨询列表
             * @param khid
             *          客户ID
             */
            $scope.getZxjlList = function(khid){
                YhzxService.getZxjlList(khid).success(function(data){
                    $scope.zxjlList = data.data;
                });
            };
            /**
             * 获取投诉建议列表
             * @param khid
             *          客户ID
             */
            $scope.getTsjyList = function(khid){
                YhzxService.getTsjyList(khid).success(function(data){
                    $scope.tsjyList = data.data;
                });
            };
            $(document).ready(function(){
                $(".style2 .tabs").on("click",".tab",function(){
                    if(!$(this).hasClass("active")){
                        var tabContentEl = $(".cont-left .style2 .tab-content-box");
                        //alert(tabContentEl);
                        var index = 8 - $(this).nextAll(".tab").length;
                        var position = -index*12.5;
                        tabContentEl.css("-webkit-transform","translate("+position+"%,0)");
                        $(".cont-left .style2 .tab").removeClass("active");
                        $(this).addClass("active");
                        $(".tabs .style2 .active-bar").css({width:$(this).width()+"px", left: this.offsetLeft+10 +"px"});
                        $scope.getTsjyList();
                    }
                });
                $(".style2 .tabs .tab:eq(0)").click();
                $scope.getTsjyList();
                $scope.getZxjlList();
            });

        }]);