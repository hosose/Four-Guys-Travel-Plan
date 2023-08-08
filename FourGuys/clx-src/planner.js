/************************************************
 * planner.js
 * Created at 2023. 8. 3. 오후 2:50:01.
 *
 * @author iedl9
 ************************************************/
/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
var date = 0;

function onBodyLoad(e) {
	app.openDialog("select_date_title", {
		width: 600,
		height: 450
	}, function(dialog) {
		dialog.ready(function(dialogApp) {});
	}).then(function(returnValue) {
		date = JSON.stringify(returnValue);
		app.lookup("loginCheck").send();
	});
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onLoginCheckSubmitSuccess(e) {
	var loginCheck = e.control;
	var container = app.lookup("dateLayout");
	for (var i = 1; i <=date; i++) {
		//udc 동적 생성
		var dateButton = "Day" + i;
		dateButton = new udc.dateButton(dateButton);
		//udc에서 출판한 이미지 경로 앱 속성 지정
		dateButton.btnValue ="Day" + i;
		//생성한 udc를 루트 컨테이너에 부착
		container.addChild(dateButton, {
			height: "53px",
			width: "120px",
			autoSize: "both"
		});
		//udc에서 출판한 이미지 삭제 이벤트 구현
		dateButton.addEventListener("selectDate", function(e) {
			e.control.dispose();
		});
	}
}