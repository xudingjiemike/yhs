/**
 * Created by Zhang on 2015/12/12.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.PageInfo')
    .service('pageInfoService', ['_','pageInfoApi',
        function (_,pageInfoApi) {
            return {
                getContacts: function(param){
                    return pageInfoApi.getContacts(param);
                },
                getCompany: function(param){
                    return pageInfoApi.getCompany(param);
                },
                getIntermediary: function(param){
                    return pageInfoApi.getIntermediary(param);
                },
                updateContacts:function(param){
                    return pageInfoApi.updateContacts(param);
                },
                updateCompany:function(param){
                    return pageInfoApi.updateCompany(param);
                },
                updateIntermediary:function(param){
                    return pageInfoApi.updateIntermediary(param);
                }
            }
        }]);