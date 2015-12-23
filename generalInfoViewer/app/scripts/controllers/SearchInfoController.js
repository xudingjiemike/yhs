/**
 * Created by Zhang on 2015/12/16.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.SearchInfo')
    .controller('SearchInfoController', ['$scope', 'searchInfoService', 'DataStore', 'Config',
        function ($scope, searchInfoService, DataStore, Config) {
            $scope.showSearchResult = function ($event) {
                var yhmc = $.trim($($event.target).val());
                var key = $event.which;
                if (key == 13) {
                    $scope.Config = Config;
                    $scope.searchInfo = searchInfoService.getSearch(yhmc);
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
            $scope.selectItem = function (item) {
                var obj = {
                    yhjc:item.yhjc,
                    yhmc:item.yhmc,
                    tagType: '1'
                };
                DataStore.set('khid', item.yhid);
                $scope.$emit('modifyTab', obj);
            };
            $scope.addContacts = function () {
                //新增用户 todo
            };
        }]);