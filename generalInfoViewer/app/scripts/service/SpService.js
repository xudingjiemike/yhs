/**
 * Created by xudj on 15/12/19.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .service('SpService',['_','TabsDataApi',function(_,TabsDataApi){
        var SpData = [];
        function LoadData(Params){
            TabsDataApi.Load(Params,"SP").success(function(obj){
                angular.copy(obj,SpData);
            })
        }
        function getData(Params){
            if(SpData.length == 0){
                LoadData(Params);
            }

            return SpData;
        }
        return {
            getSpData:getData
        }
    }]);