/**
 * Created by liliang on 2015/12/8.
 */

angular
    .module("ui.yypt5.yhgl.GeneralInfoViewer.Trustors")
    .factory("trustorApi", ["$http", "Host","Url",
        function ($http, Host, Url) {
            return {
                /**
                 * 获取委托单位
                 */
                getTrustors: function (params) {
                    return $http.get(Host.getHostByName("BUSINISS")+
                        Url.getUrlByName("TRUSTOR")+params);
                },
                /**
                 * 删除(终止代理)委托单位
                 */
                deleteTrustor: function(params){
                    return $http.get(Host.getHostByName("BUSINISS")+Url.getUrlByName("DELETETRUSTOR"),params);
                }
            };
        }
    ]);