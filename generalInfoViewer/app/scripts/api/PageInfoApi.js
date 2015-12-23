/**
 * Created by Zhang on 2015/12/12.
 */

angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.PageInfo')
    .factory('pageInfoApi', ['$http', 'Host', 'Url',
        function ($http, Host, Url) {
            return {
                /**
                 * 获取联系人信息
                 * @param param
                 * @returns {HttpPromise}
                 */
                getContacts: function (param) {
                    return $http.get(Host.getHostByName('BUSINISS') + Url.getUrlByName('CONTACTS'), {params: param});
                },

                /**
                 * 获取单位用户信息
                 * @param param
                 * @returns {HttpPromise}
                 */
                getCompany: function (param) {
                    return $http.get(Host.getHostByName('BUSINISS') + Url.getUrlByName('COMPANY'), {params: param});
                },

                /**
                 * 获取中介机构信息
                 * @param param
                 * @returns {HttpPromise}
                 */
                getIntermediary: function (param) {
                    return $http.get(Host.getHostByName('BUSINISS') + Url.getUrlByName('INTERMEDIARY'), {params: param});
                },

                /**
                 * 更新联系人信息
                 * @param param
                 * @returns {HttpPromise}
                 */
                updateContacts:function(param){
                    return $http.post(Host.getHostByName('BUSINISS') + Url.getUrlByName('CONTACTS_UPDATE'), JSON.stringify(param));
                },

                /**
                 * 更新单位用户信息
                 * @param param
                 * @returns {HttpPromise}
                 */
                updateCompany:function(param){
                    return $http.post(Host.getHostByName('BUSINISS') + Url.getUrlByName('COMPANY_UPDATE'), JSON.stringify(param));
                },

                /**
                 * 更新中介机构信息
                 * @param param
                 * @returns {HttpPromise}
                 */
                updateIntermediary:function(param){
                    return $http.post(Host.getHostByName('BUSINISS') + Url.getUrlByName('INTERMEDIARY_UPDATE'),JSON.stringify(param));
                }
            };
        }
    ]);