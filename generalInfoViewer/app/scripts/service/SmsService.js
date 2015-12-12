/**
 * Created by zhousj on 2015/11/18.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.Information')
    .service('SmsService', ['SmsApi',
        function (SmsApi) {

            return {
                /**
                 * 获取发送短信列表
                 * @param khid
                 *          客户ID
                 */
                getDxList: function (khid){
                    return SmsApi.getDxList(khid);
                }
            }

        }]);