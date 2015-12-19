/**
 * Created by Zhang on 2015/12/16.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.SearchInfo')
    .service('searchInfoService', ['_', 'searchInfoApi',
        function (_, searchInfoApi) {
            return {
                getSearch: function (yhmc) {
                    var SearchInfo = {};
                    searchInfoApi.getSearch(yhmc).success(function (data) {
                        angular.copy(data, SearchInfo);
                    });
                    return SearchInfo;
                }
            }
        }]);