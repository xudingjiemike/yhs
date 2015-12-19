/**
 * Created by Zhang on 2015/12/16.
 */

angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.SearchInfo')
    .factory('searchInfoApi', ['$http', 'Host', 'Url',
        function ($http, Host, Url) {
            return {
                getSearch: function (yhmc) {
                    return $http.get(Host.getHostByName('BUSINISS')+Url.getUrlByName('SEARCH'),{params:{yhmc:yhmc}});
                }
            }
        }
    ]);