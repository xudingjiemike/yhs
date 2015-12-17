/**
 * Created by liliang on 2015/12/8.
 */

angular
    .module("ui.yypt5.yhgl.GeneralInfoViewer.Trustors")
    .factory("TrustorApi", ["$http", "Host","Url",
        function ($http, Host, Url) {
            return {
                /**
                 * 获取委托单位
                 */
                getTrustors: function (khid,khlx,yhdm) {
                    //return $http.get(Host.getHostByName("BUSINISS")+
                    //    Url.getUrlByName("TRUSTOR")+"?khid="+khid+"&khlx="+khlx+"&yhdm="+yhdm);
                    return $http.get("http://192.168.70.246:7001/yypt5/api/khgl/wtdw/getWtdw"+
                        "?khid="+khid+"&khlx="+khlx+"&yhdm="+yhdm);
                },
                /**
                 * 删除(终止代理)委托单位
                 */
                deleteTrustor: function(){
                    return $http.get(Host.getHostByName("BUSINISS")+Url.getUrlByName("DELETETRUSTOR")+"?");
                }
            };
        }
    ]);