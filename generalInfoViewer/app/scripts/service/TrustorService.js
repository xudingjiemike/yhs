/**
 * Created by liliang on 2015/12/8.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.Trustors')
    .service('TrustorService', ['_','TrustorApi',
        function (_,TrustorApi) {
            var Trustors = {};
            return {
                getTrustors: function(khid,khlx,yhdm){
                    var _this = this;
                    TrustorApi.getTrustors(khid,khlx,yhdm).success(function (data) {
                        angular.copy(data, Trustors);
                        Trustors.isPersonal = _this.isPersonal();
                    });
                    return Trustors;
                },
                deleteTrustor: function(wtdwId){
                    var list = [];
                    list.push(Trustors.grdlWtdwData.wtdwList);
                    if(!this.isPersonal()){
                        list.push(Trustors.zjjgWtdwData.wtdwList);
                    }
                    this.dataDelete(list, wtdwId);
                    //TrustorApi.deleteTrustor().success(function (data) {
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
                                if(i==0){
                                    Trustors.grdlWtdwData.hydjdwsSz[typeIndex] -= 1;
                                    delete Trustors.grdlWtdwData.wtdwList[j];
                                }else{
                                    Trustors.zjjgWtdwData.hydjdwsSz[typeIndex] -= 1;
                                    delete Trustors.zjjgWtdwData.wtdwList[j];
                                }
                                break;
                            }
                        }
                    }
                }
            }

        }]);