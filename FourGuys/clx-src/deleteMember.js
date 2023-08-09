/************************************************
 * 3.Dialog_Popup.js
 * Created at 2021. 3. 29. 오후 3:05:35.
 *
 * @author csj
 ************************************************/

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad2(e) {
	var vcDialog = app.getHost();
	if (vcDialog) {
		/*다이얼로그의 initValue 가져오기*/
		var voInitValue = app.getHostProperty("initValue");
		/*해당 값이 Null인지 여부를 체크하여 반환한다. */
		if (voInitValue) {
			/*initValue 내의 msg 값을 아웃풋에 표시*/
			app.lookup("intro1").value = voInitValue["msg"];
		}
	}
}

/*
 * "삭제" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function ondeleteBtnClick(e){
	var deleteBtn = e.control;
	var submission = app.lookup("deleteMember");
	submission.send();
	app.close();
	alert("회원 탈퇴가 완료되었습니다.");
	location.href="";
}

/*
 * "취소" 버튼(cancelBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onCancelBtnClick(e){
	var cancelBtn = e.control;
	app.close();
}
