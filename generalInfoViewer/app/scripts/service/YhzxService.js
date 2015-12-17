/**
 * Created by zhousj on 2015/11/18.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.PageInfo')
    .service('YhzxService', ['YhzxApi',
        function (YhzxApi) {
            var zxjlList = [];
            var tsjyList = [];
            var totalItems = {tot: 0, pageSize: 5, currentPageNumber: 1};
            return {
                FindTotalItems: function FindTotalItems() {
                    return totalItems;
                },
                loadZxjlList: function (pageId,khid) {
                    if (zxjlList.khid==undefined || khid !== zxjlList.khid) {
                        YhzxApi.getZxjlList(khid).success(function (data) {
                            angular.copy(data, zxjlList);
                        });
                    }
                },
                getZxjlList: function () {
                    return zxjlList;
                },
                loadTsjyList: function (pageId,khid) {
                    if (khid !== tsjyList.khid) {
                        alert(tsjyList.khid);
                        YhzxApi.getTsjyList(khid).success(function (data) {
                            totalItems.tot = data.total;
                            angular.copy(data, tsjyList);
                        });
                    }
                },
                getTsjyList: function () {
                    return tsjyList;
                }
            }

        }]);