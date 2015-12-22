/**
 * Created by xudj on 15/12/2.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.ContLeft')
    .controller('ContLeftController', ['$scope', '_', '$timeout', 'DataStore', 'Config',
        function ($scope, _, $timeout, DataStore, Config) {

            $scope.findInfo = "";

            $scope.TagStyle = {'-webkit-transform': 'translate(0,0)'};

            var _tagProperty = {'tagName': '', 'TagClass': '', 'templateUrl': ''};

            /****
             *
             * @param tagName
             * @param templateUrl
             * @param tagtype tag类型，每个类型只会有一个
             * @param  checked 是否已被点击过
             * @private
             */
            function _tagObj(tagName, templateUrl, tagtype, checked) {
                this.tagName = tagName;
                this.templateUrl = templateUrl;
                this.tagtype = tagtype;
                this.checked = checked;
            }

            _tagObj.prototype = _tagProperty;
            /****
             * controller 内部存储tag数据
             * @type {{tagName: string, TagClass: string, pageInfo: string}[]}
             * @private
             */

            var _tags = [
                new _tagObj('会计信息', 'views/template/tabs/accountantPage.html', Config.getTabTip().contacts, false),
                new _tagObj('纳税单位', 'views/template/tabs/taxInstitutionPage.html', Config.getTabTip().company, false),
                new _tagObj('中介机构', 'views/template/tabs/intermediaryInstitutionPage.html', Config.getTabTip().intermediary, false)
            ];

            //测试用数据，by Zhang todo
            DataStore.set({
                lxrid: '19c2f04ff6564c60bc4bc7a648c356ec',
                khid: '799cb25280c6439a8aff592707451606',
                khlx: '0',
                yhdm: 'SWSBD0010'
            });

            /****
             * 点击tab 切换标签页
             * @param number
             * @param tag
             * @private
             */
            function _activeView(number, tag) {

                _.map($scope.tags, function (item) {
                    item.TagClass = "";
                });

                tag.TagClass = 'active';

                switch (number) {
                    case 0:
                        $scope.TagStyle = {'-webkit-transform': 'translate(0,0)'};
                        break;
                    case 1:
                        $scope.TagStyle = {'-webkit-transform': 'translate(-25%,0)'};
                        break;
                    case 2:
                        $scope.TagStyle = {'-webkit-transform': 'translate(-50%,0)'};
                        break;
                    case 3:
                        $scope.TagStyle = {'-webkit-transform': 'translate(-75%,0)'};
                        break;
                }


                $scope.$broadcast('loadData', tag);
                tag.checked = true;

            }

            /***
             * 创建新的标签页，替换原来的tab或者插入
             * @param data
             */
            function createTab(data) {
                var title=data.yhjc?data.yhjc:data.yhmc, tagtype=data.tagType;
                if (angular.equals(tagtype, Config.getTabTip().company)) {
                    _.map(_tags, function (item) {
                        item.TagClass = "";
                    });
                    var newTab = new _tagObj(title, 'views/template/tabs/taxInstitutionPage.html', Config.getTabTip().company);
                    newTab.TagClass = 'active';
                    var addTab = true;
                    var index = 0;
                    for (var i = 0; i < _tags.length; i++) {
                        if (angular.equals(tagtype, _tags[i].tagtype)) {
                            addTab = false;
                            index = i;
                            break;
                        }
                    }

                    if (addTab) {
                        _tags.push(newTab);
                        $timeout(function () {
                            _activeView(_tags.length - 1, newTab);
                        }, 100)

                    } else {
                        _tags[index] = newTab;
                        $timeout(function () {
                            _activeView(index, newTab);
                        }, 100)

                    }
                }


            }

            $scope.tags = _tags;
            $scope.tags[0].TagClass = 'active';

            /****
             * 监听搜索框选择事件
             */
            $scope.$on('modifyTab', function (e, d) {
                createTab(d);
                $scope.tags = _tags;
            });


            $scope.activeView = _activeView;


        }]);