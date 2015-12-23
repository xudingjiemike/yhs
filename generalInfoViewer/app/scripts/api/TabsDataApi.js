/**
 * Created by xudj on 15/12/16.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .factory('TabsDataApi', ['$http', 'Host','Url',
        function($http,Host,Url){
            return{
                Load:function(Params,Type){
                    if(angular.equals("YHTS",Type)){
                        return $http.get(Host.getHostByName("BUSINISS")+Url.getUrlByName(Type),{params: {khid: Params["khid"],khlx: Params["khlx"]}})
                    }
                    if(angular.equals("SJSQ",Type)){
                        return $http.get(Host.getHostByName("BUSINISS")+Url.getUrlByName(Type),{params: {khid: Params["khid"],khlx: Params["khlx"]}})
                    }
                    if(angular.equals("DD",Type)){
                        return $http.get(Host.getHostByName("BUSINISS")+Url.getUrlByName(Type),{params: {khid: Params["khid"],khlx: Params["khlx"],ddly:Params["ddly"],cxlx:Params["cxlx"]}})
                    }
                    if(angular.equals("LPSQ",Type)){
                        return $http.get(Host.getHostByName("BUSINISS")+Url.getUrlByName(Type),{params: {khid: Params["khid"],khlx: Params["khlx"]}})
                    }
                    if(angular.equals("SP",Type)){
                        return $http.get(Host.getHostByName("BUSINISS")+Url.getUrlByName(Type),{params: {khid: Params["khid"]}})
                    }

                }
            }
        }]);