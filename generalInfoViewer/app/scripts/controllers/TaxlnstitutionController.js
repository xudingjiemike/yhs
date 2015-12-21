/**
 * Created by xudj on 15/11/24.
 */
angular.module('ui.yypt5.yhgl.GeneralInfoViewer.Taxlnstitution').controller('TaxlnstitutionController',['$scope','$timeout',function($scope,$timeout){

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

        _tagObj.prototype = _tagProperty;

        $scope.tags = [
            new _tagObj('软件授权','views/yhlxrBusiness/softwareAuthority/tablePage.html'),
            new _tagObj('订单','views/yhlxrBusiness/order/tablePage.html'),
            new _tagObj('银行托收','views/yhlxrBusiness/bankAuthority/tablePage.html'),
            new _tagObj('礼品申请','views/yhlxrBusiness/giftApply/tablePage.html'),
            new _tagObj('SP','views/yhlxrBusiness/SP/tablePage.html'),
            new _tagObj('咨询','views/yhjh/zx.html'),
            new _tagObj('回电','views/yhjh/callback.html'),
            new _tagObj('外呼','views/yhjh/callout.html'),
            new _tagObj('远程','views/yhjh/yc.html'),
            new _tagObj('派发','views/yhjh/sm.html'),
            new _tagObj('网点服务','views/yhjh/zdxc.html'),
            new _tagObj('诉求','views/yhjh/sq.html'),
            new _tagObj('短信','views/yhjh/sms.html'),
            new _tagObj('线索','views/yhjh/xs.html')
        ];


        /****
         * 设置 cont-left-btm 的 位置 xudj
         */
        $timeout(function(){
            angular.element("#cont-left-btm").css("top",$("#cont-left-top").outerHeight()+6+"px");
        },10);








    }]
);
