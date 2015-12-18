/**
 * Created by liliang on 2015/12/18.
 */

angular.module("ui.yypt5.yhgl.GeneralInfoViewer")
    .factory("Params", [function () {
        function Param(params){
            this.params = params || {};
            this.toString = function(){
                var str = "?";
                for(i in this.params){
                    str+=(i+"="+this.params[i]+"&");
                }
                return str.substring(0,str.length-1);
            }
        }
        return {
            set: function(params){ return new Param(params).toString();}
        };
    }]);