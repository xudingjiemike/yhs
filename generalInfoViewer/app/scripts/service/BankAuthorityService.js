/**
 * Created by xudj on 15/12/19.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .service('BankAuthorityService',['_','TabsDataApi',function(_,TabsDataApi){
        var BankAuthorityData = [];
        function LoadData(khid){
            TabsDataApi.Load(khid,"YHTS").success(function(obj){
                angular.copy(obj.list,BankAuthorityData);
            })
        }
        function getData(khid){
            if(BankAuthorityData.length == 0){
                LoadData(khid);
            }

            return BankAuthorityData;
        }
        return {
            getBankAuthorityData:getData
        }
    }]);