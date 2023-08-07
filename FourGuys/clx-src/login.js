/*
 * "LOGIN" 버튼(btnLogin)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnLoginClick(e) {
	var btnLogin = e.control;
	memberLogin();
}

function memberLogin() {
	var subLogin = app.lookup("subLogin");
	subLogin.send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSubLoginSubmitSuccess(e) {
	var subLogin = e.control;
	var uri = subLogin.getMetadata("uri");
	if (uri != null) {
	location.href=uri
	}
}

/*
 * 서브미션에서 submit-error 이벤트 발생 시 호출.
 * 통신 중 문제가 생기면 발생합니다.
 */
function onSubLoginSubmitError(e) {
	var subLogin = e.control;
	var msg = subLogin.getMetadata("message");
	if (msg != null) {
		alert(msg);
	}
	app.lookup("idInput").value = "";
	app.lookup("passwordInput").value = "";
}