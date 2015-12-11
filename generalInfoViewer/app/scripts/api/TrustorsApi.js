/**
 * Created by liliang on 2015/12/8.
 */

angular
    .module("ui.yypt5.yhgl.GeneralInfoViewer.Trustors")
    .factory("TrustorApi", ["$http", "Host","Url",
        function ($http, Host, Url) {
            return {
                /**
                 * 查询委托单位情况
                 */
                getTrustors: function (khid,khlx) {
                    return $http.get(Host.getHostByName("BUSINISS")+Url.getUrlByName("TRUSTOR")+"?khid="+khid+"&khlx="+khlx);
                }
            };
        }
    ]);