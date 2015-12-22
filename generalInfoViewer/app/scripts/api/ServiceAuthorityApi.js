/**
 * Created by xudj on 15/12/14.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .factory('ServiceAuthorityApi', ['$http', 'Host','Url',
        function($http,Host,Url){
          return{
             LoadServiceAuthorityInfo:function(Params){
                 console.log(Host.getHostByName("BUSINISS")+Url.getUrlByName("FWSQ"));
                 return $http.get(Host.getHostByName("BUSINISS")+Url.getUrlByName("FWSQ"),{params: {khid: Params.get('khid')}})
             }
          }
    }]);