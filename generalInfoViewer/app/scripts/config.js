/**
 * Created by Zhang on 2015/12/17.
 */
angular.module("ui.yypt5.yhgl.GeneralInfoViewer")
    .factory("Config", [function () {
        var CONFIG={
            USER_LEVEL:[
                {key:'1',value:''},
                {key:'3',value:''},
                {key:'5',value:''},
                {key:'7',value:''},
                {key:'9',value:''}
            ],
            USER_TYPE:[
                {key:'0',value:'生产型'},
                {key:'1',value:'外贸型'}
            ],
            INDUSTRY_CATEGORIES:[
                {key:'1',value:''},
                {key:'1',value:''},
                {key:'1',value:''},
                {key:'1',value:''},
                {key:'1',value:''},
                {key:'1',value:''},
                {key:'1',value:''},
                {key:'1',value:''},
                {key:'1',value:''}
            ],
            AUTHORIZATION_STATE:[
                {key:'1',value:''},
                {key:'2',value:''}
            ]
        };
    }]);