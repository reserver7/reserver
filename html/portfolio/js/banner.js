$(document).ready(function(){
    var $li_num = $("#banners>li").length;
    var $li_width = $("#banners>li").eq(0).width();
    var $fullwidth = $li_num * $li_width;
    $("#banners").css("width",+$fullwidth+"px");
    //디스크 초기값
    var $dno = 0;

    var $timer;
    $.fn.bannerm = function(){
    $timer = setTimeout(function retimer(){
        $("#banners").animate({
            "left":(-$li_width)+"px"
        },800,function(){
            var $banner_copy = $("#banners>li").eq(0).clone();
            $("#banners>li").eq(0).remove();
            $(this).css("left","0px");
            $(this).append($banner_copy);
        });
        //디스크 이동
        $("#disc>li").css("background-color","black");
        $dno++;

        if($dno>=$li_num){
            $dno = 0;
        }
        $("#disc>li").eq($dno).css("background-color","tomato");

        $timer = setTimeout(retimer,5000);       
    },5000);
};   

    var $banner_list = [
        ["./banner/banner1.png","http://www.jscook.co.kr/cookfile/menu2/menu1.html","교육과정"],
        ["./banner/banner2.png","http://www.jscook.co.kr/cookfile/menu2/menu21.html","창업과정"],
        ["./banner/banner3.png","http://www.jscook.co.kr/cookfile/menu4/menu7.html","직영,관리매장소개"],
        ["./banner/banner4.png","http://www.jscook.co.kr/bbs/zboard.php?id=cookapply","세미나신청"]
    ];
    var $banner_num = $banner_list.length;
    var $num=0;
    while($num<$banner_num){
        $("#banners>li:eq("+$num+")").attr("data",$banner_list[$num][1]);
        $("#banners>li:eq("+$num+")>img").attr("src",$banner_list[$num][0]);
        $("#banners>li:eq("+$num+")>img").attr("title",$banner_list[$num][2]);
        $("#disc").append("<li></li> ");
        $num++;
    }
    //이미지 클릭 부분
    $("#banners").click(function(){
        $dno = $("#banners>li").eq(0).attr("data");
        location.href=$dno;
    });
    
    $("#banner_box").bind({
        "mouseenter":function(){
            $(".spanbtn").fadeIn();
            clearTimeout($timer);
        },
        "mouseleave":function(){
            $(".spanbtn").fadeOut();
            $.fn.bannerm();
        }
    });

    $("#right").click(function(){
        $("#banners").animate({
            "left":(-$li_width)+"px"
        },800,function(){
            var $banner_copy = $("#banners>li").eq(0).clone();
            $("#banners>li").eq(0).remove();
            $(this).css("left","0px");
            $(this).append($banner_copy);
        });

        //디스크 이동
        $("#disc>li").css("background-color","black");
        $dno++;

        if($dno>=$li_num){
            $dno = 0;
        }
        $("#disc>li").eq($dno).css("background-color","tomato");
    });

    $("#left").click(function(){
        var $banner_copy = $("#banners>li").eq($li_num-1).clone();
        $("#banners>li").eq($li_num-1).remove();
        $("#banners").css("left",(-$li_width)+"px");
        $("#banners").prepend($banner_copy);
        $("#banners").animate({
            "left":"0px"
        },800);

        //디스크 이동
        $("#disc>li").css("background-color","black");
        if($dno==0){
            $dno = $li_num-1; 
        }
        else{
            $dno--;
        }
        $("#disc>li").eq($dno).css("background-color","tomato");
    });

    $.fn.bannerm();

    //해당 디스크 클릭 부분
    $("#disc>li").click(function(){
        clearTimeout($timer);
        var $disc_node = $(this).index();  
        $("#disc>li").css("background-color","black");
        $("#disc>li").eq($disc_node).css("background-color","tomato")
        
        var $ck;
        var $nodem
        for($ck=0;$ck<$li_num;$ck++){
            
            $nodem = $("#banners>li").eq($ck).attr("node");

            if($disc_node==$nodem){
                var $offset = String(Math.ceil($("#banners>li").eq($ck).offset().left));
                var $count = $offset.length; 
                var $substr;    
                var $left_offset;   

                if($count==3){  
                    $left_offset = 0;
                }
                else{   
                    var $clickno = $ck;
                    $substr = Number($offset.substr(0,1));
                    $left_offset = $li_width * $substr;
                    $("#banners").animate({
                        "left":(-$left_offset)+"px"
                    },800,function(){

                        //해당 노드의 순서위치
                        var $index_no = $("#banners>li").eq($clickno).index();
                        var $n;
                        var $disc_copy;
                        for($n=0;$n<$index_no;$n++){
                            $disc_copy = $("#banners>li").eq(0).clone();
                            $("#banners>li").eq(0).remove();
                            $("#banners").append($disc_copy);
                        }
                        $("#banners").css("left","0px");
                        $dno = $disc_node;  
                        //해당 디스크 노드
                    });
                }
            }
        }
    });

    $("#disc").mouseenter(function(){
        clearTimeout($timer);
    });
});