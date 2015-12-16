/**
 * Created by Zhang on 2015/12/12.
 */

angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.PopInfo')
    .factory('PageInfoApi', ['$http', 'Host', 'Url',
        function ($http, Host, Url) {
            return {
                /**
                 * 查询委托单位情况
                 */
                getContacts: function (lxrid, khid, khlx, yhdm) {
                    console.log(Host.getHostByName('INFORMATION') + Url.getUrlByName('CONTACTS'));
                    return $http.get(Host.getHostByName('INFORMATION') + Url.getUrlByName('CONTACTS'), {
                        params: {lxrid: lxrid, khid: khid, khlx: khlx, yhdm: yhdm}
                    });
                },
                getCompany: function (khid) {
                    return $http.get(Host.getHostByName('INFORMATION') + Url.getUrlByName('COMPANY'), {params: {khid: khid}});
                },
                getIntermediary: function (khid) {
                    return $http.get(Host.getHostByName('INFORMATION') + Url.getUrlByName('INTERMEDIARY'), {params: {khid: khid}});
                }
            };
        }
    ]);