/**
 * Created by Zhang on 2015/12/11.
 */
angular
    .module("ui.yypt5.yhgl.GeneralInfoViewer.Information")
    .factory("InformationApi", ["$http", "Host","Url",
        function ($http, Host, Url) {
            return {
                getPerson:function(lxrid){
                    return $http.get(Host.getHostByName("INFORMATION")+Url.getUrlByName("PERSON")+"?lxrid="+lxrid);
                },
                getCompany:function(){
                    return $http.get(Host.getHostByName("INFORMATION")+Url.getUrlByName("COMPANY")+"?khid="+khid);
                },
                getIntermediary:function(){
                    return $http.get(Host.getHostByName("INFORMATION")+Url.getUrlByName("INTERMEDIARY")+"?khid="+khid);
                },
                getAgent:function(){
                    return $http.get(Host.getHostByName("INFORMATION")+Url.getUrlByName("AGENT")+"?khid="+khid);
                }
            };
        }
    ]);