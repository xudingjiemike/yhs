/**
 * Created by liliang on 2015/12/8.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.Trustors')
    .service('TrustorService', ['_','TrustorApi',
        function (_,TrustorApi) {
            var Trustors = {};
            return {
                getTrustors: function(params){
                    var _this = this;
                    TrustorApi.getTrustors(params).success(function (data) {
                        angular.copy(data, Trustors);
                        Trustors.isPersonal = _this.isPersonal();
                        Trustors.hasData = true;
                    });
                    return Trustors;
                },
                deleteTrustor: function(params,wtdwId){
                    var list = [];
                    list.push(Trustors.grdlWtdwData.wtdwList);
                    if(!this.isPersonal()){
                        list.push(Trustors.zjjgWtdwData.wtdwList);
                    }
                    this.dataDelete(list, wtdwId);
                    //TrustorApi.deleteTrustor(params).success(function (data) {
                    //
                    //});
                },
                isPersonal: function () {
                    return !Trustors.zjjgWtdwData;
                },
                dataDelete: function(data, wtdwId){
                    var index = -1, type = "", typeIndex = -1,
                        types = Trustors.grdlWtdwData.hydjSz;
                    for(var i=0;i<data.length;i++){
                        for(var j=0;j<data[i].length;j++){
                            if(data[i][j].wtdwId == wtdwId){
                                type = data[i][j].levelMc;
                                index = j;
                                for(var a = 0;a< types.length;a++){
                                    if(types[a] == type){
                                        typeIndex = a;
                                        break;
                                    }
                                }
                                var arr = tpmArr = [];
                                if(i==0){
                                    Trustors.grdlWtdwData.hydjdwsSz[typeIndex] -= 1;
                                    angular.copy(Trustors.grdlWtdwData.wtdwList, arr);
                                    delete Trustors.grdlWtdwData.wtdwList;
                                    var tpmArr = arr.slice(0,index).concat(arr.slice(index+1));
                                    Trustors.grdlWtdwData.wtdwList = [];
                                    angular.copy(tpmArr,Trustors.grdlWtdwData.wtdwList);
                                }else{
                                    Trustors.zjjgWtdwData.hydjdwsSz[typeIndex] -= 1;
                                    angular.copy(Trustors.zjjgWtdwData.wtdwList, arr);
                                    delete Trustors.zjjgWtdwData.wtdwList;
                                    Trustors.zjjgWtdwData.wtdwList = [];
                                    var tpmArr = arr.slice(0,index).concat(arr.slice(index+1));
                                    angular.copy(tpmArr,Trustors.zjjgWtdwData.wtdwList);
                                }
                                break;
                            }
                        }
                    }
                }
            }

        }]);