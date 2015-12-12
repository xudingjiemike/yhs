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
                urlname: "AGENT",
                url: "",
                mockurl: "data/agent.json",
                descript: "查询被委托单位信息，参数khid(客户编号)"
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