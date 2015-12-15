/**
 * Created by sxfei on 2015/11/30.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.Taxlnstitution')
    .controller('YxJhxxController', ['$scope','XsService',
        function ($scope,XsService) {
            /**
             * 获取线索列表
             * @param khid
             *          客户ID
             */
            $scope.getXsList = function(khid){
                XsService.getXsList(khid).success(function(data){
                    $scope.xsList = data.data;
                });
            };
            $(document).ready(function(){
                $(".style2.tabs").on("click",".tab",function() {
                    if (!$(this).hasClass("active")) {
                        $scope.getXsList();
                    }
                });
                $scope.getXsList();
            });

        }]);