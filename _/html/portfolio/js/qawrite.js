//문의하기 입력검토 사항
function write_btn(){
    var ck_ok = write_ck();
    if(ck_ok[2]==1){
        alert(ck_ok[0]);
        ck_ok[1].focus();
        return false;
    }
    else{
        qa.submit();
    } 
}
function write_ck(){
    var msg = "";
    var focus = "";
    var re = "";
    if(qa.qa_subject.value==""){
        msg = "제목을 입력해 주세요.";
        focus = qa.qa_subject;
        re = 1;
    }
    else if(qa.qa_product.value==""){
        msg = "상품을 선택해 주세요.";
        focus = qa.qa_product;
        re = 1;
    }
    else if(qa.qa_part.value==""){
        msg = "카테고리를 선택해 주세요.";
        focus = qa.qa_part;
        re = 1;
    }
    else{
        if(qa.qa_writer.value==""){
            msg = "작성자 이름을 입력해 주세요.";
            focus = qa.qa_writer;
            re = 1;
        }
        else{
            if(qa.qa_passwd.value==""){
                msg = "비밀번호를 입력해 주세요.";
                focus = qa.qa_passwd;
                re = 1;
            }
            else{
                var editor = CKEDITOR.instances['qatext'];
                if(editor.getData()==""){
                    msg = "질문 내용을 입력해 주세요.";
                    focus = qa.qatext;
                    re = 1;
                }
                else{
                    if(qa.qa_code.value==""){
                        msg = "보안코드를 입력해 주세요.";
                        focus = qa.qa_code;
                        re = 1;
                    }
                    else{
                        if(qa.qa_code.value.length<6){
                            msg = "보안코드 6자리를 정확히 입력해주세요.";
                            focus = qa.qa_code;
                            re = 1;
                        }
                    }
                }
            }
        }
    }
    return[msg,focus,re];
}
//문의하기 입력검토 사항 코드 종료
//보안코드 암호
    function code(){
        document.getElementById("code_img").src="code.php?waste="+Math.random();           
    }

    //상품 리스트 팝업 및 첨부파일 노드 추가 부분
    $(function(){
        var $ftime = setInterval(function(){
            $("#qa_wf1").val($("#write_file1").val());
            $("#qa_wf2").val($("#write_file2").val());
        },500);

        $("#add_btn").one("click",(function(){
            var $fileadd = '<span></span>\
            <label>\
                <input type="text" id="qa_wf2" readonly>\
                <label class="write_btn1" for="write_file2">\
                    <em>찾아보기</em>\
                    <input type="file" id="write_file2" name="qa_file2" style="display:none;">\
                </label> \
                <button type="button" id="remove_btn"><em class="embtn2">삭제</em></button>\
                </label>';
            $("#add_app").append($fileadd);

            $("#remove_btn").click(function(){
                $("#add_app>span").eq(1).remove();
                $("#add_app>label").eq(1).remove();
            });
        }));


        //블랙스크린 및 상품 레이어 팝업
        $("#product_list").click(function(){
            $("#shadow").stop().fadeIn(300);
            $("#p_list").stop().fadeIn(300);
        });

        $("#p_close").click(function(){
            $("#shadow").stop().fadeOut(300);
            $("#p_list").stop().fadeOut(300);
        });

        //상품리스트 가져오는 부분
        $.ajax({
            url:"./product/best_pd.json",
            cache:false,
            type:"GET",
            dataType:"json",
            success:function($result){
                $.fn.pop_list($result);
            },
            error:function(){
                console.log("데이터 오류");
            }
        });

        $.fn.pop_list = function($result){
            var $html="";
            var $money;
            $($result.best_product).each(function($node,$key){
                $money=Number($key.product_money).toLocaleString();
                var $ids="pno"+$node;
                $html="<ol class='list_viewol2' pdata='"+$key.product_nm+"'><li><input type='radio' name='pno' id="+$ids+" value="+$node+"></li>\
                <li><label for="+$ids+"><img src="+$key.product_img+" class='pimgs'>"+$key.product_nm+"</label></li>\
                <li>"+$money+" 원"+"</li></ol> "
                $("#list_view").append($html);

            });
            $("#list_view > .list_viewol2").click(function(){
                $("#shadow").fadeOut(300);
                $("#p_list").fadeOut(300);
                $("#qa_product").val($(this).attr("pdata"));
            });
        }
    });