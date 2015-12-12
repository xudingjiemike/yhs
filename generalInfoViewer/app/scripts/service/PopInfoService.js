/**
 * Created by Zhang on 2015/12/12.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.PopInfo')
    .service('PopInfoService', ['_','PopInfoApi',
        function (_,PopInfoApi) {
            var PopInfo = {};
            return {
                getAgent: function(khid){
                    PopInfoApi.getTrustors(khid).success(function (data) {
                        angular.copy(data, PopInfo);
                    });
                    return PopInfo;
                }
            }
        }]);