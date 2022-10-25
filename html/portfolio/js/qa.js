$(function(){
    var $sdate = window.location.search.indexOf("?page=");
    var $jsonfile = "";
    if($sdate=="" || $sdate!="-1"){ //전체 데이터
        $jsonfile = "./qalist.json";
    }
    else{   //조회 기간 데이터
        $jsonfile = "./qalist_search.json";
    }  
    $.ajax({
        url:$jsonfile,
        cache:false,
        type:"GET",
        dataType:"json",
        success:function($qa_rs){
            $.fn.board_list($qa_rs);
        },
        error:function(){
            console.log("데이터 오류");
        }
    });

    $.fn.board_list = function($qa_rs){
        var $html = "";
        var $date,$aws,$aws_ck,$secret;
        if($qa_rs.q_list[0]==""){
            $html = "<ul class='qa_list'>\
                    <li style='width: 100%;''>등록된 게시물이 없습니다.</li>\
                    </ul>";
            $("#qa_bottom").append($html);
        }
        else{
            var $pageon = location.search.split("page=");
            let $page = 10;  //한페이지당 출력갯수
            let $pageno = null;
            $pageno = 1;
            var $spage,$epage;
            if(typeof($pageon[1])!="undefined"){
                if($pageon[1]=="1"){
                    $spage = 0;
                    console.log($spage);
                }
                else{
                    $spage = (Number($pageon[1])-1) * $page;
                    console.log($spage);
                }
                $epage = Number($pageon[1]) * $page;
                console.log($epage);
            }
            else{
                $spage = 0;
                $epage = $page * 1;
            }
            $($qa_rs.q_list[0]).each(function($node,$key){
                $date = $key.qa_indate.substr(0,10);
                $aws = $key.qa_aws;
                $aws=="N"?($aws_ck="답변대기"):($aws_ck="답변완료"); 
                $key.qa_check=="N"?($secret=$key.qa_subject):($secret = "<img src='./images/icon_secret.png'>"+$key.qa_subject);
                if($spage <= $node && $epage > $node){
                $html = "<ul class='qa_list'>\
                    <li>"+$date+"</li>\
                    <li>"+$key.qa_part+"</li>\
                    <li class='qaview' idx="+$key.qidx+">"+$secret+"</li>\
                    <li>"+$key.qa_writer+"</li>\
                    <li>"+$aws_ck+"</li>\
                    </ul>";
                    $("#qa_bottom").append($html);
                }
            });
            
            // 페이징 번호
            var $page_ea = Object.keys($qa_rs.q_list[0]).length;
            $pageno = Math.ceil($page_ea / $page);
            console.log($pageno);
            var $w = 1;
            while($w<=$pageno){
                $pagehtml = "<li pno='"+ $w +"'>"+ $w +"</li> ";
                $("#board_page").append($pagehtml);
                $w++;
            }

            if(typeof($pageon[1])!="undefined"){
                $("#board_page>li").css({
                    "background-color":"#fff",
                    "color":"#000"
                });
                $("#board_page>li").eq($pageon[1]-1).css({
                    "background-color":"rgb(43, 42, 42)",
                    "color":"#fff"
                });
            }
            else{
                $("#board_page>li").eq(0).css({
                    "background-color":"rgb(43, 42, 42)",
                    "color":"#fff"
                });
            }

            $("#board_page>li").click(function(){
                var $pno = $(this).attr("pno");
                var $lo_search = location.search.indexOf("date");
                if($lo_search==-1){
                    location.href = './qa.html?page='+$pno;
                }
                else{
                    var $lo_search2 = location.search.split("&page");
                    location.href = './qa.html'+$lo_search2[0]+'&page='+$pno;
                }
            });
        }
        $(".qaview").click(function(){
            var $idx = $(this).attr("idx");
            location.href = "./qaview.html?idx="+$idx;
        });
    };

    $("#datepicker1").datepicker();
    $("#datepicker2").datepicker();
    var $newdate = "";
    $.fn.add_day = function($s,$e){ //날짜 검색 및 계산 하여 범위 조정 함수
    if($s!=""){
        $newdate = new Date($s);
    }
    else{
        $newdate = new Date(); //"Tue Jan 05 2021 10:11:13 GMT+0900"
    }
    //Date.parse : 2021-01-05T10:11:13
    var $today = new Date(Date.parse($newdate) - $e * 1000 * 60 * 60 * 24);
    //1000=1초, 초 : 60, 분 : 60, 시 : 24  == 86400000
    var $month = $today.getMonth()+1;//getMonth 0~11까지 출력 1월:숫자 0 (+1을 사용해야 함)
    if($month < 10){
        $month = "0" + $month;  //1~9까지는 01,02 형식으로 출력하기 위해서 사용함
    }
    var $date = $today.getDate();
    if($date < 10){
        $date = "0" + $date; //1~9까지는 01,02 형식으로 출력하기 위해서 사용함
    }
    var $start_today = $today.getFullYear() +"-"+ $month +"-"+ $date;
    var $end_today = $today.getFullYear() +"-"+ $month +"-"+ $date;
        return [$start_today,$end_today]; //배열로 리턴 시킴
    }
    var $adds = $.fn.add_day("",0);

    $("#datepicker1").val($adds[0]);
    $("#datepicker2").val($adds[1]);

    $("#qa_contact").click(function(){
        var $qa_date1 = Number($("#datepicker1").val().replace(/-/g,""));
        var $qa_date2 = Number($("#datepicker2").val().replace(/-/g,""));
        if($qa_date1 > $qa_date2){
            alert("시작일자 이후로 검색이 가능합니다.");
            return false;
        }
        else{
            var $s_date = $("#datepicker1").val();
            var $e_date = $("#datepicker2").val();
            var $in = $("#searchday>li").attr("lion");
            console.log($in);
            location.href = "./qa.html?s_date="+$s_date+"&e_date="+$e_date;
        }
    });

    $("#searchday>li").click(function(){
        var $day_node = $(this).index();
        if($day_node > 0 && $day_node < 7){
            $("#searchday>li").removeClass("lion");
            $("#searchday>li").eq($day_node).addClass("lion");
            //$("#searchday>li").eq($day_node).attr("lion",$day_node);
        }
        //날짜 검토 조건
        if($("#datepicker2").val()!=""){
            var $sday = $("#datepicker2").val();
            if($day_node==1){
                $adds = $.fn.add_day("",0);
                $("#datepicker1").val($adds[0]);
                $("#datepicker2").val($adds[1]);
            }
            else if($day_node==2){
                $adds = $.fn.add_day($sday,7);  //7일
                $("#datepicker1").val($adds[1]);
            }
            else if($day_node==3){
                $adds = $.fn.add_day($sday,15); //15일
                $("#datepicker1").val($adds[1]);
            }
            else if($day_node==4){
                $adds = $.fn.add_day($sday,30); //한달
                $("#datepicker1").val($adds[1]);
            }
            else if($day_node==5){
                $adds = $.fn.add_day($sday,90); //3달
                $("#datepicker1").val($adds[1]);
            }
            else if($day_node==6){
                $adds = $.fn.add_day($sday,365); //1년
                $("#datepicker1").val($adds[1]);
            }
        }
        else{
            alert("조회를 원하는 종료일자를 선택해 주시길 바랍니다.");
        }
    });
});

function qa(){
    location.href = "./qawrite.html";
}