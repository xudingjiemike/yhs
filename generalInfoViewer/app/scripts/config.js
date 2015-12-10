/**
 * Created by liliang on 2015/12/9.
 */
/**
 * ���ݵ��Կ���
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
                mockurl: "userMessage/app/data/trustor.json",
                descript: "��ѯί�е�λ������khid(�ͻ����),khlx(�ͻ�����)"
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