/**
 * Created by Zhang on 2015/12/12.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.PageInfo')
    .service('PageInfoService', ['_','PageInfoApi',
        function (_,PageInfoApi) {
            var PageInfo = {};
            return {
                getContacts: function(lxrid){
                    PageInfoApi.getContacts(lxrid).success(function (data) {
                        angular.copy(data, PageInfo);
                    });
                    return PageInfo;
                },
                getCompany: function(khid){
                    PageInfoApi.getCompany(khid).success(function (data) {
                        angular.copy(data, PageInfo);
                    });
                    return PageInfo;
                },
                getIntermediary: function(khid){
                    PageInfoApi.getIntermediary(khid).success(function (data) {
                        angular.copy(data, PageInfo);
                    });
                    return PageInfo;
                }
            }
        }]);