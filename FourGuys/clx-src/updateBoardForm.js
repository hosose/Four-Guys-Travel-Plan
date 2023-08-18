/************************************************
 * planner-board-form.js
 * Created at 2023. 8. 16. 오전 11:05:08.
 *
 * @author USER
 ************************************************/

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e) {
	app.lookup("loginCheck").send();
	var currentUrl = location.href;
	var boardNo = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
	app.lookup("plannerBoardNoDM").setValue("BOARD_NO", boardNo);
	app.lookup("boardDetailSM").send();
}

/*
 * 서브미션에서 submit-error 이벤트 발생 시 호출.
 * 통신 중 문제가 생기면 발생합니다.
 */
function onLoginCheckSubmitError(e) {
	var loginCheck = e.control;
	var message = loginCheck.getMetadata("message");
	alert(message);
	location.href = "loginForm";
}

/*
 * 그리드에서 cell-click 이벤트 발생 시 호출.
 * Grid의 Cell 클릭시 발생하는 이벤트.
 */
function onDayGrdCellClick(e) {
	var dayGrd = e.control;
	var planDate = dayGrd.getSelectedRow().getValue("planDate");
	app.lookup("planDateOutput").value = planDate;
	app.lookup("selectDate").send();
}

/*
 * "수정" 버튼(selectBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onSelectBtnClick(e) {
	var selectBtn = e.control;
	app.lookup("updateBoardSM").send();
	location.href="planner-board-list.clx";
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onCreatePlannerBoardSMSubmitSuccess(e) {
	var createPlannerBoardSM = e.control;
	var url = createPlannerBoardSM.getMetadata("url");
	location.href = url;
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onBoardDetailSMSubmitSuccess(e){
	var boardDetailSM = e.control;
	var boardContentValue = app.lookup("boardContentValue");
	boardContentValue.selectRows([0]);
	setTimeout(() => app.lookup("PasteBtn").click(),400);	
}

/*
 * "Button" 버튼(PasteBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onPasteBtnClick(e){
	var pasteBtn = e.control;
	var ep1 = app.lookup("ep1");
	var boardContentValue = app.lookup("boardContentValue");
	var vcIpb = boardContentValue.getSelectedRow().getValue("boardContent");
	if (vcIpb == "" || vcIpb == null) return false;
	ep1.callPageMethod("pasteHTML", vcIpb);
	
}
