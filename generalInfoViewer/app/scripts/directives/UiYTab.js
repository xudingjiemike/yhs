/**
 * Created by apple on 15/12/9.
 */
angular.module('ui.yypt5.yhgl.GeneralInfoViewer.Uitab')
    .directive('uiYTab',function(){
        return{
            restrict:'AEC',
            controller: ['$scope','$attrs','_',function($scope,$attrs,_){

                var _tags = $scope.list;

                var step = 8;

                $scope.findInfo = "";

                $scope.TagStyle = {'-webkit-transform':'translate(0,0'};


                /****
                 * controller 内部存储tag数据
                 * @type {{tagName: string, TagClass: string, pageInfo: string}[]}
                 * @private
                 */





                $scope.itemWidth = {'width':((1/_tags.length)*100)+'%'};

                //$scope.tabItemStyle = {'width':((1/_tags.length)*100)+'%'};


                $scope.templateStyle  = {'width':(_tags.length*100)+'%'};

                $scope.tabStyle = {'width':(_tags.length*12.5)+'%'};

                $scope.tags  = _tags;
                $scope.tags[0].TagClass = 'active';

                $scope.activeBarStyle = "width:;left:";

                $scope.activeView = activeView;

                $scope.leftClass = "disable";

                 function init(){
                     $scope.$broadcast('loadData',_tags[0].tagName);
                 }

                init();


                /****
                 * 点击之后改变view和tag
                 * @param number
                 * @param tag
                 * @param $event
                 */
                function activeView (number,tag,$event){
                    $scope.$broadcast('loadData',tag.tagName);
                    var ev = null;
                    if($event === undefined){
                        ev = $("#firstTab");
                    }else{
                        ev = $($event.target);
                    }
                    $scope.activeBarStyle = "width:"+ev.width()+"px;left:"+(ev[0].offsetLeft+10)+"px";
                    _.map($scope.tags,function(item){
                        item.TagClass = "";
                    });

                    tag.TagClass = 'active';
                    $scope.tagNumber = _tags.length;

                    $scope.templateStyle  = {'width':(_tags.length*100)+'%','-webkit-transform':'translate(-'+((number)/_tags.length*100)+'%,0'};
                };



            }],

            templateUrl:function(element,attr){
                return attr.tempalteUrl || 'views/template/tabs/commonTab.html';
            },

            link:function($scope,element,$attrs){
                var dragable = false,translated= 0,keep = false,p = element.find(".tabsTotal"),step = 10;
                var maxDragDist = 0;

                element.on("mouseup","#scroll-arrow > span",function(){
                    keep = false;
                });

                element.on("mousedown","#scroll-arrow > span",function(){
                    maxDragDist= element.find(".tabsTotal").width() - element.width()-190;
                    step = 10;
                    if(element.width() < element.find(".tabsTotal").width()){
                        if($(this).hasClass("arrow-left")){
                            $(this).next().removeClass("disable");
                        }else{
                            step = -step;
                            $(this).prev().removeClass("disable");
                        }
                        translated = p.data("translated") || translated;
                        keep = true;
                        moveTables(this, p, step);
                    }
                });
                function moveTables(obj, target, step){
                    if(keep){
                        translated += step;
                        if(step>0){
                            step = step > 45?45:step;
                            if(translated<0){
                                setTimeout(function(){
                                    element.find(".tabsTotal").css("-webkit-transform","translate("+translated+"px,0)");
                                    target.data("translated", translated);
                                    moveTables(obj, target, step+5);

                                }, 80);
                            }else{
                                element.find(".tabsTotal").css("-webkit-transform","translate(0,0)");
                                target.data("translated", 0);
                                $(obj).addClass("disable");
                                keep = false;

                            }
                        }else{
                            step = step < -45?-45:step;
                            if(-translated<maxDragDist){
                                setTimeout(function(){
                                    element.find(".tabsTotal").css("-webkit-transform","translate("+translated+"px,0)");
                                    target.data("translated", translated);
                                    moveTables(obj, target, step-5);
                                }, 80);
                            }else{
                                element.find(".tabsTotal").css("-webkit-transform","translate("+-maxDragDist+"px,0)");
                                target.data("translated", -maxDragDist);
                                $(obj).addClass("disable");
                                keep = false;
                            }
                        }
                    }
                };





            },

            transclude:true,
            replace:true,
            scope:{
                type:'@',
                close:'&',
                list:'=list'

            }



        }
    });

