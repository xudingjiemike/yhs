/**
 * Created by Zhang on 2015/12/17.
 */
angular.module("ui.yypt5.yhgl.GeneralInfoViewer")
    .factory("Config", [function () {
        var CONFIG={
            USER_LEVEL:[
                {key:'01',value:'level1'},
                {key:'03',value:'level2'},
                {key:'05',value:'level3'},
                {key:'07',value:'level4'},
                {key:'09',value:'level5'}
            ],
            USER_TYPE:[
                {key:'0',value:'单位用户'},
                {key:'1',value:'中介机构'},
                {key:'2',value:'兼职会计'},
                {key:'9',value:'代理�?'}
            ],
            AUTHORIZATION_STATE:[
                {key:'1',value:'正常'},
                {key:'2',value:'注销'}
            ],
            CONTROL_TYPE:[
                {key:'0',value:'非中介机构'},
                {key:'1',value:'严格授权控制类中介机构'},
                {key:'2',value:'非严格授权控制类中介机构'}
            ],
            TAB_TIP:{
                'contacts':'0', /*联系人*/
                'company':'1',  /*纳税单位*/
                'intermediary':'2' /*中介机构*/

            },
            ORDER_STATE:
                {
                    'skzt': {
                        '0':'无需收款',
                        '1':'未收款',
                        '2':'部分收款',
                        '3':'已收款'
                    },
                    'kpzt':{
                        '0':'无需开票',
                        '1':'未开票',
                        '2':'部分开票',
                        '3':'已开票'
                    }, 'jfzt':{
                    '0':'无需处理',
                    '1':'待交付',
                    '2':'交付中',
                    '3':'已交付',
                    '4':'异常',
                    '5':'未指定'

                }


                }



        };
        return{
            getUserLevelById:function(id){
                for(var i= 0,len=CONFIG.USER_LEVEL.length;i<len;i++){
                    if(CONFIG.USER_LEVEL[i].key===id){
                        return CONFIG.USER_LEVEL[i].value;
                    }
                }
            },
            getUserTypeById:function(id){
                for(var i= 0,len=CONFIG.USER_TYPE.length;i<len;i++){
                    if(CONFIG.USER_TYPE[i].key===id){
                        return CONFIG.USER_TYPE[i].value;
                    }
                }
            },
            getAuthorizationStateById:function(id){
                for(var i= 0,len=CONFIG.AUTHORIZATION_STATE.length;i<len;i++){
                    if(CONFIG.AUTHORIZATION_STATE[i].key===id){
                        return CONFIG.AUTHORIZATION_STATE[i].value;
                    }
                }
            },
            getControlTypeById:function(id){
                for(var i= 0,len=CONFIG.CONTROL_TYPE.length;i<len;i++){
                    if(CONFIG.CONTROL_TYPE[i].key===id){
                        return CONFIG.CONTROL_TYPE[i].value;
                    }
                }
            },

            /***
             * 订单收款状态转换
             * @param id
             * @returns {*}
             */

            getOrderReceiptStateById:function(id){
                return  CONFIG.ORDER_STATE["skzt"][id];

            },

            /*****
             * 订单开票状态
             * @param id
             * @returns {*}
             */
            getOrderBillStateById:function(id){
               return  CONFIG.ORDER_STATE["kpzt"][id];

            },

            /****
             * 订单交付状态
             * @param id
             * @returns {*}
             */
            getOrderDeliverStateById:function(id){
                return CONFIG.ORDER_STATE["kpzt"][id];
            },

            /***
             * 获取TabTip
             *
             * @returns {*}
             */
            getTabTip:function(){
                return CONFIG.TAB_TIP;
            }

        }
    }]);