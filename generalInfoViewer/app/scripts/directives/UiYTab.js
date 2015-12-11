/**
 * Created by apple on 15/12/9.
 */
angular.module('ui.yypt5.yhgl.GeneralInfoViewer')
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


                /****
                 * 点击之后改变view和tag
                 * @param number
                 * @param tag
                 * @param $event
                 */
                function activeView (number,tag,$event){
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


                $scope.rightSilde = function(){
                    step = step + 1;
                    if(step >= (_tags.length)){
                        step = _tags.length;
                       $scope.rightClass = "disable";
                    }else{
                        $scope.tabStyle = {'width':(_tags.length*12.5)+'%','-webkit-transform':'translate(-'+(step-8)*(100/_tags.length)+'%,0'};
                        $scope.rightClass = "";
                        if(step == (_tags.length-1)){
                            $scope.rightClass = "disable";
                        }
                        if(step > 8){
                            $scope.leftClass = "";
                        }
                    }



                    //$scope.tags = _tags.slice(step-8,step);
                };


                $scope.leftSilde = function(){
                    step = step - 1;
                    if(step <= 7){
                        step = 7;
                        $scope.leftClass = "disable";
                    }else{
                        $scope.tabStyle = {'width':(_tags.length*12.5)+'%','-webkit-transform':'translate(-'+(step-8)*(100/_tags.length)+'%,0'};
                        $scope.leftClass = "";
                        if(step == 8){
                            $scope.leftClass = "disable";
                        }
                        if(step < _tags.length){
                            $scope.rightClass = "";
                        }
                    }

                }






            }],

            templateUrl:function(element,attr){
                return attr.tempalteUrl || 'views/template/tabs/commonTab.html';
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

