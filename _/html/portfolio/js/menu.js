$(function(){
let $menus =[
    
    {"main_menu":"LIVING","menu_list":[
         "러그매트",
         "수납",
         "행거",
         "목욕용품",
         "청소용품",
         "욕실용품"
        ]
    },
    {"main_menu":"KITCHEN","menu_list":[
         "식기",
         "조리",
         "수저세트"
        ]
    },
    {"main_menu":"DIGITAL","menu_list":[
        "핸드폰케이스",
         "태블릿케이스",
         "필름",
         "생활가전"
        ]
    },
    {"main_menu":"KIDS","menu_list":[
        ""
        ]
    },
    {"main_menu":"STUDY","menu_list":[
        ""
        ]
    },
    
    {"main_menu":"OFFICE","menu_list":[
        "달력",
        "용지"
        ]
    },
    {"main_menu":"BATH","menu_list":[
        "테이블",
        "선반"
        ]
    },
    {"main_menu":"FABRIC","menu_list":[
        "침구",
        "커튼",
        "쿠션",
        "방석"
        ]
    }
];
/* 로고 클릭 */
$("#logo_span").click(function(){
    location.href = "../shop/index.html";
});

/* 메뉴 출력 */
var $menu_ea = $menus.length;
var $html="";
var $shtml="";
var $html2="";
var $w = 0;
var $f;
var $num = 0;
while($w<$menu_ea){
    $html ="<li>"+$menus[$w]["main_menu"]+"</li>";
    $("#main_mulist").append($html);
    var $smenu_ea = $menus[$w]["menu_list"].length;
    if($smenu_ea > 1){
        $shtml ="<ul class='smenu_list'></ul>";
        $("#main_mulist>li").eq($w).append($shtml);
        //console.log($(".smenu_list").eq($W));
        for($f=0;$f<$smenu_ea;$f++){
        //console.log($menus[$w]["menu_list"][$f]);
            $html2 ='<li>'+$menus[$w]["menu_list"][$f]+'</li>';
            $(".smenu_list").eq($num).append($html2);
            //console.log($num);
        }
        $num++;
    }
    $w++;
}

/* 메뉴 마우스 */
$("#main_mulist>li").bind({
    "mouseenter":function(){
        var $menu_mouse = $(this).index();
        $("#main_mulist>li:eq("+$menu_mouse+")>ul").stop().slideDown();
        $("#main_mulist>li:eq("+$menu_mouse+")").css("color","cornflowerblue");
        $("#main_mulist>li:eq("+$menu_mouse+")>ul").css("border-top","2px solid cornflowerblue");
    },
    "mouseleave":function(){
        var $menu_mouse = $(this).index();
        $("#main_mulist>li:eq("+$menu_mouse+")>ul").stop().slideUp();
        $("#main_mulist>li:eq("+$menu_mouse+")").css("color","black");
    }
});

    //로그인~마이페이지
    $("#top_category>li").click(function(){
        let $menu_no = $(this).attr("link");
        let $url_pages = "";
        switch($menu_no){

            case "0": //로그인
            $url_pages = "./login.html";
            break;

            case "1": //회원가입
            $url_pages = "./agree.html";
            break;

            case "2": //로그아웃
            $url_pages = "./logout.html";
            break;

            case "3": //장바구니
            $url_pages = "./cart.html";
            break;

            case "4": //주문조회
            $url_pages = "./order.html";
            break;

            case "5": //마이페이지
            $url_pages = "./mypage.html";
            break;
        }
        location.href = $url_pages;
    });
});