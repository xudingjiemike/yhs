/**
 * Created by xudj on 15/11/24.
 */
/**
 * Created by xudj on 15/11/24.
 */
angular.module('ui.yypt5.yhgl.GeneralInfoViewer.Taxlnstitution').controller('IntermediaryInstitutionController',['$scope','$timeout','SoftwareAuthorityService',function($scope,$timeout,SoftwareAuthorityService){

        /***
         * 生成tag对象
         * @type {{tagName: string, TagClass: string, templateUrl: string}}
         * @private
         */
        var _tagProperty = {'tagName':'','TagClass':'','templateUrl':''};

        function _tagObj(tagName,templateUrl){
            this.tagName = tagName;
            this.templateUrl = templateUrl;
        }

        $scope.tableItems = {};

        _tagObj.prototype = _tagProperty;

        $scope.tags = [
            new _tagObj('订单','views/yhlxrBusiness/order/tablePage.html'),
            new _tagObj('咨询','views/yhjh/zx.html'),
            new _tagObj('回电','views/yhjh/callback.html'),
            new _tagObj('外呼','views/yhjh/callout.html'),
            new _tagObj('远程','views/yhjh/yc.html'),
            new _tagObj('派发','views/yhjh/sm.html'),
            new _tagObj('网点服务','views/yhjh/zdxc.html'),
            new _tagObj('诉求','views/yhjh/sq.html')

        ];




        /****
        * 设置 cont-left-btm 的 位置 xudj
        */
        $timeout(function(){
            angular.element("#cont-left-btm-intermediary").css("top",$("#cont-left-top-intermediary").outerHeight()+6+"px");
        },500);








    }]
);

