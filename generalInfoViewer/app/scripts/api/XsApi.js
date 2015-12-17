/**
 * Created by zhousj on 2015/11/18.
 */
angular
    .module("ui.yypt5.yhgl.GeneralInfoViewer.PageInfo")
    .factory("XsApi", ["$http", "Host", "Url",
        function ($http,  Host, Url) {

            return {

                /**
                 * 查询电话技能组List
                 */
                getXsList: function (khid,pageId) {
                    return $http.get(Host.getHostByName("BUSINISS")+Url.getUrlByName("XS")+"?khid="+khid+"&pageId="+pageId);
                }

            };
        }
    ]);