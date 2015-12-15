/**
 * Created by Zhang on 2015/12/11.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.PopInfo')
    .controller('PopInfoController', ['$scope', 'PopInfoService', function ($scope, PopInfoService) {
        $scope.loadDialogWindow = function () {

        };

        $scope.hideDialogWindow = function ($event) {
            $($event.target).parents('.dialog').hide();
            if ($('.dialog:visible').length == 0) {
                $($event.target).parents('.layer').hide();
            }
            $('.menus .active').removeClass('active');
        };
        var pzInit = {}, isMove = false, pzNow = {}, pzLast = {x: 0, y: 0}, parent, me;

        $scope.dragWindow = function ($event) {
            me = $event.target;
            $($event.target).css('cursor', 'move');
            isMove = true;
            pzInit = {x: $event.screenX, y: $event.screenY};
            parent = $($event.target).parent();
            pzLast = $($event.target).data('finalPz') || {x: 0, y: 0};
            pzNow = {x: $event.screenX, y: $event.screenY};
            parent.css('-webkit-transform', 'translate(' + (pzLast.x + pzNow.x - pzInit.x) + 'px,' + (pzLast.y + pzNow.y - pzInit.y) + 'px)');
        };
        $scope.finishDrag = function ($event) {
            $($event.target).css('cursor', 'default');
        };
        $scope.clickWindow=function($event){
            $('.dialog.ztop').removeClass('ztop');
            $($event.target).addClass('ztop');
        };
        $('body').on('mouseup', function () {
            isMove = false;
            pzLast = $(me).data('finalPz') || {x: 0, y: 0};
            pzLast = {x: pzLast.x + pzNow.x - pzInit.x, y: pzLast.y + pzNow.y - pzInit.y};
            $(me).data('finalPz', pzLast);
            me = parent = null;
        }).on('mousemove', function (e) {
            if (isMove) {
                pzNow = {x: e.screenX, y: e.screenY};
                parent.css('-webkit-transform', 'translate(' + (pzLast.x + pzNow.x - pzInit.x) + 'px,' +
                    (pzLast.y + pzNow.y - pzInit.y) + 'px)');
            }
        });
    }]);