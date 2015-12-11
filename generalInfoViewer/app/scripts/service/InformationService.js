/**
 * Created by Zhang on 2015/12/11.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.Information')
    .service('InformationService', ['_', 'InformationApi',
        function (_, InformationApi) {
            var Information = {};
            return {
                getPerson: function (lxrid) {
                    InformationApi.getPerson(lxrid).success(function (data) {
                        angular.copy(data, Information);
                    });
                    return Information;
                },
                getCompany: function (khid) {
                    InformationApi.getCompany(khid).success(function (data) {
                        angular.copy(data, Information);
                    });
                    return Information;
                },
                getIntermediary: function (khid) {
                    InformationApi.getIntermediary(khid).success(function (data) {
                        angular.copy(data, Information);
                    });
                    return Information;
                },
                getAgent: function (khid) {
                    InformationApi.getAgent(khid).success(function (data) {
                        angular.copy(data, Information);
                    });
                    return Information;
                }
            }
        }]);