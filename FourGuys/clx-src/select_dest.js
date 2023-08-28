/************************************************
 * select_dest.js
 * Created at 2023. 8. 3. 오후 4:51:13.
 *
 * @author USER
 ************************************************/

/*
 * "JEJU" 버튼(jeju)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onJejuClick(e) {
	var jeju = e.control;
	var intro = "제주도, 그림 같은 아름다움이 넘치는 섬으로 대한민국에서 가장 특별한 곳 중 하나입니다.\n" + "맑고 푸른 바다, 푸른 하늘, 그리고 끝없이 펼쳐진 녹색 목초지가 만들어내는 풍경은 누구에게나 꿈꾸던 휴양지의 모습입니다.\n" +
		"고유한 문화와 전통이 살아 숨쉬는 곳입니다.\n" +
		"제주도는 그림 같은 자연과 다채로운 문화로 여행자들에게 환상적인 경험을 선사하는 곳입니다. 현대적인 편의시설과 전통이 공존하는 이곳에서 특별한 추억을 만들어보세요. 제주도의 아름다움은 당신을 매료시킬 것입니다."
	var initValue = {
		"msg": intro
	}
	app.openDialog("dest-popup", {
		width: 600,
		height: 450
	}, function(dialog) {
		dialog.ready(function(dialogApp) {
			// 필요한 경우, 다이얼로그의 앱이 초기화 된 후, 앱 속성을 전달하십시오.
			dialogApp.initValue = initValue;
		});
	}).then(function(returnValue) {
		alert(JSON.stringify(returnValue));
	});
	
}

/*
 * "SEOUL" 버튼(seoul)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onSeoulClick(e){
	var seoul = e.control;
	app.openDialog("alert", {width : 300, height : 160 ,headerVisible: false}, function(dialog){
		dialog.ready(function(dialogApp){
			// 필요한 경우, 다이얼로그의 앱이 초기화 된 후, 앱 속성을 전달하십시오.
		});
	}).then(function(returnValue){
		;
	});
}

/*
 * "JAPAN" 버튼(japan)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onJapanClick(e){
	var japan = e.control;
	app.openDialog("alert", {width : 400, height : 300 ,headerVisible: false, modal: true}, function(dialog){
		dialog.ready(function(dialogApp){
			// 필요한 경우, 다이얼로그의 앱이 초기화 된 후, 앱 속성을 전달하십시오.
		});
	}).then(function(returnValue){
		;
	});
}

/*
 * "VIETNAM" 버튼(vietnam)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onVietnamClick(e){
	var vietnam = e.control;
	app.openDialog("alert", {width : 400, height : 300 ,headerVisible: false, modal: true}, function(dialog){
		dialog.ready(function(dialogApp){
			// 필요한 경우, 다이얼로그의 앱이 초기화 된 후, 앱 속성을 전달하십시오.
		});
	}).then(function(returnValue){
		;
	});
}
