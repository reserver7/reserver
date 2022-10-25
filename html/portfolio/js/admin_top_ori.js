const menus = ["관리자 정보","배너관리","회원관리","상품관리","상품문의","결제내역"];
    Vue.component("menus-area",{
        props:["lis","index"],
        template:"<li v-bind:title='lis' v-on:click='pages(index);'>{{ lis }}</li>",
        methods:{
            pages:function(seq){
                let urls=null;
                switch(seq){
                    case 0:
                    urls = "./admin_info.html";
                    break;
                    case 1:
                    urls = "./banner_info.html";
                    break;
                    case 2:
                    urls = "./member_list.html";
                    break;
                    case 3:
                    urls = "./product_info.html";
                    break;
                    case 4:
                    urls = "./qa_info.html";
                    break;
                    case 5:
                    urls = "./pay_info.html";
                    break;
                }
                location.href = urls;
            }
        }
    });
    let tops = new Vue({
        el:"#topmenu",
        data:{
            tmsg:"관리자 메인페이지",
            top_class:"top_class",
            t1:"logo_css",
            t2:"menu_css",
            t3:"menu_ul",
            t4:"menu_li",
            menu_list : menus
        },
        methods:{
            main_page:function(){
                location.href = "./admin_main.html";
            }
        }
    });
/* 
    관리자 페이지 top 오리지널
*/