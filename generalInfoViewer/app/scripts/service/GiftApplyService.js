/**
 * Created by xudj on 15/12/19.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .service('GiftApplyService',['_','TabsDataApi',function(_,TabsDataApi){
        var GitfApplyData = [];
        function LoadData(Params){
            TabsDataApi.Load(Params,"LPSQ").success(function(obj){
                angular.copy(obj.list,GitfApplyData);
            })
        }
        function getData(Params){
            if(GitfApplyData.length == 0){
                LoadData(Params);
            }

            return GitfApplyData;
        }
        return {
            getGiftApplyData:getData
        }
    }]);