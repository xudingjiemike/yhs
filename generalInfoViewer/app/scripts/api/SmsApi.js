/**
 * Created by sxfei on 2015/12/12.
 */
angular
    .module("ui.yypt5.yhgl.GeneralInfoViewer.PageInfo")
    .factory("SmsApi", ["$http", "Host", "Url",
        function ($http,  Host, Url) {

            return {

                /**
                 * 查询短信List
                 */
                getDxList: function (khid,pageId) {
                    return $http.get(Host.getHostByName("INFORMATION")+Url.getUrlByName("DX")+"?khid="+khid+"&pageId="+pageId);
                }

            };
        }
    ]);