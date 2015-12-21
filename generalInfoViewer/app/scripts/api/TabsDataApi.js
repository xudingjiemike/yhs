/**
 * Created by xudj on 15/12/16.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .factory('TabsDataApi', ['$http', 'Host','Url',
        function($http,Host,Url){
            return{
                Load:function(khid,Type){
                    return $http.get(Host.getHostByName("BUSINISS")+Url.getUrlByName(Type)+"?khid="+khid)
                }
            }
        }]);