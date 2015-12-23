/**
 * Created by xudj on 15/12/16.
 */

angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .service('SoftwareAuthorityService',['_','SoftwareAuthorityApi',function(_,SoftwareAuthorityApi){
        var SoftwareAuthorityData = [];
        function LoadData(Params){
            SoftwareAuthorityApi.LoadSoftwareAuthorityInfo(Params).success(function(obj){
                angular.copy(obj.list,SoftwareAuthorityData);
            })
        }
        function getData(Params){
            if(SoftwareAuthorityData.length == 0){
                LoadData(Params);
            }

            return SoftwareAuthorityData;
        }
        return {
            getServiceAuthorityData:getData
        }
    }]);