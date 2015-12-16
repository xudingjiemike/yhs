/**
 * Created by apple on 15/12/14.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .service('ServiceAuthorityService',['_','ServiceAuthorityApi',function(_,ServiceAuthorityApi){;
          var ServiceAuthorityData = [];
          function LoadData(khid){
              ServiceAuthorityApi.LoadServiceAuthorityInfo(khid).success(function(obj){
                  angular.copy(obj.data,ServiceAuthorityData);
              })
          };
          function getData(){
              return ServiceAuthorityData;
          };
          return {
                LoadData:LoadData,
                getServiceAuthorityData:getData
          }
    }]);