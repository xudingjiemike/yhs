/**
 * Created by Zhang on 2015/12/12.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.PageInfo')
    .service('pageInfoService', ['_','pageInfoApi',
        function (_,pageInfoApi) {
            return {
                /**
                 * 获取联系人信息
                 * @param param
                 * @returns {*|HttpPromise}
                 */
                getContacts: function(param){
                    return pageInfoApi.getContacts(param);
                },

                /**
                 * 获取单位用户信息
                 * @param param
                 * @returns {*|HttpPromise}
                 */
                getCompany: function(param){
                    return pageInfoApi.getCompany(param);
                },

                /**
                 * 获取中介机构信息
                 * @param param
                 * @returns {*|HttpPromise}
                 */
                getIntermediary: function(param){
                    return pageInfoApi.getIntermediary(param);
                },

                /**
                 * 更新联系人信息
                 * @param param
                 * @returns {*|HttpPromise}
                 */
                updateContacts:function(param){
                    return pageInfoApi.updateContacts(param);
                },

                /**
                 * 更新单位用户信息
                 * @param param
                 * @returns {*|HttpPromise}
                 */
                updateCompany:function(param){
                    return pageInfoApi.updateCompany(param);
                },

                /**
                 * 更新中介机构信息
                 * @param param
                 * @returns {*|HttpPromise}
                 */
                updateIntermediary:function(param){
                    return pageInfoApi.updateIntermediary(param);
                }
            }
        }]);