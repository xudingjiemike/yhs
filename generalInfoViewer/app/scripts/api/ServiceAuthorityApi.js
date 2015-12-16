/**
 * Created by apple on 15/12/14.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .factory('ServiceAuthorityApi', ['$http', 'Host','Url',
        function($http,Host,Url){
          return{
             LoadServiceAuthorityInfo:function(khid){
                 return $http.get(Host.getHostByName("INFORMATION")+Url.getUrlByName("FWSQ")+"?khid="+khid)
             }
          }
    }]);