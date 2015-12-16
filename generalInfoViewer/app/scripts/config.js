/**
 * Created by liliang on 2015/12/9.
 */
/**
 * 数据调试开关
 */

angular.module("ui.yypt5.yhgl.GeneralInfoViewer")
    .config(['$httpProvider',function ($httpProvider) {
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
        $httpProvider.defaults.transformResponse.push(function (data, headersGetter, status) {
            if (headersGetter()['content-type'].substring(0,16) === 'application/json') {
                if (angular.isObject(data)
                    && data.hasOwnProperty('success')
                    && data.hasOwnProperty('messageCode')
                    && data.hasOwnProperty('message')
                    && data.hasOwnProperty('data')) {
                    if (!data.success) {
                        if (data.messageCode === 'api.auth.unlogon') {
                            // 调用客户端重登陆
                            location.href = 'http://192.168.71.145/nbgl2Web/login.do?username=xxbyw_hb&password=123';
                        }else{
                            //错误处理：服务端错误信息 todo
                        }
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
    .factory("Mock", [function () {
        var mock = true;
        return {
            getMock: function () {
                return mock;
            }
        };
    }])
    .factory("Host", ["Mock", function (Mock) {
        var host = [
            {
                hostname: "BUSINISS",
                hosturl: "http://192.168.70.246:7001/",
                mockurl: "http://192.168.60.136:8089/",
                descript: ""
            },
            {
                hostname: "INFORMATION",
                hosturl: "http://192.168.71.145/",
                mockurl: "",
                descript: ""
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
                    return Mock.getMock() ? _host.mockurl : _host.hosturl;
                }
                return null;
            }
        }
    }])
    .factory("Url", ["Mock", function (Mock) {
        var url = [
            {
                urlname: "TRUSTOR",
                url: "yypt5/api/khgl/wtdw/getWtdw",
                mockurl: "generalInfoViewer/app/data/trustor.json",
                descript: "查询委托单位，参数khid(客户编号),khlx(客户类型)，yhdm(用户代码)"
            },
            {
                urlname: "CONTACTS",
                url: "nbgl2Web/api/khgl/lxr/getLxrxxByLxrid",
                mockurl: "data/contacts.json",
                descript: "查询联系人信息，参数lxrid(联系人编号)"
            },
            {
                urlname: "COMPANY",
                url: "nbgl2Web/api/khgl/nsdw/getNsdwByKhid",
                mockurl: "data/company.json",
                descript: "查询纳税单位信息，参数khid(客户编号)"
            },
            {
                urlname: "INTERMEDIARY",
                url: "nbgl2Web/api/khgl/zjjg/getZjjgByYhdm",
                mockurl: "data/intermediary.json",
                descript: "查询中介机构信息，参数khid(客户编号)"
            },
            {
                urlname: "AGENT",
                url: "",
                mockurl: "data/agent.json",
                descript: "查询纳税单位被代理信息，参数khid(客户编号)"
            }, {
                urlname: "CALLBACK",
                url: "",
                mockurl: "data/jhxx/callbackList.json",
                descript: "查询请回电信息列表，参数khid(客户编号)"
            }, {
                urlname: "CALLOUT",
                url: "",
                mockurl: "data/jhxx/calloutList.json",
                descript: "查询外呼任务列表信息，参数khid(客户编号)"
            }, {
                urlname: "DX",
                url: "",
                mockurl: "data/jhxx/dxList.json",
                descript: "查询短信信息，参数khid(客户编号)"
            }, {
                urlname: "SMRW",
                url: "",
                mockurl: "data/jhxx/smrwList.json",
                descript: "查询上门任务列表信息，参数khid(客户编号)"
            }, {
                urlname: "TSJY",
                url: "",
                mockurl: "data/jhxx/tsjyList.json",
                descript: "查询投诉建议信息，参数khid(客户编号)"
            }, {
                urlname: "XS",
                url: "",
                mockurl: "data/jhxx/xsList.json",
                descript: "查询线索信息，参数khid(客户编号)"
            }, {
                urlname: "YCRW",
                url: "",
                mockurl: "data/jhxx/ycrwList.json",
                descript: "查询远程任务信息，参数khid(客户编号)"
            }, {
                urlname: "ZDXC",
                url: "",
                mockurl: "data/jhxx/zdxcList.json",
                descript: "查询驻点现场信息，参数khid(客户编号)"
            }, {
                urlname: "ZXJL",
                url: "",
                mockurl: "data/jhxx/zxjlList.json",
                descript: "查询咨询记录信息，参数khid(客户编号)"
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
                // mark it is ajax request

                //$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

                // global server exception handling
                //$httpProvider.defaults.transformResponse.push(function (data, headersGetter) {
                //    if (angular.isObject(data) &&
                //        data.hasOwnProperty('success') &&
                //        data.hasOwnProperty('data')) {
                //        if(!data.success) {
                //            if(data.hasOwnProperty('messageCode')&&data.hasOwnProperty('message')){
                //                if(data.messageCode === 'api.secrity.unlogon'){
                //                    // 调用客户端重登陆
                //
                //                }else{
                //                    app.toastr.error(data.messageCode+":"+data.message);
                //                    return false;
                //                }
                //            }
                //            //return app.$q.reject(data);
                //        }
                //        return data.data;
                //    }else{
                //        return data;
                //    }
                //});
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
                    return Mock.getMock() ? _url.mockurl : _url.url;
                }
                return null;
            }
        }
    }]);