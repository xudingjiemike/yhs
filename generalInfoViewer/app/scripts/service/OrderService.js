/**
 * Created by xudj on 15/12/19.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .service('OrderService',['_','TabsDataApi','Config',function(_,TabsDataApi,Config){
        var OrderData = [];
        function LoadData(Params){
            TabsDataApi.Load(Params,"DD").success(function(obj){
                angular.copy(obj.list,OrderData);
                for(var orderItemIndex in OrderData){
                    var cpbs = "";
                    var orderItemProducts = OrderData[orderItemIndex].ddcpbList;
                    for(var i = 0 ; i < orderItemProducts.length ; i++){
                        if(cpbs.length > 0){
                            cpbs += ",";
                        }
                        if(angular.equals(orderItemProducts[i].thly,'0')){
                            cpbs += orderItemProducts[i].ddcpbMc+'('+"未发生退换货"+')';
                        }else if (orderItemProducts.equals(items[i].thly,'1')){
                            cpbs += orderItemProducts[i].ddcpbMc+'('+"来自退货单"+')';
                        }else if (angular.equals(orderItemProducts[i].thly,'2')){
                            cpbs += orderItemProducts[i].ddcpbMc+'('+"来自换购订单"+')';
                        }
                    }
                    OrderData[orderItemIndex].cpbs = cpbs
                }
                //var items = OrderData.ddcpbList;
                _.map(OrderData,function(item){
                    item.skzt =  Config.getOrderReceiptStateById(item.skzt);
                    item.kpzt = Config.getOrderBillStateById(item.kpzt);
                    item.jfzt = Config.getOrderDeliverStateById(item.jfzt)

                    item.changeDeal = (function(){
                        if((!angular.equals(item.zfbz,"1"))&&((!angular.equals(item.jfzt,"3"))||angular.equals(item.kpzt,"1"))){
                            return "变更交易约定";
                        }else{
                            return "无";
                        }
                    })();
                });



                //OrderData.cpbs = cpbs;

            })
        }
        function getData(Params){
            if(OrderData.length == 0){
                LoadData(Params);
            }

            return OrderData;
        }
        return {
            getOrderData:getData
        }
    }]);