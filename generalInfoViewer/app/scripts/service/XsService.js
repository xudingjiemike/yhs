/**
 * Created by zhousj on 2015/11/18.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.Information')
    .service('XsService', ['XsApi',
        function (XsApi) {
            return {
                getXsList: function (khid){
                    return XsApi.getXsList(khid);
                }
            }

        }]);