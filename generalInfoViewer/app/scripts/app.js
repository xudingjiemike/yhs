/**
 * Created by apple on 15/12/9.
 */
angular.module('ui.yypt5.yhgl.GeneralInfoViewer.ExpiredDetail',[]);
angular.module('ui.yypt5.yhgl.GeneralInfoViewer.ContLeft',[]);
angular.module('ui.yypt5.yhgl.GeneralInfoViewer.Trustors',[]);
angular.module('ui.yypt5.yhgl.GeneralInfoViewer.Taxlnstitution',[]);
angular.module('ui.yypt5.yhgl.GeneralInfoViewer.PopInfo',[]);
angular.module('ui.yypt5.yhgl.GeneralInfoViewer.PageInfo',[
    'ui.yypt5.yhgl.GeneralInfoViewer.PopInfo'
]);
angular.module('ui.yypt5.yhgl.GeneralInfoViewer.Uitab',[]);

angular.module('ui.yypt5.yhgl.GeneralInfoViewer',[
    'underscore',
    'ui.bootstrap',
    'ui.yypt5.yhgl.GeneralInfoViewer.ExpiredDetail',
    'ui.yypt5.yhgl.GeneralInfoViewer.ContLeft',
    'ui.yypt5.yhgl.GeneralInfoViewer.Trustors',
    'ui.yypt5.yhgl.GeneralInfoViewer.Taxlnstitution',
    'ui.yypt5.yhgl.GeneralInfoViewer.PageInfo',
    'ui.yypt5.yhgl.GeneralInfoViewer.PopInfo',
    'ui.yypt5.yhgl.GeneralInfoViewer.Uitab'
]);