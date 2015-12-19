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
            ]
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
            }
        }
    }]);