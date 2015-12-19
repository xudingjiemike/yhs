/**
 * Created by Zhang on 2015/12/12.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.PageInfo')
    .service('pageInfoService', ['_','pageInfoApi',
        function (_,pageInfoApi) {
            return {
                getContacts: function(lxrid,khid,khlx,yhdm){
                    var PageInfo = {};
                    pageInfoApi.getContacts(lxrid,khid,khlx,yhdm).success(function (data) {
                        angular.copy(data, PageInfo);
                    });
                    return PageInfo;
                },
                getCompany: function(khid){
                    var PageInfo = {};
                    pageInfoApi.getCompany(khid).success(function (data) {
                        angular.copy(data, PageInfo);
                    });
                    return PageInfo;
                },
                getIntermediary: function(yhdm){
                    var PageInfo = {};
                    pageInfoApi.getIntermediary(yhdm).success(function (data) {
                        angular.copy(data, PageInfo);
                    });
                    return PageInfo;
                },
                updateContacts:function(lxrid,field,content){
                    var PageInfo = {};
                    pageInfoApi.updateContacts(lxrid,field,content).success(function (data) {
                        angular.copy(data, PageInfo);
                    });
                    return PageInfo;
                },
                updateCompany:function(yhid,field,content){
                    var PageInfo = {};
                    pageInfoApi.updateCompany(yhid,field,content).success(function (data) {
                        angular.copy(data, PageInfo);
                    });
                    return PageInfo;
                },
                updateIntermediary:function(yhdm,field,content){
                    var PageInfo = {};
                    pageInfoApi.updateIntermediary(yhdm,field,content).success(function (data) {
                        angular.copy(data, PageInfo);
                    });
                    return PageInfo;
                }
            }
        }]);