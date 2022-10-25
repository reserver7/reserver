$(document).ready(function(){
    var $banner_list = [
    ["./banner/banner_s1.png","http://www.jscook.co.kr/cookfile/menu2/menu1.html","교육과정"],
    ["./banner/banner_s2.png","http://www.jscook.co.kr/cookfile/menu2/menu21.html","창업과정"],
    ["./banner/banner_s3.png","http://www.jscook.co.kr/cookfile/menu4/menu7.html","직영,관리매장소개"],
    ["./banner/banner_s4.png","http://www.jscook.co.kr/bbs/zboard.php?id=cookapply","세미나신청"]
    ];
    var $banner_length = $banner_list.length;
    var $num = 0;
    var $banner_html;
    var $disc_html;
    var $page = 0;
    do{
        $banner_html = "<li><img src="+ $banner_list[$num][0] +" title="+ $banner_list[$num][2] +"></li>";
        $("#banner_ul").append($banner_html);
        $disc_html = "<li></li> ";
        $("#disc_ol").append($disc_html);
        $num++;
    }while($num<$banner_length);

    var $timer;
    var $timer2;
    var $function;
    $.fn.banner_auto = function(){
        $function = $.fn.banner($page);

        $timer = setTimeout(function retimer(){
            if($function=="ok"){
                $("#banner_ul>li").eq($page).stop().fadeOut(800);
                $page++;
            if($page>=$banner_length){  
                $page = 0;
            }
            $("#banner_ul>li").eq($page).stop().fadeIn(800);
            $("#disc_ol>li").css("background-color","black");
            $("#disc_ol>li").eq($page).css("background-color","tomato");
            clearTimeout($timer);
            $timer2 = setTimeout($.fn.banner_auto(),5000);
            }
            
        },5000);
    };

    //애니메이션 부분
    $.fn.banner = function($pg){
        var $texts;
        var $msg = "no";
        switch($pg){
            case 0:
            if($(".text1").css("display")!="block"){
            $texts = "<span class='text1'>방문상담 후 과정 등록하신 분</span>";
            $texts += "<span class='text2'>10~30% 수강할인</span>";
            $texts += "<span class='text3'>이벤트 기간 : 2020.12.01~12.31까지</span>";
            $("#banner_ul>li").eq($pg).append($texts);
            $(".text1").fadeIn(1000);
            $(".text2").delay(1000).fadeIn(1000);
            $(".text3").delay(2000).fadeIn(1000);
            }
                $mag = "ok";
            break;

            case 1:
            if($(".text4").css("display")!="block"){
            $texts = "<span class='text4'>바로가기 →</span>";
            $("#banner_ul>li").eq($pg).append($texts);
            $(".text4").delay(1000).slideDown(1000);
            }
                $mag = "ok";
            break;

            case 2:
            if($(".text5").css("display")!="block"){
            $texts = "<span class='text5'>바로가기 →</span>";
            $("#banner_ul>li").eq($pg).append($texts);
            $(".text5").delay(1000).slideDown(1000);
            }
                $mag = "ok";
            break;

            case 3:
            if($(".text6").css("display")!="block"){
            $texts = "<span class='text6'>99% 동일 레시피</span>";
            $texts += "<span class='text7'>소스 개발 & 소스 카피</span>";
            $texts += "<span class='text8'>메뉴 개발 신청하기</span>";
            $("#banner_ul>li").eq($pg).append($texts);
            $(".text6").delay(1000).fadeIn(1000);
            $(".text7").delay(2000).fadeIn(1000);
            $(".text8").delay(3000).fadeIn(1000);
            }
                $mag = "ok";
            break;
        }
        return $mag;
    };

    //disc 부분
        $("#disc_ol>li").click(function(){
        clearTimeout($timer);
        $("#disc_ol>li").css("background-color","black");
        $(this).css("background-color","tomato");
        $page = $(this).index();

        //banner 부분
        $("#banner_ul>li").stop().fadeOut(800);
        $("#banner_ul>li").eq($page).stop().fadeIn(800);
    });
    

    $("#left").click(function(){
        clearTimeout($timer);
        $("#banner_ul>li").eq($page).stop().fadeOut(800);
        if($page==0){
            $page = $banner_length -1;
        }
        else{
            $page--;
        }
        $("#banner_ul>li").eq($page).stop().fadeIn(800);

        //disc 부분
        $("#disc_ol>li").css("background-color","black");
        $("#disc_ol>li").eq($page).css("background-color","tomato");
    });

    $("#right").click(function(){
        clearTimeout($timer);
        $("#banner_ul>li").eq($page).stop().fadeOut(800);
            $page++;
        if($page>=$banner_length){  
            $page = 0;
        }
        $("#banner_ul>li").eq($page).stop().fadeIn(800);

        //disc 부분
        $("#disc_ol>li").css("background-color","black");
        $("#disc_ol>li").eq($page).css("background-color","tomato");
    });

    $("#sectioncss").bind({
        "mouseenter":function(){
            $("#sectioncss >span").stop().fadeIn();
            clearTimeout($timer);
        },
        "mouseleave":function(){
            $("#sectioncss >span").stop().fadeOut();
            $.fn.banner_auto();
        }
    });

    $.fn.banner_auto();
});