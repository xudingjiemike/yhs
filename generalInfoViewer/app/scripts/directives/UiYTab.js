/**
 * Created by xudj on 15/12/9.
 */
angular.module('ui.yypt5.yhgl.GeneralInfoViewer.Uitab')
    .directive('uiYTab',function(){
        return{
            restrict:'AEC',
            controller: ['$scope','$attrs','_','$timeout','SoftwareAuthorityService','BankAuthorityService','GiftApplyService','OrderService','SpService','Config','DataStore',function($scope,$attrs,_,$timeout,SoftwareAuthorityService,BankAuthorityService,GiftApplyService,OrderService,SpService,Config,DataStore){
                var Params = {};
                angular.copy(DataStore.getAll(),Params);

                var _tags = $scope.list;

                var step = 8;


                var tablist = [{
                    tabName:"银行托收",
                    func: BankAuthorityService.getBankAuthorityData,
                    data:""
                },{
                    tabName:"软件授权",
                    func: SoftwareAuthorityService.getServiceAuthorityData,
                    data:""
                },{
                    tabName:"礼品申请",
                    func: GiftApplyService.getGiftApplyData,
                    data:""
                },{
                    tabName:"订单",
                    func: OrderService.getOrderData,
                    data:""
                },{
                    tabName:"SP",
                    func: SpService.getSpData,
                    data:""
                }];

                var taxInstitution = false;
                var intermediaryInstitution = false;
                var accountant = false;

                $scope.tableItems = {};
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

                $scope.$on("loadData",function(e,d){
                    if( !d.checked){
                        if(angular.equals("1",d.tagtype)){
                            $scope.tableItems.SoftWare = SoftwareAuthorityService.getServiceAuthorityData(Params);
                        }
                        if(angular.equals("2",d.tagtype)){
                            $scope.tableItems.Order = OrderService.getOrderData(Params);
                        }


                    }




                });

                /***
                 *  获取数据 xudj  ？
                 * @param list
                 * @param tagName
                 * @param Id
                 */
                function getData(list,tagName,Params){
                    var data = [];
                    _.map(list,function(item){
                        if(angular.equals(item.tabName,tagName)){
                            if(_.isEmpty(item.data)){
                                item.data = item.func(Params);
                                //return data
                            }
                            data = item.data;
                        }
                    });
                    return data;
                }


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

                    if(angular.equals(tag.tagName,"软件授权")){

                        $scope.tableItems.SoftWare = getData(tablist,"软件授权",Params);
                    }

                    if(angular.equals(tag.tagName,"银行托收")){
                        $scope.tableItems.BankAuthority = getData(tablist,"银行托收",Params);
                    }
                    if(angular.equals(tag.tagName,"礼品申请")){
                        $scope.tableItems.GiftApply = getData(tablist,"礼品申请",Params);
                    }
                    if(angular.equals(tag.tagName,"订单")){
                        $scope.tableItems.Order = getData(tablist,"订单",Params);
                    }
                    if(angular.equals(tag.tagName,"SP")){
                        $scope.tableItems.Sp = getData(tablist,"SP",Params);
                    }


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

