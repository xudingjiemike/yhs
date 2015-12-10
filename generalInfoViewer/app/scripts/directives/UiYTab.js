/**
 * Created by apple on 15/12/9.
 */
angular.module('ui.yypt5.yhgl.GeneralInfoViewer')
    .directive('uiYTab',function(){
        return{
            controller:'UiYTabController',
            templateUrl:function(element,attr){
                return attr.tempalteUrl || 'views/template/tabs/commonTab.html';
            },
            transclude:true,
            replace:true,
            scope:{
                type:'@',
                close:'&'
            }

        }
    });

