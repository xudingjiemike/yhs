/**
 * Created by sxfei on 2015/11/30.
 */
angular
    .module("ui.yypt5.yhgl.GeneralInfoViewer.PageInfo")
    .factory("RwglApi", ["$http", "Host", "Url",
        function ($http,  Host, Url) {

            return {
                /**
                 * 查询用户请回电任务列表
                 */
                getCallbackList: function (khid,pageId) {
                    return $http.get(Host.getHostByName("INFORMATION")+Url.getUrlByName("CALLBACK")+"?khid="+khid+"&pageId="+pageId);
                },
                /**
                 * 查询用户外呼任务列表
                 */
                getCalloutList: function (khid,pageId) {
                    return $http.get(Host.getHostByName("INFORMATION")+Url.getUrlByName("CALLOUT")+"?khid="+khid+"&pageId="+pageId);
                },
                /**
                 * 查询用户远程任务列表
                 */
                getYcrwList: function (khid,pageId) {
                    return $http.get(Host.getHostByName("INFORMATION")+Url.getUrlByName("YCRW")+"?khid="+khid+"&pageId="+pageId);
                },
                /**
                 * 查询用户上门任务列表
                 */
                getSmrwList: function (khid,pageId) {
                    return $http.get(Host.getHostByName("INFORMATION")+Url.getUrlByName("SMRW")+"?khid="+khid+"&pageId="+pageId);
                },
                /**
                 * 查询用户驻点现场任务列表
                 */
                getZdxcList: function (khid,pageId) {
                    return $http.get(Host.getHostByName("INFORMATION")+Url.getUrlByName("ZDXC")+"?khid="+khid+"&pageId="+pageId);
                }
            };
        }
    ]);