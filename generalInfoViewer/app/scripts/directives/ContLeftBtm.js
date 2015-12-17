/**
 * Created by apple on 15/12/9.
 */
angular.module('ui.yypt5.yhgl.GeneralInfoViewer')
    .directive('contLeftBtm',function(){
       return{
           link:function($scope,element,$attrs){
               element.css("top",$(".cont-left-top").outerHeight()+6+"px");
       }
    }
    });