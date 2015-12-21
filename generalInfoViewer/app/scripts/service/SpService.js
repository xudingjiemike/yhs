/**
 * Created by xudj on 15/12/19.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .service('SpService',['_','TabsDataApi',function(_,TabsDataApi){
        var SpData = [];
        function LoadData(khid){
            TabsDataApi.Load(khid,"SP").success(function(obj){
                angular.copy(obj,SpData);
            })
        }
        function getData(khid){
            if(SpData.length == 0){
                LoadData(khid);
            }

            return SpData;
        }
        return {
            getSpData:getData
        }
    }]);