/**
 * Created by apple on 15/12/9.
 */
$(".style2.tabs").on("click",".tab",function(){
    if(!$(this).hasClass("active")){
        var tabContentEl = $(".cont-left .style2 .tab-content-box");
        var index = 7 - $(this).nextAll(".tab").length;
        var position = -index*12.5;
        tabContentEl.css("-webkit-transform","translate("+position+"%,0)");
        $(".cont-left .style2 .tab").removeClass("active");
        $(this).addClass("active");
        $(".tabs.style2 .active-bar").css({width:$(this).width()+"px", left: this.offsetLeft+10 +"px"});
        if(this.offsetLeft<moved){
            $(".arrow-left").click();
        }
        if(this.offsetLeft>moved && (this.offsetLeft+$(this).outerWidth())>style2_tabs.outerWidth()){
            $(".arrow-right").click();
        }
    }
});