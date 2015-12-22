/**
 * Created by Zhang on 2015/12/12.
 */

angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.PageInfo')
    .factory('pageInfoApi', ['$http', 'Host', 'Url',
        function ($http, Host, Url) {
            return {
                getContacts: function (param) {
                    return $http.get(Host.getHostByName('BUSINISS') + Url.getUrlByName('CONTACTS'), {params: param});
                },
                getCompany: function (param) {
                    return $http.get(Host.getHostByName('BUSINISS') + Url.getUrlByName('COMPANY'), {params: param});
                },
                getIntermediary: function (param) {
                    return $http.get(Host.getHostByName('BUSINISS') + Url.getUrlByName('INTERMEDIARY'), {params: param});
                },
                updateContacts:function(param){
                    return $http.post(Host.getHostByName('BUSINISS') + Url.getUrlByName('CONTACTS_UPDATE'), JSON.stringify(param));
                },
                updateCompany:function(param){
                    return $http.post(Host.getHostByName('BUSINISS') + Url.getUrlByName('COMPANY_UPDATE'), JSON.stringify(param));
                },
                updateIntermediary:function(param){
                    return $http.post(Host.getHostByName('BUSINISS') + Url.getUrlByName('INTERMEDIARY_UPDATE'),JSON.stringify(param));
                }
            };
        }
    ]);