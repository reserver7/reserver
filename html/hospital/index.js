$(function(){
    _in = {
        lat: "", 
        lng: "",
        items: [],
        assign: [],
        clickHospitalInfo: [],
        hList: [],
    }

    $('#js_DBList').on('click','.js_DBBtn',(e)=>{
        const idx = _in.hList.filter((o) => {
            return o.id === e.target.id;
        });

        let clickHospitalInfo =   {
            "flag": false,
        }

        $.ajax({
            url: `https://hospital-86296-default-rtdb.firebaseio.com/info/${idx[0].key}.json`,
            type: 'DELETE',
            crossDomain: true,
            // data: JSON.stringify(clickHospitalInfo),
            dataType: 'json',
            contentType : 'application/json;charset=UTF-8',
            success : function (data) {
                DBListFn();
            },
            error : function(request, status, error) {
                console.log(error);
            },
            beforeSend: function() {
                $('.ly_blackBox').css("display", "flex");
            },
            complete : function() {
                $('.ly_blackBox').css("display", "none");
            }
        });

    });


    // firebase에 저장된 리스트 불러오는 api
    function DBListFn() {
        $.ajax({
            url: 'https://hospital-86296-default-rtdb.firebaseio.com/info.json',
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            contentType : 'application/json;charset=UTF-8',
            success : function (data) {
                let html = "";
                let arr = [];

                arr.push(Object.keys(data));

                let strArr = Object.keys(data).map(item => data[item]);

                for(let i=0; i<arr[0].length; i++){
                    strArr[i].key = arr[0][i];
                }

                _in.hList = strArr;

                if(data){
                    _in.hList.forEach((e) => {
                        if( e.flag ){
                            html += '<div class="ly_bodyRight_item">';
                            html += '<div class="ly_bodyRight_itemWrite">';
                            html += '<div>'+ e.name +'</div>';
                            html += '<div>'+ e.tel +'</div>';
                            html += '</div>';
                            html += '<div class="un_btn js_DBBtn" id="'+ e.id +'">삭제</div>';
                            html += '</div>';
                        }
                    });

                    $('#js_DBList').html(html);
                } 
            },
            error : function(request, status, error) {
                console.log(error);
            },
            complete: function () {
                $('.ly_blackBox').css("display", "none");
            },
        });
    }

    // 현재 위치에 가까운 병원 리스트 불러오는 api
    function hospital() {

        var xhr = new XMLHttpRequest();
        var url = 'http://apis.data.go.kr/B551182/hospInfoService1/getHospBasisList1'; /*URL*/
        var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'aif9zIBupMC59iBPP8RSXgt6KXZDmXMthW3FgwmqOZLxL%2FugLUEDkQOqCztaNANAPnN9TuCYkRYpvYv71UA9jw%3D%3D&_type=json'; /*Service Key*/
        queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000'); /**/
        queryParams += '&' + encodeURIComponent('xPos') + '=' + encodeURIComponent(_in.lng); /**/
        queryParams += '&' + encodeURIComponent('yPos') + '=' + encodeURIComponent(_in.lat); /**/
        queryParams += '&' + encodeURIComponent('radius') + '=' + encodeURIComponent('1000'); /**/
        xhr.open('GET', url + queryParams);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                _in.items = JSON.parse(this.responseText).response.body.items.item;

                let packingItemAssign = {};
                let packingItem = [];

                if( _in.items.length > 0 && _in.items !== "undefined" && _in.items !== undefined && _in.items ){
                    _in.items.map((item) => {
                        packingItemAssign = {
                            content: `<div class ="placeinfo_wrap"><span class="placeinfoLeft"></span><span class="placeinfoCenter">${item.yadmNm}</span><span class="placeinfoRight"></span></div>`,
                            lat: Number(item.YPos),
                            lng: Number(item.XPos),
                        };
                        packingItem.push(packingItemAssign);
                    });
                    _in.assign = packingItem;

                    drawMap(_in.lat, _in.lng);
                } else {
                    alert("현재 위치를 찾을 수 없습니다.");
                }

            }
        };

        xhr.send('');
    }

    // 카카오 지도 그리는 api
    function drawMap(lat,lng) {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
            mapOption = { 
                center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        DBListFn();

        _in.assign.forEach(el => {
            // 마커를 생성합니다
            let marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: new kakao.maps.LatLng(el.lat, el.lng), // 마커의 위치
                content: el.content,
            });

            let position = new kakao.maps.LatLng(el.lat, el.lng);

            let customOverlay = new kakao.maps.CustomOverlay({
                position: position,
                content: el.content,
            });

            let infowindow = new kakao.maps.InfoWindow({
                content: el.content // 인포윈도우에 표시할 내용
            });

            let customClick = new kakao.maps.CustomOverlay({
                position: position,
                content: el.content,
            });

            // 인포윈도우를 여는 클로저를 만드는 Fn 
            function makeOverListener(map, marker, infowindow) {
                return () => {
                    infowindow.open(map, marker);
                    $('.placeinfo_wrap').parent().parent().css({
                        "background": "none",
                        "border": "none"
                    });
                    $('.placeinfo_wrap').parent().prev().css("top", "22px");
                };
            }

            // 인포윈도우를 닫는 클로저를 만드는 Fn
            function makeOutListener(infowindow) {
                return () => {
                    infowindow.close();
                };
            }

            // 지도 클릭시 Fn
            function makeClickListener(customClick) {
                return () => {
                    let hNameText = customClick.cc;
                    let hNameFirst = hNameText.split('class="placeinfoCenter">');
                    let hNameLast = hNameFirst[1].split('</span><span class="placeinfoRight">');
                    let hName = hNameLast[0];
                    let html = "";
                    
                    const hospitalInfo = _in.items.filter( (e) => {
                        return hName === e.yadmNm;
                    });

                    hospitalInfo.uuid = getUUID();

                    html += '<div class="ly_bodtLeft_bottomFlex">';
                    html += '<div>';
                    html += '<div id="js_hName">'+ hospitalInfo[0].yadmNm +'</div>';
                    html += '<div id="js_hInfo">'+ hospitalInfo[0].addr +' ('+ hospitalInfo[0].XPos +','+ hospitalInfo[0].XPos +')</div>';
                    html += '</div>';
                    html += '<div>';
                    html += '<div class="un_btn__sm" id="js_save">저장</div>';
                    html += '<div class="un_btn__sm" id="js_close">취소</div>';
                    html += '</div>';
                    html += '</div>';

                    if( $('#js_hospitalBox').find(".ly_bodtLeft_bottomFlex").length === 0 ){
                        $('#js_hospitalBox').html(html);
                    } else {
                        $('#js_hospitalBox').empty();
                        $('#js_hospitalBox').html(html);
                    }

                    $('#map').css('height', "500px");
                    infoBoxBtnFn();

                    _in.clickHospitalInfo = hospitalInfo;
                };
            }

            kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
            kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
            kakao.maps.event.addListener(marker, 'click', makeClickListener(customClick));
        });
    }

    // getMyGps : gps로 사용자의 현재 위치 받아오는 Fn, Promise를 리턴하는 방식
    function getMyGps() {
        let gpsOptions = {
            enableHighAccuracy: true,
            timeout: 5000
        };

        return new Promise((resolve, rejected) => {
            navigator.geolocation.getCurrentPosition(resolve, rejected);
        });
    }      

    // mapDrawer : 지도가 있는 창이 열렸을 때, 지도 div에 카카오맵 지도를 그려 주는 Fn
    async function mapDrawer() {
        try {
            let position = await getMyGps();
            _in.lat = position.coords.latitude;
            _in.lng = position.coords.longitude;
            hospital();

        } catch (err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }
    }

    // 지도에서 클릭한 병원 정보 save api
    function infoBoxBtnFn() {
        $('#js_save').click( ()=> {

            const idx = _in.hList.filter((o) => {
                return o.id === _in.clickHospitalInfo.uuid || o.name === _in.clickHospitalInfo[0].yadmNm;
            });

            if(idx.length === 0){

                let clickHospitalInfo =   {
                    "id": _in.clickHospitalInfo.uuid,
                    "name": _in.clickHospitalInfo[0].yadmNm,
                    "tel": _in.clickHospitalInfo[0].telno,
                    "flag": true,
                }

                $.ajax({
                    url: 'https://hospital-86296-default-rtdb.firebaseio.com/info.json',
                    type: 'POST',
                    crossDomain: true,
                    data: JSON.stringify(clickHospitalInfo),
                    dataType: 'json',
                    contentType : 'application/json;charset=UTF-8',
                    success : function (data) {
                        DBListFn();
                    },
                    error : function(request, status, error) {
                        console.log(error);
                    },
                    beforeSend: function() {
                        $('.ly_blackBox').css("display", "flex");
                    },
                    complete : function() {
                        $('.ly_blackBox').css("display", "none");
                    }
                });
            } else {
                alert("이미 저장된 정보 입니다.");
            }
        });

        $('#js_close').click( ()=> {
            $('#js_hospitalBox').empty();
            $('#map').css('height', "600px");
        });
    }

    mapDrawer();
});

// UUID v4 generator in JavaScript (RFC4122 compliant)
function getUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 3 | 8);
        return v.toString(16);
    });
}