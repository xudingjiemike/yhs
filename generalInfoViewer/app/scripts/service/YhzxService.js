/**
 * Created by zhousj on 2015/11/18.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.PageInfo')
    .service('YhzxService', ['YhzxApi',
        function (YhzxApi) {
            var zxjlList = [];
            var tsjyList = [];
            var pageInfoZx = {total: -1, pageSize: 5, pageId: 1};
            var pageInfoTs = {total: -1, pageSize: 5, pageId: 1};
            return {
                loadZxjlList: function (khid,isFirst) {
                    if (pageInfoZx.total == -1) {
                        pageInfoZx.total = 0;
                    } else if (pageInfoZx.total == 0) {
                        return;
                    } else if (!isFirst) {//���ǵ�һ�Σ��ǵ��������
                        if (pageInfoZx.total > 0) {
                            var temp = pageInfoZx.total / pageInfoZx.pageSize;
                            if (temp < pageInfoZx.pageId) {
                                return;
                            }
                        }
                    }else{//�ǵ�һ�β�ѯ������˾Ͳ��ٲ���
                        return;
                    }
                    pageInfoZx.pageId++;
                    YhzxApi.getZxjlList(khid, pageInfoZx.pageId, pageInfoZx.pageSize).success(function (data) {
                        pageInfoZx.total = data.total;
                        angular.forEach(data.list, function (temp) {
                            zxjlList.push(temp);
                        });
                        //angular.copy(data, zxjlList);
                    });
                },
                getZxjlList: function () {
                    return zxjlList;
                },
                loadTsjyList: function (khid,isFirst) {
                    if (pageInfoTs.total == -1) {
                        pageInfoTs.total = 0;
                    } else if (pageInfoTs.total == 0) {
                        return;
                    } else if (!isFirst) {//���ǵ�һ�Σ��ǵ��������
                        if (pageInfoTs.total > 0) {
                            var temp = pageInfoTs.total / pageInfoTs.pageSize;
                            if (temp < pageInfoTs.pageId) {
                                return;
                            }
                        }
                    }else{//�ǵ�һ�β�ѯ������˾Ͳ��ٲ���
                        return;
                    }
                    pageInfoTs.pageId++;
                    YhzxApi.getTsjyList(khid, pageInfoTs.pageId, pageInfoTs.pageSize).success(function (data) {
                        pageInfoTs.total = data.total;
                        angular.forEach(data.list, function (temp) {
                            tsjyList.push(temp);
                        });
                    });

                },
                getTsjyList: function () {
                    return tsjyList;
                }
            }

        }]);