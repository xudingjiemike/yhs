/**
 * Created by xudj on 15/12/14.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .service('ServiceAuthorityService',['_','ServiceAuthorityApi',function(_,ServiceAuthorityApi){
          var ServiceAuthorityData = [];
          function LoadData(khid){
              ServiceAuthorityApi.LoadServiceAuthorityInfo(khid).success(function(data){

                  angular.copy(data.fwsqList,ServiceAuthorityData);
              })
          }
          function getData(khid){
              if(ServiceAuthorityData.length == 0){
                  LoadData(khid);
              }
              return ServiceAuthorityData;
          }
          return {
                LoadData:LoadData,
                getServiceAuthorityData:getData
          }
    }]);