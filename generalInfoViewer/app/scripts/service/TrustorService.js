/**
 * Created by liliang on 2015/12/8.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.Trustors')
    .service('TrustorService', ['_','TrustorApi',
        function (_,TrustorApi) {
            var Trustors = {};
            return {
                getTrustors: function(khid,khlx){
                    TrustorApi.getTrustors(khid,khlx).success(function (data) {
                        angular.copy(data, Trustors);
                    });

                    return Trustors;
                }
            }

        }]);