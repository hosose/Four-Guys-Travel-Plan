
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
function onBodyLoad(e) {
	app.openDialog("select_date_title", {
		width: 600,
		height: 450
	}, function(dialog) {
		dialog.ready(function(dialogApp) {});
	}).then(function(returnValue) {
		var plannerNoOutput = app.lookup("plannerNo");
		plannerNoOutput.value = JSON.stringify(returnValue);
		app.lookup("dayBtnSM").send()
		app.lookup("loginCheck").send();
	});
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onLoginCheckSubmitSuccess(e) {
	
}