/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function(){
   $(".part-top .tabs").on("click", ".tab:not(.active)", function(){
        var tabContentEl = $(".part-top .tab-content-box");
        if(tabContentEl.hasClass("next")){
            tabContentEl.removeClass("next");
        }else{
            tabContentEl.addClass("next");
        }
        $(".part-top .tabs .tab.active").removeClass("active");
        $(this).addClass("active");
   });
   
   $(".more-opts-content .tabs:not(.select-address .tabs)").on("click", ".tab:not(.active):not(.select-address .tab)", function(){
        var tabContentEl = $(".more-opts-content .tab-content-box:not(.select-address .tab-content-box)");
        if($(this).nextAll().length == 0){
            tabContentEl.css("-webkit-transform","translate(-66.666%,0)");
        }else if($(this).nextAll().length == 1){
            tabContentEl.css("-webkit-transform","translate(-33.333%,0)");
        }else if($(this).nextAll().length == 2){
            tabContentEl.css("-webkit-transform","translate(0,0)");
        }
        $(".more-opts-content .tabs .tab.active:not(.select-address .tab)").removeClass("active");
        $(this).addClass("active");
   });
   
   $(".option-item:not(.top-checkbox) > span").on("click", function(){
      if($(this).find(".select-status:not(.single-select)").length>0){
         if($(this).hasClass("selected")){
             $(this).removeClass("selected");
         }else{
             $(this).addClass("selected");
         }
      }
   });
   
   $(".select-address").on("click",".tab:not(.active)",function(e){
        var tabContentEl = $(this).parents(".select-address").find(".tab-content-box");
        if($(this).nextAll().length == 0){
            tabContentEl.css("-webkit-transform","translate(-75%,0)");
        }else if($(this).nextAll().length == 1){
            tabContentEl.css("-webkit-transform","translate(-50%,0)");
        }else if($(this).nextAll().length == 2){
            tabContentEl.css("-webkit-transform","translate(-25%,0)");
        }else if($(this).nextAll().length == 3){
            tabContentEl.css("-webkit-transform","translate(0,0)");
        }
        $(this).parents(".select-address").find(".tab").removeClass("active");
        $(this).addClass("active");
       e.stopPropagation();
   });
   $(".select-address").on("click", function(e){
       e.stopPropagation();
   });
   $(".cont-left").on("click",".tab:not(.active):not(.style2 .tab):not(.select-address .tab)",function(){
        var tabContentEl = $(".cont-left .tab-content-box:not(.style2 .tab-content-box):not(.select-address .tab-content-box)");
        if($(this).nextAll(":not(.tab-other)").length == 0){
            tabContentEl.css("-webkit-transform","translate(-50%,0)");
        }else if($(this).nextAll(":not(.tab-other)").length == 1){
            tabContentEl.css("-webkit-transform","translate(0,0)");
        }
        $(".cont-left .tab:not(.style2 .tab):not(.select-address .tab)").removeClass("active");
        $(this).addClass("active");
   });
   
   $(".solve-opts").on("click", ".btn.normal", function(){
       $(".cont-mid .cont-mid-box").addClass("next");
       setTimeout(function(){
           $(".more-opts-content").addClass("up");
       },600);
   });
   
   $("#return").on("click", function(){
       $(".more-opts-content").removeClass("up");
       setTimeout(function(){
            $(".cont-mid .cont-mid-box").removeClass("next");
       },400);
   });
   
   $(".setAddress, #setAddress").on("click",function(e){
      var addressEle = $(this).parent().find(".select-address");
       if(addressEle.is(":visible")){
           addressEle.slideUp(300);
       }else{
           addressEle.slideDown(300);
       } 
       e.stopPropagation();
   });
   
   $(".areas").on("click",".area:not(.active)",function(e){
       $(this).parents(".tab-content-item:eq(0)").find(".active").removeClass("active");
       $(this).addClass("active");
       e.stopPropagation();
   });
   
   $("#callback").on("click", function(){
        setTimeout(function(){
            $("#_callback").click();
        },400);
   });
   $("#send").on("click", function(){
        setTimeout(function(){
             $("#_send").click();
        },400);
   });
   $("#remote").on("click", function(){
        setTimeout(function(){
             $("#_remote").click();
        },400);
   });
   
   $(".callback").on("click",".option-item > span",function(){
        if($(this).find(".select-status.single-select").length>0){
            if(!$(this).hasClass("selected")){
                $(this).parents(".callback").find(".selected").removeClass("selected");
                $(this).addClass("selected");
            }
        }
   });
   
   $(".message-template").on("click",".option-item > span",function(){
        if($(this).find(".select-status.single-select").length>0){
            if(!$(this).hasClass("selected")){
                $(this).parents(".message-template").find(".selected").removeClass("selected");
                $(this).addClass("selected");
            }
        }
   });
   
   $(".trustor-type").on("click",".option-item > span",function(){
        if($(this).find(".select-status.single-select").length>0){
            if(!$(this).hasClass("selected")){
                $(this).parents(".trustor-type").find(".selected").removeClass("selected");
                $(this).addClass("selected");
            }
        }
   });

   $(".sales-search-content").on("click",".option-item > span",function(){
        if($(this).find(".select-status.single-select").length>0){
            if(!$(this).hasClass("selected")){
                $(this).parents("td").find(".selected").removeClass("selected");
                $(this).addClass("selected");
            }
        }
   });
   
   $("body").on("click",function(){
       $(".select-address").slideUp(300);
       $(".search-pre-result").hide();
       $(".express-info").hide();
       $(".tdselected").removeClass("tdselected");
       $(".selectable-table").removeClass("selectable-table ");
   });
   
   $(".dialog-close").on("click",function(){
       $(this).parents(".dialog").hide();
       if($(".dialog:visible").length == 0){
          $(this).parents(".layer").hide();
       }
       $(".menus .active").removeClass("active");
   });
   
   $("#point_search").on("click",function(){
   	   if(!$(this).hasClass("active")){
   	   	    $(this).addClass("active");
   	   	    $(".layer").show();
            $(".ztop").removeClass("ztop");
   	   	    $(".point-search").addClass("ztop").show();
   	   }
   });
   
   $("#express_search").on("click",function(){
   	   if(!$(this).hasClass("active")){
   	   	    $(this).addClass("active");
   	   	    $(".layer").show();
            $(".ztop").removeClass("ztop");
            $(".express-search").addClass("ztop").show();
   	   }
   });
   
   $(".send-message-btn").on("click",function(){
   	    $(".layer").show();
        $(".ztop").removeClass("ztop");
        $(".send-message").addClass("ztop").show();
   });

   $("#stop_search").on("click",function(){
       if(!$(this).hasClass("active")){
            $(this).addClass("active");
            $(".layer").show();
            $(".ztop").removeClass("ztop");
            $(".stop-search").addClass("ztop").show();
       }
   });
   $("#help_policy").on("click",function(){
       if(!$(this).hasClass("active")){
            $(this).addClass("active");
            $(".layer").show();
            $(".ztop").removeClass("ztop");
            $(".help-policy").addClass("ztop").show();
       }
   });

   $("#price_policy").on("click",function(){
       if(!$(this).hasClass("active")){
            $(this).addClass("active");
            $(".layer").show();
            $(".ztop").removeClass("ztop");
            $(".price-policy").addClass("ztop").show();
       }
   });
   $("#technology_proup").on("click",function(){
       if(!$(this).hasClass("active")){
            $(this).addClass("active");
            $(".layer").show();
            $(".ztop").removeClass("ztop");
            $(".technology-proup").addClass("ztop").show();
       }
   });
   // $("#train_search").on("click",function(){
   //     if(!$(this).hasClass("active")){
   //          $(this).addClass("active");
   //          $(".layer").show();
   //          $(".train-search").show();
   //     }
   // });
  
  $(".point-search-content").on("click",".inline-block.clickable", function(){
      window.open("http://sz.4007112366.com/index.php?m=content&c=index&a=lists&catid=60&siteid=4");
  });
   $("#sales").on("click",function(){
       if(!$(this).hasClass("active")){
            $(this).addClass("active");
            $(".layer").show();
            $(".ztop").removeClass("ztop");
            $(".sales").addClass("ztop").show();
       }
   });
   $("#file_share").on("click",function(){
       if(!$(this).hasClass("active")){
            $(this).addClass("active");
            $(".layer").show();
            $(".ztop").removeClass("ztop");
            $(".file-share").addClass("ztop").show();
       }
   });

   $(".delegated").on("click", function(){
      $(".layer").show();
      $(".ztop").removeClass("ztop");
      $(".delegate-search").addClass("ztop").show();
   });

   $(".level-manage").on("click", function(){
      $(".layer").show();
      $(".ztop").removeClass("ztop");
      $(".manage-people").addClass("ztop").show();
   });

   $(".file-share").on("click",".dialog-close",function(){
        $(".file-share,.file-upload").hide();
        if($(".dialog:visible").length == 0){
            $(this).parents(".layer").hide();
        }
       $(".file-share .btn.active").removeClass("active");
   });
   $(".file-upload").on("click",".dialog-close",function(){
       $(".file-share .btn.active").removeClass("active");
   });
   $("#file_upload").on("click",function(){
       if(!$(this).hasClass("active")){
            $(this).addClass("active");
            $(".file-upload").addClass("ztop").show();
       }
   });
  	$(".part-top .content .search-block .search-input input").on("click",function(e){
        if($(this).val() !== ""){
            $(this).parent().find(".search-pre-result").show();
            e.stopPropagation();
        }
    }).keyup(function(){
      if(!$(this).parent().find(".search-pre-result").is(":visible")){
      	  $(this).parent().find(".search-pre-result").show();
      }
  	});
  	$(".part-top .content .search-block .search-input .search-pre-result .pre-result-item").on("click", function(){
      	$(this).parents(".search-input").find("input").val($.trim($(this).text()));
  	})

    $(".express-search-content").on("click", ".express-detail" ,function(e){
        $(".express-info").show();
        e.stopPropagation();
    });
    
    $(".sales-search-content").on("click", ".clue" ,function(e){
        $(".express-info").show();
        e.stopPropagation();
    });

    $(".express-info").on("click", function(e){
        e.stopPropagation();
    });

    $(".confirm-user").on("click", ".section-header",function(){
        var sectionBody = $(this).parent().find(".section-body");
        var _this = this;
        if(sectionBody.is(":visible")){
            sectionBody.slideUp(500);
            setTimeout(function(){
                $(_this).removeClass("up");
            },500);
        }else{
            sectionBody.slideDown(500);
            setTimeout(function(){
                $(_this).addClass("up");
            },500);
        }
    });
    $(".confirm-user .section-header:eq(0)").click();

    $(".remove").on("click", function(){
        var _this = this;
        $(this).parents("table").slideUp(400, function(){
            var next = $(_this).parents("table").next();
            if(next.length>0){
              next.remove();
            }else{
                $(_this).parents("table").prev().remove();
            }
            $(_this).parents("table").remove();
        });
    });

    $(".user-item").on("click", function(){
        if(!$(this).hasClass("active")){
            $(".user-item.active").removeClass("active");
            $(this).addClass("active");
            $("table.single.selected").removeClass("selected");
            if($(this).parents("table.single").length>0){
                $(this).parents("table.single").addClass("selected");
            }
        }
    });

    //设置tab长度
    var style2_tabs = $(".cont-left .style2.tabs");
    var style2_tab_content = $(".cont-left .style2.tab-content");
    var tabs = style2_tabs.find(".tab");
    var tabLength = 0;
    tabs.each(function(){
        tabLength += $(this).outerWidth()+7;
    });
    $(".cont-left .style2.tabs > div").width(tabLength);
    if((tabLength)>style2_tabs.outerWidth()){
        style2_tabs.addClass("overflow");
        style2_tab_content.addClass("overflow");
    }

    var step = tabLength/tabs.length;
    var maxDistence = tabLength-style2_tabs.outerWidth();
    var moved = 0;
    $(".scroll-arrow").on("click",".arrow-right:not(.disabled)", function(){
        if(moved < maxDistence){
            if((maxDistence-moved)<step){
                moved = maxDistence;
                $(this).addClass("disable");
            }else{
                moved += step;
            }
            style2_tabs.find(">div").css("-webkit-transform","translateX("+-moved+"px)");
        }else{
            $(this).addClass("disable");
        }
        $(".arrow-left").removeClass("disable");
    });

   $(".style2.tabs").on("click",".tab",function(){
      if(!$(this).hasClass("active")){
          var tabContentEl = $(".cont-left .style2 .tab-content-box");
          var index = 7 - $(this).nextAll(".tab").length;
          var position = -index*12.5;
          tabContentEl.css("-webkit-transform","translate("+position+"%,0)");
          $(".cont-left .style2 .tab").removeClass("active");
          $(this).addClass("active");
          $(".tabs.style2 .active-bar").css({width:$(this).width()+"px", left: this.offsetLeft+10 +"px"});
          if(this.offsetLeft<moved){
             $(".arrow-left").click();
          }
          if(this.offsetLeft>moved && (this.offsetLeft+$(this).outerWidth())>style2_tabs.outerWidth()){
             $(".arrow-right").click();
          }
        }
    });
    $(".style2.tabs .tab:eq(0)").click();

    $(".expired").on("click",".tab", function(){
        if(!$(this).hasClass("active")){
          var tabContentEl = $(".expired-top .tab-content-box");
          var index = $(this).nextAll(".tab").length;
          var position = -index*50;
          tabContentEl.css("-webkit-transform","translate("+position+"%,0)");
          $(".expired-top .tab").removeClass("active");
          $(this).addClass("active");
        }
    });

    $(".scroll-arrow").on("click",".arrow-left:not(.disabled)", function(){
        if(moved > 0){
            if(moved>step){
                moved -= step;
            }else{
                moved = 0;
                $(this).addClass("disable");
            }
            style2_tabs.find(">div").css("-webkit-transform","translateX("+-moved+"px)");
        }else{
            $(this).addClass("disable");
        }
        $(".arrow-right").removeClass("disable");
    });

    window.onresize = function(){
        if(tabLength>style2_tabs.outerWidth()){
            maxDistence = tabLength-style2_tabs.outerWidth();
            style2_tabs.addClass("overflow");
            style2_tab_content.addClass("overflow");
        }else{
            style2_tabs.removeClass("overflow");
            style2_tab_content.removeClass("overflow");
            style2_tabs.find(">div").css("-webkit-transform","translateX(0)");
        }
        $(".cont-left-btm").css("top",$(".cont-left-top").outerHeight()+6+"px");

        $(".table-header").each(function(){
            var tableHeader = $(this).find("table");
            var tableContent = $(this).next().find("table");
            var translated = $(this).data("translated") || 0;
            var maxDragDist = tableHeader.width()-$(this).width();
            if(-translated>maxDragDist){
                tableHeader.css("-webkit-transform","translate("+-maxDragDist+"px,0)");
                tableContent.css("-webkit-transform","translate("+-maxDragDist+"px,0)");
            }
        });

        setExpiredTable();
        setTrustorDetailTable();
    };

    function setExpiredTable(){
        $(".expired-search-content .table-header").each(function(){
            var tct = $(this).next().find("table");
            var tc = $(this).next();
            if(tct.height()>tc.height()){
                $(this).addClass("overflow");
            }
        });
    };

    function setTrustorDetailTable(){
        $(".trustor-detail-content .table-header").each(function(){
            var tct = $(this).next().find("table");
            var tc = $(this).next();
            if(tct.height()>tc.height()){
                $(this).addClass("overflow");
            }
        });
    };

    $(".end-detail").on("click",function(){
        $(".layer").show();
        $(".ztop").removeClass("ztop");
        $(".expired").addClass("ztop").slideDown(300,function(){
            setExpiredTable();
        });
    });

    $(".trustor-num").on("click",function(){
        $(".layer").show();
        $(".ztop").removeClass("ztop");
        $(".trustor-detail").addClass("ztop").slideDown(300,function(){
            setTrustorDetailTable();
        });
    });

    var dragable = false, maxDragDist = 0, pzNowX = 0 , translated = 0, currrentTransd = 0, pzInitX = 0, tableHeader,tableContent;
    $(".table-header").on("mousedown",function(e){
        var table = $(this).find("table");
        if($(this).width()<table.width()){
           dragable = true;
           $(this).css("-webkit-user-select","none");
           $(this).css("cursor","move");
           maxDragDist = table.width()-$(this).width();
           pzInitX = e.screenX;
           translated = $(this).data("translated") || translated;
           tableHeader = $(this).find("table");
           tableContent = $(this).next().find("table");
           //设置左右箭头可使用
           $(this).find(".scroll-arrow2 .disabled").removeClass("disabled");
        }else{
            $(this).css("-webkit-user-select","initial");
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
            if($(this).data("translated")-currrentTransd>0){
                if(currrentTransd-20 > -maxDragDist){
                    currrentTransd = currrentTransd-20;
                }
            }else if(currrentTransd+20 < 0 && $(this).data("translated")-currrentTransd!=0){
                currrentTransd = currrentTransd+20;
            }
            tableHeader.css("-webkit-transform","translate("+currrentTransd+"px,0)");
            tableContent.css("-webkit-transform","translate("+currrentTransd+"px,0)");
            $(this).data("translated", currrentTransd);
            dragable = false;
            $(this).css("cursor","initial");
            pzNowX = 0 , translated  = 0, pzInitX = 0;
        }
    }).on("mouseup",function(){
        if(dragable){
            if($(this).data("translated")-currrentTransd>0){
                if(currrentTransd-20 > -maxDragDist){
                    currrentTransd = currrentTransd-20;
                }
            }else if(currrentTransd+20 < 0 && $(this).data("translated")-currrentTransd!=0){
                currrentTransd = currrentTransd+20;
            }
            tableHeader.css("-webkit-transform","translate("+currrentTransd+"px,0)");
            tableContent.css("-webkit-transform","translate("+currrentTransd+"px,0)");
            $(this).data("translated", currrentTransd);
            dragable = false;
            pzNowX = 0 , translated = 0, pzInitX = 0
            $(this).css("cursor","initial");
        }
    }).on("mouseenter",function(){
        if($(this).width()<$(this).find("table").width()){
            $(this).attr("title","鼠标按住此处可以拖拽");
            $(this).find(".scroll-arrow2").removeClass("hide");
        }else{
            $(this).attr("title","");
            $(this).find(".scroll-arrow2").addClass("hide");
        }
    });

    $(".table-header").on("mousedown",".scroll-arrow2", function(e){
        e.stopPropagation();
    });

    var keep = false;
    $(".table-header").on("mousedown",".scroll-arrow2 > div", function(){
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
            moveTables(this, p, step);
        }
    }).on("mouseup",".scroll-arrow2 > div", function(){
        keep = false;
    });

    function moveTables(obj, target, step){;
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

    $('.company-info').on("focus",".edit",function(){
        $(this).find(".fa").hide();
    }).on("blur",".edit",function(){
        var text = $(this).text();
        text.replace(/\<br\>/g,"");
        $(this).text(text);
        var fa = $(this).find(".fa");
        if($(this).find(".fa").length>0){
            $(this).find(".fa").show();
        }else{
            $(this).append('<i class="fa fa-pencil-square-o alink"></i>');
        }
    });

    $(".edit-trade").on("click", function(e){
        $(".trade").prev().hide();
        $(".trade").show();
        $(this).hide();
        e.stopPropagation();
    });

    $(".trade").on("change", function(){
        $(this).prev().show().text($(this).val());
        $(this).next().show();
        $(this).hide();
    }).on("click", function(e){
        e.stopPropagation();
    });

    var isHover = false;
    $(".company-info").on("mouseleave", function(){
        $(this).slideUp(300,function(){
            $(".show-detail").removeClass("hovered");
            isHover = false;
        });
    });

    $(".show-detail").on("mouseover", function(e){
        if(!isHover){
            isHover = true;
            $(this).addClass("hovered");
            $(".company-info").slideDown(300);
        }
    }).on("click", function(e){
        $(".company-info").show();
        e.stopPropagation();
    });

    $(".company-info").on("click",function(e){
        $(".trade").prev().show();
        $(".trade").next().show();
        $(".trade").hide();
        $(".select-address").slideUp(300);
        $(".company-info .select-address-edit").hide();
        e.stopPropagation();
    })

    $(".company-info .close-info").on("click", function(){
        $(".company-info").hide();
    });

    var pzInit = {}, isMove = false, pzNow = {}, pzLast = {x:0,y:0}, parent, me;
    $(".dialog-header").on("mousedown", function(e){
        me = this;
        $(this).css({"cursor":"move"});
        isMove = true;
        pzInit = {'x':e.screenX,'y':e.screenY};
        parent = $(this).parent();
        pzLast = $(this).data("finalPz") || {x:0,y:0};
        pzNow = {'x':e.screenX,'y':e.screenY};
            parent.css("-webkit-transform","translate("+(pzLast.x+pzNow.x-pzInit.x)+"px,"+
                (pzLast.y+pzNow.y-pzInit.y)+"px)");
    }).on("mouseup", function(){
        $(this).css("cursor","default");
    });

    $(".dialog").on("click", function(){
        $(".dialog.ztop").removeClass("ztop");
        $(this).addClass("ztop");
    });

    $("body").on("mouseup", function(){
        isMove = false;
        pzLast = $(me).data("finalPz") || {x:0,y:0};
        pzLast = {x: pzLast.x + pzNow.x-pzInit.x, y: pzLast.y + pzNow.y-pzInit.y};
        $(me).data("finalPz",pzLast);
        me = parent = null;
    }).on("mousemove", function(e){
        if(isMove){
            pzNow = {'x':e.screenX,'y':e.screenY};
            parent.css("-webkit-transform","translate("+(pzLast.x+pzNow.x-pzInit.x)+"px,"+
                (pzLast.y+pzNow.y-pzInit.y)+"px)");
        }
    });

    $("#reset").on("click", function(){
        var p = $(this).parents("table");
        p.find(".selected").removeClass("selected");
        p.find("select option:eq(0)").attr("selected",true);
    });

    $(".expand").on("click", function(){
        $(".result-left.big-size").slideDown(300);
        $(".part .result-left").fadeTo(300, 0.01);
    });


    $(".compress").on("click", function(){
        $(".result-left.big-size").slideUp(300);
        $(".part .result-left").fadeTo(300, 1);
    });

    $(".mid-to-max").on("click", function(){
        var _this = this;
        $(".page-content").addClass("mid-max");
        setTimeout(function(){
            $(_this).hide();
            $(_this).next().show();
        },500);
    });

    $(".mid-to-normal").on("click", function(){
        var _this = this;
        $(".page-content").removeClass("mid-max");
        setTimeout(function(){
            $(_this).hide();
            $(_this).prev().show();
        },500);
    });

    $(".user-item-close").on("click", function(e){
        $(this).parents(".user-item").remove();
        e.stopPropagation();
    });

    $(".company-info .edit-address").on("click", function(e){
        $(this).parents(".info-item").find(".select-address-edit").show();
        e.stopPropagation();
    });

    $(".company-info .select-address-edit").on("click", function(e){
        $(".select-address").slideUp(300);
        e.stopPropagation();
    });

    $(".cont-left-btm").css("top",$(".cont-left-top").outerHeight()+6+"px");

    $(".checkbox-series").on("click",".option-item.top-checkbox > span", function(){
        if($(this).hasClass("selected")){
            $(this).parents(".checkbox-series").find(".option-item > span").removeClass("selected");
        }else{
            $(this).parents(".checkbox-series").find(".option-item > span").addClass("selected");
        }
    });

    $(".checkbox-series").on("click", ".option-item:not(.top-checkbox) > span",function(){
        var p = $(this).parents(".checkbox-series");
        var rows = p.find("tr").length-1;
        var selectedRows = p.find(".option-item:not(.top-checkbox) > span.selected").length;
        if(rows == selectedRows){
            p.find(".option-item.top-checkbox > span").addClass("selected");
        }else{
            p.find(".option-item.top-checkbox > span").removeClass("selected");
        }
    });

    $(".cont-left-btm .table-content").on("click","td", function(e){
        setSelectedTd(this);
        e.stopPropagation();
    });

    function setSelectedTd(obj){
        if(!$(obj).hasClass("tdselected")){
            $(".selectable-table").removeClass("selectable-table");
            var p = $(obj).parents("table");
            p.addClass("selectable-table");
            p.find(".tdselected").removeClass("tdselected");
            $(obj).addClass("tdselected");
            var range = document.createRange();
            range.selectNodeContents(obj);
            var selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }

    function setNextTd(key, e){
        var target = $(".selectable-table .tdselected"), newTarget;
        var parent = target.parent();
        var tdnum = parent.find("td").length;
        var index = tdnum-1-target.nextAll().length;
        if(key == 38){
            if(parent.prev().length>0){
                newTarget = target.parent().prev().find("td:eq("+index+")");
                setSelectedTd(newTarget[0]);
            }
        }
        if(key == 40){
            if(parent.next().length>0){
                newTarget = target.parent().next().find("td:eq("+index+")");
                setSelectedTd(newTarget[0]);
            }
        }
        if(key == 37){
            if(target.prev().length>0){
                setSelectedTd(target.prev()[0]);
            }
        }
        if(key == 39){
            if(target.next().length>0){
                setSelectedTd(target.next()[0]);
            }
        }
        e.stopPropagation();
    }

    $(document).keydown(function(e){
        if($(".selectable-table").length>0){
            var key = e.which;
            if(key == 38 || key == 40 || key == 37 || key == 39){
                setNextTd(key, e);
                e.stopPropagation();
                e.preventDefault();
            }
        }
    });

    $(document).keydown(function(e){
        var key = e.which;
        if(key == 13){
            var target = $(".duty-number:focus");
            if(target.length>0 && target.val().length>0){
                $(".search-progressive-result").slideDown(200);
            }
        }
    });

    $(".search-progressive-result").on("click"," tr:gt(0)", function(){
        $(this).parent().find(".selected").removeClass("selected");
        $(this).addClass("selected");
        $(this).parents(".search-progressive-result").slideUp(200);
    });

    $(".duty-number").on("keyup", function(){
        setShow(this);
    }).on("paste", function(){
        setShow(this);
    }).on("cut", function(){
        setShow(this);
    });

    function setShow(obj){
        var val = $(obj).val();
        var showEle = $(obj).next();
        if(val.length>0){
            showEle.show();
        }else{
            showEle.hide();
        }
        var isSep = new RegExp("^[\u4e00-\u9fa5]","g").test(val);
        if(!isSep){ 
            var iteration = parseInt(val.length/5);
            var vals = [];
            for(var i=0;i<=iteration;i++){
                var _val = val.substring(i*5,(i+1)*5);
                if(_val.length=5 && i<iteration){
                    _val = _val+" ";
                }
                vals.push(_val);
            }
            val = vals.join("");
        }
        showEle.text($.trim(val));
    }

    //页面跳转
    $(".add-new").on("click", function(){
        window.location.href = "add-contact.html";
    });
    $("#prev").on("click", function(){
        window.location.href = "confirm-user.html";
    });
    $("#next,#confirm").on("click", function(){
        if($(".user-item.active").parents(".agency").length>0){
            window.location.href = "accounting.html";
        }else{
            window.location.href = "index.html";
        }
        
    });
});

