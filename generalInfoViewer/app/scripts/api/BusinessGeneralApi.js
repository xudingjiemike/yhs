/**
 * Created by xudj on 15/12/17.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .factory('BusinessGeneralApi',['$http', 'Host', 'Url',function($http,Host,Url){
        return {
            LoadBusinessGeneralThreeDay:function(Params){
                return $http.get(Host.getHostByName("BUSINISS")+Url.getUrlByName("YWGK3DAY"),{params: {khid: Params['khid']}})
            },
            LoadBusinessGeneraOneYear:function(Params){
                return $http.get(Host.getHostByName("BUSINISS")+Url.getUrlByName("YWGK1YEAR"),{params: {khid: Params['khid']}})
            },
            LoadBusinessGeneraNoClose:function(Params){
                return $http.get(Host.getHostByName("BUSINISS")+Url.getUrlByName("YWGKNOCLOSE"),{params: {khid: Params['khid']}})
            }
        }
    }]);