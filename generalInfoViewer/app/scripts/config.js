/**
 * Created by liliang on 2015/12/9.
 */
/**
 * 数据调试开关
 */
angular.module("ui.yypt5.yhgl.GeneralInfoViewer")
    .factory("Mock", [function(){
        var mock = true;

        return {
            getMock: function(){
                return mock;
            }
        };
    }]);
angular
    .module("ui.yypt5.yhgl.GeneralInfoViewer")
    .factory("Host", ["Mock", function(Mock){
        var host = [
            {
                hostname: "BUSINISS",
                hosturl: "",
                mockurl: "http://192.168.60.136:8089/",
                descript: ""
            },
            {
                hostname: "INFORMATION",
                hosturl: "",
                mockurl: "",
                descript: ""
            }
        ];

        return {
            all: function() {
                return host;
            },
            getByName: function(hostname) {
                for (var i = 0; i < host.length; i++) {
                    if (host[i].hostname === hostname) {
                        return host[i];
                    }
                }
                return null;
            },
            getHostByName: function(hostname) {
                var _host = this.getByName(hostname);
                if(_host!=null){
                    return Mock.getMock()?_host.mockurl : _host.hosturl;
                }
                return null;
            }
        }
    }]);

angular
    .module("ui.yypt5.yhgl.GeneralInfoViewer")
    .factory("Url",  ["Mock", function(Mock){
        var url = [
            {
                urlname: "TRUSTOR",
                url: "yypt5/api/khgl/yhs/wtdw",
                mockurl: "data/trustor.json",
                descript: "查询委托单位，参数khid(客户编号),khlx(客户类型)"
            },
            {
                urlname: "PERSON",
                url: "",
                mockurl: "data/person.json",
                descript: "查询联系人信息，参数lxrid(联系人编号)"
            },
            {
                urlname: "COMPANY",
                url: "",
                mockurl: "data/company.json",
                descript: "查询纳税单位信息，参数khid(客户编号)"
            },{
                urlname: "INTERMEDIARY",
                url: "",
                mockurl: "data/intermediary.json",
                descript: "查询中介机构信息，参数khid(客户编号)"
            },{
                urlname: "AGENT",
                url: "",
                mockurl: "data/agent.json",
                descript: "查询纳税单位被代理信息，参数khid(客户编号)"
            },{
                urlname: "CALLBACK",
                url: "",
                mockurl: "data/jhxx/callbackList.json",
                descript: "查询请回电信息列表，参数khid(客户编号)"
            },{
                urlname: "CALLOUT",
                url: "",
                mockurl: "data/jhxx/calloutList.json",
                descript: "查询外呼任务列表信息，参数khid(客户编号)"
            },{
                urlname: "DX",
                url: "",
                mockurl: "data/jhxx/dxList.json",
                descript: "查询短信信息，参数khid(客户编号)"
            },{
                urlname: "SMRW",
                url: "",
                mockurl: "data/jhxx/smrwList.json",
                descript: "查询上门任务列表信息，参数khid(客户编号)"
            },{
                urlname: "TSJY",
                url: "",
                mockurl: "data/jhxx/tsjyList.json",
                descript: "查询投诉建议信息，参数khid(客户编号)"
            },{
                urlname: "XS",
                url: "",
                mockurl: "data/jhxx/xsList.json",
                descript: "查询线索信息，参数khid(客户编号)"
            },{
                urlname: "YCRW",
                url: "",
                mockurl: "data/jhxx/ycrwList.json",
                descript: "查询远程任务信息，参数khid(客户编号)"
            },{
                urlname: "ZDXC",
                url: "",
                mockurl: "data/jhxx/zdxcList.json",
                descript: "查询驻点现场信息，参数khid(客户编号)"
            },{
                urlname: "ZXJL",
                url: "",
                mockurl: "data/jhxx/zxjlList.json",
                descript: "查询咨询记录信息，参数khid(客户编号)"
            }
        ];

        return {
            all: function() {
                return url;
            },
            getByName: function(urlname) {
                for (var i = 0; i < url.length; i++) {
                    if (url[i].urlname === urlname) {
                        return url[i];
                    }
                }
                return null;
            },
            getUrlByName: function(urlname) {
                var _url = this.getByName(urlname);
                if(_url!=null){
                    return Mock.getMock()?_url.mockurl : _url.url;
                }
                return null;
            }
        }
    }]);