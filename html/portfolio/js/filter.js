$(function(){
$.fn.resizes = function($objecta,$objectb){ 
    const $ws = $("html,body").width();
    //좌우 버튼 위치 재조정
    if($ws > 1200){
        $($objecta).animate({
            "left":"20%"
        },500);
        $($objectb).animate({
            "right":"20%"
        },500);
    }
    else{
        $($objecta).animate({
            "left":"3%"
        },500);
        $($objectb).animate({
            "right":"3%"
        },500);
    }
}

let $timer;
let $page = 0;
var $banner_ea = $("#banner_ul>li").length;
$.fn.banner_timer = function(){
    $timer = setTimeout(function retimer(){
        $("#banner_ul>li").stop().fadeOut();
        $("#banner_disc>li").css("background-color","rgba(0,0,0,0.4)");
        $page++;
        if($page>=$banner_ea){
            $page = 0;
        }
        //console.log($page);
        $("#banner_ul>li").eq($page).stop().fadeIn();
        $("#banner_disc>li").eq($page).css("background-color","cornflowerblue");
        clearTimeout($timer);
        $timer = setTimeout(retimer,5000);
    },5000);
}
$.fn.banner_timer();

/* 배너 좌우 버튼 */
$("#banner_css").bind({
    "mouseenter":function(){
        clearTimeout($timer);
        $("#lbtn").stop().fadeIn();
        $("#rbtn").stop().fadeIn();
        $.fn.resizes("#lbtn","#rbtn");
    },
    "mouseleave":function(){
        $("#lbtn").stop().fadeOut();
        $("#rbtn").stop().fadeOut();
        $.fn.banner_timer();
    }
});

/* 배너 오른쪽 버튼 */
$("#rbtn").click(function(){
    $("#banner_ul>li").stop().fadeOut();
    $("#banner_disc>li").css("background-color","rgba(0,0,0,0.4)");
    $page++;
    if($page>=$banner_ea){
        $page = 0;
    }
    //console.log($page);
    $("#banner_ul>li").eq($page).stop().fadeIn();
    $("#banner_disc>li").eq($page).css("background-color","cornflowerblue");
    clearTimeout($timer);
});
/* 배너 왼쪽 버튼 */
$("#lbtn").click(function(){
    $("#banner_ul>li").stop().fadeOut();
    $("#banner_disc>li").css("background-color","rgba(0,0,0,0.4)");
    if($page<=0){
        $page = $banner_ea;
    }
        $page--;
    //console.log($page);
    $("#banner_ul>li").eq($page).stop().fadeIn();
    $("#banner_disc>li").eq($page).css("background-color","cornflowerblue");
    clearTimeout($timer);
});
/* 배너 디스크 버튼 */
$("#banner_disc>li").click(function(){
    $("#banner_ul>li").stop().fadeOut();
    $("#banner_disc>li").css("background-color","rgba(0,0,0,0.4)");
    $page = $(this).index();
    $("#banner_ul>li").eq($page).stop().fadeIn();
    $("#banner_disc>li").eq($page).css("background-color","cornflowerblue");
    clearTimeout($timer);
});
});