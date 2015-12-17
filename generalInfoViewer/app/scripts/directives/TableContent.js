/**
 * Created by xudj on 15/12/17.
 */

angular.module('ui.yypt5.yhgl.GeneralInfoViewer')
    .directive('uiYTableContent',function(){
        return{
            link:function($scope,element,$attrs){
              element.on('mouseover',"td",function(e){
                  if(this.offsetWidth < this.scrollWidth){

                  }

              })
            }
        }
    });