/**
 * Created by Zhang on 2015/12/12.
 */

angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.PopInfo')
    .factory('PopInfoApi', ['$http', 'Host','Url',
        function ($http, Host, Url) {
            return {
                /**
                 * 查询委托单位情况
                 */
                getAgent: function (khid) {
                    return $http.get(Host.getHostByName('INFORMATION')+Url.getUrlByName('AGENT'),{params:{khid:khid}});
                }
            };
        }
    ]);