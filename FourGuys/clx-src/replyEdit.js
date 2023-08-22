/************************************************
 * replyEdit.js
 * Created at 2023. 8. 22. 오전 9:21:26.
 *
 * @author USER
 ************************************************/

/*
 * "수정" 버튼(EditBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onEditBtnClick(e){
	var editBtn = e.control;
	var submission = app.lookup("editReplySM");
	submission.send();
}

/*
 * "취소" 버튼(cancelBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onCancelBtnClick(e){
	var cancelBtn = e.control;
	app.close();
}

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e){
	app.lookup("replyListSM").send();
}
