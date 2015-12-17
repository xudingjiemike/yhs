/**
 * Created by liliang on 2015/12/8.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.Trustors')
    .controller('TrustorController', ['$scope','TrustorService','$timeout',
        function ($scope,TrustorService,$timeout) {
            $scope.initTime = 0;
            $scope.showData = null;
            $scope.Trustors = TrustorService.getTrustors("f853fc71d2b14bf498258e9c35070892",2,"SWSXT009");
            $scope.$watch('Trustors',function(){
                if($scope.Trustors.zjjgWtdwData || $scope.Trustors.grdlWtdwData){
                    if($scope.initTime == 0) {
                        $scope.showData = $scope.Trustors.zjjgWtdwData || $scope.Trustors.grdlWtdwData;
                    }
                }
            },true);

            $scope.$watch('Trustors.zjjgWtdwData', function () {
                if($scope.initTime>0) {
                    $scope.showData = $scope.Trustors.zjjgWtdwData;
                }
                console.log("Trustors.zjjgWtdwData is changed");
            },true);

            $scope.$watch('Trustors.grdlWtdwData', function () {
                if($scope.initTime>0) {
                    $scope.showData = $scope.Trustors.grdlWtdwData;
                }
                console.log("Trustors.grdlWtdwData is changed");
            },true);

            $scope.tableData = [];
            $scope.deleteTrustor = function(wtdwId){
                TrustorService.deleteTrustor(wtdwId,"");
            };

            //样式
            $scope.type0Class = "selected";
            $scope.type1Class = "";

            $scope.switchData = function(type,event){
                if(type == 0){
                    $scope.showData = $scope.Trustors.zjjgWtdwData;
                    $scope.type0Class = "selected";
                    $scope.type1Class = "";
                }else{
                    $scope.showData = $scope.Trustors.grdlWtdwData;
                    $scope.type0Class = "";
                    $scope.type1Class = "selected";
                }
            };

            $scope.$watch('showData',function(){
                if($scope.showData && $scope.showData.wtdwList){
                    $scope.initTime+=1;
                    console.log($scope.initTime);
                    var tableData = [];
                    var length = $scope.showData.wtdwList.length>6?6:$scope.showData.wtdwList.length;
                    var groupLength = parseInt(length/2)+ length%2;
                    var j=0;
                    for(var i=0;i < groupLength; i++){
                        var group = [];
                        for(var n=0;n<2;n++){
                            if(j<length){
                                group.push($scope.showData.wtdwList[j]);
                                j++;
                            }
                        }
                        tableData.push(group);
                    }
                    $scope.tableData = tableData;
                }
            },true);
        }]);
