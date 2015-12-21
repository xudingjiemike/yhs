/**
 * Created by xudj on 15/12/19.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer')
    .service('OrderService',['_','TabsDataApi',function(_,TabsDataApi){
        var OrderData = [];
        function LoadData(khid){
            TabsDataApi.Load(khid,"DD").success(function(obj){
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


                //OrderData.cpbs = cpbs;

            })
        }
        function getData(khid){
            if(OrderData.length == 0){
                LoadData(khid);
            }

            return OrderData;
        }
        return {
            getOrderData:getData
        }
    }]);