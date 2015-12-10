/**
 * Created by liliang on 2015/12/8.
 */

angular
    .module("ui.yypt5.yhgl.GeneralInfoViewer.Trustors")
    .factory("TrustorApi", ["$http", "Host","Url",
        function ($http, Host, Url) {
            return {
                /**
                 * ��ѯί�е�λ���
                 */
                getTrustors: function (khid,khlx) {
                    return $http.get(Host.getHostByName("BUSINISS")+Url.getUrlByName("TRUSTOR")+"?khid="+khid+"&khlx="+khlx);
                }
            };
        }
    ]);