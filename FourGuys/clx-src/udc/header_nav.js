/************************************************
 * header_nav.js
 * Created at 2023. 8. 4. 오전 9:42:41.
 *
 * @author USER
 ************************************************/

/**
 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
 */
exports.getText = function() {
	return "";
};

/*
 * "플랜 생성" 버튼(create_plan)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onCreate_planClick(e) {
	var create_plan = e.control;
	location.href = "/selectDestinationForm"
}

/*
 * "Login" 버튼(login)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onLoginClick(e) {
	var login = e.control;
	location.href = "/loginForm";
}

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e){
	var subLogin = app.lookup("loginCheck");
	subLogin.send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onLoginCheckSubmitSuccess(e){
	var loginCheck = e.control;
	var vo = loginCheck.getMetadata("memberVO");
	var loginBtn = app.lookup("loginBtn");
	var logoutBtn = app.lookup("logoutBtn");
	var MyPageBtn = app.lookup("myPageBtn");
	if(vo){
		loginBtn.visible = false;
		logoutBtn.visible = true;
		MyPageBtn.visible = true;
	}
}

/*
 * "마이페이지" 버튼(MyPageBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onMyPageBtnClick(e){
	var MyPageBtn = e.control;
	location.href = "mypage";
}
/*
 * "Logout" 버튼(logoutBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onLogoutBtnClick(e){
	var logoutBtn = e.control;
	var subLogout = app.lookup("subLogout");
	subLogout.send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSubLogoutSubmitSuccess(e){
	var subLogout = e.control;
	var uri = subLogout.getMetadata("uri");
	if (uri != null) {
	location.href=uri
	}
}

/*
 * "플래너 게시판" 버튼(boardBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBoardBtnClick2(e){
	var boardBtn = e.control;
	location.href="planner-board-list.clx";
}
