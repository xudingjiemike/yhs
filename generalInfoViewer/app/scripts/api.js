/**
 * Created by liliang on 2015/12/9.
 */
angular.module('ui.yypt5.yhgl.GeneralInfoViewer')
    .constant({
        mock: false,
        loginHost:'http://192.168.70.202:88/'
    })
    .config(['$httpProvider','loginHost',function ($httpProvider,loginHost) {
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        $httpProvider.defaults.transformResponse.push(function (data, headersGetter, status) {
            if (headersGetter()['content-type'].substring(0,16) === 'application/json') {
                if (angular.isObject(data)
                    && data.hasOwnProperty('success')
                    && data.hasOwnProperty('messageCode')
                    && data.hasOwnProperty('message')
                    && data.hasOwnProperty('data')) {
                    if (!data.success) {
                        if (data.messageCode === 'api.auth.unlogon') {
                            location.href = loginHost+'yypt5/login.do?username=xxbyw_hb&password=123';
                        }else{
                            //错误处理：服务端错误信息 todo
                        }
                        return data;
                    }else{
                        return data.data;
                    }
                } else {
                    //错误处理：数据格式错误 todo
                }
            } else {
                return data;
            }
        });
    }])
    .factory('Host', ['mock', function (mock) {
        var host = [
            {
                hostname: 'BUSINISS',
                hosturl: 'http://192.168.70.202:88/',
                mockurl: '',
                descript: ''
            }
        ];
        return {
            all: function () {
                return host;
            },
            getByName: function (hostname) {
                for (var i = 0; i < host.length; i++) {
                    if (host[i].hostname === hostname) {
                        return host[i];
                    }
                }
                return null;
            },
            getHostByName: function (hostname) {
                var _host = this.getByName(hostname);
                if (_host != null) {
                    return mock ? _host.mockurl : _host.hosturl;
                }
                return null;
            }
        }
    }])
    .factory('Url', ['mock', function (mock) {
        var url = [
            {
                urlname: 'TRUSTOR',
                url: 'yypt5/api/khgl/wtdw/getWtdw',
                mockurl: 'data/trustor.json',
                descript: '查询委托单位，参数khid(客户编号),khlx(客户类型)，yhdm(用户代码)'
            },
            {
                urlname: 'CONTACTS',
                url: 'yypt5/api/khgl/lxr/getLxrxxByLxrid',
                mockurl: 'data/Information/contacts.json',
                descript: '查询联系人信息，参数lxrid(联系人编号)'
            },
            {
                urlname: 'COMPANY',
                url: 'yypt5/api/khgl/nsdw/getNsdwByKhid',
                mockurl: 'data/Information/company.json',
                descript: '查询纳税单位信息，参数khid(客户编号)'
            },
            {
                urlname: 'INTERMEDIARY',
                url: 'yypt5/api/khgl/zjjg/getZjjgByYhdm',
                mockurl: 'data/Information/intermediary.json',
                descript: '查询中介机构信息，参数khid(客户编号)'
            },
            {
                urlname: 'CONTACTS_UPDATE',
                url: 'yypt5/api/khgl/lxr/updateLxrFiled',
                mockurl: 'data/Information/update_remark.json',
                descript: '修改联系人信息，参数dataId(联系人编号),fieldKey(字段名),fieldValue(字段值)'
            },
            {
                urlname: 'COMPANY_UPDATE',
                url: 'yypt5/api/khgl/nsdw/updateNsdwFiled',
                mockurl: 'data/Information/update_remark.json',
                descript: '查询纳税单位信息，参数dataId(联系人编号),fieldKey(字段名),fieldValue(字段值)'
            },
            {
                urlname: 'INTERMEDIARY_UPDATE',
                url: 'yypt5/api/khgl/zjjg/updateZjjgFiled',
                mockurl: 'data/Information/update_remark.json',
                descript: '查询中介机构信息，参数dataId(联系人编号),fieldKey(字段名),fieldValue(字段值)'
            },
            {
                urlname: 'SEARCH',
                url: 'yypt5/api/khgl/search',
                mockurl: 'data/Information/search.json',
                descript: '根据关键信息检索用户列表'
            },
            {
                urlname: 'CALLBACK',
                url: 'yypt5/api/rwgl/calloutList',
                mockurl: 'data/jhxx/callbackList.json',
                descript: '查询请回电信息列表，参数khid(客户编号)'
            },
            {
                urlname: 'CALLOUT',
                url: 'yypt5/api/rwgl/calloutList',
                mockurl: 'data/jhxx/calloutList.json',
                descript: '查询外呼任务列表信息，参数khid(客户编号)'
            },
            {
                urlname: 'DX',
                url: 'yypt5/api/kfdm/comm/sms/dxList',
                mockurl: 'data/jhxx/dxList.json',
                descript: '查询短信信息，参数khid(客户编号)'
            },
            {
                urlname: 'SMRW',
                url: 'yypt5/api/rwgl/smrwList',
                mockurl: 'data/jhxx/smrwList.json',
                descript: '查询上门任务列表信息，参数khid(客户编号)'
            },
            {
                urlname: 'TSJY',
                url: 'yypt5/api/zxgl/tsxx/tsxxCx',
                mockurl: 'data/jhxx/tsjyList.json',
                descript: '查询投诉建议信息，参数khid(客户编号)'
            },
            {
                urlname: 'XS',
                url: 'yypt5/api/yxgl/yxxs/yxxsByYh',
                mockurl: 'data/jhxx/xsList.json',
                descript: '查询线索信息，参数khid(客户编号)'
            },
            {
                urlname: 'YCRW',
                url: 'yypt5/api/rwgl/ycrwList',
                mockurl: 'data/jhxx/ycrwList.json',
                descript: '查询远程任务信息，参数khid(客户编号)'
            },
            {
                urlname: 'ZDXC',
                url: 'yypt5/api/rwgl/zdxcList',
                mockurl: 'data/jhxx/zdxcList.json',
                descript: '查询驻点现场信息，参数khid(客户编号)'
            },
            {
                urlname: "ZXJL",
                url: "yypt5/api/zxgl/ldxzList",
                mockurl: "data/jhxx/zxjlList.json",
                descript: "查询咨询记录信息，参数khid(客户编号)"
            },
            {
                urlname: "FWSQ",
                url: "",
                mockurl: "data/ServiceAuthority/ServiceAuthority.json",
                descript: "服务授权"
            },
            {
                urlname: "SJSQ",
                url: "yypt5/api/khgl/sqxx/getRjsqbyKhid",
                mockurl: "data/SoftwareAuthority/SoftwareAuthority.json",
                descript: "软件授权"
            },
            {
                urlname: "YHTS",
                url: "yypt5/api/khgl/nsdw/getYhtsxx",
                mockurl: "data/BankAuthority/BankAuthority.json",
                descript: "银行托收"
            },
            {
                urlname: "LPSQ",
                url: "yypt5/api/khgl/nsdw/getGiftSqxx",
                mockurl: "data/GiftApply/GiftApply.json",
                descript: "礼品申请"
            },
            {
                urlname: "DD",
                url: "yypt5/pai/khgl/order/getUserOrder",
                mockurl: "data/Order/order.json",
                descript: "订单"
            },
            {
                urlname: "SP",
                url: "yypt5/api/khgl/nsdw/getSpxx",
                mockurl: "data/SP/sp.json",
                descript: "sp"
            },
            {
                urlname: "YWGK3DAY",
                url: "yypt5/api/zxgl/getThreeDayZxcs",
                mockurl: "data/BusinessGeneral/ThreeDay.json",
                descript: "业务概况3天"
            },
            {
                urlname: "YWGK1YEAR",
                url: "yypt5/api/zxgl/tsxx/getOneYearTscs",
                mockurl: "data/BusinessGeneral/OneYear.json",
                descript: "业务概况1年"
            },
            {
                urlname: "YWGKNOCLOSE",
                url: "yypt5/api/yxgl/yxxs/getWgbxsts",
                mockurl: "data/BusinessGeneral/NotClose.json",
                descript: "业务概况未关闭"
            },
            {
                urlname: "DELETETRUSTOR",
                url: "yypt5/api/khgl/wtdw/delteWtdw",
                mockurl: "",
                descript: ""
            }

        ];
        return {
            all: function () {
                return url;
            },
            getByName: function (urlname) {
                for (var i = 0; i < url.length; i++) {
                    if (url[i].urlname === urlname) {
                        return url[i];
                    }
                }
                return null;
            },
            getUrlByName: function (urlname) {
                var _url = this.getByName(urlname);
                if (_url != null) {
                    return mock ? _url.mockurl : _url.url;
                }
                return null;
            }
        }
    }]);