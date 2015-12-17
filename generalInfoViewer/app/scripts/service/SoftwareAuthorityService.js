/**
 * Created by apple on 15/12/16.
 */
/**
 * Created by apple on 15/12/14.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .service('SoftwareAuthorityService',['_','SoftwareAuthorityApi',function(_,SoftwareAuthorityApi){;
        var SoftwareAuthorityData = [];
        function LoadData(khid){
            SoftwareAuthorityApi.LoadSoftwareAuthorityInfo(khid).success(function(obj){
                angular.copy(obj.recordList,SoftwareAuthorityData);
            })
        };
        function getData(khid){
            if(SoftwareAuthorityData.length == 0){
                LoadData(khid);
            }

            return SoftwareAuthorityData;
        };
        return {
            getServiceAuthorityData:getData
        }
    }]);