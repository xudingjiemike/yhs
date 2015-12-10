/**
 * Created by liliang on 2015/12/8.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.Trustors')
    .controller('TrustorController', ['$scope','TrustorService',
        function ($scope,TrustorService) {
            $scope.Trustors = TrustorService.getTrustors("","");
            setTimeout(function(){
                console.log($scope.Trustors);
            },5000);

        }]);
