/**
 * Created by Zhang on 2015/12/12.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.PageInfo')
    .service('PageInfoService', ['_','PageInfoApi',
        function (_,PageInfoApi) {
            return {
                getContacts: function(lxrid,khid,khlx,yhdm){
                    var PageInfo = {};
                    PageInfoApi.getContacts(lxrid,khid,khlx,yhdm).success(function (data) {
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
                getIntermediary: function(yhdm){
                    var PageInfo = {};
                    PageInfoApi.getIntermediary(yhdm).success(function (data) {
                        angular.copy(data, PageInfo);
                    });
                    return PageInfo;
                },
                saveRemark:function(remark){
                    var PageInfo = {};
                    PageInfoApi.getIntermediary(remark).success(function (data) {
                        angular.copy(data, PageInfo);
                    });
                    return PageInfo;
                }
            }
        }]);