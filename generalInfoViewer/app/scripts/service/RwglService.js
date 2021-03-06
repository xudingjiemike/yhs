/**
 * Created by zhousj on 2015/11/18.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.PageInfo')
    .service('RwglService', ['RwglApi',
        function (RwglApi) {
            var callbackList = [];
            var calloutList = [];
            var ycrwList = [];
            var smrwList = [];
            var zdxcList = [];
            var pageInfoCallback = {total: -1, pageSize: 5, pageId: 1};
            var pageInfoCallout = {total: -1, pageSize: 5, pageId: 1};
            var pageInfoYc = {total: -1, pageSize: 5, pageId: 1};
            var pageInfoSm = {total: -1, pageSize: 5, pageId: 1};
            var pageInfoZd = {total: -1, pageSize: 5, pageId: 1};
            return {
                getCallbackList: function () {
                    return callbackList;
                },
                getCalloutList: function () {
                    return calloutList;
                },
                getYcrwList: function () {
                    return ycrwList;
                },
                getSmrwList: function () {
                    return smrwList;
                },
                getZdxcList: function () {
                    return zdxcList;
                },
                loadCallbackList: function (khid,isFirst) {
                    if (pageInfoCallback.total == -1) {
                        pageInfoCallback.total = 0;
                    } else if (pageInfoCallback.total == 0) {
                        return;
                    }else if (!isFirst) {//不是第一次，是点击下拉框
                        if (pageInfoCallback.total > 0) {
                            var temp = pageInfoCallback.total / pageInfoCallback.pageSize;
                            if (temp < pageInfoCallback.pageId) {
                                return;
                            }
                        }
                    }else{//是第一次查询但查过了就不再查了
                        return;
                    }
                    pageInfoCallback.pageId++;
                    RwglApi.getCallbackList(khid, pageInfoCallback.pageId, pageInfoCallback.pageSize)
                        .success(function (data) {
                            pageInfoCallback.total = data.total;
                            angular.forEach(data.list, function (temp) {
                                callbackList.push(temp);
                            });
                        });
                },
                loadCalloutList: function (khid,isFirst) {
                    if (pageInfoCallout.total == -1) {
                        pageInfoCallout.total = 0;
                    } else if (pageInfoCallout.total == 0) {
                        return;
                    }else if (!isFirst) {//不是第一次，是点击下拉框
                        if (pageInfoCallout.total > 0) {
                            var temp = pageInfoCallout.total / pageInfoCallout.pageSize;
                            if (temp < pageInfoCallout.pageId) {
                                return;
                            }
                        }
                    }else{//是第一次查询但查过了就不再查了
                        return;
                    }
                    pageInfoCallout.pageId++;
                    RwglApi.getCalloutList(khid, pageInfoCallout.pageId, pageInfoCallout.pageSize)
                        .success(function (data) {
                            pageInfoCallout.total = data.total;
                            angular.forEach(data.list, function (temp) {
                                calloutList.push(temp);
                            });
                        });
                },
                loadYcrwList: function (khid,isFirst) {
                    if (pageInfoYc.total == -1) {
                        pageInfoYc.total = 0;
                    } else if (pageInfoYc.total == 0) {
                        return;
                    }else if (!isFirst) {//不是第一次，是点击下拉框
                        if (pageInfoYc.total > 0) {
                            var temp = pageInfoYc.total / pageInfoYc.pageSize;
                            if (temp < pageInfoYc.pageId) {
                                return;
                            }
                        }
                    }else{//是第一次查询但查过了就不再查了
                        return;
                    }
                    pageInfoYc.pageId++;
                    RwglApi.getYcrwList(khid, pageInfoYc.pageId, pageInfoYc.pageSize).success(function (data) {
                        pageInfoYc.total = data.total;
                        angular.forEach(data.list, function (temp) {
                            ycrwList.push(temp);
                        });
                    });
                },
                loadSmrwList: function (khid,isFirst) {
                    if (pageInfoSm.total == -1) {
                        pageInfoSm.total = 0;
                    } else if (pageInfoSm.total == 0) {
                        return;
                    } else if (!isFirst) {//不是第一次，是点击下拉框
                        if (pageInfoSm.total > 0) {
                            var temp = pageInfoSm.total / pageInfoSm.pageSize;
                            if (temp < pageInfoSm.pageId) {
                                return;
                            }
                        }
                    }else{//是第一次查询但查过了就不再查了
                        return;
                    }
                    pageInfoSm.pageId++;
                    RwglApi.getSmrwList(khid, pageInfoSm.pageId, pageInfoSm.pageSize).success(function (data) {
                        pageInfoSm.total = data.total;
                        angular.forEach(data.list, function (temp) {
                            smrwList.push(temp);
                        });
                    });
                },
                loadZdxcList: function (khid,isFirst) {
                    if (pageInfoZd.total == -1) {
                        pageInfoZd.total = 0;
                    } else if (pageInfoZd.total == 0) {
                        return;
                    } else if (!isFirst) {//不是第一次，是点击下拉框
                        if (pageInfoZd.total > 0) {
                            var temp = pageInfoZd.total / pageInfoZd.pageSize;
                            if (temp < pageInfoZd.pageId) {
                                return;
                            }
                        }
                    }else{//是第一次查询但查过了就不再查了
                        return;
                    }
                    pageInfoZd.pageId++;
                    RwglApi.getZdxcList(khid, pageInfoZd.pageId, pageInfoZd.pageSize).success(function (data) {
                        pageInfoZd.total = data.total;
                        angular.forEach(data.list, function (temp) {
                            zdxcList.push(temp);
                        });
                    });
                }
            }

        }]);