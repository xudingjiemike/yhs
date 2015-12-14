/**
 * Created by Zhang on 2015/12/12.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.PageInfo')
    .service('PageInfoService', ['_','PageInfoApi',
        function (_,PageInfoApi) {
            return {
                getContacts: function(lxrid){
                    var PageInfo = {};
                    PageInfoApi.getContacts(lxrid).success(function (data) {
                        angular.copy(data, PageInfo);
                    });
                    return PageInfo;
                },
                getCompany: function(khid){
                    var PageInfo = {};
                    PageInfoApi.getCompany(khid).success(function (data) {
                        angular.copy(data, PageInfo);
                    });
                    return PageInfo;
                },
                getIntermediary: function(khid){
                    var PageInfo = {};
                    PageInfoApi.getIntermediary(khid).success(function (data) {
                        angular.copy(data, PageInfo);
                    });
                    return PageInfo;
                }
            }
        }]);