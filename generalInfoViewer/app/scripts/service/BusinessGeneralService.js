/****
 * xudj
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .service('BusinessGeneralService',['_','BusinessGeneralApi',function(_,BusinessGeneralApi){
        var BusinessGeneralData = {};
        function load(Params){
            BusinessGeneralApi.LoadBusinessGeneralInfo(Params).success(function(data){
                angular.copy(data,BusinessGeneralData);
            });

        }

        function getData(Params){
            if(angular.equals(BusinessGeneralData,{})){
                load(Params);
            }
        }
        return {
           getBusinessGeneralData:getData
        }
    }]);