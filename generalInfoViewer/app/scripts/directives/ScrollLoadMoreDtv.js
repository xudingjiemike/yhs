/**
 * Created by liliang on 2015/12/21.
 */
angular.module('ui.yypt5.yhgl.GeneralInfoViewer')
    .directive('scrollLoadMore', [function () {
        return {
            restrict: 'EA',
            scope:{
                loadMore: "&loadMore"
            },
            link: function(scope, elem) {
                elem.on("scroll", function(){
                    var tableHeight = $(this).find("table").height();
                    var elemHeight = this.clientHeight;
                    var scrollTop = this.scrollTop;
                    if(tableHeight - elemHeight - scrollTop <= 10){
                        scope.$apply(scope.loadMore);
                    }
                });
            }
        };
    }]);