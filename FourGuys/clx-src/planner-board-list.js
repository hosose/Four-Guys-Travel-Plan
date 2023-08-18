/************************************************
 * planner-board-list.js
 * Created at 2023. 8. 14. 오전 9:46:20.
 *
 * @author USER
 ************************************************/

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e) {
	app.lookup("plannerBoardListSM").send();
}

/*
 * 그리드에서 row-dblclick 이벤트 발생 시 호출.
 * detail이 row를 더블클릭 한 경우 발생하는 이벤트.
 */
function onPlannerBoardListGridRowDblclick(e) {
	var plannerBoardListGrid = e.control;
	var boardNo = plannerBoardListGrid.getSelectedRow().getValue("boardNo");
	location.href = "boardDetailPage/" + boardNo;
}

/*
 * 서브미션에서 submit-error 이벤트 발생 시 호출.
 * 통신 중 문제가 생기면 발생합니다.
 */
function onPlannerBoardListSMSubmitError(e) {
	var plannerBoardListSM = e.control;
	var message = plannerBoardListSM.getMetadata("message");
	alert(message);
	location.href = "login.clx";
}

function gridPaging() {
	var plannerBoardListGrid = app.lookup("plannerBoardListGrid");
	var pageIdx = app.lookup("pageIdx");
	const rowCount = plannerBoardListGrid.getRowCount();
	pageIdx.redraw();
	var currentPageIndex = pageIdx.currentPageIndex;
	var startRowIndex = (currentPageIndex - 1) * pageIdx.pageRowCount;
	var endRowIndex = currentPageIndex * pageIdx.pageRowCount;
	/* filter 조건을 통해 그리드를 페이징합니다. */
	plannerBoardListGrid.setFilter(startRowIndex + " < RNo && RNo <= " + endRowIndex);
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onPlannerBoardListSMSubmitSuccess(e) {
	var plannerBoardListSM = e.control;
	gridPaging();
}

/*
 * 페이지 인덱서에서 selection-change 이벤트 발생 시 호출.
 * Page index를 선택하여 선택된 페이지가 변경된 후에 발생하는 이벤트.
 */
function onPageIndexerSelectionChange(e) {
	var pageIndexer = e.control;
	gridPaging();
}

/*
 * "글 작성" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e) {
	var button = e.control;
	location.href = "createPlannerBoardForm";
}
