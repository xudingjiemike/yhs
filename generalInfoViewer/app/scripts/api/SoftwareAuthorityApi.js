/**
 * Created by xudj on 15/12/16.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .factory('SoftwareAuthorityApi', ['$http', 'Host','Url',
        function($http,Host,Url){
            return{
                LoadSoftwareAuthorityInfo:function(khid){
                    return $http.get(Host.getHostByName("BUSINISS")+Url.getUrlByName("SJSQ")+"?khid="+khid)
                }
            }
        }]);