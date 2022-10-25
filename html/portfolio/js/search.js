$(function(){
    $("#av_close").click(function(){
        $(".headercss").stop().slideUp();
    });

    /* 상품검색 부분 */
    $("#search_btn").click(function(){
        if($("#search").val()==""){
            alert("검색할 상품명을 입력해주세요!");
            $("#search").focus();
        }
    });
});