/**
 * Created by Zhang on 2015/12/16.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.SearchInfo')
    .service('searchInfoService', ['_', 'searchInfoApi',
        function (_, searchInfoApi) {
            return {
                /**
                 * 获取搜索结果
                 * @param param
                 * @returns {*|HttpPromise}
                 */
                getSearch: function (param) {
                    return searchInfoApi.getSearch(param);
                }
            }
        }]);