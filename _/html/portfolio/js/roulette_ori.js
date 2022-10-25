$(document).ready(function(){
    var $check; 
    var $coin = 0;  
    var $pc;    
    var $node;  
    var $array = [
        "할인쿠폰 30%",
        "적립금 500p",
        "할인쿠폰 10%",
        "적립금 500p",
        "할인쿠폰 20%",
        "적립금 1000p",
        "할인쿠폰 10%",
        "적립금 500p"
    ];
    var $r = 0; 
    $("#spanbtn").click(function abc(){ 
        
        $("#spanbtn").unbind("click");    

        $coin = $coin+1;    
        $pc = Math.floor(Math.random()*360);    
        $r += 1800;   
        if($coin>3){    
            $(".blackbox").fadeIn();
            alert("오늘 기회는 모두 끝났습니다.");
        }
        else{   
            var $number = $("#gamerull").rotate($r);
            setTimeout(function(){  
                $("#alert").fadeIn().animate({  
                    "top":"570px"
                },800);
                $("#msgtext").append($array[$number[2]]);
                $("#spanbtn").click(function(){
                    $("#alert").fadeOut().animate({  
                        "top":"550px"
                    },800);
                    $("#msgtext").text("");
                    abc();
                });
            },5000);
        }
    });

    $.fn.rotate = function($r){
        if($pc >= 10 && $pc <= 40){
            $node = 0;
        }
        else if($pc >= 50 && $pc <= 85){
            $node = 1;
        }
        else if($pc >= 95 && $pc <= 130){
            $node = 2;
        }
        else if($pc >= 145 && $pc <= 170){
            $node = 3;
        }
        else if($pc >= 190 && $pc <= 220){
            $node = 4;
        }
        else if($pc >= 240 && $pc <= 270){
            $node = 5;
        }
        else if($pc >= 280 && $pc <= 300){
            $node = 6;
        }
        else if($pc >= 330 && $pc <= 355){
            $node = 7;
        }
        else {  
            $pc = 345;
            $node = 7;
        }

        var $sc = $r + $pc;
        $(this).css("transform","rotate("+ $sc +"deg)");
        
        return [$(this),$pc,$node];
    };

    $("#okbtn").click(function(){
        $("#alert").fadeOut().animate({  
            "top":"550px"
        },800);
    });
});