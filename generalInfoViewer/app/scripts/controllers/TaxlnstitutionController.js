/**
 * Created by apple on 15/11/24.
 */
angular.module('ui.yypt5.yhgl.GeneralInfoViewer.Taxlnstitution').controller('TaxlnstitutionController',['$scope',function($scope){
        //
        //$scope.findInfo = "";
        //
        //$scope.TagStyle = {'-webkit-transform':'translate(0,0'};
        //
        ///***
        // * 生成tag对象
        // * @type {{tagName: string, TagClass: string, templateUrl: string}}
        // * @private
        // */
        //var _tagProperty = {'tagName':'','TagClass':'','templateUrl':''};
        //
        //function _tagObj(tagName,templateUrl){
        //    this.tagName = tagName;
        //    this.templateUrl = templateUrl;
        //}
        //
        //_tagObj.prototype = _tagProperty;
        ///****
        // * controller 内部存储tag数据
        // * @type {{tagName: string, TagClass: string, pageInfo: string}[]}
        // * @private
        // */
        //
        //
        //var _tags = [new _tagObj('软件授权'),new _tagObj('订单'),new _tagObj('服务/任务'),new _tagObj('银行托收'),new _tagObj('外呼'),new _tagObj('短信'),new _tagObj('礼品申请'),new _tagObj('诉求')];
        //
        ///****
        // * 点击之后改变view和tag
        // * @param number
        // * @param tag
        // * @param $event
        // */
        //function activeView (number,tag,$event){
        //    var ev = null;
        //    if($event === undefined){
        //        ev = $("#firstTab");
        //    }else{
        //        ev = $($event.target);
        //    }
        //    $scope.activeBarStyle = "width:"+ev.width()+"px;left:"+(ev[0].offsetLeft+10)+"px";
        //    _.map($scope.tags,function(item){
        //        item.TagClass = "";
        //    });
        //
        //    tag.TagClass = 'active';
        //    $scope.TagStyle  = {'-webkit-transform':'translate(-'+((number)/_tags.length*100)+'%,0'};
        //};
        //$scope.tags  = _tags;
        //$scope.tags[0].TagClass = 'active';
        //
        //$scope.activeBarStyle = "width:;left:";
        //$scope.activeView = activeView;
        //
        //
        //

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
            new _tagObj('软件授权','views/template/tables/tablePage.html'),
            new _tagObj('订单','views/template/tables/tablePage.html'),
            new _tagObj('银行托收','views/template/tables/tablePage.html'),
            new _tagObj('礼品申请','views/template/tables/tablePage.html'),
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







    }]
);
