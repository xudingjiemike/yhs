/**
 * Created by xudj on 15/12/17.
 */

angular.module('ui.yypt5.yhgl.GeneralInfoViewer')
    .directive('uiYTableContent',function(){
        return{
            link:function($scope,element,$attrs){
              element.on('mouseover',"td",function(e){
                  if(this.offsetWidth < this.scrollWidth){


                          $(this).attr({"tooltip":""});


                      //$(this).tooltip();
                      //$(this).append('<div class="popover-content">Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</div>');
                  }

              })

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

            }
        }
    });