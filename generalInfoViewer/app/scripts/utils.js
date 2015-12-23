/**
 * Created by liliang on 2015/12/18.
 */

angular.module("ui.yypt5.yhgl.GeneralInfoViewer")
    .factory("Params", [function () {
        function Param(params){
            this.params = params || {};
            this.toString = function(){
                var str = "?";
                for(var i in this.params){
                    str+=(i+"="+this.params[i]+"&");
                }
                return str.substring(0,str.length-1);
            }
        }
        return {
            set: function(params){ return new Param(params).toString();}
        };
    }]).factory("DataStore", [function () {

        var _data = angular.toJson(sessionStorage.getItem("yhlxr"))?{ lxrid: '19c2f04ff6564c60bc4bc7a648c356ec', khid: '799cb25280c6439a8aff592707451606', khlx: '0', yhdm: 'SWSBD0010', lxrmc:'徐鼎杰是大帅比', khmc:'税友517'}:angular.toJson(sessionStorage.getItem("yhlxr"));

        return {
            set: function (key,val) {
                if(key && (typeof key == "string") && val){
                    _data[key] = val;
                }else if(key && typeof key == "object"){
                    for(var j in key){
                        _data[j] =  key[j];
                    }
                }else{
                    return;
                }
            },
            get: function(key){
                if(key && (typeof key == "string")){
                    return _data[key];
                }
                return null;
            },
            getAll: function(){
                return _data;
            }
        };
    }]);