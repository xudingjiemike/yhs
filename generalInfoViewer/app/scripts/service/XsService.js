/**
 * Created by zhousj on 2015/11/18.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.PageInfo')
    .service('XsService', ['XsApi',
        function (XsApi) {
            var xsList = [];
            var pageInfoXs = {total: -1, pageSize: 5, pageId: 1};
            return {
                getXsList: function (){
                    return xsList;
                },
                loadXsList: function (khid,isFirst) {
                    if (pageInfoXs.total == -1) {
                        pageInfoXs.total = 0;
                    } else if (pageInfoXs.total == 0) {
                        return;
                    } else if (!isFirst) {//不是第一次，是点击下拉框
                        if (pageInfoXs.total > 0) {
                            var temp = pageInfoXs.total / pageInfoXs.pageSize;
                            if (temp < pageInfoXs.pageId) {
                                return;
                            }
                        }
                    }else{//是第一次查询但查过了就不再查了
                        return;
                    }
                    pageInfoXs.pageId++;
                    XsApi.getXsList(khid, pageInfoXs.pageId, pageInfoXs.pageSize).success(function (data) {
                        pageInfoXs.total = data.total;
                        angular.forEach(data.list, function (temp) {
                            xsList.push(temp);
                        });
                    });
                }
            }

        }]);