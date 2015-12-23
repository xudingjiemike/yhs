/**
 * Created by liliang on 2015/12/8.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.Trustors')
    .controller('TrustorController', ['$scope','trustorService','Params','DataStore',
        function ($scope,trustorService,Params,DataStore) {
            var param = {};
            angular.copy(DataStore.getAll(),param);
            $scope.initTime = 0;
            $scope.showData = null;
            trustorService.getTrustors(Params.set({
                khid: param.yhid,
                khlx: param.yhlx,
                yhdm: param.yhdm,
                kjid: param.kjid
            })).then(function(data){
                $scope.Trustors = data.data;
                $scope.Trustors.isPersonal = trustorService.isPersonal(data.data);
                $scope.Trustors.hasData = true;
            });
            $scope.$watch('Trustors',function(){
                if($scope.Trustors && ($scope.Trustors.zjjgWtdwData || $scope.Trustors.grdlWtdwData)){
                    if($scope.initTime == 0) {
                        $scope.showData = $scope.Trustors.zjjgWtdwData || $scope.Trustors.grdlWtdwData;
                    }
                }
            },true);

            $scope.$watch('Trustors.zjjgWtdwData', function () {
                if($scope.initTime>0) {
                    $scope.showData = $scope.Trustors.zjjgWtdwData;
                }
            },true);

            $scope.$watch('Trustors.grdlWtdwData', function () {
                if($scope.initTime>0) {
                    $scope.showData = $scope.Trustors.grdlWtdwData;
                }
            },true);

            $scope.tableData = [];
            $scope.deleteTrustor = function(wtdwId){
                trustorService.deleteTrustor({
                    "khid": param.yhid,
                    "yhdm": param.yhdm,
                    "khlx": param.yhlx,
                    "wtdwId": wtdwId,
                     kjid: param.kjid
                }, wtdwId, $scope.Trustors);
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
