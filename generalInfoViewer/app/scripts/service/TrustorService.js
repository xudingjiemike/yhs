/**
 * Created by liliang on 2015/12/8.
 */
angular
    .module('ui.yypt5.yhgl.GeneralInfoViewer.Trustors')
    .service('trustorService', ['_','trustorApi',
        function (_,trustorApi) {
            return {
                getTrustors: function(params){
                    var _this = this, Trustors = {};
                    return trustorApi.getTrustors(params);
                    //.success(function (data) {
                        //angular.copy(data, Trustors);
                        //Trustors.isPersonal = _this.isPersonal(Trustors);
                        //Trustors.hasData = true;
                        //return Trustors;

                        //Trustors.isPersonal = _this.isPersonal(data.data);
                        //Trustors.hasData = true;
                        //return Trustors;
                   // });
                },
                deleteTrustor: function(params,wtdwId, editData){
                    var _this = this, list = [], returnData = {};
                    list.push(editData.grdlWtdwData.wtdwList);
                    if(!this.isPersonal(editData)){
                        list.push(editData.zjjgWtdwData.wtdwList);
                    }
                    trustorApi.deleteTrustor(params).success(function (data) {
                        angular.copy(_this.dataDelete(list, wtdwId, editData),returnData);
                    });
                    return returnData;
                },
                isPersonal: function (data) {
                    return !data.zjjgWtdwData;
                },
                dataDelete: function(data, wtdwId, editData){
                    var index = -1, type = "", typeIndex = -1,
                        types = editData.grdlWtdwData.hydjSz;
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
                                    editData.grdlWtdwData.hydjdwsSz[typeIndex] -= 1;
                                    angular.copy(editData.grdlWtdwData.wtdwList, arr);
                                    delete editData.grdlWtdwData.wtdwList;
                                    var tpmArr = arr.slice(0,index).concat(arr.slice(index+1));
                                    editData.grdlWtdwData.wtdwList = [];
                                    angular.copy(tpmArr,editData.grdlWtdwData.wtdwList);
                                }else{
                                    editData.zjjgWtdwData.hydjdwsSz[typeIndex] -= 1;
                                    angular.copy(editData.zjjgWtdwData.wtdwList, arr);
                                    delete editData.zjjgWtdwData.wtdwList;
                                    editData.zjjgWtdwData.wtdwList = [];
                                    var tpmArr = arr.slice(0,index).concat(arr.slice(index+1));
                                    angular.copy(tpmArr,editData.zjjgWtdwData.wtdwList);
                                }
                                break;
                            }
                        }
                    }
                }
            }

        }]);