/**
 * Created by xudj on 15/12/23.
 */
/**
 * Created by xudj on 15/12/9.
 */
angular.module('ui.yypt5.yhgl.GeneralInfoViewer')
    .directive('yYhs',function(){
        return{
            restrict:'AE',
            controller: 'ContLeftController',

            templateUrl:function(element,attr){
                return 'views/yhs.html';
            },
            transclude:true,
            replace:true
        }
    });

