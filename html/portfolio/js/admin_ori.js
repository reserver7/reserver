function page_load(){
    const admin_log=[
    ['[ Administrator Page ]'],
    ['<input type="text" name="admin_id" v-model="admin_id" class="inputcss" placeholder="ID">'],
    ['<input type="password" name="admin_pw" v-model="admin_pw" class="inputcss" placeholder="PASSWORD">']
    ];
    Vue.component("ipf",{
        props:["admin_input"],
        template:"<label class='label_css' v-html='admin_input[0]'></label>"
    });
    let admin_btn={
        template:'<label><button class="btncss" @click="admin_btn()">LOGIN</button></label>',
        methods:{
            admin_btn:function(){
                admin.admin_ck();
            }
        }
    }
    
    const admin=new Vue({
        el:"#admin_page",
        data:{
           manager:"manager",
           label_css:"label_css",
           admin_id:"",
           admin_pw:"",
           admin_label:admin_log
        },
        components:{
            "ipfs":admin_btn
        },
        methods:{
            admin_ck:function(){
               if(admin_form.admin_id.value==""){
                    alert("아이디를 입력해 주세요.");
                    admin_form.admin_id.focus();
                    return false;
               }
               else if(admin_form.admin_pw.value==""){
                    alert("패스워드를 입력해 주세요.");
                    admin_form.admin_pw.focus();
                    return false;
               }
               else{
                    admin_form.action="./admin_check.php";
                    admin_form.method="POST";
                    admin_form.submit(); 
               }
            }
        }
    });
}
    /* 관리자 로그인 스크립트 원본파일 */