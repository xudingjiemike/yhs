/****
 * xudj
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .service('BusinessGeneralService',['_','BusinessGeneralApi',function(_,BusinessGeneralApi){
        var BusinessGeneralData = {};
        function loadThreeDay(Params){
            BusinessGeneralApi.LoadBusinessGeneralThreeDay(Params).success(function(data){
                //angular.copy({"threeDay":data},BusinessGeneralData);
                angular.extend(BusinessGeneralData,{"threeDay":data});
            });

        }

        function loadOneYear(Params){
            BusinessGeneralApi.LoadBusinessGeneraOneYear(Params).success(function(data){
                BusinessGeneralData.OneYear = data;
                //angular.copy(data,BusinessGeneralData.OneYear);
                angular.extend(BusinessGeneralData,{"OneYear":data});
            });
        }

        function loadNoClose(Params){
            BusinessGeneralApi.LoadBusinessGeneraNoClose(Params).success(function(data){
                angular.extend(BusinessGeneralData,{"OnClose":data});
            })
        }

        function getData(Params){
            if(angular.equals(BusinessGeneralData.ThreeDay,undefined)){
                loadThreeDay(Params);
            }
            if(angular.equals(BusinessGeneralData.OneYear,undefined)){
                loadOneYear(Params)
            }
            if(angular.equals(BusinessGeneralData.OnClose,undefined)){
                loadNoClose(Params)
            }

            return BusinessGeneralData;



        }
        return {
           getBusinessGeneralData:getData
        }
    }]);