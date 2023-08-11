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
	app.lookup("loginCheck").send();
	app.lookup("searchbtn").click();
	app.openDialog("select_date_title", {
		width: 600,
		height: 450
	}, function(dialog) {
		dialog.ready(function(dialogApp) {});
	}).then(function(returnValue) {
		var plannerNoOutput = app.lookup("plannerNo");
		plannerNoOutput.value = JSON.stringify(returnValue);
		app.lookup("dayBtnSM").send()
	});
}

/*
 * "검색" 버튼(searchbtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onSearchbtnClick(e) {
	var searchbtn = e.control;
	app.lookup("areaList").send();
}

/*
 * 인풋 박스에서 keydown 이벤트 발생 시 호출.
 * 사용자가 키를 누를 때 발생하는 이벤트. 키코드 관련 상수는 {@link cpr.events.KeyCode}에서 참조할 수 있습니다.
 */
function onTitleSearchKeydown(e) {
	var titleSearch = e.control;
	if (e.keyCode == cpr.events.KeyCode.ENTER) {
		var Searchbtn = app.lookup("searchbtn");
		Searchbtn.click();
	}
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onDayBtnSMSubmitSuccess(e) {
	var dayBtnSM = e.control;
	var grid = app.lookup("grd3");
	grid.selectRows([0]);
	app.lookup("planDateOutput").value = 1;
}

/*
 * 그리드에서 cell-click 이벤트 발생 시 호출.
 * Grid의 Cell 클릭시 발생하는 이벤트.
 */
function onGrd3CellClick(e) {
	var grd3 = e.control;
	var grid = app.lookup("grd3");
	var planDate = grid.getSelectedRow().getValue("planDate");
	app.lookup("planDateOutput").value = planDate;
	app.lookup("selectDate").send();
}

/*
 * 그리드에서 row-check 이벤트 발생 시 호출.
 * Grid의 행 선택 컬럼(columnType=checkbox)이 체크 되었을 때 발생하는 이벤트.
 */
function onGrd2RowCheck(e) {
	var grd2 = e.control;
	var grid = app.lookup("grd2");
	var contentId = grid.getSelectedRow().getValue("contentid");
	app.lookup("contentIdOutput").value = contentId;
	app.lookup("createPlan").send();
}

/*
 * 그리드에서 row-uncheck 이벤트 발생 시 호출.
 * Grid의 행 선택 컬럼(columnType=checkbox)이 체크 해제되었을 때 발생하는 이벤트.
 */
function onGrd2RowUncheck(e) {
	var grd2 = e.control;
	var contentId = grd2.getSelectedRow().getValue("contentid");
	app.lookup("contentIdOutput").value = contentId;
	app.lookup("deletePlan").send();
}

/*
 * 서브미션에서 submit-error 이벤트 발생 시 호출.
 * 통신 중 문제가 생기면 발생합니다.
 */
function onLoginCheckSubmitError(e){
	var loginCheck = e.control;
	var message = loginCheck.getMetadata("message");
	alert(message);
	location.href = "loginForm";
}


