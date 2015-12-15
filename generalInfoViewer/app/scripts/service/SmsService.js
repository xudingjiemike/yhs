/**
 * Created by zhousj on 2015/11/18.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.PageInfo')
    .service('SmsService', ['SmsApi',
        function (SmsApi) {

            return {
                /**
                 * ��ȡ���Ͷ����б�
                 * @param khid
                 *          �ͻ�ID
                 */
                getDxList: function (khid){
                    return SmsApi.getDxList(khid);
                }
            }

        }]);