/**
 * Created by Zhang on 2015/12/12.
 */

angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.PageInfo')
    .factory('PageInfoApi', ['$http', 'Host', 'Url',
        function ($http, Host, Url) {
            return {
                getContacts: function (lxrid, khid, khlx, yhdm) {
                    return $http.get(Host.getHostByName('BUSINISS') + Url.getUrlByName('CONTACTS'), {
                        params: {lxrid: lxrid, khid: khid, khlx: khlx, yhdm: yhdm}
                    });
                },
                getCompany: function (khid) {
                    return $http.get(Host.getHostByName('BUSINISS') + Url.getUrlByName('COMPANY'), {params: {khid: khid}});
                },
                getIntermediary: function (yhdm) {
                    return $http.get(Host.getHostByName('BUSINISS') + Url.getUrlByName('INTERMEDIARY'), {params: {yhdm: yhdm}});
                },
                updateContacts:function(lxrid,field,content){
                    return $http.post(Host.getHostByName('BUSINISS') + Url.getUrlByName('CONTACTS_UPDATE'),
                        JSON.stringify({dataId:lxrid, filedKey:field, filedValue:content}));
                },
                updateCompany:function(yhid,field,content){
                    return $http.post(Host.getHostByName('BUSINISS') + Url.getUrlByName('COMPANY_UPDATE'),
                        JSON.stringify({dataId:yhid, filedKey:field, filedValue:content}));
                },
                updateIntermediary:function(yhdm,field,content){
                    return $http.post(Host.getHostByName('BUSINISS') + Url.getUrlByName('INTERMEDIARY_UPDATE'),
                        JSON.stringify({dataId:yhdm, filedKey:field, filedValue:content}));
                }
            };
        }
    ]);