/**
 * Created by xudj on 15/12/9.
 */
angular.module('ui.yypt5.yhgl.GeneralInfoViewer')
    .directive('uiYTable',function(){
       return{
           link:function($scope,element,$attrs){
               var dragable = false, maxDragDist = 0, pzNowX = 0 , translated = 0, currrentTransd = 0, pzInitX = 0, tableHeader,tableContent;

               element.on("mousedown",function(e){
                   var table = element.find("table");
                   if(element.width()<table.width()){
                       dragable = true;
                       element.css("-webkit-user-select","none");
                       element.css("cursor","move");
                       maxDragDist = table.width()-element.width();
                       pzInitX = e.screenX;
                       translated = element.data("translated") || translated;
                       tableHeader = element.find("table");
                       tableContent = element.next().find("table");
                       //设置左右箭头可使用
                       element.find(".scroll-arrow2 .disabled").removeClass("disabled");
                   }else{
                       element.css("-webkit-user-select","initial");
                   }
               }).on("mousemove",function(e){
                   if(dragable){
                       pzNowX = e.screenX;
                       currrentTransd = translated+pzNowX-pzInitX;
                       if(currrentTransd < -maxDragDist){
                           currrentTransd = -maxDragDist;
                       }
                       if(currrentTransd > 0){
                           currrentTransd = 0;
                       }
                       tableHeader.css("-webkit-transform","translate("+currrentTransd+"px,0)");
                       tableContent.css("-webkit-transform","translate("+currrentTransd+"px,0)");
                   }
               }).on("mouseleave",function(){
                   if(dragable){
                       if(element.data("translated")-currrentTransd>0){
                           if(currrentTransd-20 > -maxDragDist){
                               currrentTransd = currrentTransd-20;
                           }
                       }else if(currrentTransd+20 < 0 && element.data("translated")-currrentTransd!=0){
                           currrentTransd = currrentTransd+20;
                       }
                       tableHeader.css("-webkit-transform","translate("+currrentTransd+"px,0)");
                       tableContent.css("-webkit-transform","translate("+currrentTransd+"px,0)");
                       element.data("translated", currrentTransd);
                       dragable = false;
                       element.css("cursor","initial");
                       pzNowX = 0 , translated  = 0, pzInitX = 0;
                   }
               }).on("mouseup",function(){
                   if(dragable){
                       if(element.data("translated")-currrentTransd>0){
                           if(currrentTransd-20 > -maxDragDist){
                               currrentTransd = currrentTransd-20;
                           }
                       }else if(currrentTransd+20 < 0 && element.data("translated")-currrentTransd!=0){
                           currrentTransd = currrentTransd+20;
                       }
                       tableHeader.css("-webkit-transform","translate("+currrentTransd+"px,0)");
                       tableContent.css("-webkit-transform","translate("+currrentTransd+"px,0)");
                       element.data("translated", currrentTransd);
                       dragable = false;
                       pzNowX = 0 , translated = 0, pzInitX = 0
                       element.css("cursor","initial");
                   }
               }).on("mouseenter",function(){
                   if(element.width()<element.find("table").width()){
                       element.attr("title","鼠标按住此处可以拖拽");
                       element.find(".scroll-arrow2").removeClass("hide");
                   }else{
                       element.attr("title","");
                       element.find(".scroll-arrow2").addClass("hide");
                   }
               });

               element.on("mousedown",".scroll-arrow2", function(e){
                   e.stopPropagation();
               });

               var keep = false;
               element.on("mousedown",".scroll-arrow2 > div", function(){
                   if(!$(this).hasClass("disabled")){
                       var p = $(this).parents(".table-header");
                       var step = 10;
                       if($(this).hasClass("scroll-to-left")){
                           $(this).next().removeClass("disabled");
                       }else{
                           step = -step;
                           $(this).prev().removeClass("disabled");
                       }

                       keep = true;
                       translated = p.data("translated") || translated;
                       maxDragDist = $(p).find("table").width()-p.width();
                       tableHeader = p.find("table");
                       tableContent = p.next().find("table");
                       moveTables(element, p, step);
                   }
               }).on("mouseup",".scroll-arrow2 > div", function(){
                   keep = false;
               });

               function moveTables(obj, target, step){
                   if(keep){
                       translated += step;
                       if(step>0){
                           step = step > 45?45:step;
                           if(translated<0){
                               setTimeout(function(){
                                   tableHeader.css("-webkit-transform","translate("+translated+"px,0)");
                                   tableContent.css("-webkit-transform","translate("+translated+"px,0)");
                                   target.data("translated", translated);
                                   moveTables(obj, target, step+5);
                               }, 80);
                           }else{
                               tableHeader.css("-webkit-transform","translate(0,0)");
                               tableContent.css("-webkit-transform","translate(0,0)");
                               target.data("translated", 0);
                               $(obj).addClass("disabled");
                               keep = false;
                           }
                       }else{
                           step = step < -45?-45:step;
                           if(-translated<maxDragDist){
                               setTimeout(function(){
                                   tableHeader.css("-webkit-transform","translate("+translated+"px,0)");
                                   tableContent.css("-webkit-transform","translate("+translated+"px,0)");
                                   target.data("translated", translated);
                                   moveTables(obj, target, step-5);
                               }, 80);
                           }else{
                               tableHeader.css("-webkit-transform","translate("+-maxDragDist+"px,0)");
                               tableContent.css("-webkit-transform","translate("+-maxDragDist+"px,0)");
                               target.data("translated", -maxDragDist);
                               $(obj).addClass("disabled");
                               keep = false;
                           }
                       }
                   }
               };
           }
       }
    });