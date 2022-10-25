$(function(){
    $.ajax({
        url:"./banner.json",
        cache:false,
        type:"GET",
        dataType:"json",
        success:function($result){
            $.fn.json($result);
        },
        error:function(){
            console.log("데이터 오류");
        }
    });

    $.fn.json = function($result){
        var $html = "";
        $($result.banners).each(function($node,$name){
            //console.log($node);
            $html = '<ol>\
            <li class="shoshul_list" link="'+$name.banner_link+'" title="'+$name.help_info+'"> <img src="'+$name.banner_img+'"> </li >\
            </ol >';
            $("#shoshul_box").append($html);
        });

        $(".shoshul_list").click(function(){
            var $link = $(this).attr("link");
            window.open($link);
        });
    }

    var $timer;
    $.fn.banner = function(){
        $timer = setTimeout(function retimer(){
            var $off = $("#banner_list").offset().left;
            var $left;
            if($off==0){
                $left = -480;
            }
            else{
                $left = 0;
            }
            $("#banner_list").animate({
                "margin-left":$left+"px"
            },500);
            $timer = setTimeout(retimer,10000);
        },10000);
    }
    $.fn.banner();

    $("#banner_list").swipe(function(){
        var $banner_off = $(this).offset().left;
        var $left;
        if($banner_off==0){
            $left = -480;
        }
        else{
            $left = 0;
        }
        $("#banner_list").animate({
            "margin-left":$left+"px" 
        },500);
    });

    $("#banner_list>li").click(function(){
        var $index = $(this).index();
        var $url;
        if($index==0){
            $url = "https://www.gigabyte.com/kr/Mouse";
        }
        else{
            $url = "https://www.gigabyte.com/kr/Enterprise/ARM-Server";
        }
        location.href = $url;
    });


    $("#pop_btn").click(function(){
        $("#headercss").fadeOut();
    });
    
    $("#search_btn").click(function(){
        var $search_box = $("#search_box").is(":visible");
        if($search_box==false){
            $("#search_box").css("display","flex");
        }
        else{
            $("#search_box").css("display","none");
        }
    });

    $("#txt_btn").click(function(){
        if($("#search_txt").val()==""){
            alert("찾을 상품명을 입력해 주세요");
        }
    });


    $("#view_menu").click(function(){
        var $menu_off = $("#menudiv").offset().left;
        if($menu_off==0){
            $("#menudiv").animate({
                "left":"-480px"
            },500);
        }
        else{
            $("#menudiv").animate({
                "left":"0"
            },500); 
        }
    });

    $("#menuclose").click(function(){
        $("#menudiv").animate({
            "left":"-480px"
        },500);
    });
});

function btn(){
    var val = document.getElementById("number_no").value
    if(val==""){
        alert("제품 시리얼 넘버 번호를 입력해 주시길 바랍니다.");
        document.getElementById("number_no").focus();
        return false;
    }
    else if(isNaN(val)==true){
        alert("숫자를 입력해주세요");
        return false;
    }
    else if(val.length!=10){
        alert("정확한 제품 시리얼 넘버를 입력하십시오.");
        return false;
    }
    else{
        var txt = "number_key=gigabyte_korea&number_no="+val;
        txtck(txt);
    }
}
function txtck(txt){
let cm;
    function windowsck(){
        if(window.XMLHttpRequest){
            return new XMLHttpRequest();
        }
    }
    function numberck(){
        if(cm.readyState==XMLHttpRequest.DONE && cm.status==200){
            var num = JSON.parse(this.response);
            if(num=="success_number"){
                alert("해당 코드는 정상적으로 활성화 되었습니다.");
            }
            else if(num=="overlap_number"){
                alert("해당 코드는 이미 등록된 제품입니다.");
            }
            else if(num=="error_number"){
                console.log("비정상적인 코드");
            }
            else{
                console.log("데이터 오류");
            }
        }
    }
    cm=windowsck();
    cm.onreadystatechange=numberck;
    cm.open("POST","nember_check.php",true);
    cm.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    cm.send(txt);
}