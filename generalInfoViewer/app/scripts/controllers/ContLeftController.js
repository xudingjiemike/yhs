/**
 * Created by apple on 15/12/2.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.ContLeft')
    .controller('ContLeftController',['$scope','_',function($scope,_){

        $scope.findInfo = "";

        $scope.TagStyle = {'-webkit-transform':'translate(0,0'};

        var _tagProperty = {'tagName':'','TagClass':'','templateUrl':''};

        function _tagObj(tagName,templateUrl){
            this.tagName = tagName;
            this.templateUrl = templateUrl;
        }

        _tagObj.prototype = _tagProperty;
        /****
         * controller 内部存储tag数据
         * @type {{tagName: string, TagClass: string, pageInfo: string}[]}
         * @private
         */

        //var _tags = [{'tagName':'纳税单位','TagClass':'','templateUrl':'template/tabs/taxInstitutionPage.html'},{'tagName':'会计信息','TagClass':'','templateUrl':'template/tabs/taxpayerPage.html'},{'tagName':'中介机构','TagClass':'','templateUrl':'template/tabs/intermediaryInstitutionPage.html'}];


        var _tags = [new _tagObj('纳税单位','views/template/tabs/taxInstitutionPage.html'),new _tagObj('会计信息','views/template/tabs/accountantPage.html'),{'tagName':'中介机构','TagClass':'','templateUrl':'views/template/tabs/intermediaryInstitutionPage.html'}];

        $scope.tags  = _tags;
        $scope.tags[0].TagClass = 'active';

        $scope.activeView = function(number,tag){
            _.map($scope.tags,function(item){
                item.TagClass = "";
            });

            tag.TagClass = 'active';

          switch (number){
              case 0: $scope.TagStyle  = {'-webkit-transform':'translate(0,0'}; break;
              case 1: $scope.TagStyle  = {'-webkit-transform':'translate(-25%,0'}; break;
              case 2: $scope.TagStyle  = {'-webkit-transform':'translate(-50%,0'}; break;
              case 3: $scope.TagStyle  = {'-webkit-transform':'translate(-75%,0'}; break;

          }

      };

    }]);