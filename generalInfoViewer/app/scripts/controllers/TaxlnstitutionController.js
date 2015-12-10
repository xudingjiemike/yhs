/**
 * Created by apple on 15/11/24.
 */
angular.module('ui.yypt5.yhgl.GeneralInfoViewer').controller('TaxlnstitutionController',['$scope',function($scope){

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
        //
        //var _tags = [{'tagName':'软件授权','TagClass':'','templateUrl':'template/tabs/taxInstitutionPage.html'},{'tagName':'订单','TagClass':'','templateUrl':'template/tabs/taxpayerPage.html'},{'tagName':'中介机构','TagClass':'','templateUrl':'template/tabs/intermediaryInstitutionPage.html'}];


        var _tags = [new _tagObj('软件授权'),new _tagObj('订单'),new _tagObj('服务/任务'),new _tagObj('银行托收'),new _tagObj('外呼'),new _tagObj('短信'),new _tagObj('礼品申请'),new _tagObj('诉求')];



        $scope.tags  = _tags;
        $scope.tags[0].TagClass = 'active';

        $scope.activeView = function(number,tag,$event){
            var dom = $($event);
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


    }]
);
