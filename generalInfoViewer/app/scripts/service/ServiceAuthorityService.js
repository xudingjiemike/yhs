/**
 * Created by xudj on 15/12/14.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .service('ServiceAuthorityService',['_','ServiceAuthorityApi',function(_,ServiceAuthorityApi){
          var ServiceAuthorityData = [];
          function LoadData(Params){
              ServiceAuthorityApi.LoadServiceAuthorityInfo(Params).success(function(data){

                  angular.copy(data.fwsqList,ServiceAuthorityData);
              })
          }
          function getData(Params){
              if(ServiceAuthorityData.length == 0){
                  LoadData(Params);
              }
              return ServiceAuthorityData;
          }
          return {
                LoadData:LoadData,
                getServiceAuthorityData:getData
          }
    }]);