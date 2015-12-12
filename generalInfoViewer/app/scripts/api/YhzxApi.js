/**
 * Created by zhousj on 2015/11/18.
 */
angular
    .module("ui.yypt5.yhgl.GeneralInfoViewer.Information")
    .factory("YhzxApi", ["$http", "Host", "Url",
        function ($http,  Host, Url) {

            return {

                /**
                 * 查询咨询记录List
                 */
                getZxjlList: function (khid,pageId) {
                    return $http.get(Host.getHostByName("INFORMATION")+Url.getUrlByName("ZXJL")+"?khid="+khid+"&pageId="+pageId);
                },
                /**
                 * 查询投诉建议List
                 */
                getTsjyList: function (khid,pageId) {
                    return $http.get(Host.getHostByName("INFORMATION")+Url.getUrlByName("TSJY")+"?khid="+khid+"&pageId="+pageId);
                }
            };
        }
    ]);