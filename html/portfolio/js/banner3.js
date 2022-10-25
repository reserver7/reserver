$(document).ready(function(){
    var $w = $(window).width();
    var $page = 0;
    var $banner_list = [
    ["./banner/banner1.png","http://www.jscook.co.kr/cookfile/menu2/menu1.html","교육과정"],
    ["./banner/banner2.png","http://www.jscook.co.kr/cookfile/menu2/menu21.html","창업과정"],
    ["./banner/banner3.png","http://www.jscook.co.kr/cookfile/menu4/menu7.html","직영,관리매장소개"],
    ["./banner/banner4.png","http://www.jscook.co.kr/bbs/zboard.php?id=cookapply","세미나신청"]
    ];
    var $banner_length = $banner_list.length;
    var $num = 0;
    var $ulhtml;
    while($num<$banner_length){
        $ulhtml = "<li><img src="+ $banner_list[$num][0] +"></li> ";
        $("#ulcss").append($ulhtml);
        $num++;
    }

    var $li_width = 100 * $banner_length;

    $(".banner").css("width",$w+"px");
    $(".ulcss").css("width",$li_width+"%");
    $(".ulcss>li").css("width",$w+"px");

    $("#ulcss").bind({
        "click": function(){
            location.href = $banner_list[$page][1];
        },
        "swiperight": function(){
            var $move;
            if($page<=0){
                $move=0;
            }
            else{
                $page--;
                $move = $w * $page; 
            }
            $(this).stop().animate({
                "left": (-$move) + "px"
            },800);
        },
        "swipeleft": function(){
            if($page<$banner_length-1){
                $page++;
            }
            else{
                $page = 0;
            }
            var $move = $w * $page;
            $(this).stop().animate({
                "left": (-$move) + "px"
            },800);
        }
    });
});