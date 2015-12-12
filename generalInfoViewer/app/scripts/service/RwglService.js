/**
 * Created by zhousj on 2015/11/18.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.Information')
    .service('RwglService', ['RwglApi',
        function (RwglApi) {

            return {

                getCallbackList: function (khid,pageId){
                    return RwglApi.getCallbackList(khid,pageId);
                },
                getCalloutList: function (khid,pageId){
                    return RwglApi.getCalloutList(khid,pageId);
                },
                getYcrwList: function (khid,pageId){
                    return RwglApi.getYcrwList(khid,pageId);
                },
                getSmrwList: function (khid,pageId){
                    return RwglApi.getSmrwList(khid,pageId);
                },
                getZdxcList: function (khid,pageId){
                    return RwglApi.getZdxcList(khid,pageId);
                }
            }

        }]);