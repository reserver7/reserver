const $menus = ["Prologue","Skills","Portfolio","Infomation","Contact"];
const $skills = [
    {"HTML": "DOCTYPE을 이해하고 디자인에 맞춰 작업이 가능합니다. 또한 name, id, class 분류를 알고 있으며, Method에 대한 POST, GET에 대한 원리도 알고 있습니다. META를 이용한 SEO 작업과 Markup, Semantic Web등 다양한 요소를 구성할 수 있습니다."},
    {"CSS": "CSS의 다양한 Rule Set을 사용할 수 있으며, 각종 media 쿼리를 이용하여 여러가지 Device 제작 경험도 풍부합니다. 그 외에 Import, Keyframe, 각종 스타일 선언 방식까지 완벽하게 알고 있으며, 수정 및 유지보수도 경험이 있습니다."},
    {"Javascript": "함수, 메소드, 클래스, 프로토타입, 이벤트, 루프 클로져, 디바운싱등 다양하게 응용이 가능하며, 파라미터 데이터 활용과 Back-end와의 작업도 풍부합니다. ES5를 기본으로 하고 있습니다."},
    {"Jquery": "Javascript를 기본으로 하여, DOM, Node에 대한 다양한 활용 프로그램이 가능하며, 웹 속도와 효율을 고려한 Jquery엔진 커스텀을 할 수 있습니다. 배열에 대한 중급 이상의 활용 능력을 가지고 있으며, 플러그인 API활용을 할 수 있습니다."},
    {"Ajax": "동기화, 비동기화 통신이 가능하며 동적인 화면 출력 및 표시 정보와 상호작용을 할 수 있는 DOM, NODE 모두 사용이 가능합니다. 기본적인 통신개념을 알고 있으며, Javascript, Jquery 모두 활용 할 수 있습니다. XML, JSON 파일에 대한 파서 개념도 있으며, send 함수를 통해 데이터 전송도 가능합니다."},
    {"Scss": "기본적으로 전처리기로 작성이 가능하며, CSS 컴파일도 할 수 있습니다. 그 외에 코드 중복을 최소화 하며 문법에 대한 작성 및 유지보수 경험이 있습니다. 변수, 함수 모두 구현이 가능합니다."},
    {"Vue": "Template 과 Component를 사용할 수 있으며, 인스턴스 생성, 화면 부착, 갱신, 소멸 단계로 구분하여 사용할 수 있습니다. 배열 데이터를 기본으로 화면 렌더링을 하였으며, 각종 이벤트 함수를 응용 할 수 있습니다."},
    {"Git": "분산형 관리 시스템을 경험 하였으며, 프로젝트 구성 및 Push, Pull request 같은 이벤트에 반응하여 자동으로 직업(배포 등)을 경험 하였습니다. Git 기본 사용공간은 Public을 기본으로 하였습니다."},
    {"XML & JSON": "태그와 다차원 배열 모두 경험 하였으며, Mysql Database 값에 대한 파싱을 통한 데이터 출력 지식도 습득 하였습니다."},
    {"API": "도로명 주소, 지도, 결제 시스템등 다양한 API 경험이 있으며, 웹사이트 조건에 맞게 커스텀도 가능합니다."},
    {"Responsive Web": "화면 너비에 따라 유동적으로 레이아웃을 변화 시킬 수 있으며, Cross Browsing 기술 플랫폼으로 제작할 수 있습니다."},
    {"Etc": "Visual Studio Code 에디터를 주로 사용하였으며, FTP, Host, Webmaster-tools등 전반적인 웹 지식을 가지고 있습니다. 그 외에 관리자 페이지에 대한 적용 원리 지식도 있습니다."}
];
const $portfolio = [
    {"title":"MINIMAL 쇼핑몰","subtitle":"쇼핑몰 메인","tools":"HTML, CSS, Javascript, Jquery, Ajax, Json", "Day":"3 Day","Concept":"구매하는 소비자들의 패턴과 원스톱 쇼핑 형태가 인기가 부각 되고 있습니다. 실제 쇼핑몰과 같은 구성으로 제작되었으며, 전체적인 디자인은 실제 웹 디자이너가 작업을 해주었습니다. 그 외에 JSON 파싱과 파서 모두 Back-end와 작업을 하였습니다.","url":"http://reserver1.dothome.co.kr/portfolio/shop/index.html","img":"./img/0.png"},
    {"title":"로그인 페이지","subtitle":"회원 로드인 & 비회원 주문조회","tools":"HTML, CSS, Javascript, Ajax, Json", "Day":"1 Day","Concept":"쇼핑몰 가입 고객 및 비회원일 경우 주문자명, 주문번호로 상품을 조회 할 수 있는 페이지를 구성 하였습니다. 실제 Database에 있는 회원 정보를 이용하여 로그인이 작동 되도록 Back-end와 협업하였습니다.","url":"http://reserver1.dothome.co.kr/portfolio/shop/login.html","img":"./img/1.png"},
    {"title":"회원가입 페이지1","subtitle":"약관 동의 페이지","tools":"HTML, CSS, Javascript, TXT", "Day":"1 Day","Concept":"쇼핑몰 가입시 회원정보에 대한 법적 약관동의 페이지를 제작하였습니다. 해당 약관 내용은 txt 파일을 load 하였습니다.","url":"http://reserver1.dothome.co.kr/portfolio/shop/agree.html","img":"./img/2.png"},
    {"title":"회원가입 페이지2","subtitle":"DB연동 회원가입 페이지","tools":"HTML, CSS, Javascript, Jquery, 도로명 주소 API, Ajax", "Day":"3 Day","Concept":"Database를 이용하여 Back-end와 비동기식 데이터를 주고 받는 형태로 하였으며, 도로명 API를 사용하여 실제 주소가 입력 되도록 하였습니다. 아이디는 실제 중복확인 가능하도록 제작 되었습니다.","url":"http://reserver1.dothome.co.kr/portfolio/shop/join.html","img":"./img/3.png"},
    {"title":"이벤트 페이지","subtitle":"숨은그림 찾기","tools":"HTML, CSS, Jquery", "Day":"1 Day","Concept":"회원 전용 이벤트 패이지이며, 상품 홍보 및 트래픽 증가 효과를 모두 볼 수 있도록 하는 이벤트 페이지 입니다.","url":"http://reserver1.dothome.co.kr/portfolio/shop/event.html","img":"./img/4.png"},
    {"title":"Q&A 페이지","subtitle":"상품문의 고객게시판","tools":"HTML, SCSS, Jquery, Ajax, Json", "Day":"2 Day","Concept":"고객 상품문의 Q&A 게시판을 제작하였으며, Database에서 실제 저장된 데이터를 Json으로 파서하여 비밀글, 일반글로 나누어서 출력 되도록 하였습니다. 또한 실제 입력한 날짜를 기준으로 조회되는 기능도 추가 하였습니다.","url":"http://reserver1.dothome.co.kr/portfolio/shop/qa.html","img":"./img/5.png"},
    {"title":"Q&A 입력 페이지","subtitle":"상품문의 입력폼 페이지","tools":"HTML, SCSS, Jquery, Ajax, Json, CKeditor", "Day":"3 Day","Concept":"CKdeitor을 이용하여 문의내용에 사용하였으며, 최대 2개 이미지 파일 첨부기능도 추가하였습니다. 자동등록방지는 Back-end가 제작한 랜덤함수 값을 불러와서 출력 하였습니다.","url":"http://reserver1.dothome.co.kr/portfolio/shop/qawrite.html","img":"./img/6.png"},
    {"title":"상품 상세 페이지","subtitle":"DB연동 상품 상세페이지","tools":"HTML, SCSS, Jquery, Json, TXT", "Day":"3 Day","Concept":"해당 페이지는 관리자 페이지와 연동하여 DB에 저장된 내용을 배열로 받아서 상품고유 파라미터 번호로 각각의 상품 상세페이지가 나오도록 제작된 페이지 입니다.","url":"http://reserver1.dothome.co.kr/portfolio/shop/product_view.html?goodsno=11278197","img":"./img/7.png"},
    {"title":"상품 구매 페이지","subtitle":"주문자, 배송정보등 다양한 입력값을 받는 구매 페이지","tools":"HTML, SCSS, Jquery, 도로명 주소 API", "Day":"4 Day","Concept":"해당 상품을 구매확정 하는 페이지이며, 주문자 정보, 배송정보, 최종 결제금액, 일반결제, 신용카드 결제등 다양한 UI로 제작된 페이지이며, product_view.html과 연동되는 페이지 입니다.","url":"http://reserver1.dothome.co.kr/portfolio/shop/buy.html","img":"./img/8.png"},
    {"title":"상품 결제 페이지","subtitle":"이니시스 결제 API와 연동되는 결제 페이지","tools":"HTML, SCSS, Jquery, 결제시스템 API", "Day":"5 Day","Concept":"이니시스 결제 API 모듈을 이용하였으며, Test계정으로 실제 결제가 될 수 있도록 하였습니다. Back-end와 협업한 페이지 입니다.","url":"http://reserver1.dothome.co.kr/portfolio/shop/pay.html","img":"./img/9.png"},
    {"title":"관리자 페이지","subtitle":"쇼핑몰 관리자 페이지","tools":"HTML, SCSS, Vue", "Day":"5 Day","Concept":"쇼핑몰 내부시스템 페이지이며, 관리자만 접근이 가능하도록 하였습니다. 메뉴 활성 부분은 관리자 메인과 상품관리만 제작하였습니다. Back-end와 협업한 페이지 입니다.","url":"http://reserver1.dothome.co.kr/portfolio/shop/admin.html","img":"./img/10.png"},
    {"title":"영상 이벤트 페이지","subtitle":"상품 영상을 배경으로 한 이벤트 참여 페이지","tools":"HTML, CSS, Javascript, Ajax, Daum-pot Encoder", "Day":"2 Day","Concept":"영상을 팟인코더로 편집하고 mp4 파일을 이용하여 HTML 결합하였습니다. 그 외에 트레픽 용량을 최소화 하기 위해 영상은 3MB 이하로 사용했습니다. 사용자 최종 입력이 완료 된 후에 해당 입력값을 Back-end에게 데이터를 전달되도록 하였습니다.","url":"http://reserver1.dothome.co.kr/portfolio/event.html","img":"./img/11.png"},
    {"title":"PC 전용 롤링배너","subtitle":"Jquery를 이용한 롤링배너 페이지","tools":"HTML, CSS, Jquery", "Day":"0.5 Day","Concept":"bxslider같은 플러그인 프로그램이 아닌 직접 개발한 롤링 배너 페이지 입니다.","url":"http://reserver1.dothome.co.kr/portfolio/banner.html","img":"./img/12.png"},
    {"title":"PC 전용 Fade배너","subtitle":"Jquery를 이용한 Fade배너 페이지","tools":"HTML, CSS, Jquery", "Day":"0.5 Day","Concept":"bxslider같은 플러그인 프로그램이 아닌 직접 개발한 Fade 배너 페이지 입니다. ","url":"http://reserver1.dothome.co.kr/portfolio/banner2.html","img":"./img/13.png"},
    {"title":"Mobile 전용 Swipe배너","subtitle":"모바일 전용 스왑기능이 있는 배너 페이지","tools":"HTML, CSS, Jquery, Mobile-Jquery", "Day":"0.5 Day","Concept":"bxslider같은 플러그인 프로그램이 아닌 직접 개발한 Swipe배너 페이지 입니다.","url":"http://reserver1.dothome.co.kr/portfolio/banner3.html","img":"./img/14.png"},
    {"title":"Mobile 전용 쇼핑몰","subtitle":"모바일 전용 기가바이트 쇼핑몰","tools":"HTML, SCSS, Javascript, Jquery, Mobile-Jquery, Ajax, Json", "Day":"1 Day","Concept":"슬라이드 메뉴 및 상품 검색기능과 제품 시리얼 넘버 조회 기능도 작동 되는 모바일 전용 기가바이트 쇼핑몰을 제작하였습니다.","url":"http://reserver1.dothome.co.kr/home/index.html","img":"./img/15.png"},
    {"title":"룰렛 이벤트 페이지","subtitle":"룰렛 이벤트 페이지","tools":"HTML, Jquery", "Day":"1 Day","Concept":"룰렛이 돌아가는 이벤트 페이지 입니다. 주로 Jquery를 사용하였습니다.","url":"http://reserver1.dothome.co.kr/portfolio/roulette.html","img":"./img/16.png"},
    {"title":"Mobile 전용 룰렛 페이지","subtitle":"모바일 전용 룰렛 이벤트 페이지","tools":"HTML, Jquery, Mobile-Jquery", "Day":"1 Day","Concept":"모바일 전용 룰렛이 돌아가는 이벤트 페이지 입니다. 주로 Jquery를 사용하였습니다.","url":"http://reserver1.dothome.co.kr/portfolio/m_roulette.html","img":"./img/16.png"}
]
const $level = [
    {"HTML&CSS":"100%"},
    {"Javascript":"80%"},
    {"Jquery":"80%"},
    {"Ajax":"80%"},
    {"SCSS":"90%"},
    {"Node & Vue.js":"65%"},
    {"Git":"60%"}
]
