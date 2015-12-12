/**
 * Created by Zhang on 2015/12/11.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.PageInfo')
    .controller('PageInfoController',['_','$scope',function(_, $scope){
        var isHover = false;
        $scope.showDetailInfo=function(){
            if(!isHover){
                isHover = true;
                $('.show-detail').addClass("hovered");
                $(".company-info").slideDown(300);
            }
        };
        $scope.hideDetailInfo=function(){
            $('.company-info').slideUp(300,function(){
                $(".show-detail").removeClass("hovered");
                isHover = false;
            });
        };
        $scope.showDialogWindow=function(){
            $(".layer").show();
            $(".ztop").removeClass("ztop");
            $(".delegate-search").addClass("ztop").show();
        };
    }]);