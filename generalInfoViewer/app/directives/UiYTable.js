/**
 * Created by apple on 15/12/9.
 */
angular.module('ui.yypt5.yhgl.GeneralInfoViewer')
    .directive('uiYypt5Table',function(){
       return{
           controller:function(element,attr){
               return attr.controller;
           },
           templateUrl:'views/template/tables/tablePage.html'
       }
    });