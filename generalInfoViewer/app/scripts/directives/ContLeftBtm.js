/**
 * Created by xudj on 15/12/9.
 */
angular.module('ui.yypt5.yhgl.GeneralInfoViewer')
    .directive('contLeftBtm',function($timeout){
       return{
           controller:[function(){
               /****
                * 设置 cont-left-btm 的 位置 xudj
                */
               $timeout(function(){
                   angular.element("#cont-left-btm").css("top",$("#cont-left-top").outerHeight()+6+"px");
               },10);
           }],
           link:function($scope,element,$attrs){
              //$timeout(function(){
              //    $(".cont-left-btm").css("top",$(".cont-left-top").outerHeight()+6+"px");
              //},10);

       }
    }
    });