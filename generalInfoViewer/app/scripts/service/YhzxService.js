/**
 * Created by zhousj on 2015/11/18.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.Information')
    .service('YhzxService', ['YhzxApi',
        function (YhzxApi) {

            return {

                getZxjlList: function (khid){
                    return YhzxApi.getZxjlList(khid);
                },
                getTsjyList: function (khid){
                    return YhzxApi.getTsjyList(khid);
                }
            }

        }]);