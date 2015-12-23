/**
 * Created by Zhang on 2015/12/16.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.SearchInfo')
    .controller('SearchInfoController', ['$scope', 'searchInfoService', 'DataStore', 'Config',
        function ($scope, searchInfoService, DataStore, Config) {
            /**
             * 显示搜索结果列表
             * @param $event
             */
            $scope.showSearchResult = function ($event) {
                var yhmc = $.trim($($event.target).val());
                var key = $event.which;
                if (key == 13) {
                    $scope.Config = Config;
                    searchInfoService.getSearch({
                        yhmc:yhmc
                    }).then(function(data){
                        $scope.searchInfo = data.data;
                    });
                    var target = $(".duty-number:focus");
                    if (target.length > 0 && target.val().length > 0) {
                        $(".search-progressive-result").slideDown(200);
                    }
                }
                $(document).one("click", function () {
                    $(".search-progressive-result").slideUp(200);
                    $("div.search-info-copy.search-userinfo").hide();
                });
                event.stopPropagation();
            };

            /**
             * 显示提示文本信息
             * @param $event
             */
            $scope.showHintText = function ($event) {
                var val = $($event.target).val();
                var showEle = $($event.target).next();
                if (val.length > 0) {
                    showEle.show();
                } else {
                    showEle.hide();
                }
                var isSep = new RegExp("^[\u4e00-\u9fa5]", "g").test(val);
                if (!isSep) {
                    var iteration = parseInt(val.length / 5);
                    var vals = [];
                    for (var i = 0; i <= iteration; i++) {
                        var _val = val.substring(i * 5, (i + 1) * 5);
                        if (_val.length == 5 && i < iteration) {
                            _val = _val + " ";
                        }
                        vals.push(_val);
                    }
                    val = vals.join("");
                }
                showEle.text($.trim(val));
            };

            /**
             * 点击一条记录，打开/更新选项卡
             * @param item
             */
            $scope.selectItem = function (item) {
                var obj = {
                    yhjc:item.yhjc,
                    yhmc:item.yhmc,
                    tagType: '1'
                };
                DataStore.set({
                    yhid:item.yhid,
                    yhlx:obj.tagType,
                    kjid:''
                });
                $scope.$emit('modifyTab', obj);
            };

            /**
             * 新增用户 todo
             */
            $scope.addContacts = function () {

            };
        }]);