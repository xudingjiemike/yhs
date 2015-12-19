/**
 * Created by sxfei on 2015/11/18.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.PageInfo')
    .service('SmsService', ['SmsApi',
        function (SmsApi) {
            var dxList = [];
            var pageInfoDx = {total: -1, pageSize: 5, pageId: 1};
            return {
                getDxList: function (){
                    return dxList;
                },
                loadDxList: function (khid) {
                    if (pageInfoDx.total > 0) {
                        var temp = pageInfoDx.total / pageInfoDx.pageSize;
                        if (temp < pageInfoDx.pageId) {
                            return;
                        }
                    }else if (pageInfoDx.total == -1) {
                        pageInfoDx.total = 0;
                    } else if (pageInfoDx.total == 0) {
                        return;
                    }
                    pageInfoDx.pageId++;
                    SmsApi.getDxList(khid, pageInfoDx.pageId, pageInfoDx.pageSize)
                        .success(function (data) {
                        pageInfoDx.total = data.total;
                        angular.forEach(data.list, function (temp) {
                            alert(temp);
                            dxList.push(temp);
                        });
                    });
                }
            }

        }]);